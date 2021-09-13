const fileSplitter = (file, fragmentSize) =>{

    if (file === undefined){
        return []
    }

    if (fragmentSize === undefined){
        fragmentSize = 3
    }

    if (fragmentSize <= 0){ //validasi if someone just want to prank
        return []
    }

    var fragmentSize = fragmentSize * 1024 * 1024;
    var fileSize = file.size;
    var totalFragments = Math.ceil(fileSize/fragmentSize,fragmentSize);
    var fragmentTracker = 0;
    var fragments = []
  
    while (fragmentTracker < totalFragments) {
        var offset = fragmentTracker*fragmentSize;
        fragments.push({
          sequenceNumber : fragmentTracker,
          sequenceFile : file.slice(offset,offset+fragmentSize)
        })
        fragmentTracker++;
    }
    return fragments
  }


  module.exports.fileSplitter = fileSplitter