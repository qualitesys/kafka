{
  "_lesSequences" : [ {
    "_id" : "1",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "10",
      "_source" : "org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToThreads@POLYN408004.assignment",
      "_method" : "---dummymethode in line [01178]",
      "_target" : "java.util.Map.values@POLYN431078.return",
      "_risk" : "//QC-JAVCWE099[01178] In org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToThreads@POLYN408004[01178] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "9",
      "_source" : "java.util.Map.values@POLYN431078.return",
      "_method" : "---java.util.Map.values@POLYN431078 in line [00001]",
      "_target" : "org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN435764.channel",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN435764[00001] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "8",
      "_source" : "org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN435764.channel",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "java.util.Map.values@POLYN431078.return",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN435764[00001] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "7",
      "_source" : "java.util.Map.values@POLYN431078.return",
      "_method" : "---java.util.Map.values@POLYN431078 in line [03486]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[03486] In org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1138391[03486] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "partition",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033.tp",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN532773 in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN532773.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN532773.topicPartition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335748 in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335748.partition",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335748.partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335137 in line [00650]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335137.partition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335137.partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126 in line [00639]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126.tp",
      "_risk" : ""
    } ]
  }, {
    "_id" : "2",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "10",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer.getSamePartitions@POLYN169383.partitions",
      "_method" : "---dummymethode in line [00166]",
      "_target" : "java.util.Map.values@POLYN431078.return",
      "_risk" : "//QC-JAVCWE099[00166] In org.apache.kafka.streams.processor.internals.assignment.CopartitionedTopicsEnforcer.getSamePartitions@POLYN169383[00166] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "9",
      "_source" : "java.util.Map.values@POLYN431078.return",
      "_method" : "---java.util.Map.values@POLYN431078 in line [00001]",
      "_target" : "org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN435764.channel",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN435764[00001] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "8",
      "_source" : "org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN435764.channel",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "java.util.Map.values@POLYN431078.return",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN435764[00001] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "7",
      "_source" : "java.util.Map.values@POLYN431078.return",
      "_method" : "---java.util.Map.values@POLYN431078 in line [03486]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[03486] In org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1138391[03486] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "partition",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033.tp",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN532773 in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN532773.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN532773.topicPartition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335748 in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335748.partition",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335748.partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335137 in line [00650]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335137.partition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335137.partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126 in line [00639]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126.tp",
      "_risk" : ""
    } ]
  }, {
    "_id" : "3",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "10",
      "_source" : "org.apache.kafka.trogdor.workload.ConsumeBenchWorker.Prepare.consumeTasks@POLYN228159.tasks",
      "_method" : "---dummymethode in line [00142]",
      "_target" : "java.util.Map.values@POLYN431078.return",
      "_risk" : "//QC-JAVCWE099[00142] In org.apache.kafka.trogdor.workload.ConsumeBenchWorker.Prepare.consumeTasks@POLYN228159[00142] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "9",
      "_source" : "java.util.Map.values@POLYN431078.return",
      "_method" : "---java.util.Map.values@POLYN431078 in line [00001]",
      "_target" : "org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN435764.channel",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN435764[00001] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "8",
      "_source" : "org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN435764.channel",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "java.util.Map.values@POLYN431078.return",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN435764[00001] source or target data PATHtainted (java.util.Map)"
    }, {
      "_id" : "7",
      "_source" : "java.util.Map.values@POLYN431078.return",
      "_method" : "---java.util.Map.values@POLYN431078 in line [03486]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[03486] In org.apache.kafka.clients.admin.KafkaAdminClient.alterPartitionReassignments@POLYN1138391[03486] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "partition",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---dummymethode in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033.tp",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN532773 in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN532773.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN532773.topicPartition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335748 in line [00001]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335748.partition",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335748.partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335137 in line [00650]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335137.partition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335137.partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126 in line [00639]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126.tp",
      "_risk" : ""
    } ]
  }, {
    "_id" : "4",
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
      "_method" : "---java.util.HashMap.put@POLYN610661 in line [00062]",
      "_target" : "java.util.HashMap.put@POLYN610661.key",
      "_risk" : "//QC-JAVCWE099[00062] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783[00062] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "5",
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
      "_method" : "---java.util.HashMap.put@POLYN610661 in line [00062]",
      "_target" : "java.util.HashMap.put@POLYN610661.key",
      "_risk" : "//QC-JAVCWE099[00062] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783[00062] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "6",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "10",
      "_source" : "java.util.Hashtable.get@POLYN420916.null",
      "_method" : "---dummymethode in line [00387]",
      "_target" : "java.util.Hashtable.get@POLYN420916.return",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.util.Hashtable.get@POLYN420916.return",
      "_method" : "---java.util.Hashtable.get@POLYN420916 in line [01475]",
      "_target" : "org.apache.kafka.common.network.Selector.channel@POLYN435054.return",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "org.apache.kafka.common.network.Selector.channel@POLYN435054.return",
      "_method" : "---org.apache.kafka.common.network.Selector.channel@POLYN435054 in line [00001]",
      "_target" : "org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN435764.channel",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.common.network.Selector.lowestPriorityChannel@POLYN435764.channel",
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
      "_method" : "---java.util.HashMap.put@POLYN610661 in line [00062]",
      "_target" : "java.util.HashMap.put@POLYN610661.key",
      "_risk" : "//QC-JAVCWE099[00062] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783[00062] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "7",
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
      "_method" : "---java.util.HashMap.put@POLYN610661 in line [00062]",
      "_target" : "java.util.HashMap.put@POLYN610661.key",
      "_risk" : "//QC-JAVCWE099[00062] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783[00062] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "8",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.util.Map.getValue@POLYN433024.return",
      "_method" : "---java.util.Map.getValue@POLYN433024 in line [00540]",
      "_target" : "partition",
      "_risk" : "//QC-JAVCWE099[00540] In org.apache.kafka.controller.ReplicationControlManager.replay@POLYN512798[00540] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
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
      "_method" : "---java.util.HashMap.put@POLYN610661 in line [00062]",
      "_target" : "java.util.HashMap.put@POLYN610661.key",
      "_risk" : "//QC-JAVCWE099[00062] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783[00062] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "9",
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
    "_id" : "10",
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
    "_id" : "11",
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
    "_id" : "12",
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
    "_id" : "13",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN582478.objs[i]",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN572447 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.obj",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeArray@POLYN582478[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218.obj",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeObject0@POLYN572447[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN590850 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN590850.obj",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN590850.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN592693 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN592693.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "14",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN547959.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN595101 in line [00351]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN595101.ex",
      "_risk" : "//QC-JAVCWZ099[00351] In java.io.ObjectOutputStream.writeObject@POLYN547959[00351] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN595101.ex",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN572447 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.obj",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeFatalException@POLYN595101[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218.obj",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeObject0@POLYN572447[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN590850 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN590850.obj",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN590850.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN592693 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN592693.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "15",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN550177.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN595101 in line [00418]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN595101.ex",
      "_risk" : "//QC-JAVCWZ099[00418] In java.io.ObjectOutputStream.writeUnshared@POLYN550177[00418] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN595101.ex",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN572447 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.obj",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeFatalException@POLYN595101[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218.obj",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeObject0@POLYN572447[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN590850 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN590850.obj",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN590850.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN592693 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN592693.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "16",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN556228.obj",
      "_method" : "---dummymethode in line [00588]",
      "_target" : "java.io.ObjectOutputStream.replaceObject@POLYN556228.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN556228.return",
      "_method" : "---java.io.ObjectOutputStream.replaceObject@POLYN556228 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.rep",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeObject0@POLYN572447[00709] target data PATHtainted (java.io.ObjectOutputStream.write)"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.rep",
      "_method" : "---dummymethode in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.obj",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeObject0@POLYN572447[00709] target data PATHtainted (java.io.ObjectOutputStream.write)"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218.obj",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeObject0@POLYN572447[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN590850 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN590850.obj",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN590850.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN592693 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN592693.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "17",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.lang.StringBuilder.writeObject@POLYN236013.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN547959 in line [00465]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN547959.obj",
      "_risk" : "//QC-JAVCWZ099[00465] In java.lang.StringBuilder.writeObject@POLYN236013[00465] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN547959.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN572447 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.obj",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN547959[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218.obj",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeObject0@POLYN572447[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN590850 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN590850.obj",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN590850.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN592693 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN592693.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "18",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.HashMap.internalWriteEntries@POLYN683240.e.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN547959 in line [00599]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN547959.obj",
      "_risk" : "//QC-JAVCWZ099[00599] In java.util.HashMap.internalWriteEntries@POLYN683240[00599] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN547959.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN572447 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.obj",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN547959[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218.obj",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeObject0@POLYN572447[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN590850 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN590850.obj",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN590850.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN592693 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN592693.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "19",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.HashMap.internalWriteEntries@POLYN683240.e.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN547959 in line [00599]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN547959.obj",
      "_risk" : "//QC-JAVCWZ099[00599] In java.util.HashMap.internalWriteEntries@POLYN683240[00599] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN547959.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN572447 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.obj",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN547959[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218.obj",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeObject0@POLYN572447[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN590850 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN590850.obj",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN590850.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN592693 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN592693.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "20",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN462569.entryStack.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN547959 in line [01239]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN547959.obj",
      "_risk" : "//QC-JAVCWZ099[01239] In java.util.Hashtable.writeHashtable@POLYN462569[01239] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN547959.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN572447 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.obj",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN547959[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218.obj",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeObject0@POLYN572447[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN590850 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN590850.obj",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN590850.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN592693 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN592693.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "21",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN462569.entryStack.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN547959 in line [01240]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN547959.obj",
      "_risk" : "//QC-JAVCWZ099[01240] In java.util.Hashtable.writeHashtable@POLYN462569[01240] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN547959.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN572447 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.obj",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN547959[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218.obj",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeObject0@POLYN572447[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN590850 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN590850.obj",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN590850.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN592693 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN592693.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "22",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN550177.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN572447 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.obj",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN550177[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218.obj",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeObject0@POLYN572447[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN590850 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN590850.obj",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN590850.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN592693 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN592693.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "23",
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
    "_id" : "24",
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
    "_id" : "25",
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
    "_id" : "26",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "factory==null",
      "_method" : "---dummymethode in line [00132]",
      "_target" : "java.net.Socket.impl",
      "_risk" : "//QC-JAVCWE099[00132] In java.net.Socket.Socket@POLYN456141[00132] source or target data Sockettainted (java.net.Socket)"
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
    "_id" : "27",
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
    "_id" : "28",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "factory!=null",
      "_method" : "---dummymethode in line [00477]",
      "_target" : "java.net.Socket.impl",
      "_risk" : "//QC-JAVCWE099[00477] In java.net.Socket.setImpl@POLYN470534[00477] source or target data Sockettainted (java.net.Socket)"
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
    "_id" : "29",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.BufferedInputStream.read@POLYN244052.0",
      "_method" : "---dummymethode in line [00340]",
      "_target" : "java.io.BufferedInputStream.read@POLYN244052.return",
      "_risk" : "//QC-JAVCWE099[00340] In java.io.BufferedInputStream.read@POLYN244052[00340] source data PATHtainted (java.io.BufferedInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedInputStream.read@POLYN244052.return",
      "_method" : "---java.io.BufferedInputStream.read@POLYN244052 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN454711.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN454711[01117] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN454711.bytesRead",
      "_method" : "---dummymethode in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN454711.currentPosition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN454711.currentPosition",
      "_method" : "---java.io.BufferedInputStream.read@POLYN244052 in line [01117]",
      "_target" : "java.io.BufferedInputStream.read@POLYN244052.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN454711[01117] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "30",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "0",
      "_method" : "---dummymethode in line [00343]",
      "_target" : "java.io.BufferedInputStream.read@POLYN244052.n",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedInputStream.read@POLYN244052.n",
      "_method" : "---dummymethode in line [00350]",
      "_target" : "java.io.BufferedInputStream.read@POLYN244052.return",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedInputStream.read@POLYN244052[00350] source data PATHtainted (java.io.BufferedInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedInputStream.read@POLYN244052.return",
      "_method" : "---java.io.BufferedInputStream.read@POLYN244052 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN454711.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN454711[01117] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN454711.bytesRead",
      "_method" : "---dummymethode in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN454711.currentPosition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN454711.currentPosition",
      "_method" : "---java.io.BufferedInputStream.read@POLYN244052 in line [01117]",
      "_target" : "java.io.BufferedInputStream.read@POLYN244052.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN454711[01117] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "31",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.io.BufferedInputStream.read@POLYN244052.nread",
      "_method" : "---dummymethode in line [00348]",
      "_target" : "java.io.BufferedInputStream.read@POLYN244052.n",
      "_risk" : "//QC-JAVCWE099[00348] In java.io.BufferedInputStream.read@POLYN244052[00348] source data PATHtainted (java.io.BufferedInputStream.read)"
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedInputStream.read@POLYN244052.n",
      "_method" : "---dummymethode in line [00350]",
      "_target" : "java.io.BufferedInputStream.read@POLYN244052.return",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedInputStream.read@POLYN244052[00350] source data PATHtainted (java.io.BufferedInputStream.read)"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedInputStream.read@POLYN244052.return",
      "_method" : "---java.io.BufferedInputStream.read@POLYN244052 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN454711.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN454711[01117] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN454711.bytesRead",
      "_method" : "---dummymethode in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN454711.currentPosition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN454711.currentPosition",
      "_method" : "---java.io.BufferedInputStream.read@POLYN244052 in line [01117]",
      "_target" : "java.io.BufferedInputStream.read@POLYN244052.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN454711[01117] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "32",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.desc",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN582478 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN582478.desc",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeObject0@POLYN572447[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN582478.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN577964 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN577964.desc",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeArray@POLYN582478[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN577964.desc",
      "_method" : "---java.io.ObjectOutputStream.writeNonProxyDesc@POLYN580455 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN580455.desc",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeClassDesc@POLYN577964[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN580455.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDescriptor@POLYN558698 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeClassDescriptor@POLYN558698.desc",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN580455[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "33",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.Map.isEmpty@POLYN423723.return",
      "_method" : "---java.util.Map.isEmpty@POLYN423723 in line [00286]",
      "_target" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.constrainedAssign@POLYN355112.consumer",
      "_risk" : "//QC-JAVCWE099[00286] In org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.constrainedAssign@POLYN355112[00286] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.constrainedAssign@POLYN355112.consumer",
      "_method" : "---java.util.Map.put@POLYN427326 in line [00301]",
      "_target" : "java.util.Map.put@POLYN427326.value",
      "_risk" : "//QC-JAVCWE099[00301] In org.apache.kafka.clients.consumer.internals.AbstractStickyAssignor.constrainedAssign@POLYN355112[00301] source or target data PATHtainted (java.util.Map) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "34",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.util.HashMap.putVal@POLYN611184.null",
      "_method" : "---dummymethode in line [00599]",
      "_target" : "java.util.HashMap.putVal@POLYN611184.return",
      "_risk" : "//QC-JAVCWE099[00599] In java.util.HashMap.putVal@POLYN611184[00599] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.putVal@POLYN611184.return",
      "_method" : "---java.util.HashMap.putVal@POLYN611184 in line [00599]",
      "_target" : "java.util.HashMap.put@POLYN610661.return",
      "_risk" : "//QC-JAVCWE099[00599] In java.util.HashMap.put@POLYN610661[00599] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.put@POLYN610661.return",
      "_method" : "---java.util.HashMap.put@POLYN610661 in line [00204]",
      "_target" : "org.apache.kafka.clients.CommonClientConfigs.postProcessReconnectBackoffConfigs@POLYN174444.cibledummy",
      "_risk" : "//QC-JAVCWE099[00204] In org.apache.kafka.clients.CommonClientConfigs.postProcessReconnectBackoffConfigs@POLYN174444[00204] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "35",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "e.value",
      "_method" : "---dummymethode in line [00599]",
      "_target" : "java.util.HashMap.putVal@POLYN611184.oldValue",
      "_risk" : "//QC-JAVCWE099[00599] In java.util.HashMap.putVal@POLYN611184[00599] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.putVal@POLYN611184.oldValue",
      "_method" : "---dummymethode in line [00599]",
      "_target" : "java.util.HashMap.putVal@POLYN611184.return",
      "_risk" : "//QC-JAVCWE099[00599] In java.util.HashMap.putVal@POLYN611184[00599] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.putVal@POLYN611184.return",
      "_method" : "---java.util.HashMap.putVal@POLYN611184 in line [00599]",
      "_target" : "java.util.HashMap.put@POLYN610661.return",
      "_risk" : "//QC-JAVCWE099[00599] In java.util.HashMap.put@POLYN610661[00599] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.put@POLYN610661.return",
      "_method" : "---java.util.HashMap.put@POLYN610661 in line [00204]",
      "_target" : "org.apache.kafka.clients.CommonClientConfigs.postProcessReconnectBackoffConfigs@POLYN174444.cibledummy",
      "_risk" : "//QC-JAVCWE099[00204] In org.apache.kafka.clients.CommonClientConfigs.postProcessReconnectBackoffConfigs@POLYN174444[00204] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "36",
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
    "_id" : "37",
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
    "_id" : "38",
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
    "_id" : "39",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN906220.return",
      "_method" : "---java.lang.String.format@POLYN906220 in line [00052]",
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
    "_id" : "40",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "kafka.tools.StreamsResetter.run@POLYN262565.properties",
      "_method" : "---java.util.HashMap.putAll@POLYN621541 in line [00171]",
      "_target" : "java.util.HashMap.putAll@POLYN621541.m",
      "_risk" : "//QC-JAVCWE099[00171] In kafka.tools.StreamsResetter.run@POLYN262565[00171] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN621541.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN604756 in line [00599]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN604756.m",
      "_risk" : "//QC-JAVCWE099[00599] In java.util.HashMap.putAll@POLYN621541[00599] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "41",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.server.log.remote.metadata.storage.TopicBasedRemoteLogMetadataManagerConfig.initializeProducerConsumerProperties@POLYN182746.producerOnlyConfigs",
      "_method" : "---java.util.HashMap.putAll@POLYN621541 in line [00153]",
      "_target" : "java.util.HashMap.putAll@POLYN621541.m",
      "_risk" : "//QC-JAVCWE099[00153] In org.apache.kafka.server.log.remote.metadata.storage.TopicBasedRemoteLogMetadataManagerConfig.initializeProducerConsumerProperties@POLYN182746[00153] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN621541.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN604756 in line [00599]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN604756.m",
      "_risk" : "//QC-JAVCWE099[00599] In java.util.HashMap.putAll@POLYN621541[00599] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "42",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.server.log.remote.metadata.storage.TopicBasedRemoteLogMetadataManagerConfig.initializeProducerConsumerProperties@POLYN182746.consumerOnlyConfigs",
      "_method" : "---java.util.HashMap.putAll@POLYN621541 in line [00157]",
      "_target" : "java.util.HashMap.putAll@POLYN621541.m",
      "_risk" : "//QC-JAVCWE099[00157] In org.apache.kafka.server.log.remote.metadata.storage.TopicBasedRemoteLogMetadataManagerConfig.initializeProducerConsumerProperties@POLYN182746[00157] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN621541.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN604756 in line [00599]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN604756.m",
      "_risk" : "//QC-JAVCWE099[00599] In java.util.HashMap.putAll@POLYN621541[00599] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "43",
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
      "_method" : "---java.util.HashMap.putAll@POLYN621541 in line [00092]",
      "_target" : "java.util.HashMap.putAll@POLYN621541.m",
      "_risk" : "//QC-JAVCWE099[00092] In org.apache.kafka.streams.processor.internals.ClientUtils.consumerMetrics@POLYN177394[00092] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN621541.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN604756 in line [00599]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN604756.m",
      "_risk" : "//QC-JAVCWE099[00599] In java.util.HashMap.putAll@POLYN621541[00599] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "44",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.workload.TopicsSpec.immutableCopy@POLYN152454.map",
      "_method" : "---java.util.HashMap.putAll@POLYN621541 in line [00071]",
      "_target" : "java.util.HashMap.putAll@POLYN621541.m",
      "_risk" : "//QC-JAVCWE099[00071] In org.apache.kafka.trogdor.workload.TopicsSpec.immutableCopy@POLYN152454[00071] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN621541.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN604756 in line [00599]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN604756.m",
      "_risk" : "//QC-JAVCWE099[00599] In java.util.HashMap.putAll@POLYN621541[00599] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "45",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.util.HashMap.newNode@POLYN681067.return",
      "_method" : "---java.util.HashMap.newNode@POLYN681067 in line [00599]",
      "_target" : "java.util.HashMap.putVal@POLYN611184.p",
      "_risk" : "//QC-JAVCWZ099[00599] In java.util.HashMap.putVal@POLYN611184[00599] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.putVal@POLYN611184.p",
      "_method" : "---dummymethode in line [00599]",
      "_target" : "java.util.HashMap.putVal@POLYN611184.e",
      "_risk" : "//QC-JAVCWZ099[00599] In java.util.HashMap.putVal@POLYN611184[00599] source or target data PATHtainted (java.util.HashMap)"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putVal@POLYN611184.e",
      "_method" : "---java.util.HashMap.afterNodeAccess@POLYN682992 in line [00599]",
      "_target" : "java.util.HashMap.afterNodeAccess@POLYN682992.p",
      "_risk" : "//QC-JAVCWZ099[00599] In java.util.HashMap.putVal@POLYN611184[00599] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "46",
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
    "_id" : "47",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN582478.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN577964 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN577964.unshared",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeArray@POLYN582478[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN577964.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeNonProxyDesc@POLYN580455 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN580455.unshared",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeClassDesc@POLYN577964[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "48",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN577964 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN577964.unshared",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN588218[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN577964.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeNonProxyDesc@POLYN580455 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN580455.unshared",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeClassDesc@POLYN577964[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "49",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN595101.false",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN572447 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.unshared",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeFatalException@POLYN595101[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN582478 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN582478.unshared",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeObject0@POLYN572447[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "50",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN547959.false",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN572447 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.unshared",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN547959[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN582478 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN582478.unshared",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeObject0@POLYN572447[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "51",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN550177.true",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN572447 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.unshared",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN550177[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN572447.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN582478 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN582478.unshared",
      "_risk" : "//QC-JAVCWZ099[00709] In java.io.ObjectOutputStream.writeObject0@POLYN572447[00709] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "52",
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
    "_id" : "53",
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
    "_id" : "54",
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
    "_id" : "55",
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
    "_id" : "56",
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
    "_id" : "57",
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
    "_id" : "58",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.compute@POLYN646624.tab",
      "_method" : "---java.util.HashMap.treeifyBin@POLYN619734 in line [00599]",
      "_target" : "java.util.HashMap.treeifyBin@POLYN619734.tab",
      "_risk" : "//QC-JAVCWZ099[00599] In java.util.HashMap.compute@POLYN646624[00599] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.treeifyBin@POLYN619734.tab",
      "_method" : "---java.util.HashMap.treeify@POLYN690998 in line [00599]",
      "_target" : "java.util.HashMap.treeify@POLYN690998.tab",
      "_risk" : "//QC-JAVCWZ099[00599] In java.util.HashMap.treeifyBin@POLYN619734[00599] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "59",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.computeIfAbsent@POLYN641492.tab",
      "_method" : "---java.util.HashMap.treeifyBin@POLYN619734 in line [00599]",
      "_target" : "java.util.HashMap.treeifyBin@POLYN619734.tab",
      "_risk" : "//QC-JAVCWZ099[00599] In java.util.HashMap.computeIfAbsent@POLYN641492[00599] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.treeifyBin@POLYN619734.tab",
      "_method" : "---java.util.HashMap.treeify@POLYN690998 in line [00599]",
      "_target" : "java.util.HashMap.treeify@POLYN690998.tab",
      "_risk" : "//QC-JAVCWZ099[00599] In java.util.HashMap.treeifyBin@POLYN619734[00599] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "60",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.merge@POLYN650549.tab",
      "_method" : "---java.util.HashMap.treeifyBin@POLYN619734 in line [00599]",
      "_target" : "java.util.HashMap.treeifyBin@POLYN619734.tab",
      "_risk" : "//QC-JAVCWZ099[00599] In java.util.HashMap.merge@POLYN650549[00599] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.treeifyBin@POLYN619734.tab",
      "_method" : "---java.util.HashMap.treeify@POLYN690998 in line [00599]",
      "_target" : "java.util.HashMap.treeify@POLYN690998.tab",
      "_risk" : "//QC-JAVCWZ099[00599] In java.util.HashMap.treeifyBin@POLYN619734[00599] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "61",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.putVal@POLYN611184.tab",
      "_method" : "---java.util.HashMap.treeifyBin@POLYN619734 in line [00599]",
      "_target" : "java.util.HashMap.treeifyBin@POLYN619734.tab",
      "_risk" : "//QC-JAVCWZ099[00599] In java.util.HashMap.putVal@POLYN611184[00599] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.treeifyBin@POLYN619734.tab",
      "_method" : "---java.util.HashMap.treeify@POLYN690998 in line [00599]",
      "_target" : "java.util.HashMap.treeify@POLYN690998.tab",
      "_risk" : "//QC-JAVCWZ099[00599] In java.util.HashMap.treeifyBin@POLYN619734[00599] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "62",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.remove@POLYN639647.return",
      "_method" : "---java.util.HashMap.remove@POLYN639647 in line [00299]",
      "_target" : "org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN246334.nextData",
      "_risk" : "//QC-JAVCWE099[00299] In org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN246334[00299] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN246334.nextData",
      "_method" : "---java.util.HashMap.put@POLYN610661 in line [00338]",
      "_target" : "java.util.HashMap.put@POLYN610661.value",
      "_risk" : "//QC-JAVCWE099[00338] In org.apache.kafka.clients.FetchSessionHandler.Builder.build@POLYN246334[00338] source or target data PATHtainted (java.util.HashMap) RiskOnInput / RiskOnOutput"
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
    "_libelle" : "java.util.Hashtable.this"
  }, {
    "_id" : "R3",
    "_libelle" : "java.util.Hashtable.forEach@POLYN444712.action"
  }, {
    "_id" : "R4",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.this"
  }, {
    "_id" : "R5",
    "_libelle" : "org.apache.kafka.clients.Metadata.this"
  }, {
    "_id" : "R6",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335137.partition"
  }, {
    "_id" : "R7",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335137.offsetResetStrategy"
  }, {
    "_id" : "R8",
    "_libelle" : "java.io.BufferedInputStream.this"
  }, {
    "_id" : "R9",
    "_libelle" : "java.io.Reader.lock"
  }, {
    "_id" : "R10",
    "_libelle" : "org.apache.kafka.common.metrics.Sensor.this"
  }, {
    "_id" : "R11",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.Fetcher.this"
  }, {
    "_id" : "R12",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.this"
  }, {
    "_id" : "R13",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677.tp"
  }, {
    "_id" : "R14",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN332527.tp"
  }, {
    "_id" : "R15",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN332527.highWatermark"
  }, {
    "_id" : "R16",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN332907.tp"
  }, {
    "_id" : "R17",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN332907.lastStableOffset"
  }, {
    "_id" : "R18",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN332717.tp"
  }, {
    "_id" : "R19",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN332717.logStartOffset"
  }, {
    "_id" : "R20",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN325617.tp"
  }, {
    "_id" : "R21",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN325617.position"
  }, {
    "_id" : "R22",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.this"
  }, {
    "_id" : "R23",
    "_libelle" : "org.apache.kafka.streams.processor.internals.GlobalStreamThread.this"
  }, {
    "_id" : "R24",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.this"
  }, {
    "_id" : "R25",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258552.cleanupDelayMs"
  }, {
    "_id" : "R26",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255547.taskId"
  }, {
    "_id" : "R27",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.stateLock"
  }, {
    "_id" : "R28",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.this"
  }, {
    "_id" : "R29",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.unsent"
  }, {
    "_id" : "R30",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN318181.assignments"
  }, {
    "_id" : "R31",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadLevelSensors"
  }, {
    "_id" : "R32",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadLevelMetrics"
  }, {
    "_id" : "R33",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.changeThreadCount"
  }, {
    "_id" : "R34",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.threads"
  }, {
    "_id" : "R35",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamThread.stateLock"
  }, {
    "_id" : "R36",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.this"
  }, {
    "_id" : "R37",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.consumerRecord@POLYN201849.consumedMessage"
  }, {
    "_id" : "R38",
    "_libelle" : "java.io.BufferedInputStream.mark@POLYN248009.readlimit"
  }, {
    "_id" : "R39",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.this"
  }, {
    "_id" : "R40",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN163256.lastVersion"
  }, {
    "_id" : "R41",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN163256.timeoutMs"
  }, {
    "_id" : "R42",
    "_libelle" : "org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN262321.topic"
  }, {
    "_id" : "R43",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN324647.dq"
  }, {
    "_id" : "R44",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.this"
  }, {
    "_id" : "R45",
    "_libelle" : "org.apache.kafka.clients.producer.internals.IncompleteBatches.incomplete"
  }, {
    "_id" : "R46",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.this"
  }, {
    "_id" : "R47",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN372050.topicPartition"
  }, {
    "_id" : "R48",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN384373.exception"
  }, {
    "_id" : "R49",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN374859.exception"
  }, {
    "_id" : "R50",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374373.exception"
  }, {
    "_id" : "R51",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.this"
  }, {
    "_id" : "R52",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.this"
  }, {
    "_id" : "R53",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555.key"
  }, {
    "_id" : "R54",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555.value"
  }, {
    "_id" : "R55",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417569.isDisconnected"
  }, {
    "_id" : "R56",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417569.cause"
  }, {
    "_id" : "R57",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417215.error"
  }, {
    "_id" : "R58",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN377606.tp"
  }, {
    "_id" : "R59",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.abortBatches@POLYN358208.dq"
  }, {
    "_id" : "R60",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN393355.e"
  }, {
    "_id" : "R61",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.partitionReady@POLYN341260.deque"
  }, {
    "_id" : "R62",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161215.topic"
  }, {
    "_id" : "R63",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161215.nowMs"
  }, {
    "_id" : "R64",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN348729.deque"
  }, {
    "_id" : "R65",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN375869.topicPartition"
  }, {
    "_id" : "R66",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN379977.topicPartition"
  }, {
    "_id" : "R67",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN379977.increment"
  }, {
    "_id" : "R68",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.updateEstimation@POLYN154850.compressionRatioForTopic"
  }, {
    "_id" : "R69",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384968.batch"
  }, {
    "_id" : "R70",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384968.exception"
  }, {
    "_id" : "R71",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384968.adjustSequenceNumbers"
  }, {
    "_id" : "R72",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN381794.batch"
  }, {
    "_id" : "R73",
    "_libelle" : "java.net.Socket.this"
  }, {
    "_id" : "R74",
    "_libelle" : "java.net.Socket.setSendBufferSize@POLYN493067.size"
  }, {
    "_id" : "R75",
    "_libelle" : "java.net.Socket.setReceiveBufferSize@POLYN495770.size"
  }, {
    "_id" : "R76",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.this"
  }, {
    "_id" : "R77",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232624.request"
  }, {
    "_id" : "R78",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232624.cb"
  }, {
    "_id" : "R79",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerConnector.this"
  }, {
    "_id" : "R80",
    "_libelle" : "org.apache.kafka.clients.Metadata.bootstrap@POLYN251401.addresses"
  }, {
    "_id" : "R81",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.this"
  }, {
    "_id" : "R82",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029.prefix"
  }, {
    "_id" : "R83",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029.id"
  }, {
    "_id" : "R84",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029.metrics"
  }, {
    "_id" : "R85",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029.nowMs"
  }, {
    "_id" : "R86",
    "_libelle" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.this"
  }, {
    "_id" : "R87",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN390487.now"
  }, {
    "_id" : "R88",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.remove@POLYN148829.nodeId"
  }, {
    "_id" : "R89",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.update@POLYN148557.nodeId"
  }, {
    "_id" : "R90",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.update@POLYN148557.nodeApiVersions"
  }, {
    "_id" : "R91",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.this"
  }, {
    "_id" : "R92",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN273638.connector"
  }, {
    "_id" : "R93",
    "_libelle" : "org.apache.kafka.clients.admin.KafkaAdminClient.this"
  }, {
    "_id" : "R94",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.this"
  }, {
    "_id" : "R95",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235768.key"
  }, {
    "_id" : "R96",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235768.value"
  }, {
    "_id" : "R97",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235768.windowStartTimestamp"
  }, {
    "_id" : "R98",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN251793.response"
  }, {
    "_id" : "R99",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN251793.isPartialUpdate"
  }, {
    "_id" : "R100",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN251793.nowMs"
  }, {
    "_id" : "R101",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN252367.requestVersion"
  }, {
    "_id" : "R102",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN252367.response"
  }, {
    "_id" : "R103",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN252367.isPartialUpdate"
  }, {
    "_id" : "R104",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN252367.nowMs"
  }, {
    "_id" : "R105",
    "_libelle" : "org.apache.kafka.common.requests.MetadataResponse.data"
  }, {
    "_id" : "R106",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.this"
  }, {
    "_id" : "R107",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221332.initialTopologies"
  }, {
    "_id" : "R108",
    "_libelle" : "java.util.Hashtable.putAll@POLYN429196.t"
  }, {
    "_id" : "R109",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.this"
  }, {
    "_id" : "R110",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258997.key"
  }, {
    "_id" : "R111",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258997.value"
  }, {
    "_id" : "R112",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258997.windowStartTimestamp"
  }, {
    "_id" : "R113",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.sourceRecord@POLYN201620.preTransformRecord"
  }, {
    "_id" : "R114",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaConfigBackingStore.lock"
  }, {
    "_id" : "R115",
    "_libelle" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.lock"
  }, {
    "_id" : "R116",
    "_libelle" : "java.io.Writer.lock"
  }, {
    "_id" : "R117",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190309.newCacheSizeBytes"
  }, {
    "_id" : "R118",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN228173.connName"
  }, {
    "_id" : "R119",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.this"
  }, {
    "_id" : "R120",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226295.connName"
  }, {
    "_id" : "R121",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226295.config"
  }, {
    "_id" : "R122",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226295.allowReplace"
  }, {
    "_id" : "R123",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226295.callback"
  }, {
    "_id" : "R124",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226295.configInfos"
  }, {
    "_id" : "R125",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.abortUndrainedBatches@POLYN358830.dq"
  }, {
    "_id" : "R126",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN393177.request"
  }, {
    "_id" : "R127",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.this"
  }, {
    "_id" : "R128",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN295450.sensor"
  }, {
    "_id" : "R129",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.nodeLevelSensors"
  }, {
    "_id" : "R130",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224314.connName"
  }, {
    "_id" : "R131",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224314.callback"
  }, {
    "_id" : "R132",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN230008.taskId"
  }, {
    "_id" : "R133",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN230008.cb"
  }, {
    "_id" : "R134",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN197813.entries"
  }, {
    "_id" : "R135",
    "_libelle" : "org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitableRecords"
  }, {
    "_id" : "R136",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.this"
  }, {
    "_id" : "R137",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN420190.reason"
  }, {
    "_id" : "R138",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN420190.shouldResetMemberId"
  }, {
    "_id" : "R139",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN419491.reason"
  }, {
    "_id" : "R140",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN419491.shouldResetMemberId"
  }, {
    "_id" : "R141",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.this"
  }, {
    "_id" : "R142",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.pollTasks"
  }, {
    "_id" : "R143",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN322645.tp"
  }, {
    "_id" : "R144",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN322645.position"
  }, {
    "_id" : "R145",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN330222.tp"
  }, {
    "_id" : "R146",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN383821.batch"
  }, {
    "_id" : "R147",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN383821.response"
  }, {
    "_id" : "R148",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.taskLevelSensors"
  }, {
    "_id" : "R149",
    "_libelle" : "org.apache.kafka.common.security.oauthbearer.internals.expiring.ExpiringCredentialRefreshingLogin.mandatoryClassToSynchronizeOnPriorToRefresh"
  }, {
    "_id" : "R150",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN339974.tp"
  }, {
    "_id" : "R151",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN331789.tp"
  }, {
    "_id" : "R152",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN340125.tp"
  }, {
    "_id" : "R153",
    "_libelle" : "org.apache.kafka.connect.runtime.Worker.this"
  }, {
    "_id" : "R154",
    "_libelle" : "org.apache.kafka.connect.runtime.ConnectMetrics.this"
  }, {
    "_id" : "R155",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.this"
  }, {
    "_id" : "R156",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.openIterators"
  }, {
    "_id" : "R157",
    "_libelle" : "org.apache.kafka.streams.StreamsBuilder.this"
  }, {
    "_id" : "R158",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.this"
  }, {
    "_id" : "R159",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165236.reader"
  }, {
    "_id" : "R160",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTask.this"
  }, {
    "_id" : "R161",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.NamedTopologyBuilder.this"
  }, {
    "_id" : "R162",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN179054.partition"
  }, {
    "_id" : "R163",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN179054.offset"
  }, {
    "_id" : "R164",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.this"
  }, {
    "_id" : "R165",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.addStateStore@POLYN236150.builder"
  }, {
    "_id" : "R166",
    "_libelle" : "org.apache.kafka.connect.file.FileStreamSourceTask.this"
  }, {
    "_id" : "R167",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN231421.connName"
  }, {
    "_id" : "R168",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN231421.cb"
  }, {
    "_id" : "R169",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.taskDirCreationLock"
  }, {
    "_id" : "R170",
    "_libelle" : "org.apache.kafka.clients.Metadata.failedUpdate@POLYN264029.now"
  }, {
    "_id" : "R171",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323236.tp"
  }, {
    "_id" : "R172",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323236.position"
  }, {
    "_id" : "R173",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323236.requestedResetStrategy"
  }, {
    "_id" : "R174",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerSourceTask.this"
  }, {
    "_id" : "R175",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.this"
  }, {
    "_id" : "R176",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN181694.key"
  }, {
    "_id" : "R177",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN181694.value"
  }, {
    "_id" : "R178",
    "_libelle" : "org.apache.kafka.connect.data.ConnectSchema.JAVA_CLASS_SCHEMA_TYPES"
  }, {
    "_id" : "R179",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN242549.topic"
  }, {
    "_id" : "R180",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN242549.partitions"
  }, {
    "_id" : "R181",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN241244.newOffsets"
  }, {
    "_id" : "R182",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN241668.newOffsets"
  }, {
    "_id" : "R183",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelMetrics"
  }, {
    "_id" : "R184",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.putAll@POLYN182778.entries"
  }, {
    "_id" : "R185",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN314038.pattern"
  }, {
    "_id" : "R186",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN314038.listener"
  }, {
    "_id" : "R187",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.splitAndReenqueue@POLYN335825.partitionDequeue"
  }, {
    "_id" : "R188",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.setEstimation@POLYN156798.compressionRatioForTopic"
  }, {
    "_id" : "R189",
    "_libelle" : "java.io.PrintStream.this"
  }, {
    "_id" : "R190",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelSensors"
  }, {
    "_id" : "R191",
    "_libelle" : "org.apache.kafka.trogdor.fault.Kibosh.this"
  }, {
    "_id" : "R192",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.rebalance@POLYN228133.newAssignment"
  }, {
    "_id" : "R193",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN228742.pattern"
  }, {
    "_id" : "R194",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN228742.listener"
  }, {
    "_id" : "R195",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN237211.offsets"
  }, {
    "_id" : "R196",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN236595.offsets"
  }, {
    "_id" : "R197",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN236595.callback"
  }, {
    "_id" : "R198",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN237936.timeout"
  }, {
    "_id" : "R199",
    "_libelle" : "java.util.Hashtable.replaceAll@POLYN445618.function"
  }, {
    "_id" : "R200",
    "_libelle" : "org.apache.kafka.clients.producer.MockProducer.this"
  }, {
    "_id" : "R201",
    "_libelle" : "org.apache.kafka.connect.storage.FileOffsetBackingStore.this"
  }, {
    "_id" : "R202",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.this"
  }, {
    "_id" : "R203",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163428.consumerRecords"
  }, {
    "_id" : "R204",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.this"
  }, {
    "_id" : "R205",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN173815.key"
  }, {
    "_id" : "R206",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN173815.value"
  }, {
    "_id" : "R207",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN238316.partition"
  }, {
    "_id" : "R208",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN238316.offset"
  }, {
    "_id" : "R209",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335332.partitions"
  }, {
    "_id" : "R210",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335332.offsetResetStrategy"
  }, {
    "_id" : "R211",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.resetEstimation@POLYN156131.compressionRatioForTopic"
  }, {
    "_id" : "R212",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN162770.reader"
  }, {
    "_id" : "R213",
    "_libelle" : "java.net.ServerSocket.this"
  }, {
    "_id" : "R214",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seekToBeginning@POLYN241010.partitions"
  }, {
    "_id" : "R215",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seekToEnd@POLYN241434.partitions"
  }, {
    "_id" : "R216",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.pause@POLYN242824.partitions"
  }, {
    "_id" : "R217",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.resume@POLYN243146.partitions"
  }, {
    "_id" : "R218",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417414.cause"
  }, {
    "_id" : "R219",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420488.api"
  }, {
    "_id" : "R220",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420488.error"
  }, {
    "_id" : "R221",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420488.shouldResetMemberId"
  }, {
    "_id" : "R222",
    "_libelle" : "org.apache.kafka.common.metrics.JmxReporter.LOCK"
  }, {
    "_id" : "R223",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.this"
  }, {
    "_id" : "R224",
    "_libelle" : "java.io.File.this"
  }, {
    "_id" : "R225",
    "_libelle" : "java.io.File.writeObject@POLYN632083.s"
  }, {
    "_id" : "R226",
    "_libelle" : "java.net.ServerSocket.setSoTimeout@POLYN322018.timeout"
  }, {
    "_id" : "R227",
    "_libelle" : "java.net.ServerSocket.setReceiveBufferSize@POLYN328297.size"
  }, {
    "_id" : "R228",
    "_libelle" : "java.net.Socket.setSoTimeout@POLYN491292.timeout"
  }, {
    "_id" : "R229",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN256508.key"
  }, {
    "_id" : "R230",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN256508.value"
  }, {
    "_id" : "R231",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDbIterator.this"
  }, {
    "_id" : "R232",
    "_libelle" : "java.io.PipedInputStream.this"
  }, {
    "_id" : "R233",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN218990.b"
  }, {
    "_id" : "R234",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN220097.b"
  }, {
    "_id" : "R235",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN220097.off"
  }, {
    "_id" : "R236",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN220097.len"
  }, {
    "_id" : "R237",
    "_libelle" : "org.apache.kafka.tools.ThroughputThrottler.this"
  }, {
    "_id" : "R238",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333347.tp"
  }, {
    "_id" : "R239",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333347.preferredReadReplicaId"
  }, {
    "_id" : "R240",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333347.timeMs"
  }, {
    "_id" : "R241",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN335896.partitions"
  }, {
    "_id" : "R242",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN335896.nextAllowResetTimeMs"
  }, {
    "_id" : "R243",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN340271.partitions"
  }, {
    "_id" : "R244",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN340271.nextRetryTimeMs"
  }, {
    "_id" : "R245",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164028.requestVersion"
  }, {
    "_id" : "R246",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164028.response"
  }, {
    "_id" : "R247",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164028.isPartialUpdate"
  }, {
    "_id" : "R248",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164028.nowMs"
  }, {
    "_id" : "R249",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN186656.key"
  }, {
    "_id" : "R250",
    "_libelle" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerValidatorCallbackHandler.VERIFICATION_KEY_RESOLVER_CACHE"
  }, {
    "_id" : "R251",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.this"
  }, {
    "_id" : "R252",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN160102.status"
  }, {
    "_id" : "R253",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN159723.status"
  }, {
    "_id" : "R254",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN160790.status"
  }, {
    "_id" : "R255",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN160247.status"
  }, {
    "_id" : "R256",
    "_libelle" : "java.io.PipedReader.this"
  }, {
    "_id" : "R257",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN199240.namespace"
  }, {
    "_id" : "R258",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheLevelSensors"
  }, {
    "_id" : "R259",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.assignPartitionsLock"
  }, {
    "_id" : "R260",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.this"
  }, {
    "_id" : "R261",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.writeEntries@POLYN154199.committedOffsets"
  }, {
    "_id" : "R262",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN228535.topics"
  }, {
    "_id" : "R263",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230359.topics"
  }, {
    "_id" : "R264",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230359.listener"
  }, {
    "_id" : "R265",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230173.pattern"
  }, {
    "_id" : "R266",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237542.callback"
  }, {
    "_id" : "R267",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeReporter@POLYN301737.reporter"
  }, {
    "_id" : "R268",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.this"
  }, {
    "_id" : "R269",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.this"
  }, {
    "_id" : "R270",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN167027.connector"
  }, {
    "_id" : "R271",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN167027.properties"
  }, {
    "_id" : "R272",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeTaskConfigs@POLYN167997.connector"
  }, {
    "_id" : "R273",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN168645.connector"
  }, {
    "_id" : "R274",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN168645.configs"
  }, {
    "_id" : "R275",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN169530.connector"
  }, {
    "_id" : "R276",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN169530.state"
  }, {
    "_id" : "R277",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.this"
  }, {
    "_id" : "R278",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.configure@POLYN173172.configs"
  }, {
    "_id" : "R279",
    "_libelle" : "java.io.PipedReader.receive@POLYN199029.c"
  }, {
    "_id" : "R280",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.this"
  }, {
    "_id" : "R281",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.calculateNextWindow@POLYN159408.force"
  }, {
    "_id" : "R282",
    "_libelle" : "org.apache.kafka.trogdor.workload.ProduceBenchWorker.this"
  }, {
    "_id" : "R283",
    "_libelle" : "org.apache.kafka.trogdor.workload.RoundTripWorker.this"
  }, {
    "_id" : "R284",
    "_libelle" : "java.io.FileInputStream.closeLock"
  }, {
    "_id" : "R285",
    "_libelle" : "java.io.FileOutputStream.closeLock"
  }, {
    "_id" : "R286",
    "_libelle" : "java.io.PipedOutputStream.this"
  }, {
    "_id" : "R287",
    "_libelle" : "java.io.PipedOutputStream.connect@POLYN170235.snk"
  }, {
    "_id" : "R288",
    "_libelle" : "java.io.PipedWriter.this"
  }, {
    "_id" : "R289",
    "_libelle" : "java.io.PipedWriter.connect@POLYN169465.snk"
  }, {
    "_id" : "R290",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.reporters@POLYN201367.reporters"
  }, {
    "_id" : "R291",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.assign@POLYN230737.partitions"
  }, {
    "_id" : "R292",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.addRecord@POLYN235241.record"
  }, {
    "_id" : "R293",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setException@POLYN236186.exception"
  }, {
    "_id" : "R294",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN236317.exception"
  }, {
    "_id" : "R295",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.addTransientTopics@POLYN150792.topics"
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
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.putAll@POLYN159167.entries"
  }, {
    "_id" : "R301",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN222718.callback"
  }, {
    "_id" : "R302",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN222949.connName"
  }, {
    "_id" : "R303",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN222949.callback"
  }, {
    "_id" : "R304",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN225382.connName"
  }, {
    "_id" : "R305",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN225382.config"
  }, {
    "_id" : "R306",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN225382.allowReplace"
  }, {
    "_id" : "R307",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN225382.callback"
  }, {
    "_id" : "R308",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN228547.connName"
  }, {
    "_id" : "R309",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN228547.callback"
  }, {
    "_id" : "R310",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeConnectorConfig@POLYN167646.connector"
  }, {
    "_id" : "R311",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageReaderImpl.offsetReadFutures"
  }, {
    "_id" : "R312",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.setAclMutator@POLYN169405.aclMutator"
  }, {
    "_id" : "R313",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN166527.newLeader"
  }, {
    "_id" : "R314",
    "_libelle" : "java.io.BufferedOutputStream.this"
  }, {
    "_id" : "R315",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN159289.b"
  }, {
    "_id" : "R316",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN160150.b"
  }, {
    "_id" : "R317",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN160150.off"
  }, {
    "_id" : "R318",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN160150.len"
  }, {
    "_id" : "R319",
    "_libelle" : "java.io.File.readObject@POLYN632464.s"
  }, {
    "_id" : "R320",
    "_libelle" : "java.io.PipedOutputStream.sink"
  }, {
    "_id" : "R321",
    "_libelle" : "java.io.PipedWriter.sink"
  }, {
    "_id" : "R322",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.topicLevelSensors"
  }, {
    "_id" : "R323",
    "_libelle" : "org.apache.kafka.streams.state.internals.DelegatingPeekingKeyValueIterator.this"
  }, {
    "_id" : "R324",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianTimestampConstantPayloadGenerator.this"
  }, {
    "_id" : "R325",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianTimestampRandomPayloadGenerator.this"
  }, {
    "_id" : "R326",
    "_libelle" : "org.apache.kafka.trogdor.workload.SequentialPayloadGenerator.this"
  }, {
    "_id" : "R327",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.this"
  }, {
    "_id" : "R328",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.delay@POLYN147237.amount"
  }, {
    "_id" : "R329",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampConstantPayloadGenerator.this"
  }, {
    "_id" : "R330",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRandomPayloadGenerator.this"
  }, {
    "_id" : "R331",
    "_libelle" : "java.io.PipedReader.receive@POLYN200707.c"
  }, {
    "_id" : "R332",
    "_libelle" : "java.io.PipedReader.receive@POLYN200707.off"
  }, {
    "_id" : "R333",
    "_libelle" : "java.io.PipedReader.receive@POLYN200707.len"
  }, {
    "_id" : "R334",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.close@POLYN245840.timeout"
  }, {
    "_id" : "R335",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.metrics@POLYN200738.errorHandlingMetrics"
  }, {
    "_id" : "R336",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.this"
  }, {
    "_id" : "R337",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN164989.newState"
  }, {
    "_id" : "R338",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN164989.now"
  }, {
    "_id" : "R339",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.setUpdateListener@POLYN170355.listener"
  } ],
  "_lesDeadlocksSequences" : [ {
    "_id" : "0",
    "_lesItems" : [ "S0:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN182389", "S0:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN196432", "S0:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN153885 (R0 in line [00067],R1 in line [00067])", "S0:java.util.Hashtable.forEach@POLYN444712 (R2 in line [00889],R3 in line [00889])" ]
  }, {
    "_id" : "1",
    "_lesItems" : [ "S1:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221034", "S1:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221332 (R106 in line [00104],R107 in line [00104])", "S1:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN224172", "S1:org.apache.kafka.streams.processor.internals.TopologyMetadata.registerAndBuildNewTopology@POLYN249442", "S1:org.apache.kafka.streams.processor.internals.TopologyMetadata.buildAndVerifyTopology@POLYN253299", "S1:org.apache.kafka.streams.processor.internals.TopologyMetadata.buildAndVerifyTopology@POLYN253299", "S1:java.util.Hashtable.putAll@POLYN429196 (R2 in line [00537],R108 in line [00537])", "S1:java.util.Hashtable.put@POLYN425722 (R2 in line [00472])", "S1:java.util.Hashtable.addEntry@POLYN424137", "S1:java.util.Hashtable.rehash@POLYN422252" ]
  }, {
    "_id" : "2",
    "_lesItems" : [ "S2:org.apache.kafka.common.security.authenticator.DefaultKafkaPrincipalBuilder.build@POLYN164465", "S2:org.apache.kafka.common.security.authenticator.DefaultKafkaPrincipalBuilder.applyKerberosShortNamer@POLYN165665", "S2:org.apache.kafka.common.security.kerberos.KerberosShortNamer.shortName@POLYN158440", "S2:org.apache.kafka.common.security.kerberos.KerberosRule.apply@POLYN176693", "S2:org.apache.kafka.common.security.kerberos.KerberosRule.replaceSubstitution@POLYN175991", "S2:java.util.Hashtable.replaceAll@POLYN445618 (R2 in line [00909],R199 in line [00909])" ]
  }, {
    "_id" : "3",
    "_lesItems" : [ "S3:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN182389", "S3:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN196432", "S3:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN153885 (R0 in line [00067],R1 in line [00067])", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856249", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856249", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.updateAssignmentMetadataIfNeeded@POLYN858146", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.updateFetchPositions@POLYN910782", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.resetInitializingPositions@POLYN337770 (R4 in line [00697])", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335748", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335137 (R4 in line [00638],R6 in line [00638],R7 in line [00638])", "S3:java.io.BufferedInputStream.reset@POLYN248739 (R8 in line [00445])", "S3:java.io.BufferedInputStream.getBufIfOpen@POLYN236660" ]
  }, {
    "_id" : "4",
    "_lesItems" : [ "S4:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN182389", "S4:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN196432", "S4:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN153885 (R0 in line [00067],R1 in line [00067])", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856249", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856249", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN858603", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN858603", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN492557", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033", "S4:org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN340677 (R4 in line [00757],R13 in line [00757])", "S4:org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN169783", "S4:java.util.Hashtable.remove@POLYN476052" ]
  }, {
    "_id" : "5",
    "_lesItems" : [ "S5:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN182389", "S5:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN196432", "S5:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN153885 (R0 in line [00067],R1 in line [00067])", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856249", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856249", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN858603", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN858603", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN492557", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033", "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN332527 (R4 in line [00578],R14 in line [00578],R15 in line [00578])", "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126", "S5:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "6",
    "_lesItems" : [ "S6:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN182389", "S6:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN196432", "S6:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN153885 (R0 in line [00067],R1 in line [00067])", "S6:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856249", "S6:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856249", "S6:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN858603", "S6:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN858603", "S6:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN492557", "S6:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033", "S6:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033", "S6:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN332907 (R4 in line [00586],R16 in line [00586],R17 in line [00586])", "S6:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126", "S6:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "7",
    "_lesItems" : [ "S7:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN182389", "S7:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN196432", "S7:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN153885 (R0 in line [00067],R1 in line [00067])", "S7:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856249", "S7:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856249", "S7:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN858603", "S7:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN858603", "S7:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN492557", "S7:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033", "S7:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN332717 (R4 in line [00582],R18 in line [00582],R19 in line [00582])", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126", "S7:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "8",
    "_lesItems" : [ "S8:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN182389", "S8:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN196432", "S8:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN153885 (R0 in line [00067],R1 in line [00067])", "S8:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856249", "S8:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856249", "S8:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN858603", "S8:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN858603", "S8:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN492557", "S8:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN492557", "S8:org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN494838", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN325617 (R4 in line [00445],R20 in line [00445],R21 in line [00445])", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126", "S8:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "9",
    "_lesItems" : [ "S9:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S9:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S9:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S9:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373462", "S9:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN373822", "S9:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S9:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S9:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN409282", "S9:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN409282", "S9:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN318181 (R4 in line [00275],R30 in line [00275])", "S9:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "10",
    "_lesItems" : [ "S10:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231332 (R141 in line [00163])", "S10:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231566 (R141 in line [00168],R142 in line [00175])", "S10:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231566 (R141 in line [00168],R142 in line [00175])", "S10:org.apache.kafka.clients.consumer.MockConsumer.updateFetchPosition@POLYN247073", "S10:org.apache.kafka.clients.consumer.MockConsumer.resetOffsetPosition@POLYN247692", "S10:org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN238555", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.seek@POLYN322835", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN322645 (R4 in line [00380],R143 in line [00380],R144 in line [00380])", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN322645 (R4 in line [00380],R143 in line [00380],R144 in line [00380])", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126", "S10:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "11",
    "_lesItems" : [ "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN327090 (R4 in line [00479])", "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN327090 (R4 in line [00479])", "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN330222 (R4 in line [00531],R145 in line [00531])", "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN330222 (R4 in line [00531],R145 in line [00531])", "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126", "S11:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "12",
    "_lesItems" : [ "S12:org.apache.kafka.streams.processor.internals.StreamTask.addPartitionsForOffsetReset@POLYN314433", "S12:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN893223", "S12:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN893223", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN339974 (R4 in line [00739],R150 in line [00739])", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN339974 (R4 in line [00739],R150 in line [00739])", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126", "S12:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "13",
    "_lesItems" : [ "S13:org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN902380", "S13:org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN902380", "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN331789 (R4 in line [00563],R151 in line [00563])", "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126", "S13:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "14",
    "_lesItems" : [ "S14:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN893981", "S14:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN893981", "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN340125 (R4 in line [00743],R152 in line [00743])", "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN340125 (R4 in line [00743],R152 in line [00743])", "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126", "S14:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "15",
    "_lesItems" : [ "S15:org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetIfNeeded@POLYN497795", "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323236 (R4 in line [00392],R171 in line [00392],R172 in line [00392],R173 in line [00392])", "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN322491", "S15:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "16",
    "_lesItems" : [ "S16:org.apache.kafka.clients.consumer.KafkaConsumer.subscribe@POLYN847122", "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN314038 (R4 in line [00174],R185 in line [00174],R186 in line [00174])", "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN319082" ]
  }, {
    "_id" : "17",
    "_lesItems" : [ "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335332 (R4 in line [00642],R209 in line [00642],R210 in line [00642])", "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN335332 (R4 in line [00642],R209 in line [00642],R210 in line [00642])", "S17:java.io.BufferedInputStream.reset@POLYN248739 (R8 in line [00445])", "S17:java.io.BufferedInputStream.getBufIfOpen@POLYN236660" ]
  }, {
    "_id" : "18",
    "_lesItems" : [ "S18:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333347 (R4 in line [00598],R238 in line [00598],R239 in line [00598],R240 in line [00598])", "S18:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN333347 (R4 in line [00598],R238 in line [00598],R239 in line [00598],R240 in line [00598])", "S18:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126", "S18:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "19",
    "_lesItems" : [ "S19:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN335896 (R4 in line [00653],R241 in line [00653],R242 in line [00653])", "S19:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN335896 (R4 in line [00653],R241 in line [00653],R242 in line [00653])", "S19:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126", "S19:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "20",
    "_lesItems" : [ "S20:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN340271 (R4 in line [00747],R243 in line [00747],R244 in line [00747])", "S20:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN322491", "S20:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "21",
    "_lesItems" : [ "S21:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeValidatePositionForCurrentLeader@POLYN326089 (R4 in line [00458])", "S21:java.util.Hashtable.get@POLYN420916 (R2 in line [00378])", "S21:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "22",
    "_lesItems" : [ "S22:org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.registerStore@POLYN210802", "S22:org.apache.kafka.streams.processor.internals.GlobalStateManagerImpl.restoreState@POLYN213918", "S22:org.apache.kafka.clients.consumer.KafkaConsumer.seek@POLYN874441", "S22:org.apache.kafka.clients.consumer.KafkaConsumer.seek@POLYN874441", "S22:org.apache.kafka.clients.Metadata.currentLeader@POLYN250565 (R5 in line [00227])", "S22:org.apache.kafka.clients.Metadata.partitionMetadataIfCurrent@POLYN249731 (R5 in line [00208])", "S22:java.util.Hashtable.get@POLYN420916 (R2 in line [00378])", "S22:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "23",
    "_lesItems" : [ "S23:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN368904", "S23:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN383291", "S23:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN545853", "S23:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN546885", "S23:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN554626", "S23:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN554626", "S23:org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN262321 (R5 in line [00450],R42 in line [00450])" ]
  }, {
    "_id" : "24",
    "_lesItems" : [ "S24:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513489", "S24:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513489", "S24:org.apache.kafka.clients.Metadata.bootstrap@POLYN251401 (R5 in line [00238],R80 in line [00238])", "S24:org.apache.kafka.clients.MetadataCache.bootstrap@POLYN188645", "S24:java.util.Map.put@POLYN427326" ]
  }, {
    "_id" : "25",
    "_lesItems" : [ "S25:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN251793 (R5 in line [00249],R98 in line [00249],R99 in line [00249],R100 in line [00249])", "S25:org.apache.kafka.clients.Metadata.update@POLYN252367 (R5 in line [00263],R101 in line [00263],R102 in line [00263],R103 in line [00263],R104 in line [00263])", "S25:org.apache.kafka.common.ClusterResource.clusterId@POLYN147039" ]
  }, {
    "_id" : "26",
    "_lesItems" : [ "S26:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleServerDisconnect@POLYN367293", "S26:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleServerDisconnect@POLYN367293", "S26:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleFailedRequest@POLYN368234", "S26:org.apache.kafka.clients.Metadata.failedUpdate@POLYN264029 (R5 in line [00490],R170 in line [00490])" ]
  }, {
    "_id" : "27",
    "_lesItems" : [ "S27:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN182389", "S27:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN196432", "S27:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN153885 (R0 in line [00067],R1 in line [00067])", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856249", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN856249", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN858603", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN858603", "S27:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN492557", "S27:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN525033", "S27:org.apache.kafka.clients.consumer.internals.Fetcher.FetchResponseMetricAggregator.record@POLYN549452", "S27:org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.recordTopicFetchMetrics@POLYN554501", "S27:org.apache.kafka.common.metrics.Sensor.add@POLYN217504 (R10 in line [00328])", "S27:org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN302143 (R12 in line [00690])", "S27:org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN302143 (R12 in line [00690])", "S27:java.util.Hashtable.putIfAbsent@POLYN446626 (R2 in line [00929])", "S27:java.util.Hashtable.addEntry@POLYN424137", "S27:java.util.Hashtable.rehash@POLYN422252" ]
  }, {
    "_id" : "28",
    "_lesItems" : [ "S28:org.apache.kafka.common.metrics.Metrics.ExpireSensorTask.run@POLYN303609", "S28:org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN295450 (R128 in line [00449],R12 in line [00450])", "S28:org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN295450 (R128 in line [00449],R12 in line [00450])", "S28:java.util.Hashtable.get@POLYN420916 (R2 in line [00378])", "S28:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "29",
    "_lesItems" : [ "S29:org.apache.kafka.common.metrics.Metrics.removeReporter@POLYN301737 (R12 in line [00690],R267 in line [00690])", "S29:org.apache.kafka.common.metrics.JmxReporter.close@POLYN198261 (R222 in line [00208])", "S29:org.apache.kafka.common.metrics.JmxReporter.unregister@POLYN198502" ]
  }, {
    "_id" : "30",
    "_lesItems" : [ "S30:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S30:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S30:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S30:org.apache.kafka.streams.KafkaStreams.closeToError@POLYN557676", "S30:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R22 in line [01832])", "S30:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R22 in line [01832])", "S30:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258552 (R24 in line [00001],R25 in line [00001])", "S30:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258847", "S30:org.apache.kafka.common.utils.Utils.delete@POLYN444301" ]
  }, {
    "_id" : "31",
    "_lesItems" : [ "S31:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S31:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S31:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S31:org.apache.kafka.streams.KafkaStreams.closeToError@POLYN557676", "S31:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R22 in line [01832])", "S31:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R22 in line [01832])", "S31:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258552 (R24 in line [00001],R25 in line [00001])", "S31:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258847", "S31:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258847", "S31:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255547 (R24 in line [00001],R26 in line [00001])", "S31:java.util.Hashtable.remove@POLYN448040 (R2 in line [00953])", "S31:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "32",
    "_lesItems" : [ "S32:org.apache.kafka.streams.TopologyTestDriver.close@POLYN439106", "S32:org.apache.kafka.streams.TopologyTestDriver.close@POLYN439106", "S32:org.apache.kafka.streams.processor.internals.StateDirectory.clean@POLYN256901 (R24 in line [00001])", "S32:org.apache.kafka.streams.processor.internals.StateDirectory.clean@POLYN256901 (R24 in line [00001])", "S32:org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN263353", "S32:org.apache.kafka.streams.processor.internals.StateDirectory.cleanStateAndTaskDirectoriesCalledByUser@POLYN263353", "S32:java.util.Hashtable.get@POLYN420916 (R2 in line [00378])", "S32:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "33",
    "_lesItems" : [ "S33:org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN254342 (R24 in line [00001])", "S33:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN249402 (R169 in line [00001])", "S33:org.apache.kafka.streams.processor.internals.StateDirectory.getTaskDirectoryParentName@POLYN250790", "S33:org.apache.kafka.streams.processor.TaskId.topologyName@POLYN166557" ]
  }, {
    "_id" : "34",
    "_lesItems" : [ "S34:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S34:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S34:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S34:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R33 in line [01039],R27 in line [01051])", "S34:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN546254 (R34 in line [01215])", "S34:java.util.Map.remove@POLYN428612" ]
  }, {
    "_id" : "35",
    "_lesItems" : [ "S35:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S35:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S35:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S35:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R33 in line [01039],R27 in line [01051])", "S35:org.apache.kafka.streams.KafkaStreams.createAndAddStreamThread@POLYN533868", "S35:org.apache.kafka.streams.processor.internals.StreamThread.create@POLYN338520", "S35:org.apache.kafka.streams.processor.internals.ActiveTaskCreator.ActiveTaskCreator@POLYN186430", "S35:org.apache.kafka.streams.processor.internals.metrics.ThreadMetrics.createTaskSensor@POLYN192071", "S35:org.apache.kafka.streams.processor.internals.metrics.ThreadMetrics.invocationRateAndCountSensor@POLYN200315", "S35:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadLevelSensor@POLYN286456 (R31 in line [00257])", "S35:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN286912" ]
  }, {
    "_id" : "36",
    "_lesItems" : [ "S36:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S36:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S36:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S36:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R33 in line [01039],R27 in line [01051])", "S36:org.apache.kafka.streams.KafkaStreams.createAndAddStreamThread@POLYN533868", "S36:org.apache.kafka.common.metrics.Sensor.add@POLYN217504 (R10 in line [00328])", "S36:org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN302143 (R12 in line [00690])", "S36:org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN302143 (R12 in line [00690])", "S36:org.apache.kafka.common.metrics.MetricsReporter.metricChange" ]
  }, {
    "_id" : "37",
    "_lesItems" : [ "S37:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S37:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S37:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S37:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R33 in line [01039],R27 in line [01051])", "S37:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R33 in line [01039],R27 in line [01051])", "S37:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN546254 (R34 in line [01215])", "S37:java.util.Map.remove@POLYN428612" ]
  }, {
    "_id" : "38",
    "_lesItems" : [ "S38:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S38:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S38:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S38:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R33 in line [01039],R27 in line [01051])", "S38:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R33 in line [01039],R27 in line [01051])", "S38:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373462", "S38:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN333609 (R35 in line [00215])", "S38:state==State.PENDING_SHUTDOWN__newState!=State.DEAD" ]
  }, {
    "_id" : "39",
    "_lesItems" : [ "S39:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S39:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S39:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S39:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R33 in line [01039],R27 in line [01051])", "S39:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R33 in line [01039],R27 in line [01051])", "S39:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373462", "S39:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN373822", "S39:org.apache.kafka.streams.processor.internals.TaskManager.shutdown@POLYN372596", "S39:java.util.Hashtable.get@POLYN420916 (R2 in line [00378])", "S39:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "40",
    "_lesItems" : [ "S40:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S40:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S40:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S40:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R33 in line [01039],R27 in line [01051])", "S40:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R33 in line [01039],R27 in line [01051])", "S40:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373462", "S40:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN373822", "S40:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S40:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423320 (R28 in line [01103])", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423320 (R28 in line [01103])", "S40:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.send@POLYN250040", "S40:org.apache.kafka.common.utils.Time.milliseconds@POLYN153117" ]
  }, {
    "_id" : "41",
    "_lesItems" : [ "S41:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S41:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S41:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S41:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R33 in line [01039],R27 in line [01051])", "S41:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R33 in line [01039],R27 in line [01051])", "S41:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373462", "S41:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN373822", "S41:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S41:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S41:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN409282", "S41:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN409282", "S41:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN388705", "S41:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN320838 (R4 in line [00336])", "S41:org.apache.kafka.clients.consumer.internals.SubscriptionState.collectPartitions@POLYN337273" ]
  }, {
    "_id" : "42",
    "_lesItems" : [ "S42:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S42:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S42:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S42:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R33 in line [01039],R27 in line [01051])", "S42:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN536665 (R33 in line [01039],R27 in line [01051])", "S42:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373462", "S42:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN373822", "S42:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelMetrics@POLYN288977 (R32 in line [00310])", "S42:java.util.Hashtable.remove@POLYN476052" ]
  }, {
    "_id" : "43",
    "_lesItems" : [ "S43:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S43:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S43:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S43:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373462", "S43:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN373822", "S43:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S43:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423320 (R28 in line [01103])", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423320 (R28 in line [01103])", "S43:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.send@POLYN250040", "S43:java.util.Hashtable.put@POLYN425722 (R2 in line [00472])", "S43:java.util.Hashtable.addEntry@POLYN424137", "S43:java.util.Hashtable.rehash@POLYN422252" ]
  }, {
    "_id" : "44",
    "_lesItems" : [ "S44:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S44:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S44:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S44:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373462", "S44:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN373822", "S44:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S44:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423320 (R28 in line [01103])", "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423320 (R28 in line [01103])", "S44:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.pollNoWakeup@POLYN256416", "S44:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.poll@POLYN254551", "S44:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.trySend@POLYN263317", "S44:java.io.BufferedReader.ready@POLYN243251 (R9 in line [00443])", "S44:java.io.BufferedReader.ensureOpen@POLYN229854" ]
  }, {
    "_id" : "45",
    "_lesItems" : [ "S45:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S45:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S45:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S45:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373462", "S45:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN373822", "S45:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S45:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423320 (R28 in line [01103])", "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423320 (R28 in line [01103])", "S45:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.pollNoWakeup@POLYN256416", "S45:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.poll@POLYN254551", "S45:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.UnsentRequests.clean@POLYN271930 (R29 in line [00696])" ]
  }, {
    "_id" : "46",
    "_lesItems" : [ "S46:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S46:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S46:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S46:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373462", "S46:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN373822", "S46:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S46:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S46:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423320 (R28 in line [01103])", "S46:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423320 (R28 in line [01103])", "S46:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.pollNoWakeup@POLYN256416", "S46:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.poll@POLYN254551", "S46:org.apache.kafka.clients.Metadata.maybeThrowAnyException@POLYN261579 (R5 in line [00428])", "S46:org.apache.kafka.clients.Metadata.clearErrorsAndMaybeThrowException@POLYN262507", "S46:org.apache.kafka.clients.Metadata.clearRecoverableErrors@POLYN263743" ]
  }, {
    "_id" : "47",
    "_lesItems" : [ "S47:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN373130", "S47:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN373130", "S47:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToClients@POLYN386243", "S47:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.populateClientStatesMap@POLYN390098", "S47:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.fetchCommittedOffsets@POLYN413831", "S47:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetFetchRequest@POLYN434864", "S47:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN416760 (R28 in line [00926])", "S47:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417569 (R28 in line [00947],R55 in line [00947],R56 in line [00947])", "S47:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417569 (R28 in line [00947],R55 in line [00947],R56 in line [00947])", "S47:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.disconnectAsync@POLYN262017", "S47:org.apache.kafka.clients.NetworkClient.wakeup@POLYN346411" ]
  }, {
    "_id" : "48",
    "_lesItems" : [ "S48:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.close@POLYN415878", "S48:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN387354 (R28 in line [00240])", "S48:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN387354 (R28 in line [00240])", "S48:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417215 (R28 in line [00939],R57 in line [00939])" ]
  }, {
    "_id" : "49",
    "_lesItems" : [ "S49:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN229775", "S49:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN229775", "S49:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN390487 (R28 in line [00322],R87 in line [00322])", "S49:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.failureCause@POLYN438816", "S49:java.util.Hashtable.get@POLYN420916 (R2 in line [00378])", "S49:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "50",
    "_lesItems" : [ "S50:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureActiveGroup@POLYN391806", "S50:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN393430", "S50:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN420190 (R28 in line [01017],R137 in line [01017],R138 in line [01017])", "S50:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN419491 (R28 in line [01004],R139 in line [01004],R140 in line [01004])" ]
  }, {
    "_id" : "51",
    "_lesItems" : [ "S51:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417414 (R28 in line [00943],R218 in line [00943])", "S51:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417569 (R28 in line [00947],R55 in line [00947],R56 in line [00947])", "S51:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN417569 (R28 in line [00947],R55 in line [00947],R56 in line [00947])", "S51:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.disconnectAsync@POLYN262017", "S51:org.apache.kafka.clients.NetworkClient.wakeup@POLYN346411" ]
  }, {
    "_id" : "52",
    "_lesItems" : [ "S52:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420488 (R28 in line [01023],R219 in line [01023],R220 in line [01023],R221 in line [01023])", "S52:java.lang.String.format@POLYN906220" ]
  }, {
    "_id" : "53",
    "_lesItems" : [ "S53:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S53:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S53:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S53:org.apache.kafka.streams.KafkaStreams.closeToError@POLYN557676", "S53:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R22 in line [01832])", "S53:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R22 in line [01832])", "S53:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258552 (R24 in line [00001],R25 in line [00001])", "S53:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258847", "S53:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258847", "S53:org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN260613", "S53:org.apache.kafka.streams.processor.internals.StateDirectory.maybeCleanEmptyNamedTopologyDirs@POLYN260613", "S53:java.util.Hashtable.get@POLYN420916 (R2 in line [00378])", "S53:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "54",
    "_lesItems" : [ "S54:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN514609", "S54:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S54:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN512772", "S54:org.apache.kafka.streams.KafkaStreams.closeToError@POLYN557676", "S54:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R22 in line [01832])", "S54:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R22 in line [01832])", "S54:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN258552 (R24 in line [00001],R25 in line [00001])", "S54:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258847", "S54:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN258847", "S54:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255547 (R24 in line [00001],R26 in line [00001])", "S54:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN255547 (R24 in line [00001],R26 in line [00001])", "S54:java.util.Hashtable.remove@POLYN448040 (R2 in line [00953])", "S54:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "55",
    "_lesItems" : [ "S55:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN538873", "S55:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN539949 (R33 in line [01113])", "S55:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373462", "S55:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN333609 (R35 in line [00215])", "S55:state==State.PENDING_SHUTDOWN__newState!=State.DEAD" ]
  }, {
    "_id" : "56",
    "_lesItems" : [ "S56:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN538873", "S56:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN539949 (R33 in line [01113])", "S56:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373462", "S56:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN373822", "S56:org.apache.kafka.streams.processor.internals.TaskManager.shutdown@POLYN372596", "S56:java.util.Hashtable.get@POLYN420916 (R2 in line [00378])", "S56:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "57",
    "_lesItems" : [ "S57:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN538873", "S57:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN539949 (R33 in line [01113])", "S57:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373462", "S57:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN373822", "S57:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S57:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S57:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423320 (R28 in line [01103])", "S57:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN423320 (R28 in line [01103])", "S57:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.send@POLYN250040", "S57:org.apache.kafka.common.utils.Time.milliseconds@POLYN153117" ]
  }, {
    "_id" : "58",
    "_lesItems" : [ "S58:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN538873", "S58:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN539949 (R33 in line [01113])", "S58:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373462", "S58:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN373822", "S58:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S58:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN849264", "S58:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN409282", "S58:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN409282", "S58:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN388705", "S58:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN320838 (R4 in line [00336])", "S58:org.apache.kafka.clients.consumer.internals.SubscriptionState.collectPartitions@POLYN337273" ]
  }, {
    "_id" : "59",
    "_lesItems" : [ "S59:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN538873", "S59:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN539949 (R33 in line [01113])", "S59:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373462", "S59:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN373822", "S59:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelSensors@POLYN288429 (R31 in line [00301])", "S59:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN286912" ]
  }, {
    "_id" : "60",
    "_lesItems" : [ "S60:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN538873", "S60:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN539949 (R33 in line [01113])", "S60:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN373462", "S60:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN373822", "S60:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelMetrics@POLYN288977 (R32 in line [00310])", "S60:java.util.Hashtable.remove@POLYN476052" ]
  }, {
    "_id" : "61",
    "_lesItems" : [ "S61:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN368904", "S61:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN383291", "S61:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN545853", "S61:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN546885", "S61:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN554626", "S61:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN554626", "S61:org.apache.kafka.clients.producer.internals.ProducerMetadata.requestUpdateForTopic@POLYN161685 (R39 in line [00075])", "S61:org.apache.kafka.clients.Metadata.requestUpdateForNewTopics@POLYN247054 (R5 in line [00150])" ]
  }, {
    "_id" : "62",
    "_lesItems" : [ "S62:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN368904", "S62:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN383291", "S62:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN545853", "S62:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN546885", "S62:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN554626", "S62:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN554626", "S62:org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN163256 (R39 in line [00116],R40 in line [00116],R41 in line [00116])", "S62:org.apache.kafka.common.utils.Time.milliseconds@POLYN153117" ]
  }, {
    "_id" : "63",
    "_lesItems" : [ "S63:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN465669", "S63:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S63:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S63:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S63:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495", "S63:org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161215 (R39 in line [00067],R62 in line [00067],R63 in line [00067])", "S63:org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN161215 (R39 in line [00067],R62 in line [00067],R63 in line [00067])", "S63:org.apache.kafka.clients.Metadata.requestUpdateForNewTopics@POLYN247054 (R5 in line [00150])" ]
  }, {
    "_id" : "64",
    "_lesItems" : [ "S64:org.apache.kafka.clients.producer.internals.ProducerMetadata.retainTopic@POLYN162365 (R39 in line [00098])", "S64:java.util.Hashtable.get@POLYN420916 (R2 in line [00378])", "S64:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "65",
    "_lesItems" : [ "S65:org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164028 (R39 in line [00130],R245 in line [00130],R246 in line [00130],R247 in line [00130],R248 in line [00130])", "S65:org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN164028 (R39 in line [00130],R245 in line [00130],R246 in line [00130],R247 in line [00130],R248 in line [00130])", "S65:java.util.Hashtable.remove@POLYN448040 (R2 in line [00953])", "S65:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "66",
    "_lesItems" : [ "S66:org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN164641 (R39 in line [00145],R296 in line [00145])", "S66:org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN164641 (R39 in line [00145],R296 in line [00145])", "S66:java.lang.Object.notifyAll@POLYN294461" ]
  }, {
    "_id" : "67",
    "_lesItems" : [ "S67:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN368904", "S67:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN383291", "S67:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN545853", "S67:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN546885", "S67:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN546885", "S67:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN372050 (R46 in line [00327],R47 in line [00327])", "S67:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN400070" ]
  }, {
    "_id" : "68",
    "_lesItems" : [ "S68:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN368904", "S68:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN383291", "S68:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN545853", "S68:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN546885", "S68:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN546885", "S68:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN384373 (R46 in line [00610],R48 in line [00610])", "S68:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN374859 (R46 in line [00397],R49 in line [00397])", "S68:org.apache.kafka.clients.producer.internals.TransactionalRequestResult.fail@POLYN148475" ]
  }, {
    "_id" : "69",
    "_lesItems" : [ "S69:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN368904", "S69:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN383291", "S69:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN545853", "S69:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN546885", "S69:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN546885", "S69:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN384373 (R46 in line [00610],R48 in line [00610])", "S69:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374373 (R46 in line [00386],R50 in line [00386])", "S69:currentState==State.ABORTING_TRANSACTION" ]
  }, {
    "_id" : "70",
    "_lesItems" : [ "S70:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN465669", "S70:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S70:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S70:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN389337 (R46 in line [00718])", "S70:org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN377606 (R46 in line [00468],R58 in line [00468])" ]
  }, {
    "_id" : "71",
    "_lesItems" : [ "S71:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN465669", "S71:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S71:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S71:org.apache.kafka.clients.producer.internals.TransactionManager.bumpIdempotentEpochAndResetIdIfNeeded@POLYN378750 (R46 in line [00491])", "S71:org.apache.kafka.clients.producer.internals.TransactionManager.bumpIdempotentProducerEpoch@POLYN377806", "S71:org.apache.kafka.clients.producer.internals.TransactionManager.bumpIdempotentProducerEpoch@POLYN377806", "S71:java.util.Hashtable.clear@POLYN429624 (R2 in line [00545])" ]
  }, {
    "_id" : "72",
    "_lesItems" : [ "S72:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN465669", "S72:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S72:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S72:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S72:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN393355 (R46 in line [00810],R60 in line [00810])", "S72:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.fatalError@POLYN406610", "S72:org.apache.kafka.clients.producer.internals.TransactionalRequestResult.fail@POLYN148475" ]
  }, {
    "_id" : "73",
    "_lesItems" : [ "S73:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN465669", "S73:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S73:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S73:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S73:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495", "S73:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN353232", "S73:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN348729 (R64 in line [00799])", "S73:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN375869 (R46 in line [00426],R65 in line [00426])", "S73:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN151645", "S73:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN141900" ]
  }, {
    "_id" : "74",
    "_lesItems" : [ "S74:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN465669", "S74:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S74:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S74:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S74:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495", "S74:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN353232", "S74:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN348729 (R64 in line [00799])", "S74:org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN379977 (R46 in line [00521],R66 in line [00521],R67 in line [00521])", "S74:org.apache.kafka.clients.producer.internals.TransactionManager.sequenceNumber@POLYN379611 (R46 in line [00510])", "S74:org.apache.kafka.clients.producer.internals.TxnPartitionMap.getOrCreate@POLYN150310" ]
  }, {
    "_id" : "75",
    "_lesItems" : [ "S75:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN465669", "S75:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S75:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S75:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S75:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495", "S75:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN329177", "S75:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384968 (R46 in line [00624],R69 in line [00624],R70 in line [00624],R71 in line [00624])", "S75:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN384373 (R46 in line [00610],R48 in line [00610])", "S75:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN374859 (R46 in line [00397],R49 in line [00397])", "S75:org.apache.kafka.clients.producer.internals.TransactionalRequestResult.fail@POLYN148475" ]
  }, {
    "_id" : "76",
    "_lesItems" : [ "S76:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN465669", "S76:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S76:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S76:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S76:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495", "S76:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN329177", "S76:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384968 (R46 in line [00624],R69 in line [00624],R70 in line [00624],R71 in line [00624])", "S76:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN381794 (R46 in line [00557],R72 in line [00557])", "S76:org.apache.kafka.clients.producer.internals.TransactionManager.hasInflightBatches@POLYN388082 (R46 in line [00692])" ]
  }, {
    "_id" : "77",
    "_lesItems" : [ "S77:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955", "S77:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN312955", "S77:org.apache.kafka.clients.producer.internals.Sender.maybeFindCoordinatorAndRetry@POLYN316642", "S77:org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN393177 (R46 in line [00805],R126 in line [00805])", "S77:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.setRetry@POLYN409469" ]
  }, {
    "_id" : "78",
    "_lesItems" : [ "S78:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318465", "S78:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318465", "S78:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN325881", "S78:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN383821 (R46 in line [00599],R146 in line [00599],R147 in line [00599])", "S78:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateLastAckedSequence@POLYN382086" ]
  }, {
    "_id" : "79",
    "_lesItems" : [ "S79:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN368904", "S79:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN383291", "S79:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN545853", "S79:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN546885", "S79:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN546885", "S79:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN372050 (R46 in line [00327],R47 in line [00327])", "S79:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN372050 (R46 in line [00327],R47 in line [00327])", "S79:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN400070" ]
  }, {
    "_id" : "80",
    "_lesItems" : [ "S80:org.apache.kafka.connect.storage.KafkaConfigBackingStore.putConnectorConfig@POLYN368904", "S80:org.apache.kafka.connect.storage.KafkaConfigBackingStore.sendPrivileged@POLYN383291", "S80:org.apache.kafka.clients.producer.KafkaProducer.send@POLYN545853", "S80:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN546885", "S80:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN546885", "S80:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN384373 (R46 in line [00610],R48 in line [00610])", "S80:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374373 (R46 in line [00386],R50 in line [00386])", "S80:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN374373 (R46 in line [00386],R50 in line [00386])", "S80:currentState==State.ABORTING_TRANSACTION" ]
  }, {
    "_id" : "81",
    "_lesItems" : [ "S81:org.apache.kafka.streams.state.internals.ThreadCache.putIfAbsent@POLYN194235", "S81:org.apache.kafka.streams.state.internals.ThreadCache.getOrCreateCache@POLYN200402 (R51 in line [00285])", "S81:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193821", "S81:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555 (R52 in line [00157],R53 in line [00157],R54 in line [00157])", "S81:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143222" ]
  }, {
    "_id" : "82",
    "_lesItems" : [ "S82:org.apache.kafka.streams.state.internals.ThreadCache.putIfAbsent@POLYN194235", "S82:org.apache.kafka.streams.state.internals.ThreadCache.getOrCreateCache@POLYN200402 (R51 in line [00285])", "S82:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193821", "S82:org.apache.kafka.streams.state.internals.ThreadCache.maybeEvict@POLYN199533", "S82:org.apache.kafka.streams.state.internals.NamedCache.evict@POLYN196872 (R52 in line [00235])", "S82:org.apache.kafka.streams.state.internals.NamedCache.flush@POLYN191208", "S82:org.apache.kafka.streams.state.internals.NamedCache.flush@POLYN191208", "S82:org.apache.kafka.common.metrics.Sensor.add@POLYN217504 (R10 in line [00328])", "S82:org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN302143 (R12 in line [00690])", "S82:org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN302143 (R12 in line [00690])", "S82:org.apache.kafka.common.metrics.MetricsReporter.metricChange" ]
  }, {
    "_id" : "83",
    "_lesItems" : [ "S83:org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN197813 (R52 in line [00256],R134 in line [00256])", "S83:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555 (R52 in line [00157],R53 in line [00157],R54 in line [00157])", "S83:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143222" ]
  }, {
    "_id" : "84",
    "_lesItems" : [ "S84:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN199240 (R51 in line [00254],R257 in line [00254])", "S84:org.apache.kafka.streams.state.internals.NamedCache.close@POLYN202156 (R52 in line [00345])", "S84:java.util.Hashtable.clear@POLYN429624 (R2 in line [00545])" ]
  }, {
    "_id" : "85",
    "_lesItems" : [ "S85:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN199240 (R51 in line [00254],R257 in line [00254])", "S85:org.apache.kafka.streams.state.internals.NamedCache.close@POLYN202156 (R52 in line [00345])", "S85:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllCacheLevelSensors@POLYN297069 (R258 in line [00462])", "S85:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheSensorPrefix@POLYN297720" ]
  }, {
    "_id" : "86",
    "_lesItems" : [ "S86:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190309 (R51 in line [00075],R117 in line [00075])", "S86:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190309 (R51 in line [00075],R117 in line [00075])", "S86:org.apache.kafka.common.utils.CircularIterator.next@POLYN155440", "S86:org.apache.kafka.common.utils.CircularIterator.advance@POLYN155780", "S86:java.util.Hashtable.next@POLYN475832" ]
  }, {
    "_id" : "87",
    "_lesItems" : [ "S87:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN199240 (R51 in line [00254],R257 in line [00254])", "S87:java.util.Hashtable.remove@POLYN476052" ]
  }, {
    "_id" : "88",
    "_lesItems" : [ "S88:org.apache.kafka.streams.state.internals.ThreadCache.putIfAbsent@POLYN194235", "S88:org.apache.kafka.streams.state.internals.ThreadCache.getOrCreateCache@POLYN200402 (R51 in line [00285])", "S88:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193821", "S88:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555 (R52 in line [00157],R53 in line [00157],R54 in line [00157])", "S88:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555 (R52 in line [00157],R53 in line [00157],R54 in line [00157])", "S88:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN143222" ]
  }, {
    "_id" : "89",
    "_lesItems" : [ "S89:org.apache.kafka.streams.state.internals.ThreadCache.putIfAbsent@POLYN194235", "S89:org.apache.kafka.streams.state.internals.ThreadCache.getOrCreateCache@POLYN200402 (R51 in line [00285])", "S89:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN193821", "S89:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555 (R52 in line [00157],R53 in line [00157],R54 in line [00157])", "S89:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN193555 (R52 in line [00157],R53 in line [00157],R54 in line [00157])", "S89:org.apache.kafka.common.metrics.Sensor.add@POLYN217504 (R10 in line [00328])", "S89:org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN302143 (R12 in line [00690])", "S89:org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN302143 (R12 in line [00690])", "S89:org.apache.kafka.common.metrics.MetricsReporter.metricChange" ]
  }, {
    "_id" : "90",
    "_lesItems" : [ "S90:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN465669", "S90:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S90:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S90:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S90:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN393355 (R46 in line [00810],R60 in line [00810])", "S90:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.fatalError@POLYN406610", "S90:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN374859 (R46 in line [00397],R49 in line [00397])", "S90:org.apache.kafka.clients.producer.internals.TransactionalRequestResult.fail@POLYN148475" ]
  }, {
    "_id" : "91",
    "_lesItems" : [ "S91:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN465669", "S91:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S91:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S91:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S91:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495", "S91:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN353232", "S91:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN348729 (R64 in line [00799])", "S91:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN375869 (R46 in line [00426],R65 in line [00426])", "S91:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN375869 (R46 in line [00426],R65 in line [00426])", "S91:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN151645", "S91:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN141900" ]
  }, {
    "_id" : "92",
    "_lesItems" : [ "S92:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN465669", "S92:org.apache.kafka.clients.producer.internals.Sender.run@POLYN305098", "S92:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S92:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN307305", "S92:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN308495", "S92:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN329177", "S92:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN384968 (R46 in line [00624],R69 in line [00624],R70 in line [00624],R71 in line [00624])", "S92:org.apache.kafka.clients.producer.internals.TransactionManager.resetSequenceForPartition@POLYN377228", "S92:java.util.Hashtable.remove@POLYN448040 (R2 in line [00953])", "S92:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "93",
    "_lesItems" : [ "S93:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232624 (R76 in line [00309],R77 in line [00309],R78 in line [00309])", "S93:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN161442" ]
  }, {
    "_id" : "94",
    "_lesItems" : [ "S94:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN228173 (R76 in line [00242],R118 in line [00242])", "S94:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN228173 (R76 in line [00242],R118 in line [00242])", "S94:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN238903", "S94:org.apache.kafka.connect.storage.ClusterConfigState.allTaskConfigs@POLYN200708", "S94:java.util.Hashtable.getValue@POLYN471191" ]
  }, {
    "_id" : "95",
    "_lesItems" : [ "S95:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226295 (R76 in line [00201],R120 in line [00201],R121 in line [00201],R122 in line [00201],R123 in line [00201],R124 in line [00201])", "S95:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN433418", "S95:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN430150", "S95:java.util.Hashtable.get@POLYN420916 (R2 in line [00378])", "S95:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "96",
    "_lesItems" : [ "S96:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN221801 (R76 in line [00105])", "S96:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN238423", "S96:org.apache.kafka.connect.storage.ClusterConfigState.tasks@POLYN202655", "S96:java.util.Hashtable.get@POLYN420916 (R2 in line [00378])", "S96:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "97",
    "_lesItems" : [ "S97:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN221801 (R76 in line [00105])", "S97:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN433418", "S97:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN430150", "S97:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN430150", "S97:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN218200 (R79 in line [00256])", "S97:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN218200 (R79 in line [00256])", "S97:java.lang.Object.notify@POLYN293724" ]
  }, {
    "_id" : "98",
    "_lesItems" : [ "S98:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN224314 (R76 in line [00161],R130 in line [00161],R131 in line [00161])", "S98:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN238423", "S98:org.apache.kafka.connect.storage.ClusterConfigState.tasks@POLYN202655", "S98:java.util.Hashtable.get@POLYN420916 (R2 in line [00378])", "S98:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "99",
    "_lesItems" : [ "S99:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN230008 (R76 in line [00274],R132 in line [00274],R133 in line [00274])", "S99:org.apache.kafka.connect.storage.ClusterConfigState.taskConfig@POLYN199759", "S99:java.util.Hashtable.get@POLYN420916 (R2 in line [00378])", "S99:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "100",
    "_lesItems" : [ "S100:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN231421 (R76 in line [00291],R167 in line [00291],R168 in line [00291])", "S100:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN433418", "S100:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN430150", "S100:java.util.Hashtable.get@POLYN420916 (R2 in line [00378])", "S100:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "101",
    "_lesItems" : [ "S101:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN222718 (R76 in line [00133],R301 in line [00133])", "S101:org.apache.kafka.connect.util.Callback.onCompletion" ]
  }, {
    "_id" : "102",
    "_lesItems" : [ "S102:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN222949 (R76 in line [00138],R302 in line [00138],R303 in line [00138])", "S102:org.apache.kafka.connect.util.Callback.onCompletion" ]
  }, {
    "_id" : "103",
    "_lesItems" : [ "S103:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN225382 (R76 in line [00181],R304 in line [00181],R305 in line [00181],R306 in line [00181],R307 in line [00181])", "S103:org.apache.kafka.connect.util.Callback.onCompletion" ]
  }, {
    "_id" : "104",
    "_lesItems" : [ "S104:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN228547 (R76 in line [00251],R308 in line [00251],R309 in line [00251])", "S104:org.apache.kafka.connect.util.Callback.onCompletion" ]
  }, {
    "_id" : "105",
    "_lesItems" : [ "S105:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232624 (R76 in line [00309],R77 in line [00309],R78 in line [00309])", "S105:java.util.Hashtable.get@POLYN420916 (R2 in line [00378])", "S105:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "106",
    "_lesItems" : [ "S106:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232624 (R76 in line [00309],R77 in line [00309],R78 in line [00309])", "S106:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN433418", "S106:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN430150", "S106:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN430150", "S106:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN218200 (R79 in line [00256])", "S106:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN218200 (R79 in line [00256])", "S106:java.lang.Object.notify@POLYN293724" ]
  }, {
    "_id" : "107",
    "_lesItems" : [ "S107:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232624 (R76 in line [00309],R77 in line [00309],R78 in line [00309])", "S107:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN232624 (R76 in line [00309],R77 in line [00309],R78 in line [00309])", "S107:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN161442" ]
  }, {
    "_id" : "108",
    "_lesItems" : [ "S108:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513489", "S108:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513489", "S108:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029 (R81 in line [00060],R82 in line [00060],R83 in line [00060],R84 in line [00060],R85 in line [00060])", "S108:org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN162927" ]
  }, {
    "_id" : "109",
    "_lesItems" : [ "S109:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513489", "S109:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN513489", "S109:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029 (R81 in line [00060],R82 in line [00060],R83 in line [00060],R84 in line [00060],R85 in line [00060])", "S109:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN161029 (R81 in line [00060],R82 in line [00060],R83 in line [00060],R84 in line [00060],R85 in line [00060])", "S109:org.apache.kafka.common.utils.AppInfoParser.registerMetrics@POLYN162927" ]
  }, {
    "_id" : "110",
    "_lesItems" : [ "S110:org.apache.kafka.streams.state.internals.CachingWindowStore.init@POLYN231252", "S110:org.apache.kafka.streams.state.internals.CachingWindowStore.initInternal@POLYN232194", "S110:org.apache.kafka.streams.state.internals.CachingWindowStore.putAndMaybeForward@POLYN232978", "S110:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235768 (R94 in line [00156],R95 in line [00156],R96 in line [00156],R97 in line [00156])", "S110:org.apache.kafka.streams.state.internals.WrappedStateStore.validateStoreOpen@POLYN158435" ]
  }, {
    "_id" : "111",
    "_lesItems" : [ "S111:org.apache.kafka.streams.state.internals.CachingWindowStore.init@POLYN231252", "S111:org.apache.kafka.streams.state.internals.CachingWindowStore.initInternal@POLYN232194", "S111:org.apache.kafka.streams.state.internals.CachingWindowStore.putAndMaybeForward@POLYN232978", "S111:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235768 (R94 in line [00156],R95 in line [00156],R96 in line [00156],R97 in line [00156])", "S111:org.apache.kafka.streams.state.internals.WindowKeySchema.toStoreKeyBinary@POLYN188040", "S111:java.util.Hashtable.put@POLYN425722 (R2 in line [00472])", "S111:java.util.Hashtable.addEntry@POLYN424137", "S111:java.util.Hashtable.rehash@POLYN422252" ]
  }, {
    "_id" : "112",
    "_lesItems" : [ "S112:org.apache.kafka.streams.state.internals.CachingWindowStore.init@POLYN231252", "S112:org.apache.kafka.streams.state.internals.CachingWindowStore.initInternal@POLYN232194", "S112:org.apache.kafka.streams.state.internals.CachingWindowStore.putAndMaybeForward@POLYN232978", "S112:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235768 (R94 in line [00156],R95 in line [00156],R96 in line [00156],R97 in line [00156])", "S112:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN235768 (R94 in line [00156],R95 in line [00156],R96 in line [00156],R97 in line [00156])", "S112:org.apache.kafka.streams.state.internals.WrappedStateStore.validateStoreOpen@POLYN158435" ]
  }, {
    "_id" : "113",
    "_lesItems" : [ "S113:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN251793 (R5 in line [00249],R98 in line [00249],R99 in line [00249],R100 in line [00249])", "S113:org.apache.kafka.clients.Metadata.update@POLYN252367 (R5 in line [00263],R101 in line [00263],R102 in line [00263],R103 in line [00263],R104 in line [00263])", "S113:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN255371", "S113:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN255371", "S113:java.util.Hashtable.put@POLYN425722 (R2 in line [00472])", "S113:java.util.Hashtable.addEntry@POLYN424137", "S113:java.util.Hashtable.rehash@POLYN422252" ]
  }, {
    "_id" : "114",
    "_lesItems" : [ "S114:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN251793 (R5 in line [00249],R98 in line [00249],R99 in line [00249],R100 in line [00249])", "S114:org.apache.kafka.clients.Metadata.update@POLYN252367 (R5 in line [00263],R101 in line [00263],R102 in line [00263],R103 in line [00263],R104 in line [00263])", "S114:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN255371", "S114:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN255371", "S114:org.apache.kafka.clients.Metadata.requestUpdate@POLYN246887 (R5 in line [00145])" ]
  }, {
    "_id" : "115",
    "_lesItems" : [ "S115:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN251793 (R5 in line [00249],R98 in line [00249],R99 in line [00249],R100 in line [00249])", "S115:org.apache.kafka.clients.Metadata.update@POLYN252367 (R5 in line [00263],R101 in line [00263],R102 in line [00263],R103 in line [00263],R104 in line [00263])", "S115:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN255371", "S115:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN255371", "S115:org.apache.kafka.common.requests.MetadataResponse.brokersById@POLYN221073", "S115:org.apache.kafka.common.requests.MetadataResponse.holder@POLYN220466 (R105 in line [00001])" ]
  }, {
    "_id" : "116",
    "_lesItems" : [ "S116:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221034", "S116:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221332 (R106 in line [00104],R107 in line [00104])", "S116:org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN287551" ]
  }, {
    "_id" : "117",
    "_lesItems" : [ "S117:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221034", "S117:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221332 (R106 in line [00104],R107 in line [00104])", "S117:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN224172", "S117:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.getTopologyByName@POLYN223401 (R106 in line [00149])" ]
  }, {
    "_id" : "118",
    "_lesItems" : [ "S118:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221034", "S118:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN221332 (R106 in line [00104],R107 in line [00104])", "S118:org.apache.kafka.streams.KafkaStreams.start@POLYN550767 (R22 in line [01832])", "S118:org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN287551" ]
  }, {
    "_id" : "119",
    "_lesItems" : [ "S119:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN253275", "S119:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN255964", "S119:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258997 (R109 in line [00260],R110 in line [00260],R111 in line [00260],R112 in line [00260])", "S119:org.apache.kafka.streams.state.internals.WrappedStateStore.validateStoreOpen@POLYN158435" ]
  }, {
    "_id" : "120",
    "_lesItems" : [ "S120:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN253275", "S120:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN255964", "S120:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258997 (R109 in line [00260],R110 in line [00260],R111 in line [00260],R112 in line [00260])", "S120:org.apache.kafka.streams.state.internals.PrefixedWindowKeySchemas.TimeFirstWindowKeySchema.toStoreKeyBinary@POLYN215082", "S120:java.util.Hashtable.put@POLYN425722 (R2 in line [00472])", "S120:java.util.Hashtable.addEntry@POLYN424137", "S120:java.util.Hashtable.rehash@POLYN422252" ]
  }, {
    "_id" : "121",
    "_lesItems" : [ "S121:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN253275", "S121:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN255964", "S121:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258997 (R109 in line [00260],R110 in line [00260],R111 in line [00260],R112 in line [00260])", "S121:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN258997 (R109 in line [00260],R110 in line [00260],R111 in line [00260],R112 in line [00260])", "S121:org.apache.kafka.streams.state.internals.WrappedStateStore.validateStoreOpen@POLYN158435" ]
  }, {
    "_id" : "122",
    "_lesItems" : [ "S122:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190309 (R51 in line [00075],R117 in line [00075])", "S122:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN190309 (R51 in line [00075],R117 in line [00075])", "S122:org.apache.kafka.streams.state.internals.NamedCache.evict@POLYN196872 (R52 in line [00235])", "S122:org.apache.kafka.streams.state.internals.NamedCache.remove@POLYN195806" ]
  }, {
    "_id" : "123",
    "_lesItems" : [ "S123:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN228173 (R76 in line [00242],R118 in line [00242])", "S123:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN228173 (R76 in line [00242],R118 in line [00242])", "S123:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN238903", "S123:org.apache.kafka.connect.storage.ClusterConfigState.allTaskConfigs@POLYN200708", "S123:org.apache.kafka.connect.runtime.WorkerConfigTransformer.transform@POLYN158160", "S123:org.apache.kafka.connect.runtime.WorkerConfigTransformer.transform@POLYN158160", "S123:org.apache.kafka.connect.runtime.WorkerConfigTransformer.scheduleReload@POLYN159760", "S123:java.util.Hashtable.get@POLYN420916 (R2 in line [00378])", "S123:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "124",
    "_lesItems" : [ "S124:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN228173 (R76 in line [00242],R118 in line [00242])", "S124:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN228173 (R76 in line [00242],R118 in line [00242])", "S124:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN238903", "S124:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.recomputeTaskConfigs@POLYN236122", "S124:org.apache.kafka.connect.runtime.Worker.connectorTaskConfigs@POLYN427686", "S124:org.apache.kafka.connect.runtime.Worker.connectorTaskConfigs@POLYN427686", "S124:org.apache.kafka.common.metrics.Sensor.add@POLYN217504 (R10 in line [00328])", "S124:org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN302143 (R12 in line [00690])", "S124:org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN302143 (R12 in line [00690])", "S124:org.apache.kafka.common.metrics.MetricsReporter.metricChange" ]
  }, {
    "_id" : "125",
    "_lesItems" : [ "S125:org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN182968 (R119 in line [00166])", "S125:org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN182968 (R119 in line [00166])", "S125:java.util.Hashtable.get@POLYN420916 (R2 in line [00378])", "S125:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "126",
    "_lesItems" : [ "S126:org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN182968 (R119 in line [00166])", "S126:org.apache.kafka.common.metrics.internals.IntGaugeSuite.increment@POLYN182968 (R119 in line [00166])", "S126:org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN185374", "S126:org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN185374", "S126:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN300599 (R12 in line [00690])", "S126:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN300599 (R12 in line [00690])", "S126:org.apache.kafka.common.metrics.MetricsReporter.metricRemoval" ]
  }, {
    "_id" : "127",
    "_lesItems" : [ "S127:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN186656 (R119 in line [00235],R249 in line [00235])", "S127:org.apache.kafka.common.metrics.internals.IntGaugeSuite.closed" ]
  }, {
    "_id" : "128",
    "_lesItems" : [ "S128:org.apache.kafka.common.metrics.Metrics.ExpireSensorTask.run@POLYN303609", "S128:org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN295450 (R128 in line [00449],R12 in line [00450])", "S128:java.util.Hashtable.get@POLYN420916 (R2 in line [00378])", "S128:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "129",
    "_lesItems" : [ "S129:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231332 (R141 in line [00163])", "S129:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231566 (R141 in line [00168],R142 in line [00175])", "S129:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "130",
    "_lesItems" : [ "S130:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN402642", "S130:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN408732", "S130:org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN242549 (R141 in line [00389],R179 in line [00389],R180 in line [00389])", "S130:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "131",
    "_lesItems" : [ "S131:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN402642", "S131:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN408732", "S131:org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN241244 (R141 in line [00357],R181 in line [00357])", "S131:java.util.Map.putAll" ]
  }, {
    "_id" : "132",
    "_lesItems" : [ "S132:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN402642", "S132:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN408732", "S132:org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN241668 (R141 in line [00367],R182 in line [00367])", "S132:java.util.Map.putAll" ]
  }, {
    "_id" : "133",
    "_lesItems" : [ "S133:org.apache.kafka.clients.consumer.MockConsumer.position@POLYN240134 (R141 in line [00334])", "S133:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN330545 (R4 in line [00539])", "S133:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126", "S133:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "134",
    "_lesItems" : [ "S134:org.apache.kafka.clients.consumer.MockConsumer.position@POLYN240134 (R141 in line [00334])", "S134:org.apache.kafka.clients.consumer.MockConsumer.updateFetchPosition@POLYN247073", "S134:org.apache.kafka.clients.consumer.MockConsumer.resetOffsetPosition@POLYN247692", "S134:java.util.Hashtable.get@POLYN420916 (R2 in line [00378])", "S134:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "135",
    "_lesItems" : [ "S135:org.apache.kafka.clients.consumer.MockConsumer.rebalance@POLYN228133 (R141 in line [00096],R192 in line [00096])", "S135:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN318181 (R4 in line [00275],R30 in line [00275])", "S135:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "136",
    "_lesItems" : [ "S136:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN228742 (R141 in line [00113],R193 in line [00113],R194 in line [00113])", "S136:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "137",
    "_lesItems" : [ "S137:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN237783 (R141 in line [00280])", "S137:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN238106", "S137:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN237211 (R141 in line [00264],R195 in line [00264])", "S137:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN236595 (R141 in line [00254],R196 in line [00254],R197 in line [00254])", "S137:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "138",
    "_lesItems" : [ "S138:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN237936 (R141 in line [00285],R198 in line [00285])", "S138:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN238106", "S138:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN237211 (R141 in line [00264],R195 in line [00264])", "S138:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN236595 (R141 in line [00254],R196 in line [00254],R197 in line [00254])", "S138:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "139",
    "_lesItems" : [ "S139:org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN238316 (R141 in line [00295],R207 in line [00295],R208 in line [00295])", "S139:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "140",
    "_lesItems" : [ "S140:org.apache.kafka.clients.consumer.MockConsumer.seekToBeginning@POLYN241010 (R141 in line [00352],R214 in line [00352])", "S140:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "141",
    "_lesItems" : [ "S141:org.apache.kafka.clients.consumer.MockConsumer.seekToEnd@POLYN241434 (R141 in line [00362],R215 in line [00362])", "S141:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "142",
    "_lesItems" : [ "S142:org.apache.kafka.clients.consumer.MockConsumer.pause@POLYN242824 (R141 in line [00395],R216 in line [00395])", "S142:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN339974 (R4 in line [00739],R150 in line [00739])", "S142:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN339974 (R4 in line [00739],R150 in line [00739])", "S142:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126", "S142:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "143",
    "_lesItems" : [ "S143:org.apache.kafka.clients.consumer.MockConsumer.resume@POLYN243146 (R141 in line [00403],R217 in line [00403])", "S143:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN340125 (R4 in line [00743],R152 in line [00743])", "S143:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN340125 (R4 in line [00743],R152 in line [00743])", "S143:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126", "S143:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "144",
    "_lesItems" : [ "S144:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN228535 (R141 in line [00108],R262 in line [00108])", "S144:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230359 (R141 in line [00141],R263 in line [00141],R264 in line [00141])", "S144:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "145",
    "_lesItems" : [ "S145:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230173 (R141 in line [00136],R265 in line [00136])", "S145:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230359 (R141 in line [00141],R263 in line [00141],R264 in line [00141])", "S145:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "146",
    "_lesItems" : [ "S146:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237417 (R141 in line [00269])", "S146:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237542 (R141 in line [00274],R266 in line [00274])", "S146:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "147",
    "_lesItems" : [ "S147:org.apache.kafka.clients.consumer.MockConsumer.assign@POLYN230737 (R141 in line [00148],R291 in line [00148])", "S147:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "148",
    "_lesItems" : [ "S148:org.apache.kafka.clients.consumer.MockConsumer.addRecord@POLYN235241 (R141 in line [00227],R292 in line [00227])", "S148:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "149",
    "_lesItems" : [ "S149:org.apache.kafka.clients.consumer.MockConsumer.setException@POLYN236186 (R141 in line [00241],R293 in line [00241])", "S149:org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN236317 (R141 in line [00245],R294 in line [00245])" ]
  }, {
    "_id" : "150",
    "_lesItems" : [ "S150:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN245678", "S150:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN245840 (R141 in line [00455],R334 in line [00455])" ]
  }, {
    "_id" : "151",
    "_lesItems" : [ "S151:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231332 (R141 in line [00163])", "S151:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231566 (R141 in line [00168],R142 in line [00175])", "S151:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231566 (R141 in line [00168],R142 in line [00175])", "S151:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "152",
    "_lesItems" : [ "S152:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231332 (R141 in line [00163])", "S152:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231566 (R141 in line [00168],R142 in line [00175])", "S152:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231566 (R141 in line [00168],R142 in line [00175])", "S152:java.util.Hashtable.get@POLYN420916 (R2 in line [00378])", "S152:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "153",
    "_lesItems" : [ "S153:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231332 (R141 in line [00163])", "S153:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231566 (R141 in line [00168],R142 in line [00175])", "S153:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN231566 (R141 in line [00168],R142 in line [00175])", "S153:org.apache.kafka.clients.consumer.MockConsumer.updateFetchPosition@POLYN247073", "S153:org.apache.kafka.clients.consumer.internals.SubscriptionState.isOffsetResetNeeded@POLYN336308 (R4 in line [00663])", "S153:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN322126", "S153:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "154",
    "_lesItems" : [ "S154:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318465", "S154:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN318465", "S154:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN325881", "S154:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN383821 (R46 in line [00599],R146 in line [00599],R147 in line [00599])", "S154:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN381794 (R46 in line [00557],R72 in line [00557])", "S154:org.apache.kafka.clients.producer.internals.TransactionManager.hasInflightBatches@POLYN388082 (R46 in line [00692])" ]
  }, {
    "_id" : "155",
    "_lesItems" : [ "S155:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165236 (R158 in line [00139],R159 in line [00139])", "S155:org.apache.kafka.snapshot.RecordsSnapshotReader.next@POLYN154951", "S155:java.util.Hashtable.get@POLYN420916 (R2 in line [00378])", "S155:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "156",
    "_lesItems" : [ "S156:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN162770 (R158 in line [00076],R212 in line [00076])", "S156:java.util.Hashtable.next@POLYN475832" ]
  }, {
    "_id" : "157",
    "_lesItems" : [ "S157:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN166527 (R158 in line [00169],R313 in line [00169])", "S157:org.apache.kafka.raft.QuorumState.isLeader@POLYN231945" ]
  }, {
    "_id" : "158",
    "_lesItems" : [ "S158:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165236 (R158 in line [00139],R159 in line [00139])", "S158:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN165236 (R158 in line [00139],R159 in line [00139])", "S158:org.apache.kafka.snapshot.RecordsSnapshotReader.next@POLYN154951", "S158:java.util.Hashtable.get@POLYN420916 (R2 in line [00378])", "S158:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "159",
    "_lesItems" : [ "S159:org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetIfNeeded@POLYN497795", "S159:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323236 (R4 in line [00392],R171 in line [00392],R172 in line [00392],R173 in line [00392])", "S159:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN323236 (R4 in line [00392],R171 in line [00392],R172 in line [00392],R173 in line [00392])", "S159:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN322491", "S159:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "160",
    "_lesItems" : [ "S160:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163428 (R202 in line [00095],R203 in line [00095])", "S160:org.apache.kafka.common.utils.Time.milliseconds@POLYN153117" ]
  }, {
    "_id" : "161",
    "_lesItems" : [ "S161:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163428 (R202 in line [00095],R203 in line [00095])", "S161:java.util.Hashtable.clear@POLYN429624 (R2 in line [00545])" ]
  }, {
    "_id" : "162",
    "_lesItems" : [ "S162:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163428 (R202 in line [00095],R203 in line [00095])", "S162:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN163428 (R202 in line [00095],R203 in line [00095])", "S162:org.apache.kafka.common.utils.Time.milliseconds@POLYN153117" ]
  }, {
    "_id" : "163",
    "_lesItems" : [ "S163:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN162770 (R158 in line [00076],R212 in line [00076])", "S163:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN162770 (R158 in line [00076],R212 in line [00076])", "S163:java.util.Hashtable.next@POLYN475832" ]
  }, {
    "_id" : "164",
    "_lesItems" : [ "S164:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN420488 (R28 in line [01023],R219 in line [01023],R220 in line [01023],R221 in line [01023])", "S164:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN420190 (R28 in line [01017],R137 in line [01017],R138 in line [01017])", "S164:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN419491 (R28 in line [01004],R139 in line [01004],R140 in line [01004])" ]
  }, {
    "_id" : "165",
    "_lesItems" : [ "S165:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN340271 (R4 in line [00747],R243 in line [00747],R244 in line [00747])", "S165:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN340271 (R4 in line [00747],R243 in line [00747],R244 in line [00747])", "S165:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN322491", "S165:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN171983" ]
  }, {
    "_id" : "166",
    "_lesItems" : [ "S166:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN186656 (R119 in line [00235],R249 in line [00235])", "S166:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN186656 (R119 in line [00235],R249 in line [00235])", "S166:org.apache.kafka.common.metrics.internals.IntGaugeSuite.closed" ]
  }, {
    "_id" : "167",
    "_lesItems" : [ "S167:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN186656 (R119 in line [00235],R249 in line [00235])", "S167:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN186656 (R119 in line [00235],R249 in line [00235])", "S167:java.util.Hashtable.get@POLYN420916 (R2 in line [00378])", "S167:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "168",
    "_lesItems" : [ "S168:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN160102 (R251 in line [00071],R252 in line [00071])", "S168:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN159723 (R251 in line [00063],R253 in line [00063])", "S168:java.util.Hashtable.remove@POLYN448040 (R2 in line [00953])", "S168:java.lang.Object.hashCode@POLYN287340" ]
  }, {
    "_id" : "169",
    "_lesItems" : [ "S169:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN160790 (R251 in line [00084],R254 in line [00084])", "S169:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN160247 (R251 in line [00076],R255 in line [00076])", "S169:org.apache.kafka.connect.util.Table.remove@POLYN148503", "S169:java.util.Hashtable.remove@POLYN476052" ]
  }, {
    "_id" : "170",
    "_lesItems" : [ "S170:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237417 (R141 in line [00269])", "S170:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237542 (R141 in line [00274],R266 in line [00274])", "S170:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237542 (R141 in line [00274],R266 in line [00274])", "S170:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN246915" ]
  }, {
    "_id" : "171",
    "_lesItems" : [ "S171:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN166527 (R158 in line [00169],R313 in line [00169])", "S171:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN166527 (R158 in line [00169],R313 in line [00169])", "S171:org.apache.kafka.raft.QuorumState.isLeader@POLYN231945" ]
  } ],
  "_lesDeadlocksTypos" : [ ]
}