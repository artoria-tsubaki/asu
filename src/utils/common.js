export function debounce(fn, wait = 1000, immediate) {
    let timer = null
    console.log('进入 debounce');
    return function (...args) {
        if(timer) {
            clearTimeout(timer)
        }
        if(immediate && !timer) {
            fn.apply(this, args)
            immediate = false
        } else {
            timer = setTimeout(() => {
                fn.apply(this, args)
            }, wait)
        }

    }
}

export function throttle(fn, wait) {
    // previous 是上一次执行 fn 的时间
    // timer 是定时器
    let previous = 0, timer = null
    // 将 throttle 处理结果当作函数返回
    return function (...args) {
    // 获取当前时间，转换成时间戳，单位毫秒
    let now = +new Date()
    // ------ 新增部分 start ------ 
    // 判断上次触发的时间和本次触发的时间差是否小于时间间隔
    if (now - previous < wait) {
    // 如果小于，则为本次触发操作设立一个新的定时器
    // 定时器时间结束后执行函数 fn 
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
    previous = now
    fn.apply(this, args)
    }, wait)
    // ------ 新增部分 end ------ 
    } else {
    // 第一次执行
    // 或者时间间隔超出了设定的时间间隔，执行函数 fn
    previous = now
    fn.apply(this, args)
    }
    }
    }

export function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}