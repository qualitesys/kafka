{
  "_lesSequences" : [ {
    "_id" : "1",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "9",
      "_source" : "java.io.InputStream.read@POLYN246846.0",
      "_method" : "---dummymethode in line [00168]",
      "_target" : "java.io.InputStream.read@POLYN246846.return",
      "_risk" : "//QC-JAVCWZ099[00168] In java.io.InputStream.read@POLYN246846[00168] source data PATHtainted (java.io.InputStream.read)"
    }, {
      "_id" : "8",
      "_source" : "java.io.InputStream.read@POLYN246846.return",
      "_method" : "---java.io.InputStream.read@POLYN246846 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873941.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN873941[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873941.nbytes",
      "_method" : "---dummymethode in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873941.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873941.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN873941 in line [03031]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890306.nread",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890306.nread",
      "_method" : "---dummymethode in line [03029]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890306.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890306.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890306 in line [00893]",
      "_target" : "java.io.ObjectInputStream.read@POLYN805040.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.read@POLYN805040.return",
      "_method" : "---java.io.ObjectInputStream.read@POLYN805040 in line [03091]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893959.v",
      "_risk" : "//QC-JAVCWZ099[03091] In java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893959[03091] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893959.v",
      "_method" : "---dummymethode in line [03095]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893959.return",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893959.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893959 in line [00979]",
      "_target" : "java.io.ObjectInputStream.readUnsignedByte@POLYN807803.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "2",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "9",
      "_source" : "java.io.InputStream.read@POLYN246846.-1",
      "_method" : "---dummymethode in line [00173]",
      "_target" : "java.io.InputStream.read@POLYN246846.return",
      "_risk" : "//QC-JAVCWZ099[00173] In java.io.InputStream.read@POLYN246846[00173] source data PATHtainted (java.io.InputStream.read)"
    }, {
      "_id" : "8",
      "_source" : "java.io.InputStream.read@POLYN246846.return",
      "_method" : "---java.io.InputStream.read@POLYN246846 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873941.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN873941[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873941.nbytes",
      "_method" : "---dummymethode in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873941.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873941.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN873941 in line [03031]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890306.nread",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890306.nread",
      "_method" : "---dummymethode in line [03029]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890306.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890306.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890306 in line [00893]",
      "_target" : "java.io.ObjectInputStream.read@POLYN805040.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.read@POLYN805040.return",
      "_method" : "---java.io.ObjectInputStream.read@POLYN805040 in line [03091]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893959.v",
      "_risk" : "//QC-JAVCWZ099[03091] In java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893959[03091] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893959.v",
      "_method" : "---dummymethode in line [03095]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893959.return",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893959.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893959 in line [00979]",
      "_target" : "java.io.ObjectInputStream.readUnsignedByte@POLYN807803.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "3",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "10",
      "_source" : "1",
      "_method" : "---dummymethode in line [00177]",
      "_target" : "java.io.InputStream.read@POLYN246846.i",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.io.InputStream.read@POLYN246846.i",
      "_method" : "---dummymethode in line [00188]",
      "_target" : "java.io.InputStream.read@POLYN246846.return",
      "_risk" : "//QC-JAVCWE099[00188] In java.io.InputStream.read@POLYN246846[00188] source data PATHtainted (java.io.InputStream.read)"
    }, {
      "_id" : "8",
      "_source" : "java.io.InputStream.read@POLYN246846.return",
      "_method" : "---java.io.InputStream.read@POLYN246846 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873941.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN873941[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873941.nbytes",
      "_method" : "---dummymethode in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873941.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873941.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN873941 in line [03031]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890306.nread",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890306.nread",
      "_method" : "---dummymethode in line [03029]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890306.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890306.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890306 in line [00893]",
      "_target" : "java.io.ObjectInputStream.read@POLYN805040.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.read@POLYN805040.return",
      "_method" : "---java.io.ObjectInputStream.read@POLYN805040 in line [03091]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893959.v",
      "_risk" : "//QC-JAVCWZ099[03091] In java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893959[03091] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893959.v",
      "_method" : "---dummymethode in line [03095]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893959.return",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893959.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893959 in line [00979]",
      "_target" : "java.io.ObjectInputStream.readUnsignedByte@POLYN807803.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "4",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.util.Map.get@POLYN428707.return",
      "_method" : "---java.util.Map.get@POLYN428707 in line [01109]",
      "_target" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.getTheActualPartitionToBeMoved@POLYN404643.return",
      "_risk" : "//QC-JAVCWE099[01109] In org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.getTheActualPartitionToBeMoved@POLYN404643[01109] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.getTheActualPartitionToBeMoved@POLYN404643.return",
      "_method" : "---org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.getTheActualPartitionToBeMoved@POLYN404643 in line [00965]",
      "_target" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.reassignPartition@POLYN396686.partitionToBeMoved",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.reassignPartition@POLYN396686.partitionToBeMoved",
      "_method" : "---org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.processPartitionMovement@POLYN397348 in line [00966]",
      "_target" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.processPartitionMovement@POLYN397348.partition",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.processPartitionMovement@POLYN397348.partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.movePartition@POLYN403803 in line [00979]",
      "_target" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.movePartition@POLYN403803.partition",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.movePartition@POLYN403803.partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.addPartitionMovementRecord@POLYN402877 in line [01089]",
      "_target" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.addPartitionMovementRecord@POLYN402877.partition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.addPartitionMovementRecord@POLYN402877.partition",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [01063]",
      "_target" : "java.util.HashMap.put@POLYN621976.key",
      "_risk" : "//QC-JAVCWE099[01063] In org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.PartitionMovements.addPartitionMovementRecord@POLYN402877[01063] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "5",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.util.HashMap.Node@POLYN607190.key",
      "_method" : "---dummymethode in line [00286]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00286] In java.util.HashMap.Node.Node@POLYN607190[00286] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN607634.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN607634[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN607634.return",
      "_method" : "---java.util.HashMap.getKey@POLYN607634 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN211690.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN211690[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN211690.topic",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621976.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN211690[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "6",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.admin.internals.CoordinatorKey.byTransactionalId@POLYN148129.return",
      "_method" : "---org.apache.kafka.clients.admin.internals.CoordinatorKey.byTransactionalId@POLYN148129 in line [00076]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00076] In org.apache.kafka.clients.admin.FenceProducersResult[00076] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN607634.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN607634[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN607634.return",
      "_method" : "---java.util.HashMap.getKey@POLYN607634 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN211690.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN211690[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN211690.topic",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621976.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN211690[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "7",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.admin.internals.AdminApiDriver.BiMultimap.remove@POLYN238986.sourcedummy",
      "_method" : "---java.util.Hashtable.remove@POLYN477056 in line [00469]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00469] In org.apache.kafka.clients.admin.internals.AdminApiDriver.BiMultimap.remove@POLYN238986[00469] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN607634.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN607634[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN607634.return",
      "_method" : "---java.util.HashMap.getKey@POLYN607634 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN211690.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN211690[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN211690.topic",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621976.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN211690[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "8",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.storage.Converter.fromConnectData@POLYN159564.return",
      "_method" : "---org.apache.kafka.connect.storage.Converter.fromConnectData@POLYN159564 in line [00087]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00087] In org.apache.kafka.connect.runtime.errors.WorkerErrantRecordReporter.report@POLYN171404[00087] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN607634.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN607634[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN607634.return",
      "_method" : "---java.util.HashMap.getKey@POLYN607634 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN211690.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN211690[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN211690.topic",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621976.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN211690[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "9",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.serialization.Deserializer.deserialize@POLYN152400.return",
      "_method" : "---org.apache.kafka.common.serialization.Deserializer.deserialize@POLYN152400 in line [00825]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00825] In org.apache.kafka.streams.TopologyTestDriver[00825] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN607634.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN607634[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN607634.return",
      "_method" : "---java.util.HashMap.getKey@POLYN607634 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN211690.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN211690[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN211690.topic",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621976.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN211690[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "10",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.storeSensorPrefix@POLYN302602.return",
      "_method" : "---org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.storeSensorPrefix@POLYN302602 in line [00506]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00506] In org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl[00506] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN607634.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN607634[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN607634.return",
      "_method" : "---java.util.HashMap.getKey@POLYN607634 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN211690.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN211690[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN211690.topic",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621976.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN211690[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "11",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "null",
      "_method" : "---dummymethode in line [00077]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00077] In org.apache.kafka.streams.state.internals.DelegatingPeekingKeyValueIterator.next@POLYN151866[00077] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN607634.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN607634[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN607634.return",
      "_method" : "---java.util.HashMap.getKey@POLYN607634 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN211690.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN211690[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN211690.topic",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621976.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN211690[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "12",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.state.internals.MeteredSessionStore.keyBytes@POLYN236286.return",
      "_method" : "---org.apache.kafka.streams.state.internals.MeteredSessionStore.keyBytes@POLYN236286 in line [00186]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00186] In org.apache.kafka.streams.state.internals.MeteredSessionStore.put@POLYN223170[00186] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN607634.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN607634[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN607634.return",
      "_method" : "---java.util.HashMap.getKey@POLYN607634 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN211690.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN211690[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN211690.topic",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621976.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN211690[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "13",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.state.internals.PrefixedSessionKeySchemas.KeyFirstSessionKeySchema.sourcedummy",
      "_method" : "---org.apache.kafka.streams.state.internals.PrefixedSessionKeySchemas.KeyFirstSessionKeySchema.extractKey@POLYN221416 in line [00333]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00333] In org.apache.kafka.streams.state.internals.PrefixedSessionKeySchemas.KeyFirstSessionKeySchema[00333] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN607634.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN607634[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN607634.return",
      "_method" : "---java.util.HashMap.getKey@POLYN607634 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN211690.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN211690[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN211690.topic",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621976.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN211690[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "14",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.state.internals.PrefixedSessionKeySchemas.TimeFirstSessionKeySchema.sourcedummy",
      "_method" : "---org.apache.kafka.streams.state.internals.PrefixedSessionKeySchemas.TimeFirstSessionKeySchema.extractKey@POLYN210973 in line [00182]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00182] In org.apache.kafka.streams.state.internals.PrefixedSessionKeySchemas.TimeFirstSessionKeySchema[00182] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN607634.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN607634[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN607634.return",
      "_method" : "---java.util.HashMap.getKey@POLYN607634 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN211690.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN211690[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN211690.topic",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621976.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN211690[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "15",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.state.internals.SessionKeySchema.sourcedummy",
      "_method" : "---org.apache.kafka.streams.state.internals.SessionKeySchema.extractKey@POLYN179191 in line [00144]",
      "_target" : "java.util.HashMap.key",
      "_risk" : "//QC-JAVCWE099[00144] In org.apache.kafka.streams.state.internals.SessionKeySchema[00144] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---dummymethode in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN607634.return",
      "_risk" : "//QC-JAVCWE099[00291] In java.util.HashMap.Node.getKey@POLYN607634[00291] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN607634.return",
      "_method" : "---java.util.HashMap.getKey@POLYN607634 in line [00164]",
      "_target" : "org.apache.kafka.common.Cluster.Cluster@POLYN211690.topic",
      "_risk" : "//QC-JAVCWE099[00164] In org.apache.kafka.common.Cluster.Cluster@POLYN211690[00164] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.Cluster.Cluster@POLYN211690.topic",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00166]",
      "_target" : "java.util.HashMap.put@POLYN621976.key",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.common.Cluster.Cluster@POLYN211690[00166] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "16",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "7",
      "_source" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.constrainedAssign@POLYN356392.assignment",
      "_method" : "---dummymethode in line [00349]",
      "_target" : "java.util.Map.values@POLYN433546.return",
      "_risk" : "//QC-JAVCWE099[00349] In org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.constrainedAssign@POLYN356392[00349] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "6",
      "_source" : "java.util.Map.values@POLYN433546.return",
      "_method" : "---java.util.Map.values@POLYN433546 in line [03486]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[03486] In org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1139671[03486] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
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
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843.tp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891.tp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN621976.key",
      "_risk" : "//QC-JAVCWE099[00058] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931[00058] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "17",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "7",
      "_source" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.generalAssign@POLYN366435.currentAssignment",
      "_method" : "---dummymethode in line [00484]",
      "_target" : "java.util.Map.values@POLYN433546.return",
      "_risk" : "//QC-JAVCWE099[00484] In org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.generalAssign@POLYN366435[00484] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "6",
      "_source" : "java.util.Map.values@POLYN433546.return",
      "_method" : "---java.util.Map.values@POLYN433546 in line [03486]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[03486] In org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1139671[03486] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
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
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843.tp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891.tp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN621976.key",
      "_risk" : "//QC-JAVCWE099[00058] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931[00058] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "18",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "8",
      "_source" : "java.util.Map.getValue@POLYN435492.return",
      "_method" : "---java.util.Map.getValue@POLYN435492 in line [00843]",
      "_target" : "java.io.FileInputStream.channel",
      "_risk" : "//QC-JAVCWE099[00843] In org.apache.kafka.common.network.Selector.clear@POLYN430835[00843] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.FileInputStream.channel",
      "_method" : "---dummymethode in line [01029]",
      "_target" : "java.util.Map.values@POLYN433546.return",
      "_risk" : "//QC-JAVCWE099[01029] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN438742[01029] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "6",
      "_source" : "java.util.Map.values@POLYN433546.return",
      "_method" : "---java.util.Map.values@POLYN433546 in line [03486]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[03486] In org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1139671[03486] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
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
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843.tp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891.tp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN621976.key",
      "_risk" : "//QC-JAVCWE099[00058] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931[00058] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "19",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "9",
      "_source" : "java.util.HashMap.get@POLYN618616.return",
      "_method" : "---java.util.HashMap.get@POLYN618616 in line [00999]",
      "_target" : "org.apache.kafka.common.network.Selector.channel@POLYN438038.return",
      "_risk" : "//QC-JAVCWE099[00999] In org.apache.kafka.common.network.Selector.channel@POLYN438038[00999] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "8",
      "_source" : "org.apache.kafka.common.network.Selector.channel@POLYN438038.return",
      "_method" : "---org.apache.kafka.common.network.Selector.channel@POLYN438038 in line [01025]",
      "_target" : "java.io.FileInputStream.channel",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.FileInputStream.channel",
      "_method" : "---dummymethode in line [01029]",
      "_target" : "java.util.Map.values@POLYN433546.return",
      "_risk" : "//QC-JAVCWE099[01029] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN438742[01029] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "6",
      "_source" : "java.util.Map.values@POLYN433546.return",
      "_method" : "---java.util.Map.values@POLYN433546 in line [03486]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[03486] In org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1139671[03486] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
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
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843.tp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891.tp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN621976.key",
      "_risk" : "//QC-JAVCWE099[00058] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931[00058] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "20",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "9",
      "_source" : "org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToThreads@POLYN409284.assignment",
      "_method" : "---dummymethode in line [01178]",
      "_target" : "java.util.Map.values@POLYN433546.return",
      "_risk" : "//QC-JAVCWE099[01178] In org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToThreads@POLYN409284[01178] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "8",
      "_source" : "java.util.Map.values@POLYN433546.return",
      "_method" : "---java.util.Map.values@POLYN433546 in line [01027]",
      "_target" : "java.io.FileInputStream.channel",
      "_risk" : "//QC-JAVCWE099[01027] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN438742[01027] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.FileInputStream.channel",
      "_method" : "---dummymethode in line [01029]",
      "_target" : "java.util.Map.values@POLYN433546.return",
      "_risk" : "//QC-JAVCWE099[01029] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN438742[01029] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "6",
      "_source" : "java.util.Map.values@POLYN433546.return",
      "_method" : "---java.util.Map.values@POLYN433546 in line [03486]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[03486] In org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1139671[03486] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
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
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843.tp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891.tp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN621976.key",
      "_risk" : "//QC-JAVCWE099[00058] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931[00058] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "21",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "9",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer.getSamePartitions@POLYN170663.partitions",
      "_method" : "---dummymethode in line [00166]",
      "_target" : "java.util.Map.values@POLYN433546.return",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer.getSamePartitions@POLYN170663[00166] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "8",
      "_source" : "java.util.Map.values@POLYN433546.return",
      "_method" : "---java.util.Map.values@POLYN433546 in line [01027]",
      "_target" : "java.io.FileInputStream.channel",
      "_risk" : "//QC-JAVCWE099[01027] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN438742[01027] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.FileInputStream.channel",
      "_method" : "---dummymethode in line [01029]",
      "_target" : "java.util.Map.values@POLYN433546.return",
      "_risk" : "//QC-JAVCWE099[01029] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN438742[01029] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "6",
      "_source" : "java.util.Map.values@POLYN433546.return",
      "_method" : "---java.util.Map.values@POLYN433546 in line [03486]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[03486] In org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1139671[03486] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
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
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843.tp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891.tp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN621976.key",
      "_risk" : "//QC-JAVCWE099[00058] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931[00058] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "22",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "9",
      "_source" : "org.apache.kafka.trogdor.workload.ConsumeBenchWorker.Prepare.consumeTasks@POLYN229439.tasks",
      "_method" : "---dummymethode in line [00142]",
      "_target" : "java.util.Map.values@POLYN433546.return",
      "_risk" : "//QC-JAVCWE099[00142] In org.apache.kafka.trogdor.workload.ConsumeBenchWorker.Prepare.consumeTasks@POLYN229439[00142] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "8",
      "_source" : "java.util.Map.values@POLYN433546.return",
      "_method" : "---java.util.Map.values@POLYN433546 in line [01027]",
      "_target" : "java.io.FileInputStream.channel",
      "_risk" : "//QC-JAVCWE099[01027] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN438742[01027] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.FileInputStream.channel",
      "_method" : "---dummymethode in line [01029]",
      "_target" : "java.util.Map.values@POLYN433546.return",
      "_risk" : "//QC-JAVCWE099[01029] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN438742[01029] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "6",
      "_source" : "java.util.Map.values@POLYN433546.return",
      "_method" : "---java.util.Map.values@POLYN433546 in line [03486]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[03486] In org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1139671[03486] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
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
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843.tp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891.tp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN621976.key",
      "_risk" : "//QC-JAVCWE099[00058] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931[00058] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "23",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.util.Map.getKey@POLYN435159.return",
      "_method" : "---java.util.Map.getKey@POLYN435159 in line [00434]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[00434] In org.apache.kafka.connect.runtime.WorkerSinkTask.commitOffsets@POLYN298273[00434] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
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
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843.tp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891.tp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN621976.key",
      "_risk" : "//QC-JAVCWE099[00058] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931[00058] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "24",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "8",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readInt@POLYN896238.v",
      "_method" : "---dummymethode in line [03143]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readInt@POLYN896238.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readInt@POLYN896238.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readInt@POLYN896238 in line [01023]",
      "_target" : "java.io.ObjectInputStream.readInt@POLYN808886.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.readInt@POLYN808886.return",
      "_method" : "---java.io.ObjectInputStream.readInt@POLYN808886 in line [00057]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[00057] In org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.readTaskIdFrom@POLYN159625[00057] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
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
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843.tp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891.tp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN621976.key",
      "_risk" : "//QC-JAVCWE099[00058] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931[00058] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "25",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "8",
      "_source" : "java.io.BufferedInputStream.read@POLYN245332.0",
      "_method" : "---dummymethode in line [00340]",
      "_target" : "java.io.BufferedInputStream.read@POLYN245332.return",
      "_risk" : "//QC-JAVCWE099[00340] In java.io.BufferedInputStream.read@POLYN245332[00340] source data PATHtainted (java.io.BufferedInputStream.read)"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedInputStream.read@POLYN245332.return",
      "_method" : "---java.io.BufferedInputStream.read@POLYN245332 in line [00244]",
      "_target" : "record",
      "_risk" : "//QC-JAVCWE099[00244] In org.apache.kafka.raft.internals.RecordsIterator.readRecord@POLYN181021[00244] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "record",
      "_method" : "---dummymethode in line [00188]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN182596.result",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN182596.result",
      "_method" : "---dummymethode in line [00190]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN182596.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN182596.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN182596 in line [00091]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN176843.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN176843.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN176843 in line [00064]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.project@POLYN175792.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.project@POLYN175792.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.project@POLYN175792 in line [00152]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN181463.retKey",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN181463.retKey",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00154]",
      "_target" : "java.util.HashMap.put@POLYN621976.key",
      "_risk" : "//QC-JAVCWE099[00154] In org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN181463[00154] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "26",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "9",
      "_source" : "0",
      "_method" : "---dummymethode in line [00343]",
      "_target" : "java.io.BufferedInputStream.read@POLYN245332.n",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.io.BufferedInputStream.read@POLYN245332.n",
      "_method" : "---dummymethode in line [00350]",
      "_target" : "java.io.BufferedInputStream.read@POLYN245332.return",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedInputStream.read@POLYN245332[00350] source data PATHtainted (java.io.BufferedInputStream.read)"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedInputStream.read@POLYN245332.return",
      "_method" : "---java.io.BufferedInputStream.read@POLYN245332 in line [00244]",
      "_target" : "record",
      "_risk" : "//QC-JAVCWE099[00244] In org.apache.kafka.raft.internals.RecordsIterator.readRecord@POLYN181021[00244] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "record",
      "_method" : "---dummymethode in line [00188]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN182596.result",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN182596.result",
      "_method" : "---dummymethode in line [00190]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN182596.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN182596.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN182596 in line [00091]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN176843.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN176843.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN176843 in line [00064]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.project@POLYN175792.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.project@POLYN175792.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.project@POLYN175792 in line [00152]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN181463.retKey",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN181463.retKey",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00154]",
      "_target" : "java.util.HashMap.put@POLYN621976.key",
      "_risk" : "//QC-JAVCWE099[00154] In org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN181463[00154] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "27",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "9",
      "_source" : "java.io.BufferedInputStream.read@POLYN245332.nread",
      "_method" : "---dummymethode in line [00348]",
      "_target" : "java.io.BufferedInputStream.read@POLYN245332.n",
      "_risk" : "//QC-JAVCWE099[00348] In java.io.BufferedInputStream.read@POLYN245332[00348] source data PATHtainted (java.io.BufferedInputStream.read)"
    }, {
      "_id" : "8",
      "_source" : "java.io.BufferedInputStream.read@POLYN245332.n",
      "_method" : "---dummymethode in line [00350]",
      "_target" : "java.io.BufferedInputStream.read@POLYN245332.return",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedInputStream.read@POLYN245332[00350] source data PATHtainted (java.io.BufferedInputStream.read)"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedInputStream.read@POLYN245332.return",
      "_method" : "---java.io.BufferedInputStream.read@POLYN245332 in line [00244]",
      "_target" : "record",
      "_risk" : "//QC-JAVCWE099[00244] In org.apache.kafka.raft.internals.RecordsIterator.readRecord@POLYN181021[00244] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "record",
      "_method" : "---dummymethode in line [00188]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN182596.result",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN182596.result",
      "_method" : "---dummymethode in line [00190]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN182596.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN182596.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.projectPrimitive@POLYN182596 in line [00091]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN176843.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN176843.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.projectRequiredSchema@POLYN176843 in line [00064]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.project@POLYN175792.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.project@POLYN175792.return",
      "_method" : "---org.apache.kafka.connect.data.SchemaProjector.project@POLYN175792 in line [00152]",
      "_target" : "org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN181463.retKey",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN181463.retKey",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00154]",
      "_target" : "java.util.HashMap.put@POLYN621976.key",
      "_risk" : "//QC-JAVCWE099[00154] In org.apache.kafka.connect.data.SchemaProjector.projectMap@POLYN181463[00154] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "28",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.remove@POLYN650962.return",
      "_method" : "---java.util.HashMap.remove@POLYN650962 in line [00299]",
      "_target" : "org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN247614.nextData",
      "_risk" : "//QC-JAVCWE099[00299] In org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN247614[00299] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN247614.nextData",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00338]",
      "_target" : "java.util.HashMap.put@POLYN621976.value",
      "_risk" : "//QC-JAVCWE099[00338] In org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN247614[00338] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "29",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.getOrDefault@POLYN650244.return",
      "_method" : "---java.util.HashMap.getOrDefault@POLYN650244 in line [00072]",
      "_target" : "org.apache.kafka.common.requests.AddPartitionsToTxnResponse.AddPartitionsToTxnResponse@POLYN160202.partitionResultCollection",
      "_risk" : "//QC-JAVCWE099[00072] In org.apache.kafka.common.requests.AddPartitionsToTxnResponse.AddPartitionsToTxnResponse@POLYN160202[00072] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.requests.AddPartitionsToTxnResponse.AddPartitionsToTxnResponse@POLYN160202.partitionResultCollection",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00077]",
      "_target" : "java.util.HashMap.put@POLYN621976.value",
      "_risk" : "//QC-JAVCWE099[00077] In org.apache.kafka.common.requests.AddPartitionsToTxnResponse.AddPartitionsToTxnResponse@POLYN160202[00077] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "30",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.Map.getOrDefault@POLYN441854.return",
      "_method" : "---java.util.Map.getOrDefault@POLYN441854 in line [00066]",
      "_target" : "org.apache.kafka.common.requests.OffsetCommitResponse.OffsetCommitResponse@POLYN157346.topic",
      "_risk" : "//QC-JAVCWE099[00066] In org.apache.kafka.common.requests.OffsetCommitResponse.OffsetCommitResponse@POLYN157346[00066] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.requests.OffsetCommitResponse.OffsetCommitResponse@POLYN157346.topic",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00072]",
      "_target" : "java.util.HashMap.put@POLYN621976.value",
      "_risk" : "//QC-JAVCWE099[00072] In org.apache.kafka.common.requests.OffsetCommitResponse.OffsetCommitResponse@POLYN157346[00072] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "31",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.Map.size@POLYN426002.return",
      "_method" : "---java.util.Map.size@POLYN426002 in line [00527]",
      "_target" : "org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskConfigs@POLYN373110.taskCount",
      "_risk" : "//QC-JAVCWE099[00527] In org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskConfigs@POLYN373110[00527] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskConfigs@POLYN373110.taskCount",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00550]",
      "_target" : "java.util.HashMap.put@POLYN621976.value",
      "_risk" : "//QC-JAVCWE099[00550] In org.apache.kafka.connect.storage.KafkaConfigBackingStore.putTaskConfigs@POLYN373110[00550] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "32",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.util.HashMap.Node@POLYN607190.value",
      "_method" : "---dummymethode in line [00287]",
      "_target" : "java.util.HashMap.value",
      "_risk" : "//QC-JAVCWE099[00287] In java.util.HashMap.Node.Node@POLYN607190[00287] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.value",
      "_method" : "---dummymethode in line [00292]",
      "_target" : "java.util.HashMap.getValue@POLYN607725.return",
      "_risk" : "//QC-JAVCWE099[00292] In java.util.HashMap.Node.getValue@POLYN607725[00292] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getValue@POLYN607725.return",
      "_method" : "---java.util.HashMap.getValue@POLYN607725 in line [00162]",
      "_target" : "org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN191195.partitions",
      "_risk" : "//QC-JAVCWE099[00162] In org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN191195[00162] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN191195.partitions",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00168]",
      "_target" : "java.util.HashMap.put@POLYN621976.value",
      "_risk" : "//QC-JAVCWE099[00168] In org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN191195[00168] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "33",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.util.HashMap.setValue@POLYN608144.newValue",
      "_method" : "---dummymethode in line [00301]",
      "_target" : "java.util.HashMap.value",
      "_risk" : "//QC-JAVCWE099[00301] In java.util.HashMap.Node.setValue@POLYN608144[00301] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.value",
      "_method" : "---dummymethode in line [00292]",
      "_target" : "java.util.HashMap.getValue@POLYN607725.return",
      "_risk" : "//QC-JAVCWE099[00292] In java.util.HashMap.Node.getValue@POLYN607725[00292] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getValue@POLYN607725.return",
      "_method" : "---java.util.HashMap.getValue@POLYN607725 in line [00162]",
      "_target" : "org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN191195.partitions",
      "_risk" : "//QC-JAVCWE099[00162] In org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN191195[00162] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN191195.partitions",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00168]",
      "_target" : "java.util.HashMap.put@POLYN621976.value",
      "_risk" : "//QC-JAVCWE099[00168] In org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN191195[00168] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "34",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.lang.Long.MAX_VALUE",
      "_method" : "---dummymethode in line [00438]",
      "_target" : "java.util.HashMap.value",
      "_risk" : "//QC-JAVCWE099[00438] In org.apache.kafka.streams.state.internals.InMemoryTimeOrderedKeyValueBuffer.evictWhile@POLYN242135[00438] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.value",
      "_method" : "---dummymethode in line [00292]",
      "_target" : "java.util.HashMap.getValue@POLYN607725.return",
      "_risk" : "//QC-JAVCWE099[00292] In java.util.HashMap.Node.getValue@POLYN607725[00292] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getValue@POLYN607725.return",
      "_method" : "---java.util.HashMap.getValue@POLYN607725 in line [00162]",
      "_target" : "org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN191195.partitions",
      "_risk" : "//QC-JAVCWE099[00162] In org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN191195[00162] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN191195.partitions",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00168]",
      "_target" : "java.util.HashMap.put@POLYN621976.value",
      "_risk" : "//QC-JAVCWE099[00168] In org.apache.kafka.streams.processor.internals.ActiveTaskCreator.createTasks@POLYN191195[00168] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "35",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.util.HashMap.this",
      "_method" : "---dummymethode in line [01849]",
      "_target" : "java.util.HashMap.find@POLYN698842.p",
      "_risk" : "//QC-JAVCWE099[01849] In java.util.HashMap.TreeNode.find@POLYN698842[01849] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.find@POLYN698842.p",
      "_method" : "---dummymethode in line [01858]",
      "_target" : "java.util.HashMap.find@POLYN698842.return",
      "_risk" : "//QC-JAVCWE099[01858] In java.util.HashMap.TreeNode.find@POLYN698842[01858] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.find@POLYN698842.return",
      "_method" : "---java.util.HashMap.find@POLYN698842 in line [00822]",
      "_target" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN332524.tpData",
      "_risk" : "//QC-JAVCWE099[00822] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN332524[00822] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN332524.tpData",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.add@POLYN1669444 in line [00825]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.add@POLYN1669444.e",
      "_risk" : "//QC-JAVCWE099[00825] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN332524[00825] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "36",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "p.left",
      "_method" : "---dummymethode in line [01852]",
      "_target" : "java.util.HashMap.find@POLYN698842.pl",
      "_risk" : "//QC-JAVCWE099[01852] In java.util.HashMap.TreeNode.find@POLYN698842[01852] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "4",
      "_source" : "java.util.HashMap.find@POLYN698842.pl",
      "_method" : "---dummymethode in line [01854]",
      "_target" : "java.util.HashMap.find@POLYN698842.p",
      "_risk" : "//QC-JAVCWE099[01854] In java.util.HashMap.TreeNode.find@POLYN698842[01854] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.find@POLYN698842.p",
      "_method" : "---dummymethode in line [01858]",
      "_target" : "java.util.HashMap.find@POLYN698842.return",
      "_risk" : "//QC-JAVCWE099[01858] In java.util.HashMap.TreeNode.find@POLYN698842[01858] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.find@POLYN698842.return",
      "_method" : "---java.util.HashMap.find@POLYN698842 in line [00822]",
      "_target" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN332524.tpData",
      "_risk" : "//QC-JAVCWE099[00822] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN332524[00822] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN332524.tpData",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.add@POLYN1669444 in line [00825]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.add@POLYN1669444.e",
      "_risk" : "//QC-JAVCWE099[00825] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN332524[00825] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "37",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "p.right",
      "_method" : "---dummymethode in line [01852]",
      "_target" : "java.util.HashMap.find@POLYN698842.pr",
      "_risk" : "//QC-JAVCWE099[01852] In java.util.HashMap.TreeNode.find@POLYN698842[01852] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "4",
      "_source" : "java.util.HashMap.find@POLYN698842.pr",
      "_method" : "---dummymethode in line [01856]",
      "_target" : "java.util.HashMap.find@POLYN698842.p",
      "_risk" : "//QC-JAVCWE099[01856] In java.util.HashMap.TreeNode.find@POLYN698842[01856] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.find@POLYN698842.p",
      "_method" : "---dummymethode in line [01858]",
      "_target" : "java.util.HashMap.find@POLYN698842.return",
      "_risk" : "//QC-JAVCWE099[01858] In java.util.HashMap.TreeNode.find@POLYN698842[01858] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.find@POLYN698842.return",
      "_method" : "---java.util.HashMap.find@POLYN698842 in line [00822]",
      "_target" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN332524.tpData",
      "_risk" : "//QC-JAVCWE099[00822] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN332524[00822] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN332524.tpData",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.add@POLYN1669444 in line [00825]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.add@POLYN1669444.e",
      "_risk" : "//QC-JAVCWE099[00825] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN332524[00825] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "38",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.util.HashMap.find@POLYN698842.q",
      "_method" : "---dummymethode in line [01868]",
      "_target" : "java.util.HashMap.find@POLYN698842.return",
      "_risk" : "//QC-JAVCWE099[01868] In java.util.HashMap.TreeNode.find@POLYN698842[01868] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.find@POLYN698842.return",
      "_method" : "---java.util.HashMap.find@POLYN698842 in line [00822]",
      "_target" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN332524.tpData",
      "_risk" : "//QC-JAVCWE099[00822] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN332524[00822] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN332524.tpData",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.add@POLYN1669444 in line [00825]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.add@POLYN1669444.e",
      "_risk" : "//QC-JAVCWE099[00825] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN332524[00825] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "39",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.util.HashMap.TreeNode.find@POLYN698842.null",
      "_method" : "---dummymethode in line [01872]",
      "_target" : "java.util.HashMap.find@POLYN698842.return",
      "_risk" : "//QC-JAVCWE099[01872] In java.util.HashMap.TreeNode.find@POLYN698842[01872] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.find@POLYN698842.return",
      "_method" : "---java.util.HashMap.find@POLYN698842 in line [00822]",
      "_target" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN332524.tpData",
      "_risk" : "//QC-JAVCWE099[00822] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN332524[00822] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN332524.tpData",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.add@POLYN1669444 in line [00825]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.add@POLYN1669444.e",
      "_risk" : "//QC-JAVCWE099[00825] In org.apache.kafka.clients.producer.internals.Sender.sendProduceRequest@POLYN332524[00825] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "40",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "0L",
      "_method" : "---dummymethode in line [01460]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.readObject@POLYN1487533.added",
      "_risk" : "//QC-JAVCWE099[01460] In java.util.concurrent.ConcurrentHashMap.readObject@POLYN1487533[01460] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.readObject@POLYN1487533.added",
      "_method" : "---dummymethode in line [01515]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.baseCount",
      "_risk" : "//QC-JAVCWE099[01515] In java.util.concurrent.ConcurrentHashMap.readObject@POLYN1487533[01515] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "4",
      "_source" : "java.util.concurrent.ConcurrentHashMap.baseCount",
      "_method" : "---dummymethode in line [02507]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1552565.sum",
      "_risk" : "//QC-JAVCWE099[02507] In java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1552565[02507] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1552565.sum",
      "_method" : "---dummymethode in line [02514]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1552565.return",
      "_risk" : "//QC-JAVCWE099[02514] In java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1552565[02514] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1552565.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1552565 in line [00914]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1457768.return",
      "_risk" : "//QC-JAVCWE099[00914] In java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1457768[00914] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1457768.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1457768 in line [04386]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1653692.return",
      "_risk" : "//QC-JAVCWE099[04386] In java.util.concurrent.ConcurrentHashMap.CollectionView.isEmpty@POLYN1653692[04386] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "41",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "8",
      "_source" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1499465.1L",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.addCount@POLYN1534261 in line [01714]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.addCount@POLYN1534261.x",
      "_risk" : "//QC-JAVCWZ099[01714] In java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1499465[01714] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.util.concurrent.ConcurrentHashMap.addCount@POLYN1534261.x",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.fullAddCount@POLYN1553238 in line [02260]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.fullAddCount@POLYN1553238.x",
      "_risk" : "//QC-JAVCWZ099[02260] In java.util.concurrent.ConcurrentHashMap.addCount@POLYN1534261[02260] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.util.concurrent.ConcurrentHashMap.fullAddCount@POLYN1553238.x",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.CounterCell.CounterCell@POLYN1552437 in line [02531]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.CounterCell.CounterCell@POLYN1552437.x",
      "_risk" : "//QC-JAVCWZ099[02531] In java.util.concurrent.ConcurrentHashMap.fullAddCount@POLYN1553238[02531] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.CounterCell.CounterCell@POLYN1552437.x",
      "_method" : "---dummymethode in line [02502]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.CounterCell.value",
      "_risk" : "//QC-JAVCWZ099[02502] In java.util.concurrent.ConcurrentHashMap.CounterCell.CounterCell@POLYN1552437[02502] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "4",
      "_source" : "java.util.concurrent.ConcurrentHashMap.CounterCell.value",
      "_method" : "---dummymethode in line [02511]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1552565.sum",
      "_risk" : "//QC-JAVCWZ099[02511] In java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1552565[02511] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1552565.sum",
      "_method" : "---dummymethode in line [02514]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1552565.return",
      "_risk" : "//QC-JAVCWZ099[02514] In java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1552565[02514] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1552565.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1552565 in line [00914]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1457768.return",
      "_risk" : "//QC-JAVCWZ099[00914] In java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1457768[00914] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1457768.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1457768 in line [04386]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1653692.return",
      "_risk" : "//QC-JAVCWZ099[04386] In java.util.concurrent.ConcurrentHashMap.CollectionView.isEmpty@POLYN1653692[04386] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "42",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "8",
      "_source" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859.1L",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.addCount@POLYN1534261 in line [01064]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.addCount@POLYN1534261.x",
      "_risk" : "//QC-JAVCWZ099[01064] In java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859[01064] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.util.concurrent.ConcurrentHashMap.addCount@POLYN1534261.x",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.fullAddCount@POLYN1553238 in line [02260]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.fullAddCount@POLYN1553238.x",
      "_risk" : "//QC-JAVCWZ099[02260] In java.util.concurrent.ConcurrentHashMap.addCount@POLYN1534261[02260] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.util.concurrent.ConcurrentHashMap.fullAddCount@POLYN1553238.x",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.CounterCell.CounterCell@POLYN1552437 in line [02531]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.CounterCell.CounterCell@POLYN1552437.x",
      "_risk" : "//QC-JAVCWZ099[02531] In java.util.concurrent.ConcurrentHashMap.fullAddCount@POLYN1553238[02531] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.CounterCell.CounterCell@POLYN1552437.x",
      "_method" : "---dummymethode in line [02502]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.CounterCell.value",
      "_risk" : "//QC-JAVCWZ099[02502] In java.util.concurrent.ConcurrentHashMap.CounterCell.CounterCell@POLYN1552437[02502] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "4",
      "_source" : "java.util.concurrent.ConcurrentHashMap.CounterCell.value",
      "_method" : "---dummymethode in line [02511]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1552565.sum",
      "_risk" : "//QC-JAVCWZ099[02511] In java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1552565[02511] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1552565.sum",
      "_method" : "---dummymethode in line [02514]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1552565.return",
      "_risk" : "//QC-JAVCWZ099[02514] In java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1552565[02514] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1552565.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.sumCount@POLYN1552565 in line [00914]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1457768.return",
      "_risk" : "//QC-JAVCWZ099[00914] In java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1457768[00914] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1457768.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1457768 in line [04386]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.isEmpty@POLYN1653692.return",
      "_risk" : "//QC-JAVCWZ099[04386] In java.util.concurrent.ConcurrentHashMap.CollectionView.isEmpty@POLYN1653692[04386] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "43",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "7",
      "_source" : "e.value",
      "_method" : "---dummymethode in line [00651]",
      "_target" : "java.util.HashMap.putVal@POLYN622499.oldValue",
      "_risk" : "//QC-JAVCWE099[00651] In java.util.HashMap.putVal@POLYN622499[00651] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "6",
      "_source" : "java.util.HashMap.putVal@POLYN622499.oldValue",
      "_method" : "---dummymethode in line [00655]",
      "_target" : "java.util.HashMap.putVal@POLYN622499.return",
      "_risk" : "//QC-JAVCWE099[00655] In java.util.HashMap.putVal@POLYN622499[00655] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "5",
      "_source" : "java.util.HashMap.putVal@POLYN622499.return",
      "_method" : "---java.util.HashMap.putVal@POLYN622499 in line [01059]",
      "_target" : "java.util.HashMap.putIfAbsent@POLYN650661.return",
      "_risk" : "//QC-JAVCWE099[01059] In java.util.HashMap.putIfAbsent@POLYN650661[01059] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.util.HashMap.putIfAbsent@POLYN650661.return",
      "_method" : "---java.util.HashMap.putIfAbsent@POLYN650661 in line [00144]",
      "_target" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN221599.previous",
      "_risk" : "//QC-JAVCWE099[00144] In org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN221599[00144] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN221599.previous",
      "_method" : "---dummymethode in line [00146]",
      "_target" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN221599.group",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN221599.group",
      "_method" : "---dummymethode in line [00148]",
      "_target" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN221599.return",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN221599.return",
      "_method" : "---org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN221599 in line [00603]",
      "_target" : "org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.SourceTaskMetricsGroup.SourceTaskMetricsGroup@POLYN278683.metricGroup",
      "_risk" : ""
    } ]
  }, {
    "_id" : "44",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.util.HashMap.putVal@POLYN622499.null",
      "_method" : "---dummymethode in line [00662]",
      "_target" : "java.util.HashMap.putVal@POLYN622499.return",
      "_risk" : "//QC-JAVCWE099[00662] In java.util.HashMap.putVal@POLYN622499[00662] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "5",
      "_source" : "java.util.HashMap.putVal@POLYN622499.return",
      "_method" : "---java.util.HashMap.putVal@POLYN622499 in line [01059]",
      "_target" : "java.util.HashMap.putIfAbsent@POLYN650661.return",
      "_risk" : "//QC-JAVCWE099[01059] In java.util.HashMap.putIfAbsent@POLYN650661[01059] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.util.HashMap.putIfAbsent@POLYN650661.return",
      "_method" : "---java.util.HashMap.putIfAbsent@POLYN650661 in line [00144]",
      "_target" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN221599.previous",
      "_risk" : "//QC-JAVCWE099[00144] In org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN221599[00144] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN221599.previous",
      "_method" : "---dummymethode in line [00146]",
      "_target" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN221599.group",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN221599.group",
      "_method" : "---dummymethode in line [00148]",
      "_target" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN221599.return",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN221599.return",
      "_method" : "---org.apache.kafka.connect.runtime.ConnectMetrics.group@POLYN221599 in line [00603]",
      "_target" : "org.apache.kafka.connect.runtime.AbstractWorkerSourceTask.SourceTaskMetricsGroup.SourceTaskMetricsGroup@POLYN278683.metricGroup",
      "_risk" : ""
    } ]
  }, {
    "_id" : "45",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.util.HashMap.Values.Values@POLYN643784.return",
      "_method" : "---java.util.HashMap.Values.Values@POLYN643784 in line [00956]",
      "_target" : "java.util.HashMap.values@POLYN643421.vs",
      "_risk" : "//QC-JAVCWE099[00956] In java.util.HashMap.values@POLYN643421[00956] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.values@POLYN643421.vs",
      "_method" : "---dummymethode in line [00959]",
      "_target" : "java.util.HashMap.values@POLYN643421.return",
      "_risk" : "//QC-JAVCWE099[00959] In java.util.HashMap.values@POLYN643421[00959] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.values@POLYN643421.return",
      "_method" : "---java.util.HashMap.values@POLYN643421 in line [00190]",
      "_target" : "org.apache.kafka.message.StructRegistry.structs@POLYN173516.return",
      "_risk" : "//QC-JAVCWE099[00190] In org.apache.kafka.message.StructRegistry.structs@POLYN173516[00190] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.message.StructRegistry.structs@POLYN173516.return",
      "_method" : "---org.apache.kafka.message.StructRegistry.structs@POLYN173516 in line [00056]",
      "_target" : "org.apache.kafka.message.JsonConverterGenerator.generateAndWrite@POLYN229667.Iterator_StructRegistry.StructInfo_iter",
      "_risk" : ""
    } ]
  }, {
    "_id" : "46",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "\"null\"",
      "_method" : "---dummymethode in line [00667]",
      "_target" : "java.io.PrintStream.print@POLYN366116.s",
      "_risk" : "//QC-JAVCWE099[00667] In java.io.PrintStream.print@POLYN366116[00667] target data PATHtainted (java.io.PrintStream.print)"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.print@POLYN366116.s",
      "_method" : "---java.io.PrintStream.write@POLYN360925 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN360925.s",
      "_risk" : "//QC-JAVCWE099[00669] In java.io.PrintStream.print@POLYN366116[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.write@POLYN360925.s",
      "_method" : "---java.io.Writer.write@POLYN192396 in line [00525]",
      "_target" : "java.io.Writer.write@POLYN192396.str",
      "_risk" : "//QC-JAVCWE099[00525] In java.io.PrintStream.write@POLYN360925[00525] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "47",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN154632.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN370565 in line [00067]",
      "_target" : "java.io.PrintStream.println@POLYN370565.x",
      "_risk" : "//QC-JAVCWE099[00067] In org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN154632[00067] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.println@POLYN370565.x",
      "_method" : "---java.io.PrintStream.print@POLYN366116 in line [00806]",
      "_target" : "java.io.PrintStream.print@POLYN366116.s",
      "_risk" : "//QC-JAVCWE099[00806] In java.io.PrintStream.println@POLYN370565[00806] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.print@POLYN366116.s",
      "_method" : "---java.io.PrintStream.write@POLYN360925 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN360925.s",
      "_risk" : "//QC-JAVCWE099[00669] In java.io.PrintStream.print@POLYN366116[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.write@POLYN360925.s",
      "_method" : "---java.io.Writer.write@POLYN192396 in line [00525]",
      "_target" : "java.io.Writer.write@POLYN192396.str",
      "_risk" : "//QC-JAVCWE099[00525] In java.io.PrintStream.write@POLYN360925[00525] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "48",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN164272.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN370565 in line [00081]",
      "_target" : "java.io.PrintStream.println@POLYN370565.x",
      "_risk" : "//QC-JAVCWE099[00081] In org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN164272[00081] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.println@POLYN370565.x",
      "_method" : "---java.io.PrintStream.print@POLYN366116 in line [00806]",
      "_target" : "java.io.PrintStream.print@POLYN366116.s",
      "_risk" : "//QC-JAVCWE099[00806] In java.io.PrintStream.println@POLYN370565[00806] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.print@POLYN366116.s",
      "_method" : "---java.io.PrintStream.write@POLYN360925 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN360925.s",
      "_risk" : "//QC-JAVCWE099[00669] In java.io.PrintStream.print@POLYN366116[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.write@POLYN360925.s",
      "_method" : "---java.io.Writer.write@POLYN192396 in line [00525]",
      "_target" : "java.io.Writer.write@POLYN192396.str",
      "_risk" : "//QC-JAVCWE099[00525] In java.io.PrintStream.write@POLYN360925[00525] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "49",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.lang.StringBuilder.toString@POLYN236748.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN236748 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN910111.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN910111.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN910111 in line [03183]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN898854.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN898854.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN898854 in line [01124]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN812053.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN812053.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN812053 in line [01863]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN840214.str",
      "_risk" : "//QC-JAVCWZ099[01863] In java.io.ObjectInputStream.readString@POLYN840214[01863] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readString@POLYN840214.str",
      "_method" : "---dummymethode in line [01876]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN840214.return",
      "_risk" : "//QC-JAVCWZ099[01876] In java.io.ObjectInputStream.readString@POLYN840214[01876] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readString@POLYN840214.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN840214 in line [01963]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN845523.name",
      "_risk" : "//QC-JAVCWZ099[01963] In java.io.ObjectInputStream.readEnum@POLYN845523[01963] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "50",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readNull@POLYN830899.null",
      "_method" : "---dummymethode in line [01635]",
      "_target" : "java.io.ObjectInputStream.readNull@POLYN830899.return",
      "_risk" : "//QC-JAVCWZ099[01635] In java.io.ObjectInputStream.readNull@POLYN830899[01635] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readNull@POLYN830899.return",
      "_method" : "---java.io.ObjectInputStream.readNull@POLYN830899 in line [01512]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN825386.return",
      "_risk" : "//QC-JAVCWZ099[01512] In java.io.ObjectInputStream.readObject0@POLYN825386[01512] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN825386.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN825386 in line [00422]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN787874.obj",
      "_risk" : "//QC-JAVCWZ099[00422] In java.io.ObjectInputStream.readObject@POLYN787874[00422] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN787874.obj",
      "_method" : "---dummymethode in line [00431]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN787874.return",
      "_risk" : "//QC-JAVCWZ099[00431] In java.io.ObjectInputStream.readObject@POLYN787874[00431] source data PATHtainted (java.io.ObjectInputStream.read)"
    } ]
  }, {
    "_id" : "51",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.HandleTable.lookupObject@POLYN925996.return",
      "_method" : "---java.io.ObjectInputStream.HandleTable.lookupObject@POLYN925996 in line [01658]",
      "_target" : "java.io.ObjectInputStream.readHandle@POLYN831285.obj",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readHandle@POLYN831285.obj",
      "_method" : "---dummymethode in line [01665]",
      "_target" : "java.io.ObjectInputStream.readHandle@POLYN831285.return",
      "_risk" : "//QC-JAVCWZ099[01665] In java.io.ObjectInputStream.readHandle@POLYN831285[01665] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readHandle@POLYN831285.return",
      "_method" : "---java.io.ObjectInputStream.readHandle@POLYN831285 in line [01515]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN825386.return",
      "_risk" : "//QC-JAVCWZ099[01515] In java.io.ObjectInputStream.readObject0@POLYN825386[01515] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN825386.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN825386 in line [00422]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN787874.obj",
      "_risk" : "//QC-JAVCWZ099[00422] In java.io.ObjectInputStream.readObject@POLYN787874[00422] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN787874.obj",
      "_method" : "---dummymethode in line [00431]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN787874.return",
      "_risk" : "//QC-JAVCWZ099[00431] In java.io.ObjectInputStream.readObject@POLYN787874[00431] source data PATHtainted (java.io.ObjectInputStream.read)"
    } ]
  }, {
    "_id" : "52",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readClass@POLYN832583.cl",
      "_method" : "---dummymethode in line [01688]",
      "_target" : "java.io.ObjectInputStream.readClass@POLYN832583.return",
      "_risk" : "//QC-JAVCWZ099[01688] In java.io.ObjectInputStream.readClass@POLYN832583[01688] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readClass@POLYN832583.return",
      "_method" : "---java.io.ObjectInputStream.readClass@POLYN832583 in line [01518]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN825386.return",
      "_risk" : "//QC-JAVCWZ099[01518] In java.io.ObjectInputStream.readObject0@POLYN825386[01518] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN825386.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN825386 in line [00422]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN787874.obj",
      "_risk" : "//QC-JAVCWZ099[00422] In java.io.ObjectInputStream.readObject@POLYN787874[00422] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN787874.obj",
      "_method" : "---dummymethode in line [00431]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN787874.return",
      "_risk" : "//QC-JAVCWZ099[00431] In java.io.ObjectInputStream.readObject@POLYN787874[00431] source data PATHtainted (java.io.ObjectInputStream.read)"
    } ]
  }, {
    "_id" : "53",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN835113.desc",
      "_method" : "---dummymethode in line [01793]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN835113.return",
      "_risk" : "//QC-JAVCWZ099[01793] In java.io.ObjectInputStream.readProxyDesc@POLYN835113[01793] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN835113.return",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN835113 in line [01710]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN833652.descriptor",
      "_risk" : "//QC-JAVCWZ099[01710] In java.io.ObjectInputStream.readClassDesc@POLYN833652[01710] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN833652.descriptor",
      "_method" : "---dummymethode in line [01722]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN833652.return",
      "_risk" : "//QC-JAVCWZ099[01722] In java.io.ObjectInputStream.readClassDesc@POLYN833652[01722] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN833652.return",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN833652 in line [01522]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN825386.return",
      "_risk" : "//QC-JAVCWZ099[01522] In java.io.ObjectInputStream.readObject0@POLYN825386[01522] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN825386.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN825386 in line [00422]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN787874.obj",
      "_risk" : "//QC-JAVCWZ099[00422] In java.io.ObjectInputStream.readObject@POLYN787874[00422] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN787874.obj",
      "_method" : "---dummymethode in line [00431]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN787874.return",
      "_risk" : "//QC-JAVCWZ099[00431] In java.io.ObjectInputStream.readObject@POLYN787874[00431] source data PATHtainted (java.io.ObjectInputStream.read)"
    } ]
  }, {
    "_id" : "54",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN837943.desc",
      "_method" : "---dummymethode in line [01851]",
      "_target" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN837943.return",
      "_risk" : "//QC-JAVCWZ099[01851] In java.io.ObjectInputStream.readNonProxyDesc@POLYN837943[01851] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN837943.return",
      "_method" : "---java.io.ObjectInputStream.readNonProxyDesc@POLYN837943 in line [01713]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN833652.descriptor",
      "_risk" : "//QC-JAVCWZ099[01713] In java.io.ObjectInputStream.readClassDesc@POLYN833652[01713] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN833652.descriptor",
      "_method" : "---dummymethode in line [01722]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN833652.return",
      "_risk" : "//QC-JAVCWZ099[01722] In java.io.ObjectInputStream.readClassDesc@POLYN833652[01722] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN833652.return",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN833652 in line [01522]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN825386.return",
      "_risk" : "//QC-JAVCWZ099[01522] In java.io.ObjectInputStream.readObject0@POLYN825386[01522] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN825386.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN825386 in line [00422]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN787874.obj",
      "_risk" : "//QC-JAVCWZ099[00422] In java.io.ObjectInputStream.readObject@POLYN787874[00422] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN787874.obj",
      "_method" : "---dummymethode in line [00431]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN787874.return",
      "_risk" : "//QC-JAVCWZ099[00431] In java.io.ObjectInputStream.readObject@POLYN787874[00431] source data PATHtainted (java.io.ObjectInputStream.read)"
    } ]
  }, {
    "_id" : "55",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593220.objs[i]",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583189 in line [01378]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_risk" : "//QC-JAVCWZ099[01378] In java.io.ObjectOutputStream.writeArray@POLYN593220[01378] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN601592 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN603435 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN603435.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "56",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN558701.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN605843 in line [00351]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN605843.ex",
      "_risk" : "//QC-JAVCWZ099[00351] In java.io.ObjectOutputStream.writeObject@POLYN558701[00351] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN605843.ex",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583189 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN605843[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN601592 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN603435 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN603435.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "57",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN560919.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN605843 in line [00418]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN605843.ex",
      "_risk" : "//QC-JAVCWZ099[00418] In java.io.ObjectOutputStream.writeUnshared@POLYN560919[00418] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN605843.ex",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583189 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN605843[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN601592 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN603435 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN603435.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "58",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN566970.obj",
      "_method" : "---dummymethode in line [00588]",
      "_target" : "java.io.ObjectOutputStream.replaceObject@POLYN566970.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN566970.return",
      "_method" : "---java.io.ObjectOutputStream.replaceObject@POLYN566970 in line [01144]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.rep",
      "_risk" : "//QC-JAVCWZ099[01144] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01144] target data PATHtainted (java.io.ObjectOutputStream.write)"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.rep",
      "_method" : "---dummymethode in line [01149]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_risk" : "//QC-JAVCWZ099[01149] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01149] target data PATHtainted (java.io.ObjectOutputStream.write)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN601592 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN603435 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN603435.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "59",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.lang.StringBuilder.writeObject@POLYN237293.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN558701 in line [00465]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_risk" : "//QC-JAVCWZ099[00465] In java.lang.StringBuilder.writeObject@POLYN237293[00465] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583189 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN558701[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN601592 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN603435 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN603435.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "60",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.HashMap.internalWriteEntries@POLYN694555.e.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN558701 in line [01782]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_risk" : "//QC-JAVCWZ099[01782] In java.util.HashMap.internalWriteEntries@POLYN694555[01782] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583189 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN558701[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN601592 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN603435 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN603435.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "61",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.HashMap.internalWriteEntries@POLYN694555.e.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN558701 in line [01783]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_risk" : "//QC-JAVCWZ099[01783] In java.util.HashMap.internalWriteEntries@POLYN694555[01783] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583189 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN558701[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN601592 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN603435 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN603435.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "62",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN463573.entryStack.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN558701 in line [01238]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_risk" : "//QC-JAVCWZ099[01238] In java.util.Hashtable.writeHashtable@POLYN463573[01238] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583189 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN558701[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN601592 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN603435 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN603435.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "63",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN463573.entryStack.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN558701 in line [01239]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_risk" : "//QC-JAVCWZ099[01239] In java.util.Hashtable.writeHashtable@POLYN463573[01239] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583189 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN558701[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN601592 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN603435 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN603435.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "64",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1484795.p.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN558701 in line [01406]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_risk" : "//QC-JAVCWZ099[01406] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1484795[01406] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583189 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN558701[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN601592 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN603435 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN603435.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "65",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1484795.p.val",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN558701 in line [01407]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_risk" : "//QC-JAVCWZ099[01407] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1484795[01407] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583189 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN558701[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN601592 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN603435 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN603435.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "66",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1484795.null",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN558701 in line [01410]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_risk" : "//QC-JAVCWZ099[01410] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1484795[01410] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583189 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN558701[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN601592 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN603435 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN603435.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "67",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN560919.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583189 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN560919[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN601592 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN603435 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN603435.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "68",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "keySet",
      "_method" : "---dummymethode in line [00903]",
      "_target" : "java.util.HashMap.keySet@POLYN640163.ks",
      "_risk" : "//QC-JAVCWE099[00903] In java.util.HashMap.keySet@POLYN640163[00903] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.keySet@POLYN640163.ks",
      "_method" : "---dummymethode in line [00908]",
      "_target" : "java.util.HashMap.keySet@POLYN640163.return",
      "_risk" : "//QC-JAVCWE099[00908] In java.util.HashMap.keySet@POLYN640163[00908] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.keySet@POLYN640163.return",
      "_method" : "---java.util.HashMap.keySet@POLYN640163 in line [01379]",
      "_target" : "org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662.partitions",
      "_risk" : "//QC-JAVCWE099[01379] In org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662[01379] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662.partitions",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.removeAll@POLYN1659566 in line [01386]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.removeAll@POLYN1659566.c",
      "_risk" : "//QC-JAVCWE099[01386] In org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662[01386] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "69",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.util.HashMap.KeySet.KeySet@POLYN640526.return",
      "_method" : "---java.util.HashMap.KeySet.KeySet@POLYN640526 in line [00905]",
      "_target" : "java.util.HashMap.keySet@POLYN640163.ks",
      "_risk" : "//QC-JAVCWE099[00905] In java.util.HashMap.keySet@POLYN640163[00905] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.keySet@POLYN640163.ks",
      "_method" : "---dummymethode in line [00908]",
      "_target" : "java.util.HashMap.keySet@POLYN640163.return",
      "_risk" : "//QC-JAVCWE099[00908] In java.util.HashMap.keySet@POLYN640163[00908] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.keySet@POLYN640163.return",
      "_method" : "---java.util.HashMap.keySet@POLYN640163 in line [01379]",
      "_target" : "org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662.partitions",
      "_risk" : "//QC-JAVCWE099[01379] In org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662[01379] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662.partitions",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.removeAll@POLYN1659566 in line [01386]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.removeAll@POLYN1659566.c",
      "_risk" : "//QC-JAVCWE099[01386] In org.apache.kafka.clients.producer.internals.TransactionManager.AddPartitionsToTxnHandler.handleResponse@POLYN414662[01386] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "70",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN351093.x",
      "_method" : "---java.io.PrintWriter.print@POLYN346381 in line [00655]",
      "_target" : "java.io.PrintWriter.print@POLYN346381.c",
      "_risk" : "//QC-JAVCWZ099[00655] In java.io.PrintWriter.println@POLYN351093[00655] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN346381.c",
      "_method" : "---java.io.PrintWriter.write@POLYN344852 in line [00517]",
      "_target" : "java.io.PrintWriter.write@POLYN344852.s",
      "_risk" : "//QC-JAVCWZ099[00517] In java.io.PrintWriter.print@POLYN346381[00517] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "71",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "org.apache.kafka.shell.FindCommandHandler.find@POLYN157576.path",
      "_method" : "---java.io.PrintWriter.println@POLYN353871 in line [00098]",
      "_target" : "java.io.PrintWriter.println@POLYN353871.x",
      "_risk" : "//QC-JAVCWE099[00098] In org.apache.kafka.shell.FindCommandHandler.find@POLYN157576[00098] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN353871.x",
      "_method" : "---java.io.PrintWriter.print@POLYN349351 in line [00739]",
      "_target" : "java.io.PrintWriter.print@POLYN349351.s",
      "_risk" : "//QC-JAVCWE099[00739] In java.io.PrintWriter.println@POLYN353871[00739] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN349351.s",
      "_method" : "---java.io.PrintWriter.write@POLYN344852 in line [00603]",
      "_target" : "java.io.PrintWriter.write@POLYN344852.s",
      "_risk" : "//QC-JAVCWE099[00603] In java.io.PrintWriter.print@POLYN349351[00603] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "72",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.shell.LsCommandHandler.printTargets@POLYN188634.\"\"",
      "_method" : "---org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN189983 in line [00136]",
      "_target" : "org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN189983.intro",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN189983.intro",
      "_method" : "---java.io.PrintWriter.println@POLYN353871 in line [00162]",
      "_target" : "java.io.PrintWriter.println@POLYN353871.x",
      "_risk" : "//QC-JAVCWE099[00162] In org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN189983[00162] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN353871.x",
      "_method" : "---java.io.PrintWriter.print@POLYN349351 in line [00739]",
      "_target" : "java.io.PrintWriter.print@POLYN349351.s",
      "_risk" : "//QC-JAVCWE099[00739] In java.io.PrintWriter.println@POLYN353871[00739] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN349351.s",
      "_method" : "---java.io.PrintWriter.write@POLYN344852 in line [00603]",
      "_target" : "java.io.PrintWriter.write@POLYN344852.s",
      "_risk" : "//QC-JAVCWE099[00603] In java.io.PrintWriter.print@POLYN349351[00603] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "73",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.initTable@POLYN1532418.tab",
      "_method" : "---dummymethode in line [02237]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.initTable@POLYN1532418.return",
      "_risk" : "//QC-JAVCWZ099[02237] In java.util.concurrent.ConcurrentHashMap.initTable@POLYN1532418[02237] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.initTable@POLYN1532418.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.initTable@POLYN1532418 in line [01839]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142.tab",
      "_risk" : "//QC-JAVCWZ099[01839] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142[01839] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1452320 in line [01852]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1452320.v",
      "_risk" : "//QC-JAVCWZ099[01852] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142[01852] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "74",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486.nextTab",
      "_method" : "---dummymethode in line [02306]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486.return",
      "_risk" : "//QC-JAVCWZ099[02306] In java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486[02306] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486 in line [01860]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142.tab",
      "_risk" : "//QC-JAVCWZ099[01860] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142[01860] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1452320 in line [01852]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1452320.v",
      "_risk" : "//QC-JAVCWZ099[01852] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142[01852] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "75",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.util.concurrent.ConcurrentHashMap.readObject@POLYN1487533.tab",
      "_method" : "---dummymethode in line [01513]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.table",
      "_risk" : "//QC-JAVCWZ099[01513] In java.util.concurrent.ConcurrentHashMap.readObject@POLYN1487533[01513] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.table",
      "_method" : "---dummymethode in line [02308]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486.return",
      "_risk" : "//QC-JAVCWZ099[02308] In java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486[02308] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486 in line [01860]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142.tab",
      "_risk" : "//QC-JAVCWZ099[01860] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142[01860] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1452320 in line [01852]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1452320.v",
      "_risk" : "//QC-JAVCWZ099[01852] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142[01852] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "76",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.addCount@POLYN1534261.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.transfer@POLYN1542289 in line [02278]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1542289.nextTab",
      "_risk" : "//QC-JAVCWZ099[02278] In java.util.concurrent.ConcurrentHashMap.addCount@POLYN1534261[02278] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1542289.nextTab",
      "_method" : "---dummymethode in line [02404]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.table",
      "_risk" : "//QC-JAVCWZ099[02404] In java.util.concurrent.ConcurrentHashMap.transfer@POLYN1542289[02404] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.table",
      "_method" : "---dummymethode in line [02308]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486.return",
      "_risk" : "//QC-JAVCWZ099[02308] In java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486[02308] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486 in line [01860]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142.tab",
      "_risk" : "//QC-JAVCWZ099[01860] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142[01860] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1452320 in line [01852]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1452320.v",
      "_risk" : "//QC-JAVCWZ099[01852] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142[01852] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "77",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.transfer@POLYN1542289 in line [02302]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1542289.nextTab",
      "_risk" : "//QC-JAVCWZ099[02302] In java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486[02302] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1542289.nextTab",
      "_method" : "---dummymethode in line [02404]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.table",
      "_risk" : "//QC-JAVCWZ099[02404] In java.util.concurrent.ConcurrentHashMap.transfer@POLYN1542289[02404] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.table",
      "_method" : "---dummymethode in line [02308]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486.return",
      "_risk" : "//QC-JAVCWZ099[02308] In java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486[02308] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486 in line [01860]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142.tab",
      "_risk" : "//QC-JAVCWZ099[01860] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142[01860] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1452320 in line [01852]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1452320.v",
      "_risk" : "//QC-JAVCWZ099[01852] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142[01852] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "78",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1542289.nt",
      "_method" : "---dummymethode in line [02369]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1542289.nextTab",
      "_risk" : "//QC-JAVCWZ099[02369] In java.util.concurrent.ConcurrentHashMap.transfer@POLYN1542289[02369] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "4",
      "_source" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1542289.nextTab",
      "_method" : "---dummymethode in line [02404]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.table",
      "_risk" : "//QC-JAVCWZ099[02404] In java.util.concurrent.ConcurrentHashMap.transfer@POLYN1542289[02404] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.table",
      "_method" : "---dummymethode in line [02308]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486.return",
      "_risk" : "//QC-JAVCWZ099[02308] In java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486[02308] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486 in line [01860]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142.tab",
      "_risk" : "//QC-JAVCWZ099[01860] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142[01860] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1452320 in line [01852]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1452320.v",
      "_risk" : "//QC-JAVCWZ099[01852] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142[01852] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "79",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "7",
      "_source" : "java.util.concurrent.ConcurrentHashMap.tryPresize@POLYN1539133.nt",
      "_method" : "---dummymethode in line [02329]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.table",
      "_risk" : "//QC-JAVCWZ099[02329] In java.util.concurrent.ConcurrentHashMap.tryPresize@POLYN1539133[02329] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "6",
      "_source" : "java.util.concurrent.ConcurrentHashMap.table",
      "_method" : "---dummymethode in line [02321]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.tryPresize@POLYN1539133.tab",
      "_risk" : "//QC-JAVCWZ099[02321] In java.util.concurrent.ConcurrentHashMap.tryPresize@POLYN1539133[02321] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.tryPresize@POLYN1539133.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.transfer@POLYN1542289 in line [02348]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1542289.nextTab",
      "_risk" : "//QC-JAVCWZ099[02348] In java.util.concurrent.ConcurrentHashMap.tryPresize@POLYN1539133[02348] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1542289.nextTab",
      "_method" : "---dummymethode in line [02404]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.table",
      "_risk" : "//QC-JAVCWZ099[02404] In java.util.concurrent.ConcurrentHashMap.transfer@POLYN1542289[02404] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.table",
      "_method" : "---dummymethode in line [02308]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486.return",
      "_risk" : "//QC-JAVCWZ099[02308] In java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486[02308] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.helpTransfer@POLYN1537486 in line [01860]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142.tab",
      "_risk" : "//QC-JAVCWZ099[01860] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142[01860] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142.tab",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1452320 in line [01852]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.setTabAt@POLYN1452320.v",
      "_risk" : "//QC-JAVCWZ099[01852] In java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142[01852] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "80",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.net.Socket.Socket@POLYN459070.impl",
      "_method" : "---dummymethode in line [00154]",
      "_target" : "java.net.Socket.impl",
      "_risk" : "//QC-JAVCWE099[00154] In java.net.Socket.Socket@POLYN459070[00154] source or target data Sockettainted (java.net.Socket)"
    }, {
      "_id" : "5",
      "_source" : "java.net.Socket.impl",
      "_method" : "---dummymethode in line [00497]",
      "_target" : "java.net.ServerSocket.implAccept@POLYN319610.si",
      "_risk" : "//QC-JAVCWE099[00497] In java.net.ServerSocket.implAccept@POLYN319610[00497] source or target data Sockettainted (java.net.ServerSocket)"
    }, {
      "_id" : "4",
      "_source" : "java.net.ServerSocket.implAccept@POLYN319610.si",
      "_method" : "---dummymethode in line [00511]",
      "_target" : "java.net.Socket.impl",
      "_risk" : "//QC-JAVCWE099[00511] In java.net.ServerSocket.implAccept@POLYN319610[00511] source or target data Sockettainted (java.net.Socket)"
    }, {
      "_id" : "3",
      "_source" : "java.net.Socket.impl",
      "_method" : "---dummymethode in line [00501]",
      "_target" : "java.net.Socket.getImpl@POLYN472456.return",
      "_risk" : "//QC-JAVCWE099[00501] In java.net.Socket.getImpl@POLYN472456[00501] source or target data Sockettainted (java.net.Socket)"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.getImpl@POLYN472456.return",
      "_method" : "---java.net.Socket.getImpl@POLYN472456 in line [00654]",
      "_target" : "java.net.Socket.getInetAddress@POLYN478324.return",
      "_risk" : "//QC-JAVCWE099[00654] In java.net.Socket.getInetAddress@POLYN478324[00654] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.net.Socket.getInetAddress@POLYN478324.return",
      "_method" : "---java.net.Socket.getInetAddress@POLYN478324 in line [00376]",
      "_target" : "org.apache.kafka.common.network.KafkaChannel.socketDescription@POLYN262570.return",
      "_risk" : "//QC-JAVCWE099[00376] In org.apache.kafka.common.network.KafkaChannel.socketDescription@POLYN262570[00376] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "81",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.desc",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN593220 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN593220.desc",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593220.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN588706 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN588706.desc",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN593220[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN588706.desc",
      "_method" : "---java.io.ObjectOutputStream.writeNonProxyDesc@POLYN591197 in line [01231]",
      "_target" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN591197.desc",
      "_risk" : "//QC-JAVCWZ099[01231] In java.io.ObjectOutputStream.writeClassDesc@POLYN588706[01231] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN591197.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDescriptor@POLYN569440 in line [01282]",
      "_target" : "java.io.ObjectOutputStream.writeClassDescriptor@POLYN569440.desc",
      "_risk" : "//QC-JAVCWZ099[01282] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN591197[01282] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "82",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "kafka.tools.StreamsResetter.run@POLYN263845.properties",
      "_method" : "---java.util.HashMap.putAll@POLYN632856 in line [00171]",
      "_target" : "java.util.HashMap.putAll@POLYN632856.m",
      "_risk" : "//QC-JAVCWE099[00171] In kafka.tools.StreamsResetter.run@POLYN263845[00171] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN632856.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN616071 in line [00782]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN616071.m",
      "_risk" : "//QC-JAVCWE099[00782] In java.util.HashMap.putAll@POLYN632856[00782] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "83",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.storage.MemoryOffsetBackingStore.set@POLYN156273.values",
      "_method" : "---java.util.HashMap.putAll@POLYN632856 in line [00093]",
      "_target" : "java.util.HashMap.putAll@POLYN632856.m",
      "_risk" : "//QC-JAVCWE099[00093] In org.apache.kafka.connect.storage.MemoryOffsetBackingStore.set@POLYN156273[00093] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN632856.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN616071 in line [00782]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN616071.m",
      "_risk" : "//QC-JAVCWE099[00782] In java.util.HashMap.putAll@POLYN632856[00782] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "84",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.timeline.TimelineInteger.get@POLYN153629.value",
      "_method" : "---dummymethode in line [00059]",
      "_target" : "org.apache.kafka.timeline.TimelineInteger.get@POLYN153629.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.timeline.TimelineInteger.get@POLYN153629.return",
      "_method" : "---org.apache.kafka.timeline.TimelineInteger.get@POLYN153629 in line [00252]",
      "_target" : "org.apache.kafka.controller.ConfigurationControlManager.validateAlterConfig@POLYN234582.existingConfigs",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.controller.ConfigurationControlManager.validateAlterConfig@POLYN234582.existingConfigs",
      "_method" : "---java.util.HashMap.putAll@POLYN632856 in line [00253]",
      "_target" : "java.util.HashMap.putAll@POLYN632856.m",
      "_risk" : "//QC-JAVCWE099[00253] In org.apache.kafka.controller.ConfigurationControlManager.validateAlterConfig@POLYN234582[00253] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN632856.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN616071 in line [00782]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN616071.m",
      "_risk" : "//QC-JAVCWE099[00782] In java.util.HashMap.putAll@POLYN632856[00782] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "85",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.server.log.remote.metadata.storage.TopicBasedRemoteLogMetadataManagerConfig.initializeProducerConsumerProperties@POLYN184026.producerOnlyConfigs",
      "_method" : "---java.util.HashMap.putAll@POLYN632856 in line [00153]",
      "_target" : "java.util.HashMap.putAll@POLYN632856.m",
      "_risk" : "//QC-JAVCWE099[00153] In org.apache.kafka.server.log.remote.metadata.storage.TopicBasedRemoteLogMetadataManagerConfig.initializeProducerConsumerProperties@POLYN184026[00153] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN632856.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN616071 in line [00782]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN616071.m",
      "_risk" : "//QC-JAVCWE099[00782] In java.util.HashMap.putAll@POLYN632856[00782] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "86",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.server.log.remote.metadata.storage.TopicBasedRemoteLogMetadataManagerConfig.initializeProducerConsumerProperties@POLYN184026.consumerOnlyConfigs",
      "_method" : "---java.util.HashMap.putAll@POLYN632856 in line [00157]",
      "_target" : "java.util.HashMap.putAll@POLYN632856.m",
      "_risk" : "//QC-JAVCWE099[00157] In org.apache.kafka.server.log.remote.metadata.storage.TopicBasedRemoteLogMetadataManagerConfig.initializeProducerConsumerProperties@POLYN184026[00157] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN632856.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN616071 in line [00782]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN616071.m",
      "_risk" : "//QC-JAVCWE099[00782] In java.util.HashMap.putAll@POLYN632856[00782] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "87",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.Consumer.metrics@POLYN177026.return",
      "_method" : "---org.apache.kafka.clients.consumer.Consumer.metrics@POLYN177026 in line [00089]",
      "_target" : "org.apache.kafka.streams.processor.internals.ClientUtils.consumerMetrics@POLYN178674.consumerMetrics",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.ClientUtils.consumerMetrics@POLYN178674.consumerMetrics",
      "_method" : "---java.util.HashMap.putAll@POLYN632856 in line [00092]",
      "_target" : "java.util.HashMap.putAll@POLYN632856.m",
      "_risk" : "//QC-JAVCWE099[00092] In org.apache.kafka.streams.processor.internals.ClientUtils.consumerMetrics@POLYN178674[00092] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN632856.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN616071 in line [00782]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN616071.m",
      "_risk" : "//QC-JAVCWE099[00782] In java.util.HashMap.putAll@POLYN632856[00782] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "88",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.workload.TopicsSpec.immutableCopy@POLYN153734.map",
      "_method" : "---java.util.HashMap.putAll@POLYN632856 in line [00071]",
      "_target" : "java.util.HashMap.putAll@POLYN632856.m",
      "_risk" : "//QC-JAVCWE099[00071] In org.apache.kafka.trogdor.workload.TopicsSpec.immutableCopy@POLYN153734[00071] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN632856.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN616071 in line [00782]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN616071.m",
      "_risk" : "//QC-JAVCWE099[00782] In java.util.HashMap.putAll@POLYN632856[00782] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "89",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "e.val",
      "_method" : "---dummymethode in line [01030]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859.oldVal",
      "_risk" : "//QC-JAVCWE099[01030] In java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859[01030] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859.oldVal",
      "_method" : "---dummymethode in line [01059]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859.return",
      "_risk" : "//QC-JAVCWE099[01059] In java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859[01059] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859 in line [01000]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.put@POLYN1462649.return",
      "_risk" : "//QC-JAVCWE099[01000] In java.util.concurrent.ConcurrentHashMap.put@POLYN1462649[01000] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.put@POLYN1462649.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.put@POLYN1462649 in line [03497]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.MapEntry.setValue@POLYN1612139.cibledummy",
      "_risk" : "//QC-JAVCWE099[03497] In java.util.concurrent.ConcurrentHashMap.MapEntry.setValue@POLYN1612139[03497] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "90",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "p.val",
      "_method" : "---dummymethode in line [01048]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859.oldVal",
      "_risk" : "//QC-JAVCWE099[01048] In java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859[01048] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859.oldVal",
      "_method" : "---dummymethode in line [01059]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859.return",
      "_risk" : "//QC-JAVCWE099[01059] In java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859[01059] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859 in line [01000]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.put@POLYN1462649.return",
      "_risk" : "//QC-JAVCWE099[01000] In java.util.concurrent.ConcurrentHashMap.put@POLYN1462649[01000] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.put@POLYN1462649.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.put@POLYN1462649 in line [03497]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.MapEntry.setValue@POLYN1612139.cibledummy",
      "_risk" : "//QC-JAVCWE099[03497] In java.util.concurrent.ConcurrentHashMap.MapEntry.setValue@POLYN1612139[03497] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "91",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859.null",
      "_method" : "---dummymethode in line [01065]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859.return",
      "_risk" : "//QC-JAVCWZ099[01065] In java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859[01065] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859 in line [01000]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.put@POLYN1462649.return",
      "_risk" : "//QC-JAVCWZ099[01000] In java.util.concurrent.ConcurrentHashMap.put@POLYN1462649[01000] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.put@POLYN1462649.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.put@POLYN1462649 in line [03497]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.MapEntry.setValue@POLYN1612139.cibledummy",
      "_risk" : "//QC-JAVCWZ099[03497] In java.util.concurrent.ConcurrentHashMap.MapEntry.setValue@POLYN1612139[03497] source or target data PATHtainted (java.util.concurrent.ConcurrentHashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "92",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.io.Reader.read@POLYN184789.return",
      "_method" : "---java.io.Reader.read@POLYN184789 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN234351.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN234351[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN234351.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN234351 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN237557.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN237557[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read@POLYN237557.n",
      "_method" : "---dummymethode in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN237557.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN237557[00287] source data PATHtainted (java.io.BufferedReader.read)"
    } ]
  }, {
    "_id" : "93",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.io.PrintStream.println@POLYN370107.x",
      "_method" : "---java.io.PrintStream.print@POLYN365652 in line [00792]",
      "_target" : "java.io.PrintStream.print@POLYN365652.s",
      "_risk" : "//QC-JAVCWZ099[00792] In java.io.PrintStream.println@POLYN370107[00792] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.print@POLYN365652.s",
      "_method" : "---java.io.PrintStream.write@POLYN360007 in line [00653]",
      "_target" : "java.io.PrintStream.write@POLYN360007.buf",
      "_risk" : "//QC-JAVCWZ099[00653] In java.io.PrintStream.print@POLYN365652[00653] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.write@POLYN360007.buf",
      "_method" : "---java.io.Writer.write@POLYN191731 in line [00503]",
      "_target" : "java.io.Writer.write@POLYN191731.cbuf",
      "_risk" : "//QC-JAVCWZ099[00503] In java.io.PrintStream.write@POLYN360007[00503] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "94",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.shell.ErroneousCommandHandler.run@POLYN145673.message",
      "_method" : "---java.io.PrintWriter.println@POLYN350639 in line [00038]",
      "_target" : "java.io.PrintWriter.println@POLYN350639.x",
      "_risk" : "//QC-JAVCWE099[00038] In org.apache.kafka.shell.ErroneousCommandHandler.run@POLYN145673[00038] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN350639.x",
      "_method" : "---java.io.PrintWriter.print@POLYN345884 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN345884.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN350639[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "95",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN907077.return",
      "_method" : "---java.lang.String.format@POLYN907077 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN150933.data",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN150933.data",
      "_method" : "---java.io.PrintWriter.println@POLYN350639 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN350639.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN150933[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN350639.x",
      "_method" : "---java.io.PrintWriter.print@POLYN345884 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN345884.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN350639[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "96",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.write@POLYN344174.len",
      "_method" : "---java.io.Writer.write@POLYN192989 in line [00456]",
      "_target" : "java.io.Writer.write@POLYN192989.len",
      "_risk" : "//QC-JAVCWZ099[00456] In java.io.PrintWriter.write@POLYN344174[00456] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.Writer.write@POLYN192989.len",
      "_method" : "---java.io.Writer.write@POLYN192155 in line [00192]",
      "_target" : "java.io.Writer.write@POLYN192155.len",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.Writer.write@POLYN192989[00192] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "97",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593220.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN588706 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN588706.unshared",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN593220[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN588706.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN589695 in line [01229]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN589695.unshared",
      "_risk" : "//QC-JAVCWZ099[01229] In java.io.ObjectOutputStream.writeClassDesc@POLYN588706[01229] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "98",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN588706 in line [01427]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN588706.unshared",
      "_risk" : "//QC-JAVCWZ099[01427] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960[01427] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN588706.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN589695 in line [01229]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN589695.unshared",
      "_risk" : "//QC-JAVCWZ099[01229] In java.io.ObjectOutputStream.writeClassDesc@POLYN588706[01229] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "99",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN605843.false",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583189 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.unshared",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN605843[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN593220 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN593220.unshared",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "100",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN558701.false",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583189 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.unshared",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN558701[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN593220 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN593220.unshared",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "101",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN560919.true",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583189 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.unshared",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN560919[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN593220 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN593220.unshared",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "102",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.tools.TransactionsCommand.printRow@POLYN312602.rowBuilder",
      "_method" : "---java.io.PrintStream.println@POLYN367398 in line [00929]",
      "_target" : "java.io.PrintStream.println@POLYN367398.x",
      "_risk" : "//QC-JAVCWE099[00929] In org.apache.kafka.tools.TransactionsCommand.printRow@POLYN312602[00929] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN367398.x",
      "_method" : "---java.io.PrintStream.print@POLYN362610 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN362610.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN367398[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "103",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.agent.Agent.exec@POLYN188976.\"Unable to create the task controller.\"",
      "_method" : "---java.io.PrintStream.println@POLYN367398 in line [00171]",
      "_target" : "java.io.PrintStream.println@POLYN367398.x",
      "_risk" : "//QC-JAVCWE099[00171] In org.apache.kafka.trogdor.agent.Agent.exec@POLYN188976[00171] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN367398.x",
      "_method" : "---java.io.PrintStream.print@POLYN362610 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN362610.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN367398[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "104",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.agent.Agent.exec@POLYN188976.\"createWorker failed\"",
      "_method" : "---java.io.PrintStream.println@POLYN367398 in line [00186]",
      "_target" : "java.io.PrintStream.println@POLYN367398.x",
      "_risk" : "//QC-JAVCWE099[00186] In org.apache.kafka.trogdor.agent.Agent.exec@POLYN188976[00186] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN367398.x",
      "_method" : "---java.io.PrintStream.print@POLYN362610 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN362610.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN367398[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "105",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN353411.x",
      "_method" : "---java.io.PrintWriter.print@POLYN348887 in line [00725]",
      "_target" : "java.io.PrintWriter.print@POLYN348887.s",
      "_risk" : "//QC-JAVCWZ099[00725] In java.io.PrintWriter.println@POLYN353411[00725] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN348887.s",
      "_method" : "---java.io.PrintWriter.write@POLYN343860 in line [00587]",
      "_target" : "java.io.PrintWriter.write@POLYN343860.buf",
      "_risk" : "//QC-JAVCWZ099[00587] In java.io.PrintWriter.print@POLYN348887[00587] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "106",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.append@POLYN362525.\"null\"",
      "_method" : "---java.io.PrintWriter.write@POLYN342562 in line [01002]",
      "_target" : "java.io.PrintWriter.write@POLYN342562.c",
      "_risk" : "//QC-JAVCWZ099[01002] In java.io.PrintWriter.append@POLYN362525[01002] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.write@POLYN342562.c",
      "_method" : "---java.io.Writer.write@POLYN191096 in line [00405]",
      "_target" : "java.io.Writer.write@POLYN191096.c",
      "_risk" : "//QC-JAVCWZ099[00405] In java.io.PrintWriter.write@POLYN342562[00405] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "107",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.net.Socket.Socket@POLYN469199.address",
      "_method" : "---java.net.Socket.connect@POLYN472974 in line [00415]",
      "_target" : "java.net.Socket.connect@POLYN472974.endpoint",
      "_risk" : "//QC-JAVCWZ099[00415] In java.net.Socket.Socket@POLYN469199[00415] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.net.Socket.connect@POLYN472974.endpoint",
      "_method" : "---java.net.Socket.connect@POLYN473624 in line [00518]",
      "_target" : "java.net.Socket.connect@POLYN473624.endpoint",
      "_risk" : "//QC-JAVCWZ099[00518] In java.net.Socket.connect@POLYN472974[00518] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "108",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.lang.Class.privateGetPublicMethods@POLYN1183477.m",
      "_method" : "---java.util.HashMap.merge@POLYN661864 in line [03528]",
      "_target" : "java.util.HashMap.merge@POLYN661864.key",
      "_risk" : "//QC-JAVCWZ099[03528] In java.lang.Class.privateGetPublicMethods@POLYN1183477[03528] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.merge@POLYN661864.key",
      "_method" : "---java.util.HashMap.removeNode@POLYN634168 in line [01259]",
      "_target" : "java.util.HashMap.removeNode@POLYN634168.key",
      "_risk" : "//QC-JAVCWZ099[01259] In java.util.HashMap.merge@POLYN661864[01259] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "109",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN540985.change",
      "_method" : "---java.util.HashMap.merge@POLYN661864 in line [00988]",
      "_target" : "java.util.HashMap.merge@POLYN661864.key",
      "_risk" : "//QC-JAVCWE099[00988] In org.apache.kafka.controller.ReplicationControlManager.alterPartition@POLYN540985[00988] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.merge@POLYN661864.key",
      "_method" : "---java.util.HashMap.removeNode@POLYN634168 in line [01259]",
      "_target" : "java.util.HashMap.removeNode@POLYN634168.key",
      "_risk" : "//QC-JAVCWZ099[01259] In java.util.HashMap.merge@POLYN661864[01259] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "110",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.compute@POLYN657939.tab",
      "_method" : "---java.util.HashMap.treeifyBin@POLYN631049 in line [01209]",
      "_target" : "java.util.HashMap.treeifyBin@POLYN631049.tab",
      "_risk" : "//QC-JAVCWZ099[01209] In java.util.HashMap.compute@POLYN657939[01209] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.treeifyBin@POLYN631049.tab",
      "_method" : "---java.util.HashMap.treeify@POLYN702313 in line [00769]",
      "_target" : "java.util.HashMap.treeify@POLYN702313.tab",
      "_risk" : "//QC-JAVCWZ099[00769] In java.util.HashMap.treeifyBin@POLYN631049[00769] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "111",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.computeIfAbsent@POLYN652807.tab",
      "_method" : "---java.util.HashMap.treeifyBin@POLYN631049 in line [01137]",
      "_target" : "java.util.HashMap.treeifyBin@POLYN631049.tab",
      "_risk" : "//QC-JAVCWZ099[01137] In java.util.HashMap.computeIfAbsent@POLYN652807[01137] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.treeifyBin@POLYN631049.tab",
      "_method" : "---java.util.HashMap.treeify@POLYN702313 in line [00769]",
      "_target" : "java.util.HashMap.treeify@POLYN702313.tab",
      "_risk" : "//QC-JAVCWZ099[00769] In java.util.HashMap.treeifyBin@POLYN631049[00769] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "112",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.merge@POLYN661864.tab",
      "_method" : "---java.util.HashMap.treeifyBin@POLYN631049 in line [01268]",
      "_target" : "java.util.HashMap.treeifyBin@POLYN631049.tab",
      "_risk" : "//QC-JAVCWZ099[01268] In java.util.HashMap.merge@POLYN661864[01268] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.treeifyBin@POLYN631049.tab",
      "_method" : "---java.util.HashMap.treeify@POLYN702313 in line [00769]",
      "_target" : "java.util.HashMap.treeify@POLYN702313.tab",
      "_risk" : "//QC-JAVCWZ099[00769] In java.util.HashMap.treeifyBin@POLYN631049[00769] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "113",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.putVal@POLYN622499.tab",
      "_method" : "---java.util.HashMap.treeifyBin@POLYN631049 in line [00641]",
      "_target" : "java.util.HashMap.treeifyBin@POLYN631049.tab",
      "_risk" : "//QC-JAVCWZ099[00641] In java.util.HashMap.putVal@POLYN622499[00641] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.treeifyBin@POLYN631049.tab",
      "_method" : "---java.util.HashMap.treeify@POLYN702313 in line [00769]",
      "_target" : "java.util.HashMap.treeify@POLYN702313.tab",
      "_risk" : "//QC-JAVCWZ099[00769] In java.util.HashMap.treeifyBin@POLYN631049[00769] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  } ],
  "_lesDeadlocks" : [ {
    "_id" : "R0",
    "_libelle" : "org.apache.kafka.connect.mirror.OffsetSyncStore.this"
  }, {
    "_id" : "R1",
    "_libelle" : "org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155165.pollTimeout"
  }, {
    "_id" : "R2",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.this"
  }, {
    "_id" : "R3",
    "_libelle" : "org.apache.kafka.clients.Metadata.this"
  }, {
    "_id" : "R4",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336351.partition"
  }, {
    "_id" : "R5",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336351.offsetResetStrategy"
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
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN333741.tp"
  }, {
    "_id" : "R11",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN333741.highWatermark"
  }, {
    "_id" : "R12",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN333931.tp"
  }, {
    "_id" : "R13",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN333931.logStartOffset"
  }, {
    "_id" : "R14",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN334121.tp"
  }, {
    "_id" : "R15",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN334121.lastStableOffset"
  }, {
    "_id" : "R16",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.this"
  }, {
    "_id" : "R17",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891.tp"
  }, {
    "_id" : "R18",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN326831.tp"
  }, {
    "_id" : "R19",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN326831.position"
  }, {
    "_id" : "R20",
    "_libelle" : "org.apache.kafka.trogdor.workload.RoundTripWorker.this"
  }, {
    "_id" : "R21",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.this"
  }, {
    "_id" : "R22",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN319395.assignments"
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
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN259832.cleanupDelayMs"
  }, {
    "_id" : "R27",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN256827.taskId"
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
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.this"
  }, {
    "_id" : "R35",
    "_libelle" : "org.apache.kafka.connect.runtime.distributed.DistributedHerder.this"
  }, {
    "_id" : "R36",
    "_libelle" : "org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN575916.request"
  }, {
    "_id" : "R37",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerConnector.this"
  }, {
    "_id" : "R38",
    "_libelle" : "org.apache.kafka.connect.runtime.Worker.this"
  }, {
    "_id" : "R39",
    "_libelle" : "org.apache.kafka.connect.runtime.ConnectMetrics.this"
  }, {
    "_id" : "R40",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN297264.sensor"
  }, {
    "_id" : "R41",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.this"
  }, {
    "_id" : "R42",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN163089.prefix"
  }, {
    "_id" : "R43",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN163089.id"
  }, {
    "_id" : "R44",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN163089.metrics"
  }, {
    "_id" : "R45",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.this"
  }, {
    "_id" : "R46",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.consumerRecord@POLYN203129.consumedMessage"
  }, {
    "_id" : "R47",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.this"
  }, {
    "_id" : "R48",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN164536.lastVersion"
  }, {
    "_id" : "R49",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN164536.timeoutMs"
  }, {
    "_id" : "R50",
    "_libelle" : "org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN263601.topic"
  }, {
    "_id" : "R51",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN325927.dq"
  }, {
    "_id" : "R52",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.this"
  }, {
    "_id" : "R53",
    "_libelle" : "org.apache.kafka.clients.producer.internals.IncompleteBatches.incomplete"
  }, {
    "_id" : "R54",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373330.topicPartition"
  }, {
    "_id" : "R55",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN385653.exception"
  }, {
    "_id" : "R56",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN376139.exception"
  }, {
    "_id" : "R57",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418849.isDisconnected"
  }, {
    "_id" : "R58",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418849.cause"
  }, {
    "_id" : "R59",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418495.error"
  }, {
    "_id" : "R60",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN378886.tp"
  }, {
    "_id" : "R61",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.abortBatches@POLYN359488.dq"
  }, {
    "_id" : "R62",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN394635.e"
  }, {
    "_id" : "R63",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN162495.topic"
  }, {
    "_id" : "R64",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN162495.nowMs"
  }, {
    "_id" : "R65",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN350009.deque"
  }, {
    "_id" : "R66",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN377149.topicPartition"
  }, {
    "_id" : "R67",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN381257.topicPartition"
  }, {
    "_id" : "R68",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN381257.increment"
  }, {
    "_id" : "R69",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.updateEstimation@POLYN156130.compressionRatioForTopic"
  }, {
    "_id" : "R70",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386248.batch"
  }, {
    "_id" : "R71",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386248.exception"
  }, {
    "_id" : "R72",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386248.adjustSequenceNumbers"
  }, {
    "_id" : "R73",
    "_libelle" : "java.net.Socket.this"
  }, {
    "_id" : "R74",
    "_libelle" : "java.net.Socket.setSendBufferSize@POLYN494347.size"
  }, {
    "_id" : "R75",
    "_libelle" : "java.net.Socket.setReceiveBufferSize@POLYN497050.size"
  }, {
    "_id" : "R76",
    "_libelle" : "java.io.PipedOutputStream.this"
  }, {
    "_id" : "R77",
    "_libelle" : "java.io.PipedOutputStream.connect@POLYN171515.snk"
  }, {
    "_id" : "R78",
    "_libelle" : "java.io.BufferedOutputStream.this"
  }, {
    "_id" : "R79",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN161430.b"
  }, {
    "_id" : "R80",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN161430.off"
  }, {
    "_id" : "R81",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN161430.len"
  }, {
    "_id" : "R82",
    "_libelle" : "java.io.Writer.lock"
  }, {
    "_id" : "R83",
    "_libelle" : "java.io.BufferedInputStream.mark@POLYN249289.readlimit"
  }, {
    "_id" : "R84",
    "_libelle" : "org.apache.kafka.clients.Metadata.bootstrap@POLYN252681.addresses"
  }, {
    "_id" : "R85",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN162309.prefix"
  }, {
    "_id" : "R86",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN162309.id"
  }, {
    "_id" : "R87",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN162309.metrics"
  }, {
    "_id" : "R88",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN162309.nowMs"
  }, {
    "_id" : "R89",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.remove@POLYN150109.nodeId"
  }, {
    "_id" : "R90",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.update@POLYN149837.nodeId"
  }, {
    "_id" : "R91",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.update@POLYN149837.nodeApiVersions"
  }, {
    "_id" : "R92",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859.f"
  }, {
    "_id" : "R93",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.transfer@POLYN1542289.f"
  }, {
    "_id" : "R94",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.treeifyBin@POLYN1558243.b"
  }, {
    "_id" : "R95",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.this"
  }, {
    "_id" : "R96",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.this"
  }, {
    "_id" : "R97",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN194835.key"
  }, {
    "_id" : "R98",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN194835.value"
  }, {
    "_id" : "R99",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.this"
  }, {
    "_id" : "R100",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN274918.connector"
  }, {
    "_id" : "R101",
    "_libelle" : "org.apache.kafka.clients.admin.KafkaAdminClient.this"
  }, {
    "_id" : "R102",
    "_libelle" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.this"
  }, {
    "_id" : "R103",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN253073.response"
  }, {
    "_id" : "R104",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN253073.isPartialUpdate"
  }, {
    "_id" : "R105",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN253073.nowMs"
  }, {
    "_id" : "R106",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN253647.requestVersion"
  }, {
    "_id" : "R107",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN253647.response"
  }, {
    "_id" : "R108",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN253647.isPartialUpdate"
  }, {
    "_id" : "R109",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN253647.nowMs"
  }, {
    "_id" : "R110",
    "_libelle" : "org.apache.kafka.common.requests.MetadataResponse.data"
  }, {
    "_id" : "R111",
    "_libelle" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.lock"
  }, {
    "_id" : "R112",
    "_libelle" : "java.io.File.this"
  }, {
    "_id" : "R113",
    "_libelle" : "java.io.File.readObject@POLYN634002.s"
  }, {
    "_id" : "R114",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.this"
  }, {
    "_id" : "R115",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN237048.key"
  }, {
    "_id" : "R116",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN237048.value"
  }, {
    "_id" : "R117",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN237048.windowStartTimestamp"
  }, {
    "_id" : "R118",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaConfigBackingStore.lock"
  }, {
    "_id" : "R119",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.this"
  }, {
    "_id" : "R120",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN222552.initialTopologies"
  }, {
    "_id" : "R121",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.this"
  }, {
    "_id" : "R122",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.setStreamsConfig@POLYN487727.applicationConfig"
  }, {
    "_id" : "R123",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.abortUndrainedBatches@POLYN360110.dq"
  }, {
    "_id" : "R124",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN394457.request"
  }, {
    "_id" : "R125",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.this"
  }, {
    "_id" : "R126",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN260277.key"
  }, {
    "_id" : "R127",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN260277.value"
  }, {
    "_id" : "R128",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN260277.windowStartTimestamp"
  }, {
    "_id" : "R129",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.this"
  }, {
    "_id" : "R130",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN229453.connName"
  }, {
    "_id" : "R131",
    "_libelle" : "org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitableRecords"
  }, {
    "_id" : "R132",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.this"
  }, {
    "_id" : "R133",
    "_libelle" : "java.util.Hashtable.this"
  }, {
    "_id" : "R134",
    "_libelle" : "java.util.Hashtable.putAll@POLYN430200.t"
  }, {
    "_id" : "R135",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.this"
  }, {
    "_id" : "R136",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN243829.topic"
  }, {
    "_id" : "R137",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN243829.partitions"
  }, {
    "_id" : "R138",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN242524.newOffsets"
  }, {
    "_id" : "R139",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN242948.newOffsets"
  }, {
    "_id" : "R140",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN227575.connName"
  }, {
    "_id" : "R141",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN227575.config"
  }, {
    "_id" : "R142",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN227575.allowReplace"
  }, {
    "_id" : "R143",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN227575.callback"
  }, {
    "_id" : "R144",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN227575.configInfos"
  }, {
    "_id" : "R145",
    "_libelle" : "org.apache.kafka.tools.ThroughputThrottler.this"
  }, {
    "_id" : "R146",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN225594.connName"
  }, {
    "_id" : "R147",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN225594.callback"
  }, {
    "_id" : "R148",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.this"
  }, {
    "_id" : "R149",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN233904.request"
  }, {
    "_id" : "R150",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN233904.cb"
  }, {
    "_id" : "R151",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN391767.now"
  }, {
    "_id" : "R152",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN231288.taskId"
  }, {
    "_id" : "R153",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN231288.cb"
  }, {
    "_id" : "R154",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.sourceRecord@POLYN202900.preTransformRecord"
  }, {
    "_id" : "R155",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.nodeLevelSensors"
  }, {
    "_id" : "R156",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.pollTasks"
  }, {
    "_id" : "R157",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN323859.tp"
  }, {
    "_id" : "R158",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN323859.position"
  }, {
    "_id" : "R159",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN421470.reason"
  }, {
    "_id" : "R160",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN421470.shouldResetMemberId"
  }, {
    "_id" : "R161",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN420771.reason"
  }, {
    "_id" : "R162",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN420771.shouldResetMemberId"
  }, {
    "_id" : "R163",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.taskLevelSensors"
  }, {
    "_id" : "R164",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN333003.tp"
  }, {
    "_id" : "R165",
    "_libelle" : "org.apache.kafka.common.security.oauthbearer.internals.expiring.ExpiringCredentialRefreshingLogin.mandatoryClassToSynchronizeOnPriorToRefresh"
  }, {
    "_id" : "R166",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN180334.partition"
  }, {
    "_id" : "R167",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN180334.offset"
  }, {
    "_id" : "R168",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN341188.tp"
  }, {
    "_id" : "R169",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN341339.tp"
  }, {
    "_id" : "R170",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.this"
  }, {
    "_id" : "R171",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.openIterators"
  }, {
    "_id" : "R172",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN385101.batch"
  }, {
    "_id" : "R173",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN385101.response"
  }, {
    "_id" : "R174",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTask.this"
  }, {
    "_id" : "R175",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.this"
  }, {
    "_id" : "R176",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN166516.reader"
  }, {
    "_id" : "R177",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN191589.newCacheSizeBytes"
  }, {
    "_id" : "R178",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerSourceTask.this"
  }, {
    "_id" : "R179",
    "_libelle" : "org.apache.kafka.connect.util.ConvertingFutureCallback.this"
  }, {
    "_id" : "R180",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromAssignment@POLYN575727.partitions"
  }, {
    "_id" : "R181",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromAssignment@POLYN575727.logPrefix"
  }, {
    "_id" : "R182",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromMetadata@POLYN576536.topics"
  }, {
    "_id" : "R183",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromMetadata@POLYN576536.logPrefix"
  }, {
    "_id" : "R184",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.taskDirCreationLock"
  }, {
    "_id" : "R185",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.NamedTopologyBuilder.this"
  }, {
    "_id" : "R186",
    "_libelle" : "org.apache.kafka.streams.StreamsBuilder.this"
  }, {
    "_id" : "R187",
    "_libelle" : "org.apache.kafka.clients.Metadata.failedUpdate@POLYN265309.now"
  }, {
    "_id" : "R188",
    "_libelle" : "org.apache.kafka.connect.file.FileStreamSourceTask.this"
  }, {
    "_id" : "R189",
    "_libelle" : "java.io.PrintStream.this"
  }, {
    "_id" : "R190",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN232701.connName"
  }, {
    "_id" : "R191",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN232701.cb"
  }, {
    "_id" : "R192",
    "_libelle" : "java.io.File.writeObject@POLYN633621.s"
  }, {
    "_id" : "R193",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN315252.pattern"
  }, {
    "_id" : "R194",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN315252.listener"
  }, {
    "_id" : "R195",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelSensors"
  }, {
    "_id" : "R196",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.rebalance@POLYN229413.newAssignment"
  }, {
    "_id" : "R197",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230022.pattern"
  }, {
    "_id" : "R198",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230022.listener"
  }, {
    "_id" : "R199",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN238491.offsets"
  }, {
    "_id" : "R200",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237875.offsets"
  }, {
    "_id" : "R201",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237875.callback"
  }, {
    "_id" : "R202",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN239216.timeout"
  }, {
    "_id" : "R203",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelMetrics"
  }, {
    "_id" : "R204",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.splitAndReenqueue@POLYN337105.partitionDequeue"
  }, {
    "_id" : "R205",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.setEstimation@POLYN158078.compressionRatioForTopic"
  }, {
    "_id" : "R206",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN331436.tp"
  }, {
    "_id" : "R207",
    "_libelle" : "org.apache.kafka.clients.producer.MockProducer.this"
  }, {
    "_id" : "R208",
    "_libelle" : "org.apache.kafka.connect.storage.FileOffsetBackingStore.this"
  }, {
    "_id" : "R209",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN199093.entries"
  }, {
    "_id" : "R210",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN324450.tp"
  }, {
    "_id" : "R211",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN324450.position"
  }, {
    "_id" : "R212",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN324450.requestedResetStrategy"
  }, {
    "_id" : "R213",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.this"
  }, {
    "_id" : "R214",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN182974.key"
  }, {
    "_id" : "R215",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN182974.value"
  }, {
    "_id" : "R216",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.this"
  }, {
    "_id" : "R217",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN175095.key"
  }, {
    "_id" : "R218",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN175095.value"
  }, {
    "_id" : "R219",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN239596.partition"
  }, {
    "_id" : "R220",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN239596.offset"
  }, {
    "_id" : "R221",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336546.partitions"
  }, {
    "_id" : "R222",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336546.offsetResetStrategy"
  }, {
    "_id" : "R223",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN164050.reader"
  }, {
    "_id" : "R224",
    "_libelle" : "java.net.ServerSocket.this"
  }, {
    "_id" : "R225",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.this"
  }, {
    "_id" : "R226",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN164642.consumerRecords"
  }, {
    "_id" : "R227",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.this"
  }, {
    "_id" : "R228",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.addStateStore@POLYN237430.builder"
  }, {
    "_id" : "R229",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seekToBeginning@POLYN242290.partitions"
  }, {
    "_id" : "R230",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seekToEnd@POLYN242714.partitions"
  }, {
    "_id" : "R231",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418694.cause"
  }, {
    "_id" : "R232",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN421768.api"
  }, {
    "_id" : "R233",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN421768.error"
  }, {
    "_id" : "R234",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN421768.shouldResetMemberId"
  }, {
    "_id" : "R235",
    "_libelle" : "java.net.ServerSocket.setSoTimeout@POLYN323298.timeout"
  }, {
    "_id" : "R236",
    "_libelle" : "java.net.ServerSocket.setReceiveBufferSize@POLYN329577.size"
  }, {
    "_id" : "R237",
    "_libelle" : "java.net.Socket.setSoTimeout@POLYN492572.timeout"
  }, {
    "_id" : "R238",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1499465.r"
  }, {
    "_id" : "R239",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1499465.f"
  }, {
    "_id" : "R240",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142.r"
  }, {
    "_id" : "R241",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142.f"
  }, {
    "_id" : "R242",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.merge@POLYN1518796.f"
  }, {
    "_id" : "R243",
    "_libelle" : "java.io.PipedInputStream.this"
  }, {
    "_id" : "R244",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN220270.b"
  }, {
    "_id" : "R245",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN221377.b"
  }, {
    "_id" : "R246",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN221377.off"
  }, {
    "_id" : "R247",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN221377.len"
  }, {
    "_id" : "R248",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.replaceNode@POLYN1468411.f"
  }, {
    "_id" : "R249",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.pause@POLYN244104.partitions"
  }, {
    "_id" : "R250",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.resume@POLYN244426.partitions"
  }, {
    "_id" : "R251",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN334561.tp"
  }, {
    "_id" : "R252",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN334561.preferredReadReplicaId"
  }, {
    "_id" : "R253",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN334561.timeMs"
  }, {
    "_id" : "R254",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN337110.partitions"
  }, {
    "_id" : "R255",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN337110.nextAllowResetTimeMs"
  }, {
    "_id" : "R256",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.this"
  }, {
    "_id" : "R257",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN162070.status"
  }, {
    "_id" : "R258",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN161527.status"
  }, {
    "_id" : "R259",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN160569.b"
  }, {
    "_id" : "R260",
    "_libelle" : "java.io.PipedReader.this"
  }, {
    "_id" : "R261",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.clear@POLYN1473193.f"
  }, {
    "_id" : "R262",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfPresent@POLYN1505756.f"
  }, {
    "_id" : "R263",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.putAll@POLYN184058.entries"
  }, {
    "_id" : "R264",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN257788.key"
  }, {
    "_id" : "R265",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN257788.value"
  }, {
    "_id" : "R266",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN200520.namespace"
  }, {
    "_id" : "R267",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheLevelSensors"
  }, {
    "_id" : "R268",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.assignPartitionsLock"
  }, {
    "_id" : "R269",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.this"
  }, {
    "_id" : "R270",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.writeEntries@POLYN155479.committedOffsets"
  }, {
    "_id" : "R271",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN229815.topics"
  }, {
    "_id" : "R272",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN231639.topics"
  }, {
    "_id" : "R273",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN231639.listener"
  }, {
    "_id" : "R274",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN231453.pattern"
  }, {
    "_id" : "R275",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN238822.callback"
  }, {
    "_id" : "R276",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN341485.partitions"
  }, {
    "_id" : "R277",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN341485.nextRetryTimeMs"
  }, {
    "_id" : "R278",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeReporter@POLYN303539.reporter"
  }, {
    "_id" : "R279",
    "_libelle" : "org.apache.kafka.common.metrics.JmxReporter.LOCK"
  }, {
    "_id" : "R280",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.this"
  }, {
    "_id" : "R281",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN161382.status"
  }, {
    "_id" : "R282",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN161003.status"
  }, {
    "_id" : "R283",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.this"
  }, {
    "_id" : "R284",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.configure@POLYN174452.configs"
  }, {
    "_id" : "R285",
    "_libelle" : "java.io.PipedReader.receive@POLYN200309.c"
  }, {
    "_id" : "R286",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.this"
  }, {
    "_id" : "R287",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN254890.activePartitionHostMap"
  }, {
    "_id" : "R288",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN254890.standbyPartitionHostMap"
  }, {
    "_id" : "R289",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN254890.clusterMetadata"
  }, {
    "_id" : "R290",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.this"
  }, {
    "_id" : "R291",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.calculateNextWindow@POLYN160490.force"
  }, {
    "_id" : "R292",
    "_libelle" : "java.io.FileInputStream.closeLock"
  }, {
    "_id" : "R293",
    "_libelle" : "java.io.FileOutputStream.closeLock"
  }, {
    "_id" : "R294",
    "_libelle" : "java.io.PipedWriter.this"
  }, {
    "_id" : "R295",
    "_libelle" : "java.io.PipedWriter.connect@POLYN170745.snk"
  }, {
    "_id" : "R296",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.reporters@POLYN202647.reporters"
  }, {
    "_id" : "R297",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.assign@POLYN232017.partitions"
  }, {
    "_id" : "R298",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.addRecord@POLYN236521.record"
  }, {
    "_id" : "R299",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setException@POLYN237466.exception"
  }, {
    "_id" : "R300",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN237597.exception"
  }, {
    "_id" : "R301",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN247673.task"
  }, {
    "_id" : "R302",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.this"
  }, {
    "_id" : "R303",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.addTransientTopics@POLYN152072.topics"
  }, {
    "_id" : "R304",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN165308.requestVersion"
  }, {
    "_id" : "R305",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN165308.response"
  }, {
    "_id" : "R306",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN165308.isPartialUpdate"
  }, {
    "_id" : "R307",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN165308.nowMs"
  }, {
    "_id" : "R308",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN165921.fatalException"
  }, {
    "_id" : "R309",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.this"
  }, {
    "_id" : "R310",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.put@POLYN146596.key"
  }, {
    "_id" : "R311",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.put@POLYN146596.value"
  }, {
    "_id" : "R312",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.addReporter@POLYN303183.reporter"
  }, {
    "_id" : "R313",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN187936.key"
  }, {
    "_id" : "R314",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.putAll@POLYN160447.entries"
  }, {
    "_id" : "R315",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.this"
  }, {
    "_id" : "R316",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.commitTransaction@POLYN153127.record"
  }, {
    "_id" : "R317",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.abortTransaction@POLYN153491.record"
  }, {
    "_id" : "R318",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN223998.callback"
  }, {
    "_id" : "R319",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN224229.connName"
  }, {
    "_id" : "R320",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN224229.callback"
  }, {
    "_id" : "R321",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226662.connName"
  }, {
    "_id" : "R322",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226662.config"
  }, {
    "_id" : "R323",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226662.allowReplace"
  }, {
    "_id" : "R324",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226662.callback"
  }, {
    "_id" : "R325",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN229827.connName"
  }, {
    "_id" : "R326",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN229827.callback"
  }, {
    "_id" : "R327",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.this"
  }, {
    "_id" : "R328",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN168307.connector"
  }, {
    "_id" : "R329",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN168307.properties"
  }, {
    "_id" : "R330",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeConnectorConfig@POLYN168926.connector"
  }, {
    "_id" : "R331",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeTaskConfigs@POLYN169277.connector"
  }, {
    "_id" : "R332",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN169925.connector"
  }, {
    "_id" : "R333",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN169925.configs"
  }, {
    "_id" : "R334",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN170810.connector"
  }, {
    "_id" : "R335",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN170810.state"
  }, {
    "_id" : "R336",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageReaderImpl.offsetReadFutures"
  }, {
    "_id" : "R337",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.setAclMutator@POLYN170685.aclMutator"
  }, {
    "_id" : "R338",
    "_libelle" : "java.io.PipedOutputStream.sink"
  }, {
    "_id" : "R339",
    "_libelle" : "java.io.PipedWriter.sink"
  }, {
    "_id" : "R340",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.this"
  }, {
    "_id" : "R341",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.write@POLYN177619.snapshot"
  }, {
    "_id" : "R342",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.topicLevelSensors"
  }, {
    "_id" : "R343",
    "_libelle" : "org.apache.kafka.streams.state.internals.DelegatingPeekingKeyValueIterator.this"
  }, {
    "_id" : "R344",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDbIterator.this"
  }, {
    "_id" : "R345",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.this"
  }, {
    "_id" : "R346",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.delay@POLYN148517.amount"
  }, {
    "_id" : "R347",
    "_libelle" : "java.io.PipedReader.receive@POLYN201987.c"
  }, {
    "_id" : "R348",
    "_libelle" : "java.io.PipedReader.receive@POLYN201987.off"
  }, {
    "_id" : "R349",
    "_libelle" : "java.io.PipedReader.receive@POLYN201987.len"
  }, {
    "_id" : "R350",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.close@POLYN247120.timeout"
  }, {
    "_id" : "R351",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.metrics@POLYN202018.errorHandlingMetrics"
  }, {
    "_id" : "R352",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.this"
  }, {
    "_id" : "R353",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN166269.newState"
  }, {
    "_id" : "R354",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN166269.now"
  }, {
    "_id" : "R355",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.setUpdateListener@POLYN171635.listener"
  }, {
    "_id" : "R356",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.setNamedTopology@POLYN487990.namedTopology"
  } ],
  "_lesDeadlocksSequences" : [ {
    "_id" : "0",
    "_lesItems" : [ "S0:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN183669", "S0:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN197712", "S0:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155165 (R0 in line [00067],R1 in line [00067])", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857529", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857529", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.updateAssignmentMetadataIfNeeded@POLYN859426", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.updateFetchPositions@POLYN912062", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.resetInitializingPositions@POLYN338984 (R2 in line [00695])", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336962", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336351 (R2 in line [00636],R4 in line [00636],R5 in line [00636])", "S0:java.io.BufferedInputStream.reset@POLYN250019 (R6 in line [00445])", "S0:java.io.BufferedInputStream.getBufIfOpen@POLYN237940" ]
  }, {
    "_id" : "1",
    "_lesItems" : [ "S1:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN183669", "S1:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN197712", "S1:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155165 (R0 in line [00067],R1 in line [00067])", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857529", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857529", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859883", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859883", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN498385", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843", "S1:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN333741 (R2 in line [00576],R10 in line [00576],R11 in line [00576])", "S1:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S1:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131" ]
  }, {
    "_id" : "2",
    "_lesItems" : [ "S2:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN183669", "S2:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN197712", "S2:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155165 (R0 in line [00067],R1 in line [00067])", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857529", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857529", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859883", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859883", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN498385", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843", "S2:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN333931 (R2 in line [00580],R12 in line [00580],R13 in line [00580])", "S2:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S2:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131" ]
  }, {
    "_id" : "3",
    "_lesItems" : [ "S3:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN183669", "S3:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN197712", "S3:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155165 (R0 in line [00067],R1 in line [00067])", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857529", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857529", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859883", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859883", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN498385", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN334121 (R2 in line [00584],R14 in line [00584],R15 in line [00584])", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S3:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131" ]
  }, {
    "_id" : "4",
    "_lesItems" : [ "S4:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN183669", "S4:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN197712", "S4:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155165 (R0 in line [00067],R1 in line [00067])", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857529", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857529", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859883", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859883", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN498385", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843", "S4:org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891 (R2 in line [00755],R17 in line [00755])", "S4:org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931", "S4:java.util.HashMap.HashIterator.remove@POLYN675066", "S4:java.util.HashMap.removeNode@POLYN634168", "S4:java.util.HashMap.afterNodeRemoval@POLYN694460" ]
  }, {
    "_id" : "5",
    "_lesItems" : [ "S5:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN183669", "S5:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN197712", "S5:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155165 (R0 in line [00067],R1 in line [00067])", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857529", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857529", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859883", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859883", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN498385", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN498385", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN500666", "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN326831 (R2 in line [00443],R18 in line [00443],R19 in line [00443])", "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S5:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131" ]
  }, {
    "_id" : "6",
    "_lesItems" : [ "S6:org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN212082", "S6:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S6:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S6:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN410562", "S6:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN410562", "S6:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN319395 (R2 in line [00273],R22 in line [00273])", "S6:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131" ]
  }, {
    "_id" : "7",
    "_lesItems" : [ "S7:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN232612 (R135 in line [00163])", "S7:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN232846 (R135 in line [00168],R156 in line [00175])", "S7:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN232846 (R135 in line [00168],R156 in line [00175])", "S7:org.apache.kafka.clients.consumer.MockConsumer.updateFetchPosition@POLYN248353", "S7:org.apache.kafka.clients.consumer.MockConsumer.resetOffsetPosition@POLYN248972", "S7:org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN239835", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.seek@POLYN324049", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN323859 (R2 in line [00378],R157 in line [00378],R158 in line [00378])", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN323859 (R2 in line [00378],R157 in line [00378],R158 in line [00378])", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S7:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131" ]
  }, {
    "_id" : "8",
    "_lesItems" : [ "S8:org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN903660", "S8:org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN903660", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN333003 (R2 in line [00561],R164 in line [00561])", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S8:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131" ]
  }, {
    "_id" : "9",
    "_lesItems" : [ "S9:org.apache.kafka.streams.processor.internals.StreamTask.addPartitionsForOffsetReset@POLYN315713", "S9:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN894503", "S9:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN894503", "S9:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN341188 (R2 in line [00737],R168 in line [00737])", "S9:org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.pause@POLYN350524" ]
  }, {
    "_id" : "10",
    "_lesItems" : [ "S10:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN895261", "S10:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN895261", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN341339 (R2 in line [00741],R169 in line [00741])", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.resume@POLYN350631" ]
  }, {
    "_id" : "11",
    "_lesItems" : [ "S11:org.apache.kafka.clients.consumer.KafkaConsumer.subscribe@POLYN848402", "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN315252 (R2 in line [00172],R193 in line [00172],R194 in line [00172])", "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN320296" ]
  }, {
    "_id" : "12",
    "_lesItems" : [ "S12:org.apache.kafka.jmh.consumer.SubscriptionStateBenchmark.setup@POLYN156273", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN331436 (R2 in line [00529],R206 in line [00529])", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.completeValidation@POLYN348245" ]
  }, {
    "_id" : "13",
    "_lesItems" : [ "S13:org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetIfNeeded@POLYN503623", "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN324450 (R2 in line [00390],R210 in line [00390],R211 in line [00390],R212 in line [00390])", "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN323705", "S13:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131" ]
  }, {
    "_id" : "14",
    "_lesItems" : [ "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336546 (R2 in line [00640],R221 in line [00640],R222 in line [00640])", "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336546 (R2 in line [00640],R221 in line [00640],R222 in line [00640])", "S14:java.io.BufferedInputStream.reset@POLYN250019 (R6 in line [00445])", "S14:java.io.BufferedInputStream.getBufIfOpen@POLYN237940" ]
  }, {
    "_id" : "15",
    "_lesItems" : [ "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN334561 (R2 in line [00596],R251 in line [00596],R252 in line [00596],R253 in line [00596])", "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN334561 (R2 in line [00596],R251 in line [00596],R252 in line [00596],R253 in line [00596])", "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S15:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131" ]
  }, {
    "_id" : "16",
    "_lesItems" : [ "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN337110 (R2 in line [00651],R254 in line [00651],R255 in line [00651])", "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN337110 (R2 in line [00651],R254 in line [00651],R255 in line [00651])", "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S16:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131" ]
  }, {
    "_id" : "17",
    "_lesItems" : [ "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN341485 (R2 in line [00745],R276 in line [00745],R277 in line [00745])", "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN323705", "S17:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131" ]
  }, {
    "_id" : "18",
    "_lesItems" : [ "S18:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN370184", "S18:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN384571", "S18:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN547133", "S18:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN548165", "S18:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN555906", "S18:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN555906", "S18:org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN263601 (R3 in line [00450],R50 in line [00450])" ]
  }, {
    "_id" : "19",
    "_lesItems" : [ "S19:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN514769", "S19:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN514769", "S19:org.apache.kafka.clients.Metadata.bootstrap@POLYN252681 (R3 in line [00238],R84 in line [00238])", "S19:org.apache.kafka.clients.MetadataCache.bootstrap@POLYN189925", "S19:java.util.Map.put@POLYN429794" ]
  }, {
    "_id" : "20",
    "_lesItems" : [ "S20:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN253073 (R3 in line [00249],R103 in line [00249],R104 in line [00249],R105 in line [00249])", "S20:org.apache.kafka.clients.Metadata.update@POLYN253647 (R3 in line [00263],R106 in line [00263],R107 in line [00263],R108 in line [00263],R109 in line [00263])", "S20:org.apache.kafka.common.ClusterResource.clusterId@POLYN148319" ]
  }, {
    "_id" : "21",
    "_lesItems" : [ "S21:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleServerDisconnect@POLYN368441", "S21:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleServerDisconnect@POLYN368441", "S21:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleFailedRequest@POLYN369382", "S21:org.apache.kafka.clients.Metadata.failedUpdate@POLYN265309 (R3 in line [00490],R187 in line [00490])" ]
  }, {
    "_id" : "22",
    "_lesItems" : [ "S22:org.apache.kafka.connect.runtime.distributed.DistributedHerder.writeToConfigTopicAsLeader@POLYN580288", "S22:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN526240", "S22:org.apache.kafka.connect.runtime.distributed.DistributedHerder.tick@POLYN527200", "S22:org.apache.kafka.connect.runtime.distributed.DistributedHerder.tick@POLYN527200", "S22:org.apache.kafka.connect.runtime.distributed.DistributedHerder.processRestartRequests@POLYN574948 (R35 in line [01364])", "S22:org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN575916 (R35 in line [01387],R36 in line [01387])", "S22:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN464172", "S22:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN461959", "S22:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN460833", "S22:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN460833", "S22:org.apache.kafka.connect.runtime.Worker.stop@POLYN421463", "S22:org.apache.kafka.connect.runtime.Worker.stop@POLYN421463", "S22:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN495368 (R38 in line [01751])", "S22:org.apache.kafka.connect.runtime.ConnectMetrics.MetricGroup.close@POLYN232474 (R39 in line [00406])", "S22:org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN297264 (R40 in line [00449],R16 in line [00450])", "S22:org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN297264 (R40 in line [00449],R16 in line [00450])", "S22:java.util.HashMap.get@POLYN618616" ]
  }, {
    "_id" : "23",
    "_lesItems" : [ "S23:org.apache.kafka.common.metrics.Metrics.removeReporter@POLYN303539 (R16 in line [00584],R278 in line [00584])", "S23:org.apache.kafka.common.metrics.JmxReporter.close@POLYN199541 (R279 in line [00208])", "S23:org.apache.kafka.common.metrics.JmxReporter.unregister@POLYN199782" ]
  }, {
    "_id" : "24",
    "_lesItems" : [ "S24:org.apache.kafka.common.metrics.Metrics.addReporter@POLYN303183 (R16 in line [00576],R312 in line [00576])", "S24:java.util.concurrent.ConcurrentHashMap.add@POLYN1669444" ]
  }, {
    "_id" : "25",
    "_lesItems" : [ "S25:org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN212082", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S25:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN424600 (R21 in line [01103])", "S25:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN424600 (R21 in line [01103])", "S25:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.send@POLYN251320", "S25:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.UnsentRequests.put@POLYN270610 (R9 in line [00646])", "S25:java.util.concurrent.ConcurrentHashMap.add@POLYN1669444" ]
  }, {
    "_id" : "26",
    "_lesItems" : [ "S26:org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN212082", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S26:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN424600 (R21 in line [01103])", "S26:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN424600 (R21 in line [01103])", "S26:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.pollNoWakeup@POLYN257696", "S26:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.poll@POLYN255831", "S26:org.apache.kafka.clients.Metadata.maybeThrowAnyException@POLYN262859 (R3 in line [00428])", "S26:org.apache.kafka.clients.Metadata.clearErrorsAndMaybeThrowException@POLYN263787", "S26:org.apache.kafka.clients.Metadata.clearRecoverableErrors@POLYN265023" ]
  }, {
    "_id" : "27",
    "_lesItems" : [ "S27:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN393638 (R21 in line [00383])", "S27:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN423414", "S27:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN423606 (R21 in line [01078])", "S27:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN418040 (R21 in line [00926])", "S27:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418849 (R21 in line [00947],R57 in line [00947],R58 in line [00947])", "S27:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418849 (R21 in line [00947],R57 in line [00947],R58 in line [00947])", "S27:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.disconnectAsync@POLYN263297", "S27:org.apache.kafka.clients.NetworkClient.wakeup@POLYN347559" ]
  }, {
    "_id" : "28",
    "_lesItems" : [ "S28:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.close@POLYN417158", "S28:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN388634 (R21 in line [00240])", "S28:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN388634 (R21 in line [00240])", "S28:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418495 (R21 in line [00939],R59 in line [00939])" ]
  }, {
    "_id" : "29",
    "_lesItems" : [ "S29:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN231055", "S29:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN231055", "S29:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN391767 (R21 in line [00322],R151 in line [00322])", "S29:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.failureCause@POLYN440096", "S29:java.util.HashMap.get@POLYN618616" ]
  }, {
    "_id" : "30",
    "_lesItems" : [ "S30:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureActiveGroup@POLYN393086", "S30:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN394710", "S30:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN421470 (R21 in line [01017],R159 in line [01017],R160 in line [01017])", "S30:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN420771 (R21 in line [01004],R161 in line [01004],R162 in line [01004])" ]
  }, {
    "_id" : "31",
    "_lesItems" : [ "S31:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418694 (R21 in line [00943],R231 in line [00943])", "S31:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418849 (R21 in line [00947],R57 in line [00947],R58 in line [00947])", "S31:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418849 (R21 in line [00947],R57 in line [00947],R58 in line [00947])", "S31:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.disconnectAsync@POLYN263297", "S31:org.apache.kafka.clients.NetworkClient.wakeup@POLYN347559" ]
  }, {
    "_id" : "32",
    "_lesItems" : [ "S32:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN421768 (R21 in line [01023],R232 in line [01023],R233 in line [01023],R234 in line [01023])", "S32:java.lang.String.format@POLYN907077" ]
  }, {
    "_id" : "33",
    "_lesItems" : [ "S33:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S33:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S33:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S33:org.apache.kafka.streams.KafkaStreams.closeToError@POLYN558956", "S33:org.apache.kafka.streams.KafkaStreams.start@POLYN552047 (R23 in line [01832])", "S33:org.apache.kafka.streams.KafkaStreams.start@POLYN552047 (R23 in line [01832])", "S33:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN259832 (R25 in line [00001],R26 in line [00001])", "S33:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN260127", "S33:org.apache.kafka.common.utils.Utils.delete@POLYN445581" ]
  }, {
    "_id" : "34",
    "_lesItems" : [ "S34:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S34:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S34:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S34:org.apache.kafka.streams.KafkaStreams.closeToError@POLYN558956", "S34:org.apache.kafka.streams.KafkaStreams.start@POLYN552047 (R23 in line [01832])", "S34:org.apache.kafka.streams.KafkaStreams.start@POLYN552047 (R23 in line [01832])", "S34:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN259832 (R25 in line [00001],R26 in line [00001])", "S34:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN260127", "S34:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN260127", "S34:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN256827 (R25 in line [00001],R27 in line [00001])", "S34:java.util.HashMap.remove@POLYN650962" ]
  }, {
    "_id" : "35",
    "_lesItems" : [ "S35:org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN255622 (R25 in line [00001])", "S35:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN250682 (R184 in line [00001])", "S35:org.apache.kafka.streams.processor.internals.StateDirectory.getTaskDirectoryParentName@POLYN252070", "S35:org.apache.kafka.streams.processor.TaskId.topologyName@POLYN167837" ]
  }, {
    "_id" : "36",
    "_lesItems" : [ "S36:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S36:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S36:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S36:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537945 (R30 in line [01039],R31 in line [01051])", "S36:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN547534 (R32 in line [01215])", "S36:java.util.Map.remove@POLYN431080" ]
  }, {
    "_id" : "37",
    "_lesItems" : [ "S37:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S37:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S37:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S37:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537945 (R30 in line [01039],R31 in line [01051])", "S37:org.apache.kafka.streams.KafkaStreams.createAndAddStreamThread@POLYN535148", "S37:org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN339800", "S37:org.apache.kafka.streams.processor.internals.ActiveTaskCreator.ActiveTaskCreator@POLYN187710", "S37:org.apache.kafka.streams.processor.internals.metrics.ThreadMetrics.createTaskSensor@POLYN193351", "S37:org.apache.kafka.streams.processor.internals.metrics.ThreadMetrics.invocationRateAndCountSensor@POLYN201595", "S37:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadLevelSensor@POLYN287736 (R28 in line [00257])", "S37:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN288192" ]
  }, {
    "_id" : "38",
    "_lesItems" : [ "S38:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S38:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S38:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S38:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537945 (R30 in line [01039],R31 in line [01051])", "S38:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537945 (R30 in line [01039],R31 in line [01051])", "S38:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN547534 (R32 in line [01215])", "S38:java.util.Map.remove@POLYN431080" ]
  }, {
    "_id" : "39",
    "_lesItems" : [ "S39:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S39:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S39:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S39:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537945 (R30 in line [01039],R31 in line [01051])", "S39:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537945 (R30 in line [01039],R31 in line [01051])", "S39:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S39:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN334889 (R33 in line [00215])", "S39:org.apache.kafka.common.requests.OffsetFetchResponse.error@POLYN208198" ]
  }, {
    "_id" : "40",
    "_lesItems" : [ "S40:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S40:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S40:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S40:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537945 (R30 in line [01039],R31 in line [01051])", "S40:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537945 (R30 in line [01039],R31 in line [01051])", "S40:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S40:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S40:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S40:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN424600 (R21 in line [01103])", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN424600 (R21 in line [01103])", "S40:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.send@POLYN251320", "S40:org.apache.kafka.common.utils.Time.milliseconds@POLYN154337" ]
  }, {
    "_id" : "41",
    "_lesItems" : [ "S41:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S41:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S41:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S41:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537945 (R30 in line [01039],R31 in line [01051])", "S41:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537945 (R30 in line [01039],R31 in line [01051])", "S41:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S41:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S41:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S41:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S41:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN410562", "S41:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN410562", "S41:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN389985", "S41:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN322052 (R2 in line [00334])", "S41:org.apache.kafka.clients.consumer.internals.SubscriptionState.collectPartitions@POLYN338487", "S41:java.util.concurrent.ConcurrentHashMap.add@POLYN1669444" ]
  }, {
    "_id" : "42",
    "_lesItems" : [ "S42:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S42:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S42:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S42:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537945 (R30 in line [01039],R31 in line [01051])", "S42:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537945 (R30 in line [01039],R31 in line [01051])", "S42:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S42:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S42:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelMetrics@POLYN290257 (R29 in line [00310])", "S42:java.util.Hashtable.remove@POLYN477056" ]
  }, {
    "_id" : "43",
    "_lesItems" : [ "S43:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S43:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S43:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S43:org.apache.kafka.streams.KafkaStreams.closeToError@POLYN558956", "S43:org.apache.kafka.streams.KafkaStreams.start@POLYN552047 (R23 in line [01832])", "S43:org.apache.kafka.streams.KafkaStreams.start@POLYN552047 (R23 in line [01832])", "S43:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN259832 (R25 in line [00001],R26 in line [00001])", "S43:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN260127", "S43:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN260127", "S43:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN256827 (R25 in line [00001],R27 in line [00001])", "S43:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN256827 (R25 in line [00001],R27 in line [00001])", "S43:java.util.HashMap.remove@POLYN650962" ]
  }, {
    "_id" : "44",
    "_lesItems" : [ "S44:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN540153", "S44:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN541229 (R30 in line [01113])", "S44:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S44:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN334889 (R33 in line [00215])", "S44:org.apache.kafka.common.requests.OffsetFetchResponse.error@POLYN208198" ]
  }, {
    "_id" : "45",
    "_lesItems" : [ "S45:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN540153", "S45:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN541229 (R30 in line [01113])", "S45:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S45:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S45:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S45:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN424600 (R21 in line [01103])", "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN424600 (R21 in line [01103])", "S45:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.send@POLYN251320", "S45:org.apache.kafka.common.utils.Time.milliseconds@POLYN154337" ]
  }, {
    "_id" : "46",
    "_lesItems" : [ "S46:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN540153", "S46:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN541229 (R30 in line [01113])", "S46:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S46:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S46:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S46:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S46:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN410562", "S46:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN410562", "S46:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN389985", "S46:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN322052 (R2 in line [00334])", "S46:org.apache.kafka.clients.consumer.internals.SubscriptionState.collectPartitions@POLYN338487", "S46:java.util.concurrent.ConcurrentHashMap.add@POLYN1669444" ]
  }, {
    "_id" : "47",
    "_lesItems" : [ "S47:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN540153", "S47:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN541229 (R30 in line [01113])", "S47:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S47:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S47:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelSensors@POLYN289709 (R28 in line [00301])", "S47:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN288192" ]
  }, {
    "_id" : "48",
    "_lesItems" : [ "S48:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN540153", "S48:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN541229 (R30 in line [01113])", "S48:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S48:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S48:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelMetrics@POLYN290257 (R29 in line [00310])", "S48:java.util.Hashtable.remove@POLYN477056" ]
  }, {
    "_id" : "49",
    "_lesItems" : [ "S49:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN370184", "S49:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN384571", "S49:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN547133", "S49:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN548165", "S49:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN548165", "S49:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373330 (R34 in line [00327],R54 in line [00327])", "S49:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN401350" ]
  }, {
    "_id" : "50",
    "_lesItems" : [ "S50:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN370184", "S50:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN384571", "S50:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN547133", "S50:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN548165", "S50:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN548165", "S50:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN385653 (R34 in line [00610],R55 in line [00610])", "S50:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN376139 (R34 in line [00397],R56 in line [00397])", "S50:org.apache.kafka.clients.producer.internals.TransactionalRequestResult.fail@POLYN149755" ]
  }, {
    "_id" : "51",
    "_lesItems" : [ "S51:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466949", "S51:org.apache.kafka.clients.producer.internals.Sender.run@POLYN306378", "S51:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S51:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN390617 (R34 in line [00718])", "S51:org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN378886 (R34 in line [00468],R60 in line [00468])", "S51:java.util.concurrent.ConcurrentHashMap.add@POLYN1669444" ]
  }, {
    "_id" : "52",
    "_lesItems" : [ "S52:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466949", "S52:org.apache.kafka.clients.producer.internals.Sender.run@POLYN306378", "S52:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S52:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S52:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN394635 (R34 in line [00810],R62 in line [00810])", "S52:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.fatalError@POLYN407890", "S52:org.apache.kafka.clients.producer.internals.TransactionalRequestResult.fail@POLYN149755" ]
  }, {
    "_id" : "53",
    "_lesItems" : [ "S53:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466949", "S53:org.apache.kafka.clients.producer.internals.Sender.run@POLYN306378", "S53:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S53:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S53:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN309775", "S53:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN354512", "S53:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN350009 (R65 in line [00799])", "S53:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN377149 (R34 in line [00426],R66 in line [00426])", "S53:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN152925", "S53:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN143180" ]
  }, {
    "_id" : "54",
    "_lesItems" : [ "S54:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466949", "S54:org.apache.kafka.clients.producer.internals.Sender.run@POLYN306378", "S54:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S54:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S54:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN309775", "S54:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN354512", "S54:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN350009 (R65 in line [00799])", "S54:org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN381257 (R34 in line [00521],R67 in line [00521],R68 in line [00521])", "S54:org.apache.kafka.clients.producer.internals.TransactionManager.sequenceNumber@POLYN380891 (R34 in line [00510])", "S54:org.apache.kafka.clients.producer.internals.TxnPartitionMap.getOrCreate@POLYN151590" ]
  }, {
    "_id" : "55",
    "_lesItems" : [ "S55:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466949", "S55:org.apache.kafka.clients.producer.internals.Sender.run@POLYN306378", "S55:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S55:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S55:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN309775", "S55:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN330457", "S55:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386248 (R34 in line [00624],R70 in line [00624],R71 in line [00624],R72 in line [00624])", "S55:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN385653 (R34 in line [00610],R55 in line [00610])", "S55:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN376139 (R34 in line [00397],R56 in line [00397])", "S55:org.apache.kafka.clients.producer.internals.TransactionalRequestResult.fail@POLYN149755" ]
  }, {
    "_id" : "56",
    "_lesItems" : [ "S56:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN314235", "S56:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN314235", "S56:org.apache.kafka.clients.producer.internals.Sender.maybeFindCoordinatorAndRetry@POLYN317922", "S56:org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN394457 (R34 in line [00805],R124 in line [00805])", "S56:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.setRetry@POLYN410749" ]
  }, {
    "_id" : "57",
    "_lesItems" : [ "S57:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN319745", "S57:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN319745", "S57:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN327161", "S57:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN385101 (R34 in line [00599],R172 in line [00599],R173 in line [00599])", "S57:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateLastAckedSequence@POLYN383366" ]
  }, {
    "_id" : "58",
    "_lesItems" : [ "S58:org.apache.kafka.clients.producer.internals.TransactionManager.isPartitionAdded@POLYN376573 (R34 in line [00407])", "S58:java.util.Hashtable.contains@POLYN418834 (R133 in line [00307])" ]
  }, {
    "_id" : "59",
    "_lesItems" : [ "S59:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN403922", "S59:java.util.Hashtable.putAll@POLYN430200 (R133 in line [00536],R134 in line [00536])", "S59:java.util.Hashtable.put@POLYN426726 (R133 in line [00471])", "S59:java.util.Hashtable.addEntry@POLYN425141", "S59:java.util.Hashtable.rehash@POLYN423256" ]
  }, {
    "_id" : "60",
    "_lesItems" : [ "S60:org.apache.kafka.connect.runtime.distributed.DistributedHerder.writeToConfigTopicAsLeader@POLYN580288", "S60:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN526240", "S60:org.apache.kafka.connect.runtime.distributed.DistributedHerder.tick@POLYN527200", "S60:org.apache.kafka.connect.runtime.distributed.DistributedHerder.tick@POLYN527200", "S60:org.apache.kafka.connect.runtime.distributed.DistributedHerder.processRestartRequests@POLYN574948 (R35 in line [01364])", "S60:org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN575916 (R35 in line [01387],R36 in line [01387])", "S60:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN464172", "S60:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN461959", "S60:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN460833", "S60:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN460833", "S60:org.apache.kafka.connect.runtime.Worker.stop@POLYN421463", "S60:org.apache.kafka.connect.runtime.Worker.stop@POLYN421463", "S60:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN495368 (R38 in line [01751])", "S60:org.apache.kafka.connect.runtime.ConnectMetrics.MetricGroup.close@POLYN232474 (R39 in line [00406])", "S60:org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN297264 (R40 in line [00449],R16 in line [00450])", "S60:java.util.HashMap.get@POLYN618616" ]
  }, {
    "_id" : "61",
    "_lesItems" : [ "S61:org.apache.kafka.connect.runtime.distributed.DistributedHerder.writeToConfigTopicAsLeader@POLYN580288", "S61:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN526240", "S61:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN542486 (R35 in line [00744])", "S61:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN188008", "S61:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN189939", "S61:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN189939", "S61:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN163089 (R41 in line [00072],R42 in line [00072],R43 in line [00072],R44 in line [00072])", "S61:org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN165024", "S61:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN302401 (R16 in line [00558])", "S61:java.util.HashMap.remove@POLYN650962" ]
  }, {
    "_id" : "62",
    "_lesItems" : [ "S62:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN514769", "S62:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN514769", "S62:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN162309 (R41 in line [00060],R85 in line [00060],R86 in line [00060],R87 in line [00060],R88 in line [00060])", "S62:org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN164207" ]
  }, {
    "_id" : "63",
    "_lesItems" : [ "S63:org.apache.kafka.connect.runtime.distributed.DistributedHerder.writeToConfigTopicAsLeader@POLYN580288", "S63:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN526240", "S63:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN542486 (R35 in line [00744])", "S63:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN188008", "S63:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN189939", "S63:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN189939", "S63:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN163089 (R41 in line [00072],R42 in line [00072],R43 in line [00072],R44 in line [00072])", "S63:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN163089 (R41 in line [00072],R42 in line [00072],R43 in line [00072],R44 in line [00072])", "S63:org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN165024", "S63:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN302401 (R16 in line [00558])", "S63:java.util.HashMap.remove@POLYN650962" ]
  }, {
    "_id" : "64",
    "_lesItems" : [ "S64:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN370184", "S64:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN384571", "S64:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN547133", "S64:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN548165", "S64:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN555906", "S64:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN555906", "S64:org.apache.kafka.clients.producer.internals.ProducerMetadata.requestUpdateForTopic@POLYN162965 (R47 in line [00075])", "S64:org.apache.kafka.clients.Metadata.requestUpdateForNewTopics@POLYN248334 (R3 in line [00150])" ]
  }, {
    "_id" : "65",
    "_lesItems" : [ "S65:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN370184", "S65:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN384571", "S65:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN547133", "S65:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN548165", "S65:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN555906", "S65:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN555906", "S65:org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN164536 (R47 in line [00116],R48 in line [00116],R49 in line [00116])", "S65:org.apache.kafka.common.utils.Time.milliseconds@POLYN154337" ]
  }, {
    "_id" : "66",
    "_lesItems" : [ "S66:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466949", "S66:org.apache.kafka.clients.producer.internals.Sender.run@POLYN306378", "S66:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S66:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S66:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN309775", "S66:org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN162495 (R47 in line [00067],R63 in line [00067],R64 in line [00067])", "S66:org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN162495 (R47 in line [00067],R63 in line [00067],R64 in line [00067])", "S66:org.apache.kafka.clients.Metadata.requestUpdateForNewTopics@POLYN248334 (R3 in line [00150])" ]
  }, {
    "_id" : "67",
    "_lesItems" : [ "S67:org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN165308 (R47 in line [00130],R304 in line [00130],R305 in line [00130],R306 in line [00130],R307 in line [00130])", "S67:org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN165308 (R47 in line [00130],R304 in line [00130],R305 in line [00130],R306 in line [00130],R307 in line [00130])", "S67:java.util.HashMap.remove@POLYN650962" ]
  }, {
    "_id" : "68",
    "_lesItems" : [ "S68:org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN165921 (R47 in line [00145],R308 in line [00145])", "S68:org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN165921 (R47 in line [00145],R308 in line [00145])", "S68:java.lang.Object.notifyAll@POLYN295582" ]
  }, {
    "_id" : "69",
    "_lesItems" : [ "S69:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN370184", "S69:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN384571", "S69:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN547133", "S69:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN548165", "S69:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN548165", "S69:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373330 (R34 in line [00327],R54 in line [00327])", "S69:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373330 (R34 in line [00327],R54 in line [00327])", "S69:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN401350" ]
  }, {
    "_id" : "70",
    "_lesItems" : [ "S70:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466949", "S70:org.apache.kafka.clients.producer.internals.Sender.run@POLYN306378", "S70:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S70:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S70:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN394635 (R34 in line [00810],R62 in line [00810])", "S70:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.fatalError@POLYN407890", "S70:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN376139 (R34 in line [00397],R56 in line [00397])", "S70:org.apache.kafka.clients.producer.internals.TransactionalRequestResult.fail@POLYN149755" ]
  }, {
    "_id" : "71",
    "_lesItems" : [ "S71:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466949", "S71:org.apache.kafka.clients.producer.internals.Sender.run@POLYN306378", "S71:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S71:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S71:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN309775", "S71:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN354512", "S71:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN350009 (R65 in line [00799])", "S71:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN377149 (R34 in line [00426],R66 in line [00426])", "S71:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN377149 (R34 in line [00426],R66 in line [00426])", "S71:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN152925", "S71:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN143180" ]
  }, {
    "_id" : "72",
    "_lesItems" : [ "S72:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN514769", "S72:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN514769", "S72:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN162309 (R41 in line [00060],R85 in line [00060],R86 in line [00060],R87 in line [00060],R88 in line [00060])", "S72:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN162309 (R41 in line [00060],R85 in line [00060],R86 in line [00060],R87 in line [00060],R88 in line [00060])", "S72:org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN164207" ]
  }, {
    "_id" : "73",
    "_lesItems" : [ "S73:org.apache.kafka.streams.state.internals.ThreadCache.putIfAbsent@POLYN195515", "S73:org.apache.kafka.streams.state.internals.ThreadCache.getOrCreateCache@POLYN201682 (R95 in line [00285])", "S73:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN195101", "S73:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN194835 (R96 in line [00157],R97 in line [00157],R98 in line [00157])", "S73:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN144502" ]
  }, {
    "_id" : "74",
    "_lesItems" : [ "S74:org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN199093 (R96 in line [00256],R209 in line [00256])", "S74:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN194835 (R96 in line [00157],R97 in line [00157],R98 in line [00157])", "S74:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN144502" ]
  }, {
    "_id" : "75",
    "_lesItems" : [ "S75:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN200520 (R95 in line [00254],R266 in line [00254])", "S75:org.apache.kafka.streams.state.internals.NamedCache.close@POLYN203436 (R96 in line [00345])", "S75:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllCacheLevelSensors@POLYN298349 (R267 in line [00462])", "S75:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheSensorPrefix@POLYN299000" ]
  }, {
    "_id" : "76",
    "_lesItems" : [ "S76:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN191589 (R95 in line [00075],R177 in line [00075])", "S76:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN191589 (R95 in line [00075],R177 in line [00075])", "S76:org.apache.kafka.common.utils.CircularIterator.next@POLYN156720", "S76:org.apache.kafka.common.utils.CircularIterator.advance@POLYN157060" ]
  }, {
    "_id" : "77",
    "_lesItems" : [ "S77:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN200520 (R95 in line [00254],R266 in line [00254])", "S77:java.util.Hashtable.remove@POLYN477056" ]
  }, {
    "_id" : "78",
    "_lesItems" : [ "S78:org.apache.kafka.streams.state.internals.ThreadCache.putIfAbsent@POLYN195515", "S78:org.apache.kafka.streams.state.internals.ThreadCache.getOrCreateCache@POLYN201682 (R95 in line [00285])", "S78:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN195101", "S78:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN194835 (R96 in line [00157],R97 in line [00157],R98 in line [00157])", "S78:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN194835 (R96 in line [00157],R97 in line [00157],R98 in line [00157])", "S78:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN144502" ]
  }, {
    "_id" : "79",
    "_lesItems" : [ "S79:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN253073 (R3 in line [00249],R103 in line [00249],R104 in line [00249],R105 in line [00249])", "S79:org.apache.kafka.clients.Metadata.update@POLYN253647 (R3 in line [00263],R106 in line [00263],R107 in line [00263],R108 in line [00263],R109 in line [00263])", "S79:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN256651", "S79:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN256651", "S79:org.apache.kafka.clients.Metadata.requestUpdate@POLYN248167 (R3 in line [00145])" ]
  }, {
    "_id" : "80",
    "_lesItems" : [ "S80:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN253073 (R3 in line [00249],R103 in line [00249],R104 in line [00249],R105 in line [00249])", "S80:org.apache.kafka.clients.Metadata.update@POLYN253647 (R3 in line [00263],R106 in line [00263],R107 in line [00263],R108 in line [00263],R109 in line [00263])", "S80:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN256651", "S80:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN256651", "S80:org.apache.kafka.common.requests.MetadataResponse.brokersById@POLYN222353", "S80:org.apache.kafka.common.requests.MetadataResponse.holder@POLYN221746 (R110 in line [00001])", "S80:org.apache.kafka.common.requests.MetadataResponse.Holder.Holder@POLYN229895", "S80:java.util.Map.get@POLYN428707" ]
  }, {
    "_id" : "81",
    "_lesItems" : [ "S81:org.apache.kafka.streams.state.internals.CachingWindowStore.init@POLYN232532", "S81:org.apache.kafka.streams.state.internals.CachingWindowStore.initInternal@POLYN233474", "S81:org.apache.kafka.streams.state.internals.CachingWindowStore.putAndMaybeForward@POLYN234258", "S81:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN237048 (R114 in line [00156],R115 in line [00156],R116 in line [00156],R117 in line [00156])", "S81:org.apache.kafka.streams.state.internals.WrappedStateStore.validateStoreOpen@POLYN159715" ]
  }, {
    "_id" : "82",
    "_lesItems" : [ "S82:org.apache.kafka.streams.state.internals.CachingWindowStore.init@POLYN232532", "S82:org.apache.kafka.streams.state.internals.CachingWindowStore.initInternal@POLYN233474", "S82:org.apache.kafka.streams.state.internals.CachingWindowStore.putAndMaybeForward@POLYN234258", "S82:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN237048 (R114 in line [00156],R115 in line [00156],R116 in line [00156],R117 in line [00156])", "S82:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN237048 (R114 in line [00156],R115 in line [00156],R116 in line [00156],R117 in line [00156])", "S82:org.apache.kafka.streams.state.internals.WrappedStateStore.validateStoreOpen@POLYN159715" ]
  }, {
    "_id" : "83",
    "_lesItems" : [ "S83:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN254555", "S83:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN257244", "S83:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN260277 (R125 in line [00260],R126 in line [00260],R127 in line [00260],R128 in line [00260])", "S83:org.apache.kafka.streams.state.internals.WrappedStateStore.validateStoreOpen@POLYN159715" ]
  }, {
    "_id" : "84",
    "_lesItems" : [ "S84:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN254555", "S84:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN257244", "S84:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN260277 (R125 in line [00260],R126 in line [00260],R127 in line [00260],R128 in line [00260])", "S84:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN260277 (R125 in line [00260],R126 in line [00260],R127 in line [00260],R128 in line [00260])", "S84:org.apache.kafka.streams.state.internals.WrappedStateStore.validateStoreOpen@POLYN159715" ]
  }, {
    "_id" : "85",
    "_lesItems" : [ "S85:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN229453 (R129 in line [00242],R130 in line [00242])", "S85:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN229453 (R129 in line [00242],R130 in line [00242])", "S85:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN240183", "S85:org.apache.kafka.connect.storage.ClusterConfigState.allTaskConfigs@POLYN201988", "S85:java.util.HashMap.getValue@POLYN607725" ]
  }, {
    "_id" : "86",
    "_lesItems" : [ "S86:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN227575 (R129 in line [00201],R140 in line [00201],R141 in line [00201],R142 in line [00201],R143 in line [00201],R144 in line [00201])", "S86:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN434698", "S86:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN431430", "S86:java.util.HashMap.get@POLYN618616" ]
  }, {
    "_id" : "87",
    "_lesItems" : [ "S87:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN223081 (R129 in line [00105])", "S87:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN239703", "S87:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN464172", "S87:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN461959", "S87:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN460833", "S87:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN460833", "S87:org.apache.kafka.connect.runtime.Worker.stop@POLYN421463", "S87:org.apache.kafka.connect.runtime.Worker.stop@POLYN421463", "S87:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN495368 (R38 in line [01751])", "S87:org.apache.kafka.connect.runtime.ConnectMetrics.MetricGroup.close@POLYN232474 (R39 in line [00406])", "S87:org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN297264 (R40 in line [00449],R16 in line [00450])", "S87:java.util.HashMap.get@POLYN618616" ]
  }, {
    "_id" : "88",
    "_lesItems" : [ "S88:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN223081 (R129 in line [00105])", "S88:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN434698", "S88:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN431430", "S88:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN431430", "S88:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN219480 (R37 in line [00256])", "S88:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN219480 (R37 in line [00256])", "S88:java.lang.Object.notify@POLYN294845" ]
  }, {
    "_id" : "89",
    "_lesItems" : [ "S89:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN225594 (R129 in line [00161],R146 in line [00161],R147 in line [00161])", "S89:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN239703", "S89:org.apache.kafka.connect.storage.ClusterConfigState.tasks@POLYN203935", "S89:java.util.HashMap.get@POLYN618616" ]
  }, {
    "_id" : "90",
    "_lesItems" : [ "S90:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN233904 (R129 in line [00309],R149 in line [00309],R150 in line [00309])", "S90:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN162722" ]
  }, {
    "_id" : "91",
    "_lesItems" : [ "S91:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN231288 (R129 in line [00274],R152 in line [00274],R153 in line [00274])", "S91:org.apache.kafka.connect.storage.ClusterConfigState.taskConfig@POLYN201039", "S91:java.util.HashMap.get@POLYN618616" ]
  }, {
    "_id" : "92",
    "_lesItems" : [ "S92:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN232701 (R129 in line [00291],R190 in line [00291],R191 in line [00291])", "S92:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN434698", "S92:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN431430", "S92:java.util.HashMap.get@POLYN618616" ]
  }, {
    "_id" : "93",
    "_lesItems" : [ "S93:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN223998 (R129 in line [00133],R318 in line [00133])", "S93:org.apache.kafka.connect.util.Callback.onCompletion" ]
  }, {
    "_id" : "94",
    "_lesItems" : [ "S94:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN224229 (R129 in line [00138],R319 in line [00138],R320 in line [00138])", "S94:org.apache.kafka.connect.util.Callback.onCompletion" ]
  }, {
    "_id" : "95",
    "_lesItems" : [ "S95:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226662 (R129 in line [00181],R321 in line [00181],R322 in line [00181],R323 in line [00181],R324 in line [00181])", "S95:org.apache.kafka.connect.util.Callback.onCompletion" ]
  }, {
    "_id" : "96",
    "_lesItems" : [ "S96:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN229827 (R129 in line [00251],R325 in line [00251],R326 in line [00251])", "S96:java.util.concurrent.ConcurrentHashMap.add@POLYN1669444" ]
  }, {
    "_id" : "97",
    "_lesItems" : [ "S97:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN229453 (R129 in line [00242],R130 in line [00242])", "S97:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN229453 (R129 in line [00242],R130 in line [00242])", "S97:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN240183", "S97:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN239703", "S97:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN464172", "S97:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN461959", "S97:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN460833", "S97:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN460833", "S97:org.apache.kafka.connect.runtime.Worker.stop@POLYN421463", "S97:org.apache.kafka.connect.runtime.Worker.stop@POLYN421463", "S97:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN495368 (R38 in line [01751])", "S97:org.apache.kafka.connect.runtime.ConnectMetrics.MetricGroup.close@POLYN232474 (R39 in line [00406])", "S97:org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN297264 (R40 in line [00449],R16 in line [00450])", "S97:java.util.HashMap.get@POLYN618616" ]
  }, {
    "_id" : "98",
    "_lesItems" : [ "S98:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN403922", "S98:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN410012", "S98:org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN243829 (R135 in line [00389],R136 in line [00389],R137 in line [00389])", "S98:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "99",
    "_lesItems" : [ "S99:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN403922", "S99:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN410012", "S99:org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN242524 (R135 in line [00357],R138 in line [00357])", "S99:java.util.Map.putAll" ]
  }, {
    "_id" : "100",
    "_lesItems" : [ "S100:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN403922", "S100:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN410012", "S100:org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN242948 (R135 in line [00367],R139 in line [00367])", "S100:java.util.Map.putAll" ]
  }, {
    "_id" : "101",
    "_lesItems" : [ "S101:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN232612 (R135 in line [00163])", "S101:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN232846 (R135 in line [00168],R156 in line [00175])", "S101:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "102",
    "_lesItems" : [ "S102:org.apache.kafka.clients.consumer.MockConsumer.position@POLYN241414 (R135 in line [00334])", "S102:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN331759 (R2 in line [00537])", "S102:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S102:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131" ]
  }, {
    "_id" : "103",
    "_lesItems" : [ "S103:org.apache.kafka.clients.consumer.MockConsumer.rebalance@POLYN229413 (R135 in line [00096],R196 in line [00096])", "S103:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN319395 (R2 in line [00273],R22 in line [00273])", "S103:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131" ]
  }, {
    "_id" : "104",
    "_lesItems" : [ "S104:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230022 (R135 in line [00113],R197 in line [00113],R198 in line [00113])", "S104:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "105",
    "_lesItems" : [ "S105:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN239063 (R135 in line [00280])", "S105:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN239386", "S105:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN238491 (R135 in line [00264],R199 in line [00264])", "S105:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237875 (R135 in line [00254],R200 in line [00254],R201 in line [00254])", "S105:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "106",
    "_lesItems" : [ "S106:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN239216 (R135 in line [00285],R202 in line [00285])", "S106:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN239386", "S106:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN238491 (R135 in line [00264],R199 in line [00264])", "S106:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237875 (R135 in line [00254],R200 in line [00254],R201 in line [00254])", "S106:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "107",
    "_lesItems" : [ "S107:org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN239596 (R135 in line [00295],R219 in line [00295],R220 in line [00295])", "S107:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "108",
    "_lesItems" : [ "S108:org.apache.kafka.clients.consumer.MockConsumer.seekToBeginning@POLYN242290 (R135 in line [00352],R229 in line [00352])", "S108:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "109",
    "_lesItems" : [ "S109:org.apache.kafka.clients.consumer.MockConsumer.seekToEnd@POLYN242714 (R135 in line [00362],R230 in line [00362])", "S109:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "110",
    "_lesItems" : [ "S110:org.apache.kafka.clients.consumer.MockConsumer.pause@POLYN244104 (R135 in line [00395],R249 in line [00395])", "S110:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN341188 (R2 in line [00737],R168 in line [00737])", "S110:org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.pause@POLYN350524" ]
  }, {
    "_id" : "111",
    "_lesItems" : [ "S111:org.apache.kafka.clients.consumer.MockConsumer.resume@POLYN244426 (R135 in line [00403],R250 in line [00403])", "S111:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN341339 (R2 in line [00741],R169 in line [00741])", "S111:org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.resume@POLYN350631" ]
  }, {
    "_id" : "112",
    "_lesItems" : [ "S112:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN229815 (R135 in line [00108],R271 in line [00108])", "S112:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN231639 (R135 in line [00141],R272 in line [00141],R273 in line [00141])", "S112:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "113",
    "_lesItems" : [ "S113:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN231453 (R135 in line [00136],R274 in line [00136])", "S113:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN231639 (R135 in line [00141],R272 in line [00141],R273 in line [00141])", "S113:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "114",
    "_lesItems" : [ "S114:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN238697 (R135 in line [00269])", "S114:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN238822 (R135 in line [00274],R275 in line [00274])", "S114:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "115",
    "_lesItems" : [ "S115:org.apache.kafka.clients.consumer.MockConsumer.assign@POLYN232017 (R135 in line [00148],R297 in line [00148])", "S115:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "116",
    "_lesItems" : [ "S116:org.apache.kafka.clients.consumer.MockConsumer.addRecord@POLYN236521 (R135 in line [00227],R298 in line [00227])", "S116:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "117",
    "_lesItems" : [ "S117:org.apache.kafka.clients.consumer.MockConsumer.setException@POLYN237466 (R135 in line [00241],R299 in line [00241])", "S117:org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN237597 (R135 in line [00245],R300 in line [00245])" ]
  }, {
    "_id" : "118",
    "_lesItems" : [ "S118:org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN247673 (R135 in line [00473],R301 in line [00473],R156 in line [00474])", "S118:java.util.concurrent.ConcurrentHashMap.add@POLYN1669444" ]
  }, {
    "_id" : "119",
    "_lesItems" : [ "S119:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN246958", "S119:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN247120 (R135 in line [00455],R350 in line [00455])" ]
  }, {
    "_id" : "120",
    "_lesItems" : [ "S120:org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN184248 (R148 in line [00166])", "S120:org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN184248 (R148 in line [00166])", "S120:org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN186654", "S120:org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN186654", "S120:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN302401 (R16 in line [00558])", "S120:java.util.HashMap.remove@POLYN650962" ]
  }, {
    "_id" : "121",
    "_lesItems" : [ "S121:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN187936 (R148 in line [00235],R313 in line [00235])", "S121:java.util.HashMap.get@POLYN618616" ]
  }, {
    "_id" : "122",
    "_lesItems" : [ "S122:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN232612 (R135 in line [00163])", "S122:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN232846 (R135 in line [00168],R156 in line [00175])", "S122:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN232846 (R135 in line [00168],R156 in line [00175])", "S122:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "123",
    "_lesItems" : [ "S123:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN166516 (R175 in line [00139],R176 in line [00139])", "S123:org.apache.kafka.snapshot.RecordsSnapshotReader.next@POLYN156231", "S123:java.util.HashMap.get@POLYN618616" ]
  }, {
    "_id" : "124",
    "_lesItems" : [ "S124:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN164050 (R175 in line [00076],R223 in line [00076])", "S124:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN164050 (R175 in line [00076],R223 in line [00076])", "S124:org.apache.kafka.raft.Batch.lastOffset@POLYN163100" ]
  }, {
    "_id" : "125",
    "_lesItems" : [ "S125:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN166516 (R175 in line [00139],R176 in line [00139])", "S125:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN166516 (R175 in line [00139],R176 in line [00139])", "S125:org.apache.kafka.snapshot.RecordsSnapshotReader.next@POLYN156231", "S125:java.util.HashMap.get@POLYN618616" ]
  }, {
    "_id" : "126",
    "_lesItems" : [ "S126:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN191589 (R95 in line [00075],R177 in line [00075])", "S126:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN191589 (R95 in line [00075],R177 in line [00075])", "S126:org.apache.kafka.streams.state.internals.NamedCache.evict@POLYN198152 (R96 in line [00235])", "S126:org.apache.kafka.streams.state.internals.NamedCache.remove@POLYN197086" ]
  }, {
    "_id" : "127",
    "_lesItems" : [ "S127:org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetIfNeeded@POLYN503623", "S127:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN324450 (R2 in line [00390],R210 in line [00390],R211 in line [00390],R212 in line [00390])", "S127:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN324450 (R2 in line [00390],R210 in line [00390],R211 in line [00390],R212 in line [00390])", "S127:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN323705", "S127:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131" ]
  }, {
    "_id" : "128",
    "_lesItems" : [ "S128:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN164642 (R225 in line [00093],R226 in line [00093])", "S128:org.apache.kafka.common.utils.Time.milliseconds@POLYN154337" ]
  }, {
    "_id" : "129",
    "_lesItems" : [ "S129:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN164642 (R225 in line [00093],R226 in line [00093])", "S129:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN164642 (R225 in line [00093],R226 in line [00093])", "S129:org.apache.kafka.common.utils.Time.milliseconds@POLYN154337" ]
  }, {
    "_id" : "130",
    "_lesItems" : [ "S130:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN421768 (R21 in line [01023],R232 in line [01023],R233 in line [01023],R234 in line [01023])", "S130:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN421470 (R21 in line [01017],R159 in line [01017],R160 in line [01017])", "S130:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN420771 (R21 in line [01004],R161 in line [01004],R162 in line [01004])" ]
  }, {
    "_id" : "131",
    "_lesItems" : [ "S131:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN162070 (R256 in line [00084],R257 in line [00084])", "S131:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN161527 (R256 in line [00076],R258 in line [00076])", "S131:org.apache.kafka.connect.util.Table.remove@POLYN149783", "S131:java.util.Hashtable.remove@POLYN477056" ]
  }, {
    "_id" : "132",
    "_lesItems" : [ "S132:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN161382 (R256 in line [00071],R281 in line [00071])", "S132:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN161003 (R256 in line [00063],R282 in line [00063])", "S132:java.util.HashMap.remove@POLYN650962" ]
  }, {
    "_id" : "133",
    "_lesItems" : [ "S133:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN238697 (R135 in line [00269])", "S133:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN238822 (R135 in line [00274],R275 in line [00274])", "S133:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN238822 (R135 in line [00274],R275 in line [00274])", "S133:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "134",
    "_lesItems" : [ "S134:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN187936 (R148 in line [00235],R313 in line [00235])", "S134:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN187936 (R148 in line [00235],R313 in line [00235])", "S134:java.util.HashMap.get@POLYN618616" ]
  } ],
  "_lesDeadlocksTypos" : [ ]
}