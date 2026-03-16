{
  "_lesSequences" : [ {
    "_id" : "1",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "objs.length",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN603710.dummymethode_01364 in line [01364]",
      "_target" : "len",
      "_risk" : "//QC-JAVCWE099[01364] In java.io.ObjectOutputStream.writeArray@POLYN603710[01364] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "len",
      "_method" : "---java.io.PipedInputStream.receive@POLYN231811.dummymethode_00228 in line [00228]",
      "_target" : "bytesToTransfer",
      "_risk" : "//QC-JAVCWE099[00228] In java.io.PipedInputStream.receive@POLYN231811[00228] source data PATHtainted (java.io.PipedInputStream.receive) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "bytesToTransfer",
      "_method" : "---java.io.PipedInputStream.receive@POLYN231811.dummymethode_00244 in line [00244]",
      "_target" : "java.io.PipedInputStream.receive@POLYN231811.nextTransferAmount",
      "_risk" : "//QC-JAVCWE099[00244] In java.io.PipedInputStream.receive@POLYN231811[00244] source data PATHtainted (java.io.PipedInputStream.receive) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.PipedInputStream.receive@POLYN231811.nextTransferAmount",
      "_method" : "---java.io.PipedInputStream.receive@POLYN231811.dummymethode_00246 in line [00246]",
      "_target" : "java.io.PipedInputStream.receive@POLYN231811.cibledummy_00246",
      "_risk" : "//QC-JAVCWE099[00246] In java.io.PipedInputStream.receive@POLYN231811[00246] source data PATHtainted (java.io.PipedInputStream.receive) RiskOnInput"
    } ]
  }, {
    "_id" : "2",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "len",
      "_method" : "---java.io.PipedInputStream.receive@POLYN231811.dummymethode_00228 in line [00228]",
      "_target" : "bytesToTransfer",
      "_risk" : "//QC-JAVCWE099[00228] In java.io.PipedInputStream.receive@POLYN231811[00228] source data PATHtainted (java.io.PipedInputStream.receive) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "bytesToTransfer",
      "_method" : "---java.io.PipedInputStream.receive@POLYN231811.dummymethode_00244 in line [00244]",
      "_target" : "java.io.PipedInputStream.receive@POLYN231811.nextTransferAmount",
      "_risk" : "//QC-JAVCWE099[00244] In java.io.PipedInputStream.receive@POLYN231811[00244] source data PATHtainted (java.io.PipedInputStream.receive) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PipedInputStream.receive@POLYN231811.nextTransferAmount",
      "_method" : "---java.io.PipedInputStream.receive@POLYN231811.dummymethode_00246 in line [00246]",
      "_target" : "java.io.PipedInputStream.receive@POLYN231811.cibledummy_00246",
      "_risk" : "//QC-JAVCWE099[00246] In java.io.PipedInputStream.receive@POLYN231811[00246] source data PATHtainted (java.io.PipedInputStream.receive) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "bufferOffset-offset",
      "_method" : "---org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeHeader@POLYN211877.dummymethode_00151 in line [00151]",
      "_target" : "len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "3",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "nChars-nextChar",
      "_method" : "---java.io.BufferedReader.skip@POLYN253487.dummymethode_00420 in line [00420]",
      "_target" : "d",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN193615.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN193615.dummymethode_00195 in line [00195]",
      "_target" : "java.io.BufferedWriter.write@POLYN193615.cibledummy_00195",
      "_risk" : "//QC-JAVCWE099[00195] In java.io.BufferedWriter.write@POLYN193615[00195] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "d",
      "_method" : "---java.io.BufferedWriter.write@POLYN193615.dummymethode_00196 in line [00196]",
      "_target" : "java.io.BufferedWriter.write@POLYN193615.b",
      "_risk" : "//QC-JAVCWE099[00196] In java.io.BufferedWriter.write@POLYN193615[00196] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "4",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "en",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN856109.dummymethode_01970 in line [01970]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN856109.result",
      "_risk" : "//QC-JAVCWE099[01970] In java.io.ObjectInputStream.readEnum@POLYN856109[01970] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN856109.result",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN856109.dummymethode_01977 in line [01977]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN856109.cibledummy_01977",
      "_risk" : "//QC-JAVCWE099[01977] In java.io.ObjectInputStream.readEnum@POLYN856109[01977] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "e.next",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.compute@POLYN1521524.dummymethode_01876 in line [01876]",
      "_target" : "en",
      "_risk" : ""
    } ]
  }, {
    "_id" : "5",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "null",
      "_method" : "---java.io.ObjectInputStream.filterCheck@POLYN826114.dummymethode_01225 in line [01225]",
      "_target" : "ex",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "ex",
      "_method" : "---java.io.ObjectInputStream.readNonProxyDesc@POLYN848497.dummymethode_01832 in line [01832]",
      "_target" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN848497.resolveEx",
      "_risk" : "//QC-JAVCWE099[01832] In java.io.ObjectInputStream.readNonProxyDesc@POLYN848497[01832] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN848497.resolveEx",
      "_method" : "---java.io.ObjectInputStream.readNonProxyDesc@POLYN848497.dummymethode_01843 in line [01843]",
      "_target" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN848497.cibledummy_01843",
      "_risk" : "//QC-JAVCWE099[01843] In java.io.ObjectInputStream.readNonProxyDesc@POLYN848497[01843] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "6",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.cl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593655.dummymethode_01134 in line [01134]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.desc",
      "_risk" : "//QC-JAVCWE099[01134] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01134] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "repCl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593655.dummymethode_01141 in line [01141]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.cl",
      "_risk" : "//QC-JAVCWE099[01141] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01141] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.desc",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593655.dummymethode_01174 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.cibledummy_01174",
      "_risk" : "//QC-JAVCWE099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "7",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "i",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958.dummymethode_00351 in line [00351]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249958.nextChar",
      "_risk" : "//QC-JAVCWE099[00351] In java.io.BufferedReader.readLine@POLYN249958[00351] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "1",
      "_method" : "---java.io.InputStream.read@POLYN257278.dummymethode_00177 in line [00177]",
      "_target" : "i",
      "_risk" : "//QC-JAVCWE099[00177] In java.io.InputStream.read@POLYN257278[00177] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "8",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249958.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN249958[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.readLine@POLYN249958.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958.dummymethode_00358 in line [00358]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249958.cibledummy_00358",
      "_risk" : "//QC-JAVCWE099[00358] In java.io.BufferedReader.readLine@POLYN249958[00358] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "9",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readArray@POLYN851753.ccl",
      "_method" : "---java.io.ObjectInputStream.readArray@POLYN851753.dummymethode_01897 in line [01897]",
      "_target" : "java.io.ObjectInputStream.readArray@POLYN851753.array",
      "_risk" : "//QC-JAVCWZ099[01897] In java.io.ObjectInputStream.readArray@POLYN851753[01897] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readArray@POLYN851753.array",
      "_method" : "---java.io.ObjectInputStream.readArray@POLYN851753.dummymethode_01940 in line [01940]",
      "_target" : "java.io.ObjectInputStream.readArray@POLYN851753.return",
      "_risk" : "//QC-JAVCWZ099[01940] In java.io.ObjectInputStream.readArray@POLYN851753[01940] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "10",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readArray@POLYN851753.len",
      "_method" : "---java.io.ObjectInputStream.readArray@POLYN851753.dummymethode_01897 in line [01897]",
      "_target" : "java.io.ObjectInputStream.readArray@POLYN851753.array",
      "_risk" : "//QC-JAVCWZ099[01897] In java.io.ObjectInputStream.readArray@POLYN851753[01897] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readArray@POLYN851753.array",
      "_method" : "---java.io.ObjectInputStream.readArray@POLYN851753.dummymethode_01940 in line [01940]",
      "_target" : "java.io.ObjectInputStream.readArray@POLYN851753.return",
      "_risk" : "//QC-JAVCWZ099[01940] In java.io.ObjectInputStream.readArray@POLYN851753[01940] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "11",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readClass@POLYN843113.unshared?unsharedMarker_cl",
      "_method" : "---java.io.ObjectInputStream.readClass@POLYN843113.dummymethode_01680 in line [01680]",
      "_target" : "java.io.ObjectInputStream.readClass@POLYN843113.passHandle",
      "_risk" : "//QC-JAVCWZ099[01680] In java.io.ObjectInputStream.readClass@POLYN843113[01680] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClass@POLYN843113.passHandle",
      "_method" : "---java.io.ObjectInputStream.readClass@POLYN843113.dummymethode_01684 in line [01684]",
      "_target" : "java.io.ObjectInputStream.readClass@POLYN843113.cibledummy_01684",
      "_risk" : "//QC-JAVCWZ099[01684] In java.io.ObjectInputStream.readClass@POLYN843113[01684] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "12",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN844188.unshared",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN844188.dummymethode_01710 in line [01710]",
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
    "_id" : "13",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "curContext",
      "_method" : "---java.io.ObjectInputStream.readExternalData@POLYN861597.dummymethode_02065 in line [02065]",
      "_target" : "oldContext",
      "_risk" : "//QC-JAVCWE099[02065] In java.io.ObjectInputStream.readExternalData@POLYN861597[02065] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "oldContext",
      "_method" : "---java.io.ObjectInputStream.readExternalData@POLYN861597.dummymethode_02094 in line [02094]",
      "_target" : "java.io.ObjectInputStream.readExternalData@POLYN861597.curContext",
      "_risk" : "//QC-JAVCWE099[02094] In java.io.ObjectInputStream.readExternalData@POLYN861597[02094] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "14",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN858373.unshared?unsharedMarker_obj",
      "_method" : "---java.io.ObjectInputStream.readOrdinaryObject@POLYN858373.dummymethode_02018 in line [02018]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN858373.passHandle",
      "_risk" : "//QC-JAVCWZ099[02018] In java.io.ObjectInputStream.readOrdinaryObject@POLYN858373[02018] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN858373.passHandle",
      "_method" : "---java.io.ObjectInputStream.readOrdinaryObject@POLYN858373.dummymethode_02021 in line [02021]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN858373.cibledummy_02021",
      "_risk" : "//QC-JAVCWZ099[02021] In java.io.ObjectInputStream.readOrdinaryObject@POLYN858373[02021] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "15",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readString@POLYN850780.unshared?unsharedMarker_str",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN850780.dummymethode_01874 in line [01874]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN850780.passHandle",
      "_risk" : "//QC-JAVCWZ099[01874] In java.io.ObjectInputStream.readString@POLYN850780[01874] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readString@POLYN850780.passHandle",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN850780.dummymethode_01875 in line [01875]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN850780.cibledummy_01875",
      "_risk" : "//QC-JAVCWZ099[01875] In java.io.ObjectInputStream.readString@POLYN850780[01875] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "16",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "curPut",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN610914.dummymethode_01446 in line [01446]",
      "_target" : "oldPut",
      "_risk" : "//QC-JAVCWE099[01446] In java.io.ObjectOutputStream.writeExternalData@POLYN610914[01446] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "oldPut",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN610914.dummymethode_01470 in line [01470]",
      "_target" : "java.io.ObjectOutputStream.writeExternalData@POLYN610914.curPut",
      "_risk" : "//QC-JAVCWE099[01470] In java.io.ObjectOutputStream.writeExternalData@POLYN610914[01470] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "17",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "rep",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593655.dummymethode_01149 in line [01149]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.obj",
      "_risk" : "//QC-JAVCWE099[01149] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01149] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593655.dummymethode_01154 in line [01154]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.cibledummy_01154",
      "_risk" : "//QC-JAVCWE099[01154] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01154] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "18",
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
    "_id" : "19",
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
    "_id" : "20",
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
    "_id" : "21",
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
    "_id" : "22",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN238285.out",
      "_method" : "---java.io.PipedInputStream.read@POLYN238285.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN238285.cibledummy_00397",
      "_risk" : "//QC-JAVCWE099[00397] In java.io.PipedInputStream.read@POLYN238285[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "available",
      "_method" : "---java.io.PipedInputStream.read@POLYN238285.dummymethode_00398 in line [00398]",
      "_target" : "java.io.PipedInputStream.read@POLYN238285.out",
      "_risk" : "//QC-JAVCWE099[00398] In java.io.PipedInputStream.read@POLYN238285[00398] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "23",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN238285.out",
      "_method" : "---java.io.PipedInputStream.read@POLYN238285.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN238285.cibledummy_00397",
      "_risk" : "//QC-JAVCWE099[00397] In java.io.PipedInputStream.read@POLYN238285[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "0",
      "_method" : "---java.io.PipedInputStream.read@POLYN238285.dummymethode_00403 in line [00403]",
      "_target" : "java.io.PipedInputStream.read@POLYN238285.out",
      "_risk" : "//QC-JAVCWE099[00403] In java.io.PipedInputStream.read@POLYN238285[00403] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "24",
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
    "_id" : "25",
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
    "_id" : "26",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "writeBuffer",
      "_method" : "---java.io.Writer.write@POLYN203421.dummymethode_00187 in line [00187]",
      "_target" : "java.io.Writer.write@POLYN203421.cbuf",
      "_risk" : "//QC-JAVCWE099[00187] In java.io.Writer.write@POLYN203421[00187] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN203421.cbuf",
      "_method" : "---java.io.Writer.write@POLYN203421.dummymethode_00191 in line [00191]",
      "_target" : "java.io.Writer.write@POLYN203421.cibledummy_00191",
      "_risk" : "//QC-JAVCWE099[00191] In java.io.Writer.write@POLYN203421[00191] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "27",
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
      "_method" : "---java.net.ServerSocket.ServerSocket@POLYN320129.dummymethode_00220 in line [00220]",
      "_target" : "java.net.ServerSocket.ServerSocket@POLYN320129.cibledummy_00220",
      "_risk" : "//QC-JAVCWE099[00220] In java.net.ServerSocket.ServerSocket@POLYN320129[00220] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  } ],
  "_lesDeadlocks" : [ ],
  "_lesDeadlocksSequences" : [ ],
  "_lesDeadlocksTypos" : [ ]
}