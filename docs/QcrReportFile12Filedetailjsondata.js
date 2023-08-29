{
  "_lesSequences" : [ {
    "_id" : "1",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.INVALIDATED",
      "_method" : "---java.io.BufferedReader.fill@POLYN241561.dummymethode_00138 in line [00138]",
      "_target" : "java.io.BufferedReader.markedChar",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249702.dummymethode_00342 in line [00342]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249702.i",
      "_risk" : "//QC-JAVCWE099[00342] In java.io.BufferedReader.readLine@POLYN249702[00342] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249702.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249702.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN249702[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedReader.readLine@POLYN249702.i",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249702.dummymethode_00351 in line [00351]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : "//QC-JAVCWE099[00351] In java.io.BufferedReader.readLine@POLYN249702[00351] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.BufferedReader.readLine@POLYN249702.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249702.dummymethode_00356 in line [00356]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249702.str",
      "_risk" : "//QC-JAVCWE099[00356] In java.io.BufferedReader.readLine@POLYN249702[00356] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.BufferedReader.readLine@POLYN249702.str",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249702.dummymethode_00365 in line [00365]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249702.return",
      "_risk" : "//QC-JAVCWE099[00365] In java.io.BufferedReader.readLine@POLYN249702[00365] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedReader.readLine@POLYN249702.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249702 in line [00389]",
      "_target" : "java.io.BufferedReader.readLine@POLYN252903.return",
      "_risk" : "//QC-JAVCWE099[00389] In java.io.BufferedReader.readLine@POLYN252903[00389] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "8",
      "_source" : "java.io.BufferedReader.markedChar",
      "_method" : "---java.io.BufferedReader.reset@POLYN256886.dummymethode_00515 in line [00515]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.lang.Integer.parseInt@POLYN438523.s",
      "_method" : "---java.lang.Integer.parseInt@POLYN434975 in line [00527]",
      "_target" : "java.lang.Integer.parseInt@POLYN438523.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.util.HashMap.put@POLYN632190.key",
      "_method" : "---java.util.HashMap.putVal@POLYN632713 in line [00609]",
      "_target" : "java.util.HashMap.put@POLYN632190.return",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN251408.return",
      "_method" : "---org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN251408 in line [00309]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN250323.return",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN250323.return",
      "_method" : "---org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN250323 in line [00315]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN250563.return",
      "_risk" : ""
    }, {
      "_id" : "13",
      "_source" : "java.util.HashMap.put@POLYN632190.return",
      "_method" : "---java.util.HashMap.put@POLYN632190 in line [00330]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN251408.return",
      "_risk" : ""
    }, {
      "_id" : "14",
      "_source" : "partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.CompletedFetch@POLYN555849.dummymethode_01521 in line [01521]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "15",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541265.dummymethode_01264 in line [01264]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541265.tp",
      "_risk" : ""
    }, {
      "_id" : "16",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541265.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN352129 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN352129.tp",
      "_risk" : ""
    }, {
      "_id" : "17",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN352129.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN181107 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN181107.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "18",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN181107.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN632190 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN632190.key",
      "_risk" : ""
    }, {
      "_id" : "19",
      "_source" : "java.lang.Integer.parseInt@POLYN438523.return",
      "_method" : "---java.lang.Integer.parseInt@POLYN438523 in line [00081]",
      "_target" : "partition",
      "_risk" : ""
    }, {
      "_id" : "20",
      "_source" : "java.io.BufferedReader.readLine@POLYN252903.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN252903 in line [00197]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN191239.line",
      "_risk" : "//QC-JAVCWE099[00197] In org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN191239[00197] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "21",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN191239.line",
      "_method" : "---java.lang.Integer.parseInt@POLYN438523 in line [00201]",
      "_target" : "java.lang.Integer.parseInt@POLYN438523.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "2",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249702.dummymethode_00342 in line [00342]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249702.i",
      "_risk" : "//QC-JAVCWE099[00342] In java.io.BufferedReader.readLine@POLYN249702[00342] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249702.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249702.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN249702[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.readLine@POLYN249702.i",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249702.dummymethode_00351 in line [00351]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : "//QC-JAVCWE099[00351] In java.io.BufferedReader.readLine@POLYN249702[00351] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedReader.readLine@POLYN249702.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249702.dummymethode_00356 in line [00356]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249702.str",
      "_risk" : "//QC-JAVCWE099[00356] In java.io.BufferedReader.readLine@POLYN249702[00356] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.BufferedReader.readLine@POLYN249702.str",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249702.dummymethode_00365 in line [00365]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249702.return",
      "_risk" : "//QC-JAVCWE099[00365] In java.io.BufferedReader.readLine@POLYN249702[00365] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.BufferedReader.readLine@POLYN249702.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249702 in line [00389]",
      "_target" : "java.io.BufferedReader.readLine@POLYN252903.return",
      "_risk" : "//QC-JAVCWE099[00389] In java.io.BufferedReader.readLine@POLYN252903[00389] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedReader.skip@POLYN253231.n",
      "_method" : "---java.io.BufferedReader.skip@POLYN253231.dummymethode_00408 in line [00408]",
      "_target" : "java.io.BufferedReader.skip@POLYN253231.r",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.io.BufferedReader.skip@POLYN253231.r",
      "_method" : "---java.io.BufferedReader.skip@POLYN253231.dummymethode_00422 in line [00422]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.lang.Integer.parseInt@POLYN438523.s",
      "_method" : "---java.lang.Integer.parseInt@POLYN434975 in line [00527]",
      "_target" : "java.lang.Integer.parseInt@POLYN438523.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.util.HashMap.put@POLYN632190.key",
      "_method" : "---java.util.HashMap.putVal@POLYN632713 in line [00609]",
      "_target" : "java.util.HashMap.put@POLYN632190.return",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN251408.return",
      "_method" : "---org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN251408 in line [00309]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN250323.return",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN250323.return",
      "_method" : "---org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN250323 in line [00315]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN250563.return",
      "_risk" : ""
    }, {
      "_id" : "13",
      "_source" : "java.util.HashMap.put@POLYN632190.return",
      "_method" : "---java.util.HashMap.put@POLYN632190 in line [00330]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN251408.return",
      "_risk" : ""
    }, {
      "_id" : "14",
      "_source" : "partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.CompletedFetch@POLYN555849.dummymethode_01521 in line [01521]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "15",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541265.dummymethode_01264 in line [01264]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541265.tp",
      "_risk" : ""
    }, {
      "_id" : "16",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541265.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN352129 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN352129.tp",
      "_risk" : ""
    }, {
      "_id" : "17",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN352129.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN181107 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN181107.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "18",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN181107.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN632190 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN632190.key",
      "_risk" : ""
    }, {
      "_id" : "19",
      "_source" : "java.lang.Integer.parseInt@POLYN438523.return",
      "_method" : "---java.lang.Integer.parseInt@POLYN438523 in line [00081]",
      "_target" : "partition",
      "_risk" : ""
    }, {
      "_id" : "20",
      "_source" : "java.io.BufferedReader.readLine@POLYN252903.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN252903 in line [00197]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN191239.line",
      "_risk" : "//QC-JAVCWE099[00197] In org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN191239[00197] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "21",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN191239.line",
      "_method" : "---java.lang.Integer.parseInt@POLYN438523 in line [00201]",
      "_target" : "java.lang.Integer.parseInt@POLYN438523.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "3",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249702.dummymethode_00342 in line [00342]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249702.i",
      "_risk" : "//QC-JAVCWE099[00342] In java.io.BufferedReader.readLine@POLYN249702[00342] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249702.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249702.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN249702[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.readLine@POLYN249702.i",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249702.dummymethode_00351 in line [00351]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : "//QC-JAVCWE099[00351] In java.io.BufferedReader.readLine@POLYN249702[00351] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedReader.readLine@POLYN249702.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249702.dummymethode_00356 in line [00356]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249702.str",
      "_risk" : "//QC-JAVCWE099[00356] In java.io.BufferedReader.readLine@POLYN249702[00356] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.BufferedReader.readLine@POLYN249702.str",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249702.dummymethode_00365 in line [00365]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249702.return",
      "_risk" : "//QC-JAVCWE099[00365] In java.io.BufferedReader.readLine@POLYN249702[00365] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.BufferedReader.readLine@POLYN249702.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249702 in line [00389]",
      "_target" : "java.io.BufferedReader.readLine@POLYN252903.return",
      "_risk" : "//QC-JAVCWE099[00389] In java.io.BufferedReader.readLine@POLYN252903[00389] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedReader.skip@POLYN253231.r",
      "_method" : "---java.io.BufferedReader.skip@POLYN253231.dummymethode_00422 in line [00422]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "0",
      "_method" : "---java.io.BufferedReader.skip@POLYN253231.dummymethode_00423 in line [00423]",
      "_target" : "java.io.BufferedReader.skip@POLYN253231.r",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.lang.Integer.parseInt@POLYN438523.s",
      "_method" : "---java.lang.Integer.parseInt@POLYN434975 in line [00527]",
      "_target" : "java.lang.Integer.parseInt@POLYN438523.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "org.apache.kafka.raft.RaftConfig.parseVoterId@POLYN194267.return",
      "_method" : "---org.apache.kafka.raft.RaftConfig.parseVoterId@POLYN194267 in line [00218]",
      "_target" : "org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN194619.voterId",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN194619.voterId",
      "_method" : "---org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN194619.dummymethode_00235 in line [00235]",
      "_target" : "org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN194619.cibledummy_00235",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "java.lang.Integer.parseInt@POLYN438523.return",
      "_method" : "---java.lang.Integer.parseInt@POLYN438523 in line [00203]",
      "_target" : "org.apache.kafka.raft.RaftConfig.parseVoterId@POLYN194267.return",
      "_risk" : ""
    }, {
      "_id" : "13",
      "_source" : "java.io.BufferedReader.readLine@POLYN252903.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN252903 in line [00197]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN191239.line",
      "_risk" : "//QC-JAVCWE099[00197] In org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN191239[00197] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "14",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN191239.line",
      "_method" : "---java.lang.Integer.parseInt@POLYN438523 in line [00201]",
      "_target" : "java.lang.Integer.parseInt@POLYN438523.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "4",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN376296.s",
      "_method" : "---java.io.PrintStream.write@POLYN371105 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN371105.s",
      "_risk" : "//QC-JAVCWE099[00669] In java.io.PrintStream.print@POLYN376296[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.valueOf@POLYN923466.return",
      "_method" : "---java.lang.String.valueOf@POLYN923466 in line [00821]",
      "_target" : "java.io.PrintStream.println@POLYN381266.s",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.println@POLYN381266.s",
      "_method" : "---java.io.PrintStream.print@POLYN376296 in line [00823]",
      "_target" : "java.io.PrintStream.print@POLYN376296.s",
      "_risk" : "//QC-JAVCWE099[00823] In java.io.PrintStream.println@POLYN381266[00823] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.PrintStream.write@POLYN371105.s",
      "_method" : "---java.io.Writer.write@POLYN202572 in line [00525]",
      "_target" : "java.io.Writer.write@POLYN202572.str",
      "_risk" : "//QC-JAVCWE099[00525] In java.io.PrintStream.write@POLYN371105[00525] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.Writer.write@POLYN202572.str",
      "_method" : "---java.io.Writer.write@POLYN203165 in line [00157]",
      "_target" : "java.io.Writer.write@POLYN202572.cibledummy_00157",
      "_risk" : "//QC-JAVCWE099[00157] In java.io.Writer.write@POLYN202572[00157] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.lang.Double.toString@POLYN386086.d",
      "_method" : "---java.lang.Double.toString@POLYN386086.dummymethode_00196 in line [00196]",
      "_target" : "java.lang.Double.toString@POLYN386086.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.String.valueOf@POLYN923466.d",
      "_method" : "---java.lang.Double.toString@POLYN386086 in line [00001]",
      "_target" : "java.lang.Double.toString@POLYN386086.d",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.lang.Double.toString@POLYN386086.return",
      "_method" : "---java.lang.Double.toString@POLYN386086 in line [00001]",
      "_target" : "java.lang.String.valueOf@POLYN923466.return",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.util.HashMap.Node@POLYN617368.value",
      "_method" : "---java.util.HashMap.Node.Node@POLYN617368.dummymethode_00287 in line [00287]",
      "_target" : "java.util.HashMap.value",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.util.HashMap.value",
      "_method" : "---java.util.HashMap.Node.getValue@POLYN617903.dummymethode_00292 in line [00292]",
      "_target" : "java.util.HashMap.getValue@POLYN617903.return",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "java.util.HashMap.getValue@POLYN617903.return",
      "_method" : "---java.util.HashMap.getValue@POLYN617903 in line [00266]",
      "_target" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN211568.valueRaw",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN211568.valueRaw",
      "_method" : "---java.lang.String.valueOf@POLYN923466 in line [00272]",
      "_target" : "java.lang.String.valueOf@POLYN923466.d",
      "_risk" : ""
    } ]
  }, {
    "_id" : "5",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN376296.s",
      "_method" : "---java.io.PrintStream.write@POLYN371105 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN371105.s",
      "_risk" : "//QC-JAVCWE099[00669] In java.io.PrintStream.print@POLYN376296[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.valueOf@POLYN923466.return",
      "_method" : "---java.lang.String.valueOf@POLYN923466 in line [00821]",
      "_target" : "java.io.PrintStream.println@POLYN381266.s",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.println@POLYN381266.s",
      "_method" : "---java.io.PrintStream.print@POLYN376296 in line [00823]",
      "_target" : "java.io.PrintStream.print@POLYN376296.s",
      "_risk" : "//QC-JAVCWE099[00823] In java.io.PrintStream.println@POLYN381266[00823] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.PrintStream.write@POLYN371105.s",
      "_method" : "---java.io.Writer.write@POLYN202572 in line [00525]",
      "_target" : "java.io.Writer.write@POLYN202572.str",
      "_risk" : "//QC-JAVCWE099[00525] In java.io.PrintStream.write@POLYN371105[00525] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.Writer.write@POLYN202572.str",
      "_method" : "---java.io.Writer.write@POLYN203165 in line [00157]",
      "_target" : "java.io.Writer.write@POLYN202572.cibledummy_00157",
      "_risk" : "//QC-JAVCWE099[00157] In java.io.Writer.write@POLYN202572[00157] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.lang.Double.toString@POLYN386086.d",
      "_method" : "---java.lang.Double.toString@POLYN386086.dummymethode_00196 in line [00196]",
      "_target" : "java.lang.Double.toString@POLYN386086.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.String.valueOf@POLYN923466.d",
      "_method" : "---java.lang.Double.toString@POLYN386086 in line [00001]",
      "_target" : "java.lang.Double.toString@POLYN386086.d",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.lang.Double.toString@POLYN386086.return",
      "_method" : "---java.lang.Double.toString@POLYN386086 in line [00001]",
      "_target" : "java.lang.String.valueOf@POLYN923466.return",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.util.HashMap.value",
      "_method" : "---java.util.HashMap.Node.getValue@POLYN617903.dummymethode_00292 in line [00292]",
      "_target" : "java.util.HashMap.getValue@POLYN617903.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.util.HashMap.setValue@POLYN618322.newValue",
      "_method" : "---java.util.HashMap.Node.setValue@POLYN618322.dummymethode_00301 in line [00301]",
      "_target" : "java.util.HashMap.value",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "java.util.HashMap.getValue@POLYN617903.return",
      "_method" : "---java.util.HashMap.getValue@POLYN617903 in line [00266]",
      "_target" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN211568.valueRaw",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN211568.valueRaw",
      "_method" : "---java.lang.String.valueOf@POLYN923466 in line [00272]",
      "_target" : "java.lang.String.valueOf@POLYN923466.d",
      "_risk" : ""
    } ]
  }, {
    "_id" : "6",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "1",
      "_method" : "---java.io.InputStream.read@POLYN257022.dummymethode_00177 in line [00177]",
      "_target" : "java.io.InputStream.read@POLYN257022.i",
      "_risk" : "//QC-JAVCWE099[00177] In java.io.InputStream.read@POLYN257022[00177] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.InputStream.read@POLYN257022.i",
      "_method" : "---java.io.InputStream.read@POLYN257022.dummymethode_00188 in line [00188]",
      "_target" : "java.io.InputStream.read@POLYN257022.return",
      "_risk" : "//QC-JAVCWE099[00188] In java.io.InputStream.read@POLYN257022[00188] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883816.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN883816 in line [02938]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896762.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.read@POLYN815272.return",
      "_method" : "---java.io.ObjectInputStream.read@POLYN815272 in line [03091]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN904431.v",
      "_risk" : "//QC-JAVCWE099[03091] In java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN904431[03091] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN904431.v",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN904431.dummymethode_03095 in line [03095]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN904431.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.InputStream.read@POLYN257022.return",
      "_method" : "---java.io.InputStream.read@POLYN257022 in line [02598]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.peekb",
      "_risk" : "//QC-JAVCWE099[02598] In java.io.ObjectInputStream.PeekInputStream.peek@POLYN883409[02598] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.peekb",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN883816.dummymethode_02605 in line [02605]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883816.v",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883816.v",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN883816.dummymethode_02607 in line [02607]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883816.return",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896762.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896762 in line [00893]",
      "_target" : "java.io.ObjectInputStream.read@POLYN815272.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN904431.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN904431 in line [00979]",
      "_target" : "java.io.ObjectInputStream.readUnsignedByte@POLYN818037.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "7",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920623.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920623 in line [03183]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN909342.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.toString@POLYN246930.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN246930 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920623.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readString@POLYN850524.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN850524 in line [01963]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN855853.name",
      "_risk" : "//QC-JAVCWZ099[01963] In java.io.ObjectInputStream.readEnum@POLYN855853[01963] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN822289.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN822289 in line [01863]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN850524.str",
      "_risk" : "//QC-JAVCWZ099[01863] In java.io.ObjectInputStream.readString@POLYN850524[01863] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readString@POLYN850524.str",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN850524.dummymethode_01876 in line [01876]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN850524.return",
      "_risk" : "//QC-JAVCWZ099[01876] In java.io.ObjectInputStream.readString@POLYN850524[01876] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN909342.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN909342 in line [01124]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN822289.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.StringBuilder.toString@POLYN246930.0",
      "_method" : "---java.lang.StringBuilder.toString@POLYN246930.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN246930.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "8",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920623.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920623 in line [03183]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN909342.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.toString@POLYN246930.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN246930 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920623.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readString@POLYN850524.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN850524 in line [01963]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN855853.name",
      "_risk" : "//QC-JAVCWZ099[01963] In java.io.ObjectInputStream.readEnum@POLYN855853[01963] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN822289.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN822289 in line [01863]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN850524.str",
      "_risk" : "//QC-JAVCWZ099[01863] In java.io.ObjectInputStream.readString@POLYN850524[01863] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readString@POLYN850524.str",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN850524.dummymethode_01876 in line [01876]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN850524.return",
      "_risk" : "//QC-JAVCWZ099[01876] In java.io.ObjectInputStream.readString@POLYN850524[01876] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN909342.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN909342 in line [01124]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN822289.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.StringBuilder.toString@POLYN246930.count",
      "_method" : "---java.lang.StringBuilder.toString@POLYN246930.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN246930.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "9",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920623.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920623 in line [03183]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN909342.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.toString@POLYN246930.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN246930 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920623.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readString@POLYN850524.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN850524 in line [01963]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN855853.name",
      "_risk" : "//QC-JAVCWZ099[01963] In java.io.ObjectInputStream.readEnum@POLYN855853[01963] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN822289.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN822289 in line [01863]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN850524.str",
      "_risk" : "//QC-JAVCWZ099[01863] In java.io.ObjectInputStream.readString@POLYN850524[01863] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readString@POLYN850524.str",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN850524.dummymethode_01876 in line [01876]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN850524.return",
      "_risk" : "//QC-JAVCWZ099[01876] In java.io.ObjectInputStream.readString@POLYN850524[01876] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN909342.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN909342 in line [01124]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN822289.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.StringBuilder.toString@POLYN246930.value",
      "_method" : "---java.lang.StringBuilder.toString@POLYN246930.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN246930.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "10",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN613705.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN613705.dummymethode_01533 in line [01533]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN613705.cibledummy_01533",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN577164.obj",
      "_method" : "---java.io.ObjectOutputStream.replaceObject@POLYN577164.dummymethode_00588 in line [00588]",
      "_target" : "java.io.ObjectOutputStream.replaceObject@POLYN577164.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN577164.return",
      "_method" : "---java.io.ObjectOutputStream.replaceObject@POLYN577164 in line [01144]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593399.rep",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593399.rep",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593399.dummymethode_01149 in line [01149]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593399.obj",
      "_risk" : "//QC-JAVCWZ099[01149] In java.io.ObjectOutputStream.writeObject0@POLYN593399[01149] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593399.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609218 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609218.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN593399[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609218.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN611854 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN611854.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609218[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN611854.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN613705 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN613705.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "11",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteObject@POLYN571757.dummymethode_00434 in line [00434]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteObject@POLYN571757.ctx",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603454.objs[i]",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593399 in line [01378]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593399.obj",
      "_risk" : "//QC-JAVCWZ099[01378] In java.io.ObjectOutputStream.writeArray@POLYN603454[01378] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN610658.dummymethode_01452 in line [01452]",
      "_target" : "java.io.ObjectOutputStream.writeExternalData@POLYN610658.oldContext",
      "_risk" : "//QC-JAVCWZ099[01452] In java.io.ObjectOutputStream.writeExternalData@POLYN610658[01452] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN610658.oldContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN610658.dummymethode_01464 in line [01464]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01464] In java.io.ObjectOutputStream.writeExternalData@POLYN610658[01464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593399.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609218 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609218.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN593399[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609218.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN611854 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN611854.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609218[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN611854.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN611854.dummymethode_01494 in line [01494]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01494] In java.io.ObjectOutputStream.writeSerialData@POLYN611854[01494] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "12",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteObject@POLYN571757.dummymethode_00434 in line [00434]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteObject@POLYN571757.ctx",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN610658.dummymethode_01452 in line [01452]",
      "_target" : "java.io.ObjectOutputStream.writeExternalData@POLYN610658.oldContext",
      "_risk" : "//QC-JAVCWZ099[01452] In java.io.ObjectOutputStream.writeExternalData@POLYN610658[01452] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN610658.oldContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN610658.dummymethode_01464 in line [01464]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01464] In java.io.ObjectOutputStream.writeExternalData@POLYN610658[01464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593399.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609218 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609218.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN593399[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609218.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN611854 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN611854.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609218[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN611854.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN611854.dummymethode_01494 in line [01494]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01494] In java.io.ObjectOutputStream.writeSerialData@POLYN611854[01494] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN571101.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593399 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593399.obj",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN571101[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "13",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeLong@POLYN583745.val",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN583745 in line [00808]",
      "_target" : "java.io.ObjectOutputStream.writeLong@POLYN583745.cibledummy_00808",
      "_risk" : "//QC-JAVCWE099[00808] In java.io.ObjectOutputStream.writeLong@POLYN583745[00808] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN253815.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN255361 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255361.timestamp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255361.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN256707 in line [00428]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN256707.timestamp",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN256707.timestamp",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN583745 in line [00468]",
      "_target" : "java.io.ObjectOutputStream.writeLong@POLYN583745.val",
      "_risk" : "//QC-JAVCWE099[00468] In org.apache.kafka.common.record.LegacyRecord.write@POLYN256707[00468] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252728.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN253815 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN253815.timestamp",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "timestampType==TimestampType.LOG_APPEND_TIME?logAppendTime_maxTimestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN305815.dummymethode_00424 in line [00424]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN305815.timestamp",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN305815.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252728 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252728.timestamp",
      "_risk" : ""
    } ]
  }, {
    "_id" : "14",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN243210.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN243210.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN243210.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN243210[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.getBytes@POLYN838932.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN838932.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN838932.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN423758.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN423758 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN240004.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN240004.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN243210 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN243210.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN240004[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslServer.process@POLYN196715.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN838932 in line [00165]",
      "_target" : "java.lang.String.getBytes@POLYN838932.charsetName",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.lang.String.getBytes@POLYN838932.return",
      "_method" : "---java.lang.String.getBytes@POLYN838932 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN423758.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "15",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN243210.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN243210.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN243210.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN243210[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.getBytes@POLYN838932.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN838932.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN838932.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN423758.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN423758 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN240004.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN240004.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN243210 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN243210.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN240004[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.security.scram.internals.ScramFormatter.toBytes@POLYN194510.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN838932 in line [00170]",
      "_target" : "java.lang.String.getBytes@POLYN838932.charsetName",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.lang.String.getBytes@POLYN838932.return",
      "_method" : "---java.lang.String.getBytes@POLYN838932 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN423758.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "16",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN243210.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN243210.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN243210.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN243210[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.getBytes@POLYN838932.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN838932.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN838932.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN423758.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN423758 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN240004.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN240004.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN243210 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN243210.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN240004[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN423758.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN838932 in line [00172]",
      "_target" : "java.lang.String.getBytes@POLYN838932.charsetName",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.lang.String.getBytes@POLYN838932.return",
      "_method" : "---java.lang.String.getBytes@POLYN838932 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN423758.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "17",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN243210.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN243210.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN243210.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN243210[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.getBytes@POLYN838932.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN838932.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN838932.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN423758.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN423758 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN240004.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN240004.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN243210 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN243210.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN240004[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.lang.String.getBytes@POLYN838932.return",
      "_method" : "---java.lang.String.getBytes@POLYN838932 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN423758.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.toBytes@POLYN201021.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN838932 in line [00206]",
      "_target" : "java.lang.String.getBytes@POLYN838932.charsetName",
      "_risk" : ""
    } ]
  }, {
    "_id" : "18",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readArray@POLYN851497.false",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN835640 in line [01908]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN835640.unshared",
      "_risk" : "//QC-JAVCWZ099[01908] In java.io.ObjectInputStream.readArray@POLYN851497[01908] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN843932.unshared",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN845399 in line [01710]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN843932.descriptor",
      "_risk" : "//QC-JAVCWZ099[01710] In java.io.ObjectInputStream.readClassDesc@POLYN843932[01710] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN843932.descriptor",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN843932.dummymethode_01722 in line [01722]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN843932.return",
      "_risk" : "//QC-JAVCWZ099[01722] In java.io.ObjectInputStream.readClassDesc@POLYN843932[01722] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN835640.unshared",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN843932 in line [01522]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN843932.unshared",
      "_risk" : "//QC-JAVCWZ099[01522] In java.io.ObjectInputStream.readObject0@POLYN835640[01522] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN843932.return",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN843932 in line [02000]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN858117.desc",
      "_risk" : "//QC-JAVCWZ099[02000] In java.io.ObjectInputStream.readOrdinaryObject@POLYN858117[02000] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN858117.desc",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN863272 in line [02027]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN858117.cibledummy_02027",
      "_risk" : "//QC-JAVCWZ099[02027] In java.io.ObjectInputStream.readOrdinaryObject@POLYN858117[02027] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "19",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN843932.unshared",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN845399 in line [01710]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN843932.descriptor",
      "_risk" : "//QC-JAVCWZ099[01710] In java.io.ObjectInputStream.readClassDesc@POLYN843932[01710] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN843932.descriptor",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN843932.dummymethode_01722 in line [01722]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN843932.return",
      "_risk" : "//QC-JAVCWZ099[01722] In java.io.ObjectInputStream.readClassDesc@POLYN843932[01722] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN835640.unshared",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN843932 in line [01522]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN843932.unshared",
      "_risk" : "//QC-JAVCWZ099[01522] In java.io.ObjectInputStream.readObject0@POLYN835640[01522] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN843932.return",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN843932 in line [02000]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN858117.desc",
      "_risk" : "//QC-JAVCWZ099[02000] In java.io.ObjectInputStream.readOrdinaryObject@POLYN858117[02000] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN858117.desc",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN863272 in line [02027]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN858117.cibledummy_02027",
      "_risk" : "//QC-JAVCWZ099[02027] In java.io.ObjectInputStream.readOrdinaryObject@POLYN858117[02027] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.skipCustomData@POLYN866456.false",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN835640 in line [02211]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN835640.unshared",
      "_risk" : "//QC-JAVCWZ099[02211] In java.io.ObjectInputStream.skipCustomData@POLYN866456[02211] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "20",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603454.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN598930 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN598930.desc",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN603454[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN598930.desc",
      "_method" : "---java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601427 in line [01231]",
      "_target" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601427.desc",
      "_risk" : "//QC-JAVCWZ099[01231] In java.io.ObjectOutputStream.writeClassDesc@POLYN598930[01231] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601427.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDescriptor@POLYN579636 in line [01282]",
      "_target" : "java.io.ObjectOutputStream.writeClassDescriptor@POLYN579636.desc",
      "_risk" : "//QC-JAVCWZ099[01282] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601427[01282] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.lang.Object.getClass@POLYN297275.return",
      "_method" : "---java.lang.Object.getClass@POLYN297275 in line [01129]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593399.cl",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593399.cl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593399.dummymethode_01134 in line [01134]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593399.desc",
      "_risk" : "//QC-JAVCWZ099[01134] In java.io.ObjectOutputStream.writeObject0@POLYN593399[01134] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593399.desc",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN603454 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN603454.desc",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN593399[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "21",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603454.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN598930 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN598930.desc",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN603454[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN598930.desc",
      "_method" : "---java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601427 in line [01231]",
      "_target" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601427.desc",
      "_risk" : "//QC-JAVCWZ099[01231] In java.io.ObjectOutputStream.writeClassDesc@POLYN598930[01231] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601427.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDescriptor@POLYN579636 in line [01282]",
      "_target" : "java.io.ObjectOutputStream.writeClassDescriptor@POLYN579636.desc",
      "_risk" : "//QC-JAVCWZ099[01282] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601427[01282] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593399.cl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593399.dummymethode_01134 in line [01134]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593399.desc",
      "_risk" : "//QC-JAVCWZ099[01134] In java.io.ObjectOutputStream.writeObject0@POLYN593399[01134] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593399.repCl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593399.dummymethode_01141 in line [01141]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593399.cl",
      "_risk" : "//QC-JAVCWZ099[01141] In java.io.ObjectOutputStream.writeObject0@POLYN593399[01141] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593399.desc",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN603454 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN603454.desc",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN593399[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "22",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.format@POLYN387463.l",
      "_method" : "---java.lang.String.format@POLYN917523 in line [01027]",
      "_target" : "java.lang.String.format@POLYN917523.l",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN360819.x",
      "_method" : "---java.io.PrintWriter.print@POLYN356064 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN356064.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN360819[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN917523.l",
      "_method" : "---java.lang.String.format@POLYN917523.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN917523.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN917523.return",
      "_method" : "---java.lang.String.format@POLYN917523 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161109.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161109.data",
      "_method" : "---java.io.PrintWriter.println@POLYN360819 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN360819.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161109[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "23",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.format@POLYN371046.l",
      "_method" : "---java.lang.String.format@POLYN917523 in line [00964]",
      "_target" : "java.lang.String.format@POLYN917523.l",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN360819.x",
      "_method" : "---java.io.PrintWriter.print@POLYN356064 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN356064.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN360819[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN917523.l",
      "_method" : "---java.lang.String.format@POLYN917523.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN917523.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN917523.return",
      "_method" : "---java.lang.String.format@POLYN917523 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161109.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161109.data",
      "_method" : "---java.io.PrintWriter.println@POLYN360819 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN360819.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161109[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "24",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN360819.x",
      "_method" : "---java.io.PrintWriter.print@POLYN356064 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN356064.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN360819[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN917523.l",
      "_method" : "---java.lang.String.format@POLYN917523.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN917523.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslServer.jsonErrorResponse@POLYN199880.\"%s",
      "_method" : "---java.lang.String.format@POLYN917523 in line [00208]",
      "_target" : "java.lang.String.format@POLYN917523.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN917523.return",
      "_method" : "---java.lang.String.format@POLYN917523 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161109.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161109.data",
      "_method" : "---java.io.PrintWriter.println@POLYN360819 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN360819.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161109[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "25",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN360819.x",
      "_method" : "---java.io.PrintWriter.print@POLYN356064 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN356064.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN360819[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN917523.l",
      "_method" : "---java.lang.String.format@POLYN917523.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN917523.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslServer.jsonErrorResponse@POLYN199880.\"%s}\"",
      "_method" : "---java.lang.String.format@POLYN917523 in line [00212]",
      "_target" : "java.lang.String.format@POLYN917523.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN917523.return",
      "_method" : "---java.lang.String.format@POLYN917523 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161109.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161109.data",
      "_method" : "---java.io.PrintWriter.println@POLYN360819 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN360819.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161109[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "26",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN360819.x",
      "_method" : "---java.io.PrintWriter.print@POLYN356064 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN356064.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN360819[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN917523.l",
      "_method" : "---java.lang.String.format@POLYN917523.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN917523.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.controller.QuorumController.Builder.build@POLYN435952.\"Node%d_\"",
      "_method" : "---java.lang.String.format@POLYN917523 in line [00293]",
      "_target" : "java.lang.String.format@POLYN917523.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN917523.return",
      "_method" : "---java.lang.String.format@POLYN917523 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161109.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161109.data",
      "_method" : "---java.io.PrintWriter.println@POLYN360819 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN360819.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161109[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "27",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN360819.x",
      "_method" : "---java.io.PrintWriter.print@POLYN356064 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN356064.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN360819[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN917523.l",
      "_method" : "---java.lang.String.format@POLYN917523.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN917523.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN917523.return",
      "_method" : "---java.lang.String.format@POLYN917523 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161109.data",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161109.data",
      "_method" : "---java.io.PrintWriter.println@POLYN360819 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN360819.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161109[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.agent.AgentClient.Builder.target@POLYN204680.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN917523 in line [00096]",
      "_target" : "java.lang.String.format@POLYN917523.l",
      "_risk" : ""
    } ]
  }, {
    "_id" : "28",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN360819.x",
      "_method" : "---java.io.PrintWriter.print@POLYN356064 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN356064.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN360819[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN917523.l",
      "_method" : "---java.lang.String.format@POLYN917523.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN917523.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN917523.return",
      "_method" : "---java.lang.String.format@POLYN917523 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161109.data",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161109.data",
      "_method" : "---java.io.PrintWriter.println@POLYN360819 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN360819.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161109[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.agent.WorkerManager.Worker.toString@POLYN252800.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN917523 in line [00314]",
      "_target" : "java.lang.String.format@POLYN917523.l",
      "_risk" : ""
    } ]
  }, {
    "_id" : "29",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN360819.x",
      "_method" : "---java.io.PrintWriter.print@POLYN356064 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN356064.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN360819[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN917523.l",
      "_method" : "---java.lang.String.format@POLYN917523.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN917523.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN917523.return",
      "_method" : "---java.lang.String.format@POLYN917523 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161109.data",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161109.data",
      "_method" : "---java.io.PrintWriter.println@POLYN360819 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN360819.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161109[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.coordinator.CoordinatorClient.Builder.target@POLYN244865.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN917523 in line [00112]",
      "_target" : "java.lang.String.format@POLYN917523.l",
      "_risk" : ""
    } ]
  }, {
    "_id" : "30",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.InputStream.read@POLYN257022.0",
      "_method" : "---java.io.InputStream.read@POLYN257022.dummymethode_00168 in line [00168]",
      "_target" : "java.io.InputStream.read@POLYN257022.return",
      "_risk" : "//QC-JAVCWE099[00168] In java.io.InputStream.read@POLYN257022[00168] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466281.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN257022 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN257022.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN466281[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.InputStream.read@POLYN257022.return",
      "_method" : "---java.io.InputStream.read@POLYN257022 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466281.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN466281[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466281.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN466281.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466281.currentPosition",
      "_risk" : ""
    } ]
  }, {
    "_id" : "31",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.InputStream.read@POLYN257022.-1",
      "_method" : "---java.io.InputStream.read@POLYN257022.dummymethode_00173 in line [00173]",
      "_target" : "java.io.InputStream.read@POLYN257022.return",
      "_risk" : "//QC-JAVCWE099[00173] In java.io.InputStream.read@POLYN257022[00173] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466281.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN257022 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN257022.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN466281[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.InputStream.read@POLYN257022.return",
      "_method" : "---java.io.InputStream.read@POLYN257022 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466281.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN466281[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466281.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN466281.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466281.currentPosition",
      "_risk" : ""
    } ]
  }, {
    "_id" : "32",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.writeTo@POLYN190387.buffer",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN466281 in line [00182]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466281.destinationBuffer",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466281.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN257022 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN257022.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN466281[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466281.destinationBuffer",
      "_method" : "---java.io.InputStream.read@POLYN257022 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466281.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN466281[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466281.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN466281.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466281.currentPosition",
      "_risk" : ""
    } ]
  }, {
    "_id" : "33",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.curContext",
      "_method" : "---java.io.ObjectInputStream.defaultReadObject@POLYN802154.dummymethode_00545 in line [00545]",
      "_target" : "java.io.ObjectInputStream.defaultReadObject@POLYN802154.ctx",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.curContext",
      "_method" : "---java.io.ObjectInputStream.readExternalData@POLYN861341.dummymethode_02065 in line [02065]",
      "_target" : "java.io.ObjectInputStream.readExternalData@POLYN861341.oldContext",
      "_risk" : "//QC-JAVCWZ099[02065] In java.io.ObjectInputStream.readExternalData@POLYN861341[02065] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readExternalData@POLYN861341.oldContext",
      "_method" : "---java.io.ObjectInputStream.readExternalData@POLYN861341.dummymethode_02094 in line [02094]",
      "_target" : "java.io.ObjectInputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[02094] In java.io.ObjectInputStream.readExternalData@POLYN861341[02094] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readSerialData@POLYN863272.slotDesc",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN863272.dummymethode_02133 in line [02133]",
      "_target" : "java.io.ObjectInputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[02133] In java.io.ObjectInputStream.readSerialData@POLYN863272[02133] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "34",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646134.s",
      "_method" : "---java.io.ObjectOutputStream.writeBytes@POLYN584597 in line [02190]",
      "_target" : "java.io.ObjectOutputStream.writeBytes@POLYN584597.str",
      "_risk" : "//QC-JAVCWZ099[02190] In java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646134[02190] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeBytes@POLYN584597.str",
      "_method" : "---java.io.ObjectOutputStream.writeBytes@POLYN584597 in line [00841]",
      "_target" : "java.io.ObjectOutputStream.writeBytes@POLYN584597.cibledummy_00841",
      "_risk" : "//QC-JAVCWZ099[00841] In java.io.ObjectOutputStream.writeBytes@POLYN584597[00841] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN602677.str",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646134 in line [01309]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646134.s",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeTypeString@POLYN590035.str",
      "_method" : "---java.io.ObjectOutputStream.writeString@POLYN602677 in line [01030]",
      "_target" : "java.io.ObjectOutputStream.writeString@POLYN602677.str",
      "_risk" : "//QC-JAVCWZ099[01030] In java.io.ObjectOutputStream.writeTypeString@POLYN590035[01030] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "35",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN375832.s",
      "_method" : "---java.io.PrintStream.write@POLYN370187 in line [00653]",
      "_target" : "java.io.PrintStream.write@POLYN370187.buf",
      "_risk" : "//QC-JAVCWZ099[00653] In java.io.PrintStream.print@POLYN375832[00653] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.println@POLYN380287.x",
      "_method" : "---java.io.PrintStream.print@POLYN375832 in line [00792]",
      "_target" : "java.io.PrintStream.print@POLYN375832.s",
      "_risk" : "//QC-JAVCWZ099[00792] In java.io.PrintStream.println@POLYN380287[00792] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.write@POLYN370187.buf",
      "_method" : "---java.io.Writer.write@POLYN201907 in line [00503]",
      "_target" : "java.io.Writer.write@POLYN201907.cbuf",
      "_risk" : "//QC-JAVCWZ099[00503] In java.io.PrintStream.write@POLYN370187[00503] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.Writer.write@POLYN201907.cbuf",
      "_method" : "---java.io.Writer.write@POLYN201907.dummymethode_00127 in line [00127]",
      "_target" : "java.io.Writer.write@POLYN201907.cibledummy_00127",
      "_risk" : "//QC-JAVCWZ099[00127] In java.io.Writer.write@POLYN201907[00127] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "36",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.InputStream.read@POLYN253863.b",
      "_method" : "---java.io.InputStream.read@POLYN253863.dummymethode_00102 in line [00102]",
      "_target" : "java.io.InputStream.read@POLYN253863.return",
      "_risk" : "//QC-JAVCWE099[00102] In java.io.InputStream.read@POLYN253863[00102] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN310428.return",
      "_method" : "---org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN310428 in line [00289]",
      "_target" : "org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN312114.read",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN310428.netReadBuffer",
      "_method" : "---java.io.InputStream.read@POLYN253863 in line [00226]",
      "_target" : "java.io.InputStream.read@POLYN253863.b",
      "_risk" : "//QC-JAVCWE099[00226] In org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN310428[00226] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.InputStream.read@POLYN253863.return",
      "_method" : "---java.io.InputStream.read@POLYN253863 in line [00226]",
      "_target" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN310428.return",
      "_risk" : "//QC-JAVCWE099[00226] In org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN310428[00226] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "37",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.accepted@POLYN251051.HttpStatus.ACCEPTED",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN248848 in line [00273]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN248848.status",
      "_risk" : "//QC-JAVCWE080[00273] In org.springframework.http.ResponseEntity.accepted@POLYN251051[00273] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN248848.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN248848 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN249453.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN249453[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN248848.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN248848.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN248848.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN248848[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN249453.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN249453 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "38",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.badRequest@POLYN251522.HttpStatus.BAD_REQUEST",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN248848 in line [00291]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN248848.status",
      "_risk" : "//QC-JAVCWE080[00291] In org.springframework.http.ResponseEntity.badRequest@POLYN251522[00291] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN248848.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN248848 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN249453.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN249453[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN248848.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN248848.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN248848.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN248848[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN249453.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN249453 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "39",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.noContent@POLYN251294.HttpStatus.NO_CONTENT",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN248848 in line [00282]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN248848.status",
      "_risk" : "//QC-JAVCWE080[00282] In org.springframework.http.ResponseEntity.noContent@POLYN251294[00282] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN248848.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN248848 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN249453.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN249453[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN248848.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN248848.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN248848.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN248848[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN249453.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN249453 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "40",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.notFound@POLYN251765.HttpStatus.NOT_FOUND",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN248848 in line [00300]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN248848.status",
      "_risk" : "//QC-JAVCWE080[00300] In org.springframework.http.ResponseEntity.notFound@POLYN251765[00300] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN248848.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN248848 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN249453.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN249453[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN248848.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN248848.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN248848.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN248848[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN249453.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN249453 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "41",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN248848.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN248848 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN249453.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN249453[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN248848.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN248848.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN248848.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN248848[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.unprocessableEntity@POLYN251999.HttpStatus.UNPROCESSABLE_ENTITY",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN248848 in line [00310]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN248848.status",
      "_risk" : "//QC-JAVCWE080[00310] In org.springframework.http.ResponseEntity.unprocessableEntity@POLYN251999[00310] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN249453.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN249453 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "42",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN244537.cbuf",
      "_method" : "---java.io.Reader.read@POLYN194973 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN244537.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN244537[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN244537.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN244537 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN247745.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN247745[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN247745.n",
      "_method" : "---java.io.BufferedReader.read@POLYN247745.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN247745.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN247745[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "43",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN244537.len",
      "_method" : "---java.io.Reader.read@POLYN194973 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN244537.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN244537[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN244537.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN244537 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN247745.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN247745[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN247745.n",
      "_method" : "---java.io.BufferedReader.read@POLYN247745.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN247745.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN247745[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "44",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN244537.off",
      "_method" : "---java.io.Reader.read@POLYN194973 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN244537.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN244537[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN244537.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN244537 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN247745.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN247745[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN247745.n",
      "_method" : "---java.io.BufferedReader.read@POLYN247745.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN247745.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN247745[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "45",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Reader.read@POLYN194973.return",
      "_method" : "---java.io.Reader.read@POLYN194973 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN244537.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN244537[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN244537.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN244537 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN247745.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN247745[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN247745.n",
      "_method" : "---java.io.BufferedReader.read@POLYN247745.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN247745.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN247745[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "46",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN244537.-1",
      "_method" : "---java.io.BufferedReader.read1@POLYN244537.dummymethode_00214 in line [00214]",
      "_target" : "java.io.BufferedReader.read1@POLYN244537.return",
      "_risk" : "//QC-JAVCWZ099[00214] In java.io.BufferedReader.read1@POLYN244537[00214] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN244537.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN244537 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN247745.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN247745[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN247745.n",
      "_method" : "---java.io.BufferedReader.read@POLYN247745.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN247745.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN247745[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "47",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN871746.return",
      "_method" : "---java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN871746 in line [00591]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN803605.getField",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN803605.return",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN803605 in line [00592]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN803605.cibledummy_00592",
      "_risk" : "//QC-JAVCWZ099[00592] In java.io.ObjectInputStream.readFields@POLYN803605[00592] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN803605.getField",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN803605.dummymethode_00603 in line [00603]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN803605.return",
      "_risk" : "//QC-JAVCWZ099[00603] In java.io.ObjectInputStream.readFields@POLYN803605[00603] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "48",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN803605.curDesc",
      "_method" : "---java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN871746 in line [00591]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN803605.getField",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN803605.return",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN803605 in line [00592]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN803605.cibledummy_00592",
      "_risk" : "//QC-JAVCWZ099[00592] In java.io.ObjectInputStream.readFields@POLYN803605[00592] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN803605.getField",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN803605.dummymethode_00603 in line [00603]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN803605.return",
      "_risk" : "//QC-JAVCWZ099[00603] In java.io.ObjectInputStream.readFields@POLYN803605[00603] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "49",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readClassDescriptor@POLYN814843.desc",
      "_method" : "---java.io.ObjectInputStream.readClassDescriptor@POLYN814843.dummymethode_00883 in line [00883]",
      "_target" : "java.io.ObjectInputStream.readClassDescriptor@POLYN814843.return",
      "_risk" : "//QC-JAVCWZ099[00883] In java.io.ObjectInputStream.readClassDescriptor@POLYN814843[00883] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClassDescriptor@POLYN814843.return",
      "_method" : "---java.io.ObjectInputStream.readClassDescriptor@POLYN814843 in line [01815]",
      "_target" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN848241.readDesc",
      "_risk" : "//QC-JAVCWZ099[01815] In java.io.ObjectInputStream.readNonProxyDesc@POLYN848241[01815] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN848241.readDesc",
      "_method" : "---java.io.ObjectInputStream.readNonProxyDesc@POLYN848241.dummymethode_01843 in line [01843]",
      "_target" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN848241.cibledummy_01843",
      "_risk" : "//QC-JAVCWZ099[01843] In java.io.ObjectInputStream.readNonProxyDesc@POLYN848241[01843] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "50",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN359067.s",
      "_method" : "---java.io.PrintWriter.write@POLYN354040 in line [00587]",
      "_target" : "java.io.PrintWriter.write@POLYN354040.buf",
      "_risk" : "//QC-JAVCWZ099[00587] In java.io.PrintWriter.print@POLYN359067[00587] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN363591.x",
      "_method" : "---java.io.PrintWriter.print@POLYN359067 in line [00725]",
      "_target" : "java.io.PrintWriter.print@POLYN359067.s",
      "_risk" : "//QC-JAVCWZ099[00725] In java.io.PrintWriter.println@POLYN363591[00725] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintWriter.write@POLYN354040.buf",
      "_method" : "---java.io.PrintWriter.write@POLYN354040.dummymethode_00443 in line [00443]",
      "_target" : "java.io.PrintWriter.write@POLYN354040.cibledummy_00443",
      "_risk" : "//QC-JAVCWZ099[00443] In java.io.PrintWriter.write@POLYN354040[00443] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "51",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Reader.read@POLYN193708.return",
      "_method" : "---java.io.Reader.read@POLYN193708 in line [00100]",
      "_target" : "java.io.Reader.read@POLYN192710.n",
      "_risk" : "//QC-JAVCWZ099[00100] In java.io.Reader.read@POLYN192710[00100] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Reader.read@POLYN192710.n",
      "_method" : "---java.io.Reader.read@POLYN192710.dummymethode_00102 in line [00102]",
      "_target" : "java.io.Reader.read@POLYN192710.cibledummy_00102",
      "_risk" : "//QC-JAVCWZ099[00102] In java.io.Reader.read@POLYN192710[00102] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.Reader.read@POLYN193708.-1",
      "_method" : "---java.io.Reader.read@POLYN193708.dummymethode_00122 in line [00122]",
      "_target" : "java.io.Reader.read@POLYN193708.return",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.Reader.read@POLYN193708[00122] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "52",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.ServerSocket.accept@POLYN328848.(SocketImpl)null",
      "_method" : "---java.net.ServerSocket.accept@POLYN328848.dummymethode_00468 in line [00468]",
      "_target" : "java.net.ServerSocket.accept@POLYN328848.s",
      "_risk" : "//QC-JAVCWZ099[00468] In java.net.ServerSocket.accept@POLYN328848[00468] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.accept@POLYN328848.s",
      "_method" : "---java.net.ServerSocket.accept@POLYN328848.dummymethode_00470 in line [00470]",
      "_target" : "java.net.ServerSocket.accept@POLYN328848.return",
      "_risk" : "//QC-JAVCWZ099[00470] In java.net.ServerSocket.accept@POLYN328848[00470] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.net.ServerSocket.accept@POLYN328848.return",
      "_method" : "---java.net.ServerSocket.accept@POLYN328848 in line [00501]",
      "_target" : "java.net.ServerSocket.implAccept@POLYN329794.cibledummy_00501",
      "_risk" : "//QC-JAVCWZ099[00501] In java.net.ServerSocket.implAccept@POLYN329794[00501] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "53",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN248848.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN248848 in line [00273]",
      "_target" : "org.springframework.http.ResponseEntity.accepted@POLYN251051.return",
      "_risk" : "//QC-JAVCWE080[00273] In org.springframework.http.ResponseEntity.accepted@POLYN251051[00273] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN249453.HttpStatus.OK",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN248848 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN248848.status",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN249453[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN248848.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN248848.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN248848.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN248848[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "54",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedInputStream.read@POLYN255528.nread",
      "_method" : "---java.io.BufferedInputStream.read@POLYN255528.dummymethode_00348 in line [00348]",
      "_target" : "java.io.BufferedInputStream.read@POLYN255528.n",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.BufferedInputStream.read@POLYN255528[00348] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedInputStream.read@POLYN255528.n",
      "_method" : "---java.io.BufferedInputStream.read@POLYN255528.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedInputStream.read@POLYN255528.return",
      "_risk" : "//QC-JAVCWZ099[00350] In java.io.BufferedInputStream.read@POLYN255528[00350] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "55",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN170312.count",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN171608 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN171608.len",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN170312[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.write@POLYN171608.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN171608.dummymethode_00129 in line [00129]",
      "_target" : "java.io.BufferedOutputStream.count",
      "_risk" : "//QC-JAVCWZ099[00129] In java.io.BufferedOutputStream.write@POLYN171608[00129] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "56",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN171608.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN171608.dummymethode_00129 in line [00129]",
      "_target" : "java.io.BufferedOutputStream.count",
      "_risk" : "//QC-JAVCWZ099[00129] In java.io.BufferedOutputStream.write@POLYN171608[00129] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN369401.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN171608 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN171608.len",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN369401[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "57",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN170312.buf",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN171608 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN171608.b",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN170312[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.write@POLYN171608.b",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN171608 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN171608.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN171608[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "58",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN171608.b",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN171608 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN171608.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN171608[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN369401.buf",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN171608 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN171608.b",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN369401[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "59",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN170312.0",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN171608 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN171608.off",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN170312[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.write@POLYN171608.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN171608 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN171608.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN171608[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "60",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN171608.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN171608 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN171608.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN171608[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN369401.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN171608 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN171608.off",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN369401[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "61",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Writer.writeBuffer",
      "_method" : "---java.io.Writer.write@POLYN203165.dummymethode_00187 in line [00187]",
      "_target" : "java.io.Writer.write@POLYN203165.cbuf",
      "_risk" : "//QC-JAVCWZ099[00187] In java.io.Writer.write@POLYN203165[00187] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN203165.cbuf",
      "_method" : "---java.io.Writer.write@POLYN202331 in line [00192]",
      "_target" : "java.io.Writer.write@POLYN202331.cbuf",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.Writer.write@POLYN203165[00192] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "62",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.write@POLYN354354.len",
      "_method" : "---java.io.Writer.write@POLYN203165 in line [00456]",
      "_target" : "java.io.Writer.write@POLYN203165.len",
      "_risk" : "//QC-JAVCWZ099[00456] In java.io.PrintWriter.write@POLYN354354[00456] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN203165.len",
      "_method" : "---java.io.Writer.write@POLYN202331 in line [00192]",
      "_target" : "java.io.Writer.write@POLYN202331.len",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.Writer.write@POLYN203165[00192] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "63",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN193359.off",
      "_method" : "---java.io.BufferedWriter.write@POLYN193359.dummymethode_00192 in line [00192]",
      "_target" : "java.io.BufferedWriter.write@POLYN193359.b",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.BufferedWriter.write@POLYN193359[00192] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN193359.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN193359.dummymethode_00195 in line [00195]",
      "_target" : "java.io.BufferedWriter.write@POLYN193359.cibledummy_00195",
      "_risk" : "//QC-JAVCWZ099[00195] In java.io.BufferedWriter.write@POLYN193359[00195] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "64",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN193359.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN193359.dummymethode_00195 in line [00195]",
      "_target" : "java.io.BufferedWriter.write@POLYN193359.cibledummy_00195",
      "_risk" : "//QC-JAVCWZ099[00195] In java.io.BufferedWriter.write@POLYN193359[00195] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN193359.d",
      "_method" : "---java.io.BufferedWriter.write@POLYN193359.dummymethode_00196 in line [00196]",
      "_target" : "java.io.BufferedWriter.write@POLYN193359.b",
      "_risk" : "//QC-JAVCWZ099[00196] In java.io.BufferedWriter.write@POLYN193359[00196] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "65",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN195697.off",
      "_method" : "---java.io.BufferedWriter.write@POLYN195697.dummymethode_00223 in line [00223]",
      "_target" : "java.io.BufferedWriter.write@POLYN195697.b",
      "_risk" : "//QC-JAVCWZ099[00223] In java.io.BufferedWriter.write@POLYN195697[00223] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN195697.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN195697.dummymethode_00226 in line [00226]",
      "_target" : "java.io.BufferedWriter.write@POLYN195697.cibledummy_00226",
      "_risk" : "//QC-JAVCWZ099[00226] In java.io.BufferedWriter.write@POLYN195697[00226] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "66",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN195697.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN195697.dummymethode_00226 in line [00226]",
      "_target" : "java.io.BufferedWriter.write@POLYN195697.cibledummy_00226",
      "_risk" : "//QC-JAVCWZ099[00226] In java.io.BufferedWriter.write@POLYN195697[00226] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN195697.d",
      "_method" : "---java.io.BufferedWriter.write@POLYN195697.dummymethode_00227 in line [00227]",
      "_target" : "java.io.BufferedWriter.write@POLYN195697.b",
      "_risk" : "//QC-JAVCWZ099[00227] In java.io.BufferedWriter.write@POLYN195697[00227] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "67",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "null",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN855853.dummymethode_01964 in line [01964]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN855853.result",
      "_risk" : "//QC-JAVCWE099[01964] In java.io.ObjectInputStream.readEnum@POLYN855853[01964] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN855853.result",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN855853.dummymethode_01983 in line [01983]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN855853.return",
      "_risk" : "//QC-JAVCWE099[01983] In java.io.ObjectInputStream.readEnum@POLYN855853[01983] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "68",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN855853.en",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN855853.dummymethode_01970 in line [01970]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN855853.result",
      "_risk" : "//QC-JAVCWZ099[01970] In java.io.ObjectInputStream.readEnum@POLYN855853[01970] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN855853.result",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN855853.dummymethode_01983 in line [01983]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN855853.return",
      "_risk" : "//QC-JAVCWZ099[01983] In java.io.ObjectInputStream.readEnum@POLYN855853[01983] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "69",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN845399.\"null class\"",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN845399.dummymethode_01759 in line [01759]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN845399.resolveEx",
      "_risk" : "//QC-JAVCWZ099[01759] In java.io.ObjectInputStream.readProxyDesc@POLYN845399[01759] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN845399.resolveEx",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN845399.dummymethode_01786 in line [01786]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN845399.cibledummy_01786",
      "_risk" : "//QC-JAVCWZ099[01786] In java.io.ObjectInputStream.readProxyDesc@POLYN845399[01786] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "70",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN845399.ex",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN845399.dummymethode_01775 in line [01775]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN845399.resolveEx",
      "_risk" : "//QC-JAVCWZ099[01775] In java.io.ObjectInputStream.readProxyDesc@POLYN845399[01775] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN845399.resolveEx",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN845399.dummymethode_01786 in line [01786]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN845399.cibledummy_01786",
      "_risk" : "//QC-JAVCWZ099[01786] In java.io.ObjectInputStream.readProxyDesc@POLYN845399[01786] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "71",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN858117.obj",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN863272 in line [02027]",
      "_target" : "java.io.ObjectInputStream.readSerialData@POLYN863272.obj",
      "_risk" : "//QC-JAVCWZ099[02027] In java.io.ObjectInputStream.readOrdinaryObject@POLYN858117[02027] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readSerialData@POLYN863272.obj",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN863272.dummymethode_02136 in line [02136]",
      "_target" : "java.io.ObjectInputStream.readSerialData@POLYN863272.cibledummy_02136",
      "_risk" : "//QC-JAVCWZ099[02136] In java.io.ObjectInputStream.readSerialData@POLYN863272[02136] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "72",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "objs.length",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN603454.dummymethode_01364 in line [01364]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN603454.len",
      "_risk" : "//QC-JAVCWE099[01364] In java.io.ObjectOutputStream.writeArray@POLYN603454[01364] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603454.len",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [01365]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN603454.cibledummy_01365",
      "_risk" : "//QC-JAVCWE099[01365] In java.io.ObjectOutputStream.writeArray@POLYN603454[01365] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "73",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.reset@POLYN574185.TC_RESET",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [00501]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_risk" : "//QC-JAVCWZ099[00501] In java.io.ObjectOutputStream.reset@POLYN574185[00501] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582625[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "74",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603454.TC_ARRAY",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [01321]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_risk" : "//QC-JAVCWZ099[01321] In java.io.ObjectOutputStream.writeArray@POLYN603454[01321] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582625[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "75",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582625[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClass@POLYN598430.TC_CLASS",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [01212]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_risk" : "//QC-JAVCWZ099[01212] In java.io.ObjectOutputStream.writeClass@POLYN598430[01212] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "76",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582625[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeEnum@POLYN608376.TC_ENUM",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [01401]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_risk" : "//QC-JAVCWZ099[01401] In java.io.ObjectOutputStream.writeEnum@POLYN608376[01401] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "77",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582625[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN610658.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [01461]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_risk" : "//QC-JAVCWZ099[01461] In java.io.ObjectOutputStream.writeExternalData@POLYN610658[01461] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "78",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582625[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN616123.TC_EXCEPTION",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [01576]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_risk" : "//QC-JAVCWZ099[01576] In java.io.ObjectOutputStream.writeFatalException@POLYN616123[01576] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "79",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582625[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeHandle@POLYN598147.TC_REFERENCE",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [01204]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_risk" : "//QC-JAVCWZ099[01204] In java.io.ObjectOutputStream.writeHandle@POLYN598147[01204] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "80",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582625[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601427.TC_CLASSDESC",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [01275]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_risk" : "//QC-JAVCWZ099[01275] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601427[01275] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "81",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582625[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601427.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [01292]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_risk" : "//QC-JAVCWZ099[01292] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601427[01292] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "82",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582625[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNull@POLYN597982.TC_NULL",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [01197]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_risk" : "//QC-JAVCWZ099[01197] In java.io.ObjectOutputStream.writeNull@POLYN597982[01197] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "83",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582625[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609218.TC_OBJECT",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [01426]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_risk" : "//QC-JAVCWZ099[01426] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609218[01426] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "84",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582625[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN599921.TC_PROXYCLASSDESC",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [01247]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_risk" : "//QC-JAVCWZ099[01247] In java.io.ObjectOutputStream.writeProxyDesc@POLYN599921[01247] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "85",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582625[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN599921.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [01263]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_risk" : "//QC-JAVCWZ099[01263] In java.io.ObjectOutputStream.writeProxyDesc@POLYN599921[01263] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "86",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582625[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN611854.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [01498]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_risk" : "//QC-JAVCWZ099[01498] In java.io.ObjectOutputStream.writeSerialData@POLYN611854[01498] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "87",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582625[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN602677.TC_STRING",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [01305]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_risk" : "//QC-JAVCWZ099[01305] In java.io.ObjectOutputStream.writeString@POLYN602677[01305] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "88",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN582625[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN602677.TC_LONGSTRING",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN582625 in line [01308]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN582625.val",
      "_risk" : "//QC-JAVCWZ099[01308] In java.io.ObjectOutputStream.writeString@POLYN602677[01308] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "89",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeChar@POLYN630973.v",
      "_method" : "---java.io.ObjectOutputStream.writeChar@POLYN583185 in line [01925]",
      "_target" : "java.io.ObjectOutputStream.writeChar@POLYN583185.val",
      "_risk" : "//QC-JAVCWZ099[01925] In java.io.ObjectOutputStream.BlockDataOutputStream.writeChar@POLYN630973[01925] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeChar@POLYN583185.val",
      "_method" : "---java.io.ObjectOutputStream.writeChar@POLYN583185 in line [00786]",
      "_target" : "java.io.ObjectOutputStream.writeChar@POLYN583185.cibledummy_00786",
      "_risk" : "//QC-JAVCWZ099[00786] In java.io.ObjectOutputStream.writeChar@POLYN583185[00786] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "90",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603454.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN598930 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN598930.unshared",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN603454[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN598930.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN599921 in line [01229]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN599921.unshared",
      "_risk" : "//QC-JAVCWZ099[01229] In java.io.ObjectOutputStream.writeClassDesc@POLYN598930[01229] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "91",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN598930.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN599921 in line [01229]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN599921.unshared",
      "_risk" : "//QC-JAVCWZ099[01229] In java.io.ObjectOutputStream.writeClassDesc@POLYN598930[01229] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609218.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN598930 in line [01427]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN598930.unshared",
      "_risk" : "//QC-JAVCWZ099[01427] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609218[01427] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "92",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeDouble@POLYN633181.v",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN584305 in line [01970]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN584305.val",
      "_risk" : "//QC-JAVCWZ099[01970] In java.io.ObjectOutputStream.BlockDataOutputStream.writeDouble@POLYN633181[01970] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN584305.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN584305 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN584305.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN584305[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "93",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN584305.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN584305 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN584305.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN584305[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.protocol.DataOutputStreamWritable.writeDouble@POLYN166725.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN584305 in line [00074]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN584305.val",
      "_risk" : "//QC-JAVCWE099[00074] In org.apache.kafka.common.protocol.DataOutputStreamWritable.writeDouble@POLYN166725[00074] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "94",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN584305.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN584305 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN584305.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN584305[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeDouble@POLYN242377.value",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN584305 in line [00376]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN584305.val",
      "_risk" : "//QC-JAVCWE099[00376] In org.apache.kafka.common.utils.ByteUtils.writeDouble@POLYN242377[00376] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "95",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN616123.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN616123.dummymethode_01577 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN616123.cibledummy_01577",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN616123[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN568883.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN616123 in line [00351]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN616123.ex",
      "_risk" : "//QC-JAVCWZ099[00351] In java.io.ObjectOutputStream.writeObject@POLYN568883[00351] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "96",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN616123.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN616123.dummymethode_01577 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN616123.cibledummy_01577",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN616123[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN571101.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN616123 in line [00418]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN616123.ex",
      "_risk" : "//QC-JAVCWZ099[00418] In java.io.ObjectOutputStream.writeUnshared@POLYN571101[00418] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "97",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeFloat@POLYN632313.v",
      "_method" : "---java.io.ObjectOutputStream.writeFloat@POLYN584025 in line [01952]",
      "_target" : "java.io.ObjectOutputStream.writeFloat@POLYN584025.val",
      "_risk" : "//QC-JAVCWZ099[01952] In java.io.ObjectOutputStream.BlockDataOutputStream.writeFloat@POLYN632313[01952] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeFloat@POLYN584025.val",
      "_method" : "---java.io.ObjectOutputStream.writeFloat@POLYN584025 in line [00819]",
      "_target" : "java.io.ObjectOutputStream.writeFloat@POLYN584025.cibledummy_00819",
      "_risk" : "//QC-JAVCWZ099[00819] In java.io.ObjectOutputStream.writeFloat@POLYN584025[00819] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "98",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeInt@POLYN631879.v",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [01943]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_risk" : "//QC-JAVCWZ099[01943] In java.io.ObjectOutputStream.BlockDataOutputStream.writeInt@POLYN631879[01943] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583465[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "99",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603454.ia.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [01329]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_risk" : "//QC-JAVCWZ099[01329] In java.io.ObjectOutputStream.writeArray@POLYN603454[01329] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583465[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "100",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603454.ba.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [01333]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_risk" : "//QC-JAVCWZ099[01333] In java.io.ObjectOutputStream.writeArray@POLYN603454[01333] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583465[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "101",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603454.ja.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [01337]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_risk" : "//QC-JAVCWZ099[01337] In java.io.ObjectOutputStream.writeArray@POLYN603454[01337] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583465[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "102",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603454.fa.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [01341]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_risk" : "//QC-JAVCWZ099[01341] In java.io.ObjectOutputStream.writeArray@POLYN603454[01341] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583465[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "103",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603454.da.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [01345]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_risk" : "//QC-JAVCWZ099[01345] In java.io.ObjectOutputStream.writeArray@POLYN603454[01345] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583465[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "104",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603454.sa.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [01349]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_risk" : "//QC-JAVCWZ099[01349] In java.io.ObjectOutputStream.writeArray@POLYN603454[01349] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583465[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "105",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603454.ca.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [01353]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_risk" : "//QC-JAVCWZ099[01353] In java.io.ObjectOutputStream.writeArray@POLYN603454[01353] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583465[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "106",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603454.za.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [01357]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_risk" : "//QC-JAVCWZ099[01357] In java.io.ObjectOutputStream.writeArray@POLYN603454[01357] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583465[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "107",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583465[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN599921.ifaces.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [01252]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_risk" : "//QC-JAVCWZ099[01252] In java.io.ObjectOutputStream.writeProxyDesc@POLYN599921[01252] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "108",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583465[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.writeObject@POLYN247475.count",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00464]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_risk" : "//QC-JAVCWZ099[00464] In java.lang.StringBuilder.writeObject@POLYN247475[00464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "109",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583465[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.writeObject@POLYN680144.size",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [01359]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_risk" : "//QC-JAVCWZ099[01359] In java.util.HashMap.writeObject@POLYN680144[01359] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "110",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583465[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN473765.table.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [01221]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_risk" : "//QC-JAVCWZ099[01221] In java.util.Hashtable.writeHashtable@POLYN473765[01221] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "111",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583465[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN473765.count",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [01223]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_risk" : "//QC-JAVCWZ099[01223] In java.util.Hashtable.writeHashtable@POLYN473765[01223] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "112",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583465[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.protocol.DataOutputStreamWritable.writeInt@POLYN166151.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00056]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_risk" : "//QC-JAVCWE099[00056] In org.apache.kafka.common.protocol.DataOutputStreamWritable.writeInt@POLYN166151[00056] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "113",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583465[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.AbstractLegacyRecordBatch.writeHeader@POLYN229833.size",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00276]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_risk" : "//QC-JAVCWE099[00276] In org.apache.kafka.common.record.AbstractLegacyRecordBatch.writeHeader@POLYN229833[00276] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "114",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583465[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN177508.Serdes.ListSerde.NULL_ENTRY_VALUE",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00124]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_risk" : "//QC-JAVCWE099[00124] In org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN177508[00124] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "115",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583465[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN177508.bytes.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00129]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_risk" : "//QC-JAVCWE099[00129] In org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN177508[00129] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "116",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583465[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serializeNullIndexList@POLYN176583.nullIndex",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00103]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_risk" : "//QC-JAVCWE099[00103] In org.apache.kafka.common.serialization.ListSerializer.serializeNullIndexList@POLYN176583[00103] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "117",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583465[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN235085.usedVersion",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00149]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_risk" : "//QC-JAVCWE099[00149] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN235085[00149] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "118",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583465[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN235085.commonlySupportedVersion",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00159]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_risk" : "//QC-JAVCWE099[00159] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN235085[00159] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "119",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583465[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN235085.out",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00160]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_risk" : "//QC-JAVCWE099[00160] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN235085[00160] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "120",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583465[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN235085.errCode",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00168]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_risk" : "//QC-JAVCWE099[00168] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN235085[00168] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "121",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583465[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.writeTaskIdTo@POLYN168773.0",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00045]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583465.val",
      "_risk" : "//QC-JAVCWE099[00045] In org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.writeTaskIdTo@POLYN168773[00045] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "122",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593399.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeClass@POLYN598430 in line [01120]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593399.cibledummy_01120",
      "_risk" : "//QC-JAVCWZ099[01120] In java.io.ObjectOutputStream.writeObject0@POLYN593399[01120] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN568883.false",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593399 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593399.unshared",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN568883[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "123",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593399.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeClass@POLYN598430 in line [01120]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593399.cibledummy_01120",
      "_risk" : "//QC-JAVCWZ099[01120] In java.io.ObjectOutputStream.writeObject0@POLYN593399[01120] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN571101.true",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593399 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593399.unshared",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN571101[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "124",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN568883.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN569773 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN568883.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN568883[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.writeObject@POLYN247475.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN568883 in line [00465]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN568883.obj",
      "_risk" : "//QC-JAVCWZ099[00465] In java.lang.StringBuilder.writeObject@POLYN247475[00465] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "125",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN568883.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN569773 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN568883.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN568883[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.internalWriteEntries@POLYN704895.e.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN568883 in line [01782]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN568883.obj",
      "_risk" : "//QC-JAVCWZ099[01782] In java.util.HashMap.internalWriteEntries@POLYN704895[01782] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "126",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN568883.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN569773 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN568883.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN568883[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.internalWriteEntries@POLYN704895.e.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN568883 in line [01783]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN568883.obj",
      "_risk" : "//QC-JAVCWZ099[01783] In java.util.HashMap.internalWriteEntries@POLYN704895[01783] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "127",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN568883.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN569773 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN568883.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN568883[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN473765.entryStack.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN568883 in line [01238]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN568883.obj",
      "_risk" : "//QC-JAVCWZ099[01238] In java.util.Hashtable.writeHashtable@POLYN473765[01238] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "128",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN568883.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN569773 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN568883.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN568883[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN473765.entryStack.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN568883 in line [01239]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN568883.obj",
      "_risk" : "//QC-JAVCWZ099[01239] In java.util.Hashtable.writeHashtable@POLYN473765[01239] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "129",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN568883.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN569773 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN568883.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN568883[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1494957.p.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN568883 in line [01406]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN568883.obj",
      "_risk" : "//QC-JAVCWZ099[01406] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1494957[01406] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "130",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN568883.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN569773 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN568883.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN568883[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1494957.p.val",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN568883 in line [01407]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN568883.obj",
      "_risk" : "//QC-JAVCWZ099[01407] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1494957[01407] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "131",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN568883.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN569773 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN568883.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN568883[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1494957.null",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN568883 in line [01410]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN568883.obj",
      "_risk" : "//QC-JAVCWZ099[01410] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1494957[01410] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "132",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeShort@POLYN631426.v",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN582905 in line [01934]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN582905.val",
      "_risk" : "//QC-JAVCWZ099[01934] In java.io.ObjectOutputStream.BlockDataOutputStream.writeShort@POLYN631426[01934] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN582905.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN582905 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN582905.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN582905[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "133",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN582905.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN582905 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN582905.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN582905[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeStreamHeader@POLYN578629.STREAM_MAGIC",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN582905 in line [00636]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN582905.val",
      "_risk" : "//QC-JAVCWZ099[00636] In java.io.ObjectOutputStream.writeStreamHeader@POLYN578629[00636] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "134",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN582905.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN582905 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN582905.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN582905[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeStreamHeader@POLYN578629.STREAM_VERSION",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN582905 in line [00637]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN582905.val",
      "_risk" : "//QC-JAVCWZ099[00637] In java.io.ObjectOutputStream.writeStreamHeader@POLYN578629[00637] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "135",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN235014.-1",
      "_method" : "---java.io.PipedInputStream.read@POLYN235014.dummymethode_00318 in line [00318]",
      "_target" : "java.io.PipedInputStream.read@POLYN235014.return",
      "_risk" : "//QC-JAVCWZ099[00318] In java.io.PipedInputStream.read@POLYN235014[00318] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN235014.return",
      "_method" : "---java.io.PipedInputStream.read@POLYN235014 in line [00377]",
      "_target" : "java.io.PipedInputStream.read@POLYN238029.c",
      "_risk" : "//QC-JAVCWZ099[00377] In java.io.PipedInputStream.read@POLYN238029[00377] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "136",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN235014.ret",
      "_method" : "---java.io.PipedInputStream.read@POLYN235014.dummymethode_00340 in line [00340]",
      "_target" : "java.io.PipedInputStream.read@POLYN235014.return",
      "_risk" : "//QC-JAVCWZ099[00340] In java.io.PipedInputStream.read@POLYN235014[00340] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN235014.return",
      "_method" : "---java.io.PipedInputStream.read@POLYN235014 in line [00377]",
      "_target" : "java.io.PipedInputStream.read@POLYN238029.c",
      "_risk" : "//QC-JAVCWZ099[00377] In java.io.PipedInputStream.read@POLYN238029[00377] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "137",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN238029.(buffer.length-out)",
      "_method" : "---java.io.PipedInputStream.read@POLYN238029.dummymethode_00388 in line [00388]",
      "_target" : "java.io.PipedInputStream.read@POLYN238029.available",
      "_risk" : "//QC-JAVCWZ099[00388] In java.io.PipedInputStream.read@POLYN238029[00388] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN238029.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN238029.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN238029.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN238029[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "138",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN238029.(in-out)",
      "_method" : "---java.io.PipedInputStream.read@POLYN238029.dummymethode_00388 in line [00388]",
      "_target" : "java.io.PipedInputStream.read@POLYN238029.available",
      "_risk" : "//QC-JAVCWZ099[00388] In java.io.PipedInputStream.read@POLYN238029[00388] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN238029.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN238029.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN238029.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN238029[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "139",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "buffer.length-out",
      "_method" : "---java.io.PipedInputStream.read@POLYN238029.dummymethode_00390 in line [00390]",
      "_target" : "java.io.PipedInputStream.read@POLYN238029.available",
      "_risk" : "//QC-JAVCWE099[00390] In java.io.PipedInputStream.read@POLYN238029[00390] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN238029.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN238029.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN238029.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN238029[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "140",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "len-1",
      "_method" : "---java.io.PipedInputStream.read@POLYN238029.dummymethode_00395 in line [00395]",
      "_target" : "java.io.PipedInputStream.read@POLYN238029.available",
      "_risk" : "//QC-JAVCWE099[00395] In java.io.PipedInputStream.read@POLYN238029[00395] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN238029.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN238029.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN238029.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN238029[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "141",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedReader.read@POLYN213215.-1",
      "_method" : "---java.io.PipedReader.read@POLYN213215.dummymethode_00001 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN213215.return",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN213215[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedReader.read@POLYN213215.return",
      "_method" : "---java.io.PipedReader.read@POLYN213215 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN215819.c",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN215819[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "142",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedReader.read@POLYN213215.ret",
      "_method" : "---java.io.PipedReader.read@POLYN213215.dummymethode_00001 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN213215.return",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN213215[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedReader.read@POLYN213215.return",
      "_method" : "---java.io.PipedReader.read@POLYN213215 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN215819.c",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN215819[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "143",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN377578.x",
      "_method" : "---java.io.PrintStream.print@POLYN372790 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN372790.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN377578[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.tools.TransactionsCommand.printRow@POLYN322938.rowBuilder",
      "_method" : "---java.io.PrintStream.println@POLYN377578 in line [00929]",
      "_target" : "java.io.PrintStream.println@POLYN377578.x",
      "_risk" : "//QC-JAVCWE099[00929] In org.apache.kafka.tools.TransactionsCommand.printRow@POLYN322938[00929] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "144",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN377578.x",
      "_method" : "---java.io.PrintStream.print@POLYN372790 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN372790.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN377578[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.agent.Agent.exec@POLYN199154.\"Unable to create the task controller.\"",
      "_method" : "---java.io.PrintStream.println@POLYN377578 in line [00171]",
      "_target" : "java.io.PrintStream.println@POLYN377578.x",
      "_risk" : "//QC-JAVCWE099[00171] In org.apache.kafka.trogdor.agent.Agent.exec@POLYN199154[00171] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "145",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN377578.x",
      "_method" : "---java.io.PrintStream.print@POLYN372790 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN372790.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN377578[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.agent.Agent.exec@POLYN199154.\"createWorker failed\"",
      "_method" : "---java.io.PrintStream.println@POLYN377578 in line [00186]",
      "_target" : "java.io.PrintStream.println@POLYN377578.x",
      "_risk" : "//QC-JAVCWE099[00186] In org.apache.kafka.trogdor.agent.Agent.exec@POLYN199154[00186] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "146",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN380745.x",
      "_method" : "---java.io.PrintStream.print@POLYN376296 in line [00806]",
      "_target" : "java.io.PrintStream.println@POLYN380745.cibledummy_00806",
      "_risk" : "//QC-JAVCWE099[00806] In java.io.PrintStream.println@POLYN380745[00806] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN164814.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN380745 in line [00067]",
      "_target" : "java.io.PrintStream.println@POLYN380745.x",
      "_risk" : "//QC-JAVCWE099[00067] In org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN164814[00067] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "147",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN380745.x",
      "_method" : "---java.io.PrintStream.print@POLYN376296 in line [00806]",
      "_target" : "java.io.PrintStream.println@POLYN380745.cibledummy_00806",
      "_risk" : "//QC-JAVCWE099[00806] In java.io.PrintStream.println@POLYN380745[00806] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN174448.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN380745 in line [00081]",
      "_target" : "java.io.PrintStream.println@POLYN380745.x",
      "_risk" : "//QC-JAVCWE099[00081] In org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN174448[00081] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "148",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.append@POLYN372707.\"null\"",
      "_method" : "---java.io.PrintWriter.write@POLYN352742 in line [01002]",
      "_target" : "java.io.PrintWriter.write@POLYN352742.c",
      "_risk" : "//QC-JAVCWZ099[01002] In java.io.PrintWriter.append@POLYN372707[01002] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.write@POLYN352742.c",
      "_method" : "---java.io.Writer.write@POLYN201272 in line [00405]",
      "_target" : "java.io.Writer.write@POLYN201272.c",
      "_risk" : "//QC-JAVCWZ099[00405] In java.io.PrintWriter.write@POLYN352742[00405] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "149",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN356561.c",
      "_method" : "---java.io.PrintWriter.print@POLYN356561.dummymethode_00517 in line [00517]",
      "_target" : "java.io.PrintWriter.print@POLYN356561.cibledummy_00517",
      "_risk" : "//QC-JAVCWZ099[00517] In java.io.PrintWriter.print@POLYN356561[00517] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN361273.x",
      "_method" : "---java.io.PrintWriter.print@POLYN356561 in line [00655]",
      "_target" : "java.io.PrintWriter.print@POLYN356561.c",
      "_risk" : "//QC-JAVCWZ099[00655] In java.io.PrintWriter.println@POLYN361273[00655] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "150",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN364051.x",
      "_method" : "---java.io.PrintWriter.print@POLYN359531 in line [00739]",
      "_target" : "java.io.PrintWriter.println@POLYN364051.cibledummy_00739",
      "_risk" : "//QC-JAVCWE099[00739] In java.io.PrintWriter.println@POLYN364051[00739] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.shell.FindCommandHandler.find@POLYN167752.path",
      "_method" : "---java.io.PrintWriter.println@POLYN364051 in line [00098]",
      "_target" : "java.io.PrintWriter.println@POLYN364051.x",
      "_risk" : "//QC-JAVCWE099[00098] In org.apache.kafka.shell.FindCommandHandler.find@POLYN167752[00098] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "151",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN364051.x",
      "_method" : "---java.io.PrintWriter.print@POLYN359531 in line [00739]",
      "_target" : "java.io.PrintWriter.println@POLYN364051.cibledummy_00739",
      "_risk" : "//QC-JAVCWE099[00739] In java.io.PrintWriter.println@POLYN364051[00739] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN200179.intro",
      "_method" : "---java.io.PrintWriter.println@POLYN364051 in line [00162]",
      "_target" : "java.io.PrintWriter.println@POLYN364051.x",
      "_risk" : "//QC-JAVCWE099[00162] In org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN200179[00162] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "152",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.write@POLYN354354.off",
      "_method" : "---java.io.Writer.write@POLYN203165 in line [00456]",
      "_target" : "java.io.Writer.write@POLYN203165.off",
      "_risk" : "//QC-JAVCWZ099[00456] In java.io.PrintWriter.write@POLYN354354[00456] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN203165.off",
      "_method" : "---java.io.Writer.write@POLYN203165.dummymethode_00191 in line [00191]",
      "_target" : "java.io.Writer.write@POLYN203165.cibledummy_00191",
      "_risk" : "//QC-JAVCWZ099[00191] In java.io.Writer.write@POLYN203165[00191] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "153",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "50",
      "_method" : "---java.net.ServerSocket.ServerSocket@POLYN319873.dummymethode_00218 in line [00218]",
      "_target" : "java.net.ServerSocket.ServerSocket@POLYN319873.backlog",
      "_risk" : "//QC-JAVCWE099[00218] In java.net.ServerSocket.ServerSocket@POLYN319873[00218] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.ServerSocket@POLYN319873.backlog",
      "_method" : "---java.net.ServerSocket.bind@POLYN324338 in line [00220]",
      "_target" : "java.net.ServerSocket.ServerSocket@POLYN319873.cibledummy_00220",
      "_risk" : "//QC-JAVCWE099[00220] In java.net.ServerSocket.ServerSocket@POLYN319873[00220] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "154",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.ServerSocket.getImpl@POLYN320956.return",
      "_method" : "---java.net.ServerSocket.getImpl@POLYN320956 in line [00356]",
      "_target" : "java.net.ServerSocket.bind@POLYN324338.cibledummy_00356",
      "_risk" : "//QC-JAVCWZ099[00356] In java.net.ServerSocket.bind@POLYN324338[00356] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.impl",
      "_method" : "---java.net.ServerSocket.getImpl@POLYN320956.dummymethode_00241 in line [00241]",
      "_target" : "java.net.ServerSocket.getImpl@POLYN320956.return",
      "_risk" : "//QC-JAVCWZ099[00241] In java.net.ServerSocket.getImpl@POLYN320956[00241] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "155",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "true",
      "_method" : "---java.net.ServerSocket.close@POLYN331715.dummymethode_00542 in line [00542]",
      "_target" : "java.net.ServerSocket.closed",
      "_risk" : "//QC-JAVCWE099[00542] In java.net.ServerSocket.close@POLYN331715[00542] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.closed",
      "_method" : "---java.net.ServerSocket.isClosed@POLYN332825.dummymethode_00585 in line [00585]",
      "_target" : "java.net.ServerSocket.isClosed@POLYN332825.return",
      "_risk" : "//QC-JAVCWE099[00585] In java.net.ServerSocket.isClosed@POLYN332825[00585] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "156",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.Socket@POLYN479379.address",
      "_method" : "---java.net.Socket.connect@POLYN483158 in line [00415]",
      "_target" : "java.net.Socket.connect@POLYN483158.endpoint",
      "_risk" : "//QC-JAVCWZ099[00415] In java.net.Socket.Socket@POLYN479379[00415] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.connect@POLYN483158.endpoint",
      "_method" : "---java.net.Socket.connect@POLYN483808 in line [00518]",
      "_target" : "java.net.Socket.connect@POLYN483158.cibledummy_00518",
      "_risk" : "//QC-JAVCWZ099[00518] In java.net.Socket.connect@POLYN483158[00518] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "157",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.connect@POLYN483158.0",
      "_method" : "---java.net.Socket.connect@POLYN483808 in line [00518]",
      "_target" : "java.net.Socket.connect@POLYN483808.timeout",
      "_risk" : "//QC-JAVCWZ099[00518] In java.net.Socket.connect@POLYN483158[00518] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.connect@POLYN483808.timeout",
      "_method" : "---java.net.Socket.connect@POLYN483808 in line [00568]",
      "_target" : "java.net.Socket.connect@POLYN483808.cibledummy_00568",
      "_risk" : "//QC-JAVCWZ099[00568] In java.net.Socket.connect@POLYN483808[00568] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "158",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.Socket@POLYN479379.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN480309 in line [00411]",
      "_target" : "java.net.Socket.createImpl@POLYN480309.stream",
      "_risk" : "//QC-JAVCWZ099[00411] In java.net.Socket.Socket@POLYN479379[00411] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.createImpl@POLYN480309.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN480309.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN480309.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN480309[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "159",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.connect@POLYN483808.true",
      "_method" : "---java.net.Socket.createImpl@POLYN480309 in line [00566]",
      "_target" : "java.net.Socket.createImpl@POLYN480309.stream",
      "_risk" : "//QC-JAVCWZ099[00566] In java.net.Socket.connect@POLYN483808[00566] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.createImpl@POLYN480309.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN480309.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN480309.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN480309[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "160",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.createImpl@POLYN480309.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN480309.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN480309.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN480309[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.getImpl@POLYN482640.true",
      "_method" : "---java.net.Socket.createImpl@POLYN480309 in line [00500]",
      "_target" : "java.net.Socket.createImpl@POLYN480309.stream",
      "_risk" : "//QC-JAVCWZ099[00500] In java.net.Socket.getImpl@POLYN482640[00500] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "161",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN257580.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN257580.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN257580[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.body",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.dummymethode_00578 in line [00578]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_risk" : "//QC-JAVCWE080[00578] In org.springframework.http.ResponseEntity.DefaultBuilder[00578] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "162",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN257580.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN257580.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN257580[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this.headers",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.dummymethode_00578 in line [00578]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_risk" : "//QC-JAVCWE080[00578] In org.springframework.http.ResponseEntity.DefaultBuilder[00578] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "163",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN257580.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN257580.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN257580[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this.statusCode",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.dummymethode_00578 in line [00578]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_risk" : "//QC-JAVCWE080[00578] In org.springframework.http.ResponseEntity.DefaultBuilder[00578] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "164",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN298941.return",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN298941 in line [00215]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.filterTo@POLYN277972.info",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN320618.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN322839 in line [00717]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN322839.offset",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN306934.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN320618 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN320618.offset",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309523.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN306934 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN306934.offset",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN310566.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309523 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309523.offset",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.lastOffset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN298941.dummymethode_00259 in line [00259]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN298941.shallowOffsetOfMaxTimestamp",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN298941.shallowOffsetOfMaxTimestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN298941.dummymethode_00262 in line [00262]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN298941.return",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN322839.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN322839.dummymethode_00751 in line [00751]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.lastOffset",
      "_risk" : ""
    } ]
  }, {
    "_id" : "165",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN897283.b",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.b",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884367 in line [03031]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.nread",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.b",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884367 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.b",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920623.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.b",
      "_method" : "---java.io.InputStream.read@POLYN257022 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN884367[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "166",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884367 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.nread",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.b",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884367 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.b",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920623.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.b",
      "_method" : "---java.io.InputStream.read@POLYN257022 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN884367[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.read@POLYN815806.buf",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.b",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN815806[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "167",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN897283.len",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.len",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884367 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.nread",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.len",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884367 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.len",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920623.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.len",
      "_method" : "---java.io.InputStream.read@POLYN257022 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN884367[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "168",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884367 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.nread",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.len",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884367 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.len",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920623.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.len",
      "_method" : "---java.io.InputStream.read@POLYN257022 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN884367[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.read@POLYN815806.len",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.len",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN815806[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "169",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN897283.off",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884367 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.nread",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.off",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884367 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.off",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920623.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.off",
      "_method" : "---java.io.InputStream.read@POLYN257022 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN884367[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "170",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884367 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.nread",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.off",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884367 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.off",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920623.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.off",
      "_method" : "---java.io.InputStream.read@POLYN257022 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN884367[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884367.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.read@POLYN815806.off",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN900768.off",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN815806[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "171",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN320618.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN322839 in line [00717]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN322839.timestamp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN306934.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN320618 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN320618.timestamp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309523.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN306934 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN306934.timestamp",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN310566.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309523 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309523.timestamp",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN322839.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN322839.dummymethode_00754 in line [00754]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.maxTimestamp",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.maxTimestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.writeDefaultBatchHeader@POLYN304378.dummymethode_00400 in line [00400]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeDefaultBatchHeader@POLYN304378.maxTimestamp",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeDefaultBatchHeader@POLYN304378.maxTimestamp",
      "_method" : "---org.apache.kafka.common.record.DefaultRecordBatch.writeHeader@POLYN281479 in line [00402]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeDefaultBatchHeader@POLYN304378.cibledummy_00402",
      "_risk" : ""
    } ]
  }, {
    "_id" : "172",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN209831.struct",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN209831.dummymethode_00001 in line [00001]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN209831.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.InputStream.read@POLYN252059.return",
      "_method" : "---java.io.InputStream.read@POLYN252059 in line [00001]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN209831.struct",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN209831[00001] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.assignmentSnapshot",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN243599.dummymethode_00170 in line [00170]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN243599.localAssignmentSnapshot",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN243599.localAssignmentSnapshot",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN243599.dummymethode_00171 in line [00171]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN243599.workerState",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN243599.workerState",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN243599.dummymethode_00174 in line [00174]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN243599.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN209831.return",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN209831 in line [00186]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.onJoinComplete@POLYN244479.newAssignment",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.onJoinComplete@POLYN244479.newAssignment",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.onJoinComplete@POLYN244479.dummymethode_00209 in line [00209]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.assignmentSnapshot",
      "_risk" : ""
    } ]
  }, {
    "_id" : "173",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251663.return",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251663 in line [00372]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251008.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256189.return",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256189 in line [00406]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251663.keySize",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251663.skipBuffer",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256189 in line [00421]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256189.buffer",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251663.keySize",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251663.dummymethode_00428 in line [00428]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251663.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256189.buffer",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.readVarint@POLYN234562 in line [00473]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256189.sizeInBytes",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256189.sizeInBytes",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256189.dummymethode_00475 in line [00475]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256189.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "174",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "3",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643653.dummymethode_02146 in line [02146]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643653.utflen",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643653.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643653.dummymethode_02153 in line [02153]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643653.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646134.utflen",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN583745 in line [02188]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646134.cibledummy_02188",
      "_risk" : "//QC-JAVCWE099[02188] In java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646134[02188] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643653.return",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643653 in line [01303]",
      "_target" : "java.io.ObjectOutputStream.writeString@POLYN602677.utflen",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN602677.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646134 in line [01309]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646134.utflen",
      "_risk" : ""
    } ]
  }, {
    "_id" : "175",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "2",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643653.dummymethode_02148 in line [02148]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643653.utflen",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643653.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643653.dummymethode_02153 in line [02153]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643653.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646134.utflen",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN583745 in line [02188]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646134.cibledummy_02188",
      "_risk" : "//QC-JAVCWE099[02188] In java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646134[02188] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643653.return",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643653 in line [01303]",
      "_target" : "java.io.ObjectOutputStream.writeString@POLYN602677.utflen",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN602677.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646134 in line [00001]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646134.utflen",
      "_risk" : ""
    } ]
  }, {
    "_id" : "176",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN253815.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN255361 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255361.magic",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255361.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN256707 in line [00428]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN256707.magic",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN256707.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN256707.dummymethode_00462 in line [00462]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN256707.cibledummy_00462",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252728.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN253815 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN253815.magic",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN305815.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252728 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252728.magic",
      "_risk" : ""
    } ]
  }, {
    "_id" : "177",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN191969.position",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN465013 in line [00215]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN465013.position",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466281.position",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN466281.dummymethode_01114 in line [01114]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466281.currentPosition",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466281.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN257022 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN257022.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN466281[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN465013.position",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN466281 in line [01090]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466281.position",
      "_risk" : ""
    } ]
  }, {
    "_id" : "178",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN153356.return",
      "_method" : "---org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN153356 in line [00391]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251663.bytesRemaining",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251663.bytesRemaining",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256189 in line [00421]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256189.bytesRemaining",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256189.bytesRemaining",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readMore@POLYN257826 in line [00465]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN257826.bytesRemaining",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN153356.value",
      "_method" : "---org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN153356.dummymethode_00026 in line [00026]",
      "_target" : "org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN153356.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "179",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN191613.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN191613 in line [00134]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.checksum@POLYN189225.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.fullBatch",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN191613.dummymethode_00203 in line [00203]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN191613.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.toMemoryRecordBatch@POLYN191159.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.toMemoryRecordBatch@POLYN191159 in line [00217]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN191969.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN191969.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN191969 in line [00196]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.fullBatch",
      "_risk" : ""
    } ]
  }, {
    "_id" : "180",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN191613.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN191613 in line [00124]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.compressionType@POLYN188961.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.fullBatch",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN191613.dummymethode_00203 in line [00203]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN191613.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN191969.buffer",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.toMemoryRecordBatch@POLYN191159 in line [00217]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN191969.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN191969.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN191969 in line [00001]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.fullBatch",
      "_risk" : ""
    } ]
  }, {
    "_id" : "181",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN274822.return",
      "_method" : "---org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN274822 in line [00188]",
      "_target" : "org.apache.kafka.common.record.FileRecords.append@POLYN246984.written",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileRecords.append@POLYN246984.written",
      "_method" : "---org.apache.kafka.common.record.FileRecords.append@POLYN246984.dummymethode_00189 in line [00189]",
      "_target" : "org.apache.kafka.common.record.FileRecords.append@POLYN246984.cibledummy_00189",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN274822.buffer",
      "_method" : "---java.io.FileOutputStream.write@POLYN243210 in line [00092]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN274822.written",
      "_risk" : "//QC-JAVCWE099[00092] In org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN274822[00092] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN274822.written",
      "_method" : "---org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN274822.dummymethode_00094 in line [00094]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN274822.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "182",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN274822.return",
      "_method" : "---org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN274822 in line [00001]",
      "_target" : "org.apache.kafka.common.record.FileRecords.append@POLYN246984.written",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileRecords.append@POLYN246984.written",
      "_method" : "---org.apache.kafka.common.record.FileRecords.append@POLYN246984.dummymethode_00189 in line [00189]",
      "_target" : "org.apache.kafka.common.record.FileRecords.append@POLYN246984.cibledummy_00189",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN274822.sourcedummy",
      "_method" : "---java.io.FileOutputStream.write@POLYN243210 in line [00092]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN274822.written",
      "_risk" : "//QC-JAVCWE099[00092] In org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN274822[00092] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN274822.written",
      "_method" : "---org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN274822.dummymethode_00094 in line [00094]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN274822.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "183",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN253815.key",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN255361 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255361.key",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255361.key",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN256707 in line [00428]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN256707.key",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN256707.key",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN256707.dummymethode_00476 in line [00476]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN256707.cibledummy_00476",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252728.null",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN253815 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN253815.key",
      "_risk" : ""
    } ]
  }, {
    "_id" : "184",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN253815.newByteBufferOutputStream(buffer)",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN253815.dummymethode_00389 in line [00389]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN253815.out",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN253815.out",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN255361 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255361.out",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255361.out",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN256707 in line [00428]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN256707.out",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN256707.out",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN256707.dummymethode_00476 in line [00476]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN256707.cibledummy_00476",
      "_risk" : ""
    } ]
  }, {
    "_id" : "185",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252728.buffer",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN253815 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN253815.buffer",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN172783.return",
      "_method" : "---org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN172783 in line [00416]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN305815.buffer",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN305815.buffer",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252728 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252728.buffer",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN172783.buffer",
      "_method" : "---org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN172783.dummymethode_00080 in line [00080]",
      "_target" : "org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN172783.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "186",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileRecords.channel@POLYN243300.return",
      "_method" : "---org.apache.kafka.common.record.FileRecords.channel@POLYN243300 in line [00212]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN191969.channel",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN191969.channel",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN465013 in line [00215]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN465013.channel",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.FileRecords.channel@POLYN243300.channel",
      "_method" : "---org.apache.kafka.common.record.FileRecords.channel@POLYN243300.dummymethode_00107 in line [00107]",
      "_target" : "org.apache.kafka.common.record.FileRecords.channel@POLYN243300.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN465013.channel",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN466281 in line [01090]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN465013.cibledummy_01090",
      "_risk" : ""
    } ]
  }, {
    "_id" : "187",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.handleInboundMessage@POLYN608733.currentTimeMs",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN606454 in line [01668]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN606454.currentTimeMs",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN606454.currentTimeMs",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN573913 in line [01622]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN573913.currentTimeMs",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Time.milliseconds@POLYN164513.return",
      "_method" : "---org.apache.kafka.common.utils.Time.milliseconds@POLYN164513 in line [02232]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.poll@POLYN633447.currentTimeMs",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.poll@POLYN633447.currentTimeMs",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.handleInboundMessage@POLYN608733 in line [02249]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.handleInboundMessage@POLYN608733.currentTimeMs",
      "_risk" : ""
    } ]
  }, {
    "_id" : "188",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFully@POLYN820213.buf",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN902987 in line [01067]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN902987.b",
      "_risk" : "//QC-JAVCWE099[01067] In java.io.ObjectInputStream.readFully@POLYN820213[01067] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN164929.arr",
      "_method" : "---java.io.ObjectInputStream.readFully@POLYN820213 in line [00081]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN820213.buf",
      "_risk" : "//QC-JAVCWE099[00081] In org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN164929[00081] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.protocol.DataInputStreamReadable.readByteBuffer@POLYN165508.arr",
      "_method" : "---org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN164929 in line [00099]",
      "_target" : "org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN164929.arr",
      "_risk" : ""
    } ]
  }, {
    "_id" : "189",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251008.input",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251663 in line [00372]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251663.input",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251663.input",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256189 in line [00421]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256189.input",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256189.input",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readMore@POLYN257826 in line [00465]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN257826.input",
      "_risk" : ""
    } ]
  }, {
    "_id" : "190",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN253815.compressionType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN255361 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255361.compressionType",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252728.compressionType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN253815 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN253815.compressionType",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN305815.compressionType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252728 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252728.compressionType",
      "_risk" : ""
    } ]
  }, {
    "_id" : "191",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN253815.timestampType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN255361 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255361.timestampType",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252728.timestampType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN253815 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN253815.timestampType",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN305815.timestampType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252728 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252728.timestampType",
      "_risk" : ""
    } ]
  }, {
    "_id" : "192",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN306934.headers",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN320618 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN320618.headers",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309523.headers",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN306934 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN306934.headers",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN310566.Record.EMPTY_HEADERS",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309523 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309523.headers",
      "_risk" : ""
    } ]
  }, {
    "_id" : "193",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN306934.key",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN320618 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN320618.key",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309523.key",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN306934 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN306934.key",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN310566.key",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309523 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309523.key",
      "_risk" : ""
    } ]
  }, {
    "_id" : "194",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN306934.value",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN320618 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN320618.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309523.value",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN306934 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN306934.value",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN310566.value",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309523 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309523.value",
      "_risk" : ""
    } ]
  }, {
    "_id" : "195",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN321363.sourcedummy",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN256707 in line [00730]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN321363.crc",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN321363.crc",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN321363.dummymethode_00732 in line [00732]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN321363.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN321363.return",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN321363 in line [00456]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN306934.cibledummy_00456",
      "_risk" : ""
    } ]
  }, {
    "_id" : "196",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN177508.null",
      "_method" : "---org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN177508.dummymethode_00110 in line [00110]",
      "_target" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN177508.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN177508.return",
      "_method" : "---org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN177508 in line [00119]",
      "_target" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN177508.size",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN177508.size",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583465 in line [00120]",
      "_target" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN177508.cibledummy_00120",
      "_risk" : "//QC-JAVCWE099[00120] In org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN177508[00120] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "197",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN188648.return",
      "_method" : "---org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN188648 in line [00233]",
      "_target" : "org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN251919.loadedCheckpoints",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN251919.loadedCheckpoints",
      "_method" : "---org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN251919 in line [00235]",
      "_target" : "org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN251919.cibledummy_00235",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN188648.offsets",
      "_method" : "---org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN188648.dummymethode_00182 in line [00182]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN188648.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "198",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN367946.now",
      "_method" : "---org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN367946 in line [00463]",
      "_target" : "org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN367946.cibledummy_00463",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN367946.timeoutException",
      "_method" : "---org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN367946 in line [00463]",
      "_target" : "org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN367946.offsetResetter",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN367946.offsetResetter",
      "_method" : "---org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN367946 in line [00479]",
      "_target" : "org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN367946.now",
      "_risk" : ""
    } ]
  }, {
    "_id" : "199",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readBoolean@POLYN817494.return",
      "_method" : "---java.io.ObjectInputStream.readBoolean@POLYN817494 in line [03208]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readBooleans@POLYN909776.v[off++]",
      "_risk" : "//QC-JAVCWZ099[03208] In java.io.ObjectInputStream.BlockDataInputStream.readBooleans@POLYN909776[03208] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readBoolean@POLYN903776.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readBoolean@POLYN903776 in line [00957]",
      "_target" : "java.io.ObjectInputStream.readBoolean@POLYN817494.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "200",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFully@POLYN820685.buf",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN902987 in line [01084]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN820685.cibledummy_01084",
      "_risk" : "//QC-JAVCWE099[01084] In java.io.ObjectInputStream.readFully@POLYN820685[01084] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN257826.array",
      "_method" : "---java.io.ObjectInputStream.readFully@POLYN820685 in line [00507]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN820685.buf",
      "_risk" : "//QC-JAVCWE099[00507] In org.apache.kafka.common.record.DefaultRecord.readMore@POLYN257826[00507] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "201",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFully@POLYN820685.len",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN902987 in line [01084]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN820685.cibledummy_01084",
      "_risk" : "//QC-JAVCWE099[01084] In java.io.ObjectInputStream.readFully@POLYN820685[01084] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN257826.bytesRead",
      "_method" : "---java.io.ObjectInputStream.readFully@POLYN820685 in line [00507]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN820685.len",
      "_risk" : "//QC-JAVCWE099[00507] In org.apache.kafka.common.record.DefaultRecord.readMore@POLYN257826[00507] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "202",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFully@POLYN820685.off",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN902987 in line [01084]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN820685.cibledummy_01084",
      "_risk" : "//QC-JAVCWE099[01084] In java.io.ObjectInputStream.readFully@POLYN820685[01084] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN257826.bytesToLeftShift",
      "_method" : "---java.io.ObjectInputStream.readFully@POLYN820685 in line [00507]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN820685.off",
      "_risk" : "//QC-JAVCWE099[00507] In org.apache.kafka.common.record.DefaultRecord.readMore@POLYN257826[00507] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "203",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626340.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278 in line [01814]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.off",
      "_method" : "---java.io.OutputStream.write@POLYN189172 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN189172.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "204",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626562.off",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278 in line [01818]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.off",
      "_method" : "---java.io.OutputStream.write@POLYN189172 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN189172.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "205",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.off",
      "_method" : "---java.io.OutputStream.write@POLYN189172 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN189172.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.writeFields@POLYN621894.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278 in line [01695]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "206",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.off",
      "_method" : "---java.io.OutputStream.write@POLYN189172 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN189172.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN613705.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278 in line [01534]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "207",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.off",
      "_method" : "---java.io.OutputStream.write@POLYN189172 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN189172.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN580239.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278 in line [00690]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "208",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.off",
      "_method" : "---java.io.OutputStream.write@POLYN189172 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN189172.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN580657.off",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "209",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.off",
      "_method" : "---java.io.OutputStream.write@POLYN189172 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN189172.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603454.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278 in line [01334]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "210",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626340.b",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278 in line [01814]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.b",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.b",
      "_method" : "---java.io.OutputStream.write@POLYN189172 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "211",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626562.b",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278 in line [01818]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.b",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.b",
      "_method" : "---java.io.OutputStream.write@POLYN189172 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "212",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.b",
      "_method" : "---java.io.OutputStream.write@POLYN189172 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.writeFields@POLYN621894.primVals",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278 in line [01695]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "213",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.b",
      "_method" : "---java.io.OutputStream.write@POLYN189172 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN613705.primVals",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278 in line [01534]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "214",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.b",
      "_method" : "---java.io.OutputStream.write@POLYN189172 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN580239.buf",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278 in line [00690]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "215",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.b",
      "_method" : "---java.io.OutputStream.write@POLYN189172 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN580657.buf",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "216",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.b",
      "_method" : "---java.io.OutputStream.write@POLYN189172 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603454.ba",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278 in line [01334]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "217",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626340.b.length",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278 in line [01814]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.len",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.len",
      "_method" : "---java.io.OutputStream.write@POLYN189172 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "218",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626562.len",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278 in line [01818]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.len",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.len",
      "_method" : "---java.io.OutputStream.write@POLYN189172 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "219",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.len",
      "_method" : "---java.io.OutputStream.write@POLYN189172 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.writeFields@POLYN621894.primVals.length",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278 in line [01695]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "220",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.len",
      "_method" : "---java.io.OutputStream.write@POLYN189172 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN613705.primDataSize",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278 in line [01534]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "221",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.len",
      "_method" : "---java.io.OutputStream.write@POLYN189172 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN580239.buf.length",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278 in line [00690]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "222",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.len",
      "_method" : "---java.io.OutputStream.write@POLYN189172 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN580657.len",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627278.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "223",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.write@POLYN620334.objVals[i]",
      "_method" : "---java.util.HashMap.writeObject@POLYN680144 in line [01687]",
      "_target" : "java.util.HashMap.writeObject@POLYN680144.s",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.writeObject@POLYN680144.s",
      "_method" : "---java.util.HashMap.internalWriteEntries@POLYN704895 in line [01360]",
      "_target" : "java.util.HashMap.internalWriteEntries@POLYN704895.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "224",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415203.sendBufferSize",
      "_method" : "---java.net.Socket.setSendBufferSize@POLYN504551 in line [00289]",
      "_target" : "java.net.Socket.setSendBufferSize@POLYN504551.size",
      "_risk" : "//QC-JAVCWE099[00289] In org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415203[00289] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.network.Selector.connect@POLYN413475.sendBufferSize",
      "_method" : "---org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415203 in line [00254]",
      "_target" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415203.sendBufferSize",
      "_risk" : ""
    } ]
  }, {
    "_id" : "225",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415203.receiveBufferSize",
      "_method" : "---java.net.Socket.setReceiveBufferSize@POLYN507258 in line [00291]",
      "_target" : "java.net.Socket.setReceiveBufferSize@POLYN507258.size",
      "_risk" : "//QC-JAVCWE099[00291] In org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415203[00291] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.network.Selector.connect@POLYN413475.receiveBufferSize",
      "_method" : "---org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415203 in line [00254]",
      "_target" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415203.receiveBufferSize",
      "_risk" : ""
    } ]
  }, {
    "_id" : "226",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeBlock@POLYN213025.compressedLengt",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230163 in line [00187]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230163.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230163.value",
      "_method" : "---java.io.OutputStream.write@POLYN187380 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN187380.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230163[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "227",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeBlock@POLYN213025.hash",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230163 in line [00193]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230163.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230163.value",
      "_method" : "---java.io.OutputStream.write@POLYN187380 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN187380.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230163[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "228",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeEndMark@POLYN214476.0",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230163 in line [00205]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230163.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230163.value",
      "_method" : "---java.io.OutputStream.write@POLYN187380 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN187380.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230163[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "229",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.handleInboundMessage@POLYN608733.request",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN606454 in line [01668]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN606454.request",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN606454.request",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN573913 in line [01622]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN573913.requestMetadata",
      "_risk" : ""
    } ]
  }, {
    "_id" : "230",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN179207.records",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN227383 in line [00167]",
      "_target" : "org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN179207.cibledummy_00167",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.snapshot.RecordsSnapshotWriter.appendBatches@POLYN180338.batch.data",
      "_method" : "---org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN179207 in line [00191]",
      "_target" : "org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN179207.records",
      "_risk" : ""
    } ]
  }, {
    "_id" : "231",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297735.topics",
      "_method" : "---org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297735 in line [00389]",
      "_target" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297735.cibledummy_00389",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297735.INTERRUPTED_ERROR_MESSAGE",
      "_method" : "---org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297735 in line [00441]",
      "_target" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297735.topics",
      "_risk" : ""
    } ]
  }, {
    "_id" : "232",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297735.topics",
      "_method" : "---org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297735 in line [00001]",
      "_target" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297735.cibledummy_00389",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297735.timeoutError",
      "_method" : "---org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297735 in line [00490]",
      "_target" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297735.topics",
      "_risk" : ""
    } ]
  }, {
    "_id" : "233",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297735.topics",
      "_method" : "---org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297735 in line [00001]",
      "_target" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297735.cibledummy_00389",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297735.\"Completed validating internal topics and created {}\"",
      "_method" : "---org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297735 in line [00502]",
      "_target" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297735.topics",
      "_risk" : ""
    } ]
  } ],
  "_lesDeadlocks" : [ {
    "_id" : "R0",
    "_libelle" : "org.apache.kafka.connect.mirror.OffsetSyncStore.this"
  }, {
    "_id" : "R1",
    "_libelle" : "org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165345.pollTimeout"
  }, {
    "_id" : "R2",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.this"
  }, {
    "_id" : "R3",
    "_libelle" : "org.apache.kafka.common.metrics.Sensor.this"
  }, {
    "_id" : "R4",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.Fetcher.this"
  }, {
    "_id" : "R5",
    "_libelle" : "org.apache.kafka.clients.Metadata.this"
  }, {
    "_id" : "R6",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN343961.tp"
  }, {
    "_id" : "R7",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN343961.highWatermark"
  }, {
    "_id" : "R8",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN344151.tp"
  }, {
    "_id" : "R9",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN344151.logStartOffset"
  }, {
    "_id" : "R10",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN344341.tp"
  }, {
    "_id" : "R11",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN344341.lastStableOffset"
  }, {
    "_id" : "R12",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN346575.partition"
  }, {
    "_id" : "R13",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN346575.offsetResetStrategy"
  }, {
    "_id" : "R14",
    "_libelle" : "java.io.InputStream.this"
  }, {
    "_id" : "R15",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.this"
  }, {
    "_id" : "R16",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN352129.tp"
  }, {
    "_id" : "R17",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN337031.tp"
  }, {
    "_id" : "R18",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN337031.position"
  }, {
    "_id" : "R19",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.this"
  }, {
    "_id" : "R20",
    "_libelle" : "org.apache.kafka.streams.processor.internals.GlobalStreamThread.this"
  }, {
    "_id" : "R21",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamThread.stateLock"
  }, {
    "_id" : "R22",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.this"
  }, {
    "_id" : "R23",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.unsent"
  }, {
    "_id" : "R24",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN329579.assignments"
  }, {
    "_id" : "R25",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadLevelSensors"
  }, {
    "_id" : "R26",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadLevelMetrics"
  }, {
    "_id" : "R27",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.changeThreadCount"
  }, {
    "_id" : "R28",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.stateLock"
  }, {
    "_id" : "R29",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.threads"
  }, {
    "_id" : "R30",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429093.isDisconnected"
  }, {
    "_id" : "R31",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429093.cause"
  }, {
    "_id" : "R32",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.this"
  }, {
    "_id" : "R33",
    "_libelle" : "org.apache.kafka.connect.runtime.distributed.DistributedHerder.this"
  }, {
    "_id" : "R34",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerConnector.this"
  }, {
    "_id" : "R35",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.this"
  }, {
    "_id" : "R36",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN173271.prefix"
  }, {
    "_id" : "R37",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN173271.id"
  }, {
    "_id" : "R38",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN173271.metrics"
  }, {
    "_id" : "R39",
    "_libelle" : "org.apache.kafka.connect.runtime.Worker.this"
  }, {
    "_id" : "R40",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN389078.tp"
  }, {
    "_id" : "R41",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.abortBatches@POLYN369806.dq"
  }, {
    "_id" : "R42",
    "_libelle" : "org.apache.kafka.clients.producer.internals.IncompleteBatches.incomplete"
  }, {
    "_id" : "R43",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN404841.e"
  }, {
    "_id" : "R44",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.this"
  }, {
    "_id" : "R45",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN172673.topic"
  }, {
    "_id" : "R46",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN172673.nowMs"
  }, {
    "_id" : "R47",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN360291.deque"
  }, {
    "_id" : "R48",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN387341.topicPartition"
  }, {
    "_id" : "R49",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN391453.topicPartition"
  }, {
    "_id" : "R50",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN391453.increment"
  }, {
    "_id" : "R51",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.addInFlightBatch@POLYN391849.batch"
  }, {
    "_id" : "R52",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.updateEstimation@POLYN166306.compressionRatioForTopic"
  }, {
    "_id" : "R53",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN396458.batch"
  }, {
    "_id" : "R54",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN396458.exception"
  }, {
    "_id" : "R55",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN396458.adjustSequenceNumbers"
  }, {
    "_id" : "R56",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN395863.exception"
  }, {
    "_id" : "R57",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN386331.exception"
  }, {
    "_id" : "R58",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN385845.exception"
  }, {
    "_id" : "R59",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN393276.batch"
  }, {
    "_id" : "R60",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN400225.batch"
  }, {
    "_id" : "R61",
    "_libelle" : "java.util.Hashtable.this"
  }, {
    "_id" : "R62",
    "_libelle" : "java.util.Hashtable.putAll@POLYN440376.t"
  }, {
    "_id" : "R63",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.this"
  }, {
    "_id" : "R64",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.setStreamsConfig@POLYN497915.applicationConfig"
  }, {
    "_id" : "R65",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.this"
  }, {
    "_id" : "R66",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN254035.topic"
  }, {
    "_id" : "R67",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN254035.partitions"
  }, {
    "_id" : "R68",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN252730.newOffsets"
  }, {
    "_id" : "R69",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN253154.newOffsets"
  }, {
    "_id" : "R70",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN428739.error"
  }, {
    "_id" : "R71",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN174716.lastVersion"
  }, {
    "_id" : "R72",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN174716.timeoutMs"
  }, {
    "_id" : "R73",
    "_libelle" : "org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN273835.topic"
  }, {
    "_id" : "R74",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN336103.dq"
  }, {
    "_id" : "R75",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.this"
  }, {
    "_id" : "R76",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN383522.topicPartition"
  }, {
    "_id" : "R77",
    "_libelle" : "org.apache.kafka.clients.Metadata.bootstrap@POLYN262877.addresses"
  }, {
    "_id" : "R78",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN172487.prefix"
  }, {
    "_id" : "R79",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN172487.id"
  }, {
    "_id" : "R80",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN172487.metrics"
  }, {
    "_id" : "R81",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN172487.nowMs"
  }, {
    "_id" : "R82",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.this"
  }, {
    "_id" : "R83",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN285138.connector"
  }, {
    "_id" : "R84",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN286452.id"
  }, {
    "_id" : "R85",
    "_libelle" : "org.apache.kafka.clients.Metadata.failedUpdate@POLYN275545.now"
  }, {
    "_id" : "R86",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN263843.requestVersion"
  }, {
    "_id" : "R87",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN263843.response"
  }, {
    "_id" : "R88",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN263843.isPartialUpdate"
  }, {
    "_id" : "R89",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN263843.nowMs"
  }, {
    "_id" : "R90",
    "_libelle" : "org.apache.kafka.common.requests.MetadataResponse.data"
  }, {
    "_id" : "R91",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.this"
  }, {
    "_id" : "R92",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.this"
  }, {
    "_id" : "R93",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN232732.initialTopologies"
  }, {
    "_id" : "R94",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.this"
  }, {
    "_id" : "R95",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN239637.connName"
  }, {
    "_id" : "R96",
    "_libelle" : "org.apache.kafka.clients.admin.KafkaAdminClient.this"
  }, {
    "_id" : "R97",
    "_libelle" : "org.apache.kafka.streams.processor.internals.GlobalStreamThread.stateLock"
  }, {
    "_id" : "R98",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.taskLevelSensors"
  }, {
    "_id" : "R99",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.nodeLevelSensors"
  }, {
    "_id" : "R100",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN263269.response"
  }, {
    "_id" : "R101",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN263269.isPartialUpdate"
  }, {
    "_id" : "R102",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN263269.nowMs"
  }, {
    "_id" : "R103",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN175492.requestVersion"
  }, {
    "_id" : "R104",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN175492.response"
  }, {
    "_id" : "R105",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN175492.isPartialUpdate"
  }, {
    "_id" : "R106",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN175492.nowMs"
  }, {
    "_id" : "R107",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.update@POLYN160013.nodeId"
  }, {
    "_id" : "R108",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.update@POLYN160013.nodeApiVersions"
  }, {
    "_id" : "R109",
    "_libelle" : "org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitableRecords"
  }, {
    "_id" : "R110",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.this"
  }, {
    "_id" : "R111",
    "_libelle" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.this"
  }, {
    "_id" : "R112",
    "_libelle" : "java.io.File.this"
  }, {
    "_id" : "R113",
    "_libelle" : "java.io.File.readObject@POLYN644276.s"
  }, {
    "_id" : "R114",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN244096.request"
  }, {
    "_id" : "R115",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN244096.cb"
  }, {
    "_id" : "R116",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.remove@POLYN160285.nodeId"
  }, {
    "_id" : "R117",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.abortUndrainedBatches@POLYN370430.dq"
  }, {
    "_id" : "R118",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN404663.request"
  }, {
    "_id" : "R119",
    "_libelle" : "org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN586198.request"
  }, {
    "_id" : "R120",
    "_libelle" : "org.apache.kafka.common.security.oauthbearer.internals.expiring.ExpiringCredentialRefreshingLogin.mandatoryClassToSynchronizeOnPriorToRefresh"
  }, {
    "_id" : "R121",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.this"
  }, {
    "_id" : "R122",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.openIterators"
  }, {
    "_id" : "R123",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN241474.taskId"
  }, {
    "_id" : "R124",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN241474.cb"
  }, {
    "_id" : "R125",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.this"
  }, {
    "_id" : "R126",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.sourceRecord@POLYN213096.preTransformRecord"
  }, {
    "_id" : "R127",
    "_libelle" : "java.lang.Throwable.this"
  }, {
    "_id" : "R128",
    "_libelle" : "java.lang.Throwable.addSuppressed@POLYN399621.exception"
  }, {
    "_id" : "R129",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.this"
  }, {
    "_id" : "R130",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN190510.partition"
  }, {
    "_id" : "R131",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN190510.offset"
  }, {
    "_id" : "R132",
    "_libelle" : "java.io.BufferedOutputStream.this"
  }, {
    "_id" : "R133",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN171608.b"
  }, {
    "_id" : "R134",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN171608.off"
  }, {
    "_id" : "R135",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN171608.len"
  }, {
    "_id" : "R136",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN270046.cleanupDelayMs"
  }, {
    "_id" : "R137",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN267039.taskId"
  }, {
    "_id" : "R138",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.this"
  }, {
    "_id" : "R139",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN205019.key"
  }, {
    "_id" : "R140",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN205019.value"
  }, {
    "_id" : "R141",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN401951.now"
  }, {
    "_id" : "R142",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.this"
  }, {
    "_id" : "R143",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN201765.newCacheSizeBytes"
  }, {
    "_id" : "R144",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaConfigBackingStore.lock"
  }, {
    "_id" : "R145",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN343217.tp"
  }, {
    "_id" : "R146",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerSourceTask.this"
  }, {
    "_id" : "R147",
    "_libelle" : "org.apache.kafka.trogdor.workload.RoundTripWorker.this"
  }, {
    "_id" : "R148",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN395309.batch"
  }, {
    "_id" : "R149",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN395309.response"
  }, {
    "_id" : "R150",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTask.this"
  }, {
    "_id" : "R151",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.pollTasks"
  }, {
    "_id" : "R152",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN334055.tp"
  }, {
    "_id" : "R153",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN334055.position"
  }, {
    "_id" : "R154",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN432751.shortReason"
  }, {
    "_id" : "R155",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN433059.shortReason"
  }, {
    "_id" : "R156",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN433059.fullReason"
  }, {
    "_id" : "R157",
    "_libelle" : "java.io.PrintStream.this"
  }, {
    "_id" : "R158",
    "_libelle" : "java.io.Writer.lock"
  }, {
    "_id" : "R159",
    "_libelle" : "java.net.Socket.this"
  }, {
    "_id" : "R160",
    "_libelle" : "java.net.Socket.setSendBufferSize@POLYN504551.size"
  }, {
    "_id" : "R161",
    "_libelle" : "java.net.Socket.setReceiveBufferSize@POLYN507258.size"
  }, {
    "_id" : "R162",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN209285.entries"
  }, {
    "_id" : "R163",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN351424.tp"
  }, {
    "_id" : "R164",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN351575.tp"
  }, {
    "_id" : "R165",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN235776.connName"
  }, {
    "_id" : "R166",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN235776.callback"
  }, {
    "_id" : "R167",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN237757.connName"
  }, {
    "_id" : "R168",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN237757.config"
  }, {
    "_id" : "R169",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN237757.allowReplace"
  }, {
    "_id" : "R170",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN237757.callback"
  }, {
    "_id" : "R171",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN237757.configInfos"
  }, {
    "_id" : "R172",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN242891.connName"
  }, {
    "_id" : "R173",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN242891.cb"
  }, {
    "_id" : "R174",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.this"
  }, {
    "_id" : "R175",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN176708.reader"
  }, {
    "_id" : "R176",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.splitAndReenqueue@POLYN347323.partitionDequeue"
  }, {
    "_id" : "R177",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.setEstimation@POLYN168262.compressionRatioForTopic"
  }, {
    "_id" : "R178",
    "_libelle" : "org.apache.kafka.clients.producer.MockProducer.this"
  }, {
    "_id" : "R179",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.taskDirCreationLock"
  }, {
    "_id" : "R180",
    "_libelle" : "java.net.ServerSocket.closeLock"
  }, {
    "_id" : "R181",
    "_libelle" : "java.net.Socket.closeLock"
  }, {
    "_id" : "R182",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromAssignment@POLYN586141.partitions"
  }, {
    "_id" : "R183",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromAssignment@POLYN586141.logPrefix"
  }, {
    "_id" : "R184",
    "_libelle" : "java.io.File.writeObject@POLYN643895.s"
  }, {
    "_id" : "R185",
    "_libelle" : "java.lang.Throwable.writeObject@POLYN397566.s"
  }, {
    "_id" : "R186",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.NamedTopologyBuilder.this"
  }, {
    "_id" : "R187",
    "_libelle" : "org.apache.kafka.streams.StreamsBuilder.this"
  }, {
    "_id" : "R188",
    "_libelle" : "org.apache.kafka.connect.runtime.ConnectMetrics.this"
  }, {
    "_id" : "R189",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN307458.sensor"
  }, {
    "_id" : "R190",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.reporters@POLYN212843.reporters"
  }, {
    "_id" : "R191",
    "_libelle" : "org.apache.kafka.tools.ThroughputThrottler.this"
  }, {
    "_id" : "R192",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.rebalance@POLYN239589.newAssignment"
  }, {
    "_id" : "R193",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN174230.reader"
  }, {
    "_id" : "R194",
    "_libelle" : "java.net.ServerSocket.this"
  }, {
    "_id" : "R195",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.this"
  }, {
    "_id" : "R196",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN193152.key"
  }, {
    "_id" : "R197",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN193152.value"
  }, {
    "_id" : "R198",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.this"
  }, {
    "_id" : "R199",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN174818.consumerRecords"
  }, {
    "_id" : "R200",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN431718.reason"
  }, {
    "_id" : "R201",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN431718.shouldResetMemberId"
  }, {
    "_id" : "R202",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN431019.reason"
  }, {
    "_id" : "R203",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN431019.shouldResetMemberId"
  }, {
    "_id" : "R204",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN334646.tp"
  }, {
    "_id" : "R205",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN334646.position"
  }, {
    "_id" : "R206",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN334646.requestedResetStrategy"
  }, {
    "_id" : "R207",
    "_libelle" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.lock"
  }, {
    "_id" : "R208",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN249798.partition"
  }, {
    "_id" : "R209",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN249798.offset"
  }, {
    "_id" : "R210",
    "_libelle" : "org.apache.kafka.connect.file.FileStreamSourceTask.this"
  }, {
    "_id" : "R211",
    "_libelle" : "org.apache.kafka.connect.storage.FileOffsetBackingStore.this"
  }, {
    "_id" : "R212",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN210732.namespace"
  }, {
    "_id" : "R213",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheLevelSensors"
  }, {
    "_id" : "R214",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.this"
  }, {
    "_id" : "R215",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.addStateStore@POLYN247640.builder"
  }, {
    "_id" : "R216",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.this"
  }, {
    "_id" : "R217",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN185275.key"
  }, {
    "_id" : "R218",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN185275.value"
  }, {
    "_id" : "R219",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN248077.offsets"
  }, {
    "_id" : "R220",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN248077.callback"
  }, {
    "_id" : "R221",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.pause@POLYN254310.partitions"
  }, {
    "_id" : "R222",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.resume@POLYN254632.partitions"
  }, {
    "_id" : "R223",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN428938.cause"
  }, {
    "_id" : "R224",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN432016.api"
  }, {
    "_id" : "R225",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN432016.error"
  }, {
    "_id" : "R226",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN432016.shouldResetMemberId"
  }, {
    "_id" : "R227",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN198122.key"
  }, {
    "_id" : "R228",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1509603.r"
  }, {
    "_id" : "R229",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1509603.f"
  }, {
    "_id" : "R230",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1521268.r"
  }, {
    "_id" : "R231",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1521268.f"
  }, {
    "_id" : "R232",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN267986.key"
  }, {
    "_id" : "R233",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN267986.value"
  }, {
    "_id" : "R234",
    "_libelle" : "org.apache.kafka.trogdor.workload.ProduceBenchWorker.this"
  }, {
    "_id" : "R235",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN325430.pattern"
  }, {
    "_id" : "R236",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN325430.listener"
  }, {
    "_id" : "R237",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN170747.b"
  }, {
    "_id" : "R238",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN239991.topics"
  }, {
    "_id" : "R239",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN241819.topics"
  }, {
    "_id" : "R240",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN241819.listener"
  }, {
    "_id" : "R241",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN240198.pattern"
  }, {
    "_id" : "R242",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN240198.listener"
  }, {
    "_id" : "R243",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN241633.pattern"
  }, {
    "_id" : "R244",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN341646.tp"
  }, {
    "_id" : "R245",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN344781.tp"
  }, {
    "_id" : "R246",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN344781.preferredReadReplicaId"
  }, {
    "_id" : "R247",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN344781.timeMs"
  }, {
    "_id" : "R248",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN347334.partitions"
  }, {
    "_id" : "R249",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN347334.nextAllowResetTimeMs"
  }, {
    "_id" : "R250",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN351721.partitions"
  }, {
    "_id" : "R251",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN351721.nextRetryTimeMs"
  }, {
    "_id" : "R252",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeReporter@POLYN313747.reporter"
  }, {
    "_id" : "R253",
    "_libelle" : "org.apache.kafka.common.metrics.JmxReporter.LOCK"
  }, {
    "_id" : "R254",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.this"
  }, {
    "_id" : "R255",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN171558.status"
  }, {
    "_id" : "R256",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN171179.status"
  }, {
    "_id" : "R257",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN172246.status"
  }, {
    "_id" : "R258",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN171703.status"
  }, {
    "_id" : "R259",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageReaderImpl.offsetReadFutures"
  }, {
    "_id" : "R260",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelMetrics"
  }, {
    "_id" : "R261",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.topicLevelSensors"
  }, {
    "_id" : "R262",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.this"
  }, {
    "_id" : "R263",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN247246.key"
  }, {
    "_id" : "R264",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN247246.value"
  }, {
    "_id" : "R265",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN247246.windowStartTimestamp"
  }, {
    "_id" : "R266",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.this"
  }, {
    "_id" : "R267",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN270497.key"
  }, {
    "_id" : "R268",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN270497.value"
  }, {
    "_id" : "R269",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN270497.windowStartTimestamp"
  }, {
    "_id" : "R270",
    "_libelle" : "java.io.PipedOutputStream.this"
  }, {
    "_id" : "R271",
    "_libelle" : "java.io.PipedOutputStream.connect@POLYN181693.snk"
  }, {
    "_id" : "R272",
    "_libelle" : "java.io.PipedInputStream.this"
  }, {
    "_id" : "R273",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN230448.b"
  }, {
    "_id" : "R274",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN231555.b"
  }, {
    "_id" : "R275",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN231555.off"
  }, {
    "_id" : "R276",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN231555.len"
  }, {
    "_id" : "R277",
    "_libelle" : "java.io.PipedWriter.this"
  }, {
    "_id" : "R278",
    "_libelle" : "java.io.PipedWriter.connect@POLYN180923.snk"
  }, {
    "_id" : "R279",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoinIfNecessary@POLYN432496.shortReason"
  }, {
    "_id" : "R280",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoinIfNecessary@POLYN432496.fullReason"
  }, {
    "_id" : "R281",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.assignPartitionsLock"
  }, {
    "_id" : "R282",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.this"
  }, {
    "_id" : "R283",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.writeEntries@POLYN165659.committedOffsets"
  }, {
    "_id" : "R284",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.assign@POLYN242197.partitions"
  }, {
    "_id" : "R285",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.addRecord@POLYN246717.record"
  }, {
    "_id" : "R286",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setException@POLYN247668.exception"
  }, {
    "_id" : "R287",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN247799.exception"
  }, {
    "_id" : "R288",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN249024.callback"
  }, {
    "_id" : "R289",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.this"
  }, {
    "_id" : "R290",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.addTransientTopics@POLYN162252.topics"
  }, {
    "_id" : "R291",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN176105.fatalException"
  }, {
    "_id" : "R292",
    "_libelle" : "org.apache.kafka.clients.Metadata.fatalError@POLYN275805.exception"
  }, {
    "_id" : "R293",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.this"
  }, {
    "_id" : "R294",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.consumerRecord@POLYN213325.consumedMessage"
  }, {
    "_id" : "R295",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.this"
  }, {
    "_id" : "R296",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeTaskConfigs@POLYN179469.connector"
  }, {
    "_id" : "R297",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN180121.connector"
  }, {
    "_id" : "R298",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN180121.configs"
  }, {
    "_id" : "R299",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.this"
  }, {
    "_id" : "R300",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.setAclMutator@POLYN180861.aclMutator"
  }, {
    "_id" : "R301",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.configure@POLYN184638.configs"
  }, {
    "_id" : "R302",
    "_libelle" : "java.io.PipedReader.this"
  }, {
    "_id" : "R303",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.this"
  }, {
    "_id" : "R304",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.write@POLYN187797.snapshot"
  }, {
    "_id" : "R305",
    "_libelle" : "org.apache.kafka.streams.Topology.this"
  }, {
    "_id" : "R306",
    "_libelle" : "org.apache.kafka.streams.state.internals.DelegatingPeekingKeyValueIterator.this"
  }, {
    "_id" : "R307",
    "_libelle" : "org.apache.kafka.streams.state.internals.KeyValueSegment.this"
  }, {
    "_id" : "R308",
    "_libelle" : "org.apache.kafka.streams.state.internals.KeyValueSegment.deleteRange@POLYN159924.keyFrom"
  }, {
    "_id" : "R309",
    "_libelle" : "org.apache.kafka.streams.state.internals.KeyValueSegment.deleteRange@POLYN159924.keyTo"
  }, {
    "_id" : "R310",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.this"
  }, {
    "_id" : "R311",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.calculateNextWindow@POLYN170666.force"
  }, {
    "_id" : "R312",
    "_libelle" : "java.io.FileInputStream.closeLock"
  }, {
    "_id" : "R313",
    "_libelle" : "java.io.FileOutputStream.closeLock"
  }, {
    "_id" : "R314",
    "_libelle" : "java.io.PipedReader.receive@POLYN212165.c"
  }, {
    "_id" : "R315",
    "_libelle" : "java.io.PipedReader.receive@POLYN212165.off"
  }, {
    "_id" : "R316",
    "_libelle" : "java.io.PipedReader.receive@POLYN212165.len"
  }, {
    "_id" : "R317",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.close@POLYN257338.timeout"
  }, {
    "_id" : "R318",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.metrics@POLYN212214.errorHandlingMetrics"
  }, {
    "_id" : "R319",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.this"
  }, {
    "_id" : "R320",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN176445.newState"
  }, {
    "_id" : "R321",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN176445.now"
  }, {
    "_id" : "R322",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelSensors"
  }, {
    "_id" : "R323",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.setNamedTopology@POLYN498178.namedTopology"
  }, {
    "_id" : "R324",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setOffsetsException@POLYN247931.exception"
  }, {
    "_id" : "R325",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN248693.offsets"
  }, {
    "_id" : "R326",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seekToBeginning@POLYN252496.partitions"
  }, {
    "_id" : "R327",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seekToEnd@POLYN252920.partitions"
  }, {
    "_id" : "R328",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN257891.task"
  }, {
    "_id" : "R329",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setLastRebalanceTime@POLYN456947.timestamp"
  }, {
    "_id" : "R330",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewGeneration@POLYN457757.generation"
  }, {
    "_id" : "R331",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewState@POLYN457892.state"
  }, {
    "_id" : "R332",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN346770.partitions"
  }, {
    "_id" : "R333",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN346770.offsetResetStrategy"
  }, {
    "_id" : "R334",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.this"
  }, {
    "_id" : "R335",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.put@POLYN156772.key"
  }, {
    "_id" : "R336",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.put@POLYN156772.value"
  }, {
    "_id" : "R337",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.addReporter@POLYN313391.reporter"
  }, {
    "_id" : "R338",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.putAll@POLYN170627.entries"
  }, {
    "_id" : "R339",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.this"
  }, {
    "_id" : "R340",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.commitTransaction@POLYN163303.record"
  }, {
    "_id" : "R341",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.abortTransaction@POLYN163667.record"
  }, {
    "_id" : "R342",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN234176.callback"
  }, {
    "_id" : "R343",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN234407.connName"
  }, {
    "_id" : "R344",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN234407.callback"
  }, {
    "_id" : "R345",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN236844.connName"
  }, {
    "_id" : "R346",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN236844.config"
  }, {
    "_id" : "R347",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN236844.allowReplace"
  }, {
    "_id" : "R348",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN236844.callback"
  }, {
    "_id" : "R349",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN240011.connName"
  }, {
    "_id" : "R350",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN240011.callback"
  }, {
    "_id" : "R351",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN178495.connector"
  }, {
    "_id" : "R352",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN178495.properties"
  }, {
    "_id" : "R353",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeConnectorConfig@POLYN179116.connector"
  }, {
    "_id" : "R354",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN181010.connector"
  }, {
    "_id" : "R355",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN181010.state"
  }, {
    "_id" : "R356",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.setUpdateListener@POLYN181837.listener"
  }, {
    "_id" : "R357",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.loadSnapshot@POLYN182370.acls"
  }, {
    "_id" : "R358",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN178001.newLeader"
  }, {
    "_id" : "R359",
    "_libelle" : "java.io.BufferedInputStream.this"
  }, {
    "_id" : "R360",
    "_libelle" : "java.io.BufferedInputStream.mark@POLYN259499.readlimit"
  }, {
    "_id" : "R361",
    "_libelle" : "java.io.PipedOutputStream.sink"
  }, {
    "_id" : "R362",
    "_libelle" : "java.io.PipedReader.receive@POLYN210487.c"
  }, {
    "_id" : "R363",
    "_libelle" : "java.io.PipedWriter.sink"
  }, {
    "_id" : "R364",
    "_libelle" : "java.net.ServerSocket.setSocketFactory@POLYN338151.fac"
  }, {
    "_id" : "R365",
    "_libelle" : "java.net.Socket.setSocketImplFactory@POLYN520186.fac"
  }, {
    "_id" : "R366",
    "_libelle" : "java.util.Hashtable.forEach@POLYN455916.action"
  }, {
    "_id" : "R367",
    "_libelle" : "java.util.Hashtable.replaceAll@POLYN456826.function"
  }, {
    "_id" : "R368",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromMetadata@POLYN586954.topics"
  }, {
    "_id" : "R369",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromMetadata@POLYN586954.logPrefix"
  }, {
    "_id" : "R370",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.this"
  }, {
    "_id" : "R371",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN265086.activePartitionHostMap"
  }, {
    "_id" : "R372",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN265086.standbyPartitionHostMap"
  }, {
    "_id" : "R373",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN265086.clusterMetadata"
  }, {
    "_id" : "R374",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.putAll@POLYN194238.entries"
  }, {
    "_id" : "R375",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.setListener@POLYN202422.listener"
  }, {
    "_id" : "R376",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDbIterator.this"
  }, {
    "_id" : "R377",
    "_libelle" : "org.apache.kafka.trogdor.workload.PayloadIterator.this"
  }, {
    "_id" : "R378",
    "_libelle" : "org.apache.kafka.trogdor.workload.PayloadIterator.seek@POLYN155410.position"
  }, {
    "_id" : "R379",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.this"
  }, {
    "_id" : "R380",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.delay@POLYN158699.amount"
  }, {
    "_id" : "R381",
    "_libelle" : "java.io.InputStream.mark@POLYN262534.readlimit"
  } ],
  "_lesDeadlocksSequences" : [ {
    "_id" : "0",
    "_lesItems" : [ "S0:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN193845", "S0:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN193845", "S0:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN207894", "S0:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165345 (R0 in line [00067],R1 in line [00067])", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867456", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867745", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867745", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870101", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870101", "S0:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN508657", "S0:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541265", "S0:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541265", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN343961 (R2 in line [00576],R6 in line [00576],R7 in line [00576])", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333534", "S0:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309", "S0:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309.dummymethode_00114" ]
  }, {
    "_id" : "1",
    "_lesItems" : [ "S1:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN193845", "S1:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN193845", "S1:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN207894", "S1:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165345 (R0 in line [00067],R1 in line [00067])", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867456", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867745", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867745", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870101", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870101", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN508657", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541265", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541265", "S1:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN344151 (R2 in line [00580],R8 in line [00580],R9 in line [00580])", "S1:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333534", "S1:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309", "S1:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309.dummymethode_00114" ]
  }, {
    "_id" : "2",
    "_lesItems" : [ "S2:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN193845", "S2:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN193845", "S2:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN207894", "S2:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165345 (R0 in line [00067],R1 in line [00067])", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867456", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867745", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867745", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870101", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870101", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN508657", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541265", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541265", "S2:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN344341 (R2 in line [00584],R10 in line [00584],R11 in line [00584])", "S2:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333534", "S2:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309", "S2:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309.dummymethode_00114" ]
  }, {
    "_id" : "3",
    "_lesItems" : [ "S3:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN193845", "S3:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN193845", "S3:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN207894", "S3:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165345 (R0 in line [00067],R1 in line [00067])", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867456", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867745", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867745", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870101", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870101", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN508657", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541265", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541265", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN549027", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN549027", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN347186", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN346575 (R2 in line [00636],R12 in line [00636],R13 in line [00636])", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333534", "S3:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309", "S3:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309.dummymethode_00114" ]
  }, {
    "_id" : "4",
    "_lesItems" : [ "S4:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN193845", "S4:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN193845", "S4:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN207894", "S4:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165345 (R0 in line [00067],R1 in line [00067])", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867456", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867745", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867745", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870101", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870101", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN508657", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541265", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541265", "S4:org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN352129 (R2 in line [00755],R16 in line [00755])", "S4:org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN181107", "S4:java.util.HashMap.HashIterator.remove@POLYN685336", "S4:java.util.HashMap.HashIterator.remove@POLYN685336.dummymethode_01445" ]
  }, {
    "_id" : "5",
    "_lesItems" : [ "S5:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN193845", "S5:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN193845", "S5:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN207894", "S5:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165345 (R0 in line [00067],R1 in line [00067])", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867456", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867745", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867745", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870101", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870101", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN508657", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN508657", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN510950", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN510950", "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN337031 (R2 in line [00443],R17 in line [00443],R18 in line [00443])", "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333534", "S5:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309", "S5:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309.dummymethode_00114" ]
  }, {
    "_id" : "6",
    "_lesItems" : [ "S6:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526079", "S6:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526079", "S6:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524238", "S6:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524238", "S6:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385048", "S6:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385048", "S6:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385410", "S6:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385410", "S6:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN860758", "S6:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN860758", "S6:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN420846", "S6:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN420846", "S6:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN329579 (R2 in line [00273],R24 in line [00273])", "S6:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN329579.dummymethode_00277" ]
  }, {
    "_id" : "7",
    "_lesItems" : [ "S7:org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN913914", "S7:org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN913914", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN343217 (R2 in line [00561],R145 in line [00561])", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333534", "S7:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309", "S7:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309.dummymethode_00114" ]
  }, {
    "_id" : "8",
    "_lesItems" : [ "S8:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN242792 (R65 in line [00163])", "S8:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN243026 (R65 in line [00168],R151 in line [00175])", "S8:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN243026 (R65 in line [00168],R151 in line [00175])", "S8:org.apache.kafka.clients.consumer.MockConsumer.updateFetchPosition@POLYN258571", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.seek@POLYN334245", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN334055 (R2 in line [00378],R152 in line [00378],R153 in line [00378])", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333534", "S8:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309", "S8:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309.dummymethode_00114" ]
  }, {
    "_id" : "9",
    "_lesItems" : [ "S9:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN904757", "S9:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN904757", "S9:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN351424 (R2 in line [00737],R163 in line [00737])", "S9:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333534", "S9:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309", "S9:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309.dummymethode_00114" ]
  }, {
    "_id" : "10",
    "_lesItems" : [ "S10:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN905515", "S10:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN905515", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN351575 (R2 in line [00741],R164 in line [00741])", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333534", "S10:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309", "S10:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309.dummymethode_00114" ]
  }, {
    "_id" : "11",
    "_lesItems" : [ "S11:org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetIfNeeded@POLYN513919", "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN334646 (R2 in line [00390],R204 in line [00390],R205 in line [00390],R206 in line [00390])", "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN333901", "S11:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309", "S11:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309.dummymethode_00114" ]
  }, {
    "_id" : "12",
    "_lesItems" : [ "S12:org.apache.kafka.clients.consumer.KafkaConsumer.subscribe@POLYN858616", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN325430 (R2 in line [00172],R235 in line [00172],R236 in line [00172])", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN330484", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN330484.dummymethode_00292" ]
  }, {
    "_id" : "13",
    "_lesItems" : [ "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeValidatePositionForCurrentLeader@POLYN337503 (R2 in line [00456])", "S13:org.apache.kafka.clients.ApiVersions.get@POLYN160518 (R75 in line [00048])", "S13:java.util.Map.get@POLYN438883" ]
  }, {
    "_id" : "14",
    "_lesItems" : [ "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN341646 (R2 in line [00529],R244 in line [00529])", "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333534", "S14:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309", "S14:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309.dummymethode_00114" ]
  }, {
    "_id" : "15",
    "_lesItems" : [ "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN344781 (R2 in line [00596],R245 in line [00596],R246 in line [00596],R247 in line [00596])", "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333534", "S15:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309", "S15:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309.dummymethode_00114" ]
  }, {
    "_id" : "16",
    "_lesItems" : [ "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN347334 (R2 in line [00651],R248 in line [00651],R249 in line [00651])", "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333534", "S16:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309", "S16:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309.dummymethode_00114" ]
  }, {
    "_id" : "17",
    "_lesItems" : [ "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN351721 (R2 in line [00745],R250 in line [00745],R251 in line [00745])", "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN333901", "S17:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309", "S17:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309.dummymethode_00114" ]
  }, {
    "_id" : "18",
    "_lesItems" : [ "S18:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN346770 (R2 in line [00640],R332 in line [00640],R333 in line [00640])", "S18:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN346770.dummymethode_00641" ]
  }, {
    "_id" : "19",
    "_lesItems" : [ "S19:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN558421", "S19:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN566194", "S19:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN566194", "S19:org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN273835 (R5 in line [00450],R73 in line [00450])", "S19:org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN273835.dummymethode_00451" ]
  }, {
    "_id" : "20",
    "_lesItems" : [ "S20:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN839370", "S20:org.apache.kafka.clients.Metadata.bootstrap@POLYN262877 (R5 in line [00238],R77 in line [00238])", "S20:org.apache.kafka.clients.Metadata.bootstrap@POLYN262877.dummymethode_00239" ]
  }, {
    "_id" : "21",
    "_lesItems" : [ "S21:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN380003", "S21:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN380003", "S21:org.apache.kafka.clients.Metadata.failedUpdate@POLYN275545 (R5 in line [00490],R85 in line [00490])", "S21:org.apache.kafka.clients.Metadata.failedUpdate@POLYN275545.dummymethode_00491" ]
  }, {
    "_id" : "22",
    "_lesItems" : [ "S22:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN380003", "S22:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN380003", "S22:org.apache.kafka.clients.Metadata.update@POLYN263843 (R5 in line [00263],R86 in line [00263],R87 in line [00263],R88 in line [00263],R89 in line [00263])", "S22:org.apache.kafka.clients.Metadata.update@POLYN263843.dummymethode_00264" ]
  }, {
    "_id" : "23",
    "_lesItems" : [ "S23:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN263269 (R5 in line [00249],R100 in line [00249],R101 in line [00249],R102 in line [00249])", "S23:org.apache.kafka.clients.Metadata.update@POLYN263843 (R5 in line [00263],R86 in line [00263],R87 in line [00263],R88 in line [00263],R89 in line [00263])", "S23:org.apache.kafka.clients.Metadata.update@POLYN263843.dummymethode_00264" ]
  }, {
    "_id" : "24",
    "_lesItems" : [ "S24:org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN176105 (R44 in line [00145],R291 in line [00145])", "S24:org.apache.kafka.clients.Metadata.fatalError@POLYN275805 (R5 in line [00500],R292 in line [00500])", "S24:org.apache.kafka.clients.Metadata.fatalError@POLYN275805.dummymethode_00501" ]
  }, {
    "_id" : "25",
    "_lesItems" : [ "S25:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN193845", "S25:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN193845", "S25:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN207894", "S25:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165345 (R0 in line [00067],R1 in line [00067])", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867456", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867745", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.acquireAndEnsureOpen@POLYN922986", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.acquire@POLYN923441" ]
  }, {
    "_id" : "26",
    "_lesItems" : [ "S26:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN193845", "S26:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN193845", "S26:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN207894", "S26:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165345 (R0 in line [00067],R1 in line [00067])", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867456", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867745", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867745", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.updateAssignmentMetadataIfNeeded@POLYN869644", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.updateFetchPositions@POLYN922324", "S26:org.apache.kafka.clients.consumer.internals.SubscriptionState.hasAllFetchPositions@POLYN348074 (R2 in line [00669])", "S26:org.apache.kafka.common.internals.PartitionStates.stateIterator@POLYN182631" ]
  }, {
    "_id" : "27",
    "_lesItems" : [ "S27:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN193845", "S27:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN193845", "S27:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN207894", "S27:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165345 (R0 in line [00067],R1 in line [00067])", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867456", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867745", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867745", "S27:org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.recordPollEnd@POLYN169238", "S27:org.apache.kafka.common.metrics.Sensor.record@POLYN223993", "S27:org.apache.kafka.common.metrics.Sensor.recordInternal@POLYN224277 (R3 in line [00232])", "S27:org.apache.kafka.common.metrics.Sensor.recordInternal@POLYN224277.dummymethode_00231" ]
  }, {
    "_id" : "28",
    "_lesItems" : [ "S28:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN193845", "S28:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN193845", "S28:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN207894", "S28:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165345 (R0 in line [00067],R1 in line [00067])", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867456", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867745", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867745", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870101", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870101", "S28:org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN489483 (R4 in line [00248])", "S28:org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.maybeUpdateAssignment@POLYN573520", "S28:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignmentId@POLYN324479 (R2 in line [00149])", "S28:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignmentId@POLYN324479.dummymethode_00150" ]
  }, {
    "_id" : "29",
    "_lesItems" : [ "S29:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN193845", "S29:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN193845", "S29:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN207894", "S29:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165345 (R0 in line [00067],R1 in line [00067])", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867456", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867745", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867745", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870101", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870101", "S29:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN508657", "S29:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541265", "S29:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541265", "S29:org.apache.kafka.clients.Metadata.requestUpdate@POLYN258345 (R5 in line [00145])", "S29:org.apache.kafka.clients.Metadata.requestUpdate@POLYN258345.dummymethode_00146" ]
  }, {
    "_id" : "30",
    "_lesItems" : [ "S30:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN193845", "S30:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN193845", "S30:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN207894", "S30:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165345 (R0 in line [00067],R1 in line [00067])", "S30:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165345 (R0 in line [00067],R1 in line [00067])", "S30:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867456", "S30:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867745", "S30:org.apache.kafka.clients.consumer.KafkaConsumer.acquireAndEnsureOpen@POLYN922986", "S30:org.apache.kafka.clients.consumer.KafkaConsumer.acquire@POLYN923441" ]
  }, {
    "_id" : "31",
    "_lesItems" : [ "S31:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526079", "S31:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526079", "S31:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524238", "S31:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524238", "S31:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN548179 (R27 in line [01039],R28 in line [01051])", "S31:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN557804 (R29 in line [01215])", "S31:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN557804.dummymethode_01214" ]
  }, {
    "_id" : "32",
    "_lesItems" : [ "S32:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526079", "S32:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526079", "S32:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524238", "S32:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524238", "S32:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN548179 (R27 in line [01039],R28 in line [01051])", "S32:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN548179 (R27 in line [01039],R28 in line [01051])", "S32:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN557804 (R29 in line [01215])", "S32:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN557804.dummymethode_01214" ]
  }, {
    "_id" : "33",
    "_lesItems" : [ "S33:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526079", "S33:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526079", "S33:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524238", "S33:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524238", "S33:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN548179 (R27 in line [01039],R28 in line [01051])", "S33:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN548179 (R27 in line [01039],R28 in line [01051])", "S33:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385048", "S33:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385048", "S33:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN345069 (R21 in line [00215])", "S33:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN345069.dummymethode_00216" ]
  }, {
    "_id" : "34",
    "_lesItems" : [ "S34:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526079", "S34:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526079", "S34:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524238", "S34:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524238", "S34:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN548179 (R27 in line [01039],R28 in line [01051])", "S34:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN548179 (R27 in line [01039],R28 in line [01051])", "S34:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385048", "S34:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385048", "S34:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385410", "S34:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385410", "S34:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN860758", "S34:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN860758", "S34:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN434852 (R22 in line [01103])", "S34:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN434852.dummymethode_01104" ]
  }, {
    "_id" : "35",
    "_lesItems" : [ "S35:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526079", "S35:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526079", "S35:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524238", "S35:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524238", "S35:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN548179 (R27 in line [01039],R28 in line [01051])", "S35:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN548179 (R27 in line [01039],R28 in line [01051])", "S35:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385048", "S35:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385048", "S35:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385410", "S35:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385410", "S35:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN860758", "S35:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN860758", "S35:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN420846", "S35:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN420846", "S35:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN400195", "S35:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN400195", "S35:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN332242 (R2 in line [00334])", "S35:org.apache.kafka.clients.consumer.internals.SubscriptionState.collectPartitions@POLYN348713", "S35:org.apache.kafka.clients.consumer.internals.SubscriptionState.collectPartitions@POLYN348713.dummymethode_00686" ]
  }, {
    "_id" : "36",
    "_lesItems" : [ "S36:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526079", "S36:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526079", "S36:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524238", "S36:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524238", "S36:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN548179 (R27 in line [01039],R28 in line [01051])", "S36:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN548179 (R27 in line [01039],R28 in line [01051])", "S36:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385048", "S36:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385048", "S36:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385410", "S36:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385410", "S36:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelSensors@POLYN299909 (R25 in line [00301])", "S36:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN298388", "S36:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN298388.dummymethode_00263" ]
  }, {
    "_id" : "37",
    "_lesItems" : [ "S37:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526079", "S37:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526079", "S37:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524238", "S37:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524238", "S37:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN548179 (R27 in line [01039],R28 in line [01051])", "S37:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN548179 (R27 in line [01039],R28 in line [01051])", "S37:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385048", "S37:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385048", "S37:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385410", "S37:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385410", "S37:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelMetrics@POLYN300461 (R26 in line [00310])", "S37:java.util.Hashtable.remove@POLYN487286" ]
  }, {
    "_id" : "38",
    "_lesItems" : [ "S38:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526079", "S38:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526079", "S38:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524238", "S38:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524238", "S38:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385048", "S38:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385048", "S38:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385410", "S38:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385410", "S38:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN860758", "S38:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN860758", "S38:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN434852 (R22 in line [01103])", "S38:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN434852 (R22 in line [01103])", "S38:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.pollNoWakeup@POLYN267884", "S38:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.poll@POLYN266015", "S38:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.UnsentRequests.clean@POLYN283444 (R23 in line [00696])", "S38:java.util.Map.values@POLYN443722" ]
  }, {
    "_id" : "39",
    "_lesItems" : [ "S39:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526079", "S39:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526079", "S39:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524238", "S39:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524238", "S39:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385048", "S39:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385048", "S39:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385410", "S39:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385410", "S39:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN860758", "S39:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN860758", "S39:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN434852 (R22 in line [01103])", "S39:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN434852 (R22 in line [01103])", "S39:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.pollNoWakeup@POLYN267884", "S39:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.poll@POLYN266015", "S39:org.apache.kafka.clients.Metadata.maybeThrowAnyException@POLYN273091 (R5 in line [00428])", "S39:org.apache.kafka.clients.Metadata.clearErrorsAndMaybeThrowException@POLYN274021", "S39:org.apache.kafka.clients.Metadata.clearErrorsAndMaybeThrowException@POLYN274021.dummymethode_00456" ]
  }, {
    "_id" : "40",
    "_lesItems" : [ "S40:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN384606", "S40:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN384606", "S40:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToClients@POLYN397791", "S40:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.populateClientStatesMap@POLYN401664", "S40:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.fetchCommittedOffsets@POLYN425417", "S40:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetFetchRequest@POLYN446500", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN428284 (R22 in line [00926])", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429093 (R22 in line [00947],R30 in line [00947],R31 in line [00947])", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429093.dummymethode_00949" ]
  }, {
    "_id" : "41",
    "_lesItems" : [ "S41:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.close@POLYN427468", "S41:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN398810 (R22 in line [00240])", "S41:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN398810 (R22 in line [00240])", "S41:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN428739 (R22 in line [00939],R70 in line [00939])", "S41:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN428739.dummymethode_00940" ]
  }, {
    "_id" : "42",
    "_lesItems" : [ "S42:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN241233", "S42:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN241233", "S42:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN401951 (R22 in line [00322],R141 in line [00322])", "S42:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.failureCause@POLYN450374" ]
  }, {
    "_id" : "43",
    "_lesItems" : [ "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatResponseHandler.handle@POLYN438368", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatResponseHandler.handle@POLYN438368", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN432751 (R22 in line [01039],R154 in line [01039])", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN433059 (R22 in line [01050],R155 in line [01050],R156 in line [01050])", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN433059 (R22 in line [01050],R155 in line [01050],R156 in line [01050])", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN433059.dummymethode_01053" ]
  }, {
    "_id" : "44",
    "_lesItems" : [ "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureActiveGroup@POLYN403272", "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN404898", "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN431718 (R22 in line [01017],R200 in line [01017],R201 in line [01017])", "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN431019 (R22 in line [01004],R202 in line [01004],R203 in line [01004])", "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN431019.dummymethode_01005" ]
  }, {
    "_id" : "45",
    "_lesItems" : [ "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN428938 (R22 in line [00943],R223 in line [00943])", "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429093 (R22 in line [00947],R30 in line [00947],R31 in line [00947])", "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429093.dummymethode_00949" ]
  }, {
    "_id" : "46",
    "_lesItems" : [ "S46:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN432016 (R22 in line [01023],R224 in line [01023],R225 in line [01023],R226 in line [01023])", "S46:java.lang.String.format@POLYN917523", "S46:java.lang.String.format@POLYN917523.dummymethode_00001" ]
  }, {
    "_id" : "47",
    "_lesItems" : [ "S47:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.rejoinNeededOrPending@POLYN422188", "S47:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoinIfNecessary@POLYN432496 (R22 in line [01032],R279 in line [01032],R280 in line [01032])", "S47:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN433059 (R22 in line [01050],R155 in line [01050],R156 in line [01050])", "S47:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN433059 (R22 in line [01050],R155 in line [01050],R156 in line [01050])", "S47:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN433059.dummymethode_01053" ]
  }, {
    "_id" : "48",
    "_lesItems" : [ "S48:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setLastRebalanceTime@POLYN456947 (R22 in line [01592],R329 in line [01592])", "S48:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setLastRebalanceTime@POLYN456947.dummymethode_01593" ]
  }, {
    "_id" : "49",
    "_lesItems" : [ "S49:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewGeneration@POLYN457757 (R22 in line [01617],R330 in line [01617])", "S49:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewGeneration@POLYN457757.dummymethode_01618" ]
  }, {
    "_id" : "50",
    "_lesItems" : [ "S50:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewState@POLYN457892 (R22 in line [01621],R331 in line [01621])", "S50:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewState@POLYN457892.dummymethode_01622" ]
  }, {
    "_id" : "51",
    "_lesItems" : [ "S51:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN550397", "S51:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN551477 (R27 in line [01113])", "S51:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385048", "S51:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385048", "S51:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN345069 (R21 in line [00215])", "S51:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN345069.dummymethode_00216" ]
  }, {
    "_id" : "52",
    "_lesItems" : [ "S52:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN550397", "S52:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN551477 (R27 in line [01113])", "S52:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385048", "S52:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385048", "S52:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385410", "S52:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385410", "S52:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN860758", "S52:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN860758", "S52:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN434852 (R22 in line [01103])", "S52:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN434852.dummymethode_01104" ]
  }, {
    "_id" : "53",
    "_lesItems" : [ "S53:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN550397", "S53:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN551477 (R27 in line [01113])", "S53:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385048", "S53:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385048", "S53:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385410", "S53:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385410", "S53:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN860758", "S53:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN860758", "S53:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN420846", "S53:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN420846", "S53:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN400195", "S53:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN400195", "S53:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN332242 (R2 in line [00334])", "S53:org.apache.kafka.clients.consumer.internals.SubscriptionState.collectPartitions@POLYN348713", "S53:org.apache.kafka.clients.consumer.internals.SubscriptionState.collectPartitions@POLYN348713.dummymethode_00686" ]
  }, {
    "_id" : "54",
    "_lesItems" : [ "S54:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN550397", "S54:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN551477 (R27 in line [01113])", "S54:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385048", "S54:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385048", "S54:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385410", "S54:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385410", "S54:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelSensors@POLYN299909 (R25 in line [00301])", "S54:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN298388", "S54:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN298388.dummymethode_00263" ]
  }, {
    "_id" : "55",
    "_lesItems" : [ "S55:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN550397", "S55:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN551477 (R27 in line [01113])", "S55:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385048", "S55:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385048", "S55:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385410", "S55:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385410", "S55:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelMetrics@POLYN300461 (R26 in line [00310])", "S55:java.util.Hashtable.remove@POLYN487286" ]
  }, {
    "_id" : "56",
    "_lesItems" : [ "S56:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN384606", "S56:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN384606", "S56:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToClients@POLYN397791", "S56:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.populateClientStatesMap@POLYN401664", "S56:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.fetchCommittedOffsets@POLYN425417", "S56:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetFetchRequest@POLYN446500", "S56:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN428284 (R22 in line [00926])", "S56:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429093 (R22 in line [00947],R30 in line [00947],R31 in line [00947])", "S56:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429093 (R22 in line [00947],R30 in line [00947],R31 in line [00947])", "S56:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429093.dummymethode_00949" ]
  }, {
    "_id" : "57",
    "_lesItems" : [ "S57:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN477307", "S57:org.apache.kafka.clients.producer.internals.Sender.run@POLYN316568", "S57:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN318775", "S57:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN400833 (R32 in line [00718])", "S57:org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN389078 (R32 in line [00468],R40 in line [00468])", "S57:org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN389078.dummymethode_00469" ]
  }, {
    "_id" : "58",
    "_lesItems" : [ "S58:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN477307", "S58:org.apache.kafka.clients.producer.internals.Sender.run@POLYN316568", "S58:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN318775", "S58:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN318775", "S58:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN404841 (R32 in line [00810],R43 in line [00810])", "S58:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN404841.dummymethode_00812" ]
  }, {
    "_id" : "59",
    "_lesItems" : [ "S59:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN477307", "S59:org.apache.kafka.clients.producer.internals.Sender.run@POLYN316568", "S59:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN318775", "S59:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN318775", "S59:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN319971", "S59:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN319971", "S59:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN364820", "S59:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN360291 (R47 in line [00799])", "S59:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN387341 (R32 in line [00426],R48 in line [00426])", "S59:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN163107", "S59:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN153356", "S59:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN153356.dummymethode_00026" ]
  }, {
    "_id" : "60",
    "_lesItems" : [ "S60:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN477307", "S60:org.apache.kafka.clients.producer.internals.Sender.run@POLYN316568", "S60:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN318775", "S60:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN318775", "S60:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN319971", "S60:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN319971", "S60:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN364820", "S60:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN360291 (R47 in line [00799])", "S60:org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN391453 (R32 in line [00521],R49 in line [00521],R50 in line [00521])", "S60:org.apache.kafka.clients.producer.internals.TransactionManager.sequenceNumber@POLYN391087 (R32 in line [00510])", "S60:org.apache.kafka.clients.producer.internals.TxnPartitionMap.getOrCreate@POLYN161768", "S60:org.apache.kafka.clients.producer.internals.TxnPartitionMap.getOrCreate@POLYN161768.dummymethode_00043" ]
  }, {
    "_id" : "61",
    "_lesItems" : [ "S61:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN477307", "S61:org.apache.kafka.clients.producer.internals.Sender.run@POLYN316568", "S61:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN318775", "S61:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN318775", "S61:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN319971", "S61:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN319971", "S61:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN364820", "S61:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN360291 (R47 in line [00799])", "S61:org.apache.kafka.clients.producer.internals.TransactionManager.addInFlightBatch@POLYN391849 (R32 in line [00528],R51 in line [00528])", "S61:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN161374", "S61:java.util.Map.get@POLYN438883" ]
  }, {
    "_id" : "62",
    "_lesItems" : [ "S62:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN477307", "S62:org.apache.kafka.clients.producer.internals.Sender.run@POLYN316568", "S62:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN318775", "S62:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN318775", "S62:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN319971", "S62:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN319971", "S62:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN340713", "S62:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN396458 (R32 in line [00624],R53 in line [00624],R54 in line [00624],R55 in line [00624])", "S62:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN395863 (R32 in line [00610],R56 in line [00610])", "S62:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN386331 (R32 in line [00397],R57 in line [00397])", "S62:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN386331.dummymethode_00398" ]
  }, {
    "_id" : "63",
    "_lesItems" : [ "S63:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN477307", "S63:org.apache.kafka.clients.producer.internals.Sender.run@POLYN316568", "S63:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN318775", "S63:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN318775", "S63:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN319971", "S63:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN319971", "S63:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN340713", "S63:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN396458 (R32 in line [00624],R53 in line [00624],R54 in line [00624],R55 in line [00624])", "S63:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN395863 (R32 in line [00610],R56 in line [00610])", "S63:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN385845 (R32 in line [00386],R58 in line [00386])", "S63:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN385845.dummymethode_00388" ]
  }, {
    "_id" : "64",
    "_lesItems" : [ "S64:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN477307", "S64:org.apache.kafka.clients.producer.internals.Sender.run@POLYN316568", "S64:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN318775", "S64:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN318775", "S64:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN319971", "S64:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN319971", "S64:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN340713", "S64:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN396458 (R32 in line [00624],R53 in line [00624],R54 in line [00624],R55 in line [00624])", "S64:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN393276 (R32 in line [00557],R59 in line [00557])", "S64:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN161374", "S64:java.util.Map.get@POLYN438883" ]
  }, {
    "_id" : "65",
    "_lesItems" : [ "S65:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN477307", "S65:org.apache.kafka.clients.producer.internals.Sender.run@POLYN316568", "S65:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN318775", "S65:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN318775", "S65:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN319971", "S65:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN319971", "S65:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN400225 (R32 in line [00708],R60 in line [00708])", "S65:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN400225.dummymethode_00710" ]
  }, {
    "_id" : "66",
    "_lesItems" : [ "S66:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN558421", "S66:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN558421", "S66:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN383522 (R32 in line [00327],R76 in line [00327])", "S66:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN411568" ]
  }, {
    "_id" : "67",
    "_lesItems" : [ "S67:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN324451", "S67:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN324451", "S67:org.apache.kafka.clients.producer.internals.Sender.maybeFindCoordinatorAndRetry@POLYN328152", "S67:org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN404663 (R32 in line [00805],R118 in line [00805])", "S67:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.setRetry@POLYN420983", "S67:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.setRetry@POLYN420983.dummymethode_01228" ]
  }, {
    "_id" : "68",
    "_lesItems" : [ "S68:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN329975", "S68:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN329975", "S68:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN337407", "S68:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN395309 (R32 in line [00599],R148 in line [00599],R149 in line [00599])", "S68:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateLastAckedSequence@POLYN393568", "S68:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateLastAckedSequence@POLYN393568.dummymethode_00566" ]
  }, {
    "_id" : "69",
    "_lesItems" : [ "S69:org.apache.kafka.clients.producer.internals.TransactionManager.isPartitionAdded@POLYN386765 (R32 in line [00407])", "S69:java.util.Hashtable.contains@POLYN429012 (R61 in line [00307])", "S69:java.util.Hashtable.contains@POLYN429012.dummymethode_00312" ]
  }, {
    "_id" : "70",
    "_lesItems" : [ "S70:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN414098", "S70:java.util.Hashtable.putAll@POLYN440376 (R61 in line [00536],R62 in line [00536])", "S70:java.util.Hashtable.put@POLYN436908 (R61 in line [00471])", "S70:java.util.Hashtable.put@POLYN436908.dummymethode_00478" ]
  }, {
    "_id" : "71",
    "_lesItems" : [ "S71:java.util.Hashtable.forEach@POLYN455916 (R61 in line [00888],R366 in line [00888])", "S71:java.util.Hashtable.forEach@POLYN455916.dummymethode_00889" ]
  }, {
    "_id" : "72",
    "_lesItems" : [ "S72:java.util.Hashtable.replaceAll@POLYN456826 (R61 in line [00908],R367 in line [00908])", "S72:java.util.Hashtable.replaceAll@POLYN456826.dummymethode_00909" ]
  }, {
    "_id" : "73",
    "_lesItems" : [ "S73:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN536424", "S73:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN536424", "S73:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN552708 (R33 in line [00744])", "S73:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN552708 (R33 in line [00744])", "S73:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN198204", "S73:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN200135", "S73:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN200135", "S73:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN173271 (R35 in line [00072],R36 in line [00072],R37 in line [00072],R38 in line [00072])", "S73:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN173271.dummymethode_00075" ]
  }, {
    "_id" : "74",
    "_lesItems" : [ "S74:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN839370", "S74:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN839370", "S74:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN172487 (R35 in line [00060],R78 in line [00060],R79 in line [00060],R80 in line [00060],R81 in line [00060])", "S74:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN172487.dummymethode_00062" ]
  }, {
    "_id" : "75",
    "_lesItems" : [ "S75:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN536424", "S75:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN536424", "S75:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN552708 (R33 in line [00744])", "S75:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN552708 (R33 in line [00744])", "S75:org.apache.kafka.connect.runtime.distributed.DistributedHerder.stopServices@POLYN554045", "S75:org.apache.kafka.connect.runtime.AbstractHerder.stopServices@POLYN303546", "S75:org.apache.kafka.connect.runtime.Worker.stop@POLYN431647", "S75:org.apache.kafka.connect.runtime.Worker.stop@POLYN431647", "S75:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN505850 (R39 in line [01751])" ]
  }, {
    "_id" : "76",
    "_lesItems" : [ "S76:org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN586198 (R33 in line [01387],R119 in line [01387])", "S76:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN172898", "S76:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN172898.dummymethode_00055" ]
  }, {
    "_id" : "77",
    "_lesItems" : [ "S77:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN536424", "S77:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN536424", "S77:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN552708 (R33 in line [00744])", "S77:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN552708 (R33 in line [00744])", "S77:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN198204", "S77:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN200135", "S77:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN200135", "S77:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN173271 (R35 in line [00072],R36 in line [00072],R37 in line [00072],R38 in line [00072])", "S77:org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN175210", "S77:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN312607 (R15 in line [00558])", "S77:java.util.HashMap.remove@POLYN661170", "S77:java.util.HashMap.remove@POLYN661170.dummymethode_01064" ]
  }, {
    "_id" : "78",
    "_lesItems" : [ "S78:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN536424", "S78:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN536424", "S78:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN552708 (R33 in line [00744])", "S78:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN552708 (R33 in line [00744])", "S78:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN198204", "S78:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN200135", "S78:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN200135", "S78:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN173271 (R35 in line [00072],R36 in line [00072],R37 in line [00072],R38 in line [00072])", "S78:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN173271 (R35 in line [00072],R36 in line [00072],R37 in line [00072],R38 in line [00072])", "S78:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN173271.dummymethode_00075" ]
  }, {
    "_id" : "79",
    "_lesItems" : [ "S79:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN477307", "S79:org.apache.kafka.clients.producer.internals.Sender.run@POLYN316568", "S79:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN318775", "S79:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN318775", "S79:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN319971", "S79:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN319971", "S79:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN364820", "S79:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN360291 (R47 in line [00799])", "S79:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN387341 (R32 in line [00426],R48 in line [00426])", "S79:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN387341 (R32 in line [00426],R48 in line [00426])", "S79:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN163107", "S79:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN153356", "S79:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN153356.dummymethode_00026" ]
  }, {
    "_id" : "80",
    "_lesItems" : [ "S80:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN477307", "S80:org.apache.kafka.clients.producer.internals.Sender.run@POLYN316568", "S80:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN318775", "S80:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN318775", "S80:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN319971", "S80:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN319971", "S80:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN340713", "S80:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN396458 (R32 in line [00624],R53 in line [00624],R54 in line [00624],R55 in line [00624])", "S80:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN395863 (R32 in line [00610],R56 in line [00610])", "S80:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN385845 (R32 in line [00386],R58 in line [00386])", "S80:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN385845 (R32 in line [00386],R58 in line [00386])", "S80:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN385845.dummymethode_00388" ]
  }, {
    "_id" : "81",
    "_lesItems" : [ "S81:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN477307", "S81:org.apache.kafka.clients.producer.internals.Sender.run@POLYN316568", "S81:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN318775", "S81:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN318775", "S81:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN319971", "S81:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN319971", "S81:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN400225 (R32 in line [00708],R60 in line [00708])", "S81:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN400225 (R32 in line [00708],R60 in line [00708])", "S81:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN400225.dummymethode_00710" ]
  }, {
    "_id" : "82",
    "_lesItems" : [ "S82:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN414098", "S82:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN420208", "S82:org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN254035 (R65 in line [00389],R66 in line [00389],R67 in line [00389])", "S82:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258413" ]
  }, {
    "_id" : "83",
    "_lesItems" : [ "S83:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN414098", "S83:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN420208", "S83:org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN252730 (R65 in line [00357],R68 in line [00357])", "S83:org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN252730.dummymethode_00358" ]
  }, {
    "_id" : "84",
    "_lesItems" : [ "S84:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN414098", "S84:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN420208", "S84:org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN253154 (R65 in line [00367],R69 in line [00367])", "S84:org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN253154.dummymethode_00368" ]
  }, {
    "_id" : "85",
    "_lesItems" : [ "S85:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN242792 (R65 in line [00163])", "S85:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN243026 (R65 in line [00168],R151 in line [00175])", "S85:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258413" ]
  }, {
    "_id" : "86",
    "_lesItems" : [ "S86:org.apache.kafka.clients.consumer.MockConsumer.rebalance@POLYN239589 (R65 in line [00096],R192 in line [00096])", "S86:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN329579 (R2 in line [00273],R24 in line [00273])", "S86:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN329579.dummymethode_00277" ]
  }, {
    "_id" : "87",
    "_lesItems" : [ "S87:org.apache.kafka.clients.consumer.MockConsumer.position@POLYN252318 (R65 in line [00347])", "S87:org.apache.kafka.clients.consumer.MockConsumer.position@POLYN251618 (R65 in line [00334])", "S87:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN341969 (R2 in line [00537])", "S87:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333534", "S87:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309", "S87:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309.dummymethode_00114" ]
  }, {
    "_id" : "88",
    "_lesItems" : [ "S88:org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN249798 (R65 in line [00295],R208 in line [00295],R209 in line [00295])", "S88:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258413" ]
  }, {
    "_id" : "89",
    "_lesItems" : [ "S89:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN248077 (R65 in line [00254],R219 in line [00254],R220 in line [00254])", "S89:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258413" ]
  }, {
    "_id" : "90",
    "_lesItems" : [ "S90:org.apache.kafka.clients.consumer.MockConsumer.pause@POLYN254310 (R65 in line [00395],R221 in line [00395])", "S90:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN351424 (R2 in line [00737],R163 in line [00737])", "S90:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333534", "S90:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309", "S90:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309.dummymethode_00114" ]
  }, {
    "_id" : "91",
    "_lesItems" : [ "S91:org.apache.kafka.clients.consumer.MockConsumer.resume@POLYN254632 (R65 in line [00403],R222 in line [00403])", "S91:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN351575 (R2 in line [00741],R164 in line [00741])", "S91:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333534", "S91:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309", "S91:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309.dummymethode_00114" ]
  }, {
    "_id" : "92",
    "_lesItems" : [ "S92:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN239991 (R65 in line [00108],R238 in line [00108])", "S92:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN241819 (R65 in line [00141],R239 in line [00141],R240 in line [00141])", "S92:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258413" ]
  }, {
    "_id" : "93",
    "_lesItems" : [ "S93:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN240198 (R65 in line [00113],R241 in line [00113],R242 in line [00113])", "S93:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258413" ]
  }, {
    "_id" : "94",
    "_lesItems" : [ "S94:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN241633 (R65 in line [00136],R243 in line [00136])", "S94:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN241819 (R65 in line [00141],R239 in line [00141],R240 in line [00141])", "S94:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258413" ]
  }, {
    "_id" : "95",
    "_lesItems" : [ "S95:org.apache.kafka.clients.consumer.MockConsumer.assign@POLYN242197 (R65 in line [00148],R284 in line [00148])", "S95:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258413" ]
  }, {
    "_id" : "96",
    "_lesItems" : [ "S96:org.apache.kafka.clients.consumer.MockConsumer.addRecord@POLYN246717 (R65 in line [00227],R285 in line [00227])", "S96:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258413" ]
  }, {
    "_id" : "97",
    "_lesItems" : [ "S97:org.apache.kafka.clients.consumer.MockConsumer.setException@POLYN247668 (R65 in line [00241],R286 in line [00241])", "S97:org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN247799 (R65 in line [00245],R287 in line [00245])", "S97:org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN247799.dummymethode_00246" ]
  }, {
    "_id" : "98",
    "_lesItems" : [ "S98:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN248899 (R65 in line [00269])", "S98:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN249024 (R65 in line [00274],R288 in line [00274])", "S98:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258413" ]
  }, {
    "_id" : "99",
    "_lesItems" : [ "S99:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN257176", "S99:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN257338 (R65 in line [00455],R317 in line [00455])", "S99:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN257338.dummymethode_00456" ]
  }, {
    "_id" : "100",
    "_lesItems" : [ "S100:org.apache.kafka.clients.consumer.MockConsumer.setOffsetsException@POLYN247931 (R65 in line [00249],R324 in line [00249])", "S100:org.apache.kafka.clients.consumer.MockConsumer.setOffsetsException@POLYN247931.dummymethode_00250" ]
  }, {
    "_id" : "101",
    "_lesItems" : [ "S101:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN248693 (R65 in line [00264],R325 in line [00264])", "S101:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN248693.dummymethode_00265" ]
  }, {
    "_id" : "102",
    "_lesItems" : [ "S102:org.apache.kafka.clients.consumer.MockConsumer.seekToBeginning@POLYN252496 (R65 in line [00352],R326 in line [00352])", "S102:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258413" ]
  }, {
    "_id" : "103",
    "_lesItems" : [ "S103:org.apache.kafka.clients.consumer.MockConsumer.seekToEnd@POLYN252920 (R65 in line [00362],R327 in line [00362])", "S103:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258413" ]
  }, {
    "_id" : "104",
    "_lesItems" : [ "S104:org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN257891 (R65 in line [00473],R328 in line [00473],R151 in line [00474])", "S104:org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN257891.dummymethode_00475" ]
  }, {
    "_id" : "105",
    "_lesItems" : [ "S105:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN558421", "S105:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN558421", "S105:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN383522 (R32 in line [00327],R76 in line [00327])", "S105:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN383522 (R32 in line [00327],R76 in line [00327])", "S105:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN411568" ]
  }, {
    "_id" : "106",
    "_lesItems" : [ "S106:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN839370", "S106:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN839370", "S106:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN172487 (R35 in line [00060],R78 in line [00060],R79 in line [00060],R80 in line [00060],R81 in line [00060])", "S106:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN172487 (R35 in line [00060],R78 in line [00060],R79 in line [00060],R80 in line [00060],R81 in line [00060])", "S106:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN172487.dummymethode_00062" ]
  }, {
    "_id" : "107",
    "_lesItems" : [ "S107:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN302573", "S107:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN302573", "S107:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readConnectorStatus@POLYN297936 (R82 in line [00563])", "S107:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readConnectorStatus@POLYN297936 (R82 in line [00563])", "S107:org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN285138 (R82 in line [00353],R83 in line [00353])", "S107:java.util.Hashtable.remove@POLYN487286" ]
  }, {
    "_id" : "108",
    "_lesItems" : [ "S108:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN302573", "S108:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN302573", "S108:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readTaskStatus@POLYN299072 (R82 in line [00589])", "S108:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readTaskStatus@POLYN299072 (R82 in line [00589])", "S108:org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN286452 (R82 in line [00374],R84 in line [00374])", "S108:org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN286452 (R82 in line [00374],R84 in line [00374])", "S108:java.io.File.delete@POLYN607144", "S108:java.io.File.delete@POLYN607144.dummymethode_00001" ]
  }, {
    "_id" : "109",
    "_lesItems" : [ "S109:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN380003", "S109:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN380003", "S109:org.apache.kafka.clients.Metadata.update@POLYN263843 (R5 in line [00263],R86 in line [00263],R87 in line [00263],R88 in line [00263],R89 in line [00263])", "S109:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN266853", "S109:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN266853", "S109:org.apache.kafka.clients.Metadata.requestUpdate@POLYN258345 (R5 in line [00145])", "S109:org.apache.kafka.clients.Metadata.requestUpdate@POLYN258345.dummymethode_00146" ]
  }, {
    "_id" : "110",
    "_lesItems" : [ "S110:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN380003", "S110:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN380003", "S110:org.apache.kafka.clients.Metadata.update@POLYN263843 (R5 in line [00263],R86 in line [00263],R87 in line [00263],R88 in line [00263],R89 in line [00263])", "S110:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN266853", "S110:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN266853", "S110:org.apache.kafka.common.requests.MetadataResponse.brokersById@POLYN232557", "S110:org.apache.kafka.common.requests.MetadataResponse.holder@POLYN231950 (R90 in line [00001])", "S110:org.apache.kafka.common.requests.MetadataResponse.Holder.Holder@POLYN240101", "S110:org.apache.kafka.common.requests.MetadataResponse.Holder.Holder@POLYN240101.dummymethode_00001" ]
  }, {
    "_id" : "111",
    "_lesItems" : [ "S111:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN270046 (R91 in line [00001],R136 in line [00001])", "S111:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN270341", "S111:org.apache.kafka.common.utils.Utils.delete@POLYN455861", "S111:org.apache.kafka.common.utils.Utils.delete@POLYN455861.dummymethode_00852" ]
  }, {
    "_id" : "112",
    "_lesItems" : [ "S112:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN270046 (R91 in line [00001],R136 in line [00001])", "S112:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN270341", "S112:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN270341", "S112:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN267039 (R91 in line [00001],R137 in line [00001])", "S112:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN267039.dummymethode_00001" ]
  }, {
    "_id" : "113",
    "_lesItems" : [ "S113:org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN265832 (R91 in line [00001])", "S113:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN260878 (R179 in line [00001])", "S113:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN260878.dummymethode_00001" ]
  }, {
    "_id" : "114",
    "_lesItems" : [ "S114:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN232434", "S114:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN232732 (R92 in line [00104],R93 in line [00104])", "S114:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN232732 (R92 in line [00104],R93 in line [00104])", "S114:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN235578", "S114:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN235578.dummymethode_00170" ]
  }, {
    "_id" : "115",
    "_lesItems" : [ "S115:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN232434", "S115:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN232732 (R92 in line [00104],R93 in line [00104])", "S115:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN232732 (R92 in line [00104],R93 in line [00104])", "S115:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN235578", "S115:org.apache.kafka.streams.processor.internals.TopologyMetadata.registerAndBuildNewTopology@POLYN260852", "S115:org.apache.kafka.streams.processor.internals.TopologyMetadata.buildAndVerifyTopology@POLYN264711", "S115:org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.rewriteTopology@POLYN498589 (R63 in line [00412])", "S115:org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.rewriteTopology@POLYN498589.dummymethode_00413" ]
  }, {
    "_id" : "116",
    "_lesItems" : [ "S116:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN232434", "S116:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN232732 (R92 in line [00104],R93 in line [00104])", "S116:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN232732 (R92 in line [00104],R93 in line [00104])", "S116:org.apache.kafka.streams.KafkaStreams.start@POLYN562333 (R19 in line [01832])", "S116:org.apache.kafka.streams.KafkaStreams.start@POLYN562333.dummymethode_01832" ]
  }, {
    "_id" : "117",
    "_lesItems" : [ "S117:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN239637 (R94 in line [00242],R95 in line [00242])", "S117:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN239637 (R94 in line [00242],R95 in line [00242])", "S117:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN239637.dummymethode_00245" ]
  }, {
    "_id" : "118",
    "_lesItems" : [ "S118:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN233259 (R94 in line [00105])", "S118:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN233259 (R94 in line [00105])", "S118:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN444942", "S118:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN441662", "S118:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN441662", "S118:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN229668 (R34 in line [00256])", "S118:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN229668 (R34 in line [00256])", "S118:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN229668.dummymethode_00258" ]
  }, {
    "_id" : "119",
    "_lesItems" : [ "S119:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN233259 (R94 in line [00105])", "S119:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN233259 (R94 in line [00105])", "S119:org.apache.kafka.connect.runtime.AbstractHerder.stopServices@POLYN303546", "S119:org.apache.kafka.connect.runtime.Worker.stop@POLYN431647", "S119:org.apache.kafka.connect.runtime.Worker.stop@POLYN431647", "S119:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN505850 (R39 in line [01751])" ]
  }, {
    "_id" : "120",
    "_lesItems" : [ "S120:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN244096 (R94 in line [00309],R114 in line [00309],R115 in line [00309])", "S120:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN172898", "S120:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN172898.dummymethode_00055" ]
  }, {
    "_id" : "121",
    "_lesItems" : [ "S121:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN241474 (R94 in line [00274],R123 in line [00274],R124 in line [00274])", "S121:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN241474.dummymethode_00276" ]
  }, {
    "_id" : "122",
    "_lesItems" : [ "S122:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN235776 (R94 in line [00161],R165 in line [00161],R166 in line [00161])", "S122:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN235776.dummymethode_00165" ]
  }, {
    "_id" : "123",
    "_lesItems" : [ "S123:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN237757 (R94 in line [00201],R167 in line [00201],R168 in line [00201],R169 in line [00201],R170 in line [00201],R171 in line [00201])", "S123:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN237757.dummymethode_00208" ]
  }, {
    "_id" : "124",
    "_lesItems" : [ "S124:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN242891 (R94 in line [00291],R172 in line [00291],R173 in line [00291])", "S124:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN242891.dummymethode_00293" ]
  }, {
    "_id" : "125",
    "_lesItems" : [ "S125:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN234176 (R94 in line [00133],R342 in line [00133])", "S125:org.apache.kafka.connect.util.Callback.onCompletion" ]
  }, {
    "_id" : "126",
    "_lesItems" : [ "S126:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN234407 (R94 in line [00138],R343 in line [00138],R344 in line [00138])", "S126:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN234407.dummymethode_00141" ]
  }, {
    "_id" : "127",
    "_lesItems" : [ "S127:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN236844 (R94 in line [00181],R345 in line [00181],R346 in line [00181],R347 in line [00181],R348 in line [00181])", "S127:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN236844.dummymethode_00186" ]
  }, {
    "_id" : "128",
    "_lesItems" : [ "S128:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN240011 (R94 in line [00251],R349 in line [00251],R350 in line [00251])", "S128:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN240011.dummymethode_00253" ]
  }, {
    "_id" : "129",
    "_lesItems" : [ "S129:org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.close@POLYN213933 (R125 in line [00335])", "S129:org.apache.kafka.connect.runtime.errors.ProcessingContext.close@POLYN194441", "S129:java.lang.Throwable.addSuppressed@POLYN399621 (R127 in line [01070],R128 in line [01070])", "S129:java.lang.Throwable.addSuppressed@POLYN399621.dummymethode_01074" ]
  }, {
    "_id" : "130",
    "_lesItems" : [ "S130:java.lang.Throwable.writeObject@POLYN397566 (R127 in line [01002],R185 in line [01002])", "S130:java.lang.Throwable.getOurStackTrace@POLYN391585 (R127 in line [00834])", "S130:java.lang.Throwable.getOurStackTrace@POLYN391585.dummymethode_00839" ]
  }, {
    "_id" : "131",
    "_lesItems" : [ "S131:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN244096 (R94 in line [00309],R114 in line [00309],R115 in line [00309])", "S131:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN244096 (R94 in line [00309],R114 in line [00309],R115 in line [00309])", "S131:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN172898", "S131:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN172898.dummymethode_00055" ]
  }, {
    "_id" : "132",
    "_lesItems" : [ "S132:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN244096 (R94 in line [00309],R114 in line [00309],R115 in line [00309])", "S132:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN244096 (R94 in line [00309],R114 in line [00309],R115 in line [00309])", "S132:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN444942", "S132:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN441662", "S132:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN441662", "S132:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN229668 (R34 in line [00256])", "S132:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN229668 (R34 in line [00256])", "S132:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN229668.dummymethode_00258" ]
  }, {
    "_id" : "133",
    "_lesItems" : [ "S133:org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN586198 (R33 in line [01387],R119 in line [01387])", "S133:org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN586198 (R33 in line [01387],R119 in line [01387])", "S133:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN172898", "S133:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN172898.dummymethode_00055" ]
  }, {
    "_id" : "134",
    "_lesItems" : [ "S134:org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN586198 (R33 in line [01387],R119 in line [01387])", "S134:org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN586198 (R33 in line [01387],R119 in line [01387])", "S134:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN444942", "S134:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN441662", "S134:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN441662", "S134:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN229668 (R34 in line [00256])", "S134:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN229668 (R34 in line [00256])", "S134:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN229668.dummymethode_00258" ]
  }, {
    "_id" : "135",
    "_lesItems" : [ "S135:org.apache.kafka.common.network.Selector.SelectorMetrics.close@POLYN474220", "S135:org.apache.kafka.common.network.Selector.SelectorMetrics.close@POLYN474220", "S135:org.apache.kafka.common.metrics.internals.IntGaugeSuite.close@POLYN199118 (R129 in line [00256])", "S135:org.apache.kafka.common.metrics.internals.IntGaugeSuite.close@POLYN199118 (R129 in line [00256])", "S135:org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN196840", "S135:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN312607 (R15 in line [00558])", "S135:java.util.HashMap.remove@POLYN661170", "S135:java.util.HashMap.remove@POLYN661170.dummymethode_01064" ]
  }, {
    "_id" : "136",
    "_lesItems" : [ "S136:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN198122 (R129 in line [00235],R227 in line [00235])", "S136:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN198122.dummymethode_00237" ]
  }, {
    "_id" : "137",
    "_lesItems" : [ "S137:org.apache.kafka.snapshot.RecordsSnapshotWriter.freeze@POLYN179907", "S137:org.apache.kafka.snapshot.RecordsSnapshotWriter.appendBatches@POLYN180338", "S137:org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN179207", "S137:org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN227383", "S137:org.apache.kafka.raft.internals.BatchAccumulator.maybeAllocateBatch@POLYN229466", "S137:org.apache.kafka.raft.internals.BatchBuilder.bytesNeeded@POLYN202301", "S137:org.apache.kafka.common.protocol.DataOutputStreamWritable.flush@POLYN168873", "S137:java.io.BufferedOutputStream.flush@POLYN172643 (R132 in line [00139])", "S137:java.io.BufferedOutputStream.flushBuffer@POLYN170312", "S137:java.io.BufferedOutputStream.write@POLYN171608 (R132 in line [00116],R133 in line [00116],R134 in line [00116],R135 in line [00116])", "S137:java.io.BufferedOutputStream.write@POLYN171608 (R132 in line [00116],R133 in line [00116],R134 in line [00116],R135 in line [00116])", "S137:java.io.BufferedOutputStream.write@POLYN171608.dummymethode_00123" ]
  }, {
    "_id" : "138",
    "_lesItems" : [ "S138:org.apache.kafka.streams.state.internals.RocksDBStore.putAll@POLYN268970", "S138:java.io.BufferedOutputStream.write@POLYN170747 (R132 in line [00093],R237 in line [00093])", "S138:java.io.BufferedOutputStream.flushBuffer@POLYN170312", "S138:java.io.BufferedOutputStream.write@POLYN171608 (R132 in line [00116],R133 in line [00116],R134 in line [00116],R135 in line [00116])", "S138:java.io.BufferedOutputStream.write@POLYN171608 (R132 in line [00116],R133 in line [00116],R134 in line [00116],R135 in line [00116])", "S138:java.io.BufferedOutputStream.write@POLYN171608.dummymethode_00123" ]
  }, {
    "_id" : "139",
    "_lesItems" : [ "S139:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN270046 (R91 in line [00001],R136 in line [00001])", "S139:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN270341", "S139:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN270341", "S139:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN267039 (R91 in line [00001],R137 in line [00001])", "S139:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN267039 (R91 in line [00001],R137 in line [00001])", "S139:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN267039.dummymethode_00001" ]
  }, {
    "_id" : "140",
    "_lesItems" : [ "S140:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN205293", "S140:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN205019 (R138 in line [00157],R139 in line [00157],R140 in line [00157])", "S140:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN154678", "S140:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN154678.dummymethode_00038" ]
  }, {
    "_id" : "141",
    "_lesItems" : [ "S141:org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN209285 (R138 in line [00256],R162 in line [00256])", "S141:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN205019 (R138 in line [00157],R139 in line [00157],R140 in line [00157])", "S141:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN154678", "S141:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN154678.dummymethode_00038" ]
  }, {
    "_id" : "142",
    "_lesItems" : [ "S142:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN210732 (R142 in line [00254],R212 in line [00254])", "S142:org.apache.kafka.streams.state.internals.NamedCache.close@POLYN213634 (R138 in line [00345])", "S142:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllCacheLevelSensors@POLYN308585 (R213 in line [00462])", "S142:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheSensorPrefix@POLYN309240", "S142:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheSensorPrefix@POLYN309240.dummymethode_00471" ]
  }, {
    "_id" : "143",
    "_lesItems" : [ "S143:org.apache.kafka.streams.state.internals.NamedCache.setListener@POLYN202422 (R138 in line [00104],R375 in line [00104])", "S143:org.apache.kafka.streams.state.internals.NamedCache.setListener@POLYN202422.dummymethode_00105" ]
  }, {
    "_id" : "144",
    "_lesItems" : [ "S144:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN205293", "S144:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN205019 (R138 in line [00157],R139 in line [00157],R140 in line [00157])", "S144:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN205019 (R138 in line [00157],R139 in line [00157],R140 in line [00157])", "S144:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN154678", "S144:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN154678.dummymethode_00038" ]
  }, {
    "_id" : "145",
    "_lesItems" : [ "S145:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN201765 (R142 in line [00075],R143 in line [00075])", "S145:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN201765.dummymethode_00077" ]
  }, {
    "_id" : "146",
    "_lesItems" : [ "S146:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN210732 (R142 in line [00254],R212 in line [00254])", "S146:java.util.Hashtable.remove@POLYN487286" ]
  }, {
    "_id" : "147",
    "_lesItems" : [ "S147:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN201765 (R142 in line [00075],R143 in line [00075])", "S147:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN201765 (R142 in line [00075],R143 in line [00075])", "S147:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN201765.dummymethode_00077" ]
  }, {
    "_id" : "148",
    "_lesItems" : [ "S148:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN201765 (R142 in line [00075],R143 in line [00075])", "S148:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN201765 (R142 in line [00075],R143 in line [00075])", "S148:org.apache.kafka.streams.state.internals.NamedCache.evict@POLYN208340 (R138 in line [00235])", "S148:org.apache.kafka.streams.state.internals.NamedCache.evict@POLYN208340.dummymethode_00237" ]
  }, {
    "_id" : "149",
    "_lesItems" : [ "S149:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN329975", "S149:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN329975", "S149:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN337407", "S149:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN395309 (R32 in line [00599],R148 in line [00599],R149 in line [00599])", "S149:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN393276 (R32 in line [00557],R59 in line [00557])", "S149:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN161374", "S149:java.util.Map.get@POLYN438883" ]
  }, {
    "_id" : "150",
    "_lesItems" : [ "S150:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN242792 (R65 in line [00163])", "S150:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN243026 (R65 in line [00168],R151 in line [00175])", "S150:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN243026 (R65 in line [00168],R151 in line [00175])", "S150:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258413" ]
  }, {
    "_id" : "151",
    "_lesItems" : [ "S151:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN242792 (R65 in line [00163])", "S151:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN243026 (R65 in line [00168],R151 in line [00175])", "S151:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN243026 (R65 in line [00168],R151 in line [00175])", "S151:org.apache.kafka.clients.consumer.MockConsumer.updateFetchPosition@POLYN258571", "S151:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN347186", "S151:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN346575 (R2 in line [00636],R12 in line [00636],R13 in line [00636])", "S151:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333534", "S151:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309", "S151:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309.dummymethode_00114" ]
  }, {
    "_id" : "152",
    "_lesItems" : [ "S152:org.apache.kafka.common.network.Selector.connect@POLYN413475", "S152:org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415203", "S152:java.net.Socket.setSendBufferSize@POLYN504551 (R159 in line [00001],R160 in line [00001])" ]
  }, {
    "_id" : "153",
    "_lesItems" : [ "S153:org.apache.kafka.common.network.Selector.connect@POLYN413475", "S153:org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415203", "S153:java.net.Socket.setReceiveBufferSize@POLYN507258 (R159 in line [00001],R161 in line [00001])" ]
  }, {
    "_id" : "154",
    "_lesItems" : [ "S154:java.net.Socket.Socket@POLYN479379", "S154:java.net.Socket.close@POLYN514988 (R159 in line [00001],R181 in line [00001])", "S154:java.net.Socket.close@POLYN514988 (R159 in line [00001],R181 in line [00001])", "S154:java.net.Socket.close@POLYN514988.dummymethode_00001" ]
  }, {
    "_id" : "155",
    "_lesItems" : [ "S155:java.net.Socket.setSocketImplFactory@POLYN520186 (R159 in line [00001],R365 in line [00001])", "S155:java.net.Socket.setSocketImplFactory@POLYN520186.dummymethode_00001" ]
  }, {
    "_id" : "156",
    "_lesItems" : [ "S156:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN176708 (R174 in line [00139],R175 in line [00139])", "S156:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN176708.dummymethode_00141" ]
  }, {
    "_id" : "157",
    "_lesItems" : [ "S157:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN174230 (R174 in line [00076],R193 in line [00076])", "S157:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN174230.dummymethode_00078" ]
  }, {
    "_id" : "158",
    "_lesItems" : [ "S158:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN178001 (R174 in line [00169],R358 in line [00169])", "S158:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN178001 (R174 in line [00169],R358 in line [00169])", "S158:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN178001.dummymethode_00173" ]
  }, {
    "_id" : "159",
    "_lesItems" : [ "S159:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN176708 (R174 in line [00139],R175 in line [00139])", "S159:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN176708 (R174 in line [00139],R175 in line [00139])", "S159:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN176708.dummymethode_00141" ]
  }, {
    "_id" : "160",
    "_lesItems" : [ "S160:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN174230 (R174 in line [00076],R193 in line [00076])", "S160:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN174230 (R174 in line [00076],R193 in line [00076])", "S160:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN174230.dummymethode_00078" ]
  }, {
    "_id" : "161",
    "_lesItems" : [ "S161:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN174818 (R198 in line [00093],R199 in line [00093])", "S161:org.apache.kafka.common.utils.Time.milliseconds@POLYN164513" ]
  }, {
    "_id" : "162",
    "_lesItems" : [ "S162:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN174818 (R198 in line [00093],R199 in line [00093])", "S162:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN174818 (R198 in line [00093],R199 in line [00093])", "S162:org.apache.kafka.common.utils.Time.milliseconds@POLYN164513" ]
  }, {
    "_id" : "163",
    "_lesItems" : [ "S163:org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetIfNeeded@POLYN513919", "S163:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN334646 (R2 in line [00390],R204 in line [00390],R205 in line [00390],R206 in line [00390])", "S163:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN334646 (R2 in line [00390],R204 in line [00390],R205 in line [00390],R206 in line [00390])", "S163:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN333901", "S163:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309", "S163:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183309.dummymethode_00114" ]
  }, {
    "_id" : "164",
    "_lesItems" : [ "S164:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN432016 (R22 in line [01023],R224 in line [01023],R225 in line [01023],R226 in line [01023])", "S164:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN431718 (R22 in line [01017],R200 in line [01017],R201 in line [01017])", "S164:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN431019 (R22 in line [01004],R202 in line [01004],R203 in line [01004])", "S164:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN431019.dummymethode_01005" ]
  }, {
    "_id" : "165",
    "_lesItems" : [ "S165:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN198122 (R129 in line [00235],R227 in line [00235])", "S165:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN198122 (R129 in line [00235],R227 in line [00235])", "S165:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN198122.dummymethode_00237" ]
  }, {
    "_id" : "166",
    "_lesItems" : [ "S166:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN171558 (R254 in line [00071],R255 in line [00071])", "S166:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN171179 (R254 in line [00063],R256 in line [00063])", "S166:java.util.HashMap.remove@POLYN661170", "S166:java.util.HashMap.remove@POLYN661170.dummymethode_01064" ]
  }, {
    "_id" : "167",
    "_lesItems" : [ "S167:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN172246 (R254 in line [00084],R257 in line [00084])", "S167:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN171703 (R254 in line [00076],R258 in line [00076])", "S167:org.apache.kafka.connect.util.Table.remove@POLYN159963", "S167:org.apache.kafka.connect.util.Table.remove@POLYN159963.dummymethode_00046" ]
  }, {
    "_id" : "168",
    "_lesItems" : [ "S168:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN248899 (R65 in line [00269])", "S168:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN249024 (R65 in line [00274],R288 in line [00274])", "S168:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN249024 (R65 in line [00274],R288 in line [00274])", "S168:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258413" ]
  } ],
  "_lesDeadlocksTypos" : [ ]
}