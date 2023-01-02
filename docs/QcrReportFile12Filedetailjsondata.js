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
    "_id" : "5",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.util.HashMap.get@POLYN617768.return",
      "_method" : "---java.util.HashMap.get@POLYN617768 in line [01153]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.selectReadReplica@POLYN523236.return",
      "_risk" : "//QC-JAVCWE099[01153] In org.apache.kafka.clients.consumer.internals.Fetcher.selectReadReplica@POLYN523236[01153] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.selectReadReplica@POLYN523236.return",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.selectReadReplica@POLYN523236 in line [01205]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN525070.node",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN525070.node",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [01225]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[01225] In org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN525070[01225] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "6",
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
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210842.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210842[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210842.topic",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210842[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "7",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.admin.internals.CoordinatorKey.byTransactionalId@POLYN147281.return",
      "_method" : "---org.apache.kafka.clients.admin.internals.CoordinatorKey.byTransactionalId@POLYN147281 in line [00076]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00076] In org.apache.kafka.clients.admin.FenceProducersResult[00076] source or target data PATHtainted (java.util.HashMap)"
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
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210842.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210842[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210842.topic",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210842[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "8",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.admin.internals.AdminApiDriver.BiMultimap.remove@POLYN238138.sourcedummy",
      "_method" : "---java.util.Hashtable.remove@POLYN476208 in line [00469]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00469] In org.apache.kafka.clients.admin.internals.AdminApiDriver.BiMultimap.remove@POLYN238138[00469] source or target data PATHtainted (java.util.HashMap)"
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
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210842.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210842[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210842.topic",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210842[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "9",
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
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210842.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210842[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210842.topic",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210842[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "10",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.serialization.Deserializer.deserialize@POLYN151552.return",
      "_method" : "---org.apache.kafka.common.serialization.Deserializer.deserialize@POLYN151552 in line [00825]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00825] In org.apache.kafka.streams.TopologyTestDriver[00825] source or target data PATHtainted (java.util.HashMap)"
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
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210842.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210842[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210842.topic",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210842[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "11",
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
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210842.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210842[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210842.topic",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210842[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "12",
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
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210842.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210842[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210842.topic",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210842[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "13",
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
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210842.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210842[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210842.topic",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210842[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "14",
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
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210842.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210842[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210842.topic",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210842[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "15",
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
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210842.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210842[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210842.topic",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210842[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "16",
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
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210842.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210842[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210842.topic",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210842[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "17",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "7",
      "_source" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.constrainedAssign@POLYN355544.assignment",
      "_method" : "---dummymethode in line [00349]",
      "_target" : "java.util.Map.values@POLYN432698.return",
      "_risk" : "//QC-JAVCWE099[00349] In org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.constrainedAssign@POLYN355544[00349] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "6",
      "_source" : "java.util.Map.values@POLYN432698.return",
      "_method" : "---java.util.Map.values@POLYN432698 in line [03486]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[03486] In org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1138823[03486] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "partition",
      "_method" : "---dummymethode in line [01521]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---dummymethode in line [01264]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529995.tp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529995.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341043 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341043.tp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341043.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00058] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083[00058] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "18",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "7",
      "_source" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.generalAssign@POLYN365587.currentAssignment",
      "_method" : "---dummymethode in line [00484]",
      "_target" : "java.util.Map.values@POLYN432698.return",
      "_risk" : "//QC-JAVCWE099[00484] In org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.generalAssign@POLYN365587[00484] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "6",
      "_source" : "java.util.Map.values@POLYN432698.return",
      "_method" : "---java.util.Map.values@POLYN432698 in line [03486]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[03486] In org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1138823[03486] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "partition",
      "_method" : "---dummymethode in line [01521]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---dummymethode in line [01264]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529995.tp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529995.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341043 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341043.tp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341043.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00058] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083[00058] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "19",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "8",
      "_source" : "java.util.Map.getValue@POLYN434644.return",
      "_method" : "---java.util.Map.getValue@POLYN434644 in line [00843]",
      "_target" : "java.io.FileInputStream.channel",
      "_risk" : "//QC-JAVCWE099[00843] In org.apache.kafka.common.network.Selector.clear@POLYN429987[00843] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.FileInputStream.channel",
      "_method" : "---dummymethode in line [01029]",
      "_target" : "java.util.Map.values@POLYN432698.return",
      "_risk" : "//QC-JAVCWE099[01029] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN437894[01029] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "6",
      "_source" : "java.util.Map.values@POLYN432698.return",
      "_method" : "---java.util.Map.values@POLYN432698 in line [03486]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[03486] In org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1138823[03486] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "partition",
      "_method" : "---dummymethode in line [01521]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---dummymethode in line [01264]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529995.tp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529995.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341043 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341043.tp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341043.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00058] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083[00058] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "20",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "9",
      "_source" : "org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToThreads@POLYN408436.assignment",
      "_method" : "---dummymethode in line [01178]",
      "_target" : "java.util.Map.values@POLYN432698.return",
      "_risk" : "//QC-JAVCWE099[01178] In org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToThreads@POLYN408436[01178] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "8",
      "_source" : "java.util.Map.values@POLYN432698.return",
      "_method" : "---java.util.Map.values@POLYN432698 in line [01027]",
      "_target" : "java.io.FileInputStream.channel",
      "_risk" : "//QC-JAVCWE099[01027] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN437894[01027] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.FileInputStream.channel",
      "_method" : "---dummymethode in line [01029]",
      "_target" : "java.util.Map.values@POLYN432698.return",
      "_risk" : "//QC-JAVCWE099[01029] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN437894[01029] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "6",
      "_source" : "java.util.Map.values@POLYN432698.return",
      "_method" : "---java.util.Map.values@POLYN432698 in line [03486]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[03486] In org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1138823[03486] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "partition",
      "_method" : "---dummymethode in line [01521]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---dummymethode in line [01264]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529995.tp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529995.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341043 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341043.tp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341043.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00058] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083[00058] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "21",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "9",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer.getSamePartitions@POLYN169815.partitions",
      "_method" : "---dummymethode in line [00166]",
      "_target" : "java.util.Map.values@POLYN432698.return",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer.getSamePartitions@POLYN169815[00166] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "8",
      "_source" : "java.util.Map.values@POLYN432698.return",
      "_method" : "---java.util.Map.values@POLYN432698 in line [01027]",
      "_target" : "java.io.FileInputStream.channel",
      "_risk" : "//QC-JAVCWE099[01027] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN437894[01027] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.FileInputStream.channel",
      "_method" : "---dummymethode in line [01029]",
      "_target" : "java.util.Map.values@POLYN432698.return",
      "_risk" : "//QC-JAVCWE099[01029] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN437894[01029] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "6",
      "_source" : "java.util.Map.values@POLYN432698.return",
      "_method" : "---java.util.Map.values@POLYN432698 in line [03486]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[03486] In org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1138823[03486] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "partition",
      "_method" : "---dummymethode in line [01521]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---dummymethode in line [01264]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529995.tp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529995.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341043 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341043.tp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341043.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00058] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083[00058] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "22",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "9",
      "_source" : "org.apache.kafka.trogdor.workload.ConsumeBenchWorker.Prepare.consumeTasks@POLYN228591.tasks",
      "_method" : "---dummymethode in line [00142]",
      "_target" : "java.util.Map.values@POLYN432698.return",
      "_risk" : "//QC-JAVCWE099[00142] In org.apache.kafka.trogdor.workload.ConsumeBenchWorker.Prepare.consumeTasks@POLYN228591[00142] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "8",
      "_source" : "java.util.Map.values@POLYN432698.return",
      "_method" : "---java.util.Map.values@POLYN432698 in line [01027]",
      "_target" : "java.io.FileInputStream.channel",
      "_risk" : "//QC-JAVCWE099[01027] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN437894[01027] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.FileInputStream.channel",
      "_method" : "---dummymethode in line [01029]",
      "_target" : "java.util.Map.values@POLYN432698.return",
      "_risk" : "//QC-JAVCWE099[01029] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN437894[01029] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "6",
      "_source" : "java.util.Map.values@POLYN432698.return",
      "_method" : "---java.util.Map.values@POLYN432698 in line [03486]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[03486] In org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1138823[03486] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "partition",
      "_method" : "---dummymethode in line [01521]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---dummymethode in line [01264]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529995.tp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529995.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341043 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341043.tp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341043.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00058] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083[00058] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "23",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.util.Map.getKey@POLYN434311.return",
      "_method" : "---java.util.Map.getKey@POLYN434311 in line [00434]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[00434] In org.apache.kafka.connect.runtime.WorkerSinkTask.commitOffsets@POLYN297425[00434] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "partition",
      "_method" : "---dummymethode in line [01521]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---dummymethode in line [01264]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529995.tp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529995.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341043 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341043.tp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341043.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00058] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083[00058] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "24",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "8",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readInt@POLYN895390.v",
      "_method" : "---dummymethode in line [03143]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readInt@POLYN895390.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readInt@POLYN895390.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readInt@POLYN895390 in line [01023]",
      "_target" : "java.io.ObjectInputStream.readInt@POLYN808038.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.readInt@POLYN808038.return",
      "_method" : "---java.io.ObjectInputStream.readInt@POLYN808038 in line [00057]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[00057] In org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.readTaskIdFrom@POLYN158777[00057] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "partition",
      "_method" : "---dummymethode in line [01521]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---dummymethode in line [01264]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529995.tp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529995.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341043 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341043.tp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341043.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00058] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083[00058] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "25",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "8",
      "_source" : "java.io.BufferedInputStream.read@POLYN244484.0",
      "_method" : "---dummymethode in line [00340]",
      "_target" : "java.io.BufferedInputStream.read@POLYN244484.return",
      "_risk" : "//QC-JAVCWE099[00340] In java.io.BufferedInputStream.read@POLYN244484[00340] source data PATHtainted (java.io.BufferedInputStream.read)"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedInputStream.read@POLYN244484.return",
      "_method" : "---java.io.BufferedInputStream.read@POLYN244484 in line [00244]",
      "_target" : "record",
      "_risk" : "//QC-JAVCWE099[00244] In org.apache.kafka.raft.internals.RecordsIterator.readRecord@POLYN180173[00244] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "record",
      "_method" : "---dummymethode in line [00188]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181748.result",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181748.result",
      "_method" : "---dummymethode in line [00190]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181748.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181748.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181748 in line [00091]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175995.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175995.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175995 in line [00064]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.project@POLYN174944.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.project@POLYN174944.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.project@POLYN174944 in line [00152]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN180615.retKey",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN180615.retKey",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00154]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00154] In org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN180615[00154] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "26",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "9",
      "_source" : "0",
      "_method" : "---dummymethode in line [00343]",
      "_target" : "java.io.BufferedInputStream.read@POLYN244484.n",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.io.BufferedInputStream.read@POLYN244484.n",
      "_method" : "---dummymethode in line [00350]",
      "_target" : "java.io.BufferedInputStream.read@POLYN244484.return",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedInputStream.read@POLYN244484[00350] source data PATHtainted (java.io.BufferedInputStream.read)"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedInputStream.read@POLYN244484.return",
      "_method" : "---java.io.BufferedInputStream.read@POLYN244484 in line [00244]",
      "_target" : "record",
      "_risk" : "//QC-JAVCWE099[00244] In org.apache.kafka.raft.internals.RecordsIterator.readRecord@POLYN180173[00244] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "record",
      "_method" : "---dummymethode in line [00188]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181748.result",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181748.result",
      "_method" : "---dummymethode in line [00190]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181748.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181748.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181748 in line [00091]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175995.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175995.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175995 in line [00064]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.project@POLYN174944.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.project@POLYN174944.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.project@POLYN174944 in line [00152]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN180615.retKey",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN180615.retKey",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00154]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00154] In org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN180615[00154] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "27",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "9",
      "_source" : "java.io.BufferedInputStream.read@POLYN244484.nread",
      "_method" : "---dummymethode in line [00348]",
      "_target" : "java.io.BufferedInputStream.read@POLYN244484.n",
      "_risk" : "//QC-JAVCWE099[00348] In java.io.BufferedInputStream.read@POLYN244484[00348] source data PATHtainted (java.io.BufferedInputStream.read)"
    }, {
      "_id" : "8",
      "_source" : "java.io.BufferedInputStream.read@POLYN244484.n",
      "_method" : "---dummymethode in line [00350]",
      "_target" : "java.io.BufferedInputStream.read@POLYN244484.return",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedInputStream.read@POLYN244484[00350] source data PATHtainted (java.io.BufferedInputStream.read)"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedInputStream.read@POLYN244484.return",
      "_method" : "---java.io.BufferedInputStream.read@POLYN244484 in line [00244]",
      "_target" : "record",
      "_risk" : "//QC-JAVCWE099[00244] In org.apache.kafka.raft.internals.RecordsIterator.readRecord@POLYN180173[00244] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "record",
      "_method" : "---dummymethode in line [00188]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181748.result",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181748.result",
      "_method" : "---dummymethode in line [00190]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181748.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181748.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181748 in line [00091]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175995.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175995.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175995 in line [00064]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.project@POLYN174944.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.project@POLYN174944.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.project@POLYN174944 in line [00152]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN180615.retKey",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN180615.retKey",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00154]",
      "_target" : "java.util.HashMap.put@POLYN621128.key",
      "_risk" : "//QC-JAVCWE099[00154] In org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN180615[00154] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "28",
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
    "_id" : "29",
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
    "_id" : "30",
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
    "_id" : "31",
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
    "_id" : "32",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.util.HashMap.Node@POLYN606342.value",
      "_method" : "---dummymethode in line [00287]",
      "_target" : "java.util.HashMap.value",
      "_risk" : "//QC-JAVCWE099[00287] In java.util.HashMap.Node.Node@POLYN606342[00287] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.value",
      "_method" : "---dummymethode in line [00292]",
      "_target" : "java.util.HashMap.getValue@POLYN606877.return",
      "_risk" : "//QC-JAVCWE099[00292] In java.util.HashMap.Node.getValue@POLYN606877[00292] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getValue@POLYN606877.return",
      "_method" : "---java.util.HashMap.getValue@POLYN606877 in line [00162]",
      "_target" : "org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN190347.partitions",
      "_risk" : "//QC-JAVCWE099[00162] In org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN190347[00162] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN190347.partitions",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00168]",
      "_target" : "java.util.HashMap.put@POLYN621128.value",
      "_risk" : "//QC-JAVCWE099[00168] In org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN190347[00168] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "33",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.util.HashMap.setValue@POLYN607296.newValue",
      "_method" : "---dummymethode in line [00301]",
      "_target" : "java.util.HashMap.value",
      "_risk" : "//QC-JAVCWE099[00301] In java.util.HashMap.Node.setValue@POLYN607296[00301] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.value",
      "_method" : "---dummymethode in line [00292]",
      "_target" : "java.util.HashMap.getValue@POLYN606877.return",
      "_risk" : "//QC-JAVCWE099[00292] In java.util.HashMap.Node.getValue@POLYN606877[00292] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getValue@POLYN606877.return",
      "_method" : "---java.util.HashMap.getValue@POLYN606877 in line [00162]",
      "_target" : "org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN190347.partitions",
      "_risk" : "//QC-JAVCWE099[00162] In org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN190347[00162] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN190347.partitions",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00168]",
      "_target" : "java.util.HashMap.put@POLYN621128.value",
      "_risk" : "//QC-JAVCWE099[00168] In org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN190347[00168] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "34",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.lang.Long.MAX_VALUE",
      "_method" : "---dummymethode in line [00438]",
      "_target" : "java.util.HashMap.value",
      "_risk" : "//QC-JAVCWE099[00438] In org.apache.kafka.streams.state.internals.InMemoryTimeOrderedKeyValueBuffer.evictWhile@POLYN241287[00438] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.value",
      "_method" : "---dummymethode in line [00292]",
      "_target" : "java.util.HashMap.getValue@POLYN606877.return",
      "_risk" : "//QC-JAVCWE099[00292] In java.util.HashMap.Node.getValue@POLYN606877[00292] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getValue@POLYN606877.return",
      "_method" : "---java.util.HashMap.getValue@POLYN606877 in line [00162]",
      "_target" : "org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN190347.partitions",
      "_risk" : "//QC-JAVCWE099[00162] In org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN190347[00162] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN190347.partitions",
      "_method" : "---java.util.HashMap.put@POLYN621128 in line [00168]",
      "_target" : "java.util.HashMap.put@POLYN621128.value",
      "_risk" : "//QC-JAVCWE099[00168] In org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN190347[00168] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "35",
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
    "_id" : "36",
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
    "_id" : "37",
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
    "_id" : "38",
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
    "_id" : "39",
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
    "_id" : "40",
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
    "_id" : "41",
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
    "_id" : "42",
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
    "_id" : "43",
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
    "_id" : "44",
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
    "_id" : "45",
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
    "_id" : "46",
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
    "_id" : "47",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN153784.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN369717 in line [00067]",
      "_target" : "java.io.PrintStream.println@POLYN369717.x",
      "_risk" : "//QC-JAVCWE099[00067] In org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN153784[00067] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
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
    "_id" : "48",
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
    "_id" : "49",
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
    "_id" : "50",
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
    "_id" : "51",
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
    "_id" : "52",
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
    "_id" : "53",
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
    "_id" : "54",
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
    "_id" : "55",
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
    "_id" : "56",
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
    "_id" : "57",
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
    "_id" : "58",
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
    "_id" : "59",
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
    "_id" : "60",
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
    "_id" : "61",
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
    "_id" : "62",
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
    "_id" : "63",
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
    "_id" : "64",
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
    "_id" : "65",
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
    "_id" : "66",
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
    "_id" : "67",
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
    "_id" : "68",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "keySet",
      "_method" : "---dummymethode in line [00903]",
      "_target" : "java.util.HashMap.keySet@POLYN639315.ks",
      "_risk" : "//QC-JAVCWE099[00903] In java.util.HashMap.keySet@POLYN639315[00903] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.keySet@POLYN639315.ks",
      "_method" : "---dummymethode in line [00908]",
      "_target" : "java.util.HashMap.keySet@POLYN639315.return",
      "_risk" : "//QC-JAVCWE099[00908] In java.util.HashMap.keySet@POLYN639315[00908] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.keySet@POLYN639315.return",
      "_method" : "---java.util.HashMap.keySet@POLYN639315 in line [01379]",
      "_target" : "org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN413814.partitions",
      "_risk" : "//QC-JAVCWE099[01379] In org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN413814[01379] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN413814.partitions",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.removeAll@POLYN1658718 in line [01386]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.removeAll@POLYN1658718.c",
      "_risk" : "//QC-JAVCWE099[01386] In org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN413814[01386] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "69",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.util.HashMap.KeySet.KeySet@POLYN639678.return",
      "_method" : "---java.util.HashMap.KeySet.KeySet@POLYN639678 in line [00905]",
      "_target" : "java.util.HashMap.keySet@POLYN639315.ks",
      "_risk" : "//QC-JAVCWE099[00905] In java.util.HashMap.keySet@POLYN639315[00905] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.keySet@POLYN639315.ks",
      "_method" : "---dummymethode in line [00908]",
      "_target" : "java.util.HashMap.keySet@POLYN639315.return",
      "_risk" : "//QC-JAVCWE099[00908] In java.util.HashMap.keySet@POLYN639315[00908] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.keySet@POLYN639315.return",
      "_method" : "---java.util.HashMap.keySet@POLYN639315 in line [01379]",
      "_target" : "org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN413814.partitions",
      "_risk" : "//QC-JAVCWE099[01379] In org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN413814[01379] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN413814.partitions",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.removeAll@POLYN1658718 in line [01386]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.removeAll@POLYN1658718.c",
      "_risk" : "//QC-JAVCWE099[01386] In org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN413814[01386] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "70",
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
    "_id" : "71",
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
    "_id" : "72",
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
    "_id" : "73",
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
    "_id" : "74",
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
    "_id" : "75",
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
    "_id" : "76",
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
    "_id" : "77",
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
    "_id" : "78",
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
    "_id" : "79",
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
    "_id" : "80",
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
      "_method" : "---java.net.Socket.getInetAddress@POLYN477476 in line [00376]",
      "_target" : "org.apache.kafka.common.network.KafkaChannel.socketDescription@POLYN261722.return",
      "_risk" : "//QC-JAVCWE099[00376] In org.apache.kafka.common.network.KafkaChannel.socketDescription@POLYN261722[00376] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "81",
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
    "_id" : "82",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "kafka.tools.StreamsResetter.run@POLYN262997.properties",
      "_method" : "---java.util.HashMap.putAll@POLYN632008 in line [00171]",
      "_target" : "java.util.HashMap.putAll@POLYN632008.m",
      "_risk" : "//QC-JAVCWE099[00171] In kafka.tools.StreamsResetter.run@POLYN262997[00171] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN632008.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN615223 in line [00782]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN615223.m",
      "_risk" : "//QC-JAVCWE099[00782] In java.util.HashMap.putAll@POLYN632008[00782] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "83",
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
    "_id" : "84",
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
    "_id" : "85",
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
    "_id" : "86",
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
    "_id" : "87",
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
    "_id" : "88",
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
    "_id" : "89",
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
    "_id" : "90",
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
    "_id" : "91",
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
    "_id" : "92",
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
    "_id" : "93",
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
    "_id" : "94",
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
    "_id" : "95",
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
    "_id" : "96",
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
    "_id" : "97",
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
    "_id" : "98",
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
    "_id" : "99",
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
    "_id" : "100",
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
    "_id" : "101",
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
    "_id" : "102",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.tools.TransactionsCommand.printRow@POLYN311754.rowBuilder",
      "_method" : "---java.io.PrintStream.println@POLYN366550 in line [00929]",
      "_target" : "java.io.PrintStream.println@POLYN366550.x",
      "_risk" : "//QC-JAVCWE099[00929] In org.apache.kafka.tools.TransactionsCommand.printRow@POLYN311754[00929] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN366550.x",
      "_method" : "---java.io.PrintStream.print@POLYN361762 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN361762.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN366550[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "103",
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
    "_id" : "104",
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
    "_id" : "105",
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
    "_id" : "106",
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
    "_id" : "107",
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
    "_id" : "108",
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
    "_id" : "109",
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
    "_id" : "110",
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
    "_id" : "111",
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
    "_id" : "112",
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
    "_id" : "113",
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
    "_libelle" : "org.apache.kafka.connect.mirror.OffsetSyncStore.this"
  }, {
    "_id" : "R1",
    "_libelle" : "org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN154317.pollTimeout"
  }, {
    "_id" : "R2",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.this"
  }, {
    "_id" : "R3",
    "_libelle" : "org.apache.kafka.clients.Metadata.this"
  }, {
    "_id" : "R4",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335503.partition"
  }, {
    "_id" : "R5",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335503.offsetResetStrategy"
  }, {
    "_id" : "R6",
    "_libelle" : "java.io.BufferedInputStream.this"
  }, {
    "_id" : "R7",
    "_libelle" : "org.apache.kafka.common.metrics.Sensor.this"
  }, {
    "_id" : "R8",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.Fetcher.this"
  }, {
    "_id" : "R9",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.unsent"
  }, {
    "_id" : "R10",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN332893.tp"
  }, {
    "_id" : "R11",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN332893.highWatermark"
  }, {
    "_id" : "R12",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN333083.tp"
  }, {
    "_id" : "R13",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN333083.logStartOffset"
  }, {
    "_id" : "R14",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN333273.tp"
  }, {
    "_id" : "R15",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN333273.lastStableOffset"
  }, {
    "_id" : "R16",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.this"
  }, {
    "_id" : "R17",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341043.tp"
  }, {
    "_id" : "R18",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN325983.tp"
  }, {
    "_id" : "R19",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN325983.position"
  }, {
    "_id" : "R20",
    "_libelle" : "org.apache.kafka.trogdor.workload.RoundTripWorker.this"
  }, {
    "_id" : "R21",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.this"
  }, {
    "_id" : "R22",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN318547.assignments"
  }, {
    "_id" : "R23",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.this"
  }, {
    "_id" : "R24",
    "_libelle" : "org.apache.kafka.streams.processor.internals.GlobalStreamThread.this"
  }, {
    "_id" : "R25",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.this"
  }, {
    "_id" : "R26",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258984.cleanupDelayMs"
  }, {
    "_id" : "R27",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255979.taskId"
  }, {
    "_id" : "R28",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadLevelSensors"
  }, {
    "_id" : "R29",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadLevelMetrics"
  }, {
    "_id" : "R30",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.changeThreadCount"
  }, {
    "_id" : "R31",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.stateLock"
  }, {
    "_id" : "R32",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.threads"
  }, {
    "_id" : "R33",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamThread.stateLock"
  }, {
    "_id" : "R34",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.this"
  }, {
    "_id" : "R35",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.consumerRecord@POLYN202281.consumedMessage"
  }, {
    "_id" : "R36",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.this"
  }, {
    "_id" : "R37",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN163688.lastVersion"
  }, {
    "_id" : "R38",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN163688.timeoutMs"
  }, {
    "_id" : "R39",
    "_libelle" : "org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN262753.topic"
  }, {
    "_id" : "R40",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN325079.dq"
  }, {
    "_id" : "R41",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.this"
  }, {
    "_id" : "R42",
    "_libelle" : "org.apache.kafka.clients.producer.internals.IncompleteBatches.incomplete"
  }, {
    "_id" : "R43",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.this"
  }, {
    "_id" : "R44",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN372482.topicPartition"
  }, {
    "_id" : "R45",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN384805.exception"
  }, {
    "_id" : "R46",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN375291.exception"
  }, {
    "_id" : "R47",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418001.isDisconnected"
  }, {
    "_id" : "R48",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418001.cause"
  }, {
    "_id" : "R49",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417647.error"
  }, {
    "_id" : "R50",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN378038.tp"
  }, {
    "_id" : "R51",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.abortBatches@POLYN358640.dq"
  }, {
    "_id" : "R52",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN393787.e"
  }, {
    "_id" : "R53",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161647.topic"
  }, {
    "_id" : "R54",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161647.nowMs"
  }, {
    "_id" : "R55",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN349161.deque"
  }, {
    "_id" : "R56",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN376301.topicPartition"
  }, {
    "_id" : "R57",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN380409.topicPartition"
  }, {
    "_id" : "R58",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN380409.increment"
  }, {
    "_id" : "R59",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.updateEstimation@POLYN155282.compressionRatioForTopic"
  }, {
    "_id" : "R60",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN385400.batch"
  }, {
    "_id" : "R61",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN385400.exception"
  }, {
    "_id" : "R62",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN385400.adjustSequenceNumbers"
  }, {
    "_id" : "R63",
    "_libelle" : "java.net.Socket.this"
  }, {
    "_id" : "R64",
    "_libelle" : "java.net.Socket.setSendBufferSize@POLYN493499.size"
  }, {
    "_id" : "R65",
    "_libelle" : "java.net.Socket.setReceiveBufferSize@POLYN496202.size"
  }, {
    "_id" : "R66",
    "_libelle" : "java.io.PipedOutputStream.this"
  }, {
    "_id" : "R67",
    "_libelle" : "java.io.PipedOutputStream.connect@POLYN170667.snk"
  }, {
    "_id" : "R68",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.this"
  }, {
    "_id" : "R69",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN233056.request"
  }, {
    "_id" : "R70",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN233056.cb"
  }, {
    "_id" : "R71",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerConnector.this"
  }, {
    "_id" : "R72",
    "_libelle" : "org.apache.kafka.connect.runtime.Worker.this"
  }, {
    "_id" : "R73",
    "_libelle" : "org.apache.kafka.connect.runtime.ConnectMetrics.this"
  }, {
    "_id" : "R74",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN296416.sensor"
  }, {
    "_id" : "R75",
    "_libelle" : "java.io.BufferedOutputStream.this"
  }, {
    "_id" : "R76",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN160582.b"
  }, {
    "_id" : "R77",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN160582.off"
  }, {
    "_id" : "R78",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN160582.len"
  }, {
    "_id" : "R79",
    "_libelle" : "java.io.Writer.lock"
  }, {
    "_id" : "R80",
    "_libelle" : "java.io.BufferedInputStream.mark@POLYN248441.readlimit"
  }, {
    "_id" : "R81",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.this"
  }, {
    "_id" : "R82",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN162241.prefix"
  }, {
    "_id" : "R83",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN162241.id"
  }, {
    "_id" : "R84",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN162241.metrics"
  }, {
    "_id" : "R85",
    "_libelle" : "org.apache.kafka.clients.Metadata.bootstrap@POLYN251833.addresses"
  }, {
    "_id" : "R86",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161461.prefix"
  }, {
    "_id" : "R87",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161461.id"
  }, {
    "_id" : "R88",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161461.metrics"
  }, {
    "_id" : "R89",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161461.nowMs"
  }, {
    "_id" : "R90",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.remove@POLYN149261.nodeId"
  }, {
    "_id" : "R91",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.update@POLYN148989.nodeId"
  }, {
    "_id" : "R92",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.update@POLYN148989.nodeApiVersions"
  }, {
    "_id" : "R93",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462011.f"
  }, {
    "_id" : "R94",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541441.f"
  }, {
    "_id" : "R95",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.treeifyBin@POLYN1557395.b"
  }, {
    "_id" : "R96",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.this"
  }, {
    "_id" : "R97",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.this"
  }, {
    "_id" : "R98",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193987.key"
  }, {
    "_id" : "R99",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193987.value"
  }, {
    "_id" : "R100",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.this"
  }, {
    "_id" : "R101",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN274070.connector"
  }, {
    "_id" : "R102",
    "_libelle" : "org.apache.kafka.clients.admin.KafkaAdminClient.this"
  }, {
    "_id" : "R103",
    "_libelle" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.this"
  }, {
    "_id" : "R104",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN252225.response"
  }, {
    "_id" : "R105",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN252225.isPartialUpdate"
  }, {
    "_id" : "R106",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN252225.nowMs"
  }, {
    "_id" : "R107",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN252799.requestVersion"
  }, {
    "_id" : "R108",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN252799.response"
  }, {
    "_id" : "R109",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN252799.isPartialUpdate"
  }, {
    "_id" : "R110",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN252799.nowMs"
  }, {
    "_id" : "R111",
    "_libelle" : "org.apache.kafka.common.requests.MetadataResponse.data"
  }, {
    "_id" : "R112",
    "_libelle" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.lock"
  }, {
    "_id" : "R113",
    "_libelle" : "java.io.File.this"
  }, {
    "_id" : "R114",
    "_libelle" : "java.io.File.readObject@POLYN633154.s"
  }, {
    "_id" : "R115",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.this"
  }, {
    "_id" : "R116",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN236200.key"
  }, {
    "_id" : "R117",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN236200.value"
  }, {
    "_id" : "R118",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN236200.windowStartTimestamp"
  }, {
    "_id" : "R119",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaConfigBackingStore.lock"
  }, {
    "_id" : "R120",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.this"
  }, {
    "_id" : "R121",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221704.initialTopologies"
  }, {
    "_id" : "R122",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.abortUndrainedBatches@POLYN359262.dq"
  }, {
    "_id" : "R123",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN393609.request"
  }, {
    "_id" : "R124",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.this"
  }, {
    "_id" : "R125",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN259429.key"
  }, {
    "_id" : "R126",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN259429.value"
  }, {
    "_id" : "R127",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN259429.windowStartTimestamp"
  }, {
    "_id" : "R128",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN228605.connName"
  }, {
    "_id" : "R129",
    "_libelle" : "org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitableRecords"
  }, {
    "_id" : "R130",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.this"
  }, {
    "_id" : "R131",
    "_libelle" : "java.util.Hashtable.this"
  }, {
    "_id" : "R132",
    "_libelle" : "java.util.Hashtable.putAll@POLYN429352.t"
  }, {
    "_id" : "R133",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.this"
  }, {
    "_id" : "R134",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN242981.topic"
  }, {
    "_id" : "R135",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN242981.partitions"
  }, {
    "_id" : "R136",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN241676.newOffsets"
  }, {
    "_id" : "R137",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN242100.newOffsets"
  }, {
    "_id" : "R138",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.nodeLevelSensors"
  }, {
    "_id" : "R139",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226727.connName"
  }, {
    "_id" : "R140",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226727.config"
  }, {
    "_id" : "R141",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226727.allowReplace"
  }, {
    "_id" : "R142",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226727.callback"
  }, {
    "_id" : "R143",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226727.configInfos"
  }, {
    "_id" : "R144",
    "_libelle" : "org.apache.kafka.tools.ThroughputThrottler.this"
  }, {
    "_id" : "R145",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224746.connName"
  }, {
    "_id" : "R146",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224746.callback"
  }, {
    "_id" : "R147",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.this"
  }, {
    "_id" : "R148",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN390919.now"
  }, {
    "_id" : "R149",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN230440.taskId"
  }, {
    "_id" : "R150",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN230440.cb"
  }, {
    "_id" : "R151",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.sourceRecord@POLYN202052.preTransformRecord"
  }, {
    "_id" : "R152",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.pollTasks"
  }, {
    "_id" : "R153",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN323011.tp"
  }, {
    "_id" : "R154",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN323011.position"
  }, {
    "_id" : "R155",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN420622.reason"
  }, {
    "_id" : "R156",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN420622.shouldResetMemberId"
  }, {
    "_id" : "R157",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN419923.reason"
  }, {
    "_id" : "R158",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN419923.shouldResetMemberId"
  }, {
    "_id" : "R159",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.taskLevelSensors"
  }, {
    "_id" : "R160",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN332155.tp"
  }, {
    "_id" : "R161",
    "_libelle" : "org.apache.kafka.common.security.oauthbearer.internals.expiring.ExpiringCredentialRefreshingLogin.mandatoryClassToSynchronizeOnPriorToRefresh"
  }, {
    "_id" : "R162",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN179486.partition"
  }, {
    "_id" : "R163",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN179486.offset"
  }, {
    "_id" : "R164",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN340340.tp"
  }, {
    "_id" : "R165",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN340491.tp"
  }, {
    "_id" : "R166",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.this"
  }, {
    "_id" : "R167",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.openIterators"
  }, {
    "_id" : "R168",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN384253.batch"
  }, {
    "_id" : "R169",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN384253.response"
  }, {
    "_id" : "R170",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTask.this"
  }, {
    "_id" : "R171",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.this"
  }, {
    "_id" : "R172",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165668.reader"
  }, {
    "_id" : "R173",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190741.newCacheSizeBytes"
  }, {
    "_id" : "R174",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerSourceTask.this"
  }, {
    "_id" : "R175",
    "_libelle" : "org.apache.kafka.connect.util.ConvertingFutureCallback.this"
  }, {
    "_id" : "R176",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.taskDirCreationLock"
  }, {
    "_id" : "R177",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.NamedTopologyBuilder.this"
  }, {
    "_id" : "R178",
    "_libelle" : "org.apache.kafka.streams.StreamsBuilder.this"
  }, {
    "_id" : "R179",
    "_libelle" : "org.apache.kafka.clients.Metadata.failedUpdate@POLYN264461.now"
  }, {
    "_id" : "R180",
    "_libelle" : "org.apache.kafka.connect.file.FileStreamSourceTask.this"
  }, {
    "_id" : "R181",
    "_libelle" : "java.io.PrintStream.this"
  }, {
    "_id" : "R182",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN231853.connName"
  }, {
    "_id" : "R183",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN231853.cb"
  }, {
    "_id" : "R184",
    "_libelle" : "java.io.File.writeObject@POLYN632773.s"
  }, {
    "_id" : "R185",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN314404.pattern"
  }, {
    "_id" : "R186",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN314404.listener"
  }, {
    "_id" : "R187",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelSensors"
  }, {
    "_id" : "R188",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.rebalance@POLYN228565.newAssignment"
  }, {
    "_id" : "R189",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN229174.pattern"
  }, {
    "_id" : "R190",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN229174.listener"
  }, {
    "_id" : "R191",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN237643.offsets"
  }, {
    "_id" : "R192",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237027.offsets"
  }, {
    "_id" : "R193",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237027.callback"
  }, {
    "_id" : "R194",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN238368.timeout"
  }, {
    "_id" : "R195",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelMetrics"
  }, {
    "_id" : "R196",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.splitAndReenqueue@POLYN336257.partitionDequeue"
  }, {
    "_id" : "R197",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.setEstimation@POLYN157230.compressionRatioForTopic"
  }, {
    "_id" : "R198",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN330588.tp"
  }, {
    "_id" : "R199",
    "_libelle" : "org.apache.kafka.clients.producer.MockProducer.this"
  }, {
    "_id" : "R200",
    "_libelle" : "org.apache.kafka.connect.storage.FileOffsetBackingStore.this"
  }, {
    "_id" : "R201",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN198245.entries"
  }, {
    "_id" : "R202",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323602.tp"
  }, {
    "_id" : "R203",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323602.position"
  }, {
    "_id" : "R204",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323602.requestedResetStrategy"
  }, {
    "_id" : "R205",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.this"
  }, {
    "_id" : "R206",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN182126.key"
  }, {
    "_id" : "R207",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN182126.value"
  }, {
    "_id" : "R208",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.this"
  }, {
    "_id" : "R209",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN174247.key"
  }, {
    "_id" : "R210",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN174247.value"
  }, {
    "_id" : "R211",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN238748.partition"
  }, {
    "_id" : "R212",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN238748.offset"
  }, {
    "_id" : "R213",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335698.partitions"
  }, {
    "_id" : "R214",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335698.offsetResetStrategy"
  }, {
    "_id" : "R215",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN163202.reader"
  }, {
    "_id" : "R216",
    "_libelle" : "java.net.ServerSocket.this"
  }, {
    "_id" : "R217",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.this"
  }, {
    "_id" : "R218",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163794.consumerRecords"
  }, {
    "_id" : "R219",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.this"
  }, {
    "_id" : "R220",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.addStateStore@POLYN236582.builder"
  }, {
    "_id" : "R221",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seekToBeginning@POLYN241442.partitions"
  }, {
    "_id" : "R222",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seekToEnd@POLYN241866.partitions"
  }, {
    "_id" : "R223",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417846.cause"
  }, {
    "_id" : "R224",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420920.api"
  }, {
    "_id" : "R225",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420920.error"
  }, {
    "_id" : "R226",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420920.shouldResetMemberId"
  }, {
    "_id" : "R227",
    "_libelle" : "java.net.ServerSocket.setSoTimeout@POLYN322450.timeout"
  }, {
    "_id" : "R228",
    "_libelle" : "java.net.ServerSocket.setReceiveBufferSize@POLYN328729.size"
  }, {
    "_id" : "R229",
    "_libelle" : "java.net.Socket.setSoTimeout@POLYN491724.timeout"
  }, {
    "_id" : "R230",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1498617.r"
  }, {
    "_id" : "R231",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1498617.f"
  }, {
    "_id" : "R232",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294.r"
  }, {
    "_id" : "R233",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1510294.f"
  }, {
    "_id" : "R234",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.merge@POLYN1517948.f"
  }, {
    "_id" : "R235",
    "_libelle" : "java.io.PipedInputStream.this"
  }, {
    "_id" : "R236",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN219422.b"
  }, {
    "_id" : "R237",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN220529.b"
  }, {
    "_id" : "R238",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN220529.off"
  }, {
    "_id" : "R239",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN220529.len"
  }, {
    "_id" : "R240",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.replaceNode@POLYN1467563.f"
  }, {
    "_id" : "R241",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.pause@POLYN243256.partitions"
  }, {
    "_id" : "R242",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.resume@POLYN243578.partitions"
  }, {
    "_id" : "R243",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333713.tp"
  }, {
    "_id" : "R244",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333713.preferredReadReplicaId"
  }, {
    "_id" : "R245",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333713.timeMs"
  }, {
    "_id" : "R246",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN336262.partitions"
  }, {
    "_id" : "R247",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN336262.nextAllowResetTimeMs"
  }, {
    "_id" : "R248",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.this"
  }, {
    "_id" : "R249",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN161222.status"
  }, {
    "_id" : "R250",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN160679.status"
  }, {
    "_id" : "R251",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN159721.b"
  }, {
    "_id" : "R252",
    "_libelle" : "java.io.PipedReader.this"
  }, {
    "_id" : "R253",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.clear@POLYN1472345.f"
  }, {
    "_id" : "R254",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfPresent@POLYN1504908.f"
  }, {
    "_id" : "R255",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.putAll@POLYN183210.entries"
  }, {
    "_id" : "R256",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN256940.key"
  }, {
    "_id" : "R257",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN256940.value"
  }, {
    "_id" : "R258",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN199672.namespace"
  }, {
    "_id" : "R259",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheLevelSensors"
  }, {
    "_id" : "R260",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.assignPartitionsLock"
  }, {
    "_id" : "R261",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.this"
  }, {
    "_id" : "R262",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.writeEntries@POLYN154631.committedOffsets"
  }, {
    "_id" : "R263",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN228967.topics"
  }, {
    "_id" : "R264",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230791.topics"
  }, {
    "_id" : "R265",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230791.listener"
  }, {
    "_id" : "R266",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230605.pattern"
  }, {
    "_id" : "R267",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237974.callback"
  }, {
    "_id" : "R268",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN340637.partitions"
  }, {
    "_id" : "R269",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN340637.nextRetryTimeMs"
  }, {
    "_id" : "R270",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeReporter@POLYN302691.reporter"
  }, {
    "_id" : "R271",
    "_libelle" : "org.apache.kafka.common.metrics.JmxReporter.LOCK"
  }, {
    "_id" : "R272",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.this"
  }, {
    "_id" : "R273",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN160534.status"
  }, {
    "_id" : "R274",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN160155.status"
  }, {
    "_id" : "R275",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.this"
  }, {
    "_id" : "R276",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.configure@POLYN173604.configs"
  }, {
    "_id" : "R277",
    "_libelle" : "java.io.PipedReader.receive@POLYN199461.c"
  }, {
    "_id" : "R278",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.this"
  }, {
    "_id" : "R279",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.calculateNextWindow@POLYN159642.force"
  }, {
    "_id" : "R280",
    "_libelle" : "java.io.FileInputStream.closeLock"
  }, {
    "_id" : "R281",
    "_libelle" : "java.io.FileOutputStream.closeLock"
  }, {
    "_id" : "R282",
    "_libelle" : "java.io.PipedWriter.this"
  }, {
    "_id" : "R283",
    "_libelle" : "java.io.PipedWriter.connect@POLYN169897.snk"
  }, {
    "_id" : "R284",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.reporters@POLYN201799.reporters"
  }, {
    "_id" : "R285",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.assign@POLYN231169.partitions"
  }, {
    "_id" : "R286",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.addRecord@POLYN235673.record"
  }, {
    "_id" : "R287",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setException@POLYN236618.exception"
  }, {
    "_id" : "R288",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN236749.exception"
  }, {
    "_id" : "R289",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN246825.task"
  }, {
    "_id" : "R290",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.this"
  }, {
    "_id" : "R291",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.addTransientTopics@POLYN151224.topics"
  }, {
    "_id" : "R292",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164460.requestVersion"
  }, {
    "_id" : "R293",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164460.response"
  }, {
    "_id" : "R294",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164460.isPartialUpdate"
  }, {
    "_id" : "R295",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164460.nowMs"
  }, {
    "_id" : "R296",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN165073.fatalException"
  }, {
    "_id" : "R297",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.this"
  }, {
    "_id" : "R298",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.put@POLYN145748.key"
  }, {
    "_id" : "R299",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.put@POLYN145748.value"
  }, {
    "_id" : "R300",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.addReporter@POLYN302335.reporter"
  }, {
    "_id" : "R301",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN187088.key"
  }, {
    "_id" : "R302",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.putAll@POLYN159599.entries"
  }, {
    "_id" : "R303",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.this"
  }, {
    "_id" : "R304",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.commitTransaction@POLYN152279.record"
  }, {
    "_id" : "R305",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.abortTransaction@POLYN152643.record"
  }, {
    "_id" : "R306",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN223150.callback"
  }, {
    "_id" : "R307",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN223381.connName"
  }, {
    "_id" : "R308",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN223381.callback"
  }, {
    "_id" : "R309",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN225814.connName"
  }, {
    "_id" : "R310",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN225814.config"
  }, {
    "_id" : "R311",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN225814.allowReplace"
  }, {
    "_id" : "R312",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN225814.callback"
  }, {
    "_id" : "R313",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN228979.connName"
  }, {
    "_id" : "R314",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN228979.callback"
  }, {
    "_id" : "R315",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.this"
  }, {
    "_id" : "R316",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN167459.connector"
  }, {
    "_id" : "R317",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN167459.properties"
  }, {
    "_id" : "R318",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeConnectorConfig@POLYN168078.connector"
  }, {
    "_id" : "R319",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeTaskConfigs@POLYN168429.connector"
  }, {
    "_id" : "R320",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN169077.connector"
  }, {
    "_id" : "R321",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN169077.configs"
  }, {
    "_id" : "R322",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN169962.connector"
  }, {
    "_id" : "R323",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN169962.state"
  }, {
    "_id" : "R324",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageReaderImpl.offsetReadFutures"
  }, {
    "_id" : "R325",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.setAclMutator@POLYN169837.aclMutator"
  }, {
    "_id" : "R326",
    "_libelle" : "java.io.PipedOutputStream.sink"
  }, {
    "_id" : "R327",
    "_libelle" : "java.io.PipedWriter.sink"
  }, {
    "_id" : "R328",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.this"
  }, {
    "_id" : "R329",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.write@POLYN176771.snapshot"
  }, {
    "_id" : "R330",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.topicLevelSensors"
  }, {
    "_id" : "R331",
    "_libelle" : "org.apache.kafka.streams.state.internals.DelegatingPeekingKeyValueIterator.this"
  }, {
    "_id" : "R332",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDbIterator.this"
  }, {
    "_id" : "R333",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.this"
  }, {
    "_id" : "R334",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.delay@POLYN147669.amount"
  }, {
    "_id" : "R335",
    "_libelle" : "java.io.PipedReader.receive@POLYN201139.c"
  }, {
    "_id" : "R336",
    "_libelle" : "java.io.PipedReader.receive@POLYN201139.off"
  }, {
    "_id" : "R337",
    "_libelle" : "java.io.PipedReader.receive@POLYN201139.len"
  }, {
    "_id" : "R338",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.close@POLYN246272.timeout"
  }, {
    "_id" : "R339",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.metrics@POLYN201170.errorHandlingMetrics"
  }, {
    "_id" : "R340",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.this"
  }, {
    "_id" : "R341",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN165421.newState"
  }, {
    "_id" : "R342",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN165421.now"
  }, {
    "_id" : "R343",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.setUpdateListener@POLYN170787.listener"
  } ],
  "_lesDeadlocksSequences" : [ {
    "_id" : "0",
    "_lesItems" : [ "S0:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN182821", "S0:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN196864", "S0:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN154317 (R0 in line [00067],R1 in line [00067])", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856681", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856681", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.updateAssignmentMetadataIfNeeded@POLYN858578", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.updateFetchPositions@POLYN911214", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.resetInitializingPositions@POLYN338136 (R2 in line [00695])", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336114", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335503 (R2 in line [00636],R4 in line [00636],R5 in line [00636])", "S0:java.io.BufferedInputStream.reset@POLYN249171 (R6 in line [00445])", "S0:java.io.BufferedInputStream.getBufIfOpen@POLYN237092" ]
  }, {
    "_id" : "1",
    "_lesItems" : [ "S1:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN182821", "S1:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN196864", "S1:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN154317 (R0 in line [00067],R1 in line [00067])", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856681", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856681", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859035", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859035", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN497537", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529995", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529995", "S1:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN332893 (R2 in line [00576],R10 in line [00576],R11 in line [00576])", "S1:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322492", "S1:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172283" ]
  }, {
    "_id" : "2",
    "_lesItems" : [ "S2:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN182821", "S2:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN196864", "S2:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN154317 (R0 in line [00067],R1 in line [00067])", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856681", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856681", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859035", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859035", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN497537", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529995", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529995", "S2:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN333083 (R2 in line [00580],R12 in line [00580],R13 in line [00580])", "S2:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322492", "S2:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172283" ]
  }, {
    "_id" : "3",
    "_lesItems" : [ "S3:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN182821", "S3:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN196864", "S3:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN154317 (R0 in line [00067],R1 in line [00067])", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856681", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856681", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859035", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859035", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN497537", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529995", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529995", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN333273 (R2 in line [00584],R14 in line [00584],R15 in line [00584])", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322492", "S3:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172283" ]
  }, {
    "_id" : "4",
    "_lesItems" : [ "S4:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN182821", "S4:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN196864", "S4:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN154317 (R0 in line [00067],R1 in line [00067])", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856681", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856681", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859035", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859035", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN497537", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529995", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN529995", "S4:org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341043 (R2 in line [00755],R17 in line [00755])", "S4:org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170083", "S4:java.util.HashMap.HashIterator.remove@POLYN674218", "S4:java.util.HashMap.removeNode@POLYN633320", "S4:java.util.HashMap.afterNodeRemoval@POLYN693612" ]
  }, {
    "_id" : "5",
    "_lesItems" : [ "S5:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN182821", "S5:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN196864", "S5:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN154317 (R0 in line [00067],R1 in line [00067])", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856681", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856681", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859035", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859035", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN497537", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN497537", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN499818", "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN325983 (R2 in line [00443],R18 in line [00443],R19 in line [00443])", "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322492", "S5:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172283" ]
  }, {
    "_id" : "6",
    "_lesItems" : [ "S6:org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN211234", "S6:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849696", "S6:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849696", "S6:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN409714", "S6:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN409714", "S6:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN318547 (R2 in line [00273],R22 in line [00273])", "S6:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172283" ]
  }, {
    "_id" : "7",
    "_lesItems" : [ "S7:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231764 (R133 in line [00163])", "S7:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231998 (R133 in line [00168],R152 in line [00175])", "S7:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231998 (R133 in line [00168],R152 in line [00175])", "S7:org.apache.kafka.clients.consumer.MockConsumer.updateFetchPosition@POLYN247505", "S7:org.apache.kafka.clients.consumer.MockConsumer.resetOffsetPosition@POLYN248124", "S7:org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN238987", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.seek@POLYN323201", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN323011 (R2 in line [00378],R153 in line [00378],R154 in line [00378])", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN323011 (R2 in line [00378],R153 in line [00378],R154 in line [00378])", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322492", "S7:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172283" ]
  }, {
    "_id" : "8",
    "_lesItems" : [ "S8:org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN902812", "S8:org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN902812", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN332155 (R2 in line [00561],R160 in line [00561])", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322492", "S8:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172283" ]
  }, {
    "_id" : "9",
    "_lesItems" : [ "S9:org.apache.kafka.streams.processor.internals.StreamTask.addPartitionsForOffsetReset@POLYN314865", "S9:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN893655", "S9:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN893655", "S9:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN340340 (R2 in line [00737],R164 in line [00737])", "S9:org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.pause@POLYN349676" ]
  }, {
    "_id" : "10",
    "_lesItems" : [ "S10:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN894413", "S10:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN894413", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN340491 (R2 in line [00741],R165 in line [00741])", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.resume@POLYN349783" ]
  }, {
    "_id" : "11",
    "_lesItems" : [ "S11:org.apache.kafka.clients.consumer.KafkaConsumer.subscribe@POLYN847554", "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN314404 (R2 in line [00172],R185 in line [00172],R186 in line [00172])", "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN319448" ]
  }, {
    "_id" : "12",
    "_lesItems" : [ "S12:org.apache.kafka.jmh.consumer.SubscriptionStateBenchmark.setup@POLYN155425", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN330588 (R2 in line [00529],R198 in line [00529])", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.completeValidation@POLYN347397" ]
  }, {
    "_id" : "13",
    "_lesItems" : [ "S13:org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetIfNeeded@POLYN502775", "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323602 (R2 in line [00390],R202 in line [00390],R203 in line [00390],R204 in line [00390])", "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN322857", "S13:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172283" ]
  }, {
    "_id" : "14",
    "_lesItems" : [ "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335698 (R2 in line [00640],R213 in line [00640],R214 in line [00640])", "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335698 (R2 in line [00640],R213 in line [00640],R214 in line [00640])", "S14:java.io.BufferedInputStream.reset@POLYN249171 (R6 in line [00445])", "S14:java.io.BufferedInputStream.getBufIfOpen@POLYN237092" ]
  }, {
    "_id" : "15",
    "_lesItems" : [ "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333713 (R2 in line [00596],R243 in line [00596],R244 in line [00596],R245 in line [00596])", "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333713 (R2 in line [00596],R243 in line [00596],R244 in line [00596],R245 in line [00596])", "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322492", "S15:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172283" ]
  }, {
    "_id" : "16",
    "_lesItems" : [ "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN336262 (R2 in line [00651],R246 in line [00651],R247 in line [00651])", "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN336262 (R2 in line [00651],R246 in line [00651],R247 in line [00651])", "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322492", "S16:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172283" ]
  }, {
    "_id" : "17",
    "_lesItems" : [ "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN340637 (R2 in line [00745],R268 in line [00745],R269 in line [00745])", "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN322857", "S17:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172283" ]
  }, {
    "_id" : "18",
    "_lesItems" : [ "S18:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN369336", "S18:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN383723", "S18:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN546285", "S18:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN547317", "S18:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN555058", "S18:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN555058", "S18:org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN262753 (R3 in line [00450],R39 in line [00450])" ]
  }, {
    "_id" : "19",
    "_lesItems" : [ "S19:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513921", "S19:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513921", "S19:org.apache.kafka.clients.Metadata.bootstrap@POLYN251833 (R3 in line [00238],R85 in line [00238])", "S19:org.apache.kafka.clients.MetadataCache.bootstrap@POLYN189077", "S19:java.util.Map.put@POLYN428946" ]
  }, {
    "_id" : "20",
    "_lesItems" : [ "S20:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN252225 (R3 in line [00249],R104 in line [00249],R105 in line [00249],R106 in line [00249])", "S20:org.apache.kafka.clients.Metadata.update@POLYN252799 (R3 in line [00263],R107 in line [00263],R108 in line [00263],R109 in line [00263],R110 in line [00263])", "S20:org.apache.kafka.common.ClusterResource.clusterId@POLYN147471" ]
  }, {
    "_id" : "21",
    "_lesItems" : [ "S21:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleServerDisconnect@POLYN367593", "S21:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleServerDisconnect@POLYN367593", "S21:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleFailedRequest@POLYN368534", "S21:org.apache.kafka.clients.Metadata.failedUpdate@POLYN264461 (R3 in line [00490],R179 in line [00490])" ]
  }, {
    "_id" : "22",
    "_lesItems" : [ "S22:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN233056 (R68 in line [00309],R69 in line [00309],R70 in line [00309])", "S22:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN463324", "S22:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN461111", "S22:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN459985", "S22:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN459985", "S22:org.apache.kafka.connect.runtime.Worker.stop@POLYN420615", "S22:org.apache.kafka.connect.runtime.Worker.stop@POLYN420615", "S22:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN494520 (R72 in line [01751])", "S22:org.apache.kafka.connect.runtime.ConnectMetrics.MetricGroup.close@POLYN231626 (R73 in line [00406])", "S22:org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN296416 (R74 in line [00449],R16 in line [00450])", "S22:org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN296416 (R74 in line [00449],R16 in line [00450])", "S22:java.util.HashMap.get@POLYN617768" ]
  }, {
    "_id" : "23",
    "_lesItems" : [ "S23:org.apache.kafka.common.metrics.Metrics.removeReporter@POLYN302691 (R16 in line [00584],R270 in line [00584])", "S23:org.apache.kafka.common.metrics.JmxReporter.close@POLYN198693 (R271 in line [00208])", "S23:org.apache.kafka.common.metrics.JmxReporter.unregister@POLYN198934" ]
  }, {
    "_id" : "24",
    "_lesItems" : [ "S24:org.apache.kafka.common.metrics.Metrics.addReporter@POLYN302335 (R16 in line [00576],R300 in line [00576])", "S24:java.util.concurrent.ConcurrentHashMap.add@POLYN1668596" ]
  }, {
    "_id" : "25",
    "_lesItems" : [ "S25:org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN211234", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849696", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849696", "S25:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423752 (R21 in line [01103])", "S25:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423752 (R21 in line [01103])", "S25:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.send@POLYN250472", "S25:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.UnsentRequests.put@POLYN269762 (R9 in line [00646])", "S25:java.util.concurrent.ConcurrentHashMap.add@POLYN1668596" ]
  }, {
    "_id" : "26",
    "_lesItems" : [ "S26:org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN211234", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849696", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849696", "S26:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423752 (R21 in line [01103])", "S26:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423752 (R21 in line [01103])", "S26:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.pollNoWakeup@POLYN256848", "S26:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.poll@POLYN254983", "S26:org.apache.kafka.clients.Metadata.maybeThrowAnyException@POLYN262011 (R3 in line [00428])", "S26:org.apache.kafka.clients.Metadata.clearErrorsAndMaybeThrowException@POLYN262939", "S26:org.apache.kafka.clients.Metadata.clearRecoverableErrors@POLYN264175" ]
  }, {
    "_id" : "27",
    "_lesItems" : [ "S27:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN392790 (R21 in line [00383])", "S27:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN422566", "S27:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN422758 (R21 in line [01078])", "S27:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN417192 (R21 in line [00926])", "S27:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418001 (R21 in line [00947],R47 in line [00947],R48 in line [00947])", "S27:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418001 (R21 in line [00947],R47 in line [00947],R48 in line [00947])", "S27:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.disconnectAsync@POLYN262449", "S27:org.apache.kafka.clients.NetworkClient.wakeup@POLYN346711" ]
  }, {
    "_id" : "28",
    "_lesItems" : [ "S28:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.close@POLYN416310", "S28:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN387786 (R21 in line [00240])", "S28:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN387786 (R21 in line [00240])", "S28:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417647 (R21 in line [00939],R49 in line [00939])" ]
  }, {
    "_id" : "29",
    "_lesItems" : [ "S29:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN230207", "S29:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN230207", "S29:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN390919 (R21 in line [00322],R148 in line [00322])", "S29:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.failureCause@POLYN439248", "S29:java.util.HashMap.get@POLYN617768" ]
  }, {
    "_id" : "30",
    "_lesItems" : [ "S30:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureActiveGroup@POLYN392238", "S30:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN393862", "S30:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN420622 (R21 in line [01017],R155 in line [01017],R156 in line [01017])", "S30:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN419923 (R21 in line [01004],R157 in line [01004],R158 in line [01004])" ]
  }, {
    "_id" : "31",
    "_lesItems" : [ "S31:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417846 (R21 in line [00943],R223 in line [00943])", "S31:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418001 (R21 in line [00947],R47 in line [00947],R48 in line [00947])", "S31:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418001 (R21 in line [00947],R47 in line [00947],R48 in line [00947])", "S31:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.disconnectAsync@POLYN262449", "S31:org.apache.kafka.clients.NetworkClient.wakeup@POLYN346711" ]
  }, {
    "_id" : "32",
    "_lesItems" : [ "S32:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420920 (R21 in line [01023],R224 in line [01023],R225 in line [01023],R226 in line [01023])", "S32:java.lang.String.format@POLYN906229" ]
  }, {
    "_id" : "33",
    "_lesItems" : [ "S33:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515041", "S33:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S33:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S33:org.apache.kafka.streams.KafkaStreams.closeToError@POLYN558108", "S33:org.apache.kafka.streams.KafkaStreams.start@POLYN551199 (R23 in line [01832])", "S33:org.apache.kafka.streams.KafkaStreams.start@POLYN551199 (R23 in line [01832])", "S33:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258984 (R25 in line [00001],R26 in line [00001])", "S33:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN259279", "S33:org.apache.kafka.common.utils.Utils.delete@POLYN444733" ]
  }, {
    "_id" : "34",
    "_lesItems" : [ "S34:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515041", "S34:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S34:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S34:org.apache.kafka.streams.KafkaStreams.closeToError@POLYN558108", "S34:org.apache.kafka.streams.KafkaStreams.start@POLYN551199 (R23 in line [01832])", "S34:org.apache.kafka.streams.KafkaStreams.start@POLYN551199 (R23 in line [01832])", "S34:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258984 (R25 in line [00001],R26 in line [00001])", "S34:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN259279", "S34:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN259279", "S34:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255979 (R25 in line [00001],R27 in line [00001])", "S34:java.util.HashMap.remove@POLYN650114" ]
  }, {
    "_id" : "35",
    "_lesItems" : [ "S35:org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN254774 (R25 in line [00001])", "S35:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN249834 (R176 in line [00001])", "S35:org.apache.kafka.streams.processor.internals.StateDirectory.getTaskDirectoryParentName@POLYN251222", "S35:org.apache.kafka.streams.processor.TaskId.topologyName@POLYN166989" ]
  }, {
    "_id" : "36",
    "_lesItems" : [ "S36:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515041", "S36:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S36:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S36:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537097 (R30 in line [01039],R31 in line [01051])", "S36:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN546686 (R32 in line [01215])", "S36:java.util.Map.remove@POLYN430232" ]
  }, {
    "_id" : "37",
    "_lesItems" : [ "S37:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515041", "S37:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S37:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S37:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537097 (R30 in line [01039],R31 in line [01051])", "S37:org.apache.kafka.streams.KafkaStreams.createAndAddStreamThread@POLYN534300", "S37:org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338952", "S37:org.apache.kafka.streams.processor.internals.ActiveTaskCreator.ActiveTaskCreator@POLYN186862", "S37:org.apache.kafka.streams.processor.internals.metrics.ThreadMetrics.createTaskSensor@POLYN192503", "S37:org.apache.kafka.streams.processor.internals.metrics.ThreadMetrics.invocationRateAndCountSensor@POLYN200747", "S37:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadLevelSensor@POLYN286888 (R28 in line [00257])", "S37:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN287344" ]
  }, {
    "_id" : "38",
    "_lesItems" : [ "S38:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515041", "S38:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S38:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S38:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537097 (R30 in line [01039],R31 in line [01051])", "S38:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537097 (R30 in line [01039],R31 in line [01051])", "S38:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN546686 (R32 in line [01215])", "S38:java.util.Map.remove@POLYN430232" ]
  }, {
    "_id" : "39",
    "_lesItems" : [ "S39:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515041", "S39:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S39:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S39:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537097 (R30 in line [01039],R31 in line [01051])", "S39:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537097 (R30 in line [01039],R31 in line [01051])", "S39:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373894", "S39:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN334041 (R33 in line [00215])", "S39:org.apache.kafka.common.requests.OffsetFetchResponse.error@POLYN207350" ]
  }, {
    "_id" : "40",
    "_lesItems" : [ "S40:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515041", "S40:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S40:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S40:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537097 (R30 in line [01039],R31 in line [01051])", "S40:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537097 (R30 in line [01039],R31 in line [01051])", "S40:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373894", "S40:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN374254", "S40:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849696", "S40:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849696", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423752 (R21 in line [01103])", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423752 (R21 in line [01103])", "S40:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.send@POLYN250472", "S40:org.apache.kafka.common.utils.Time.milliseconds@POLYN153489" ]
  }, {
    "_id" : "41",
    "_lesItems" : [ "S41:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515041", "S41:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S41:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S41:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537097 (R30 in line [01039],R31 in line [01051])", "S41:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537097 (R30 in line [01039],R31 in line [01051])", "S41:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373894", "S41:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN374254", "S41:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849696", "S41:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849696", "S41:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN409714", "S41:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN409714", "S41:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN389137", "S41:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN321204 (R2 in line [00334])", "S41:org.apache.kafka.clients.consumer.internals.SubscriptionState.collectPartitions@POLYN337639", "S41:java.util.concurrent.ConcurrentHashMap.add@POLYN1668596" ]
  }, {
    "_id" : "42",
    "_lesItems" : [ "S42:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515041", "S42:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S42:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S42:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537097 (R30 in line [01039],R31 in line [01051])", "S42:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537097 (R30 in line [01039],R31 in line [01051])", "S42:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373894", "S42:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN374254", "S42:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelMetrics@POLYN289409 (R29 in line [00310])", "S42:java.util.Hashtable.remove@POLYN476208" ]
  }, {
    "_id" : "43",
    "_lesItems" : [ "S43:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515041", "S43:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S43:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN513204", "S43:org.apache.kafka.streams.KafkaStreams.closeToError@POLYN558108", "S43:org.apache.kafka.streams.KafkaStreams.start@POLYN551199 (R23 in line [01832])", "S43:org.apache.kafka.streams.KafkaStreams.start@POLYN551199 (R23 in line [01832])", "S43:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258984 (R25 in line [00001],R26 in line [00001])", "S43:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN259279", "S43:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN259279", "S43:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255979 (R25 in line [00001],R27 in line [00001])", "S43:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255979 (R25 in line [00001],R27 in line [00001])", "S43:java.util.HashMap.remove@POLYN650114" ]
  }, {
    "_id" : "44",
    "_lesItems" : [ "S44:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN539305", "S44:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN540381 (R30 in line [01113])", "S44:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373894", "S44:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN334041 (R33 in line [00215])", "S44:org.apache.kafka.common.requests.OffsetFetchResponse.error@POLYN207350" ]
  }, {
    "_id" : "45",
    "_lesItems" : [ "S45:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN539305", "S45:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN540381 (R30 in line [01113])", "S45:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373894", "S45:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN374254", "S45:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849696", "S45:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849696", "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423752 (R21 in line [01103])", "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423752 (R21 in line [01103])", "S45:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.send@POLYN250472", "S45:org.apache.kafka.common.utils.Time.milliseconds@POLYN153489" ]
  }, {
    "_id" : "46",
    "_lesItems" : [ "S46:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN539305", "S46:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN540381 (R30 in line [01113])", "S46:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373894", "S46:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN374254", "S46:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849696", "S46:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849696", "S46:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN409714", "S46:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN409714", "S46:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN389137", "S46:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN321204 (R2 in line [00334])", "S46:org.apache.kafka.clients.consumer.internals.SubscriptionState.collectPartitions@POLYN337639", "S46:java.util.concurrent.ConcurrentHashMap.add@POLYN1668596" ]
  }, {
    "_id" : "47",
    "_lesItems" : [ "S47:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN539305", "S47:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN540381 (R30 in line [01113])", "S47:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373894", "S47:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN374254", "S47:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelSensors@POLYN288861 (R28 in line [00301])", "S47:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN287344" ]
  }, {
    "_id" : "48",
    "_lesItems" : [ "S48:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN539305", "S48:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN540381 (R30 in line [01113])", "S48:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373894", "S48:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN374254", "S48:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelMetrics@POLYN289409 (R29 in line [00310])", "S48:java.util.Hashtable.remove@POLYN476208" ]
  }, {
    "_id" : "49",
    "_lesItems" : [ "S49:org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN212594", "S49:org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN212594", "S49:org.apache.kafka.clients.producer.KafkaProducer.close@POLYN562631", "S49:org.apache.kafka.clients.producer.KafkaProducer.close@POLYN563737", "S49:org.apache.kafka.clients.producer.KafkaProducer.close@POLYN563737", "S49:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN162241 (R81 in line [00072],R82 in line [00072],R83 in line [00072],R84 in line [00072])", "S49:org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN164176", "S49:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN301553 (R16 in line [00558])", "S49:java.util.HashMap.remove@POLYN650114" ]
  }, {
    "_id" : "50",
    "_lesItems" : [ "S50:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513921", "S50:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513921", "S50:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161461 (R81 in line [00060],R86 in line [00060],R87 in line [00060],R88 in line [00060],R89 in line [00060])", "S50:org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN163359" ]
  }, {
    "_id" : "51",
    "_lesItems" : [ "S51:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN369336", "S51:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN383723", "S51:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN546285", "S51:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN547317", "S51:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN555058", "S51:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN555058", "S51:org.apache.kafka.clients.producer.internals.ProducerMetadata.requestUpdateForTopic@POLYN162117 (R36 in line [00075])", "S51:org.apache.kafka.clients.Metadata.requestUpdateForNewTopics@POLYN247486 (R3 in line [00150])" ]
  }, {
    "_id" : "52",
    "_lesItems" : [ "S52:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN369336", "S52:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN383723", "S52:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN546285", "S52:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN547317", "S52:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN555058", "S52:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN555058", "S52:org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN163688 (R36 in line [00116],R37 in line [00116],R38 in line [00116])", "S52:org.apache.kafka.common.utils.Time.milliseconds@POLYN153489" ]
  }, {
    "_id" : "53",
    "_lesItems" : [ "S53:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466101", "S53:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305530", "S53:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307737", "S53:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307737", "S53:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308927", "S53:org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161647 (R36 in line [00067],R53 in line [00067],R54 in line [00067])", "S53:org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161647 (R36 in line [00067],R53 in line [00067],R54 in line [00067])", "S53:org.apache.kafka.clients.Metadata.requestUpdateForNewTopics@POLYN247486 (R3 in line [00150])" ]
  }, {
    "_id" : "54",
    "_lesItems" : [ "S54:org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164460 (R36 in line [00130],R292 in line [00130],R293 in line [00130],R294 in line [00130],R295 in line [00130])", "S54:org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164460 (R36 in line [00130],R292 in line [00130],R293 in line [00130],R294 in line [00130],R295 in line [00130])", "S54:java.util.HashMap.remove@POLYN650114" ]
  }, {
    "_id" : "55",
    "_lesItems" : [ "S55:org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN165073 (R36 in line [00145],R296 in line [00145])", "S55:org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN165073 (R36 in line [00145],R296 in line [00145])", "S55:java.lang.Object.notifyAll@POLYN294734" ]
  }, {
    "_id" : "56",
    "_lesItems" : [ "S56:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN369336", "S56:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN383723", "S56:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN546285", "S56:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN547317", "S56:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN547317", "S56:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN372482 (R43 in line [00327],R44 in line [00327])", "S56:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN400502" ]
  }, {
    "_id" : "57",
    "_lesItems" : [ "S57:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN369336", "S57:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN383723", "S57:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN546285", "S57:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN547317", "S57:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN547317", "S57:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN384805 (R43 in line [00610],R45 in line [00610])", "S57:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN375291 (R43 in line [00397],R46 in line [00397])", "S57:org.apache.kafka.clients.producer.internals.TransactionalRequestResult.fail@POLYN148907" ]
  }, {
    "_id" : "58",
    "_lesItems" : [ "S58:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466101", "S58:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305530", "S58:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307737", "S58:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN389769 (R43 in line [00718])", "S58:org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN378038 (R43 in line [00468],R50 in line [00468])", "S58:java.util.concurrent.ConcurrentHashMap.add@POLYN1668596" ]
  }, {
    "_id" : "59",
    "_lesItems" : [ "S59:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466101", "S59:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305530", "S59:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307737", "S59:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307737", "S59:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN393787 (R43 in line [00810],R52 in line [00810])", "S59:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.fatalError@POLYN407042", "S59:org.apache.kafka.clients.producer.internals.TransactionalRequestResult.fail@POLYN148907" ]
  }, {
    "_id" : "60",
    "_lesItems" : [ "S60:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466101", "S60:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305530", "S60:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307737", "S60:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307737", "S60:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308927", "S60:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN353664", "S60:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN349161 (R55 in line [00799])", "S60:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN376301 (R43 in line [00426],R56 in line [00426])", "S60:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN152077", "S60:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN142332" ]
  }, {
    "_id" : "61",
    "_lesItems" : [ "S61:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466101", "S61:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305530", "S61:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307737", "S61:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307737", "S61:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308927", "S61:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN353664", "S61:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN349161 (R55 in line [00799])", "S61:org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN380409 (R43 in line [00521],R57 in line [00521],R58 in line [00521])", "S61:org.apache.kafka.clients.producer.internals.TransactionManager.sequenceNumber@POLYN380043 (R43 in line [00510])", "S61:org.apache.kafka.clients.producer.internals.TxnPartitionMap.getOrCreate@POLYN150742" ]
  }, {
    "_id" : "62",
    "_lesItems" : [ "S62:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466101", "S62:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305530", "S62:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307737", "S62:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307737", "S62:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308927", "S62:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN329609", "S62:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN385400 (R43 in line [00624],R60 in line [00624],R61 in line [00624],R62 in line [00624])", "S62:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN384805 (R43 in line [00610],R45 in line [00610])", "S62:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN375291 (R43 in line [00397],R46 in line [00397])", "S62:org.apache.kafka.clients.producer.internals.TransactionalRequestResult.fail@POLYN148907" ]
  }, {
    "_id" : "63",
    "_lesItems" : [ "S63:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN313387", "S63:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN313387", "S63:org.apache.kafka.clients.producer.internals.Sender.maybeFindCoordinatorAndRetry@POLYN317074", "S63:org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN393609 (R43 in line [00805],R123 in line [00805])", "S63:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.setRetry@POLYN409901" ]
  }, {
    "_id" : "64",
    "_lesItems" : [ "S64:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318897", "S64:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318897", "S64:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN326313", "S64:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN384253 (R43 in line [00599],R168 in line [00599],R169 in line [00599])", "S64:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateLastAckedSequence@POLYN382518" ]
  }, {
    "_id" : "65",
    "_lesItems" : [ "S65:org.apache.kafka.clients.producer.internals.TransactionManager.isPartitionAdded@POLYN375725 (R43 in line [00407])", "S65:java.util.Hashtable.contains@POLYN417986 (R131 in line [00307])" ]
  }, {
    "_id" : "66",
    "_lesItems" : [ "S66:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN403074", "S66:java.util.Hashtable.putAll@POLYN429352 (R131 in line [00536],R132 in line [00536])", "S66:java.util.Hashtable.put@POLYN425878 (R131 in line [00471])", "S66:java.util.Hashtable.addEntry@POLYN424293", "S66:java.util.Hashtable.rehash@POLYN422408" ]
  }, {
    "_id" : "67",
    "_lesItems" : [ "S67:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN369336", "S67:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN383723", "S67:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN546285", "S67:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN547317", "S67:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN547317", "S67:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN372482 (R43 in line [00327],R44 in line [00327])", "S67:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN372482 (R43 in line [00327],R44 in line [00327])", "S67:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN400502" ]
  }, {
    "_id" : "68",
    "_lesItems" : [ "S68:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466101", "S68:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305530", "S68:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307737", "S68:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307737", "S68:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN393787 (R43 in line [00810],R52 in line [00810])", "S68:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.fatalError@POLYN407042", "S68:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN375291 (R43 in line [00397],R46 in line [00397])", "S68:org.apache.kafka.clients.producer.internals.TransactionalRequestResult.fail@POLYN148907" ]
  }, {
    "_id" : "69",
    "_lesItems" : [ "S69:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466101", "S69:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305530", "S69:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307737", "S69:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307737", "S69:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308927", "S69:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN353664", "S69:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN349161 (R55 in line [00799])", "S69:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN376301 (R43 in line [00426],R56 in line [00426])", "S69:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN376301 (R43 in line [00426],R56 in line [00426])", "S69:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN152077", "S69:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN142332" ]
  }, {
    "_id" : "70",
    "_lesItems" : [ "S70:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN233056 (R68 in line [00309],R69 in line [00309],R70 in line [00309])", "S70:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN463324", "S70:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN461111", "S70:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN459985", "S70:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN459985", "S70:org.apache.kafka.connect.runtime.Worker.stop@POLYN420615", "S70:org.apache.kafka.connect.runtime.Worker.stop@POLYN420615", "S70:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN494520 (R72 in line [01751])", "S70:org.apache.kafka.connect.runtime.ConnectMetrics.MetricGroup.close@POLYN231626 (R73 in line [00406])", "S70:org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN296416 (R74 in line [00449],R16 in line [00450])", "S70:java.util.HashMap.get@POLYN617768" ]
  }, {
    "_id" : "71",
    "_lesItems" : [ "S71:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN233056 (R68 in line [00309],R69 in line [00309],R70 in line [00309])", "S71:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN161874" ]
  }, {
    "_id" : "72",
    "_lesItems" : [ "S72:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN228605 (R68 in line [00242],R128 in line [00242])", "S72:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN228605 (R68 in line [00242],R128 in line [00242])", "S72:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN239335", "S72:org.apache.kafka.connect.storage.ClusterConfigState.allTaskConfigs@POLYN201140", "S72:java.util.HashMap.getValue@POLYN606877" ]
  }, {
    "_id" : "73",
    "_lesItems" : [ "S73:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226727 (R68 in line [00201],R139 in line [00201],R140 in line [00201],R141 in line [00201],R142 in line [00201],R143 in line [00201])", "S73:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN433850", "S73:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN430582", "S73:java.util.HashMap.get@POLYN617768" ]
  }, {
    "_id" : "74",
    "_lesItems" : [ "S74:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN222233 (R68 in line [00105])", "S74:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN238855", "S74:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN463324", "S74:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN461111", "S74:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN459985", "S74:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN459985", "S74:org.apache.kafka.connect.runtime.Worker.stop@POLYN420615", "S74:org.apache.kafka.connect.runtime.Worker.stop@POLYN420615", "S74:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN494520 (R72 in line [01751])", "S74:org.apache.kafka.connect.runtime.ConnectMetrics.MetricGroup.close@POLYN231626 (R73 in line [00406])", "S74:org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN296416 (R74 in line [00449],R16 in line [00450])", "S74:java.util.HashMap.get@POLYN617768" ]
  }, {
    "_id" : "75",
    "_lesItems" : [ "S75:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN222233 (R68 in line [00105])", "S75:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN433850", "S75:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN430582", "S75:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN430582", "S75:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN218632 (R71 in line [00256])", "S75:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN218632 (R71 in line [00256])", "S75:java.lang.Object.notify@POLYN293997" ]
  }, {
    "_id" : "76",
    "_lesItems" : [ "S76:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224746 (R68 in line [00161],R145 in line [00161],R146 in line [00161])", "S76:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN238855", "S76:org.apache.kafka.connect.storage.ClusterConfigState.tasks@POLYN203087", "S76:java.util.HashMap.get@POLYN617768" ]
  }, {
    "_id" : "77",
    "_lesItems" : [ "S77:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN230440 (R68 in line [00274],R149 in line [00274],R150 in line [00274])", "S77:org.apache.kafka.connect.storage.ClusterConfigState.taskConfig@POLYN200191", "S77:java.util.HashMap.get@POLYN617768" ]
  }, {
    "_id" : "78",
    "_lesItems" : [ "S78:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN231853 (R68 in line [00291],R182 in line [00291],R183 in line [00291])", "S78:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN433850", "S78:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN430582", "S78:java.util.HashMap.get@POLYN617768" ]
  }, {
    "_id" : "79",
    "_lesItems" : [ "S79:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN223150 (R68 in line [00133],R306 in line [00133])", "S79:org.apache.kafka.connect.util.Callback.onCompletion" ]
  }, {
    "_id" : "80",
    "_lesItems" : [ "S80:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN223381 (R68 in line [00138],R307 in line [00138],R308 in line [00138])", "S80:org.apache.kafka.connect.util.Callback.onCompletion" ]
  }, {
    "_id" : "81",
    "_lesItems" : [ "S81:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN225814 (R68 in line [00181],R309 in line [00181],R310 in line [00181],R311 in line [00181],R312 in line [00181])", "S81:org.apache.kafka.connect.util.Callback.onCompletion" ]
  }, {
    "_id" : "82",
    "_lesItems" : [ "S82:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN228979 (R68 in line [00251],R313 in line [00251],R314 in line [00251])", "S82:java.util.concurrent.ConcurrentHashMap.add@POLYN1668596" ]
  }, {
    "_id" : "83",
    "_lesItems" : [ "S83:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN233056 (R68 in line [00309],R69 in line [00309],R70 in line [00309])", "S83:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN433850", "S83:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN430582", "S83:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN430582", "S83:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN218632 (R71 in line [00256])", "S83:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN218632 (R71 in line [00256])", "S83:java.lang.Object.notify@POLYN293997" ]
  }, {
    "_id" : "84",
    "_lesItems" : [ "S84:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN233056 (R68 in line [00309],R69 in line [00309],R70 in line [00309])", "S84:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN233056 (R68 in line [00309],R69 in line [00309],R70 in line [00309])", "S84:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN161874" ]
  }, {
    "_id" : "85",
    "_lesItems" : [ "S85:org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN212594", "S85:org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN212594", "S85:org.apache.kafka.clients.producer.KafkaProducer.close@POLYN562631", "S85:org.apache.kafka.clients.producer.KafkaProducer.close@POLYN563737", "S85:org.apache.kafka.clients.producer.KafkaProducer.close@POLYN563737", "S85:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN162241 (R81 in line [00072],R82 in line [00072],R83 in line [00072],R84 in line [00072])", "S85:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN162241 (R81 in line [00072],R82 in line [00072],R83 in line [00072],R84 in line [00072])", "S85:org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN164176", "S85:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN301553 (R16 in line [00558])", "S85:java.util.HashMap.remove@POLYN650114" ]
  }, {
    "_id" : "86",
    "_lesItems" : [ "S86:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513921", "S86:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513921", "S86:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161461 (R81 in line [00060],R86 in line [00060],R87 in line [00060],R88 in line [00060],R89 in line [00060])", "S86:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161461 (R81 in line [00060],R86 in line [00060],R87 in line [00060],R88 in line [00060],R89 in line [00060])", "S86:org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN163359" ]
  }, {
    "_id" : "87",
    "_lesItems" : [ "S87:org.apache.kafka.streams.state.internals.ThreadCache.putIfAbsent@POLYN194667", "S87:org.apache.kafka.streams.state.internals.ThreadCache.getOrCreateCache@POLYN200834 (R96 in line [00285])", "S87:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN194253", "S87:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193987 (R97 in line [00157],R98 in line [00157],R99 in line [00157])", "S87:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143654" ]
  }, {
    "_id" : "88",
    "_lesItems" : [ "S88:org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN198245 (R97 in line [00256],R201 in line [00256])", "S88:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193987 (R97 in line [00157],R98 in line [00157],R99 in line [00157])", "S88:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143654" ]
  }, {
    "_id" : "89",
    "_lesItems" : [ "S89:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN199672 (R96 in line [00254],R258 in line [00254])", "S89:org.apache.kafka.streams.state.internals.NamedCache.close@POLYN202588 (R97 in line [00345])", "S89:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllCacheLevelSensors@POLYN297501 (R259 in line [00462])", "S89:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheSensorPrefix@POLYN298152" ]
  }, {
    "_id" : "90",
    "_lesItems" : [ "S90:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190741 (R96 in line [00075],R173 in line [00075])", "S90:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190741 (R96 in line [00075],R173 in line [00075])", "S90:org.apache.kafka.common.utils.CircularIterator.next@POLYN155872", "S90:org.apache.kafka.common.utils.CircularIterator.advance@POLYN156212" ]
  }, {
    "_id" : "91",
    "_lesItems" : [ "S91:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN199672 (R96 in line [00254],R258 in line [00254])", "S91:java.util.Hashtable.remove@POLYN476208" ]
  }, {
    "_id" : "92",
    "_lesItems" : [ "S92:org.apache.kafka.streams.state.internals.ThreadCache.putIfAbsent@POLYN194667", "S92:org.apache.kafka.streams.state.internals.ThreadCache.getOrCreateCache@POLYN200834 (R96 in line [00285])", "S92:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN194253", "S92:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193987 (R97 in line [00157],R98 in line [00157],R99 in line [00157])", "S92:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193987 (R97 in line [00157],R98 in line [00157],R99 in line [00157])", "S92:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143654" ]
  }, {
    "_id" : "93",
    "_lesItems" : [ "S93:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN252225 (R3 in line [00249],R104 in line [00249],R105 in line [00249],R106 in line [00249])", "S93:org.apache.kafka.clients.Metadata.update@POLYN252799 (R3 in line [00263],R107 in line [00263],R108 in line [00263],R109 in line [00263],R110 in line [00263])", "S93:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN255803", "S93:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN255803", "S93:org.apache.kafka.clients.Metadata.requestUpdate@POLYN247319 (R3 in line [00145])" ]
  }, {
    "_id" : "94",
    "_lesItems" : [ "S94:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN252225 (R3 in line [00249],R104 in line [00249],R105 in line [00249],R106 in line [00249])", "S94:org.apache.kafka.clients.Metadata.update@POLYN252799 (R3 in line [00263],R107 in line [00263],R108 in line [00263],R109 in line [00263],R110 in line [00263])", "S94:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN255803", "S94:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN255803", "S94:org.apache.kafka.common.requests.MetadataResponse.brokersById@POLYN221505", "S94:org.apache.kafka.common.requests.MetadataResponse.holder@POLYN220898 (R111 in line [00001])", "S94:org.apache.kafka.common.requests.MetadataResponse.Holder.Holder@POLYN229047", "S94:java.util.Map.get@POLYN427859" ]
  }, {
    "_id" : "95",
    "_lesItems" : [ "S95:org.apache.kafka.streams.state.internals.CachingWindowStore.init@POLYN231684", "S95:org.apache.kafka.streams.state.internals.CachingWindowStore.initInternal@POLYN232626", "S95:org.apache.kafka.streams.state.internals.CachingWindowStore.putAndMaybeForward@POLYN233410", "S95:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN236200 (R115 in line [00156],R116 in line [00156],R117 in line [00156],R118 in line [00156])", "S95:org.apache.kafka.streams.state.internals.WrappedStateStore.validateStoreOpen@POLYN158867" ]
  }, {
    "_id" : "96",
    "_lesItems" : [ "S96:org.apache.kafka.streams.state.internals.CachingWindowStore.init@POLYN231684", "S96:org.apache.kafka.streams.state.internals.CachingWindowStore.initInternal@POLYN232626", "S96:org.apache.kafka.streams.state.internals.CachingWindowStore.putAndMaybeForward@POLYN233410", "S96:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN236200 (R115 in line [00156],R116 in line [00156],R117 in line [00156],R118 in line [00156])", "S96:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN236200 (R115 in line [00156],R116 in line [00156],R117 in line [00156],R118 in line [00156])", "S96:org.apache.kafka.streams.state.internals.WrappedStateStore.validateStoreOpen@POLYN158867" ]
  }, {
    "_id" : "97",
    "_lesItems" : [ "S97:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN253707", "S97:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN256396", "S97:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN259429 (R124 in line [00260],R125 in line [00260],R126 in line [00260],R127 in line [00260])", "S97:org.apache.kafka.streams.state.internals.WrappedStateStore.validateStoreOpen@POLYN158867" ]
  }, {
    "_id" : "98",
    "_lesItems" : [ "S98:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN253707", "S98:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN256396", "S98:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN259429 (R124 in line [00260],R125 in line [00260],R126 in line [00260],R127 in line [00260])", "S98:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN259429 (R124 in line [00260],R125 in line [00260],R126 in line [00260],R127 in line [00260])", "S98:org.apache.kafka.streams.state.internals.WrappedStateStore.validateStoreOpen@POLYN158867" ]
  }, {
    "_id" : "99",
    "_lesItems" : [ "S99:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN228605 (R68 in line [00242],R128 in line [00242])", "S99:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN228605 (R68 in line [00242],R128 in line [00242])", "S99:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN239335", "S99:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN238855", "S99:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN463324", "S99:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN461111", "S99:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN459985", "S99:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN459985", "S99:org.apache.kafka.connect.runtime.Worker.stop@POLYN420615", "S99:org.apache.kafka.connect.runtime.Worker.stop@POLYN420615", "S99:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN494520 (R72 in line [01751])", "S99:org.apache.kafka.connect.runtime.ConnectMetrics.MetricGroup.close@POLYN231626 (R73 in line [00406])", "S99:org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN296416 (R74 in line [00449],R16 in line [00450])", "S99:java.util.HashMap.get@POLYN617768" ]
  }, {
    "_id" : "100",
    "_lesItems" : [ "S100:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN403074", "S100:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN409164", "S100:org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN242981 (R133 in line [00389],R134 in line [00389],R135 in line [00389])", "S100:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "101",
    "_lesItems" : [ "S101:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN403074", "S101:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN409164", "S101:org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN241676 (R133 in line [00357],R136 in line [00357])", "S101:java.util.Map.putAll" ]
  }, {
    "_id" : "102",
    "_lesItems" : [ "S102:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN403074", "S102:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN409164", "S102:org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN242100 (R133 in line [00367],R137 in line [00367])", "S102:java.util.Map.putAll" ]
  }, {
    "_id" : "103",
    "_lesItems" : [ "S103:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231764 (R133 in line [00163])", "S103:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231998 (R133 in line [00168],R152 in line [00175])", "S103:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "104",
    "_lesItems" : [ "S104:org.apache.kafka.clients.consumer.MockConsumer.position@POLYN240566 (R133 in line [00334])", "S104:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN330911 (R2 in line [00537])", "S104:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322492", "S104:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172283" ]
  }, {
    "_id" : "105",
    "_lesItems" : [ "S105:org.apache.kafka.clients.consumer.MockConsumer.rebalance@POLYN228565 (R133 in line [00096],R188 in line [00096])", "S105:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN318547 (R2 in line [00273],R22 in line [00273])", "S105:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172283" ]
  }, {
    "_id" : "106",
    "_lesItems" : [ "S106:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN229174 (R133 in line [00113],R189 in line [00113],R190 in line [00113])", "S106:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "107",
    "_lesItems" : [ "S107:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN238215 (R133 in line [00280])", "S107:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN238538", "S107:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN237643 (R133 in line [00264],R191 in line [00264])", "S107:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237027 (R133 in line [00254],R192 in line [00254],R193 in line [00254])", "S107:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "108",
    "_lesItems" : [ "S108:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN238368 (R133 in line [00285],R194 in line [00285])", "S108:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN238538", "S108:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN237643 (R133 in line [00264],R191 in line [00264])", "S108:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237027 (R133 in line [00254],R192 in line [00254],R193 in line [00254])", "S108:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "109",
    "_lesItems" : [ "S109:org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN238748 (R133 in line [00295],R211 in line [00295],R212 in line [00295])", "S109:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "110",
    "_lesItems" : [ "S110:org.apache.kafka.clients.consumer.MockConsumer.seekToBeginning@POLYN241442 (R133 in line [00352],R221 in line [00352])", "S110:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "111",
    "_lesItems" : [ "S111:org.apache.kafka.clients.consumer.MockConsumer.seekToEnd@POLYN241866 (R133 in line [00362],R222 in line [00362])", "S111:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "112",
    "_lesItems" : [ "S112:org.apache.kafka.clients.consumer.MockConsumer.pause@POLYN243256 (R133 in line [00395],R241 in line [00395])", "S112:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN340340 (R2 in line [00737],R164 in line [00737])", "S112:org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.pause@POLYN349676" ]
  }, {
    "_id" : "113",
    "_lesItems" : [ "S113:org.apache.kafka.clients.consumer.MockConsumer.resume@POLYN243578 (R133 in line [00403],R242 in line [00403])", "S113:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN340491 (R2 in line [00741],R165 in line [00741])", "S113:org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.resume@POLYN349783" ]
  }, {
    "_id" : "114",
    "_lesItems" : [ "S114:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN228967 (R133 in line [00108],R263 in line [00108])", "S114:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230791 (R133 in line [00141],R264 in line [00141],R265 in line [00141])", "S114:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "115",
    "_lesItems" : [ "S115:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230605 (R133 in line [00136],R266 in line [00136])", "S115:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230791 (R133 in line [00141],R264 in line [00141],R265 in line [00141])", "S115:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "116",
    "_lesItems" : [ "S116:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237849 (R133 in line [00269])", "S116:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237974 (R133 in line [00274],R267 in line [00274])", "S116:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "117",
    "_lesItems" : [ "S117:org.apache.kafka.clients.consumer.MockConsumer.assign@POLYN231169 (R133 in line [00148],R285 in line [00148])", "S117:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "118",
    "_lesItems" : [ "S118:org.apache.kafka.clients.consumer.MockConsumer.addRecord@POLYN235673 (R133 in line [00227],R286 in line [00227])", "S118:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "119",
    "_lesItems" : [ "S119:org.apache.kafka.clients.consumer.MockConsumer.setException@POLYN236618 (R133 in line [00241],R287 in line [00241])", "S119:org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN236749 (R133 in line [00245],R288 in line [00245])" ]
  }, {
    "_id" : "120",
    "_lesItems" : [ "S120:org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN246825 (R133 in line [00473],R289 in line [00473],R152 in line [00474])", "S120:java.util.concurrent.ConcurrentHashMap.add@POLYN1668596" ]
  }, {
    "_id" : "121",
    "_lesItems" : [ "S121:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN246110", "S121:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN246272 (R133 in line [00455],R338 in line [00455])" ]
  }, {
    "_id" : "122",
    "_lesItems" : [ "S122:org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN183400 (R147 in line [00166])", "S122:org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN183400 (R147 in line [00166])", "S122:org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN185806", "S122:org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN185806", "S122:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN301553 (R16 in line [00558])", "S122:java.util.HashMap.remove@POLYN650114" ]
  }, {
    "_id" : "123",
    "_lesItems" : [ "S123:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN187088 (R147 in line [00235],R301 in line [00235])", "S123:java.util.HashMap.get@POLYN617768" ]
  }, {
    "_id" : "124",
    "_lesItems" : [ "S124:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231764 (R133 in line [00163])", "S124:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231998 (R133 in line [00168],R152 in line [00175])", "S124:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231998 (R133 in line [00168],R152 in line [00175])", "S124:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "125",
    "_lesItems" : [ "S125:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165668 (R171 in line [00139],R172 in line [00139])", "S125:org.apache.kafka.snapshot.RecordsSnapshotReader.next@POLYN155383", "S125:java.util.HashMap.get@POLYN617768" ]
  }, {
    "_id" : "126",
    "_lesItems" : [ "S126:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN163202 (R171 in line [00076],R215 in line [00076])", "S126:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN163202 (R171 in line [00076],R215 in line [00076])", "S126:org.apache.kafka.raft.Batch.lastOffset@POLYN162252" ]
  }, {
    "_id" : "127",
    "_lesItems" : [ "S127:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165668 (R171 in line [00139],R172 in line [00139])", "S127:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165668 (R171 in line [00139],R172 in line [00139])", "S127:org.apache.kafka.snapshot.RecordsSnapshotReader.next@POLYN155383", "S127:java.util.HashMap.get@POLYN617768" ]
  }, {
    "_id" : "128",
    "_lesItems" : [ "S128:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190741 (R96 in line [00075],R173 in line [00075])", "S128:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190741 (R96 in line [00075],R173 in line [00075])", "S128:org.apache.kafka.streams.state.internals.NamedCache.evict@POLYN197304 (R97 in line [00235])", "S128:org.apache.kafka.streams.state.internals.NamedCache.remove@POLYN196238" ]
  }, {
    "_id" : "129",
    "_lesItems" : [ "S129:org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetIfNeeded@POLYN502775", "S129:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323602 (R2 in line [00390],R202 in line [00390],R203 in line [00390],R204 in line [00390])", "S129:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323602 (R2 in line [00390],R202 in line [00390],R203 in line [00390],R204 in line [00390])", "S129:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN322857", "S129:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN172283" ]
  }, {
    "_id" : "130",
    "_lesItems" : [ "S130:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163794 (R217 in line [00093],R218 in line [00093])", "S130:org.apache.kafka.common.utils.Time.milliseconds@POLYN153489" ]
  }, {
    "_id" : "131",
    "_lesItems" : [ "S131:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163794 (R217 in line [00093],R218 in line [00093])", "S131:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163794 (R217 in line [00093],R218 in line [00093])", "S131:org.apache.kafka.common.utils.Time.milliseconds@POLYN153489" ]
  }, {
    "_id" : "132",
    "_lesItems" : [ "S132:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420920 (R21 in line [01023],R224 in line [01023],R225 in line [01023],R226 in line [01023])", "S132:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN420622 (R21 in line [01017],R155 in line [01017],R156 in line [01017])", "S132:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN419923 (R21 in line [01004],R157 in line [01004],R158 in line [01004])" ]
  }, {
    "_id" : "133",
    "_lesItems" : [ "S133:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN161222 (R248 in line [00084],R249 in line [00084])", "S133:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN160679 (R248 in line [00076],R250 in line [00076])", "S133:org.apache.kafka.connect.util.Table.remove@POLYN148935", "S133:java.util.Hashtable.remove@POLYN476208" ]
  }, {
    "_id" : "134",
    "_lesItems" : [ "S134:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN160534 (R248 in line [00071],R273 in line [00071])", "S134:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN160155 (R248 in line [00063],R274 in line [00063])", "S134:java.util.HashMap.remove@POLYN650114" ]
  }, {
    "_id" : "135",
    "_lesItems" : [ "S135:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237849 (R133 in line [00269])", "S135:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237974 (R133 in line [00274],R267 in line [00274])", "S135:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237974 (R133 in line [00274],R267 in line [00274])", "S135:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN247347" ]
  }, {
    "_id" : "136",
    "_lesItems" : [ "S136:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN187088 (R147 in line [00235],R301 in line [00235])", "S136:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN187088 (R147 in line [00235],R301 in line [00235])", "S136:java.util.HashMap.get@POLYN617768" ]
  } ],
  "_lesDeadlocksTypos" : [ ]
}