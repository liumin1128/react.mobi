import React from 'react';
import { PureComponent, PropTypes } from '../../utils/';

export default class Input extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      placeholder: props.placeholder,
    };
  }
  componentWillReceiveProps(...props) {
    this.setState({
      ...props,
    });
  }
  handleKeyUp(e) {
    const { onSearch, onKeyUp } = this.props;
    if (e.key === 'Enter') {
      onSearch(e, e.target.value);
    }
    onKeyUp(e);
  }
  // Input-Number 等其它组件使用的方法
  // focus() {
  //   setTimeout(() => {
  //     (this.refs.input || this.refs.textarea).focus();
  //   });
  // }
  // blur() {
  //   setTimeout(() => {
  //     (this.refs.input || this.refs.textarea).blur();
  //   });
  // }
  handleChange(e) {
    const { onChange, length } = this.props;
    let val = e.target.value;
    if (val.length > length) {
      val = val.slice(0, length);
      e.target.value = val;
    }
    this.setState({ value: val });
    onChange(e, val);
  }
  handleClick(type, e) {
    if (this.props[type]) {
      this.props[type](e, this.state.value);
    }
  }
  render() {
    const {
      prefixCls, className, style, type, size, length, preIcon, icon, value,
      onIconClick,
      onPreIconClick,
      onIconMouseOut,
      onPreIconMouseOut,
      onIconMouseOver,
      onPreIconMouseOver,
      ...other
    } = this.props;
    // const cls = this.classNames(`${prefixCls}`, className, {
    //   textarea: type === 'textarea',
    //   'w-disabled': this.props.disabled,
    // });

    delete other.onSearch;
    // delete other.onChange;

    if (type === 'textarea') {
      return (
        <textarea
          // className={this.classNames(cls, `${prefixCls}-inner`)}
          {...other}
          value={value}
          placeholder={!value ? this.state.placeholder : ''}
          ref="textarea"
          type={type}
          style={style}
          onChange={this.handleChange.bind(this)}
        />
      );
    }

    return (
      <div
        style={style}
    //     className={
    //   //     this.classNames(cls, {
    //   //   [`${prefixCls}-${size}`]: size,
    //   //   [`${prefixCls}-icon`]: preIcon || icon,
    //   // })
    // }
      >
        {preIcon && this.renderIcon.bind(this)('preIcon')}
        {icon && this.renderIcon.bind(this)('icon')}
        <input
          {...other}
          ref="input"
          type={type}
          // className={this.classNames(`${prefixCls}-inner`, {
          //   [`${prefixCls}-p-left`]: preIcon,
          //   [`${prefixCls}-p-right`]: icon,
          // })}
          value={value}
          placeholder={!value ? this.state.placeholder : ''}
          onChange={this.handleChange.bind(this)}
          onKeyUp={this.handleKeyUp.bind(this)}
        />
      </div>
    );
  }
}

Input.propTypes = {
  prefixCls: PropTypes.string,
  type: PropTypes.string,
  autoComplete: PropTypes.string,
  // size: PropTypes.oneOf(['large', 'small', 'mini']),
  // length: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  // icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  // preIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
  onKeyUp: PropTypes.func,
};

Input.defaultProps = {
  prefixCls: 'w-input',
  type: 'text',
  autoComplete: 'off',
  onChange() { },
  onSearch() { },
  onKeyUp() { },
};
