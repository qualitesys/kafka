{
  "_lesSequences" : [ {
    "_id" : "1",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.INVALIDATED",
      "_method" : "---java.io.BufferedReader.fill@POLYN232007.dummymethode_00138 in line [00138]",
      "_target" : "java.io.BufferedReader.markedChar",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN240134.dummymethode_00342 in line [00342]",
      "_target" : "java.io.BufferedReader.readLine@POLYN240134.i",
      "_risk" : "//QC-JAVCWE099[00342] In java.io.BufferedReader.readLine@POLYN240134[00342] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN240134.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN240134.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN240134[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedReader.readLine@POLYN240134.i",
      "_method" : "---java.io.BufferedReader.readLine@POLYN240134.dummymethode_00351 in line [00351]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : "//QC-JAVCWE099[00351] In java.io.BufferedReader.readLine@POLYN240134[00351] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.BufferedReader.readLine@POLYN240134.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN240134.dummymethode_00356 in line [00356]",
      "_target" : "java.io.BufferedReader.readLine@POLYN240134.str",
      "_risk" : "//QC-JAVCWE099[00356] In java.io.BufferedReader.readLine@POLYN240134[00356] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.BufferedReader.readLine@POLYN240134.str",
      "_method" : "---java.io.BufferedReader.readLine@POLYN240134.dummymethode_00365 in line [00365]",
      "_target" : "java.io.BufferedReader.readLine@POLYN240134.return",
      "_risk" : "//QC-JAVCWE099[00365] In java.io.BufferedReader.readLine@POLYN240134[00365] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedReader.readLine@POLYN240134.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN240134 in line [00389]",
      "_target" : "java.io.BufferedReader.readLine@POLYN243321.return",
      "_risk" : "//QC-JAVCWE099[00389] In java.io.BufferedReader.readLine@POLYN243321[00389] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "8",
      "_source" : "java.io.BufferedReader.markedChar",
      "_method" : "---java.io.BufferedReader.reset@POLYN247300.dummymethode_00515 in line [00515]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.lang.Integer.parseInt@POLYN428931.s",
      "_method" : "---java.lang.Integer.parseInt@POLYN425397 in line [00527]",
      "_target" : "java.lang.Integer.parseInt@POLYN428931.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.util.HashMap.put@POLYN622600.key",
      "_method" : "---java.util.HashMap.putVal@POLYN623123 in line [00609]",
      "_target" : "java.util.HashMap.put@POLYN622600.return",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN241828.return",
      "_method" : "---org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN241828 in line [00309]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN240745.return",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN240745.return",
      "_method" : "---org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN240745 in line [00315]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN240985.return",
      "_risk" : ""
    }, {
      "_id" : "13",
      "_source" : "java.util.HashMap.put@POLYN622600.return",
      "_method" : "---java.util.HashMap.put@POLYN622600 in line [00330]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN241828.return",
      "_risk" : ""
    }, {
      "_id" : "14",
      "_source" : "partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.CompletedFetch@POLYN545995.dummymethode_01521 in line [01521]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "15",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN531467.dummymethode_01264 in line [01264]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN531467.tp",
      "_risk" : ""
    }, {
      "_id" : "16",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN531467.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN342515 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN342515.tp",
      "_risk" : ""
    }, {
      "_id" : "17",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN342515.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN171555 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN171555.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "18",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN171555.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN622600 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN622600.key",
      "_risk" : ""
    }, {
      "_id" : "19",
      "_source" : "java.lang.Integer.parseInt@POLYN428931.return",
      "_method" : "---java.lang.Integer.parseInt@POLYN428931 in line [00081]",
      "_target" : "partition",
      "_risk" : ""
    }, {
      "_id" : "20",
      "_source" : "java.io.BufferedReader.readLine@POLYN243321.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN243321 in line [00197]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN181659.line",
      "_risk" : "//QC-JAVCWE099[00197] In org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN181659[00197] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "21",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN181659.line",
      "_method" : "---java.lang.Integer.parseInt@POLYN428931 in line [00201]",
      "_target" : "java.lang.Integer.parseInt@POLYN428931.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "2",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN240134.dummymethode_00342 in line [00342]",
      "_target" : "java.io.BufferedReader.readLine@POLYN240134.i",
      "_risk" : "//QC-JAVCWE099[00342] In java.io.BufferedReader.readLine@POLYN240134[00342] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN240134.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN240134.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN240134[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.readLine@POLYN240134.i",
      "_method" : "---java.io.BufferedReader.readLine@POLYN240134.dummymethode_00351 in line [00351]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : "//QC-JAVCWE099[00351] In java.io.BufferedReader.readLine@POLYN240134[00351] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedReader.readLine@POLYN240134.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN240134.dummymethode_00356 in line [00356]",
      "_target" : "java.io.BufferedReader.readLine@POLYN240134.str",
      "_risk" : "//QC-JAVCWE099[00356] In java.io.BufferedReader.readLine@POLYN240134[00356] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.BufferedReader.readLine@POLYN240134.str",
      "_method" : "---java.io.BufferedReader.readLine@POLYN240134.dummymethode_00365 in line [00365]",
      "_target" : "java.io.BufferedReader.readLine@POLYN240134.return",
      "_risk" : "//QC-JAVCWE099[00365] In java.io.BufferedReader.readLine@POLYN240134[00365] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.BufferedReader.readLine@POLYN240134.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN240134 in line [00389]",
      "_target" : "java.io.BufferedReader.readLine@POLYN243321.return",
      "_risk" : "//QC-JAVCWE099[00389] In java.io.BufferedReader.readLine@POLYN243321[00389] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedReader.skip@POLYN243649.n",
      "_method" : "---java.io.BufferedReader.skip@POLYN243649.dummymethode_00408 in line [00408]",
      "_target" : "java.io.BufferedReader.skip@POLYN243649.r",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.io.BufferedReader.skip@POLYN243649.r",
      "_method" : "---java.io.BufferedReader.skip@POLYN243649.dummymethode_00422 in line [00422]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.lang.Integer.parseInt@POLYN428931.s",
      "_method" : "---java.lang.Integer.parseInt@POLYN425397 in line [00527]",
      "_target" : "java.lang.Integer.parseInt@POLYN428931.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.util.HashMap.put@POLYN622600.key",
      "_method" : "---java.util.HashMap.putVal@POLYN623123 in line [00609]",
      "_target" : "java.util.HashMap.put@POLYN622600.return",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN241828.return",
      "_method" : "---org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN241828 in line [00309]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN240745.return",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN240745.return",
      "_method" : "---org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN240745 in line [00315]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN240985.return",
      "_risk" : ""
    }, {
      "_id" : "13",
      "_source" : "java.util.HashMap.put@POLYN622600.return",
      "_method" : "---java.util.HashMap.put@POLYN622600 in line [00330]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN241828.return",
      "_risk" : ""
    }, {
      "_id" : "14",
      "_source" : "partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.CompletedFetch@POLYN545995.dummymethode_01521 in line [01521]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "15",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN531467.dummymethode_01264 in line [01264]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN531467.tp",
      "_risk" : ""
    }, {
      "_id" : "16",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN531467.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN342515 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN342515.tp",
      "_risk" : ""
    }, {
      "_id" : "17",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN342515.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN171555 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN171555.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "18",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN171555.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN622600 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN622600.key",
      "_risk" : ""
    }, {
      "_id" : "19",
      "_source" : "java.lang.Integer.parseInt@POLYN428931.return",
      "_method" : "---java.lang.Integer.parseInt@POLYN428931 in line [00081]",
      "_target" : "partition",
      "_risk" : ""
    }, {
      "_id" : "20",
      "_source" : "java.io.BufferedReader.readLine@POLYN243321.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN243321 in line [00197]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN181659.line",
      "_risk" : "//QC-JAVCWE099[00197] In org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN181659[00197] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "21",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN181659.line",
      "_method" : "---java.lang.Integer.parseInt@POLYN428931 in line [00201]",
      "_target" : "java.lang.Integer.parseInt@POLYN428931.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "3",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN240134.dummymethode_00342 in line [00342]",
      "_target" : "java.io.BufferedReader.readLine@POLYN240134.i",
      "_risk" : "//QC-JAVCWE099[00342] In java.io.BufferedReader.readLine@POLYN240134[00342] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN240134.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN240134.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN240134[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.readLine@POLYN240134.i",
      "_method" : "---java.io.BufferedReader.readLine@POLYN240134.dummymethode_00351 in line [00351]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : "//QC-JAVCWE099[00351] In java.io.BufferedReader.readLine@POLYN240134[00351] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedReader.readLine@POLYN240134.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN240134.dummymethode_00356 in line [00356]",
      "_target" : "java.io.BufferedReader.readLine@POLYN240134.str",
      "_risk" : "//QC-JAVCWE099[00356] In java.io.BufferedReader.readLine@POLYN240134[00356] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.BufferedReader.readLine@POLYN240134.str",
      "_method" : "---java.io.BufferedReader.readLine@POLYN240134.dummymethode_00365 in line [00365]",
      "_target" : "java.io.BufferedReader.readLine@POLYN240134.return",
      "_risk" : "//QC-JAVCWE099[00365] In java.io.BufferedReader.readLine@POLYN240134[00365] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.BufferedReader.readLine@POLYN240134.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN240134 in line [00389]",
      "_target" : "java.io.BufferedReader.readLine@POLYN243321.return",
      "_risk" : "//QC-JAVCWE099[00389] In java.io.BufferedReader.readLine@POLYN243321[00389] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedReader.skip@POLYN243649.r",
      "_method" : "---java.io.BufferedReader.skip@POLYN243649.dummymethode_00422 in line [00422]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "0",
      "_method" : "---java.io.BufferedReader.skip@POLYN243649.dummymethode_00423 in line [00423]",
      "_target" : "java.io.BufferedReader.skip@POLYN243649.r",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.lang.Integer.parseInt@POLYN428931.s",
      "_method" : "---java.lang.Integer.parseInt@POLYN425397 in line [00527]",
      "_target" : "java.lang.Integer.parseInt@POLYN428931.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "org.apache.kafka.raft.RaftConfig.parseVoterId@POLYN184713.return",
      "_method" : "---org.apache.kafka.raft.RaftConfig.parseVoterId@POLYN184713 in line [00218]",
      "_target" : "org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN185065.voterId",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN185065.voterId",
      "_method" : "---org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN185065.dummymethode_00235 in line [00235]",
      "_target" : "org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN185065.cibledummy_00235",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "java.lang.Integer.parseInt@POLYN428931.return",
      "_method" : "---java.lang.Integer.parseInt@POLYN428931 in line [00203]",
      "_target" : "org.apache.kafka.raft.RaftConfig.parseVoterId@POLYN184713.return",
      "_risk" : ""
    }, {
      "_id" : "13",
      "_source" : "java.io.BufferedReader.readLine@POLYN243321.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN243321 in line [00197]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN181659.line",
      "_risk" : "//QC-JAVCWE099[00197] In org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN181659[00197] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "14",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN181659.line",
      "_method" : "---java.lang.Integer.parseInt@POLYN428931 in line [00201]",
      "_target" : "java.lang.Integer.parseInt@POLYN428931.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "4",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN366740.s",
      "_method" : "---java.io.PrintStream.write@POLYN361549 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN361549.s",
      "_risk" : "//QC-JAVCWE099[00669] In java.io.PrintStream.print@POLYN366740[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.valueOf@POLYN913642.return",
      "_method" : "---java.lang.String.valueOf@POLYN913642 in line [00821]",
      "_target" : "java.io.PrintStream.println@POLYN371710.s",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.println@POLYN371710.s",
      "_method" : "---java.io.PrintStream.print@POLYN366740 in line [00823]",
      "_target" : "java.io.PrintStream.print@POLYN366740.s",
      "_risk" : "//QC-JAVCWE099[00823] In java.io.PrintStream.println@POLYN371710[00823] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.PrintStream.write@POLYN361549.s",
      "_method" : "---java.io.Writer.write@POLYN193020 in line [00525]",
      "_target" : "java.io.Writer.write@POLYN193020.str",
      "_risk" : "//QC-JAVCWE099[00525] In java.io.PrintStream.write@POLYN361549[00525] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.Writer.write@POLYN193020.str",
      "_method" : "---java.io.Writer.write@POLYN193613 in line [00157]",
      "_target" : "java.io.Writer.write@POLYN193020.cibledummy_00157",
      "_risk" : "//QC-JAVCWE099[00157] In java.io.Writer.write@POLYN193020[00157] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.lang.Double.toString@POLYN376532.d",
      "_method" : "---java.lang.Double.toString@POLYN376532.dummymethode_00196 in line [00196]",
      "_target" : "java.lang.Double.toString@POLYN376532.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.String.valueOf@POLYN913642.d",
      "_method" : "---java.lang.Double.toString@POLYN376532 in line [00001]",
      "_target" : "java.lang.Double.toString@POLYN376532.d",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.lang.Double.toString@POLYN376532.return",
      "_method" : "---java.lang.Double.toString@POLYN376532 in line [00001]",
      "_target" : "java.lang.String.valueOf@POLYN913642.return",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.util.HashMap.Node@POLYN607814.value",
      "_method" : "---java.util.HashMap.Node.Node@POLYN607814.dummymethode_00287 in line [00287]",
      "_target" : "java.util.HashMap.value",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.util.HashMap.value",
      "_method" : "---java.util.HashMap.Node.getValue@POLYN608349.dummymethode_00292 in line [00292]",
      "_target" : "java.util.HashMap.getValue@POLYN608349.return",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "java.util.HashMap.getValue@POLYN608349.return",
      "_method" : "---java.util.HashMap.getValue@POLYN608349 in line [00266]",
      "_target" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN202008.valueRaw",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN202008.valueRaw",
      "_method" : "---java.lang.String.valueOf@POLYN913642 in line [00272]",
      "_target" : "java.lang.String.valueOf@POLYN913642.d",
      "_risk" : ""
    } ]
  }, {
    "_id" : "5",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN366740.s",
      "_method" : "---java.io.PrintStream.write@POLYN361549 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN361549.s",
      "_risk" : "//QC-JAVCWE099[00669] In java.io.PrintStream.print@POLYN366740[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.valueOf@POLYN913642.return",
      "_method" : "---java.lang.String.valueOf@POLYN913642 in line [00821]",
      "_target" : "java.io.PrintStream.println@POLYN371710.s",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.println@POLYN371710.s",
      "_method" : "---java.io.PrintStream.print@POLYN366740 in line [00823]",
      "_target" : "java.io.PrintStream.print@POLYN366740.s",
      "_risk" : "//QC-JAVCWE099[00823] In java.io.PrintStream.println@POLYN371710[00823] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.PrintStream.write@POLYN361549.s",
      "_method" : "---java.io.Writer.write@POLYN193020 in line [00525]",
      "_target" : "java.io.Writer.write@POLYN193020.str",
      "_risk" : "//QC-JAVCWE099[00525] In java.io.PrintStream.write@POLYN361549[00525] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.Writer.write@POLYN193020.str",
      "_method" : "---java.io.Writer.write@POLYN193613 in line [00157]",
      "_target" : "java.io.Writer.write@POLYN193020.cibledummy_00157",
      "_risk" : "//QC-JAVCWE099[00157] In java.io.Writer.write@POLYN193020[00157] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.lang.Double.toString@POLYN376532.d",
      "_method" : "---java.lang.Double.toString@POLYN376532.dummymethode_00196 in line [00196]",
      "_target" : "java.lang.Double.toString@POLYN376532.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.String.valueOf@POLYN913642.d",
      "_method" : "---java.lang.Double.toString@POLYN376532 in line [00001]",
      "_target" : "java.lang.Double.toString@POLYN376532.d",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.lang.Double.toString@POLYN376532.return",
      "_method" : "---java.lang.Double.toString@POLYN376532 in line [00001]",
      "_target" : "java.lang.String.valueOf@POLYN913642.return",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.util.HashMap.value",
      "_method" : "---java.util.HashMap.Node.getValue@POLYN608349.dummymethode_00292 in line [00292]",
      "_target" : "java.util.HashMap.getValue@POLYN608349.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.util.HashMap.setValue@POLYN608768.newValue",
      "_method" : "---java.util.HashMap.Node.setValue@POLYN608768.dummymethode_00301 in line [00301]",
      "_target" : "java.util.HashMap.value",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "java.util.HashMap.getValue@POLYN608349.return",
      "_method" : "---java.util.HashMap.getValue@POLYN608349 in line [00266]",
      "_target" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN202008.valueRaw",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN202008.valueRaw",
      "_method" : "---java.lang.String.valueOf@POLYN913642 in line [00272]",
      "_target" : "java.lang.String.valueOf@POLYN913642.d",
      "_risk" : ""
    } ]
  }, {
    "_id" : "6",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN366740.s",
      "_method" : "---java.io.PrintStream.write@POLYN361549 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN361549.s",
      "_risk" : "//QC-JAVCWE099[00669] In java.io.PrintStream.print@POLYN366740[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.valueOf@POLYN913642.return",
      "_method" : "---java.lang.String.valueOf@POLYN913642 in line [00821]",
      "_target" : "java.io.PrintStream.println@POLYN371710.s",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.println@POLYN371710.s",
      "_method" : "---java.io.PrintStream.print@POLYN366740 in line [00823]",
      "_target" : "java.io.PrintStream.print@POLYN366740.s",
      "_risk" : "//QC-JAVCWE099[00823] In java.io.PrintStream.println@POLYN371710[00823] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.PrintStream.write@POLYN361549.s",
      "_method" : "---java.io.Writer.write@POLYN193020 in line [00525]",
      "_target" : "java.io.Writer.write@POLYN193020.str",
      "_risk" : "//QC-JAVCWE099[00525] In java.io.PrintStream.write@POLYN361549[00525] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.Writer.write@POLYN193020.str",
      "_method" : "---java.io.Writer.write@POLYN193613 in line [00157]",
      "_target" : "java.io.Writer.write@POLYN193020.cibledummy_00157",
      "_risk" : "//QC-JAVCWE099[00157] In java.io.Writer.write@POLYN193020[00157] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.lang.Double.toString@POLYN376532.d",
      "_method" : "---java.lang.Double.toString@POLYN376532.dummymethode_00196 in line [00196]",
      "_target" : "java.lang.Double.toString@POLYN376532.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.String.valueOf@POLYN913642.d",
      "_method" : "---java.lang.Double.toString@POLYN376532 in line [00001]",
      "_target" : "java.lang.Double.toString@POLYN376532.d",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.lang.Double.toString@POLYN376532.return",
      "_method" : "---java.lang.Double.toString@POLYN376532 in line [00001]",
      "_target" : "java.lang.String.valueOf@POLYN913642.return",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.util.HashMap.value",
      "_method" : "---java.util.HashMap.Node.getValue@POLYN608349.dummymethode_00292 in line [00292]",
      "_target" : "java.util.HashMap.getValue@POLYN608349.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.util.HashMap.getValue@POLYN608349.return",
      "_method" : "---java.util.HashMap.getValue@POLYN608349 in line [00266]",
      "_target" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN202008.valueRaw",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN202008.valueRaw",
      "_method" : "---java.lang.String.valueOf@POLYN913642 in line [00272]",
      "_target" : "java.lang.String.valueOf@POLYN913642.d",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "java.lang.Long.MAX_VALUE",
      "_method" : "---org.apache.kafka.streams.state.internals.InMemoryTimeOrderedKeyValueBuffer.evictWhile@POLYN242759.dummymethode_00438 in line [00438]",
      "_target" : "java.util.HashMap.value",
      "_risk" : ""
    } ]
  }, {
    "_id" : "7",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "1",
      "_method" : "---java.io.InputStream.read@POLYN247470.dummymethode_00177 in line [00177]",
      "_target" : "java.io.InputStream.read@POLYN247470.i",
      "_risk" : "//QC-JAVCWE099[00177] In java.io.InputStream.read@POLYN247470[00177] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.InputStream.read@POLYN247470.i",
      "_method" : "---java.io.InputStream.read@POLYN247470.dummymethode_00188 in line [00188]",
      "_target" : "java.io.InputStream.read@POLYN247470.return",
      "_risk" : "//QC-JAVCWE099[00188] In java.io.InputStream.read@POLYN247470[00188] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874018.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN874018 in line [02938]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN886936.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.read@POLYN805664.return",
      "_method" : "---java.io.ObjectInputStream.read@POLYN805664 in line [03091]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN894583.v",
      "_risk" : "//QC-JAVCWE099[03091] In java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN894583[03091] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN894583.v",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN894583.dummymethode_03095 in line [03095]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN894583.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.InputStream.read@POLYN247470.return",
      "_method" : "---java.io.InputStream.read@POLYN247470 in line [02598]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.peekb",
      "_risk" : "//QC-JAVCWE099[02598] In java.io.ObjectInputStream.PeekInputStream.peek@POLYN873611[02598] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.peekb",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN874018.dummymethode_02605 in line [02605]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874018.v",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874018.v",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN874018.dummymethode_02607 in line [02607]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874018.return",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN886936.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN886936 in line [00893]",
      "_target" : "java.io.ObjectInputStream.read@POLYN805664.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN894583.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN894583 in line [00979]",
      "_target" : "java.io.ObjectInputStream.readUnsignedByte@POLYN808427.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "8",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN910735.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN910735 in line [03183]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN899478.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.toString@POLYN237372.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN237372 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN910735.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readString@POLYN840838.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN840838 in line [01963]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN846147.name",
      "_risk" : "//QC-JAVCWZ099[01963] In java.io.ObjectInputStream.readEnum@POLYN846147[01963] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN812677.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN812677 in line [01863]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN840838.str",
      "_risk" : "//QC-JAVCWZ099[01863] In java.io.ObjectInputStream.readString@POLYN840838[01863] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readString@POLYN840838.str",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN840838.dummymethode_01876 in line [01876]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN840838.return",
      "_risk" : "//QC-JAVCWZ099[01876] In java.io.ObjectInputStream.readString@POLYN840838[01876] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN899478.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN899478 in line [01124]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN812677.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.StringBuilder.toString@POLYN237372.0",
      "_method" : "---java.lang.StringBuilder.toString@POLYN237372.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN237372.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "9",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN910735.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN910735 in line [03183]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN899478.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.toString@POLYN237372.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN237372 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN910735.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readString@POLYN840838.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN840838 in line [01963]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN846147.name",
      "_risk" : "//QC-JAVCWZ099[01963] In java.io.ObjectInputStream.readEnum@POLYN846147[01963] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN812677.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN812677 in line [01863]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN840838.str",
      "_risk" : "//QC-JAVCWZ099[01863] In java.io.ObjectInputStream.readString@POLYN840838[01863] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readString@POLYN840838.str",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN840838.dummymethode_01876 in line [01876]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN840838.return",
      "_risk" : "//QC-JAVCWZ099[01876] In java.io.ObjectInputStream.readString@POLYN840838[01876] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN899478.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN899478 in line [01124]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN812677.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.StringBuilder.toString@POLYN237372.count",
      "_method" : "---java.lang.StringBuilder.toString@POLYN237372.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN237372.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "10",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN910735.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN910735 in line [03183]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN899478.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.toString@POLYN237372.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN237372 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN910735.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readString@POLYN840838.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN840838 in line [01963]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN846147.name",
      "_risk" : "//QC-JAVCWZ099[01963] In java.io.ObjectInputStream.readEnum@POLYN846147[01963] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN812677.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN812677 in line [01863]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN840838.str",
      "_risk" : "//QC-JAVCWZ099[01863] In java.io.ObjectInputStream.readString@POLYN840838[01863] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readString@POLYN840838.str",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN840838.dummymethode_01876 in line [01876]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN840838.return",
      "_risk" : "//QC-JAVCWZ099[01876] In java.io.ObjectInputStream.readString@POLYN840838[01876] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN899478.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN899478 in line [01124]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN812677.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.StringBuilder.toString@POLYN237372.value",
      "_method" : "---java.lang.StringBuilder.toString@POLYN237372.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN237372.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "11",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN604059.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN604059.dummymethode_01533 in line [01533]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN604059.cibledummy_01533",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN567594.obj",
      "_method" : "---java.io.ObjectOutputStream.replaceObject@POLYN567594.dummymethode_00588 in line [00588]",
      "_target" : "java.io.ObjectOutputStream.replaceObject@POLYN567594.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN567594.return",
      "_method" : "---java.io.ObjectOutputStream.replaceObject@POLYN567594 in line [01144]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583813.rep",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583813.rep",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583813.dummymethode_01149 in line [01149]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583813.obj",
      "_risk" : "//QC-JAVCWZ099[01149] In java.io.ObjectOutputStream.writeObject0@POLYN583813[01149] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583813.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN599584 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN599584.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN583813[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN599584.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN602216 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN602216.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN599584[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN602216.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN604059 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN604059.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "12",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteObject@POLYN562199.dummymethode_00434 in line [00434]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteObject@POLYN562199.ctx",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593844.objs[i]",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583813 in line [01378]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583813.obj",
      "_risk" : "//QC-JAVCWZ099[01378] In java.io.ObjectOutputStream.writeArray@POLYN593844[01378] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN601024.dummymethode_01452 in line [01452]",
      "_target" : "java.io.ObjectOutputStream.writeExternalData@POLYN601024.oldContext",
      "_risk" : "//QC-JAVCWZ099[01452] In java.io.ObjectOutputStream.writeExternalData@POLYN601024[01452] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN601024.oldContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN601024.dummymethode_01464 in line [01464]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01464] In java.io.ObjectOutputStream.writeExternalData@POLYN601024[01464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583813.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN599584 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN599584.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN583813[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN599584.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN602216 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN602216.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN599584[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN602216.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN602216.dummymethode_01494 in line [01494]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01494] In java.io.ObjectOutputStream.writeSerialData@POLYN602216[01494] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "13",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteObject@POLYN562199.dummymethode_00434 in line [00434]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteObject@POLYN562199.ctx",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN601024.dummymethode_01452 in line [01452]",
      "_target" : "java.io.ObjectOutputStream.writeExternalData@POLYN601024.oldContext",
      "_risk" : "//QC-JAVCWZ099[01452] In java.io.ObjectOutputStream.writeExternalData@POLYN601024[01452] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN601024.oldContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN601024.dummymethode_01464 in line [01464]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01464] In java.io.ObjectOutputStream.writeExternalData@POLYN601024[01464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583813.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN599584 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN599584.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN583813[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN599584.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN602216 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN602216.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN599584[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN602216.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN602216.dummymethode_01494 in line [01494]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01494] In java.io.ObjectOutputStream.writeSerialData@POLYN602216[01494] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN561543.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583813 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583813.obj",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN561543[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "14",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeLong@POLYN574171.val",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN574171 in line [00808]",
      "_target" : "java.io.ObjectOutputStream.writeLong@POLYN574171.cibledummy_00808",
      "_risk" : "//QC-JAVCWE099[00808] In java.io.ObjectOutputStream.writeLong@POLYN574171[00808] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN244249.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN245793 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN245793.timestamp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN245793.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN247135 in line [00428]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN247135.timestamp",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN247135.timestamp",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN574171 in line [00468]",
      "_target" : "java.io.ObjectOutputStream.writeLong@POLYN574171.val",
      "_risk" : "//QC-JAVCWE099[00468] In org.apache.kafka.common.record.LegacyRecord.write@POLYN247135[00468] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN243168.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN244249 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN244249.timestamp",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "timestampType==TimestampType.LOG_APPEND_TIME?logAppendTime_maxTimestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN296245.dummymethode_00424 in line [00424]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN296245.timestamp",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN296245.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN243168 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN243168.timestamp",
      "_risk" : ""
    } ]
  }, {
    "_id" : "15",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN233648.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN233648.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN233648.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN233648[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.getBytes@POLYN829340.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN829340.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN829340.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN414204.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN414204 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN230452.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN230452.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN233648 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN233648.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN230452[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslServer.process@POLYN187161.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN829340 in line [00165]",
      "_target" : "java.lang.String.getBytes@POLYN829340.charsetName",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.lang.String.getBytes@POLYN829340.return",
      "_method" : "---java.lang.String.getBytes@POLYN829340 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN414204.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "16",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN233648.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN233648.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN233648.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN233648[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.getBytes@POLYN829340.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN829340.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN829340.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN414204.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN414204 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN230452.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN230452.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN233648 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN233648.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN230452[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.security.scram.internals.ScramFormatter.toBytes@POLYN184934.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN829340 in line [00170]",
      "_target" : "java.lang.String.getBytes@POLYN829340.charsetName",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.lang.String.getBytes@POLYN829340.return",
      "_method" : "---java.lang.String.getBytes@POLYN829340 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN414204.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "17",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN233648.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN233648.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN233648.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN233648[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.getBytes@POLYN829340.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN829340.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN829340.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN414204.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN414204 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN230452.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN230452.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN233648 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN233648.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN230452[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN414204.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN829340 in line [00172]",
      "_target" : "java.lang.String.getBytes@POLYN829340.charsetName",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.lang.String.getBytes@POLYN829340.return",
      "_method" : "---java.lang.String.getBytes@POLYN829340 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN414204.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "18",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN233648.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN233648.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN233648.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN233648[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.getBytes@POLYN829340.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN829340.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN829340.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN414204.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN414204 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN230452.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN230452.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN233648 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN233648.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN230452[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.lang.String.getBytes@POLYN829340.return",
      "_method" : "---java.lang.String.getBytes@POLYN829340 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN414204.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.toBytes@POLYN191451.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN829340 in line [00206]",
      "_target" : "java.lang.String.getBytes@POLYN829340.charsetName",
      "_risk" : ""
    } ]
  }, {
    "_id" : "19",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readArray@POLYN841805.false",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN826010 in line [01908]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN826010.unshared",
      "_risk" : "//QC-JAVCWZ099[01908] In java.io.ObjectInputStream.readArray@POLYN841805[01908] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN834276.unshared",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN835737 in line [01710]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN834276.descriptor",
      "_risk" : "//QC-JAVCWZ099[01710] In java.io.ObjectInputStream.readClassDesc@POLYN834276[01710] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN834276.descriptor",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN834276.dummymethode_01722 in line [01722]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN834276.return",
      "_risk" : "//QC-JAVCWZ099[01722] In java.io.ObjectInputStream.readClassDesc@POLYN834276[01722] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN826010.unshared",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN834276 in line [01522]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN834276.unshared",
      "_risk" : "//QC-JAVCWZ099[01522] In java.io.ObjectInputStream.readObject0@POLYN826010[01522] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN834276.return",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN834276 in line [02000]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN848397.desc",
      "_risk" : "//QC-JAVCWZ099[02000] In java.io.ObjectInputStream.readOrdinaryObject@POLYN848397[02000] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN848397.desc",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN853538 in line [02027]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN848397.cibledummy_02027",
      "_risk" : "//QC-JAVCWZ099[02027] In java.io.ObjectInputStream.readOrdinaryObject@POLYN848397[02027] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "20",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN834276.unshared",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN835737 in line [01710]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN834276.descriptor",
      "_risk" : "//QC-JAVCWZ099[01710] In java.io.ObjectInputStream.readClassDesc@POLYN834276[01710] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN834276.descriptor",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN834276.dummymethode_01722 in line [01722]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN834276.return",
      "_risk" : "//QC-JAVCWZ099[01722] In java.io.ObjectInputStream.readClassDesc@POLYN834276[01722] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN826010.unshared",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN834276 in line [01522]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN834276.unshared",
      "_risk" : "//QC-JAVCWZ099[01522] In java.io.ObjectInputStream.readObject0@POLYN826010[01522] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN834276.return",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN834276 in line [02000]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN848397.desc",
      "_risk" : "//QC-JAVCWZ099[02000] In java.io.ObjectInputStream.readOrdinaryObject@POLYN848397[02000] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN848397.desc",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN853538 in line [02027]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN848397.cibledummy_02027",
      "_risk" : "//QC-JAVCWZ099[02027] In java.io.ObjectInputStream.readOrdinaryObject@POLYN848397[02027] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.skipCustomData@POLYN856712.false",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN826010 in line [02211]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN826010.unshared",
      "_risk" : "//QC-JAVCWZ099[02211] In java.io.ObjectInputStream.skipCustomData@POLYN856712[02211] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "21",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593844.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN589330 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN589330.desc",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN593844[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN589330.desc",
      "_method" : "---java.io.ObjectOutputStream.writeNonProxyDesc@POLYN591821 in line [01231]",
      "_target" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN591821.desc",
      "_risk" : "//QC-JAVCWZ099[01231] In java.io.ObjectOutputStream.writeClassDesc@POLYN589330[01231] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN591821.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDescriptor@POLYN570064 in line [01282]",
      "_target" : "java.io.ObjectOutputStream.writeClassDescriptor@POLYN570064.desc",
      "_risk" : "//QC-JAVCWZ099[01282] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN591821[01282] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.lang.Object.getClass@POLYN287723.return",
      "_method" : "---java.lang.Object.getClass@POLYN287723 in line [01129]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583813.cl",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583813.cl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583813.dummymethode_01134 in line [01134]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583813.desc",
      "_risk" : "//QC-JAVCWZ099[01134] In java.io.ObjectOutputStream.writeObject0@POLYN583813[01134] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583813.desc",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN593844 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN593844.desc",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN583813[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "22",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593844.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN589330 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN589330.desc",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN593844[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN589330.desc",
      "_method" : "---java.io.ObjectOutputStream.writeNonProxyDesc@POLYN591821 in line [01231]",
      "_target" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN591821.desc",
      "_risk" : "//QC-JAVCWZ099[01231] In java.io.ObjectOutputStream.writeClassDesc@POLYN589330[01231] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN591821.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDescriptor@POLYN570064 in line [01282]",
      "_target" : "java.io.ObjectOutputStream.writeClassDescriptor@POLYN570064.desc",
      "_risk" : "//QC-JAVCWZ099[01282] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN591821[01282] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583813.cl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583813.dummymethode_01134 in line [01134]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583813.desc",
      "_risk" : "//QC-JAVCWZ099[01134] In java.io.ObjectOutputStream.writeObject0@POLYN583813[01134] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583813.repCl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583813.dummymethode_01141 in line [01141]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583813.cl",
      "_risk" : "//QC-JAVCWZ099[01141] In java.io.ObjectOutputStream.writeObject0@POLYN583813[01141] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583813.desc",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN593844 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN593844.desc",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN583813[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "23",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.format@POLYN377905.l",
      "_method" : "---java.lang.String.format@POLYN907701 in line [01027]",
      "_target" : "java.lang.String.format@POLYN907701.l",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN351263.x",
      "_method" : "---java.io.PrintWriter.print@POLYN346508 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN346508.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN351263[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN907701.l",
      "_method" : "---java.lang.String.format@POLYN907701.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN907701.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN907701.return",
      "_method" : "---java.lang.String.format@POLYN907701 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN151557.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN151557.data",
      "_method" : "---java.io.PrintWriter.println@POLYN351263 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN351263.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN151557[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "24",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.format@POLYN361488.l",
      "_method" : "---java.lang.String.format@POLYN907701 in line [00964]",
      "_target" : "java.lang.String.format@POLYN907701.l",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN351263.x",
      "_method" : "---java.io.PrintWriter.print@POLYN346508 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN346508.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN351263[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN907701.l",
      "_method" : "---java.lang.String.format@POLYN907701.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN907701.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN907701.return",
      "_method" : "---java.lang.String.format@POLYN907701 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN151557.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN151557.data",
      "_method" : "---java.io.PrintWriter.println@POLYN351263 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN351263.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN151557[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "25",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN351263.x",
      "_method" : "---java.io.PrintWriter.print@POLYN346508 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN346508.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN351263[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN907701.l",
      "_method" : "---java.lang.String.format@POLYN907701.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN907701.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslServer.jsonErrorResponse@POLYN190316.\"%s",
      "_method" : "---java.lang.String.format@POLYN907701 in line [00208]",
      "_target" : "java.lang.String.format@POLYN907701.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN907701.return",
      "_method" : "---java.lang.String.format@POLYN907701 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN151557.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN151557.data",
      "_method" : "---java.io.PrintWriter.println@POLYN351263 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN351263.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN151557[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "26",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN351263.x",
      "_method" : "---java.io.PrintWriter.print@POLYN346508 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN346508.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN351263[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN907701.l",
      "_method" : "---java.lang.String.format@POLYN907701.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN907701.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslServer.jsonErrorResponse@POLYN190316.\"%s}\"",
      "_method" : "---java.lang.String.format@POLYN907701 in line [00212]",
      "_target" : "java.lang.String.format@POLYN907701.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN907701.return",
      "_method" : "---java.lang.String.format@POLYN907701 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN151557.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN151557.data",
      "_method" : "---java.io.PrintWriter.println@POLYN351263 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN351263.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN151557[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "27",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN351263.x",
      "_method" : "---java.io.PrintWriter.print@POLYN346508 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN346508.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN351263[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN907701.l",
      "_method" : "---java.lang.String.format@POLYN907701.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN907701.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.controller.QuorumController.Builder.build@POLYN426400.\"Node%d_\"",
      "_method" : "---java.lang.String.format@POLYN907701 in line [00293]",
      "_target" : "java.lang.String.format@POLYN907701.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN907701.return",
      "_method" : "---java.lang.String.format@POLYN907701 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN151557.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN151557.data",
      "_method" : "---java.io.PrintWriter.println@POLYN351263 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN351263.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN151557[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "28",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN351263.x",
      "_method" : "---java.io.PrintWriter.print@POLYN346508 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN346508.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN351263[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN907701.l",
      "_method" : "---java.lang.String.format@POLYN907701.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN907701.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN907701.return",
      "_method" : "---java.lang.String.format@POLYN907701 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN151557.data",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN151557.data",
      "_method" : "---java.io.PrintWriter.println@POLYN351263 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN351263.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN151557[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.agent.AgentClient.Builder.target@POLYN195128.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN907701 in line [00096]",
      "_target" : "java.lang.String.format@POLYN907701.l",
      "_risk" : ""
    } ]
  }, {
    "_id" : "29",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN351263.x",
      "_method" : "---java.io.PrintWriter.print@POLYN346508 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN346508.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN351263[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN907701.l",
      "_method" : "---java.lang.String.format@POLYN907701.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN907701.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN907701.return",
      "_method" : "---java.lang.String.format@POLYN907701 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN151557.data",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN151557.data",
      "_method" : "---java.io.PrintWriter.println@POLYN351263 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN351263.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN151557[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.agent.WorkerManager.Worker.toString@POLYN243246.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN907701 in line [00314]",
      "_target" : "java.lang.String.format@POLYN907701.l",
      "_risk" : ""
    } ]
  }, {
    "_id" : "30",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN351263.x",
      "_method" : "---java.io.PrintWriter.print@POLYN346508 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN346508.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN351263[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN907701.l",
      "_method" : "---java.lang.String.format@POLYN907701.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN907701.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN907701.return",
      "_method" : "---java.lang.String.format@POLYN907701 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN151557.data",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN151557.data",
      "_method" : "---java.io.PrintWriter.println@POLYN351263 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN351263.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN151557[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.coordinator.CoordinatorClient.Builder.target@POLYN235313.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN907701 in line [00112]",
      "_target" : "java.lang.String.format@POLYN907701.l",
      "_risk" : ""
    } ]
  }, {
    "_id" : "31",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.InputStream.read@POLYN247470.0",
      "_method" : "---java.io.InputStream.read@POLYN247470.dummymethode_00168 in line [00168]",
      "_target" : "java.io.InputStream.read@POLYN247470.return",
      "_risk" : "//QC-JAVCWE099[00168] In java.io.InputStream.read@POLYN247470[00168] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN456615.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN247470 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN247470.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN456615[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.InputStream.read@POLYN247470.return",
      "_method" : "---java.io.InputStream.read@POLYN247470 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN456615.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN456615[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN456615.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN456615.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN456615.currentPosition",
      "_risk" : ""
    } ]
  }, {
    "_id" : "32",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.InputStream.read@POLYN247470.-1",
      "_method" : "---java.io.InputStream.read@POLYN247470.dummymethode_00173 in line [00173]",
      "_target" : "java.io.InputStream.read@POLYN247470.return",
      "_risk" : "//QC-JAVCWE099[00173] In java.io.InputStream.read@POLYN247470[00173] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN456615.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN247470 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN247470.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN456615[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.InputStream.read@POLYN247470.return",
      "_method" : "---java.io.InputStream.read@POLYN247470 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN456615.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN456615[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN456615.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN456615.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN456615.currentPosition",
      "_risk" : ""
    } ]
  }, {
    "_id" : "33",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.writeTo@POLYN180823.buffer",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN456615 in line [00182]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN456615.destinationBuffer",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN456615.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN247470 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN247470.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN456615[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN456615.destinationBuffer",
      "_method" : "---java.io.InputStream.read@POLYN247470 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN456615.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN456615[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN456615.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN456615.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN456615.currentPosition",
      "_risk" : ""
    } ]
  }, {
    "_id" : "34",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.curContext",
      "_method" : "---java.io.ObjectInputStream.defaultReadObject@POLYN792584.dummymethode_00545 in line [00545]",
      "_target" : "java.io.ObjectInputStream.defaultReadObject@POLYN792584.ctx",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.curContext",
      "_method" : "---java.io.ObjectInputStream.readExternalData@POLYN851611.dummymethode_02065 in line [02065]",
      "_target" : "java.io.ObjectInputStream.readExternalData@POLYN851611.oldContext",
      "_risk" : "//QC-JAVCWZ099[02065] In java.io.ObjectInputStream.readExternalData@POLYN851611[02065] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readExternalData@POLYN851611.oldContext",
      "_method" : "---java.io.ObjectInputStream.readExternalData@POLYN851611.dummymethode_02094 in line [02094]",
      "_target" : "java.io.ObjectInputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[02094] In java.io.ObjectInputStream.readExternalData@POLYN851611[02094] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readSerialData@POLYN853538.slotDesc",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN853538.dummymethode_02133 in line [02133]",
      "_target" : "java.io.ObjectInputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[02133] In java.io.ObjectInputStream.readSerialData@POLYN853538[02133] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "35",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN636386.s",
      "_method" : "---java.io.ObjectOutputStream.writeBytes@POLYN575023 in line [02190]",
      "_target" : "java.io.ObjectOutputStream.writeBytes@POLYN575023.str",
      "_risk" : "//QC-JAVCWZ099[02190] In java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN636386[02190] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeBytes@POLYN575023.str",
      "_method" : "---java.io.ObjectOutputStream.writeBytes@POLYN575023 in line [00841]",
      "_target" : "java.io.ObjectOutputStream.writeBytes@POLYN575023.cibledummy_00841",
      "_risk" : "//QC-JAVCWZ099[00841] In java.io.ObjectOutputStream.writeBytes@POLYN575023[00841] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN593069.str",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN636386 in line [01309]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN636386.s",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeTypeString@POLYN580461.str",
      "_method" : "---java.io.ObjectOutputStream.writeString@POLYN593069 in line [01030]",
      "_target" : "java.io.ObjectOutputStream.writeString@POLYN593069.str",
      "_risk" : "//QC-JAVCWZ099[01030] In java.io.ObjectOutputStream.writeTypeString@POLYN580461[01030] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "36",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN366276.s",
      "_method" : "---java.io.PrintStream.write@POLYN360631 in line [00653]",
      "_target" : "java.io.PrintStream.write@POLYN360631.buf",
      "_risk" : "//QC-JAVCWZ099[00653] In java.io.PrintStream.print@POLYN366276[00653] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.println@POLYN370731.x",
      "_method" : "---java.io.PrintStream.print@POLYN366276 in line [00792]",
      "_target" : "java.io.PrintStream.print@POLYN366276.s",
      "_risk" : "//QC-JAVCWZ099[00792] In java.io.PrintStream.println@POLYN370731[00792] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.write@POLYN360631.buf",
      "_method" : "---java.io.Writer.write@POLYN192355 in line [00503]",
      "_target" : "java.io.Writer.write@POLYN192355.cbuf",
      "_risk" : "//QC-JAVCWZ099[00503] In java.io.PrintStream.write@POLYN360631[00503] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.Writer.write@POLYN192355.cbuf",
      "_method" : "---java.io.Writer.write@POLYN192355.dummymethode_00127 in line [00127]",
      "_target" : "java.io.Writer.write@POLYN192355.cibledummy_00127",
      "_risk" : "//QC-JAVCWZ099[00127] In java.io.Writer.write@POLYN192355[00127] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "37",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.InputStream.read@POLYN244311.b",
      "_method" : "---java.io.InputStream.read@POLYN244311.dummymethode_00102 in line [00102]",
      "_target" : "java.io.InputStream.read@POLYN244311.return",
      "_risk" : "//QC-JAVCWE099[00102] In java.io.InputStream.read@POLYN244311[00102] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN300868.return",
      "_method" : "---org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN300868 in line [00289]",
      "_target" : "org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN302550.read",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN300868.netReadBuffer",
      "_method" : "---java.io.InputStream.read@POLYN244311 in line [00226]",
      "_target" : "java.io.InputStream.read@POLYN244311.b",
      "_risk" : "//QC-JAVCWE099[00226] In org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN300868[00226] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.InputStream.read@POLYN244311.return",
      "_method" : "---java.io.InputStream.read@POLYN244311 in line [00226]",
      "_target" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN300868.return",
      "_risk" : "//QC-JAVCWE099[00226] In org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN300868[00226] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "38",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.accepted@POLYN241487.HttpStatus.ACCEPTED",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN239286 in line [00273]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN239286.status",
      "_risk" : "//QC-JAVCWE080[00273] In org.springframework.http.ResponseEntity.accepted@POLYN241487[00273] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN239286.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN239286 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN239891.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN239891[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN239286.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN239286.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN239286.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN239286[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN239891.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN239891 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "39",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.badRequest@POLYN241958.HttpStatus.BAD_REQUEST",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN239286 in line [00291]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN239286.status",
      "_risk" : "//QC-JAVCWE080[00291] In org.springframework.http.ResponseEntity.badRequest@POLYN241958[00291] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN239286.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN239286 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN239891.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN239891[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN239286.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN239286.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN239286.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN239286[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN239891.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN239891 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "40",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.noContent@POLYN241730.HttpStatus.NO_CONTENT",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN239286 in line [00282]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN239286.status",
      "_risk" : "//QC-JAVCWE080[00282] In org.springframework.http.ResponseEntity.noContent@POLYN241730[00282] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN239286.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN239286 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN239891.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN239891[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN239286.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN239286.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN239286.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN239286[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN239891.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN239891 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "41",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.notFound@POLYN242201.HttpStatus.NOT_FOUND",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN239286 in line [00300]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN239286.status",
      "_risk" : "//QC-JAVCWE080[00300] In org.springframework.http.ResponseEntity.notFound@POLYN242201[00300] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN239286.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN239286 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN239891.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN239891[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN239286.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN239286.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN239286.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN239286[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN239891.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN239891 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "42",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN239286.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN239286 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN239891.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN239891[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN239286.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN239286.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN239286.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN239286[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.unprocessableEntity@POLYN242435.HttpStatus.UNPROCESSABLE_ENTITY",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN239286 in line [00310]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN239286.status",
      "_risk" : "//QC-JAVCWE080[00310] In org.springframework.http.ResponseEntity.unprocessableEntity@POLYN242435[00310] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN239891.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN239891 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "43",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN234975.cbuf",
      "_method" : "---java.io.Reader.read@POLYN185413 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN234975.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN234975[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN234975.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN234975 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN238181.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN238181[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN238181.n",
      "_method" : "---java.io.BufferedReader.read@POLYN238181.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN238181.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN238181[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "44",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN234975.len",
      "_method" : "---java.io.Reader.read@POLYN185413 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN234975.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN234975[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN234975.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN234975 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN238181.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN238181[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN238181.n",
      "_method" : "---java.io.BufferedReader.read@POLYN238181.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN238181.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN238181[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "45",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN234975.off",
      "_method" : "---java.io.Reader.read@POLYN185413 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN234975.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN234975[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN234975.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN234975 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN238181.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN238181[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN238181.n",
      "_method" : "---java.io.BufferedReader.read@POLYN238181.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN238181.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN238181[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "46",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Reader.read@POLYN185413.return",
      "_method" : "---java.io.Reader.read@POLYN185413 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN234975.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN234975[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN234975.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN234975 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN238181.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN238181[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN238181.n",
      "_method" : "---java.io.BufferedReader.read@POLYN238181.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN238181.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN238181[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "47",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN234975.-1",
      "_method" : "---java.io.BufferedReader.read1@POLYN234975.dummymethode_00214 in line [00214]",
      "_target" : "java.io.BufferedReader.read1@POLYN234975.return",
      "_risk" : "//QC-JAVCWZ099[00214] In java.io.BufferedReader.read1@POLYN234975[00214] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN234975.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN234975 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN238181.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN238181[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN238181.n",
      "_method" : "---java.io.BufferedReader.read@POLYN238181.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN238181.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN238181[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "48",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN861982.return",
      "_method" : "---java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN861982 in line [00591]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN794027.getField",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN794027.return",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN794027 in line [00592]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN794027.cibledummy_00592",
      "_risk" : "//QC-JAVCWZ099[00592] In java.io.ObjectInputStream.readFields@POLYN794027[00592] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN794027.getField",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN794027.dummymethode_00603 in line [00603]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN794027.return",
      "_risk" : "//QC-JAVCWZ099[00603] In java.io.ObjectInputStream.readFields@POLYN794027[00603] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "49",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN794027.curDesc",
      "_method" : "---java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN861982 in line [00591]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN794027.getField",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN794027.return",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN794027 in line [00592]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN794027.cibledummy_00592",
      "_risk" : "//QC-JAVCWZ099[00592] In java.io.ObjectInputStream.readFields@POLYN794027[00592] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN794027.getField",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN794027.dummymethode_00603 in line [00603]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN794027.return",
      "_risk" : "//QC-JAVCWZ099[00603] In java.io.ObjectInputStream.readFields@POLYN794027[00603] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "50",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readClassDescriptor@POLYN805237.desc",
      "_method" : "---java.io.ObjectInputStream.readClassDescriptor@POLYN805237.dummymethode_00883 in line [00883]",
      "_target" : "java.io.ObjectInputStream.readClassDescriptor@POLYN805237.return",
      "_risk" : "//QC-JAVCWZ099[00883] In java.io.ObjectInputStream.readClassDescriptor@POLYN805237[00883] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClassDescriptor@POLYN805237.return",
      "_method" : "---java.io.ObjectInputStream.readClassDescriptor@POLYN805237 in line [01815]",
      "_target" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN838567.readDesc",
      "_risk" : "//QC-JAVCWZ099[01815] In java.io.ObjectInputStream.readNonProxyDesc@POLYN838567[01815] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN838567.readDesc",
      "_method" : "---java.io.ObjectInputStream.readNonProxyDesc@POLYN838567.dummymethode_01843 in line [01843]",
      "_target" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN838567.cibledummy_01843",
      "_risk" : "//QC-JAVCWZ099[01843] In java.io.ObjectInputStream.readNonProxyDesc@POLYN838567[01843] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "51",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN349511.s",
      "_method" : "---java.io.PrintWriter.write@POLYN344484 in line [00587]",
      "_target" : "java.io.PrintWriter.write@POLYN344484.buf",
      "_risk" : "//QC-JAVCWZ099[00587] In java.io.PrintWriter.print@POLYN349511[00587] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN354035.x",
      "_method" : "---java.io.PrintWriter.print@POLYN349511 in line [00725]",
      "_target" : "java.io.PrintWriter.print@POLYN349511.s",
      "_risk" : "//QC-JAVCWZ099[00725] In java.io.PrintWriter.println@POLYN354035[00725] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintWriter.write@POLYN344484.buf",
      "_method" : "---java.io.PrintWriter.write@POLYN344484.dummymethode_00443 in line [00443]",
      "_target" : "java.io.PrintWriter.write@POLYN344484.cibledummy_00443",
      "_risk" : "//QC-JAVCWZ099[00443] In java.io.PrintWriter.write@POLYN344484[00443] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "52",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Reader.read@POLYN184150.return",
      "_method" : "---java.io.Reader.read@POLYN184150 in line [00100]",
      "_target" : "java.io.Reader.read@POLYN183158.n",
      "_risk" : "//QC-JAVCWZ099[00100] In java.io.Reader.read@POLYN183158[00100] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Reader.read@POLYN183158.n",
      "_method" : "---java.io.Reader.read@POLYN183158.dummymethode_00102 in line [00102]",
      "_target" : "java.io.Reader.read@POLYN183158.cibledummy_00102",
      "_risk" : "//QC-JAVCWZ099[00102] In java.io.Reader.read@POLYN183158[00102] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.Reader.read@POLYN184150.-1",
      "_method" : "---java.io.Reader.read@POLYN184150.dummymethode_00122 in line [00122]",
      "_target" : "java.io.Reader.read@POLYN184150.return",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.Reader.read@POLYN184150[00122] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "53",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.ServerSocket.accept@POLYN319290.(SocketImpl)null",
      "_method" : "---java.net.ServerSocket.accept@POLYN319290.dummymethode_00468 in line [00468]",
      "_target" : "java.net.ServerSocket.accept@POLYN319290.s",
      "_risk" : "//QC-JAVCWZ099[00468] In java.net.ServerSocket.accept@POLYN319290[00468] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.accept@POLYN319290.s",
      "_method" : "---java.net.ServerSocket.accept@POLYN319290.dummymethode_00470 in line [00470]",
      "_target" : "java.net.ServerSocket.accept@POLYN319290.return",
      "_risk" : "//QC-JAVCWZ099[00470] In java.net.ServerSocket.accept@POLYN319290[00470] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.net.ServerSocket.accept@POLYN319290.return",
      "_method" : "---java.net.ServerSocket.accept@POLYN319290 in line [00501]",
      "_target" : "java.net.ServerSocket.implAccept@POLYN320234.cibledummy_00501",
      "_risk" : "//QC-JAVCWZ099[00501] In java.net.ServerSocket.implAccept@POLYN320234[00501] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "54",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN239286.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN239286 in line [00273]",
      "_target" : "org.springframework.http.ResponseEntity.accepted@POLYN241487.return",
      "_risk" : "//QC-JAVCWE080[00273] In org.springframework.http.ResponseEntity.accepted@POLYN241487[00273] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN239891.HttpStatus.OK",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN239286 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN239286.status",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN239891[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN239286.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN239286.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN239286.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN239286[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "55",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedInputStream.read@POLYN245956.nread",
      "_method" : "---java.io.BufferedInputStream.read@POLYN245956.dummymethode_00348 in line [00348]",
      "_target" : "java.io.BufferedInputStream.read@POLYN245956.n",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.BufferedInputStream.read@POLYN245956[00348] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedInputStream.read@POLYN245956.n",
      "_method" : "---java.io.BufferedInputStream.read@POLYN245956.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedInputStream.read@POLYN245956.return",
      "_risk" : "//QC-JAVCWZ099[00350] In java.io.BufferedInputStream.read@POLYN245956[00350] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "56",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN160758.count",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN162054 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN162054.len",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN160758[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.write@POLYN162054.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN162054.dummymethode_00129 in line [00129]",
      "_target" : "java.io.BufferedOutputStream.count",
      "_risk" : "//QC-JAVCWZ099[00129] In java.io.BufferedOutputStream.write@POLYN162054[00129] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "57",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN162054.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN162054.dummymethode_00129 in line [00129]",
      "_target" : "java.io.BufferedOutputStream.count",
      "_risk" : "//QC-JAVCWZ099[00129] In java.io.BufferedOutputStream.write@POLYN162054[00129] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN359845.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN162054 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN162054.len",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN359845[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "58",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN160758.buf",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN162054 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN162054.b",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN160758[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.write@POLYN162054.b",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN162054 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN162054.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN162054[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "59",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN162054.b",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN162054 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN162054.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN162054[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN359845.buf",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN162054 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN162054.b",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN359845[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "60",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN160758.0",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN162054 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN162054.off",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN160758[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.write@POLYN162054.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN162054 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN162054.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN162054[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "61",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN162054.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN162054 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN162054.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN162054[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN359845.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN162054 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN162054.off",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN359845[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "62",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Writer.writeBuffer",
      "_method" : "---java.io.Writer.write@POLYN193613.dummymethode_00187 in line [00187]",
      "_target" : "java.io.Writer.write@POLYN193613.cbuf",
      "_risk" : "//QC-JAVCWZ099[00187] In java.io.Writer.write@POLYN193613[00187] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN193613.cbuf",
      "_method" : "---java.io.Writer.write@POLYN192779 in line [00192]",
      "_target" : "java.io.Writer.write@POLYN192779.cbuf",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.Writer.write@POLYN193613[00192] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "63",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.write@POLYN344798.len",
      "_method" : "---java.io.Writer.write@POLYN193613 in line [00456]",
      "_target" : "java.io.Writer.write@POLYN193613.len",
      "_risk" : "//QC-JAVCWZ099[00456] In java.io.PrintWriter.write@POLYN344798[00456] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN193613.len",
      "_method" : "---java.io.Writer.write@POLYN192779 in line [00192]",
      "_target" : "java.io.Writer.write@POLYN192779.len",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.Writer.write@POLYN193613[00192] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "64",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN183805.off",
      "_method" : "---java.io.BufferedWriter.write@POLYN183805.dummymethode_00192 in line [00192]",
      "_target" : "java.io.BufferedWriter.write@POLYN183805.b",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.BufferedWriter.write@POLYN183805[00192] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN183805.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN183805.dummymethode_00195 in line [00195]",
      "_target" : "java.io.BufferedWriter.write@POLYN183805.cibledummy_00195",
      "_risk" : "//QC-JAVCWZ099[00195] In java.io.BufferedWriter.write@POLYN183805[00195] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "65",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN183805.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN183805.dummymethode_00195 in line [00195]",
      "_target" : "java.io.BufferedWriter.write@POLYN183805.cibledummy_00195",
      "_risk" : "//QC-JAVCWZ099[00195] In java.io.BufferedWriter.write@POLYN183805[00195] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN183805.d",
      "_method" : "---java.io.BufferedWriter.write@POLYN183805.dummymethode_00196 in line [00196]",
      "_target" : "java.io.BufferedWriter.write@POLYN183805.b",
      "_risk" : "//QC-JAVCWZ099[00196] In java.io.BufferedWriter.write@POLYN183805[00196] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "66",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN186139.off",
      "_method" : "---java.io.BufferedWriter.write@POLYN186139.dummymethode_00223 in line [00223]",
      "_target" : "java.io.BufferedWriter.write@POLYN186139.b",
      "_risk" : "//QC-JAVCWZ099[00223] In java.io.BufferedWriter.write@POLYN186139[00223] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN186139.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN186139.dummymethode_00226 in line [00226]",
      "_target" : "java.io.BufferedWriter.write@POLYN186139.cibledummy_00226",
      "_risk" : "//QC-JAVCWZ099[00226] In java.io.BufferedWriter.write@POLYN186139[00226] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "67",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN186139.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN186139.dummymethode_00226 in line [00226]",
      "_target" : "java.io.BufferedWriter.write@POLYN186139.cibledummy_00226",
      "_risk" : "//QC-JAVCWZ099[00226] In java.io.BufferedWriter.write@POLYN186139[00226] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN186139.d",
      "_method" : "---java.io.BufferedWriter.write@POLYN186139.dummymethode_00227 in line [00227]",
      "_target" : "java.io.BufferedWriter.write@POLYN186139.b",
      "_risk" : "//QC-JAVCWZ099[00227] In java.io.BufferedWriter.write@POLYN186139[00227] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "68",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "null",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN846147.dummymethode_01964 in line [01964]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN846147.result",
      "_risk" : "//QC-JAVCWE099[01964] In java.io.ObjectInputStream.readEnum@POLYN846147[01964] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN846147.result",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN846147.dummymethode_01983 in line [01983]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN846147.return",
      "_risk" : "//QC-JAVCWE099[01983] In java.io.ObjectInputStream.readEnum@POLYN846147[01983] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "69",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN846147.en",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN846147.dummymethode_01970 in line [01970]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN846147.result",
      "_risk" : "//QC-JAVCWZ099[01970] In java.io.ObjectInputStream.readEnum@POLYN846147[01970] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN846147.result",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN846147.dummymethode_01983 in line [01983]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN846147.return",
      "_risk" : "//QC-JAVCWZ099[01983] In java.io.ObjectInputStream.readEnum@POLYN846147[01983] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "70",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN835737.\"null class\"",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN835737.dummymethode_01759 in line [01759]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN835737.resolveEx",
      "_risk" : "//QC-JAVCWZ099[01759] In java.io.ObjectInputStream.readProxyDesc@POLYN835737[01759] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN835737.resolveEx",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN835737.dummymethode_01786 in line [01786]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN835737.cibledummy_01786",
      "_risk" : "//QC-JAVCWZ099[01786] In java.io.ObjectInputStream.readProxyDesc@POLYN835737[01786] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "71",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN835737.ex",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN835737.dummymethode_01775 in line [01775]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN835737.resolveEx",
      "_risk" : "//QC-JAVCWZ099[01775] In java.io.ObjectInputStream.readProxyDesc@POLYN835737[01775] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN835737.resolveEx",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN835737.dummymethode_01786 in line [01786]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN835737.cibledummy_01786",
      "_risk" : "//QC-JAVCWZ099[01786] In java.io.ObjectInputStream.readProxyDesc@POLYN835737[01786] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "72",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN848397.obj",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN853538 in line [02027]",
      "_target" : "java.io.ObjectInputStream.readSerialData@POLYN853538.obj",
      "_risk" : "//QC-JAVCWZ099[02027] In java.io.ObjectInputStream.readOrdinaryObject@POLYN848397[02027] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readSerialData@POLYN853538.obj",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN853538.dummymethode_02136 in line [02136]",
      "_target" : "java.io.ObjectInputStream.readSerialData@POLYN853538.cibledummy_02136",
      "_risk" : "//QC-JAVCWZ099[02136] In java.io.ObjectInputStream.readSerialData@POLYN853538[02136] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "73",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "objs.length",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN593844.dummymethode_01364 in line [01364]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN593844.len",
      "_risk" : "//QC-JAVCWE099[01364] In java.io.ObjectOutputStream.writeArray@POLYN593844[01364] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593844.len",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [01365]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN593844.cibledummy_01365",
      "_risk" : "//QC-JAVCWE099[01365] In java.io.ObjectOutputStream.writeArray@POLYN593844[01365] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "74",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.reset@POLYN564615.TC_RESET",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [00501]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_risk" : "//QC-JAVCWZ099[00501] In java.io.ObjectOutputStream.reset@POLYN564615[00501] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573051[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "75",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593844.TC_ARRAY",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [01321]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_risk" : "//QC-JAVCWZ099[01321] In java.io.ObjectOutputStream.writeArray@POLYN593844[01321] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573051[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "76",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573051[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClass@POLYN588830.TC_CLASS",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [01212]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_risk" : "//QC-JAVCWZ099[01212] In java.io.ObjectOutputStream.writeClass@POLYN588830[01212] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "77",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573051[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeEnum@POLYN598744.TC_ENUM",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [01401]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_risk" : "//QC-JAVCWZ099[01401] In java.io.ObjectOutputStream.writeEnum@POLYN598744[01401] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "78",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573051[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN601024.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [01461]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_risk" : "//QC-JAVCWZ099[01461] In java.io.ObjectOutputStream.writeExternalData@POLYN601024[01461] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "79",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573051[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN606467.TC_EXCEPTION",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [01576]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_risk" : "//QC-JAVCWZ099[01576] In java.io.ObjectOutputStream.writeFatalException@POLYN606467[01576] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "80",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573051[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeHandle@POLYN588547.TC_REFERENCE",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [01204]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_risk" : "//QC-JAVCWZ099[01204] In java.io.ObjectOutputStream.writeHandle@POLYN588547[01204] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "81",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573051[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN591821.TC_CLASSDESC",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [01275]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_risk" : "//QC-JAVCWZ099[01275] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN591821[01275] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "82",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573051[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN591821.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [01292]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_risk" : "//QC-JAVCWZ099[01292] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN591821[01292] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "83",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573051[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNull@POLYN588382.TC_NULL",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [01197]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_risk" : "//QC-JAVCWZ099[01197] In java.io.ObjectOutputStream.writeNull@POLYN588382[01197] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "84",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573051[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN599584.TC_OBJECT",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [01426]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_risk" : "//QC-JAVCWZ099[01426] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN599584[01426] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "85",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573051[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN590319.TC_PROXYCLASSDESC",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [01247]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_risk" : "//QC-JAVCWZ099[01247] In java.io.ObjectOutputStream.writeProxyDesc@POLYN590319[01247] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "86",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573051[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN590319.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [01263]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_risk" : "//QC-JAVCWZ099[01263] In java.io.ObjectOutputStream.writeProxyDesc@POLYN590319[01263] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "87",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573051[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN602216.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [01498]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_risk" : "//QC-JAVCWZ099[01498] In java.io.ObjectOutputStream.writeSerialData@POLYN602216[01498] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "88",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573051[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN593069.TC_STRING",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [01305]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_risk" : "//QC-JAVCWZ099[01305] In java.io.ObjectOutputStream.writeString@POLYN593069[01305] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "89",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN573051[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN593069.TC_LONGSTRING",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN573051 in line [01308]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN573051.val",
      "_risk" : "//QC-JAVCWZ099[01308] In java.io.ObjectOutputStream.writeString@POLYN593069[01308] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "90",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeChar@POLYN621299.v",
      "_method" : "---java.io.ObjectOutputStream.writeChar@POLYN573611 in line [01925]",
      "_target" : "java.io.ObjectOutputStream.writeChar@POLYN573611.val",
      "_risk" : "//QC-JAVCWZ099[01925] In java.io.ObjectOutputStream.BlockDataOutputStream.writeChar@POLYN621299[01925] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeChar@POLYN573611.val",
      "_method" : "---java.io.ObjectOutputStream.writeChar@POLYN573611 in line [00786]",
      "_target" : "java.io.ObjectOutputStream.writeChar@POLYN573611.cibledummy_00786",
      "_risk" : "//QC-JAVCWZ099[00786] In java.io.ObjectOutputStream.writeChar@POLYN573611[00786] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "91",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593844.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN589330 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN589330.unshared",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN593844[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN589330.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN590319 in line [01229]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN590319.unshared",
      "_risk" : "//QC-JAVCWZ099[01229] In java.io.ObjectOutputStream.writeClassDesc@POLYN589330[01229] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "92",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN589330.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN590319 in line [01229]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN590319.unshared",
      "_risk" : "//QC-JAVCWZ099[01229] In java.io.ObjectOutputStream.writeClassDesc@POLYN589330[01229] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN599584.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN589330 in line [01427]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN589330.unshared",
      "_risk" : "//QC-JAVCWZ099[01427] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN599584[01427] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "93",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeDouble@POLYN623507.v",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN574731 in line [01970]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN574731.val",
      "_risk" : "//QC-JAVCWZ099[01970] In java.io.ObjectOutputStream.BlockDataOutputStream.writeDouble@POLYN623507[01970] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN574731.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN574731 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN574731.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN574731[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "94",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN574731.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN574731 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN574731.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN574731[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.protocol.DataOutputStreamWritable.writeDouble@POLYN157173.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN574731 in line [00074]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN574731.val",
      "_risk" : "//QC-JAVCWE099[00074] In org.apache.kafka.common.protocol.DataOutputStreamWritable.writeDouble@POLYN157173[00074] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "95",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN574731.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN574731 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN574731.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN574731[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeDouble@POLYN232787.value",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN574731 in line [00376]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN574731.val",
      "_risk" : "//QC-JAVCWE099[00376] In org.apache.kafka.common.utils.ByteUtils.writeDouble@POLYN232787[00376] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "96",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN606467.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN606467.dummymethode_01577 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN606467.cibledummy_01577",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN606467[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN559325.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN606467 in line [00351]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN606467.ex",
      "_risk" : "//QC-JAVCWZ099[00351] In java.io.ObjectOutputStream.writeObject@POLYN559325[00351] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "97",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN606467.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN606467.dummymethode_01577 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN606467.cibledummy_01577",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN606467[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN561543.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN606467 in line [00418]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN606467.ex",
      "_risk" : "//QC-JAVCWZ099[00418] In java.io.ObjectOutputStream.writeUnshared@POLYN561543[00418] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "98",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeFloat@POLYN622639.v",
      "_method" : "---java.io.ObjectOutputStream.writeFloat@POLYN574451 in line [01952]",
      "_target" : "java.io.ObjectOutputStream.writeFloat@POLYN574451.val",
      "_risk" : "//QC-JAVCWZ099[01952] In java.io.ObjectOutputStream.BlockDataOutputStream.writeFloat@POLYN622639[01952] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeFloat@POLYN574451.val",
      "_method" : "---java.io.ObjectOutputStream.writeFloat@POLYN574451 in line [00819]",
      "_target" : "java.io.ObjectOutputStream.writeFloat@POLYN574451.cibledummy_00819",
      "_risk" : "//QC-JAVCWZ099[00819] In java.io.ObjectOutputStream.writeFloat@POLYN574451[00819] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "99",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeInt@POLYN622205.v",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [01943]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_risk" : "//QC-JAVCWZ099[01943] In java.io.ObjectOutputStream.BlockDataOutputStream.writeInt@POLYN622205[01943] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573891[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "100",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593844.ia.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [01329]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_risk" : "//QC-JAVCWZ099[01329] In java.io.ObjectOutputStream.writeArray@POLYN593844[01329] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573891[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "101",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593844.ba.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [01333]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_risk" : "//QC-JAVCWZ099[01333] In java.io.ObjectOutputStream.writeArray@POLYN593844[01333] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573891[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "102",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593844.ja.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [01337]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_risk" : "//QC-JAVCWZ099[01337] In java.io.ObjectOutputStream.writeArray@POLYN593844[01337] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573891[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "103",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593844.fa.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [01341]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_risk" : "//QC-JAVCWZ099[01341] In java.io.ObjectOutputStream.writeArray@POLYN593844[01341] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573891[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "104",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593844.da.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [01345]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_risk" : "//QC-JAVCWZ099[01345] In java.io.ObjectOutputStream.writeArray@POLYN593844[01345] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573891[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "105",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593844.sa.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [01349]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_risk" : "//QC-JAVCWZ099[01349] In java.io.ObjectOutputStream.writeArray@POLYN593844[01349] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573891[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "106",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593844.ca.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [01353]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_risk" : "//QC-JAVCWZ099[01353] In java.io.ObjectOutputStream.writeArray@POLYN593844[01353] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573891[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "107",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593844.za.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [01357]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_risk" : "//QC-JAVCWZ099[01357] In java.io.ObjectOutputStream.writeArray@POLYN593844[01357] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573891[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "108",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573891[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN590319.ifaces.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [01252]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_risk" : "//QC-JAVCWZ099[01252] In java.io.ObjectOutputStream.writeProxyDesc@POLYN590319[01252] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "109",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573891[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.writeObject@POLYN237917.count",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00464]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_risk" : "//QC-JAVCWZ099[00464] In java.lang.StringBuilder.writeObject@POLYN237917[00464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "110",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573891[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.writeObject@POLYN670522.size",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [01359]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_risk" : "//QC-JAVCWZ099[01359] In java.util.HashMap.writeObject@POLYN670522[01359] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "111",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573891[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN464197.table.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [01221]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_risk" : "//QC-JAVCWZ099[01221] In java.util.Hashtable.writeHashtable@POLYN464197[01221] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "112",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573891[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN464197.count",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [01223]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_risk" : "//QC-JAVCWZ099[01223] In java.util.Hashtable.writeHashtable@POLYN464197[01223] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "113",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573891[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.protocol.DataOutputStreamWritable.writeInt@POLYN156599.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00056]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_risk" : "//QC-JAVCWE099[00056] In org.apache.kafka.common.protocol.DataOutputStreamWritable.writeInt@POLYN156599[00056] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "114",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573891[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.AbstractLegacyRecordBatch.writeHeader@POLYN220279.size",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00276]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_risk" : "//QC-JAVCWE099[00276] In org.apache.kafka.common.record.AbstractLegacyRecordBatch.writeHeader@POLYN220279[00276] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "115",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573891[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN167968.Serdes.ListSerde.NULL_ENTRY_VALUE",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00124]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_risk" : "//QC-JAVCWE099[00124] In org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN167968[00124] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "116",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573891[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN167968.bytes.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00129]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_risk" : "//QC-JAVCWE099[00129] In org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN167968[00129] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "117",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573891[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serializeNullIndexList@POLYN167027.nullIndex",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00103]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_risk" : "//QC-JAVCWE099[00103] In org.apache.kafka.common.serialization.ListSerializer.serializeNullIndexList@POLYN167027[00103] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "118",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573891[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN225533.usedVersion",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00149]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_risk" : "//QC-JAVCWE099[00149] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN225533[00149] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "119",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573891[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN225533.commonlySupportedVersion",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00159]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_risk" : "//QC-JAVCWE099[00159] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN225533[00159] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "120",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573891[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN225533.out",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00160]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_risk" : "//QC-JAVCWE099[00160] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN225533[00160] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "121",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573891[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN225533.errCode",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00168]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_risk" : "//QC-JAVCWE099[00168] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN225533[00168] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "122",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573891[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.writeTaskIdTo@POLYN159221.0",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00045]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573891.val",
      "_risk" : "//QC-JAVCWE099[00045] In org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.writeTaskIdTo@POLYN159221[00045] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "123",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583813.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeClass@POLYN588830 in line [01120]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583813.cibledummy_01120",
      "_risk" : "//QC-JAVCWZ099[01120] In java.io.ObjectOutputStream.writeObject0@POLYN583813[01120] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN559325.false",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583813 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583813.unshared",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN559325[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "124",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583813.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeClass@POLYN588830 in line [01120]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583813.cibledummy_01120",
      "_risk" : "//QC-JAVCWZ099[01120] In java.io.ObjectOutputStream.writeObject0@POLYN583813[01120] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN561543.true",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583813 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583813.unshared",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN561543[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "125",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN559325.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN560215 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN559325.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN559325[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.writeObject@POLYN237917.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN559325 in line [00465]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN559325.obj",
      "_risk" : "//QC-JAVCWZ099[00465] In java.lang.StringBuilder.writeObject@POLYN237917[00465] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "126",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN559325.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN560215 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN559325.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN559325[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN464197.entryStack.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN559325 in line [01238]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN559325.obj",
      "_risk" : "//QC-JAVCWZ099[01238] In java.util.Hashtable.writeHashtable@POLYN464197[01238] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "127",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN559325.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN560215 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN559325.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN559325[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN464197.entryStack.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN559325 in line [01239]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN559325.obj",
      "_risk" : "//QC-JAVCWZ099[01239] In java.util.Hashtable.writeHashtable@POLYN464197[01239] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "128",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN559325.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN560215 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN559325.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN559325[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1485419.p.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN559325 in line [01406]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN559325.obj",
      "_risk" : "//QC-JAVCWZ099[01406] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1485419[01406] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "129",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN559325.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN560215 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN559325.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN559325[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1485419.p.val",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN559325 in line [01407]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN559325.obj",
      "_risk" : "//QC-JAVCWZ099[01407] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1485419[01407] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "130",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN559325.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN560215 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN559325.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN559325[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1485419.null",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN559325 in line [01410]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN559325.obj",
      "_risk" : "//QC-JAVCWZ099[01410] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1485419[01410] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "131",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeShort@POLYN621752.v",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN573331 in line [01934]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN573331.val",
      "_risk" : "//QC-JAVCWZ099[01934] In java.io.ObjectOutputStream.BlockDataOutputStream.writeShort@POLYN621752[01934] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN573331.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN573331 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN573331.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN573331[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "132",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN573331.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN573331 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN573331.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN573331[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeStreamHeader@POLYN569057.STREAM_MAGIC",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN573331 in line [00636]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN573331.val",
      "_risk" : "//QC-JAVCWZ099[00636] In java.io.ObjectOutputStream.writeStreamHeader@POLYN569057[00636] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "133",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN573331.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN573331 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN573331.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN573331[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeStreamHeader@POLYN569057.STREAM_VERSION",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN573331 in line [00637]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN573331.val",
      "_risk" : "//QC-JAVCWZ099[00637] In java.io.ObjectOutputStream.writeStreamHeader@POLYN569057[00637] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "134",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN225456.-1",
      "_method" : "---java.io.PipedInputStream.read@POLYN225456.dummymethode_00318 in line [00318]",
      "_target" : "java.io.PipedInputStream.read@POLYN225456.return",
      "_risk" : "//QC-JAVCWZ099[00318] In java.io.PipedInputStream.read@POLYN225456[00318] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN225456.return",
      "_method" : "---java.io.PipedInputStream.read@POLYN225456 in line [00377]",
      "_target" : "java.io.PipedInputStream.read@POLYN228467.c",
      "_risk" : "//QC-JAVCWZ099[00377] In java.io.PipedInputStream.read@POLYN228467[00377] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "135",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN225456.ret",
      "_method" : "---java.io.PipedInputStream.read@POLYN225456.dummymethode_00340 in line [00340]",
      "_target" : "java.io.PipedInputStream.read@POLYN225456.return",
      "_risk" : "//QC-JAVCWZ099[00340] In java.io.PipedInputStream.read@POLYN225456[00340] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN225456.return",
      "_method" : "---java.io.PipedInputStream.read@POLYN225456 in line [00377]",
      "_target" : "java.io.PipedInputStream.read@POLYN228467.c",
      "_risk" : "//QC-JAVCWZ099[00377] In java.io.PipedInputStream.read@POLYN228467[00377] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "136",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN228467.(buffer.length-out)",
      "_method" : "---java.io.PipedInputStream.read@POLYN228467.dummymethode_00388 in line [00388]",
      "_target" : "java.io.PipedInputStream.read@POLYN228467.available",
      "_risk" : "//QC-JAVCWZ099[00388] In java.io.PipedInputStream.read@POLYN228467[00388] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN228467.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN228467.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN228467.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN228467[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "137",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN228467.(in-out)",
      "_method" : "---java.io.PipedInputStream.read@POLYN228467.dummymethode_00388 in line [00388]",
      "_target" : "java.io.PipedInputStream.read@POLYN228467.available",
      "_risk" : "//QC-JAVCWZ099[00388] In java.io.PipedInputStream.read@POLYN228467[00388] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN228467.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN228467.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN228467.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN228467[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "138",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "buffer.length-out",
      "_method" : "---java.io.PipedInputStream.read@POLYN228467.dummymethode_00390 in line [00390]",
      "_target" : "java.io.PipedInputStream.read@POLYN228467.available",
      "_risk" : "//QC-JAVCWE099[00390] In java.io.PipedInputStream.read@POLYN228467[00390] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN228467.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN228467.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN228467.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN228467[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "139",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "len-1",
      "_method" : "---java.io.PipedInputStream.read@POLYN228467.dummymethode_00395 in line [00395]",
      "_target" : "java.io.PipedInputStream.read@POLYN228467.available",
      "_risk" : "//QC-JAVCWE099[00395] In java.io.PipedInputStream.read@POLYN228467[00395] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN228467.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN228467.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN228467.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN228467[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "140",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedReader.read@POLYN203661.-1",
      "_method" : "---java.io.PipedReader.read@POLYN203661.dummymethode_00001 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN203661.return",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN203661[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedReader.read@POLYN203661.return",
      "_method" : "---java.io.PipedReader.read@POLYN203661 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN206261.c",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN206261[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "141",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedReader.read@POLYN203661.ret",
      "_method" : "---java.io.PipedReader.read@POLYN203661.dummymethode_00001 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN203661.return",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN203661[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedReader.read@POLYN203661.return",
      "_method" : "---java.io.PipedReader.read@POLYN203661 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN206261.c",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN206261[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "142",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN368022.x",
      "_method" : "---java.io.PrintStream.print@POLYN363234 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN363234.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN368022[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.tools.TransactionsCommand.printRow@POLYN313226.rowBuilder",
      "_method" : "---java.io.PrintStream.println@POLYN368022 in line [00929]",
      "_target" : "java.io.PrintStream.println@POLYN368022.x",
      "_risk" : "//QC-JAVCWE099[00929] In org.apache.kafka.tools.TransactionsCommand.printRow@POLYN313226[00929] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "143",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN368022.x",
      "_method" : "---java.io.PrintStream.print@POLYN363234 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN363234.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN368022[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.agent.Agent.exec@POLYN189600.\"Unable to create the task controller.\"",
      "_method" : "---java.io.PrintStream.println@POLYN368022 in line [00171]",
      "_target" : "java.io.PrintStream.println@POLYN368022.x",
      "_risk" : "//QC-JAVCWE099[00171] In org.apache.kafka.trogdor.agent.Agent.exec@POLYN189600[00171] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "144",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN368022.x",
      "_method" : "---java.io.PrintStream.print@POLYN363234 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN363234.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN368022[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.agent.Agent.exec@POLYN189600.\"createWorker failed\"",
      "_method" : "---java.io.PrintStream.println@POLYN368022 in line [00186]",
      "_target" : "java.io.PrintStream.println@POLYN368022.x",
      "_risk" : "//QC-JAVCWE099[00186] In org.apache.kafka.trogdor.agent.Agent.exec@POLYN189600[00186] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "145",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN371189.x",
      "_method" : "---java.io.PrintStream.print@POLYN366740 in line [00806]",
      "_target" : "java.io.PrintStream.println@POLYN371189.cibledummy_00806",
      "_risk" : "//QC-JAVCWE099[00806] In java.io.PrintStream.println@POLYN371189[00806] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN155256.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN371189 in line [00067]",
      "_target" : "java.io.PrintStream.println@POLYN371189.x",
      "_risk" : "//QC-JAVCWE099[00067] In org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN155256[00067] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "146",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN371189.x",
      "_method" : "---java.io.PrintStream.print@POLYN366740 in line [00806]",
      "_target" : "java.io.PrintStream.println@POLYN371189.cibledummy_00806",
      "_risk" : "//QC-JAVCWE099[00806] In java.io.PrintStream.println@POLYN371189[00806] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN164896.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN371189 in line [00081]",
      "_target" : "java.io.PrintStream.println@POLYN371189.x",
      "_risk" : "//QC-JAVCWE099[00081] In org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN164896[00081] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "147",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.append@POLYN363149.\"null\"",
      "_method" : "---java.io.PrintWriter.write@POLYN343186 in line [01002]",
      "_target" : "java.io.PrintWriter.write@POLYN343186.c",
      "_risk" : "//QC-JAVCWZ099[01002] In java.io.PrintWriter.append@POLYN363149[01002] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.write@POLYN343186.c",
      "_method" : "---java.io.Writer.write@POLYN191720 in line [00405]",
      "_target" : "java.io.Writer.write@POLYN191720.c",
      "_risk" : "//QC-JAVCWZ099[00405] In java.io.PrintWriter.write@POLYN343186[00405] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "148",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN347005.c",
      "_method" : "---java.io.PrintWriter.print@POLYN347005.dummymethode_00517 in line [00517]",
      "_target" : "java.io.PrintWriter.print@POLYN347005.cibledummy_00517",
      "_risk" : "//QC-JAVCWZ099[00517] In java.io.PrintWriter.print@POLYN347005[00517] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN351717.x",
      "_method" : "---java.io.PrintWriter.print@POLYN347005 in line [00655]",
      "_target" : "java.io.PrintWriter.print@POLYN347005.c",
      "_risk" : "//QC-JAVCWZ099[00655] In java.io.PrintWriter.println@POLYN351717[00655] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "149",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.write@POLYN344798.off",
      "_method" : "---java.io.Writer.write@POLYN193613 in line [00456]",
      "_target" : "java.io.Writer.write@POLYN193613.off",
      "_risk" : "//QC-JAVCWZ099[00456] In java.io.PrintWriter.write@POLYN344798[00456] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN193613.off",
      "_method" : "---java.io.Writer.write@POLYN193613.dummymethode_00191 in line [00191]",
      "_target" : "java.io.Writer.write@POLYN193613.cibledummy_00191",
      "_risk" : "//QC-JAVCWZ099[00191] In java.io.Writer.write@POLYN193613[00191] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "150",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "50",
      "_method" : "---java.net.ServerSocket.ServerSocket@POLYN310321.dummymethode_00218 in line [00218]",
      "_target" : "java.net.ServerSocket.ServerSocket@POLYN310321.backlog",
      "_risk" : "//QC-JAVCWE099[00218] In java.net.ServerSocket.ServerSocket@POLYN310321[00218] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.ServerSocket@POLYN310321.backlog",
      "_method" : "---java.net.ServerSocket.bind@POLYN314784 in line [00220]",
      "_target" : "java.net.ServerSocket.ServerSocket@POLYN310321.cibledummy_00220",
      "_risk" : "//QC-JAVCWE099[00220] In java.net.ServerSocket.ServerSocket@POLYN310321[00220] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "151",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.ServerSocket.getImpl@POLYN311404.return",
      "_method" : "---java.net.ServerSocket.getImpl@POLYN311404 in line [00356]",
      "_target" : "java.net.ServerSocket.bind@POLYN314784.cibledummy_00356",
      "_risk" : "//QC-JAVCWZ099[00356] In java.net.ServerSocket.bind@POLYN314784[00356] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.impl",
      "_method" : "---java.net.ServerSocket.getImpl@POLYN311404.dummymethode_00241 in line [00241]",
      "_target" : "java.net.ServerSocket.getImpl@POLYN311404.return",
      "_risk" : "//QC-JAVCWZ099[00241] In java.net.ServerSocket.getImpl@POLYN311404[00241] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "152",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "true",
      "_method" : "---java.net.ServerSocket.close@POLYN322151.dummymethode_00542 in line [00542]",
      "_target" : "java.net.ServerSocket.closed",
      "_risk" : "//QC-JAVCWE099[00542] In java.net.ServerSocket.close@POLYN322151[00542] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.closed",
      "_method" : "---java.net.ServerSocket.isClosed@POLYN323261.dummymethode_00585 in line [00585]",
      "_target" : "java.net.ServerSocket.isClosed@POLYN323261.return",
      "_risk" : "//QC-JAVCWE099[00585] In java.net.ServerSocket.isClosed@POLYN323261[00585] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "153",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.Socket@POLYN469823.address",
      "_method" : "---java.net.Socket.connect@POLYN473598 in line [00415]",
      "_target" : "java.net.Socket.connect@POLYN473598.endpoint",
      "_risk" : "//QC-JAVCWZ099[00415] In java.net.Socket.Socket@POLYN469823[00415] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.connect@POLYN473598.endpoint",
      "_method" : "---java.net.Socket.connect@POLYN474248 in line [00518]",
      "_target" : "java.net.Socket.connect@POLYN473598.cibledummy_00518",
      "_risk" : "//QC-JAVCWZ099[00518] In java.net.Socket.connect@POLYN473598[00518] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "154",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.connect@POLYN473598.0",
      "_method" : "---java.net.Socket.connect@POLYN474248 in line [00518]",
      "_target" : "java.net.Socket.connect@POLYN474248.timeout",
      "_risk" : "//QC-JAVCWZ099[00518] In java.net.Socket.connect@POLYN473598[00518] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.connect@POLYN474248.timeout",
      "_method" : "---java.net.Socket.connect@POLYN474248 in line [00568]",
      "_target" : "java.net.Socket.connect@POLYN474248.cibledummy_00568",
      "_risk" : "//QC-JAVCWZ099[00568] In java.net.Socket.connect@POLYN474248[00568] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "155",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.Socket@POLYN469823.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN470753 in line [00411]",
      "_target" : "java.net.Socket.createImpl@POLYN470753.stream",
      "_risk" : "//QC-JAVCWZ099[00411] In java.net.Socket.Socket@POLYN469823[00411] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.createImpl@POLYN470753.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN470753.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN470753.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN470753[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "156",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.connect@POLYN474248.true",
      "_method" : "---java.net.Socket.createImpl@POLYN470753 in line [00566]",
      "_target" : "java.net.Socket.createImpl@POLYN470753.stream",
      "_risk" : "//QC-JAVCWZ099[00566] In java.net.Socket.connect@POLYN474248[00566] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.createImpl@POLYN470753.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN470753.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN470753.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN470753[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "157",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.createImpl@POLYN470753.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN470753.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN470753.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN470753[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.getImpl@POLYN473080.true",
      "_method" : "---java.net.Socket.createImpl@POLYN470753 in line [00500]",
      "_target" : "java.net.Socket.createImpl@POLYN470753.stream",
      "_risk" : "//QC-JAVCWZ099[00500] In java.net.Socket.getImpl@POLYN473080[00500] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "158",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN248016.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN248016.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN248016[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.body",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.dummymethode_00578 in line [00578]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_risk" : "//QC-JAVCWE080[00578] In org.springframework.http.ResponseEntity.DefaultBuilder[00578] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "159",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN248016.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN248016.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN248016[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this.headers",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.dummymethode_00578 in line [00578]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_risk" : "//QC-JAVCWE080[00578] In org.springframework.http.ResponseEntity.DefaultBuilder[00578] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "160",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN248016.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN248016.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN248016[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this.statusCode",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.dummymethode_00578 in line [00578]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_risk" : "//QC-JAVCWE080[00578] In org.springframework.http.ResponseEntity.DefaultBuilder[00578] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "161",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN289389.return",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN289389 in line [00215]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.filterTo@POLYN268414.info",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN311016.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN313227 in line [00717]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN313227.offset",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN297354.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN311016 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN311016.offset",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN299943.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN297354 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN297354.offset",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN300986.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN299943 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN299943.offset",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.lastOffset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN289389.dummymethode_00259 in line [00259]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN289389.shallowOffsetOfMaxTimestamp",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN289389.shallowOffsetOfMaxTimestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN289389.dummymethode_00262 in line [00262]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN289389.return",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN313227.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN313227.dummymethode_00751 in line [00751]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.lastOffset",
      "_risk" : ""
    } ]
  }, {
    "_id" : "162",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN887457.b",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.b",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN874565 in line [03031]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.nread",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.b",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN874565 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.b",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN910735.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.b",
      "_method" : "---java.io.InputStream.read@POLYN247470 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN874565[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "163",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN874565 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.nread",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.b",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN874565 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.b",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN910735.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.b",
      "_method" : "---java.io.InputStream.read@POLYN247470 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN874565[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.read@POLYN806198.buf",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.b",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN806198[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "164",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN887457.len",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.len",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN874565 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.nread",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.len",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN874565 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.len",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN910735.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.len",
      "_method" : "---java.io.InputStream.read@POLYN247470 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN874565[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "165",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN874565 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.nread",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.len",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN874565 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.len",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN910735.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.len",
      "_method" : "---java.io.InputStream.read@POLYN247470 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN874565[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.read@POLYN806198.len",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.len",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN806198[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "166",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN887457.off",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN874565 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.nread",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.off",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN874565 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.off",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN910735.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.off",
      "_method" : "---java.io.InputStream.read@POLYN247470 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN874565[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "167",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN874565 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.nread",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.off",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN874565 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.off",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN910735.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.off",
      "_method" : "---java.io.InputStream.read@POLYN247470 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN874565[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN874565.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.read@POLYN806198.off",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN890930.off",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN806198[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "168",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN311016.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN313227 in line [00717]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN313227.timestamp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN297354.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN311016 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN311016.timestamp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN299943.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN297354 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN297354.timestamp",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN300986.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN299943 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN299943.timestamp",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN313227.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN313227.dummymethode_00754 in line [00754]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.maxTimestamp",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.maxTimestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.writeDefaultBatchHeader@POLYN294820.dummymethode_00400 in line [00400]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeDefaultBatchHeader@POLYN294820.maxTimestamp",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeDefaultBatchHeader@POLYN294820.maxTimestamp",
      "_method" : "---org.apache.kafka.common.record.DefaultRecordBatch.writeHeader@POLYN271901 in line [00402]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeDefaultBatchHeader@POLYN294820.cibledummy_00402",
      "_risk" : ""
    } ]
  }, {
    "_id" : "169",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN200249.struct",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN200249.dummymethode_00001 in line [00001]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN200249.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.InputStream.read@POLYN242507.return",
      "_method" : "---java.io.InputStream.read@POLYN242507 in line [00001]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN200249.struct",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN200249[00001] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.assignmentSnapshot",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN234033.dummymethode_00170 in line [00170]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN234033.localAssignmentSnapshot",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN234033.localAssignmentSnapshot",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN234033.dummymethode_00171 in line [00171]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN234033.workerState",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN234033.workerState",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN234033.dummymethode_00174 in line [00174]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN234033.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN200249.return",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN200249 in line [00186]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.onJoinComplete@POLYN234907.newAssignment",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.onJoinComplete@POLYN234907.newAssignment",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.onJoinComplete@POLYN234907.dummymethode_00209 in line [00209]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.assignmentSnapshot",
      "_risk" : ""
    } ]
  }, {
    "_id" : "170",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN242053.return",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN242053 in line [00372]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN241402.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN246555.return",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN246555 in line [00406]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN242053.keySize",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN242053.skipBuffer",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN246555 in line [00421]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN246555.buffer",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN242053.keySize",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN242053.dummymethode_00428 in line [00428]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN242053.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN246555.buffer",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.readVarint@POLYN224996 in line [00473]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN246555.sizeInBytes",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN246555.sizeInBytes",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN246555.dummymethode_00475 in line [00475]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN246555.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "171",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "3",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN633913.dummymethode_02146 in line [02146]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN633913.utflen",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN633913.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN633913.dummymethode_02153 in line [02153]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN633913.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN636386.utflen",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN574171 in line [02188]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN636386.cibledummy_02188",
      "_risk" : "//QC-JAVCWE099[02188] In java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN636386[02188] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN633913.return",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN633913 in line [01303]",
      "_target" : "java.io.ObjectOutputStream.writeString@POLYN593069.utflen",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN593069.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN636386 in line [01309]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN636386.utflen",
      "_risk" : ""
    } ]
  }, {
    "_id" : "172",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "2",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN633913.dummymethode_02148 in line [02148]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN633913.utflen",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN633913.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN633913.dummymethode_02153 in line [02153]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN633913.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN636386.utflen",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN574171 in line [02188]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN636386.cibledummy_02188",
      "_risk" : "//QC-JAVCWE099[02188] In java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN636386[02188] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN633913.return",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN633913 in line [01303]",
      "_target" : "java.io.ObjectOutputStream.writeString@POLYN593069.utflen",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN593069.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN636386 in line [00001]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN636386.utflen",
      "_risk" : ""
    } ]
  }, {
    "_id" : "173",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN244249.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN245793 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN245793.magic",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN245793.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN247135 in line [00428]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN247135.magic",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN247135.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN247135.dummymethode_00462 in line [00462]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN247135.cibledummy_00462",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN243168.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN244249 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN244249.magic",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN296245.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN243168 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN243168.magic",
      "_risk" : ""
    } ]
  }, {
    "_id" : "174",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadFullBatch@POLYN181706.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadFullBatch@POLYN181706 in line [00153]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.iterator@POLYN180132.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN182401.buffer",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.toMemoryRecordBatch@POLYN181591 in line [00217]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN182401.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN182401.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN182401 in line [00196]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.fullBatch",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.fullBatch",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadFullBatch@POLYN181706.dummymethode_00198 in line [00198]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadFullBatch@POLYN181706.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.iterator@POLYN180132.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.iterator@POLYN180132 in line [00120]",
      "_target" : "org.apache.kafka.metadata.util.SnapshotFileReader.handleControlBatch@POLYN173450.Iterator_Record_iter",
      "_risk" : ""
    } ]
  }, {
    "_id" : "175",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadFullBatch@POLYN181706.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadFullBatch@POLYN181706 in line [00001]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.iterator@POLYN180132.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.toMemoryRecordBatch@POLYN181591.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.toMemoryRecordBatch@POLYN181591 in line [00217]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN182401.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN182401.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN182401 in line [00001]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.fullBatch",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.fullBatch",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadFullBatch@POLYN181706.dummymethode_00198 in line [00198]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadFullBatch@POLYN181706.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.iterator@POLYN180132.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.iterator@POLYN180132 in line [00001]",
      "_target" : "org.apache.kafka.metadata.util.SnapshotFileReader.handleControlBatch@POLYN173450.Iterator_Record_iter",
      "_risk" : ""
    } ]
  }, {
    "_id" : "176",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN182401.position",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN455349 in line [00215]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN455349.position",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN456615.position",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN456615.dummymethode_01114 in line [01114]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN456615.currentPosition",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN456615.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN247470 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN247470.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN456615[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN455349.position",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN456615 in line [01090]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN456615.position",
      "_risk" : ""
    } ]
  }, {
    "_id" : "177",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN143804.return",
      "_method" : "---org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN143804 in line [00391]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN242053.bytesRemaining",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN242053.bytesRemaining",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN246555 in line [00421]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN246555.bytesRemaining",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN246555.bytesRemaining",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readMore@POLYN248186 in line [00465]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN248186.bytesRemaining",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN143804.value",
      "_method" : "---org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN143804.dummymethode_00026 in line [00026]",
      "_target" : "org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN143804.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "178",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN265268.return",
      "_method" : "---org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN265268 in line [00188]",
      "_target" : "org.apache.kafka.common.record.FileRecords.append@POLYN237418.written",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileRecords.append@POLYN237418.written",
      "_method" : "---org.apache.kafka.common.record.FileRecords.append@POLYN237418.dummymethode_00189 in line [00189]",
      "_target" : "org.apache.kafka.common.record.FileRecords.append@POLYN237418.cibledummy_00189",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN265268.buffer",
      "_method" : "---java.io.FileOutputStream.write@POLYN233648 in line [00092]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN265268.written",
      "_risk" : "//QC-JAVCWE099[00092] In org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN265268[00092] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN265268.written",
      "_method" : "---org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN265268.dummymethode_00094 in line [00094]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN265268.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "179",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN265268.return",
      "_method" : "---org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN265268 in line [00001]",
      "_target" : "org.apache.kafka.common.record.FileRecords.append@POLYN237418.written",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileRecords.append@POLYN237418.written",
      "_method" : "---org.apache.kafka.common.record.FileRecords.append@POLYN237418.dummymethode_00189 in line [00189]",
      "_target" : "org.apache.kafka.common.record.FileRecords.append@POLYN237418.cibledummy_00189",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN265268.sourcedummy",
      "_method" : "---java.io.FileOutputStream.write@POLYN233648 in line [00092]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN265268.written",
      "_risk" : "//QC-JAVCWE099[00092] In org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN265268[00092] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN265268.written",
      "_method" : "---org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN265268.dummymethode_00094 in line [00094]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN265268.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "180",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN244249.key",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN245793 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN245793.key",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN245793.key",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN247135 in line [00428]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN247135.key",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN247135.key",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN247135.dummymethode_00476 in line [00476]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN247135.cibledummy_00476",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN243168.null",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN244249 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN244249.key",
      "_risk" : ""
    } ]
  }, {
    "_id" : "181",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN244249.newByteBufferOutputStream(buffer)",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN244249.dummymethode_00389 in line [00389]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN244249.out",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN244249.out",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN245793 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN245793.out",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN245793.out",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN247135 in line [00428]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN247135.out",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN247135.out",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN247135.dummymethode_00476 in line [00476]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN247135.cibledummy_00476",
      "_risk" : ""
    } ]
  }, {
    "_id" : "182",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN243168.buffer",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN244249 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN244249.buffer",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN163229.return",
      "_method" : "---org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN163229 in line [00416]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN296245.buffer",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN296245.buffer",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN243168 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN243168.buffer",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN163229.buffer",
      "_method" : "---org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN163229.dummymethode_00080 in line [00080]",
      "_target" : "org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN163229.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "183",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileRecords.channel@POLYN233744.return",
      "_method" : "---org.apache.kafka.common.record.FileRecords.channel@POLYN233744 in line [00212]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN182401.channel",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN182401.channel",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN455349 in line [00215]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN455349.channel",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.FileRecords.channel@POLYN233744.channel",
      "_method" : "---org.apache.kafka.common.record.FileRecords.channel@POLYN233744.dummymethode_00107 in line [00107]",
      "_target" : "org.apache.kafka.common.record.FileRecords.channel@POLYN233744.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN455349.channel",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN456615 in line [01090]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN455349.cibledummy_01090",
      "_risk" : ""
    } ]
  }, {
    "_id" : "184",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.handleInboundMessage@POLYN598919.currentTimeMs",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN596650 in line [01668]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN596650.currentTimeMs",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN596650.currentTimeMs",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN564235 in line [01622]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN564235.currentTimeMs",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Time.milliseconds@POLYN154961.return",
      "_method" : "---org.apache.kafka.common.utils.Time.milliseconds@POLYN154961 in line [02232]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.poll@POLYN623515.currentTimeMs",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.poll@POLYN623515.currentTimeMs",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.handleInboundMessage@POLYN598919 in line [02249]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.handleInboundMessage@POLYN598919.currentTimeMs",
      "_risk" : ""
    } ]
  }, {
    "_id" : "185",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.append@POLYN625037.records",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN216821 in line [02274]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN216821.records",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.scheduleAppend@POLYN624561.records",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.append@POLYN625037 in line [02255]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.append@POLYN625037.records",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN216821.records",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN217831 in line [00112]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN217831.records",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN217831.records",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN217831.dummymethode_00152 in line [00152]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN217831.batch",
      "_risk" : ""
    } ]
  }, {
    "_id" : "186",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.append@POLYN625037.records",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN216821 in line [00001]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN216821.records",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.scheduleAtomicAppend@POLYN624806.records",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.append@POLYN625037 in line [02260]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.append@POLYN625037.records",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN216821.records",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN217831 in line [00001]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN217831.records",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN217831.records",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN217831.dummymethode_00152 in line [00152]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN217831.batch",
      "_risk" : ""
    } ]
  }, {
    "_id" : "187",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFully@POLYN810603.buf",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN893145 in line [01067]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN893145.b",
      "_risk" : "//QC-JAVCWE099[01067] In java.io.ObjectInputStream.readFully@POLYN810603[01067] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN155377.arr",
      "_method" : "---java.io.ObjectInputStream.readFully@POLYN810603 in line [00081]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN810603.buf",
      "_risk" : "//QC-JAVCWE099[00081] In org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN155377[00081] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.protocol.DataInputStreamReadable.readByteBuffer@POLYN155956.arr",
      "_method" : "---org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN155377 in line [00099]",
      "_target" : "org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN155377.arr",
      "_risk" : ""
    } ]
  }, {
    "_id" : "188",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN241402.input",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN242053 in line [00372]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN242053.input",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN242053.input",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN246555 in line [00421]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN246555.input",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN246555.input",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readMore@POLYN248186 in line [00465]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN248186.input",
      "_risk" : ""
    } ]
  }, {
    "_id" : "189",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN244249.compressionType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN245793 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN245793.compressionType",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN243168.compressionType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN244249 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN244249.compressionType",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN296245.compressionType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN243168 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN243168.compressionType",
      "_risk" : ""
    } ]
  }, {
    "_id" : "190",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN244249.timestampType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN245793 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN245793.timestampType",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN243168.timestampType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN244249 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN244249.timestampType",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN296245.timestampType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN243168 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN243168.timestampType",
      "_risk" : ""
    } ]
  }, {
    "_id" : "191",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN297354.headers",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN311016 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN311016.headers",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN299943.headers",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN297354 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN297354.headers",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN300986.Record.EMPTY_HEADERS",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN299943 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN299943.headers",
      "_risk" : ""
    } ]
  }, {
    "_id" : "192",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN297354.key",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN311016 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN311016.key",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN299943.key",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN297354 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN297354.key",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN300986.key",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN299943 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN299943.key",
      "_risk" : ""
    } ]
  }, {
    "_id" : "193",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN297354.value",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN311016 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN311016.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN299943.value",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN297354 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN297354.value",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN300986.value",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN299943 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN299943.value",
      "_risk" : ""
    } ]
  }, {
    "_id" : "194",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN311755.sourcedummy",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN247135 in line [00730]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN311755.crc",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN311755.crc",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN311755.dummymethode_00732 in line [00732]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN311755.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN311755.return",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN311755 in line [00456]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN297354.cibledummy_00456",
      "_risk" : ""
    } ]
  }, {
    "_id" : "195",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN167968.null",
      "_method" : "---org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN167968.dummymethode_00110 in line [00110]",
      "_target" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN167968.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN167968.return",
      "_method" : "---org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN167968 in line [00119]",
      "_target" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN167968.size",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN167968.size",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573891 in line [00120]",
      "_target" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN167968.cibledummy_00120",
      "_risk" : "//QC-JAVCWE099[00120] In org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN167968[00120] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "196",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.append@POLYN625037.epoch",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN216821 in line [02274]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN216821.epoch",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.scheduleAppend@POLYN624561.epoch",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.append@POLYN625037 in line [02255]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.append@POLYN625037.epoch",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN216821.epoch",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN217831 in line [00112]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN217831.epoch",
      "_risk" : ""
    } ]
  }, {
    "_id" : "197",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.append@POLYN625037.epoch",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN216821 in line [00001]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN216821.epoch",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.scheduleAtomicAppend@POLYN624806.epoch",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.append@POLYN625037 in line [02260]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.append@POLYN625037.epoch",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN216821.epoch",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN217831 in line [00001]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN217831.epoch",
      "_risk" : ""
    } ]
  }, {
    "_id" : "198",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN179088.return",
      "_method" : "---org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN179088 in line [00233]",
      "_target" : "org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN242367.loadedCheckpoints",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN242367.loadedCheckpoints",
      "_method" : "---org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN242367 in line [00235]",
      "_target" : "org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN242367.cibledummy_00235",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN179088.offsets",
      "_method" : "---org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN179088.dummymethode_00182 in line [00182]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN179088.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "199",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readBoolean@POLYN807884.return",
      "_method" : "---java.io.ObjectInputStream.readBoolean@POLYN807884 in line [03208]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readBooleans@POLYN899912.v[off++]",
      "_risk" : "//QC-JAVCWZ099[03208] In java.io.ObjectInputStream.BlockDataInputStream.readBooleans@POLYN899912[03208] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readBoolean@POLYN893932.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readBoolean@POLYN893932 in line [00957]",
      "_target" : "java.io.ObjectInputStream.readBoolean@POLYN807884.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "200",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFully@POLYN811075.buf",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN893145 in line [01084]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN811075.cibledummy_01084",
      "_risk" : "//QC-JAVCWE099[01084] In java.io.ObjectInputStream.readFully@POLYN811075[01084] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN248186.array",
      "_method" : "---java.io.ObjectInputStream.readFully@POLYN811075 in line [00507]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN811075.buf",
      "_risk" : "//QC-JAVCWE099[00507] In org.apache.kafka.common.record.DefaultRecord.readMore@POLYN248186[00507] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "201",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFully@POLYN811075.len",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN893145 in line [01084]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN811075.cibledummy_01084",
      "_risk" : "//QC-JAVCWE099[01084] In java.io.ObjectInputStream.readFully@POLYN811075[01084] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN248186.bytesRead",
      "_method" : "---java.io.ObjectInputStream.readFully@POLYN811075 in line [00507]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN811075.len",
      "_risk" : "//QC-JAVCWE099[00507] In org.apache.kafka.common.record.DefaultRecord.readMore@POLYN248186[00507] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "202",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFully@POLYN811075.off",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN893145 in line [01084]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN811075.cibledummy_01084",
      "_risk" : "//QC-JAVCWE099[01084] In java.io.ObjectInputStream.readFully@POLYN811075[01084] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN248186.bytesToLeftShift",
      "_method" : "---java.io.ObjectInputStream.readFully@POLYN811075 in line [00507]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN811075.off",
      "_risk" : "//QC-JAVCWE099[00507] In org.apache.kafka.common.record.DefaultRecord.readMore@POLYN248186[00507] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "203",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN616668.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606 in line [01814]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.off",
      "_method" : "---java.io.OutputStream.write@POLYN179620 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN179620.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "204",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN616890.off",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606 in line [01818]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.off",
      "_method" : "---java.io.OutputStream.write@POLYN179620 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN179620.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "205",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.off",
      "_method" : "---java.io.OutputStream.write@POLYN179620 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN179620.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.writeFields@POLYN612230.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606 in line [01695]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "206",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.off",
      "_method" : "---java.io.OutputStream.write@POLYN179620 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN179620.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN604059.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606 in line [01534]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "207",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.off",
      "_method" : "---java.io.OutputStream.write@POLYN179620 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN179620.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN570667.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606 in line [00690]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "208",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.off",
      "_method" : "---java.io.OutputStream.write@POLYN179620 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN179620.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN571085.off",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "209",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.off",
      "_method" : "---java.io.OutputStream.write@POLYN179620 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN179620.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593844.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606 in line [01334]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "210",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN616668.b",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606 in line [01814]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.b",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.b",
      "_method" : "---java.io.OutputStream.write@POLYN179620 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "211",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN616890.b",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606 in line [01818]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.b",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.b",
      "_method" : "---java.io.OutputStream.write@POLYN179620 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "212",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.b",
      "_method" : "---java.io.OutputStream.write@POLYN179620 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.writeFields@POLYN612230.primVals",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606 in line [01695]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "213",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.b",
      "_method" : "---java.io.OutputStream.write@POLYN179620 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN604059.primVals",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606 in line [01534]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "214",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.b",
      "_method" : "---java.io.OutputStream.write@POLYN179620 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN570667.buf",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606 in line [00690]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "215",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.b",
      "_method" : "---java.io.OutputStream.write@POLYN179620 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN571085.buf",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "216",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.b",
      "_method" : "---java.io.OutputStream.write@POLYN179620 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593844.ba",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606 in line [01334]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "217",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN616668.b.length",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606 in line [01814]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.len",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.len",
      "_method" : "---java.io.OutputStream.write@POLYN179620 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "218",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN616890.len",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606 in line [01818]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.len",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.len",
      "_method" : "---java.io.OutputStream.write@POLYN179620 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "219",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.len",
      "_method" : "---java.io.OutputStream.write@POLYN179620 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.writeFields@POLYN612230.primVals.length",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606 in line [01695]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "220",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.len",
      "_method" : "---java.io.OutputStream.write@POLYN179620 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN604059.primDataSize",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606 in line [01534]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "221",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.len",
      "_method" : "---java.io.OutputStream.write@POLYN179620 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN570667.buf.length",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606 in line [00690]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "222",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.len",
      "_method" : "---java.io.OutputStream.write@POLYN179620 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN571085.len",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN617606.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "223",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN405645.sendBufferSize",
      "_method" : "---java.net.Socket.setSendBufferSize@POLYN494971 in line [00289]",
      "_target" : "java.net.Socket.setSendBufferSize@POLYN494971.size",
      "_risk" : "//QC-JAVCWE099[00289] In org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN405645[00289] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.network.Selector.connect@POLYN403923.sendBufferSize",
      "_method" : "---org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN405645 in line [00254]",
      "_target" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN405645.sendBufferSize",
      "_risk" : ""
    } ]
  }, {
    "_id" : "224",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN405645.receiveBufferSize",
      "_method" : "---java.net.Socket.setReceiveBufferSize@POLYN497674 in line [00291]",
      "_target" : "java.net.Socket.setReceiveBufferSize@POLYN497674.size",
      "_risk" : "//QC-JAVCWE099[00291] In org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN405645[00291] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.network.Selector.connect@POLYN403923.receiveBufferSize",
      "_method" : "---org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN405645 in line [00254]",
      "_target" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN405645.receiveBufferSize",
      "_risk" : ""
    } ]
  }, {
    "_id" : "225",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeBlock@POLYN203465.compressedLengt",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN220611 in line [00187]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN220611.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN220611.value",
      "_method" : "---java.io.OutputStream.write@POLYN177828 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN177828.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN220611[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "226",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeBlock@POLYN203465.hash",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN220611 in line [00193]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN220611.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN220611.value",
      "_method" : "---java.io.OutputStream.write@POLYN177828 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN177828.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN220611[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "227",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeEndMark@POLYN204908.0",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN220611 in line [00205]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN220611.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN220611.value",
      "_method" : "---java.io.OutputStream.write@POLYN177828 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN177828.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN220611[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "228",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.handleInboundMessage@POLYN598919.request",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN596650 in line [01668]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN596650.request",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN596650.request",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN564235 in line [01622]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN564235.requestMetadata",
      "_risk" : ""
    } ]
  }, {
    "_id" : "229",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN169647.records",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN217831 in line [00167]",
      "_target" : "org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN169647.cibledummy_00167",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.snapshot.RecordsSnapshotWriter.appendBatches@POLYN170776.batch.data",
      "_method" : "---org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN169647 in line [00191]",
      "_target" : "org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN169647.records",
      "_risk" : ""
    } ]
  } ],
  "_lesDeadlocks" : [ {
    "_id" : "R0",
    "_libelle" : "org.apache.kafka.connect.mirror.OffsetSyncStore.this"
  }, {
    "_id" : "R1",
    "_libelle" : "org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155789.pollTimeout"
  }, {
    "_id" : "R2",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.this"
  }, {
    "_id" : "R3",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336975.partition"
  }, {
    "_id" : "R4",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336975.offsetResetStrategy"
  }, {
    "_id" : "R5",
    "_libelle" : "java.io.InputStream.this"
  }, {
    "_id" : "R6",
    "_libelle" : "org.apache.kafka.common.metrics.Sensor.this"
  }, {
    "_id" : "R7",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.Fetcher.this"
  }, {
    "_id" : "R8",
    "_libelle" : "org.apache.kafka.clients.Metadata.this"
  }, {
    "_id" : "R9",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN334365.tp"
  }, {
    "_id" : "R10",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN334365.highWatermark"
  }, {
    "_id" : "R11",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN334555.tp"
  }, {
    "_id" : "R12",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN334555.logStartOffset"
  }, {
    "_id" : "R13",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN334745.tp"
  }, {
    "_id" : "R14",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN334745.lastStableOffset"
  }, {
    "_id" : "R15",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.this"
  }, {
    "_id" : "R16",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN342515.tp"
  }, {
    "_id" : "R17",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN327455.tp"
  }, {
    "_id" : "R18",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN327455.position"
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
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN320019.assignments"
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
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.this"
  }, {
    "_id" : "R31",
    "_libelle" : "org.apache.kafka.connect.runtime.distributed.DistributedHerder.this"
  }, {
    "_id" : "R32",
    "_libelle" : "org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN576540.request"
  }, {
    "_id" : "R33",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerConnector.this"
  }, {
    "_id" : "R34",
    "_libelle" : "org.apache.kafka.connect.runtime.Worker.this"
  }, {
    "_id" : "R35",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.this"
  }, {
    "_id" : "R36",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN163713.prefix"
  }, {
    "_id" : "R37",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN163713.id"
  }, {
    "_id" : "R38",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN163713.metrics"
  }, {
    "_id" : "R39",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.this"
  }, {
    "_id" : "R40",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.consumerRecord@POLYN203753.consumedMessage"
  }, {
    "_id" : "R41",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN419473.isDisconnected"
  }, {
    "_id" : "R42",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN419473.cause"
  }, {
    "_id" : "R43",
    "_libelle" : "java.util.Hashtable.this"
  }, {
    "_id" : "R44",
    "_libelle" : "java.util.Hashtable.putAll@POLYN430824.t"
  }, {
    "_id" : "R45",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.this"
  }, {
    "_id" : "R46",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.setStreamsConfig@POLYN488351.applicationConfig"
  }, {
    "_id" : "R47",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.this"
  }, {
    "_id" : "R48",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN244453.topic"
  }, {
    "_id" : "R49",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN244453.partitions"
  }, {
    "_id" : "R50",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN243148.newOffsets"
  }, {
    "_id" : "R51",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN243572.newOffsets"
  }, {
    "_id" : "R52",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN376277.exception"
  }, {
    "_id" : "R53",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN376763.exception"
  }, {
    "_id" : "R54",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN379510.tp"
  }, {
    "_id" : "R55",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN395259.e"
  }, {
    "_id" : "R56",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.this"
  }, {
    "_id" : "R57",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN163119.topic"
  }, {
    "_id" : "R58",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN163119.nowMs"
  }, {
    "_id" : "R59",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN350633.deque"
  }, {
    "_id" : "R60",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN377773.topicPartition"
  }, {
    "_id" : "R61",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN381881.topicPartition"
  }, {
    "_id" : "R62",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN381881.increment"
  }, {
    "_id" : "R63",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.updateEstimation@POLYN156754.compressionRatioForTopic"
  }, {
    "_id" : "R64",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386872.batch"
  }, {
    "_id" : "R65",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386872.exception"
  }, {
    "_id" : "R66",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386872.adjustSequenceNumbers"
  }, {
    "_id" : "R67",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN386277.exception"
  }, {
    "_id" : "R68",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN383698.batch"
  }, {
    "_id" : "R69",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN390635.batch"
  }, {
    "_id" : "R70",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN419119.error"
  }, {
    "_id" : "R71",
    "_libelle" : "org.apache.kafka.clients.Metadata.bootstrap@POLYN253305.addresses"
  }, {
    "_id" : "R72",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN162933.prefix"
  }, {
    "_id" : "R73",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN162933.id"
  }, {
    "_id" : "R74",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN162933.metrics"
  }, {
    "_id" : "R75",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN162933.nowMs"
  }, {
    "_id" : "R76",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN165160.lastVersion"
  }, {
    "_id" : "R77",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN165160.timeoutMs"
  }, {
    "_id" : "R78",
    "_libelle" : "org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN264225.topic"
  }, {
    "_id" : "R79",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN326551.dq"
  }, {
    "_id" : "R80",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.this"
  }, {
    "_id" : "R81",
    "_libelle" : "org.apache.kafka.clients.producer.internals.IncompleteBatches.incomplete"
  }, {
    "_id" : "R82",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373954.topicPartition"
  }, {
    "_id" : "R83",
    "_libelle" : "org.apache.kafka.clients.admin.KafkaAdminClient.this"
  }, {
    "_id" : "R84",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.remove@POLYN150733.nodeId"
  }, {
    "_id" : "R85",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.update@POLYN150461.nodeId"
  }, {
    "_id" : "R86",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.update@POLYN150461.nodeApiVersions"
  }, {
    "_id" : "R87",
    "_libelle" : "org.apache.kafka.streams.processor.internals.GlobalStreamThread.stateLock"
  }, {
    "_id" : "R88",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.this"
  }, {
    "_id" : "R89",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN275542.connector"
  }, {
    "_id" : "R90",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN276850.id"
  }, {
    "_id" : "R91",
    "_libelle" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.lock"
  }, {
    "_id" : "R92",
    "_libelle" : "java.io.Writer.lock"
  }, {
    "_id" : "R93",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.this"
  }, {
    "_id" : "R94",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.this"
  }, {
    "_id" : "R95",
    "_libelle" : "org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitableRecords"
  }, {
    "_id" : "R96",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.this"
  }, {
    "_id" : "R97",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.taskLevelSensors"
  }, {
    "_id" : "R98",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.nodeLevelSensors"
  }, {
    "_id" : "R99",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN253697.response"
  }, {
    "_id" : "R100",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN253697.isPartialUpdate"
  }, {
    "_id" : "R101",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN253697.nowMs"
  }, {
    "_id" : "R102",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN254271.requestVersion"
  }, {
    "_id" : "R103",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN254271.response"
  }, {
    "_id" : "R104",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN254271.isPartialUpdate"
  }, {
    "_id" : "R105",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN254271.nowMs"
  }, {
    "_id" : "R106",
    "_libelle" : "org.apache.kafka.common.requests.MetadataResponse.data"
  }, {
    "_id" : "R107",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN165932.requestVersion"
  }, {
    "_id" : "R108",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN165932.response"
  }, {
    "_id" : "R109",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN165932.isPartialUpdate"
  }, {
    "_id" : "R110",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN165932.nowMs"
  }, {
    "_id" : "R111",
    "_libelle" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.this"
  }, {
    "_id" : "R112",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.this"
  }, {
    "_id" : "R113",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN223176.initialTopologies"
  }, {
    "_id" : "R114",
    "_libelle" : "java.io.File.this"
  }, {
    "_id" : "R115",
    "_libelle" : "java.io.File.readObject@POLYN634626.s"
  }, {
    "_id" : "R116",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN395081.request"
  }, {
    "_id" : "R117",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN230077.connName"
  }, {
    "_id" : "R118",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.sourceRecord@POLYN203524.preTransformRecord"
  }, {
    "_id" : "R119",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN228199.connName"
  }, {
    "_id" : "R120",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN228199.config"
  }, {
    "_id" : "R121",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN228199.allowReplace"
  }, {
    "_id" : "R122",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN228199.callback"
  }, {
    "_id" : "R123",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN228199.configInfos"
  }, {
    "_id" : "R124",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN226218.connName"
  }, {
    "_id" : "R125",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN226218.callback"
  }, {
    "_id" : "R126",
    "_libelle" : "org.apache.kafka.common.security.oauthbearer.internals.expiring.ExpiringCredentialRefreshingLogin.mandatoryClassToSynchronizeOnPriorToRefresh"
  }, {
    "_id" : "R127",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN234528.request"
  }, {
    "_id" : "R128",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN234528.cb"
  }, {
    "_id" : "R129",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.this"
  }, {
    "_id" : "R130",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.openIterators"
  }, {
    "_id" : "R131",
    "_libelle" : "java.lang.Throwable.this"
  }, {
    "_id" : "R132",
    "_libelle" : "java.lang.Throwable.addSuppressed@POLYN390035.exception"
  }, {
    "_id" : "R133",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN231912.taskId"
  }, {
    "_id" : "R134",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN231912.cb"
  }, {
    "_id" : "R135",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN180958.partition"
  }, {
    "_id" : "R136",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN180958.offset"
  }, {
    "_id" : "R137",
    "_libelle" : "org.apache.kafka.tools.ThroughputThrottler.this"
  }, {
    "_id" : "R138",
    "_libelle" : "java.io.BufferedOutputStream.this"
  }, {
    "_id" : "R139",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN162054.b"
  }, {
    "_id" : "R140",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN162054.off"
  }, {
    "_id" : "R141",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN162054.len"
  }, {
    "_id" : "R142",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN260456.cleanupDelayMs"
  }, {
    "_id" : "R143",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN257451.taskId"
  }, {
    "_id" : "R144",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.this"
  }, {
    "_id" : "R145",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN195459.key"
  }, {
    "_id" : "R146",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN195459.value"
  }, {
    "_id" : "R147",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN392391.now"
  }, {
    "_id" : "R148",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.this"
  }, {
    "_id" : "R149",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN192213.newCacheSizeBytes"
  }, {
    "_id" : "R150",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaConfigBackingStore.lock"
  }, {
    "_id" : "R151",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.pollTasks"
  }, {
    "_id" : "R152",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN324483.tp"
  }, {
    "_id" : "R153",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN324483.position"
  }, {
    "_id" : "R154",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN333627.tp"
  }, {
    "_id" : "R155",
    "_libelle" : "org.apache.kafka.trogdor.workload.RoundTripWorker.this"
  }, {
    "_id" : "R156",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN385725.batch"
  }, {
    "_id" : "R157",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN385725.response"
  }, {
    "_id" : "R158",
    "_libelle" : "java.net.Socket.this"
  }, {
    "_id" : "R159",
    "_libelle" : "java.net.Socket.setSendBufferSize@POLYN494971.size"
  }, {
    "_id" : "R160",
    "_libelle" : "java.net.Socket.setReceiveBufferSize@POLYN497674.size"
  }, {
    "_id" : "R161",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN423125.shortReason"
  }, {
    "_id" : "R162",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN423433.shortReason"
  }, {
    "_id" : "R163",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN423433.fullReason"
  }, {
    "_id" : "R164",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.this"
  }, {
    "_id" : "R165",
    "_libelle" : "java.io.PrintStream.this"
  }, {
    "_id" : "R166",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN199717.entries"
  }, {
    "_id" : "R167",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN341812.tp"
  }, {
    "_id" : "R168",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN341963.tp"
  }, {
    "_id" : "R169",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN332060.tp"
  }, {
    "_id" : "R170",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN233325.connName"
  }, {
    "_id" : "R171",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN233325.cb"
  }, {
    "_id" : "R172",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.this"
  }, {
    "_id" : "R173",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN167140.reader"
  }, {
    "_id" : "R174",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.taskDirCreationLock"
  }, {
    "_id" : "R175",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.NamedTopologyBuilder.this"
  }, {
    "_id" : "R176",
    "_libelle" : "org.apache.kafka.streams.StreamsBuilder.this"
  }, {
    "_id" : "R177",
    "_libelle" : "org.apache.kafka.clients.Metadata.failedUpdate@POLYN265933.now"
  }, {
    "_id" : "R178",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelMetrics"
  }, {
    "_id" : "R179",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.splitAndReenqueue@POLYN337729.partitionDequeue"
  }, {
    "_id" : "R180",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.setEstimation@POLYN158702.compressionRatioForTopic"
  }, {
    "_id" : "R181",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.addInFlightBatch@POLYN382275.batch"
  }, {
    "_id" : "R182",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTask.this"
  }, {
    "_id" : "R183",
    "_libelle" : "org.apache.kafka.clients.producer.MockProducer.this"
  }, {
    "_id" : "R184",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromAssignment@POLYN576351.partitions"
  }, {
    "_id" : "R185",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromAssignment@POLYN576351.logPrefix"
  }, {
    "_id" : "R186",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromMetadata@POLYN577160.topics"
  }, {
    "_id" : "R187",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromMetadata@POLYN577160.logPrefix"
  }, {
    "_id" : "R188",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.this"
  }, {
    "_id" : "R189",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN165266.consumerRecords"
  }, {
    "_id" : "R190",
    "_libelle" : "java.net.ServerSocket.closeLock"
  }, {
    "_id" : "R191",
    "_libelle" : "java.net.Socket.closeLock"
  }, {
    "_id" : "R192",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.rebalance@POLYN230037.newAssignment"
  }, {
    "_id" : "R193",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN239115.offsets"
  }, {
    "_id" : "R194",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN238499.offsets"
  }, {
    "_id" : "R195",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN238499.callback"
  }, {
    "_id" : "R196",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN239840.timeout"
  }, {
    "_id" : "R197",
    "_libelle" : "java.io.File.writeObject@POLYN634245.s"
  }, {
    "_id" : "R198",
    "_libelle" : "java.lang.Throwable.writeObject@POLYN387982.s"
  }, {
    "_id" : "R199",
    "_libelle" : "org.apache.kafka.connect.runtime.ConnectMetrics.this"
  }, {
    "_id" : "R200",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN297888.sensor"
  }, {
    "_id" : "R201",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.reporters@POLYN203271.reporters"
  }, {
    "_id" : "R202",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerSourceTask.this"
  }, {
    "_id" : "R203",
    "_libelle" : "org.apache.kafka.connect.util.ConvertingFutureCallback.this"
  }, {
    "_id" : "R204",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN164674.reader"
  }, {
    "_id" : "R205",
    "_libelle" : "java.net.ServerSocket.this"
  }, {
    "_id" : "R206",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN422094.reason"
  }, {
    "_id" : "R207",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN422094.shouldResetMemberId"
  }, {
    "_id" : "R208",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN421395.reason"
  }, {
    "_id" : "R209",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN421395.shouldResetMemberId"
  }, {
    "_id" : "R210",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN325074.tp"
  }, {
    "_id" : "R211",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN325074.position"
  }, {
    "_id" : "R212",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN325074.requestedResetStrategy"
  }, {
    "_id" : "R213",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1463483.f"
  }, {
    "_id" : "R214",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.treeifyBin@POLYN1558867.b"
  }, {
    "_id" : "R215",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN240220.partition"
  }, {
    "_id" : "R216",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN240220.offset"
  }, {
    "_id" : "R217",
    "_libelle" : "org.apache.kafka.connect.file.FileStreamSourceTask.this"
  }, {
    "_id" : "R218",
    "_libelle" : "org.apache.kafka.connect.storage.FileOffsetBackingStore.this"
  }, {
    "_id" : "R219",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN201144.namespace"
  }, {
    "_id" : "R220",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheLevelSensors"
  }, {
    "_id" : "R221",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.this"
  }, {
    "_id" : "R222",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.addStateStore@POLYN238054.builder"
  }, {
    "_id" : "R223",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.this"
  }, {
    "_id" : "R224",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN183598.key"
  }, {
    "_id" : "R225",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN183598.value"
  }, {
    "_id" : "R226",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.this"
  }, {
    "_id" : "R227",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN175719.key"
  }, {
    "_id" : "R228",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN175719.value"
  }, {
    "_id" : "R229",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.pause@POLYN244728.partitions"
  }, {
    "_id" : "R230",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.resume@POLYN245050.partitions"
  }, {
    "_id" : "R231",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN419318.cause"
  }, {
    "_id" : "R232",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN422392.api"
  }, {
    "_id" : "R233",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN422392.error"
  }, {
    "_id" : "R234",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN422392.shouldResetMemberId"
  }, {
    "_id" : "R235",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN337170.partitions"
  }, {
    "_id" : "R236",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN337170.offsetResetStrategy"
  }, {
    "_id" : "R237",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN188560.key"
  }, {
    "_id" : "R238",
    "_libelle" : "java.io.PipedOutputStream.this"
  }, {
    "_id" : "R239",
    "_libelle" : "java.io.PipedOutputStream.sink"
  }, {
    "_id" : "R240",
    "_libelle" : "java.io.PipedInputStream.this"
  }, {
    "_id" : "R241",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN222001.b"
  }, {
    "_id" : "R242",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN222001.off"
  }, {
    "_id" : "R243",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN222001.len"
  }, {
    "_id" : "R244",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1500089.r"
  }, {
    "_id" : "R245",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1500089.f"
  }, {
    "_id" : "R246",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1511766.r"
  }, {
    "_id" : "R247",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1511766.f"
  }, {
    "_id" : "R248",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.merge@POLYN1519420.f"
  }, {
    "_id" : "R249",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN161193.b"
  }, {
    "_id" : "R250",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230439.topics"
  }, {
    "_id" : "R251",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN232263.topics"
  }, {
    "_id" : "R252",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN232263.listener"
  }, {
    "_id" : "R253",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230646.pattern"
  }, {
    "_id" : "R254",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230646.listener"
  }, {
    "_id" : "R255",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN315876.pattern"
  }, {
    "_id" : "R256",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN315876.listener"
  }, {
    "_id" : "R257",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN232077.pattern"
  }, {
    "_id" : "R258",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN335185.tp"
  }, {
    "_id" : "R259",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN335185.preferredReadReplicaId"
  }, {
    "_id" : "R260",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN335185.timeMs"
  }, {
    "_id" : "R261",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN337734.partitions"
  }, {
    "_id" : "R262",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN337734.nextAllowResetTimeMs"
  }, {
    "_id" : "R263",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN342109.partitions"
  }, {
    "_id" : "R264",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN342109.nextRetryTimeMs"
  }, {
    "_id" : "R265",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeReporter@POLYN304163.reporter"
  }, {
    "_id" : "R266",
    "_libelle" : "org.apache.kafka.common.metrics.JmxReporter.LOCK"
  }, {
    "_id" : "R267",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.this"
  }, {
    "_id" : "R268",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN162006.status"
  }, {
    "_id" : "R269",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN161627.status"
  }, {
    "_id" : "R270",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN162694.status"
  }, {
    "_id" : "R271",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN162151.status"
  }, {
    "_id" : "R272",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageReaderImpl.offsetReadFutures"
  }, {
    "_id" : "R273",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.this"
  }, {
    "_id" : "R274",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.configure@POLYN175076.configs"
  }, {
    "_id" : "R275",
    "_libelle" : "java.io.PipedWriter.this"
  }, {
    "_id" : "R276",
    "_libelle" : "java.io.PipedWriter.sink"
  }, {
    "_id" : "R277",
    "_libelle" : "java.io.PipedReader.this"
  }, {
    "_id" : "R278",
    "_libelle" : "java.io.PipedReader.receive@POLYN202611.c"
  }, {
    "_id" : "R279",
    "_libelle" : "java.io.PipedReader.receive@POLYN202611.off"
  }, {
    "_id" : "R280",
    "_libelle" : "java.io.PipedReader.receive@POLYN202611.len"
  }, {
    "_id" : "R281",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.topicLevelSensors"
  }, {
    "_id" : "R282",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.this"
  }, {
    "_id" : "R283",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN237672.key"
  }, {
    "_id" : "R284",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN237672.value"
  }, {
    "_id" : "R285",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN237672.windowStartTimestamp"
  }, {
    "_id" : "R286",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN258412.key"
  }, {
    "_id" : "R287",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN258412.value"
  }, {
    "_id" : "R288",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.this"
  }, {
    "_id" : "R289",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN260901.key"
  }, {
    "_id" : "R290",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN260901.value"
  }, {
    "_id" : "R291",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN260901.windowStartTimestamp"
  }, {
    "_id" : "R292",
    "_libelle" : "java.io.PipedOutputStream.connect@POLYN172139.snk"
  }, {
    "_id" : "R293",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN220894.b"
  }, {
    "_id" : "R294",
    "_libelle" : "java.io.PipedWriter.connect@POLYN171369.snk"
  }, {
    "_id" : "R295",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoinIfNecessary@POLYN422870.shortReason"
  }, {
    "_id" : "R296",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoinIfNecessary@POLYN422870.fullReason"
  }, {
    "_id" : "R297",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.assignPartitionsLock"
  }, {
    "_id" : "R298",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.this"
  }, {
    "_id" : "R299",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.writeEntries@POLYN156103.committedOffsets"
  }, {
    "_id" : "R300",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.assign@POLYN232641.partitions"
  }, {
    "_id" : "R301",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.addRecord@POLYN237145.record"
  }, {
    "_id" : "R302",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setException@POLYN238090.exception"
  }, {
    "_id" : "R303",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN238221.exception"
  }, {
    "_id" : "R304",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN239446.callback"
  }, {
    "_id" : "R305",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.this"
  }, {
    "_id" : "R306",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.addTransientTopics@POLYN152696.topics"
  }, {
    "_id" : "R307",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN166545.fatalException"
  }, {
    "_id" : "R308",
    "_libelle" : "org.apache.kafka.clients.Metadata.fatalError@POLYN266193.exception"
  }, {
    "_id" : "R309",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.this"
  }, {
    "_id" : "R310",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.this"
  }, {
    "_id" : "R311",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeTaskConfigs@POLYN169901.connector"
  }, {
    "_id" : "R312",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN170549.connector"
  }, {
    "_id" : "R313",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN170549.configs"
  }, {
    "_id" : "R314",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.setAclMutator@POLYN171309.aclMutator"
  }, {
    "_id" : "R315",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.this"
  }, {
    "_id" : "R316",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.write@POLYN178243.snapshot"
  }, {
    "_id" : "R317",
    "_libelle" : "org.apache.kafka.streams.state.internals.DelegatingPeekingKeyValueIterator.this"
  }, {
    "_id" : "R318",
    "_libelle" : "org.apache.kafka.streams.state.internals.KeyValueSegment.this"
  }, {
    "_id" : "R319",
    "_libelle" : "org.apache.kafka.streams.state.internals.KeyValueSegment.deleteRange@POLYN150370.keyFrom"
  }, {
    "_id" : "R320",
    "_libelle" : "org.apache.kafka.streams.state.internals.KeyValueSegment.deleteRange@POLYN150370.keyTo"
  }, {
    "_id" : "R321",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.this"
  }, {
    "_id" : "R322",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.calculateNextWindow@POLYN161114.force"
  }, {
    "_id" : "R323",
    "_libelle" : "java.io.FileInputStream.closeLock"
  }, {
    "_id" : "R324",
    "_libelle" : "java.io.FileOutputStream.closeLock"
  }, {
    "_id" : "R325",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.close@POLYN247744.timeout"
  }, {
    "_id" : "R326",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.metrics@POLYN202642.errorHandlingMetrics"
  }, {
    "_id" : "R327",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.this"
  }, {
    "_id" : "R328",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN166893.newState"
  }, {
    "_id" : "R329",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN166893.now"
  }, {
    "_id" : "R330",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelSensors"
  }, {
    "_id" : "R331",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.setNamedTopology@POLYN488614.namedTopology"
  }, {
    "_id" : "R332",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setOffsetsException@POLYN238353.exception"
  }, {
    "_id" : "R333",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seekToBeginning@POLYN242914.partitions"
  }, {
    "_id" : "R334",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seekToEnd@POLYN243338.partitions"
  }, {
    "_id" : "R335",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN248297.task"
  }, {
    "_id" : "R336",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setLastRebalanceTime@POLYN447285.timestamp"
  }, {
    "_id" : "R337",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewGeneration@POLYN448095.generation"
  }, {
    "_id" : "R338",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewState@POLYN448230.state"
  }, {
    "_id" : "R339",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.this"
  }, {
    "_id" : "R340",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.put@POLYN147220.key"
  }, {
    "_id" : "R341",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.put@POLYN147220.value"
  }, {
    "_id" : "R342",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.addReporter@POLYN303807.reporter"
  }, {
    "_id" : "R343",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.putAll@POLYN161071.entries"
  }, {
    "_id" : "R344",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.this"
  }, {
    "_id" : "R345",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.commitTransaction@POLYN153751.record"
  }, {
    "_id" : "R346",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.abortTransaction@POLYN154115.record"
  }, {
    "_id" : "R347",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN224622.callback"
  }, {
    "_id" : "R348",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN224853.connName"
  }, {
    "_id" : "R349",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN224853.callback"
  }, {
    "_id" : "R350",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN227286.connName"
  }, {
    "_id" : "R351",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN227286.config"
  }, {
    "_id" : "R352",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN227286.allowReplace"
  }, {
    "_id" : "R353",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN227286.callback"
  }, {
    "_id" : "R354",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN230451.connName"
  }, {
    "_id" : "R355",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN230451.callback"
  }, {
    "_id" : "R356",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN168931.connector"
  }, {
    "_id" : "R357",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN168931.properties"
  }, {
    "_id" : "R358",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeConnectorConfig@POLYN169550.connector"
  }, {
    "_id" : "R359",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN171434.connector"
  }, {
    "_id" : "R360",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN171434.state"
  }, {
    "_id" : "R361",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.setUpdateListener@POLYN172259.listener"
  }, {
    "_id" : "R362",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.loadSnapshot@POLYN172816.acls"
  }, {
    "_id" : "R363",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN168431.newLeader"
  }, {
    "_id" : "R364",
    "_libelle" : "java.io.BufferedInputStream.this"
  }, {
    "_id" : "R365",
    "_libelle" : "java.io.BufferedInputStream.mark@POLYN249913.readlimit"
  }, {
    "_id" : "R366",
    "_libelle" : "java.io.PipedReader.receive@POLYN200933.c"
  }, {
    "_id" : "R367",
    "_libelle" : "java.net.ServerSocket.setSocketFactory@POLYN328585.fac"
  }, {
    "_id" : "R368",
    "_libelle" : "java.net.Socket.setSocketImplFactory@POLYN510598.fac"
  }, {
    "_id" : "R369",
    "_libelle" : "java.util.Hashtable.forEach@POLYN446340.action"
  }, {
    "_id" : "R370",
    "_libelle" : "java.util.Hashtable.replaceAll@POLYN447246.function"
  }, {
    "_id" : "R371",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.this"
  }, {
    "_id" : "R372",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN255514.activePartitionHostMap"
  }, {
    "_id" : "R373",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN255514.standbyPartitionHostMap"
  }, {
    "_id" : "R374",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN255514.clusterMetadata"
  }, {
    "_id" : "R375",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.putAll@POLYN184682.entries"
  }, {
    "_id" : "R376",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.setListener@POLYN192868.listener"
  }, {
    "_id" : "R377",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDbIterator.this"
  }, {
    "_id" : "R378",
    "_libelle" : "org.apache.kafka.trogdor.workload.PayloadIterator.this"
  }, {
    "_id" : "R379",
    "_libelle" : "org.apache.kafka.trogdor.workload.PayloadIterator.seek@POLYN145858.position"
  }, {
    "_id" : "R380",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.this"
  }, {
    "_id" : "R381",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.delay@POLYN149141.amount"
  }, {
    "_id" : "R382",
    "_libelle" : "java.io.InputStream.mark@POLYN252972.readlimit"
  } ],
  "_lesDeadlocksSequences" : [ {
    "_id" : "0",
    "_lesItems" : [ "S0:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN184293", "S0:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN184293", "S0:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN198336", "S0:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155789 (R0 in line [00067],R1 in line [00067])", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857864", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN858153", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN858153", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.updateAssignmentMetadataIfNeeded@POLYN860050", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.updateFetchPositions@POLYN912686", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.resetInitializingPositions@POLYN339608 (R2 in line [00695])", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN337586", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336975 (R2 in line [00636],R3 in line [00636],R4 in line [00636])", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323964", "S0:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755", "S0:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755.dummymethode_00114" ]
  }, {
    "_id" : "1",
    "_lesItems" : [ "S1:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN184293", "S1:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN184293", "S1:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN198336", "S1:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155789 (R0 in line [00067],R1 in line [00067])", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857864", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN858153", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN858153", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN860507", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN860507", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN499009", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN531467", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN531467", "S1:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN334365 (R2 in line [00576],R9 in line [00576],R10 in line [00576])", "S1:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323964", "S1:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755", "S1:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755.dummymethode_00114" ]
  }, {
    "_id" : "2",
    "_lesItems" : [ "S2:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN184293", "S2:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN184293", "S2:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN198336", "S2:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155789 (R0 in line [00067],R1 in line [00067])", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857864", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN858153", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN858153", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN860507", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN860507", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN499009", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN531467", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN531467", "S2:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN334555 (R2 in line [00580],R11 in line [00580],R12 in line [00580])", "S2:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323964", "S2:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755", "S2:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755.dummymethode_00114" ]
  }, {
    "_id" : "3",
    "_lesItems" : [ "S3:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN184293", "S3:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN184293", "S3:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN198336", "S3:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155789 (R0 in line [00067],R1 in line [00067])", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857864", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN858153", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN858153", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN860507", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN860507", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN499009", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN531467", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN531467", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN334745 (R2 in line [00584],R13 in line [00584],R14 in line [00584])", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323964", "S3:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755", "S3:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755.dummymethode_00114" ]
  }, {
    "_id" : "4",
    "_lesItems" : [ "S4:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN184293", "S4:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN184293", "S4:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN198336", "S4:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155789 (R0 in line [00067],R1 in line [00067])", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857864", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN858153", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN858153", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN860507", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN860507", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN499009", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN531467", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN531467", "S4:org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN342515 (R2 in line [00755],R16 in line [00755])", "S4:org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN171555", "S4:java.util.HashMap.HashIterator.remove@POLYN675690", "S4:java.util.HashMap.HashIterator.remove@POLYN675690.dummymethode_01445" ]
  }, {
    "_id" : "5",
    "_lesItems" : [ "S5:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN184293", "S5:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN184293", "S5:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN198336", "S5:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155789 (R0 in line [00067],R1 in line [00067])", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857864", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN858153", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN858153", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN860507", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN860507", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN499009", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN499009", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN501290", "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN327455 (R2 in line [00443],R17 in line [00443],R18 in line [00443])", "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323964", "S5:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755", "S5:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755.dummymethode_00114" ]
  }, {
    "_id" : "6",
    "_lesItems" : [ "S6:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN516513", "S6:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN516513", "S6:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514676", "S6:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514676", "S6:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN375366", "S6:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN375366", "S6:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375726", "S6:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375726", "S6:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN851168", "S6:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN851168", "S6:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN411186", "S6:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN411186", "S6:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN320019 (R2 in line [00273],R24 in line [00273])", "S6:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN320019.dummymethode_00277" ]
  }, {
    "_id" : "7",
    "_lesItems" : [ "S7:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN233236 (R47 in line [00163])", "S7:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN233470 (R47 in line [00168],R151 in line [00175])", "S7:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN233470 (R47 in line [00168],R151 in line [00175])", "S7:org.apache.kafka.clients.consumer.MockConsumer.updateFetchPosition@POLYN248977", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.seek@POLYN324673", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN324483 (R2 in line [00378],R152 in line [00378],R153 in line [00378])", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323964", "S7:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755", "S7:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755.dummymethode_00114" ]
  }, {
    "_id" : "8",
    "_lesItems" : [ "S8:org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN904284", "S8:org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN904284", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN333627 (R2 in line [00561],R154 in line [00561])", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323964", "S8:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755", "S8:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755.dummymethode_00114" ]
  }, {
    "_id" : "9",
    "_lesItems" : [ "S9:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN895127", "S9:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN895127", "S9:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN341812 (R2 in line [00737],R167 in line [00737])", "S9:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323964", "S9:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755", "S9:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755.dummymethode_00114" ]
  }, {
    "_id" : "10",
    "_lesItems" : [ "S10:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN895885", "S10:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN895885", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN341963 (R2 in line [00741],R168 in line [00741])", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323964", "S10:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755", "S10:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755.dummymethode_00114" ]
  }, {
    "_id" : "11",
    "_lesItems" : [ "S11:org.apache.kafka.jmh.consumer.SubscriptionStateBenchmark.setup@POLYN156897", "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN332060 (R2 in line [00529],R169 in line [00529])", "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323964", "S11:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755", "S11:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755.dummymethode_00114" ]
  }, {
    "_id" : "12",
    "_lesItems" : [ "S12:org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetIfNeeded@POLYN504247", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN325074 (R2 in line [00390],R210 in line [00390],R211 in line [00390],R212 in line [00390])", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN324329", "S12:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755", "S12:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755.dummymethode_00114" ]
  }, {
    "_id" : "13",
    "_lesItems" : [ "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN337170 (R2 in line [00640],R235 in line [00640],R236 in line [00640])", "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN337170.dummymethode_00641" ]
  }, {
    "_id" : "14",
    "_lesItems" : [ "S14:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230646 (R47 in line [00113],R253 in line [00113],R254 in line [00113])", "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN315876 (R2 in line [00172],R255 in line [00172],R256 in line [00172])", "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN320920", "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN320920.dummymethode_00292" ]
  }, {
    "_id" : "15",
    "_lesItems" : [ "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeValidatePositionForCurrentLeader@POLYN327927 (R2 in line [00456])", "S15:org.apache.kafka.clients.ApiVersions.get@POLYN150966 (R80 in line [00048])", "S15:java.util.Map.get@POLYN429331" ]
  }, {
    "_id" : "16",
    "_lesItems" : [ "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN335185 (R2 in line [00596],R258 in line [00596],R259 in line [00596],R260 in line [00596])", "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323964", "S16:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755", "S16:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755.dummymethode_00114" ]
  }, {
    "_id" : "17",
    "_lesItems" : [ "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN337734 (R2 in line [00651],R261 in line [00651],R262 in line [00651])", "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323964", "S17:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755", "S17:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755.dummymethode_00114" ]
  }, {
    "_id" : "18",
    "_lesItems" : [ "S18:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN342109 (R2 in line [00745],R263 in line [00745],R264 in line [00745])", "S18:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN324329", "S18:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755", "S18:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755.dummymethode_00114" ]
  }, {
    "_id" : "19",
    "_lesItems" : [ "S19:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN829818", "S19:org.apache.kafka.clients.Metadata.bootstrap@POLYN253305 (R8 in line [00238],R71 in line [00238])", "S19:org.apache.kafka.clients.Metadata.bootstrap@POLYN253305.dummymethode_00239" ]
  }, {
    "_id" : "20",
    "_lesItems" : [ "S20:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN548789", "S20:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN556530", "S20:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN556530", "S20:org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN264225 (R8 in line [00450],R78 in line [00450])", "S20:org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN264225.dummymethode_00451" ]
  }, {
    "_id" : "21",
    "_lesItems" : [ "S21:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN253697 (R8 in line [00249],R99 in line [00249],R100 in line [00249],R101 in line [00249])", "S21:org.apache.kafka.clients.Metadata.update@POLYN254271 (R8 in line [00263],R102 in line [00263],R103 in line [00263],R104 in line [00263],R105 in line [00263])", "S21:org.apache.kafka.clients.Metadata.update@POLYN254271.dummymethode_00264" ]
  }, {
    "_id" : "22",
    "_lesItems" : [ "S22:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleServerDisconnect@POLYN369065", "S22:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleServerDisconnect@POLYN369065", "S22:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleFailedRequest@POLYN370006", "S22:org.apache.kafka.clients.Metadata.failedUpdate@POLYN265933 (R8 in line [00490],R177 in line [00490])", "S22:org.apache.kafka.clients.Metadata.failedUpdate@POLYN265933.dummymethode_00491" ]
  }, {
    "_id" : "23",
    "_lesItems" : [ "S23:org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN166545 (R56 in line [00145],R307 in line [00145])", "S23:org.apache.kafka.clients.Metadata.fatalError@POLYN266193 (R8 in line [00500],R308 in line [00500])", "S23:org.apache.kafka.clients.Metadata.fatalError@POLYN266193.dummymethode_00501" ]
  }, {
    "_id" : "24",
    "_lesItems" : [ "S24:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN184293", "S24:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN184293", "S24:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN198336", "S24:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155789 (R0 in line [00067],R1 in line [00067])", "S24:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857864", "S24:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN858153", "S24:org.apache.kafka.clients.consumer.KafkaConsumer.acquireAndEnsureOpen@POLYN913348", "S24:org.apache.kafka.clients.consumer.KafkaConsumer.acquire@POLYN913803" ]
  }, {
    "_id" : "25",
    "_lesItems" : [ "S25:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN184293", "S25:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN184293", "S25:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN198336", "S25:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155789 (R0 in line [00067],R1 in line [00067])", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857864", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN858153", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN858153", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.updateAssignmentMetadataIfNeeded@POLYN860050", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.updateFetchPositions@POLYN912686", "S25:org.apache.kafka.clients.consumer.internals.SubscriptionState.hasAllFetchPositions@POLYN338474 (R2 in line [00669])", "S25:org.apache.kafka.common.internals.PartitionStates.stateIterator@POLYN173077" ]
  }, {
    "_id" : "26",
    "_lesItems" : [ "S26:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN184293", "S26:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN184293", "S26:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN198336", "S26:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155789 (R0 in line [00067],R1 in line [00067])", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857864", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN858153", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN858153", "S26:org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.recordPollEnd@POLYN159682", "S26:org.apache.kafka.common.metrics.Sensor.record@POLYN214437", "S26:org.apache.kafka.common.metrics.Sensor.recordInternal@POLYN214721 (R6 in line [00232])", "S26:org.apache.kafka.common.metrics.Sensor.recordInternal@POLYN214721.dummymethode_00231" ]
  }, {
    "_id" : "27",
    "_lesItems" : [ "S27:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN184293", "S27:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN184293", "S27:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN198336", "S27:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155789 (R0 in line [00067],R1 in line [00067])", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857864", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN858153", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN858153", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN860507", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN860507", "S27:org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN479931 (R7 in line [00248])", "S27:org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.maybeUpdateAssignment@POLYN563634", "S27:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignmentId@POLYN314925 (R2 in line [00149])", "S27:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignmentId@POLYN314925.dummymethode_00150" ]
  }, {
    "_id" : "28",
    "_lesItems" : [ "S28:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN184293", "S28:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN184293", "S28:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN198336", "S28:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155789 (R0 in line [00067],R1 in line [00067])", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857864", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN858153", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN858153", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN860507", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN860507", "S28:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN499009", "S28:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN531467", "S28:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN531467", "S28:org.apache.kafka.clients.Metadata.requestUpdate@POLYN248791 (R8 in line [00145])", "S28:org.apache.kafka.clients.Metadata.requestUpdate@POLYN248791.dummymethode_00146" ]
  }, {
    "_id" : "29",
    "_lesItems" : [ "S29:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN184293", "S29:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN184293", "S29:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN198336", "S29:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155789 (R0 in line [00067],R1 in line [00067])", "S29:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155789 (R0 in line [00067],R1 in line [00067])", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857864", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN858153", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.acquireAndEnsureOpen@POLYN913348", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.acquire@POLYN913803" ]
  }, {
    "_id" : "30",
    "_lesItems" : [ "S30:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN516513", "S30:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN516513", "S30:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514676", "S30:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514676", "S30:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN538569 (R27 in line [01039],R28 in line [01051])", "S30:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN548158 (R29 in line [01215])", "S30:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN548158.dummymethode_01214" ]
  }, {
    "_id" : "31",
    "_lesItems" : [ "S31:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN516513", "S31:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN516513", "S31:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514676", "S31:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514676", "S31:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN538569 (R27 in line [01039],R28 in line [01051])", "S31:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN538569 (R27 in line [01039],R28 in line [01051])", "S31:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN548158 (R29 in line [01215])", "S31:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN548158.dummymethode_01214" ]
  }, {
    "_id" : "32",
    "_lesItems" : [ "S32:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN516513", "S32:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN516513", "S32:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514676", "S32:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514676", "S32:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN538569 (R27 in line [01039],R28 in line [01051])", "S32:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN538569 (R27 in line [01039],R28 in line [01051])", "S32:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN375366", "S32:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN375366", "S32:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN335513 (R21 in line [00215])", "S32:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN335513.dummymethode_00216" ]
  }, {
    "_id" : "33",
    "_lesItems" : [ "S33:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN516513", "S33:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN516513", "S33:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514676", "S33:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514676", "S33:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN538569 (R27 in line [01039],R28 in line [01051])", "S33:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN538569 (R27 in line [01039],R28 in line [01051])", "S33:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN375366", "S33:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN375366", "S33:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375726", "S33:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375726", "S33:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN851168", "S33:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN851168", "S33:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN425224 (R22 in line [01103])", "S33:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN425224.dummymethode_01104" ]
  }, {
    "_id" : "34",
    "_lesItems" : [ "S34:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN516513", "S34:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN516513", "S34:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514676", "S34:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514676", "S34:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN538569 (R27 in line [01039],R28 in line [01051])", "S34:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN538569 (R27 in line [01039],R28 in line [01051])", "S34:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN375366", "S34:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN375366", "S34:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375726", "S34:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375726", "S34:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN851168", "S34:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN851168", "S34:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN411186", "S34:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN411186", "S34:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN390609", "S34:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN322676 (R2 in line [00334])", "S34:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN322676.dummymethode_00335" ]
  }, {
    "_id" : "35",
    "_lesItems" : [ "S35:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN516513", "S35:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN516513", "S35:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514676", "S35:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514676", "S35:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN538569 (R27 in line [01039],R28 in line [01051])", "S35:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN538569 (R27 in line [01039],R28 in line [01051])", "S35:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN375366", "S35:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN375366", "S35:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375726", "S35:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375726", "S35:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelSensors@POLYN290333 (R25 in line [00301])", "S35:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN288816", "S35:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN288816.dummymethode_00263" ]
  }, {
    "_id" : "36",
    "_lesItems" : [ "S36:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN516513", "S36:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN516513", "S36:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514676", "S36:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514676", "S36:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN538569 (R27 in line [01039],R28 in line [01051])", "S36:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN538569 (R27 in line [01039],R28 in line [01051])", "S36:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN375366", "S36:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN375366", "S36:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375726", "S36:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375726", "S36:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelMetrics@POLYN290881 (R26 in line [00310])", "S36:java.util.Hashtable.remove@POLYN477680" ]
  }, {
    "_id" : "37",
    "_lesItems" : [ "S37:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN516513", "S37:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN516513", "S37:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514676", "S37:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514676", "S37:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN375366", "S37:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN375366", "S37:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375726", "S37:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375726", "S37:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN851168", "S37:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN851168", "S37:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN425224 (R22 in line [01103])", "S37:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN425224 (R22 in line [01103])", "S37:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.pollNoWakeup@POLYN258320", "S37:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.poll@POLYN256455", "S37:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.UnsentRequests.clean@POLYN273834 (R23 in line [00696])" ]
  }, {
    "_id" : "38",
    "_lesItems" : [ "S38:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN516513", "S38:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN516513", "S38:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514676", "S38:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514676", "S38:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN375366", "S38:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN375366", "S38:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375726", "S38:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375726", "S38:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN851168", "S38:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN851168", "S38:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN425224 (R22 in line [01103])", "S38:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN425224 (R22 in line [01103])", "S38:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.pollNoWakeup@POLYN258320", "S38:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.poll@POLYN256455", "S38:org.apache.kafka.clients.Metadata.maybeThrowAnyException@POLYN263483 (R8 in line [00428])", "S38:org.apache.kafka.clients.Metadata.clearErrorsAndMaybeThrowException@POLYN264411", "S38:org.apache.kafka.clients.Metadata.clearErrorsAndMaybeThrowException@POLYN264411.dummymethode_00456" ]
  }, {
    "_id" : "39",
    "_lesItems" : [ "S39:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN375034", "S39:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN375034", "S39:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToClients@POLYN388147", "S39:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.populateClientStatesMap@POLYN392002", "S39:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.fetchCommittedOffsets@POLYN415735", "S39:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetFetchRequest@POLYN436768", "S39:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN418664 (R22 in line [00926])", "S39:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN419473 (R22 in line [00947],R41 in line [00947],R42 in line [00947])", "S39:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN419473.dummymethode_00949" ]
  }, {
    "_id" : "40",
    "_lesItems" : [ "S40:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.close@POLYN417782", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN389258 (R22 in line [00240])", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN389258 (R22 in line [00240])", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN419119 (R22 in line [00939],R70 in line [00939])", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN419119.dummymethode_00940" ]
  }, {
    "_id" : "41",
    "_lesItems" : [ "S41:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN231679", "S41:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN231679", "S41:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN392391 (R22 in line [00322],R147 in line [00322])", "S41:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.failureCause@POLYN440720" ]
  }, {
    "_id" : "42",
    "_lesItems" : [ "S42:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatResponseHandler.handle@POLYN428726", "S42:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatResponseHandler.handle@POLYN428726", "S42:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN423125 (R22 in line [01039],R161 in line [01039])", "S42:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN423433 (R22 in line [01050],R162 in line [01050],R163 in line [01050])", "S42:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN423433 (R22 in line [01050],R162 in line [01050],R163 in line [01050])", "S42:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN423433.dummymethode_01053" ]
  }, {
    "_id" : "43",
    "_lesItems" : [ "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureActiveGroup@POLYN393710", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN395334", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN422094 (R22 in line [01017],R206 in line [01017],R207 in line [01017])", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN421395 (R22 in line [01004],R208 in line [01004],R209 in line [01004])", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN421395.dummymethode_01005" ]
  }, {
    "_id" : "44",
    "_lesItems" : [ "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN419318 (R22 in line [00943],R231 in line [00943])", "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN419473 (R22 in line [00947],R41 in line [00947],R42 in line [00947])", "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN419473.dummymethode_00949" ]
  }, {
    "_id" : "45",
    "_lesItems" : [ "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN422392 (R22 in line [01023],R232 in line [01023],R233 in line [01023],R234 in line [01023])", "S45:java.lang.String.format@POLYN907701", "S45:java.lang.String.format@POLYN907701.dummymethode_00001" ]
  }, {
    "_id" : "46",
    "_lesItems" : [ "S46:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.rejoinNeededOrPending@POLYN412522", "S46:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoinIfNecessary@POLYN422870 (R22 in line [01032],R295 in line [01032],R296 in line [01032])", "S46:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN423433 (R22 in line [01050],R162 in line [01050],R163 in line [01050])", "S46:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN423433 (R22 in line [01050],R162 in line [01050],R163 in line [01050])", "S46:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN423433.dummymethode_01053" ]
  }, {
    "_id" : "47",
    "_lesItems" : [ "S47:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setLastRebalanceTime@POLYN447285 (R22 in line [01592],R336 in line [01592])", "S47:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setLastRebalanceTime@POLYN447285.dummymethode_01593" ]
  }, {
    "_id" : "48",
    "_lesItems" : [ "S48:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewGeneration@POLYN448095 (R22 in line [01617],R337 in line [01617])", "S48:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewGeneration@POLYN448095.dummymethode_01618" ]
  }, {
    "_id" : "49",
    "_lesItems" : [ "S49:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewState@POLYN448230 (R22 in line [01621],R338 in line [01621])", "S49:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewState@POLYN448230.dummymethode_01622" ]
  }, {
    "_id" : "50",
    "_lesItems" : [ "S50:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN540777", "S50:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN541853 (R27 in line [01113])", "S50:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN375366", "S50:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN375366", "S50:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN335513 (R21 in line [00215])", "S50:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN335513.dummymethode_00216" ]
  }, {
    "_id" : "51",
    "_lesItems" : [ "S51:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN540777", "S51:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN541853 (R27 in line [01113])", "S51:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN375366", "S51:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN375366", "S51:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375726", "S51:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375726", "S51:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN851168", "S51:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN851168", "S51:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN425224 (R22 in line [01103])", "S51:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN425224.dummymethode_01104" ]
  }, {
    "_id" : "52",
    "_lesItems" : [ "S52:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN540777", "S52:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN541853 (R27 in line [01113])", "S52:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN375366", "S52:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN375366", "S52:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375726", "S52:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375726", "S52:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN851168", "S52:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN851168", "S52:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN411186", "S52:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN411186", "S52:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN390609", "S52:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN322676 (R2 in line [00334])", "S52:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN322676.dummymethode_00335" ]
  }, {
    "_id" : "53",
    "_lesItems" : [ "S53:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN540777", "S53:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN541853 (R27 in line [01113])", "S53:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN375366", "S53:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN375366", "S53:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375726", "S53:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375726", "S53:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelSensors@POLYN290333 (R25 in line [00301])", "S53:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN288816", "S53:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN288816.dummymethode_00263" ]
  }, {
    "_id" : "54",
    "_lesItems" : [ "S54:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN540777", "S54:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN541853 (R27 in line [01113])", "S54:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN375366", "S54:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN375366", "S54:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375726", "S54:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375726", "S54:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelMetrics@POLYN290881 (R26 in line [00310])", "S54:java.util.Hashtable.remove@POLYN477680" ]
  }, {
    "_id" : "55",
    "_lesItems" : [ "S55:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN467573", "S55:org.apache.kafka.clients.producer.internals.Sender.run@POLYN307002", "S55:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN309209", "S55:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN391241 (R30 in line [00718])", "S55:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN376277 (R30 in line [00386],R52 in line [00386])", "S55:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN376277.dummymethode_00388" ]
  }, {
    "_id" : "56",
    "_lesItems" : [ "S56:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN467573", "S56:org.apache.kafka.clients.producer.internals.Sender.run@POLYN307002", "S56:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN309209", "S56:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN391241 (R30 in line [00718])", "S56:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN376763 (R30 in line [00397],R53 in line [00397])", "S56:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN376763.dummymethode_00398" ]
  }, {
    "_id" : "57",
    "_lesItems" : [ "S57:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN467573", "S57:org.apache.kafka.clients.producer.internals.Sender.run@POLYN307002", "S57:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN309209", "S57:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN391241 (R30 in line [00718])", "S57:org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN379510 (R30 in line [00468],R54 in line [00468])", "S57:org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN379510.dummymethode_00469" ]
  }, {
    "_id" : "58",
    "_lesItems" : [ "S58:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN467573", "S58:org.apache.kafka.clients.producer.internals.Sender.run@POLYN307002", "S58:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN309209", "S58:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN309209", "S58:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN395259 (R30 in line [00810],R55 in line [00810])", "S58:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN395259.dummymethode_00812" ]
  }, {
    "_id" : "59",
    "_lesItems" : [ "S59:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN467573", "S59:org.apache.kafka.clients.producer.internals.Sender.run@POLYN307002", "S59:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN309209", "S59:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN309209", "S59:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN310399", "S59:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN355136", "S59:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN350633 (R59 in line [00799])", "S59:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN377773 (R30 in line [00426],R60 in line [00426])", "S59:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN153549", "S59:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN143804", "S59:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN143804.dummymethode_00026" ]
  }, {
    "_id" : "60",
    "_lesItems" : [ "S60:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN467573", "S60:org.apache.kafka.clients.producer.internals.Sender.run@POLYN307002", "S60:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN309209", "S60:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN309209", "S60:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN310399", "S60:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN355136", "S60:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN350633 (R59 in line [00799])", "S60:org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN381881 (R30 in line [00521],R61 in line [00521],R62 in line [00521])", "S60:org.apache.kafka.clients.producer.internals.TransactionManager.sequenceNumber@POLYN381515 (R30 in line [00510])", "S60:org.apache.kafka.clients.producer.internals.TxnPartitionMap.getOrCreate@POLYN152214", "S60:org.apache.kafka.clients.producer.internals.TxnPartitionMap.getOrCreate@POLYN152214.dummymethode_00043" ]
  }, {
    "_id" : "61",
    "_lesItems" : [ "S61:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN467573", "S61:org.apache.kafka.clients.producer.internals.Sender.run@POLYN307002", "S61:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN309209", "S61:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN309209", "S61:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN310399", "S61:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN331081", "S61:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386872 (R30 in line [00624],R64 in line [00624],R65 in line [00624],R66 in line [00624])", "S61:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN386277 (R30 in line [00610],R67 in line [00610])", "S61:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN376763 (R30 in line [00397],R53 in line [00397])", "S61:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN376763.dummymethode_00398" ]
  }, {
    "_id" : "62",
    "_lesItems" : [ "S62:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN467573", "S62:org.apache.kafka.clients.producer.internals.Sender.run@POLYN307002", "S62:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN309209", "S62:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN309209", "S62:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN310399", "S62:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN331081", "S62:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386872 (R30 in line [00624],R64 in line [00624],R65 in line [00624],R66 in line [00624])", "S62:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN383698 (R30 in line [00557],R68 in line [00557])", "S62:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN151822", "S62:java.util.Map.get@POLYN429331" ]
  }, {
    "_id" : "63",
    "_lesItems" : [ "S63:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN467573", "S63:org.apache.kafka.clients.producer.internals.Sender.run@POLYN307002", "S63:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN309209", "S63:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN309209", "S63:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN310399", "S63:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN390635 (R30 in line [00708],R69 in line [00708])", "S63:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN390635.dummymethode_00710" ]
  }, {
    "_id" : "64",
    "_lesItems" : [ "S64:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN548789", "S64:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN548789", "S64:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373954 (R30 in line [00327],R82 in line [00327])", "S64:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN401974" ]
  }, {
    "_id" : "65",
    "_lesItems" : [ "S65:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN314859", "S65:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN314859", "S65:org.apache.kafka.clients.producer.internals.Sender.maybeFindCoordinatorAndRetry@POLYN318546", "S65:org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN395081 (R30 in line [00805],R116 in line [00805])", "S65:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.setRetry@POLYN411373", "S65:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.setRetry@POLYN411373.dummymethode_01228" ]
  }, {
    "_id" : "66",
    "_lesItems" : [ "S66:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN320369", "S66:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN320369", "S66:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN327785", "S66:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN385725 (R30 in line [00599],R156 in line [00599],R157 in line [00599])", "S66:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateLastAckedSequence@POLYN383990", "S66:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateLastAckedSequence@POLYN383990.dummymethode_00566" ]
  }, {
    "_id" : "67",
    "_lesItems" : [ "S67:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN323931", "S67:org.apache.kafka.clients.producer.internals.RecordAccumulator.splitAndReenqueue@POLYN337729 (R179 in line [00482])", "S67:org.apache.kafka.clients.producer.internals.TransactionManager.addInFlightBatch@POLYN382275 (R30 in line [00528],R181 in line [00528])", "S67:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN151822", "S67:java.util.Map.get@POLYN429331" ]
  }, {
    "_id" : "68",
    "_lesItems" : [ "S68:org.apache.kafka.clients.producer.internals.TransactionManager.isPartitionAdded@POLYN377197 (R30 in line [00407])", "S68:java.util.Hashtable.contains@POLYN419458 (R43 in line [00307])", "S68:java.util.Hashtable.contains@POLYN419458.dummymethode_00312" ]
  }, {
    "_id" : "69",
    "_lesItems" : [ "S69:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN404546", "S69:java.util.Hashtable.putAll@POLYN430824 (R43 in line [00536],R44 in line [00536])", "S69:java.util.Hashtable.put@POLYN427350 (R43 in line [00471])", "S69:java.util.Hashtable.put@POLYN427350.dummymethode_00478" ]
  }, {
    "_id" : "70",
    "_lesItems" : [ "S70:java.util.Hashtable.forEach@POLYN446340 (R43 in line [00888],R369 in line [00888])", "S70:java.util.Hashtable.forEach@POLYN446340.dummymethode_00889" ]
  }, {
    "_id" : "71",
    "_lesItems" : [ "S71:java.util.Hashtable.replaceAll@POLYN447246 (R43 in line [00908],R370 in line [00908])", "S71:java.util.Hashtable.replaceAll@POLYN447246.dummymethode_00909" ]
  }, {
    "_id" : "72",
    "_lesItems" : [ "S72:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN526864", "S72:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN526864", "S72:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN543110 (R31 in line [00744])", "S72:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN543110 (R31 in line [00744])", "S72:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN188632", "S72:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN190563", "S72:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN190563", "S72:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN163713 (R35 in line [00072],R36 in line [00072],R37 in line [00072],R38 in line [00072])", "S72:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN163713.dummymethode_00075" ]
  }, {
    "_id" : "73",
    "_lesItems" : [ "S73:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN829818", "S73:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN829818", "S73:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN162933 (R35 in line [00060],R72 in line [00060],R73 in line [00060],R74 in line [00060],R75 in line [00060])", "S73:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN162933.dummymethode_00062" ]
  }, {
    "_id" : "74",
    "_lesItems" : [ "S74:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN526864", "S74:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN526864", "S74:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN543110 (R31 in line [00744])", "S74:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN543110 (R31 in line [00744])", "S74:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN188632", "S74:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN190563", "S74:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN190563", "S74:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN163713 (R35 in line [00072],R36 in line [00072],R37 in line [00072],R38 in line [00072])", "S74:org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN165648", "S74:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN303025 (R15 in line [00558])", "S74:java.util.HashMap.remove@POLYN651586", "S74:java.util.HashMap.remove@POLYN651586.dummymethode_01064" ]
  }, {
    "_id" : "75",
    "_lesItems" : [ "S75:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN526864", "S75:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN526864", "S75:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN543110 (R31 in line [00744])", "S75:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN543110 (R31 in line [00744])", "S75:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN188632", "S75:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN190563", "S75:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN190563", "S75:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN163713 (R35 in line [00072],R36 in line [00072],R37 in line [00072],R38 in line [00072])", "S75:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN163713 (R35 in line [00072],R36 in line [00072],R37 in line [00072],R38 in line [00072])", "S75:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN163713.dummymethode_00075" ]
  }, {
    "_id" : "76",
    "_lesItems" : [ "S76:org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.close@POLYN204361 (R39 in line [00335])", "S76:org.apache.kafka.connect.runtime.errors.ProcessingContext.close@POLYN184883", "S76:java.lang.Throwable.addSuppressed@POLYN390035 (R131 in line [01070],R132 in line [01070])", "S76:java.lang.Throwable.addSuppressed@POLYN390035.dummymethode_01074" ]
  }, {
    "_id" : "77",
    "_lesItems" : [ "S77:java.lang.Throwable.writeObject@POLYN387982 (R131 in line [01002],R198 in line [01002])", "S77:java.lang.Throwable.getOurStackTrace@POLYN382009 (R131 in line [00834])", "S77:java.lang.Throwable.getOurStackTrace@POLYN382009.dummymethode_00839" ]
  }, {
    "_id" : "78",
    "_lesItems" : [ "S78:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN375034", "S78:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN375034", "S78:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToClients@POLYN388147", "S78:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.populateClientStatesMap@POLYN392002", "S78:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.fetchCommittedOffsets@POLYN415735", "S78:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetFetchRequest@POLYN436768", "S78:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN418664 (R22 in line [00926])", "S78:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN419473 (R22 in line [00947],R41 in line [00947],R42 in line [00947])", "S78:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN419473 (R22 in line [00947],R41 in line [00947],R42 in line [00947])", "S78:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN419473.dummymethode_00949" ]
  }, {
    "_id" : "79",
    "_lesItems" : [ "S79:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN404546", "S79:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN410636", "S79:org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN244453 (R47 in line [00389],R48 in line [00389],R49 in line [00389])", "S79:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248819" ]
  }, {
    "_id" : "80",
    "_lesItems" : [ "S80:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN404546", "S80:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN410636", "S80:org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN243148 (R47 in line [00357],R50 in line [00357])", "S80:java.util.Map.putAll" ]
  }, {
    "_id" : "81",
    "_lesItems" : [ "S81:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN404546", "S81:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN410636", "S81:org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN243572 (R47 in line [00367],R51 in line [00367])", "S81:java.util.Map.putAll" ]
  }, {
    "_id" : "82",
    "_lesItems" : [ "S82:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN233236 (R47 in line [00163])", "S82:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN233470 (R47 in line [00168],R151 in line [00175])", "S82:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248819" ]
  }, {
    "_id" : "83",
    "_lesItems" : [ "S83:org.apache.kafka.clients.consumer.MockConsumer.rebalance@POLYN230037 (R47 in line [00096],R192 in line [00096])", "S83:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN320019 (R2 in line [00273],R24 in line [00273])", "S83:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN320019.dummymethode_00277" ]
  }, {
    "_id" : "84",
    "_lesItems" : [ "S84:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN239687 (R47 in line [00280])", "S84:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN240010", "S84:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN239115 (R47 in line [00264],R193 in line [00264])", "S84:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN238499 (R47 in line [00254],R194 in line [00254],R195 in line [00254])", "S84:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248819" ]
  }, {
    "_id" : "85",
    "_lesItems" : [ "S85:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN239840 (R47 in line [00285],R196 in line [00285])", "S85:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN240010", "S85:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN239115 (R47 in line [00264],R193 in line [00264])", "S85:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN238499 (R47 in line [00254],R194 in line [00254],R195 in line [00254])", "S85:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248819" ]
  }, {
    "_id" : "86",
    "_lesItems" : [ "S86:org.apache.kafka.clients.consumer.MockConsumer.position@POLYN242736 (R47 in line [00347])", "S86:org.apache.kafka.clients.consumer.MockConsumer.position@POLYN242038 (R47 in line [00334])", "S86:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN332383 (R2 in line [00537])", "S86:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323964", "S86:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755", "S86:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755.dummymethode_00114" ]
  }, {
    "_id" : "87",
    "_lesItems" : [ "S87:org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN240220 (R47 in line [00295],R215 in line [00295],R216 in line [00295])", "S87:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248819" ]
  }, {
    "_id" : "88",
    "_lesItems" : [ "S88:org.apache.kafka.clients.consumer.MockConsumer.pause@POLYN244728 (R47 in line [00395],R229 in line [00395])", "S88:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN341812 (R2 in line [00737],R167 in line [00737])", "S88:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323964", "S88:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755", "S88:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755.dummymethode_00114" ]
  }, {
    "_id" : "89",
    "_lesItems" : [ "S89:org.apache.kafka.clients.consumer.MockConsumer.resume@POLYN245050 (R47 in line [00403],R230 in line [00403])", "S89:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN341963 (R2 in line [00741],R168 in line [00741])", "S89:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323964", "S89:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755", "S89:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755.dummymethode_00114" ]
  }, {
    "_id" : "90",
    "_lesItems" : [ "S90:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230439 (R47 in line [00108],R250 in line [00108])", "S90:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN232263 (R47 in line [00141],R251 in line [00141],R252 in line [00141])", "S90:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248819" ]
  }, {
    "_id" : "91",
    "_lesItems" : [ "S91:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230646 (R47 in line [00113],R253 in line [00113],R254 in line [00113])", "S91:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248819" ]
  }, {
    "_id" : "92",
    "_lesItems" : [ "S92:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN232077 (R47 in line [00136],R257 in line [00136])", "S92:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN232263 (R47 in line [00141],R251 in line [00141],R252 in line [00141])", "S92:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248819" ]
  }, {
    "_id" : "93",
    "_lesItems" : [ "S93:org.apache.kafka.clients.consumer.MockConsumer.assign@POLYN232641 (R47 in line [00148],R300 in line [00148])", "S93:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248819" ]
  }, {
    "_id" : "94",
    "_lesItems" : [ "S94:org.apache.kafka.clients.consumer.MockConsumer.addRecord@POLYN237145 (R47 in line [00227],R301 in line [00227])", "S94:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248819" ]
  }, {
    "_id" : "95",
    "_lesItems" : [ "S95:org.apache.kafka.clients.consumer.MockConsumer.setException@POLYN238090 (R47 in line [00241],R302 in line [00241])", "S95:org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN238221 (R47 in line [00245],R303 in line [00245])", "S95:org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN238221.dummymethode_00246" ]
  }, {
    "_id" : "96",
    "_lesItems" : [ "S96:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN239321 (R47 in line [00269])", "S96:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN239446 (R47 in line [00274],R304 in line [00274])", "S96:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248819" ]
  }, {
    "_id" : "97",
    "_lesItems" : [ "S97:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN247582", "S97:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN247744 (R47 in line [00455],R325 in line [00455])", "S97:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN247744.dummymethode_00456" ]
  }, {
    "_id" : "98",
    "_lesItems" : [ "S98:org.apache.kafka.clients.consumer.MockConsumer.setOffsetsException@POLYN238353 (R47 in line [00249],R332 in line [00249])", "S98:org.apache.kafka.clients.consumer.MockConsumer.setOffsetsException@POLYN238353.dummymethode_00250" ]
  }, {
    "_id" : "99",
    "_lesItems" : [ "S99:org.apache.kafka.clients.consumer.MockConsumer.seekToBeginning@POLYN242914 (R47 in line [00352],R333 in line [00352])", "S99:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248819" ]
  }, {
    "_id" : "100",
    "_lesItems" : [ "S100:org.apache.kafka.clients.consumer.MockConsumer.seekToEnd@POLYN243338 (R47 in line [00362],R334 in line [00362])", "S100:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248819" ]
  }, {
    "_id" : "101",
    "_lesItems" : [ "S101:org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN248297 (R47 in line [00473],R335 in line [00473],R151 in line [00474])", "S101:org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN248297.dummymethode_00475" ]
  }, {
    "_id" : "102",
    "_lesItems" : [ "S102:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN467573", "S102:org.apache.kafka.clients.producer.internals.Sender.run@POLYN307002", "S102:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN309209", "S102:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN391241 (R30 in line [00718])", "S102:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN376277 (R30 in line [00386],R52 in line [00386])", "S102:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN376277 (R30 in line [00386],R52 in line [00386])", "S102:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN376277.dummymethode_00388" ]
  }, {
    "_id" : "103",
    "_lesItems" : [ "S103:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN467573", "S103:org.apache.kafka.clients.producer.internals.Sender.run@POLYN307002", "S103:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN309209", "S103:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN309209", "S103:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN310399", "S103:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN355136", "S103:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN350633 (R59 in line [00799])", "S103:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN377773 (R30 in line [00426],R60 in line [00426])", "S103:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN377773 (R30 in line [00426],R60 in line [00426])", "S103:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN153549", "S103:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN143804", "S103:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN143804.dummymethode_00026" ]
  }, {
    "_id" : "104",
    "_lesItems" : [ "S104:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN467573", "S104:org.apache.kafka.clients.producer.internals.Sender.run@POLYN307002", "S104:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN309209", "S104:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN309209", "S104:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN310399", "S104:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN390635 (R30 in line [00708],R69 in line [00708])", "S104:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN390635 (R30 in line [00708],R69 in line [00708])", "S104:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN390635.dummymethode_00710" ]
  }, {
    "_id" : "105",
    "_lesItems" : [ "S105:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN829818", "S105:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN829818", "S105:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN162933 (R35 in line [00060],R72 in line [00060],R73 in line [00060],R74 in line [00060],R75 in line [00060])", "S105:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN162933 (R35 in line [00060],R72 in line [00060],R73 in line [00060],R74 in line [00060],R75 in line [00060])", "S105:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN162933.dummymethode_00062" ]
  }, {
    "_id" : "106",
    "_lesItems" : [ "S106:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN548789", "S106:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN548789", "S106:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373954 (R30 in line [00327],R82 in line [00327])", "S106:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373954 (R30 in line [00327],R82 in line [00327])", "S106:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN401974" ]
  }, {
    "_id" : "107",
    "_lesItems" : [ "S107:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN292891", "S107:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN292891", "S107:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readConnectorStatus@POLYN288278 (R88 in line [00563])", "S107:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readConnectorStatus@POLYN288278 (R88 in line [00563])", "S107:org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN275542 (R88 in line [00353],R89 in line [00353])", "S107:java.util.Hashtable.remove@POLYN477680" ]
  }, {
    "_id" : "108",
    "_lesItems" : [ "S108:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN292891", "S108:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN292891", "S108:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readTaskStatus@POLYN289408 (R88 in line [00589])", "S108:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readTaskStatus@POLYN289408 (R88 in line [00589])", "S108:org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN276850 (R88 in line [00374],R90 in line [00374])", "S108:org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN276850 (R88 in line [00374],R90 in line [00374])", "S108:java.io.File.delete@POLYN597554", "S108:java.io.File.delete@POLYN597554.dummymethode_00001" ]
  }, {
    "_id" : "109",
    "_lesItems" : [ "S109:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN260456 (R93 in line [00001],R142 in line [00001])", "S109:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN260751", "S109:org.apache.kafka.common.utils.Utils.delete@POLYN446205", "S109:org.apache.kafka.common.utils.Utils.delete@POLYN446205.dummymethode_00852" ]
  }, {
    "_id" : "110",
    "_lesItems" : [ "S110:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN260456 (R93 in line [00001],R142 in line [00001])", "S110:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN260751", "S110:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN260751", "S110:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN257451 (R93 in line [00001],R143 in line [00001])", "S110:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN257451.dummymethode_00001" ]
  }, {
    "_id" : "111",
    "_lesItems" : [ "S111:org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN256246 (R93 in line [00001])", "S111:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN251306 (R174 in line [00001])", "S111:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN251306.dummymethode_00001" ]
  }, {
    "_id" : "112",
    "_lesItems" : [ "S112:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN223705 (R94 in line [00105])", "S112:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN223705 (R94 in line [00105])", "S112:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN240327", "S112:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN464796", "S112:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN462583", "S112:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN461457", "S112:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN461457", "S112:org.apache.kafka.connect.runtime.Worker.stop@POLYN422087", "S112:org.apache.kafka.connect.runtime.Worker.stop@POLYN422087", "S112:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN495992 (R34 in line [01751])" ]
  }, {
    "_id" : "113",
    "_lesItems" : [ "S113:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN223705 (R94 in line [00105])", "S113:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN223705 (R94 in line [00105])", "S113:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN435322", "S113:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN432054", "S113:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN432054", "S113:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN220104 (R33 in line [00256])", "S113:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN220104 (R33 in line [00256])", "S113:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN220104.dummymethode_00258" ]
  }, {
    "_id" : "114",
    "_lesItems" : [ "S114:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN230077 (R94 in line [00242],R117 in line [00242])", "S114:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN230077 (R94 in line [00242],R117 in line [00242])", "S114:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN230077.dummymethode_00245" ]
  }, {
    "_id" : "115",
    "_lesItems" : [ "S115:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN228199 (R94 in line [00201],R119 in line [00201],R120 in line [00201],R121 in line [00201],R122 in line [00201],R123 in line [00201])", "S115:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN228199.dummymethode_00208" ]
  }, {
    "_id" : "116",
    "_lesItems" : [ "S116:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN226218 (R94 in line [00161],R124 in line [00161],R125 in line [00161])", "S116:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN226218.dummymethode_00165" ]
  }, {
    "_id" : "117",
    "_lesItems" : [ "S117:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN234528 (R94 in line [00309],R127 in line [00309],R128 in line [00309])", "S117:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN163346", "S117:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN163346.dummymethode_00055" ]
  }, {
    "_id" : "118",
    "_lesItems" : [ "S118:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN231912 (R94 in line [00274],R133 in line [00274],R134 in line [00274])", "S118:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN231912.dummymethode_00276" ]
  }, {
    "_id" : "119",
    "_lesItems" : [ "S119:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN233325 (R94 in line [00291],R170 in line [00291],R171 in line [00291])", "S119:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN233325.dummymethode_00293" ]
  }, {
    "_id" : "120",
    "_lesItems" : [ "S120:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN224622 (R94 in line [00133],R347 in line [00133])", "S120:org.apache.kafka.connect.util.Callback.onCompletion" ]
  }, {
    "_id" : "121",
    "_lesItems" : [ "S121:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN224853 (R94 in line [00138],R348 in line [00138],R349 in line [00138])", "S121:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN224853.dummymethode_00141" ]
  }, {
    "_id" : "122",
    "_lesItems" : [ "S122:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN227286 (R94 in line [00181],R350 in line [00181],R351 in line [00181],R352 in line [00181],R353 in line [00181])", "S122:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN227286.dummymethode_00186" ]
  }, {
    "_id" : "123",
    "_lesItems" : [ "S123:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN230451 (R94 in line [00251],R354 in line [00251],R355 in line [00251])", "S123:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN230451.dummymethode_00253" ]
  }, {
    "_id" : "124",
    "_lesItems" : [ "S124:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN253697 (R8 in line [00249],R99 in line [00249],R100 in line [00249],R101 in line [00249])", "S124:org.apache.kafka.clients.Metadata.update@POLYN254271 (R8 in line [00263],R102 in line [00263],R103 in line [00263],R104 in line [00263],R105 in line [00263])", "S124:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN257275", "S124:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN257275", "S124:org.apache.kafka.clients.Metadata.requestUpdate@POLYN248791 (R8 in line [00145])", "S124:org.apache.kafka.clients.Metadata.requestUpdate@POLYN248791.dummymethode_00146" ]
  }, {
    "_id" : "125",
    "_lesItems" : [ "S125:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN253697 (R8 in line [00249],R99 in line [00249],R100 in line [00249],R101 in line [00249])", "S125:org.apache.kafka.clients.Metadata.update@POLYN254271 (R8 in line [00263],R102 in line [00263],R103 in line [00263],R104 in line [00263],R105 in line [00263])", "S125:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN257275", "S125:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN257275", "S125:org.apache.kafka.common.requests.MetadataResponse.brokersById@POLYN222977", "S125:org.apache.kafka.common.requests.MetadataResponse.holder@POLYN222370 (R106 in line [00001])", "S125:org.apache.kafka.common.requests.MetadataResponse.Holder.Holder@POLYN230519", "S125:org.apache.kafka.common.requests.MetadataResponse.Holder.Holder@POLYN230519.dummymethode_00001" ]
  }, {
    "_id" : "126",
    "_lesItems" : [ "S126:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN222878", "S126:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN223176 (R112 in line [00104],R113 in line [00104])", "S126:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN223176 (R112 in line [00104],R113 in line [00104])", "S126:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN226016", "S126:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN226016.dummymethode_00170" ]
  }, {
    "_id" : "127",
    "_lesItems" : [ "S127:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN222878", "S127:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN223176 (R112 in line [00104],R113 in line [00104])", "S127:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN223176 (R112 in line [00104],R113 in line [00104])", "S127:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN226016", "S127:org.apache.kafka.streams.processor.internals.TopologyMetadata.registerAndBuildNewTopology@POLYN251286", "S127:org.apache.kafka.streams.processor.internals.TopologyMetadata.buildAndVerifyTopology@POLYN255137", "S127:org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.rewriteTopology@POLYN489025 (R45 in line [00412])", "S127:org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.rewriteTopology@POLYN489025.dummymethode_00413" ]
  }, {
    "_id" : "128",
    "_lesItems" : [ "S128:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN222878", "S128:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN223176 (R112 in line [00104],R113 in line [00104])", "S128:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN223176 (R112 in line [00104],R113 in line [00104])", "S128:org.apache.kafka.streams.KafkaStreams.start@POLYN552671 (R19 in line [01832])", "S128:org.apache.kafka.streams.KafkaStreams.start@POLYN552671.dummymethode_01832" ]
  }, {
    "_id" : "129",
    "_lesItems" : [ "S129:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN230077 (R94 in line [00242],R117 in line [00242])", "S129:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN230077 (R94 in line [00242],R117 in line [00242])", "S129:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN240807", "S129:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN240327", "S129:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN464796", "S129:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN462583", "S129:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN461457", "S129:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN461457", "S129:org.apache.kafka.connect.runtime.Worker.stop@POLYN422087", "S129:org.apache.kafka.connect.runtime.Worker.stop@POLYN422087", "S129:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN495992 (R34 in line [01751])" ]
  }, {
    "_id" : "130",
    "_lesItems" : [ "S130:org.apache.kafka.snapshot.RecordsSnapshotWriter.freeze@POLYN170345", "S130:org.apache.kafka.snapshot.RecordsSnapshotWriter.appendBatches@POLYN170776", "S130:org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN169647", "S130:org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN217831", "S130:org.apache.kafka.raft.internals.BatchAccumulator.maybeAllocateBatch@POLYN219910", "S130:org.apache.kafka.raft.internals.BatchBuilder.bytesNeeded@POLYN192743", "S130:org.apache.kafka.common.protocol.DataOutputStreamWritable.flush@POLYN159319", "S130:java.io.BufferedOutputStream.flush@POLYN163089 (R138 in line [00139])", "S130:java.io.BufferedOutputStream.flushBuffer@POLYN160758", "S130:java.io.BufferedOutputStream.write@POLYN162054 (R138 in line [00116],R139 in line [00116],R140 in line [00116],R141 in line [00116])", "S130:java.io.BufferedOutputStream.write@POLYN162054 (R138 in line [00116],R139 in line [00116],R140 in line [00116],R141 in line [00116])", "S130:java.io.BufferedOutputStream.write@POLYN162054.dummymethode_00123" ]
  }, {
    "_id" : "131",
    "_lesItems" : [ "S131:org.apache.kafka.streams.state.internals.RocksDBStore.putAll@POLYN259394", "S131:java.io.BufferedOutputStream.write@POLYN161193 (R138 in line [00093],R249 in line [00093])", "S131:java.io.BufferedOutputStream.flushBuffer@POLYN160758", "S131:java.io.BufferedOutputStream.write@POLYN162054 (R138 in line [00116],R139 in line [00116],R140 in line [00116],R141 in line [00116])", "S131:java.io.BufferedOutputStream.write@POLYN162054 (R138 in line [00116],R139 in line [00116],R140 in line [00116],R141 in line [00116])", "S131:java.io.BufferedOutputStream.write@POLYN162054.dummymethode_00123" ]
  }, {
    "_id" : "132",
    "_lesItems" : [ "S132:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN260456 (R93 in line [00001],R142 in line [00001])", "S132:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN260751", "S132:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN260751", "S132:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN257451 (R93 in line [00001],R143 in line [00001])", "S132:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN257451 (R93 in line [00001],R143 in line [00001])", "S132:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN257451.dummymethode_00001" ]
  }, {
    "_id" : "133",
    "_lesItems" : [ "S133:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN195725", "S133:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN195459 (R144 in line [00157],R145 in line [00157],R146 in line [00157])", "S133:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN145126", "S133:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN145126.dummymethode_00038" ]
  }, {
    "_id" : "134",
    "_lesItems" : [ "S134:org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN199717 (R144 in line [00256],R166 in line [00256])", "S134:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN195459 (R144 in line [00157],R145 in line [00157],R146 in line [00157])", "S134:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN145126", "S134:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN145126.dummymethode_00038" ]
  }, {
    "_id" : "135",
    "_lesItems" : [ "S135:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN201144 (R148 in line [00254],R219 in line [00254])", "S135:org.apache.kafka.streams.state.internals.NamedCache.close@POLYN204060 (R144 in line [00345])", "S135:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllCacheLevelSensors@POLYN298973 (R220 in line [00462])", "S135:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheSensorPrefix@POLYN299624", "S135:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheSensorPrefix@POLYN299624.dummymethode_00471" ]
  }, {
    "_id" : "136",
    "_lesItems" : [ "S136:org.apache.kafka.streams.state.internals.NamedCache.setListener@POLYN192868 (R144 in line [00104],R376 in line [00104])", "S136:org.apache.kafka.streams.state.internals.NamedCache.setListener@POLYN192868.dummymethode_00105" ]
  }, {
    "_id" : "137",
    "_lesItems" : [ "S137:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN195725", "S137:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN195459 (R144 in line [00157],R145 in line [00157],R146 in line [00157])", "S137:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN195459 (R144 in line [00157],R145 in line [00157],R146 in line [00157])", "S137:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN145126", "S137:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN145126.dummymethode_00038" ]
  }, {
    "_id" : "138",
    "_lesItems" : [ "S138:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN192213 (R148 in line [00075],R149 in line [00075])", "S138:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN192213.dummymethode_00077" ]
  }, {
    "_id" : "139",
    "_lesItems" : [ "S139:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN201144 (R148 in line [00254],R219 in line [00254])", "S139:java.util.Hashtable.remove@POLYN477680" ]
  }, {
    "_id" : "140",
    "_lesItems" : [ "S140:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN192213 (R148 in line [00075],R149 in line [00075])", "S140:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN192213 (R148 in line [00075],R149 in line [00075])", "S140:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN192213.dummymethode_00077" ]
  }, {
    "_id" : "141",
    "_lesItems" : [ "S141:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN192213 (R148 in line [00075],R149 in line [00075])", "S141:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN192213 (R148 in line [00075],R149 in line [00075])", "S141:org.apache.kafka.streams.state.internals.NamedCache.evict@POLYN198776 (R144 in line [00235])", "S141:org.apache.kafka.streams.state.internals.NamedCache.evict@POLYN198776.dummymethode_00237" ]
  }, {
    "_id" : "142",
    "_lesItems" : [ "S142:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN233236 (R47 in line [00163])", "S142:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN233470 (R47 in line [00168],R151 in line [00175])", "S142:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN233470 (R47 in line [00168],R151 in line [00175])", "S142:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248819" ]
  }, {
    "_id" : "143",
    "_lesItems" : [ "S143:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN233236 (R47 in line [00163])", "S143:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN233470 (R47 in line [00168],R151 in line [00175])", "S143:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN233470 (R47 in line [00168],R151 in line [00175])", "S143:org.apache.kafka.clients.consumer.MockConsumer.updateFetchPosition@POLYN248977", "S143:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN337586", "S143:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336975 (R2 in line [00636],R3 in line [00636],R4 in line [00636])", "S143:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323964", "S143:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755", "S143:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755.dummymethode_00114" ]
  }, {
    "_id" : "144",
    "_lesItems" : [ "S144:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN320369", "S144:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN320369", "S144:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN327785", "S144:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN385725 (R30 in line [00599],R156 in line [00599],R157 in line [00599])", "S144:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN383698 (R30 in line [00557],R68 in line [00557])", "S144:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN151822", "S144:java.util.Map.get@POLYN429331" ]
  }, {
    "_id" : "145",
    "_lesItems" : [ "S145:org.apache.kafka.common.network.Selector.connect@POLYN403923", "S145:org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN405645", "S145:java.net.Socket.setSendBufferSize@POLYN494971 (R158 in line [00001],R159 in line [00001])" ]
  }, {
    "_id" : "146",
    "_lesItems" : [ "S146:org.apache.kafka.common.network.Selector.connect@POLYN403923", "S146:org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN405645", "S146:java.net.Socket.setReceiveBufferSize@POLYN497674 (R158 in line [00001],R160 in line [00001])" ]
  }, {
    "_id" : "147",
    "_lesItems" : [ "S147:java.net.Socket.Socket@POLYN469823", "S147:java.net.Socket.close@POLYN505400 (R158 in line [00001],R191 in line [00001])", "S147:java.net.Socket.close@POLYN505400 (R158 in line [00001],R191 in line [00001])", "S147:java.net.Socket.close@POLYN505400.dummymethode_00001" ]
  }, {
    "_id" : "148",
    "_lesItems" : [ "S148:java.net.Socket.setSocketImplFactory@POLYN510598 (R158 in line [00001],R368 in line [00001])", "S148:java.net.Socket.setSocketImplFactory@POLYN510598.dummymethode_00001" ]
  }, {
    "_id" : "149",
    "_lesItems" : [ "S149:org.apache.kafka.common.network.Selector.SelectorMetrics.close@POLYN464472", "S149:org.apache.kafka.common.network.Selector.SelectorMetrics.close@POLYN464472", "S149:org.apache.kafka.common.metrics.internals.IntGaugeSuite.close@POLYN189552 (R164 in line [00256])", "S149:org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN187278", "S149:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN303025 (R15 in line [00558])", "S149:java.util.HashMap.remove@POLYN651586", "S149:java.util.HashMap.remove@POLYN651586.dummymethode_01064" ]
  }, {
    "_id" : "150",
    "_lesItems" : [ "S150:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN188560 (R164 in line [00235],R237 in line [00235])", "S150:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN188560.dummymethode_00237" ]
  }, {
    "_id" : "151",
    "_lesItems" : [ "S151:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN167140 (R172 in line [00139],R173 in line [00139])", "S151:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN167140.dummymethode_00141" ]
  }, {
    "_id" : "152",
    "_lesItems" : [ "S152:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN164674 (R172 in line [00076],R204 in line [00076])", "S152:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN164674.dummymethode_00078" ]
  }, {
    "_id" : "153",
    "_lesItems" : [ "S153:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN168431 (R172 in line [00169],R363 in line [00169])", "S153:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN168431 (R172 in line [00169],R363 in line [00169])", "S153:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN168431.dummymethode_00173" ]
  }, {
    "_id" : "154",
    "_lesItems" : [ "S154:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN167140 (R172 in line [00139],R173 in line [00139])", "S154:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN167140 (R172 in line [00139],R173 in line [00139])", "S154:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN167140.dummymethode_00141" ]
  }, {
    "_id" : "155",
    "_lesItems" : [ "S155:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN165266 (R188 in line [00093],R189 in line [00093])", "S155:org.apache.kafka.common.utils.Time.milliseconds@POLYN154961" ]
  }, {
    "_id" : "156",
    "_lesItems" : [ "S156:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN165266 (R188 in line [00093],R189 in line [00093])", "S156:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN165266 (R188 in line [00093],R189 in line [00093])", "S156:org.apache.kafka.common.utils.Time.milliseconds@POLYN154961" ]
  }, {
    "_id" : "157",
    "_lesItems" : [ "S157:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN164674 (R172 in line [00076],R204 in line [00076])", "S157:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN164674 (R172 in line [00076],R204 in line [00076])", "S157:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN164674.dummymethode_00078" ]
  }, {
    "_id" : "158",
    "_lesItems" : [ "S158:org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetIfNeeded@POLYN504247", "S158:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN325074 (R2 in line [00390],R210 in line [00390],R211 in line [00390],R212 in line [00390])", "S158:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN325074 (R2 in line [00390],R210 in line [00390],R211 in line [00390],R212 in line [00390])", "S158:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN324329", "S158:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755", "S158:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173755.dummymethode_00114" ]
  }, {
    "_id" : "159",
    "_lesItems" : [ "S159:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN422392 (R22 in line [01023],R232 in line [01023],R233 in line [01023],R234 in line [01023])", "S159:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN422094 (R22 in line [01017],R206 in line [01017],R207 in line [01017])", "S159:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN421395 (R22 in line [01004],R208 in line [01004],R209 in line [01004])", "S159:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN421395.dummymethode_01005" ]
  }, {
    "_id" : "160",
    "_lesItems" : [ "S160:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN337170 (R2 in line [00640],R235 in line [00640],R236 in line [00640])", "S160:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN337170 (R2 in line [00640],R235 in line [00640],R236 in line [00640])", "S160:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN337170.dummymethode_00641" ]
  }, {
    "_id" : "161",
    "_lesItems" : [ "S161:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN337170 (R2 in line [00640],R235 in line [00640],R236 in line [00640])", "S161:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN337170 (R2 in line [00640],R235 in line [00640],R236 in line [00640])", "S161:java.io.InputStream.reset@POLYN254770 (R5 in line [00350])" ]
  }, {
    "_id" : "162",
    "_lesItems" : [ "S162:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN188560 (R164 in line [00235],R237 in line [00235])", "S162:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN188560 (R164 in line [00235],R237 in line [00235])", "S162:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN188560.dummymethode_00237" ]
  }, {
    "_id" : "163",
    "_lesItems" : [ "S163:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN162006 (R267 in line [00071],R268 in line [00071])", "S163:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN161627 (R267 in line [00063],R269 in line [00063])", "S163:java.util.HashMap.remove@POLYN651586", "S163:java.util.HashMap.remove@POLYN651586.dummymethode_01064" ]
  }, {
    "_id" : "164",
    "_lesItems" : [ "S164:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN162694 (R267 in line [00084],R270 in line [00084])", "S164:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN162151 (R267 in line [00076],R271 in line [00076])", "S164:org.apache.kafka.connect.util.Table.remove@POLYN150407", "S164:org.apache.kafka.connect.util.Table.remove@POLYN150407.dummymethode_00046" ]
  }, {
    "_id" : "165",
    "_lesItems" : [ "S165:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN239321 (R47 in line [00269])", "S165:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN239446 (R47 in line [00274],R304 in line [00274])", "S165:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN239446 (R47 in line [00274],R304 in line [00274])", "S165:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248819" ]
  } ],
  "_lesDeadlocksTypos" : [ ]
}