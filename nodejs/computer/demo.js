/* const os = require('os')
const getMem = async () => {
    let time = setTimeout(()=>{
        const memory = os.freemem() / os.totalmem() * 100
        console.log(`内存占用率${memory}%`)
        clearTimeout(time)
        getMem()
    },1000)
}
getMem()

const cpuStat = require('cpu-stat')

cpuStat.usagePercent((err,percent)=>{
    const getCpuStat = async ()=>{
        let time = setTimeout(()=>{
            console.log(`cpu占用${percent}`)
            clearTimeout(time)
            getCpuStat()
        },1000) 
    }
    getCpuStat()
}) */

    //输出剩余内存所占百分比
    const os = require('os')
    //使用npm init -y & npm i cpu-stat
    //实时获取cpu使用率
    const cpuStat = require('cpu-stat')
    const systemStat = async () => {
        let time = setTimeout(() => {
            const memory = os.freemem() / os.totalmem() * 100
            console.log( `内存占用率${memory}%` )
            cpuStat.usagePercent((err, percent) => {
                console.log( `cpu占用${percent}` )
            })
            clearTimeout(time)
            getMem()
        }, 1000)

    }
    systemStat()