{
  "_lesSequences" : [ {
    "_id" : "1",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.INVALIDATED",
      "_method" : "---java.io.BufferedReader.fill@POLYN241817.dummymethode_00138 in line [00138]",
      "_target" : "java.io.BufferedReader.markedChar",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958.dummymethode_00342 in line [00342]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249958.i",
      "_risk" : "//QC-JAVCWE099[00342] In java.io.BufferedReader.readLine@POLYN249958[00342] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249958.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN249958[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedReader.readLine@POLYN249958.i",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958.dummymethode_00351 in line [00351]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : "//QC-JAVCWE099[00351] In java.io.BufferedReader.readLine@POLYN249958[00351] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.BufferedReader.readLine@POLYN249958.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958.dummymethode_00356 in line [00356]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249958.str",
      "_risk" : "//QC-JAVCWE099[00356] In java.io.BufferedReader.readLine@POLYN249958[00356] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.BufferedReader.readLine@POLYN249958.str",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958.dummymethode_00365 in line [00365]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249958.return",
      "_risk" : "//QC-JAVCWE099[00365] In java.io.BufferedReader.readLine@POLYN249958[00365] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedReader.readLine@POLYN249958.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958 in line [00389]",
      "_target" : "java.io.BufferedReader.readLine@POLYN253159.return",
      "_risk" : "//QC-JAVCWE099[00389] In java.io.BufferedReader.readLine@POLYN253159[00389] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "8",
      "_source" : "java.io.BufferedReader.markedChar",
      "_method" : "---java.io.BufferedReader.reset@POLYN257142.dummymethode_00515 in line [00515]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.lang.Integer.parseInt@POLYN438779.s",
      "_method" : "---java.lang.Integer.parseInt@POLYN435231 in line [00527]",
      "_target" : "java.lang.Integer.parseInt@POLYN438779.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.util.HashMap.put@POLYN632446.key",
      "_method" : "---java.util.HashMap.putVal@POLYN632969 in line [00609]",
      "_target" : "java.util.HashMap.put@POLYN632446.return",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN251664.return",
      "_method" : "---org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN251664 in line [00309]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN250579.return",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN250579.return",
      "_method" : "---org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN250579 in line [00315]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN250819.return",
      "_risk" : ""
    }, {
      "_id" : "13",
      "_source" : "java.util.HashMap.put@POLYN632446.return",
      "_method" : "---java.util.HashMap.put@POLYN632446 in line [00330]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN251664.return",
      "_risk" : ""
    }, {
      "_id" : "14",
      "_source" : "partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.CompletedFetch@POLYN556105.dummymethode_01521 in line [01521]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "15",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541521.dummymethode_01264 in line [01264]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541521.tp",
      "_risk" : ""
    }, {
      "_id" : "16",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541521.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN352385 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN352385.tp",
      "_risk" : ""
    }, {
      "_id" : "17",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN352385.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN181363 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN181363.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "18",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN181363.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN632446 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN632446.key",
      "_risk" : ""
    }, {
      "_id" : "19",
      "_source" : "java.lang.Integer.parseInt@POLYN438779.return",
      "_method" : "---java.lang.Integer.parseInt@POLYN438779 in line [00081]",
      "_target" : "partition",
      "_risk" : ""
    }, {
      "_id" : "20",
      "_source" : "java.io.BufferedReader.readLine@POLYN253159.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN253159 in line [00197]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN191495.line",
      "_risk" : "//QC-JAVCWE099[00197] In org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN191495[00197] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "21",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN191495.line",
      "_method" : "---java.lang.Integer.parseInt@POLYN438779 in line [00201]",
      "_target" : "java.lang.Integer.parseInt@POLYN438779.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "2",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958.dummymethode_00342 in line [00342]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249958.i",
      "_risk" : "//QC-JAVCWE099[00342] In java.io.BufferedReader.readLine@POLYN249958[00342] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249958.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN249958[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.readLine@POLYN249958.i",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958.dummymethode_00351 in line [00351]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : "//QC-JAVCWE099[00351] In java.io.BufferedReader.readLine@POLYN249958[00351] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedReader.readLine@POLYN249958.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958.dummymethode_00356 in line [00356]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249958.str",
      "_risk" : "//QC-JAVCWE099[00356] In java.io.BufferedReader.readLine@POLYN249958[00356] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.BufferedReader.readLine@POLYN249958.str",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958.dummymethode_00365 in line [00365]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249958.return",
      "_risk" : "//QC-JAVCWE099[00365] In java.io.BufferedReader.readLine@POLYN249958[00365] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.BufferedReader.readLine@POLYN249958.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958 in line [00389]",
      "_target" : "java.io.BufferedReader.readLine@POLYN253159.return",
      "_risk" : "//QC-JAVCWE099[00389] In java.io.BufferedReader.readLine@POLYN253159[00389] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedReader.skip@POLYN253487.n",
      "_method" : "---java.io.BufferedReader.skip@POLYN253487.dummymethode_00408 in line [00408]",
      "_target" : "java.io.BufferedReader.skip@POLYN253487.r",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.io.BufferedReader.skip@POLYN253487.r",
      "_method" : "---java.io.BufferedReader.skip@POLYN253487.dummymethode_00422 in line [00422]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.lang.Integer.parseInt@POLYN438779.s",
      "_method" : "---java.lang.Integer.parseInt@POLYN435231 in line [00527]",
      "_target" : "java.lang.Integer.parseInt@POLYN438779.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.util.HashMap.put@POLYN632446.key",
      "_method" : "---java.util.HashMap.putVal@POLYN632969 in line [00609]",
      "_target" : "java.util.HashMap.put@POLYN632446.return",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN251664.return",
      "_method" : "---org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN251664 in line [00309]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN250579.return",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN250579.return",
      "_method" : "---org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN250579 in line [00315]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN250819.return",
      "_risk" : ""
    }, {
      "_id" : "13",
      "_source" : "java.util.HashMap.put@POLYN632446.return",
      "_method" : "---java.util.HashMap.put@POLYN632446 in line [00330]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN251664.return",
      "_risk" : ""
    }, {
      "_id" : "14",
      "_source" : "partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.CompletedFetch@POLYN556105.dummymethode_01521 in line [01521]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "15",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541521.dummymethode_01264 in line [01264]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541521.tp",
      "_risk" : ""
    }, {
      "_id" : "16",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541521.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN352385 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN352385.tp",
      "_risk" : ""
    }, {
      "_id" : "17",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN352385.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN181363 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN181363.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "18",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN181363.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN632446 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN632446.key",
      "_risk" : ""
    }, {
      "_id" : "19",
      "_source" : "java.lang.Integer.parseInt@POLYN438779.return",
      "_method" : "---java.lang.Integer.parseInt@POLYN438779 in line [00081]",
      "_target" : "partition",
      "_risk" : ""
    }, {
      "_id" : "20",
      "_source" : "java.io.BufferedReader.readLine@POLYN253159.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN253159 in line [00197]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN191495.line",
      "_risk" : "//QC-JAVCWE099[00197] In org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN191495[00197] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "21",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN191495.line",
      "_method" : "---java.lang.Integer.parseInt@POLYN438779 in line [00201]",
      "_target" : "java.lang.Integer.parseInt@POLYN438779.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "3",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958.dummymethode_00342 in line [00342]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249958.i",
      "_risk" : "//QC-JAVCWE099[00342] In java.io.BufferedReader.readLine@POLYN249958[00342] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249958.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN249958[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.readLine@POLYN249958.i",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958.dummymethode_00351 in line [00351]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : "//QC-JAVCWE099[00351] In java.io.BufferedReader.readLine@POLYN249958[00351] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedReader.readLine@POLYN249958.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958.dummymethode_00356 in line [00356]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249958.str",
      "_risk" : "//QC-JAVCWE099[00356] In java.io.BufferedReader.readLine@POLYN249958[00356] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.BufferedReader.readLine@POLYN249958.str",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958.dummymethode_00365 in line [00365]",
      "_target" : "java.io.BufferedReader.readLine@POLYN249958.return",
      "_risk" : "//QC-JAVCWE099[00365] In java.io.BufferedReader.readLine@POLYN249958[00365] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.BufferedReader.readLine@POLYN249958.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN249958 in line [00389]",
      "_target" : "java.io.BufferedReader.readLine@POLYN253159.return",
      "_risk" : "//QC-JAVCWE099[00389] In java.io.BufferedReader.readLine@POLYN253159[00389] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedReader.skip@POLYN253487.r",
      "_method" : "---java.io.BufferedReader.skip@POLYN253487.dummymethode_00422 in line [00422]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "0",
      "_method" : "---java.io.BufferedReader.skip@POLYN253487.dummymethode_00423 in line [00423]",
      "_target" : "java.io.BufferedReader.skip@POLYN253487.r",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.lang.Integer.parseInt@POLYN438779.s",
      "_method" : "---java.lang.Integer.parseInt@POLYN435231 in line [00527]",
      "_target" : "java.lang.Integer.parseInt@POLYN438779.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "org.apache.kafka.raft.RaftConfig.parseVoterId@POLYN194523.return",
      "_method" : "---org.apache.kafka.raft.RaftConfig.parseVoterId@POLYN194523 in line [00218]",
      "_target" : "org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN194875.voterId",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN194875.voterId",
      "_method" : "---org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN194875.dummymethode_00235 in line [00235]",
      "_target" : "org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN194875.cibledummy_00235",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "java.lang.Integer.parseInt@POLYN438779.return",
      "_method" : "---java.lang.Integer.parseInt@POLYN438779 in line [00203]",
      "_target" : "org.apache.kafka.raft.RaftConfig.parseVoterId@POLYN194523.return",
      "_risk" : ""
    }, {
      "_id" : "13",
      "_source" : "java.io.BufferedReader.readLine@POLYN253159.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN253159 in line [00197]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN191495.line",
      "_risk" : "//QC-JAVCWE099[00197] In org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN191495[00197] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "14",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN191495.line",
      "_method" : "---java.lang.Integer.parseInt@POLYN438779 in line [00201]",
      "_target" : "java.lang.Integer.parseInt@POLYN438779.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "4",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN376552.s",
      "_method" : "---java.io.PrintStream.write@POLYN371361 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN371361.s",
      "_risk" : "//QC-JAVCWE099[00669] In java.io.PrintStream.print@POLYN376552[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.valueOf@POLYN923722.return",
      "_method" : "---java.lang.String.valueOf@POLYN923722 in line [00821]",
      "_target" : "java.io.PrintStream.println@POLYN381522.s",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.println@POLYN381522.s",
      "_method" : "---java.io.PrintStream.print@POLYN376552 in line [00823]",
      "_target" : "java.io.PrintStream.print@POLYN376552.s",
      "_risk" : "//QC-JAVCWE099[00823] In java.io.PrintStream.println@POLYN381522[00823] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.PrintStream.write@POLYN371361.s",
      "_method" : "---java.io.Writer.write@POLYN202828 in line [00525]",
      "_target" : "java.io.Writer.write@POLYN202828.str",
      "_risk" : "//QC-JAVCWE099[00525] In java.io.PrintStream.write@POLYN371361[00525] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.Writer.write@POLYN202828.str",
      "_method" : "---java.io.Writer.write@POLYN203421 in line [00157]",
      "_target" : "java.io.Writer.write@POLYN202828.cibledummy_00157",
      "_risk" : "//QC-JAVCWE099[00157] In java.io.Writer.write@POLYN202828[00157] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.lang.Double.toString@POLYN386342.d",
      "_method" : "---java.lang.Double.toString@POLYN386342.dummymethode_00196 in line [00196]",
      "_target" : "java.lang.Double.toString@POLYN386342.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.String.valueOf@POLYN923722.d",
      "_method" : "---java.lang.Double.toString@POLYN386342 in line [00001]",
      "_target" : "java.lang.Double.toString@POLYN386342.d",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.lang.Double.toString@POLYN386342.return",
      "_method" : "---java.lang.Double.toString@POLYN386342 in line [00001]",
      "_target" : "java.lang.String.valueOf@POLYN923722.return",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.util.HashMap.Node@POLYN617624.value",
      "_method" : "---java.util.HashMap.Node.Node@POLYN617624.dummymethode_00287 in line [00287]",
      "_target" : "java.util.HashMap.value",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.util.HashMap.value",
      "_method" : "---java.util.HashMap.Node.getValue@POLYN618159.dummymethode_00292 in line [00292]",
      "_target" : "java.util.HashMap.getValue@POLYN618159.return",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "java.util.HashMap.getValue@POLYN618159.return",
      "_method" : "---java.util.HashMap.getValue@POLYN618159 in line [00266]",
      "_target" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN211824.valueRaw",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN211824.valueRaw",
      "_method" : "---java.lang.String.valueOf@POLYN923722 in line [00272]",
      "_target" : "java.lang.String.valueOf@POLYN923722.d",
      "_risk" : ""
    } ]
  }, {
    "_id" : "5",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN376552.s",
      "_method" : "---java.io.PrintStream.write@POLYN371361 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN371361.s",
      "_risk" : "//QC-JAVCWE099[00669] In java.io.PrintStream.print@POLYN376552[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.valueOf@POLYN923722.return",
      "_method" : "---java.lang.String.valueOf@POLYN923722 in line [00821]",
      "_target" : "java.io.PrintStream.println@POLYN381522.s",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.println@POLYN381522.s",
      "_method" : "---java.io.PrintStream.print@POLYN376552 in line [00823]",
      "_target" : "java.io.PrintStream.print@POLYN376552.s",
      "_risk" : "//QC-JAVCWE099[00823] In java.io.PrintStream.println@POLYN381522[00823] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.PrintStream.write@POLYN371361.s",
      "_method" : "---java.io.Writer.write@POLYN202828 in line [00525]",
      "_target" : "java.io.Writer.write@POLYN202828.str",
      "_risk" : "//QC-JAVCWE099[00525] In java.io.PrintStream.write@POLYN371361[00525] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.Writer.write@POLYN202828.str",
      "_method" : "---java.io.Writer.write@POLYN203421 in line [00157]",
      "_target" : "java.io.Writer.write@POLYN202828.cibledummy_00157",
      "_risk" : "//QC-JAVCWE099[00157] In java.io.Writer.write@POLYN202828[00157] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.lang.Double.toString@POLYN386342.d",
      "_method" : "---java.lang.Double.toString@POLYN386342.dummymethode_00196 in line [00196]",
      "_target" : "java.lang.Double.toString@POLYN386342.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.String.valueOf@POLYN923722.d",
      "_method" : "---java.lang.Double.toString@POLYN386342 in line [00001]",
      "_target" : "java.lang.Double.toString@POLYN386342.d",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.lang.Double.toString@POLYN386342.return",
      "_method" : "---java.lang.Double.toString@POLYN386342 in line [00001]",
      "_target" : "java.lang.String.valueOf@POLYN923722.return",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.util.HashMap.value",
      "_method" : "---java.util.HashMap.Node.getValue@POLYN618159.dummymethode_00292 in line [00292]",
      "_target" : "java.util.HashMap.getValue@POLYN618159.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.util.HashMap.setValue@POLYN618578.newValue",
      "_method" : "---java.util.HashMap.Node.setValue@POLYN618578.dummymethode_00301 in line [00301]",
      "_target" : "java.util.HashMap.value",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "java.util.HashMap.getValue@POLYN618159.return",
      "_method" : "---java.util.HashMap.getValue@POLYN618159 in line [00266]",
      "_target" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN211824.valueRaw",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN211824.valueRaw",
      "_method" : "---java.lang.String.valueOf@POLYN923722 in line [00272]",
      "_target" : "java.lang.String.valueOf@POLYN923722.d",
      "_risk" : ""
    } ]
  }, {
    "_id" : "6",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "1",
      "_method" : "---java.io.InputStream.read@POLYN257278.dummymethode_00177 in line [00177]",
      "_target" : "java.io.InputStream.read@POLYN257278.i",
      "_risk" : "//QC-JAVCWE099[00177] In java.io.InputStream.read@POLYN257278[00177] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.InputStream.read@POLYN257278.i",
      "_method" : "---java.io.InputStream.read@POLYN257278.dummymethode_00188 in line [00188]",
      "_target" : "java.io.InputStream.read@POLYN257278.return",
      "_risk" : "//QC-JAVCWE099[00188] In java.io.InputStream.read@POLYN257278[00188] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884072.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884072 in line [02938]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN897018.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.read@POLYN815528.return",
      "_method" : "---java.io.ObjectInputStream.read@POLYN815528 in line [03091]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN904687.v",
      "_risk" : "//QC-JAVCWE099[03091] In java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN904687[03091] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN904687.v",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN904687.dummymethode_03095 in line [03095]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN904687.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.InputStream.read@POLYN257278.return",
      "_method" : "---java.io.InputStream.read@POLYN257278 in line [02598]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.peekb",
      "_risk" : "//QC-JAVCWE099[02598] In java.io.ObjectInputStream.PeekInputStream.peek@POLYN883665[02598] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.peekb",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884072.dummymethode_02605 in line [02605]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884072.v",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884072.v",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884072.dummymethode_02607 in line [02607]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884072.return",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN897018.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN897018 in line [00893]",
      "_target" : "java.io.ObjectInputStream.read@POLYN815528.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN904687.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN904687 in line [00979]",
      "_target" : "java.io.ObjectInputStream.readUnsignedByte@POLYN818293.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "7",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920879.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920879 in line [03183]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN909598.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.toString@POLYN247186.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN247186 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920879.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readString@POLYN850780.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN850780 in line [01963]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN856109.name",
      "_risk" : "//QC-JAVCWZ099[01963] In java.io.ObjectInputStream.readEnum@POLYN856109[01963] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN822545.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN822545 in line [01863]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN850780.str",
      "_risk" : "//QC-JAVCWZ099[01863] In java.io.ObjectInputStream.readString@POLYN850780[01863] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readString@POLYN850780.str",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN850780.dummymethode_01876 in line [01876]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN850780.return",
      "_risk" : "//QC-JAVCWZ099[01876] In java.io.ObjectInputStream.readString@POLYN850780[01876] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN909598.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN909598 in line [01124]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN822545.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.StringBuilder.toString@POLYN247186.0",
      "_method" : "---java.lang.StringBuilder.toString@POLYN247186.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN247186.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "8",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920879.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920879 in line [03183]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN909598.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.toString@POLYN247186.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN247186 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920879.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readString@POLYN850780.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN850780 in line [01963]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN856109.name",
      "_risk" : "//QC-JAVCWZ099[01963] In java.io.ObjectInputStream.readEnum@POLYN856109[01963] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN822545.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN822545 in line [01863]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN850780.str",
      "_risk" : "//QC-JAVCWZ099[01863] In java.io.ObjectInputStream.readString@POLYN850780[01863] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readString@POLYN850780.str",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN850780.dummymethode_01876 in line [01876]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN850780.return",
      "_risk" : "//QC-JAVCWZ099[01876] In java.io.ObjectInputStream.readString@POLYN850780[01876] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN909598.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN909598 in line [01124]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN822545.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.StringBuilder.toString@POLYN247186.count",
      "_method" : "---java.lang.StringBuilder.toString@POLYN247186.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN247186.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "9",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920879.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920879 in line [03183]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN909598.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.toString@POLYN247186.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN247186 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920879.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readString@POLYN850780.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN850780 in line [01963]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN856109.name",
      "_risk" : "//QC-JAVCWZ099[01963] In java.io.ObjectInputStream.readEnum@POLYN856109[01963] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN822545.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN822545 in line [01863]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN850780.str",
      "_risk" : "//QC-JAVCWZ099[01863] In java.io.ObjectInputStream.readString@POLYN850780[01863] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readString@POLYN850780.str",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN850780.dummymethode_01876 in line [01876]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN850780.return",
      "_risk" : "//QC-JAVCWZ099[01876] In java.io.ObjectInputStream.readString@POLYN850780[01876] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN909598.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN909598 in line [01124]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN822545.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.StringBuilder.toString@POLYN247186.value",
      "_method" : "---java.lang.StringBuilder.toString@POLYN247186.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN247186.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "10",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN613961.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN613961.dummymethode_01533 in line [01533]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN613961.cibledummy_01533",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN577420.obj",
      "_method" : "---java.io.ObjectOutputStream.replaceObject@POLYN577420.dummymethode_00588 in line [00588]",
      "_target" : "java.io.ObjectOutputStream.replaceObject@POLYN577420.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN577420.return",
      "_method" : "---java.io.ObjectOutputStream.replaceObject@POLYN577420 in line [01144]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.rep",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.rep",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593655.dummymethode_01149 in line [01149]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.obj",
      "_risk" : "//QC-JAVCWZ099[01149] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01149] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN612110 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN612110.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN612110.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN613961 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN613961.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "11",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteObject@POLYN572013.dummymethode_00434 in line [00434]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteObject@POLYN572013.ctx",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603710.objs[i]",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593655 in line [01378]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.obj",
      "_risk" : "//QC-JAVCWZ099[01378] In java.io.ObjectOutputStream.writeArray@POLYN603710[01378] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN610914.dummymethode_01452 in line [01452]",
      "_target" : "java.io.ObjectOutputStream.writeExternalData@POLYN610914.oldContext",
      "_risk" : "//QC-JAVCWZ099[01452] In java.io.ObjectOutputStream.writeExternalData@POLYN610914[01452] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN610914.oldContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN610914.dummymethode_01464 in line [01464]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01464] In java.io.ObjectOutputStream.writeExternalData@POLYN610914[01464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN612110 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN612110.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN612110.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN612110.dummymethode_01494 in line [01494]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01494] In java.io.ObjectOutputStream.writeSerialData@POLYN612110[01494] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "12",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteObject@POLYN572013.dummymethode_00434 in line [00434]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteObject@POLYN572013.ctx",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN610914.dummymethode_01452 in line [01452]",
      "_target" : "java.io.ObjectOutputStream.writeExternalData@POLYN610914.oldContext",
      "_risk" : "//QC-JAVCWZ099[01452] In java.io.ObjectOutputStream.writeExternalData@POLYN610914[01452] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN610914.oldContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN610914.dummymethode_01464 in line [01464]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01464] In java.io.ObjectOutputStream.writeExternalData@POLYN610914[01464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN612110 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN612110.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN609474[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN612110.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN612110.dummymethode_01494 in line [01494]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01494] In java.io.ObjectOutputStream.writeSerialData@POLYN612110[01494] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN571357.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593655 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.obj",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN571357[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "13",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeLong@POLYN584001.val",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN584001 in line [00808]",
      "_target" : "java.io.ObjectOutputStream.writeLong@POLYN584001.cibledummy_00808",
      "_risk" : "//QC-JAVCWE099[00808] In java.io.ObjectOutputStream.writeLong@POLYN584001[00808] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254071.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN255617 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255617.timestamp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255617.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN256963 in line [00428]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN256963.timestamp",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN256963.timestamp",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN584001 in line [00468]",
      "_target" : "java.io.ObjectOutputStream.writeLong@POLYN584001.val",
      "_risk" : "//QC-JAVCWE099[00468] In org.apache.kafka.common.record.LegacyRecord.write@POLYN256963[00468] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252984.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN254071 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254071.timestamp",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "timestampType==TimestampType.LOG_APPEND_TIME?logAppendTime_maxTimestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN306071.dummymethode_00424 in line [00424]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN306071.timestamp",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN306071.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252984 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252984.timestamp",
      "_risk" : ""
    } ]
  }, {
    "_id" : "14",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN243466.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN243466.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN243466.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN243466[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.getBytes@POLYN839188.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN839188.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN839188.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN424014.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN424014 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN240260.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN240260.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN243466 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN243466.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN240260[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslServer.process@POLYN196971.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN839188 in line [00165]",
      "_target" : "java.lang.String.getBytes@POLYN839188.charsetName",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.lang.String.getBytes@POLYN839188.return",
      "_method" : "---java.lang.String.getBytes@POLYN839188 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN424014.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "15",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN243466.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN243466.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN243466.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN243466[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.getBytes@POLYN839188.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN839188.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN839188.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN424014.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN424014 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN240260.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN240260.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN243466 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN243466.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN240260[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.security.scram.internals.ScramFormatter.toBytes@POLYN194766.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN839188 in line [00170]",
      "_target" : "java.lang.String.getBytes@POLYN839188.charsetName",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.lang.String.getBytes@POLYN839188.return",
      "_method" : "---java.lang.String.getBytes@POLYN839188 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN424014.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "16",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN243466.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN243466.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN243466.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN243466[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.getBytes@POLYN839188.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN839188.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN839188.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN424014.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN424014 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN240260.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN240260.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN243466 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN243466.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN240260[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN424014.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN839188 in line [00172]",
      "_target" : "java.lang.String.getBytes@POLYN839188.charsetName",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.lang.String.getBytes@POLYN839188.return",
      "_method" : "---java.lang.String.getBytes@POLYN839188 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN424014.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "17",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN243466.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN243466.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN243466.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN243466[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.getBytes@POLYN839188.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN839188.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN839188.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN424014.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN424014 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN240260.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN240260.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN243466 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN243466.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN240260[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.lang.String.getBytes@POLYN839188.return",
      "_method" : "---java.lang.String.getBytes@POLYN839188 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN424014.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.toBytes@POLYN201277.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN839188 in line [00206]",
      "_target" : "java.lang.String.getBytes@POLYN839188.charsetName",
      "_risk" : ""
    } ]
  }, {
    "_id" : "18",
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
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN844188.dummymethode_01722 in line [01722]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN844188.return",
      "_risk" : "//QC-JAVCWZ099[01722] In java.io.ObjectInputStream.readClassDesc@POLYN844188[01722] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN835896.unshared",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN844188 in line [01522]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN844188.unshared",
      "_risk" : "//QC-JAVCWZ099[01522] In java.io.ObjectInputStream.readObject0@POLYN835896[01522] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN844188.return",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN844188 in line [02000]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN858373.desc",
      "_risk" : "//QC-JAVCWZ099[02000] In java.io.ObjectInputStream.readOrdinaryObject@POLYN858373[02000] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN858373.desc",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN863528 in line [02027]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN858373.cibledummy_02027",
      "_risk" : "//QC-JAVCWZ099[02027] In java.io.ObjectInputStream.readOrdinaryObject@POLYN858373[02027] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "19",
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
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN844188.dummymethode_01722 in line [01722]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN844188.return",
      "_risk" : "//QC-JAVCWZ099[01722] In java.io.ObjectInputStream.readClassDesc@POLYN844188[01722] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN835896.unshared",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN844188 in line [01522]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN844188.unshared",
      "_risk" : "//QC-JAVCWZ099[01522] In java.io.ObjectInputStream.readObject0@POLYN835896[01522] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN844188.return",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN844188 in line [02000]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN858373.desc",
      "_risk" : "//QC-JAVCWZ099[02000] In java.io.ObjectInputStream.readOrdinaryObject@POLYN858373[02000] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN858373.desc",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN863528 in line [02027]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN858373.cibledummy_02027",
      "_risk" : "//QC-JAVCWZ099[02027] In java.io.ObjectInputStream.readOrdinaryObject@POLYN858373[02027] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.skipCustomData@POLYN866712.false",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN835896 in line [02211]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN835896.unshared",
      "_risk" : "//QC-JAVCWZ099[02211] In java.io.ObjectInputStream.skipCustomData@POLYN866712[02211] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "20",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603710.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN599186 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN599186.desc",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN603710[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN599186.desc",
      "_method" : "---java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601683 in line [01231]",
      "_target" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601683.desc",
      "_risk" : "//QC-JAVCWZ099[01231] In java.io.ObjectOutputStream.writeClassDesc@POLYN599186[01231] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601683.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDescriptor@POLYN579892 in line [01282]",
      "_target" : "java.io.ObjectOutputStream.writeClassDescriptor@POLYN579892.desc",
      "_risk" : "//QC-JAVCWZ099[01282] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601683[01282] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.lang.Object.getClass@POLYN297531.return",
      "_method" : "---java.lang.Object.getClass@POLYN297531 in line [01129]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.cl",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.cl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593655.dummymethode_01134 in line [01134]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.desc",
      "_risk" : "//QC-JAVCWZ099[01134] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01134] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.desc",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN603710 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN603710.desc",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "21",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603710.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN599186 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN599186.desc",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN603710[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN599186.desc",
      "_method" : "---java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601683 in line [01231]",
      "_target" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601683.desc",
      "_risk" : "//QC-JAVCWZ099[01231] In java.io.ObjectOutputStream.writeClassDesc@POLYN599186[01231] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601683.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDescriptor@POLYN579892 in line [01282]",
      "_target" : "java.io.ObjectOutputStream.writeClassDescriptor@POLYN579892.desc",
      "_risk" : "//QC-JAVCWZ099[01282] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN601683[01282] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.cl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593655.dummymethode_01134 in line [01134]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.desc",
      "_risk" : "//QC-JAVCWZ099[01134] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01134] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.repCl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN593655.dummymethode_01141 in line [01141]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.cl",
      "_risk" : "//QC-JAVCWZ099[01141] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01141] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN593655.desc",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN603710 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN603710.desc",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN593655[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "22",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.format@POLYN387719.l",
      "_method" : "---java.lang.String.format@POLYN917779 in line [01027]",
      "_target" : "java.lang.String.format@POLYN917779.l",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN361075.x",
      "_method" : "---java.io.PrintWriter.print@POLYN356320 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN356320.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN361075[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN917779.l",
      "_method" : "---java.lang.String.format@POLYN917779.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN917779.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN917779.return",
      "_method" : "---java.lang.String.format@POLYN917779 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161365.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161365.data",
      "_method" : "---java.io.PrintWriter.println@POLYN361075 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN361075.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161365[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "23",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.format@POLYN371302.l",
      "_method" : "---java.lang.String.format@POLYN917779 in line [00964]",
      "_target" : "java.lang.String.format@POLYN917779.l",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN361075.x",
      "_method" : "---java.io.PrintWriter.print@POLYN356320 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN356320.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN361075[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN917779.l",
      "_method" : "---java.lang.String.format@POLYN917779.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN917779.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN917779.return",
      "_method" : "---java.lang.String.format@POLYN917779 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161365.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161365.data",
      "_method" : "---java.io.PrintWriter.println@POLYN361075 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN361075.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161365[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "24",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN361075.x",
      "_method" : "---java.io.PrintWriter.print@POLYN356320 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN356320.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN361075[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN917779.l",
      "_method" : "---java.lang.String.format@POLYN917779.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN917779.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslServer.jsonErrorResponse@POLYN200136.\"%s",
      "_method" : "---java.lang.String.format@POLYN917779 in line [00208]",
      "_target" : "java.lang.String.format@POLYN917779.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN917779.return",
      "_method" : "---java.lang.String.format@POLYN917779 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161365.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161365.data",
      "_method" : "---java.io.PrintWriter.println@POLYN361075 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN361075.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161365[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "25",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN361075.x",
      "_method" : "---java.io.PrintWriter.print@POLYN356320 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN356320.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN361075[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN917779.l",
      "_method" : "---java.lang.String.format@POLYN917779.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN917779.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslServer.jsonErrorResponse@POLYN200136.\"%s}\"",
      "_method" : "---java.lang.String.format@POLYN917779 in line [00212]",
      "_target" : "java.lang.String.format@POLYN917779.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN917779.return",
      "_method" : "---java.lang.String.format@POLYN917779 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161365.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161365.data",
      "_method" : "---java.io.PrintWriter.println@POLYN361075 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN361075.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161365[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "26",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN361075.x",
      "_method" : "---java.io.PrintWriter.print@POLYN356320 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN356320.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN361075[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN917779.l",
      "_method" : "---java.lang.String.format@POLYN917779.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN917779.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.controller.QuorumController.Builder.build@POLYN436208.\"Node%d_\"",
      "_method" : "---java.lang.String.format@POLYN917779 in line [00293]",
      "_target" : "java.lang.String.format@POLYN917779.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN917779.return",
      "_method" : "---java.lang.String.format@POLYN917779 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161365.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161365.data",
      "_method" : "---java.io.PrintWriter.println@POLYN361075 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN361075.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161365[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "27",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN361075.x",
      "_method" : "---java.io.PrintWriter.print@POLYN356320 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN356320.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN361075[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN917779.l",
      "_method" : "---java.lang.String.format@POLYN917779.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN917779.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN917779.return",
      "_method" : "---java.lang.String.format@POLYN917779 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161365.data",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161365.data",
      "_method" : "---java.io.PrintWriter.println@POLYN361075 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN361075.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161365[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.agent.AgentClient.Builder.target@POLYN204936.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN917779 in line [00096]",
      "_target" : "java.lang.String.format@POLYN917779.l",
      "_risk" : ""
    } ]
  }, {
    "_id" : "28",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN361075.x",
      "_method" : "---java.io.PrintWriter.print@POLYN356320 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN356320.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN361075[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN917779.l",
      "_method" : "---java.lang.String.format@POLYN917779.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN917779.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN917779.return",
      "_method" : "---java.lang.String.format@POLYN917779 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161365.data",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161365.data",
      "_method" : "---java.io.PrintWriter.println@POLYN361075 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN361075.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161365[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.agent.WorkerManager.Worker.toString@POLYN253056.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN917779 in line [00314]",
      "_target" : "java.lang.String.format@POLYN917779.l",
      "_risk" : ""
    } ]
  }, {
    "_id" : "29",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN361075.x",
      "_method" : "---java.io.PrintWriter.print@POLYN356320 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN356320.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN361075[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN917779.l",
      "_method" : "---java.lang.String.format@POLYN917779.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN917779.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN917779.return",
      "_method" : "---java.lang.String.format@POLYN917779 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161365.data",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161365.data",
      "_method" : "---java.io.PrintWriter.println@POLYN361075 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN361075.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN161365[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.coordinator.CoordinatorClient.Builder.target@POLYN245121.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN917779 in line [00112]",
      "_target" : "java.lang.String.format@POLYN917779.l",
      "_risk" : ""
    } ]
  }, {
    "_id" : "30",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.InputStream.read@POLYN257278.0",
      "_method" : "---java.io.InputStream.read@POLYN257278.dummymethode_00168 in line [00168]",
      "_target" : "java.io.InputStream.read@POLYN257278.return",
      "_risk" : "//QC-JAVCWE099[00168] In java.io.InputStream.read@POLYN257278[00168] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466537.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN257278 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN257278.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN466537[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.InputStream.read@POLYN257278.return",
      "_method" : "---java.io.InputStream.read@POLYN257278 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466537.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN466537[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466537.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN466537.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466537.currentPosition",
      "_risk" : ""
    } ]
  }, {
    "_id" : "31",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.InputStream.read@POLYN257278.-1",
      "_method" : "---java.io.InputStream.read@POLYN257278.dummymethode_00173 in line [00173]",
      "_target" : "java.io.InputStream.read@POLYN257278.return",
      "_risk" : "//QC-JAVCWE099[00173] In java.io.InputStream.read@POLYN257278[00173] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466537.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN257278 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN257278.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN466537[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.InputStream.read@POLYN257278.return",
      "_method" : "---java.io.InputStream.read@POLYN257278 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466537.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN466537[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466537.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN466537.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466537.currentPosition",
      "_risk" : ""
    } ]
  }, {
    "_id" : "32",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.writeTo@POLYN190643.buffer",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN466537 in line [00182]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466537.destinationBuffer",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466537.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN257278 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN257278.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN466537[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466537.destinationBuffer",
      "_method" : "---java.io.InputStream.read@POLYN257278 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466537.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN466537[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466537.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN466537.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466537.currentPosition",
      "_risk" : ""
    } ]
  }, {
    "_id" : "33",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.curContext",
      "_method" : "---java.io.ObjectInputStream.defaultReadObject@POLYN802410.dummymethode_00545 in line [00545]",
      "_target" : "java.io.ObjectInputStream.defaultReadObject@POLYN802410.ctx",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.curContext",
      "_method" : "---java.io.ObjectInputStream.readExternalData@POLYN861597.dummymethode_02065 in line [02065]",
      "_target" : "java.io.ObjectInputStream.readExternalData@POLYN861597.oldContext",
      "_risk" : "//QC-JAVCWZ099[02065] In java.io.ObjectInputStream.readExternalData@POLYN861597[02065] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readExternalData@POLYN861597.oldContext",
      "_method" : "---java.io.ObjectInputStream.readExternalData@POLYN861597.dummymethode_02094 in line [02094]",
      "_target" : "java.io.ObjectInputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[02094] In java.io.ObjectInputStream.readExternalData@POLYN861597[02094] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readSerialData@POLYN863528.slotDesc",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN863528.dummymethode_02133 in line [02133]",
      "_target" : "java.io.ObjectInputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[02133] In java.io.ObjectInputStream.readSerialData@POLYN863528[02133] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "34",
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
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN602933.str",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646390 in line [01309]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646390.s",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeTypeString@POLYN590291.str",
      "_method" : "---java.io.ObjectOutputStream.writeString@POLYN602933 in line [01030]",
      "_target" : "java.io.ObjectOutputStream.writeString@POLYN602933.str",
      "_risk" : "//QC-JAVCWZ099[01030] In java.io.ObjectOutputStream.writeTypeString@POLYN590291[01030] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "35",
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
    "_id" : "36",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.InputStream.read@POLYN254119.b",
      "_method" : "---java.io.InputStream.read@POLYN254119.dummymethode_00102 in line [00102]",
      "_target" : "java.io.InputStream.read@POLYN254119.return",
      "_risk" : "//QC-JAVCWE099[00102] In java.io.InputStream.read@POLYN254119[00102] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN310684.return",
      "_method" : "---org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN310684 in line [00289]",
      "_target" : "org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN312370.read",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN310684.netReadBuffer",
      "_method" : "---java.io.InputStream.read@POLYN254119 in line [00226]",
      "_target" : "java.io.InputStream.read@POLYN254119.b",
      "_risk" : "//QC-JAVCWE099[00226] In org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN310684[00226] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.InputStream.read@POLYN254119.return",
      "_method" : "---java.io.InputStream.read@POLYN254119 in line [00226]",
      "_target" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN310684.return",
      "_risk" : "//QC-JAVCWE099[00226] In org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN310684[00226] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "37",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.accepted@POLYN251307.HttpStatus.ACCEPTED",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN249104 in line [00273]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN249104.status",
      "_risk" : "//QC-JAVCWE080[00273] In org.springframework.http.ResponseEntity.accepted@POLYN251307[00273] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN249104.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN249104 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN249709.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN249709[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN249104.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN249104.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN249104.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN249104[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN249709.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN249709 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "38",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.badRequest@POLYN251778.HttpStatus.BAD_REQUEST",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN249104 in line [00291]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN249104.status",
      "_risk" : "//QC-JAVCWE080[00291] In org.springframework.http.ResponseEntity.badRequest@POLYN251778[00291] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN249104.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN249104 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN249709.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN249709[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN249104.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN249104.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN249104.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN249104[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN249709.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN249709 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "39",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.noContent@POLYN251550.HttpStatus.NO_CONTENT",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN249104 in line [00282]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN249104.status",
      "_risk" : "//QC-JAVCWE080[00282] In org.springframework.http.ResponseEntity.noContent@POLYN251550[00282] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN249104.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN249104 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN249709.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN249709[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN249104.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN249104.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN249104.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN249104[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN249709.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN249709 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "40",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.notFound@POLYN252021.HttpStatus.NOT_FOUND",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN249104 in line [00300]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN249104.status",
      "_risk" : "//QC-JAVCWE080[00300] In org.springframework.http.ResponseEntity.notFound@POLYN252021[00300] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN249104.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN249104 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN249709.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN249709[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN249104.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN249104.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN249104.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN249104[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN249709.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN249709 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "41",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN249104.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN249104 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN249709.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN249709[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN249104.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN249104.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN249104.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN249104[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.unprocessableEntity@POLYN252255.HttpStatus.UNPROCESSABLE_ENTITY",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN249104 in line [00310]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN249104.status",
      "_risk" : "//QC-JAVCWE080[00310] In org.springframework.http.ResponseEntity.unprocessableEntity@POLYN252255[00310] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN249709.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN249709 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "42",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN244793.cbuf",
      "_method" : "---java.io.Reader.read@POLYN195229 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN244793.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN244793[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN244793.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN244793 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN248001.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN248001[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN248001.n",
      "_method" : "---java.io.BufferedReader.read@POLYN248001.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN248001.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN248001[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "43",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN244793.len",
      "_method" : "---java.io.Reader.read@POLYN195229 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN244793.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN244793[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN244793.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN244793 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN248001.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN248001[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN248001.n",
      "_method" : "---java.io.BufferedReader.read@POLYN248001.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN248001.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN248001[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "44",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN244793.off",
      "_method" : "---java.io.Reader.read@POLYN195229 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN244793.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN244793[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN244793.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN244793 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN248001.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN248001[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN248001.n",
      "_method" : "---java.io.BufferedReader.read@POLYN248001.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN248001.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN248001[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "45",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Reader.read@POLYN195229.return",
      "_method" : "---java.io.Reader.read@POLYN195229 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN244793.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN244793[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN244793.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN244793 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN248001.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN248001[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN248001.n",
      "_method" : "---java.io.BufferedReader.read@POLYN248001.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN248001.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN248001[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "46",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN244793.-1",
      "_method" : "---java.io.BufferedReader.read1@POLYN244793.dummymethode_00214 in line [00214]",
      "_target" : "java.io.BufferedReader.read1@POLYN244793.return",
      "_risk" : "//QC-JAVCWZ099[00214] In java.io.BufferedReader.read1@POLYN244793[00214] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN244793.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN244793 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN248001.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN248001[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN248001.n",
      "_method" : "---java.io.BufferedReader.read@POLYN248001.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN248001.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN248001[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "47",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN872002.return",
      "_method" : "---java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN872002 in line [00591]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN803861.getField",
      "_risk" : ""
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
    "_id" : "48",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN803861.curDesc",
      "_method" : "---java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN872002 in line [00591]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN803861.getField",
      "_risk" : ""
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
    "_id" : "49",
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
    "_id" : "50",
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
    "_id" : "51",
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
    "_id" : "52",
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
    "_id" : "53",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN249104.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN249104 in line [00273]",
      "_target" : "org.springframework.http.ResponseEntity.accepted@POLYN251307.return",
      "_risk" : "//QC-JAVCWE080[00273] In org.springframework.http.ResponseEntity.accepted@POLYN251307[00273] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN249709.HttpStatus.OK",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN249104 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN249104.status",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN249709[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN249104.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN249104.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN249104.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN249104[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "54",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedInputStream.read@POLYN255784.nread",
      "_method" : "---java.io.BufferedInputStream.read@POLYN255784.dummymethode_00348 in line [00348]",
      "_target" : "java.io.BufferedInputStream.read@POLYN255784.n",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.BufferedInputStream.read@POLYN255784[00348] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedInputStream.read@POLYN255784.n",
      "_method" : "---java.io.BufferedInputStream.read@POLYN255784.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedInputStream.read@POLYN255784.return",
      "_risk" : "//QC-JAVCWZ099[00350] In java.io.BufferedInputStream.read@POLYN255784[00350] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "55",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN170568.count",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN171864 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN171864.len",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN170568[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.write@POLYN171864.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN171864.dummymethode_00129 in line [00129]",
      "_target" : "java.io.BufferedOutputStream.count",
      "_risk" : "//QC-JAVCWZ099[00129] In java.io.BufferedOutputStream.write@POLYN171864[00129] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "56",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN171864.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN171864.dummymethode_00129 in line [00129]",
      "_target" : "java.io.BufferedOutputStream.count",
      "_risk" : "//QC-JAVCWZ099[00129] In java.io.BufferedOutputStream.write@POLYN171864[00129] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN369657.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN171864 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN171864.len",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN369657[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "57",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN170568.buf",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN171864 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN171864.b",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN170568[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.write@POLYN171864.b",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN171864 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN171864.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN171864[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "58",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN171864.b",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN171864 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN171864.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN171864[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN369657.buf",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN171864 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN171864.b",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN369657[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "59",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN170568.0",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN171864 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN171864.off",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN170568[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.write@POLYN171864.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN171864 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN171864.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN171864[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "60",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN171864.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN171864 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN171864.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN171864[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN369657.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN171864 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN171864.off",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN369657[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "61",
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
      "_method" : "---java.io.Writer.write@POLYN202587 in line [00192]",
      "_target" : "java.io.Writer.write@POLYN202587.cbuf",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.Writer.write@POLYN203421[00192] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "62",
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
      "_target" : "java.io.Writer.write@POLYN202587.len",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.Writer.write@POLYN203421[00192] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "63",
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
    "_id" : "64",
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
    "_id" : "65",
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
    "_id" : "66",
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
    "_id" : "67",
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
    "_id" : "68",
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
    "_id" : "69",
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
    "_id" : "70",
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
    "_id" : "71",
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
    "_id" : "72",
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
    "_id" : "73",
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
    "_id" : "74",
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
    "_id" : "75",
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
    "_id" : "76",
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
    "_id" : "77",
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
    "_id" : "78",
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
    "_id" : "79",
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
    "_id" : "80",
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
    "_id" : "81",
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
    "_id" : "82",
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
    "_id" : "83",
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
    "_id" : "84",
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
    "_id" : "85",
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
    "_id" : "86",
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
    "_id" : "87",
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
    "_id" : "88",
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
    "_id" : "89",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeChar@POLYN631229.v",
      "_method" : "---java.io.ObjectOutputStream.writeChar@POLYN583441 in line [01925]",
      "_target" : "java.io.ObjectOutputStream.writeChar@POLYN583441.val",
      "_risk" : "//QC-JAVCWZ099[01925] In java.io.ObjectOutputStream.BlockDataOutputStream.writeChar@POLYN631229[01925] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeChar@POLYN583441.val",
      "_method" : "---java.io.ObjectOutputStream.writeChar@POLYN583441 in line [00786]",
      "_target" : "java.io.ObjectOutputStream.writeChar@POLYN583441.cibledummy_00786",
      "_risk" : "//QC-JAVCWZ099[00786] In java.io.ObjectOutputStream.writeChar@POLYN583441[00786] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "90",
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
    "_id" : "91",
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
    "_id" : "92",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeDouble@POLYN633437.v",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN584561 in line [01970]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN584561.val",
      "_risk" : "//QC-JAVCWZ099[01970] In java.io.ObjectOutputStream.BlockDataOutputStream.writeDouble@POLYN633437[01970] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN584561.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN584561 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN584561.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN584561[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "93",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN584561.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN584561 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN584561.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN584561[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.protocol.DataOutputStreamWritable.writeDouble@POLYN166981.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN584561 in line [00074]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN584561.val",
      "_risk" : "//QC-JAVCWE099[00074] In org.apache.kafka.common.protocol.DataOutputStreamWritable.writeDouble@POLYN166981[00074] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "94",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN584561.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN584561 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN584561.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN584561[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeDouble@POLYN242633.value",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN584561 in line [00376]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN584561.val",
      "_risk" : "//QC-JAVCWE099[00376] In org.apache.kafka.common.utils.ByteUtils.writeDouble@POLYN242633[00376] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "95",
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
    "_id" : "96",
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
    "_id" : "97",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeFloat@POLYN632569.v",
      "_method" : "---java.io.ObjectOutputStream.writeFloat@POLYN584281 in line [01952]",
      "_target" : "java.io.ObjectOutputStream.writeFloat@POLYN584281.val",
      "_risk" : "//QC-JAVCWZ099[01952] In java.io.ObjectOutputStream.BlockDataOutputStream.writeFloat@POLYN632569[01952] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeFloat@POLYN584281.val",
      "_method" : "---java.io.ObjectOutputStream.writeFloat@POLYN584281 in line [00819]",
      "_target" : "java.io.ObjectOutputStream.writeFloat@POLYN584281.cibledummy_00819",
      "_risk" : "//QC-JAVCWZ099[00819] In java.io.ObjectOutputStream.writeFloat@POLYN584281[00819] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "98",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeInt@POLYN632135.v",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [01943]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_risk" : "//QC-JAVCWZ099[01943] In java.io.ObjectOutputStream.BlockDataOutputStream.writeInt@POLYN632135[01943] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583721[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "99",
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
    "_id" : "100",
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
    "_id" : "101",
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
    "_id" : "102",
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
    "_id" : "103",
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
    "_id" : "104",
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
    "_id" : "105",
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
    "_id" : "106",
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
    "_id" : "107",
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
    "_id" : "108",
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
    "_id" : "109",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583721[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.writeObject@POLYN680400.size",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [01359]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_risk" : "//QC-JAVCWZ099[01359] In java.util.HashMap.writeObject@POLYN680400[01359] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "110",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583721[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN474021.table.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [01221]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_risk" : "//QC-JAVCWZ099[01221] In java.util.Hashtable.writeHashtable@POLYN474021[01221] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "111",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583721[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN474021.count",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [01223]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_risk" : "//QC-JAVCWZ099[01223] In java.util.Hashtable.writeHashtable@POLYN474021[01223] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "112",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583721[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.protocol.DataOutputStreamWritable.writeInt@POLYN166407.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00056]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_risk" : "//QC-JAVCWE099[00056] In org.apache.kafka.common.protocol.DataOutputStreamWritable.writeInt@POLYN166407[00056] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "113",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583721[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.AbstractLegacyRecordBatch.writeHeader@POLYN230089.size",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00276]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_risk" : "//QC-JAVCWE099[00276] In org.apache.kafka.common.record.AbstractLegacyRecordBatch.writeHeader@POLYN230089[00276] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "114",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583721[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN177764.Serdes.ListSerde.NULL_ENTRY_VALUE",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00124]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_risk" : "//QC-JAVCWE099[00124] In org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN177764[00124] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "115",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583721[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN177764.bytes.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00129]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_risk" : "//QC-JAVCWE099[00129] In org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN177764[00129] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "116",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583721[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serializeNullIndexList@POLYN176839.nullIndex",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00103]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_risk" : "//QC-JAVCWE099[00103] In org.apache.kafka.common.serialization.ListSerializer.serializeNullIndexList@POLYN176839[00103] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "117",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583721[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN235341.usedVersion",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00149]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_risk" : "//QC-JAVCWE099[00149] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN235341[00149] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "118",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583721[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN235341.commonlySupportedVersion",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00159]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_risk" : "//QC-JAVCWE099[00159] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN235341[00159] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "119",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583721[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN235341.out",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00160]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_risk" : "//QC-JAVCWE099[00160] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN235341[00160] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "120",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583721[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN235341.errCode",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00168]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_risk" : "//QC-JAVCWE099[00168] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN235341[00168] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "121",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN583721[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.writeTaskIdTo@POLYN169029.0",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00045]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN583721.val",
      "_risk" : "//QC-JAVCWE099[00045] In org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.writeTaskIdTo@POLYN169029[00045] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "122",
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
    "_id" : "123",
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
    "_id" : "124",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN569139.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN570029 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN569139.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN569139[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.writeObject@POLYN247731.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN569139 in line [00465]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN569139.obj",
      "_risk" : "//QC-JAVCWZ099[00465] In java.lang.StringBuilder.writeObject@POLYN247731[00465] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "125",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN569139.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN570029 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN569139.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN569139[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.internalWriteEntries@POLYN705151.e.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN569139 in line [01782]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN569139.obj",
      "_risk" : "//QC-JAVCWZ099[01782] In java.util.HashMap.internalWriteEntries@POLYN705151[01782] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "126",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN569139.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN570029 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN569139.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN569139[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.internalWriteEntries@POLYN705151.e.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN569139 in line [01783]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN569139.obj",
      "_risk" : "//QC-JAVCWZ099[01783] In java.util.HashMap.internalWriteEntries@POLYN705151[01783] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "127",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN569139.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN570029 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN569139.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN569139[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN474021.entryStack.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN569139 in line [01238]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN569139.obj",
      "_risk" : "//QC-JAVCWZ099[01238] In java.util.Hashtable.writeHashtable@POLYN474021[01238] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "128",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN569139.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN570029 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN569139.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN569139[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN474021.entryStack.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN569139 in line [01239]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN569139.obj",
      "_risk" : "//QC-JAVCWZ099[01239] In java.util.Hashtable.writeHashtable@POLYN474021[01239] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "129",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN569139.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN570029 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN569139.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN569139[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1495213.p.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN569139 in line [01406]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN569139.obj",
      "_risk" : "//QC-JAVCWZ099[01406] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1495213[01406] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "130",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN569139.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN570029 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN569139.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN569139[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1495213.p.val",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN569139 in line [01407]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN569139.obj",
      "_risk" : "//QC-JAVCWZ099[01407] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1495213[01407] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "131",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN569139.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN570029 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN569139.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN569139[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1495213.null",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN569139 in line [01410]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN569139.obj",
      "_risk" : "//QC-JAVCWZ099[01410] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1495213[01410] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "132",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeShort@POLYN631682.v",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN583161 in line [01934]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN583161.val",
      "_risk" : "//QC-JAVCWZ099[01934] In java.io.ObjectOutputStream.BlockDataOutputStream.writeShort@POLYN631682[01934] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN583161.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN583161 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN583161.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN583161[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "133",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN583161.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN583161 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN583161.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN583161[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeStreamHeader@POLYN578885.STREAM_MAGIC",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN583161 in line [00636]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN583161.val",
      "_risk" : "//QC-JAVCWZ099[00636] In java.io.ObjectOutputStream.writeStreamHeader@POLYN578885[00636] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "134",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN583161.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN583161 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN583161.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN583161[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeStreamHeader@POLYN578885.STREAM_VERSION",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN583161 in line [00637]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN583161.val",
      "_risk" : "//QC-JAVCWZ099[00637] In java.io.ObjectOutputStream.writeStreamHeader@POLYN578885[00637] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "135",
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
    "_id" : "136",
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
    "_id" : "137",
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
    "_id" : "138",
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
    "_id" : "139",
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
    "_id" : "140",
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
    "_id" : "141",
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
    "_id" : "142",
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
    "_id" : "143",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN377834.x",
      "_method" : "---java.io.PrintStream.print@POLYN373046 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN373046.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN377834[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.tools.TransactionsCommand.printRow@POLYN323194.rowBuilder",
      "_method" : "---java.io.PrintStream.println@POLYN377834 in line [00929]",
      "_target" : "java.io.PrintStream.println@POLYN377834.x",
      "_risk" : "//QC-JAVCWE099[00929] In org.apache.kafka.tools.TransactionsCommand.printRow@POLYN323194[00929] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "144",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN377834.x",
      "_method" : "---java.io.PrintStream.print@POLYN373046 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN373046.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN377834[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.agent.Agent.exec@POLYN199410.\"Unable to create the task controller.\"",
      "_method" : "---java.io.PrintStream.println@POLYN377834 in line [00171]",
      "_target" : "java.io.PrintStream.println@POLYN377834.x",
      "_risk" : "//QC-JAVCWE099[00171] In org.apache.kafka.trogdor.agent.Agent.exec@POLYN199410[00171] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "145",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN377834.x",
      "_method" : "---java.io.PrintStream.print@POLYN373046 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN373046.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN377834[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.agent.Agent.exec@POLYN199410.\"createWorker failed\"",
      "_method" : "---java.io.PrintStream.println@POLYN377834 in line [00186]",
      "_target" : "java.io.PrintStream.println@POLYN377834.x",
      "_risk" : "//QC-JAVCWE099[00186] In org.apache.kafka.trogdor.agent.Agent.exec@POLYN199410[00186] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "146",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN381001.x",
      "_method" : "---java.io.PrintStream.print@POLYN376552 in line [00806]",
      "_target" : "java.io.PrintStream.println@POLYN381001.cibledummy_00806",
      "_risk" : "//QC-JAVCWE099[00806] In java.io.PrintStream.println@POLYN381001[00806] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN165070.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN381001 in line [00067]",
      "_target" : "java.io.PrintStream.println@POLYN381001.x",
      "_risk" : "//QC-JAVCWE099[00067] In org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN165070[00067] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "147",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN381001.x",
      "_method" : "---java.io.PrintStream.print@POLYN376552 in line [00806]",
      "_target" : "java.io.PrintStream.println@POLYN381001.cibledummy_00806",
      "_risk" : "//QC-JAVCWE099[00806] In java.io.PrintStream.println@POLYN381001[00806] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN174704.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN381001 in line [00081]",
      "_target" : "java.io.PrintStream.println@POLYN381001.x",
      "_risk" : "//QC-JAVCWE099[00081] In org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN174704[00081] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "148",
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
    "_id" : "149",
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
    "_id" : "150",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN364307.x",
      "_method" : "---java.io.PrintWriter.print@POLYN359787 in line [00739]",
      "_target" : "java.io.PrintWriter.println@POLYN364307.cibledummy_00739",
      "_risk" : "//QC-JAVCWE099[00739] In java.io.PrintWriter.println@POLYN364307[00739] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.shell.FindCommandHandler.find@POLYN168008.path",
      "_method" : "---java.io.PrintWriter.println@POLYN364307 in line [00098]",
      "_target" : "java.io.PrintWriter.println@POLYN364307.x",
      "_risk" : "//QC-JAVCWE099[00098] In org.apache.kafka.shell.FindCommandHandler.find@POLYN168008[00098] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "151",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN364307.x",
      "_method" : "---java.io.PrintWriter.print@POLYN359787 in line [00739]",
      "_target" : "java.io.PrintWriter.println@POLYN364307.cibledummy_00739",
      "_risk" : "//QC-JAVCWE099[00739] In java.io.PrintWriter.println@POLYN364307[00739] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN200435.intro",
      "_method" : "---java.io.PrintWriter.println@POLYN364307 in line [00162]",
      "_target" : "java.io.PrintWriter.println@POLYN364307.x",
      "_risk" : "//QC-JAVCWE099[00162] In org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN200435[00162] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "152",
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
    "_id" : "153",
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
    "_id" : "154",
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
    "_id" : "155",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "true",
      "_method" : "---java.net.ServerSocket.close@POLYN331971.dummymethode_00542 in line [00542]",
      "_target" : "java.net.ServerSocket.closed",
      "_risk" : "//QC-JAVCWE099[00542] In java.net.ServerSocket.close@POLYN331971[00542] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.closed",
      "_method" : "---java.net.ServerSocket.isClosed@POLYN333081.dummymethode_00585 in line [00585]",
      "_target" : "java.net.ServerSocket.isClosed@POLYN333081.return",
      "_risk" : "//QC-JAVCWE099[00585] In java.net.ServerSocket.isClosed@POLYN333081[00585] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "156",
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
    "_id" : "157",
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
      "_method" : "---java.net.Socket.connect@POLYN484064 in line [00568]",
      "_target" : "java.net.Socket.connect@POLYN484064.cibledummy_00568",
      "_risk" : "//QC-JAVCWZ099[00568] In java.net.Socket.connect@POLYN484064[00568] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "158",
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
    "_id" : "159",
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
    "_id" : "160",
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
  }, {
    "_id" : "161",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN257836.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN257836.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN257836[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
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
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN257836.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN257836.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN257836[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
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
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN257836.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN257836.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN257836[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
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
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN299197.return",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN299197 in line [00215]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.filterTo@POLYN278228.info",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN320874.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN323095 in line [00717]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN323095.offset",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307190.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN320874 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN320874.offset",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309779.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307190 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307190.offset",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN310822.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309779 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309779.offset",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.lastOffset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN299197.dummymethode_00259 in line [00259]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN299197.shallowOffsetOfMaxTimestamp",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN299197.shallowOffsetOfMaxTimestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN299197.dummymethode_00262 in line [00262]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN299197.return",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN323095.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN323095.dummymethode_00751 in line [00751]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.lastOffset",
      "_risk" : ""
    } ]
  }, {
    "_id" : "165",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN897539.b",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.b",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884623 in line [03031]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.nread",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.b",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884623 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.b",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920879.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.b",
      "_method" : "---java.io.InputStream.read@POLYN257278 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN884623[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "166",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884623 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.nread",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.b",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884623 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.b",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920879.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.b",
      "_method" : "---java.io.InputStream.read@POLYN257278 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN884623[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.read@POLYN816062.buf",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.b",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN816062[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "167",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN897539.len",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.len",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884623 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.nread",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.len",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884623 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.len",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920879.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.len",
      "_method" : "---java.io.InputStream.read@POLYN257278 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN884623[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "168",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884623 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.nread",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.len",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884623 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.len",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920879.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.len",
      "_method" : "---java.io.InputStream.read@POLYN257278 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN884623[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.read@POLYN816062.len",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.len",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN816062[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "169",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN897539.off",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884623 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.nread",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.off",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884623 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.off",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920879.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.off",
      "_method" : "---java.io.InputStream.read@POLYN257278 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN884623[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "170",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884623 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.nread",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.off",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884623 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.off",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN920879.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.off",
      "_method" : "---java.io.InputStream.read@POLYN257278 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN884623[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN884623.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.read@POLYN816062.off",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN901024.off",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN816062[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "171",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN320874.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN323095 in line [00717]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN323095.timestamp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307190.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN320874 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN320874.timestamp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309779.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307190 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307190.timestamp",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN310822.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309779 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309779.timestamp",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN323095.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN323095.dummymethode_00754 in line [00754]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.maxTimestamp",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.maxTimestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.writeDefaultBatchHeader@POLYN304634.dummymethode_00400 in line [00400]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeDefaultBatchHeader@POLYN304634.maxTimestamp",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeDefaultBatchHeader@POLYN304634.maxTimestamp",
      "_method" : "---org.apache.kafka.common.record.DefaultRecordBatch.writeHeader@POLYN281735 in line [00402]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeDefaultBatchHeader@POLYN304634.cibledummy_00402",
      "_risk" : ""
    } ]
  }, {
    "_id" : "172",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN210087.struct",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN210087.dummymethode_00001 in line [00001]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN210087.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.InputStream.read@POLYN252315.return",
      "_method" : "---java.io.InputStream.read@POLYN252315 in line [00001]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN210087.struct",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN210087[00001] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.assignmentSnapshot",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN243855.dummymethode_00170 in line [00170]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN243855.localAssignmentSnapshot",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN243855.localAssignmentSnapshot",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN243855.dummymethode_00171 in line [00171]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN243855.workerState",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN243855.workerState",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN243855.dummymethode_00174 in line [00174]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN243855.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN210087.return",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN210087 in line [00186]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.onJoinComplete@POLYN244735.newAssignment",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.onJoinComplete@POLYN244735.newAssignment",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.onJoinComplete@POLYN244735.dummymethode_00209 in line [00209]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.assignmentSnapshot",
      "_risk" : ""
    } ]
  }, {
    "_id" : "173",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251919.return",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251919 in line [00372]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251264.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256445.return",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256445 in line [00406]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251919.keySize",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251919.skipBuffer",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256445 in line [00421]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256445.buffer",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251919.keySize",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251919.dummymethode_00428 in line [00428]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251919.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256445.buffer",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.readVarint@POLYN234818 in line [00473]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256445.sizeInBytes",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256445.sizeInBytes",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256445.dummymethode_00475 in line [00475]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256445.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "174",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "3",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643909.dummymethode_02146 in line [02146]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643909.utflen",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643909.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643909.dummymethode_02153 in line [02153]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643909.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646390.utflen",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN584001 in line [02188]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646390.cibledummy_02188",
      "_risk" : "//QC-JAVCWE099[02188] In java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646390[02188] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643909.return",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643909 in line [01303]",
      "_target" : "java.io.ObjectOutputStream.writeString@POLYN602933.utflen",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN602933.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646390 in line [01309]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646390.utflen",
      "_risk" : ""
    } ]
  }, {
    "_id" : "175",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "2",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643909.dummymethode_02148 in line [02148]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643909.utflen",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643909.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643909.dummymethode_02153 in line [02153]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643909.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646390.utflen",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN584001 in line [02188]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646390.cibledummy_02188",
      "_risk" : "//QC-JAVCWE099[02188] In java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646390[02188] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643909.return",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN643909 in line [01303]",
      "_target" : "java.io.ObjectOutputStream.writeString@POLYN602933.utflen",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN602933.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646390 in line [00001]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN646390.utflen",
      "_risk" : ""
    } ]
  }, {
    "_id" : "176",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254071.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN255617 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255617.magic",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255617.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN256963 in line [00428]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN256963.magic",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN256963.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN256963.dummymethode_00462 in line [00462]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN256963.cibledummy_00462",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252984.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN254071 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254071.magic",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN306071.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252984 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252984.magic",
      "_risk" : ""
    } ]
  }, {
    "_id" : "177",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN192225.position",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN465269 in line [00215]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN465269.position",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466537.position",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN466537.dummymethode_01114 in line [01114]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466537.currentPosition",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466537.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN257278 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN257278.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN466537[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN465269.position",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN466537 in line [01090]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN466537.position",
      "_risk" : ""
    } ]
  }, {
    "_id" : "178",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN153612.return",
      "_method" : "---org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN153612 in line [00391]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251919.bytesRemaining",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251919.bytesRemaining",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256445 in line [00421]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256445.bytesRemaining",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256445.bytesRemaining",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readMore@POLYN258082 in line [00465]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN258082.bytesRemaining",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN153612.value",
      "_method" : "---org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN153612.dummymethode_00026 in line [00026]",
      "_target" : "org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN153612.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "179",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN191869.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN191869 in line [00134]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.checksum@POLYN189481.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.fullBatch",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN191869.dummymethode_00203 in line [00203]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN191869.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.toMemoryRecordBatch@POLYN191415.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.toMemoryRecordBatch@POLYN191415 in line [00217]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN192225.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN192225.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN192225 in line [00196]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.fullBatch",
      "_risk" : ""
    } ]
  }, {
    "_id" : "180",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN191869.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN191869 in line [00124]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.compressionType@POLYN189217.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.fullBatch",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN191869.dummymethode_00203 in line [00203]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN191869.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN192225.buffer",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.toMemoryRecordBatch@POLYN191415 in line [00217]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN192225.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN192225.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN192225 in line [00001]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.fullBatch",
      "_risk" : ""
    } ]
  }, {
    "_id" : "181",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN275078.return",
      "_method" : "---org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN275078 in line [00188]",
      "_target" : "org.apache.kafka.common.record.FileRecords.append@POLYN247240.written",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileRecords.append@POLYN247240.written",
      "_method" : "---org.apache.kafka.common.record.FileRecords.append@POLYN247240.dummymethode_00189 in line [00189]",
      "_target" : "org.apache.kafka.common.record.FileRecords.append@POLYN247240.cibledummy_00189",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN275078.buffer",
      "_method" : "---java.io.FileOutputStream.write@POLYN243466 in line [00092]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN275078.written",
      "_risk" : "//QC-JAVCWE099[00092] In org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN275078[00092] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN275078.written",
      "_method" : "---org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN275078.dummymethode_00094 in line [00094]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN275078.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "182",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN275078.return",
      "_method" : "---org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN275078 in line [00001]",
      "_target" : "org.apache.kafka.common.record.FileRecords.append@POLYN247240.written",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileRecords.append@POLYN247240.written",
      "_method" : "---org.apache.kafka.common.record.FileRecords.append@POLYN247240.dummymethode_00189 in line [00189]",
      "_target" : "org.apache.kafka.common.record.FileRecords.append@POLYN247240.cibledummy_00189",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN275078.sourcedummy",
      "_method" : "---java.io.FileOutputStream.write@POLYN243466 in line [00092]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN275078.written",
      "_risk" : "//QC-JAVCWE099[00092] In org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN275078[00092] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN275078.written",
      "_method" : "---org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN275078.dummymethode_00094 in line [00094]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN275078.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "183",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254071.key",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN255617 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255617.key",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255617.key",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN256963 in line [00428]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN256963.key",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN256963.key",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN256963.dummymethode_00476 in line [00476]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN256963.cibledummy_00476",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252984.null",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN254071 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254071.key",
      "_risk" : ""
    } ]
  }, {
    "_id" : "184",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254071.newByteBufferOutputStream(buffer)",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN254071.dummymethode_00389 in line [00389]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254071.out",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254071.out",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN255617 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255617.out",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255617.out",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN256963 in line [00428]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN256963.out",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN256963.out",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN256963.dummymethode_00476 in line [00476]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN256963.cibledummy_00476",
      "_risk" : ""
    } ]
  }, {
    "_id" : "185",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252984.buffer",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN254071 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254071.buffer",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN173039.return",
      "_method" : "---org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN173039 in line [00416]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN306071.buffer",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN306071.buffer",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252984 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252984.buffer",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN173039.buffer",
      "_method" : "---org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN173039.dummymethode_00080 in line [00080]",
      "_target" : "org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN173039.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "186",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileRecords.channel@POLYN243556.return",
      "_method" : "---org.apache.kafka.common.record.FileRecords.channel@POLYN243556 in line [00212]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN192225.channel",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN192225.channel",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN465269 in line [00215]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN465269.channel",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.FileRecords.channel@POLYN243556.channel",
      "_method" : "---org.apache.kafka.common.record.FileRecords.channel@POLYN243556.dummymethode_00107 in line [00107]",
      "_target" : "org.apache.kafka.common.record.FileRecords.channel@POLYN243556.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN465269.channel",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN466537 in line [01090]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN465269.cibledummy_01090",
      "_risk" : ""
    } ]
  }, {
    "_id" : "187",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.handleInboundMessage@POLYN608989.currentTimeMs",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN606710 in line [01668]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN606710.currentTimeMs",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN606710.currentTimeMs",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN574169 in line [01622]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN574169.currentTimeMs",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Time.milliseconds@POLYN164769.return",
      "_method" : "---org.apache.kafka.common.utils.Time.milliseconds@POLYN164769 in line [02232]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.poll@POLYN633703.currentTimeMs",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.poll@POLYN633703.currentTimeMs",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.handleInboundMessage@POLYN608989 in line [02249]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.handleInboundMessage@POLYN608989.currentTimeMs",
      "_risk" : ""
    } ]
  }, {
    "_id" : "188",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFully@POLYN820469.buf",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN903243 in line [01067]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN903243.b",
      "_risk" : "//QC-JAVCWE099[01067] In java.io.ObjectInputStream.readFully@POLYN820469[01067] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN165185.arr",
      "_method" : "---java.io.ObjectInputStream.readFully@POLYN820469 in line [00081]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN820469.buf",
      "_risk" : "//QC-JAVCWE099[00081] In org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN165185[00081] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.protocol.DataInputStreamReadable.readByteBuffer@POLYN165764.arr",
      "_method" : "---org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN165185 in line [00099]",
      "_target" : "org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN165185.arr",
      "_risk" : ""
    } ]
  }, {
    "_id" : "189",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251264.input",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251919 in line [00372]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251919.input",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN251919.input",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256445 in line [00421]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256445.input",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN256445.input",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readMore@POLYN258082 in line [00465]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN258082.input",
      "_risk" : ""
    } ]
  }, {
    "_id" : "190",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254071.compressionType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN255617 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255617.compressionType",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252984.compressionType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN254071 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254071.compressionType",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN306071.compressionType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252984 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252984.compressionType",
      "_risk" : ""
    } ]
  }, {
    "_id" : "191",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254071.timestampType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN255617 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255617.timestampType",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252984.timestampType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN254071 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254071.timestampType",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN306071.timestampType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252984 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN252984.timestampType",
      "_risk" : ""
    } ]
  }, {
    "_id" : "192",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307190.headers",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN320874 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN320874.headers",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309779.headers",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307190 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307190.headers",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN310822.Record.EMPTY_HEADERS",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309779 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309779.headers",
      "_risk" : ""
    } ]
  }, {
    "_id" : "193",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307190.key",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN320874 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN320874.key",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309779.key",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307190 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307190.key",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN310822.key",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309779 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309779.key",
      "_risk" : ""
    } ]
  }, {
    "_id" : "194",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307190.value",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN320874 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN320874.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309779.value",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307190 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307190.value",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN310822.value",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309779 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309779.value",
      "_risk" : ""
    } ]
  }, {
    "_id" : "195",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN321619.sourcedummy",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN256963 in line [00730]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN321619.crc",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN321619.crc",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN321619.dummymethode_00732 in line [00732]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN321619.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN321619.return",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN321619 in line [00456]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307190.cibledummy_00456",
      "_risk" : ""
    } ]
  }, {
    "_id" : "196",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN177764.null",
      "_method" : "---org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN177764.dummymethode_00110 in line [00110]",
      "_target" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN177764.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN177764.return",
      "_method" : "---org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN177764 in line [00119]",
      "_target" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN177764.size",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN177764.size",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN583721 in line [00120]",
      "_target" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN177764.cibledummy_00120",
      "_risk" : "//QC-JAVCWE099[00120] In org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN177764[00120] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "197",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN188904.return",
      "_method" : "---org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN188904 in line [00233]",
      "_target" : "org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN252175.loadedCheckpoints",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN252175.loadedCheckpoints",
      "_method" : "---org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN252175 in line [00235]",
      "_target" : "org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN252175.cibledummy_00235",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN188904.offsets",
      "_method" : "---org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN188904.dummymethode_00182 in line [00182]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN188904.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "198",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN368202.now",
      "_method" : "---org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN368202 in line [00463]",
      "_target" : "org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN368202.cibledummy_00463",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN368202.timeoutException",
      "_method" : "---org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN368202 in line [00463]",
      "_target" : "org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN368202.offsetResetter",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN368202.offsetResetter",
      "_method" : "---org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN368202 in line [00479]",
      "_target" : "org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN368202.now",
      "_risk" : ""
    } ]
  }, {
    "_id" : "199",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readBoolean@POLYN817750.return",
      "_method" : "---java.io.ObjectInputStream.readBoolean@POLYN817750 in line [03208]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readBooleans@POLYN910032.v[off++]",
      "_risk" : "//QC-JAVCWZ099[03208] In java.io.ObjectInputStream.BlockDataInputStream.readBooleans@POLYN910032[03208] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readBoolean@POLYN904032.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readBoolean@POLYN904032 in line [00957]",
      "_target" : "java.io.ObjectInputStream.readBoolean@POLYN817750.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "200",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFully@POLYN820941.buf",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN903243 in line [01084]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN820941.cibledummy_01084",
      "_risk" : "//QC-JAVCWE099[01084] In java.io.ObjectInputStream.readFully@POLYN820941[01084] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN258082.array",
      "_method" : "---java.io.ObjectInputStream.readFully@POLYN820941 in line [00507]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN820941.buf",
      "_risk" : "//QC-JAVCWE099[00507] In org.apache.kafka.common.record.DefaultRecord.readMore@POLYN258082[00507] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "201",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFully@POLYN820941.len",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN903243 in line [01084]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN820941.cibledummy_01084",
      "_risk" : "//QC-JAVCWE099[01084] In java.io.ObjectInputStream.readFully@POLYN820941[01084] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN258082.bytesRead",
      "_method" : "---java.io.ObjectInputStream.readFully@POLYN820941 in line [00507]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN820941.len",
      "_risk" : "//QC-JAVCWE099[00507] In org.apache.kafka.common.record.DefaultRecord.readMore@POLYN258082[00507] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "202",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFully@POLYN820941.off",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN903243 in line [01084]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN820941.cibledummy_01084",
      "_risk" : "//QC-JAVCWE099[01084] In java.io.ObjectInputStream.readFully@POLYN820941[01084] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN258082.bytesToLeftShift",
      "_method" : "---java.io.ObjectInputStream.readFully@POLYN820941 in line [00507]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN820941.off",
      "_risk" : "//QC-JAVCWE099[00507] In org.apache.kafka.common.record.DefaultRecord.readMore@POLYN258082[00507] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "203",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626596.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534 in line [01814]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.off",
      "_method" : "---java.io.OutputStream.write@POLYN189428 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN189428.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "204",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626818.off",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534 in line [01818]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.off",
      "_method" : "---java.io.OutputStream.write@POLYN189428 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN189428.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "205",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.off",
      "_method" : "---java.io.OutputStream.write@POLYN189428 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN189428.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.writeFields@POLYN622150.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534 in line [01695]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "206",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.off",
      "_method" : "---java.io.OutputStream.write@POLYN189428 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN189428.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN613961.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534 in line [01534]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "207",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.off",
      "_method" : "---java.io.OutputStream.write@POLYN189428 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN189428.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN580495.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534 in line [00690]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "208",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.off",
      "_method" : "---java.io.OutputStream.write@POLYN189428 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN189428.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN580913.off",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "209",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.off",
      "_method" : "---java.io.OutputStream.write@POLYN189428 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN189428.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603710.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534 in line [01334]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "210",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626596.b",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534 in line [01814]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.b",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.b",
      "_method" : "---java.io.OutputStream.write@POLYN189428 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "211",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626818.b",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534 in line [01818]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.b",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.b",
      "_method" : "---java.io.OutputStream.write@POLYN189428 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "212",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.b",
      "_method" : "---java.io.OutputStream.write@POLYN189428 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.writeFields@POLYN622150.primVals",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534 in line [01695]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "213",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.b",
      "_method" : "---java.io.OutputStream.write@POLYN189428 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN613961.primVals",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534 in line [01534]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "214",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.b",
      "_method" : "---java.io.OutputStream.write@POLYN189428 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN580495.buf",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534 in line [00690]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "215",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.b",
      "_method" : "---java.io.OutputStream.write@POLYN189428 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN580913.buf",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "216",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.b",
      "_method" : "---java.io.OutputStream.write@POLYN189428 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN603710.ba",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534 in line [01334]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "217",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626596.b.length",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534 in line [01814]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.len",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.len",
      "_method" : "---java.io.OutputStream.write@POLYN189428 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "218",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626818.len",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534 in line [01818]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.len",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.len",
      "_method" : "---java.io.OutputStream.write@POLYN189428 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "219",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.len",
      "_method" : "---java.io.OutputStream.write@POLYN189428 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.writeFields@POLYN622150.primVals.length",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534 in line [01695]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "220",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.len",
      "_method" : "---java.io.OutputStream.write@POLYN189428 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN613961.primDataSize",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534 in line [01534]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "221",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.len",
      "_method" : "---java.io.OutputStream.write@POLYN189428 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN580495.buf.length",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534 in line [00690]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "222",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.len",
      "_method" : "---java.io.OutputStream.write@POLYN189428 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN580913.len",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN627534.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "223",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.write@POLYN620590.objVals[i]",
      "_method" : "---java.util.HashMap.writeObject@POLYN680400 in line [01687]",
      "_target" : "java.util.HashMap.writeObject@POLYN680400.s",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.writeObject@POLYN680400.s",
      "_method" : "---java.util.HashMap.internalWriteEntries@POLYN705151 in line [01360]",
      "_target" : "java.util.HashMap.internalWriteEntries@POLYN705151.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "224",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415459.sendBufferSize",
      "_method" : "---java.net.Socket.setSendBufferSize@POLYN504807 in line [00289]",
      "_target" : "java.net.Socket.setSendBufferSize@POLYN504807.size",
      "_risk" : "//QC-JAVCWE099[00289] In org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415459[00289] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.network.Selector.connect@POLYN413731.sendBufferSize",
      "_method" : "---org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415459 in line [00254]",
      "_target" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415459.sendBufferSize",
      "_risk" : ""
    } ]
  }, {
    "_id" : "225",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415459.receiveBufferSize",
      "_method" : "---java.net.Socket.setReceiveBufferSize@POLYN507514 in line [00291]",
      "_target" : "java.net.Socket.setReceiveBufferSize@POLYN507514.size",
      "_risk" : "//QC-JAVCWE099[00291] In org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415459[00291] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.network.Selector.connect@POLYN413731.receiveBufferSize",
      "_method" : "---org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415459 in line [00254]",
      "_target" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415459.receiveBufferSize",
      "_risk" : ""
    } ]
  }, {
    "_id" : "226",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeBlock@POLYN213281.compressedLengt",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230419 in line [00187]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230419.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230419.value",
      "_method" : "---java.io.OutputStream.write@POLYN187636 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN187636.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230419[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "227",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeBlock@POLYN213281.hash",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230419 in line [00193]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230419.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230419.value",
      "_method" : "---java.io.OutputStream.write@POLYN187636 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN187636.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230419[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "228",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeEndMark@POLYN214732.0",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230419 in line [00205]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230419.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230419.value",
      "_method" : "---java.io.OutputStream.write@POLYN187636 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN187636.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN230419[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "229",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.handleInboundMessage@POLYN608989.request",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN606710 in line [01668]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN606710.request",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN606710.request",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN574169 in line [01622]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN574169.requestMetadata",
      "_risk" : ""
    } ]
  }, {
    "_id" : "230",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN179463.records",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN227639 in line [00167]",
      "_target" : "org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN179463.cibledummy_00167",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.snapshot.RecordsSnapshotWriter.appendBatches@POLYN180594.batch.data",
      "_method" : "---org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN179463 in line [00191]",
      "_target" : "org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN179463.records",
      "_risk" : ""
    } ]
  }, {
    "_id" : "231",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297991.topics",
      "_method" : "---org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297991 in line [00389]",
      "_target" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297991.cibledummy_00389",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297991.INTERRUPTED_ERROR_MESSAGE",
      "_method" : "---org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297991 in line [00441]",
      "_target" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297991.topics",
      "_risk" : ""
    } ]
  }, {
    "_id" : "232",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297991.topics",
      "_method" : "---org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297991 in line [00001]",
      "_target" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297991.cibledummy_00389",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297991.timeoutError",
      "_method" : "---org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297991 in line [00490]",
      "_target" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297991.topics",
      "_risk" : ""
    } ]
  }, {
    "_id" : "233",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297991.topics",
      "_method" : "---org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297991 in line [00001]",
      "_target" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297991.cibledummy_00389",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297991.\"Completed validating internal topics and created {}\"",
      "_method" : "---org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297991 in line [00502]",
      "_target" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN297991.topics",
      "_risk" : ""
    } ]
  } ],
  "_lesDeadlocks" : [ {
    "_id" : "R0",
    "_libelle" : "org.apache.kafka.connect.mirror.OffsetSyncStore.this"
  }, {
    "_id" : "R1",
    "_libelle" : "org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165601.pollTimeout"
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
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN344217.tp"
  }, {
    "_id" : "R7",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN344217.highWatermark"
  }, {
    "_id" : "R8",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN344407.tp"
  }, {
    "_id" : "R9",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN344407.logStartOffset"
  }, {
    "_id" : "R10",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN344597.tp"
  }, {
    "_id" : "R11",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN344597.lastStableOffset"
  }, {
    "_id" : "R12",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN346831.partition"
  }, {
    "_id" : "R13",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN346831.offsetResetStrategy"
  }, {
    "_id" : "R14",
    "_libelle" : "java.io.InputStream.this"
  }, {
    "_id" : "R15",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.this"
  }, {
    "_id" : "R16",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN352385.tp"
  }, {
    "_id" : "R17",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN337287.tp"
  }, {
    "_id" : "R18",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN337287.position"
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
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN329835.assignments"
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
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429349.isDisconnected"
  }, {
    "_id" : "R31",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429349.cause"
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
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN173527.prefix"
  }, {
    "_id" : "R37",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN173527.id"
  }, {
    "_id" : "R38",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN173527.metrics"
  }, {
    "_id" : "R39",
    "_libelle" : "org.apache.kafka.connect.runtime.Worker.this"
  }, {
    "_id" : "R40",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN389334.tp"
  }, {
    "_id" : "R41",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.abortBatches@POLYN370062.dq"
  }, {
    "_id" : "R42",
    "_libelle" : "org.apache.kafka.clients.producer.internals.IncompleteBatches.incomplete"
  }, {
    "_id" : "R43",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN405097.e"
  }, {
    "_id" : "R44",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.this"
  }, {
    "_id" : "R45",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN172929.topic"
  }, {
    "_id" : "R46",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN172929.nowMs"
  }, {
    "_id" : "R47",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN360547.deque"
  }, {
    "_id" : "R48",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN387597.topicPartition"
  }, {
    "_id" : "R49",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN391709.topicPartition"
  }, {
    "_id" : "R50",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN391709.increment"
  }, {
    "_id" : "R51",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.addInFlightBatch@POLYN392105.batch"
  }, {
    "_id" : "R52",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.updateEstimation@POLYN166562.compressionRatioForTopic"
  }, {
    "_id" : "R53",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN396714.batch"
  }, {
    "_id" : "R54",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN396714.exception"
  }, {
    "_id" : "R55",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN396714.adjustSequenceNumbers"
  }, {
    "_id" : "R56",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN396119.exception"
  }, {
    "_id" : "R57",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN386587.exception"
  }, {
    "_id" : "R58",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN386101.exception"
  }, {
    "_id" : "R59",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN393532.batch"
  }, {
    "_id" : "R60",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN400481.batch"
  }, {
    "_id" : "R61",
    "_libelle" : "java.util.Hashtable.this"
  }, {
    "_id" : "R62",
    "_libelle" : "java.util.Hashtable.putAll@POLYN440632.t"
  }, {
    "_id" : "R63",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.this"
  }, {
    "_id" : "R64",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.setStreamsConfig@POLYN498171.applicationConfig"
  }, {
    "_id" : "R65",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.this"
  }, {
    "_id" : "R66",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN254291.topic"
  }, {
    "_id" : "R67",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN254291.partitions"
  }, {
    "_id" : "R68",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN252986.newOffsets"
  }, {
    "_id" : "R69",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN253410.newOffsets"
  }, {
    "_id" : "R70",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN428995.error"
  }, {
    "_id" : "R71",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN174972.lastVersion"
  }, {
    "_id" : "R72",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN174972.timeoutMs"
  }, {
    "_id" : "R73",
    "_libelle" : "org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN274091.topic"
  }, {
    "_id" : "R74",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN336359.dq"
  }, {
    "_id" : "R75",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.this"
  }, {
    "_id" : "R76",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN383778.topicPartition"
  }, {
    "_id" : "R77",
    "_libelle" : "org.apache.kafka.clients.Metadata.bootstrap@POLYN263133.addresses"
  }, {
    "_id" : "R78",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN172743.prefix"
  }, {
    "_id" : "R79",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN172743.id"
  }, {
    "_id" : "R80",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN172743.metrics"
  }, {
    "_id" : "R81",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN172743.nowMs"
  }, {
    "_id" : "R82",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.this"
  }, {
    "_id" : "R83",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN285394.connector"
  }, {
    "_id" : "R84",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN286708.id"
  }, {
    "_id" : "R85",
    "_libelle" : "org.apache.kafka.clients.Metadata.failedUpdate@POLYN275801.now"
  }, {
    "_id" : "R86",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN264099.requestVersion"
  }, {
    "_id" : "R87",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN264099.response"
  }, {
    "_id" : "R88",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN264099.isPartialUpdate"
  }, {
    "_id" : "R89",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN264099.nowMs"
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
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN232988.initialTopologies"
  }, {
    "_id" : "R94",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.this"
  }, {
    "_id" : "R95",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN239893.connName"
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
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN263525.response"
  }, {
    "_id" : "R101",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN263525.isPartialUpdate"
  }, {
    "_id" : "R102",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN263525.nowMs"
  }, {
    "_id" : "R103",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN175748.requestVersion"
  }, {
    "_id" : "R104",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN175748.response"
  }, {
    "_id" : "R105",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN175748.isPartialUpdate"
  }, {
    "_id" : "R106",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN175748.nowMs"
  }, {
    "_id" : "R107",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.update@POLYN160269.nodeId"
  }, {
    "_id" : "R108",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.update@POLYN160269.nodeApiVersions"
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
    "_libelle" : "java.io.File.readObject@POLYN644532.s"
  }, {
    "_id" : "R114",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN244352.request"
  }, {
    "_id" : "R115",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN244352.cb"
  }, {
    "_id" : "R116",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.remove@POLYN160541.nodeId"
  }, {
    "_id" : "R117",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.abortUndrainedBatches@POLYN370686.dq"
  }, {
    "_id" : "R118",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN404919.request"
  }, {
    "_id" : "R119",
    "_libelle" : "org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN586454.request"
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
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN241730.taskId"
  }, {
    "_id" : "R124",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN241730.cb"
  }, {
    "_id" : "R125",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.this"
  }, {
    "_id" : "R126",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.sourceRecord@POLYN213352.preTransformRecord"
  }, {
    "_id" : "R127",
    "_libelle" : "java.lang.Throwable.this"
  }, {
    "_id" : "R128",
    "_libelle" : "java.lang.Throwable.addSuppressed@POLYN399877.exception"
  }, {
    "_id" : "R129",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.this"
  }, {
    "_id" : "R130",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN190766.partition"
  }, {
    "_id" : "R131",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN190766.offset"
  }, {
    "_id" : "R132",
    "_libelle" : "java.io.BufferedOutputStream.this"
  }, {
    "_id" : "R133",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN171864.b"
  }, {
    "_id" : "R134",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN171864.off"
  }, {
    "_id" : "R135",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN171864.len"
  }, {
    "_id" : "R136",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN270302.cleanupDelayMs"
  }, {
    "_id" : "R137",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN267295.taskId"
  }, {
    "_id" : "R138",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.this"
  }, {
    "_id" : "R139",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN205275.key"
  }, {
    "_id" : "R140",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN205275.value"
  }, {
    "_id" : "R141",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN402207.now"
  }, {
    "_id" : "R142",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.this"
  }, {
    "_id" : "R143",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN202021.newCacheSizeBytes"
  }, {
    "_id" : "R144",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaConfigBackingStore.lock"
  }, {
    "_id" : "R145",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN343473.tp"
  }, {
    "_id" : "R146",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerSourceTask.this"
  }, {
    "_id" : "R147",
    "_libelle" : "org.apache.kafka.trogdor.workload.RoundTripWorker.this"
  }, {
    "_id" : "R148",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN395565.batch"
  }, {
    "_id" : "R149",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN395565.response"
  }, {
    "_id" : "R150",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTask.this"
  }, {
    "_id" : "R151",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.pollTasks"
  }, {
    "_id" : "R152",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN334311.tp"
  }, {
    "_id" : "R153",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN334311.position"
  }, {
    "_id" : "R154",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN433007.shortReason"
  }, {
    "_id" : "R155",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN433315.shortReason"
  }, {
    "_id" : "R156",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN433315.fullReason"
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
    "_libelle" : "java.net.Socket.setSendBufferSize@POLYN504807.size"
  }, {
    "_id" : "R161",
    "_libelle" : "java.net.Socket.setReceiveBufferSize@POLYN507514.size"
  }, {
    "_id" : "R162",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN209541.entries"
  }, {
    "_id" : "R163",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN351680.tp"
  }, {
    "_id" : "R164",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN351831.tp"
  }, {
    "_id" : "R165",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN236032.connName"
  }, {
    "_id" : "R166",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN236032.callback"
  }, {
    "_id" : "R167",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN238013.connName"
  }, {
    "_id" : "R168",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN238013.config"
  }, {
    "_id" : "R169",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN238013.allowReplace"
  }, {
    "_id" : "R170",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN238013.callback"
  }, {
    "_id" : "R171",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN238013.configInfos"
  }, {
    "_id" : "R172",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN243147.connName"
  }, {
    "_id" : "R173",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN243147.cb"
  }, {
    "_id" : "R174",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.this"
  }, {
    "_id" : "R175",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN176964.reader"
  }, {
    "_id" : "R176",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.splitAndReenqueue@POLYN347579.partitionDequeue"
  }, {
    "_id" : "R177",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.setEstimation@POLYN168518.compressionRatioForTopic"
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
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromAssignment@POLYN586397.partitions"
  }, {
    "_id" : "R183",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromAssignment@POLYN586397.logPrefix"
  }, {
    "_id" : "R184",
    "_libelle" : "java.io.File.writeObject@POLYN644151.s"
  }, {
    "_id" : "R185",
    "_libelle" : "java.lang.Throwable.writeObject@POLYN397822.s"
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
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN307714.sensor"
  }, {
    "_id" : "R190",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.reporters@POLYN213099.reporters"
  }, {
    "_id" : "R191",
    "_libelle" : "org.apache.kafka.tools.ThroughputThrottler.this"
  }, {
    "_id" : "R192",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.rebalance@POLYN239845.newAssignment"
  }, {
    "_id" : "R193",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN174486.reader"
  }, {
    "_id" : "R194",
    "_libelle" : "java.net.ServerSocket.this"
  }, {
    "_id" : "R195",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.this"
  }, {
    "_id" : "R196",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN193408.key"
  }, {
    "_id" : "R197",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN193408.value"
  }, {
    "_id" : "R198",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.this"
  }, {
    "_id" : "R199",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN175074.consumerRecords"
  }, {
    "_id" : "R200",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN431974.reason"
  }, {
    "_id" : "R201",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN431974.shouldResetMemberId"
  }, {
    "_id" : "R202",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN431275.reason"
  }, {
    "_id" : "R203",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN431275.shouldResetMemberId"
  }, {
    "_id" : "R204",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN334902.tp"
  }, {
    "_id" : "R205",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN334902.position"
  }, {
    "_id" : "R206",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN334902.requestedResetStrategy"
  }, {
    "_id" : "R207",
    "_libelle" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.lock"
  }, {
    "_id" : "R208",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN250054.partition"
  }, {
    "_id" : "R209",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN250054.offset"
  }, {
    "_id" : "R210",
    "_libelle" : "org.apache.kafka.connect.file.FileStreamSourceTask.this"
  }, {
    "_id" : "R211",
    "_libelle" : "org.apache.kafka.connect.storage.FileOffsetBackingStore.this"
  }, {
    "_id" : "R212",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN210988.namespace"
  }, {
    "_id" : "R213",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheLevelSensors"
  }, {
    "_id" : "R214",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.this"
  }, {
    "_id" : "R215",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.addStateStore@POLYN247896.builder"
  }, {
    "_id" : "R216",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.this"
  }, {
    "_id" : "R217",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN185531.key"
  }, {
    "_id" : "R218",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN185531.value"
  }, {
    "_id" : "R219",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN248333.offsets"
  }, {
    "_id" : "R220",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN248333.callback"
  }, {
    "_id" : "R221",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.pause@POLYN254566.partitions"
  }, {
    "_id" : "R222",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.resume@POLYN254888.partitions"
  }, {
    "_id" : "R223",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429194.cause"
  }, {
    "_id" : "R224",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN432272.api"
  }, {
    "_id" : "R225",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN432272.error"
  }, {
    "_id" : "R226",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN432272.shouldResetMemberId"
  }, {
    "_id" : "R227",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN198378.key"
  }, {
    "_id" : "R228",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1509859.r"
  }, {
    "_id" : "R229",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1509859.f"
  }, {
    "_id" : "R230",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1521524.r"
  }, {
    "_id" : "R231",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1521524.f"
  }, {
    "_id" : "R232",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN268242.key"
  }, {
    "_id" : "R233",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN268242.value"
  }, {
    "_id" : "R234",
    "_libelle" : "org.apache.kafka.trogdor.workload.ProduceBenchWorker.this"
  }, {
    "_id" : "R235",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN325686.pattern"
  }, {
    "_id" : "R236",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN325686.listener"
  }, {
    "_id" : "R237",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN171003.b"
  }, {
    "_id" : "R238",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN240247.topics"
  }, {
    "_id" : "R239",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN242075.topics"
  }, {
    "_id" : "R240",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN242075.listener"
  }, {
    "_id" : "R241",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN240454.pattern"
  }, {
    "_id" : "R242",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN240454.listener"
  }, {
    "_id" : "R243",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN241889.pattern"
  }, {
    "_id" : "R244",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN341902.tp"
  }, {
    "_id" : "R245",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN345037.tp"
  }, {
    "_id" : "R246",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN345037.preferredReadReplicaId"
  }, {
    "_id" : "R247",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN345037.timeMs"
  }, {
    "_id" : "R248",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN347590.partitions"
  }, {
    "_id" : "R249",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN347590.nextAllowResetTimeMs"
  }, {
    "_id" : "R250",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN351977.partitions"
  }, {
    "_id" : "R251",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN351977.nextRetryTimeMs"
  }, {
    "_id" : "R252",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeReporter@POLYN314003.reporter"
  }, {
    "_id" : "R253",
    "_libelle" : "org.apache.kafka.common.metrics.JmxReporter.LOCK"
  }, {
    "_id" : "R254",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.this"
  }, {
    "_id" : "R255",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN171814.status"
  }, {
    "_id" : "R256",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN171435.status"
  }, {
    "_id" : "R257",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN172502.status"
  }, {
    "_id" : "R258",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN171959.status"
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
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN247502.key"
  }, {
    "_id" : "R264",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN247502.value"
  }, {
    "_id" : "R265",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN247502.windowStartTimestamp"
  }, {
    "_id" : "R266",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.this"
  }, {
    "_id" : "R267",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN270753.key"
  }, {
    "_id" : "R268",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN270753.value"
  }, {
    "_id" : "R269",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN270753.windowStartTimestamp"
  }, {
    "_id" : "R270",
    "_libelle" : "java.io.PipedOutputStream.this"
  }, {
    "_id" : "R271",
    "_libelle" : "java.io.PipedOutputStream.connect@POLYN181949.snk"
  }, {
    "_id" : "R272",
    "_libelle" : "java.io.PipedInputStream.this"
  }, {
    "_id" : "R273",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN230704.b"
  }, {
    "_id" : "R274",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN231811.b"
  }, {
    "_id" : "R275",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN231811.off"
  }, {
    "_id" : "R276",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN231811.len"
  }, {
    "_id" : "R277",
    "_libelle" : "java.io.PipedWriter.this"
  }, {
    "_id" : "R278",
    "_libelle" : "java.io.PipedWriter.connect@POLYN181179.snk"
  }, {
    "_id" : "R279",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoinIfNecessary@POLYN432752.shortReason"
  }, {
    "_id" : "R280",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoinIfNecessary@POLYN432752.fullReason"
  }, {
    "_id" : "R281",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.assignPartitionsLock"
  }, {
    "_id" : "R282",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.this"
  }, {
    "_id" : "R283",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.writeEntries@POLYN165915.committedOffsets"
  }, {
    "_id" : "R284",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.assign@POLYN242453.partitions"
  }, {
    "_id" : "R285",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.addRecord@POLYN246973.record"
  }, {
    "_id" : "R286",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setException@POLYN247924.exception"
  }, {
    "_id" : "R287",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN248055.exception"
  }, {
    "_id" : "R288",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN249280.callback"
  }, {
    "_id" : "R289",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.this"
  }, {
    "_id" : "R290",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.addTransientTopics@POLYN162508.topics"
  }, {
    "_id" : "R291",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN176361.fatalException"
  }, {
    "_id" : "R292",
    "_libelle" : "org.apache.kafka.clients.Metadata.fatalError@POLYN276061.exception"
  }, {
    "_id" : "R293",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.this"
  }, {
    "_id" : "R294",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.consumerRecord@POLYN213581.consumedMessage"
  }, {
    "_id" : "R295",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.this"
  }, {
    "_id" : "R296",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeTaskConfigs@POLYN179725.connector"
  }, {
    "_id" : "R297",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN180377.connector"
  }, {
    "_id" : "R298",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN180377.configs"
  }, {
    "_id" : "R299",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.this"
  }, {
    "_id" : "R300",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.setAclMutator@POLYN181117.aclMutator"
  }, {
    "_id" : "R301",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.configure@POLYN184894.configs"
  }, {
    "_id" : "R302",
    "_libelle" : "java.io.PipedReader.this"
  }, {
    "_id" : "R303",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.this"
  }, {
    "_id" : "R304",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.write@POLYN188053.snapshot"
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
    "_libelle" : "org.apache.kafka.streams.state.internals.KeyValueSegment.deleteRange@POLYN160180.keyFrom"
  }, {
    "_id" : "R309",
    "_libelle" : "org.apache.kafka.streams.state.internals.KeyValueSegment.deleteRange@POLYN160180.keyTo"
  }, {
    "_id" : "R310",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.this"
  }, {
    "_id" : "R311",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.calculateNextWindow@POLYN170922.force"
  }, {
    "_id" : "R312",
    "_libelle" : "java.io.FileInputStream.closeLock"
  }, {
    "_id" : "R313",
    "_libelle" : "java.io.FileOutputStream.closeLock"
  }, {
    "_id" : "R314",
    "_libelle" : "java.io.PipedReader.receive@POLYN212421.c"
  }, {
    "_id" : "R315",
    "_libelle" : "java.io.PipedReader.receive@POLYN212421.off"
  }, {
    "_id" : "R316",
    "_libelle" : "java.io.PipedReader.receive@POLYN212421.len"
  }, {
    "_id" : "R317",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.close@POLYN257594.timeout"
  }, {
    "_id" : "R318",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.metrics@POLYN212470.errorHandlingMetrics"
  }, {
    "_id" : "R319",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.this"
  }, {
    "_id" : "R320",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN176701.newState"
  }, {
    "_id" : "R321",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN176701.now"
  }, {
    "_id" : "R322",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelSensors"
  }, {
    "_id" : "R323",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.setNamedTopology@POLYN498434.namedTopology"
  }, {
    "_id" : "R324",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setOffsetsException@POLYN248187.exception"
  }, {
    "_id" : "R325",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN248949.offsets"
  }, {
    "_id" : "R326",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seekToBeginning@POLYN252752.partitions"
  }, {
    "_id" : "R327",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seekToEnd@POLYN253176.partitions"
  }, {
    "_id" : "R328",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN258147.task"
  }, {
    "_id" : "R329",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setLastRebalanceTime@POLYN457203.timestamp"
  }, {
    "_id" : "R330",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewGeneration@POLYN458013.generation"
  }, {
    "_id" : "R331",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewState@POLYN458148.state"
  }, {
    "_id" : "R332",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN347026.partitions"
  }, {
    "_id" : "R333",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN347026.offsetResetStrategy"
  }, {
    "_id" : "R334",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.this"
  }, {
    "_id" : "R335",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.put@POLYN157028.key"
  }, {
    "_id" : "R336",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.put@POLYN157028.value"
  }, {
    "_id" : "R337",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.addReporter@POLYN313647.reporter"
  }, {
    "_id" : "R338",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.putAll@POLYN170883.entries"
  }, {
    "_id" : "R339",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.this"
  }, {
    "_id" : "R340",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.commitTransaction@POLYN163559.record"
  }, {
    "_id" : "R341",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.abortTransaction@POLYN163923.record"
  }, {
    "_id" : "R342",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN234432.callback"
  }, {
    "_id" : "R343",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN234663.connName"
  }, {
    "_id" : "R344",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN234663.callback"
  }, {
    "_id" : "R345",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN237100.connName"
  }, {
    "_id" : "R346",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN237100.config"
  }, {
    "_id" : "R347",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN237100.allowReplace"
  }, {
    "_id" : "R348",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN237100.callback"
  }, {
    "_id" : "R349",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN240267.connName"
  }, {
    "_id" : "R350",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN240267.callback"
  }, {
    "_id" : "R351",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN178751.connector"
  }, {
    "_id" : "R352",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN178751.properties"
  }, {
    "_id" : "R353",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeConnectorConfig@POLYN179372.connector"
  }, {
    "_id" : "R354",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN181266.connector"
  }, {
    "_id" : "R355",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN181266.state"
  }, {
    "_id" : "R356",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.setUpdateListener@POLYN182093.listener"
  }, {
    "_id" : "R357",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.loadSnapshot@POLYN182626.acls"
  }, {
    "_id" : "R358",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN178257.newLeader"
  }, {
    "_id" : "R359",
    "_libelle" : "java.io.BufferedInputStream.this"
  }, {
    "_id" : "R360",
    "_libelle" : "java.io.BufferedInputStream.mark@POLYN259755.readlimit"
  }, {
    "_id" : "R361",
    "_libelle" : "java.io.PipedOutputStream.sink"
  }, {
    "_id" : "R362",
    "_libelle" : "java.io.PipedReader.receive@POLYN210743.c"
  }, {
    "_id" : "R363",
    "_libelle" : "java.io.PipedWriter.sink"
  }, {
    "_id" : "R364",
    "_libelle" : "java.net.ServerSocket.setSocketFactory@POLYN338407.fac"
  }, {
    "_id" : "R365",
    "_libelle" : "java.net.Socket.setSocketImplFactory@POLYN520442.fac"
  }, {
    "_id" : "R366",
    "_libelle" : "java.util.Hashtable.forEach@POLYN456172.action"
  }, {
    "_id" : "R367",
    "_libelle" : "java.util.Hashtable.replaceAll@POLYN457082.function"
  }, {
    "_id" : "R368",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromMetadata@POLYN587210.topics"
  }, {
    "_id" : "R369",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromMetadata@POLYN587210.logPrefix"
  }, {
    "_id" : "R370",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.this"
  }, {
    "_id" : "R371",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN265342.activePartitionHostMap"
  }, {
    "_id" : "R372",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN265342.standbyPartitionHostMap"
  }, {
    "_id" : "R373",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN265342.clusterMetadata"
  }, {
    "_id" : "R374",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.putAll@POLYN194494.entries"
  }, {
    "_id" : "R375",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.setListener@POLYN202678.listener"
  }, {
    "_id" : "R376",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDbIterator.this"
  }, {
    "_id" : "R377",
    "_libelle" : "org.apache.kafka.trogdor.workload.PayloadIterator.this"
  }, {
    "_id" : "R378",
    "_libelle" : "org.apache.kafka.trogdor.workload.PayloadIterator.seek@POLYN155666.position"
  }, {
    "_id" : "R379",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.this"
  }, {
    "_id" : "R380",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.delay@POLYN158955.amount"
  }, {
    "_id" : "R381",
    "_libelle" : "java.io.InputStream.mark@POLYN262790.readlimit"
  } ],
  "_lesDeadlocksSequences" : [ {
    "_id" : "0",
    "_lesItems" : [ "S0:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN194101", "S0:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN194101", "S0:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN208150", "S0:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165601 (R0 in line [00067],R1 in line [00067])", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867712", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN868001", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN868001", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870357", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870357", "S0:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN508913", "S0:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541521", "S0:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541521", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN344217 (R2 in line [00576],R6 in line [00576],R7 in line [00576])", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790", "S0:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565", "S0:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565.dummymethode_00114" ]
  }, {
    "_id" : "1",
    "_lesItems" : [ "S1:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN194101", "S1:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN194101", "S1:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN208150", "S1:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165601 (R0 in line [00067],R1 in line [00067])", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867712", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN868001", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN868001", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870357", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870357", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN508913", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541521", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541521", "S1:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN344407 (R2 in line [00580],R8 in line [00580],R9 in line [00580])", "S1:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790", "S1:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565", "S1:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565.dummymethode_00114" ]
  }, {
    "_id" : "2",
    "_lesItems" : [ "S2:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN194101", "S2:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN194101", "S2:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN208150", "S2:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165601 (R0 in line [00067],R1 in line [00067])", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867712", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN868001", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN868001", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870357", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870357", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN508913", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541521", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541521", "S2:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN344597 (R2 in line [00584],R10 in line [00584],R11 in line [00584])", "S2:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790", "S2:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565", "S2:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565.dummymethode_00114" ]
  }, {
    "_id" : "3",
    "_lesItems" : [ "S3:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN194101", "S3:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN194101", "S3:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN208150", "S3:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165601 (R0 in line [00067],R1 in line [00067])", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867712", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN868001", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN868001", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870357", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870357", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN508913", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541521", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541521", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN549283", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN549283", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN347442", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN346831 (R2 in line [00636],R12 in line [00636],R13 in line [00636])", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790", "S3:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565", "S3:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565.dummymethode_00114" ]
  }, {
    "_id" : "4",
    "_lesItems" : [ "S4:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN194101", "S4:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN194101", "S4:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN208150", "S4:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165601 (R0 in line [00067],R1 in line [00067])", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867712", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN868001", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN868001", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870357", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870357", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN508913", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541521", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541521", "S4:org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN352385 (R2 in line [00755],R16 in line [00755])", "S4:org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN181363", "S4:java.util.HashMap.HashIterator.remove@POLYN685592", "S4:java.util.HashMap.HashIterator.remove@POLYN685592.dummymethode_01445" ]
  }, {
    "_id" : "5",
    "_lesItems" : [ "S5:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN194101", "S5:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN194101", "S5:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN208150", "S5:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165601 (R0 in line [00067],R1 in line [00067])", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867712", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN868001", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN868001", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870357", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870357", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN508913", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN508913", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN511206", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN511206", "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN337287 (R2 in line [00443],R17 in line [00443],R18 in line [00443])", "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790", "S5:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565", "S5:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565.dummymethode_00114" ]
  }, {
    "_id" : "6",
    "_lesItems" : [ "S6:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526335", "S6:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526335", "S6:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524494", "S6:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524494", "S6:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385304", "S6:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385304", "S6:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385666", "S6:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385666", "S6:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN861014", "S6:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN861014", "S6:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN421102", "S6:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN421102", "S6:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN329835 (R2 in line [00273],R24 in line [00273])", "S6:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN329835.dummymethode_00277" ]
  }, {
    "_id" : "7",
    "_lesItems" : [ "S7:org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN914170", "S7:org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN914170", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN343473 (R2 in line [00561],R145 in line [00561])", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790", "S7:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565", "S7:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565.dummymethode_00114" ]
  }, {
    "_id" : "8",
    "_lesItems" : [ "S8:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN243048 (R65 in line [00163])", "S8:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN243282 (R65 in line [00168],R151 in line [00175])", "S8:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN243282 (R65 in line [00168],R151 in line [00175])", "S8:org.apache.kafka.clients.consumer.MockConsumer.updateFetchPosition@POLYN258827", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.seek@POLYN334501", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN334311 (R2 in line [00378],R152 in line [00378],R153 in line [00378])", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790", "S8:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565", "S8:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565.dummymethode_00114" ]
  }, {
    "_id" : "9",
    "_lesItems" : [ "S9:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN905013", "S9:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN905013", "S9:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN351680 (R2 in line [00737],R163 in line [00737])", "S9:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790", "S9:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565", "S9:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565.dummymethode_00114" ]
  }, {
    "_id" : "10",
    "_lesItems" : [ "S10:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN905771", "S10:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN905771", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN351831 (R2 in line [00741],R164 in line [00741])", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790", "S10:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565", "S10:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565.dummymethode_00114" ]
  }, {
    "_id" : "11",
    "_lesItems" : [ "S11:org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetIfNeeded@POLYN514175", "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN334902 (R2 in line [00390],R204 in line [00390],R205 in line [00390],R206 in line [00390])", "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN334157", "S11:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565", "S11:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565.dummymethode_00114" ]
  }, {
    "_id" : "12",
    "_lesItems" : [ "S12:org.apache.kafka.clients.consumer.KafkaConsumer.subscribe@POLYN858872", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN325686 (R2 in line [00172],R235 in line [00172],R236 in line [00172])", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN330740", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN330740.dummymethode_00292" ]
  }, {
    "_id" : "13",
    "_lesItems" : [ "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeValidatePositionForCurrentLeader@POLYN337759 (R2 in line [00456])", "S13:org.apache.kafka.clients.ApiVersions.get@POLYN160774 (R75 in line [00048])", "S13:java.util.Map.get@POLYN439139" ]
  }, {
    "_id" : "14",
    "_lesItems" : [ "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN341902 (R2 in line [00529],R244 in line [00529])", "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790", "S14:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565", "S14:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565.dummymethode_00114" ]
  }, {
    "_id" : "15",
    "_lesItems" : [ "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN345037 (R2 in line [00596],R245 in line [00596],R246 in line [00596],R247 in line [00596])", "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790", "S15:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565", "S15:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565.dummymethode_00114" ]
  }, {
    "_id" : "16",
    "_lesItems" : [ "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN347590 (R2 in line [00651],R248 in line [00651],R249 in line [00651])", "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790", "S16:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565", "S16:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565.dummymethode_00114" ]
  }, {
    "_id" : "17",
    "_lesItems" : [ "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN351977 (R2 in line [00745],R250 in line [00745],R251 in line [00745])", "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN334157", "S17:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565", "S17:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565.dummymethode_00114" ]
  }, {
    "_id" : "18",
    "_lesItems" : [ "S18:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN347026 (R2 in line [00640],R332 in line [00640],R333 in line [00640])", "S18:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN347026.dummymethode_00641" ]
  }, {
    "_id" : "19",
    "_lesItems" : [ "S19:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN558677", "S19:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN566450", "S19:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN566450", "S19:org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN274091 (R5 in line [00450],R73 in line [00450])", "S19:org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN274091.dummymethode_00451" ]
  }, {
    "_id" : "20",
    "_lesItems" : [ "S20:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN839626", "S20:org.apache.kafka.clients.Metadata.bootstrap@POLYN263133 (R5 in line [00238],R77 in line [00238])", "S20:org.apache.kafka.clients.Metadata.bootstrap@POLYN263133.dummymethode_00239" ]
  }, {
    "_id" : "21",
    "_lesItems" : [ "S21:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN380259", "S21:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN380259", "S21:org.apache.kafka.clients.Metadata.failedUpdate@POLYN275801 (R5 in line [00490],R85 in line [00490])", "S21:org.apache.kafka.clients.Metadata.failedUpdate@POLYN275801.dummymethode_00491" ]
  }, {
    "_id" : "22",
    "_lesItems" : [ "S22:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN380259", "S22:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN380259", "S22:org.apache.kafka.clients.Metadata.update@POLYN264099 (R5 in line [00263],R86 in line [00263],R87 in line [00263],R88 in line [00263],R89 in line [00263])", "S22:org.apache.kafka.clients.Metadata.update@POLYN264099.dummymethode_00264" ]
  }, {
    "_id" : "23",
    "_lesItems" : [ "S23:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN263525 (R5 in line [00249],R100 in line [00249],R101 in line [00249],R102 in line [00249])", "S23:org.apache.kafka.clients.Metadata.update@POLYN264099 (R5 in line [00263],R86 in line [00263],R87 in line [00263],R88 in line [00263],R89 in line [00263])", "S23:org.apache.kafka.clients.Metadata.update@POLYN264099.dummymethode_00264" ]
  }, {
    "_id" : "24",
    "_lesItems" : [ "S24:org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN176361 (R44 in line [00145],R291 in line [00145])", "S24:org.apache.kafka.clients.Metadata.fatalError@POLYN276061 (R5 in line [00500],R292 in line [00500])", "S24:org.apache.kafka.clients.Metadata.fatalError@POLYN276061.dummymethode_00501" ]
  }, {
    "_id" : "25",
    "_lesItems" : [ "S25:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN194101", "S25:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN194101", "S25:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN208150", "S25:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165601 (R0 in line [00067],R1 in line [00067])", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867712", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN868001", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.acquireAndEnsureOpen@POLYN923242", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.acquire@POLYN923697" ]
  }, {
    "_id" : "26",
    "_lesItems" : [ "S26:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN194101", "S26:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN194101", "S26:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN208150", "S26:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165601 (R0 in line [00067],R1 in line [00067])", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867712", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN868001", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN868001", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.updateAssignmentMetadataIfNeeded@POLYN869900", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.updateFetchPositions@POLYN922580", "S26:org.apache.kafka.clients.consumer.internals.SubscriptionState.hasAllFetchPositions@POLYN348330 (R2 in line [00669])", "S26:org.apache.kafka.common.internals.PartitionStates.stateIterator@POLYN182887" ]
  }, {
    "_id" : "27",
    "_lesItems" : [ "S27:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN194101", "S27:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN194101", "S27:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN208150", "S27:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165601 (R0 in line [00067],R1 in line [00067])", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867712", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN868001", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN868001", "S27:org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.recordPollEnd@POLYN169494", "S27:org.apache.kafka.common.metrics.Sensor.record@POLYN224249", "S27:org.apache.kafka.common.metrics.Sensor.recordInternal@POLYN224533 (R3 in line [00232])", "S27:org.apache.kafka.common.metrics.Sensor.recordInternal@POLYN224533.dummymethode_00231" ]
  }, {
    "_id" : "28",
    "_lesItems" : [ "S28:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN194101", "S28:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN194101", "S28:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN208150", "S28:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165601 (R0 in line [00067],R1 in line [00067])", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867712", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN868001", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN868001", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870357", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870357", "S28:org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN489739 (R4 in line [00248])", "S28:org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.maybeUpdateAssignment@POLYN573776", "S28:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignmentId@POLYN324735 (R2 in line [00149])", "S28:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignmentId@POLYN324735.dummymethode_00150" ]
  }, {
    "_id" : "29",
    "_lesItems" : [ "S29:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN194101", "S29:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN194101", "S29:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN208150", "S29:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165601 (R0 in line [00067],R1 in line [00067])", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867712", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN868001", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN868001", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870357", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN870357", "S29:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN508913", "S29:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541521", "S29:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN541521", "S29:org.apache.kafka.clients.Metadata.requestUpdate@POLYN258601 (R5 in line [00145])", "S29:org.apache.kafka.clients.Metadata.requestUpdate@POLYN258601.dummymethode_00146" ]
  }, {
    "_id" : "30",
    "_lesItems" : [ "S30:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN194101", "S30:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN194101", "S30:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN208150", "S30:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165601 (R0 in line [00067],R1 in line [00067])", "S30:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN165601 (R0 in line [00067],R1 in line [00067])", "S30:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN867712", "S30:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN868001", "S30:org.apache.kafka.clients.consumer.KafkaConsumer.acquireAndEnsureOpen@POLYN923242", "S30:org.apache.kafka.clients.consumer.KafkaConsumer.acquire@POLYN923697" ]
  }, {
    "_id" : "31",
    "_lesItems" : [ "S31:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526335", "S31:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526335", "S31:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524494", "S31:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524494", "S31:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN548435 (R27 in line [01039],R28 in line [01051])", "S31:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN558060 (R29 in line [01215])", "S31:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN558060.dummymethode_01214" ]
  }, {
    "_id" : "32",
    "_lesItems" : [ "S32:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526335", "S32:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526335", "S32:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524494", "S32:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524494", "S32:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN548435 (R27 in line [01039],R28 in line [01051])", "S32:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN548435 (R27 in line [01039],R28 in line [01051])", "S32:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN558060 (R29 in line [01215])", "S32:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN558060.dummymethode_01214" ]
  }, {
    "_id" : "33",
    "_lesItems" : [ "S33:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526335", "S33:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526335", "S33:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524494", "S33:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524494", "S33:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN548435 (R27 in line [01039],R28 in line [01051])", "S33:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN548435 (R27 in line [01039],R28 in line [01051])", "S33:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385304", "S33:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385304", "S33:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN345325 (R21 in line [00215])", "S33:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN345325.dummymethode_00216" ]
  }, {
    "_id" : "34",
    "_lesItems" : [ "S34:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526335", "S34:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526335", "S34:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524494", "S34:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524494", "S34:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN548435 (R27 in line [01039],R28 in line [01051])", "S34:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN548435 (R27 in line [01039],R28 in line [01051])", "S34:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385304", "S34:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385304", "S34:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385666", "S34:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385666", "S34:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN861014", "S34:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN861014", "S34:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN435108 (R22 in line [01103])", "S34:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN435108.dummymethode_01104" ]
  }, {
    "_id" : "35",
    "_lesItems" : [ "S35:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526335", "S35:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526335", "S35:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524494", "S35:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524494", "S35:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN548435 (R27 in line [01039],R28 in line [01051])", "S35:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN548435 (R27 in line [01039],R28 in line [01051])", "S35:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385304", "S35:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385304", "S35:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385666", "S35:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385666", "S35:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN861014", "S35:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN861014", "S35:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN421102", "S35:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN421102", "S35:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN400451", "S35:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN400451", "S35:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN332498 (R2 in line [00334])", "S35:org.apache.kafka.clients.consumer.internals.SubscriptionState.collectPartitions@POLYN348969", "S35:org.apache.kafka.clients.consumer.internals.SubscriptionState.collectPartitions@POLYN348969.dummymethode_00686" ]
  }, {
    "_id" : "36",
    "_lesItems" : [ "S36:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526335", "S36:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526335", "S36:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524494", "S36:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524494", "S36:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN548435 (R27 in line [01039],R28 in line [01051])", "S36:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN548435 (R27 in line [01039],R28 in line [01051])", "S36:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385304", "S36:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385304", "S36:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385666", "S36:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385666", "S36:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelSensors@POLYN300165 (R25 in line [00301])", "S36:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN298644", "S36:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN298644.dummymethode_00263" ]
  }, {
    "_id" : "37",
    "_lesItems" : [ "S37:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526335", "S37:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526335", "S37:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524494", "S37:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524494", "S37:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN548435 (R27 in line [01039],R28 in line [01051])", "S37:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN548435 (R27 in line [01039],R28 in line [01051])", "S37:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385304", "S37:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385304", "S37:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385666", "S37:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385666", "S37:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelMetrics@POLYN300717 (R26 in line [00310])", "S37:java.util.Hashtable.remove@POLYN487542" ]
  }, {
    "_id" : "38",
    "_lesItems" : [ "S38:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526335", "S38:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526335", "S38:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524494", "S38:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524494", "S38:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385304", "S38:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385304", "S38:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385666", "S38:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385666", "S38:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN861014", "S38:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN861014", "S38:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN435108 (R22 in line [01103])", "S38:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN435108 (R22 in line [01103])", "S38:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.pollNoWakeup@POLYN268140", "S38:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.poll@POLYN266271", "S38:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.UnsentRequests.clean@POLYN283700 (R23 in line [00696])", "S38:java.util.Map.values@POLYN443978" ]
  }, {
    "_id" : "39",
    "_lesItems" : [ "S39:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526335", "S39:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN526335", "S39:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524494", "S39:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN524494", "S39:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385304", "S39:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385304", "S39:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385666", "S39:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385666", "S39:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN861014", "S39:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN861014", "S39:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN435108 (R22 in line [01103])", "S39:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN435108 (R22 in line [01103])", "S39:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.pollNoWakeup@POLYN268140", "S39:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.poll@POLYN266271", "S39:org.apache.kafka.clients.Metadata.maybeThrowAnyException@POLYN273347 (R5 in line [00428])", "S39:org.apache.kafka.clients.Metadata.clearErrorsAndMaybeThrowException@POLYN274277", "S39:org.apache.kafka.clients.Metadata.clearErrorsAndMaybeThrowException@POLYN274277.dummymethode_00456" ]
  }, {
    "_id" : "40",
    "_lesItems" : [ "S40:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN384862", "S40:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN384862", "S40:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToClients@POLYN398047", "S40:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.populateClientStatesMap@POLYN401920", "S40:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.fetchCommittedOffsets@POLYN425673", "S40:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetFetchRequest@POLYN446756", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN428540 (R22 in line [00926])", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429349 (R22 in line [00947],R30 in line [00947],R31 in line [00947])", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429349.dummymethode_00949" ]
  }, {
    "_id" : "41",
    "_lesItems" : [ "S41:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.close@POLYN427724", "S41:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN399066 (R22 in line [00240])", "S41:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN399066 (R22 in line [00240])", "S41:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN428995 (R22 in line [00939],R70 in line [00939])", "S41:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN428995.dummymethode_00940" ]
  }, {
    "_id" : "42",
    "_lesItems" : [ "S42:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN241489", "S42:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN241489", "S42:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN402207 (R22 in line [00322],R141 in line [00322])", "S42:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.failureCause@POLYN450630" ]
  }, {
    "_id" : "43",
    "_lesItems" : [ "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatResponseHandler.handle@POLYN438624", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatResponseHandler.handle@POLYN438624", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN433007 (R22 in line [01039],R154 in line [01039])", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN433315 (R22 in line [01050],R155 in line [01050],R156 in line [01050])", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN433315 (R22 in line [01050],R155 in line [01050],R156 in line [01050])", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN433315.dummymethode_01053" ]
  }, {
    "_id" : "44",
    "_lesItems" : [ "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureActiveGroup@POLYN403528", "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN405154", "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN431974 (R22 in line [01017],R200 in line [01017],R201 in line [01017])", "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN431275 (R22 in line [01004],R202 in line [01004],R203 in line [01004])", "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN431275.dummymethode_01005" ]
  }, {
    "_id" : "45",
    "_lesItems" : [ "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429194 (R22 in line [00943],R223 in line [00943])", "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429349 (R22 in line [00947],R30 in line [00947],R31 in line [00947])", "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429349.dummymethode_00949" ]
  }, {
    "_id" : "46",
    "_lesItems" : [ "S46:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN432272 (R22 in line [01023],R224 in line [01023],R225 in line [01023],R226 in line [01023])", "S46:java.lang.String.format@POLYN917779", "S46:java.lang.String.format@POLYN917779.dummymethode_00001" ]
  }, {
    "_id" : "47",
    "_lesItems" : [ "S47:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.rejoinNeededOrPending@POLYN422444", "S47:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoinIfNecessary@POLYN432752 (R22 in line [01032],R279 in line [01032],R280 in line [01032])", "S47:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN433315 (R22 in line [01050],R155 in line [01050],R156 in line [01050])", "S47:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN433315 (R22 in line [01050],R155 in line [01050],R156 in line [01050])", "S47:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN433315.dummymethode_01053" ]
  }, {
    "_id" : "48",
    "_lesItems" : [ "S48:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setLastRebalanceTime@POLYN457203 (R22 in line [01592],R329 in line [01592])", "S48:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setLastRebalanceTime@POLYN457203.dummymethode_01593" ]
  }, {
    "_id" : "49",
    "_lesItems" : [ "S49:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewGeneration@POLYN458013 (R22 in line [01617],R330 in line [01617])", "S49:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewGeneration@POLYN458013.dummymethode_01618" ]
  }, {
    "_id" : "50",
    "_lesItems" : [ "S50:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewState@POLYN458148 (R22 in line [01621],R331 in line [01621])", "S50:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewState@POLYN458148.dummymethode_01622" ]
  }, {
    "_id" : "51",
    "_lesItems" : [ "S51:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN550653", "S51:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN551733 (R27 in line [01113])", "S51:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385304", "S51:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385304", "S51:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN345325 (R21 in line [00215])", "S51:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN345325.dummymethode_00216" ]
  }, {
    "_id" : "52",
    "_lesItems" : [ "S52:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN550653", "S52:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN551733 (R27 in line [01113])", "S52:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385304", "S52:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385304", "S52:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385666", "S52:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385666", "S52:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN861014", "S52:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN861014", "S52:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN435108 (R22 in line [01103])", "S52:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN435108.dummymethode_01104" ]
  }, {
    "_id" : "53",
    "_lesItems" : [ "S53:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN550653", "S53:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN551733 (R27 in line [01113])", "S53:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385304", "S53:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385304", "S53:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385666", "S53:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385666", "S53:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN861014", "S53:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN861014", "S53:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN421102", "S53:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN421102", "S53:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN400451", "S53:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN400451", "S53:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN332498 (R2 in line [00334])", "S53:org.apache.kafka.clients.consumer.internals.SubscriptionState.collectPartitions@POLYN348969", "S53:org.apache.kafka.clients.consumer.internals.SubscriptionState.collectPartitions@POLYN348969.dummymethode_00686" ]
  }, {
    "_id" : "54",
    "_lesItems" : [ "S54:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN550653", "S54:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN551733 (R27 in line [01113])", "S54:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385304", "S54:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385304", "S54:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385666", "S54:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385666", "S54:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelSensors@POLYN300165 (R25 in line [00301])", "S54:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN298644", "S54:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN298644.dummymethode_00263" ]
  }, {
    "_id" : "55",
    "_lesItems" : [ "S55:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN550653", "S55:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN551733 (R27 in line [01113])", "S55:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385304", "S55:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN385304", "S55:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385666", "S55:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN385666", "S55:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelMetrics@POLYN300717 (R26 in line [00310])", "S55:java.util.Hashtable.remove@POLYN487542" ]
  }, {
    "_id" : "56",
    "_lesItems" : [ "S56:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN384862", "S56:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN384862", "S56:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToClients@POLYN398047", "S56:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.populateClientStatesMap@POLYN401920", "S56:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.fetchCommittedOffsets@POLYN425673", "S56:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetFetchRequest@POLYN446756", "S56:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN428540 (R22 in line [00926])", "S56:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429349 (R22 in line [00947],R30 in line [00947],R31 in line [00947])", "S56:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429349 (R22 in line [00947],R30 in line [00947],R31 in line [00947])", "S56:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN429349.dummymethode_00949" ]
  }, {
    "_id" : "57",
    "_lesItems" : [ "S57:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN477563", "S57:org.apache.kafka.clients.producer.internals.Sender.run@POLYN316824", "S57:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN319031", "S57:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN401089 (R32 in line [00718])", "S57:org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN389334 (R32 in line [00468],R40 in line [00468])", "S57:org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN389334.dummymethode_00469" ]
  }, {
    "_id" : "58",
    "_lesItems" : [ "S58:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN477563", "S58:org.apache.kafka.clients.producer.internals.Sender.run@POLYN316824", "S58:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN319031", "S58:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN319031", "S58:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN405097 (R32 in line [00810],R43 in line [00810])", "S58:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN405097.dummymethode_00812" ]
  }, {
    "_id" : "59",
    "_lesItems" : [ "S59:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN477563", "S59:org.apache.kafka.clients.producer.internals.Sender.run@POLYN316824", "S59:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN319031", "S59:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN319031", "S59:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN320227", "S59:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN320227", "S59:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN365076", "S59:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN360547 (R47 in line [00799])", "S59:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN387597 (R32 in line [00426],R48 in line [00426])", "S59:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN163363", "S59:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN153612", "S59:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN153612.dummymethode_00026" ]
  }, {
    "_id" : "60",
    "_lesItems" : [ "S60:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN477563", "S60:org.apache.kafka.clients.producer.internals.Sender.run@POLYN316824", "S60:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN319031", "S60:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN319031", "S60:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN320227", "S60:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN320227", "S60:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN365076", "S60:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN360547 (R47 in line [00799])", "S60:org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN391709 (R32 in line [00521],R49 in line [00521],R50 in line [00521])", "S60:org.apache.kafka.clients.producer.internals.TransactionManager.sequenceNumber@POLYN391343 (R32 in line [00510])", "S60:org.apache.kafka.clients.producer.internals.TxnPartitionMap.getOrCreate@POLYN162024", "S60:org.apache.kafka.clients.producer.internals.TxnPartitionMap.getOrCreate@POLYN162024.dummymethode_00043" ]
  }, {
    "_id" : "61",
    "_lesItems" : [ "S61:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN477563", "S61:org.apache.kafka.clients.producer.internals.Sender.run@POLYN316824", "S61:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN319031", "S61:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN319031", "S61:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN320227", "S61:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN320227", "S61:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN365076", "S61:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN360547 (R47 in line [00799])", "S61:org.apache.kafka.clients.producer.internals.TransactionManager.addInFlightBatch@POLYN392105 (R32 in line [00528],R51 in line [00528])", "S61:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN161630", "S61:java.util.Map.get@POLYN439139" ]
  }, {
    "_id" : "62",
    "_lesItems" : [ "S62:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN477563", "S62:org.apache.kafka.clients.producer.internals.Sender.run@POLYN316824", "S62:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN319031", "S62:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN319031", "S62:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN320227", "S62:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN320227", "S62:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN340969", "S62:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN396714 (R32 in line [00624],R53 in line [00624],R54 in line [00624],R55 in line [00624])", "S62:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN396119 (R32 in line [00610],R56 in line [00610])", "S62:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN386587 (R32 in line [00397],R57 in line [00397])", "S62:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN386587.dummymethode_00398" ]
  }, {
    "_id" : "63",
    "_lesItems" : [ "S63:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN477563", "S63:org.apache.kafka.clients.producer.internals.Sender.run@POLYN316824", "S63:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN319031", "S63:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN319031", "S63:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN320227", "S63:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN320227", "S63:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN340969", "S63:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN396714 (R32 in line [00624],R53 in line [00624],R54 in line [00624],R55 in line [00624])", "S63:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN396119 (R32 in line [00610],R56 in line [00610])", "S63:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN386101 (R32 in line [00386],R58 in line [00386])", "S63:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN386101.dummymethode_00388" ]
  }, {
    "_id" : "64",
    "_lesItems" : [ "S64:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN477563", "S64:org.apache.kafka.clients.producer.internals.Sender.run@POLYN316824", "S64:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN319031", "S64:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN319031", "S64:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN320227", "S64:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN320227", "S64:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN340969", "S64:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN396714 (R32 in line [00624],R53 in line [00624],R54 in line [00624],R55 in line [00624])", "S64:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN393532 (R32 in line [00557],R59 in line [00557])", "S64:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN161630", "S64:java.util.Map.get@POLYN439139" ]
  }, {
    "_id" : "65",
    "_lesItems" : [ "S65:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN477563", "S65:org.apache.kafka.clients.producer.internals.Sender.run@POLYN316824", "S65:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN319031", "S65:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN319031", "S65:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN320227", "S65:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN320227", "S65:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN400481 (R32 in line [00708],R60 in line [00708])", "S65:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN400481.dummymethode_00710" ]
  }, {
    "_id" : "66",
    "_lesItems" : [ "S66:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN558677", "S66:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN558677", "S66:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN383778 (R32 in line [00327],R76 in line [00327])", "S66:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN411824" ]
  }, {
    "_id" : "67",
    "_lesItems" : [ "S67:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN324707", "S67:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN324707", "S67:org.apache.kafka.clients.producer.internals.Sender.maybeFindCoordinatorAndRetry@POLYN328408", "S67:org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN404919 (R32 in line [00805],R118 in line [00805])", "S67:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.setRetry@POLYN421239", "S67:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.setRetry@POLYN421239.dummymethode_01228" ]
  }, {
    "_id" : "68",
    "_lesItems" : [ "S68:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN330231", "S68:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN330231", "S68:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN337663", "S68:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN395565 (R32 in line [00599],R148 in line [00599],R149 in line [00599])", "S68:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateLastAckedSequence@POLYN393824", "S68:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateLastAckedSequence@POLYN393824.dummymethode_00566" ]
  }, {
    "_id" : "69",
    "_lesItems" : [ "S69:org.apache.kafka.clients.producer.internals.TransactionManager.isPartitionAdded@POLYN387021 (R32 in line [00407])", "S69:java.util.Hashtable.contains@POLYN429268 (R61 in line [00307])", "S69:java.util.Hashtable.contains@POLYN429268.dummymethode_00312" ]
  }, {
    "_id" : "70",
    "_lesItems" : [ "S70:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN414354", "S70:java.util.Hashtable.putAll@POLYN440632 (R61 in line [00536],R62 in line [00536])", "S70:java.util.Hashtable.put@POLYN437164 (R61 in line [00471])", "S70:java.util.Hashtable.put@POLYN437164.dummymethode_00478" ]
  }, {
    "_id" : "71",
    "_lesItems" : [ "S71:java.util.Hashtable.forEach@POLYN456172 (R61 in line [00888],R366 in line [00888])", "S71:java.util.Hashtable.forEach@POLYN456172.dummymethode_00889" ]
  }, {
    "_id" : "72",
    "_lesItems" : [ "S72:java.util.Hashtable.replaceAll@POLYN457082 (R61 in line [00908],R367 in line [00908])", "S72:java.util.Hashtable.replaceAll@POLYN457082.dummymethode_00909" ]
  }, {
    "_id" : "73",
    "_lesItems" : [ "S73:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN536680", "S73:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN536680", "S73:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN552964 (R33 in line [00744])", "S73:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN552964 (R33 in line [00744])", "S73:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN198460", "S73:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN200391", "S73:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN200391", "S73:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN173527 (R35 in line [00072],R36 in line [00072],R37 in line [00072],R38 in line [00072])", "S73:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN173527.dummymethode_00075" ]
  }, {
    "_id" : "74",
    "_lesItems" : [ "S74:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN839626", "S74:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN839626", "S74:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN172743 (R35 in line [00060],R78 in line [00060],R79 in line [00060],R80 in line [00060],R81 in line [00060])", "S74:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN172743.dummymethode_00062" ]
  }, {
    "_id" : "75",
    "_lesItems" : [ "S75:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN536680", "S75:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN536680", "S75:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN552964 (R33 in line [00744])", "S75:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN552964 (R33 in line [00744])", "S75:org.apache.kafka.connect.runtime.distributed.DistributedHerder.stopServices@POLYN554301", "S75:org.apache.kafka.connect.runtime.AbstractHerder.stopServices@POLYN303802", "S75:org.apache.kafka.connect.runtime.Worker.stop@POLYN431903", "S75:org.apache.kafka.connect.runtime.Worker.stop@POLYN431903", "S75:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN506106 (R39 in line [01751])" ]
  }, {
    "_id" : "76",
    "_lesItems" : [ "S76:org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN586454 (R33 in line [01387],R119 in line [01387])", "S76:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN173154", "S76:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN173154.dummymethode_00055" ]
  }, {
    "_id" : "77",
    "_lesItems" : [ "S77:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN536680", "S77:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN536680", "S77:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN552964 (R33 in line [00744])", "S77:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN552964 (R33 in line [00744])", "S77:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN198460", "S77:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN200391", "S77:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN200391", "S77:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN173527 (R35 in line [00072],R36 in line [00072],R37 in line [00072],R38 in line [00072])", "S77:org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN175466", "S77:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN312863 (R15 in line [00558])", "S77:java.util.HashMap.remove@POLYN661426", "S77:java.util.HashMap.remove@POLYN661426.dummymethode_01064" ]
  }, {
    "_id" : "78",
    "_lesItems" : [ "S78:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN536680", "S78:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN536680", "S78:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN552964 (R33 in line [00744])", "S78:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN552964 (R33 in line [00744])", "S78:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN198460", "S78:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN200391", "S78:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN200391", "S78:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN173527 (R35 in line [00072],R36 in line [00072],R37 in line [00072],R38 in line [00072])", "S78:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN173527 (R35 in line [00072],R36 in line [00072],R37 in line [00072],R38 in line [00072])", "S78:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN173527.dummymethode_00075" ]
  }, {
    "_id" : "79",
    "_lesItems" : [ "S79:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN477563", "S79:org.apache.kafka.clients.producer.internals.Sender.run@POLYN316824", "S79:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN319031", "S79:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN319031", "S79:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN320227", "S79:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN320227", "S79:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN365076", "S79:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN360547 (R47 in line [00799])", "S79:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN387597 (R32 in line [00426],R48 in line [00426])", "S79:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN387597 (R32 in line [00426],R48 in line [00426])", "S79:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN163363", "S79:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN153612", "S79:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN153612.dummymethode_00026" ]
  }, {
    "_id" : "80",
    "_lesItems" : [ "S80:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN477563", "S80:org.apache.kafka.clients.producer.internals.Sender.run@POLYN316824", "S80:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN319031", "S80:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN319031", "S80:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN320227", "S80:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN320227", "S80:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN340969", "S80:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN396714 (R32 in line [00624],R53 in line [00624],R54 in line [00624],R55 in line [00624])", "S80:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN396119 (R32 in line [00610],R56 in line [00610])", "S80:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN386101 (R32 in line [00386],R58 in line [00386])", "S80:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN386101 (R32 in line [00386],R58 in line [00386])", "S80:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN386101.dummymethode_00388" ]
  }, {
    "_id" : "81",
    "_lesItems" : [ "S81:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN477563", "S81:org.apache.kafka.clients.producer.internals.Sender.run@POLYN316824", "S81:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN319031", "S81:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN319031", "S81:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN320227", "S81:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN320227", "S81:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN400481 (R32 in line [00708],R60 in line [00708])", "S81:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN400481 (R32 in line [00708],R60 in line [00708])", "S81:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN400481.dummymethode_00710" ]
  }, {
    "_id" : "82",
    "_lesItems" : [ "S82:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN414354", "S82:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN420464", "S82:org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN254291 (R65 in line [00389],R66 in line [00389],R67 in line [00389])", "S82:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258669" ]
  }, {
    "_id" : "83",
    "_lesItems" : [ "S83:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN414354", "S83:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN420464", "S83:org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN252986 (R65 in line [00357],R68 in line [00357])", "S83:org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN252986.dummymethode_00358" ]
  }, {
    "_id" : "84",
    "_lesItems" : [ "S84:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN414354", "S84:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN420464", "S84:org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN253410 (R65 in line [00367],R69 in line [00367])", "S84:org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN253410.dummymethode_00368" ]
  }, {
    "_id" : "85",
    "_lesItems" : [ "S85:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN243048 (R65 in line [00163])", "S85:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN243282 (R65 in line [00168],R151 in line [00175])", "S85:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258669" ]
  }, {
    "_id" : "86",
    "_lesItems" : [ "S86:org.apache.kafka.clients.consumer.MockConsumer.rebalance@POLYN239845 (R65 in line [00096],R192 in line [00096])", "S86:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN329835 (R2 in line [00273],R24 in line [00273])", "S86:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN329835.dummymethode_00277" ]
  }, {
    "_id" : "87",
    "_lesItems" : [ "S87:org.apache.kafka.clients.consumer.MockConsumer.position@POLYN252574 (R65 in line [00347])", "S87:org.apache.kafka.clients.consumer.MockConsumer.position@POLYN251874 (R65 in line [00334])", "S87:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN342225 (R2 in line [00537])", "S87:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790", "S87:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565", "S87:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565.dummymethode_00114" ]
  }, {
    "_id" : "88",
    "_lesItems" : [ "S88:org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN250054 (R65 in line [00295],R208 in line [00295],R209 in line [00295])", "S88:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258669" ]
  }, {
    "_id" : "89",
    "_lesItems" : [ "S89:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN248333 (R65 in line [00254],R219 in line [00254],R220 in line [00254])", "S89:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258669" ]
  }, {
    "_id" : "90",
    "_lesItems" : [ "S90:org.apache.kafka.clients.consumer.MockConsumer.pause@POLYN254566 (R65 in line [00395],R221 in line [00395])", "S90:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN351680 (R2 in line [00737],R163 in line [00737])", "S90:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790", "S90:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565", "S90:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565.dummymethode_00114" ]
  }, {
    "_id" : "91",
    "_lesItems" : [ "S91:org.apache.kafka.clients.consumer.MockConsumer.resume@POLYN254888 (R65 in line [00403],R222 in line [00403])", "S91:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN351831 (R2 in line [00741],R164 in line [00741])", "S91:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790", "S91:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565", "S91:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565.dummymethode_00114" ]
  }, {
    "_id" : "92",
    "_lesItems" : [ "S92:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN240247 (R65 in line [00108],R238 in line [00108])", "S92:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN242075 (R65 in line [00141],R239 in line [00141],R240 in line [00141])", "S92:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258669" ]
  }, {
    "_id" : "93",
    "_lesItems" : [ "S93:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN240454 (R65 in line [00113],R241 in line [00113],R242 in line [00113])", "S93:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258669" ]
  }, {
    "_id" : "94",
    "_lesItems" : [ "S94:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN241889 (R65 in line [00136],R243 in line [00136])", "S94:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN242075 (R65 in line [00141],R239 in line [00141],R240 in line [00141])", "S94:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258669" ]
  }, {
    "_id" : "95",
    "_lesItems" : [ "S95:org.apache.kafka.clients.consumer.MockConsumer.assign@POLYN242453 (R65 in line [00148],R284 in line [00148])", "S95:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258669" ]
  }, {
    "_id" : "96",
    "_lesItems" : [ "S96:org.apache.kafka.clients.consumer.MockConsumer.addRecord@POLYN246973 (R65 in line [00227],R285 in line [00227])", "S96:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258669" ]
  }, {
    "_id" : "97",
    "_lesItems" : [ "S97:org.apache.kafka.clients.consumer.MockConsumer.setException@POLYN247924 (R65 in line [00241],R286 in line [00241])", "S97:org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN248055 (R65 in line [00245],R287 in line [00245])", "S97:org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN248055.dummymethode_00246" ]
  }, {
    "_id" : "98",
    "_lesItems" : [ "S98:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN249155 (R65 in line [00269])", "S98:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN249280 (R65 in line [00274],R288 in line [00274])", "S98:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258669" ]
  }, {
    "_id" : "99",
    "_lesItems" : [ "S99:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN257432", "S99:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN257594 (R65 in line [00455],R317 in line [00455])", "S99:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN257594.dummymethode_00456" ]
  }, {
    "_id" : "100",
    "_lesItems" : [ "S100:org.apache.kafka.clients.consumer.MockConsumer.setOffsetsException@POLYN248187 (R65 in line [00249],R324 in line [00249])", "S100:org.apache.kafka.clients.consumer.MockConsumer.setOffsetsException@POLYN248187.dummymethode_00250" ]
  }, {
    "_id" : "101",
    "_lesItems" : [ "S101:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN248949 (R65 in line [00264],R325 in line [00264])", "S101:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN248949.dummymethode_00265" ]
  }, {
    "_id" : "102",
    "_lesItems" : [ "S102:org.apache.kafka.clients.consumer.MockConsumer.seekToBeginning@POLYN252752 (R65 in line [00352],R326 in line [00352])", "S102:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258669" ]
  }, {
    "_id" : "103",
    "_lesItems" : [ "S103:org.apache.kafka.clients.consumer.MockConsumer.seekToEnd@POLYN253176 (R65 in line [00362],R327 in line [00362])", "S103:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258669" ]
  }, {
    "_id" : "104",
    "_lesItems" : [ "S104:org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN258147 (R65 in line [00473],R328 in line [00473],R151 in line [00474])", "S104:org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN258147.dummymethode_00475" ]
  }, {
    "_id" : "105",
    "_lesItems" : [ "S105:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN558677", "S105:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN558677", "S105:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN383778 (R32 in line [00327],R76 in line [00327])", "S105:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN383778 (R32 in line [00327],R76 in line [00327])", "S105:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN411824" ]
  }, {
    "_id" : "106",
    "_lesItems" : [ "S106:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN839626", "S106:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN839626", "S106:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN172743 (R35 in line [00060],R78 in line [00060],R79 in line [00060],R80 in line [00060],R81 in line [00060])", "S106:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN172743 (R35 in line [00060],R78 in line [00060],R79 in line [00060],R80 in line [00060],R81 in line [00060])", "S106:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN172743.dummymethode_00062" ]
  }, {
    "_id" : "107",
    "_lesItems" : [ "S107:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN302829", "S107:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN302829", "S107:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readConnectorStatus@POLYN298192 (R82 in line [00563])", "S107:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readConnectorStatus@POLYN298192 (R82 in line [00563])", "S107:org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN285394 (R82 in line [00353],R83 in line [00353])", "S107:java.util.Hashtable.remove@POLYN487542" ]
  }, {
    "_id" : "108",
    "_lesItems" : [ "S108:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN302829", "S108:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN302829", "S108:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readTaskStatus@POLYN299328 (R82 in line [00589])", "S108:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readTaskStatus@POLYN299328 (R82 in line [00589])", "S108:org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN286708 (R82 in line [00374],R84 in line [00374])", "S108:org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN286708 (R82 in line [00374],R84 in line [00374])", "S108:java.io.File.delete@POLYN607400", "S108:java.io.File.delete@POLYN607400.dummymethode_00001" ]
  }, {
    "_id" : "109",
    "_lesItems" : [ "S109:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN380259", "S109:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN380259", "S109:org.apache.kafka.clients.Metadata.update@POLYN264099 (R5 in line [00263],R86 in line [00263],R87 in line [00263],R88 in line [00263],R89 in line [00263])", "S109:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN267109", "S109:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN267109", "S109:org.apache.kafka.clients.Metadata.requestUpdate@POLYN258601 (R5 in line [00145])", "S109:org.apache.kafka.clients.Metadata.requestUpdate@POLYN258601.dummymethode_00146" ]
  }, {
    "_id" : "110",
    "_lesItems" : [ "S110:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN380259", "S110:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN380259", "S110:org.apache.kafka.clients.Metadata.update@POLYN264099 (R5 in line [00263],R86 in line [00263],R87 in line [00263],R88 in line [00263],R89 in line [00263])", "S110:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN267109", "S110:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN267109", "S110:org.apache.kafka.common.requests.MetadataResponse.brokersById@POLYN232813", "S110:org.apache.kafka.common.requests.MetadataResponse.holder@POLYN232206 (R90 in line [00001])", "S110:org.apache.kafka.common.requests.MetadataResponse.Holder.Holder@POLYN240357", "S110:org.apache.kafka.common.requests.MetadataResponse.Holder.Holder@POLYN240357.dummymethode_00001" ]
  }, {
    "_id" : "111",
    "_lesItems" : [ "S111:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN270302 (R91 in line [00001],R136 in line [00001])", "S111:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN270597", "S111:org.apache.kafka.common.utils.Utils.delete@POLYN456117", "S111:org.apache.kafka.common.utils.Utils.delete@POLYN456117.dummymethode_00852" ]
  }, {
    "_id" : "112",
    "_lesItems" : [ "S112:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN270302 (R91 in line [00001],R136 in line [00001])", "S112:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN270597", "S112:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN270597", "S112:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN267295 (R91 in line [00001],R137 in line [00001])", "S112:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN267295.dummymethode_00001" ]
  }, {
    "_id" : "113",
    "_lesItems" : [ "S113:org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN266088 (R91 in line [00001])", "S113:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN261134 (R179 in line [00001])", "S113:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN261134.dummymethode_00001" ]
  }, {
    "_id" : "114",
    "_lesItems" : [ "S114:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN232690", "S114:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN232988 (R92 in line [00104],R93 in line [00104])", "S114:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN232988 (R92 in line [00104],R93 in line [00104])", "S114:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN235834", "S114:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN235834.dummymethode_00170" ]
  }, {
    "_id" : "115",
    "_lesItems" : [ "S115:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN232690", "S115:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN232988 (R92 in line [00104],R93 in line [00104])", "S115:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN232988 (R92 in line [00104],R93 in line [00104])", "S115:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN235834", "S115:org.apache.kafka.streams.processor.internals.TopologyMetadata.registerAndBuildNewTopology@POLYN261108", "S115:org.apache.kafka.streams.processor.internals.TopologyMetadata.buildAndVerifyTopology@POLYN264967", "S115:org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.rewriteTopology@POLYN498845 (R63 in line [00412])", "S115:org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.rewriteTopology@POLYN498845.dummymethode_00413" ]
  }, {
    "_id" : "116",
    "_lesItems" : [ "S116:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN232690", "S116:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN232988 (R92 in line [00104],R93 in line [00104])", "S116:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN232988 (R92 in line [00104],R93 in line [00104])", "S116:org.apache.kafka.streams.KafkaStreams.start@POLYN562589 (R19 in line [01832])", "S116:org.apache.kafka.streams.KafkaStreams.start@POLYN562589.dummymethode_01832" ]
  }, {
    "_id" : "117",
    "_lesItems" : [ "S117:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN239893 (R94 in line [00242],R95 in line [00242])", "S117:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN239893 (R94 in line [00242],R95 in line [00242])", "S117:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN239893.dummymethode_00245" ]
  }, {
    "_id" : "118",
    "_lesItems" : [ "S118:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN233515 (R94 in line [00105])", "S118:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN233515 (R94 in line [00105])", "S118:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN445198", "S118:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN441918", "S118:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN441918", "S118:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN229924 (R34 in line [00256])", "S118:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN229924 (R34 in line [00256])", "S118:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN229924.dummymethode_00258" ]
  }, {
    "_id" : "119",
    "_lesItems" : [ "S119:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN233515 (R94 in line [00105])", "S119:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN233515 (R94 in line [00105])", "S119:org.apache.kafka.connect.runtime.AbstractHerder.stopServices@POLYN303802", "S119:org.apache.kafka.connect.runtime.Worker.stop@POLYN431903", "S119:org.apache.kafka.connect.runtime.Worker.stop@POLYN431903", "S119:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN506106 (R39 in line [01751])" ]
  }, {
    "_id" : "120",
    "_lesItems" : [ "S120:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN244352 (R94 in line [00309],R114 in line [00309],R115 in line [00309])", "S120:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN173154", "S120:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN173154.dummymethode_00055" ]
  }, {
    "_id" : "121",
    "_lesItems" : [ "S121:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN241730 (R94 in line [00274],R123 in line [00274],R124 in line [00274])", "S121:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN241730.dummymethode_00276" ]
  }, {
    "_id" : "122",
    "_lesItems" : [ "S122:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN236032 (R94 in line [00161],R165 in line [00161],R166 in line [00161])", "S122:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN236032.dummymethode_00165" ]
  }, {
    "_id" : "123",
    "_lesItems" : [ "S123:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN238013 (R94 in line [00201],R167 in line [00201],R168 in line [00201],R169 in line [00201],R170 in line [00201],R171 in line [00201])", "S123:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN238013.dummymethode_00208" ]
  }, {
    "_id" : "124",
    "_lesItems" : [ "S124:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN243147 (R94 in line [00291],R172 in line [00291],R173 in line [00291])", "S124:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN243147.dummymethode_00293" ]
  }, {
    "_id" : "125",
    "_lesItems" : [ "S125:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN234432 (R94 in line [00133],R342 in line [00133])", "S125:org.apache.kafka.connect.util.Callback.onCompletion" ]
  }, {
    "_id" : "126",
    "_lesItems" : [ "S126:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN234663 (R94 in line [00138],R343 in line [00138],R344 in line [00138])", "S126:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN234663.dummymethode_00141" ]
  }, {
    "_id" : "127",
    "_lesItems" : [ "S127:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN237100 (R94 in line [00181],R345 in line [00181],R346 in line [00181],R347 in line [00181],R348 in line [00181])", "S127:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN237100.dummymethode_00186" ]
  }, {
    "_id" : "128",
    "_lesItems" : [ "S128:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN240267 (R94 in line [00251],R349 in line [00251],R350 in line [00251])", "S128:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN240267.dummymethode_00253" ]
  }, {
    "_id" : "129",
    "_lesItems" : [ "S129:org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.close@POLYN214189 (R125 in line [00335])", "S129:org.apache.kafka.connect.runtime.errors.ProcessingContext.close@POLYN194697", "S129:java.lang.Throwable.addSuppressed@POLYN399877 (R127 in line [01070],R128 in line [01070])", "S129:java.lang.Throwable.addSuppressed@POLYN399877.dummymethode_01074" ]
  }, {
    "_id" : "130",
    "_lesItems" : [ "S130:java.lang.Throwable.writeObject@POLYN397822 (R127 in line [01002],R185 in line [01002])", "S130:java.lang.Throwable.getOurStackTrace@POLYN391841 (R127 in line [00834])", "S130:java.lang.Throwable.getOurStackTrace@POLYN391841.dummymethode_00839" ]
  }, {
    "_id" : "131",
    "_lesItems" : [ "S131:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN244352 (R94 in line [00309],R114 in line [00309],R115 in line [00309])", "S131:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN244352 (R94 in line [00309],R114 in line [00309],R115 in line [00309])", "S131:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN173154", "S131:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN173154.dummymethode_00055" ]
  }, {
    "_id" : "132",
    "_lesItems" : [ "S132:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN244352 (R94 in line [00309],R114 in line [00309],R115 in line [00309])", "S132:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN244352 (R94 in line [00309],R114 in line [00309],R115 in line [00309])", "S132:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN445198", "S132:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN441918", "S132:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN441918", "S132:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN229924 (R34 in line [00256])", "S132:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN229924 (R34 in line [00256])", "S132:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN229924.dummymethode_00258" ]
  }, {
    "_id" : "133",
    "_lesItems" : [ "S133:org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN586454 (R33 in line [01387],R119 in line [01387])", "S133:org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN586454 (R33 in line [01387],R119 in line [01387])", "S133:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN173154", "S133:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN173154.dummymethode_00055" ]
  }, {
    "_id" : "134",
    "_lesItems" : [ "S134:org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN586454 (R33 in line [01387],R119 in line [01387])", "S134:org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN586454 (R33 in line [01387],R119 in line [01387])", "S134:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN445198", "S134:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN441918", "S134:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN441918", "S134:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN229924 (R34 in line [00256])", "S134:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN229924 (R34 in line [00256])", "S134:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN229924.dummymethode_00258" ]
  }, {
    "_id" : "135",
    "_lesItems" : [ "S135:org.apache.kafka.common.network.Selector.SelectorMetrics.close@POLYN474476", "S135:org.apache.kafka.common.network.Selector.SelectorMetrics.close@POLYN474476", "S135:org.apache.kafka.common.metrics.internals.IntGaugeSuite.close@POLYN199374 (R129 in line [00256])", "S135:org.apache.kafka.common.metrics.internals.IntGaugeSuite.close@POLYN199374 (R129 in line [00256])", "S135:org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN197096", "S135:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN312863 (R15 in line [00558])", "S135:java.util.HashMap.remove@POLYN661426", "S135:java.util.HashMap.remove@POLYN661426.dummymethode_01064" ]
  }, {
    "_id" : "136",
    "_lesItems" : [ "S136:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN198378 (R129 in line [00235],R227 in line [00235])", "S136:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN198378.dummymethode_00237" ]
  }, {
    "_id" : "137",
    "_lesItems" : [ "S137:org.apache.kafka.snapshot.RecordsSnapshotWriter.freeze@POLYN180163", "S137:org.apache.kafka.snapshot.RecordsSnapshotWriter.appendBatches@POLYN180594", "S137:org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN179463", "S137:org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN227639", "S137:org.apache.kafka.raft.internals.BatchAccumulator.maybeAllocateBatch@POLYN229722", "S137:org.apache.kafka.raft.internals.BatchBuilder.bytesNeeded@POLYN202557", "S137:org.apache.kafka.common.protocol.DataOutputStreamWritable.flush@POLYN169129", "S137:java.io.BufferedOutputStream.flush@POLYN172899 (R132 in line [00139])", "S137:java.io.BufferedOutputStream.flushBuffer@POLYN170568", "S137:java.io.BufferedOutputStream.write@POLYN171864 (R132 in line [00116],R133 in line [00116],R134 in line [00116],R135 in line [00116])", "S137:java.io.BufferedOutputStream.write@POLYN171864 (R132 in line [00116],R133 in line [00116],R134 in line [00116],R135 in line [00116])", "S137:java.io.BufferedOutputStream.write@POLYN171864.dummymethode_00123" ]
  }, {
    "_id" : "138",
    "_lesItems" : [ "S138:org.apache.kafka.streams.state.internals.RocksDBStore.putAll@POLYN269226", "S138:java.io.BufferedOutputStream.write@POLYN171003 (R132 in line [00093],R237 in line [00093])", "S138:java.io.BufferedOutputStream.flushBuffer@POLYN170568", "S138:java.io.BufferedOutputStream.write@POLYN171864 (R132 in line [00116],R133 in line [00116],R134 in line [00116],R135 in line [00116])", "S138:java.io.BufferedOutputStream.write@POLYN171864 (R132 in line [00116],R133 in line [00116],R134 in line [00116],R135 in line [00116])", "S138:java.io.BufferedOutputStream.write@POLYN171864.dummymethode_00123" ]
  }, {
    "_id" : "139",
    "_lesItems" : [ "S139:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN270302 (R91 in line [00001],R136 in line [00001])", "S139:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN270597", "S139:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN270597", "S139:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN267295 (R91 in line [00001],R137 in line [00001])", "S139:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN267295 (R91 in line [00001],R137 in line [00001])", "S139:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN267295.dummymethode_00001" ]
  }, {
    "_id" : "140",
    "_lesItems" : [ "S140:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN205549", "S140:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN205275 (R138 in line [00157],R139 in line [00157],R140 in line [00157])", "S140:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN154934", "S140:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN154934.dummymethode_00038" ]
  }, {
    "_id" : "141",
    "_lesItems" : [ "S141:org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN209541 (R138 in line [00256],R162 in line [00256])", "S141:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN205275 (R138 in line [00157],R139 in line [00157],R140 in line [00157])", "S141:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN154934", "S141:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN154934.dummymethode_00038" ]
  }, {
    "_id" : "142",
    "_lesItems" : [ "S142:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN210988 (R142 in line [00254],R212 in line [00254])", "S142:org.apache.kafka.streams.state.internals.NamedCache.close@POLYN213890 (R138 in line [00345])", "S142:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllCacheLevelSensors@POLYN308841 (R213 in line [00462])", "S142:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheSensorPrefix@POLYN309496", "S142:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheSensorPrefix@POLYN309496.dummymethode_00471" ]
  }, {
    "_id" : "143",
    "_lesItems" : [ "S143:org.apache.kafka.streams.state.internals.NamedCache.setListener@POLYN202678 (R138 in line [00104],R375 in line [00104])", "S143:org.apache.kafka.streams.state.internals.NamedCache.setListener@POLYN202678.dummymethode_00105" ]
  }, {
    "_id" : "144",
    "_lesItems" : [ "S144:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN205549", "S144:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN205275 (R138 in line [00157],R139 in line [00157],R140 in line [00157])", "S144:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN205275 (R138 in line [00157],R139 in line [00157],R140 in line [00157])", "S144:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN154934", "S144:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN154934.dummymethode_00038" ]
  }, {
    "_id" : "145",
    "_lesItems" : [ "S145:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN202021 (R142 in line [00075],R143 in line [00075])", "S145:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN202021.dummymethode_00077" ]
  }, {
    "_id" : "146",
    "_lesItems" : [ "S146:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN210988 (R142 in line [00254],R212 in line [00254])", "S146:java.util.Hashtable.remove@POLYN487542" ]
  }, {
    "_id" : "147",
    "_lesItems" : [ "S147:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN202021 (R142 in line [00075],R143 in line [00075])", "S147:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN202021 (R142 in line [00075],R143 in line [00075])", "S147:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN202021.dummymethode_00077" ]
  }, {
    "_id" : "148",
    "_lesItems" : [ "S148:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN202021 (R142 in line [00075],R143 in line [00075])", "S148:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN202021 (R142 in line [00075],R143 in line [00075])", "S148:org.apache.kafka.streams.state.internals.NamedCache.evict@POLYN208596 (R138 in line [00235])", "S148:org.apache.kafka.streams.state.internals.NamedCache.evict@POLYN208596.dummymethode_00237" ]
  }, {
    "_id" : "149",
    "_lesItems" : [ "S149:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN330231", "S149:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN330231", "S149:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN337663", "S149:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN395565 (R32 in line [00599],R148 in line [00599],R149 in line [00599])", "S149:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN393532 (R32 in line [00557],R59 in line [00557])", "S149:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN161630", "S149:java.util.Map.get@POLYN439139" ]
  }, {
    "_id" : "150",
    "_lesItems" : [ "S150:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN243048 (R65 in line [00163])", "S150:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN243282 (R65 in line [00168],R151 in line [00175])", "S150:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN243282 (R65 in line [00168],R151 in line [00175])", "S150:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258669" ]
  }, {
    "_id" : "151",
    "_lesItems" : [ "S151:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN243048 (R65 in line [00163])", "S151:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN243282 (R65 in line [00168],R151 in line [00175])", "S151:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN243282 (R65 in line [00168],R151 in line [00175])", "S151:org.apache.kafka.clients.consumer.MockConsumer.updateFetchPosition@POLYN258827", "S151:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN347442", "S151:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN346831 (R2 in line [00636],R12 in line [00636],R13 in line [00636])", "S151:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN333790", "S151:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565", "S151:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565.dummymethode_00114" ]
  }, {
    "_id" : "152",
    "_lesItems" : [ "S152:org.apache.kafka.common.network.Selector.connect@POLYN413731", "S152:org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415459", "S152:java.net.Socket.setSendBufferSize@POLYN504807 (R159 in line [00001],R160 in line [00001])" ]
  }, {
    "_id" : "153",
    "_lesItems" : [ "S153:org.apache.kafka.common.network.Selector.connect@POLYN413731", "S153:org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN415459", "S153:java.net.Socket.setReceiveBufferSize@POLYN507514 (R159 in line [00001],R161 in line [00001])" ]
  }, {
    "_id" : "154",
    "_lesItems" : [ "S154:java.net.Socket.Socket@POLYN479635", "S154:java.net.Socket.close@POLYN515244 (R159 in line [00001],R181 in line [00001])", "S154:java.net.Socket.close@POLYN515244 (R159 in line [00001],R181 in line [00001])", "S154:java.net.Socket.close@POLYN515244.dummymethode_00001" ]
  }, {
    "_id" : "155",
    "_lesItems" : [ "S155:java.net.Socket.setSocketImplFactory@POLYN520442 (R159 in line [00001],R365 in line [00001])", "S155:java.net.Socket.setSocketImplFactory@POLYN520442.dummymethode_00001" ]
  }, {
    "_id" : "156",
    "_lesItems" : [ "S156:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN176964 (R174 in line [00139],R175 in line [00139])", "S156:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN176964.dummymethode_00141" ]
  }, {
    "_id" : "157",
    "_lesItems" : [ "S157:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN174486 (R174 in line [00076],R193 in line [00076])", "S157:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN174486.dummymethode_00078" ]
  }, {
    "_id" : "158",
    "_lesItems" : [ "S158:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN178257 (R174 in line [00169],R358 in line [00169])", "S158:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN178257 (R174 in line [00169],R358 in line [00169])", "S158:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN178257.dummymethode_00173" ]
  }, {
    "_id" : "159",
    "_lesItems" : [ "S159:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN176964 (R174 in line [00139],R175 in line [00139])", "S159:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN176964 (R174 in line [00139],R175 in line [00139])", "S159:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN176964.dummymethode_00141" ]
  }, {
    "_id" : "160",
    "_lesItems" : [ "S160:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN174486 (R174 in line [00076],R193 in line [00076])", "S160:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN174486 (R174 in line [00076],R193 in line [00076])", "S160:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN174486.dummymethode_00078" ]
  }, {
    "_id" : "161",
    "_lesItems" : [ "S161:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN175074 (R198 in line [00093],R199 in line [00093])", "S161:org.apache.kafka.common.utils.Time.milliseconds@POLYN164769" ]
  }, {
    "_id" : "162",
    "_lesItems" : [ "S162:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN175074 (R198 in line [00093],R199 in line [00093])", "S162:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN175074 (R198 in line [00093],R199 in line [00093])", "S162:org.apache.kafka.common.utils.Time.milliseconds@POLYN164769" ]
  }, {
    "_id" : "163",
    "_lesItems" : [ "S163:org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetIfNeeded@POLYN514175", "S163:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN334902 (R2 in line [00390],R204 in line [00390],R205 in line [00390],R206 in line [00390])", "S163:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN334902 (R2 in line [00390],R204 in line [00390],R205 in line [00390],R206 in line [00390])", "S163:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN334157", "S163:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565", "S163:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN183565.dummymethode_00114" ]
  }, {
    "_id" : "164",
    "_lesItems" : [ "S164:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN432272 (R22 in line [01023],R224 in line [01023],R225 in line [01023],R226 in line [01023])", "S164:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN431974 (R22 in line [01017],R200 in line [01017],R201 in line [01017])", "S164:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN431275 (R22 in line [01004],R202 in line [01004],R203 in line [01004])", "S164:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN431275.dummymethode_01005" ]
  }, {
    "_id" : "165",
    "_lesItems" : [ "S165:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN198378 (R129 in line [00235],R227 in line [00235])", "S165:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN198378 (R129 in line [00235],R227 in line [00235])", "S165:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN198378.dummymethode_00237" ]
  }, {
    "_id" : "166",
    "_lesItems" : [ "S166:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN171814 (R254 in line [00071],R255 in line [00071])", "S166:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN171435 (R254 in line [00063],R256 in line [00063])", "S166:java.util.HashMap.remove@POLYN661426", "S166:java.util.HashMap.remove@POLYN661426.dummymethode_01064" ]
  }, {
    "_id" : "167",
    "_lesItems" : [ "S167:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN172502 (R254 in line [00084],R257 in line [00084])", "S167:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN171959 (R254 in line [00076],R258 in line [00076])", "S167:org.apache.kafka.connect.util.Table.remove@POLYN160219", "S167:org.apache.kafka.connect.util.Table.remove@POLYN160219.dummymethode_00046" ]
  }, {
    "_id" : "168",
    "_lesItems" : [ "S168:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN249155 (R65 in line [00269])", "S168:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN249280 (R65 in line [00274],R288 in line [00274])", "S168:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN249280 (R65 in line [00274],R288 in line [00274])", "S168:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN258669" ]
  } ],
  "_lesDeadlocksTypos" : [ ]
}