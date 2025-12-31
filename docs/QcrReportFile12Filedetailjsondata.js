{
  "_lesSequences" : [ {
    "_id" : "1",
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
    "_id" : "2",
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
    "_id" : "3",
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
    "_id" : "4",
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
    "_id" : "5",
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
    "_id" : "6",
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
    "_id" : "7",
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
    "_id" : "8",
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
    "_id" : "9",
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
    "_id" : "10",
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
    "_id" : "11",
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
    "_id" : "12",
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
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593655.dummymethode_01174 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.cibledummy_01174",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "13",
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
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593655.dummymethode_01174 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.cibledummy_01174",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "14",
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
    } ]
  }, {
    "_id" : "15",
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
    "_id" : "16",
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
    "_id" : "17",
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
    "_id" : "18",
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
    "_id" : "19",
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
    "_id" : "20",
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
    "_id" : "21",
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
    "_id" : "22",
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
    "_id" : "23",
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
    "_id" : "24",
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
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN844188.dummymethode_01720 in line [01720]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN844188.cibledummy_01720",
      "_risk" : "//QC-JAVCWZ099[01720] In java.io.ObjectInputStream.readClassDesc@POLYN844188[01720] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "25",
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
    "_id" : "26",
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
    "_id" : "27",
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
    "_id" : "28",
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
    "_id" : "29",
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
    "_id" : "30",
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
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN603710.dummymethode_01365 in line [01365]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN603710.cibledummy_01365",
      "_risk" : "//QC-JAVCWE099[01365] In java.io.ObjectOutputStream.writeArray@POLYN603710[01365] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "31",
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
    "_id" : "32",
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
    "_id" : "33",
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
    "_id" : "34",
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
    "_id" : "35",
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
    "_id" : "36",
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
    "_id" : "37",
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
    "_id" : "38",
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
    "_id" : "39",
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
      "_method" : "---java.io.PrintStream.print@POLYN376552.dummymethode_00669 in line [00669]",
      "_target" : "java.io.PrintStream.print@POLYN376552.cibledummy_00669",
      "_risk" : "//QC-JAVCWZ099[00669] In java.io.PrintStream.print@POLYN376552[00669] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "40",
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
      "_method" : "---java.io.PrintWriter.print@POLYN359787.dummymethode_00603 in line [00603]",
      "_target" : "java.io.PrintWriter.print@POLYN359787.cibledummy_00603",
      "_risk" : "//QC-JAVCWZ099[00603] In java.io.PrintWriter.print@POLYN359787[00603] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "41",
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
    "_id" : "42",
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
    "_id" : "43",
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
  } ],
  "_lesDeadlocks" : [ {
    "_id" : "R0",
    "_libelle" : "java.net.ServerSocket.closeLock"
  }, {
    "_id" : "R1",
    "_libelle" : "java.net.ServerSocket.this"
  }, {
    "_id" : "R2",
    "_libelle" : "java.net.Socket.this"
  }, {
    "_id" : "R3",
    "_libelle" : "java.io.PrintStream.this"
  }, {
    "_id" : "R4",
    "_libelle" : "java.io.Writer.lock"
  }, {
    "_id" : "R5",
    "_libelle" : "java.net.Socket.closeLock"
  }, {
    "_id" : "R6",
    "_libelle" : "java.io.BufferedOutputStream.this"
  }, {
    "_id" : "R7",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN171003.b"
  }, {
    "_id" : "R8",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN171864.b"
  }, {
    "_id" : "R9",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN171864.off"
  }, {
    "_id" : "R10",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN171864.len"
  }, {
    "_id" : "R11",
    "_libelle" : "java.io.File.this"
  }, {
    "_id" : "R12",
    "_libelle" : "java.io.File.writeObject@POLYN644151.s"
  }, {
    "_id" : "R13",
    "_libelle" : "java.io.File.readObject@POLYN644532.s"
  }, {
    "_id" : "R14",
    "_libelle" : "java.io.PipedInputStream.this"
  }, {
    "_id" : "R15",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN230704.b"
  }, {
    "_id" : "R16",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN231811.b"
  }, {
    "_id" : "R17",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN231811.off"
  }, {
    "_id" : "R18",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN231811.len"
  }, {
    "_id" : "R19",
    "_libelle" : "java.io.PipedReader.this"
  }, {
    "_id" : "R20",
    "_libelle" : "java.lang.Throwable.this"
  }, {
    "_id" : "R21",
    "_libelle" : "java.lang.Throwable.writeObject@POLYN397822.s"
  }, {
    "_id" : "R22",
    "_libelle" : "java.io.FileInputStream.closeLock"
  }, {
    "_id" : "R23",
    "_libelle" : "java.io.FileOutputStream.closeLock"
  }, {
    "_id" : "R24",
    "_libelle" : "java.io.BufferedInputStream.this"
  }, {
    "_id" : "R25",
    "_libelle" : "java.io.BufferedInputStream.mark@POLYN259755.readlimit"
  }, {
    "_id" : "R26",
    "_libelle" : "java.io.PipedOutputStream.this"
  }, {
    "_id" : "R27",
    "_libelle" : "java.io.PipedOutputStream.connect@POLYN181949.snk"
  }, {
    "_id" : "R28",
    "_libelle" : "java.io.PipedOutputStream.sink"
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
    "_libelle" : "java.io.PipedWriter.this"
  }, {
    "_id" : "R34",
    "_libelle" : "java.io.PipedWriter.connect@POLYN181179.snk"
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
    "_lesItems" : [ "S0:java.net.Socket.Socket@POLYN479635", "S0:java.net.Socket.close@POLYN515244 (R2 in line [00001],R5 in line [00001])", "S0:java.net.Socket.close@POLYN515244 (R2 in line [00001],R5 in line [00001])", "S0:java.net.Socket.close@POLYN515244.dummymethode_00001" ]
  }, {
    "_id" : "1",
    "_lesItems" : [ "S1:java.net.Socket.setSocketImplFactory@POLYN520442 (R2 in line [00001],R38 in line [00001])", "S1:java.net.Socket.setSocketImplFactory@POLYN520442.dummymethode_00001" ]
  }, {
    "_id" : "2",
    "_lesItems" : [ "S2:java.lang.Throwable.writeObject@POLYN397822 (R20 in line [01002],R21 in line [01002])", "S2:java.lang.Throwable.getOurStackTrace@POLYN391841 (R20 in line [00834])", "S2:java.lang.Throwable.getOurStackTrace@POLYN391841.dummymethode_00839" ]
  }, {
    "_id" : "3",
    "_lesItems" : [ "S3:java.lang.Throwable.addSuppressed@POLYN399877 (R20 in line [01070],R36 in line [01070])", "S3:java.lang.Throwable.addSuppressed@POLYN399877.dummymethode_01074" ]
  } ],
  "_lesDeadlocksTypos" : [ ]
}