/*
 * @Author: axu 1342248325@qq.com
 * @Date: 2022-07-04 19:01:48
 * @LastEditors: axu 1342248325@qq.com
 * @LastEditTime: 2022-07-04 20:31:12
 * @FilePath: /my-app/src/pages/three/index.tsx
 * @Description: three
 */

import React,{useEffect} from 'react';
import ThreeDom from '@/components/Three'
 
const  Three:React.FC  = () => {

  useEffect(()=>{
      init()
  },[])

  const init = ()=> {
    // if (!canvasEl) { return }
    const canvaEL:any= document.getElementById('canvas')
    canvaEL.width = window.innerWidth
    canvaEL.height = 500
    let room = new ThreeDom(canvaEL)
    room.loadGLTF('test.glb')
    room.animate()
  }

    return <div className="App">
      <canvas
        id='canvas'
      ></canvas>
    </div>
}

export default Three;

