{
  "_lesSequences" : [ {
    "_id" : "1",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "9",
      "_source" : "java.io.InputStream.read@POLYN245998.0",
      "_method" : "---dummymethode in line [00168]",
      "_target" : "java.io.InputStream.read@POLYN245998.return",
      "_risk" : "//QC-JAVCWZ099[00168] In java.io.InputStream.read@POLYN245998[00168] source data PATHtainted (java.io.InputStream.read)"
    }, {
      "_id" : "8",
      "_source" : "java.io.InputStream.read@POLYN245998.return",
      "_method" : "---java.io.InputStream.read@POLYN245998 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873093.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN873093[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873093.nbytes",
      "_method" : "---dummymethode in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873093.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873093.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN873093 in line [03031]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889458.nread",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889458.nread",
      "_method" : "---dummymethode in line [03029]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889458.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889458.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889458 in line [00893]",
      "_target" : "java.io.ObjectInputStream.read@POLYN804192.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.read@POLYN804192.return",
      "_method" : "---java.io.ObjectInputStream.read@POLYN804192 in line [03091]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893111.v",
      "_risk" : "//QC-JAVCWZ099[03091] In java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893111[03091] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893111.v",
      "_method" : "---dummymethode in line [03095]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893111.return",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893111.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893111 in line [00979]",
      "_target" : "java.io.ObjectInputStream.readUnsignedByte@POLYN806955.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "2",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "9",
      "_source" : "java.io.InputStream.read@POLYN245998.-1",
      "_method" : "---dummymethode in line [00173]",
      "_target" : "java.io.InputStream.read@POLYN245998.return",
      "_risk" : "//QC-JAVCWZ099[00173] In java.io.InputStream.read@POLYN245998[00173] source data PATHtainted (java.io.InputStream.read)"
    }, {
      "_id" : "8",
      "_source" : "java.io.InputStream.read@POLYN245998.return",
      "_method" : "---java.io.InputStream.read@POLYN245998 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873093.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN873093[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873093.nbytes",
      "_method" : "---dummymethode in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873093.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873093.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN873093 in line [03031]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889458.nread",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889458.nread",
      "_method" : "---dummymethode in line [03029]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889458.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889458.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889458 in line [00893]",
      "_target" : "java.io.ObjectInputStream.read@POLYN804192.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.read@POLYN804192.return",
      "_method" : "---java.io.ObjectInputStream.read@POLYN804192 in line [03091]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893111.v",
      "_risk" : "//QC-JAVCWZ099[03091] In java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893111[03091] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893111.v",
      "_method" : "---dummymethode in line [03095]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893111.return",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893111.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893111 in line [00979]",
      "_target" : "java.io.ObjectInputStream.readUnsignedByte@POLYN806955.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "3",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "10",
      "_source" : "1",
      "_method" : "---dummymethode in line [00177]",
      "_target" : "java.io.InputStream.read@POLYN245998.i",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.io.InputStream.read@POLYN245998.i",
      "_method" : "---dummymethode in line [00188]",
      "_target" : "java.io.InputStream.read@POLYN245998.return",
      "_risk" : "//QC-JAVCWE099[00188] In java.io.InputStream.read@POLYN245998[00188] source data PATHtainted (java.io.InputStream.read)"
    }, {
      "_id" : "8",
      "_source" : "java.io.InputStream.read@POLYN245998.return",
      "_method" : "---java.io.InputStream.read@POLYN245998 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873093.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN873093[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873093.nbytes",
      "_method" : "---dummymethode in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873093.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873093.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN873093 in line [03031]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889458.nread",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889458.nread",
      "_method" : "---dummymethode in line [03029]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889458.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889458.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN889458 in line [00893]",
      "_target" : "java.io.ObjectInputStream.read@POLYN804192.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.read@POLYN804192.return",
      "_method" : "---java.io.ObjectInputStream.read@POLYN804192 in line [03091]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893111.v",
      "_risk" : "//QC-JAVCWZ099[03091] In java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893111[03091] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893111.v",
      "_method" : "---dummymethode in line [03095]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893111.return",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893111.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893111 in line [00979]",
      "_target" : "java.io.ObjectInputStream.readUnsignedByte@POLYN806955.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "4",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.get@POLYN617768.return",
      "_method" : "---java.util.HashMap.get@POLYN617768 in line [00943]",
      "_target" : "org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTasksCommitRecord@POLYN396042.deferred",
      "_risk" : "//QC-JAVCWE099[00943] In org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTasksCommitRecord@POLYN396042[00943] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTasksCommitRecord@POLYN396042.deferred",
      "_method" : "---java.util.Map.putAll in line [00960]",
      "_target" : "java.util.Map.putAll.m",
      "_risk" : "//QC-JAVCWE099[00960] In org.apache.kafka.connect.storage.KafkaConfigBackingStore.processTasksCommitRecord@POLYN396042[00960] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "5",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.util.HashMap.Node@POLYN606342.value",
      "_method" : "---dummymethode in line [00287]",
      "_target" : "java.util.HashMap.value",
      "_risk" : "//QC-JAVCWE099[00287] In java.util.HashMap.Node.Node@POLYN606342[00287] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "5",
      "_source" : "java.util.HashMap.value",
      "_method" : "---dummymethode in line [00292]",
      "_target" : "java.util.HashMap.getValue@POLYN606877.return",
      "_risk" : "//QC-JAVCWE099[00292] In java.util.HashMap.Node.getValue@POLYN606877[00292] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "4",
      "_source" : "java.util.HashMap.getValue@POLYN606877.return",
      "_method" : "---java.util.HashMap.getValue@POLYN606877 in line [00352]",
      "_target" : "data",
      "_risk" : "//QC-JAVCWE099[00352] In org.apache.kafka.message.ApiMessageTypeGenerator.generateHeaderVersion@POLYN217014[00352] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "data",
      "_method" : "---dummymethode in line [00117]",
      "_target" : "org.apache.kafka.connect.storage.OffsetStorageWriter.toFlush",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.storage.OffsetStorageWriter.toFlush",
      "_method" : "---dummymethode in line [00194]",
      "_target" : "org.apache.kafka.connect.storage.OffsetStorageWriter.cancelFlush@POLYN184012.data",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.storage.OffsetStorageWriter.cancelFlush@POLYN184012.data",
      "_method" : "---java.util.Map.putAll in line [00193]",
      "_target" : "java.util.Map.putAll.m",
      "_risk" : "//QC-JAVCWE099[00193] In org.apache.kafka.connect.storage.OffsetStorageWriter.cancelFlush@POLYN184012[00193] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "6",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.util.HashMap.setValue@POLYN607296.newValue",
      "_method" : "---dummymethode in line [00301]",
      "_target" : "java.util.HashMap.value",
      "_risk" : "//QC-JAVCWE099[00301] In java.util.HashMap.Node.setValue@POLYN607296[00301] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "5",
      "_source" : "java.util.HashMap.value",
      "_method" : "---dummymethode in line [00292]",
      "_target" : "java.util.HashMap.getValue@POLYN606877.return",
      "_risk" : "//QC-JAVCWE099[00292] In java.util.HashMap.Node.getValue@POLYN606877[00292] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "4",
      "_source" : "java.util.HashMap.getValue@POLYN606877.return",
      "_method" : "---java.util.HashMap.getValue@POLYN606877 in line [00352]",
      "_target" : "data",
      "_risk" : "//QC-JAVCWE099[00352] In org.apache.kafka.message.ApiMessageTypeGenerator.generateHeaderVersion@POLYN217014[00352] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "data",
      "_method" : "---dummymethode in line [00117]",
      "_target" : "org.apache.kafka.connect.storage.OffsetStorageWriter.toFlush",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.storage.OffsetStorageWriter.toFlush",
      "_method" : "---dummymethode in line [00194]",
      "_target" : "org.apache.kafka.connect.storage.OffsetStorageWriter.cancelFlush@POLYN184012.data",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.storage.OffsetStorageWriter.cancelFlush@POLYN184012.data",
      "_method" : "---java.util.Map.putAll in line [00193]",
      "_target" : "java.util.Map.putAll.m",
      "_risk" : "//QC-JAVCWE099[00193] In org.apache.kafka.connect.storage.OffsetStorageWriter.cancelFlush@POLYN184012[00193] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "7",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.lang.Long.MAX_VALUE",
      "_method" : "---dummymethode in line [00438]",
      "_target" : "java.util.HashMap.value",
      "_risk" : "//QC-JAVCWE099[00438] In org.apache.kafka.streams.state.internals.InMemoryTimeOrderedKeyValueBuffer.evictWhile@POLYN241287[00438] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "5",
      "_source" : "java.util.HashMap.value",
      "_method" : "---dummymethode in line [00292]",
      "_target" : "java.util.HashMap.getValue@POLYN606877.return",
      "_risk" : "//QC-JAVCWE099[00292] In java.util.HashMap.Node.getValue@POLYN606877[00292] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "4",
      "_source" : "java.util.HashMap.getValue@POLYN606877.return",
      "_method" : "---java.util.HashMap.getValue@POLYN606877 in line [00352]",
      "_target" : "data",
      "_risk" : "//QC-JAVCWE099[00352] In org.apache.kafka.message.ApiMessageTypeGenerator.generateHeaderVersion@POLYN217014[00352] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "data",
      "_method" : "---dummymethode in line [00117]",
      "_target" : "org.apache.kafka.connect.storage.OffsetStorageWriter.toFlush",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.storage.OffsetStorageWriter.toFlush",
      "_method" : "---dummymethode in line [00194]",
      "_target" : "org.apache.kafka.connect.storage.OffsetStorageWriter.cancelFlush@POLYN184012.data",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.storage.OffsetStorageWriter.cancelFlush@POLYN184012.data",
      "_method" : "---java.util.Map.putAll in line [00193]",
      "_target" : "java.util.Map.putAll.m",
      "_risk" : "//QC-JAVCWE099[00193] In org.apache.kafka.connect.storage.OffsetStorageWriter.cancelFlush@POLYN184012[00193] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "8",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "0L",
      "_method" : "---dummymethode in line [01460]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.readObject@POLYN1486685.added",
      "_risk" : "//QC-JAVCWE099[01460] In java.util.concurrent.ConcurrentHashMap.readObject@POLYN1486685[01460] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.readObject@POLYN1486685.added",
      "_method" : "---dummymethode in line [01515]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.baseCount",
      "_risk" : "//QC-JAVCWE099[01515] In java.util.concurrent.ConcurrentHashMap.readObject@POLYN1486685[01515] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "4",
      "_source" : "java.util.concurrent.ConcurrentHashMap.baseCount",
      "_method" : "---dummymethode in line [02507]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551717.sum",
      "_risk" : "//QC-JAVCWE099[02507] In java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551717[02507] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551717.sum",
      "_method" : "---dummymethode in line [02514]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551717.return",
      "_risk" : "//QC-JAVCWE099[02514] In java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551717[02514] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551717.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551717 in line [00914]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1456920.return",
      "_risk" : "//QC-JAVCWE099[00914] In java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1456920[00914] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1456920.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1456920 in line [04386]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1652844.return",
      "_risk" : "//QC-JAVCWE099[04386] In java.util.concurrent.ConcurrentHashMap.CollectionView.isEmpty@POLYN1652844[04386] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "9",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "8",
      "_source" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1498617.1L",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.addCount@POLYN1533413 in line [01714]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.addCount@POLYN1533413.x",
      "_risk" : "//QC-JAVCWZ099[01714] In java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1498617[01714] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.util.concurrent.ConcurrentHashMap.addCount@POLYN1533413.x",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.fullAddCount@POLYN1552390 in line [02260]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.fullAddCount@POLYN1552390.x",
      "_risk" : "//QC-JAVCWZ099[02260] In java.util.concurrent.ConcurrentHashMap.addCount@POLYN1533413[02260] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.util.concurrent.ConcurrentHashMap.fullAddCount@POLYN1552390.x",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.CounterCell.CounterCell@POLYN1551589 in line [02531]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.CounterCell.CounterCell@POLYN1551589.x",
      "_risk" : "//QC-JAVCWZ099[02531] In java.util.concurrent.ConcurrentHashMap.fullAddCount@POLYN1552390[02531] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.CounterCell.CounterCell@POLYN1551589.x",
      "_method" : "---dummymethode in line [02502]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.CounterCell.value",
      "_risk" : "//QC-JAVCWZ099[02502] In java.util.concurrent.ConcurrentHashMap.CounterCell.CounterCell@POLYN1551589[02502] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "4",
      "_source" : "java.util.concurrent.ConcurrentHashMap.CounterCell.value",
      "_method" : "---dummymethode in line [02511]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551717.sum",
      "_risk" : "//QC-JAVCWZ099[02511] In java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551717[02511] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551717.sum",
      "_method" : "---dummymethode in line [02514]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551717.return",
      "_risk" : "//QC-JAVCWZ099[02514] In java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551717[02514] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551717.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551717 in line [00914]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1456920.return",
      "_risk" : "//QC-JAVCWZ099[00914] In java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1456920[00914] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1456920.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1456920 in line [04386]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1652844.return",
      "_risk" : "//QC-JAVCWZ099[04386] In java.util.concurrent.ConcurrentHashMap.CollectionView.isEmpty@POLYN1652844[04386] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "10",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "8",
      "_source" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462011.1L",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.addCount@POLYN1533413 in line [01064]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.addCount@POLYN1533413.x",
      "_risk" : "//QC-JAVCWZ099[01064] In java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462011[01064] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.util.concurrent.ConcurrentHashMap.addCount@POLYN1533413.x",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.fullAddCount@POLYN1552390 in line [02260]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.fullAddCount@POLYN1552390.x",
      "_risk" : "//QC-JAVCWZ099[02260] In java.util.concurrent.ConcurrentHashMap.addCount@POLYN1533413[02260] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.util.concurrent.ConcurrentHashMap.fullAddCount@POLYN1552390.x",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.CounterCell.CounterCell@POLYN1551589 in line [02531]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.CounterCell.CounterCell@POLYN1551589.x",
      "_risk" : "//QC-JAVCWZ099[02531] In java.util.concurrent.ConcurrentHashMap.fullAddCount@POLYN1552390[02531] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.CounterCell.CounterCell@POLYN1551589.x",
      "_method" : "---dummymethode in line [02502]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.CounterCell.value",
      "_risk" : "//QC-JAVCWZ099[02502] In java.util.concurrent.ConcurrentHashMap.CounterCell.CounterCell@POLYN1551589[02502] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "4",
      "_source" : "java.util.concurrent.ConcurrentHashMap.CounterCell.value",
      "_method" : "---dummymethode in line [02511]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551717.sum",
      "_risk" : "//QC-JAVCWZ099[02511] In java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551717[02511] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551717.sum",
      "_method" : "---dummymethode in line [02514]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551717.return",
      "_risk" : "//QC-JAVCWZ099[02514] In java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551717[02514] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551717.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551717 in line [00914]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1456920.return",
      "_risk" : "//QC-JAVCWZ099[00914] In java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1456920[00914] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1456920.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1456920 in line [04386]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1652844.return",
      "_risk" : "//QC-JAVCWZ099[04386] In java.util.concurrent.ConcurrentHashMap.CollectionView.isEmpty@POLYN1652844[04386] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "11",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.util.Map.getValue@POLYN434644.return",
      "_method" : "---java.util.Map.getValue@POLYN434644 in line [00859]",
      "_target" : "java.io.FileInputStream.channel",
      "_risk" : "//QC-JAVCWE099[00859] In org.apache.kafka.common.network.Selector.clear@POLYN428259[00859] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.FileInputStream.channel",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "java.util.Map.values@POLYN432698.return",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN436196[00001] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "4",
      "_source" : "java.util.Map.values@POLYN432698.return",
      "_method" : "---java.util.Map.values@POLYN432698 in line [03486]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[03486] In org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1138823[03486] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "partition",
      "_method" : "---dummymethode in line [00268]",
      "_target" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN325079.effectivePartition",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN325079.effectivePartition",
      "_method" : "---org.apache.kafka.clients.producer.internals.RecordAccumulator.setPartition@POLYN324219 in line [00272]",
      "_target" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.setPartition@POLYN324219.partition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.setPartition@POLYN324219.partition",
      "_method" : "---org.apache.kafka.clients.producer.internals.RecordAccumulator.AppendCallbacks.setPartition in line [00213]",
      "_target" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.AppendCallbacks.setPartition.partition",
      "_risk" : ""
    } ]
  }, {
    "_id" : "12",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "7",
      "_source" : "org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToThreads@POLYN408436.assignment",
      "_method" : "---dummymethode in line [01178]",
      "_target" : "java.util.Map.values@POLYN432698.return",
      "_risk" : "//QC-JAVCWE099[01178] In org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToThreads@POLYN408436[01178] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "6",
      "_source" : "java.util.Map.values@POLYN432698.return",
      "_method" : "---java.util.Map.values@POLYN432698 in line [00001]",
      "_target" : "java.io.FileInputStream.channel",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN436196[00001] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.FileInputStream.channel",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "java.util.Map.values@POLYN432698.return",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN436196[00001] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "4",
      "_source" : "java.util.Map.values@POLYN432698.return",
      "_method" : "---java.util.Map.values@POLYN432698 in line [03486]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[03486] In org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1138823[03486] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "partition",
      "_method" : "---dummymethode in line [00268]",
      "_target" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN325079.effectivePartition",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN325079.effectivePartition",
      "_method" : "---org.apache.kafka.clients.producer.internals.RecordAccumulator.setPartition@POLYN324219 in line [00272]",
      "_target" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.setPartition@POLYN324219.partition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.setPartition@POLYN324219.partition",
      "_method" : "---org.apache.kafka.clients.producer.internals.RecordAccumulator.AppendCallbacks.setPartition in line [00213]",
      "_target" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.AppendCallbacks.setPartition.partition",
      "_risk" : ""
    } ]
  }, {
    "_id" : "13",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "7",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer.getSamePartitions@POLYN169815.partitions",
      "_method" : "---dummymethode in line [00166]",
      "_target" : "java.util.Map.values@POLYN432698.return",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer.getSamePartitions@POLYN169815[00166] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "6",
      "_source" : "java.util.Map.values@POLYN432698.return",
      "_method" : "---java.util.Map.values@POLYN432698 in line [00001]",
      "_target" : "java.io.FileInputStream.channel",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN436196[00001] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.FileInputStream.channel",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "java.util.Map.values@POLYN432698.return",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN436196[00001] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "4",
      "_source" : "java.util.Map.values@POLYN432698.return",
      "_method" : "---java.util.Map.values@POLYN432698 in line [03486]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[03486] In org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1138823[03486] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "partition",
      "_method" : "---dummymethode in line [00268]",
      "_target" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN325079.effectivePartition",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN325079.effectivePartition",
      "_method" : "---org.apache.kafka.clients.producer.internals.RecordAccumulator.setPartition@POLYN324219 in line [00272]",
      "_target" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.setPartition@POLYN324219.partition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.setPartition@POLYN324219.partition",
      "_method" : "---org.apache.kafka.clients.producer.internals.RecordAccumulator.AppendCallbacks.setPartition in line [00213]",
      "_target" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.AppendCallbacks.setPartition.partition",
      "_risk" : ""
    } ]
  }, {
    "_id" : "14",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "7",
      "_source" : "org.apache.kafka.trogdor.workload.ConsumeBenchWorker.Prepare.consumeTasks@POLYN228591.tasks",
      "_method" : "---dummymethode in line [00142]",
      "_target" : "java.util.Map.values@POLYN432698.return",
      "_risk" : "//QC-JAVCWE099[00142] In org.apache.kafka.trogdor.workload.ConsumeBenchWorker.Prepare.consumeTasks@POLYN228591[00142] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "6",
      "_source" : "java.util.Map.values@POLYN432698.return",
      "_method" : "---java.util.Map.values@POLYN432698 in line [00001]",
      "_target" : "java.io.FileInputStream.channel",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN436196[00001] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.FileInputStream.channel",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "java.util.Map.values@POLYN432698.return",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN436196[00001] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "4",
      "_source" : "java.util.Map.values@POLYN432698.return",
      "_method" : "---java.util.Map.values@POLYN432698 in line [03486]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[03486] In org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1138823[03486] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "partition",
      "_method" : "---dummymethode in line [00268]",
      "_target" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN325079.effectivePartition",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN325079.effectivePartition",
      "_method" : "---org.apache.kafka.clients.producer.internals.RecordAccumulator.setPartition@POLYN324219 in line [00272]",
      "_target" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.setPartition@POLYN324219.partition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.setPartition@POLYN324219.partition",
      "_method" : "---org.apache.kafka.clients.producer.internals.RecordAccumulator.AppendCallbacks.setPartition in line [00213]",
      "_target" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.AppendCallbacks.setPartition.partition",
      "_risk" : ""
    } ]
  }, {
    "_id" : "15",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "7",
      "_source" : "e.value",
      "_method" : "---dummymethode in line [00651]",
      "_target" : "java.util.HashMap.putVal@POLYN621651.oldValue",
      "_risk" : "//QC-JAVCWE099[00651] In java.util.HashMap.putVal@POLYN621651[00651] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "6",
      "_source" : "java.util.HashMap.putVal@POLYN621651.oldValue",
      "_method" : "---dummymethode in line [00655]",
      "_target" : "java.util.HashMap.putVal@POLYN621651.return",
      "_risk" : "//QC-JAVCWE099[00655] In java.util.HashMap.putVal@POLYN621651[00655] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "5",
      "_source" : "java.util.HashMap.putVal@POLYN621651.return",
      "_method" : "---java.util.HashMap.putVal@POLYN621651 in line [01059]",
      "_target" : "java.util.HashMap.putIfAbsent@POLYN649813.return",
      "_risk" : "//QC-JAVCWE099[01059] In java.util.HashMap.putIfAbsent@POLYN649813[01059] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.util.HashMap.putIfAbsent@POLYN649813.return",
      "_method" : "---java.util.HashMap.putIfAbsent@POLYN649813 in line [00144]",
      "_target" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220751.previous",
      "_risk" : "//QC-JAVCWE099[00144] In org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220751[00144] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220751.previous",
      "_method" : "---dummymethode in line [00146]",
      "_target" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220751.group",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220751.group",
      "_method" : "---dummymethode in line [00148]",
      "_target" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220751.return",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220751.return",
      "_method" : "---org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220751 in line [00603]",
      "_target" : "org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.SourceTaskMetricsGroup.SourceTaskMetricsGroup@POLYN277835.metricGroup",
      "_risk" : ""
    } ]
  }, {
    "_id" : "16",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.util.HashMap.putVal@POLYN621651.null",
      "_method" : "---dummymethode in line [00662]",
      "_target" : "java.util.HashMap.putVal@POLYN621651.return",
      "_risk" : "//QC-JAVCWE099[00662] In java.util.HashMap.putVal@POLYN621651[00662] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "5",
      "_source" : "java.util.HashMap.putVal@POLYN621651.return",
      "_method" : "---java.util.HashMap.putVal@POLYN621651 in line [01059]",
      "_target" : "java.util.HashMap.putIfAbsent@POLYN649813.return",
      "_risk" : "//QC-JAVCWE099[01059] In java.util.HashMap.putIfAbsent@POLYN649813[01059] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.util.HashMap.putIfAbsent@POLYN649813.return",
      "_method" : "---java.util.HashMap.putIfAbsent@POLYN649813 in line [00144]",
      "_target" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220751.previous",
      "_risk" : "//QC-JAVCWE099[00144] In org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220751[00144] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220751.previous",
      "_method" : "---dummymethode in line [00146]",
      "_target" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220751.group",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220751.group",
      "_method" : "---dummymethode in line [00148]",
      "_target" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220751.return",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220751.return",
      "_method" : "---org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220751 in line [00603]",
      "_target" : "org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.SourceTaskMetricsGroup.SourceTaskMetricsGroup@POLYN277835.metricGroup",
      "_risk" : ""
    } ]
  }, {
    "_id" : "17",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.util.HashMap.Values.Values@POLYN642936.return",
      "_method" : "---java.util.HashMap.Values.Values@POLYN642936 in line [00956]",
      "_target" : "java.util.HashMap.values@POLYN642573.vs",
      "_risk" : "//QC-JAVCWE099[00956] In java.util.HashMap.values@POLYN642573[00956] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.values@POLYN642573.vs",
      "_method" : "---dummymethode in line [00959]",
      "_target" : "java.util.HashMap.values@POLYN642573.return",
      "_risk" : "//QC-JAVCWE099[00959] In java.util.HashMap.values@POLYN642573[00959] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.values@POLYN642573.return",
      "_method" : "---java.util.HashMap.values@POLYN642573 in line [00190]",
      "_target" : "org.apache.kafka.message.StructRegistry.structs@POLYN172668.return",
      "_risk" : "//QC-JAVCWE099[00190] In org.apache.kafka.message.StructRegistry.structs@POLYN172668[00190] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.message.StructRegistry.structs@POLYN172668.return",
      "_method" : "---org.apache.kafka.message.StructRegistry.structs@POLYN172668 in line [00056]",
      "_target" : "org.apache.kafka.message.JsonConverterGenerator.generateAndWrite@POLYN228819.Iterator_StructRegistry.StructInfo_iter",
      "_risk" : ""
    } ]
  }, {
    "_id" : "18",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "\"null\"",
      "_method" : "---dummymethode in line [00667]",
      "_target" : "java.io.PrintStream.print@POLYN365268.s",
      "_risk" : "//QC-JAVCWE099[00667] In java.io.PrintStream.print@POLYN365268[00667] target data PATHtainted (java.io.PrintStream.print)"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.print@POLYN365268.s",
      "_method" : "---java.io.PrintStream.write@POLYN360077 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN360077.s",
      "_risk" : "//QC-JAVCWE099[00669] In java.io.PrintStream.print@POLYN365268[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.write@POLYN360077.s",
      "_method" : "---java.io.Writer.write@POLYN191548 in line [00525]",
      "_target" : "java.io.Writer.write@POLYN191548.str",
      "_risk" : "//QC-JAVCWE099[00525] In java.io.PrintStream.write@POLYN360077[00525] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "19",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN163424.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN369717 in line [00081]",
      "_target" : "java.io.PrintStream.println@POLYN369717.x",
      "_risk" : "//QC-JAVCWE099[00081] In org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN163424[00081] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.println@POLYN369717.x",
      "_method" : "---java.io.PrintStream.print@POLYN365268 in line [00806]",
      "_target" : "java.io.PrintStream.print@POLYN365268.s",
      "_risk" : "//QC-JAVCWE099[00806] In java.io.PrintStream.println@POLYN369717[00806] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.print@POLYN365268.s",
      "_method" : "---java.io.PrintStream.write@POLYN360077 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN360077.s",
      "_risk" : "//QC-JAVCWE099[00669] In java.io.PrintStream.print@POLYN365268[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.write@POLYN360077.s",
      "_method" : "---java.io.Writer.write@POLYN191548 in line [00525]",
      "_target" : "java.io.Writer.write@POLYN191548.str",
      "_risk" : "//QC-JAVCWE099[00525] In java.io.PrintStream.write@POLYN360077[00525] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "20",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.lang.StringBuilder.toString@POLYN235900.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN235900 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN909263.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN909263.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN909263 in line [03183]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN898006.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN898006.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN898006 in line [01124]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN811205.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN811205.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN811205 in line [01863]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN839366.str",
      "_risk" : "//QC-JAVCWZ099[01863] In java.io.ObjectInputStream.readString@POLYN839366[01863] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readString@POLYN839366.str",
      "_method" : "---dummymethode in line [01876]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN839366.return",
      "_risk" : "//QC-JAVCWZ099[01876] In java.io.ObjectInputStream.readString@POLYN839366[01876] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readString@POLYN839366.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN839366 in line [01963]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN844675.name",
      "_risk" : "//QC-JAVCWZ099[01963] In java.io.ObjectInputStream.readEnum@POLYN844675[01963] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "21",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readNull@POLYN830051.null",
      "_method" : "---dummymethode in line [01635]",
      "_target" : "java.io.ObjectInputStream.readNull@POLYN830051.return",
      "_risk" : "//QC-JAVCWZ099[01635] In java.io.ObjectInputStream.readNull@POLYN830051[01635] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readNull@POLYN830051.return",
      "_method" : "---java.io.ObjectInputStream.readNull@POLYN830051 in line [01512]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN824538.return",
      "_risk" : "//QC-JAVCWZ099[01512] In java.io.ObjectInputStream.readObject0@POLYN824538[01512] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN824538.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN824538 in line [00422]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN787026.obj",
      "_risk" : "//QC-JAVCWZ099[00422] In java.io.ObjectInputStream.readObject@POLYN787026[00422] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN787026.obj",
      "_method" : "---dummymethode in line [00431]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN787026.return",
      "_risk" : "//QC-JAVCWZ099[00431] In java.io.ObjectInputStream.readObject@POLYN787026[00431] source data PATHtainted (java.io.ObjectInputStream.read)"
    } ]
  }, {
    "_id" : "22",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.HandleTable.lookupObject@POLYN925148.return",
      "_method" : "---java.io.ObjectInputStream.HandleTable.lookupObject@POLYN925148 in line [01658]",
      "_target" : "java.io.ObjectInputStream.readHandle@POLYN830437.obj",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readHandle@POLYN830437.obj",
      "_method" : "---dummymethode in line [01665]",
      "_target" : "java.io.ObjectInputStream.readHandle@POLYN830437.return",
      "_risk" : "//QC-JAVCWZ099[01665] In java.io.ObjectInputStream.readHandle@POLYN830437[01665] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readHandle@POLYN830437.return",
      "_method" : "---java.io.ObjectInputStream.readHandle@POLYN830437 in line [01515]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN824538.return",
      "_risk" : "//QC-JAVCWZ099[01515] In java.io.ObjectInputStream.readObject0@POLYN824538[01515] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN824538.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN824538 in line [00422]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN787026.obj",
      "_risk" : "//QC-JAVCWZ099[00422] In java.io.ObjectInputStream.readObject@POLYN787026[00422] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN787026.obj",
      "_method" : "---dummymethode in line [00431]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN787026.return",
      "_risk" : "//QC-JAVCWZ099[00431] In java.io.ObjectInputStream.readObject@POLYN787026[00431] source data PATHtainted (java.io.ObjectInputStream.read)"
    } ]
  }, {
    "_id" : "23",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readClass@POLYN831735.cl",
      "_method" : "---dummymethode in line [01688]",
      "_target" : "java.io.ObjectInputStream.readClass@POLYN831735.return",
      "_risk" : "//QC-JAVCWZ099[01688] In java.io.ObjectInputStream.readClass@POLYN831735[01688] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readClass@POLYN831735.return",
      "_method" : "---java.io.ObjectInputStream.readClass@POLYN831735 in line [01518]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN824538.return",
      "_risk" : "//QC-JAVCWZ099[01518] In java.io.ObjectInputStream.readObject0@POLYN824538[01518] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN824538.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN824538 in line [00422]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN787026.obj",
      "_risk" : "//QC-JAVCWZ099[00422] In java.io.ObjectInputStream.readObject@POLYN787026[00422] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN787026.obj",
      "_method" : "---dummymethode in line [00431]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN787026.return",
      "_risk" : "//QC-JAVCWZ099[00431] In java.io.ObjectInputStream.readObject@POLYN787026[00431] source data PATHtainted (java.io.ObjectInputStream.read)"
    } ]
  }, {
    "_id" : "24",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN834265.desc",
      "_method" : "---dummymethode in line [01793]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN834265.return",
      "_risk" : "//QC-JAVCWZ099[01793] In java.io.ObjectInputStream.readProxyDesc@POLYN834265[01793] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN834265.return",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN834265 in line [01710]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN832804.descriptor",
      "_risk" : "//QC-JAVCWZ099[01710] In java.io.ObjectInputStream.readClassDesc@POLYN832804[01710] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN832804.descriptor",
      "_method" : "---dummymethode in line [01722]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN832804.return",
      "_risk" : "//QC-JAVCWZ099[01722] In java.io.ObjectInputStream.readClassDesc@POLYN832804[01722] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN832804.return",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN832804 in line [01522]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN824538.return",
      "_risk" : "//QC-JAVCWZ099[01522] In java.io.ObjectInputStream.readObject0@POLYN824538[01522] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN824538.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN824538 in line [00422]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN787026.obj",
      "_risk" : "//QC-JAVCWZ099[00422] In java.io.ObjectInputStream.readObject@POLYN787026[00422] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN787026.obj",
      "_method" : "---dummymethode in line [00431]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN787026.return",
      "_risk" : "//QC-JAVCWZ099[00431] In java.io.ObjectInputStream.readObject@POLYN787026[00431] source data PATHtainted (java.io.ObjectInputStream.read)"
    } ]
  }, {
    "_id" : "25",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN837095.desc",
      "_method" : "---dummymethode in line [01851]",
      "_target" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN837095.return",
      "_risk" : "//QC-JAVCWZ099[01851] In java.io.ObjectInputStream.readNonProxyDesc@POLYN837095[01851] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN837095.return",
      "_method" : "---java.io.ObjectInputStream.readNonProxyDesc@POLYN837095 in line [01713]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN832804.descriptor",
      "_risk" : "//QC-JAVCWZ099[01713] In java.io.ObjectInputStream.readClassDesc@POLYN832804[01713] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN832804.descriptor",
      "_method" : "---dummymethode in line [01722]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN832804.return",
      "_risk" : "//QC-JAVCWZ099[01722] In java.io.ObjectInputStream.readClassDesc@POLYN832804[01722] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN832804.return",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN832804 in line [01522]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN824538.return",
      "_risk" : "//QC-JAVCWZ099[01522] In java.io.ObjectInputStream.readObject0@POLYN824538[01522] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN824538.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN824538 in line [00422]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN787026.obj",
      "_risk" : "//QC-JAVCWZ099[00422] In java.io.ObjectInputStream.readObject@POLYN787026[00422] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN787026.obj",
      "_method" : "---dummymethode in line [00431]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN787026.return",
      "_risk" : "//QC-JAVCWZ099[00431] In java.io.ObjectInputStream.readObject@POLYN787026[00431] source data PATHtainted (java.io.ObjectInputStream.read)"
    } ]
  }, {
    "_id" : "26",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.util.Map.get@POLYN427859.return",
      "_method" : "---java.util.Map.get@POLYN427859 in line [01109]",
      "_target" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.getTheActualPartitionToBeMoved@POLYN403795.return",
      "_risk" : "//QC-JAVCWE099[01109] In org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.getTheActualPartitionToBeMoved@POLYN403795[01109] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.getTheActualPartitionToBeMoved@POLYN403795.return",
      "_method" : "---org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.getTheActualPartitionToBeMoved@POLYN403795 in line [00965]",
      "_target" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.reassignPartition@POLYN395838.partitionToBeMoved",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.reassignPartition@POLYN395838.partitionToBeMoved",
      "_method" : "---org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.processPartitionMovement@POLYN396500 in line [00966]",
      "_target" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.processPartitionMovement@POLYN396500.partition",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.processPartitionMovement@POLYN396500.partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.movePartition@POLYN402955 in line [00979]",
      "_target" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.movePartition@POLYN402955.partition",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.movePartition@POLYN402955.partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.addPartitionMovementRecord@POLYN402029 in line [01089]",
      "_target" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.addPartitionMovementRecord@POLYN402029.partition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.addPartitionMovementRecord@POLYN402029.partition",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [01063]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[01063] In org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.addPartitionMovementRecord@POLYN402029[01063] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "27",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.util.HashMap.Node@POLYN606342.key",
      "_method" : "---dummymethode in line [00286]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00286] In java.util.HashMap.Node.Node@POLYN606342[00286] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN606786.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN606786[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN606786.return",
      "_method" : "---java.util.HashMap.getKey@POLYN606786 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210902.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210902[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210902.topic",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210902[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "28",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.admin.internals.AdminApiDriver.BiMultimap.remove@POLYN236848.sourcedummy",
      "_method" : "---java.util.Hashtable.remove@POLYN476208 in line [00001]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.clients.admin.internals.AdminApiDriver.BiMultimap.remove@POLYN236848[00001] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN606786.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN606786[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN606786.return",
      "_method" : "---java.util.HashMap.getKey@POLYN606786 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210902.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210902[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210902.topic",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210902[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "29",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.storage.Converter.fromConnectData@POLYN158716.return",
      "_method" : "---org.apache.kafka.connect.storage.Converter.fromConnectData@POLYN158716 in line [00087]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00087] In org.apache.kafka.connect.runtime.errors.WorkerErrantRecordReporter.report@POLYN170556[00087] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN606786.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN606786[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN606786.return",
      "_method" : "---java.util.HashMap.getKey@POLYN606786 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210902.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210902[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210902.topic",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210902[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "30",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.storeSensorPrefix@POLYN301754.return",
      "_method" : "---org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.storeSensorPrefix@POLYN301754 in line [00506]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00506] In org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl[00506] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN606786.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN606786[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN606786.return",
      "_method" : "---java.util.HashMap.getKey@POLYN606786 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210902.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210902[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210902.topic",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210902[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "31",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "null",
      "_method" : "---dummymethode in line [00077]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00077] In org.apache.kafka.streams.state.internals.DelegatingPeekingKeyValueIterator.next@POLYN151018[00077] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN606786.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN606786[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN606786.return",
      "_method" : "---java.util.HashMap.getKey@POLYN606786 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210902.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210902[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210902.topic",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210902[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "32",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.state.internals.MeteredSessionStore.keyBytes@POLYN235438.return",
      "_method" : "---org.apache.kafka.streams.state.internals.MeteredSessionStore.keyBytes@POLYN235438 in line [00186]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00186] In org.apache.kafka.streams.state.internals.MeteredSessionStore.put@POLYN222322[00186] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN606786.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN606786[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN606786.return",
      "_method" : "---java.util.HashMap.getKey@POLYN606786 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210902.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210902[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210902.topic",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210902[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "33",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.state.internals.PrefixedSessionKeySchemas.KeyFirstSessionKeySchema.sourcedummy",
      "_method" : "---org.apache.kafka.streams.state.internals.PrefixedSessionKeySchemas.KeyFirstSessionKeySchema.extractKey@POLYN220568 in line [00333]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00333] In org.apache.kafka.streams.state.internals.PrefixedSessionKeySchemas.KeyFirstSessionKeySchema[00333] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN606786.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN606786[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN606786.return",
      "_method" : "---java.util.HashMap.getKey@POLYN606786 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210902.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210902[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210902.topic",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210902[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "34",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.state.internals.PrefixedSessionKeySchemas.TimeFirstSessionKeySchema.sourcedummy",
      "_method" : "---org.apache.kafka.streams.state.internals.PrefixedSessionKeySchemas.TimeFirstSessionKeySchema.extractKey@POLYN210125 in line [00182]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00182] In org.apache.kafka.streams.state.internals.PrefixedSessionKeySchemas.TimeFirstSessionKeySchema[00182] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN606786.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN606786[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN606786.return",
      "_method" : "---java.util.HashMap.getKey@POLYN606786 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210902.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210902[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210902.topic",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210902[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "35",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.state.internals.SessionKeySchema.sourcedummy",
      "_method" : "---org.apache.kafka.streams.state.internals.SessionKeySchema.extractKey@POLYN178343 in line [00144]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00144] In org.apache.kafka.streams.state.internals.SessionKeySchema[00144] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN606786.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN606786[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN606786.return",
      "_method" : "---java.util.HashMap.getKey@POLYN606786 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210902.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210902[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210902.topic",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210902[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "36",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.serialization.Deserializer.deserialize@POLYN151552.return",
      "_method" : "---org.apache.kafka.common.serialization.Deserializer.deserialize@POLYN151552 in line [00158]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00158] In org.apache.kafka.streams.state.internals.SessionKeySchema[00158] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN606786.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN606786[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN606786.return",
      "_method" : "---java.util.HashMap.getKey@POLYN606786 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210902.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210902[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210902.topic",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210902[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "37",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.Map.getKey@POLYN434311.return",
      "_method" : "---java.util.Map.getKey@POLYN434311 in line [00319]",
      "_target" : "org.apache.kafka.connect.mirror.MirrorCheckpointTask.getConvertedUpstreamOffset@POLYN206423.consumerId",
      "_risk" : "//QC-JAVCWE099[00319] In org.apache.kafka.connect.mirror.MirrorCheckpointTask.getConvertedUpstreamOffset@POLYN206423[00319] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.mirror.MirrorCheckpointTask.getConvertedUpstreamOffset@POLYN206423.consumerId",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00324]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00324] In org.apache.kafka.connect.mirror.MirrorCheckpointTask.getConvertedUpstreamOffset@POLYN206423[00324] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "38",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.remove@POLYN650114.return",
      "_method" : "---java.util.HashMap.remove@POLYN650114 in line [00299]",
      "_target" : "org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN246766.nextData",
      "_risk" : "//QC-JAVCWE099[00299] In org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN246766[00299] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN246766.nextData",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00338]",
      "_target" : "java.util.HashMap.put@POLYN621128.value",
      "_risk" : "//QC-JAVCWE099[00338] In org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN246766[00338] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "39",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.getOrDefault@POLYN649396.return",
      "_method" : "---java.util.HashMap.getOrDefault@POLYN649396 in line [00072]",
      "_target" : "org.apache.kafka.common.requests.AddPartitionsToTxnResponse.AddPartitionsToTxnResponse@POLYN159354.partitionResultCollection",
      "_risk" : "//QC-JAVCWE099[00072] In org.apache.kafka.common.requests.AddPartitionsToTxnResponse.AddPartitionsToTxnResponse@POLYN159354[00072] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.requests.AddPartitionsToTxnResponse.AddPartitionsToTxnResponse@POLYN159354.partitionResultCollection",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00077]",
      "_target" : "java.util.HashMap.put@POLYN621128.value",
      "_risk" : "//QC-JAVCWE099[00077] In org.apache.kafka.common.requests.AddPartitionsToTxnResponse.AddPartitionsToTxnResponse@POLYN159354[00077] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "40",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.Map.getOrDefault@POLYN441006.return",
      "_method" : "---java.util.Map.getOrDefault@POLYN441006 in line [00066]",
      "_target" : "org.apache.kafka.common.requests.OffsetCommitResponse.OffsetCommitResponse@POLYN156498.topic",
      "_risk" : "//QC-JAVCWE099[00066] In org.apache.kafka.common.requests.OffsetCommitResponse.OffsetCommitResponse@POLYN156498[00066] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.requests.OffsetCommitResponse.OffsetCommitResponse@POLYN156498.topic",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00072]",
      "_target" : "java.util.HashMap.put@POLYN621128.value",
      "_risk" : "//QC-JAVCWE099[00072] In org.apache.kafka.common.requests.OffsetCommitResponse.OffsetCommitResponse@POLYN156498[00072] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "41",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.Map.size@POLYN425154.return",
      "_method" : "---java.util.Map.size@POLYN425154 in line [00527]",
      "_target" : "org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskConfigs@POLYN372262.taskCount",
      "_risk" : "//QC-JAVCWE099[00527] In org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskConfigs@POLYN372262[00527] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskConfigs@POLYN372262.taskCount",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00550]",
      "_target" : "java.util.HashMap.put@POLYN621128.value",
      "_risk" : "//QC-JAVCWE099[00550] In org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskConfigs@POLYN372262[00550] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "42",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN592372.objs[i]",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN582341 in line [01378]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.obj",
      "_risk" : "//QC-JAVCWZ099[01378] In java.io.ObjectOutputStream.writeArray@POLYN592372[01378] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN582341[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN600744 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN600744.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN600744.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN602587 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN602587.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "43",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN557853.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN604995 in line [00351]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN604995.ex",
      "_risk" : "//QC-JAVCWZ099[00351] In java.io.ObjectOutputStream.writeObject@POLYN557853[00351] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN604995.ex",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN582341 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.obj",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN604995[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN582341[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN600744 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN600744.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN600744.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN602587 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN602587.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "44",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN560071.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN604995 in line [00418]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN604995.ex",
      "_risk" : "//QC-JAVCWZ099[00418] In java.io.ObjectOutputStream.writeUnshared@POLYN560071[00418] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN604995.ex",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN582341 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.obj",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN604995[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN582341[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN600744 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN600744.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN600744.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN602587 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN602587.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "45",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN566122.obj",
      "_method" : "---dummymethode in line [00588]",
      "_target" : "java.io.ObjectOutputStream.replaceObject@POLYN566122.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN566122.return",
      "_method" : "---java.io.ObjectOutputStream.replaceObject@POLYN566122 in line [01144]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.rep",
      "_risk" : "//QC-JAVCWZ099[01144] In java.io.ObjectOutputStream.writeObject0@POLYN582341[01144] target data PATHtainted (java.io.ObjectOutputStream.write)"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.rep",
      "_method" : "---dummymethode in line [01149]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.obj",
      "_risk" : "//QC-JAVCWZ099[01149] In java.io.ObjectOutputStream.writeObject0@POLYN582341[01149] target data PATHtainted (java.io.ObjectOutputStream.write)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN582341[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN600744 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN600744.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN600744.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN602587 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN602587.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "46",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.lang.StringBuilder.writeObject@POLYN236445.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN557853 in line [00465]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN557853.obj",
      "_risk" : "//QC-JAVCWZ099[00465] In java.lang.StringBuilder.writeObject@POLYN236445[00465] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN557853.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN582341 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.obj",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN557853[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN582341[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN600744 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN600744.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN600744.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN602587 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN602587.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "47",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.HashMap.internalWriteEntries@POLYN693707.e.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN557853 in line [01782]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN557853.obj",
      "_risk" : "//QC-JAVCWZ099[01782] In java.util.HashMap.internalWriteEntries@POLYN693707[01782] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN557853.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN582341 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.obj",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN557853[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN582341[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN600744 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN600744.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN600744.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN602587 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN602587.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "48",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.HashMap.internalWriteEntries@POLYN693707.e.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN557853 in line [01783]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN557853.obj",
      "_risk" : "//QC-JAVCWZ099[01783] In java.util.HashMap.internalWriteEntries@POLYN693707[01783] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN557853.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN582341 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.obj",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN557853[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN582341[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN600744 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN600744.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN600744.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN602587 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN602587.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "49",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN462725.entryStack.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN557853 in line [01238]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN557853.obj",
      "_risk" : "//QC-JAVCWZ099[01238] In java.util.Hashtable.writeHashtable@POLYN462725[01238] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN557853.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN582341 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.obj",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN557853[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN582341[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN600744 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN600744.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN600744.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN602587 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN602587.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "50",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN462725.entryStack.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN557853 in line [01239]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN557853.obj",
      "_risk" : "//QC-JAVCWZ099[01239] In java.util.Hashtable.writeHashtable@POLYN462725[01239] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN557853.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN582341 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.obj",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN557853[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN582341[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN600744 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN600744.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN600744.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN602587 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN602587.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "51",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1483947.p.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN557853 in line [01406]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN557853.obj",
      "_risk" : "//QC-JAVCWZ099[01406] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1483947[01406] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN557853.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN582341 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.obj",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN557853[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN582341[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN600744 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN600744.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN600744.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN602587 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN602587.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "52",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1483947.p.val",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN557853 in line [01407]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN557853.obj",
      "_risk" : "//QC-JAVCWZ099[01407] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1483947[01407] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN557853.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN582341 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.obj",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN557853[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN582341[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN600744 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN600744.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN600744.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN602587 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN602587.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "53",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1483947.null",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN557853 in line [01410]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN557853.obj",
      "_risk" : "//QC-JAVCWZ099[01410] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1483947[01410] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN557853.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN582341 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.obj",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN557853[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN582341[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN600744 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN600744.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN600744.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN602587 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN602587.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "54",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN560071.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN582341 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.obj",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN560071[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN582341[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN600744 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN600744.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN600744.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN602587 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN602587.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "55",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.util.HashMap.this",
      "_method" : "---dummymethode in line [01849]",
      "_target" : "java.util.HashMap.find@POLYN697994.p",
      "_risk" : "//QC-JAVCWE099[01849] In java.util.HashMap.TreeNode.find@POLYN697994[01849] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.find@POLYN697994.p",
      "_method" : "---dummymethode in line [01858]",
      "_target" : "java.util.HashMap.find@POLYN697994.return",
      "_risk" : "//QC-JAVCWE099[01858] In java.util.HashMap.TreeNode.find@POLYN697994[01858] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.find@POLYN697994.return",
      "_method" : "---java.util.HashMap.find@POLYN697994 in line [00822]",
      "_target" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331676.tpData",
      "_risk" : "//QC-JAVCWE099[00822] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331676[00822] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331676.tpData",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.add@POLYN1668596 in line [00825]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.add@POLYN1668596.e",
      "_risk" : "//QC-JAVCWE099[00825] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331676[00825] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "56",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "p.left",
      "_method" : "---dummymethode in line [01852]",
      "_target" : "java.util.HashMap.find@POLYN697994.pl",
      "_risk" : "//QC-JAVCWE099[01852] In java.util.HashMap.TreeNode.find@POLYN697994[01852] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "4",
      "_source" : "java.util.HashMap.find@POLYN697994.pl",
      "_method" : "---dummymethode in line [01854]",
      "_target" : "java.util.HashMap.find@POLYN697994.p",
      "_risk" : "//QC-JAVCWE099[01854] In java.util.HashMap.TreeNode.find@POLYN697994[01854] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.find@POLYN697994.p",
      "_method" : "---dummymethode in line [01858]",
      "_target" : "java.util.HashMap.find@POLYN697994.return",
      "_risk" : "//QC-JAVCWE099[01858] In java.util.HashMap.TreeNode.find@POLYN697994[01858] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.find@POLYN697994.return",
      "_method" : "---java.util.HashMap.find@POLYN697994 in line [00822]",
      "_target" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331676.tpData",
      "_risk" : "//QC-JAVCWE099[00822] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331676[00822] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331676.tpData",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.add@POLYN1668596 in line [00825]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.add@POLYN1668596.e",
      "_risk" : "//QC-JAVCWE099[00825] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331676[00825] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "57",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "p.right",
      "_method" : "---dummymethode in line [01852]",
      "_target" : "java.util.HashMap.find@POLYN697994.pr",
      "_risk" : "//QC-JAVCWE099[01852] In java.util.HashMap.TreeNode.find@POLYN697994[01852] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "4",
      "_source" : "java.util.HashMap.find@POLYN697994.pr",
      "_method" : "---dummymethode in line [01856]",
      "_target" : "java.util.HashMap.find@POLYN697994.p",
      "_risk" : "//QC-JAVCWE099[01856] In java.util.HashMap.TreeNode.find@POLYN697994[01856] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.find@POLYN697994.p",
      "_method" : "---dummymethode in line [01858]",
      "_target" : "java.util.HashMap.find@POLYN697994.return",
      "_risk" : "//QC-JAVCWE099[01858] In java.util.HashMap.TreeNode.find@POLYN697994[01858] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.find@POLYN697994.return",
      "_method" : "---java.util.HashMap.find@POLYN697994 in line [00822]",
      "_target" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331676.tpData",
      "_risk" : "//QC-JAVCWE099[00822] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331676[00822] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331676.tpData",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.add@POLYN1668596 in line [00825]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.add@POLYN1668596.e",
      "_risk" : "//QC-JAVCWE099[00825] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331676[00825] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "58",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.util.HashMap.find@POLYN697994.q",
      "_method" : "---dummymethode in line [01868]",
      "_target" : "java.util.HashMap.find@POLYN697994.return",
      "_risk" : "//QC-JAVCWE099[01868] In java.util.HashMap.TreeNode.find@POLYN697994[01868] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.find@POLYN697994.return",
      "_method" : "---java.util.HashMap.find@POLYN697994 in line [00822]",
      "_target" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331676.tpData",
      "_risk" : "//QC-JAVCWE099[00822] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331676[00822] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331676.tpData",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.add@POLYN1668596 in line [00825]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.add@POLYN1668596.e",
      "_risk" : "//QC-JAVCWE099[00825] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331676[00825] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "59",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.util.HashMap.TreeNode.find@POLYN697994.null",
      "_method" : "---dummymethode in line [01872]",
      "_target" : "java.util.HashMap.find@POLYN697994.return",
      "_risk" : "//QC-JAVCWE099[01872] In java.util.HashMap.TreeNode.find@POLYN697994[01872] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.find@POLYN697994.return",
      "_method" : "---java.util.HashMap.find@POLYN697994 in line [00822]",
      "_target" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331676.tpData",
      "_risk" : "//QC-JAVCWE099[00822] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331676[00822] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331676.tpData",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.add@POLYN1668596 in line [00825]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.add@POLYN1668596.e",
      "_risk" : "//QC-JAVCWE099[00825] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331676[00825] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "60",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN350245.x",
      "_method" : "---java.io.PrintWriter.print@POLYN345533 in line [00655]",
      "_target" : "java.io.PrintWriter.print@POLYN345533.c",
      "_risk" : "//QC-JAVCWZ099[00655] In java.io.PrintWriter.println@POLYN350245[00655] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN345533.c",
      "_method" : "---java.io.PrintWriter.write@POLYN344004 in line [00517]",
      "_target" : "java.io.PrintWriter.write@POLYN344004.s",
      "_risk" : "//QC-JAVCWZ099[00517] In java.io.PrintWriter.print@POLYN345533[00517] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "61",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "org.apache.kafka.shell.FindCommandHandler.find@POLYN156728.path",
      "_method" : "---java.io.PrintWriter.println@POLYN353023 in line [00098]",
      "_target" : "java.io.PrintWriter.println@POLYN353023.x",
      "_risk" : "//QC-JAVCWE099[00098] In org.apache.kafka.shell.FindCommandHandler.find@POLYN156728[00098] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN353023.x",
      "_method" : "---java.io.PrintWriter.print@POLYN348503 in line [00739]",
      "_target" : "java.io.PrintWriter.print@POLYN348503.s",
      "_risk" : "//QC-JAVCWE099[00739] In java.io.PrintWriter.println@POLYN353023[00739] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN348503.s",
      "_method" : "---java.io.PrintWriter.write@POLYN344004 in line [00603]",
      "_target" : "java.io.PrintWriter.write@POLYN344004.s",
      "_risk" : "//QC-JAVCWE099[00603] In java.io.PrintWriter.print@POLYN348503[00603] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "62",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.shell.LsCommandHandler.printTargets@POLYN187786.\"\"",
      "_method" : "---org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN189135 in line [00136]",
      "_target" : "org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN189135.intro",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN189135.intro",
      "_method" : "---java.io.PrintWriter.println@POLYN353023 in line [00162]",
      "_target" : "java.io.PrintWriter.println@POLYN353023.x",
      "_risk" : "//QC-JAVCWE099[00162] In org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN189135[00162] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN353023.x",
      "_method" : "---java.io.PrintWriter.print@POLYN348503 in line [00739]",
      "_target" : "java.io.PrintWriter.print@POLYN348503.s",
      "_risk" : "//QC-JAVCWE099[00739] In java.io.PrintWriter.println@POLYN353023[00739] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN348503.s",
      "_method" : "---java.io.PrintWriter.write@POLYN344004 in line [00603]",
      "_target" : "java.io.PrintWriter.write@POLYN344004.s",
      "_risk" : "//QC-JAVCWE099[00603] In java.io.PrintWriter.print@POLYN348503[00603] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "63",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.initTable@POLYN1531570.tab",
      "_method" : "---dummymethode in line [02237]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.initTable@POLYN1531570.return",
      "_risk" : "//QC-JAVCWZ099[02237] In java.util.concurrent.ConcurrentHashMap.initTable@POLYN1531570[02237] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.initTable@POLYN1531570.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.initTable@POLYN1531570 in line [01839]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294.tab",
      "_risk" : "//QC-JAVCWZ099[01839] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294[01839] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451472 in line [01852]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451472.v",
      "_risk" : "//QC-JAVCWZ099[01852] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294[01852] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "64",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638.nextTab",
      "_method" : "---dummymethode in line [02306]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638.return",
      "_risk" : "//QC-JAVCWZ099[02306] In java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638[02306] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638 in line [01860]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294.tab",
      "_risk" : "//QC-JAVCWZ099[01860] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294[01860] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451472 in line [01852]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451472.v",
      "_risk" : "//QC-JAVCWZ099[01852] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294[01852] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "65",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.util.concurrent.ConcurrentHashMap.readObject@POLYN1486685.tab",
      "_method" : "---dummymethode in line [01513]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.table",
      "_risk" : "//QC-JAVCWZ099[01513] In java.util.concurrent.ConcurrentHashMap.readObject@POLYN1486685[01513] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.table",
      "_method" : "---dummymethode in line [02308]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638.return",
      "_risk" : "//QC-JAVCWZ099[02308] In java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638[02308] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638 in line [01860]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294.tab",
      "_risk" : "//QC-JAVCWZ099[01860] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294[01860] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451472 in line [01852]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451472.v",
      "_risk" : "//QC-JAVCWZ099[01852] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294[01852] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "66",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.addCount@POLYN1533413.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541441 in line [02278]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541441.nextTab",
      "_risk" : "//QC-JAVCWZ099[02278] In java.util.concurrent.ConcurrentHashMap.addCount@POLYN1533413[02278] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541441.nextTab",
      "_method" : "---dummymethode in line [02404]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.table",
      "_risk" : "//QC-JAVCWZ099[02404] In java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541441[02404] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.table",
      "_method" : "---dummymethode in line [02308]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638.return",
      "_risk" : "//QC-JAVCWZ099[02308] In java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638[02308] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638 in line [01860]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294.tab",
      "_risk" : "//QC-JAVCWZ099[01860] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294[01860] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451472 in line [01852]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451472.v",
      "_risk" : "//QC-JAVCWZ099[01852] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294[01852] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "67",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541441 in line [02302]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541441.nextTab",
      "_risk" : "//QC-JAVCWZ099[02302] In java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638[02302] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541441.nextTab",
      "_method" : "---dummymethode in line [02404]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.table",
      "_risk" : "//QC-JAVCWZ099[02404] In java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541441[02404] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.table",
      "_method" : "---dummymethode in line [02308]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638.return",
      "_risk" : "//QC-JAVCWZ099[02308] In java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638[02308] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638 in line [01860]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294.tab",
      "_risk" : "//QC-JAVCWZ099[01860] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294[01860] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451472 in line [01852]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451472.v",
      "_risk" : "//QC-JAVCWZ099[01852] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294[01852] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "68",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541441.nt",
      "_method" : "---dummymethode in line [02369]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541441.nextTab",
      "_risk" : "//QC-JAVCWZ099[02369] In java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541441[02369] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "4",
      "_source" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541441.nextTab",
      "_method" : "---dummymethode in line [02404]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.table",
      "_risk" : "//QC-JAVCWZ099[02404] In java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541441[02404] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.table",
      "_method" : "---dummymethode in line [02308]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638.return",
      "_risk" : "//QC-JAVCWZ099[02308] In java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638[02308] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638 in line [01860]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294.tab",
      "_risk" : "//QC-JAVCWZ099[01860] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294[01860] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451472 in line [01852]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451472.v",
      "_risk" : "//QC-JAVCWZ099[01852] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294[01852] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "69",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "7",
      "_source" : "java.util.concurrent.ConcurrentHashMap.tryPresize@POLYN1538285.nt",
      "_method" : "---dummymethode in line [02329]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.table",
      "_risk" : "//QC-JAVCWZ099[02329] In java.util.concurrent.ConcurrentHashMap.tryPresize@POLYN1538285[02329] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "6",
      "_source" : "java.util.concurrent.ConcurrentHashMap.table",
      "_method" : "---dummymethode in line [02321]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.tryPresize@POLYN1538285.tab",
      "_risk" : "//QC-JAVCWZ099[02321] In java.util.concurrent.ConcurrentHashMap.tryPresize@POLYN1538285[02321] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.tryPresize@POLYN1538285.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541441 in line [02348]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541441.nextTab",
      "_risk" : "//QC-JAVCWZ099[02348] In java.util.concurrent.ConcurrentHashMap.tryPresize@POLYN1538285[02348] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541441.nextTab",
      "_method" : "---dummymethode in line [02404]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.table",
      "_risk" : "//QC-JAVCWZ099[02404] In java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541441[02404] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.table",
      "_method" : "---dummymethode in line [02308]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638.return",
      "_risk" : "//QC-JAVCWZ099[02308] In java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638[02308] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536638 in line [01860]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294.tab",
      "_risk" : "//QC-JAVCWZ099[01860] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294[01860] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451472 in line [01852]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451472.v",
      "_risk" : "//QC-JAVCWZ099[01852] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294[01852] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "70",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.net.Socket.Socket@POLYN458222.impl",
      "_method" : "---dummymethode in line [00154]",
      "_target" : "java.net.Socket.impl",
      "_risk" : "//QC-JAVCWE099[00154] In java.net.Socket.Socket@POLYN458222[00154] source or target data Sockettainted (java.net.Socket)"
    }, {
      "_id" : "5",
      "_source" : "java.net.Socket.impl",
      "_method" : "---dummymethode in line [00497]",
      "_target" : "java.net.ServerSocket.implAccept@POLYN318762.si",
      "_risk" : "//QC-JAVCWE099[00497] In java.net.ServerSocket.implAccept@POLYN318762[00497] source or target data Sockettainted (java.net.ServerSocket)"
    }, {
      "_id" : "4",
      "_source" : "java.net.ServerSocket.implAccept@POLYN318762.si",
      "_method" : "---dummymethode in line [00511]",
      "_target" : "java.net.Socket.impl",
      "_risk" : "//QC-JAVCWE099[00511] In java.net.ServerSocket.implAccept@POLYN318762[00511] source or target data Sockettainted (java.net.Socket)"
    }, {
      "_id" : "3",
      "_source" : "java.net.Socket.impl",
      "_method" : "---dummymethode in line [00501]",
      "_target" : "java.net.Socket.getImpl@POLYN471608.return",
      "_risk" : "//QC-JAVCWE099[00501] In java.net.Socket.getImpl@POLYN471608[00501] source or target data Sockettainted (java.net.Socket)"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.getImpl@POLYN471608.return",
      "_method" : "---java.net.Socket.getImpl@POLYN471608 in line [00654]",
      "_target" : "java.net.Socket.getInetAddress@POLYN477476.return",
      "_risk" : "//QC-JAVCWE099[00654] In java.net.Socket.getInetAddress@POLYN477476[00654] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.net.Socket.getInetAddress@POLYN477476.return",
      "_method" : "---java.net.Socket.getInetAddress@POLYN477476 in line [00380]",
      "_target" : "org.apache.kafka.common.network.KafkaChannel.socketDescription@POLYN261854.return",
      "_risk" : "//QC-JAVCWE099[00380] In org.apache.kafka.common.network.KafkaChannel.socketDescription@POLYN261854[00380] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "71",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.desc",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN592372 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN592372.desc",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN582341[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN592372.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN587858 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN587858.desc",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN592372[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN587858.desc",
      "_method" : "---java.io.ObjectOutputStream.writeNonProxyDesc@POLYN590349 in line [01231]",
      "_target" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN590349.desc",
      "_risk" : "//QC-JAVCWZ099[01231] In java.io.ObjectOutputStream.writeClassDesc@POLYN587858[01231] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN590349.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDescriptor@POLYN568592 in line [01282]",
      "_target" : "java.io.ObjectOutputStream.writeClassDescriptor@POLYN568592.desc",
      "_risk" : "//QC-JAVCWZ099[01282] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN590349[01282] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "72",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.storage.MemoryOffsetBackingStore.set@POLYN155425.values",
      "_method" : "---java.util.HashMap.putAll@POLYN632008 in line [00093]",
      "_target" : "java.util.HashMap.putAll@POLYN632008.m",
      "_risk" : "//QC-JAVCWE099[00093] In org.apache.kafka.connect.storage.MemoryOffsetBackingStore.set@POLYN155425[00093] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN632008.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN615223 in line [00782]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN615223.m",
      "_risk" : "//QC-JAVCWE099[00782] In java.util.HashMap.putAll@POLYN632008[00782] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "73",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.timeline.TimelineInteger.get@POLYN152781.value",
      "_method" : "---dummymethode in line [00059]",
      "_target" : "org.apache.kafka.timeline.TimelineInteger.get@POLYN152781.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.timeline.TimelineInteger.get@POLYN152781.return",
      "_method" : "---org.apache.kafka.timeline.TimelineInteger.get@POLYN152781 in line [00252]",
      "_target" : "org.apache.kafka.controller.ConfigurationControlManager.validateAlterConfig@POLYN233734.existingConfigs",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.controller.ConfigurationControlManager.validateAlterConfig@POLYN233734.existingConfigs",
      "_method" : "---java.util.HashMap.putAll@POLYN632008 in line [00253]",
      "_target" : "java.util.HashMap.putAll@POLYN632008.m",
      "_risk" : "//QC-JAVCWE099[00253] In org.apache.kafka.controller.ConfigurationControlManager.validateAlterConfig@POLYN233734[00253] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN632008.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN615223 in line [00782]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN615223.m",
      "_risk" : "//QC-JAVCWE099[00782] In java.util.HashMap.putAll@POLYN632008[00782] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "74",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.server.log.remote.metadata.storage.TopicBasedRemoteLogMetadataManagerConfig.initializeProducerConsumerProperties@POLYN183178.producerOnlyConfigs",
      "_method" : "---java.util.HashMap.putAll@POLYN632008 in line [00153]",
      "_target" : "java.util.HashMap.putAll@POLYN632008.m",
      "_risk" : "//QC-JAVCWE099[00153] In org.apache.kafka.server.log.remote.metadata.storage.TopicBasedRemoteLogMetadataManagerConfig.initializeProducerConsumerProperties@POLYN183178[00153] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN632008.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN615223 in line [00782]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN615223.m",
      "_risk" : "//QC-JAVCWE099[00782] In java.util.HashMap.putAll@POLYN632008[00782] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "75",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.server.log.remote.metadata.storage.TopicBasedRemoteLogMetadataManagerConfig.initializeProducerConsumerProperties@POLYN183178.consumerOnlyConfigs",
      "_method" : "---java.util.HashMap.putAll@POLYN632008 in line [00157]",
      "_target" : "java.util.HashMap.putAll@POLYN632008.m",
      "_risk" : "//QC-JAVCWE099[00157] In org.apache.kafka.server.log.remote.metadata.storage.TopicBasedRemoteLogMetadataManagerConfig.initializeProducerConsumerProperties@POLYN183178[00157] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN632008.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN615223 in line [00782]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN615223.m",
      "_risk" : "//QC-JAVCWE099[00782] In java.util.HashMap.putAll@POLYN632008[00782] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "76",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.Consumer.metrics@POLYN176178.return",
      "_method" : "---org.apache.kafka.clients.consumer.Consumer.metrics@POLYN176178 in line [00089]",
      "_target" : "org.apache.kafka.streams.processor.internals.ClientUtils.consumerMetrics@POLYN177826.consumerMetrics",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.ClientUtils.consumerMetrics@POLYN177826.consumerMetrics",
      "_method" : "---java.util.HashMap.putAll@POLYN632008 in line [00092]",
      "_target" : "java.util.HashMap.putAll@POLYN632008.m",
      "_risk" : "//QC-JAVCWE099[00092] In org.apache.kafka.streams.processor.internals.ClientUtils.consumerMetrics@POLYN177826[00092] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN632008.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN615223 in line [00782]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN615223.m",
      "_risk" : "//QC-JAVCWE099[00782] In java.util.HashMap.putAll@POLYN632008[00782] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "77",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.workload.TopicsSpec.immutableCopy@POLYN152886.map",
      "_method" : "---java.util.HashMap.putAll@POLYN632008 in line [00071]",
      "_target" : "java.util.HashMap.putAll@POLYN632008.m",
      "_risk" : "//QC-JAVCWE099[00071] In org.apache.kafka.trogdor.workload.TopicsSpec.immutableCopy@POLYN152886[00071] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN632008.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN615223 in line [00782]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN615223.m",
      "_risk" : "//QC-JAVCWE099[00782] In java.util.HashMap.putAll@POLYN632008[00782] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "78",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "e.val",
      "_method" : "---dummymethode in line [01030]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462011.oldVal",
      "_risk" : "//QC-JAVCWE099[01030] In java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462011[01030] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462011.oldVal",
      "_method" : "---dummymethode in line [01059]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462011.return",
      "_risk" : "//QC-JAVCWE099[01059] In java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462011[01059] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462011.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462011 in line [01000]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.put@POLYN1461801.return",
      "_risk" : "//QC-JAVCWE099[01000] In java.util.concurrent.ConcurrentHashMap.put@POLYN1461801[01000] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.put@POLYN1461801.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.put@POLYN1461801 in line [03497]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.MapEntry.setValue@POLYN1611291.cibledummy",
      "_risk" : "//QC-JAVCWE099[03497] In java.util.concurrent.ConcurrentHashMap.MapEntry.setValue@POLYN1611291[03497] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "79",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "p.val",
      "_method" : "---dummymethode in line [01048]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462011.oldVal",
      "_risk" : "//QC-JAVCWE099[01048] In java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462011[01048] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462011.oldVal",
      "_method" : "---dummymethode in line [01059]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462011.return",
      "_risk" : "//QC-JAVCWE099[01059] In java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462011[01059] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462011.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462011 in line [01000]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.put@POLYN1461801.return",
      "_risk" : "//QC-JAVCWE099[01000] In java.util.concurrent.ConcurrentHashMap.put@POLYN1461801[01000] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.put@POLYN1461801.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.put@POLYN1461801 in line [03497]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.MapEntry.setValue@POLYN1611291.cibledummy",
      "_risk" : "//QC-JAVCWE099[03497] In java.util.concurrent.ConcurrentHashMap.MapEntry.setValue@POLYN1611291[03497] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "80",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462011.null",
      "_method" : "---dummymethode in line [01065]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462011.return",
      "_risk" : "//QC-JAVCWZ099[01065] In java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462011[01065] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462011.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462011 in line [01000]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.put@POLYN1461801.return",
      "_risk" : "//QC-JAVCWZ099[01000] In java.util.concurrent.ConcurrentHashMap.put@POLYN1461801[01000] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.put@POLYN1461801.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.put@POLYN1461801 in line [03497]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.MapEntry.setValue@POLYN1611291.cibledummy",
      "_risk" : "//QC-JAVCWZ099[03497] In java.util.concurrent.ConcurrentHashMap.MapEntry.setValue@POLYN1611291[03497] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "81",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.io.Reader.read@POLYN183941.return",
      "_method" : "---java.io.Reader.read@POLYN183941 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN233503.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN233503[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN233503.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN233503 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN236709.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN236709[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read@POLYN236709.n",
      "_method" : "---dummymethode in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN236709.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN236709[00287] source data PATHtainted (java.io.BufferedReader.read)"
    } ]
  }, {
    "_id" : "82",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.io.PrintStream.println@POLYN369259.x",
      "_method" : "---java.io.PrintStream.print@POLYN364804 in line [00792]",
      "_target" : "java.io.PrintStream.print@POLYN364804.s",
      "_risk" : "//QC-JAVCWZ099[00792] In java.io.PrintStream.println@POLYN369259[00792] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.print@POLYN364804.s",
      "_method" : "---java.io.PrintStream.write@POLYN359159 in line [00653]",
      "_target" : "java.io.PrintStream.write@POLYN359159.buf",
      "_risk" : "//QC-JAVCWZ099[00653] In java.io.PrintStream.print@POLYN364804[00653] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.write@POLYN359159.buf",
      "_method" : "---java.io.Writer.write@POLYN190883 in line [00503]",
      "_target" : "java.io.Writer.write@POLYN190883.cbuf",
      "_risk" : "//QC-JAVCWZ099[00503] In java.io.PrintStream.write@POLYN359159[00503] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "83",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.shell.ErroneousCommandHandler.run@POLYN144825.message",
      "_method" : "---java.io.PrintWriter.println@POLYN349791 in line [00038]",
      "_target" : "java.io.PrintWriter.println@POLYN349791.x",
      "_risk" : "//QC-JAVCWE099[00038] In org.apache.kafka.shell.ErroneousCommandHandler.run@POLYN144825[00038] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN349791.x",
      "_method" : "---java.io.PrintWriter.print@POLYN345036 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN345036.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN349791[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "84",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN906229.return",
      "_method" : "---java.lang.String.format@POLYN906229 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN150085.data",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN150085.data",
      "_method" : "---java.io.PrintWriter.println@POLYN349791 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN349791.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN150085[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN349791.x",
      "_method" : "---java.io.PrintWriter.print@POLYN345036 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN345036.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN349791[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "85",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.util.HashMap.KeySet.KeySet@POLYN639678.return",
      "_method" : "---java.util.HashMap.KeySet.KeySet@POLYN639678 in line [00905]",
      "_target" : "java.util.HashMap.keySet@POLYN639315.ks",
      "_risk" : "//QC-JAVCWE099[00905] In java.util.HashMap.keySet@POLYN639315[00905] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.keySet@POLYN639315.ks",
      "_method" : "---dummymethode in line [00908]",
      "_target" : "java.util.HashMap.keySet@POLYN639315.return",
      "_risk" : "//QC-JAVCWE099[00908] In java.util.HashMap.keySet@POLYN639315[00908] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.keySet@POLYN639315.return",
      "_method" : "---java.util.HashMap.keySet@POLYN639315 in line [00052]",
      "_target" : "org.apache.kafka.clients.consumer.OffsetOutOfRangeException.partitions@POLYN146209.return",
      "_risk" : "//QC-JAVCWE099[00052] In org.apache.kafka.clients.consumer.OffsetOutOfRangeException.partitions@POLYN146209[00052] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "86",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.write@POLYN343326.len",
      "_method" : "---java.io.Writer.write@POLYN192141 in line [00456]",
      "_target" : "java.io.Writer.write@POLYN192141.len",
      "_risk" : "//QC-JAVCWZ099[00456] In java.io.PrintWriter.write@POLYN343326[00456] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.Writer.write@POLYN192141.len",
      "_method" : "---java.io.Writer.write@POLYN191307 in line [00192]",
      "_target" : "java.io.Writer.write@POLYN191307.len",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.Writer.write@POLYN192141[00192] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "87",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN592372.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN587858 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN587858.unshared",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN592372[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN587858.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN588847 in line [01229]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN588847.unshared",
      "_risk" : "//QC-JAVCWZ099[01229] In java.io.ObjectOutputStream.writeClassDesc@POLYN587858[01229] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "88",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN587858 in line [01427]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN587858.unshared",
      "_risk" : "//QC-JAVCWZ099[01427] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598112[01427] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN587858.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN588847 in line [01229]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN588847.unshared",
      "_risk" : "//QC-JAVCWZ099[01229] In java.io.ObjectOutputStream.writeClassDesc@POLYN587858[01229] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "89",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN604995.false",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN582341 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.unshared",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN604995[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN592372 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN592372.unshared",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN582341[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "90",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN557853.false",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN582341 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.unshared",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN557853[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN592372 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN592372.unshared",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN582341[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "91",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN560071.true",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN582341 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.unshared",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN560071[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN582341.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN592372 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN592372.unshared",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN582341[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "92",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.agent.Agent.exec@POLYN188128.\"Unable to create the task controller.\"",
      "_method" : "---java.io.PrintStream.println@POLYN366550 in line [00171]",
      "_target" : "java.io.PrintStream.println@POLYN366550.x",
      "_risk" : "//QC-JAVCWE099[00171] In org.apache.kafka.trogdor.agent.Agent.exec@POLYN188128[00171] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN366550.x",
      "_method" : "---java.io.PrintStream.print@POLYN361762 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN361762.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN366550[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "93",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.agent.Agent.exec@POLYN188128.\"createWorker failed\"",
      "_method" : "---java.io.PrintStream.println@POLYN366550 in line [00186]",
      "_target" : "java.io.PrintStream.println@POLYN366550.x",
      "_risk" : "//QC-JAVCWE099[00186] In org.apache.kafka.trogdor.agent.Agent.exec@POLYN188128[00186] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN366550.x",
      "_method" : "---java.io.PrintStream.print@POLYN361762 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN361762.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN366550[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "94",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN352563.x",
      "_method" : "---java.io.PrintWriter.print@POLYN348039 in line [00725]",
      "_target" : "java.io.PrintWriter.print@POLYN348039.s",
      "_risk" : "//QC-JAVCWZ099[00725] In java.io.PrintWriter.println@POLYN352563[00725] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN348039.s",
      "_method" : "---java.io.PrintWriter.write@POLYN343012 in line [00587]",
      "_target" : "java.io.PrintWriter.write@POLYN343012.buf",
      "_risk" : "//QC-JAVCWZ099[00587] In java.io.PrintWriter.print@POLYN348039[00587] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "95",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.append@POLYN361677.\"null\"",
      "_method" : "---java.io.PrintWriter.write@POLYN341714 in line [01002]",
      "_target" : "java.io.PrintWriter.write@POLYN341714.c",
      "_risk" : "//QC-JAVCWZ099[01002] In java.io.PrintWriter.append@POLYN361677[01002] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.write@POLYN341714.c",
      "_method" : "---java.io.Writer.write@POLYN190248 in line [00405]",
      "_target" : "java.io.Writer.write@POLYN190248.c",
      "_risk" : "//QC-JAVCWZ099[00405] In java.io.PrintWriter.write@POLYN341714[00405] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "96",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.net.Socket.Socket@POLYN468351.address",
      "_method" : "---java.net.Socket.connect@POLYN472126 in line [00415]",
      "_target" : "java.net.Socket.connect@POLYN472126.endpoint",
      "_risk" : "//QC-JAVCWZ099[00415] In java.net.Socket.Socket@POLYN468351[00415] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.net.Socket.connect@POLYN472126.endpoint",
      "_method" : "---java.net.Socket.connect@POLYN472776 in line [00518]",
      "_target" : "java.net.Socket.connect@POLYN472776.endpoint",
      "_risk" : "//QC-JAVCWZ099[00518] In java.net.Socket.connect@POLYN472126[00518] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "97",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.lang.Class.privateGetPublicMethods@POLYN1182629.m",
      "_method" : "---java.util.HashMap.merge@POLYN661016 in line [03528]",
      "_target" : "java.util.HashMap.merge@POLYN661016.key",
      "_risk" : "//QC-JAVCWZ099[03528] In java.lang.Class.privateGetPublicMethods@POLYN1182629[03528] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.merge@POLYN661016.key",
      "_method" : "---java.util.HashMap.removeNode@POLYN633320 in line [01259]",
      "_target" : "java.util.HashMap.removeNode@POLYN633320.key",
      "_risk" : "//QC-JAVCWZ099[01259] In java.util.HashMap.merge@POLYN661016[01259] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "98",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN540137.change",
      "_method" : "---java.util.HashMap.merge@POLYN661016 in line [00988]",
      "_target" : "java.util.HashMap.merge@POLYN661016.key",
      "_risk" : "//QC-JAVCWE099[00988] In org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN540137[00988] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.merge@POLYN661016.key",
      "_method" : "---java.util.HashMap.removeNode@POLYN633320 in line [01259]",
      "_target" : "java.util.HashMap.removeNode@POLYN633320.key",
      "_risk" : "//QC-JAVCWZ099[01259] In java.util.HashMap.merge@POLYN661016[01259] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "99",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.compute@POLYN657091.tab",
      "_method" : "---java.util.HashMap.treeifyBin@POLYN630201 in line [01209]",
      "_target" : "java.util.HashMap.treeifyBin@POLYN630201.tab",
      "_risk" : "//QC-JAVCWZ099[01209] In java.util.HashMap.compute@POLYN657091[01209] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.treeifyBin@POLYN630201.tab",
      "_method" : "---java.util.HashMap.treeify@POLYN701465 in line [00769]",
      "_target" : "java.util.HashMap.treeify@POLYN701465.tab",
      "_risk" : "//QC-JAVCWZ099[00769] In java.util.HashMap.treeifyBin@POLYN630201[00769] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "100",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.computeIfAbsent@POLYN651959.tab",
      "_method" : "---java.util.HashMap.treeifyBin@POLYN630201 in line [01137]",
      "_target" : "java.util.HashMap.treeifyBin@POLYN630201.tab",
      "_risk" : "//QC-JAVCWZ099[01137] In java.util.HashMap.computeIfAbsent@POLYN651959[01137] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.treeifyBin@POLYN630201.tab",
      "_method" : "---java.util.HashMap.treeify@POLYN701465 in line [00769]",
      "_target" : "java.util.HashMap.treeify@POLYN701465.tab",
      "_risk" : "//QC-JAVCWZ099[00769] In java.util.HashMap.treeifyBin@POLYN630201[00769] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "101",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.merge@POLYN661016.tab",
      "_method" : "---java.util.HashMap.treeifyBin@POLYN630201 in line [01268]",
      "_target" : "java.util.HashMap.treeifyBin@POLYN630201.tab",
      "_risk" : "//QC-JAVCWZ099[01268] In java.util.HashMap.merge@POLYN661016[01268] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.treeifyBin@POLYN630201.tab",
      "_method" : "---java.util.HashMap.treeify@POLYN701465 in line [00769]",
      "_target" : "java.util.HashMap.treeify@POLYN701465.tab",
      "_risk" : "//QC-JAVCWZ099[00769] In java.util.HashMap.treeifyBin@POLYN630201[00769] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "102",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.putVal@POLYN621651.tab",
      "_method" : "---java.util.HashMap.treeifyBin@POLYN630201 in line [00641]",
      "_target" : "java.util.HashMap.treeifyBin@POLYN630201.tab",
      "_risk" : "//QC-JAVCWZ099[00641] In java.util.HashMap.putVal@POLYN621651[00641] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.treeifyBin@POLYN630201.tab",
      "_method" : "---java.util.HashMap.treeify@POLYN701465 in line [00769]",
      "_target" : "java.util.HashMap.treeify@POLYN701465.tab",
      "_risk" : "//QC-JAVCWZ099[00769] In java.util.HashMap.treeifyBin@POLYN630201[00769] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  } ],
  "_lesDeadlocks" : [ {
    "_id" : "R0",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.this"
  }, {
    "_id" : "R1",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255979.taskId"
  }, {
    "_id" : "R2",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.this"
  }, {
    "_id" : "R3",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.this"
  }, {
    "_id" : "R4",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN237643.offsets"
  }, {
    "_id" : "R5",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237027.offsets"
  }, {
    "_id" : "R6",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237027.callback"
  }, {
    "_id" : "R7",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.taskLevelSensors"
  }, {
    "_id" : "R8",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadLevelSensors"
  }, {
    "_id" : "R9",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadLevelMetrics"
  }, {
    "_id" : "R10",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.this"
  }, {
    "_id" : "R11",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258984.cleanupDelayMs"
  }, {
    "_id" : "R12",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.changeThreadCount"
  }, {
    "_id" : "R13",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.stateLock"
  }, {
    "_id" : "R14",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.threads"
  }, {
    "_id" : "R15",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamThread.stateLock"
  }, {
    "_id" : "R16",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.this"
  }, {
    "_id" : "R17",
    "_libelle" : "org.apache.kafka.clients.Metadata.this"
  }, {
    "_id" : "R18",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN163688.lastVersion"
  }, {
    "_id" : "R19",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN163688.timeoutMs"
  }, {
    "_id" : "R20",
    "_libelle" : "org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN262753.topic"
  }, {
    "_id" : "R21",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN325079.dq"
  }, {
    "_id" : "R22",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.this"
  }, {
    "_id" : "R23",
    "_libelle" : "org.apache.kafka.clients.producer.internals.IncompleteBatches.incomplete"
  }, {
    "_id" : "R24",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.this"
  }, {
    "_id" : "R25",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.unsent"
  }, {
    "_id" : "R26",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418001.isDisconnected"
  }, {
    "_id" : "R27",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418001.cause"
  }, {
    "_id" : "R28",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417647.error"
  }, {
    "_id" : "R29",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.this"
  }, {
    "_id" : "R30",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.consumerRecord@POLYN202281.consumedMessage"
  }, {
    "_id" : "R31",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.this"
  }, {
    "_id" : "R32",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN233056.request"
  }, {
    "_id" : "R33",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN233056.cb"
  }, {
    "_id" : "R34",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerConnector.this"
  }, {
    "_id" : "R35",
    "_libelle" : "org.apache.kafka.connect.runtime.Worker.this"
  }, {
    "_id" : "R36",
    "_libelle" : "org.apache.kafka.connect.runtime.ConnectMetrics.this"
  }, {
    "_id" : "R37",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN295882.sensor"
  }, {
    "_id" : "R38",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.this"
  }, {
    "_id" : "R39",
    "_libelle" : "java.io.BufferedOutputStream.this"
  }, {
    "_id" : "R40",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN160582.b"
  }, {
    "_id" : "R41",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN160582.off"
  }, {
    "_id" : "R42",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN160582.len"
  }, {
    "_id" : "R43",
    "_libelle" : "java.io.Writer.lock"
  }, {
    "_id" : "R44",
    "_libelle" : "java.net.Socket.this"
  }, {
    "_id" : "R45",
    "_libelle" : "java.net.Socket.setSendBufferSize@POLYN493499.size"
  }, {
    "_id" : "R46",
    "_libelle" : "java.net.Socket.setReceiveBufferSize@POLYN496202.size"
  }, {
    "_id" : "R47",
    "_libelle" : "java.io.PipedOutputStream.this"
  }, {
    "_id" : "R48",
    "_libelle" : "java.io.PipedOutputStream.connect@POLYN170667.snk"
  }, {
    "_id" : "R49",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462011.f"
  }, {
    "_id" : "R50",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541441.f"
  }, {
    "_id" : "R51",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.treeifyBin@POLYN1557395.b"
  }, {
    "_id" : "R52",
    "_libelle" : "org.apache.kafka.clients.Metadata.bootstrap@POLYN251833.addresses"
  }, {
    "_id" : "R53",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.this"
  }, {
    "_id" : "R54",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161461.prefix"
  }, {
    "_id" : "R55",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161461.id"
  }, {
    "_id" : "R56",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161461.metrics"
  }, {
    "_id" : "R57",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161461.nowMs"
  }, {
    "_id" : "R58",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN162241.prefix"
  }, {
    "_id" : "R59",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN162241.id"
  }, {
    "_id" : "R60",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN162241.metrics"
  }, {
    "_id" : "R61",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.this"
  }, {
    "_id" : "R62",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.this"
  }, {
    "_id" : "R63",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193987.key"
  }, {
    "_id" : "R64",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193987.value"
  }, {
    "_id" : "R65",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.abortBatches@POLYN358640.dq"
  }, {
    "_id" : "R66",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161647.topic"
  }, {
    "_id" : "R67",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161647.nowMs"
  }, {
    "_id" : "R68",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN349161.deque"
  }, {
    "_id" : "R69",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.updateEstimation@POLYN155282.compressionRatioForTopic"
  }, {
    "_id" : "R70",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.this"
  }, {
    "_id" : "R71",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN274070.connector"
  }, {
    "_id" : "R72",
    "_libelle" : "org.apache.kafka.clients.admin.KafkaAdminClient.this"
  }, {
    "_id" : "R73",
    "_libelle" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.this"
  }, {
    "_id" : "R74",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN252225.response"
  }, {
    "_id" : "R75",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN252225.isPartialUpdate"
  }, {
    "_id" : "R76",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN252225.nowMs"
  }, {
    "_id" : "R77",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN252799.requestVersion"
  }, {
    "_id" : "R78",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN252799.response"
  }, {
    "_id" : "R79",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN252799.isPartialUpdate"
  }, {
    "_id" : "R80",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN252799.nowMs"
  }, {
    "_id" : "R81",
    "_libelle" : "org.apache.kafka.common.requests.MetadataResponse.data"
  }, {
    "_id" : "R82",
    "_libelle" : "java.io.File.this"
  }, {
    "_id" : "R83",
    "_libelle" : "java.io.File.readObject@POLYN633154.s"
  }, {
    "_id" : "R84",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.this"
  }, {
    "_id" : "R85",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN236200.key"
  }, {
    "_id" : "R86",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN236200.value"
  }, {
    "_id" : "R87",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN236200.windowStartTimestamp"
  }, {
    "_id" : "R88",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaConfigBackingStore.lock"
  }, {
    "_id" : "R89",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.this"
  }, {
    "_id" : "R90",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221764.initialTopologies"
  }, {
    "_id" : "R91",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.this"
  }, {
    "_id" : "R92",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN259429.key"
  }, {
    "_id" : "R93",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN259429.value"
  }, {
    "_id" : "R94",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN259429.windowStartTimestamp"
  }, {
    "_id" : "R95",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226727.connName"
  }, {
    "_id" : "R96",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226727.config"
  }, {
    "_id" : "R97",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226727.allowReplace"
  }, {
    "_id" : "R98",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226727.callback"
  }, {
    "_id" : "R99",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226727.configInfos"
  }, {
    "_id" : "R100",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN228605.connName"
  }, {
    "_id" : "R101",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224746.connName"
  }, {
    "_id" : "R102",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224746.callback"
  }, {
    "_id" : "R103",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.this"
  }, {
    "_id" : "R104",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN390919.now"
  }, {
    "_id" : "R105",
    "_libelle" : "java.io.BufferedInputStream.this"
  }, {
    "_id" : "R106",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN230440.taskId"
  }, {
    "_id" : "R107",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN230440.cb"
  }, {
    "_id" : "R108",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.sourceRecord@POLYN202052.preTransformRecord"
  }, {
    "_id" : "R109",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.nodeLevelSensors"
  }, {
    "_id" : "R110",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN318613.assignments"
  }, {
    "_id" : "R111",
    "_libelle" : "org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitableRecords"
  }, {
    "_id" : "R112",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.this"
  }, {
    "_id" : "R113",
    "_libelle" : "org.apache.kafka.tools.ThroughputThrottler.this"
  }, {
    "_id" : "R114",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.pollTasks"
  }, {
    "_id" : "R115",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN323077.tp"
  }, {
    "_id" : "R116",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN323077.position"
  }, {
    "_id" : "R117",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335569.partition"
  }, {
    "_id" : "R118",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335569.offsetResetStrategy"
  }, {
    "_id" : "R119",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN420622.reason"
  }, {
    "_id" : "R120",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN420622.shouldResetMemberId"
  }, {
    "_id" : "R121",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN419923.reason"
  }, {
    "_id" : "R122",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN419923.shouldResetMemberId"
  }, {
    "_id" : "R123",
    "_libelle" : "org.apache.kafka.common.security.oauthbearer.internals.expiring.ExpiringCredentialRefreshingLogin.mandatoryClassToSynchronizeOnPriorToRefresh"
  }, {
    "_id" : "R124",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.this"
  }, {
    "_id" : "R125",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.openIterators"
  }, {
    "_id" : "R126",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.update@POLYN148989.nodeId"
  }, {
    "_id" : "R127",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.update@POLYN148989.nodeApiVersions"
  }, {
    "_id" : "R128",
    "_libelle" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.lock"
  }, {
    "_id" : "R129",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTask.this"
  }, {
    "_id" : "R130",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.this"
  }, {
    "_id" : "R131",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165668.reader"
  }, {
    "_id" : "R132",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190741.newCacheSizeBytes"
  }, {
    "_id" : "R133",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN179486.partition"
  }, {
    "_id" : "R134",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN179486.offset"
  }, {
    "_id" : "R135",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerSourceTask.this"
  }, {
    "_id" : "R136",
    "_libelle" : "org.apache.kafka.connect.util.ConvertingFutureCallback.this"
  }, {
    "_id" : "R137",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.taskDirCreationLock"
  }, {
    "_id" : "R138",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.NamedTopologyBuilder.this"
  }, {
    "_id" : "R139",
    "_libelle" : "org.apache.kafka.streams.StreamsBuilder.this"
  }, {
    "_id" : "R140",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.abortUndrainedBatches@POLYN359262.dq"
  }, {
    "_id" : "R141",
    "_libelle" : "org.apache.kafka.connect.file.FileStreamSourceTask.this"
  }, {
    "_id" : "R142",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN231853.connName"
  }, {
    "_id" : "R143",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN231853.cb"
  }, {
    "_id" : "R144",
    "_libelle" : "java.io.File.writeObject@POLYN632773.s"
  }, {
    "_id" : "R145",
    "_libelle" : "java.io.PrintStream.this"
  }, {
    "_id" : "R146",
    "_libelle" : "java.util.Hashtable.this"
  }, {
    "_id" : "R147",
    "_libelle" : "java.util.Hashtable.putAll@POLYN429352.t"
  }, {
    "_id" : "R148",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelSensors"
  }, {
    "_id" : "R149",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.rebalance@POLYN228565.newAssignment"
  }, {
    "_id" : "R150",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN229174.pattern"
  }, {
    "_id" : "R151",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN229174.listener"
  }, {
    "_id" : "R152",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN314470.pattern"
  }, {
    "_id" : "R153",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN314470.listener"
  }, {
    "_id" : "R154",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN238368.timeout"
  }, {
    "_id" : "R155",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelMetrics"
  }, {
    "_id" : "R156",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.splitAndReenqueue@POLYN336257.partitionDequeue"
  }, {
    "_id" : "R157",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.setEstimation@POLYN157230.compressionRatioForTopic"
  }, {
    "_id" : "R158",
    "_libelle" : "java.io.BufferedInputStream.mark@POLYN248441.readlimit"
  }, {
    "_id" : "R159",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN330654.tp"
  }, {
    "_id" : "R160",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417846.cause"
  }, {
    "_id" : "R161",
    "_libelle" : "org.apache.kafka.clients.producer.MockProducer.this"
  }, {
    "_id" : "R162",
    "_libelle" : "org.apache.kafka.connect.storage.FileOffsetBackingStore.this"
  }, {
    "_id" : "R163",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN198245.entries"
  }, {
    "_id" : "R164",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.this"
  }, {
    "_id" : "R165",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN182126.key"
  }, {
    "_id" : "R166",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN182126.value"
  }, {
    "_id" : "R167",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.this"
  }, {
    "_id" : "R168",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN174247.key"
  }, {
    "_id" : "R169",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN174247.value"
  }, {
    "_id" : "R170",
    "_libelle" : "org.apache.kafka.trogdor.workload.RoundTripWorker.this"
  }, {
    "_id" : "R171",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN238748.partition"
  }, {
    "_id" : "R172",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN238748.offset"
  }, {
    "_id" : "R173",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323668.tp"
  }, {
    "_id" : "R174",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323668.position"
  }, {
    "_id" : "R175",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323668.requestedResetStrategy"
  }, {
    "_id" : "R176",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335764.partitions"
  }, {
    "_id" : "R177",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335764.offsetResetStrategy"
  }, {
    "_id" : "R178",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341109.tp"
  }, {
    "_id" : "R179",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN163202.reader"
  }, {
    "_id" : "R180",
    "_libelle" : "java.net.ServerSocket.this"
  }, {
    "_id" : "R181",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.this"
  }, {
    "_id" : "R182",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163860.consumerRecords"
  }, {
    "_id" : "R183",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.this"
  }, {
    "_id" : "R184",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.addStateStore@POLYN236582.builder"
  }, {
    "_id" : "R185",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seekToBeginning@POLYN241442.partitions"
  }, {
    "_id" : "R186",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seekToEnd@POLYN241866.partitions"
  }, {
    "_id" : "R187",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420920.api"
  }, {
    "_id" : "R188",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420920.error"
  }, {
    "_id" : "R189",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420920.shouldResetMemberId"
  }, {
    "_id" : "R190",
    "_libelle" : "java.net.ServerSocket.setSoTimeout@POLYN322450.timeout"
  }, {
    "_id" : "R191",
    "_libelle" : "java.net.ServerSocket.setReceiveBufferSize@POLYN328729.size"
  }, {
    "_id" : "R192",
    "_libelle" : "java.net.Socket.setSoTimeout@POLYN491724.timeout"
  }, {
    "_id" : "R193",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1498617.r"
  }, {
    "_id" : "R194",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1498617.f"
  }, {
    "_id" : "R195",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294.r"
  }, {
    "_id" : "R196",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294.f"
  }, {
    "_id" : "R197",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.merge@POLYN1517948.f"
  }, {
    "_id" : "R198",
    "_libelle" : "java.io.PipedInputStream.this"
  }, {
    "_id" : "R199",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN219422.b"
  }, {
    "_id" : "R200",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN220529.b"
  }, {
    "_id" : "R201",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN220529.off"
  }, {
    "_id" : "R202",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN220529.len"
  }, {
    "_id" : "R203",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.replaceNode@POLYN1467563.f"
  }, {
    "_id" : "R204",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.pause@POLYN243256.partitions"
  }, {
    "_id" : "R205",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN340406.tp"
  }, {
    "_id" : "R206",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.resume@POLYN243578.partitions"
  }, {
    "_id" : "R207",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN340557.tp"
  }, {
    "_id" : "R208",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333779.tp"
  }, {
    "_id" : "R209",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333779.preferredReadReplicaId"
  }, {
    "_id" : "R210",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333779.timeMs"
  }, {
    "_id" : "R211",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN336328.partitions"
  }, {
    "_id" : "R212",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN336328.nextAllowResetTimeMs"
  }, {
    "_id" : "R213",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.this"
  }, {
    "_id" : "R214",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN161222.status"
  }, {
    "_id" : "R215",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN160679.status"
  }, {
    "_id" : "R216",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN159721.b"
  }, {
    "_id" : "R217",
    "_libelle" : "java.io.PipedReader.this"
  }, {
    "_id" : "R218",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.clear@POLYN1472345.f"
  }, {
    "_id" : "R219",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfPresent@POLYN1504908.f"
  }, {
    "_id" : "R220",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.putAll@POLYN183210.entries"
  }, {
    "_id" : "R221",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN256940.key"
  }, {
    "_id" : "R222",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN256940.value"
  }, {
    "_id" : "R223",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN199672.namespace"
  }, {
    "_id" : "R224",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheLevelSensors"
  }, {
    "_id" : "R225",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.assignPartitionsLock"
  }, {
    "_id" : "R226",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.this"
  }, {
    "_id" : "R227",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.writeEntries@POLYN154631.committedOffsets"
  }, {
    "_id" : "R228",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.remove@POLYN149261.nodeId"
  }, {
    "_id" : "R229",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN228967.topics"
  }, {
    "_id" : "R230",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230791.topics"
  }, {
    "_id" : "R231",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230791.listener"
  }, {
    "_id" : "R232",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230605.pattern"
  }, {
    "_id" : "R233",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237974.callback"
  }, {
    "_id" : "R234",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN326049.tp"
  }, {
    "_id" : "R235",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN326049.position"
  }, {
    "_id" : "R236",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN332221.tp"
  }, {
    "_id" : "R237",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN332959.tp"
  }, {
    "_id" : "R238",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN332959.highWatermark"
  }, {
    "_id" : "R239",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN333149.tp"
  }, {
    "_id" : "R240",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN333149.logStartOffset"
  }, {
    "_id" : "R241",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN333339.tp"
  }, {
    "_id" : "R242",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN333339.lastStableOffset"
  }, {
    "_id" : "R243",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN340703.partitions"
  }, {
    "_id" : "R244",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN340703.nextRetryTimeMs"
  }, {
    "_id" : "R245",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeReporter@POLYN302169.reporter"
  }, {
    "_id" : "R246",
    "_libelle" : "org.apache.kafka.common.metrics.JmxReporter.LOCK"
  }, {
    "_id" : "R247",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.this"
  }, {
    "_id" : "R248",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN160534.status"
  }, {
    "_id" : "R249",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN160155.status"
  }, {
    "_id" : "R250",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.this"
  }, {
    "_id" : "R251",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.configure@POLYN173604.configs"
  }, {
    "_id" : "R252",
    "_libelle" : "java.io.PipedReader.receive@POLYN199461.c"
  }, {
    "_id" : "R253",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.this"
  }, {
    "_id" : "R254",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.calculateNextWindow@POLYN159840.force"
  }, {
    "_id" : "R255",
    "_libelle" : "java.io.FileInputStream.closeLock"
  }, {
    "_id" : "R256",
    "_libelle" : "java.io.FileOutputStream.closeLock"
  }, {
    "_id" : "R257",
    "_libelle" : "java.io.PipedWriter.this"
  }, {
    "_id" : "R258",
    "_libelle" : "java.io.PipedWriter.connect@POLYN169897.snk"
  }, {
    "_id" : "R259",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.close@POLYN246272.timeout"
  }, {
    "_id" : "R260",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.reporters@POLYN201799.reporters"
  }, {
    "_id" : "R261",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.assign@POLYN231169.partitions"
  }, {
    "_id" : "R262",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.addRecord@POLYN235673.record"
  }, {
    "_id" : "R263",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setException@POLYN236618.exception"
  }, {
    "_id" : "R264",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN236749.exception"
  }, {
    "_id" : "R265",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN241676.newOffsets"
  }, {
    "_id" : "R266",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN242100.newOffsets"
  }, {
    "_id" : "R267",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN242981.topic"
  }, {
    "_id" : "R268",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN242981.partitions"
  }, {
    "_id" : "R269",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN246825.task"
  }, {
    "_id" : "R270",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.this"
  }, {
    "_id" : "R271",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.addTransientTopics@POLYN151224.topics"
  }, {
    "_id" : "R272",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164460.requestVersion"
  }, {
    "_id" : "R273",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164460.response"
  }, {
    "_id" : "R274",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164460.isPartialUpdate"
  }, {
    "_id" : "R275",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164460.nowMs"
  }, {
    "_id" : "R276",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN165073.fatalException"
  }, {
    "_id" : "R277",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.this"
  }, {
    "_id" : "R278",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.put@POLYN145748.key"
  }, {
    "_id" : "R279",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.put@POLYN145748.value"
  }, {
    "_id" : "R280",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.addReporter@POLYN301813.reporter"
  }, {
    "_id" : "R281",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN187088.key"
  }, {
    "_id" : "R282",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.putAll@POLYN159599.entries"
  }, {
    "_id" : "R283",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.this"
  }, {
    "_id" : "R284",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.commitTransaction@POLYN152279.record"
  }, {
    "_id" : "R285",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.abortTransaction@POLYN152643.record"
  }, {
    "_id" : "R286",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN223150.callback"
  }, {
    "_id" : "R287",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN223381.connName"
  }, {
    "_id" : "R288",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN223381.callback"
  }, {
    "_id" : "R289",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN225814.connName"
  }, {
    "_id" : "R290",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN225814.config"
  }, {
    "_id" : "R291",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN225814.allowReplace"
  }, {
    "_id" : "R292",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN225814.callback"
  }, {
    "_id" : "R293",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN228979.connName"
  }, {
    "_id" : "R294",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN228979.callback"
  }, {
    "_id" : "R295",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageReaderImpl.offsetReadFutures"
  }, {
    "_id" : "R296",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.setAclMutator@POLYN169837.aclMutator"
  }, {
    "_id" : "R297",
    "_libelle" : "java.io.PipedOutputStream.sink"
  }, {
    "_id" : "R298",
    "_libelle" : "java.io.PipedWriter.sink"
  }, {
    "_id" : "R299",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.this"
  }, {
    "_id" : "R300",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.write@POLYN176837.snapshot"
  }, {
    "_id" : "R301",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.topicLevelSensors"
  }, {
    "_id" : "R302",
    "_libelle" : "org.apache.kafka.streams.state.internals.DelegatingPeekingKeyValueIterator.this"
  }, {
    "_id" : "R303",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDbIterator.this"
  }, {
    "_id" : "R304",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.this"
  }, {
    "_id" : "R305",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.delay@POLYN147669.amount"
  }, {
    "_id" : "R306",
    "_libelle" : "java.io.PipedReader.receive@POLYN201139.c"
  }, {
    "_id" : "R307",
    "_libelle" : "java.io.PipedReader.receive@POLYN201139.off"
  }, {
    "_id" : "R308",
    "_libelle" : "java.io.PipedReader.receive@POLYN201139.len"
  }, {
    "_id" : "R309",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.metrics@POLYN201170.errorHandlingMetrics"
  }, {
    "_id" : "R310",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.this"
  }, {
    "_id" : "R311",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN165421.newState"
  }, {
    "_id" : "R312",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN165421.now"
  } ],
  "_lesDeadlocksSequences" : [ {
    "_id" : "0",
    "_lesItems" : [ "S0:org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN157543", "S0:org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN157543", "S0:org.apache.kafka.streams.processor.internals.TaskManager.handleRebalanceComplete@POLYN342698", "S0:org.apache.kafka.streams.processor.internals.TaskManager.releaseLockedUnassignedTaskDirectories@POLYN370421", "S0:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255979 (R0 in line [00001],R1 in line [00001])", "S0:java.util.HashMap.remove@POLYN650114" ]
  }, {
    "_id" : "1",
    "_lesItems" : [ "S1:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515041", "S1:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S1:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S1:org.apache.kafka.streams.KafkaStreams.closeToError@POLYN558108", "S1:org.apache.kafka.streams.KafkaStreams.start@POLYN551199 (R10 in line [01832])", "S1:org.apache.kafka.streams.KafkaStreams.start@POLYN551199 (R10 in line [01832])", "S1:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258984 (R0 in line [00001],R11 in line [00001])", "S1:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN259279", "S1:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN259279", "S1:org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN261045", "S1:org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN261045", "S1:java.io.File.listFiles@POLYN601563", "S1:java.io.File.File@POLYN569179" ]
  }, {
    "_id" : "2",
    "_lesItems" : [ "S2:org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN254774 (R0 in line [00001])", "S2:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN249834 (R137 in line [00001])", "S2:org.apache.kafka.streams.processor.internals.StateDirectory.getTaskDirectoryParentName@POLYN251222", "S2:org.apache.kafka.streams.processor.TaskId.topologyName@POLYN166989" ]
  }, {
    "_id" : "3",
    "_lesItems" : [ "S3:org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN157543", "S3:org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN157543", "S3:org.apache.kafka.streams.processor.internals.TaskManager.handleRebalanceComplete@POLYN342698", "S3:org.apache.kafka.streams.processor.internals.TaskManager.releaseLockedUnassignedTaskDirectories@POLYN370421", "S3:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255979 (R0 in line [00001],R1 in line [00001])", "S3:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255979 (R0 in line [00001],R1 in line [00001])", "S3:java.util.HashMap.remove@POLYN650114" ]
  }, {
    "_id" : "4",
    "_lesItems" : [ "S4:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN406519", "S4:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN406519", "S4:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN318613 (R3 in line [00275],R110 in line [00275])", "S4:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172415" ]
  }, {
    "_id" : "5",
    "_lesItems" : [ "S5:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231764 (R2 in line [00163])", "S5:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231998 (R2 in line [00168],R114 in line [00175])", "S5:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231998 (R2 in line [00168],R114 in line [00175])", "S5:org.apache.kafka.clients.consumer.MockConsumer.updateFetchPosition@POLYN247505", "S5:org.apache.kafka.clients.consumer.MockConsumer.resetOffsetPosition@POLYN248124", "S5:org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN238987", "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.seek@POLYN323267", "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN323077 (R3 in line [00380],R115 in line [00380],R116 in line [00380])", "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN323077 (R3 in line [00380],R115 in line [00380],R116 in line [00380])", "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322558", "S5:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172415" ]
  }, {
    "_id" : "6",
    "_lesItems" : [ "S6:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231764 (R2 in line [00163])", "S6:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231998 (R2 in line [00168],R114 in line [00175])", "S6:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231998 (R2 in line [00168],R114 in line [00175])", "S6:org.apache.kafka.clients.consumer.MockConsumer.updateFetchPosition@POLYN247505", "S6:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336180", "S6:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335569 (R3 in line [00638],R117 in line [00638],R118 in line [00638])", "S6:java.io.BufferedInputStream.reset@POLYN249171 (R105 in line [00445])", "S6:java.io.BufferedInputStream.getBufIfOpen@POLYN237092" ]
  }, {
    "_id" : "7",
    "_lesItems" : [ "S7:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN229174 (R2 in line [00113],R150 in line [00113],R151 in line [00113])", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN314470 (R3 in line [00174],R152 in line [00174],R153 in line [00174])", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN319514" ]
  }, {
    "_id" : "8",
    "_lesItems" : [ "S8:org.apache.kafka.jmh.consumer.SubscriptionStateBenchmark.setup@POLYN155425", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN330654 (R3 in line [00531],R159 in line [00531])", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.completeValidation@POLYN347463" ]
  }, {
    "_id" : "9",
    "_lesItems" : [ "S9:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323668 (R3 in line [00392],R173 in line [00392],R174 in line [00392],R175 in line [00392])", "S9:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN322923", "S9:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172415" ]
  }, {
    "_id" : "10",
    "_lesItems" : [ "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335764 (R3 in line [00642],R176 in line [00642],R177 in line [00642])", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335764 (R3 in line [00642],R176 in line [00642],R177 in line [00642])", "S10:java.io.BufferedInputStream.reset@POLYN249171 (R105 in line [00445])", "S10:java.io.BufferedInputStream.getBufIfOpen@POLYN237092" ]
  }, {
    "_id" : "11",
    "_lesItems" : [ "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341109 (R3 in line [00757],R178 in line [00757])", "S11:org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170215", "S11:java.util.HashMap.HashIterator.remove@POLYN674218", "S11:java.util.HashMap.removeNode@POLYN633320", "S11:java.util.HashMap.afterNodeRemoval@POLYN693612" ]
  }, {
    "_id" : "12",
    "_lesItems" : [ "S12:org.apache.kafka.clients.consumer.MockConsumer.pause@POLYN243256 (R2 in line [00395],R204 in line [00395])", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN340406 (R3 in line [00739],R205 in line [00739])", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.pause@POLYN349742" ]
  }, {
    "_id" : "13",
    "_lesItems" : [ "S13:org.apache.kafka.clients.consumer.MockConsumer.resume@POLYN243578 (R2 in line [00403],R206 in line [00403])", "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN340557 (R3 in line [00743],R207 in line [00743])", "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.resume@POLYN349849" ]
  }, {
    "_id" : "14",
    "_lesItems" : [ "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333779 (R3 in line [00598],R208 in line [00598],R209 in line [00598],R210 in line [00598])", "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333779 (R3 in line [00598],R208 in line [00598],R209 in line [00598],R210 in line [00598])", "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322558", "S14:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172415" ]
  }, {
    "_id" : "15",
    "_lesItems" : [ "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN336328 (R3 in line [00653],R211 in line [00653],R212 in line [00653])", "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN336328 (R3 in line [00653],R211 in line [00653],R212 in line [00653])", "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322558", "S15:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172415" ]
  }, {
    "_id" : "16",
    "_lesItems" : [ "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN326049 (R3 in line [00445],R234 in line [00445],R235 in line [00445])", "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322558", "S16:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172415" ]
  }, {
    "_id" : "17",
    "_lesItems" : [ "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN332221 (R3 in line [00563],R236 in line [00563])", "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322558", "S17:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172415" ]
  }, {
    "_id" : "18",
    "_lesItems" : [ "S18:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN332959 (R3 in line [00578],R237 in line [00578],R238 in line [00578])", "S18:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322558", "S18:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172415" ]
  }, {
    "_id" : "19",
    "_lesItems" : [ "S19:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN333149 (R3 in line [00582],R239 in line [00582],R240 in line [00582])", "S19:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322558", "S19:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172415" ]
  }, {
    "_id" : "20",
    "_lesItems" : [ "S20:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN333339 (R3 in line [00586],R241 in line [00586],R242 in line [00586])", "S20:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322558", "S20:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172415" ]
  }, {
    "_id" : "21",
    "_lesItems" : [ "S21:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN340703 (R3 in line [00747],R243 in line [00747],R244 in line [00747])", "S21:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN322923", "S21:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172415" ]
  }, {
    "_id" : "22",
    "_lesItems" : [ "S22:org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN157543", "S22:org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN157543", "S22:org.apache.kafka.streams.processor.internals.StreamThread.shutdownToError@POLYN355082", "S22:org.apache.kafka.streams.processor.internals.StreamThread.run@POLYN349340", "S22:org.apache.kafka.streams.processor.internals.StreamThread.runLoop@POLYN350317", "S22:org.apache.kafka.streams.processor.internals.StreamThread.checkForTopologyUpdates@POLYN363946", "S22:org.apache.kafka.streams.processor.internals.TaskManager.handleTopologyUpdates@POLYN389204", "S22:org.apache.kafka.streams.processor.internals.TaskManager.handleTopologyUpdates@POLYN389204", "S22:org.apache.kafka.clients.consumer.MockConsumer.unsubscribe@POLYN231497 (R2 in line [00155])", "S22:org.apache.kafka.clients.consumer.internals.SubscriptionState.unsubscribe@POLYN320084 (R3 in line [00309])", "S22:org.apache.kafka.common.internals.PartitionStates.clear@POLYN171424", "S22:java.util.HashMap.clear@POLYN636700" ]
  }, {
    "_id" : "23",
    "_lesItems" : [ "S23:org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN157543", "S23:org.apache.kafka.streams.processor.internals.StreamsRebalanceListener.onPartitionsAssigned@POLYN157543", "S23:org.apache.kafka.streams.processor.internals.StreamThread.shutdownToError@POLYN355082", "S23:org.apache.kafka.streams.processor.internals.StreamThread.run@POLYN349340", "S23:org.apache.kafka.streams.processor.internals.StreamThread.runLoop@POLYN350317", "S23:org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN356772", "S23:org.apache.kafka.streams.processor.internals.StreamThread.runOnce@POLYN356772", "S23:org.apache.kafka.streams.processor.internals.StreamThread.maybeCommit@POLYN371732", "S23:org.apache.kafka.streams.processor.internals.StreamThread.maybeCommit@POLYN371732", "S23:org.apache.kafka.streams.processor.internals.TaskManager.maybeCommitActiveTasksPerUserRequested@POLYN387684", "S23:org.apache.kafka.streams.processor.internals.TaskManager.commit@POLYN386869", "S23:org.apache.kafka.streams.processor.internals.TaskManager.commitTasksAndMaybeUpdateCommittableOffsets@POLYN388169", "S23:org.apache.kafka.streams.processor.internals.TaskExecutor.commitTasksAndMaybeUpdateCommittableOffsets@POLYN194481", "S23:org.apache.kafka.streams.processor.internals.TaskExecutor.commitOffsetsOrTransaction@POLYN195873", "S23:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN238215 (R2 in line [00280])", "S23:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN238538", "S23:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN237643 (R2 in line [00264],R4 in line [00264])", "S23:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237027 (R2 in line [00254],R5 in line [00254],R6 in line [00254])", "S23:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "24",
    "_lesItems" : [ "S24:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231764 (R2 in line [00163])", "S24:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231998 (R2 in line [00168],R114 in line [00175])", "S24:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "25",
    "_lesItems" : [ "S25:org.apache.kafka.clients.consumer.MockConsumer.rebalance@POLYN228565 (R2 in line [00096],R149 in line [00096])", "S25:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN318613 (R3 in line [00275],R110 in line [00275])", "S25:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172415" ]
  }, {
    "_id" : "26",
    "_lesItems" : [ "S26:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN229174 (R2 in line [00113],R150 in line [00113],R151 in line [00113])", "S26:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "27",
    "_lesItems" : [ "S27:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN238368 (R2 in line [00285],R154 in line [00285])", "S27:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN238538", "S27:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN237643 (R2 in line [00264],R4 in line [00264])", "S27:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237027 (R2 in line [00254],R5 in line [00254],R6 in line [00254])", "S27:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "28",
    "_lesItems" : [ "S28:org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN238748 (R2 in line [00295],R171 in line [00295],R172 in line [00295])", "S28:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "29",
    "_lesItems" : [ "S29:org.apache.kafka.clients.consumer.MockConsumer.seekToBeginning@POLYN241442 (R2 in line [00352],R185 in line [00352])", "S29:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "30",
    "_lesItems" : [ "S30:org.apache.kafka.clients.consumer.MockConsumer.seekToEnd@POLYN241866 (R2 in line [00362],R186 in line [00362])", "S30:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "31",
    "_lesItems" : [ "S31:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN228967 (R2 in line [00108],R229 in line [00108])", "S31:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230791 (R2 in line [00141],R230 in line [00141],R231 in line [00141])", "S31:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "32",
    "_lesItems" : [ "S32:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230605 (R2 in line [00136],R232 in line [00136])", "S32:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230791 (R2 in line [00141],R230 in line [00141],R231 in line [00141])", "S32:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "33",
    "_lesItems" : [ "S33:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237849 (R2 in line [00269])", "S33:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237974 (R2 in line [00274],R233 in line [00274])", "S33:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "34",
    "_lesItems" : [ "S34:org.apache.kafka.clients.consumer.internals.ConsumerInterceptors.close@POLYN158702", "S34:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN246110", "S34:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN246272 (R2 in line [00455],R259 in line [00455])" ]
  }, {
    "_id" : "35",
    "_lesItems" : [ "S35:org.apache.kafka.clients.consumer.MockConsumer.assign@POLYN231169 (R2 in line [00148],R261 in line [00148])", "S35:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "36",
    "_lesItems" : [ "S36:org.apache.kafka.clients.consumer.MockConsumer.addRecord@POLYN235673 (R2 in line [00227],R262 in line [00227])", "S36:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "37",
    "_lesItems" : [ "S37:org.apache.kafka.clients.consumer.MockConsumer.setException@POLYN236618 (R2 in line [00241],R263 in line [00241])", "S37:org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN236749 (R2 in line [00245],R264 in line [00245])" ]
  }, {
    "_id" : "38",
    "_lesItems" : [ "S38:org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN241676 (R2 in line [00357],R265 in line [00357])", "S38:java.util.Map.putAll" ]
  }, {
    "_id" : "39",
    "_lesItems" : [ "S39:org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN242100 (R2 in line [00367],R266 in line [00367])", "S39:java.util.Map.putAll" ]
  }, {
    "_id" : "40",
    "_lesItems" : [ "S40:org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN242981 (R2 in line [00389],R267 in line [00389],R268 in line [00389])", "S40:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "41",
    "_lesItems" : [ "S41:org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN246825 (R2 in line [00473],R269 in line [00473],R114 in line [00474])", "S41:java.util.concurrent.ConcurrentHashMap.add@POLYN1668596" ]
  }, {
    "_id" : "42",
    "_lesItems" : [ "S42:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN233056 (R31 in line [00309],R32 in line [00309],R33 in line [00309])", "S42:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN463324", "S42:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN461111", "S42:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN459985", "S42:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN459985", "S42:org.apache.kafka.connect.runtime.Worker.stop@POLYN420615", "S42:org.apache.kafka.connect.runtime.Worker.stop@POLYN420615", "S42:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN494520 (R35 in line [01751])", "S42:org.apache.kafka.connect.runtime.ConnectMetrics.MetricGroup.close@POLYN231626 (R36 in line [00406])", "S42:org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN295882 (R37 in line [00449],R38 in line [00450])", "S42:org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN295882 (R37 in line [00449],R38 in line [00450])", "S42:java.util.HashMap.get@POLYN617768" ]
  }, {
    "_id" : "43",
    "_lesItems" : [ "S43:org.apache.kafka.common.metrics.Metrics.removeReporter@POLYN302169 (R38 in line [00690],R245 in line [00690])", "S43:org.apache.kafka.common.metrics.JmxReporter.close@POLYN198693 (R246 in line [00208])", "S43:org.apache.kafka.common.metrics.JmxReporter.unregister@POLYN198934" ]
  }, {
    "_id" : "44",
    "_lesItems" : [ "S44:org.apache.kafka.common.metrics.Metrics.addReporter@POLYN301813 (R38 in line [00690],R280 in line [00690])", "S44:java.util.concurrent.ConcurrentHashMap.add@POLYN1668596" ]
  }, {
    "_id" : "45",
    "_lesItems" : [ "S45:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515041", "S45:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S45:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S45:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537097 (R12 in line [01039],R13 in line [01051])", "S45:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN546686 (R14 in line [01215])", "S45:java.util.Map.remove@POLYN430232" ]
  }, {
    "_id" : "46",
    "_lesItems" : [ "S46:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515041", "S46:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S46:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S46:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537097 (R12 in line [01039],R13 in line [01051])", "S46:org.apache.kafka.streams.KafkaStreams.createAndAddStreamThread@POLYN534300", "S46:org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338952", "S46:org.apache.kafka.streams.processor.internals.ActiveTaskCreator.ActiveTaskCreator@POLYN186862", "S46:org.apache.kafka.streams.processor.internals.metrics.ThreadMetrics.createTaskSensor@POLYN192503", "S46:org.apache.kafka.streams.processor.internals.metrics.ThreadMetrics.invocationRateAndCountSensor@POLYN200747", "S46:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadLevelSensor@POLYN286888 (R8 in line [00257])", "S46:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN287344" ]
  }, {
    "_id" : "47",
    "_lesItems" : [ "S47:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515041", "S47:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S47:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S47:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537097 (R12 in line [01039],R13 in line [01051])", "S47:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537097 (R12 in line [01039],R13 in line [01051])", "S47:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN546686 (R14 in line [01215])", "S47:java.util.Map.remove@POLYN430232" ]
  }, {
    "_id" : "48",
    "_lesItems" : [ "S48:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515041", "S48:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S48:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S48:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537097 (R12 in line [01039],R13 in line [01051])", "S48:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537097 (R12 in line [01039],R13 in line [01051])", "S48:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373894", "S48:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN334041 (R15 in line [00215])", "S48:org.apache.kafka.common.requests.OffsetFetchResponse.error@POLYN207350" ]
  }, {
    "_id" : "49",
    "_lesItems" : [ "S49:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515041", "S49:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S49:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S49:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537097 (R12 in line [01039],R13 in line [01051])", "S49:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537097 (R12 in line [01039],R13 in line [01051])", "S49:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373894", "S49:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN374254", "S49:org.apache.kafka.clients.consumer.MockConsumer.unsubscribe@POLYN231497 (R2 in line [00155])", "S49:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "50",
    "_lesItems" : [ "S50:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515041", "S50:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S50:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S50:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537097 (R12 in line [01039],R13 in line [01051])", "S50:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537097 (R12 in line [01039],R13 in line [01051])", "S50:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373894", "S50:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN374254", "S50:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelMetrics@POLYN289409 (R9 in line [00310])", "S50:java.util.Hashtable.remove@POLYN476208" ]
  }, {
    "_id" : "51",
    "_lesItems" : [ "S51:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515041", "S51:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S51:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S51:org.apache.kafka.streams.KafkaStreams.closeToError@POLYN558108", "S51:org.apache.kafka.streams.KafkaStreams.start@POLYN551199 (R10 in line [01832])", "S51:org.apache.kafka.streams.KafkaStreams.start@POLYN551199 (R10 in line [01832])", "S51:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258984 (R0 in line [00001],R11 in line [00001])", "S51:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN259279", "S51:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN259279", "S51:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255979 (R0 in line [00001],R1 in line [00001])", "S51:java.util.HashMap.remove@POLYN650114" ]
  }, {
    "_id" : "52",
    "_lesItems" : [ "S52:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN539305", "S52:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN540381 (R12 in line [01113])", "S52:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373894", "S52:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN334041 (R15 in line [00215])", "S52:org.apache.kafka.common.requests.OffsetFetchResponse.error@POLYN207350" ]
  }, {
    "_id" : "53",
    "_lesItems" : [ "S53:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN539305", "S53:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN540381 (R12 in line [01113])", "S53:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373894", "S53:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN374254", "S53:org.apache.kafka.clients.consumer.MockConsumer.unsubscribe@POLYN231497 (R2 in line [00155])", "S53:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "54",
    "_lesItems" : [ "S54:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN539305", "S54:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN540381 (R12 in line [01113])", "S54:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373894", "S54:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN374254", "S54:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelSensors@POLYN288861 (R8 in line [00301])", "S54:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN287344" ]
  }, {
    "_id" : "55",
    "_lesItems" : [ "S55:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN539305", "S55:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN540381 (R12 in line [01113])", "S55:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373894", "S55:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN374254", "S55:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelMetrics@POLYN289409 (R9 in line [00310])", "S55:java.util.Hashtable.remove@POLYN476208" ]
  }, {
    "_id" : "56",
    "_lesItems" : [ "S56:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN369336", "S56:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN383723", "S56:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN546285", "S56:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN547317", "S56:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN555058", "S56:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN555058", "S56:org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN262753 (R17 in line [00450],R20 in line [00450])" ]
  }, {
    "_id" : "57",
    "_lesItems" : [ "S57:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513921", "S57:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513921", "S57:org.apache.kafka.clients.Metadata.bootstrap@POLYN251833 (R17 in line [00238],R52 in line [00238])", "S57:org.apache.kafka.clients.MetadataCache.bootstrap@POLYN189077", "S57:java.util.Map.put@POLYN428946" ]
  }, {
    "_id" : "58",
    "_lesItems" : [ "S58:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN252225 (R17 in line [00249],R74 in line [00249],R75 in line [00249],R76 in line [00249])", "S58:org.apache.kafka.clients.Metadata.update@POLYN252799 (R17 in line [00263],R77 in line [00263],R78 in line [00263],R79 in line [00263],R80 in line [00263])", "S58:org.apache.kafka.common.ClusterResource.clusterId@POLYN147471" ]
  }, {
    "_id" : "59",
    "_lesItems" : [ "S59:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN369336", "S59:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN383723", "S59:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN546285", "S59:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN547317", "S59:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN555058", "S59:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN555058", "S59:org.apache.kafka.clients.producer.internals.ProducerMetadata.requestUpdateForTopic@POLYN162117 (R16 in line [00075])", "S59:org.apache.kafka.clients.Metadata.requestUpdateForNewTopics@POLYN247486 (R17 in line [00150])" ]
  }, {
    "_id" : "60",
    "_lesItems" : [ "S60:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN369336", "S60:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN383723", "S60:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN546285", "S60:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN547317", "S60:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN555058", "S60:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN555058", "S60:org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN163688 (R16 in line [00116],R18 in line [00116],R19 in line [00116])", "S60:org.apache.kafka.common.utils.Time.milliseconds@POLYN153549" ]
  }, {
    "_id" : "61",
    "_lesItems" : [ "S61:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466101", "S61:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305530", "S61:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307737", "S61:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307737", "S61:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308927", "S61:org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161647 (R16 in line [00067],R66 in line [00067],R67 in line [00067])", "S61:org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161647 (R16 in line [00067],R66 in line [00067],R67 in line [00067])", "S61:org.apache.kafka.clients.Metadata.requestUpdateForNewTopics@POLYN247486 (R17 in line [00150])" ]
  }, {
    "_id" : "62",
    "_lesItems" : [ "S62:org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164460 (R16 in line [00130],R272 in line [00130],R273 in line [00130],R274 in line [00130],R275 in line [00130])", "S62:org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164460 (R16 in line [00130],R272 in line [00130],R273 in line [00130],R274 in line [00130],R275 in line [00130])", "S62:java.util.HashMap.remove@POLYN650114" ]
  }, {
    "_id" : "63",
    "_lesItems" : [ "S63:org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN165073 (R16 in line [00145],R276 in line [00145])", "S63:org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN165073 (R16 in line [00145],R276 in line [00145])", "S63:java.lang.Object.notifyAll@POLYN294767" ]
  }, {
    "_id" : "64",
    "_lesItems" : [ "S64:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN392790 (R24 in line [00383])", "S64:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN422566", "S64:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN422758 (R24 in line [01078])", "S64:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423752 (R24 in line [01103])", "S64:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423752 (R24 in line [01103])", "S64:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.send@POLYN250472", "S64:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.UnsentRequests.put@POLYN269762 (R25 in line [00646])", "S64:java.util.concurrent.ConcurrentHashMap.add@POLYN1668596" ]
  }, {
    "_id" : "65",
    "_lesItems" : [ "S65:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN392790 (R24 in line [00383])", "S65:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN422566", "S65:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN422758 (R24 in line [01078])", "S65:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423752 (R24 in line [01103])", "S65:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423752 (R24 in line [01103])", "S65:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.pollNoWakeup@POLYN256848", "S65:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.poll@POLYN254983", "S65:org.apache.kafka.clients.Metadata.maybeThrowAnyException@POLYN262011 (R17 in line [00428])", "S65:org.apache.kafka.clients.Metadata.clearErrorsAndMaybeThrowException@POLYN262939", "S65:org.apache.kafka.clients.Metadata.clearRecoverableErrors@POLYN264175" ]
  }, {
    "_id" : "66",
    "_lesItems" : [ "S66:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN392790 (R24 in line [00383])", "S66:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN422566", "S66:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN422758 (R24 in line [01078])", "S66:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN417192 (R24 in line [00926])", "S66:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418001 (R24 in line [00947],R26 in line [00947],R27 in line [00947])", "S66:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418001 (R24 in line [00947],R26 in line [00947],R27 in line [00947])", "S66:org.apache.kafka.common.utils.Time.milliseconds@POLYN153549" ]
  }, {
    "_id" : "67",
    "_lesItems" : [ "S67:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.close@POLYN416310", "S67:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN387786 (R24 in line [00240])", "S67:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN387786 (R24 in line [00240])", "S67:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417647 (R24 in line [00939],R28 in line [00939])" ]
  }, {
    "_id" : "68",
    "_lesItems" : [ "S68:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN230207", "S68:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN230207", "S68:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN390919 (R24 in line [00322],R104 in line [00322])", "S68:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.failureCause@POLYN439248", "S68:java.util.HashMap.get@POLYN617768" ]
  }, {
    "_id" : "69",
    "_lesItems" : [ "S69:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureActiveGroup@POLYN392238", "S69:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN393862", "S69:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN420622 (R24 in line [01017],R119 in line [01017],R120 in line [01017])", "S69:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN419923 (R24 in line [01004],R121 in line [01004],R122 in line [01004])" ]
  }, {
    "_id" : "70",
    "_lesItems" : [ "S70:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417846 (R24 in line [00943],R160 in line [00943])", "S70:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418001 (R24 in line [00947],R26 in line [00947],R27 in line [00947])", "S70:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418001 (R24 in line [00947],R26 in line [00947],R27 in line [00947])", "S70:org.apache.kafka.common.utils.Time.milliseconds@POLYN153549" ]
  }, {
    "_id" : "71",
    "_lesItems" : [ "S71:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420920 (R24 in line [01023],R187 in line [01023],R188 in line [01023],R189 in line [01023])", "S71:java.lang.String.format@POLYN906229" ]
  }, {
    "_id" : "72",
    "_lesItems" : [ "S72:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513921", "S72:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513921", "S72:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161461 (R53 in line [00060],R54 in line [00060],R55 in line [00060],R56 in line [00060],R57 in line [00060])", "S72:org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN163359" ]
  }, {
    "_id" : "73",
    "_lesItems" : [ "S73:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513921", "S73:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513921", "S73:org.apache.kafka.clients.producer.KafkaProducer.close@POLYN563737", "S73:org.apache.kafka.clients.producer.KafkaProducer.close@POLYN563737", "S73:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN162241 (R53 in line [00072],R58 in line [00072],R59 in line [00072],R60 in line [00072])", "S73:org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN164176", "S73:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN301031 (R38 in line [00690])", "S73:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN301031 (R38 in line [00690])", "S73:org.apache.kafka.common.metrics.MetricsReporter.metricRemoval" ]
  }, {
    "_id" : "74",
    "_lesItems" : [ "S74:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN233056 (R31 in line [00309],R32 in line [00309],R33 in line [00309])", "S74:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN463324", "S74:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN461111", "S74:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN459985", "S74:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN459985", "S74:org.apache.kafka.connect.runtime.Worker.stop@POLYN420615", "S74:org.apache.kafka.connect.runtime.Worker.stop@POLYN420615", "S74:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN494520 (R35 in line [01751])", "S74:org.apache.kafka.connect.runtime.ConnectMetrics.MetricGroup.close@POLYN231626 (R36 in line [00406])", "S74:org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN295882 (R37 in line [00449],R38 in line [00450])", "S74:java.util.HashMap.get@POLYN617768" ]
  }, {
    "_id" : "75",
    "_lesItems" : [ "S75:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN233056 (R31 in line [00309],R32 in line [00309],R33 in line [00309])", "S75:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN161874" ]
  }, {
    "_id" : "76",
    "_lesItems" : [ "S76:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226727 (R31 in line [00201],R95 in line [00201],R96 in line [00201],R97 in line [00201],R98 in line [00201],R99 in line [00201])", "S76:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN433850", "S76:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN430582", "S76:java.util.HashMap.get@POLYN617768" ]
  }, {
    "_id" : "77",
    "_lesItems" : [ "S77:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN228605 (R31 in line [00242],R100 in line [00242])", "S77:org.apache.kafka.common.requests.OffsetFetchResponse.error@POLYN207350" ]
  }, {
    "_id" : "78",
    "_lesItems" : [ "S78:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN222233 (R31 in line [00105])", "S78:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN238855", "S78:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN463324", "S78:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN461111", "S78:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN459985", "S78:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN459985", "S78:org.apache.kafka.connect.runtime.Worker.stop@POLYN420615", "S78:org.apache.kafka.connect.runtime.Worker.stop@POLYN420615", "S78:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN494520 (R35 in line [01751])", "S78:org.apache.kafka.connect.runtime.ConnectMetrics.MetricGroup.close@POLYN231626 (R36 in line [00406])", "S78:org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN295882 (R37 in line [00449],R38 in line [00450])", "S78:java.util.HashMap.get@POLYN617768" ]
  }, {
    "_id" : "79",
    "_lesItems" : [ "S79:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN222233 (R31 in line [00105])", "S79:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN433850", "S79:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN430582", "S79:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN430582", "S79:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN218632 (R34 in line [00256])", "S79:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN218632 (R34 in line [00256])", "S79:java.lang.Object.notify@POLYN294030" ]
  }, {
    "_id" : "80",
    "_lesItems" : [ "S80:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224746 (R31 in line [00161],R101 in line [00161],R102 in line [00161])", "S80:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN238855", "S80:org.apache.kafka.connect.storage.ClusterConfigState.tasks@POLYN203087", "S80:java.util.HashMap.get@POLYN617768" ]
  }, {
    "_id" : "81",
    "_lesItems" : [ "S81:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN230440 (R31 in line [00274],R106 in line [00274],R107 in line [00274])", "S81:org.apache.kafka.connect.storage.ClusterConfigState.taskConfig@POLYN200191", "S81:java.util.HashMap.get@POLYN617768" ]
  }, {
    "_id" : "82",
    "_lesItems" : [ "S82:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN231853 (R31 in line [00291],R142 in line [00291],R143 in line [00291])", "S82:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN433850", "S82:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN430582", "S82:java.util.HashMap.get@POLYN617768" ]
  }, {
    "_id" : "83",
    "_lesItems" : [ "S83:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN223150 (R31 in line [00133],R286 in line [00133])", "S83:org.apache.kafka.connect.util.Callback.onCompletion" ]
  }, {
    "_id" : "84",
    "_lesItems" : [ "S84:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN223381 (R31 in line [00138],R287 in line [00138],R288 in line [00138])", "S84:org.apache.kafka.clients.producer.KafkaProducer.onCompletion@POLYN572207" ]
  }, {
    "_id" : "85",
    "_lesItems" : [ "S85:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN225814 (R31 in line [00181],R289 in line [00181],R290 in line [00181],R291 in line [00181],R292 in line [00181])", "S85:org.apache.kafka.connect.util.Callback.onCompletion" ]
  }, {
    "_id" : "86",
    "_lesItems" : [ "S86:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN228979 (R31 in line [00251],R293 in line [00251],R294 in line [00251])", "S86:java.util.concurrent.ConcurrentHashMap.add@POLYN1668596" ]
  }, {
    "_id" : "87",
    "_lesItems" : [ "S87:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN233056 (R31 in line [00309],R32 in line [00309],R33 in line [00309])", "S87:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN433850", "S87:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN430582", "S87:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN430582", "S87:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN218632 (R34 in line [00256])", "S87:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN218632 (R34 in line [00256])", "S87:java.lang.Object.notify@POLYN294030" ]
  }, {
    "_id" : "88",
    "_lesItems" : [ "S88:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN233056 (R31 in line [00309],R32 in line [00309],R33 in line [00309])", "S88:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN233056 (R31 in line [00309],R32 in line [00309],R33 in line [00309])", "S88:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN161874" ]
  }, {
    "_id" : "89",
    "_lesItems" : [ "S89:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513921", "S89:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513921", "S89:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161461 (R53 in line [00060],R54 in line [00060],R55 in line [00060],R56 in line [00060],R57 in line [00060])", "S89:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161461 (R53 in line [00060],R54 in line [00060],R55 in line [00060],R56 in line [00060],R57 in line [00060])", "S89:org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN163359" ]
  }, {
    "_id" : "90",
    "_lesItems" : [ "S90:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513921", "S90:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513921", "S90:org.apache.kafka.clients.producer.KafkaProducer.close@POLYN563737", "S90:org.apache.kafka.clients.producer.KafkaProducer.close@POLYN563737", "S90:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN162241 (R53 in line [00072],R58 in line [00072],R59 in line [00072],R60 in line [00072])", "S90:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN162241 (R53 in line [00072],R58 in line [00072],R59 in line [00072],R60 in line [00072])", "S90:org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN164176", "S90:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN301031 (R38 in line [00690])", "S90:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN301031 (R38 in line [00690])", "S90:org.apache.kafka.common.metrics.MetricsReporter.metricRemoval" ]
  }, {
    "_id" : "91",
    "_lesItems" : [ "S91:org.apache.kafka.streams.state.internals.ThreadCache.putIfAbsent@POLYN194667", "S91:org.apache.kafka.streams.state.internals.ThreadCache.getOrCreateCache@POLYN200834 (R61 in line [00285])", "S91:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN194253", "S91:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193987 (R62 in line [00157],R63 in line [00157],R64 in line [00157])", "S91:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143654" ]
  }, {
    "_id" : "92",
    "_lesItems" : [ "S92:org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN198245 (R62 in line [00256],R163 in line [00256])", "S92:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193987 (R62 in line [00157],R63 in line [00157],R64 in line [00157])", "S92:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143654" ]
  }, {
    "_id" : "93",
    "_lesItems" : [ "S93:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN199672 (R61 in line [00254],R223 in line [00254])", "S93:org.apache.kafka.streams.state.internals.NamedCache.close@POLYN202588 (R62 in line [00345])", "S93:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllCacheLevelSensors@POLYN297501 (R224 in line [00462])", "S93:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheSensorPrefix@POLYN298152" ]
  }, {
    "_id" : "94",
    "_lesItems" : [ "S94:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190741 (R61 in line [00075],R132 in line [00075])", "S94:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190741 (R61 in line [00075],R132 in line [00075])", "S94:org.apache.kafka.common.utils.CircularIterator.next@POLYN155872", "S94:org.apache.kafka.common.utils.CircularIterator.advance@POLYN156212" ]
  }, {
    "_id" : "95",
    "_lesItems" : [ "S95:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN199672 (R61 in line [00254],R223 in line [00254])", "S95:java.util.Hashtable.remove@POLYN476208" ]
  }, {
    "_id" : "96",
    "_lesItems" : [ "S96:org.apache.kafka.streams.state.internals.ThreadCache.putIfAbsent@POLYN194667", "S96:org.apache.kafka.streams.state.internals.ThreadCache.getOrCreateCache@POLYN200834 (R61 in line [00285])", "S96:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN194253", "S96:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193987 (R62 in line [00157],R63 in line [00157],R64 in line [00157])", "S96:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193987 (R62 in line [00157],R63 in line [00157],R64 in line [00157])", "S96:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143654" ]
  }, {
    "_id" : "97",
    "_lesItems" : [ "S97:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN252225 (R17 in line [00249],R74 in line [00249],R75 in line [00249],R76 in line [00249])", "S97:org.apache.kafka.clients.Metadata.update@POLYN252799 (R17 in line [00263],R77 in line [00263],R78 in line [00263],R79 in line [00263],R80 in line [00263])", "S97:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN255803", "S97:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN255803", "S97:org.apache.kafka.clients.Metadata.requestUpdate@POLYN247319 (R17 in line [00145])" ]
  }, {
    "_id" : "98",
    "_lesItems" : [ "S98:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN252225 (R17 in line [00249],R74 in line [00249],R75 in line [00249],R76 in line [00249])", "S98:org.apache.kafka.clients.Metadata.update@POLYN252799 (R17 in line [00263],R77 in line [00263],R78 in line [00263],R79 in line [00263],R80 in line [00263])", "S98:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN255803", "S98:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN255803", "S98:org.apache.kafka.common.requests.MetadataResponse.brokersById@POLYN221505", "S98:org.apache.kafka.common.requests.MetadataResponse.holder@POLYN220898 (R81 in line [00001])", "S98:org.apache.kafka.common.requests.MetadataResponse.Holder.Holder@POLYN229047", "S98:java.util.Map.get@POLYN427859" ]
  }, {
    "_id" : "99",
    "_lesItems" : [ "S99:org.apache.kafka.streams.state.internals.CachingWindowStore.init@POLYN231684", "S99:org.apache.kafka.streams.state.internals.CachingWindowStore.initInternal@POLYN232626", "S99:org.apache.kafka.streams.state.internals.CachingWindowStore.putAndMaybeForward@POLYN233410", "S99:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN236200 (R84 in line [00156],R85 in line [00156],R86 in line [00156],R87 in line [00156])", "S99:org.apache.kafka.streams.state.internals.WrappedStateStore.validateStoreOpen@POLYN158867" ]
  }, {
    "_id" : "100",
    "_lesItems" : [ "S100:org.apache.kafka.streams.state.internals.CachingWindowStore.init@POLYN231684", "S100:org.apache.kafka.streams.state.internals.CachingWindowStore.initInternal@POLYN232626", "S100:org.apache.kafka.streams.state.internals.CachingWindowStore.putAndMaybeForward@POLYN233410", "S100:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN236200 (R84 in line [00156],R85 in line [00156],R86 in line [00156],R87 in line [00156])", "S100:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN236200 (R84 in line [00156],R85 in line [00156],R86 in line [00156],R87 in line [00156])", "S100:org.apache.kafka.streams.state.internals.WrappedStateStore.validateStoreOpen@POLYN158867" ]
  }, {
    "_id" : "101",
    "_lesItems" : [ "S101:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN253707", "S101:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN256396", "S101:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN259429 (R91 in line [00260],R92 in line [00260],R93 in line [00260],R94 in line [00260])", "S101:org.apache.kafka.streams.state.internals.WrappedStateStore.validateStoreOpen@POLYN158867" ]
  }, {
    "_id" : "102",
    "_lesItems" : [ "S102:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN253707", "S102:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN256396", "S102:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN259429 (R91 in line [00260],R92 in line [00260],R93 in line [00260],R94 in line [00260])", "S102:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN259429 (R91 in line [00260],R92 in line [00260],R93 in line [00260],R94 in line [00260])", "S102:org.apache.kafka.streams.state.internals.WrappedStateStore.validateStoreOpen@POLYN158867" ]
  }, {
    "_id" : "103",
    "_lesItems" : [ "S103:org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN183400 (R103 in line [00166])", "S103:org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN183400 (R103 in line [00166])", "S103:org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN185806", "S103:org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN185806", "S103:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN301031 (R38 in line [00690])", "S103:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN301031 (R38 in line [00690])", "S103:org.apache.kafka.common.metrics.MetricsReporter.metricRemoval" ]
  }, {
    "_id" : "104",
    "_lesItems" : [ "S104:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN187088 (R103 in line [00235],R281 in line [00235])", "S104:java.util.HashMap.get@POLYN617768" ]
  }, {
    "_id" : "105",
    "_lesItems" : [ "S105:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231764 (R2 in line [00163])", "S105:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231998 (R2 in line [00168],R114 in line [00175])", "S105:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231998 (R2 in line [00168],R114 in line [00175])", "S105:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "106",
    "_lesItems" : [ "S106:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165668 (R130 in line [00139],R131 in line [00139])", "S106:org.apache.kafka.snapshot.RecordsSnapshotReader.next@POLYN155383", "S106:java.util.HashMap.get@POLYN617768" ]
  }, {
    "_id" : "107",
    "_lesItems" : [ "S107:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN163202 (R130 in line [00076],R179 in line [00076])", "S107:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN163202 (R130 in line [00076],R179 in line [00076])", "S107:org.apache.kafka.raft.Batch.lastOffset@POLYN162318" ]
  }, {
    "_id" : "108",
    "_lesItems" : [ "S108:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165668 (R130 in line [00139],R131 in line [00139])", "S108:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165668 (R130 in line [00139],R131 in line [00139])", "S108:org.apache.kafka.snapshot.RecordsSnapshotReader.next@POLYN155383", "S108:java.util.HashMap.get@POLYN617768" ]
  }, {
    "_id" : "109",
    "_lesItems" : [ "S109:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190741 (R61 in line [00075],R132 in line [00075])", "S109:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190741 (R61 in line [00075],R132 in line [00075])", "S109:org.apache.kafka.streams.state.internals.NamedCache.evict@POLYN197304 (R62 in line [00235])", "S109:org.apache.kafka.streams.state.internals.NamedCache.remove@POLYN196238" ]
  }, {
    "_id" : "110",
    "_lesItems" : [ "S110:org.apache.kafka.streams.processor.MockProcessorContext.MockProcessorContext@POLYN236848", "S110:java.util.Hashtable.putAll@POLYN429352 (R146 in line [00536],R147 in line [00536])", "S110:java.util.Hashtable.put@POLYN425878 (R146 in line [00471])", "S110:java.util.Hashtable.addEntry@POLYN424293", "S110:java.util.Hashtable.rehash@POLYN422408" ]
  }, {
    "_id" : "111",
    "_lesItems" : [ "S111:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323668 (R3 in line [00392],R173 in line [00392],R174 in line [00392],R175 in line [00392])", "S111:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323668 (R3 in line [00392],R173 in line [00392],R174 in line [00392],R175 in line [00392])", "S111:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN322923", "S111:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172415" ]
  }, {
    "_id" : "112",
    "_lesItems" : [ "S112:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163860 (R181 in line [00095],R182 in line [00095])", "S112:org.apache.kafka.common.utils.Time.milliseconds@POLYN153549" ]
  }, {
    "_id" : "113",
    "_lesItems" : [ "S113:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163860 (R181 in line [00095],R182 in line [00095])", "S113:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163860 (R181 in line [00095],R182 in line [00095])", "S113:org.apache.kafka.common.utils.Time.milliseconds@POLYN153549" ]
  }, {
    "_id" : "114",
    "_lesItems" : [ "S114:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420920 (R24 in line [01023],R187 in line [01023],R188 in line [01023],R189 in line [01023])", "S114:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN420622 (R24 in line [01017],R119 in line [01017],R120 in line [01017])", "S114:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN419923 (R24 in line [01004],R121 in line [01004],R122 in line [01004])" ]
  }, {
    "_id" : "115",
    "_lesItems" : [ "S115:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN161222 (R213 in line [00084],R214 in line [00084])", "S115:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN160679 (R213 in line [00076],R215 in line [00076])", "S115:org.apache.kafka.connect.util.Table.remove@POLYN148935", "S115:java.util.Hashtable.remove@POLYN476208" ]
  }, {
    "_id" : "116",
    "_lesItems" : [ "S116:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN160534 (R213 in line [00071],R248 in line [00071])", "S116:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN160155 (R213 in line [00063],R249 in line [00063])", "S116:java.util.HashMap.remove@POLYN650114" ]
  }, {
    "_id" : "117",
    "_lesItems" : [ "S117:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237849 (R2 in line [00269])", "S117:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237974 (R2 in line [00274],R233 in line [00274])", "S117:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237974 (R2 in line [00274],R233 in line [00274])", "S117:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "118",
    "_lesItems" : [ "S118:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN187088 (R103 in line [00235],R281 in line [00235])", "S118:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN187088 (R103 in line [00235],R281 in line [00235])", "S118:java.util.HashMap.get@POLYN617768" ]
  } ],
  "_lesDeadlocksTypos" : [ ]
}