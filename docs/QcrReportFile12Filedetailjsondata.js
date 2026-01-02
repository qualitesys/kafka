{
  "_lesSequences" : [ {
    "_id" : "1",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readArray@POLYN851753.false",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN835896 in line [01908]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN835896.unshared",
      "_risk" : "//QC-JAVCWZ099[01908] In java.io.ObjectInputStream.readArray@POLYN851753[01908] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN844188.unshared",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN845655 in line [01710]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN844188.descriptor",
      "_risk" : "//QC-JAVCWZ099[01710] In java.io.ObjectInputStream.readClassDesc@POLYN844188[01710] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN844188.descriptor",
      "_method" : "---java.io.ObjectInputStream.validateDescriptor@POLYN942447 in line [01720]",
      "_target" : "java.io.ObjectInputStream.validateDescriptor@POLYN942447.descriptor",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN835896.unshared",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN844188 in line [01522]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN844188.unshared",
      "_risk" : "//QC-JAVCWZ099[01522] In java.io.ObjectInputStream.readObject0@POLYN835896[01522] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.validateDescriptor@POLYN942447.descriptor",
      "_method" : "---java.io.ObjectInputStream.validateDescriptor@POLYN942447 in line [03866]",
      "_target" : "java.io.ObjectInputStream.validateDescriptor@POLYN942447.cibledummy_03866",
      "_risk" : ""
    } ]
  }, {
    "_id" : "2",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN844188.unshared",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN845655 in line [01710]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN844188.descriptor",
      "_risk" : "//QC-JAVCWZ099[01710] In java.io.ObjectInputStream.readClassDesc@POLYN844188[01710] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN844188.descriptor",
      "_method" : "---java.io.ObjectInputStream.validateDescriptor@POLYN942447 in line [01720]",
      "_target" : "java.io.ObjectInputStream.validateDescriptor@POLYN942447.descriptor",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN835896.unshared",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN844188 in line [01522]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN844188.unshared",
      "_risk" : "//QC-JAVCWZ099[01522] In java.io.ObjectInputStream.readObject0@POLYN835896[01522] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.skipCustomData@POLYN866712.false",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN835896 in line [02211]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN835896.unshared",
      "_risk" : "//QC-JAVCWZ099[02211] In java.io.ObjectInputStream.skipCustomData@POLYN866712[02211] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.validateDescriptor@POLYN942447.descriptor",
      "_method" : "---java.io.ObjectInputStream.validateDescriptor@POLYN942447 in line [03866]",
      "_target" : "java.io.ObjectInputStream.validateDescriptor@POLYN942447.cibledummy_03866",
      "_risk" : ""
    } ]
  }, {
    "_id" : "3",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.nChars",
      "_method" : "---java.io.BufferedReader.BufferedReader@POLYN240816.dummymethode_00106 in line [00106]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "dst+n",
      "_method" : "---java.io.BufferedReader.fill@POLYN241817.dummymethode_00164 in line [00164]",
      "_target" : "java.io.BufferedReader.nChars",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249958.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN249958[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedReader.readLine@POLYN249958.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958.dummymethode_00358 in line [00358]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249958.cibledummy_00358",
      "_risk" : "//QC-JAVCWE099[00358] In java.io.BufferedReader.readLine@POLYN249958[00358] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "4",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "0",
      "_method" : "---java.io.BufferedReader.fill@POLYN241817.dummymethode_00132 in line [00132]",
      "_target" : "java.io.BufferedReader.fill@POLYN241817.dst",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.fill@POLYN241817.dst",
      "_method" : "---java.io.BufferedReader.fill@POLYN241817.dummymethode_00165 in line [00165]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249958.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN249958[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedReader.readLine@POLYN249958.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958.dummymethode_00358 in line [00358]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249958.cibledummy_00358",
      "_risk" : "//QC-JAVCWE099[00358] In java.io.BufferedReader.readLine@POLYN249958[00358] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "5",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedInputStream.read@POLYN252602.-1",
      "_method" : "---java.io.BufferedInputStream.read@POLYN252602.dummymethode_00267 in line [00267]",
      "_target" : "java.io.BufferedInputStream.read@POLYN252602.return",
      "_risk" : "//QC-JAVCWZ099[00267] In java.io.BufferedInputStream.read@POLYN252602[00267] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.read@POLYN815528.return",
      "_method" : "---java.io.ObjectInputStream.read@POLYN815528 in line [03061]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN903243.n",
      "_risk" : "//QC-JAVCWZ099[03061] In java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN903243[03061] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN903243.n",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN903243.dummymethode_03065 in line [03065]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN903243.off",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedInputStream.read@POLYN252602.return",
      "_method" : "---java.io.BufferedInputStream.read@POLYN252602 in line [00893]",
      "_target" : "java.io.ObjectInputStream.read@POLYN815528.return",
      "_risk" : "//QC-JAVCWZ099[00893] In java.io.ObjectInputStream.read@POLYN815528[00893] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "6",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readNull@POLYN841427.null",
      "_method" : "---java.io.ObjectInputStream.readNull@POLYN841427.dummymethode_01635 in line [01635]",
      "_target" : "java.io.ObjectInputStream.readNull@POLYN841427.return",
      "_risk" : "//QC-JAVCWZ099[01635] In java.io.ObjectInputStream.readNull@POLYN841427[01635] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readNull@POLYN841427.return",
      "_method" : "---java.io.ObjectInputStream.readNull@POLYN841427 in line [01512]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN835896.return",
      "_risk" : "//QC-JAVCWZ099[01512] In java.io.ObjectInputStream.readObject0@POLYN835896[01512] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN835896.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN835896 in line [00512]",
      "_target" : "java.io.ObjectInputStream.readUnshared@POLYN801185.obj",
      "_risk" : "//QC-JAVCWZ099[00512] In java.io.ObjectInputStream.readUnshared@POLYN801185[00512] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readUnshared@POLYN801185.obj",
      "_method" : "---java.io.ObjectInputStream.readUnshared@POLYN801185.dummymethode_00521 in line [00521]",
      "_target" : "java.io.ObjectInputStream.readUnshared@POLYN801185.return",
      "_risk" : "//QC-JAVCWZ099[00521] In java.io.ObjectInputStream.readUnshared@POLYN801185[00521] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "7",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readHandle@POLYN841813.obj",
      "_method" : "---java.io.ObjectInputStream.readHandle@POLYN841813.dummymethode_01665 in line [01665]",
      "_target" : "java.io.ObjectInputStream.readHandle@POLYN841813.return",
      "_risk" : "//QC-JAVCWZ099[01665] In java.io.ObjectInputStream.readHandle@POLYN841813[01665] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readHandle@POLYN841813.return",
      "_method" : "---java.io.ObjectInputStream.readHandle@POLYN841813 in line [01515]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN835896.return",
      "_risk" : "//QC-JAVCWZ099[01515] In java.io.ObjectInputStream.readObject0@POLYN835896[01515] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN835896.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN835896 in line [00512]",
      "_target" : "java.io.ObjectInputStream.readUnshared@POLYN801185.obj",
      "_risk" : "//QC-JAVCWZ099[00512] In java.io.ObjectInputStream.readUnshared@POLYN801185[00512] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readUnshared@POLYN801185.obj",
      "_method" : "---java.io.ObjectInputStream.readUnshared@POLYN801185.dummymethode_00521 in line [00521]",
      "_target" : "java.io.ObjectInputStream.readUnshared@POLYN801185.return",
      "_risk" : "//QC-JAVCWZ099[00521] In java.io.ObjectInputStream.readUnshared@POLYN801185[00521] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "8",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readClass@POLYN843113.cl",
      "_method" : "---java.io.ObjectInputStream.readClass@POLYN843113.dummymethode_01688 in line [01688]",
      "_target" : "java.io.ObjectInputStream.readClass@POLYN843113.return",
      "_risk" : "//QC-JAVCWZ099[01688] In java.io.ObjectInputStream.readClass@POLYN843113[01688] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClass@POLYN843113.return",
      "_method" : "---java.io.ObjectInputStream.readClass@POLYN843113 in line [01518]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN835896.return",
      "_risk" : "//QC-JAVCWZ099[01518] In java.io.ObjectInputStream.readObject0@POLYN835896[01518] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN835896.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN835896 in line [00512]",
      "_target" : "java.io.ObjectInputStream.readUnshared@POLYN801185.obj",
      "_risk" : "//QC-JAVCWZ099[00512] In java.io.ObjectInputStream.readUnshared@POLYN801185[00512] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readUnshared@POLYN801185.obj",
      "_method" : "---java.io.ObjectInputStream.readUnshared@POLYN801185.dummymethode_00521 in line [00521]",
      "_target" : "java.io.ObjectInputStream.readUnshared@POLYN801185.return",
      "_risk" : "//QC-JAVCWZ099[00521] In java.io.ObjectInputStream.readUnshared@POLYN801185[00521] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "9",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.checkResolve@POLYN839446.obj",
      "_method" : "---java.io.ObjectInputStream.checkResolve@POLYN839446.dummymethode_01581 in line [01581]",
      "_target" : "java.io.ObjectInputStream.checkResolve@POLYN839446.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.checkResolve@POLYN839446.return",
      "_method" : "---java.io.ObjectInputStream.checkResolve@POLYN839446 in line [01526]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN835896.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN835896.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN835896 in line [00512]",
      "_target" : "java.io.ObjectInputStream.readUnshared@POLYN801185.obj",
      "_risk" : "//QC-JAVCWZ099[00512] In java.io.ObjectInputStream.readUnshared@POLYN801185[00512] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readUnshared@POLYN801185.obj",
      "_method" : "---java.io.ObjectInputStream.readUnshared@POLYN801185.dummymethode_00521 in line [00521]",
      "_target" : "java.io.ObjectInputStream.readUnshared@POLYN801185.return",
      "_risk" : "//QC-JAVCWZ099[00521] In java.io.ObjectInputStream.readUnshared@POLYN801185[00521] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "10",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.lang.Object.getClass@POLYN297531.return",
      "_method" : "---java.lang.Object.getClass@POLYN297531 in line [01129]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.cl",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.cl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593655.dummymethode_01134 in line [01134]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.desc",
      "_risk" : "//QC-JAVCWZ099[01134] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01134] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.desc",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474.desc",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN599186 in line [01427]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474.cibledummy_01427",
      "_risk" : "//QC-JAVCWZ099[01427] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474[01427] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "11",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.cl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593655.dummymethode_01134 in line [01134]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.desc",
      "_risk" : "//QC-JAVCWZ099[01134] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01134] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.repCl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593655.dummymethode_01141 in line [01141]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.cl",
      "_risk" : "//QC-JAVCWZ099[01141] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01141] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.desc",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474.desc",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN599186 in line [01427]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474.cibledummy_01427",
      "_risk" : "//QC-JAVCWZ099[01427] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474[01427] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "12",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN569139.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593655 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.obj",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN569139[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN612110 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474.cibledummy_01432",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.lang.StringBuilder.writeObject@POLYN247731.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN569139 in line [00465]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN569139.obj",
      "_risk" : "//QC-JAVCWZ099[00465] In java.lang.StringBuilder.writeObject@POLYN247731[00465] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "13",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603710.objs[i]",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593655 in line [01378]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.obj",
      "_risk" : "//QC-JAVCWZ099[01378] In java.io.ObjectOutputStream.writeArray@POLYN603710[01378] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN612110 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN612110.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN612110.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN612110.dummymethode_01496 in line [01496]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN612110.cibledummy_01496",
      "_risk" : "//QC-JAVCWZ099[01496] In java.io.ObjectOutputStream.writeSerialData@POLYN612110[01496] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "14",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN612110 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN612110.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN612110.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN612110.dummymethode_01496 in line [01496]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN612110.cibledummy_01496",
      "_risk" : "//QC-JAVCWZ099[01496] In java.io.ObjectOutputStream.writeSerialData@POLYN612110[01496] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN571357.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593655 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.obj",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN571357[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "15",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.receive@POLYN231811.len",
      "_method" : "---java.io.PipedInputStream.receive@POLYN231811.dummymethode_00228 in line [00228]",
      "_target" : "java.io.PipedInputStream.receive@POLYN231811.bytesToTransfer",
      "_risk" : "//QC-JAVCWZ099[00228] In java.io.PipedInputStream.receive@POLYN231811[00228] source data PATHtainted (java.io.PipedInputStream.receive) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.receive@POLYN231811.bytesToTransfer",
      "_method" : "---java.io.PipedInputStream.receive@POLYN231811.dummymethode_00244 in line [00244]",
      "_target" : "java.io.PipedInputStream.receive@POLYN231811.nextTransferAmount",
      "_risk" : "//QC-JAVCWZ099[00244] In java.io.PipedInputStream.receive@POLYN231811[00244] source data PATHtainted (java.io.PipedInputStream.receive) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PipedInputStream.receive@POLYN231811.nextTransferAmount",
      "_method" : "---java.io.PipedInputStream.receive@POLYN231811.dummymethode_00246 in line [00246]",
      "_target" : "java.io.PipedInputStream.receive@POLYN231811.cibledummy_00246",
      "_risk" : "//QC-JAVCWZ099[00246] In java.io.PipedInputStream.receive@POLYN231811[00246] source data PATHtainted (java.io.PipedInputStream.receive) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.PipedOutputStream.write@POLYN183671.len",
      "_method" : "---java.io.PipedInputStream.receive@POLYN231811 in line [00149]",
      "_target" : "java.io.PipedInputStream.receive@POLYN231811.len",
      "_risk" : "//QC-JAVCWZ099[00149] In java.io.PipedOutputStream.write@POLYN183671[00149] source data PATHtainted (java.io.PipedInputStream.receive) RiskOnInput"
    } ]
  }, {
    "_id" : "16",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN376088.s",
      "_method" : "---java.io.PrintStream.write@POLYN370443 in line [00653]",
      "_target" : "java.io.PrintStream.write@POLYN370443.buf",
      "_risk" : "//QC-JAVCWZ099[00653] In java.io.PrintStream.print@POLYN376088[00653] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.println@POLYN380543.x",
      "_method" : "---java.io.PrintStream.print@POLYN376088 in line [00792]",
      "_target" : "java.io.PrintStream.print@POLYN376088.s",
      "_risk" : "//QC-JAVCWZ099[00792] In java.io.PrintStream.println@POLYN380543[00792] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.write@POLYN370443.buf",
      "_method" : "---java.io.Writer.write@POLYN202163 in line [00503]",
      "_target" : "java.io.Writer.write@POLYN202163.cbuf",
      "_risk" : "//QC-JAVCWZ099[00503] In java.io.PrintStream.write@POLYN370443[00503] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.Writer.write@POLYN202163.cbuf",
      "_method" : "---java.io.Writer.write@POLYN202163.dummymethode_00127 in line [00127]",
      "_target" : "java.io.Writer.write@POLYN202163.cibledummy_00127",
      "_risk" : "//QC-JAVCWZ099[00127] In java.io.Writer.write@POLYN202163[00127] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "17",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.lang.Throwable.Throwable@POLYN372776.message",
      "_method" : "---java.lang.Throwable.Throwable@POLYN372776.dummymethode_00272 in line [00272]",
      "_target" : "java.lang.Throwable.detailMessage",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.Throwable.getMessage@POLYN376577.return",
      "_method" : "---java.lang.Throwable.getMessage@POLYN376577 in line [00397]",
      "_target" : "java.lang.Throwable.getLocalizedMessage@POLYN376905.return",
      "_risk" : "//QC-JAVCWZ078[00397] In java.lang.Throwable.getLocalizedMessage@POLYN376905[00397] target data OSTainted (java.lang.Throwable.getMessage) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.lang.Throwable.detailMessage",
      "_method" : "---java.lang.Throwable.getMessage@POLYN376577.dummymethode_00383 in line [00383]",
      "_target" : "java.lang.Throwable.getMessage@POLYN376577.return",
      "_risk" : "//QC-JAVCWZ078[00383] In java.lang.Throwable.getMessage@POLYN376577[00383] target data OSTainted (java.lang.Throwable.getMessage) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.lang.Throwable.getLocalizedMessage@POLYN376905.return",
      "_method" : "---java.lang.Throwable.getLocalizedMessage@POLYN376905 in line [00496]",
      "_target" : "java.lang.Throwable.toString@POLYN380143.message",
      "_risk" : "//QC-JAVCWZ078[00496] In java.lang.Throwable.toString@POLYN380143[00496] target data OSTainted (java.lang.Throwable.getLocalizedMessage) RiskOnInput"
    } ]
  }, {
    "_id" : "18",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.lang.Throwable.Throwable@POLYN373473.message",
      "_method" : "---java.lang.Throwable.Throwable@POLYN373473.dummymethode_00294 in line [00294]",
      "_target" : "java.lang.Throwable.detailMessage",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.Throwable.getMessage@POLYN376577.return",
      "_method" : "---java.lang.Throwable.getMessage@POLYN376577 in line [00397]",
      "_target" : "java.lang.Throwable.getLocalizedMessage@POLYN376905.return",
      "_risk" : "//QC-JAVCWZ078[00397] In java.lang.Throwable.getLocalizedMessage@POLYN376905[00397] target data OSTainted (java.lang.Throwable.getMessage) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.lang.Throwable.detailMessage",
      "_method" : "---java.lang.Throwable.getMessage@POLYN376577.dummymethode_00383 in line [00383]",
      "_target" : "java.lang.Throwable.getMessage@POLYN376577.return",
      "_risk" : "//QC-JAVCWZ078[00383] In java.lang.Throwable.getMessage@POLYN376577[00383] target data OSTainted (java.lang.Throwable.getMessage) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.lang.Throwable.getLocalizedMessage@POLYN376905.return",
      "_method" : "---java.lang.Throwable.getLocalizedMessage@POLYN376905 in line [00496]",
      "_target" : "java.lang.Throwable.toString@POLYN380143.message",
      "_risk" : "//QC-JAVCWZ078[00496] In java.lang.Throwable.toString@POLYN380143[00496] target data OSTainted (java.lang.Throwable.getLocalizedMessage) RiskOnInput"
    } ]
  }, {
    "_id" : "19",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.lang.Throwable.Throwable@POLYN375903.message",
      "_method" : "---java.lang.Throwable.Throwable@POLYN375903.dummymethode_00370 in line [00370]",
      "_target" : "java.lang.Throwable.detailMessage",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.Throwable.getMessage@POLYN376577.return",
      "_method" : "---java.lang.Throwable.getMessage@POLYN376577 in line [00397]",
      "_target" : "java.lang.Throwable.getLocalizedMessage@POLYN376905.return",
      "_risk" : "//QC-JAVCWZ078[00397] In java.lang.Throwable.getLocalizedMessage@POLYN376905[00397] target data OSTainted (java.lang.Throwable.getMessage) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.lang.Throwable.detailMessage",
      "_method" : "---java.lang.Throwable.getMessage@POLYN376577.dummymethode_00383 in line [00383]",
      "_target" : "java.lang.Throwable.getMessage@POLYN376577.return",
      "_risk" : "//QC-JAVCWZ078[00383] In java.lang.Throwable.getMessage@POLYN376577[00383] target data OSTainted (java.lang.Throwable.getMessage) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.lang.Throwable.getLocalizedMessage@POLYN376905.return",
      "_method" : "---java.lang.Throwable.getLocalizedMessage@POLYN376905 in line [00496]",
      "_target" : "java.lang.Throwable.toString@POLYN380143.message",
      "_risk" : "//QC-JAVCWZ078[00496] In java.lang.Throwable.toString@POLYN380143[00496] target data OSTainted (java.lang.Throwable.getLocalizedMessage) RiskOnInput"
    } ]
  }, {
    "_id" : "20",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN803861.curDesc",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN803861.dummymethode_00591 in line [00591]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN803861.getField",
      "_risk" : "//QC-JAVCWZ099[00591] In java.io.ObjectInputStream.readFields@POLYN803861[00591] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN803861.return",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN803861 in line [00592]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN803861.cibledummy_00592",
      "_risk" : "//QC-JAVCWZ099[00592] In java.io.ObjectInputStream.readFields@POLYN803861[00592] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN803861.getField",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN803861.dummymethode_00603 in line [00603]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN803861.return",
      "_risk" : "//QC-JAVCWZ099[00603] In java.io.ObjectInputStream.readFields@POLYN803861[00603] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "21",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.readLine@POLYN249958.null",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958.dummymethode_00329 in line [00329]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249958.return",
      "_risk" : "//QC-JAVCWZ099[00329] In java.io.BufferedReader.readLine@POLYN249958[00329] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.readLine@POLYN249958.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958 in line [00389]",
      "_target" : "java.io.BufferedReader.readLine@POLYN253159.return",
      "_risk" : "//QC-JAVCWZ099[00389] In java.io.BufferedReader.readLine@POLYN253159[00389] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.readLine@POLYN253159.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN253159 in line [01109]",
      "_target" : "java.io.ObjectInputStream.readLine@POLYN822158.return",
      "_risk" : "//QC-JAVCWZ099[01109] In java.io.ObjectInputStream.readLine@POLYN822158[01109] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "22",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readClassDescriptor@POLYN815099.desc",
      "_method" : "---java.io.ObjectInputStream.readClassDescriptor@POLYN815099.dummymethode_00883 in line [00883]",
      "_target" : "java.io.ObjectInputStream.readClassDescriptor@POLYN815099.return",
      "_risk" : "//QC-JAVCWZ099[00883] In java.io.ObjectInputStream.readClassDescriptor@POLYN815099[00883] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClassDescriptor@POLYN815099.return",
      "_method" : "---java.io.ObjectInputStream.readClassDescriptor@POLYN815099 in line [01815]",
      "_target" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN848497.readDesc",
      "_risk" : "//QC-JAVCWZ099[01815] In java.io.ObjectInputStream.readNonProxyDesc@POLYN848497[01815] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN848497.readDesc",
      "_method" : "---java.io.ObjectInputStream.readNonProxyDesc@POLYN848497.dummymethode_01843 in line [01843]",
      "_target" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN848497.cibledummy_01843",
      "_risk" : "//QC-JAVCWZ099[01843] In java.io.ObjectInputStream.readNonProxyDesc@POLYN848497[01843] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "23",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN376552.\"null\"",
      "_method" : "---java.io.PrintStream.print@POLYN376552.dummymethode_00667 in line [00667]",
      "_target" : "java.io.PrintStream.print@POLYN376552.s",
      "_risk" : "//QC-JAVCWZ099[00667] In java.io.PrintStream.print@POLYN376552[00667] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.print@POLYN376552.s",
      "_method" : "---java.io.PrintStream.write@POLYN371361 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN371361.s",
      "_risk" : "//QC-JAVCWZ099[00669] In java.io.PrintStream.print@POLYN376552[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.write@POLYN371361.s",
      "_method" : "---java.io.Writer.write@POLYN202828 in line [00525]",
      "_target" : "java.io.PrintStream.write@POLYN371361.cibledummy_00525",
      "_risk" : ""
    } ]
  }, {
    "_id" : "24",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN376552.s",
      "_method" : "---java.io.PrintStream.write@POLYN371361 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN371361.s",
      "_risk" : "//QC-JAVCWZ099[00669] In java.io.PrintStream.print@POLYN376552[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.println@POLYN381001.x",
      "_method" : "---java.io.PrintStream.print@POLYN376552 in line [00806]",
      "_target" : "java.io.PrintStream.print@POLYN376552.s",
      "_risk" : "//QC-JAVCWZ099[00806] In java.io.PrintStream.println@POLYN381001[00806] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.write@POLYN371361.s",
      "_method" : "---java.io.Writer.write@POLYN202828 in line [00525]",
      "_target" : "java.io.PrintStream.write@POLYN371361.cibledummy_00525",
      "_risk" : ""
    } ]
  }, {
    "_id" : "25",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN359323.s",
      "_method" : "---java.io.PrintWriter.write@POLYN354296 in line [00587]",
      "_target" : "java.io.PrintWriter.write@POLYN354296.buf",
      "_risk" : "//QC-JAVCWZ099[00587] In java.io.PrintWriter.print@POLYN359323[00587] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN363847.x",
      "_method" : "---java.io.PrintWriter.print@POLYN359323 in line [00725]",
      "_target" : "java.io.PrintWriter.print@POLYN359323.s",
      "_risk" : "//QC-JAVCWZ099[00725] In java.io.PrintWriter.println@POLYN363847[00725] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintWriter.write@POLYN354296.buf",
      "_method" : "---java.io.PrintWriter.write@POLYN354296.dummymethode_00443 in line [00443]",
      "_target" : "java.io.PrintWriter.write@POLYN354296.cibledummy_00443",
      "_risk" : "//QC-JAVCWZ099[00443] In java.io.PrintWriter.write@POLYN354296[00443] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "26",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN359787.\"null\"",
      "_method" : "---java.io.PrintWriter.print@POLYN359787.dummymethode_00601 in line [00601]",
      "_target" : "java.io.PrintWriter.print@POLYN359787.s",
      "_risk" : "//QC-JAVCWZ099[00601] In java.io.PrintWriter.print@POLYN359787[00601] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.print@POLYN359787.s",
      "_method" : "---java.io.PrintWriter.write@POLYN355288 in line [00603]",
      "_target" : "java.io.PrintWriter.write@POLYN355288.s",
      "_risk" : "//QC-JAVCWZ099[00603] In java.io.PrintWriter.print@POLYN359787[00603] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintWriter.write@POLYN355288.s",
      "_method" : "---java.io.PrintWriter.write@POLYN355288 in line [00473]",
      "_target" : "java.io.PrintWriter.write@POLYN355288.cibledummy_00473",
      "_risk" : "//QC-JAVCWZ099[00473] In java.io.PrintWriter.write@POLYN355288[00473] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "27",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN359787.s",
      "_method" : "---java.io.PrintWriter.write@POLYN355288 in line [00603]",
      "_target" : "java.io.PrintWriter.write@POLYN355288.s",
      "_risk" : "//QC-JAVCWZ099[00603] In java.io.PrintWriter.print@POLYN359787[00603] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN364307.x",
      "_method" : "---java.io.PrintWriter.print@POLYN359787 in line [00739]",
      "_target" : "java.io.PrintWriter.print@POLYN359787.s",
      "_risk" : "//QC-JAVCWZ099[00739] In java.io.PrintWriter.println@POLYN364307[00739] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintWriter.write@POLYN355288.s",
      "_method" : "---java.io.PrintWriter.write@POLYN355288 in line [00473]",
      "_target" : "java.io.PrintWriter.write@POLYN355288.cibledummy_00473",
      "_risk" : "//QC-JAVCWZ099[00473] In java.io.PrintWriter.write@POLYN355288[00473] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "28",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Reader.read@POLYN193964.return",
      "_method" : "---java.io.Reader.read@POLYN193964 in line [00100]",
      "_target" : "java.io.Reader.read@POLYN192966.n",
      "_risk" : "//QC-JAVCWZ099[00100] In java.io.Reader.read@POLYN192966[00100] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Reader.read@POLYN192966.n",
      "_method" : "---java.io.Reader.read@POLYN192966.dummymethode_00102 in line [00102]",
      "_target" : "java.io.Reader.read@POLYN192966.cibledummy_00102",
      "_risk" : "//QC-JAVCWZ099[00102] In java.io.Reader.read@POLYN192966[00102] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.Reader.read@POLYN193964.-1",
      "_method" : "---java.io.Reader.read@POLYN193964.dummymethode_00122 in line [00122]",
      "_target" : "java.io.Reader.read@POLYN193964.return",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.Reader.read@POLYN193964[00122] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "29",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.ServerSocket.accept@POLYN329104.(SocketImpl)null",
      "_method" : "---java.net.ServerSocket.accept@POLYN329104.dummymethode_00468 in line [00468]",
      "_target" : "java.net.ServerSocket.accept@POLYN329104.s",
      "_risk" : "//QC-JAVCWZ099[00468] In java.net.ServerSocket.accept@POLYN329104[00468] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.accept@POLYN329104.s",
      "_method" : "---java.net.ServerSocket.accept@POLYN329104.dummymethode_00470 in line [00470]",
      "_target" : "java.net.ServerSocket.accept@POLYN329104.return",
      "_risk" : "//QC-JAVCWZ099[00470] In java.net.ServerSocket.accept@POLYN329104[00470] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.net.ServerSocket.accept@POLYN329104.return",
      "_method" : "---java.net.ServerSocket.accept@POLYN329104 in line [00501]",
      "_target" : "java.net.ServerSocket.implAccept@POLYN330050.cibledummy_00501",
      "_risk" : "//QC-JAVCWZ099[00501] In java.net.ServerSocket.implAccept@POLYN330050[00501] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "30",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.skipLF",
      "_method" : "---java.io.BufferedReader.read1@POLYN244793.dummymethode_00215 in line [00215]",
      "_target" : "java.io.BufferedReader.read1@POLYN244793.conditionIf00215",
      "_risk" : "//QC-JAVCWE099[00215] In java.io.BufferedReader.read1@POLYN244793[00215] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "false",
      "_method" : "---java.io.BufferedReader.read1@POLYN244793.dummymethode_00216 in line [00216]",
      "_target" : "java.io.BufferedReader.skipLF",
      "_risk" : "//QC-JAVCWE099[00216] In java.io.BufferedReader.read1@POLYN244793[00216] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "31",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.skipLF",
      "_method" : "---java.io.BufferedReader.read1@POLYN244793.dummymethode_00215 in line [00215]",
      "_target" : "java.io.BufferedReader.read1@POLYN244793.conditionIf00215",
      "_risk" : "//QC-JAVCWE099[00215] In java.io.BufferedReader.read1@POLYN244793[00215] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "true",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958.dummymethode_00363 in line [00363]",
      "_target" : "java.io.BufferedReader.skipLF",
      "_risk" : "//QC-JAVCWE099[00363] In java.io.BufferedReader.readLine@POLYN249958[00363] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "32",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN193615.off",
      "_method" : "---java.io.BufferedWriter.write@POLYN193615.dummymethode_00192 in line [00192]",
      "_target" : "java.io.BufferedWriter.write@POLYN193615.b",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.BufferedWriter.write@POLYN193615[00192] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN193615.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN193615.dummymethode_00195 in line [00195]",
      "_target" : "java.io.BufferedWriter.write@POLYN193615.cibledummy_00195",
      "_risk" : "//QC-JAVCWZ099[00195] In java.io.BufferedWriter.write@POLYN193615[00195] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "33",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN193615.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN193615.dummymethode_00195 in line [00195]",
      "_target" : "java.io.BufferedWriter.write@POLYN193615.cibledummy_00195",
      "_risk" : "//QC-JAVCWZ099[00195] In java.io.BufferedWriter.write@POLYN193615[00195] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN193615.d",
      "_method" : "---java.io.BufferedWriter.write@POLYN193615.dummymethode_00196 in line [00196]",
      "_target" : "java.io.BufferedWriter.write@POLYN193615.b",
      "_risk" : "//QC-JAVCWZ099[00196] In java.io.BufferedWriter.write@POLYN193615[00196] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "34",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN195953.off",
      "_method" : "---java.io.BufferedWriter.write@POLYN195953.dummymethode_00223 in line [00223]",
      "_target" : "java.io.BufferedWriter.write@POLYN195953.b",
      "_risk" : "//QC-JAVCWZ099[00223] In java.io.BufferedWriter.write@POLYN195953[00223] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN195953.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN195953.dummymethode_00226 in line [00226]",
      "_target" : "java.io.BufferedWriter.write@POLYN195953.cibledummy_00226",
      "_risk" : "//QC-JAVCWZ099[00226] In java.io.BufferedWriter.write@POLYN195953[00226] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "35",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN195953.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN195953.dummymethode_00226 in line [00226]",
      "_target" : "java.io.BufferedWriter.write@POLYN195953.cibledummy_00226",
      "_risk" : "//QC-JAVCWZ099[00226] In java.io.BufferedWriter.write@POLYN195953[00226] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN195953.d",
      "_method" : "---java.io.BufferedWriter.write@POLYN195953.dummymethode_00227 in line [00227]",
      "_target" : "java.io.BufferedWriter.write@POLYN195953.b",
      "_risk" : "//QC-JAVCWZ099[00227] In java.io.BufferedWriter.write@POLYN195953[00227] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "36",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Reader.ready@POLYN197198.return",
      "_method" : "---java.io.Reader.ready@POLYN197198 in line [00195]",
      "_target" : "java.io.InputStreamReader.ready@POLYN181377.return",
      "_risk" : "//QC-JAVCWZ099[00195] In java.io.InputStreamReader.ready@POLYN181377[00195] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Reader.ready@POLYN197198.false",
      "_method" : "---java.io.Reader.ready@POLYN197198.dummymethode_00204 in line [00204]",
      "_target" : "java.io.Reader.ready@POLYN197198.return",
      "_risk" : "//QC-JAVCWZ099[00204] In java.io.Reader.ready@POLYN197198[00204] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "37",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "null",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN856109.dummymethode_01964 in line [01964]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN856109.result",
      "_risk" : "//QC-JAVCWE099[01964] In java.io.ObjectInputStream.readEnum@POLYN856109[01964] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN856109.result",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN856109.dummymethode_01983 in line [01983]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN856109.return",
      "_risk" : "//QC-JAVCWE099[01983] In java.io.ObjectInputStream.readEnum@POLYN856109[01983] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "38",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN856109.en",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN856109.dummymethode_01970 in line [01970]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN856109.result",
      "_risk" : "//QC-JAVCWZ099[01970] In java.io.ObjectInputStream.readEnum@POLYN856109[01970] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN856109.result",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN856109.dummymethode_01983 in line [01983]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN856109.return",
      "_risk" : "//QC-JAVCWZ099[01983] In java.io.ObjectInputStream.readEnum@POLYN856109[01983] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "39",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObjectOverride@POLYN799735.return",
      "_method" : "---java.io.ObjectInputStream.readObjectOverride@POLYN799735 in line [00416]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN798312.return",
      "_risk" : "//QC-JAVCWZ099[00416] In java.io.ObjectInputStream.readObject@POLYN798312[00416] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObjectOverride@POLYN799735.null",
      "_method" : "---java.io.ObjectInputStream.readObjectOverride@POLYN799735.dummymethode_00460 in line [00460]",
      "_target" : "java.io.ObjectInputStream.readObjectOverride@POLYN799735.return",
      "_risk" : "//QC-JAVCWZ099[00460] In java.io.ObjectInputStream.readObjectOverride@POLYN799735[00460] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "40",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN845655.\"null class\"",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN845655.dummymethode_01759 in line [01759]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN845655.resolveEx",
      "_risk" : "//QC-JAVCWZ099[01759] In java.io.ObjectInputStream.readProxyDesc@POLYN845655[01759] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN845655.resolveEx",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN845655.dummymethode_01786 in line [01786]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN845655.cibledummy_01786",
      "_risk" : "//QC-JAVCWZ099[01786] In java.io.ObjectInputStream.readProxyDesc@POLYN845655[01786] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "41",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN845655.ex",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN845655.dummymethode_01775 in line [01775]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN845655.resolveEx",
      "_risk" : "//QC-JAVCWZ099[01775] In java.io.ObjectInputStream.readProxyDesc@POLYN845655[01775] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN845655.resolveEx",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN845655.dummymethode_01786 in line [01786]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN845655.cibledummy_01786",
      "_risk" : "//QC-JAVCWZ099[01786] In java.io.ObjectInputStream.readProxyDesc@POLYN845655[01786] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "42",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN858373.obj",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN863528 in line [02027]",
      "_target" : "java.io.ObjectInputStream.readSerialData@POLYN863528.obj",
      "_risk" : "//QC-JAVCWZ099[02027] In java.io.ObjectInputStream.readOrdinaryObject@POLYN858373[02027] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readSerialData@POLYN863528.obj",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN863528.dummymethode_02136 in line [02136]",
      "_target" : "java.io.ObjectInputStream.readSerialData@POLYN863528.cibledummy_02136",
      "_risk" : "//QC-JAVCWZ099[02136] In java.io.ObjectInputStream.readSerialData@POLYN863528[02136] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "43",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "objs.length",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN603710.dummymethode_01364 in line [01364]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN603710.len",
      "_risk" : "//QC-JAVCWE099[01364] In java.io.ObjectOutputStream.writeArray@POLYN603710[01364] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603710.len",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [01365]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN603710.cibledummy_01365",
      "_risk" : "//QC-JAVCWE099[01365] In java.io.ObjectOutputStream.writeArray@POLYN603710[01365] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "44",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.reset@POLYN574441.TC_RESET",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [00501]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_risk" : "//QC-JAVCWZ099[00501] In java.io.ObjectOutputStream.reset@POLYN574441[00501] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582881[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "45",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603710.TC_ARRAY",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [01321]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_risk" : "//QC-JAVCWZ099[01321] In java.io.ObjectOutputStream.writeArray@POLYN603710[01321] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582881[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "46",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582881[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClass@POLYN598686.TC_CLASS",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [01212]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_risk" : "//QC-JAVCWZ099[01212] In java.io.ObjectOutputStream.writeClass@POLYN598686[01212] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "47",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582881[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeEnum@POLYN608632.TC_ENUM",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [01401]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_risk" : "//QC-JAVCWZ099[01401] In java.io.ObjectOutputStream.writeEnum@POLYN608632[01401] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "48",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582881[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN610914.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [01461]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_risk" : "//QC-JAVCWZ099[01461] In java.io.ObjectOutputStream.writeExternalData@POLYN610914[01461] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "49",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582881[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN616379.TC_EXCEPTION",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [01576]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_risk" : "//QC-JAVCWZ099[01576] In java.io.ObjectOutputStream.writeFatalException@POLYN616379[01576] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "50",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582881[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeHandle@POLYN598403.TC_REFERENCE",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [01204]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_risk" : "//QC-JAVCWZ099[01204] In java.io.ObjectOutputStream.writeHandle@POLYN598403[01204] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "51",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582881[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601683.TC_CLASSDESC",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [01275]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_risk" : "//QC-JAVCWZ099[01275] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601683[01275] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "52",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582881[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601683.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [01292]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_risk" : "//QC-JAVCWZ099[01292] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601683[01292] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "53",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582881[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNull@POLYN598238.TC_NULL",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [01197]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_risk" : "//QC-JAVCWZ099[01197] In java.io.ObjectOutputStream.writeNull@POLYN598238[01197] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "54",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582881[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474.TC_OBJECT",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [01426]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_risk" : "//QC-JAVCWZ099[01426] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474[01426] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "55",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582881[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN600177.TC_PROXYCLASSDESC",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [01247]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_risk" : "//QC-JAVCWZ099[01247] In java.io.ObjectOutputStream.writeProxyDesc@POLYN600177[01247] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "56",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582881[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN600177.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [01263]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_risk" : "//QC-JAVCWZ099[01263] In java.io.ObjectOutputStream.writeProxyDesc@POLYN600177[01263] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "57",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582881[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN612110.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [01498]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_risk" : "//QC-JAVCWZ099[01498] In java.io.ObjectOutputStream.writeSerialData@POLYN612110[01498] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "58",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582881[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN602933.TC_STRING",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [01305]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_risk" : "//QC-JAVCWZ099[01305] In java.io.ObjectOutputStream.writeString@POLYN602933[01305] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "59",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582881[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN602933.TC_LONGSTRING",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582881 in line [01308]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582881.val",
      "_risk" : "//QC-JAVCWZ099[01308] In java.io.ObjectOutputStream.writeString@POLYN602933[01308] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "60",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646390.s",
      "_method" : "---java.io.ObjectOutputStream.writeBytes@POLYN584853 in line [02190]",
      "_target" : "java.io.ObjectOutputStream.writeBytes@POLYN584853.str",
      "_risk" : "//QC-JAVCWZ099[02190] In java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646390[02190] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeBytes@POLYN584853.str",
      "_method" : "---java.io.ObjectOutputStream.writeBytes@POLYN584853 in line [00841]",
      "_target" : "java.io.ObjectOutputStream.writeBytes@POLYN584853.cibledummy_00841",
      "_risk" : "//QC-JAVCWZ099[00841] In java.io.ObjectOutputStream.writeBytes@POLYN584853[00841] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "61",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeUTF@POLYN645403.s",
      "_method" : "---java.io.ObjectOutputStream.writeBytes@POLYN584853 in line [02168]",
      "_target" : "java.io.ObjectOutputStream.writeBytes@POLYN584853.str",
      "_risk" : "//QC-JAVCWZ099[02168] In java.io.ObjectOutputStream.BlockDataOutputStream.writeUTF@POLYN645403[02168] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeBytes@POLYN584853.str",
      "_method" : "---java.io.ObjectOutputStream.writeBytes@POLYN584853 in line [00841]",
      "_target" : "java.io.ObjectOutputStream.writeBytes@POLYN584853.cibledummy_00841",
      "_risk" : "//QC-JAVCWZ099[00841] In java.io.ObjectOutputStream.writeBytes@POLYN584853[00841] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "62",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603710.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN599186 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN599186.unshared",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN603710[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN599186.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN600177 in line [01229]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN600177.unshared",
      "_risk" : "//QC-JAVCWZ099[01229] In java.io.ObjectOutputStream.writeClassDesc@POLYN599186[01229] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "63",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN599186.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN600177 in line [01229]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN600177.unshared",
      "_risk" : "//QC-JAVCWZ099[01229] In java.io.ObjectOutputStream.writeClassDesc@POLYN599186[01229] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN599186 in line [01427]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN599186.unshared",
      "_risk" : "//QC-JAVCWZ099[01427] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474[01427] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "64",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN616379.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN616379.dummymethode_01577 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN616379.cibledummy_01577",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN616379[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN569139.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN616379 in line [00351]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN616379.ex",
      "_risk" : "//QC-JAVCWZ099[00351] In java.io.ObjectOutputStream.writeObject@POLYN569139[00351] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "65",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN616379.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN616379.dummymethode_01577 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN616379.cibledummy_01577",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN616379[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN571357.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN616379 in line [00418]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN616379.ex",
      "_risk" : "//QC-JAVCWZ099[00418] In java.io.ObjectOutputStream.writeUnshared@POLYN571357[00418] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "66",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603710.ia.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [01329]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_risk" : "//QC-JAVCWZ099[01329] In java.io.ObjectOutputStream.writeArray@POLYN603710[01329] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583721[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "67",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603710.ba.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [01333]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_risk" : "//QC-JAVCWZ099[01333] In java.io.ObjectOutputStream.writeArray@POLYN603710[01333] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583721[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "68",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603710.ja.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [01337]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_risk" : "//QC-JAVCWZ099[01337] In java.io.ObjectOutputStream.writeArray@POLYN603710[01337] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583721[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "69",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603710.fa.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [01341]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_risk" : "//QC-JAVCWZ099[01341] In java.io.ObjectOutputStream.writeArray@POLYN603710[01341] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583721[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "70",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603710.da.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [01345]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_risk" : "//QC-JAVCWZ099[01345] In java.io.ObjectOutputStream.writeArray@POLYN603710[01345] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583721[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "71",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603710.sa.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [01349]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_risk" : "//QC-JAVCWZ099[01349] In java.io.ObjectOutputStream.writeArray@POLYN603710[01349] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583721[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "72",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603710.ca.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [01353]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_risk" : "//QC-JAVCWZ099[01353] In java.io.ObjectOutputStream.writeArray@POLYN603710[01353] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583721[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "73",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603710.za.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [01357]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_risk" : "//QC-JAVCWZ099[01357] In java.io.ObjectOutputStream.writeArray@POLYN603710[01357] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583721[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "74",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583721[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN600177.ifaces.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [01252]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_risk" : "//QC-JAVCWZ099[01252] In java.io.ObjectOutputStream.writeProxyDesc@POLYN600177[01252] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "75",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583721[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.writeObject@POLYN247731.count",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00464]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_risk" : "//QC-JAVCWZ099[00464] In java.lang.StringBuilder.writeObject@POLYN247731[00464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "76",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646390.utflen",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN584001 in line [02188]",
      "_target" : "java.io.ObjectOutputStream.writeLong@POLYN584001.val",
      "_risk" : "//QC-JAVCWZ099[02188] In java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646390[02188] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeLong@POLYN584001.val",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN584001 in line [00808]",
      "_target" : "java.io.ObjectOutputStream.writeLong@POLYN584001.cibledummy_00808",
      "_risk" : "//QC-JAVCWZ099[00808] In java.io.ObjectOutputStream.writeLong@POLYN584001[00808] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "77",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeClass@POLYN598686 in line [01120]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.cibledummy_01120",
      "_risk" : "//QC-JAVCWZ099[01120] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01120] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN569139.false",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593655 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.unshared",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN569139[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "78",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeClass@POLYN598686 in line [01120]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.cibledummy_01120",
      "_risk" : "//QC-JAVCWZ099[01120] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01120] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN571357.true",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593655 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.unshared",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN571357[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "79",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN235270.-1",
      "_method" : "---java.io.PipedInputStream.read@POLYN235270.dummymethode_00318 in line [00318]",
      "_target" : "java.io.PipedInputStream.read@POLYN235270.return",
      "_risk" : "//QC-JAVCWZ099[00318] In java.io.PipedInputStream.read@POLYN235270[00318] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN235270.return",
      "_method" : "---java.io.PipedInputStream.read@POLYN235270 in line [00377]",
      "_target" : "java.io.PipedInputStream.read@POLYN238285.c",
      "_risk" : "//QC-JAVCWZ099[00377] In java.io.PipedInputStream.read@POLYN238285[00377] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "80",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN235270.ret",
      "_method" : "---java.io.PipedInputStream.read@POLYN235270.dummymethode_00340 in line [00340]",
      "_target" : "java.io.PipedInputStream.read@POLYN235270.return",
      "_risk" : "//QC-JAVCWZ099[00340] In java.io.PipedInputStream.read@POLYN235270[00340] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN235270.return",
      "_method" : "---java.io.PipedInputStream.read@POLYN235270 in line [00377]",
      "_target" : "java.io.PipedInputStream.read@POLYN238285.c",
      "_risk" : "//QC-JAVCWZ099[00377] In java.io.PipedInputStream.read@POLYN238285[00377] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "81",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN238285.(buffer.length-out)",
      "_method" : "---java.io.PipedInputStream.read@POLYN238285.dummymethode_00388 in line [00388]",
      "_target" : "java.io.PipedInputStream.read@POLYN238285.available",
      "_risk" : "//QC-JAVCWZ099[00388] In java.io.PipedInputStream.read@POLYN238285[00388] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN238285.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN238285.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN238285.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN238285[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "82",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN238285.(in-out)",
      "_method" : "---java.io.PipedInputStream.read@POLYN238285.dummymethode_00388 in line [00388]",
      "_target" : "java.io.PipedInputStream.read@POLYN238285.available",
      "_risk" : "//QC-JAVCWZ099[00388] In java.io.PipedInputStream.read@POLYN238285[00388] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN238285.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN238285.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN238285.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN238285[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "83",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "buffer.length-out",
      "_method" : "---java.io.PipedInputStream.read@POLYN238285.dummymethode_00390 in line [00390]",
      "_target" : "java.io.PipedInputStream.read@POLYN238285.available",
      "_risk" : "//QC-JAVCWE099[00390] In java.io.PipedInputStream.read@POLYN238285[00390] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN238285.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN238285.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN238285.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN238285[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "84",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "len-1",
      "_method" : "---java.io.PipedInputStream.read@POLYN238285.dummymethode_00395 in line [00395]",
      "_target" : "java.io.PipedInputStream.read@POLYN238285.available",
      "_risk" : "//QC-JAVCWE099[00395] In java.io.PipedInputStream.read@POLYN238285[00395] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN238285.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN238285.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN238285.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN238285[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "85",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedReader.read@POLYN213471.-1",
      "_method" : "---java.io.PipedReader.read@POLYN213471.dummymethode_00001 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN213471.return",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN213471[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedReader.read@POLYN213471.return",
      "_method" : "---java.io.PipedReader.read@POLYN213471 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN216075.c",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN216075[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "86",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedReader.read@POLYN213471.ret",
      "_method" : "---java.io.PipedReader.read@POLYN213471.dummymethode_00001 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN213471.return",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN213471[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedReader.read@POLYN213471.return",
      "_method" : "---java.io.PipedReader.read@POLYN213471 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN216075.c",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN216075[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "87",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN356817.c",
      "_method" : "---java.io.PrintWriter.print@POLYN356817.dummymethode_00517 in line [00517]",
      "_target" : "java.io.PrintWriter.print@POLYN356817.cibledummy_00517",
      "_risk" : "//QC-JAVCWZ099[00517] In java.io.PrintWriter.print@POLYN356817[00517] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN361529.x",
      "_method" : "---java.io.PrintWriter.print@POLYN356817 in line [00655]",
      "_target" : "java.io.PrintWriter.print@POLYN356817.c",
      "_risk" : "//QC-JAVCWZ099[00655] In java.io.PrintWriter.println@POLYN361529[00655] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "88",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.append@POLYN372963.\"null\"",
      "_method" : "---java.io.PrintWriter.write@POLYN352998 in line [01002]",
      "_target" : "java.io.PrintWriter.write@POLYN352998.c",
      "_risk" : "//QC-JAVCWZ099[01002] In java.io.PrintWriter.append@POLYN372963[01002] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.write@POLYN352998.c",
      "_method" : "---java.io.Writer.write@POLYN201528 in line [00405]",
      "_target" : "java.io.Writer.write@POLYN201528.c",
      "_risk" : "//QC-JAVCWZ099[00405] In java.io.PrintWriter.write@POLYN352998[00405] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "89",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.newLine@POLYN197070.lineSeparator",
      "_method" : "---java.io.Writer.write@POLYN202828 in line [00243]",
      "_target" : "java.io.Writer.write@POLYN202828.str",
      "_risk" : "//QC-JAVCWZ099[00243] In java.io.BufferedWriter.newLine@POLYN197070[00243] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN202828.str",
      "_method" : "---java.io.Writer.write@POLYN203421 in line [00157]",
      "_target" : "java.io.Writer.write@POLYN202828.cibledummy_00157",
      "_risk" : "//QC-JAVCWZ099[00157] In java.io.Writer.write@POLYN202828[00157] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "90",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.newLine@POLYN355480.lineSeparator",
      "_method" : "---java.io.Writer.write@POLYN202828 in line [00480]",
      "_target" : "java.io.Writer.write@POLYN202828.str",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintWriter.newLine@POLYN355480[00480] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN202828.str",
      "_method" : "---java.io.Writer.write@POLYN203421 in line [00157]",
      "_target" : "java.io.Writer.write@POLYN202828.cibledummy_00157",
      "_risk" : "//QC-JAVCWZ099[00157] In java.io.Writer.write@POLYN202828[00157] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "91",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Writer.writeBuffer",
      "_method" : "---java.io.Writer.write@POLYN203421.dummymethode_00187 in line [00187]",
      "_target" : "java.io.Writer.write@POLYN203421.cbuf",
      "_risk" : "//QC-JAVCWZ099[00187] In java.io.Writer.write@POLYN203421[00187] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN203421.cbuf",
      "_method" : "---java.io.Writer.write@POLYN203421.dummymethode_00191 in line [00191]",
      "_target" : "java.io.Writer.write@POLYN203421.cibledummy_00191",
      "_risk" : "//QC-JAVCWZ099[00191] In java.io.Writer.write@POLYN203421[00191] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "92",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.write@POLYN354610.off",
      "_method" : "---java.io.Writer.write@POLYN203421 in line [00456]",
      "_target" : "java.io.Writer.write@POLYN203421.off",
      "_risk" : "//QC-JAVCWZ099[00456] In java.io.PrintWriter.write@POLYN354610[00456] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN203421.off",
      "_method" : "---java.io.Writer.write@POLYN203421.dummymethode_00191 in line [00191]",
      "_target" : "java.io.Writer.write@POLYN203421.cibledummy_00191",
      "_risk" : "//QC-JAVCWZ099[00191] In java.io.Writer.write@POLYN203421[00191] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "93",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.write@POLYN354610.len",
      "_method" : "---java.io.Writer.write@POLYN203421 in line [00456]",
      "_target" : "java.io.Writer.write@POLYN203421.len",
      "_risk" : "//QC-JAVCWZ099[00456] In java.io.PrintWriter.write@POLYN354610[00456] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN203421.len",
      "_method" : "---java.io.Writer.write@POLYN202587 in line [00192]",
      "_target" : "java.io.Writer.write@POLYN203421.cibledummy_00192",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.Writer.write@POLYN203421[00192] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "94",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "50",
      "_method" : "---java.net.ServerSocket.ServerSocket@POLYN320129.dummymethode_00218 in line [00218]",
      "_target" : "java.net.ServerSocket.ServerSocket@POLYN320129.backlog",
      "_risk" : "//QC-JAVCWE099[00218] In java.net.ServerSocket.ServerSocket@POLYN320129[00218] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.ServerSocket@POLYN320129.backlog",
      "_method" : "---java.net.ServerSocket.bind@POLYN324594 in line [00220]",
      "_target" : "java.net.ServerSocket.ServerSocket@POLYN320129.cibledummy_00220",
      "_risk" : "//QC-JAVCWE099[00220] In java.net.ServerSocket.ServerSocket@POLYN320129[00220] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "95",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.ServerSocket.getImpl@POLYN321212.return",
      "_method" : "---java.net.ServerSocket.getImpl@POLYN321212 in line [00356]",
      "_target" : "java.net.ServerSocket.bind@POLYN324594.cibledummy_00356",
      "_risk" : "//QC-JAVCWZ099[00356] In java.net.ServerSocket.bind@POLYN324594[00356] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.impl",
      "_method" : "---java.net.ServerSocket.getImpl@POLYN321212.dummymethode_00241 in line [00241]",
      "_target" : "java.net.ServerSocket.getImpl@POLYN321212.return",
      "_risk" : "//QC-JAVCWZ099[00241] In java.net.ServerSocket.getImpl@POLYN321212[00241] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "96",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.Socket@POLYN479635.address",
      "_method" : "---java.net.Socket.connect@POLYN483414 in line [00415]",
      "_target" : "java.net.Socket.connect@POLYN483414.endpoint",
      "_risk" : "//QC-JAVCWZ099[00415] In java.net.Socket.Socket@POLYN479635[00415] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.connect@POLYN483414.endpoint",
      "_method" : "---java.net.Socket.connect@POLYN484064 in line [00518]",
      "_target" : "java.net.Socket.connect@POLYN483414.cibledummy_00518",
      "_risk" : "//QC-JAVCWZ099[00518] In java.net.Socket.connect@POLYN483414[00518] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "97",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.connect@POLYN483414.0",
      "_method" : "---java.net.Socket.connect@POLYN484064 in line [00518]",
      "_target" : "java.net.Socket.connect@POLYN484064.timeout",
      "_risk" : "//QC-JAVCWZ099[00518] In java.net.Socket.connect@POLYN483414[00518] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.connect@POLYN484064.timeout",
      "_method" : "---java.net.Socket.connect@POLYN484064.dummymethode_00568 in line [00568]",
      "_target" : "java.net.Socket.connect@POLYN484064.cibledummy_00568",
      "_risk" : "//QC-JAVCWZ099[00568] In java.net.Socket.connect@POLYN484064[00568] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "98",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.Socket@POLYN479635.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN480565 in line [00411]",
      "_target" : "java.net.Socket.createImpl@POLYN480565.stream",
      "_risk" : "//QC-JAVCWZ099[00411] In java.net.Socket.Socket@POLYN479635[00411] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.createImpl@POLYN480565.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN480565.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN480565.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN480565[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "99",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.connect@POLYN484064.true",
      "_method" : "---java.net.Socket.createImpl@POLYN480565 in line [00566]",
      "_target" : "java.net.Socket.createImpl@POLYN480565.stream",
      "_risk" : "//QC-JAVCWZ099[00566] In java.net.Socket.connect@POLYN484064[00566] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.createImpl@POLYN480565.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN480565.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN480565.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN480565[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "100",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.createImpl@POLYN480565.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN480565.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN480565.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN480565[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.getImpl@POLYN482896.true",
      "_method" : "---java.net.Socket.createImpl@POLYN480565 in line [00500]",
      "_target" : "java.net.Socket.createImpl@POLYN480565.stream",
      "_risk" : "//QC-JAVCWZ099[00500] In java.net.Socket.getImpl@POLYN482896[00500] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  } ],
  "_lesDeadlocks" : [ {
    "_id" : "R0",
    "_libelle" : "java.io.File.this"
  }, {
    "_id" : "R1",
    "_libelle" : "java.io.File.readObject@POLYN644532.s"
  }, {
    "_id" : "R2",
    "_libelle" : "java.net.ServerSocket.closeLock"
  }, {
    "_id" : "R3",
    "_libelle" : "java.net.ServerSocket.this"
  }, {
    "_id" : "R4",
    "_libelle" : "java.net.Socket.this"
  }, {
    "_id" : "R5",
    "_libelle" : "java.net.Socket.closeLock"
  }, {
    "_id" : "R6",
    "_libelle" : "java.io.PrintStream.this"
  }, {
    "_id" : "R7",
    "_libelle" : "java.io.Writer.lock"
  }, {
    "_id" : "R8",
    "_libelle" : "java.io.File.writeObject@POLYN644151.s"
  }, {
    "_id" : "R9",
    "_libelle" : "java.lang.Throwable.this"
  }, {
    "_id" : "R10",
    "_libelle" : "java.lang.Throwable.writeObject@POLYN397822.s"
  }, {
    "_id" : "R11",
    "_libelle" : "java.io.PipedOutputStream.this"
  }, {
    "_id" : "R12",
    "_libelle" : "java.io.PipedOutputStream.connect@POLYN181949.snk"
  }, {
    "_id" : "R13",
    "_libelle" : "java.io.PipedInputStream.this"
  }, {
    "_id" : "R14",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN230704.b"
  }, {
    "_id" : "R15",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN231811.b"
  }, {
    "_id" : "R16",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN231811.off"
  }, {
    "_id" : "R17",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN231811.len"
  }, {
    "_id" : "R18",
    "_libelle" : "java.io.PipedWriter.this"
  }, {
    "_id" : "R19",
    "_libelle" : "java.io.PipedWriter.connect@POLYN181179.snk"
  }, {
    "_id" : "R20",
    "_libelle" : "java.io.BufferedOutputStream.this"
  }, {
    "_id" : "R21",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN171003.b"
  }, {
    "_id" : "R22",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN171864.b"
  }, {
    "_id" : "R23",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN171864.off"
  }, {
    "_id" : "R24",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN171864.len"
  }, {
    "_id" : "R25",
    "_libelle" : "java.io.PipedReader.this"
  }, {
    "_id" : "R26",
    "_libelle" : "java.io.FileInputStream.closeLock"
  }, {
    "_id" : "R27",
    "_libelle" : "java.io.FileOutputStream.closeLock"
  }, {
    "_id" : "R28",
    "_libelle" : "java.io.BufferedInputStream.this"
  }, {
    "_id" : "R29",
    "_libelle" : "java.io.PipedReader.receive@POLYN210743.c"
  }, {
    "_id" : "R30",
    "_libelle" : "java.io.PipedReader.receive@POLYN212421.c"
  }, {
    "_id" : "R31",
    "_libelle" : "java.io.PipedReader.receive@POLYN212421.off"
  }, {
    "_id" : "R32",
    "_libelle" : "java.io.PipedReader.receive@POLYN212421.len"
  }, {
    "_id" : "R33",
    "_libelle" : "java.io.BufferedInputStream.mark@POLYN259755.readlimit"
  }, {
    "_id" : "R34",
    "_libelle" : "java.io.PipedOutputStream.sink"
  }, {
    "_id" : "R35",
    "_libelle" : "java.io.PipedWriter.sink"
  }, {
    "_id" : "R36",
    "_libelle" : "java.lang.Throwable.addSuppressed@POLYN399877.exception"
  }, {
    "_id" : "R37",
    "_libelle" : "java.net.ServerSocket.setSocketFactory@POLYN338407.fac"
  }, {
    "_id" : "R38",
    "_libelle" : "java.net.Socket.setSocketImplFactory@POLYN520442.fac"
  } ],
  "_lesDeadlocksSequences" : [ {
    "_id" : "0",
    "_lesItems" : [ "S0:java.net.Socket.Socket@POLYN479635", "S0:java.net.Socket.close@POLYN515244 (R4 in line [00001],R5 in line [00001])", "S0:java.net.Socket.close@POLYN515244 (R4 in line [00001],R5 in line [00001])", "S0:java.net.Socket.close@POLYN515244.dummymethode_00001" ]
  }, {
    "_id" : "1",
    "_lesItems" : [ "S1:java.net.Socket.setSocketImplFactory@POLYN520442 (R4 in line [00001],R38 in line [00001])", "S1:java.net.Socket.setSocketImplFactory@POLYN520442.dummymethode_00001" ]
  }, {
    "_id" : "2",
    "_lesItems" : [ "S2:java.lang.Throwable.writeObject@POLYN397822 (R9 in line [01002],R10 in line [01002])", "S2:java.lang.Throwable.getOurStackTrace@POLYN391841 (R9 in line [00834])", "S2:java.lang.Throwable.getOurStackTrace@POLYN391841.dummymethode_00839" ]
  }, {
    "_id" : "3",
    "_lesItems" : [ "S3:java.lang.Throwable.addSuppressed@POLYN399877 (R9 in line [01070],R36 in line [01070])", "S3:java.lang.Throwable.addSuppressed@POLYN399877.dummymethode_01074" ]
  } ],
  "_lesDeadlocksTypos" : [ ]
}