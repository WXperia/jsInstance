var option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    series: [
        {
            name:'通过情况',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:679, name:'正常通过'},
                {value:1548, name:'异常通过'}
            ]
        },
        {
            name:'异常通过',
            type:'pie',
            radius: ['45%', '60%'],
            label: {
                normal: {
                    formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                    backgroundColor: 'rgba(0,0,0,0.1)',
                    borderColor: '#aaa',
                    borderWidth: 1,
                    borderRadius: 4,
                    // shadowBlur:3,
                    // shadowOffsetX: 2,
                    // shadowOffsetY: 2,
                    // shadowColor: '#999',
                    padding: [0, 0],
                    rich: {
                        // a: {
                        //     color: '#999',
                        //     lineHeight: 22,
                        //     align: 'center'
                        // },
                        // abg: {
                        //     backgroundColor: 'rgba(0,0,0,0.1)',
                        //     width: '100%',
                        //     align: 'right',
                        //     height: 22,
                        //     borderRadius: [4, 4, 0, 0]
                        // },
                        hr: {
                            borderColor: 'rgba(0,0,0,0.1)',
                            width: '100%',
                            borderWidth: 0.5,
                            height: 0
                        },
                        b: {
                            fontSize: 16,
                            lineHeight: 33
                        },
                        per: {
                            color: '#eee',
                            backgroundColor: 'rgba(0,0,0,0.1)',
                            padding: [2, 4],
                            borderRadius: 2
                        }
                    }
                }
            },
            data:[
                {value:335, name:'工具刀枪类'},
                {value:310, name:'马口铁罐体类'},
                {value:234, name:'铝制易拉罐体类 '},
                {value:135, name:'异常物品类'},
                {value:1048, name:'铜制铝制管类'},
                {value:251, name:'手机(非铝壳)'},
                {value:147, name:'手机(铝壳)'},
                {value:102, name:'手机/手表类'},
                {value:102, name:'金属探测模式'}
            ]
        }
    ]
};