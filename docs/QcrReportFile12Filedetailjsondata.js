{
  "_lesSequences" : [ {
    "_id" : "1",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "9",
      "_source" : "java.io.InputStream.read@POLYN245566.0",
      "_method" : "---dummymethode in line [00168]",
      "_target" : "java.io.InputStream.read@POLYN245566.return",
      "_risk" : "//QC-JAVCWZ099[00168] In java.io.InputStream.read@POLYN245566[00168] source data PATHtainted (java.io.InputStream.read)"
    }, {
      "_id" : "8",
      "_source" : "java.io.InputStream.read@POLYN245566.return",
      "_method" : "---java.io.InputStream.read@POLYN245566 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN872661.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN872661[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN872661.nbytes",
      "_method" : "---dummymethode in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN872661.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN872661.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN872661 in line [03031]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889026.nread",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889026.nread",
      "_method" : "---dummymethode in line [03029]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889026.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889026.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889026 in line [00893]",
      "_target" : "java.io.ObjectInputStream.read@POLYN803760.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.read@POLYN803760.return",
      "_method" : "---java.io.ObjectInputStream.read@POLYN803760 in line [03091]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN892679.v",
      "_risk" : "//QC-JAVCWZ099[03091] In java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN892679[03091] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN892679.v",
      "_method" : "---dummymethode in line [03095]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN892679.return",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN892679.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN892679 in line [00979]",
      "_target" : "java.io.ObjectInputStream.readUnsignedByte@POLYN806523.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "2",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "9",
      "_source" : "java.io.InputStream.read@POLYN245566.-1",
      "_method" : "---dummymethode in line [00173]",
      "_target" : "java.io.InputStream.read@POLYN245566.return",
      "_risk" : "//QC-JAVCWZ099[00173] In java.io.InputStream.read@POLYN245566[00173] source data PATHtainted (java.io.InputStream.read)"
    }, {
      "_id" : "8",
      "_source" : "java.io.InputStream.read@POLYN245566.return",
      "_method" : "---java.io.InputStream.read@POLYN245566 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN872661.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN872661[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN872661.nbytes",
      "_method" : "---dummymethode in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN872661.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN872661.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN872661 in line [03031]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889026.nread",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889026.nread",
      "_method" : "---dummymethode in line [03029]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889026.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889026.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889026 in line [00893]",
      "_target" : "java.io.ObjectInputStream.read@POLYN803760.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.read@POLYN803760.return",
      "_method" : "---java.io.ObjectInputStream.read@POLYN803760 in line [03091]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN892679.v",
      "_risk" : "//QC-JAVCWZ099[03091] In java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN892679[03091] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN892679.v",
      "_method" : "---dummymethode in line [03095]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN892679.return",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN892679.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN892679 in line [00979]",
      "_target" : "java.io.ObjectInputStream.readUnsignedByte@POLYN806523.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "3",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "10",
      "_source" : "1",
      "_method" : "---dummymethode in line [00177]",
      "_target" : "java.io.InputStream.read@POLYN245566.i",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.io.InputStream.read@POLYN245566.i",
      "_method" : "---dummymethode in line [00188]",
      "_target" : "java.io.InputStream.read@POLYN245566.return",
      "_risk" : "//QC-JAVCWE099[00188] In java.io.InputStream.read@POLYN245566[00188] source data PATHtainted (java.io.InputStream.read)"
    }, {
      "_id" : "8",
      "_source" : "java.io.InputStream.read@POLYN245566.return",
      "_method" : "---java.io.InputStream.read@POLYN245566 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN872661.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN872661[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN872661.nbytes",
      "_method" : "---dummymethode in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN872661.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN872661.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN872661 in line [03031]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889026.nread",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889026.nread",
      "_method" : "---dummymethode in line [03029]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889026.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889026.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889026 in line [00893]",
      "_target" : "java.io.ObjectInputStream.read@POLYN803760.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.read@POLYN803760.return",
      "_method" : "---java.io.ObjectInputStream.read@POLYN803760 in line [03091]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN892679.v",
      "_risk" : "//QC-JAVCWZ099[03091] In java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN892679[03091] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN892679.v",
      "_method" : "---dummymethode in line [03095]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN892679.return",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN892679.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN892679 in line [00979]",
      "_target" : "java.io.ObjectInputStream.readUnsignedByte@POLYN806523.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "4",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.lang.Object.toString@POLYN292446.return",
      "_method" : "---java.lang.Object.toString@POLYN292446 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN908831.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN908831.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN908831 in line [03183]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN897574.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN897574.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN897574 in line [01124]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN810773.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN810773.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN810773 in line [01863]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN838934.str",
      "_risk" : "//QC-JAVCWZ099[01863] In java.io.ObjectInputStream.readString@POLYN838934[01863] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readString@POLYN838934.str",
      "_method" : "---dummymethode in line [01876]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN838934.return",
      "_risk" : "//QC-JAVCWZ099[01876] In java.io.ObjectInputStream.readString@POLYN838934[01876] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readString@POLYN838934.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN838934 in line [01963]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN844243.name",
      "_risk" : "//QC-JAVCWZ099[01963] In java.io.ObjectInputStream.readEnum@POLYN844243[01963] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "5",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readNull@POLYN829619.null",
      "_method" : "---dummymethode in line [01635]",
      "_target" : "java.io.ObjectInputStream.readNull@POLYN829619.return",
      "_risk" : "//QC-JAVCWZ099[01635] In java.io.ObjectInputStream.readNull@POLYN829619[01635] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readNull@POLYN829619.return",
      "_method" : "---java.io.ObjectInputStream.readNull@POLYN829619 in line [01512]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN824106.return",
      "_risk" : "//QC-JAVCWZ099[01512] In java.io.ObjectInputStream.readObject0@POLYN824106[01512] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN824106.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN824106 in line [00422]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN786594.obj",
      "_risk" : "//QC-JAVCWZ099[00422] In java.io.ObjectInputStream.readObject@POLYN786594[00422] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN786594.obj",
      "_method" : "---dummymethode in line [00431]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN786594.return",
      "_risk" : "//QC-JAVCWZ099[00431] In java.io.ObjectInputStream.readObject@POLYN786594[00431] source data PATHtainted (java.io.ObjectInputStream.read)"
    } ]
  }, {
    "_id" : "6",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.HandleTable.lookupObject@POLYN924716.return",
      "_method" : "---java.io.ObjectInputStream.HandleTable.lookupObject@POLYN924716 in line [01658]",
      "_target" : "java.io.ObjectInputStream.readHandle@POLYN830005.obj",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readHandle@POLYN830005.obj",
      "_method" : "---dummymethode in line [01665]",
      "_target" : "java.io.ObjectInputStream.readHandle@POLYN830005.return",
      "_risk" : "//QC-JAVCWZ099[01665] In java.io.ObjectInputStream.readHandle@POLYN830005[01665] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readHandle@POLYN830005.return",
      "_method" : "---java.io.ObjectInputStream.readHandle@POLYN830005 in line [01515]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN824106.return",
      "_risk" : "//QC-JAVCWZ099[01515] In java.io.ObjectInputStream.readObject0@POLYN824106[01515] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN824106.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN824106 in line [00422]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN786594.obj",
      "_risk" : "//QC-JAVCWZ099[00422] In java.io.ObjectInputStream.readObject@POLYN786594[00422] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN786594.obj",
      "_method" : "---dummymethode in line [00431]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN786594.return",
      "_risk" : "//QC-JAVCWZ099[00431] In java.io.ObjectInputStream.readObject@POLYN786594[00431] source data PATHtainted (java.io.ObjectInputStream.read)"
    } ]
  }, {
    "_id" : "7",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readClass@POLYN831303.cl",
      "_method" : "---dummymethode in line [01688]",
      "_target" : "java.io.ObjectInputStream.readClass@POLYN831303.return",
      "_risk" : "//QC-JAVCWZ099[01688] In java.io.ObjectInputStream.readClass@POLYN831303[01688] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readClass@POLYN831303.return",
      "_method" : "---java.io.ObjectInputStream.readClass@POLYN831303 in line [01518]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN824106.return",
      "_risk" : "//QC-JAVCWZ099[01518] In java.io.ObjectInputStream.readObject0@POLYN824106[01518] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN824106.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN824106 in line [00422]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN786594.obj",
      "_risk" : "//QC-JAVCWZ099[00422] In java.io.ObjectInputStream.readObject@POLYN786594[00422] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN786594.obj",
      "_method" : "---dummymethode in line [00431]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN786594.return",
      "_risk" : "//QC-JAVCWZ099[00431] In java.io.ObjectInputStream.readObject@POLYN786594[00431] source data PATHtainted (java.io.ObjectInputStream.read)"
    } ]
  }, {
    "_id" : "8",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN833833.desc",
      "_method" : "---dummymethode in line [01793]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN833833.return",
      "_risk" : "//QC-JAVCWZ099[01793] In java.io.ObjectInputStream.readProxyDesc@POLYN833833[01793] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN833833.return",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN833833 in line [01710]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN832372.descriptor",
      "_risk" : "//QC-JAVCWZ099[01710] In java.io.ObjectInputStream.readClassDesc@POLYN832372[01710] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN832372.descriptor",
      "_method" : "---dummymethode in line [01722]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN832372.return",
      "_risk" : "//QC-JAVCWZ099[01722] In java.io.ObjectInputStream.readClassDesc@POLYN832372[01722] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN832372.return",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN832372 in line [01522]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN824106.return",
      "_risk" : "//QC-JAVCWZ099[01522] In java.io.ObjectInputStream.readObject0@POLYN824106[01522] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN824106.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN824106 in line [00422]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN786594.obj",
      "_risk" : "//QC-JAVCWZ099[00422] In java.io.ObjectInputStream.readObject@POLYN786594[00422] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN786594.obj",
      "_method" : "---dummymethode in line [00431]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN786594.return",
      "_risk" : "//QC-JAVCWZ099[00431] In java.io.ObjectInputStream.readObject@POLYN786594[00431] source data PATHtainted (java.io.ObjectInputStream.read)"
    } ]
  }, {
    "_id" : "9",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN836663.desc",
      "_method" : "---dummymethode in line [01851]",
      "_target" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN836663.return",
      "_risk" : "//QC-JAVCWZ099[01851] In java.io.ObjectInputStream.readNonProxyDesc@POLYN836663[01851] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN836663.return",
      "_method" : "---java.io.ObjectInputStream.readNonProxyDesc@POLYN836663 in line [01713]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN832372.descriptor",
      "_risk" : "//QC-JAVCWZ099[01713] In java.io.ObjectInputStream.readClassDesc@POLYN832372[01713] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN832372.descriptor",
      "_method" : "---dummymethode in line [01722]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN832372.return",
      "_risk" : "//QC-JAVCWZ099[01722] In java.io.ObjectInputStream.readClassDesc@POLYN832372[01722] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN832372.return",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN832372 in line [01522]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN824106.return",
      "_risk" : "//QC-JAVCWZ099[01522] In java.io.ObjectInputStream.readObject0@POLYN824106[01522] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN824106.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN824106 in line [00422]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN786594.obj",
      "_risk" : "//QC-JAVCWZ099[00422] In java.io.ObjectInputStream.readObject@POLYN786594[00422] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN786594.obj",
      "_method" : "---dummymethode in line [00431]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN786594.return",
      "_risk" : "//QC-JAVCWZ099[00431] In java.io.ObjectInputStream.readObject@POLYN786594[00431] source data PATHtainted (java.io.ObjectInputStream.read)"
    } ]
  }, {
    "_id" : "10",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN591940.objs[i]",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN581909 in line [01378]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.obj",
      "_risk" : "//QC-JAVCWZ099[01378] In java.io.ObjectOutputStream.writeArray@POLYN591940[01378] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN581909[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN600312 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN600312.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN600312.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN602155 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN602155.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "11",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN557421.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN604563 in line [00351]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN604563.ex",
      "_risk" : "//QC-JAVCWZ099[00351] In java.io.ObjectOutputStream.writeObject@POLYN557421[00351] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN604563.ex",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN581909 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.obj",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN604563[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN581909[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN600312 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN600312.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN600312.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN602155 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN602155.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "12",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN559639.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN604563 in line [00418]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN604563.ex",
      "_risk" : "//QC-JAVCWZ099[00418] In java.io.ObjectOutputStream.writeUnshared@POLYN559639[00418] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN604563.ex",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN581909 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.obj",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN604563[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN581909[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN600312 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN600312.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN600312.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN602155 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN602155.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "13",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN565690.obj",
      "_method" : "---dummymethode in line [00588]",
      "_target" : "java.io.ObjectOutputStream.replaceObject@POLYN565690.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN565690.return",
      "_method" : "---java.io.ObjectOutputStream.replaceObject@POLYN565690 in line [01144]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.rep",
      "_risk" : "//QC-JAVCWZ099[01144] In java.io.ObjectOutputStream.writeObject0@POLYN581909[01144] target data PATHtainted (java.io.ObjectOutputStream.write)"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.rep",
      "_method" : "---dummymethode in line [01149]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.obj",
      "_risk" : "//QC-JAVCWZ099[01149] In java.io.ObjectOutputStream.writeObject0@POLYN581909[01149] target data PATHtainted (java.io.ObjectOutputStream.write)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN581909[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN600312 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN600312.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN600312.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN602155 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN602155.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "14",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.lang.StringBuilder.writeObject@POLYN236013.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN557421 in line [00465]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN557421.obj",
      "_risk" : "//QC-JAVCWZ099[00465] In java.lang.StringBuilder.writeObject@POLYN236013[00465] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN557421.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN581909 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.obj",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN557421[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN581909[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN600312 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN600312.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN600312.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN602155 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN602155.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "15",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN559639.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN581909 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.obj",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN559639[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN581909[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN600312 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN600312.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN600312.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN602155 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN602155.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "16",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "s==null",
      "_method" : "---dummymethode in line [00666]",
      "_target" : "java.io.PrintStream.print@POLYN364836.s",
      "_risk" : "//QC-JAVCWE099[00666] In java.io.PrintStream.print@POLYN364836[00666] target data PATHtainted (java.io.PrintStream.print)"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.print@POLYN364836.s",
      "_method" : "---java.io.PrintStream.write@POLYN359645 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN359645.s",
      "_risk" : "//QC-JAVCWE099[00669] In java.io.PrintStream.print@POLYN364836[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.write@POLYN359645.s",
      "_method" : "---java.io.Writer.write@POLYN191116 in line [00525]",
      "_target" : "java.io.Writer.write@POLYN191116.str",
      "_risk" : "//QC-JAVCWE099[00525] In java.io.PrintStream.write@POLYN359645[00525] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "17",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "\"null\"",
      "_method" : "---dummymethode in line [00667]",
      "_target" : "java.io.PrintStream.print@POLYN364836.s",
      "_risk" : "//QC-JAVCWE099[00667] In java.io.PrintStream.print@POLYN364836[00667] target data PATHtainted (java.io.PrintStream.print)"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.print@POLYN364836.s",
      "_method" : "---java.io.PrintStream.write@POLYN359645 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN359645.s",
      "_risk" : "//QC-JAVCWE099[00669] In java.io.PrintStream.print@POLYN364836[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.write@POLYN359645.s",
      "_method" : "---java.io.Writer.write@POLYN191116 in line [00525]",
      "_target" : "java.io.Writer.write@POLYN191116.str",
      "_risk" : "//QC-JAVCWE099[00525] In java.io.PrintStream.write@POLYN359645[00525] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "18",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN153352.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN369285 in line [00067]",
      "_target" : "java.io.PrintStream.println@POLYN369285.x",
      "_risk" : "//QC-JAVCWE099[00067] In org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN153352[00067] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.println@POLYN369285.x",
      "_method" : "---java.io.PrintStream.print@POLYN364836 in line [00806]",
      "_target" : "java.io.PrintStream.print@POLYN364836.s",
      "_risk" : "//QC-JAVCWE099[00806] In java.io.PrintStream.println@POLYN369285[00806] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.print@POLYN364836.s",
      "_method" : "---java.io.PrintStream.write@POLYN359645 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN359645.s",
      "_risk" : "//QC-JAVCWE099[00669] In java.io.PrintStream.print@POLYN364836[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.write@POLYN359645.s",
      "_method" : "---java.io.Writer.write@POLYN191116 in line [00525]",
      "_target" : "java.io.Writer.write@POLYN191116.str",
      "_risk" : "//QC-JAVCWE099[00525] In java.io.PrintStream.write@POLYN359645[00525] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "19",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN162992.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN369285 in line [00081]",
      "_target" : "java.io.PrintStream.println@POLYN369285.x",
      "_risk" : "//QC-JAVCWE099[00081] In org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN162992[00081] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.println@POLYN369285.x",
      "_method" : "---java.io.PrintStream.print@POLYN364836 in line [00806]",
      "_target" : "java.io.PrintStream.print@POLYN364836.s",
      "_risk" : "//QC-JAVCWE099[00806] In java.io.PrintStream.println@POLYN369285[00806] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.print@POLYN364836.s",
      "_method" : "---java.io.PrintStream.write@POLYN359645 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN359645.s",
      "_risk" : "//QC-JAVCWE099[00669] In java.io.PrintStream.print@POLYN364836[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.write@POLYN359645.s",
      "_method" : "---java.io.Writer.write@POLYN191116 in line [00525]",
      "_target" : "java.io.Writer.write@POLYN191116.str",
      "_risk" : "//QC-JAVCWE099[00525] In java.io.PrintStream.write@POLYN359645[00525] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "20",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.desc",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN591940 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN591940.desc",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN581909[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN591940.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN587426 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN587426.desc",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN591940[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN587426.desc",
      "_method" : "---java.io.ObjectOutputStream.writeNonProxyDesc@POLYN589917 in line [01231]",
      "_target" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN589917.desc",
      "_risk" : "//QC-JAVCWZ099[01231] In java.io.ObjectOutputStream.writeClassDesc@POLYN587426[01231] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN589917.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDescriptor@POLYN568160 in line [01282]",
      "_target" : "java.io.ObjectOutputStream.writeClassDescriptor@POLYN568160.desc",
      "_risk" : "//QC-JAVCWZ099[01282] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN589917[01282] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "21",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN349813.x",
      "_method" : "---java.io.PrintWriter.print@POLYN345101 in line [00655]",
      "_target" : "java.io.PrintWriter.print@POLYN345101.c",
      "_risk" : "//QC-JAVCWZ099[00655] In java.io.PrintWriter.println@POLYN349813[00655] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN345101.c",
      "_method" : "---java.io.PrintWriter.write@POLYN343572 in line [00517]",
      "_target" : "java.io.PrintWriter.write@POLYN343572.s",
      "_risk" : "//QC-JAVCWZ099[00517] In java.io.PrintWriter.print@POLYN345101[00517] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "22",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "org.apache.kafka.shell.FindCommandHandler.find@POLYN156296.path",
      "_method" : "---java.io.PrintWriter.println@POLYN352591 in line [00098]",
      "_target" : "java.io.PrintWriter.println@POLYN352591.x",
      "_risk" : "//QC-JAVCWE099[00098] In org.apache.kafka.shell.FindCommandHandler.find@POLYN156296[00098] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN352591.x",
      "_method" : "---java.io.PrintWriter.print@POLYN348071 in line [00739]",
      "_target" : "java.io.PrintWriter.print@POLYN348071.s",
      "_risk" : "//QC-JAVCWE099[00739] In java.io.PrintWriter.println@POLYN352591[00739] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN348071.s",
      "_method" : "---java.io.PrintWriter.write@POLYN343572 in line [00603]",
      "_target" : "java.io.PrintWriter.write@POLYN343572.s",
      "_risk" : "//QC-JAVCWE099[00603] In java.io.PrintWriter.print@POLYN348071[00603] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "23",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.shell.LsCommandHandler.printTargets@POLYN187354.\"\"",
      "_method" : "---org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN188703 in line [00136]",
      "_target" : "org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN188703.intro",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN188703.intro",
      "_method" : "---java.io.PrintWriter.println@POLYN352591 in line [00162]",
      "_target" : "java.io.PrintWriter.println@POLYN352591.x",
      "_risk" : "//QC-JAVCWE099[00162] In org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN188703[00162] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN352591.x",
      "_method" : "---java.io.PrintWriter.print@POLYN348071 in line [00739]",
      "_target" : "java.io.PrintWriter.print@POLYN348071.s",
      "_risk" : "//QC-JAVCWE099[00739] In java.io.PrintWriter.println@POLYN352591[00739] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN348071.s",
      "_method" : "---java.io.PrintWriter.write@POLYN343572 in line [00603]",
      "_target" : "java.io.PrintWriter.write@POLYN343572.s",
      "_risk" : "//QC-JAVCWE099[00603] In java.io.PrintWriter.print@POLYN348071[00603] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "24",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.io.Reader.read@POLYN183509.return",
      "_method" : "---java.io.Reader.read@POLYN183509 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN233071.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN233071[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN233071.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN233071 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN236277.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN236277[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read@POLYN236277.n",
      "_method" : "---dummymethode in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN236277.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN236277[00287] source data PATHtainted (java.io.BufferedReader.read)"
    } ]
  }, {
    "_id" : "25",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.io.PrintStream.println@POLYN368827.x",
      "_method" : "---java.io.PrintStream.print@POLYN364372 in line [00792]",
      "_target" : "java.io.PrintStream.print@POLYN364372.s",
      "_risk" : "//QC-JAVCWZ099[00792] In java.io.PrintStream.println@POLYN368827[00792] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.print@POLYN364372.s",
      "_method" : "---java.io.PrintStream.write@POLYN358727 in line [00653]",
      "_target" : "java.io.PrintStream.write@POLYN358727.buf",
      "_risk" : "//QC-JAVCWZ099[00653] In java.io.PrintStream.print@POLYN364372[00653] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.write@POLYN358727.buf",
      "_method" : "---java.io.Writer.write@POLYN190451 in line [00503]",
      "_target" : "java.io.Writer.write@POLYN190451.cbuf",
      "_risk" : "//QC-JAVCWZ099[00503] In java.io.PrintStream.write@POLYN358727[00503] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "26",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN591940.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN587426 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN587426.unshared",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN591940[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN587426.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN588415 in line [01229]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN588415.unshared",
      "_risk" : "//QC-JAVCWZ099[01229] In java.io.ObjectOutputStream.writeClassDesc@POLYN587426[01229] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "27",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN587426 in line [01427]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN587426.unshared",
      "_risk" : "//QC-JAVCWZ099[01427] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN597680[01427] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN587426.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN588415 in line [01229]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN588415.unshared",
      "_risk" : "//QC-JAVCWZ099[01229] In java.io.ObjectOutputStream.writeClassDesc@POLYN587426[01229] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "28",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN604563.false",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN581909 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.unshared",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN604563[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN591940 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN591940.unshared",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN581909[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "29",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN557421.false",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN581909 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.unshared",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN557421[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN591940 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN591940.unshared",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN581909[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "30",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN559639.true",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN581909 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.unshared",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN559639[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN581909.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN591940 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN591940.unshared",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN581909[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "31",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.tools.TransactionsCommand.printRow@POLYN311388.rowBuilder",
      "_method" : "---java.io.PrintStream.println@POLYN366118 in line [00931]",
      "_target" : "java.io.PrintStream.println@POLYN366118.x",
      "_risk" : "//QC-JAVCWE099[00931] In org.apache.kafka.tools.TransactionsCommand.printRow@POLYN311388[00931] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN366118.x",
      "_method" : "---java.io.PrintStream.print@POLYN361330 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN361330.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN366118[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "32",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.agent.Agent.exec@POLYN187696.\"Unable to create the task controller.\"",
      "_method" : "---java.io.PrintStream.println@POLYN366118 in line [00171]",
      "_target" : "java.io.PrintStream.println@POLYN366118.x",
      "_risk" : "//QC-JAVCWE099[00171] In org.apache.kafka.trogdor.agent.Agent.exec@POLYN187696[00171] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN366118.x",
      "_method" : "---java.io.PrintStream.print@POLYN361330 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN361330.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN366118[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "33",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.agent.Agent.exec@POLYN187696.\"createWorker failed\"",
      "_method" : "---java.io.PrintStream.println@POLYN366118 in line [00186]",
      "_target" : "java.io.PrintStream.println@POLYN366118.x",
      "_risk" : "//QC-JAVCWE099[00186] In org.apache.kafka.trogdor.agent.Agent.exec@POLYN187696[00186] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN366118.x",
      "_method" : "---java.io.PrintStream.print@POLYN361330 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN361330.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN366118[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "34",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN352131.x",
      "_method" : "---java.io.PrintWriter.print@POLYN347607 in line [00725]",
      "_target" : "java.io.PrintWriter.print@POLYN347607.s",
      "_risk" : "//QC-JAVCWZ099[00725] In java.io.PrintWriter.println@POLYN352131[00725] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN347607.s",
      "_method" : "---java.io.PrintWriter.write@POLYN342580 in line [00587]",
      "_target" : "java.io.PrintWriter.write@POLYN342580.buf",
      "_risk" : "//QC-JAVCWZ099[00587] In java.io.PrintWriter.print@POLYN347607[00587] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "35",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.shell.ErroneousCommandHandler.run@POLYN144393.message",
      "_method" : "---java.io.PrintWriter.println@POLYN349359 in line [00038]",
      "_target" : "java.io.PrintWriter.println@POLYN349359.x",
      "_risk" : "//QC-JAVCWE099[00038] In org.apache.kafka.shell.ErroneousCommandHandler.run@POLYN144393[00038] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN349359.x",
      "_method" : "---java.io.PrintWriter.print@POLYN344604 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN344604.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN349359[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "36",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.append@POLYN361245.\"null\"",
      "_method" : "---java.io.PrintWriter.write@POLYN341282 in line [01002]",
      "_target" : "java.io.PrintWriter.write@POLYN341282.c",
      "_risk" : "//QC-JAVCWZ099[01002] In java.io.PrintWriter.append@POLYN361245[01002] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.write@POLYN341282.c",
      "_method" : "---java.io.Writer.write@POLYN189816 in line [00405]",
      "_target" : "java.io.Writer.write@POLYN189816.c",
      "_risk" : "//QC-JAVCWZ099[00405] In java.io.PrintWriter.write@POLYN341282[00405] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "37",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.net.Socket.Socket@POLYN467919.address",
      "_method" : "---java.net.Socket.connect@POLYN471694 in line [00415]",
      "_target" : "java.net.Socket.connect@POLYN471694.endpoint",
      "_risk" : "//QC-JAVCWZ099[00415] In java.net.Socket.Socket@POLYN467919[00415] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.net.Socket.connect@POLYN471694.endpoint",
      "_method" : "---java.net.Socket.connect@POLYN472344 in line [00518]",
      "_target" : "java.net.Socket.connect@POLYN472344.endpoint",
      "_risk" : "//QC-JAVCWZ099[00518] In java.net.Socket.connect@POLYN471694[00518] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  } ],
  "_lesDeadlocks" : [ {
    "_id" : "R0",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.this"
  }, {
    "_id" : "R1",
    "_libelle" : "org.apache.kafka.streams.processor.internals.GlobalStreamThread.this"
  }, {
    "_id" : "R2",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.this"
  }, {
    "_id" : "R3",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258552.cleanupDelayMs"
  }, {
    "_id" : "R4",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255547.taskId"
  }, {
    "_id" : "R5",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.stateLock"
  }, {
    "_id" : "R6",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.changeThreadCount"
  }, {
    "_id" : "R7",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.threads"
  }, {
    "_id" : "R8",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.this"
  }, {
    "_id" : "R9",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.this"
  }, {
    "_id" : "R10",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555.key"
  }, {
    "_id" : "R11",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555.value"
  }, {
    "_id" : "R12",
    "_libelle" : "org.apache.kafka.common.metrics.Sensor.this"
  }, {
    "_id" : "R13",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.this"
  }, {
    "_id" : "R14",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadLevelSensors"
  }, {
    "_id" : "R15",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelSensors"
  }, {
    "_id" : "R16",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamThread.stateLock"
  }, {
    "_id" : "R17",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.this"
  }, {
    "_id" : "R18",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374373.exception"
  }, {
    "_id" : "R19",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN374859.exception"
  }, {
    "_id" : "R20",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN377606.tp"
  }, {
    "_id" : "R21",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.abortBatches@POLYN358208.dq"
  }, {
    "_id" : "R22",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.this"
  }, {
    "_id" : "R23",
    "_libelle" : "org.apache.kafka.clients.producer.internals.IncompleteBatches.incomplete"
  }, {
    "_id" : "R24",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN393355.e"
  }, {
    "_id" : "R25",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN341260.deque"
  }, {
    "_id" : "R26",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.this"
  }, {
    "_id" : "R27",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161215.topic"
  }, {
    "_id" : "R28",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161215.nowMs"
  }, {
    "_id" : "R29",
    "_libelle" : "org.apache.kafka.clients.Metadata.this"
  }, {
    "_id" : "R30",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN348729.deque"
  }, {
    "_id" : "R31",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN375869.topicPartition"
  }, {
    "_id" : "R32",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN379977.topicPartition"
  }, {
    "_id" : "R33",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN379977.increment"
  }, {
    "_id" : "R34",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384968.batch"
  }, {
    "_id" : "R35",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384968.exception"
  }, {
    "_id" : "R36",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384968.adjustSequenceNumbers"
  }, {
    "_id" : "R37",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN384373.exception"
  }, {
    "_id" : "R38",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN381794.batch"
  }, {
    "_id" : "R39",
    "_libelle" : "java.io.InputStream.this"
  }, {
    "_id" : "R40",
    "_libelle" : "java.io.InputStream.mark@POLYN251068.readlimit"
  }, {
    "_id" : "R41",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.this"
  }, {
    "_id" : "R42",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.consumerRecord@POLYN201849.consumedMessage"
  }, {
    "_id" : "R43",
    "_libelle" : "org.apache.kafka.streams.processor.internals.GlobalStreamThread.stateLock"
  }, {
    "_id" : "R44",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.this"
  }, {
    "_id" : "R45",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221332.initialTopologies"
  }, {
    "_id" : "R46",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.this"
  }, {
    "_id" : "R47",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN228173.connName"
  }, {
    "_id" : "R48",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.this"
  }, {
    "_id" : "R49",
    "_libelle" : "java.io.Reader.lock"
  }, {
    "_id" : "R50",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.unsent"
  }, {
    "_id" : "R51",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417569.isDisconnected"
  }, {
    "_id" : "R52",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417569.cause"
  }, {
    "_id" : "R53",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417215.error"
  }, {
    "_id" : "R54",
    "_libelle" : "java.net.Socket.this"
  }, {
    "_id" : "R55",
    "_libelle" : "java.net.Socket.setSendBufferSize@POLYN493067.size"
  }, {
    "_id" : "R56",
    "_libelle" : "java.net.Socket.setReceiveBufferSize@POLYN495770.size"
  }, {
    "_id" : "R57",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226295.connName"
  }, {
    "_id" : "R58",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226295.config"
  }, {
    "_id" : "R59",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226295.allowReplace"
  }, {
    "_id" : "R60",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226295.callback"
  }, {
    "_id" : "R61",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226295.configInfos"
  }, {
    "_id" : "R62",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.taskLevelSensors"
  }, {
    "_id" : "R63",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.this"
  }, {
    "_id" : "R64",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232624.request"
  }, {
    "_id" : "R65",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232624.cb"
  }, {
    "_id" : "R66",
    "_libelle" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.this"
  }, {
    "_id" : "R67",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN390487.now"
  }, {
    "_id" : "R68",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.sourceRecord@POLYN201620.preTransformRecord"
  }, {
    "_id" : "R69",
    "_libelle" : "org.apache.kafka.tools.ThroughputThrottler.this"
  }, {
    "_id" : "R70",
    "_libelle" : "org.apache.kafka.clients.Metadata.failedUpdate@POLYN264029.now"
  }, {
    "_id" : "R71",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN252367.requestVersion"
  }, {
    "_id" : "R72",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN252367.response"
  }, {
    "_id" : "R73",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN252367.isPartialUpdate"
  }, {
    "_id" : "R74",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN252367.nowMs"
  }, {
    "_id" : "R75",
    "_libelle" : "org.apache.kafka.common.requests.MetadataResponse.data"
  }, {
    "_id" : "R76",
    "_libelle" : "org.apache.kafka.clients.Metadata.bootstrap@POLYN251401.addresses"
  }, {
    "_id" : "R77",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.this"
  }, {
    "_id" : "R78",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029.prefix"
  }, {
    "_id" : "R79",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029.id"
  }, {
    "_id" : "R80",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029.metrics"
  }, {
    "_id" : "R81",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029.nowMs"
  }, {
    "_id" : "R82",
    "_libelle" : "java.io.File.this"
  }, {
    "_id" : "R83",
    "_libelle" : "java.io.File.readObject@POLYN632722.s"
  }, {
    "_id" : "R84",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.nodeLevelSensors"
  }, {
    "_id" : "R85",
    "_libelle" : "org.apache.kafka.clients.admin.KafkaAdminClient.this"
  }, {
    "_id" : "R86",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.abortUndrainedBatches@POLYN358830.dq"
  }, {
    "_id" : "R87",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN393177.request"
  }, {
    "_id" : "R88",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN324647.dq"
  }, {
    "_id" : "R89",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190309.newCacheSizeBytes"
  }, {
    "_id" : "R90",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.this"
  }, {
    "_id" : "R91",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN318181.assignments"
  }, {
    "_id" : "R92",
    "_libelle" : "org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitableRecords"
  }, {
    "_id" : "R93",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.this"
  }, {
    "_id" : "R94",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN251793.response"
  }, {
    "_id" : "R95",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN251793.isPartialUpdate"
  }, {
    "_id" : "R96",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN251793.nowMs"
  }, {
    "_id" : "R97",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224314.connName"
  }, {
    "_id" : "R98",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224314.callback"
  }, {
    "_id" : "R99",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.this"
  }, {
    "_id" : "R100",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN230008.taskId"
  }, {
    "_id" : "R101",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN230008.cb"
  }, {
    "_id" : "R102",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.openIterators"
  }, {
    "_id" : "R103",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN420190.reason"
  }, {
    "_id" : "R104",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN420190.shouldResetMemberId"
  }, {
    "_id" : "R105",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN419491.reason"
  }, {
    "_id" : "R106",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN419491.shouldResetMemberId"
  }, {
    "_id" : "R107",
    "_libelle" : "org.apache.kafka.common.security.oauthbearer.internals.expiring.ExpiringCredentialRefreshingLogin.mandatoryClassToSynchronizeOnPriorToRefresh"
  }, {
    "_id" : "R108",
    "_libelle" : "java.io.Writer.lock"
  }, {
    "_id" : "R109",
    "_libelle" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.lock"
  }, {
    "_id" : "R110",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN197813.entries"
  }, {
    "_id" : "R111",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN383821.batch"
  }, {
    "_id" : "R112",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN383821.response"
  }, {
    "_id" : "R113",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTask.this"
  }, {
    "_id" : "R114",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerConnector.this"
  }, {
    "_id" : "R115",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN179054.partition"
  }, {
    "_id" : "R116",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN179054.offset"
  }, {
    "_id" : "R117",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.NamedTopologyBuilder.this"
  }, {
    "_id" : "R118",
    "_libelle" : "org.apache.kafka.streams.StreamsBuilder.this"
  }, {
    "_id" : "R119",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerSourceTask.this"
  }, {
    "_id" : "R120",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335137.partition"
  }, {
    "_id" : "R121",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335137.offsetResetStrategy"
  }, {
    "_id" : "R122",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN322645.tp"
  }, {
    "_id" : "R123",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN322645.position"
  }, {
    "_id" : "R124",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN330222.tp"
  }, {
    "_id" : "R125",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN231421.connName"
  }, {
    "_id" : "R126",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN231421.cb"
  }, {
    "_id" : "R127",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.taskDirCreationLock"
  }, {
    "_id" : "R128",
    "_libelle" : "java.io.PrintStream.this"
  }, {
    "_id" : "R129",
    "_libelle" : "java.lang.Object.this"
  }, {
    "_id" : "R130",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.splitAndReenqueue@POLYN335825.partitionDequeue"
  }, {
    "_id" : "R131",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.setEstimation@POLYN156798.compressionRatioForTopic"
  }, {
    "_id" : "R132",
    "_libelle" : "org.apache.kafka.connect.file.FileStreamSourceTask.this"
  }, {
    "_id" : "R133",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaConfigBackingStore.lock"
  }, {
    "_id" : "R134",
    "_libelle" : "java.net.ServerSocket.this"
  }, {
    "_id" : "R135",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.this"
  }, {
    "_id" : "R136",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN181694.key"
  }, {
    "_id" : "R137",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN181694.value"
  }, {
    "_id" : "R138",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.this"
  }, {
    "_id" : "R139",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN173815.key"
  }, {
    "_id" : "R140",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN173815.value"
  }, {
    "_id" : "R141",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417414.cause"
  }, {
    "_id" : "R142",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420488.api"
  }, {
    "_id" : "R143",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420488.error"
  }, {
    "_id" : "R144",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420488.shouldResetMemberId"
  }, {
    "_id" : "R145",
    "_libelle" : "java.io.File.writeObject@POLYN632341.s"
  }, {
    "_id" : "R146",
    "_libelle" : "java.net.ServerSocket.setSoTimeout@POLYN322018.timeout"
  }, {
    "_id" : "R147",
    "_libelle" : "java.net.ServerSocket.setReceiveBufferSize@POLYN328297.size"
  }, {
    "_id" : "R148",
    "_libelle" : "java.net.Socket.setSoTimeout@POLYN491292.timeout"
  }, {
    "_id" : "R149",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelMetrics"
  }, {
    "_id" : "R150",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadLevelMetrics"
  }, {
    "_id" : "R151",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheLevelSensors"
  }, {
    "_id" : "R152",
    "_libelle" : "java.io.PipedInputStream.this"
  }, {
    "_id" : "R153",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN218990.b"
  }, {
    "_id" : "R154",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN220097.b"
  }, {
    "_id" : "R155",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN220097.off"
  }, {
    "_id" : "R156",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN220097.len"
  }, {
    "_id" : "R157",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.reporters@POLYN201367.reporters"
  }, {
    "_id" : "R158",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323236.tp"
  }, {
    "_id" : "R159",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323236.position"
  }, {
    "_id" : "R160",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323236.requestedResetStrategy"
  }, {
    "_id" : "R161",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN372050.topicPartition"
  }, {
    "_id" : "R162",
    "_libelle" : "org.apache.kafka.connect.mirror.OffsetSyncStore.this"
  }, {
    "_id" : "R163",
    "_libelle" : "org.apache.kafka.connect.storage.FileOffsetBackingStore.this"
  }, {
    "_id" : "R164",
    "_libelle" : "java.io.PipedReader.this"
  }, {
    "_id" : "R165",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.this"
  }, {
    "_id" : "R166",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235768.key"
  }, {
    "_id" : "R167",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235768.value"
  }, {
    "_id" : "R168",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235768.windowStartTimestamp"
  }, {
    "_id" : "R169",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.putAll@POLYN182778.entries"
  }, {
    "_id" : "R170",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN256508.key"
  }, {
    "_id" : "R171",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN256508.value"
  }, {
    "_id" : "R172",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.assignPartitionsLock"
  }, {
    "_id" : "R173",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.this"
  }, {
    "_id" : "R174",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.writeEntries@POLYN154199.committedOffsets"
  }, {
    "_id" : "R175",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeReporter@POLYN301737.reporter"
  }, {
    "_id" : "R176",
    "_libelle" : "org.apache.kafka.common.metrics.JmxReporter.LOCK"
  }, {
    "_id" : "R177",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.this"
  }, {
    "_id" : "R178",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN160102.status"
  }, {
    "_id" : "R179",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN159723.status"
  }, {
    "_id" : "R180",
    "_libelle" : "java.io.PipedReader.receive@POLYN199029.c"
  }, {
    "_id" : "R181",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.this"
  }, {
    "_id" : "R182",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.calculateNextWindow@POLYN159408.force"
  }, {
    "_id" : "R183",
    "_libelle" : "org.apache.kafka.trogdor.workload.ProduceBenchWorker.this"
  }, {
    "_id" : "R184",
    "_libelle" : "java.io.FileInputStream.closeLock"
  }, {
    "_id" : "R185",
    "_libelle" : "java.io.FileOutputStream.closeLock"
  }, {
    "_id" : "R186",
    "_libelle" : "java.io.PipedOutputStream.this"
  }, {
    "_id" : "R187",
    "_libelle" : "java.io.PipedOutputStream.connect@POLYN170235.snk"
  }, {
    "_id" : "R188",
    "_libelle" : "java.io.PipedWriter.this"
  }, {
    "_id" : "R189",
    "_libelle" : "java.io.PipedWriter.connect@POLYN169465.snk"
  }, {
    "_id" : "R190",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.this"
  }, {
    "_id" : "R191",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.addTransientTopics@POLYN150792.topics"
  }, {
    "_id" : "R192",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN314038.pattern"
  }, {
    "_id" : "R193",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN314038.listener"
  }, {
    "_id" : "R194",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN325617.tp"
  }, {
    "_id" : "R195",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN325617.position"
  }, {
    "_id" : "R196",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN331789.tp"
  }, {
    "_id" : "R197",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN332527.tp"
  }, {
    "_id" : "R198",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN332527.highWatermark"
  }, {
    "_id" : "R199",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN332717.tp"
  }, {
    "_id" : "R200",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN332717.logStartOffset"
  }, {
    "_id" : "R201",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN332907.tp"
  }, {
    "_id" : "R202",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN332907.lastStableOffset"
  }, {
    "_id" : "R203",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333347.tp"
  }, {
    "_id" : "R204",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333347.preferredReadReplicaId"
  }, {
    "_id" : "R205",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333347.timeMs"
  }, {
    "_id" : "R206",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335332.partitions"
  }, {
    "_id" : "R207",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335332.offsetResetStrategy"
  }, {
    "_id" : "R208",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN335896.partitions"
  }, {
    "_id" : "R209",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN335896.nextAllowResetTimeMs"
  }, {
    "_id" : "R210",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN339974.tp"
  }, {
    "_id" : "R211",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN340125.tp"
  }, {
    "_id" : "R212",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN340271.partitions"
  }, {
    "_id" : "R213",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN340271.nextRetryTimeMs"
  }, {
    "_id" : "R214",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN163256.lastVersion"
  }, {
    "_id" : "R215",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN163256.timeoutMs"
  }, {
    "_id" : "R216",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164028.requestVersion"
  }, {
    "_id" : "R217",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164028.response"
  }, {
    "_id" : "R218",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164028.isPartialUpdate"
  }, {
    "_id" : "R219",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164028.nowMs"
  }, {
    "_id" : "R220",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN164641.fatalException"
  }, {
    "_id" : "R221",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.this"
  }, {
    "_id" : "R222",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN167027.connector"
  }, {
    "_id" : "R223",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN167027.properties"
  }, {
    "_id" : "R224",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeTaskConfigs@POLYN167997.connector"
  }, {
    "_id" : "R225",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN168645.connector"
  }, {
    "_id" : "R226",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN168645.configs"
  }, {
    "_id" : "R227",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN169530.connector"
  }, {
    "_id" : "R228",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN169530.state"
  }, {
    "_id" : "R229",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN160790.status"
  }, {
    "_id" : "R230",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN160247.status"
  }, {
    "_id" : "R231",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageReaderImpl.offsetReadFutures"
  }, {
    "_id" : "R232",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.this"
  }, {
    "_id" : "R233",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.setAclMutator@POLYN169405.aclMutator"
  }, {
    "_id" : "R234",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.configure@POLYN173172.configs"
  }, {
    "_id" : "R235",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.this"
  }, {
    "_id" : "R236",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN166527.newLeader"
  }, {
    "_id" : "R237",
    "_libelle" : "java.io.BufferedOutputStream.this"
  }, {
    "_id" : "R238",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN159289.b"
  }, {
    "_id" : "R239",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN160150.b"
  }, {
    "_id" : "R240",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN160150.off"
  }, {
    "_id" : "R241",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN160150.len"
  }, {
    "_id" : "R242",
    "_libelle" : "java.io.PipedOutputStream.sink"
  }, {
    "_id" : "R243",
    "_libelle" : "java.io.PipedWriter.sink"
  }, {
    "_id" : "R244",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.this"
  }, {
    "_id" : "R245",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.addStateStore@POLYN236150.builder"
  }, {
    "_id" : "R246",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.topicLevelSensors"
  }, {
    "_id" : "R247",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.this"
  }, {
    "_id" : "R248",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258997.key"
  }, {
    "_id" : "R249",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258997.value"
  }, {
    "_id" : "R250",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258997.windowStartTimestamp"
  }, {
    "_id" : "R251",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.this"
  }, {
    "_id" : "R252",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.delay@POLYN147237.amount"
  }, {
    "_id" : "R253",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.this"
  }, {
    "_id" : "R254",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163428.consumerRecords"
  }, {
    "_id" : "R255",
    "_libelle" : "java.io.PipedReader.receive@POLYN200707.c"
  }, {
    "_id" : "R256",
    "_libelle" : "java.io.PipedReader.receive@POLYN200707.off"
  }, {
    "_id" : "R257",
    "_libelle" : "java.io.PipedReader.receive@POLYN200707.len"
  }, {
    "_id" : "R258",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.this"
  }, {
    "_id" : "R259",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN164989.newState"
  }, {
    "_id" : "R260",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN164989.now"
  }, {
    "_id" : "R261",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.setUpdateListener@POLYN170355.listener"
  } ],
  "_lesDeadlocksSequences" : [ {
    "_id" : "0",
    "_lesItems" : [ "S0:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S0:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S0:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S0:org.apache.kafka.streams.KafkaStreams.closeToError@POLYN557676", "S0:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R0 in line [01832])", "S0:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R0 in line [01832])", "S0:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258552 (R2 in line [00001],R3 in line [00001])", "S0:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258847", "S0:org.apache.kafka.common.utils.Utils.delete@POLYN444301" ]
  }, {
    "_id" : "1",
    "_lesItems" : [ "S1:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S1:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S1:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S1:org.apache.kafka.streams.KafkaStreams.closeToError@POLYN557676", "S1:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R0 in line [01832])", "S1:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R0 in line [01832])", "S1:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258552 (R2 in line [00001],R3 in line [00001])", "S1:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258847", "S1:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258847", "S1:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255547 (R2 in line [00001],R4 in line [00001])", "S1:org.apache.kafka.common.header.Headers.remove@POLYN152004" ]
  }, {
    "_id" : "2",
    "_lesItems" : [ "S2:org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN254342 (R2 in line [00001])", "S2:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN249402 (R127 in line [00001])", "S2:org.apache.kafka.streams.processor.internals.StateDirectory.getTaskDirectoryParentName@POLYN250790", "S2:org.apache.kafka.streams.processor.TaskId.topologyName@POLYN166557" ]
  }, {
    "_id" : "3",
    "_lesItems" : [ "S3:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S3:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S3:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S3:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R6 in line [01039],R5 in line [01051])", "S3:org.apache.kafka.streams.KafkaStreams.createAndAddStreamThread@POLYN533868", "S3:org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520", "S3:org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520", "S3:org.apache.kafka.streams.StreamsConfig.getRestoreConsumerConfigs@POLYN467309", "S3:org.apache.kafka.streams.StreamsConfig.getCommonConsumerConfigs@POLYN456930", "S3:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193821", "S3:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555 (R9 in line [00157],R10 in line [00157],R11 in line [00157])", "S3:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143222" ]
  }, {
    "_id" : "4",
    "_lesItems" : [ "S4:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S4:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S4:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S4:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R6 in line [01039],R5 in line [01051])", "S4:org.apache.kafka.streams.KafkaStreams.createAndAddStreamThread@POLYN533868", "S4:org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520", "S4:org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520", "S4:org.apache.kafka.streams.StreamsConfig.getRestoreConsumerConfigs@POLYN467309", "S4:org.apache.kafka.streams.StreamsConfig.getCommonConsumerConfigs@POLYN456930", "S4:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193821", "S4:org.apache.kafka.streams.state.internals.ThreadCache.maybeEvict@POLYN199533", "S4:org.apache.kafka.streams.state.internals.NamedCache.evict@POLYN196872 (R9 in line [00235])", "S4:org.apache.kafka.streams.state.internals.NamedCache.flush@POLYN191208", "S4:org.apache.kafka.streams.state.internals.NamedCache.flush@POLYN191208", "S4:org.apache.kafka.common.metrics.Sensor.add@POLYN217504 (R12 in line [00328])", "S4:org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN302143 (R13 in line [00690])", "S4:org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN302143 (R13 in line [00690])", "S4:org.apache.kafka.common.metrics.KafkaMetric.metricName@POLYN150322" ]
  }, {
    "_id" : "5",
    "_lesItems" : [ "S5:org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN197813 (R9 in line [00256],R110 in line [00256])", "S5:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555 (R9 in line [00157],R10 in line [00157],R11 in line [00157])", "S5:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143222" ]
  }, {
    "_id" : "6",
    "_lesItems" : [ "S6:org.apache.kafka.streams.state.internals.NamedCache.close@POLYN202156 (R9 in line [00345])", "S6:org.apache.kafka.streams.state.internals.NamedCache.close@POLYN202156 (R9 in line [00345])", "S6:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllCacheLevelSensors@POLYN297069 (R151 in line [00462])", "S6:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheSensorPrefix@POLYN297720" ]
  }, {
    "_id" : "7",
    "_lesItems" : [ "S7:org.apache.kafka.streams.examples.wordcount.WordCountDemo.main@POLYN162224", "S7:org.apache.kafka.streams.examples.wordcount.WordCountDemo.getStreamsConfig@POLYN159950", "S7:org.apache.kafka.streams.state.internals.ThreadCache.putIfAbsent@POLYN194235", "S7:org.apache.kafka.streams.state.internals.ThreadCache.getOrCreateCache@POLYN200402 (R8 in line [00285])", "S7:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193821", "S7:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555 (R9 in line [00157],R10 in line [00157],R11 in line [00157])", "S7:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143222" ]
  }, {
    "_id" : "8",
    "_lesItems" : [ "S8:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190309 (R8 in line [00075],R89 in line [00075])", "S8:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190309 (R8 in line [00075],R89 in line [00075])", "S8:org.apache.kafka.streams.state.internals.NamedCache.evict@POLYN196872 (R9 in line [00235])", "S8:org.apache.kafka.streams.state.internals.NamedCache.remove@POLYN195806" ]
  }, {
    "_id" : "9",
    "_lesItems" : [ "S9:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S9:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S9:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S9:org.apache.kafka.streams.KafkaStreams.closeToError@POLYN557676", "S9:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R0 in line [01832])", "S9:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R0 in line [01832])", "S9:org.apache.kafka.streams.processor.internals.GlobalStreamThread.start@POLYN215560 (R1 in line [00434])", "S9:org.apache.kafka.streams.processor.internals.GlobalStreamThread.start@POLYN215560 (R1 in line [00434])", "S9:org.apache.kafka.common.utils.Utils.sleep@POLYN420932" ]
  }, {
    "_id" : "10",
    "_lesItems" : [ "S10:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S10:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S10:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S10:org.apache.kafka.streams.KafkaStreams.closeToError@POLYN557676", "S10:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R0 in line [01832])", "S10:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R0 in line [01832])", "S10:org.apache.kafka.streams.KafkaStreams.setState@POLYN505909 (R5 in line [00322])", "S10:org.apache.kafka.streams.KafkaStreams.setState@POLYN505909 (R5 in line [00322])", "S10:java.lang.Object.notifyAll@POLYN294461" ]
  }, {
    "_id" : "11",
    "_lesItems" : [ "S11:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S11:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S11:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S11:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R6 in line [01039],R5 in line [01051])", "S11:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN546254 (R7 in line [01215])", "S11:org.apache.kafka.common.header.Headers.remove@POLYN152004" ]
  }, {
    "_id" : "12",
    "_lesItems" : [ "S12:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S12:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S12:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S12:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R6 in line [01039],R5 in line [01051])", "S12:org.apache.kafka.streams.KafkaStreams.createAndAddStreamThread@POLYN533868", "S12:org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520", "S12:org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520", "S12:org.apache.kafka.streams.StreamsConfig.getRestoreConsumerConfigs@POLYN467309", "S12:org.apache.kafka.streams.StreamsConfig.getCommonConsumerConfigs@POLYN456930", "S12:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193821", "S12:org.apache.kafka.streams.state.internals.ThreadCache.getOrCreateCache@POLYN200402 (R8 in line [00285])", "S12:org.apache.kafka.streams.state.internals.ThreadCache.get@POLYN193301", "S12:org.apache.kafka.streams.state.internals.ThreadCache.getCache@POLYN200247 (R8 in line [00281])" ]
  }, {
    "_id" : "13",
    "_lesItems" : [ "S13:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S13:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S13:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S13:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R6 in line [01039],R5 in line [01051])", "S13:org.apache.kafka.streams.KafkaStreams.createAndAddStreamThread@POLYN533868", "S13:org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520", "S13:org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520", "S13:org.apache.kafka.streams.processor.internals.StreamThread.StreamThread@POLYN343136", "S13:org.apache.kafka.streams.processor.internals.metrics.ThreadMetrics.commitSensor@POLYN192950", "S13:org.apache.kafka.streams.processor.internals.metrics.ThreadMetrics.invocationRateAndCountAndAvgAndMaxLatencySensor@POLYN200926", "S13:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadLevelSensor@POLYN286456 (R14 in line [00257])", "S13:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN286912" ]
  }, {
    "_id" : "14",
    "_lesItems" : [ "S14:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S14:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S14:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S14:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R6 in line [01039],R5 in line [01051])", "S14:org.apache.kafka.streams.KafkaStreams.createAndAddStreamThread@POLYN533868", "S14:org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520", "S14:org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520", "S14:org.apache.kafka.streams.processor.internals.StreamThread.StreamThread@POLYN343136", "S14:org.apache.kafka.streams.internals.metrics.ClientMetrics.failedStreamThreadSensor@POLYN160048", "S14:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelSensor@POLYN285767 (R15 in line [00241])", "S14:org.apache.kafka.common.metrics.Metrics.getSensor@POLYN289905" ]
  }, {
    "_id" : "15",
    "_lesItems" : [ "S15:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S15:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S15:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S15:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R6 in line [01039],R5 in line [01051])", "S15:org.apache.kafka.streams.KafkaStreams.createAndAddStreamThread@POLYN533868", "S15:org.apache.kafka.common.metrics.Sensor.add@POLYN217504 (R12 in line [00328])", "S15:org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN302143 (R13 in line [00690])", "S15:org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN302143 (R13 in line [00690])", "S15:org.apache.kafka.common.metrics.KafkaMetric.metricName@POLYN150322" ]
  }, {
    "_id" : "16",
    "_lesItems" : [ "S16:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S16:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S16:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S16:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R6 in line [01039],R5 in line [01051])", "S16:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R0 in line [01832])", "S16:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R0 in line [01832])", "S16:org.apache.kafka.streams.processor.internals.GlobalStreamThread.start@POLYN215560 (R1 in line [00434])", "S16:org.apache.kafka.streams.processor.internals.GlobalStreamThread.start@POLYN215560 (R1 in line [00434])", "S16:org.apache.kafka.common.utils.Utils.sleep@POLYN420932" ]
  }, {
    "_id" : "17",
    "_lesItems" : [ "S17:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S17:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S17:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S17:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R6 in line [01039],R5 in line [01051])", "S17:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R6 in line [01039],R5 in line [01051])", "S17:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN546254 (R7 in line [01215])", "S17:org.apache.kafka.common.header.Headers.remove@POLYN152004" ]
  }, {
    "_id" : "18",
    "_lesItems" : [ "S18:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S18:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S18:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S18:org.apache.kafka.streams.KafkaStreams.closeToError@POLYN557676", "S18:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R0 in line [01832])", "S18:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R0 in line [01832])", "S18:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258552 (R2 in line [00001],R3 in line [00001])", "S18:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258847", "S18:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258847", "S18:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255547 (R2 in line [00001],R4 in line [00001])", "S18:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255547 (R2 in line [00001],R4 in line [00001])", "S18:org.apache.kafka.common.header.Headers.remove@POLYN152004" ]
  }, {
    "_id" : "19",
    "_lesItems" : [ "S19:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S19:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S19:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S19:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R6 in line [01039],R5 in line [01051])", "S19:org.apache.kafka.streams.KafkaStreams.createAndAddStreamThread@POLYN533868", "S19:org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520", "S19:org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520", "S19:org.apache.kafka.streams.StreamsConfig.getRestoreConsumerConfigs@POLYN467309", "S19:org.apache.kafka.streams.StreamsConfig.getCommonConsumerConfigs@POLYN456930", "S19:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193821", "S19:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555 (R9 in line [00157],R10 in line [00157],R11 in line [00157])", "S19:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555 (R9 in line [00157],R10 in line [00157],R11 in line [00157])", "S19:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143222" ]
  }, {
    "_id" : "20",
    "_lesItems" : [ "S20:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S20:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S20:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S20:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R6 in line [01039],R5 in line [01051])", "S20:org.apache.kafka.streams.KafkaStreams.createAndAddStreamThread@POLYN533868", "S20:org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520", "S20:org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520", "S20:org.apache.kafka.streams.StreamsConfig.getRestoreConsumerConfigs@POLYN467309", "S20:org.apache.kafka.streams.StreamsConfig.getCommonConsumerConfigs@POLYN456930", "S20:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193821", "S20:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555 (R9 in line [00157],R10 in line [00157],R11 in line [00157])", "S20:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555 (R9 in line [00157],R10 in line [00157],R11 in line [00157])", "S20:org.apache.kafka.common.metrics.Sensor.add@POLYN217504 (R12 in line [00328])", "S20:org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN302143 (R13 in line [00690])", "S20:org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN302143 (R13 in line [00690])", "S20:org.apache.kafka.common.metrics.KafkaMetric.metricName@POLYN150322" ]
  }, {
    "_id" : "21",
    "_lesItems" : [ "S21:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S21:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S21:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN389337 (R17 in line [00718])", "S21:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374373 (R17 in line [00386],R18 in line [00386])", "S21:currentState==State.ABORTING_TRANSACTION" ]
  }, {
    "_id" : "22",
    "_lesItems" : [ "S22:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S22:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S22:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN389337 (R17 in line [00718])", "S22:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN374859 (R17 in line [00397],R19 in line [00397])", "S22:org.apache.kafka.clients.producer.internals.TransactionalRequestResult.fail@POLYN148475" ]
  }, {
    "_id" : "23",
    "_lesItems" : [ "S23:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S23:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S23:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN389337 (R17 in line [00718])", "S23:org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN377606 (R17 in line [00468],R20 in line [00468])" ]
  }, {
    "_id" : "24",
    "_lesItems" : [ "S24:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S24:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S24:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S24:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN393355 (R17 in line [00810],R24 in line [00810])" ]
  }, {
    "_id" : "25",
    "_lesItems" : [ "S25:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S25:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S25:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S25:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495", "S25:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495", "S25:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN353232", "S25:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN348729 (R30 in line [00799])", "S25:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN375869 (R17 in line [00426],R31 in line [00426])", "S25:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN151645", "S25:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN141900" ]
  }, {
    "_id" : "26",
    "_lesItems" : [ "S26:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S26:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S26:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S26:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495", "S26:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495", "S26:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN353232", "S26:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN348729 (R30 in line [00799])", "S26:org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN379977 (R17 in line [00521],R32 in line [00521],R33 in line [00521])", "S26:org.apache.kafka.clients.producer.internals.TransactionManager.sequenceNumber@POLYN379611 (R17 in line [00510])", "S26:org.apache.kafka.clients.producer.internals.TxnPartitionMap.getOrCreate@POLYN150310" ]
  }, {
    "_id" : "27",
    "_lesItems" : [ "S27:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S27:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S27:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S27:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495", "S27:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495", "S27:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN329177", "S27:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384968 (R17 in line [00624],R34 in line [00624],R35 in line [00624],R36 in line [00624])", "S27:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN384373 (R17 in line [00610],R37 in line [00610])", "S27:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN374859 (R17 in line [00397],R19 in line [00397])", "S27:org.apache.kafka.clients.producer.internals.TransactionalRequestResult.fail@POLYN148475" ]
  }, {
    "_id" : "28",
    "_lesItems" : [ "S28:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S28:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S28:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S28:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495", "S28:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495", "S28:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN329177", "S28:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384968 (R17 in line [00624],R34 in line [00624],R35 in line [00624],R36 in line [00624])", "S28:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN381794 (R17 in line [00557],R38 in line [00557])", "S28:org.apache.kafka.clients.producer.internals.TransactionManager.hasInflightBatches@POLYN388082 (R17 in line [00692])" ]
  }, {
    "_id" : "29",
    "_lesItems" : [ "S29:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955", "S29:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955", "S29:org.apache.kafka.clients.producer.internals.Sender.maybeFindCoordinatorAndRetry@POLYN316642", "S29:org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN393177 (R17 in line [00805],R87 in line [00805])", "S29:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.setRetry@POLYN409469" ]
  }, {
    "_id" : "30",
    "_lesItems" : [ "S30:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318465", "S30:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318465", "S30:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN325881", "S30:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN383821 (R17 in line [00599],R111 in line [00599],R112 in line [00599])", "S30:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateLastAckedSequence@POLYN382086" ]
  }, {
    "_id" : "31",
    "_lesItems" : [ "S31:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN372050 (R17 in line [00327],R161 in line [00327])", "S31:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN400070" ]
  }, {
    "_id" : "32",
    "_lesItems" : [ "S32:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S32:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S32:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN389337 (R17 in line [00718])", "S32:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374373 (R17 in line [00386],R18 in line [00386])", "S32:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374373 (R17 in line [00386],R18 in line [00386])", "S32:currentState==State.ABORTING_TRANSACTION" ]
  }, {
    "_id" : "33",
    "_lesItems" : [ "S33:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S33:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S33:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S33:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495", "S33:org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161215 (R26 in line [00067],R27 in line [00067],R28 in line [00067])", "S33:org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161215 (R26 in line [00067],R27 in line [00067],R28 in line [00067])", "S33:org.apache.kafka.clients.Metadata.requestUpdateForNewTopics@POLYN247054 (R29 in line [00150])" ]
  }, {
    "_id" : "34",
    "_lesItems" : [ "S34:org.apache.kafka.clients.producer.internals.ProducerMetadata.requestUpdateForTopic@POLYN161685 (R26 in line [00075])", "S34:org.apache.kafka.clients.Metadata.requestUpdateForNewTopics@POLYN247054 (R29 in line [00150])" ]
  }, {
    "_id" : "35",
    "_lesItems" : [ "S35:org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN163256 (R26 in line [00116],R214 in line [00116],R215 in line [00116])", "S35:org.apache.kafka.common.utils.Time.milliseconds@POLYN153117" ]
  }, {
    "_id" : "36",
    "_lesItems" : [ "S36:org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164028 (R26 in line [00130],R216 in line [00130],R217 in line [00130],R218 in line [00130],R219 in line [00130])", "S36:org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164028 (R26 in line [00130],R216 in line [00130],R217 in line [00130],R218 in line [00130],R219 in line [00130])", "S36:java.lang.Object.notifyAll@POLYN294461" ]
  }, {
    "_id" : "37",
    "_lesItems" : [ "S37:org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN164641 (R26 in line [00145],R220 in line [00145])", "S37:org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN164641 (R26 in line [00145],R220 in line [00145])", "S37:java.lang.Object.notifyAll@POLYN294461" ]
  }, {
    "_id" : "38",
    "_lesItems" : [ "S38:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN368567", "S38:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN368567", "S38:org.apache.kafka.clients.Metadata.failedUpdate@POLYN264029 (R29 in line [00490],R70 in line [00490])" ]
  }, {
    "_id" : "39",
    "_lesItems" : [ "S39:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN368567", "S39:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN368567", "S39:org.apache.kafka.clients.Metadata.update@POLYN252367 (R29 in line [00263],R71 in line [00263],R72 in line [00263],R73 in line [00263],R74 in line [00263])", "S39:org.apache.kafka.common.ClusterResource.clusterId@POLYN147039" ]
  }, {
    "_id" : "40",
    "_lesItems" : [ "S40:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN181343", "S40:org.apache.kafka.clients.Metadata.bootstrap@POLYN251401 (R29 in line [00238],R76 in line [00238])", "S40:org.apache.kafka.clients.MetadataCache.bootstrap@POLYN188645" ]
  }, {
    "_id" : "41",
    "_lesItems" : [ "S41:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN251793 (R29 in line [00249],R94 in line [00249],R95 in line [00249],R96 in line [00249])", "S41:org.apache.kafka.clients.Metadata.update@POLYN252367 (R29 in line [00263],R71 in line [00263],R72 in line [00263],R73 in line [00263],R74 in line [00263])", "S41:org.apache.kafka.common.ClusterResource.clusterId@POLYN147039" ]
  }, {
    "_id" : "42",
    "_lesItems" : [ "S42:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S42:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S42:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S42:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495", "S42:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495", "S42:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN353232", "S42:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN348729 (R30 in line [00799])", "S42:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN375869 (R17 in line [00426],R31 in line [00426])", "S42:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN375869 (R17 in line [00426],R31 in line [00426])", "S42:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN151645", "S42:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN141900" ]
  }, {
    "_id" : "43",
    "_lesItems" : [ "S43:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221034", "S43:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221332 (R44 in line [00104],R45 in line [00104])", "S43:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221332 (R44 in line [00104],R45 in line [00104])", "S43:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN224172", "S43:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.getTopologyByName@POLYN223401 (R44 in line [00149])" ]
  }, {
    "_id" : "44",
    "_lesItems" : [ "S44:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221034", "S44:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221332 (R44 in line [00104],R45 in line [00104])", "S44:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221332 (R44 in line [00104],R45 in line [00104])", "S44:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN224172", "S44:org.apache.kafka.streams.processor.internals.TopologyMetadata.registerAndBuildNewTopology@POLYN249442", "S44:org.apache.kafka.streams.processor.internals.TopologyMetadata.buildAndVerifyTopology@POLYN253299", "S44:org.apache.kafka.streams.processor.internals.TopologyMetadata.buildAndVerifyTopology@POLYN253299", "S44:org.apache.kafka.streams.state.internals.ThreadCache.putAll@POLYN194782", "S44:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193821", "S44:org.apache.kafka.streams.state.internals.ThreadCache.getOrCreateCache@POLYN200402 (R8 in line [00285])", "S44:org.apache.kafka.streams.state.internals.ThreadCache.get@POLYN193301", "S44:org.apache.kafka.streams.state.internals.ThreadCache.getCache@POLYN200247 (R8 in line [00281])" ]
  }, {
    "_id" : "45",
    "_lesItems" : [ "S45:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221034", "S45:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221332 (R44 in line [00104],R45 in line [00104])", "S45:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221332 (R44 in line [00104],R45 in line [00104])", "S45:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN224172", "S45:org.apache.kafka.streams.processor.internals.TopologyMetadata.registerAndBuildNewTopology@POLYN249442", "S45:org.apache.kafka.streams.processor.internals.TopologyMetadata.buildAndVerifyTopology@POLYN253299", "S45:org.apache.kafka.streams.processor.internals.TopologyMetadata.buildAndVerifyTopology@POLYN253299", "S45:org.apache.kafka.streams.state.internals.ThreadCache.putAll@POLYN194782", "S45:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193821", "S45:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555 (R9 in line [00157],R10 in line [00157],R11 in line [00157])", "S45:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143222" ]
  }, {
    "_id" : "46",
    "_lesItems" : [ "S46:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221034", "S46:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221332 (R44 in line [00104],R45 in line [00104])", "S46:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221332 (R44 in line [00104],R45 in line [00104])", "S46:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R0 in line [01832])", "S46:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R0 in line [01832])", "S46:org.apache.kafka.streams.processor.internals.GlobalStreamThread.start@POLYN215560 (R1 in line [00434])", "S46:org.apache.kafka.streams.processor.internals.GlobalStreamThread.start@POLYN215560 (R1 in line [00434])", "S46:org.apache.kafka.common.utils.Utils.sleep@POLYN420932" ]
  }, {
    "_id" : "47",
    "_lesItems" : [ "S47:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN228173 (R46 in line [00242],R47 in line [00242])", "S47:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN228173 (R46 in line [00242],R47 in line [00242])", "S47:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN238903", "S47:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN238903", "S47:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.recomputeTaskConfigs@POLYN236122", "S47:org.apache.kafka.connect.runtime.AbstractHerder.connectorConfig@POLYN297701" ]
  }, {
    "_id" : "48",
    "_lesItems" : [ "S48:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226295 (R46 in line [00201],R57 in line [00201],R58 in line [00201],R59 in line [00201],R60 in line [00201],R61 in line [00201])", "S48:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN433418", "S48:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN430150", "S48:org.apache.kafka.common.utils.BufferSupplier.get@POLYN155141" ]
  }, {
    "_id" : "49",
    "_lesItems" : [ "S49:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232624 (R46 in line [00309],R64 in line [00309],R65 in line [00309])", "S49:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN161442" ]
  }, {
    "_id" : "50",
    "_lesItems" : [ "S50:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224314 (R46 in line [00161],R97 in line [00161],R98 in line [00161])", "S50:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN238423", "S50:org.apache.kafka.connect.storage.ClusterConfigState.tasks@POLYN202655", "S50:org.apache.kafka.common.config.provider.ConfigProvider.get@POLYN153472" ]
  }, {
    "_id" : "51",
    "_lesItems" : [ "S51:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN230008 (R46 in line [00274],R100 in line [00274],R101 in line [00274])", "S51:org.apache.kafka.connect.storage.ClusterConfigState.taskConfig@POLYN199759", "S51:org.apache.kafka.common.config.provider.ConfigProvider.get@POLYN153472" ]
  }, {
    "_id" : "52",
    "_lesItems" : [ "S52:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN231421 (R46 in line [00291],R125 in line [00291],R126 in line [00291])", "S52:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN433418", "S52:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN430150", "S52:org.apache.kafka.common.utils.BufferSupplier.get@POLYN155141" ]
  }, {
    "_id" : "53",
    "_lesItems" : [ "S53:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN228173 (R46 in line [00242],R47 in line [00242])", "S53:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN228173 (R46 in line [00242],R47 in line [00242])", "S53:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN238903", "S53:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN238903", "S53:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.recomputeTaskConfigs@POLYN236122", "S53:org.apache.kafka.connect.runtime.Worker.connectorTaskConfigs@POLYN427686", "S53:org.apache.kafka.connect.runtime.Worker.connectorTaskConfigs@POLYN427686", "S53:org.apache.kafka.common.metrics.Sensor.add@POLYN217504 (R12 in line [00328])", "S53:org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN302143 (R13 in line [00690])", "S53:org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN302143 (R13 in line [00690])", "S53:org.apache.kafka.common.metrics.KafkaMetric.metricName@POLYN150322" ]
  }, {
    "_id" : "54",
    "_lesItems" : [ "S54:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN392358 (R48 in line [00383])", "S54:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN422134", "S54:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN422326 (R48 in line [01078])", "S54:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423320 (R48 in line [01103])", "S54:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423320 (R48 in line [01103])", "S54:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.pollNoWakeup@POLYN256416", "S54:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.poll@POLYN254551", "S54:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.trySend@POLYN263317", "S54:java.io.BufferedReader.ready@POLYN243251 (R49 in line [00443])", "S54:java.io.BufferedReader.ensureOpen@POLYN229854" ]
  }, {
    "_id" : "55",
    "_lesItems" : [ "S55:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN392358 (R48 in line [00383])", "S55:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN422134", "S55:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN422326 (R48 in line [01078])", "S55:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423320 (R48 in line [01103])", "S55:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423320 (R48 in line [01103])", "S55:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.pollNoWakeup@POLYN256416", "S55:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.poll@POLYN254551", "S55:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.UnsentRequests.clean@POLYN271930 (R50 in line [00696])" ]
  }, {
    "_id" : "56",
    "_lesItems" : [ "S56:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN392358 (R48 in line [00383])", "S56:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN422134", "S56:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN422326 (R48 in line [01078])", "S56:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423320 (R48 in line [01103])", "S56:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423320 (R48 in line [01103])", "S56:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.pollNoWakeup@POLYN256416", "S56:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.poll@POLYN254551", "S56:org.apache.kafka.clients.Metadata.maybeThrowAnyException@POLYN261579 (R29 in line [00428])", "S56:org.apache.kafka.clients.Metadata.clearErrorsAndMaybeThrowException@POLYN262507", "S56:org.apache.kafka.clients.Metadata.clearRecoverableErrors@POLYN263743" ]
  }, {
    "_id" : "57",
    "_lesItems" : [ "S57:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN392358 (R48 in line [00383])", "S57:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN422134", "S57:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN422326 (R48 in line [01078])", "S57:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN416760 (R48 in line [00926])", "S57:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417569 (R48 in line [00947],R51 in line [00947],R52 in line [00947])", "S57:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417569 (R48 in line [00947],R51 in line [00947],R52 in line [00947])", "S57:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.disconnectAsync@POLYN262017", "S57:org.apache.kafka.clients.NetworkClient.wakeup@POLYN346411" ]
  }, {
    "_id" : "58",
    "_lesItems" : [ "S58:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.close@POLYN415878", "S58:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN387354 (R48 in line [00240])", "S58:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN387354 (R48 in line [00240])", "S58:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417215 (R48 in line [00939],R53 in line [00939])" ]
  }, {
    "_id" : "59",
    "_lesItems" : [ "S59:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN229775", "S59:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN229775", "S59:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN390487 (R48 in line [00322],R67 in line [00322])", "S59:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.failureCause@POLYN438816" ]
  }, {
    "_id" : "60",
    "_lesItems" : [ "S60:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureActiveGroup@POLYN391806", "S60:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN393430", "S60:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN420190 (R48 in line [01017],R103 in line [01017],R104 in line [01017])", "S60:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN419491 (R48 in line [01004],R105 in line [01004],R106 in line [01004])" ]
  }, {
    "_id" : "61",
    "_lesItems" : [ "S61:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417414 (R48 in line [00943],R141 in line [00943])", "S61:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417569 (R48 in line [00947],R51 in line [00947],R52 in line [00947])", "S61:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417569 (R48 in line [00947],R51 in line [00947],R52 in line [00947])", "S61:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.disconnectAsync@POLYN262017", "S61:org.apache.kafka.clients.NetworkClient.wakeup@POLYN346411" ]
  }, {
    "_id" : "62",
    "_lesItems" : [ "S62:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420488 (R48 in line [01023],R142 in line [01023],R143 in line [01023],R144 in line [01023])", "S62:java.lang.String.format@POLYN905797" ]
  }, {
    "_id" : "63",
    "_lesItems" : [ "S63:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232624 (R46 in line [00309],R64 in line [00309],R65 in line [00309])", "S63:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232624 (R46 in line [00309],R64 in line [00309],R65 in line [00309])", "S63:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN161442" ]
  }, {
    "_id" : "64",
    "_lesItems" : [ "S64:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN368567", "S64:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN368567", "S64:org.apache.kafka.clients.Metadata.update@POLYN252367 (R29 in line [00263],R71 in line [00263],R72 in line [00263],R73 in line [00263],R74 in line [00263])", "S64:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN255371", "S64:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN255371", "S64:org.apache.kafka.clients.Metadata.requestUpdate@POLYN246887 (R29 in line [00145])" ]
  }, {
    "_id" : "65",
    "_lesItems" : [ "S65:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN368567", "S65:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN368567", "S65:org.apache.kafka.clients.Metadata.update@POLYN252367 (R29 in line [00263],R71 in line [00263],R72 in line [00263],R73 in line [00263],R74 in line [00263])", "S65:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN255371", "S65:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN255371", "S65:org.apache.kafka.common.requests.MetadataResponse.brokersById@POLYN221073", "S65:org.apache.kafka.common.requests.MetadataResponse.holder@POLYN220466 (R75 in line [00001])" ]
  }, {
    "_id" : "66",
    "_lesItems" : [ "S66:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN181343", "S66:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029 (R77 in line [00060],R78 in line [00060],R79 in line [00060],R80 in line [00060],R81 in line [00060])", "S66:org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN162927" ]
  }, {
    "_id" : "67",
    "_lesItems" : [ "S67:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.WorkerGroupMember@POLYN181343", "S67:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029 (R77 in line [00060],R78 in line [00060],R79 in line [00060],R80 in line [00060],R81 in line [00060])", "S67:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029 (R77 in line [00060],R78 in line [00060],R79 in line [00060],R80 in line [00060],R81 in line [00060])", "S67:org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN162927" ]
  }, {
    "_id" : "68",
    "_lesItems" : [ "S68:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN406087", "S68:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN406087", "S68:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN318181 (R90 in line [00275],R91 in line [00275])" ]
  }, {
    "_id" : "69",
    "_lesItems" : [ "S69:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN327090 (R90 in line [00479])", "S69:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN327090 (R90 in line [00479])", "S69:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335748", "S69:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335137 (R90 in line [00638],R120 in line [00638],R121 in line [00638])", "S69:java.io.InputStream.reset@POLYN252866 (R39 in line [00350])" ]
  }, {
    "_id" : "70",
    "_lesItems" : [ "S70:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN327090 (R90 in line [00479])", "S70:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN327090 (R90 in line [00479])", "S70:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN322645 (R90 in line [00380],R122 in line [00380],R123 in line [00380])", "S70:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN322645 (R90 in line [00380],R122 in line [00380],R123 in line [00380])", "S70:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126" ]
  }, {
    "_id" : "71",
    "_lesItems" : [ "S71:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN327090 (R90 in line [00479])", "S71:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN327090 (R90 in line [00479])", "S71:org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN330222 (R90 in line [00531],R124 in line [00531])", "S71:org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN330222 (R90 in line [00531],R124 in line [00531])", "S71:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126" ]
  }, {
    "_id" : "72",
    "_lesItems" : [ "S72:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323236 (R90 in line [00392],R158 in line [00392],R159 in line [00392],R160 in line [00392])", "S72:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN322491" ]
  }, {
    "_id" : "73",
    "_lesItems" : [ "S73:org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN314038 (R90 in line [00174],R192 in line [00174],R193 in line [00174])", "S73:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN319082" ]
  }, {
    "_id" : "74",
    "_lesItems" : [ "S74:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN325617 (R90 in line [00445],R194 in line [00445],R195 in line [00445])", "S74:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126" ]
  }, {
    "_id" : "75",
    "_lesItems" : [ "S75:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeValidatePositionForCurrentLeader@POLYN326089 (R90 in line [00458])", "S75:org.apache.kafka.clients.ApiVersions.get@POLYN149062 (R22 in line [00048])" ]
  }, {
    "_id" : "76",
    "_lesItems" : [ "S76:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN331789 (R90 in line [00563],R196 in line [00563])", "S76:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126" ]
  }, {
    "_id" : "77",
    "_lesItems" : [ "S77:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN332527 (R90 in line [00578],R197 in line [00578],R198 in line [00578])", "S77:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126" ]
  }, {
    "_id" : "78",
    "_lesItems" : [ "S78:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN332717 (R90 in line [00582],R199 in line [00582],R200 in line [00582])", "S78:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126" ]
  }, {
    "_id" : "79",
    "_lesItems" : [ "S79:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN332907 (R90 in line [00586],R201 in line [00586],R202 in line [00586])", "S79:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126" ]
  }, {
    "_id" : "80",
    "_lesItems" : [ "S80:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333347 (R90 in line [00598],R203 in line [00598],R204 in line [00598],R205 in line [00598])", "S80:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333347 (R90 in line [00598],R203 in line [00598],R204 in line [00598],R205 in line [00598])", "S80:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126" ]
  }, {
    "_id" : "81",
    "_lesItems" : [ "S81:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335332 (R90 in line [00642],R206 in line [00642],R207 in line [00642])", "S81:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335332 (R90 in line [00642],R206 in line [00642],R207 in line [00642])", "S81:java.io.InputStream.reset@POLYN252866 (R39 in line [00350])" ]
  }, {
    "_id" : "82",
    "_lesItems" : [ "S82:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN335896 (R90 in line [00653],R208 in line [00653],R209 in line [00653])", "S82:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN335896 (R90 in line [00653],R208 in line [00653],R209 in line [00653])", "S82:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126" ]
  }, {
    "_id" : "83",
    "_lesItems" : [ "S83:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN339974 (R90 in line [00739],R210 in line [00739])", "S83:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN339974 (R90 in line [00739],R210 in line [00739])", "S83:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126" ]
  }, {
    "_id" : "84",
    "_lesItems" : [ "S84:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN340125 (R90 in line [00743],R211 in line [00743])", "S84:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN340125 (R90 in line [00743],R211 in line [00743])", "S84:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126" ]
  }, {
    "_id" : "85",
    "_lesItems" : [ "S85:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN340271 (R90 in line [00747],R212 in line [00747],R213 in line [00747])", "S85:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN322491" ]
  }, {
    "_id" : "86",
    "_lesItems" : [ "S86:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318465", "S86:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318465", "S86:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN325881", "S86:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN383821 (R17 in line [00599],R111 in line [00599],R112 in line [00599])", "S86:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN381794 (R17 in line [00557],R38 in line [00557])", "S86:org.apache.kafka.clients.producer.internals.TransactionManager.hasInflightBatches@POLYN388082 (R17 in line [00692])" ]
  }, {
    "_id" : "87",
    "_lesItems" : [ "S87:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420488 (R48 in line [01023],R142 in line [01023],R143 in line [01023],R144 in line [01023])", "S87:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN420190 (R48 in line [01017],R103 in line [01017],R104 in line [01017])", "S87:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN419491 (R48 in line [01004],R105 in line [01004],R106 in line [01004])" ]
  }, {
    "_id" : "88",
    "_lesItems" : [ "S88:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323236 (R90 in line [00392],R158 in line [00392],R159 in line [00392],R160 in line [00392])", "S88:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323236 (R90 in line [00392],R158 in line [00392],R159 in line [00392],R160 in line [00392])", "S88:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN322491" ]
  }, {
    "_id" : "89",
    "_lesItems" : [ "S89:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN372050 (R17 in line [00327],R161 in line [00327])", "S89:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN372050 (R17 in line [00327],R161 in line [00327])", "S89:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN400070" ]
  }, {
    "_id" : "90",
    "_lesItems" : [ "S90:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235768 (R165 in line [00156],R166 in line [00156],R167 in line [00156],R168 in line [00156])", "S90:org.apache.kafka.streams.state.internals.RocksDBStore.validateStoreOpen@POLYN256268" ]
  }, {
    "_id" : "91",
    "_lesItems" : [ "S91:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235768 (R165 in line [00156],R166 in line [00156],R167 in line [00156],R168 in line [00156])", "S91:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235768 (R165 in line [00156],R166 in line [00156],R167 in line [00156],R168 in line [00156])", "S91:org.apache.kafka.streams.state.internals.RocksDBStore.validateStoreOpen@POLYN256268" ]
  }, {
    "_id" : "92",
    "_lesItems" : [ "S92:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN160102 (R177 in line [00071],R178 in line [00071])", "S92:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN159723 (R177 in line [00063],R179 in line [00063])", "S92:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN160930" ]
  }, {
    "_id" : "93",
    "_lesItems" : [ "S93:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN160790 (R177 in line [00084],R229 in line [00084])", "S93:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN160247 (R177 in line [00076],R230 in line [00076])" ]
  }, {
    "_id" : "94",
    "_lesItems" : [ "S94:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN340271 (R90 in line [00747],R212 in line [00747],R213 in line [00747])", "S94:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN340271 (R90 in line [00747],R212 in line [00747],R213 in line [00747])", "S94:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN322491" ]
  }, {
    "_id" : "95",
    "_lesItems" : [ "S95:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN166527 (R235 in line [00169],R236 in line [00169])", "S95:org.apache.kafka.raft.QuorumState.isLeader@POLYN231945" ]
  }, {
    "_id" : "96",
    "_lesItems" : [ "S96:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN166527 (R235 in line [00169],R236 in line [00169])", "S96:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN166527 (R235 in line [00169],R236 in line [00169])", "S96:org.apache.kafka.raft.QuorumState.isLeader@POLYN231945" ]
  }, {
    "_id" : "97",
    "_lesItems" : [ "S97:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258997 (R247 in line [00260],R248 in line [00260],R249 in line [00260],R250 in line [00260])", "S97:org.apache.kafka.streams.state.internals.RocksDBStore.validateStoreOpen@POLYN256268" ]
  }, {
    "_id" : "98",
    "_lesItems" : [ "S98:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258997 (R247 in line [00260],R248 in line [00260],R249 in line [00260],R250 in line [00260])", "S98:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258997 (R247 in line [00260],R248 in line [00260],R249 in line [00260],R250 in line [00260])", "S98:org.apache.kafka.streams.state.internals.RocksDBStore.validateStoreOpen@POLYN256268" ]
  }, {
    "_id" : "99",
    "_lesItems" : [ "S99:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163428 (R253 in line [00095],R254 in line [00095])", "S99:org.apache.kafka.common.utils.Time.milliseconds@POLYN153117" ]
  }, {
    "_id" : "100",
    "_lesItems" : [ "S100:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163428 (R253 in line [00095],R254 in line [00095])", "S100:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163428 (R253 in line [00095],R254 in line [00095])", "S100:org.apache.kafka.common.utils.Time.milliseconds@POLYN153117" ]
  } ],
  "_lesDeadlocksTypos" : [ {
    "_typo" : "No 1",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : ""
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "R0",
    "_c2" : "R5",
    "_c3" : ""
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S0 org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S0 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S0 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S0 org.apache.kafka.streams.KafkaStreams.closeToError@POLYN557676"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "1",
    "_c2" : "",
    "_c3" : "S0 org.apache.kafka.streams.KafkaStreams.start@POLYN550767/line[01832]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S0 org.apache.kafka.streams.KafkaStreams.start@POLYN550767/line[01832]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S0 org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258552/line[00001]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S0 org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258552/line[00001]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S0 org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258847"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S0 org.apache.kafka.common.utils.Utils.delete@POLYN444301"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : ""
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S1 org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S1 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S1 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S1 org.apache.kafka.streams.KafkaStreams.closeToError@POLYN557676"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "1",
    "_c2" : "",
    "_c3" : "S1 org.apache.kafka.streams.KafkaStreams.start@POLYN550767/line[01832]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S1 org.apache.kafka.streams.KafkaStreams.start@POLYN550767/line[01832]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S1 org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258552/line[00001]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S1 org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258552/line[00001]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S1 org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258847"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S1 org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258847"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S1 org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255547/line[00001]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S1 org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255547/line[00001]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S1 org.apache.kafka.common.header.Headers.remove@POLYN152004"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : ""
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S3 org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S3 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S3 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S3 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665/line[01039]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "1",
    "_c3" : "S3 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665/line[01051]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S3 org.apache.kafka.streams.KafkaStreams.createAndAddStreamThread@POLYN533868"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S3 org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S3 org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S3 org.apache.kafka.streams.StreamsConfig.getRestoreConsumerConfigs@POLYN467309"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S3 org.apache.kafka.streams.StreamsConfig.getCommonConsumerConfigs@POLYN456930"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S3 org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193821"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S3 org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555/line[00157]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S3 org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555/line[00157]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S3 org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555/line[00157]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S3 org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143222"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : ""
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S4 org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S4 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S4 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S4 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665/line[01039]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "1",
    "_c3" : "S4 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665/line[01051]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S4 org.apache.kafka.streams.KafkaStreams.createAndAddStreamThread@POLYN533868"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S4 org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S4 org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S4 org.apache.kafka.streams.StreamsConfig.getRestoreConsumerConfigs@POLYN467309"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S4 org.apache.kafka.streams.StreamsConfig.getCommonConsumerConfigs@POLYN456930"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S4 org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193821"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S4 org.apache.kafka.streams.state.internals.ThreadCache.maybeEvict@POLYN199533"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S4 org.apache.kafka.streams.state.internals.NamedCache.evict@POLYN196872/line[00235]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S4 org.apache.kafka.streams.state.internals.NamedCache.flush@POLYN191208"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S4 org.apache.kafka.streams.state.internals.NamedCache.flush@POLYN191208"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S4 org.apache.kafka.common.metrics.Sensor.add@POLYN217504/line[00328]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S4 org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN302143/line[00690]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S4 org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN302143/line[00690]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S4 org.apache.kafka.common.metrics.KafkaMetric.metricName@POLYN150322"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : ""
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S9 org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S9 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S9 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S9 org.apache.kafka.streams.KafkaStreams.closeToError@POLYN557676"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "1",
    "_c2" : "",
    "_c3" : "S9 org.apache.kafka.streams.KafkaStreams.start@POLYN550767/line[01832]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S9 org.apache.kafka.streams.KafkaStreams.start@POLYN550767/line[01832]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S9 org.apache.kafka.streams.processor.internals.GlobalStreamThread.start@POLYN215560/line[00434]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S9 org.apache.kafka.streams.processor.internals.GlobalStreamThread.start@POLYN215560/line[00434]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S9 org.apache.kafka.common.utils.Utils.sleep@POLYN420932"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : ""
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S10 org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S10 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S10 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S10 org.apache.kafka.streams.KafkaStreams.closeToError@POLYN557676"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "1",
    "_c2" : "",
    "_c3" : "S10 org.apache.kafka.streams.KafkaStreams.start@POLYN550767/line[01832]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S10 org.apache.kafka.streams.KafkaStreams.start@POLYN550767/line[01832]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "2",
    "_c3" : "S10 org.apache.kafka.streams.KafkaStreams.setState@POLYN505909/line[00322]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S10 org.apache.kafka.streams.KafkaStreams.setState@POLYN505909/line[00322]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S10 java.lang.Object.notifyAll@POLYN294461"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : ""
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S11 org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S11 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S11 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S11 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665/line[01039]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "1",
    "_c3" : "S11 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665/line[01051]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S11 org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN546254/line[01215]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S11 org.apache.kafka.common.header.Headers.remove@POLYN152004"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : ""
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S12 org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S12 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S12 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S12 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665/line[01039]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "1",
    "_c3" : "S12 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665/line[01051]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S12 org.apache.kafka.streams.KafkaStreams.createAndAddStreamThread@POLYN533868"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S12 org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S12 org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S12 org.apache.kafka.streams.StreamsConfig.getRestoreConsumerConfigs@POLYN467309"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S12 org.apache.kafka.streams.StreamsConfig.getCommonConsumerConfigs@POLYN456930"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S12 org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193821"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S12 org.apache.kafka.streams.state.internals.ThreadCache.getOrCreateCache@POLYN200402/line[00285]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S12 org.apache.kafka.streams.state.internals.ThreadCache.get@POLYN193301"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S12 org.apache.kafka.streams.state.internals.ThreadCache.getCache@POLYN200247/line[00281]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : ""
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S13 org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S13 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S13 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S13 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665/line[01039]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "1",
    "_c3" : "S13 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665/line[01051]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S13 org.apache.kafka.streams.KafkaStreams.createAndAddStreamThread@POLYN533868"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S13 org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S13 org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S13 org.apache.kafka.streams.processor.internals.StreamThread.StreamThread@POLYN343136"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S13 org.apache.kafka.streams.processor.internals.metrics.ThreadMetrics.commitSensor@POLYN192950"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S13 org.apache.kafka.streams.processor.internals.metrics.ThreadMetrics.invocationRateAndCountAndAvgAndMaxLatencySensor@POLYN200926"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S13 org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadLevelSensor@POLYN286456/line[00257]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S13 org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN286912"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : ""
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S14 org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S14 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S14 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S14 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665/line[01039]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "1",
    "_c3" : "S14 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665/line[01051]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S14 org.apache.kafka.streams.KafkaStreams.createAndAddStreamThread@POLYN533868"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S14 org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S14 org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S14 org.apache.kafka.streams.processor.internals.StreamThread.StreamThread@POLYN343136"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S14 org.apache.kafka.streams.internals.metrics.ClientMetrics.failedStreamThreadSensor@POLYN160048"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S14 org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelSensor@POLYN285767/line[00241]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S14 org.apache.kafka.common.metrics.Metrics.getSensor@POLYN289905"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : ""
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S15 org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S15 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S15 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S15 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665/line[01039]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "1",
    "_c3" : "S15 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665/line[01051]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S15 org.apache.kafka.streams.KafkaStreams.createAndAddStreamThread@POLYN533868"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S15 org.apache.kafka.common.metrics.Sensor.add@POLYN217504/line[00328]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S15 org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN302143/line[00690]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S15 org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN302143/line[00690]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S15 org.apache.kafka.common.metrics.KafkaMetric.metricName@POLYN150322"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : ""
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S16 org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S16 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S16 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S16 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665/line[01039]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "1",
    "_c3" : "S16 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665/line[01051]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "2",
    "_c2" : "",
    "_c3" : "S16 org.apache.kafka.streams.KafkaStreams.start@POLYN550767/line[01832]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S16 org.apache.kafka.streams.KafkaStreams.start@POLYN550767/line[01832]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S16 org.apache.kafka.streams.processor.internals.GlobalStreamThread.start@POLYN215560/line[00434]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S16 org.apache.kafka.streams.processor.internals.GlobalStreamThread.start@POLYN215560/line[00434]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S16 org.apache.kafka.common.utils.Utils.sleep@POLYN420932"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : ""
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S17 org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S17 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S17 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S17 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665/line[01039]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "1",
    "_c3" : "S17 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665/line[01051]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S17 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665/line[01039]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S17 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665/line[01051]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S17 org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN546254/line[01215]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S17 org.apache.kafka.common.header.Headers.remove@POLYN152004"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : ""
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S18 org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S18 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S18 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S18 org.apache.kafka.streams.KafkaStreams.closeToError@POLYN557676"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "1",
    "_c2" : "",
    "_c3" : "S18 org.apache.kafka.streams.KafkaStreams.start@POLYN550767/line[01832]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S18 org.apache.kafka.streams.KafkaStreams.start@POLYN550767/line[01832]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S18 org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258552/line[00001]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S18 org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258552/line[00001]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S18 org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258847"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S18 org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258847"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S18 org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255547/line[00001]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S18 org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255547/line[00001]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S18 org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255547/line[00001]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S18 org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255547/line[00001]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S18 org.apache.kafka.common.header.Headers.remove@POLYN152004"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : ""
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S19 org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S19 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S19 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S19 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665/line[01039]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "1",
    "_c3" : "S19 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665/line[01051]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S19 org.apache.kafka.streams.KafkaStreams.createAndAddStreamThread@POLYN533868"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S19 org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S19 org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S19 org.apache.kafka.streams.StreamsConfig.getRestoreConsumerConfigs@POLYN467309"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S19 org.apache.kafka.streams.StreamsConfig.getCommonConsumerConfigs@POLYN456930"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S19 org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193821"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S19 org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555/line[00157]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S19 org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555/line[00157]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S19 org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555/line[00157]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S19 org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555/line[00157]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S19 org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555/line[00157]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S19 org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555/line[00157]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S19 org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143222"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : ""
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S20 org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S20 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S20 org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S20 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665/line[01039]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "1",
    "_c3" : "S20 org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665/line[01051]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S20 org.apache.kafka.streams.KafkaStreams.createAndAddStreamThread@POLYN533868"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S20 org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S20 org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S20 org.apache.kafka.streams.StreamsConfig.getRestoreConsumerConfigs@POLYN467309"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S20 org.apache.kafka.streams.StreamsConfig.getCommonConsumerConfigs@POLYN456930"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S20 org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193821"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S20 org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555/line[00157]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S20 org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555/line[00157]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S20 org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555/line[00157]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S20 org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555/line[00157]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S20 org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555/line[00157]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S20 org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555/line[00157]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S20 org.apache.kafka.common.metrics.Sensor.add@POLYN217504/line[00328]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S20 org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN302143/line[00690]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S20 org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN302143/line[00690]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S20 org.apache.kafka.common.metrics.KafkaMetric.metricName@POLYN150322"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : ""
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S46 org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221034"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S46 org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221332/line[00104]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S46 org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221332/line[00104]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S46 org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221332/line[00104]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S46 org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221332/line[00104]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "1",
    "_c2" : "",
    "_c3" : "S46 org.apache.kafka.streams.KafkaStreams.start@POLYN550767/line[01832]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S46 org.apache.kafka.streams.KafkaStreams.start@POLYN550767/line[01832]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S46 org.apache.kafka.streams.processor.internals.GlobalStreamThread.start@POLYN215560/line[00434]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S46 org.apache.kafka.streams.processor.internals.GlobalStreamThread.start@POLYN215560/line[00434]"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : "S46 org.apache.kafka.common.utils.Utils.sleep@POLYN420932"
  }, {
    "_typo" : "",
    "_step" : "",
    "_c1" : "",
    "_c2" : "",
    "_c3" : ""
  } ]
}