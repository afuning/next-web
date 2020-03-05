const ADD_ICON = (x, y, r) => {
  return [
    ['M', x - r, y],
    ['M', x - r + 4, y],
    ['L', x - r + 2 * r - 4, y],
    ['M', x - r + r, y - r + 4],
    ['L', x, y + r - 4],
  ];
};
const nodeBasicMethod = {
  createNodeBox: (group, config, w, h, name,isRoot) => {
    /* 最外面的大矩形 */
    const container = group.addShape('rect', {
      attrs: {
        x: 0,
        y: 0,
        width: w,
        height: h,
        fill: config.bgColor,
      },
      name,
    })
    /* 矩形 */
    group.addShape('rect', {
      attrs: {
        x: 0,
        y: 0,
        width: w,
        height: h,
        fill: config.bgColor,
        stroke: config.borderColor,
        radius: 2,
        cursor: 'pointer',
      },
      name,
    })
    /* 左边的粗线 */
    group.addShape('rect', {
      attrs: {
        x: 0,
        y: 0,
        width: 3,
        height: h,
        fill: config.basicColor,
        radius: 1.5,
      },
      name,
    })

    return container
  },
  /* 生成节点的增加 */
  createNodeAdd: (group, x, y) => {
    group.addShape('circle', {
      attrs: {
        x,
        y,
        r: 13,
        fill: '#5B8FF9',
        cursor: 'pointer'
      },
      name: 'add',
    })
    group.addShape('marker', {
      attrs: {
        x,
        y,
        r: 10,
        symbol: ADD_ICON,
        stroke: '#FFF',
        lineWidth: 1,
        cursor: 'pointer',
      },
      name: 'add',
    })
  }
}

export default nodeBasicMethod