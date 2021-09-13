const fragmentSplitter = (file, fragmentSize) => {

    if (file === undefined){
        return []
    }

    if (fragmentSize === undefined){
        fragmentSize = 3
    }

    var fragmentSize = fragmentSize * 1024 * 1024; // coba dari per 100 kb, nanti harusnya dari input yg dikasih
    var fileSize = file.size;
    var totalFragments = Math.ceil(fileSize/fragmentSize,fragmentSize);
    var fragmentTracker = 0;
    var fragments = []
  
    console.log('file size = ',fileSize);
    console.log('total fragment = ',totalFragments);
  
    while (fragmentTracker < totalFragments) {
        var offset = fragmentTracker*fragmentSize;
        console.log('current fragment..', fragmentTracker);
        console.log('offset...', fragmentTracker*fragmentSize);
        console.log('file blob from offset...', offset)
        console.log(file.slice(offset,offset+fragmentSize));
        fragments.push({
          sequenceNumber : fragmentTracker,
          sequenceFile : uploadFile.slice(offset,offset+fragmentSize)
        })
        fragmentTracker++;
    }
    // console.log(fragments)
    return fragments
  }


  exports.module.fragmentSplitter = fragmentSplitter