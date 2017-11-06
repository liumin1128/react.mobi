import request from '../../utils/request';

export default class {
  constructor({ name, defaultQuery }) {
    this.name = name;
    this.defaultQuery = {
      page: 0,
      pageSize: 10,
      ...defaultQuery,
    };
  }
  init = async ({ query }, { getState, dispatch }) => {
    try {
      // const { [this.name]: state } = await getState();
      // let { list = [] } = state;
      // if (list.length === 0) {
      const { data, isEnd } = await request(`${this.name}/list`, { ...this.defaultQuery, ...query });
      // } else {
      //   console.log('列表数据已存在');
      // }
      console.log('data');
      console.log(data);
      await dispatch({ type: `${this.name}/save`, payload: { list: data, isEnd } });
    } catch (error) {
      console.log(error);
    }
  }
  more = async ({ query }, { getState, dispatch }) => {
    try {
      const { pageSize } = this.defaultQuery;
      const { [this.name]: state } = await getState();
      const { list = [], isEnd: oldIsEnd } = state;
      if (oldIsEnd) {
        console.log('都没了还加载什么更多');
        return;
      }
      const page = (list.length / pageSize) + 1;
      const { data, isEnd } = await request(`${this.name}/list`, { page, pageSize });
      await dispatch({ type: `${this.name}/save`, payload: { list: list.concat(data), isEnd } });
    } catch (error) {
      console.log(error);
    }
  }
  detail = async ({ query }, { dispatch, getState }) => {
    try {
      const { [this.name]: state } = await getState();
      console.log('state');
      console.log(state);
      const { list = [] } = state;
      let temp = list.find(i => i._id === query.id);
      if (!temp) {
        const { data } = await request(`${this.name}/detail`, query);
        temp = data;
      } else {
        console.log('详情数据已存在');
      }
      await dispatch({ type: `${this.name}/save`, payload: { detail: temp } });
    } catch (error) {
      console.log(error);
    }
  }
}