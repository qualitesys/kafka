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
      "_source" : "java.util.Map.get@POLYN426239.return",
      "_method" : "---java.util.Map.get@POLYN426239 in line [01109]",
      "_target" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.getTheActualPartitionToBeMoved@POLYN403363.return",
      "_risk" : "//QC-JAVCWE099[01109] In org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.getTheActualPartitionToBeMoved@POLYN403363[01109] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.getTheActualPartitionToBeMoved@POLYN403363.return",
      "_method" : "---org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.getTheActualPartitionToBeMoved@POLYN403363 in line [00965]",
      "_target" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.reassignPartition@POLYN395406.partitionToBeMoved",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.reassignPartition@POLYN395406.partitionToBeMoved",
      "_method" : "---org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.processPartitionMovement@POLYN396068 in line [00966]",
      "_target" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.processPartitionMovement@POLYN396068.partition",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.processPartitionMovement@POLYN396068.partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.movePartition@POLYN402523 in line [00979]",
      "_target" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.movePartition@POLYN402523.partition",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.movePartition@POLYN402523.partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.addPartitionMovementRecord@POLYN401597 in line [01089]",
      "_target" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.addPartitionMovementRecord@POLYN401597.partition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.addPartitionMovementRecord@POLYN401597.partition",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [01063]",
      "_target" : "java.util.HashMap.put@POLYN620675.key",
      "_risk" : "//QC-JAVCWE099[01063] In org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.addPartitionMovementRecord@POLYN401597[01063] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "5",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.util.HashMap.get@POLYN617315.return",
      "_method" : "---java.util.HashMap.get@POLYN617315 in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.selectReadReplica@POLYN518274.return",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.clients.consumer.internals.Fetcher.selectReadReplica@POLYN518274[00001] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.selectReadReplica@POLYN518274.return",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.selectReadReplica@POLYN518274 in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN520108.node",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN520108.node",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00001]",
      "_target" : "java.util.HashMap.put@POLYN620675.key",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.clients.consumer.internals.Fetcher.prepareFetchRequests@POLYN520108[00001] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "6",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.util.HashMap.Node@POLYN605892.key",
      "_method" : "---dummymethode in line [00286]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00286] In java.util.HashMap.Node.Node@POLYN605892[00286] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN606336.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN606336[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN606336.return",
      "_method" : "---java.util.HashMap.getKey@POLYN606336 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210470.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210470[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210470.topic",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN620675.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210470[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "7",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.admin.internals.CoordinatorKey.byTransactionalId@POLYN146849.return",
      "_method" : "---org.apache.kafka.clients.admin.internals.CoordinatorKey.byTransactionalId@POLYN146849 in line [00076]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00076] In org.apache.kafka.clients.admin.FenceProducersResult[00076] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN606336.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN606336[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN606336.return",
      "_method" : "---java.util.HashMap.getKey@POLYN606336 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210470.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210470[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210470.topic",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN620675.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210470[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "8",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.admin.internals.AdminApiDriver.BiMultimap.remove@POLYN236416.sourcedummy",
      "_method" : "---java.util.Hashtable.remove@POLYN476052 in line [00001]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.clients.admin.internals.AdminApiDriver.BiMultimap.remove@POLYN236416[00001] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN606336.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN606336[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN606336.return",
      "_method" : "---java.util.HashMap.getKey@POLYN606336 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210470.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210470[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210470.topic",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN620675.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210470[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "9",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.storage.Converter.fromConnectData@POLYN158284.return",
      "_method" : "---org.apache.kafka.connect.storage.Converter.fromConnectData@POLYN158284 in line [00087]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00087] In org.apache.kafka.connect.runtime.errors.WorkerErrantRecordReporter.report@POLYN170124[00087] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN606336.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN606336[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN606336.return",
      "_method" : "---java.util.HashMap.getKey@POLYN606336 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210470.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210470[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210470.topic",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN620675.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210470[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "10",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.serialization.Deserializer.deserialize@POLYN151120.return",
      "_method" : "---org.apache.kafka.common.serialization.Deserializer.deserialize@POLYN151120 in line [00825]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00825] In org.apache.kafka.streams.TopologyTestDriver[00825] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN606336.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN606336[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN606336.return",
      "_method" : "---java.util.HashMap.getKey@POLYN606336 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210470.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210470[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210470.topic",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN620675.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210470[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "11",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.storeSensorPrefix@POLYN301322.return",
      "_method" : "---org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.storeSensorPrefix@POLYN301322 in line [00506]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00506] In org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl[00506] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN606336.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN606336[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN606336.return",
      "_method" : "---java.util.HashMap.getKey@POLYN606336 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210470.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210470[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210470.topic",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN620675.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210470[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "12",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "null",
      "_method" : "---dummymethode in line [00077]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00077] In org.apache.kafka.streams.state.internals.DelegatingPeekingKeyValueIterator.next@POLYN150586[00077] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN606336.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN606336[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN606336.return",
      "_method" : "---java.util.HashMap.getKey@POLYN606336 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210470.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210470[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210470.topic",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN620675.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210470[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "13",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.state.internals.MeteredSessionStore.keyBytes@POLYN235006.return",
      "_method" : "---org.apache.kafka.streams.state.internals.MeteredSessionStore.keyBytes@POLYN235006 in line [00186]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00186] In org.apache.kafka.streams.state.internals.MeteredSessionStore.put@POLYN221890[00186] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN606336.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN606336[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN606336.return",
      "_method" : "---java.util.HashMap.getKey@POLYN606336 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210470.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210470[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210470.topic",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN620675.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210470[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "14",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.state.internals.PrefixedSessionKeySchemas.KeyFirstSessionKeySchema.sourcedummy",
      "_method" : "---org.apache.kafka.streams.state.internals.PrefixedSessionKeySchemas.KeyFirstSessionKeySchema.extractKey@POLYN220136 in line [00333]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00333] In org.apache.kafka.streams.state.internals.PrefixedSessionKeySchemas.KeyFirstSessionKeySchema[00333] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN606336.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN606336[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN606336.return",
      "_method" : "---java.util.HashMap.getKey@POLYN606336 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210470.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210470[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210470.topic",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN620675.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210470[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "15",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.state.internals.PrefixedSessionKeySchemas.TimeFirstSessionKeySchema.sourcedummy",
      "_method" : "---org.apache.kafka.streams.state.internals.PrefixedSessionKeySchemas.TimeFirstSessionKeySchema.extractKey@POLYN209693 in line [00182]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00182] In org.apache.kafka.streams.state.internals.PrefixedSessionKeySchemas.TimeFirstSessionKeySchema[00182] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN606336.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN606336[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN606336.return",
      "_method" : "---java.util.HashMap.getKey@POLYN606336 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210470.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210470[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210470.topic",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN620675.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210470[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "16",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.state.internals.SessionKeySchema.sourcedummy",
      "_method" : "---org.apache.kafka.streams.state.internals.SessionKeySchema.extractKey@POLYN177911 in line [00144]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00144] In org.apache.kafka.streams.state.internals.SessionKeySchema[00144] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN606336.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN606336[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN606336.return",
      "_method" : "---java.util.HashMap.getKey@POLYN606336 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN210470.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN210470[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN210470.topic",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN620675.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN210470[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "17",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "7",
      "_source" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.constrainedAssign@POLYN355112.assignment",
      "_method" : "---dummymethode in line [00349]",
      "_target" : "java.util.Map.values@POLYN431078.return",
      "_risk" : "//QC-JAVCWE099[00349] In org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.constrainedAssign@POLYN355112[00349] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "6",
      "_source" : "java.util.Map.values@POLYN431078.return",
      "_method" : "---java.util.Map.values@POLYN431078 in line [03486]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[03486] In org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1138391[03486] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "partition",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033.tp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677 in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677.tp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783 in line [00758]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00062]",
      "_target" : "java.util.HashMap.put@POLYN620675.key",
      "_risk" : "//QC-JAVCWE099[00062] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783[00062] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "18",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "7",
      "_source" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.generalAssign@POLYN365155.currentAssignment",
      "_method" : "---dummymethode in line [00484]",
      "_target" : "java.util.Map.values@POLYN431078.return",
      "_risk" : "//QC-JAVCWE099[00484] In org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.generalAssign@POLYN365155[00484] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "6",
      "_source" : "java.util.Map.values@POLYN431078.return",
      "_method" : "---java.util.Map.values@POLYN431078 in line [03486]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[03486] In org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1138391[03486] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "partition",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033.tp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677 in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677.tp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783 in line [00758]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00062]",
      "_target" : "java.util.HashMap.put@POLYN620675.key",
      "_risk" : "//QC-JAVCWE099[00062] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783[00062] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "19",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "8",
      "_source" : "java.util.Map.getValue@POLYN433024.return",
      "_method" : "---java.util.Map.getValue@POLYN433024 in line [00859]",
      "_target" : "java.io.FileInputStream.channel",
      "_risk" : "//QC-JAVCWE099[00859] In org.apache.kafka.common.network.Selector.clear@POLYN427827[00859] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.FileInputStream.channel",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "java.util.Map.values@POLYN431078.return",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN435764[00001] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "6",
      "_source" : "java.util.Map.values@POLYN431078.return",
      "_method" : "---java.util.Map.values@POLYN431078 in line [03486]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[03486] In org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1138391[03486] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "partition",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033.tp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677 in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677.tp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783 in line [00758]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00062]",
      "_target" : "java.util.HashMap.put@POLYN620675.key",
      "_risk" : "//QC-JAVCWE099[00062] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783[00062] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "20",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "9",
      "_source" : "org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToThreads@POLYN408004.assignment",
      "_method" : "---dummymethode in line [01178]",
      "_target" : "java.util.Map.values@POLYN431078.return",
      "_risk" : "//QC-JAVCWE099[01178] In org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToThreads@POLYN408004[01178] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "8",
      "_source" : "java.util.Map.values@POLYN431078.return",
      "_method" : "---java.util.Map.values@POLYN431078 in line [00001]",
      "_target" : "java.io.FileInputStream.channel",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN435764[00001] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.FileInputStream.channel",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "java.util.Map.values@POLYN431078.return",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN435764[00001] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "6",
      "_source" : "java.util.Map.values@POLYN431078.return",
      "_method" : "---java.util.Map.values@POLYN431078 in line [03486]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[03486] In org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1138391[03486] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "partition",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033.tp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677 in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677.tp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783 in line [00758]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00062]",
      "_target" : "java.util.HashMap.put@POLYN620675.key",
      "_risk" : "//QC-JAVCWE099[00062] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783[00062] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "21",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "9",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer.getSamePartitions@POLYN169383.partitions",
      "_method" : "---dummymethode in line [00166]",
      "_target" : "java.util.Map.values@POLYN431078.return",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer.getSamePartitions@POLYN169383[00166] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "8",
      "_source" : "java.util.Map.values@POLYN431078.return",
      "_method" : "---java.util.Map.values@POLYN431078 in line [00001]",
      "_target" : "java.io.FileInputStream.channel",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN435764[00001] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.FileInputStream.channel",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "java.util.Map.values@POLYN431078.return",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN435764[00001] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "6",
      "_source" : "java.util.Map.values@POLYN431078.return",
      "_method" : "---java.util.Map.values@POLYN431078 in line [03486]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[03486] In org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1138391[03486] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "partition",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033.tp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677 in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677.tp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783 in line [00758]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00062]",
      "_target" : "java.util.HashMap.put@POLYN620675.key",
      "_risk" : "//QC-JAVCWE099[00062] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783[00062] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "22",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "9",
      "_source" : "org.apache.kafka.trogdor.workload.ConsumeBenchWorker.Prepare.consumeTasks@POLYN228159.tasks",
      "_method" : "---dummymethode in line [00142]",
      "_target" : "java.util.Map.values@POLYN431078.return",
      "_risk" : "//QC-JAVCWE099[00142] In org.apache.kafka.trogdor.workload.ConsumeBenchWorker.Prepare.consumeTasks@POLYN228159[00142] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "8",
      "_source" : "java.util.Map.values@POLYN431078.return",
      "_method" : "---java.util.Map.values@POLYN431078 in line [00001]",
      "_target" : "java.io.FileInputStream.channel",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN435764[00001] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.FileInputStream.channel",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "java.util.Map.values@POLYN431078.return",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN435764[00001] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "6",
      "_source" : "java.util.Map.values@POLYN431078.return",
      "_method" : "---java.util.Map.values@POLYN431078 in line [03486]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[03486] In org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1138391[03486] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "partition",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033.tp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677 in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677.tp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783 in line [00758]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00062]",
      "_target" : "java.util.HashMap.put@POLYN620675.key",
      "_risk" : "//QC-JAVCWE099[00062] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783[00062] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "23",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.util.Map.getKey@POLYN432691.return",
      "_method" : "---java.util.Map.getKey@POLYN432691 in line [00434]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[00434] In org.apache.kafka.connect.runtime.WorkerSinkTask.commitOffsets@POLYN296993[00434] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "partition",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033.tp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677 in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677.tp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783 in line [00758]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00062]",
      "_target" : "java.util.HashMap.put@POLYN620675.key",
      "_risk" : "//QC-JAVCWE099[00062] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783[00062] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "24",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "8",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readInt@POLYN894958.v",
      "_method" : "---dummymethode in line [03143]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readInt@POLYN894958.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readInt@POLYN894958.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readInt@POLYN894958 in line [01023]",
      "_target" : "java.io.ObjectInputStream.readInt@POLYN807606.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.readInt@POLYN807606.return",
      "_method" : "---java.io.ObjectInputStream.readInt@POLYN807606 in line [00057]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[00057] In org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.readTaskIdFrom@POLYN158345[00057] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "partition",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033.tp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677 in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677.tp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783 in line [00758]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00062]",
      "_target" : "java.util.HashMap.put@POLYN620675.key",
      "_risk" : "//QC-JAVCWE099[00062] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783[00062] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "25",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "8",
      "_source" : "java.io.BufferedInputStream.read@POLYN244052.0",
      "_method" : "---dummymethode in line [00340]",
      "_target" : "java.io.BufferedInputStream.read@POLYN244052.return",
      "_risk" : "//QC-JAVCWE099[00340] In java.io.BufferedInputStream.read@POLYN244052[00340] source data PATHtainted (java.io.BufferedInputStream.read)"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedInputStream.read@POLYN244052.return",
      "_method" : "---java.io.BufferedInputStream.read@POLYN244052 in line [00244]",
      "_target" : "record",
      "_risk" : "//QC-JAVCWE099[00244] In org.apache.kafka.raft.internals.RecordsIterator.readRecord@POLYN179741[00244] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "record",
      "_method" : "---dummymethode in line [00188]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181316.result",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181316.result",
      "_method" : "---dummymethode in line [00190]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181316.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181316.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181316 in line [00091]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175563.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175563.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175563 in line [00064]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.project@POLYN174512.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.project@POLYN174512.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.project@POLYN174512 in line [00152]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN180183.retKey",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN180183.retKey",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00154]",
      "_target" : "java.util.HashMap.put@POLYN620675.key",
      "_risk" : "//QC-JAVCWE099[00154] In org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN180183[00154] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "26",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "9",
      "_source" : "0",
      "_method" : "---dummymethode in line [00343]",
      "_target" : "java.io.BufferedInputStream.read@POLYN244052.n",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.io.BufferedInputStream.read@POLYN244052.n",
      "_method" : "---dummymethode in line [00350]",
      "_target" : "java.io.BufferedInputStream.read@POLYN244052.return",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedInputStream.read@POLYN244052[00350] source data PATHtainted (java.io.BufferedInputStream.read)"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedInputStream.read@POLYN244052.return",
      "_method" : "---java.io.BufferedInputStream.read@POLYN244052 in line [00244]",
      "_target" : "record",
      "_risk" : "//QC-JAVCWE099[00244] In org.apache.kafka.raft.internals.RecordsIterator.readRecord@POLYN179741[00244] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "record",
      "_method" : "---dummymethode in line [00188]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181316.result",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181316.result",
      "_method" : "---dummymethode in line [00190]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181316.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181316.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181316 in line [00091]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175563.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175563.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175563 in line [00064]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.project@POLYN174512.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.project@POLYN174512.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.project@POLYN174512 in line [00152]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN180183.retKey",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN180183.retKey",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00154]",
      "_target" : "java.util.HashMap.put@POLYN620675.key",
      "_risk" : "//QC-JAVCWE099[00154] In org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN180183[00154] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "27",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "9",
      "_source" : "java.io.BufferedInputStream.read@POLYN244052.nread",
      "_method" : "---dummymethode in line [00348]",
      "_target" : "java.io.BufferedInputStream.read@POLYN244052.n",
      "_risk" : "//QC-JAVCWE099[00348] In java.io.BufferedInputStream.read@POLYN244052[00348] source data PATHtainted (java.io.BufferedInputStream.read)"
    }, {
      "_id" : "8",
      "_source" : "java.io.BufferedInputStream.read@POLYN244052.n",
      "_method" : "---dummymethode in line [00350]",
      "_target" : "java.io.BufferedInputStream.read@POLYN244052.return",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedInputStream.read@POLYN244052[00350] source data PATHtainted (java.io.BufferedInputStream.read)"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedInputStream.read@POLYN244052.return",
      "_method" : "---java.io.BufferedInputStream.read@POLYN244052 in line [00244]",
      "_target" : "record",
      "_risk" : "//QC-JAVCWE099[00244] In org.apache.kafka.raft.internals.RecordsIterator.readRecord@POLYN179741[00244] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "record",
      "_method" : "---dummymethode in line [00188]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181316.result",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181316.result",
      "_method" : "---dummymethode in line [00190]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181316.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181316.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN181316 in line [00091]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175563.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175563.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN175563 in line [00064]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.project@POLYN174512.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.project@POLYN174512.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.project@POLYN174512 in line [00152]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN180183.retKey",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN180183.retKey",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00154]",
      "_target" : "java.util.HashMap.put@POLYN620675.key",
      "_risk" : "//QC-JAVCWE099[00154] In org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN180183[00154] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "28",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.remove@POLYN649661.return",
      "_method" : "---java.util.HashMap.remove@POLYN649661 in line [00299]",
      "_target" : "org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN246334.nextData",
      "_risk" : "//QC-JAVCWE099[00299] In org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN246334[00299] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN246334.nextData",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00338]",
      "_target" : "java.util.HashMap.put@POLYN620675.value",
      "_risk" : "//QC-JAVCWE099[00338] In org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN246334[00338] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "29",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.getOrDefault@POLYN648943.return",
      "_method" : "---java.util.HashMap.getOrDefault@POLYN648943 in line [00072]",
      "_target" : "org.apache.kafka.common.requests.AddPartitionsToTxnResponse.AddPartitionsToTxnResponse@POLYN158922.partitionResultCollection",
      "_risk" : "//QC-JAVCWE099[00072] In org.apache.kafka.common.requests.AddPartitionsToTxnResponse.AddPartitionsToTxnResponse@POLYN158922[00072] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.requests.AddPartitionsToTxnResponse.AddPartitionsToTxnResponse@POLYN158922.partitionResultCollection",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00077]",
      "_target" : "java.util.HashMap.put@POLYN620675.value",
      "_risk" : "//QC-JAVCWE099[00077] In org.apache.kafka.common.requests.AddPartitionsToTxnResponse.AddPartitionsToTxnResponse@POLYN158922[00077] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "30",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.Map.getOrDefault@POLYN439386.return",
      "_method" : "---java.util.Map.getOrDefault@POLYN439386 in line [00066]",
      "_target" : "org.apache.kafka.common.requests.OffsetCommitResponse.OffsetCommitResponse@POLYN156066.topic",
      "_risk" : "//QC-JAVCWE099[00066] In org.apache.kafka.common.requests.OffsetCommitResponse.OffsetCommitResponse@POLYN156066[00066] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.requests.OffsetCommitResponse.OffsetCommitResponse@POLYN156066.topic",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00072]",
      "_target" : "java.util.HashMap.put@POLYN620675.value",
      "_risk" : "//QC-JAVCWE099[00072] In org.apache.kafka.common.requests.OffsetCommitResponse.OffsetCommitResponse@POLYN156066[00072] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "31",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.Map.size@POLYN423534.return",
      "_method" : "---java.util.Map.size@POLYN423534 in line [00527]",
      "_target" : "org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskConfigs@POLYN371830.taskCount",
      "_risk" : "//QC-JAVCWE099[00527] In org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskConfigs@POLYN371830[00527] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskConfigs@POLYN371830.taskCount",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00550]",
      "_target" : "java.util.HashMap.put@POLYN620675.value",
      "_risk" : "//QC-JAVCWE099[00550] In org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskConfigs@POLYN371830[00550] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "32",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.util.HashMap.Node@POLYN605892.value",
      "_method" : "---dummymethode in line [00287]",
      "_target" : "java.util.HashMap.value",
      "_risk" : "//QC-JAVCWE099[00287] In java.util.HashMap.Node.Node@POLYN605892[00287] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.value",
      "_method" : "---dummymethode in line [00292]",
      "_target" : "java.util.HashMap.getValue@POLYN606427.return",
      "_risk" : "//QC-JAVCWE099[00292] In java.util.HashMap.Node.getValue@POLYN606427[00292] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getValue@POLYN606427.return",
      "_method" : "---java.util.HashMap.getValue@POLYN606427 in line [00162]",
      "_target" : "org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN189915.partitions",
      "_risk" : "//QC-JAVCWE099[00162] In org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN189915[00162] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN189915.partitions",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00168]",
      "_target" : "java.util.HashMap.put@POLYN620675.value",
      "_risk" : "//QC-JAVCWE099[00168] In org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN189915[00168] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "33",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.util.HashMap.setValue@POLYN606846.newValue",
      "_method" : "---dummymethode in line [00301]",
      "_target" : "java.util.HashMap.value",
      "_risk" : "//QC-JAVCWE099[00301] In java.util.HashMap.Node.setValue@POLYN606846[00301] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.value",
      "_method" : "---dummymethode in line [00292]",
      "_target" : "java.util.HashMap.getValue@POLYN606427.return",
      "_risk" : "//QC-JAVCWE099[00292] In java.util.HashMap.Node.getValue@POLYN606427[00292] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getValue@POLYN606427.return",
      "_method" : "---java.util.HashMap.getValue@POLYN606427 in line [00162]",
      "_target" : "org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN189915.partitions",
      "_risk" : "//QC-JAVCWE099[00162] In org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN189915[00162] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN189915.partitions",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00168]",
      "_target" : "java.util.HashMap.put@POLYN620675.value",
      "_risk" : "//QC-JAVCWE099[00168] In org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN189915[00168] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "34",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.lang.Long.MAX_VALUE",
      "_method" : "---dummymethode in line [00438]",
      "_target" : "java.util.HashMap.value",
      "_risk" : "//QC-JAVCWE099[00438] In org.apache.kafka.streams.state.internals.InMemoryTimeOrderedKeyValueBuffer.evictWhile@POLYN240855[00438] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.value",
      "_method" : "---dummymethode in line [00292]",
      "_target" : "java.util.HashMap.getValue@POLYN606427.return",
      "_risk" : "//QC-JAVCWE099[00292] In java.util.HashMap.Node.getValue@POLYN606427[00292] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getValue@POLYN606427.return",
      "_method" : "---java.util.HashMap.getValue@POLYN606427 in line [00162]",
      "_target" : "org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN189915.partitions",
      "_risk" : "//QC-JAVCWE099[00162] In org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN189915[00162] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN189915.partitions",
      "_method" : "---java.util.HashMap.put@POLYN620675 in line [00168]",
      "_target" : "java.util.HashMap.put@POLYN620675.value",
      "_risk" : "//QC-JAVCWE099[00168] In org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN189915[00168] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "35",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.util.HashMap.this",
      "_method" : "---dummymethode in line [01850]",
      "_target" : "java.util.HashMap.find@POLYN697541.p",
      "_risk" : "//QC-JAVCWE099[01850] In java.util.HashMap.TreeNode.find@POLYN697541[01850] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.find@POLYN697541.p",
      "_method" : "---dummymethode in line [01859]",
      "_target" : "java.util.HashMap.find@POLYN697541.return",
      "_risk" : "//QC-JAVCWE099[01859] In java.util.HashMap.TreeNode.find@POLYN697541[01859] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.find@POLYN697541.return",
      "_method" : "---java.util.HashMap.find@POLYN697541 in line [00822]",
      "_target" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244.tpData",
      "_risk" : "//QC-JAVCWE099[00822] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244[00822] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244.tpData",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.add@POLYN1668236 in line [00825]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.add@POLYN1668236.e",
      "_risk" : "//QC-JAVCWE099[00825] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244[00825] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "36",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "p.left",
      "_method" : "---dummymethode in line [01853]",
      "_target" : "java.util.HashMap.find@POLYN697541.pl",
      "_risk" : "//QC-JAVCWE099[01853] In java.util.HashMap.TreeNode.find@POLYN697541[01853] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "4",
      "_source" : "java.util.HashMap.find@POLYN697541.pl",
      "_method" : "---dummymethode in line [01855]",
      "_target" : "java.util.HashMap.find@POLYN697541.p",
      "_risk" : "//QC-JAVCWE099[01855] In java.util.HashMap.TreeNode.find@POLYN697541[01855] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.find@POLYN697541.p",
      "_method" : "---dummymethode in line [01859]",
      "_target" : "java.util.HashMap.find@POLYN697541.return",
      "_risk" : "//QC-JAVCWE099[01859] In java.util.HashMap.TreeNode.find@POLYN697541[01859] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.find@POLYN697541.return",
      "_method" : "---java.util.HashMap.find@POLYN697541 in line [00822]",
      "_target" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244.tpData",
      "_risk" : "//QC-JAVCWE099[00822] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244[00822] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244.tpData",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.add@POLYN1668236 in line [00825]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.add@POLYN1668236.e",
      "_risk" : "//QC-JAVCWE099[00825] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244[00825] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "37",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "p.right",
      "_method" : "---dummymethode in line [01853]",
      "_target" : "java.util.HashMap.find@POLYN697541.pr",
      "_risk" : "//QC-JAVCWE099[01853] In java.util.HashMap.TreeNode.find@POLYN697541[01853] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "4",
      "_source" : "java.util.HashMap.find@POLYN697541.pr",
      "_method" : "---dummymethode in line [01857]",
      "_target" : "java.util.HashMap.find@POLYN697541.p",
      "_risk" : "//QC-JAVCWE099[01857] In java.util.HashMap.TreeNode.find@POLYN697541[01857] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.find@POLYN697541.p",
      "_method" : "---dummymethode in line [01859]",
      "_target" : "java.util.HashMap.find@POLYN697541.return",
      "_risk" : "//QC-JAVCWE099[01859] In java.util.HashMap.TreeNode.find@POLYN697541[01859] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.find@POLYN697541.return",
      "_method" : "---java.util.HashMap.find@POLYN697541 in line [00822]",
      "_target" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244.tpData",
      "_risk" : "//QC-JAVCWE099[00822] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244[00822] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244.tpData",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.add@POLYN1668236 in line [00825]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.add@POLYN1668236.e",
      "_risk" : "//QC-JAVCWE099[00825] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244[00825] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "38",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.util.HashMap.find@POLYN697541.q",
      "_method" : "---dummymethode in line [01869]",
      "_target" : "java.util.HashMap.find@POLYN697541.return",
      "_risk" : "//QC-JAVCWE099[01869] In java.util.HashMap.TreeNode.find@POLYN697541[01869] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.find@POLYN697541.return",
      "_method" : "---java.util.HashMap.find@POLYN697541 in line [00822]",
      "_target" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244.tpData",
      "_risk" : "//QC-JAVCWE099[00822] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244[00822] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244.tpData",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.add@POLYN1668236 in line [00825]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.add@POLYN1668236.e",
      "_risk" : "//QC-JAVCWE099[00825] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244[00825] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "39",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.util.HashMap.TreeNode.find@POLYN697541.null",
      "_method" : "---dummymethode in line [01873]",
      "_target" : "java.util.HashMap.find@POLYN697541.return",
      "_risk" : "//QC-JAVCWE099[01873] In java.util.HashMap.TreeNode.find@POLYN697541[01873] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.find@POLYN697541.return",
      "_method" : "---java.util.HashMap.find@POLYN697541 in line [00822]",
      "_target" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244.tpData",
      "_risk" : "//QC-JAVCWE099[00822] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244[00822] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244.tpData",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.add@POLYN1668236 in line [00825]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.add@POLYN1668236.e",
      "_risk" : "//QC-JAVCWE099[00825] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN331244[00825] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "40",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "0L",
      "_method" : "---dummymethode in line [01463]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.readObject@POLYN1486325.added",
      "_risk" : "//QC-JAVCWE099[01463] In java.util.concurrent.ConcurrentHashMap.readObject@POLYN1486325[01463] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.readObject@POLYN1486325.added",
      "_method" : "---dummymethode in line [01518]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.baseCount",
      "_risk" : "//QC-JAVCWE099[01518] In java.util.concurrent.ConcurrentHashMap.readObject@POLYN1486325[01518] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "4",
      "_source" : "java.util.concurrent.ConcurrentHashMap.baseCount",
      "_method" : "---dummymethode in line [02510]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551357.sum",
      "_risk" : "//QC-JAVCWE099[02510] In java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551357[02510] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551357.sum",
      "_method" : "---dummymethode in line [02517]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551357.return",
      "_risk" : "//QC-JAVCWE099[02517] In java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551357[02517] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551357.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551357 in line [00917]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1456560.return",
      "_risk" : "//QC-JAVCWE099[00917] In java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1456560[00917] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1456560.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1456560 in line [04389]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1652484.return",
      "_risk" : "//QC-JAVCWE099[04389] In java.util.concurrent.ConcurrentHashMap.CollectionView.isEmpty@POLYN1652484[04389] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "41",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "8",
      "_source" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1498257.1L",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.addCount@POLYN1533053 in line [01717]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.addCount@POLYN1533053.x",
      "_risk" : "//QC-JAVCWZ099[01717] In java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1498257[01717] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.util.concurrent.ConcurrentHashMap.addCount@POLYN1533053.x",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.fullAddCount@POLYN1552030 in line [02263]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.fullAddCount@POLYN1552030.x",
      "_risk" : "//QC-JAVCWZ099[02263] In java.util.concurrent.ConcurrentHashMap.addCount@POLYN1533053[02263] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.util.concurrent.ConcurrentHashMap.fullAddCount@POLYN1552030.x",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.CounterCell.CounterCell@POLYN1551229 in line [02534]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.CounterCell.CounterCell@POLYN1551229.x",
      "_risk" : "//QC-JAVCWZ099[02534] In java.util.concurrent.ConcurrentHashMap.fullAddCount@POLYN1552030[02534] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.CounterCell.CounterCell@POLYN1551229.x",
      "_method" : "---dummymethode in line [02505]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.CounterCell.value",
      "_risk" : "//QC-JAVCWZ099[02505] In java.util.concurrent.ConcurrentHashMap.CounterCell.CounterCell@POLYN1551229[02505] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "4",
      "_source" : "java.util.concurrent.ConcurrentHashMap.CounterCell.value",
      "_method" : "---dummymethode in line [02514]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551357.sum",
      "_risk" : "//QC-JAVCWZ099[02514] In java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551357[02514] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551357.sum",
      "_method" : "---dummymethode in line [02517]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551357.return",
      "_risk" : "//QC-JAVCWZ099[02517] In java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551357[02517] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551357.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551357 in line [00917]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1456560.return",
      "_risk" : "//QC-JAVCWZ099[00917] In java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1456560[00917] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1456560.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1456560 in line [04389]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1652484.return",
      "_risk" : "//QC-JAVCWZ099[04389] In java.util.concurrent.ConcurrentHashMap.CollectionView.isEmpty@POLYN1652484[04389] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "42",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "8",
      "_source" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1461651.1L",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.addCount@POLYN1533053 in line [01067]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.addCount@POLYN1533053.x",
      "_risk" : "//QC-JAVCWZ099[01067] In java.util.concurrent.ConcurrentHashMap.putVal@POLYN1461651[01067] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.util.concurrent.ConcurrentHashMap.addCount@POLYN1533053.x",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.fullAddCount@POLYN1552030 in line [02263]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.fullAddCount@POLYN1552030.x",
      "_risk" : "//QC-JAVCWZ099[02263] In java.util.concurrent.ConcurrentHashMap.addCount@POLYN1533053[02263] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.util.concurrent.ConcurrentHashMap.fullAddCount@POLYN1552030.x",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.CounterCell.CounterCell@POLYN1551229 in line [02534]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.CounterCell.CounterCell@POLYN1551229.x",
      "_risk" : "//QC-JAVCWZ099[02534] In java.util.concurrent.ConcurrentHashMap.fullAddCount@POLYN1552030[02534] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.CounterCell.CounterCell@POLYN1551229.x",
      "_method" : "---dummymethode in line [02505]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.CounterCell.value",
      "_risk" : "//QC-JAVCWZ099[02505] In java.util.concurrent.ConcurrentHashMap.CounterCell.CounterCell@POLYN1551229[02505] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "4",
      "_source" : "java.util.concurrent.ConcurrentHashMap.CounterCell.value",
      "_method" : "---dummymethode in line [02514]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551357.sum",
      "_risk" : "//QC-JAVCWZ099[02514] In java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551357[02514] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551357.sum",
      "_method" : "---dummymethode in line [02517]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551357.return",
      "_risk" : "//QC-JAVCWZ099[02517] In java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551357[02517] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551357.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1551357 in line [00917]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1456560.return",
      "_risk" : "//QC-JAVCWZ099[00917] In java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1456560[00917] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1456560.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1456560 in line [04389]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1652484.return",
      "_risk" : "//QC-JAVCWZ099[04389] In java.util.concurrent.ConcurrentHashMap.CollectionView.isEmpty@POLYN1652484[04389] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "43",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "7",
      "_source" : "e.value",
      "_method" : "---dummymethode in line [00652]",
      "_target" : "java.util.HashMap.putVal@POLYN621198.oldValue",
      "_risk" : "//QC-JAVCWE099[00652] In java.util.HashMap.putVal@POLYN621198[00652] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "6",
      "_source" : "java.util.HashMap.putVal@POLYN621198.oldValue",
      "_method" : "---dummymethode in line [00656]",
      "_target" : "java.util.HashMap.putVal@POLYN621198.return",
      "_risk" : "//QC-JAVCWE099[00656] In java.util.HashMap.putVal@POLYN621198[00656] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "5",
      "_source" : "java.util.HashMap.putVal@POLYN621198.return",
      "_method" : "---java.util.HashMap.putVal@POLYN621198 in line [01060]",
      "_target" : "java.util.HashMap.putIfAbsent@POLYN649360.return",
      "_risk" : "//QC-JAVCWE099[01060] In java.util.HashMap.putIfAbsent@POLYN649360[01060] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.util.HashMap.putIfAbsent@POLYN649360.return",
      "_method" : "---java.util.HashMap.putIfAbsent@POLYN649360 in line [00144]",
      "_target" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220319.previous",
      "_risk" : "//QC-JAVCWE099[00144] In org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220319[00144] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220319.previous",
      "_method" : "---dummymethode in line [00146]",
      "_target" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220319.group",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220319.group",
      "_method" : "---dummymethode in line [00148]",
      "_target" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220319.return",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220319.return",
      "_method" : "---org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220319 in line [00603]",
      "_target" : "org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.SourceTaskMetricsGroup.SourceTaskMetricsGroup@POLYN277403.metricGroup",
      "_risk" : ""
    } ]
  }, {
    "_id" : "44",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.util.HashMap.putVal@POLYN621198.null",
      "_method" : "---dummymethode in line [00663]",
      "_target" : "java.util.HashMap.putVal@POLYN621198.return",
      "_risk" : "//QC-JAVCWE099[00663] In java.util.HashMap.putVal@POLYN621198[00663] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "5",
      "_source" : "java.util.HashMap.putVal@POLYN621198.return",
      "_method" : "---java.util.HashMap.putVal@POLYN621198 in line [01060]",
      "_target" : "java.util.HashMap.putIfAbsent@POLYN649360.return",
      "_risk" : "//QC-JAVCWE099[01060] In java.util.HashMap.putIfAbsent@POLYN649360[01060] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.util.HashMap.putIfAbsent@POLYN649360.return",
      "_method" : "---java.util.HashMap.putIfAbsent@POLYN649360 in line [00144]",
      "_target" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220319.previous",
      "_risk" : "//QC-JAVCWE099[00144] In org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220319[00144] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220319.previous",
      "_method" : "---dummymethode in line [00146]",
      "_target" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220319.group",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220319.group",
      "_method" : "---dummymethode in line [00148]",
      "_target" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220319.return",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220319.return",
      "_method" : "---org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN220319 in line [00603]",
      "_target" : "org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.SourceTaskMetricsGroup.SourceTaskMetricsGroup@POLYN277403.metricGroup",
      "_risk" : ""
    } ]
  }, {
    "_id" : "45",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.util.HashMap.Values.Values@POLYN642483.return",
      "_method" : "---java.util.HashMap.Values.Values@POLYN642483 in line [00957]",
      "_target" : "java.util.HashMap.values@POLYN642120.vs",
      "_risk" : "//QC-JAVCWE099[00957] In java.util.HashMap.values@POLYN642120[00957] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.values@POLYN642120.vs",
      "_method" : "---dummymethode in line [00960]",
      "_target" : "java.util.HashMap.values@POLYN642120.return",
      "_risk" : "//QC-JAVCWE099[00960] In java.util.HashMap.values@POLYN642120[00960] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.values@POLYN642120.return",
      "_method" : "---java.util.HashMap.values@POLYN642120 in line [00190]",
      "_target" : "org.apache.kafka.message.StructRegistry.structs@POLYN172236.return",
      "_risk" : "//QC-JAVCWE099[00190] In org.apache.kafka.message.StructRegistry.structs@POLYN172236[00190] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.message.StructRegistry.structs@POLYN172236.return",
      "_method" : "---org.apache.kafka.message.StructRegistry.structs@POLYN172236 in line [00056]",
      "_target" : "org.apache.kafka.message.JsonConverterGenerator.generateAndWrite@POLYN228387.Iterator_StructRegistry.StructInfo_iter",
      "_risk" : ""
    } ]
  }, {
    "_id" : "46",
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
    "_id" : "47",
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
    "_id" : "48",
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
    "_id" : "49",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.lang.StringBuilder.toString@POLYN235468.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN235468 in line [03388]",
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
    "_id" : "50",
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
    "_id" : "51",
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
    "_id" : "52",
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
    "_id" : "53",
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
    "_id" : "54",
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
    "_id" : "55",
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
    "_id" : "56",
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
    "_id" : "57",
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
    "_id" : "58",
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
    "_id" : "59",
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
    "_id" : "60",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.HashMap.internalWriteEntries@POLYN693254.e.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN557421 in line [01783]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN557421.obj",
      "_risk" : "//QC-JAVCWZ099[01783] In java.util.HashMap.internalWriteEntries@POLYN693254[01783] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
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
    "_id" : "61",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.HashMap.internalWriteEntries@POLYN693254.e.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN557421 in line [01784]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN557421.obj",
      "_risk" : "//QC-JAVCWZ099[01784] In java.util.HashMap.internalWriteEntries@POLYN693254[01784] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
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
    "_id" : "62",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN462569.entryStack.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN557421 in line [01239]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN557421.obj",
      "_risk" : "//QC-JAVCWZ099[01239] In java.util.Hashtable.writeHashtable@POLYN462569[01239] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
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
    "_id" : "63",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN462569.entryStack.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN557421 in line [01240]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN557421.obj",
      "_risk" : "//QC-JAVCWZ099[01240] In java.util.Hashtable.writeHashtable@POLYN462569[01240] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
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
    "_id" : "64",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1483587.p.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN557421 in line [01409]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN557421.obj",
      "_risk" : "//QC-JAVCWZ099[01409] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1483587[01409] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
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
    "_id" : "65",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1483587.p.val",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN557421 in line [01410]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN557421.obj",
      "_risk" : "//QC-JAVCWZ099[01410] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1483587[01410] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
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
    "_id" : "66",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1483587.null",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN557421 in line [01413]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN557421.obj",
      "_risk" : "//QC-JAVCWZ099[01413] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1483587[01413] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
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
    "_id" : "67",
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
    "_id" : "68",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "keySet",
      "_method" : "---dummymethode in line [00904]",
      "_target" : "java.util.HashMap.keySet@POLYN638862.ks",
      "_risk" : "//QC-JAVCWE099[00904] In java.util.HashMap.keySet@POLYN638862[00904] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.keySet@POLYN638862.ks",
      "_method" : "---dummymethode in line [00909]",
      "_target" : "java.util.HashMap.keySet@POLYN638862.return",
      "_risk" : "//QC-JAVCWE099[00909] In java.util.HashMap.keySet@POLYN638862[00909] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.keySet@POLYN638862.return",
      "_method" : "---java.util.HashMap.keySet@POLYN638862 in line [01379]",
      "_target" : "org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN413382.partitions",
      "_risk" : "//QC-JAVCWE099[01379] In org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN413382[01379] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN413382.partitions",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.removeAll@POLYN1658358 in line [01386]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.removeAll@POLYN1658358.c",
      "_risk" : "//QC-JAVCWE099[01386] In org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN413382[01386] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "69",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.util.HashMap.KeySet.KeySet@POLYN639225.return",
      "_method" : "---java.util.HashMap.KeySet.KeySet@POLYN639225 in line [00906]",
      "_target" : "java.util.HashMap.keySet@POLYN638862.ks",
      "_risk" : "//QC-JAVCWE099[00906] In java.util.HashMap.keySet@POLYN638862[00906] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.keySet@POLYN638862.ks",
      "_method" : "---dummymethode in line [00909]",
      "_target" : "java.util.HashMap.keySet@POLYN638862.return",
      "_risk" : "//QC-JAVCWE099[00909] In java.util.HashMap.keySet@POLYN638862[00909] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.keySet@POLYN638862.return",
      "_method" : "---java.util.HashMap.keySet@POLYN638862 in line [01379]",
      "_target" : "org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN413382.partitions",
      "_risk" : "//QC-JAVCWE099[01379] In org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN413382[01379] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN413382.partitions",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.removeAll@POLYN1658358 in line [01386]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.removeAll@POLYN1658358.c",
      "_risk" : "//QC-JAVCWE099[01386] In org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN413382[01386] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "70",
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
    "_id" : "71",
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
    "_id" : "72",
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
    "_id" : "73",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.initTable@POLYN1531210.tab",
      "_method" : "---dummymethode in line [02240]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.initTable@POLYN1531210.return",
      "_risk" : "//QC-JAVCWZ099[02240] In java.util.concurrent.ConcurrentHashMap.initTable@POLYN1531210[02240] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.initTable@POLYN1531210.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.initTable@POLYN1531210 in line [01842]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934.tab",
      "_risk" : "//QC-JAVCWZ099[01842] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934[01842] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451112 in line [01855]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451112.v",
      "_risk" : "//QC-JAVCWZ099[01855] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934[01855] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "74",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278.nextTab",
      "_method" : "---dummymethode in line [02309]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278.return",
      "_risk" : "//QC-JAVCWZ099[02309] In java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278[02309] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278 in line [01863]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934.tab",
      "_risk" : "//QC-JAVCWZ099[01863] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934[01863] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451112 in line [01855]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451112.v",
      "_risk" : "//QC-JAVCWZ099[01855] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934[01855] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "75",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.util.concurrent.ConcurrentHashMap.readObject@POLYN1486325.tab",
      "_method" : "---dummymethode in line [01516]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.table",
      "_risk" : "//QC-JAVCWZ099[01516] In java.util.concurrent.ConcurrentHashMap.readObject@POLYN1486325[01516] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.table",
      "_method" : "---dummymethode in line [02311]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278.return",
      "_risk" : "//QC-JAVCWZ099[02311] In java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278[02311] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278 in line [01863]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934.tab",
      "_risk" : "//QC-JAVCWZ099[01863] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934[01863] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451112 in line [01855]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451112.v",
      "_risk" : "//QC-JAVCWZ099[01855] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934[01855] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "76",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.addCount@POLYN1533053.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541081 in line [02281]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541081.nextTab",
      "_risk" : "//QC-JAVCWZ099[02281] In java.util.concurrent.ConcurrentHashMap.addCount@POLYN1533053[02281] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541081.nextTab",
      "_method" : "---dummymethode in line [02407]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.table",
      "_risk" : "//QC-JAVCWZ099[02407] In java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541081[02407] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.table",
      "_method" : "---dummymethode in line [02311]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278.return",
      "_risk" : "//QC-JAVCWZ099[02311] In java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278[02311] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278 in line [01863]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934.tab",
      "_risk" : "//QC-JAVCWZ099[01863] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934[01863] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451112 in line [01855]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451112.v",
      "_risk" : "//QC-JAVCWZ099[01855] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934[01855] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "77",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541081 in line [02305]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541081.nextTab",
      "_risk" : "//QC-JAVCWZ099[02305] In java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278[02305] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541081.nextTab",
      "_method" : "---dummymethode in line [02407]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.table",
      "_risk" : "//QC-JAVCWZ099[02407] In java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541081[02407] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.table",
      "_method" : "---dummymethode in line [02311]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278.return",
      "_risk" : "//QC-JAVCWZ099[02311] In java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278[02311] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278 in line [01863]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934.tab",
      "_risk" : "//QC-JAVCWZ099[01863] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934[01863] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451112 in line [01855]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451112.v",
      "_risk" : "//QC-JAVCWZ099[01855] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934[01855] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "78",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541081.nt",
      "_method" : "---dummymethode in line [02372]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541081.nextTab",
      "_risk" : "//QC-JAVCWZ099[02372] In java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541081[02372] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "4",
      "_source" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541081.nextTab",
      "_method" : "---dummymethode in line [02407]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.table",
      "_risk" : "//QC-JAVCWZ099[02407] In java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541081[02407] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.table",
      "_method" : "---dummymethode in line [02311]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278.return",
      "_risk" : "//QC-JAVCWZ099[02311] In java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278[02311] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278 in line [01863]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934.tab",
      "_risk" : "//QC-JAVCWZ099[01863] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934[01863] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451112 in line [01855]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451112.v",
      "_risk" : "//QC-JAVCWZ099[01855] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934[01855] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "79",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "7",
      "_source" : "java.util.concurrent.ConcurrentHashMap.tryPresize@POLYN1537925.nt",
      "_method" : "---dummymethode in line [02332]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.table",
      "_risk" : "//QC-JAVCWZ099[02332] In java.util.concurrent.ConcurrentHashMap.tryPresize@POLYN1537925[02332] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "6",
      "_source" : "java.util.concurrent.ConcurrentHashMap.table",
      "_method" : "---dummymethode in line [02324]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.tryPresize@POLYN1537925.tab",
      "_risk" : "//QC-JAVCWZ099[02324] In java.util.concurrent.ConcurrentHashMap.tryPresize@POLYN1537925[02324] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.tryPresize@POLYN1537925.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541081 in line [02351]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541081.nextTab",
      "_risk" : "//QC-JAVCWZ099[02351] In java.util.concurrent.ConcurrentHashMap.tryPresize@POLYN1537925[02351] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541081.nextTab",
      "_method" : "---dummymethode in line [02407]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.table",
      "_risk" : "//QC-JAVCWZ099[02407] In java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541081[02407] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.table",
      "_method" : "---dummymethode in line [02311]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278.return",
      "_risk" : "//QC-JAVCWZ099[02311] In java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278[02311] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1536278 in line [01863]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934.tab",
      "_risk" : "//QC-JAVCWZ099[01863] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934[01863] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451112 in line [01855]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1451112.v",
      "_risk" : "//QC-JAVCWZ099[01855] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934[01855] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "80",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.net.Socket.Socket@POLYN457790.impl",
      "_method" : "---dummymethode in line [00154]",
      "_target" : "java.net.Socket.impl",
      "_risk" : "//QC-JAVCWE099[00154] In java.net.Socket.Socket@POLYN457790[00154] source or target data Sockettainted (java.net.Socket)"
    }, {
      "_id" : "5",
      "_source" : "java.net.Socket.impl",
      "_method" : "---dummymethode in line [00497]",
      "_target" : "java.net.ServerSocket.implAccept@POLYN318330.si",
      "_risk" : "//QC-JAVCWE099[00497] In java.net.ServerSocket.implAccept@POLYN318330[00497] source or target data Sockettainted (java.net.ServerSocket)"
    }, {
      "_id" : "4",
      "_source" : "java.net.ServerSocket.implAccept@POLYN318330.si",
      "_method" : "---dummymethode in line [00511]",
      "_target" : "java.net.Socket.impl",
      "_risk" : "//QC-JAVCWE099[00511] In java.net.ServerSocket.implAccept@POLYN318330[00511] source or target data Sockettainted (java.net.Socket)"
    }, {
      "_id" : "3",
      "_source" : "java.net.Socket.impl",
      "_method" : "---dummymethode in line [00501]",
      "_target" : "java.net.Socket.getImpl@POLYN471176.return",
      "_risk" : "//QC-JAVCWE099[00501] In java.net.Socket.getImpl@POLYN471176[00501] source or target data Sockettainted (java.net.Socket)"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.getImpl@POLYN471176.return",
      "_method" : "---java.net.Socket.getImpl@POLYN471176 in line [00654]",
      "_target" : "java.net.Socket.getInetAddress@POLYN477044.return",
      "_risk" : "//QC-JAVCWE099[00654] In java.net.Socket.getInetAddress@POLYN477044[00654] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.net.Socket.getInetAddress@POLYN477044.return",
      "_method" : "---java.net.Socket.getInetAddress@POLYN477044 in line [00380]",
      "_target" : "org.apache.kafka.common.network.KafkaChannel.socketDescription@POLYN261422.return",
      "_risk" : "//QC-JAVCWE099[00380] In org.apache.kafka.common.network.KafkaChannel.socketDescription@POLYN261422[00380] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "81",
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
    "_id" : "82",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "kafka.tools.StreamsResetter.run@POLYN262565.properties",
      "_method" : "---java.util.HashMap.putAll@POLYN631555 in line [00171]",
      "_target" : "java.util.HashMap.putAll@POLYN631555.m",
      "_risk" : "//QC-JAVCWE099[00171] In kafka.tools.StreamsResetter.run@POLYN262565[00171] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN631555.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN614770 in line [00783]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN614770.m",
      "_risk" : "//QC-JAVCWE099[00783] In java.util.HashMap.putAll@POLYN631555[00783] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "83",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.storage.MemoryOffsetBackingStore.set@POLYN154993.values",
      "_method" : "---java.util.HashMap.putAll@POLYN631555 in line [00093]",
      "_target" : "java.util.HashMap.putAll@POLYN631555.m",
      "_risk" : "//QC-JAVCWE099[00093] In org.apache.kafka.connect.storage.MemoryOffsetBackingStore.set@POLYN154993[00093] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN631555.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN614770 in line [00783]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN614770.m",
      "_risk" : "//QC-JAVCWE099[00783] In java.util.HashMap.putAll@POLYN631555[00783] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "84",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.timeline.TimelineInteger.get@POLYN152349.value",
      "_method" : "---dummymethode in line [00059]",
      "_target" : "org.apache.kafka.timeline.TimelineInteger.get@POLYN152349.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.timeline.TimelineInteger.get@POLYN152349.return",
      "_method" : "---org.apache.kafka.timeline.TimelineInteger.get@POLYN152349 in line [00252]",
      "_target" : "org.apache.kafka.controller.ConfigurationControlManager.validateAlterConfig@POLYN233302.existingConfigs",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.controller.ConfigurationControlManager.validateAlterConfig@POLYN233302.existingConfigs",
      "_method" : "---java.util.HashMap.putAll@POLYN631555 in line [00253]",
      "_target" : "java.util.HashMap.putAll@POLYN631555.m",
      "_risk" : "//QC-JAVCWE099[00253] In org.apache.kafka.controller.ConfigurationControlManager.validateAlterConfig@POLYN233302[00253] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN631555.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN614770 in line [00783]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN614770.m",
      "_risk" : "//QC-JAVCWE099[00783] In java.util.HashMap.putAll@POLYN631555[00783] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "85",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.server.log.remote.metadata.storage.TopicBasedRemoteLogMetadataManagerConfig.initializeProducerConsumerProperties@POLYN182746.producerOnlyConfigs",
      "_method" : "---java.util.HashMap.putAll@POLYN631555 in line [00153]",
      "_target" : "java.util.HashMap.putAll@POLYN631555.m",
      "_risk" : "//QC-JAVCWE099[00153] In org.apache.kafka.server.log.remote.metadata.storage.TopicBasedRemoteLogMetadataManagerConfig.initializeProducerConsumerProperties@POLYN182746[00153] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN631555.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN614770 in line [00783]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN614770.m",
      "_risk" : "//QC-JAVCWE099[00783] In java.util.HashMap.putAll@POLYN631555[00783] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "86",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.server.log.remote.metadata.storage.TopicBasedRemoteLogMetadataManagerConfig.initializeProducerConsumerProperties@POLYN182746.consumerOnlyConfigs",
      "_method" : "---java.util.HashMap.putAll@POLYN631555 in line [00157]",
      "_target" : "java.util.HashMap.putAll@POLYN631555.m",
      "_risk" : "//QC-JAVCWE099[00157] In org.apache.kafka.server.log.remote.metadata.storage.TopicBasedRemoteLogMetadataManagerConfig.initializeProducerConsumerProperties@POLYN182746[00157] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN631555.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN614770 in line [00783]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN614770.m",
      "_risk" : "//QC-JAVCWE099[00783] In java.util.HashMap.putAll@POLYN631555[00783] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "87",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.Consumer.metrics@POLYN175746.return",
      "_method" : "---org.apache.kafka.clients.consumer.Consumer.metrics@POLYN175746 in line [00089]",
      "_target" : "org.apache.kafka.streams.processor.internals.ClientUtils.consumerMetrics@POLYN177394.consumerMetrics",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.ClientUtils.consumerMetrics@POLYN177394.consumerMetrics",
      "_method" : "---java.util.HashMap.putAll@POLYN631555 in line [00092]",
      "_target" : "java.util.HashMap.putAll@POLYN631555.m",
      "_risk" : "//QC-JAVCWE099[00092] In org.apache.kafka.streams.processor.internals.ClientUtils.consumerMetrics@POLYN177394[00092] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN631555.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN614770 in line [00783]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN614770.m",
      "_risk" : "//QC-JAVCWE099[00783] In java.util.HashMap.putAll@POLYN631555[00783] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "88",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.workload.TopicsSpec.immutableCopy@POLYN152454.map",
      "_method" : "---java.util.HashMap.putAll@POLYN631555 in line [00071]",
      "_target" : "java.util.HashMap.putAll@POLYN631555.m",
      "_risk" : "//QC-JAVCWE099[00071] In org.apache.kafka.trogdor.workload.TopicsSpec.immutableCopy@POLYN152454[00071] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN631555.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN614770 in line [00783]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN614770.m",
      "_risk" : "//QC-JAVCWE099[00783] In java.util.HashMap.putAll@POLYN631555[00783] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "89",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "e.val",
      "_method" : "---dummymethode in line [01033]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1461651.oldVal",
      "_risk" : "//QC-JAVCWE099[01033] In java.util.concurrent.ConcurrentHashMap.putVal@POLYN1461651[01033] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1461651.oldVal",
      "_method" : "---dummymethode in line [01062]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1461651.return",
      "_risk" : "//QC-JAVCWE099[01062] In java.util.concurrent.ConcurrentHashMap.putVal@POLYN1461651[01062] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1461651.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.putVal@POLYN1461651 in line [01003]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.put@POLYN1461441.return",
      "_risk" : "//QC-JAVCWE099[01003] In java.util.concurrent.ConcurrentHashMap.put@POLYN1461441[01003] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.put@POLYN1461441.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.put@POLYN1461441 in line [03500]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.MapEntry.setValue@POLYN1610931.cibledummy",
      "_risk" : "//QC-JAVCWE099[03500] In java.util.concurrent.ConcurrentHashMap.MapEntry.setValue@POLYN1610931[03500] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "90",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "p.val",
      "_method" : "---dummymethode in line [01051]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1461651.oldVal",
      "_risk" : "//QC-JAVCWE099[01051] In java.util.concurrent.ConcurrentHashMap.putVal@POLYN1461651[01051] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1461651.oldVal",
      "_method" : "---dummymethode in line [01062]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1461651.return",
      "_risk" : "//QC-JAVCWE099[01062] In java.util.concurrent.ConcurrentHashMap.putVal@POLYN1461651[01062] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1461651.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.putVal@POLYN1461651 in line [01003]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.put@POLYN1461441.return",
      "_risk" : "//QC-JAVCWE099[01003] In java.util.concurrent.ConcurrentHashMap.put@POLYN1461441[01003] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.put@POLYN1461441.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.put@POLYN1461441 in line [03500]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.MapEntry.setValue@POLYN1610931.cibledummy",
      "_risk" : "//QC-JAVCWE099[03500] In java.util.concurrent.ConcurrentHashMap.MapEntry.setValue@POLYN1610931[03500] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "91",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1461651.null",
      "_method" : "---dummymethode in line [01068]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1461651.return",
      "_risk" : "//QC-JAVCWZ099[01068] In java.util.concurrent.ConcurrentHashMap.putVal@POLYN1461651[01068] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1461651.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.putVal@POLYN1461651 in line [01003]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.put@POLYN1461441.return",
      "_risk" : "//QC-JAVCWZ099[01003] In java.util.concurrent.ConcurrentHashMap.put@POLYN1461441[01003] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.put@POLYN1461441.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.put@POLYN1461441 in line [03500]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.MapEntry.setValue@POLYN1610931.cibledummy",
      "_risk" : "//QC-JAVCWZ099[03500] In java.util.concurrent.ConcurrentHashMap.MapEntry.setValue@POLYN1610931[03500] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "92",
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
    "_id" : "93",
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
    "_id" : "94",
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
    "_id" : "95",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN905797.return",
      "_method" : "---java.lang.String.format@POLYN905797 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN149653.data",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN149653.data",
      "_method" : "---java.io.PrintWriter.println@POLYN349359 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN349359.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN149653[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN349359.x",
      "_method" : "---java.io.PrintWriter.print@POLYN344604 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN344604.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN349359[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "96",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.write@POLYN342894.len",
      "_method" : "---java.io.Writer.write@POLYN191709 in line [00456]",
      "_target" : "java.io.Writer.write@POLYN191709.len",
      "_risk" : "//QC-JAVCWZ099[00456] In java.io.PrintWriter.write@POLYN342894[00456] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.Writer.write@POLYN191709.len",
      "_method" : "---java.io.Writer.write@POLYN190875 in line [00192]",
      "_target" : "java.io.Writer.write@POLYN190875.len",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.Writer.write@POLYN191709[00192] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "97",
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
    "_id" : "98",
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
    "_id" : "99",
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
    "_id" : "100",
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
    "_id" : "101",
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
    "_id" : "102",
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
    "_id" : "103",
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
    "_id" : "104",
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
    "_id" : "105",
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
    "_id" : "106",
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
    "_id" : "107",
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
  }, {
    "_id" : "108",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.lang.Class.privateGetPublicMethods@POLYN1182197.m",
      "_method" : "---java.util.HashMap.merge@POLYN660563 in line [03528]",
      "_target" : "java.util.HashMap.merge@POLYN660563.key",
      "_risk" : "//QC-JAVCWZ099[03528] In java.lang.Class.privateGetPublicMethods@POLYN1182197[03528] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.merge@POLYN660563.key",
      "_method" : "---java.util.HashMap.removeNode@POLYN632867 in line [01260]",
      "_target" : "java.util.HashMap.removeNode@POLYN632867.key",
      "_risk" : "//QC-JAVCWZ099[01260] In java.util.HashMap.merge@POLYN660563[01260] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "109",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN539705.change",
      "_method" : "---java.util.HashMap.merge@POLYN660563 in line [00988]",
      "_target" : "java.util.HashMap.merge@POLYN660563.key",
      "_risk" : "//QC-JAVCWE099[00988] In org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN539705[00988] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.merge@POLYN660563.key",
      "_method" : "---java.util.HashMap.removeNode@POLYN632867 in line [01260]",
      "_target" : "java.util.HashMap.removeNode@POLYN632867.key",
      "_risk" : "//QC-JAVCWZ099[01260] In java.util.HashMap.merge@POLYN660563[01260] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "110",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.compute@POLYN656638.tab",
      "_method" : "---java.util.HashMap.treeifyBin@POLYN629748 in line [01210]",
      "_target" : "java.util.HashMap.treeifyBin@POLYN629748.tab",
      "_risk" : "//QC-JAVCWZ099[01210] In java.util.HashMap.compute@POLYN656638[01210] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.treeifyBin@POLYN629748.tab",
      "_method" : "---java.util.HashMap.treeify@POLYN701012 in line [00770]",
      "_target" : "java.util.HashMap.treeify@POLYN701012.tab",
      "_risk" : "//QC-JAVCWZ099[00770] In java.util.HashMap.treeifyBin@POLYN629748[00770] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "111",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.computeIfAbsent@POLYN651506.tab",
      "_method" : "---java.util.HashMap.treeifyBin@POLYN629748 in line [01138]",
      "_target" : "java.util.HashMap.treeifyBin@POLYN629748.tab",
      "_risk" : "//QC-JAVCWZ099[01138] In java.util.HashMap.computeIfAbsent@POLYN651506[01138] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.treeifyBin@POLYN629748.tab",
      "_method" : "---java.util.HashMap.treeify@POLYN701012 in line [00770]",
      "_target" : "java.util.HashMap.treeify@POLYN701012.tab",
      "_risk" : "//QC-JAVCWZ099[00770] In java.util.HashMap.treeifyBin@POLYN629748[00770] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "112",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.merge@POLYN660563.tab",
      "_method" : "---java.util.HashMap.treeifyBin@POLYN629748 in line [01269]",
      "_target" : "java.util.HashMap.treeifyBin@POLYN629748.tab",
      "_risk" : "//QC-JAVCWZ099[01269] In java.util.HashMap.merge@POLYN660563[01269] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.treeifyBin@POLYN629748.tab",
      "_method" : "---java.util.HashMap.treeify@POLYN701012 in line [00770]",
      "_target" : "java.util.HashMap.treeify@POLYN701012.tab",
      "_risk" : "//QC-JAVCWZ099[00770] In java.util.HashMap.treeifyBin@POLYN629748[00770] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "113",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.putVal@POLYN621198.tab",
      "_method" : "---java.util.HashMap.treeifyBin@POLYN629748 in line [00642]",
      "_target" : "java.util.HashMap.treeifyBin@POLYN629748.tab",
      "_risk" : "//QC-JAVCWZ099[00642] In java.util.HashMap.putVal@POLYN621198[00642] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.treeifyBin@POLYN629748.tab",
      "_method" : "---java.util.HashMap.treeify@POLYN701012 in line [00770]",
      "_target" : "java.util.HashMap.treeify@POLYN701012.tab",
      "_risk" : "//QC-JAVCWZ099[00770] In java.util.HashMap.treeifyBin@POLYN629748[00770] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  } ],
  "_lesDeadlocks" : [ {
    "_id" : "R0",
    "_libelle" : "org.apache.kafka.connect.mirror.OffsetSyncStore.this"
  }, {
    "_id" : "R1",
    "_libelle" : "org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN153885.pollTimeout"
  }, {
    "_id" : "R2",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.this"
  }, {
    "_id" : "R3",
    "_libelle" : "org.apache.kafka.clients.Metadata.this"
  }, {
    "_id" : "R4",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335137.partition"
  }, {
    "_id" : "R5",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335137.offsetResetStrategy"
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
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.this"
  }, {
    "_id" : "R11",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677.tp"
  }, {
    "_id" : "R12",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN332527.tp"
  }, {
    "_id" : "R13",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN332527.highWatermark"
  }, {
    "_id" : "R14",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN332907.tp"
  }, {
    "_id" : "R15",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN332907.lastStableOffset"
  }, {
    "_id" : "R16",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN332717.tp"
  }, {
    "_id" : "R17",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN332717.logStartOffset"
  }, {
    "_id" : "R18",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN325617.tp"
  }, {
    "_id" : "R19",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN325617.position"
  }, {
    "_id" : "R20",
    "_libelle" : "org.apache.kafka.trogdor.workload.RoundTripWorker.this"
  }, {
    "_id" : "R21",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.this"
  }, {
    "_id" : "R22",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN318181.assignments"
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
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258552.cleanupDelayMs"
  }, {
    "_id" : "R27",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255547.taskId"
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
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.consumerRecord@POLYN201849.consumedMessage"
  }, {
    "_id" : "R36",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.this"
  }, {
    "_id" : "R37",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN163256.lastVersion"
  }, {
    "_id" : "R38",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN163256.timeoutMs"
  }, {
    "_id" : "R39",
    "_libelle" : "org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN262321.topic"
  }, {
    "_id" : "R40",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN324647.dq"
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
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN372050.topicPartition"
  }, {
    "_id" : "R45",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN384373.exception"
  }, {
    "_id" : "R46",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN374859.exception"
  }, {
    "_id" : "R47",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417569.isDisconnected"
  }, {
    "_id" : "R48",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417569.cause"
  }, {
    "_id" : "R49",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417215.error"
  }, {
    "_id" : "R50",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN377606.tp"
  }, {
    "_id" : "R51",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.abortBatches@POLYN358208.dq"
  }, {
    "_id" : "R52",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN393355.e"
  }, {
    "_id" : "R53",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161215.topic"
  }, {
    "_id" : "R54",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161215.nowMs"
  }, {
    "_id" : "R55",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN348729.deque"
  }, {
    "_id" : "R56",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN375869.topicPartition"
  }, {
    "_id" : "R57",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN379977.topicPartition"
  }, {
    "_id" : "R58",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN379977.increment"
  }, {
    "_id" : "R59",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.updateEstimation@POLYN154850.compressionRatioForTopic"
  }, {
    "_id" : "R60",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384968.batch"
  }, {
    "_id" : "R61",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384968.exception"
  }, {
    "_id" : "R62",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384968.adjustSequenceNumbers"
  }, {
    "_id" : "R63",
    "_libelle" : "java.net.Socket.this"
  }, {
    "_id" : "R64",
    "_libelle" : "java.net.Socket.setSendBufferSize@POLYN493067.size"
  }, {
    "_id" : "R65",
    "_libelle" : "java.net.Socket.setReceiveBufferSize@POLYN495770.size"
  }, {
    "_id" : "R66",
    "_libelle" : "java.io.PipedOutputStream.this"
  }, {
    "_id" : "R67",
    "_libelle" : "java.io.PipedOutputStream.connect@POLYN170235.snk"
  }, {
    "_id" : "R68",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.this"
  }, {
    "_id" : "R69",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232624.request"
  }, {
    "_id" : "R70",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232624.cb"
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
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN295450.sensor"
  }, {
    "_id" : "R75",
    "_libelle" : "java.io.BufferedOutputStream.this"
  }, {
    "_id" : "R76",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN160150.b"
  }, {
    "_id" : "R77",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN160150.off"
  }, {
    "_id" : "R78",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN160150.len"
  }, {
    "_id" : "R79",
    "_libelle" : "java.io.Writer.lock"
  }, {
    "_id" : "R80",
    "_libelle" : "java.io.BufferedInputStream.mark@POLYN248009.readlimit"
  }, {
    "_id" : "R81",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.this"
  }, {
    "_id" : "R82",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN161809.prefix"
  }, {
    "_id" : "R83",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN161809.id"
  }, {
    "_id" : "R84",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN161809.metrics"
  }, {
    "_id" : "R85",
    "_libelle" : "org.apache.kafka.clients.Metadata.bootstrap@POLYN251401.addresses"
  }, {
    "_id" : "R86",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029.prefix"
  }, {
    "_id" : "R87",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029.id"
  }, {
    "_id" : "R88",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029.metrics"
  }, {
    "_id" : "R89",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029.nowMs"
  }, {
    "_id" : "R90",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.remove@POLYN148829.nodeId"
  }, {
    "_id" : "R91",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.update@POLYN148557.nodeId"
  }, {
    "_id" : "R92",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.update@POLYN148557.nodeApiVersions"
  }, {
    "_id" : "R93",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1461651.f"
  }, {
    "_id" : "R94",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1541081.f"
  }, {
    "_id" : "R95",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.treeifyBin@POLYN1557035.b"
  }, {
    "_id" : "R96",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.this"
  }, {
    "_id" : "R97",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.this"
  }, {
    "_id" : "R98",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555.key"
  }, {
    "_id" : "R99",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555.value"
  }, {
    "_id" : "R100",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.this"
  }, {
    "_id" : "R101",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN273638.connector"
  }, {
    "_id" : "R102",
    "_libelle" : "org.apache.kafka.clients.admin.KafkaAdminClient.this"
  }, {
    "_id" : "R103",
    "_libelle" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.this"
  }, {
    "_id" : "R104",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN251793.response"
  }, {
    "_id" : "R105",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN251793.isPartialUpdate"
  }, {
    "_id" : "R106",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN251793.nowMs"
  }, {
    "_id" : "R107",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN252367.requestVersion"
  }, {
    "_id" : "R108",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN252367.response"
  }, {
    "_id" : "R109",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN252367.isPartialUpdate"
  }, {
    "_id" : "R110",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN252367.nowMs"
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
    "_libelle" : "java.io.File.readObject@POLYN632722.s"
  }, {
    "_id" : "R115",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.this"
  }, {
    "_id" : "R116",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235768.key"
  }, {
    "_id" : "R117",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235768.value"
  }, {
    "_id" : "R118",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235768.windowStartTimestamp"
  }, {
    "_id" : "R119",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaConfigBackingStore.lock"
  }, {
    "_id" : "R120",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.this"
  }, {
    "_id" : "R121",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221332.initialTopologies"
  }, {
    "_id" : "R122",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.abortUndrainedBatches@POLYN358830.dq"
  }, {
    "_id" : "R123",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN393177.request"
  }, {
    "_id" : "R124",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.this"
  }, {
    "_id" : "R125",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258997.key"
  }, {
    "_id" : "R126",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258997.value"
  }, {
    "_id" : "R127",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258997.windowStartTimestamp"
  }, {
    "_id" : "R128",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN228173.connName"
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
    "_libelle" : "java.util.Hashtable.putAll@POLYN429196.t"
  }, {
    "_id" : "R133",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.this"
  }, {
    "_id" : "R134",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN242549.topic"
  }, {
    "_id" : "R135",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN242549.partitions"
  }, {
    "_id" : "R136",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN241244.newOffsets"
  }, {
    "_id" : "R137",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN241668.newOffsets"
  }, {
    "_id" : "R138",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.nodeLevelSensors"
  }, {
    "_id" : "R139",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226295.connName"
  }, {
    "_id" : "R140",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226295.config"
  }, {
    "_id" : "R141",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226295.allowReplace"
  }, {
    "_id" : "R142",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226295.callback"
  }, {
    "_id" : "R143",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226295.configInfos"
  }, {
    "_id" : "R144",
    "_libelle" : "org.apache.kafka.tools.ThroughputThrottler.this"
  }, {
    "_id" : "R145",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224314.connName"
  }, {
    "_id" : "R146",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224314.callback"
  }, {
    "_id" : "R147",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.this"
  }, {
    "_id" : "R148",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN390487.now"
  }, {
    "_id" : "R149",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN230008.taskId"
  }, {
    "_id" : "R150",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN230008.cb"
  }, {
    "_id" : "R151",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.sourceRecord@POLYN201620.preTransformRecord"
  }, {
    "_id" : "R152",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.pollTasks"
  }, {
    "_id" : "R153",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN322645.tp"
  }, {
    "_id" : "R154",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN322645.position"
  }, {
    "_id" : "R155",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN420190.reason"
  }, {
    "_id" : "R156",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN420190.shouldResetMemberId"
  }, {
    "_id" : "R157",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN419491.reason"
  }, {
    "_id" : "R158",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN419491.shouldResetMemberId"
  }, {
    "_id" : "R159",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.taskLevelSensors"
  }, {
    "_id" : "R160",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN331789.tp"
  }, {
    "_id" : "R161",
    "_libelle" : "org.apache.kafka.common.security.oauthbearer.internals.expiring.ExpiringCredentialRefreshingLogin.mandatoryClassToSynchronizeOnPriorToRefresh"
  }, {
    "_id" : "R162",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN179054.partition"
  }, {
    "_id" : "R163",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN179054.offset"
  }, {
    "_id" : "R164",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN339974.tp"
  }, {
    "_id" : "R165",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN340125.tp"
  }, {
    "_id" : "R166",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.this"
  }, {
    "_id" : "R167",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.openIterators"
  }, {
    "_id" : "R168",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN383821.batch"
  }, {
    "_id" : "R169",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN383821.response"
  }, {
    "_id" : "R170",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTask.this"
  }, {
    "_id" : "R171",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.this"
  }, {
    "_id" : "R172",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165236.reader"
  }, {
    "_id" : "R173",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190309.newCacheSizeBytes"
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
    "_libelle" : "org.apache.kafka.clients.Metadata.failedUpdate@POLYN264029.now"
  }, {
    "_id" : "R180",
    "_libelle" : "org.apache.kafka.connect.file.FileStreamSourceTask.this"
  }, {
    "_id" : "R181",
    "_libelle" : "java.io.PrintStream.this"
  }, {
    "_id" : "R182",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN231421.connName"
  }, {
    "_id" : "R183",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN231421.cb"
  }, {
    "_id" : "R184",
    "_libelle" : "java.io.File.writeObject@POLYN632341.s"
  }, {
    "_id" : "R185",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN314038.pattern"
  }, {
    "_id" : "R186",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN314038.listener"
  }, {
    "_id" : "R187",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelSensors"
  }, {
    "_id" : "R188",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.rebalance@POLYN228133.newAssignment"
  }, {
    "_id" : "R189",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN228742.pattern"
  }, {
    "_id" : "R190",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN228742.listener"
  }, {
    "_id" : "R191",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN237211.offsets"
  }, {
    "_id" : "R192",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN236595.offsets"
  }, {
    "_id" : "R193",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN236595.callback"
  }, {
    "_id" : "R194",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN237936.timeout"
  }, {
    "_id" : "R195",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelMetrics"
  }, {
    "_id" : "R196",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.splitAndReenqueue@POLYN335825.partitionDequeue"
  }, {
    "_id" : "R197",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.setEstimation@POLYN156798.compressionRatioForTopic"
  }, {
    "_id" : "R198",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN330222.tp"
  }, {
    "_id" : "R199",
    "_libelle" : "org.apache.kafka.clients.producer.MockProducer.this"
  }, {
    "_id" : "R200",
    "_libelle" : "org.apache.kafka.connect.storage.FileOffsetBackingStore.this"
  }, {
    "_id" : "R201",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN197813.entries"
  }, {
    "_id" : "R202",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323236.tp"
  }, {
    "_id" : "R203",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323236.position"
  }, {
    "_id" : "R204",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323236.requestedResetStrategy"
  }, {
    "_id" : "R205",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.this"
  }, {
    "_id" : "R206",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN181694.key"
  }, {
    "_id" : "R207",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN181694.value"
  }, {
    "_id" : "R208",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.this"
  }, {
    "_id" : "R209",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN173815.key"
  }, {
    "_id" : "R210",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN173815.value"
  }, {
    "_id" : "R211",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN238316.partition"
  }, {
    "_id" : "R212",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN238316.offset"
  }, {
    "_id" : "R213",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335332.partitions"
  }, {
    "_id" : "R214",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335332.offsetResetStrategy"
  }, {
    "_id" : "R215",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN162770.reader"
  }, {
    "_id" : "R216",
    "_libelle" : "java.net.ServerSocket.this"
  }, {
    "_id" : "R217",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.this"
  }, {
    "_id" : "R218",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163428.consumerRecords"
  }, {
    "_id" : "R219",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.this"
  }, {
    "_id" : "R220",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.addStateStore@POLYN236150.builder"
  }, {
    "_id" : "R221",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seekToBeginning@POLYN241010.partitions"
  }, {
    "_id" : "R222",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seekToEnd@POLYN241434.partitions"
  }, {
    "_id" : "R223",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417414.cause"
  }, {
    "_id" : "R224",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420488.api"
  }, {
    "_id" : "R225",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420488.error"
  }, {
    "_id" : "R226",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420488.shouldResetMemberId"
  }, {
    "_id" : "R227",
    "_libelle" : "java.net.ServerSocket.setSoTimeout@POLYN322018.timeout"
  }, {
    "_id" : "R228",
    "_libelle" : "java.net.ServerSocket.setReceiveBufferSize@POLYN328297.size"
  }, {
    "_id" : "R229",
    "_libelle" : "java.net.Socket.setSoTimeout@POLYN491292.timeout"
  }, {
    "_id" : "R230",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1498257.r"
  }, {
    "_id" : "R231",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1498257.f"
  }, {
    "_id" : "R232",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934.r"
  }, {
    "_id" : "R233",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1509934.f"
  }, {
    "_id" : "R234",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.merge@POLYN1517588.f"
  }, {
    "_id" : "R235",
    "_libelle" : "java.io.PipedInputStream.this"
  }, {
    "_id" : "R236",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN218990.b"
  }, {
    "_id" : "R237",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN220097.b"
  }, {
    "_id" : "R238",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN220097.off"
  }, {
    "_id" : "R239",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN220097.len"
  }, {
    "_id" : "R240",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.replaceNode@POLYN1467203.f"
  }, {
    "_id" : "R241",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.pause@POLYN242824.partitions"
  }, {
    "_id" : "R242",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.resume@POLYN243146.partitions"
  }, {
    "_id" : "R243",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333347.tp"
  }, {
    "_id" : "R244",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333347.preferredReadReplicaId"
  }, {
    "_id" : "R245",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333347.timeMs"
  }, {
    "_id" : "R246",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN335896.partitions"
  }, {
    "_id" : "R247",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN335896.nextAllowResetTimeMs"
  }, {
    "_id" : "R248",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.this"
  }, {
    "_id" : "R249",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN160790.status"
  }, {
    "_id" : "R250",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN160247.status"
  }, {
    "_id" : "R251",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN159289.b"
  }, {
    "_id" : "R252",
    "_libelle" : "java.io.PipedReader.this"
  }, {
    "_id" : "R253",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.clear@POLYN1471985.f"
  }, {
    "_id" : "R254",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfPresent@POLYN1504548.f"
  }, {
    "_id" : "R255",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.putAll@POLYN182778.entries"
  }, {
    "_id" : "R256",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN256508.key"
  }, {
    "_id" : "R257",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN256508.value"
  }, {
    "_id" : "R258",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN199240.namespace"
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
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.writeEntries@POLYN154199.committedOffsets"
  }, {
    "_id" : "R263",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN228535.topics"
  }, {
    "_id" : "R264",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230359.topics"
  }, {
    "_id" : "R265",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230359.listener"
  }, {
    "_id" : "R266",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230173.pattern"
  }, {
    "_id" : "R267",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237542.callback"
  }, {
    "_id" : "R268",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN340271.partitions"
  }, {
    "_id" : "R269",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN340271.nextRetryTimeMs"
  }, {
    "_id" : "R270",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeReporter@POLYN301737.reporter"
  }, {
    "_id" : "R271",
    "_libelle" : "org.apache.kafka.common.metrics.JmxReporter.LOCK"
  }, {
    "_id" : "R272",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.this"
  }, {
    "_id" : "R273",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN160102.status"
  }, {
    "_id" : "R274",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN159723.status"
  }, {
    "_id" : "R275",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.this"
  }, {
    "_id" : "R276",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.configure@POLYN173172.configs"
  }, {
    "_id" : "R277",
    "_libelle" : "java.io.PipedReader.receive@POLYN199029.c"
  }, {
    "_id" : "R278",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.this"
  }, {
    "_id" : "R279",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.calculateNextWindow@POLYN159408.force"
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
    "_libelle" : "java.io.PipedWriter.connect@POLYN169465.snk"
  }, {
    "_id" : "R284",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.reporters@POLYN201367.reporters"
  }, {
    "_id" : "R285",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.assign@POLYN230737.partitions"
  }, {
    "_id" : "R286",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.addRecord@POLYN235241.record"
  }, {
    "_id" : "R287",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setException@POLYN236186.exception"
  }, {
    "_id" : "R288",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN236317.exception"
  }, {
    "_id" : "R289",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN246393.task"
  }, {
    "_id" : "R290",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.this"
  }, {
    "_id" : "R291",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.addTransientTopics@POLYN150792.topics"
  }, {
    "_id" : "R292",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164028.requestVersion"
  }, {
    "_id" : "R293",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164028.response"
  }, {
    "_id" : "R294",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164028.isPartialUpdate"
  }, {
    "_id" : "R295",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164028.nowMs"
  }, {
    "_id" : "R296",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN164641.fatalException"
  }, {
    "_id" : "R297",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.this"
  }, {
    "_id" : "R298",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.put@POLYN145316.key"
  }, {
    "_id" : "R299",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.put@POLYN145316.value"
  }, {
    "_id" : "R300",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.addReporter@POLYN301381.reporter"
  }, {
    "_id" : "R301",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN186656.key"
  }, {
    "_id" : "R302",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.putAll@POLYN159167.entries"
  }, {
    "_id" : "R303",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.this"
  }, {
    "_id" : "R304",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.commitTransaction@POLYN151847.record"
  }, {
    "_id" : "R305",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.abortTransaction@POLYN152211.record"
  }, {
    "_id" : "R306",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN222718.callback"
  }, {
    "_id" : "R307",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN222949.connName"
  }, {
    "_id" : "R308",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN222949.callback"
  }, {
    "_id" : "R309",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN225382.connName"
  }, {
    "_id" : "R310",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN225382.config"
  }, {
    "_id" : "R311",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN225382.allowReplace"
  }, {
    "_id" : "R312",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN225382.callback"
  }, {
    "_id" : "R313",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN228547.connName"
  }, {
    "_id" : "R314",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN228547.callback"
  }, {
    "_id" : "R315",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.this"
  }, {
    "_id" : "R316",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN167027.connector"
  }, {
    "_id" : "R317",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN167027.properties"
  }, {
    "_id" : "R318",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeConnectorConfig@POLYN167646.connector"
  }, {
    "_id" : "R319",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeTaskConfigs@POLYN167997.connector"
  }, {
    "_id" : "R320",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN168645.connector"
  }, {
    "_id" : "R321",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN168645.configs"
  }, {
    "_id" : "R322",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN169530.connector"
  }, {
    "_id" : "R323",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN169530.state"
  }, {
    "_id" : "R324",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageReaderImpl.offsetReadFutures"
  }, {
    "_id" : "R325",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.setAclMutator@POLYN169405.aclMutator"
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
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.write@POLYN176405.snapshot"
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
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.delay@POLYN147237.amount"
  }, {
    "_id" : "R335",
    "_libelle" : "java.io.PipedReader.receive@POLYN200707.c"
  }, {
    "_id" : "R336",
    "_libelle" : "java.io.PipedReader.receive@POLYN200707.off"
  }, {
    "_id" : "R337",
    "_libelle" : "java.io.PipedReader.receive@POLYN200707.len"
  }, {
    "_id" : "R338",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.close@POLYN245840.timeout"
  }, {
    "_id" : "R339",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.metrics@POLYN200738.errorHandlingMetrics"
  }, {
    "_id" : "R340",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.this"
  }, {
    "_id" : "R341",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN164989.newState"
  }, {
    "_id" : "R342",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN164989.now"
  }, {
    "_id" : "R343",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.setUpdateListener@POLYN170355.listener"
  } ],
  "_lesDeadlocksSequences" : [ {
    "_id" : "0",
    "_lesItems" : [ "S0:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN182389", "S0:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN196432", "S0:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN153885 (R0 in line [00067],R1 in line [00067])", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856249", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856249", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.updateAssignmentMetadataIfNeeded@POLYN858146", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.updateFetchPositions@POLYN910782", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.resetInitializingPositions@POLYN337770 (R2 in line [00697])", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335748", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335137 (R2 in line [00638],R4 in line [00638],R5 in line [00638])", "S0:java.io.BufferedInputStream.reset@POLYN248739 (R6 in line [00445])", "S0:java.io.BufferedInputStream.getBufIfOpen@POLYN236660" ]
  }, {
    "_id" : "1",
    "_lesItems" : [ "S1:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN182389", "S1:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN196432", "S1:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN153885 (R0 in line [00067],R1 in line [00067])", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856249", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856249", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN858603", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN858603", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN492557", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033", "S1:org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677 (R2 in line [00757],R11 in line [00757])", "S1:org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783", "S1:java.util.HashMap.HashIterator.remove@POLYN673765", "S1:java.util.HashMap.removeNode@POLYN632867", "S1:java.util.HashMap.afterNodeRemoval@POLYN693159" ]
  }, {
    "_id" : "2",
    "_lesItems" : [ "S2:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN182389", "S2:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN196432", "S2:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN153885 (R0 in line [00067],R1 in line [00067])", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856249", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856249", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN858603", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN858603", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN492557", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033", "S2:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN332527 (R2 in line [00578],R12 in line [00578],R13 in line [00578])", "S2:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126", "S2:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "3",
    "_lesItems" : [ "S3:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN182389", "S3:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN196432", "S3:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN153885 (R0 in line [00067],R1 in line [00067])", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856249", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856249", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN858603", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN858603", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN492557", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN332907 (R2 in line [00586],R14 in line [00586],R15 in line [00586])", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126", "S3:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "4",
    "_lesItems" : [ "S4:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN182389", "S4:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN196432", "S4:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN153885 (R0 in line [00067],R1 in line [00067])", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856249", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856249", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN858603", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN858603", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN492557", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033", "S4:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN332717 (R2 in line [00582],R16 in line [00582],R17 in line [00582])", "S4:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126", "S4:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "5",
    "_lesItems" : [ "S5:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN182389", "S5:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN196432", "S5:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN153885 (R0 in line [00067],R1 in line [00067])", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856249", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856249", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN858603", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN858603", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN492557", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN492557", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN494838", "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN325617 (R2 in line [00445],R18 in line [00445],R19 in line [00445])", "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126", "S5:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "6",
    "_lesItems" : [ "S6:org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN210802", "S6:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S6:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S6:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN409282", "S6:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN409282", "S6:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN318181 (R2 in line [00275],R22 in line [00275])", "S6:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "7",
    "_lesItems" : [ "S7:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231332 (R133 in line [00163])", "S7:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231566 (R133 in line [00168],R152 in line [00175])", "S7:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231566 (R133 in line [00168],R152 in line [00175])", "S7:org.apache.kafka.clients.consumer.MockConsumer.updateFetchPosition@POLYN247073", "S7:org.apache.kafka.clients.consumer.MockConsumer.resetOffsetPosition@POLYN247692", "S7:org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN238555", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.seek@POLYN322835", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN322645 (R2 in line [00380],R153 in line [00380],R154 in line [00380])", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN322645 (R2 in line [00380],R153 in line [00380],R154 in line [00380])", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126", "S7:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "8",
    "_lesItems" : [ "S8:org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN902380", "S8:org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN902380", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN331789 (R2 in line [00563],R160 in line [00563])", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126", "S8:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "9",
    "_lesItems" : [ "S9:org.apache.kafka.streams.processor.internals.StreamTask.addPartitionsForOffsetReset@POLYN314433", "S9:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN893223", "S9:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN893223", "S9:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN339974 (R2 in line [00739],R164 in line [00739])", "S9:org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.pause@POLYN349310" ]
  }, {
    "_id" : "10",
    "_lesItems" : [ "S10:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN893981", "S10:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN893981", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN340125 (R2 in line [00743],R165 in line [00743])", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.resume@POLYN349417" ]
  }, {
    "_id" : "11",
    "_lesItems" : [ "S11:org.apache.kafka.clients.consumer.KafkaConsumer.subscribe@POLYN847122", "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN314038 (R2 in line [00174],R185 in line [00174],R186 in line [00174])", "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN319082" ]
  }, {
    "_id" : "12",
    "_lesItems" : [ "S12:org.apache.kafka.jmh.consumer.SubscriptionStateBenchmark.setup@POLYN154993", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN330222 (R2 in line [00531],R198 in line [00531])", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.completeValidation@POLYN347031" ]
  }, {
    "_id" : "13",
    "_lesItems" : [ "S13:org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetIfNeeded@POLYN497795", "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323236 (R2 in line [00392],R202 in line [00392],R203 in line [00392],R204 in line [00392])", "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN322491", "S13:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "14",
    "_lesItems" : [ "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335332 (R2 in line [00642],R213 in line [00642],R214 in line [00642])", "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335332 (R2 in line [00642],R213 in line [00642],R214 in line [00642])", "S14:java.io.BufferedInputStream.reset@POLYN248739 (R6 in line [00445])", "S14:java.io.BufferedInputStream.getBufIfOpen@POLYN236660" ]
  }, {
    "_id" : "15",
    "_lesItems" : [ "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333347 (R2 in line [00598],R243 in line [00598],R244 in line [00598],R245 in line [00598])", "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333347 (R2 in line [00598],R243 in line [00598],R244 in line [00598],R245 in line [00598])", "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126", "S15:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "16",
    "_lesItems" : [ "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN335896 (R2 in line [00653],R246 in line [00653],R247 in line [00653])", "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN335896 (R2 in line [00653],R246 in line [00653],R247 in line [00653])", "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126", "S16:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "17",
    "_lesItems" : [ "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN340271 (R2 in line [00747],R268 in line [00747],R269 in line [00747])", "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN322491", "S17:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "18",
    "_lesItems" : [ "S18:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN368904", "S18:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN383291", "S18:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN545853", "S18:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN546885", "S18:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN554626", "S18:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN554626", "S18:org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN262321 (R3 in line [00450],R39 in line [00450])" ]
  }, {
    "_id" : "19",
    "_lesItems" : [ "S19:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513489", "S19:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513489", "S19:org.apache.kafka.clients.Metadata.bootstrap@POLYN251401 (R3 in line [00238],R85 in line [00238])", "S19:org.apache.kafka.clients.MetadataCache.bootstrap@POLYN188645", "S19:java.util.Map.put@POLYN427326" ]
  }, {
    "_id" : "20",
    "_lesItems" : [ "S20:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN251793 (R3 in line [00249],R104 in line [00249],R105 in line [00249],R106 in line [00249])", "S20:org.apache.kafka.clients.Metadata.update@POLYN252367 (R3 in line [00263],R107 in line [00263],R108 in line [00263],R109 in line [00263],R110 in line [00263])", "S20:org.apache.kafka.common.ClusterResource.clusterId@POLYN147039" ]
  }, {
    "_id" : "21",
    "_lesItems" : [ "S21:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleServerDisconnect@POLYN367293", "S21:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleServerDisconnect@POLYN367293", "S21:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleFailedRequest@POLYN368234", "S21:org.apache.kafka.clients.Metadata.failedUpdate@POLYN264029 (R3 in line [00490],R179 in line [00490])" ]
  }, {
    "_id" : "22",
    "_lesItems" : [ "S22:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232624 (R68 in line [00309],R69 in line [00309],R70 in line [00309])", "S22:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN462892", "S22:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN460679", "S22:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN459553", "S22:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN459553", "S22:org.apache.kafka.connect.runtime.Worker.stop@POLYN420183", "S22:org.apache.kafka.connect.runtime.Worker.stop@POLYN420183", "S22:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN494088 (R72 in line [01751])", "S22:org.apache.kafka.connect.runtime.ConnectMetrics.MetricGroup.close@POLYN231194 (R73 in line [00406])", "S22:org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN295450 (R74 in line [00449],R10 in line [00450])", "S22:org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN295450 (R74 in line [00449],R10 in line [00450])", "S22:java.util.HashMap.get@POLYN617315" ]
  }, {
    "_id" : "23",
    "_lesItems" : [ "S23:org.apache.kafka.common.metrics.Metrics.removeReporter@POLYN301737 (R10 in line [00690],R270 in line [00690])", "S23:org.apache.kafka.common.metrics.JmxReporter.close@POLYN198261 (R271 in line [00208])", "S23:org.apache.kafka.common.metrics.JmxReporter.unregister@POLYN198502" ]
  }, {
    "_id" : "24",
    "_lesItems" : [ "S24:org.apache.kafka.common.metrics.Metrics.addReporter@POLYN301381 (R10 in line [00690],R300 in line [00690])", "S24:java.util.concurrent.ConcurrentHashMap.add@POLYN1668236" ]
  }, {
    "_id" : "25",
    "_lesItems" : [ "S25:org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN210802", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S25:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423320 (R21 in line [01103])", "S25:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423320 (R21 in line [01103])", "S25:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.send@POLYN250040", "S25:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.UnsentRequests.put@POLYN269330 (R9 in line [00646])", "S25:java.util.concurrent.ConcurrentHashMap.add@POLYN1668236" ]
  }, {
    "_id" : "26",
    "_lesItems" : [ "S26:org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN210802", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S26:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423320 (R21 in line [01103])", "S26:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423320 (R21 in line [01103])", "S26:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.pollNoWakeup@POLYN256416", "S26:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.poll@POLYN254551", "S26:org.apache.kafka.clients.Metadata.maybeThrowAnyException@POLYN261579 (R3 in line [00428])", "S26:org.apache.kafka.clients.Metadata.clearErrorsAndMaybeThrowException@POLYN262507", "S26:org.apache.kafka.clients.Metadata.clearRecoverableErrors@POLYN263743" ]
  }, {
    "_id" : "27",
    "_lesItems" : [ "S27:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN392358 (R21 in line [00383])", "S27:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN422134", "S27:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN422326 (R21 in line [01078])", "S27:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN416760 (R21 in line [00926])", "S27:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417569 (R21 in line [00947],R47 in line [00947],R48 in line [00947])", "S27:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417569 (R21 in line [00947],R47 in line [00947],R48 in line [00947])", "S27:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.disconnectAsync@POLYN262017", "S27:org.apache.kafka.clients.NetworkClient.wakeup@POLYN346411" ]
  }, {
    "_id" : "28",
    "_lesItems" : [ "S28:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.close@POLYN415878", "S28:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN387354 (R21 in line [00240])", "S28:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN387354 (R21 in line [00240])", "S28:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417215 (R21 in line [00939],R49 in line [00939])" ]
  }, {
    "_id" : "29",
    "_lesItems" : [ "S29:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN229775", "S29:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN229775", "S29:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN390487 (R21 in line [00322],R148 in line [00322])", "S29:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.failureCause@POLYN438816", "S29:java.util.HashMap.get@POLYN617315" ]
  }, {
    "_id" : "30",
    "_lesItems" : [ "S30:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureActiveGroup@POLYN391806", "S30:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN393430", "S30:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN420190 (R21 in line [01017],R155 in line [01017],R156 in line [01017])", "S30:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN419491 (R21 in line [01004],R157 in line [01004],R158 in line [01004])" ]
  }, {
    "_id" : "31",
    "_lesItems" : [ "S31:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417414 (R21 in line [00943],R223 in line [00943])", "S31:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417569 (R21 in line [00947],R47 in line [00947],R48 in line [00947])", "S31:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417569 (R21 in line [00947],R47 in line [00947],R48 in line [00947])", "S31:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.disconnectAsync@POLYN262017", "S31:org.apache.kafka.clients.NetworkClient.wakeup@POLYN346411" ]
  }, {
    "_id" : "32",
    "_lesItems" : [ "S32:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420488 (R21 in line [01023],R224 in line [01023],R225 in line [01023],R226 in line [01023])", "S32:java.lang.String.format@POLYN905797" ]
  }, {
    "_id" : "33",
    "_lesItems" : [ "S33:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S33:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S33:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S33:org.apache.kafka.streams.KafkaStreams.closeToError@POLYN557676", "S33:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R23 in line [01832])", "S33:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R23 in line [01832])", "S33:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258552 (R25 in line [00001],R26 in line [00001])", "S33:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258847", "S33:org.apache.kafka.common.utils.Utils.delete@POLYN444301" ]
  }, {
    "_id" : "34",
    "_lesItems" : [ "S34:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S34:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S34:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S34:org.apache.kafka.streams.KafkaStreams.closeToError@POLYN557676", "S34:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R23 in line [01832])", "S34:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R23 in line [01832])", "S34:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258552 (R25 in line [00001],R26 in line [00001])", "S34:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258847", "S34:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258847", "S34:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255547 (R25 in line [00001],R27 in line [00001])", "S34:java.util.HashMap.remove@POLYN649661" ]
  }, {
    "_id" : "35",
    "_lesItems" : [ "S35:org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN254342 (R25 in line [00001])", "S35:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN249402 (R176 in line [00001])", "S35:org.apache.kafka.streams.processor.internals.StateDirectory.getTaskDirectoryParentName@POLYN250790", "S35:org.apache.kafka.streams.processor.TaskId.topologyName@POLYN166557" ]
  }, {
    "_id" : "36",
    "_lesItems" : [ "S36:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S36:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S36:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S36:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R30 in line [01039],R31 in line [01051])", "S36:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN546254 (R32 in line [01215])", "S36:java.util.Map.remove@POLYN428612" ]
  }, {
    "_id" : "37",
    "_lesItems" : [ "S37:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S37:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S37:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S37:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R30 in line [01039],R31 in line [01051])", "S37:org.apache.kafka.streams.KafkaStreams.createAndAddStreamThread@POLYN533868", "S37:org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520", "S37:org.apache.kafka.streams.processor.internals.ActiveTaskCreator.ActiveTaskCreator@POLYN186430", "S37:org.apache.kafka.streams.processor.internals.metrics.ThreadMetrics.createTaskSensor@POLYN192071", "S37:org.apache.kafka.streams.processor.internals.metrics.ThreadMetrics.invocationRateAndCountSensor@POLYN200315", "S37:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadLevelSensor@POLYN286456 (R28 in line [00257])", "S37:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN286912" ]
  }, {
    "_id" : "38",
    "_lesItems" : [ "S38:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S38:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S38:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S38:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R30 in line [01039],R31 in line [01051])", "S38:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R30 in line [01039],R31 in line [01051])", "S38:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN546254 (R32 in line [01215])", "S38:java.util.Map.remove@POLYN428612" ]
  }, {
    "_id" : "39",
    "_lesItems" : [ "S39:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S39:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S39:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S39:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R30 in line [01039],R31 in line [01051])", "S39:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R30 in line [01039],R31 in line [01051])", "S39:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373462", "S39:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN333609 (R33 in line [00215])", "S39:org.apache.kafka.common.requests.OffsetFetchResponse.error@POLYN206918" ]
  }, {
    "_id" : "40",
    "_lesItems" : [ "S40:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S40:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S40:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S40:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R30 in line [01039],R31 in line [01051])", "S40:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R30 in line [01039],R31 in line [01051])", "S40:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373462", "S40:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN373822", "S40:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S40:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423320 (R21 in line [01103])", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423320 (R21 in line [01103])", "S40:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.send@POLYN250040", "S40:org.apache.kafka.common.utils.Time.milliseconds@POLYN153117" ]
  }, {
    "_id" : "41",
    "_lesItems" : [ "S41:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S41:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S41:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S41:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R30 in line [01039],R31 in line [01051])", "S41:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R30 in line [01039],R31 in line [01051])", "S41:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373462", "S41:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN373822", "S41:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S41:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S41:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN409282", "S41:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN409282", "S41:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN388705", "S41:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN320838 (R2 in line [00336])", "S41:org.apache.kafka.clients.consumer.internals.SubscriptionState.collectPartitions@POLYN337273", "S41:java.util.concurrent.ConcurrentHashMap.add@POLYN1668236" ]
  }, {
    "_id" : "42",
    "_lesItems" : [ "S42:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S42:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S42:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S42:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R30 in line [01039],R31 in line [01051])", "S42:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R30 in line [01039],R31 in line [01051])", "S42:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373462", "S42:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN373822", "S42:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelMetrics@POLYN288977 (R29 in line [00310])", "S42:java.util.Hashtable.remove@POLYN476052" ]
  }, {
    "_id" : "43",
    "_lesItems" : [ "S43:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S43:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S43:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S43:org.apache.kafka.streams.KafkaStreams.closeToError@POLYN557676", "S43:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R23 in line [01832])", "S43:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R23 in line [01832])", "S43:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258552 (R25 in line [00001],R26 in line [00001])", "S43:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258847", "S43:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258847", "S43:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255547 (R25 in line [00001],R27 in line [00001])", "S43:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255547 (R25 in line [00001],R27 in line [00001])", "S43:java.util.HashMap.remove@POLYN649661" ]
  }, {
    "_id" : "44",
    "_lesItems" : [ "S44:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN538873", "S44:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN539949 (R30 in line [01113])", "S44:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373462", "S44:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN333609 (R33 in line [00215])", "S44:org.apache.kafka.common.requests.OffsetFetchResponse.error@POLYN206918" ]
  }, {
    "_id" : "45",
    "_lesItems" : [ "S45:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN538873", "S45:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN539949 (R30 in line [01113])", "S45:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373462", "S45:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN373822", "S45:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S45:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423320 (R21 in line [01103])", "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423320 (R21 in line [01103])", "S45:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.send@POLYN250040", "S45:org.apache.kafka.common.utils.Time.milliseconds@POLYN153117" ]
  }, {
    "_id" : "46",
    "_lesItems" : [ "S46:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN538873", "S46:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN539949 (R30 in line [01113])", "S46:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373462", "S46:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN373822", "S46:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S46:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S46:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN409282", "S46:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN409282", "S46:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN388705", "S46:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN320838 (R2 in line [00336])", "S46:org.apache.kafka.clients.consumer.internals.SubscriptionState.collectPartitions@POLYN337273", "S46:java.util.concurrent.ConcurrentHashMap.add@POLYN1668236" ]
  }, {
    "_id" : "47",
    "_lesItems" : [ "S47:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN538873", "S47:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN539949 (R30 in line [01113])", "S47:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373462", "S47:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN373822", "S47:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelSensors@POLYN288429 (R28 in line [00301])", "S47:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN286912" ]
  }, {
    "_id" : "48",
    "_lesItems" : [ "S48:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN538873", "S48:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN539949 (R30 in line [01113])", "S48:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373462", "S48:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN373822", "S48:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelMetrics@POLYN288977 (R29 in line [00310])", "S48:java.util.Hashtable.remove@POLYN476052" ]
  }, {
    "_id" : "49",
    "_lesItems" : [ "S49:org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN212162", "S49:org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN212162", "S49:org.apache.kafka.clients.producer.KafkaProducer.close@POLYN562199", "S49:org.apache.kafka.clients.producer.KafkaProducer.close@POLYN563305", "S49:org.apache.kafka.clients.producer.KafkaProducer.close@POLYN563305", "S49:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN161809 (R81 in line [00072],R82 in line [00072],R83 in line [00072],R84 in line [00072])", "S49:org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN163744", "S49:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN300599 (R10 in line [00690])", "S49:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN300599 (R10 in line [00690])", "S49:org.apache.kafka.common.metrics.MetricsReporter.metricRemoval" ]
  }, {
    "_id" : "50",
    "_lesItems" : [ "S50:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513489", "S50:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513489", "S50:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029 (R81 in line [00060],R86 in line [00060],R87 in line [00060],R88 in line [00060],R89 in line [00060])", "S50:org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN162927" ]
  }, {
    "_id" : "51",
    "_lesItems" : [ "S51:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN368904", "S51:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN383291", "S51:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN545853", "S51:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN546885", "S51:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN554626", "S51:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN554626", "S51:org.apache.kafka.clients.producer.internals.ProducerMetadata.requestUpdateForTopic@POLYN161685 (R36 in line [00075])", "S51:org.apache.kafka.clients.Metadata.requestUpdateForNewTopics@POLYN247054 (R3 in line [00150])" ]
  }, {
    "_id" : "52",
    "_lesItems" : [ "S52:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN368904", "S52:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN383291", "S52:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN545853", "S52:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN546885", "S52:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN554626", "S52:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN554626", "S52:org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN163256 (R36 in line [00116],R37 in line [00116],R38 in line [00116])", "S52:org.apache.kafka.common.utils.Time.milliseconds@POLYN153117" ]
  }, {
    "_id" : "53",
    "_lesItems" : [ "S53:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN465669", "S53:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S53:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S53:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S53:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495", "S53:org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161215 (R36 in line [00067],R53 in line [00067],R54 in line [00067])", "S53:org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161215 (R36 in line [00067],R53 in line [00067],R54 in line [00067])", "S53:org.apache.kafka.clients.Metadata.requestUpdateForNewTopics@POLYN247054 (R3 in line [00150])" ]
  }, {
    "_id" : "54",
    "_lesItems" : [ "S54:org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164028 (R36 in line [00130],R292 in line [00130],R293 in line [00130],R294 in line [00130],R295 in line [00130])", "S54:org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164028 (R36 in line [00130],R292 in line [00130],R293 in line [00130],R294 in line [00130],R295 in line [00130])", "S54:java.util.HashMap.remove@POLYN649661" ]
  }, {
    "_id" : "55",
    "_lesItems" : [ "S55:org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN164641 (R36 in line [00145],R296 in line [00145])", "S55:org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN164641 (R36 in line [00145],R296 in line [00145])", "S55:java.lang.Object.notifyAll@POLYN294461" ]
  }, {
    "_id" : "56",
    "_lesItems" : [ "S56:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN368904", "S56:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN383291", "S56:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN545853", "S56:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN546885", "S56:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN546885", "S56:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN372050 (R43 in line [00327],R44 in line [00327])", "S56:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN400070" ]
  }, {
    "_id" : "57",
    "_lesItems" : [ "S57:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN368904", "S57:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN383291", "S57:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN545853", "S57:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN546885", "S57:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN546885", "S57:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN384373 (R43 in line [00610],R45 in line [00610])", "S57:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN374859 (R43 in line [00397],R46 in line [00397])", "S57:org.apache.kafka.clients.producer.internals.TransactionalRequestResult.fail@POLYN148475" ]
  }, {
    "_id" : "58",
    "_lesItems" : [ "S58:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN465669", "S58:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S58:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S58:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN389337 (R43 in line [00718])", "S58:org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN377606 (R43 in line [00468],R50 in line [00468])", "S58:java.util.concurrent.ConcurrentHashMap.add@POLYN1668236" ]
  }, {
    "_id" : "59",
    "_lesItems" : [ "S59:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN465669", "S59:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S59:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S59:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S59:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN393355 (R43 in line [00810],R52 in line [00810])", "S59:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.fatalError@POLYN406610", "S59:org.apache.kafka.clients.producer.internals.TransactionalRequestResult.fail@POLYN148475" ]
  }, {
    "_id" : "60",
    "_lesItems" : [ "S60:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN465669", "S60:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S60:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S60:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S60:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495", "S60:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN353232", "S60:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN348729 (R55 in line [00799])", "S60:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN375869 (R43 in line [00426],R56 in line [00426])", "S60:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN151645", "S60:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN141900" ]
  }, {
    "_id" : "61",
    "_lesItems" : [ "S61:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN465669", "S61:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S61:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S61:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S61:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495", "S61:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN353232", "S61:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN348729 (R55 in line [00799])", "S61:org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN379977 (R43 in line [00521],R57 in line [00521],R58 in line [00521])", "S61:org.apache.kafka.clients.producer.internals.TransactionManager.sequenceNumber@POLYN379611 (R43 in line [00510])", "S61:org.apache.kafka.clients.producer.internals.TxnPartitionMap.getOrCreate@POLYN150310" ]
  }, {
    "_id" : "62",
    "_lesItems" : [ "S62:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN465669", "S62:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S62:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S62:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S62:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495", "S62:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN329177", "S62:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384968 (R43 in line [00624],R60 in line [00624],R61 in line [00624],R62 in line [00624])", "S62:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN384373 (R43 in line [00610],R45 in line [00610])", "S62:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN374859 (R43 in line [00397],R46 in line [00397])", "S62:org.apache.kafka.clients.producer.internals.TransactionalRequestResult.fail@POLYN148475" ]
  }, {
    "_id" : "63",
    "_lesItems" : [ "S63:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955", "S63:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955", "S63:org.apache.kafka.clients.producer.internals.Sender.maybeFindCoordinatorAndRetry@POLYN316642", "S63:org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN393177 (R43 in line [00805],R123 in line [00805])", "S63:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.setRetry@POLYN409469" ]
  }, {
    "_id" : "64",
    "_lesItems" : [ "S64:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318465", "S64:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318465", "S64:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN325881", "S64:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN383821 (R43 in line [00599],R168 in line [00599],R169 in line [00599])", "S64:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateLastAckedSequence@POLYN382086" ]
  }, {
    "_id" : "65",
    "_lesItems" : [ "S65:org.apache.kafka.clients.producer.internals.TransactionManager.isPartitionAdded@POLYN375293 (R43 in line [00407])", "S65:java.util.Hashtable.contains@POLYN417830 (R131 in line [00308])" ]
  }, {
    "_id" : "66",
    "_lesItems" : [ "S66:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN402642", "S66:java.util.Hashtable.putAll@POLYN429196 (R131 in line [00537],R132 in line [00537])", "S66:java.util.Hashtable.put@POLYN425722 (R131 in line [00472])", "S66:java.util.Hashtable.addEntry@POLYN424137", "S66:java.util.Hashtable.rehash@POLYN422252" ]
  }, {
    "_id" : "67",
    "_lesItems" : [ "S67:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN368904", "S67:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN383291", "S67:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN545853", "S67:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN546885", "S67:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN546885", "S67:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN372050 (R43 in line [00327],R44 in line [00327])", "S67:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN372050 (R43 in line [00327],R44 in line [00327])", "S67:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN400070" ]
  }, {
    "_id" : "68",
    "_lesItems" : [ "S68:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN465669", "S68:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S68:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S68:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S68:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN393355 (R43 in line [00810],R52 in line [00810])", "S68:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.fatalError@POLYN406610", "S68:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN374859 (R43 in line [00397],R46 in line [00397])", "S68:org.apache.kafka.clients.producer.internals.TransactionalRequestResult.fail@POLYN148475" ]
  }, {
    "_id" : "69",
    "_lesItems" : [ "S69:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN465669", "S69:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S69:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S69:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S69:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495", "S69:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN353232", "S69:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN348729 (R55 in line [00799])", "S69:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN375869 (R43 in line [00426],R56 in line [00426])", "S69:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN375869 (R43 in line [00426],R56 in line [00426])", "S69:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN151645", "S69:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN141900" ]
  }, {
    "_id" : "70",
    "_lesItems" : [ "S70:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232624 (R68 in line [00309],R69 in line [00309],R70 in line [00309])", "S70:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN462892", "S70:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN460679", "S70:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN459553", "S70:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN459553", "S70:org.apache.kafka.connect.runtime.Worker.stop@POLYN420183", "S70:org.apache.kafka.connect.runtime.Worker.stop@POLYN420183", "S70:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN494088 (R72 in line [01751])", "S70:org.apache.kafka.connect.runtime.ConnectMetrics.MetricGroup.close@POLYN231194 (R73 in line [00406])", "S70:org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN295450 (R74 in line [00449],R10 in line [00450])", "S70:java.util.HashMap.get@POLYN617315" ]
  }, {
    "_id" : "71",
    "_lesItems" : [ "S71:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232624 (R68 in line [00309],R69 in line [00309],R70 in line [00309])", "S71:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN161442" ]
  }, {
    "_id" : "72",
    "_lesItems" : [ "S72:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN228173 (R68 in line [00242],R128 in line [00242])", "S72:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN228173 (R68 in line [00242],R128 in line [00242])", "S72:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN238903", "S72:org.apache.kafka.connect.storage.ClusterConfigState.allTaskConfigs@POLYN200708", "S72:java.util.HashMap.getValue@POLYN606427" ]
  }, {
    "_id" : "73",
    "_lesItems" : [ "S73:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226295 (R68 in line [00201],R139 in line [00201],R140 in line [00201],R141 in line [00201],R142 in line [00201],R143 in line [00201])", "S73:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN433418", "S73:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN430150", "S73:java.util.HashMap.get@POLYN617315" ]
  }, {
    "_id" : "74",
    "_lesItems" : [ "S74:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN221801 (R68 in line [00105])", "S74:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN238423", "S74:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN462892", "S74:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN460679", "S74:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN459553", "S74:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN459553", "S74:org.apache.kafka.connect.runtime.Worker.stop@POLYN420183", "S74:org.apache.kafka.connect.runtime.Worker.stop@POLYN420183", "S74:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN494088 (R72 in line [01751])", "S74:org.apache.kafka.connect.runtime.ConnectMetrics.MetricGroup.close@POLYN231194 (R73 in line [00406])", "S74:org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN295450 (R74 in line [00449],R10 in line [00450])", "S74:java.util.HashMap.get@POLYN617315" ]
  }, {
    "_id" : "75",
    "_lesItems" : [ "S75:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN221801 (R68 in line [00105])", "S75:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN433418", "S75:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN430150", "S75:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN430150", "S75:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN218200 (R71 in line [00256])", "S75:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN218200 (R71 in line [00256])", "S75:java.lang.Object.notify@POLYN293724" ]
  }, {
    "_id" : "76",
    "_lesItems" : [ "S76:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224314 (R68 in line [00161],R145 in line [00161],R146 in line [00161])", "S76:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN238423", "S76:org.apache.kafka.connect.storage.ClusterConfigState.tasks@POLYN202655", "S76:java.util.HashMap.get@POLYN617315" ]
  }, {
    "_id" : "77",
    "_lesItems" : [ "S77:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN230008 (R68 in line [00274],R149 in line [00274],R150 in line [00274])", "S77:org.apache.kafka.connect.storage.ClusterConfigState.taskConfig@POLYN199759", "S77:java.util.HashMap.get@POLYN617315" ]
  }, {
    "_id" : "78",
    "_lesItems" : [ "S78:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN231421 (R68 in line [00291],R182 in line [00291],R183 in line [00291])", "S78:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN433418", "S78:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN430150", "S78:java.util.HashMap.get@POLYN617315" ]
  }, {
    "_id" : "79",
    "_lesItems" : [ "S79:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN222718 (R68 in line [00133],R306 in line [00133])", "S79:org.apache.kafka.connect.util.Callback.onCompletion" ]
  }, {
    "_id" : "80",
    "_lesItems" : [ "S80:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN222949 (R68 in line [00138],R307 in line [00138],R308 in line [00138])", "S80:org.apache.kafka.connect.util.Callback.onCompletion" ]
  }, {
    "_id" : "81",
    "_lesItems" : [ "S81:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN225382 (R68 in line [00181],R309 in line [00181],R310 in line [00181],R311 in line [00181],R312 in line [00181])", "S81:org.apache.kafka.connect.util.Callback.onCompletion" ]
  }, {
    "_id" : "82",
    "_lesItems" : [ "S82:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN228547 (R68 in line [00251],R313 in line [00251],R314 in line [00251])", "S82:java.util.concurrent.ConcurrentHashMap.add@POLYN1668236" ]
  }, {
    "_id" : "83",
    "_lesItems" : [ "S83:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232624 (R68 in line [00309],R69 in line [00309],R70 in line [00309])", "S83:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN433418", "S83:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN430150", "S83:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN430150", "S83:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN218200 (R71 in line [00256])", "S83:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN218200 (R71 in line [00256])", "S83:java.lang.Object.notify@POLYN293724" ]
  }, {
    "_id" : "84",
    "_lesItems" : [ "S84:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232624 (R68 in line [00309],R69 in line [00309],R70 in line [00309])", "S84:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232624 (R68 in line [00309],R69 in line [00309],R70 in line [00309])", "S84:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN161442" ]
  }, {
    "_id" : "85",
    "_lesItems" : [ "S85:org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN212162", "S85:org.apache.kafka.trogdor.workload.ProduceBenchWorker.SendRecords.call@POLYN212162", "S85:org.apache.kafka.clients.producer.KafkaProducer.close@POLYN562199", "S85:org.apache.kafka.clients.producer.KafkaProducer.close@POLYN563305", "S85:org.apache.kafka.clients.producer.KafkaProducer.close@POLYN563305", "S85:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN161809 (R81 in line [00072],R82 in line [00072],R83 in line [00072],R84 in line [00072])", "S85:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN161809 (R81 in line [00072],R82 in line [00072],R83 in line [00072],R84 in line [00072])", "S85:org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN163744", "S85:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN300599 (R10 in line [00690])", "S85:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN300599 (R10 in line [00690])", "S85:org.apache.kafka.common.metrics.MetricsReporter.metricRemoval" ]
  }, {
    "_id" : "86",
    "_lesItems" : [ "S86:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513489", "S86:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513489", "S86:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029 (R81 in line [00060],R86 in line [00060],R87 in line [00060],R88 in line [00060],R89 in line [00060])", "S86:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029 (R81 in line [00060],R86 in line [00060],R87 in line [00060],R88 in line [00060],R89 in line [00060])", "S86:org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN162927" ]
  }, {
    "_id" : "87",
    "_lesItems" : [ "S87:org.apache.kafka.streams.state.internals.ThreadCache.putIfAbsent@POLYN194235", "S87:org.apache.kafka.streams.state.internals.ThreadCache.getOrCreateCache@POLYN200402 (R96 in line [00285])", "S87:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193821", "S87:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555 (R97 in line [00157],R98 in line [00157],R99 in line [00157])", "S87:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143222" ]
  }, {
    "_id" : "88",
    "_lesItems" : [ "S88:org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN197813 (R97 in line [00256],R201 in line [00256])", "S88:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555 (R97 in line [00157],R98 in line [00157],R99 in line [00157])", "S88:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143222" ]
  }, {
    "_id" : "89",
    "_lesItems" : [ "S89:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN199240 (R96 in line [00254],R258 in line [00254])", "S89:org.apache.kafka.streams.state.internals.NamedCache.close@POLYN202156 (R97 in line [00345])", "S89:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllCacheLevelSensors@POLYN297069 (R259 in line [00462])", "S89:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheSensorPrefix@POLYN297720" ]
  }, {
    "_id" : "90",
    "_lesItems" : [ "S90:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190309 (R96 in line [00075],R173 in line [00075])", "S90:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190309 (R96 in line [00075],R173 in line [00075])", "S90:org.apache.kafka.common.utils.CircularIterator.next@POLYN155440", "S90:org.apache.kafka.common.utils.CircularIterator.advance@POLYN155780" ]
  }, {
    "_id" : "91",
    "_lesItems" : [ "S91:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN199240 (R96 in line [00254],R258 in line [00254])", "S91:java.util.Hashtable.remove@POLYN476052" ]
  }, {
    "_id" : "92",
    "_lesItems" : [ "S92:org.apache.kafka.streams.state.internals.ThreadCache.putIfAbsent@POLYN194235", "S92:org.apache.kafka.streams.state.internals.ThreadCache.getOrCreateCache@POLYN200402 (R96 in line [00285])", "S92:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193821", "S92:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555 (R97 in line [00157],R98 in line [00157],R99 in line [00157])", "S92:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555 (R97 in line [00157],R98 in line [00157],R99 in line [00157])", "S92:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143222" ]
  }, {
    "_id" : "93",
    "_lesItems" : [ "S93:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN251793 (R3 in line [00249],R104 in line [00249],R105 in line [00249],R106 in line [00249])", "S93:org.apache.kafka.clients.Metadata.update@POLYN252367 (R3 in line [00263],R107 in line [00263],R108 in line [00263],R109 in line [00263],R110 in line [00263])", "S93:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN255371", "S93:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN255371", "S93:org.apache.kafka.clients.Metadata.requestUpdate@POLYN246887 (R3 in line [00145])" ]
  }, {
    "_id" : "94",
    "_lesItems" : [ "S94:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN251793 (R3 in line [00249],R104 in line [00249],R105 in line [00249],R106 in line [00249])", "S94:org.apache.kafka.clients.Metadata.update@POLYN252367 (R3 in line [00263],R107 in line [00263],R108 in line [00263],R109 in line [00263],R110 in line [00263])", "S94:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN255371", "S94:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN255371", "S94:org.apache.kafka.common.requests.MetadataResponse.brokersById@POLYN221073", "S94:org.apache.kafka.common.requests.MetadataResponse.holder@POLYN220466 (R111 in line [00001])", "S94:org.apache.kafka.common.requests.MetadataResponse.Holder.Holder@POLYN228615", "S94:java.util.Map.get@POLYN426239" ]
  }, {
    "_id" : "95",
    "_lesItems" : [ "S95:org.apache.kafka.streams.state.internals.CachingWindowStore.init@POLYN231252", "S95:org.apache.kafka.streams.state.internals.CachingWindowStore.initInternal@POLYN232194", "S95:org.apache.kafka.streams.state.internals.CachingWindowStore.putAndMaybeForward@POLYN232978", "S95:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235768 (R115 in line [00156],R116 in line [00156],R117 in line [00156],R118 in line [00156])", "S95:org.apache.kafka.streams.state.internals.WrappedStateStore.validateStoreOpen@POLYN158435" ]
  }, {
    "_id" : "96",
    "_lesItems" : [ "S96:org.apache.kafka.streams.state.internals.CachingWindowStore.init@POLYN231252", "S96:org.apache.kafka.streams.state.internals.CachingWindowStore.initInternal@POLYN232194", "S96:org.apache.kafka.streams.state.internals.CachingWindowStore.putAndMaybeForward@POLYN232978", "S96:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235768 (R115 in line [00156],R116 in line [00156],R117 in line [00156],R118 in line [00156])", "S96:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235768 (R115 in line [00156],R116 in line [00156],R117 in line [00156],R118 in line [00156])", "S96:org.apache.kafka.streams.state.internals.WrappedStateStore.validateStoreOpen@POLYN158435" ]
  }, {
    "_id" : "97",
    "_lesItems" : [ "S97:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN253275", "S97:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN255964", "S97:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258997 (R124 in line [00260],R125 in line [00260],R126 in line [00260],R127 in line [00260])", "S97:org.apache.kafka.streams.state.internals.WrappedStateStore.validateStoreOpen@POLYN158435" ]
  }, {
    "_id" : "98",
    "_lesItems" : [ "S98:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN253275", "S98:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN255964", "S98:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258997 (R124 in line [00260],R125 in line [00260],R126 in line [00260],R127 in line [00260])", "S98:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258997 (R124 in line [00260],R125 in line [00260],R126 in line [00260],R127 in line [00260])", "S98:org.apache.kafka.streams.state.internals.WrappedStateStore.validateStoreOpen@POLYN158435" ]
  }, {
    "_id" : "99",
    "_lesItems" : [ "S99:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN228173 (R68 in line [00242],R128 in line [00242])", "S99:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN228173 (R68 in line [00242],R128 in line [00242])", "S99:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN238903", "S99:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN238423", "S99:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN462892", "S99:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN460679", "S99:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN459553", "S99:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN459553", "S99:org.apache.kafka.connect.runtime.Worker.stop@POLYN420183", "S99:org.apache.kafka.connect.runtime.Worker.stop@POLYN420183", "S99:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN494088 (R72 in line [01751])", "S99:org.apache.kafka.connect.runtime.ConnectMetrics.MetricGroup.close@POLYN231194 (R73 in line [00406])", "S99:org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN295450 (R74 in line [00449],R10 in line [00450])", "S99:java.util.HashMap.get@POLYN617315" ]
  }, {
    "_id" : "100",
    "_lesItems" : [ "S100:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN402642", "S100:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN408732", "S100:org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN242549 (R133 in line [00389],R134 in line [00389],R135 in line [00389])", "S100:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "101",
    "_lesItems" : [ "S101:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN402642", "S101:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN408732", "S101:org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN241244 (R133 in line [00357],R136 in line [00357])", "S101:java.util.Map.putAll" ]
  }, {
    "_id" : "102",
    "_lesItems" : [ "S102:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN402642", "S102:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN408732", "S102:org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN241668 (R133 in line [00367],R137 in line [00367])", "S102:java.util.Map.putAll" ]
  }, {
    "_id" : "103",
    "_lesItems" : [ "S103:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231332 (R133 in line [00163])", "S103:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231566 (R133 in line [00168],R152 in line [00175])", "S103:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "104",
    "_lesItems" : [ "S104:org.apache.kafka.clients.consumer.MockConsumer.position@POLYN240134 (R133 in line [00334])", "S104:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN330545 (R2 in line [00539])", "S104:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126", "S104:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "105",
    "_lesItems" : [ "S105:org.apache.kafka.clients.consumer.MockConsumer.rebalance@POLYN228133 (R133 in line [00096],R188 in line [00096])", "S105:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN318181 (R2 in line [00275],R22 in line [00275])", "S105:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "106",
    "_lesItems" : [ "S106:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN228742 (R133 in line [00113],R189 in line [00113],R190 in line [00113])", "S106:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "107",
    "_lesItems" : [ "S107:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN237783 (R133 in line [00280])", "S107:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN238106", "S107:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN237211 (R133 in line [00264],R191 in line [00264])", "S107:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN236595 (R133 in line [00254],R192 in line [00254],R193 in line [00254])", "S107:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "108",
    "_lesItems" : [ "S108:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN237936 (R133 in line [00285],R194 in line [00285])", "S108:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN238106", "S108:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN237211 (R133 in line [00264],R191 in line [00264])", "S108:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN236595 (R133 in line [00254],R192 in line [00254],R193 in line [00254])", "S108:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "109",
    "_lesItems" : [ "S109:org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN238316 (R133 in line [00295],R211 in line [00295],R212 in line [00295])", "S109:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "110",
    "_lesItems" : [ "S110:org.apache.kafka.clients.consumer.MockConsumer.seekToBeginning@POLYN241010 (R133 in line [00352],R221 in line [00352])", "S110:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "111",
    "_lesItems" : [ "S111:org.apache.kafka.clients.consumer.MockConsumer.seekToEnd@POLYN241434 (R133 in line [00362],R222 in line [00362])", "S111:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "112",
    "_lesItems" : [ "S112:org.apache.kafka.clients.consumer.MockConsumer.pause@POLYN242824 (R133 in line [00395],R241 in line [00395])", "S112:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN339974 (R2 in line [00739],R164 in line [00739])", "S112:org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.pause@POLYN349310" ]
  }, {
    "_id" : "113",
    "_lesItems" : [ "S113:org.apache.kafka.clients.consumer.MockConsumer.resume@POLYN243146 (R133 in line [00403],R242 in line [00403])", "S113:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN340125 (R2 in line [00743],R165 in line [00743])", "S113:org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.resume@POLYN349417" ]
  }, {
    "_id" : "114",
    "_lesItems" : [ "S114:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN228535 (R133 in line [00108],R263 in line [00108])", "S114:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230359 (R133 in line [00141],R264 in line [00141],R265 in line [00141])", "S114:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "115",
    "_lesItems" : [ "S115:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230173 (R133 in line [00136],R266 in line [00136])", "S115:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230359 (R133 in line [00141],R264 in line [00141],R265 in line [00141])", "S115:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "116",
    "_lesItems" : [ "S116:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237417 (R133 in line [00269])", "S116:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237542 (R133 in line [00274],R267 in line [00274])", "S116:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "117",
    "_lesItems" : [ "S117:org.apache.kafka.clients.consumer.MockConsumer.assign@POLYN230737 (R133 in line [00148],R285 in line [00148])", "S117:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "118",
    "_lesItems" : [ "S118:org.apache.kafka.clients.consumer.MockConsumer.addRecord@POLYN235241 (R133 in line [00227],R286 in line [00227])", "S118:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "119",
    "_lesItems" : [ "S119:org.apache.kafka.clients.consumer.MockConsumer.setException@POLYN236186 (R133 in line [00241],R287 in line [00241])", "S119:org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN236317 (R133 in line [00245],R288 in line [00245])" ]
  }, {
    "_id" : "120",
    "_lesItems" : [ "S120:org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN246393 (R133 in line [00473],R289 in line [00473],R152 in line [00474])", "S120:java.util.concurrent.ConcurrentHashMap.add@POLYN1668236" ]
  }, {
    "_id" : "121",
    "_lesItems" : [ "S121:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN245678", "S121:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN245840 (R133 in line [00455],R338 in line [00455])" ]
  }, {
    "_id" : "122",
    "_lesItems" : [ "S122:org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN182968 (R147 in line [00166])", "S122:org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN182968 (R147 in line [00166])", "S122:org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN185374", "S122:org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN185374", "S122:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN300599 (R10 in line [00690])", "S122:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN300599 (R10 in line [00690])", "S122:org.apache.kafka.common.metrics.MetricsReporter.metricRemoval" ]
  }, {
    "_id" : "123",
    "_lesItems" : [ "S123:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN186656 (R147 in line [00235],R301 in line [00235])", "S123:java.util.HashMap.get@POLYN617315" ]
  }, {
    "_id" : "124",
    "_lesItems" : [ "S124:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231332 (R133 in line [00163])", "S124:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231566 (R133 in line [00168],R152 in line [00175])", "S124:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231566 (R133 in line [00168],R152 in line [00175])", "S124:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "125",
    "_lesItems" : [ "S125:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165236 (R171 in line [00139],R172 in line [00139])", "S125:org.apache.kafka.snapshot.RecordsSnapshotReader.next@POLYN154951", "S125:java.util.HashMap.get@POLYN617315" ]
  }, {
    "_id" : "126",
    "_lesItems" : [ "S126:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN162770 (R171 in line [00076],R215 in line [00076])", "S126:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN162770 (R171 in line [00076],R215 in line [00076])", "S126:org.apache.kafka.raft.Batch.lastOffset@POLYN161886" ]
  }, {
    "_id" : "127",
    "_lesItems" : [ "S127:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165236 (R171 in line [00139],R172 in line [00139])", "S127:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165236 (R171 in line [00139],R172 in line [00139])", "S127:org.apache.kafka.snapshot.RecordsSnapshotReader.next@POLYN154951", "S127:java.util.HashMap.get@POLYN617315" ]
  }, {
    "_id" : "128",
    "_lesItems" : [ "S128:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190309 (R96 in line [00075],R173 in line [00075])", "S128:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190309 (R96 in line [00075],R173 in line [00075])", "S128:org.apache.kafka.streams.state.internals.NamedCache.evict@POLYN196872 (R97 in line [00235])", "S128:org.apache.kafka.streams.state.internals.NamedCache.remove@POLYN195806" ]
  }, {
    "_id" : "129",
    "_lesItems" : [ "S129:org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetIfNeeded@POLYN497795", "S129:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323236 (R2 in line [00392],R202 in line [00392],R203 in line [00392],R204 in line [00392])", "S129:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323236 (R2 in line [00392],R202 in line [00392],R203 in line [00392],R204 in line [00392])", "S129:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN322491", "S129:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "130",
    "_lesItems" : [ "S130:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163428 (R217 in line [00095],R218 in line [00095])", "S130:org.apache.kafka.common.utils.Time.milliseconds@POLYN153117" ]
  }, {
    "_id" : "131",
    "_lesItems" : [ "S131:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163428 (R217 in line [00095],R218 in line [00095])", "S131:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163428 (R217 in line [00095],R218 in line [00095])", "S131:org.apache.kafka.common.utils.Time.milliseconds@POLYN153117" ]
  }, {
    "_id" : "132",
    "_lesItems" : [ "S132:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420488 (R21 in line [01023],R224 in line [01023],R225 in line [01023],R226 in line [01023])", "S132:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN420190 (R21 in line [01017],R155 in line [01017],R156 in line [01017])", "S132:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN419491 (R21 in line [01004],R157 in line [01004],R158 in line [01004])" ]
  }, {
    "_id" : "133",
    "_lesItems" : [ "S133:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN160790 (R248 in line [00084],R249 in line [00084])", "S133:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN160247 (R248 in line [00076],R250 in line [00076])", "S133:org.apache.kafka.connect.util.Table.remove@POLYN148503", "S133:java.util.Hashtable.remove@POLYN476052" ]
  }, {
    "_id" : "134",
    "_lesItems" : [ "S134:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN160102 (R248 in line [00071],R273 in line [00071])", "S134:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN159723 (R248 in line [00063],R274 in line [00063])", "S134:java.util.HashMap.remove@POLYN649661" ]
  }, {
    "_id" : "135",
    "_lesItems" : [ "S135:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237417 (R133 in line [00269])", "S135:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237542 (R133 in line [00274],R267 in line [00274])", "S135:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237542 (R133 in line [00274],R267 in line [00274])", "S135:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "136",
    "_lesItems" : [ "S136:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN186656 (R147 in line [00235],R301 in line [00235])", "S136:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN186656 (R147 in line [00235],R301 in line [00235])", "S136:java.util.HashMap.get@POLYN617315" ]
  } ],
  "_lesDeadlocksTypos" : [ ]
}