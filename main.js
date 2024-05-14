function pickPeaks(arr){
    let peakObject = {
      pos: [],
      peaks: []
    }
    for (let i = 1; i < arr.length; i++){
      let leftAdjust = 0
      let rightAdjust = 0
      
      while (arr[i - 1 + leftAdjust] == arr[i]){
        leftAdjust--
      }
      while(arr[i + 1 + rightAdjust] == arr[i]){
        rightAdjust++
      }
      if (arr[i - 1 + leftAdjust] < arr[i] && arr[i + 1 + rightAdjust] < arr[i])
        {
          peakObject.pos.push(i)
          peakObject.peaks.push(arr[i])
          i += rightAdjust
        }
    }
    
    return peakObject
  }