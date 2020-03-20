import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import TextField from '@/components/Form/TextField';
import Picture from '@/components/Form/Upload/Picture';
import Switch from '@/components/Form/Field/Switch';
import Checkbox from '@/components/Form/Field/Checkbox';
import pp from '@/hoc/pp';

export default [
  {
    key: 'cover',
    label: '文章封面',
    // required: true,
    component: pp(Picture, { style: { width: 16 * 15, height: 9 * 15 } }),
    fullWidth: true,
  },
  {
    key: 'title',
    label: '文章标题',
    required: true,
    fullWidth: true,
    component: TextField,
  },
  {
    key: 'description',
    label: '描述',
    fullWidth: true,
    required: true,
    multiline: true,
    rows: 3,
    component: TextField,
    variant: 'outlined',
  },
  {
    key: 'type',
    label: '分类',
    fullWidth: true,
    // required: true,
    component: TextField,
  },
  {
    key: 'tags',
    label: '标签',
    // required: true,
    fullWidth: true,
    component: TextField,
  },
  {
    render: () => <Box py={2} key={'xxx'}><Divider /></Box>,
  },
  {
    disabled: true,
    key: 'allowComment',
    label: '是否允许评论',
    component: Switch,
    type: 'boolean',
  },
  {
    disabled: true,

    key: 'needComment',
    label: '是否设置回复可见',
    component: Switch,
    type: 'boolean',
  },
  {
    disabled: true,
    // required: true,
    key: 'dynamic',
    label: '同时转发到动态',
    component: Checkbox,
  },
  // {
  //   fullWidth: true,
  //   key: 'time1',
  //   label: '定时发布',
  //   component: TextField,
  // },
];
