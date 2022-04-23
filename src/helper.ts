export const CheckWebGPU = () => {
   // Checks if browser supports
   let result = 'Browser supports WebGPU';
   if (!navigator.gpu) {
      result = 'no Support';
   }
   // Checks for canvas and gets width and height and resizes it when the window size is changed
   const canvas = document.getElementById('canvas-webgpu') as HTMLCanvasElement;
   if (canvas) {
      const div = document.getElementsByClassName('item2')[0] as HTMLDivElement;
      if (div) {
         canvas.width = div.offsetWidth;
         canvas.height = div.offsetHeight;

         function windowResize() {
            canvas.width = div.offsetWidth;
            canvas.height = div.offsetHeight;
         };
         window.addEventListener('resize', windowResize);
      }
   }
   return result;
}