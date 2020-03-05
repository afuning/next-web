import G6 from '@antv/g6'
import nodeBasicMethod from './g6-components/basic-card'
const colorMap = {
  '凭证开立': '#72CC4A',
  '凭证转让': '#1A91FF',
  '凭证融资': '#FFAA15'
}
// 正常node颜色
const primaryType = {
  basicColor: '#5B8FF9',
  fontColor: '#5B8FF9',
  borderColor: '#5B8FF9',
  bgColor: '#C6E5FF'
}

const nodeTypeMap = {
  'primary': primaryType
}

const createNodeConfig = (nodeType = 'primary') => {
  return {...nodeTypeMap[nodeType]}
}

G6.registerNode('card-node', {
    drawShape: function drawShape(cfg, group) {
      const width = cfg.style.width
      const height = cfg.style.height
      const config = createNodeConfig(cfg.nodeType)
      const name = 'card'
      const container = nodeBasicMethod.createNodeBox(group, config, width, height, name)
      // 增加文字
      group.addShape('text', {
        // attrs: style
        attrs: {
          x: 20, // 居中
          y: 20,
          fontSize: 14,
          fontWeight: 700,
          textAlign: 'left',
          textBaseline: 'middle',
          text: cfg.title,
          fill: config.fontColor,
          cursor: 'pointer',
        },
        // must be assigned in G6 3.3 and later versions. it can be any value you want
        name,
      })
      group.addShape('text', {
        // attrs: style
        attrs: {
          x: 20, // 居中
          y: 40,
          fontSize: 14,
          textAlign: 'left',
          textBaseline: 'middle',
          text: cfg.label,
          fill: config.fontColor,
          cursor: 'pointer',
        },
        // must be assigned in G6 3.3 and later versions. it can be any value you want
        name
      })
      nodeBasicMethod.createNodeAdd(group, width / 2, height + 20);
      return container
    },
    getAnchorPoints() {
      return [
        [0.5, 0], // 左侧中间
        [0.5, 1], // 右侧中间
      ];
    }
  }
);

// G6.registerNode('add', {
//   drawShape: function drawShape(cfg, group) {
//     const width = cfg.style.width;
//     const height = cfg.style.height;
//     const stroke = cfg.style.stroke;
//     const circle = group.addShape('rect', {
//       attrs: {
//         x: -width / 2,
//         y: 0,
//         width,
//         height: 60,
//         stroke,
//         lineWidth: 0,
//         fillOpacity: 1,
//         fill: '#fff',
//         radius: 4
//       }
//     })
//     return rect1;
//   },
//   getAnchorPoints: function getAnchorPoints() {
//     return [[0.5, 0], [0.5, 1]];
//   },
//   update: function (cfg, item) {
//     const group = item.getContainer()
//     const children = group.get('children')
//     const node = children[0]

//     const {style: {stroke}} = cfg

//     if (stroke) {
//       node.attr('stroke', stroke)
//     }
//   }
// }
// );

G6.registerEdge('polyline', {
  itemType: 'edge',
  draw: function draw(cfg, group) {
    const startPoint = cfg.startPoint;
    const endPoint = cfg.endPoint;

    const Xdiff = endPoint.x - startPoint.x
    // const Ydiff = endPoint.y - startPoint.y;

    const slope = Xdiff !== 0 ? 500 / Math.abs(Xdiff) : 0;
    // const slope = Ydiff !== 0 ? 500 / Math.abs(Ydiff) : 0;

    const cpOffset = 16;

    const offset = Xdiff < 0 ? cpOffset : -cpOffset;
    // const offset = Ydiff < 0 ? cpOffset : -cpOffset;
    const line0EndPoint = {
      x: startPoint.x,
      y: startPoint.y + 50
    };
    // const line1EndPoint = {
    //   x: startPoint.x + slope,
    //   y: endPoint.y + offset
    // };
    const line1EndPoint = {
      x: endPoint.x + offset,
      y: line0EndPoint.y
    };
    // const line2StartPoint = {
    //   x: line1EndPoint.x + cpOffset,
    //   y: endPoint.y
    // };
    const line2StartPoint = {
      x: endPoint.x,
      y: line1EndPoint.y + cpOffset
    };

    // 控制点坐标
    // const controlPoint = {
    //   x: 
    //   ((line1EndPoint.x - startPoint.x) * (endPoint.y - startPoint.y)) /
    //   (line1EndPoint.y - startPoint.y) +
    //   startPoint.x,
    //   y: endPoint.y
    // };

    const controlPoint = {
      x: endPoint.x,
      y: ((line1EndPoint.y - startPoint.y) * (endPoint.x - startPoint.x)) /
      (line1EndPoint.x - startPoint.x) +
      startPoint.y,
    };

    let path = [
      ['M', startPoint.x, startPoint.y],
      ['L', line0EndPoint.x, line0EndPoint.y],
      ['L', line1EndPoint.x, line1EndPoint.y],
      // [
      //   'Q',
      //   controlPoint.x,
      //   controlPoint.y,
      //   line2StartPoint.x,
      //   line2StartPoint.y
      // ],
      ['L', endPoint.x, endPoint.y]
    ];

    if (Xdiff === 0) {
      path = [
        ['M', startPoint.x, startPoint.y],
        ['L', endPoint.x, endPoint.y]
      ];
    }

    const line = group.addShape('path', {
      attrs: {
        path,
        stroke: '#cacaca',
        lineWidth: 1.2,
        endArrow: {
          path: 'M 4,0 L -4,-4 L -4,4 Z',
          d: 4,
        }
      }
    });

    // const labelLeftOffset = 8;
    // const labelTopOffset = 8;
    // amount
    // const amount = group.addShape('text', {
    //   attrs: {
    //     text: cfg.data.amount,
    //     x: line2StartPoint.x + labelLeftOffset,
    //     y: endPoint.y - labelTopOffset - 2,
    //     fontSize: 14,
    //     textAlign: 'left',
    //     textBaseline: 'middle',
    //     fill: '#000000D9'
    //   }
    // });
    // // type
    // const type = group.addShape('text', {
    //   attrs: {
    //     text: cfg.data.type,
    //     x: line2StartPoint.x + labelLeftOffset,
    //     y: endPoint.y - labelTopOffset - amount.getBBox().height - 2,
    //     fontSize: 10,
    //     textAlign: 'left',
    //     textBaseline: 'middle',
    //     fill: '#000000D9'
    //   }
    // });
    // // date
    // const date = group.addShape('text', {
    //   attrs: {
    //     text: cfg.data.date,
    //     x: line2StartPoint.x + labelLeftOffset,
    //     y: endPoint.y + labelTopOffset + 4,
    //     fontSize: 12,
    //     fontWeight: 300,
    //     textAlign: 'left',
    //     textBaseline: 'middle',
    //     fill: '#000000D9'
    //   }
    // });
    return line;
  }
});