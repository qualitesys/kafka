{
  "_lesSequences" : [ {
    "_id" : "1",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.INVALIDATED",
      "_method" : "---java.io.BufferedReader.fill@POLYN240361.dummymethode_00138 in line [00138]",
      "_target" : "java.io.BufferedReader.markedChar",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN248502.dummymethode_00342 in line [00342]",
      "_target" : "java.io.BufferedReader.readLine@POLYN248502.i",
      "_risk" : "//QC-JAVCWE099[00342] In java.io.BufferedReader.readLine@POLYN248502[00342] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN248502.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN248502.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN248502[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedReader.readLine@POLYN248502.i",
      "_method" : "---java.io.BufferedReader.readLine@POLYN248502.dummymethode_00351 in line [00351]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : "//QC-JAVCWE099[00351] In java.io.BufferedReader.readLine@POLYN248502[00351] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.BufferedReader.readLine@POLYN248502.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN248502.dummymethode_00356 in line [00356]",
      "_target" : "java.io.BufferedReader.readLine@POLYN248502.str",
      "_risk" : "//QC-JAVCWE099[00356] In java.io.BufferedReader.readLine@POLYN248502[00356] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.BufferedReader.readLine@POLYN248502.str",
      "_method" : "---java.io.BufferedReader.readLine@POLYN248502.dummymethode_00365 in line [00365]",
      "_target" : "java.io.BufferedReader.readLine@POLYN248502.return",
      "_risk" : "//QC-JAVCWE099[00365] In java.io.BufferedReader.readLine@POLYN248502[00365] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedReader.readLine@POLYN248502.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN248502 in line [00389]",
      "_target" : "java.io.BufferedReader.readLine@POLYN251703.return",
      "_risk" : "//QC-JAVCWE099[00389] In java.io.BufferedReader.readLine@POLYN251703[00389] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "8",
      "_source" : "java.io.BufferedReader.markedChar",
      "_method" : "---java.io.BufferedReader.reset@POLYN255686.dummymethode_00515 in line [00515]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.lang.Integer.parseInt@POLYN437323.s",
      "_method" : "---java.lang.Integer.parseInt@POLYN433775 in line [00527]",
      "_target" : "java.lang.Integer.parseInt@POLYN437323.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.util.HashMap.put@POLYN630990.key",
      "_method" : "---java.util.HashMap.putVal@POLYN631513 in line [00609]",
      "_target" : "java.util.HashMap.put@POLYN630990.return",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN250208.return",
      "_method" : "---org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN250208 in line [00309]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN249123.return",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN249123.return",
      "_method" : "---org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN249123 in line [00315]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN249363.return",
      "_risk" : ""
    }, {
      "_id" : "13",
      "_source" : "java.util.HashMap.put@POLYN630990.return",
      "_method" : "---java.util.HashMap.put@POLYN630990 in line [00330]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN250208.return",
      "_risk" : ""
    }, {
      "_id" : "14",
      "_source" : "partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.CompletedFetch@POLYN554649.dummymethode_01521 in line [01521]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "15",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN540065.dummymethode_01264 in line [01264]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN540065.tp",
      "_risk" : ""
    }, {
      "_id" : "16",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN540065.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN350929 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN350929.tp",
      "_risk" : ""
    }, {
      "_id" : "17",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN350929.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN179907 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN179907.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "18",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN179907.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN630990 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN630990.key",
      "_risk" : ""
    }, {
      "_id" : "19",
      "_source" : "java.lang.Integer.parseInt@POLYN437323.return",
      "_method" : "---java.lang.Integer.parseInt@POLYN437323 in line [00081]",
      "_target" : "partition",
      "_risk" : ""
    }, {
      "_id" : "20",
      "_source" : "java.io.BufferedReader.readLine@POLYN251703.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN251703 in line [00197]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN190039.line",
      "_risk" : "//QC-JAVCWE099[00197] In org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN190039[00197] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "21",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN190039.line",
      "_method" : "---java.lang.Integer.parseInt@POLYN437323 in line [00201]",
      "_target" : "java.lang.Integer.parseInt@POLYN437323.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "2",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN248502.dummymethode_00342 in line [00342]",
      "_target" : "java.io.BufferedReader.readLine@POLYN248502.i",
      "_risk" : "//QC-JAVCWE099[00342] In java.io.BufferedReader.readLine@POLYN248502[00342] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN248502.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN248502.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN248502[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.readLine@POLYN248502.i",
      "_method" : "---java.io.BufferedReader.readLine@POLYN248502.dummymethode_00351 in line [00351]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : "//QC-JAVCWE099[00351] In java.io.BufferedReader.readLine@POLYN248502[00351] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedReader.readLine@POLYN248502.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN248502.dummymethode_00356 in line [00356]",
      "_target" : "java.io.BufferedReader.readLine@POLYN248502.str",
      "_risk" : "//QC-JAVCWE099[00356] In java.io.BufferedReader.readLine@POLYN248502[00356] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.BufferedReader.readLine@POLYN248502.str",
      "_method" : "---java.io.BufferedReader.readLine@POLYN248502.dummymethode_00365 in line [00365]",
      "_target" : "java.io.BufferedReader.readLine@POLYN248502.return",
      "_risk" : "//QC-JAVCWE099[00365] In java.io.BufferedReader.readLine@POLYN248502[00365] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.BufferedReader.readLine@POLYN248502.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN248502 in line [00389]",
      "_target" : "java.io.BufferedReader.readLine@POLYN251703.return",
      "_risk" : "//QC-JAVCWE099[00389] In java.io.BufferedReader.readLine@POLYN251703[00389] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedReader.skip@POLYN252031.n",
      "_method" : "---java.io.BufferedReader.skip@POLYN252031.dummymethode_00408 in line [00408]",
      "_target" : "java.io.BufferedReader.skip@POLYN252031.r",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.io.BufferedReader.skip@POLYN252031.r",
      "_method" : "---java.io.BufferedReader.skip@POLYN252031.dummymethode_00422 in line [00422]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.lang.Integer.parseInt@POLYN437323.s",
      "_method" : "---java.lang.Integer.parseInt@POLYN433775 in line [00527]",
      "_target" : "java.lang.Integer.parseInt@POLYN437323.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.util.HashMap.put@POLYN630990.key",
      "_method" : "---java.util.HashMap.putVal@POLYN631513 in line [00609]",
      "_target" : "java.util.HashMap.put@POLYN630990.return",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN250208.return",
      "_method" : "---org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN250208 in line [00309]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN249123.return",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN249123.return",
      "_method" : "---org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN249123 in line [00315]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN249363.return",
      "_risk" : ""
    }, {
      "_id" : "13",
      "_source" : "java.util.HashMap.put@POLYN630990.return",
      "_method" : "---java.util.HashMap.put@POLYN630990 in line [00330]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN250208.return",
      "_risk" : ""
    }, {
      "_id" : "14",
      "_source" : "partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.CompletedFetch@POLYN554649.dummymethode_01521 in line [01521]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "15",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN540065.dummymethode_01264 in line [01264]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN540065.tp",
      "_risk" : ""
    }, {
      "_id" : "16",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN540065.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN350929 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN350929.tp",
      "_risk" : ""
    }, {
      "_id" : "17",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN350929.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN179907 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN179907.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "18",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN179907.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN630990 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN630990.key",
      "_risk" : ""
    }, {
      "_id" : "19",
      "_source" : "java.lang.Integer.parseInt@POLYN437323.return",
      "_method" : "---java.lang.Integer.parseInt@POLYN437323 in line [00081]",
      "_target" : "partition",
      "_risk" : ""
    }, {
      "_id" : "20",
      "_source" : "java.io.BufferedReader.readLine@POLYN251703.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN251703 in line [00197]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN190039.line",
      "_risk" : "//QC-JAVCWE099[00197] In org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN190039[00197] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "21",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN190039.line",
      "_method" : "---java.lang.Integer.parseInt@POLYN437323 in line [00201]",
      "_target" : "java.lang.Integer.parseInt@POLYN437323.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "3",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN248502.dummymethode_00342 in line [00342]",
      "_target" : "java.io.BufferedReader.readLine@POLYN248502.i",
      "_risk" : "//QC-JAVCWE099[00342] In java.io.BufferedReader.readLine@POLYN248502[00342] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN248502.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN248502.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN248502[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.readLine@POLYN248502.i",
      "_method" : "---java.io.BufferedReader.readLine@POLYN248502.dummymethode_00351 in line [00351]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : "//QC-JAVCWE099[00351] In java.io.BufferedReader.readLine@POLYN248502[00351] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedReader.readLine@POLYN248502.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN248502.dummymethode_00356 in line [00356]",
      "_target" : "java.io.BufferedReader.readLine@POLYN248502.str",
      "_risk" : "//QC-JAVCWE099[00356] In java.io.BufferedReader.readLine@POLYN248502[00356] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.BufferedReader.readLine@POLYN248502.str",
      "_method" : "---java.io.BufferedReader.readLine@POLYN248502.dummymethode_00365 in line [00365]",
      "_target" : "java.io.BufferedReader.readLine@POLYN248502.return",
      "_risk" : "//QC-JAVCWE099[00365] In java.io.BufferedReader.readLine@POLYN248502[00365] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.BufferedReader.readLine@POLYN248502.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN248502 in line [00389]",
      "_target" : "java.io.BufferedReader.readLine@POLYN251703.return",
      "_risk" : "//QC-JAVCWE099[00389] In java.io.BufferedReader.readLine@POLYN251703[00389] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedReader.skip@POLYN252031.r",
      "_method" : "---java.io.BufferedReader.skip@POLYN252031.dummymethode_00422 in line [00422]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "0",
      "_method" : "---java.io.BufferedReader.skip@POLYN252031.dummymethode_00423 in line [00423]",
      "_target" : "java.io.BufferedReader.skip@POLYN252031.r",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.lang.Integer.parseInt@POLYN437323.s",
      "_method" : "---java.lang.Integer.parseInt@POLYN433775 in line [00527]",
      "_target" : "java.lang.Integer.parseInt@POLYN437323.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "org.apache.kafka.raft.RaftConfig.parseVoterId@POLYN193067.return",
      "_method" : "---org.apache.kafka.raft.RaftConfig.parseVoterId@POLYN193067 in line [00218]",
      "_target" : "org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN193419.voterId",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN193419.voterId",
      "_method" : "---org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN193419.dummymethode_00235 in line [00235]",
      "_target" : "org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN193419.cibledummy_00235",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "java.lang.Integer.parseInt@POLYN437323.return",
      "_method" : "---java.lang.Integer.parseInt@POLYN437323 in line [00203]",
      "_target" : "org.apache.kafka.raft.RaftConfig.parseVoterId@POLYN193067.return",
      "_risk" : ""
    }, {
      "_id" : "13",
      "_source" : "java.io.BufferedReader.readLine@POLYN251703.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN251703 in line [00197]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN190039.line",
      "_risk" : "//QC-JAVCWE099[00197] In org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN190039[00197] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "14",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN190039.line",
      "_method" : "---java.lang.Integer.parseInt@POLYN437323 in line [00201]",
      "_target" : "java.lang.Integer.parseInt@POLYN437323.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "4",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN375096.s",
      "_method" : "---java.io.PrintStream.write@POLYN369905 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN369905.s",
      "_risk" : "//QC-JAVCWE099[00669] In java.io.PrintStream.print@POLYN375096[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.valueOf@POLYN922266.return",
      "_method" : "---java.lang.String.valueOf@POLYN922266 in line [00821]",
      "_target" : "java.io.PrintStream.println@POLYN380066.s",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.println@POLYN380066.s",
      "_method" : "---java.io.PrintStream.print@POLYN375096 in line [00823]",
      "_target" : "java.io.PrintStream.print@POLYN375096.s",
      "_risk" : "//QC-JAVCWE099[00823] In java.io.PrintStream.println@POLYN380066[00823] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.PrintStream.write@POLYN369905.s",
      "_method" : "---java.io.Writer.write@POLYN201372 in line [00525]",
      "_target" : "java.io.Writer.write@POLYN201372.str",
      "_risk" : "//QC-JAVCWE099[00525] In java.io.PrintStream.write@POLYN369905[00525] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.Writer.write@POLYN201372.str",
      "_method" : "---java.io.Writer.write@POLYN201965 in line [00157]",
      "_target" : "java.io.Writer.write@POLYN201372.cibledummy_00157",
      "_risk" : "//QC-JAVCWE099[00157] In java.io.Writer.write@POLYN201372[00157] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.lang.Double.toString@POLYN384886.d",
      "_method" : "---java.lang.Double.toString@POLYN384886.dummymethode_00196 in line [00196]",
      "_target" : "java.lang.Double.toString@POLYN384886.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.String.valueOf@POLYN922266.d",
      "_method" : "---java.lang.Double.toString@POLYN384886 in line [00001]",
      "_target" : "java.lang.Double.toString@POLYN384886.d",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.lang.Double.toString@POLYN384886.return",
      "_method" : "---java.lang.Double.toString@POLYN384886 in line [00001]",
      "_target" : "java.lang.String.valueOf@POLYN922266.return",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.util.HashMap.Node@POLYN616168.value",
      "_method" : "---java.util.HashMap.Node.Node@POLYN616168.dummymethode_00287 in line [00287]",
      "_target" : "java.util.HashMap.value",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.util.HashMap.value",
      "_method" : "---java.util.HashMap.Node.getValue@POLYN616703.dummymethode_00292 in line [00292]",
      "_target" : "java.util.HashMap.getValue@POLYN616703.return",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "java.util.HashMap.getValue@POLYN616703.return",
      "_method" : "---java.util.HashMap.getValue@POLYN616703 in line [00266]",
      "_target" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN210368.valueRaw",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN210368.valueRaw",
      "_method" : "---java.lang.String.valueOf@POLYN922266 in line [00272]",
      "_target" : "java.lang.String.valueOf@POLYN922266.d",
      "_risk" : ""
    } ]
  }, {
    "_id" : "5",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN375096.s",
      "_method" : "---java.io.PrintStream.write@POLYN369905 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN369905.s",
      "_risk" : "//QC-JAVCWE099[00669] In java.io.PrintStream.print@POLYN375096[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.valueOf@POLYN922266.return",
      "_method" : "---java.lang.String.valueOf@POLYN922266 in line [00821]",
      "_target" : "java.io.PrintStream.println@POLYN380066.s",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.println@POLYN380066.s",
      "_method" : "---java.io.PrintStream.print@POLYN375096 in line [00823]",
      "_target" : "java.io.PrintStream.print@POLYN375096.s",
      "_risk" : "//QC-JAVCWE099[00823] In java.io.PrintStream.println@POLYN380066[00823] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.PrintStream.write@POLYN369905.s",
      "_method" : "---java.io.Writer.write@POLYN201372 in line [00525]",
      "_target" : "java.io.Writer.write@POLYN201372.str",
      "_risk" : "//QC-JAVCWE099[00525] In java.io.PrintStream.write@POLYN369905[00525] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.Writer.write@POLYN201372.str",
      "_method" : "---java.io.Writer.write@POLYN201965 in line [00157]",
      "_target" : "java.io.Writer.write@POLYN201372.cibledummy_00157",
      "_risk" : "//QC-JAVCWE099[00157] In java.io.Writer.write@POLYN201372[00157] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.lang.Double.toString@POLYN384886.d",
      "_method" : "---java.lang.Double.toString@POLYN384886.dummymethode_00196 in line [00196]",
      "_target" : "java.lang.Double.toString@POLYN384886.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.String.valueOf@POLYN922266.d",
      "_method" : "---java.lang.Double.toString@POLYN384886 in line [00001]",
      "_target" : "java.lang.Double.toString@POLYN384886.d",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.lang.Double.toString@POLYN384886.return",
      "_method" : "---java.lang.Double.toString@POLYN384886 in line [00001]",
      "_target" : "java.lang.String.valueOf@POLYN922266.return",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.util.HashMap.value",
      "_method" : "---java.util.HashMap.Node.getValue@POLYN616703.dummymethode_00292 in line [00292]",
      "_target" : "java.util.HashMap.getValue@POLYN616703.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.util.HashMap.setValue@POLYN617122.newValue",
      "_method" : "---java.util.HashMap.Node.setValue@POLYN617122.dummymethode_00301 in line [00301]",
      "_target" : "java.util.HashMap.value",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "java.util.HashMap.getValue@POLYN616703.return",
      "_method" : "---java.util.HashMap.getValue@POLYN616703 in line [00266]",
      "_target" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN210368.valueRaw",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN210368.valueRaw",
      "_method" : "---java.lang.String.valueOf@POLYN922266 in line [00272]",
      "_target" : "java.lang.String.valueOf@POLYN922266.d",
      "_risk" : ""
    } ]
  }, {
    "_id" : "6",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "1",
      "_method" : "---java.io.InputStream.read@POLYN255822.dummymethode_00177 in line [00177]",
      "_target" : "java.io.InputStream.read@POLYN255822.i",
      "_risk" : "//QC-JAVCWE099[00177] In java.io.InputStream.read@POLYN255822[00177] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.InputStream.read@POLYN255822.i",
      "_method" : "---java.io.InputStream.read@POLYN255822.dummymethode_00188 in line [00188]",
      "_target" : "java.io.InputStream.read@POLYN255822.return",
      "_risk" : "//QC-JAVCWE099[00188] In java.io.InputStream.read@POLYN255822[00188] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882616.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN882616 in line [02938]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN895562.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.read@POLYN814072.return",
      "_method" : "---java.io.ObjectInputStream.read@POLYN814072 in line [03091]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN903231.v",
      "_risk" : "//QC-JAVCWE099[03091] In java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN903231[03091] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN903231.v",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN903231.dummymethode_03095 in line [03095]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN903231.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.InputStream.read@POLYN255822.return",
      "_method" : "---java.io.InputStream.read@POLYN255822 in line [02598]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.peekb",
      "_risk" : "//QC-JAVCWE099[02598] In java.io.ObjectInputStream.PeekInputStream.peek@POLYN882209[02598] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.peekb",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN882616.dummymethode_02605 in line [02605]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882616.v",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882616.v",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN882616.dummymethode_02607 in line [02607]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882616.return",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN895562.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN895562 in line [00893]",
      "_target" : "java.io.ObjectInputStream.read@POLYN814072.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN903231.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN903231 in line [00979]",
      "_target" : "java.io.ObjectInputStream.readUnsignedByte@POLYN816837.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "7",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN919423.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN919423 in line [03183]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN908142.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.toString@POLYN245730.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN245730 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN919423.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readString@POLYN849324.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN849324 in line [01963]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN854653.name",
      "_risk" : "//QC-JAVCWZ099[01963] In java.io.ObjectInputStream.readEnum@POLYN854653[01963] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN821089.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN821089 in line [01863]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN849324.str",
      "_risk" : "//QC-JAVCWZ099[01863] In java.io.ObjectInputStream.readString@POLYN849324[01863] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readString@POLYN849324.str",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN849324.dummymethode_01876 in line [01876]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN849324.return",
      "_risk" : "//QC-JAVCWZ099[01876] In java.io.ObjectInputStream.readString@POLYN849324[01876] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN908142.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN908142 in line [01124]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN821089.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.StringBuilder.toString@POLYN245730.0",
      "_method" : "---java.lang.StringBuilder.toString@POLYN245730.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN245730.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "8",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN919423.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN919423 in line [03183]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN908142.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.toString@POLYN245730.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN245730 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN919423.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readString@POLYN849324.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN849324 in line [01963]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN854653.name",
      "_risk" : "//QC-JAVCWZ099[01963] In java.io.ObjectInputStream.readEnum@POLYN854653[01963] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN821089.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN821089 in line [01863]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN849324.str",
      "_risk" : "//QC-JAVCWZ099[01863] In java.io.ObjectInputStream.readString@POLYN849324[01863] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readString@POLYN849324.str",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN849324.dummymethode_01876 in line [01876]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN849324.return",
      "_risk" : "//QC-JAVCWZ099[01876] In java.io.ObjectInputStream.readString@POLYN849324[01876] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN908142.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN908142 in line [01124]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN821089.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.StringBuilder.toString@POLYN245730.count",
      "_method" : "---java.lang.StringBuilder.toString@POLYN245730.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN245730.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "9",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN919423.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN919423 in line [03183]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN908142.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.toString@POLYN245730.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN245730 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN919423.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readString@POLYN849324.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN849324 in line [01963]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN854653.name",
      "_risk" : "//QC-JAVCWZ099[01963] In java.io.ObjectInputStream.readEnum@POLYN854653[01963] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN821089.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN821089 in line [01863]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN849324.str",
      "_risk" : "//QC-JAVCWZ099[01863] In java.io.ObjectInputStream.readString@POLYN849324[01863] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readString@POLYN849324.str",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN849324.dummymethode_01876 in line [01876]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN849324.return",
      "_risk" : "//QC-JAVCWZ099[01876] In java.io.ObjectInputStream.readString@POLYN849324[01876] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN908142.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN908142 in line [01124]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN821089.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.StringBuilder.toString@POLYN245730.value",
      "_method" : "---java.lang.StringBuilder.toString@POLYN245730.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN245730.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "10",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN612505.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN612505.dummymethode_01533 in line [01533]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN612505.cibledummy_01533",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN575964.obj",
      "_method" : "---java.io.ObjectOutputStream.replaceObject@POLYN575964.dummymethode_00588 in line [00588]",
      "_target" : "java.io.ObjectOutputStream.replaceObject@POLYN575964.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN575964.return",
      "_method" : "---java.io.ObjectOutputStream.replaceObject@POLYN575964 in line [01144]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN592199.rep",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN592199.rep",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN592199.dummymethode_01149 in line [01149]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN592199.obj",
      "_risk" : "//QC-JAVCWZ099[01149] In java.io.ObjectOutputStream.writeObject0@POLYN592199[01149] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN592199.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN608018 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN608018.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN592199[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN608018.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN610654 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN610654.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN608018[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN610654.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN612505 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN612505.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "11",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteObject@POLYN570557.dummymethode_00434 in line [00434]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteObject@POLYN570557.ctx",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN602254.objs[i]",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN592199 in line [01378]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN592199.obj",
      "_risk" : "//QC-JAVCWZ099[01378] In java.io.ObjectOutputStream.writeArray@POLYN602254[01378] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN609458.dummymethode_01452 in line [01452]",
      "_target" : "java.io.ObjectOutputStream.writeExternalData@POLYN609458.oldContext",
      "_risk" : "//QC-JAVCWZ099[01452] In java.io.ObjectOutputStream.writeExternalData@POLYN609458[01452] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN609458.oldContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN609458.dummymethode_01464 in line [01464]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01464] In java.io.ObjectOutputStream.writeExternalData@POLYN609458[01464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN592199.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN608018 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN608018.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN592199[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN608018.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN610654 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN610654.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN608018[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN610654.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN610654.dummymethode_01494 in line [01494]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01494] In java.io.ObjectOutputStream.writeSerialData@POLYN610654[01494] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "12",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteObject@POLYN570557.dummymethode_00434 in line [00434]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteObject@POLYN570557.ctx",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN609458.dummymethode_01452 in line [01452]",
      "_target" : "java.io.ObjectOutputStream.writeExternalData@POLYN609458.oldContext",
      "_risk" : "//QC-JAVCWZ099[01452] In java.io.ObjectOutputStream.writeExternalData@POLYN609458[01452] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN609458.oldContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN609458.dummymethode_01464 in line [01464]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01464] In java.io.ObjectOutputStream.writeExternalData@POLYN609458[01464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN592199.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN608018 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN608018.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN592199[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN608018.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN610654 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN610654.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN608018[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN610654.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN610654.dummymethode_01494 in line [01494]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01494] In java.io.ObjectOutputStream.writeSerialData@POLYN610654[01494] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN569901.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN592199 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN592199.obj",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN569901[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "13",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeLong@POLYN582545.val",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN582545 in line [00808]",
      "_target" : "java.io.ObjectOutputStream.writeLong@POLYN582545.cibledummy_00808",
      "_risk" : "//QC-JAVCWE099[00808] In java.io.ObjectOutputStream.writeLong@POLYN582545[00808] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252615.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN254161 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254161.timestamp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254161.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN255507 in line [00428]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255507.timestamp",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255507.timestamp",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN582545 in line [00468]",
      "_target" : "java.io.ObjectOutputStream.writeLong@POLYN582545.val",
      "_risk" : "//QC-JAVCWE099[00468] In org.apache.kafka.common.record.LegacyRecord.write@POLYN255507[00468] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN251528.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN252615 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252615.timestamp",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "timestampType==TimestampType.LOG_APPEND_TIME?logAppendTime_maxTimestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN304615.dummymethode_00424 in line [00424]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN304615.timestamp",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN304615.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN251528 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN251528.timestamp",
      "_risk" : ""
    } ]
  }, {
    "_id" : "14",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN242010.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN242010.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN242010.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN242010[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.getBytes@POLYN837732.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN837732.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN837732.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN422558.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN422558 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN238804.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN238804.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN242010 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN242010.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN238804[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslServer.process@POLYN195515.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN837732 in line [00165]",
      "_target" : "java.lang.String.getBytes@POLYN837732.charsetName",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.lang.String.getBytes@POLYN837732.return",
      "_method" : "---java.lang.String.getBytes@POLYN837732 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN422558.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "15",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN242010.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN242010.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN242010.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN242010[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.getBytes@POLYN837732.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN837732.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN837732.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN422558.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN422558 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN238804.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN238804.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN242010 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN242010.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN238804[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.security.scram.internals.ScramFormatter.toBytes@POLYN193310.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN837732 in line [00170]",
      "_target" : "java.lang.String.getBytes@POLYN837732.charsetName",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.lang.String.getBytes@POLYN837732.return",
      "_method" : "---java.lang.String.getBytes@POLYN837732 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN422558.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "16",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN242010.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN242010.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN242010.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN242010[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.getBytes@POLYN837732.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN837732.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN837732.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN422558.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN422558 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN238804.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN238804.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN242010 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN242010.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN238804[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN422558.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN837732 in line [00172]",
      "_target" : "java.lang.String.getBytes@POLYN837732.charsetName",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.lang.String.getBytes@POLYN837732.return",
      "_method" : "---java.lang.String.getBytes@POLYN837732 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN422558.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "17",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN242010.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN242010.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN242010.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN242010[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.getBytes@POLYN837732.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN837732.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN837732.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN422558.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN422558 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN238804.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN238804.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN242010 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN242010.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN238804[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.lang.String.getBytes@POLYN837732.return",
      "_method" : "---java.lang.String.getBytes@POLYN837732 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN422558.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.toBytes@POLYN199821.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN837732 in line [00206]",
      "_target" : "java.lang.String.getBytes@POLYN837732.charsetName",
      "_risk" : ""
    } ]
  }, {
    "_id" : "18",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readArray@POLYN850297.false",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN834440 in line [01908]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN834440.unshared",
      "_risk" : "//QC-JAVCWZ099[01908] In java.io.ObjectInputStream.readArray@POLYN850297[01908] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN842732.unshared",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN844199 in line [01710]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN842732.descriptor",
      "_risk" : "//QC-JAVCWZ099[01710] In java.io.ObjectInputStream.readClassDesc@POLYN842732[01710] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN842732.descriptor",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN842732.dummymethode_01722 in line [01722]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN842732.return",
      "_risk" : "//QC-JAVCWZ099[01722] In java.io.ObjectInputStream.readClassDesc@POLYN842732[01722] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN834440.unshared",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN842732 in line [01522]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN842732.unshared",
      "_risk" : "//QC-JAVCWZ099[01522] In java.io.ObjectInputStream.readObject0@POLYN834440[01522] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN842732.return",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN842732 in line [02000]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN856917.desc",
      "_risk" : "//QC-JAVCWZ099[02000] In java.io.ObjectInputStream.readOrdinaryObject@POLYN856917[02000] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN856917.desc",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN862072 in line [02027]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN856917.cibledummy_02027",
      "_risk" : "//QC-JAVCWZ099[02027] In java.io.ObjectInputStream.readOrdinaryObject@POLYN856917[02027] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "19",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN842732.unshared",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN844199 in line [01710]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN842732.descriptor",
      "_risk" : "//QC-JAVCWZ099[01710] In java.io.ObjectInputStream.readClassDesc@POLYN842732[01710] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN842732.descriptor",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN842732.dummymethode_01722 in line [01722]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN842732.return",
      "_risk" : "//QC-JAVCWZ099[01722] In java.io.ObjectInputStream.readClassDesc@POLYN842732[01722] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN834440.unshared",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN842732 in line [01522]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN842732.unshared",
      "_risk" : "//QC-JAVCWZ099[01522] In java.io.ObjectInputStream.readObject0@POLYN834440[01522] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN842732.return",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN842732 in line [02000]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN856917.desc",
      "_risk" : "//QC-JAVCWZ099[02000] In java.io.ObjectInputStream.readOrdinaryObject@POLYN856917[02000] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN856917.desc",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN862072 in line [02027]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN856917.cibledummy_02027",
      "_risk" : "//QC-JAVCWZ099[02027] In java.io.ObjectInputStream.readOrdinaryObject@POLYN856917[02027] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.skipCustomData@POLYN865256.false",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN834440 in line [02211]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN834440.unshared",
      "_risk" : "//QC-JAVCWZ099[02211] In java.io.ObjectInputStream.skipCustomData@POLYN865256[02211] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "20",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN602254.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN597730 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN597730.desc",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN602254[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN597730.desc",
      "_method" : "---java.io.ObjectOutputStream.writeNonProxyDesc@POLYN600227 in line [01231]",
      "_target" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN600227.desc",
      "_risk" : "//QC-JAVCWZ099[01231] In java.io.ObjectOutputStream.writeClassDesc@POLYN597730[01231] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN600227.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDescriptor@POLYN578436 in line [01282]",
      "_target" : "java.io.ObjectOutputStream.writeClassDescriptor@POLYN578436.desc",
      "_risk" : "//QC-JAVCWZ099[01282] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN600227[01282] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.lang.Object.getClass@POLYN296075.return",
      "_method" : "---java.lang.Object.getClass@POLYN296075 in line [01129]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN592199.cl",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN592199.cl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN592199.dummymethode_01134 in line [01134]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN592199.desc",
      "_risk" : "//QC-JAVCWZ099[01134] In java.io.ObjectOutputStream.writeObject0@POLYN592199[01134] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN592199.desc",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN602254 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN602254.desc",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN592199[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "21",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN602254.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN597730 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN597730.desc",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN602254[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN597730.desc",
      "_method" : "---java.io.ObjectOutputStream.writeNonProxyDesc@POLYN600227 in line [01231]",
      "_target" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN600227.desc",
      "_risk" : "//QC-JAVCWZ099[01231] In java.io.ObjectOutputStream.writeClassDesc@POLYN597730[01231] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN600227.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDescriptor@POLYN578436 in line [01282]",
      "_target" : "java.io.ObjectOutputStream.writeClassDescriptor@POLYN578436.desc",
      "_risk" : "//QC-JAVCWZ099[01282] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN600227[01282] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN592199.cl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN592199.dummymethode_01134 in line [01134]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN592199.desc",
      "_risk" : "//QC-JAVCWZ099[01134] In java.io.ObjectOutputStream.writeObject0@POLYN592199[01134] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN592199.repCl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN592199.dummymethode_01141 in line [01141]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN592199.cl",
      "_risk" : "//QC-JAVCWZ099[01141] In java.io.ObjectOutputStream.writeObject0@POLYN592199[01141] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN592199.desc",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN602254 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN602254.desc",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN592199[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "22",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.format@POLYN386263.l",
      "_method" : "---java.lang.String.format@POLYN916323 in line [01027]",
      "_target" : "java.lang.String.format@POLYN916323.l",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN359619.x",
      "_method" : "---java.io.PrintWriter.print@POLYN354864 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN354864.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN359619[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN916323.l",
      "_method" : "---java.lang.String.format@POLYN916323.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN916323.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN916323.return",
      "_method" : "---java.lang.String.format@POLYN916323 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159909.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159909.data",
      "_method" : "---java.io.PrintWriter.println@POLYN359619 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN359619.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159909[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "23",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.format@POLYN369846.l",
      "_method" : "---java.lang.String.format@POLYN916323 in line [00964]",
      "_target" : "java.lang.String.format@POLYN916323.l",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN359619.x",
      "_method" : "---java.io.PrintWriter.print@POLYN354864 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN354864.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN359619[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN916323.l",
      "_method" : "---java.lang.String.format@POLYN916323.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN916323.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN916323.return",
      "_method" : "---java.lang.String.format@POLYN916323 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159909.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159909.data",
      "_method" : "---java.io.PrintWriter.println@POLYN359619 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN359619.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159909[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "24",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN359619.x",
      "_method" : "---java.io.PrintWriter.print@POLYN354864 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN354864.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN359619[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN916323.l",
      "_method" : "---java.lang.String.format@POLYN916323.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN916323.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslServer.jsonErrorResponse@POLYN198680.\"%s",
      "_method" : "---java.lang.String.format@POLYN916323 in line [00208]",
      "_target" : "java.lang.String.format@POLYN916323.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN916323.return",
      "_method" : "---java.lang.String.format@POLYN916323 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159909.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159909.data",
      "_method" : "---java.io.PrintWriter.println@POLYN359619 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN359619.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159909[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "25",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN359619.x",
      "_method" : "---java.io.PrintWriter.print@POLYN354864 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN354864.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN359619[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN916323.l",
      "_method" : "---java.lang.String.format@POLYN916323.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN916323.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslServer.jsonErrorResponse@POLYN198680.\"%s}\"",
      "_method" : "---java.lang.String.format@POLYN916323 in line [00212]",
      "_target" : "java.lang.String.format@POLYN916323.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN916323.return",
      "_method" : "---java.lang.String.format@POLYN916323 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159909.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159909.data",
      "_method" : "---java.io.PrintWriter.println@POLYN359619 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN359619.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159909[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "26",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN359619.x",
      "_method" : "---java.io.PrintWriter.print@POLYN354864 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN354864.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN359619[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN916323.l",
      "_method" : "---java.lang.String.format@POLYN916323.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN916323.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.controller.QuorumController.Builder.build@POLYN434752.\"Node%d_\"",
      "_method" : "---java.lang.String.format@POLYN916323 in line [00293]",
      "_target" : "java.lang.String.format@POLYN916323.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN916323.return",
      "_method" : "---java.lang.String.format@POLYN916323 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159909.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159909.data",
      "_method" : "---java.io.PrintWriter.println@POLYN359619 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN359619.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159909[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "27",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN359619.x",
      "_method" : "---java.io.PrintWriter.print@POLYN354864 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN354864.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN359619[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN916323.l",
      "_method" : "---java.lang.String.format@POLYN916323.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN916323.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN916323.return",
      "_method" : "---java.lang.String.format@POLYN916323 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159909.data",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159909.data",
      "_method" : "---java.io.PrintWriter.println@POLYN359619 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN359619.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159909[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.agent.AgentClient.Builder.target@POLYN203480.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN916323 in line [00096]",
      "_target" : "java.lang.String.format@POLYN916323.l",
      "_risk" : ""
    } ]
  }, {
    "_id" : "28",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN359619.x",
      "_method" : "---java.io.PrintWriter.print@POLYN354864 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN354864.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN359619[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN916323.l",
      "_method" : "---java.lang.String.format@POLYN916323.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN916323.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN916323.return",
      "_method" : "---java.lang.String.format@POLYN916323 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159909.data",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159909.data",
      "_method" : "---java.io.PrintWriter.println@POLYN359619 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN359619.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159909[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.agent.WorkerManager.Worker.toString@POLYN251600.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN916323 in line [00314]",
      "_target" : "java.lang.String.format@POLYN916323.l",
      "_risk" : ""
    } ]
  }, {
    "_id" : "29",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN359619.x",
      "_method" : "---java.io.PrintWriter.print@POLYN354864 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN354864.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN359619[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN916323.l",
      "_method" : "---java.lang.String.format@POLYN916323.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN916323.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN916323.return",
      "_method" : "---java.lang.String.format@POLYN916323 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159909.data",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159909.data",
      "_method" : "---java.io.PrintWriter.println@POLYN359619 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN359619.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159909[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.coordinator.CoordinatorClient.Builder.target@POLYN243665.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN916323 in line [00112]",
      "_target" : "java.lang.String.format@POLYN916323.l",
      "_risk" : ""
    } ]
  }, {
    "_id" : "30",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.InputStream.read@POLYN255822.0",
      "_method" : "---java.io.InputStream.read@POLYN255822.dummymethode_00168 in line [00168]",
      "_target" : "java.io.InputStream.read@POLYN255822.return",
      "_risk" : "//QC-JAVCWE099[00168] In java.io.InputStream.read@POLYN255822[00168] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN465081.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN255822 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN255822.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN465081[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.InputStream.read@POLYN255822.return",
      "_method" : "---java.io.InputStream.read@POLYN255822 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN465081.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN465081[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN465081.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN465081.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN465081.currentPosition",
      "_risk" : ""
    } ]
  }, {
    "_id" : "31",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.InputStream.read@POLYN255822.-1",
      "_method" : "---java.io.InputStream.read@POLYN255822.dummymethode_00173 in line [00173]",
      "_target" : "java.io.InputStream.read@POLYN255822.return",
      "_risk" : "//QC-JAVCWE099[00173] In java.io.InputStream.read@POLYN255822[00173] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN465081.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN255822 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN255822.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN465081[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.InputStream.read@POLYN255822.return",
      "_method" : "---java.io.InputStream.read@POLYN255822 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN465081.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN465081[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN465081.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN465081.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN465081.currentPosition",
      "_risk" : ""
    } ]
  }, {
    "_id" : "32",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.writeTo@POLYN189187.buffer",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN465081 in line [00182]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN465081.destinationBuffer",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN465081.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN255822 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN255822.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN465081[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN465081.destinationBuffer",
      "_method" : "---java.io.InputStream.read@POLYN255822 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN465081.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN465081[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN465081.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN465081.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN465081.currentPosition",
      "_risk" : ""
    } ]
  }, {
    "_id" : "33",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.curContext",
      "_method" : "---java.io.ObjectInputStream.defaultReadObject@POLYN800954.dummymethode_00545 in line [00545]",
      "_target" : "java.io.ObjectInputStream.defaultReadObject@POLYN800954.ctx",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.curContext",
      "_method" : "---java.io.ObjectInputStream.readExternalData@POLYN860141.dummymethode_02065 in line [02065]",
      "_target" : "java.io.ObjectInputStream.readExternalData@POLYN860141.oldContext",
      "_risk" : "//QC-JAVCWZ099[02065] In java.io.ObjectInputStream.readExternalData@POLYN860141[02065] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readExternalData@POLYN860141.oldContext",
      "_method" : "---java.io.ObjectInputStream.readExternalData@POLYN860141.dummymethode_02094 in line [02094]",
      "_target" : "java.io.ObjectInputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[02094] In java.io.ObjectInputStream.readExternalData@POLYN860141[02094] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readSerialData@POLYN862072.slotDesc",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN862072.dummymethode_02133 in line [02133]",
      "_target" : "java.io.ObjectInputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[02133] In java.io.ObjectInputStream.readSerialData@POLYN862072[02133] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "34",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644934.s",
      "_method" : "---java.io.ObjectOutputStream.writeBytes@POLYN583397 in line [02190]",
      "_target" : "java.io.ObjectOutputStream.writeBytes@POLYN583397.str",
      "_risk" : "//QC-JAVCWZ099[02190] In java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644934[02190] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeBytes@POLYN583397.str",
      "_method" : "---java.io.ObjectOutputStream.writeBytes@POLYN583397 in line [00841]",
      "_target" : "java.io.ObjectOutputStream.writeBytes@POLYN583397.cibledummy_00841",
      "_risk" : "//QC-JAVCWZ099[00841] In java.io.ObjectOutputStream.writeBytes@POLYN583397[00841] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN601477.str",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644934 in line [01309]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644934.s",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeTypeString@POLYN588835.str",
      "_method" : "---java.io.ObjectOutputStream.writeString@POLYN601477 in line [01030]",
      "_target" : "java.io.ObjectOutputStream.writeString@POLYN601477.str",
      "_risk" : "//QC-JAVCWZ099[01030] In java.io.ObjectOutputStream.writeTypeString@POLYN588835[01030] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "35",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN374632.s",
      "_method" : "---java.io.PrintStream.write@POLYN368987 in line [00653]",
      "_target" : "java.io.PrintStream.write@POLYN368987.buf",
      "_risk" : "//QC-JAVCWZ099[00653] In java.io.PrintStream.print@POLYN374632[00653] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.println@POLYN379087.x",
      "_method" : "---java.io.PrintStream.print@POLYN374632 in line [00792]",
      "_target" : "java.io.PrintStream.print@POLYN374632.s",
      "_risk" : "//QC-JAVCWZ099[00792] In java.io.PrintStream.println@POLYN379087[00792] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.write@POLYN368987.buf",
      "_method" : "---java.io.Writer.write@POLYN200707 in line [00503]",
      "_target" : "java.io.Writer.write@POLYN200707.cbuf",
      "_risk" : "//QC-JAVCWZ099[00503] In java.io.PrintStream.write@POLYN368987[00503] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.Writer.write@POLYN200707.cbuf",
      "_method" : "---java.io.Writer.write@POLYN200707.dummymethode_00127 in line [00127]",
      "_target" : "java.io.Writer.write@POLYN200707.cibledummy_00127",
      "_risk" : "//QC-JAVCWZ099[00127] In java.io.Writer.write@POLYN200707[00127] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "36",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.InputStream.read@POLYN252663.b",
      "_method" : "---java.io.InputStream.read@POLYN252663.dummymethode_00102 in line [00102]",
      "_target" : "java.io.InputStream.read@POLYN252663.return",
      "_risk" : "//QC-JAVCWE099[00102] In java.io.InputStream.read@POLYN252663[00102] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN309228.return",
      "_method" : "---org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN309228 in line [00289]",
      "_target" : "org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN310914.read",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN309228.netReadBuffer",
      "_method" : "---java.io.InputStream.read@POLYN252663 in line [00226]",
      "_target" : "java.io.InputStream.read@POLYN252663.b",
      "_risk" : "//QC-JAVCWE099[00226] In org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN309228[00226] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.InputStream.read@POLYN252663.return",
      "_method" : "---java.io.InputStream.read@POLYN252663 in line [00226]",
      "_target" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN309228.return",
      "_risk" : "//QC-JAVCWE099[00226] In org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN309228[00226] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "37",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.accepted@POLYN249851.HttpStatus.ACCEPTED",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247648 in line [00273]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN247648.status",
      "_risk" : "//QC-JAVCWE080[00273] In org.springframework.http.ResponseEntity.accepted@POLYN249851[00273] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN247648.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247648 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN248253.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN248253[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN247648.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247648.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN247648.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN247648[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN248253.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN248253 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "38",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.badRequest@POLYN250322.HttpStatus.BAD_REQUEST",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247648 in line [00291]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN247648.status",
      "_risk" : "//QC-JAVCWE080[00291] In org.springframework.http.ResponseEntity.badRequest@POLYN250322[00291] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN247648.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247648 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN248253.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN248253[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN247648.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247648.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN247648.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN247648[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN248253.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN248253 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "39",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.noContent@POLYN250094.HttpStatus.NO_CONTENT",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247648 in line [00282]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN247648.status",
      "_risk" : "//QC-JAVCWE080[00282] In org.springframework.http.ResponseEntity.noContent@POLYN250094[00282] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN247648.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247648 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN248253.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN248253[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN247648.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247648.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN247648.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN247648[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN248253.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN248253 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "40",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.notFound@POLYN250565.HttpStatus.NOT_FOUND",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247648 in line [00300]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN247648.status",
      "_risk" : "//QC-JAVCWE080[00300] In org.springframework.http.ResponseEntity.notFound@POLYN250565[00300] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN247648.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247648 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN248253.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN248253[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN247648.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247648.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN247648.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN247648[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN248253.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN248253 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "41",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN247648.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247648 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN248253.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN248253[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN247648.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247648.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN247648.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN247648[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.unprocessableEntity@POLYN250799.HttpStatus.UNPROCESSABLE_ENTITY",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247648 in line [00310]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN247648.status",
      "_risk" : "//QC-JAVCWE080[00310] In org.springframework.http.ResponseEntity.unprocessableEntity@POLYN250799[00310] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN248253.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN248253 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "42",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN243337.cbuf",
      "_method" : "---java.io.Reader.read@POLYN193773 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN243337.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN243337[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN243337.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN243337 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN246545.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN246545[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN246545.n",
      "_method" : "---java.io.BufferedReader.read@POLYN246545.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN246545.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN246545[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "43",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN243337.len",
      "_method" : "---java.io.Reader.read@POLYN193773 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN243337.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN243337[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN243337.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN243337 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN246545.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN246545[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN246545.n",
      "_method" : "---java.io.BufferedReader.read@POLYN246545.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN246545.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN246545[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "44",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN243337.off",
      "_method" : "---java.io.Reader.read@POLYN193773 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN243337.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN243337[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN243337.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN243337 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN246545.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN246545[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN246545.n",
      "_method" : "---java.io.BufferedReader.read@POLYN246545.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN246545.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN246545[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "45",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Reader.read@POLYN193773.return",
      "_method" : "---java.io.Reader.read@POLYN193773 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN243337.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN243337[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN243337.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN243337 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN246545.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN246545[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN246545.n",
      "_method" : "---java.io.BufferedReader.read@POLYN246545.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN246545.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN246545[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "46",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN243337.-1",
      "_method" : "---java.io.BufferedReader.read1@POLYN243337.dummymethode_00214 in line [00214]",
      "_target" : "java.io.BufferedReader.read1@POLYN243337.return",
      "_risk" : "//QC-JAVCWZ099[00214] In java.io.BufferedReader.read1@POLYN243337[00214] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN243337.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN243337 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN246545.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN246545[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN246545.n",
      "_method" : "---java.io.BufferedReader.read@POLYN246545.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN246545.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN246545[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "47",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN870546.return",
      "_method" : "---java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN870546 in line [00591]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN802405.getField",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN802405.return",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN802405 in line [00592]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN802405.cibledummy_00592",
      "_risk" : "//QC-JAVCWZ099[00592] In java.io.ObjectInputStream.readFields@POLYN802405[00592] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN802405.getField",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN802405.dummymethode_00603 in line [00603]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN802405.return",
      "_risk" : "//QC-JAVCWZ099[00603] In java.io.ObjectInputStream.readFields@POLYN802405[00603] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "48",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN802405.curDesc",
      "_method" : "---java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN870546 in line [00591]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN802405.getField",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN802405.return",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN802405 in line [00592]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN802405.cibledummy_00592",
      "_risk" : "//QC-JAVCWZ099[00592] In java.io.ObjectInputStream.readFields@POLYN802405[00592] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN802405.getField",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN802405.dummymethode_00603 in line [00603]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN802405.return",
      "_risk" : "//QC-JAVCWZ099[00603] In java.io.ObjectInputStream.readFields@POLYN802405[00603] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "49",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readClassDescriptor@POLYN813643.desc",
      "_method" : "---java.io.ObjectInputStream.readClassDescriptor@POLYN813643.dummymethode_00883 in line [00883]",
      "_target" : "java.io.ObjectInputStream.readClassDescriptor@POLYN813643.return",
      "_risk" : "//QC-JAVCWZ099[00883] In java.io.ObjectInputStream.readClassDescriptor@POLYN813643[00883] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClassDescriptor@POLYN813643.return",
      "_method" : "---java.io.ObjectInputStream.readClassDescriptor@POLYN813643 in line [01815]",
      "_target" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN847041.readDesc",
      "_risk" : "//QC-JAVCWZ099[01815] In java.io.ObjectInputStream.readNonProxyDesc@POLYN847041[01815] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN847041.readDesc",
      "_method" : "---java.io.ObjectInputStream.readNonProxyDesc@POLYN847041.dummymethode_01843 in line [01843]",
      "_target" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN847041.cibledummy_01843",
      "_risk" : "//QC-JAVCWZ099[01843] In java.io.ObjectInputStream.readNonProxyDesc@POLYN847041[01843] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "50",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN357867.s",
      "_method" : "---java.io.PrintWriter.write@POLYN352840 in line [00587]",
      "_target" : "java.io.PrintWriter.write@POLYN352840.buf",
      "_risk" : "//QC-JAVCWZ099[00587] In java.io.PrintWriter.print@POLYN357867[00587] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN362391.x",
      "_method" : "---java.io.PrintWriter.print@POLYN357867 in line [00725]",
      "_target" : "java.io.PrintWriter.print@POLYN357867.s",
      "_risk" : "//QC-JAVCWZ099[00725] In java.io.PrintWriter.println@POLYN362391[00725] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintWriter.write@POLYN352840.buf",
      "_method" : "---java.io.PrintWriter.write@POLYN352840.dummymethode_00443 in line [00443]",
      "_target" : "java.io.PrintWriter.write@POLYN352840.cibledummy_00443",
      "_risk" : "//QC-JAVCWZ099[00443] In java.io.PrintWriter.write@POLYN352840[00443] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "51",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Reader.read@POLYN192508.return",
      "_method" : "---java.io.Reader.read@POLYN192508 in line [00100]",
      "_target" : "java.io.Reader.read@POLYN191510.n",
      "_risk" : "//QC-JAVCWZ099[00100] In java.io.Reader.read@POLYN191510[00100] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Reader.read@POLYN191510.n",
      "_method" : "---java.io.Reader.read@POLYN191510.dummymethode_00102 in line [00102]",
      "_target" : "java.io.Reader.read@POLYN191510.cibledummy_00102",
      "_risk" : "//QC-JAVCWZ099[00102] In java.io.Reader.read@POLYN191510[00102] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.Reader.read@POLYN192508.-1",
      "_method" : "---java.io.Reader.read@POLYN192508.dummymethode_00122 in line [00122]",
      "_target" : "java.io.Reader.read@POLYN192508.return",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.Reader.read@POLYN192508[00122] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "52",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.ServerSocket.accept@POLYN327648.(SocketImpl)null",
      "_method" : "---java.net.ServerSocket.accept@POLYN327648.dummymethode_00468 in line [00468]",
      "_target" : "java.net.ServerSocket.accept@POLYN327648.s",
      "_risk" : "//QC-JAVCWZ099[00468] In java.net.ServerSocket.accept@POLYN327648[00468] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.accept@POLYN327648.s",
      "_method" : "---java.net.ServerSocket.accept@POLYN327648.dummymethode_00470 in line [00470]",
      "_target" : "java.net.ServerSocket.accept@POLYN327648.return",
      "_risk" : "//QC-JAVCWZ099[00470] In java.net.ServerSocket.accept@POLYN327648[00470] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.net.ServerSocket.accept@POLYN327648.return",
      "_method" : "---java.net.ServerSocket.accept@POLYN327648 in line [00501]",
      "_target" : "java.net.ServerSocket.implAccept@POLYN328594.cibledummy_00501",
      "_risk" : "//QC-JAVCWZ099[00501] In java.net.ServerSocket.implAccept@POLYN328594[00501] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "53",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN247648.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247648 in line [00273]",
      "_target" : "org.springframework.http.ResponseEntity.accepted@POLYN249851.return",
      "_risk" : "//QC-JAVCWE080[00273] In org.springframework.http.ResponseEntity.accepted@POLYN249851[00273] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN248253.HttpStatus.OK",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247648 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN247648.status",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN248253[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN247648.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247648.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN247648.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN247648[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "54",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedInputStream.read@POLYN254328.nread",
      "_method" : "---java.io.BufferedInputStream.read@POLYN254328.dummymethode_00348 in line [00348]",
      "_target" : "java.io.BufferedInputStream.read@POLYN254328.n",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.BufferedInputStream.read@POLYN254328[00348] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedInputStream.read@POLYN254328.n",
      "_method" : "---java.io.BufferedInputStream.read@POLYN254328.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedInputStream.read@POLYN254328.return",
      "_risk" : "//QC-JAVCWZ099[00350] In java.io.BufferedInputStream.read@POLYN254328[00350] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "55",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN169112.count",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN170408 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN170408.len",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN169112[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.write@POLYN170408.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN170408.dummymethode_00129 in line [00129]",
      "_target" : "java.io.BufferedOutputStream.count",
      "_risk" : "//QC-JAVCWZ099[00129] In java.io.BufferedOutputStream.write@POLYN170408[00129] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "56",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN170408.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN170408.dummymethode_00129 in line [00129]",
      "_target" : "java.io.BufferedOutputStream.count",
      "_risk" : "//QC-JAVCWZ099[00129] In java.io.BufferedOutputStream.write@POLYN170408[00129] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN368201.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN170408 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN170408.len",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN368201[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "57",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN169112.buf",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN170408 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN170408.b",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN169112[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.write@POLYN170408.b",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN170408 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN170408.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN170408[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "58",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN170408.b",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN170408 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN170408.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN170408[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN368201.buf",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN170408 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN170408.b",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN368201[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "59",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN169112.0",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN170408 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN170408.off",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN169112[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.write@POLYN170408.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN170408 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN170408.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN170408[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "60",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN170408.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN170408 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN170408.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN170408[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN368201.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN170408 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN170408.off",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN368201[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "61",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Writer.writeBuffer",
      "_method" : "---java.io.Writer.write@POLYN201965.dummymethode_00187 in line [00187]",
      "_target" : "java.io.Writer.write@POLYN201965.cbuf",
      "_risk" : "//QC-JAVCWZ099[00187] In java.io.Writer.write@POLYN201965[00187] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN201965.cbuf",
      "_method" : "---java.io.Writer.write@POLYN201131 in line [00192]",
      "_target" : "java.io.Writer.write@POLYN201131.cbuf",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.Writer.write@POLYN201965[00192] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "62",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.write@POLYN353154.len",
      "_method" : "---java.io.Writer.write@POLYN201965 in line [00456]",
      "_target" : "java.io.Writer.write@POLYN201965.len",
      "_risk" : "//QC-JAVCWZ099[00456] In java.io.PrintWriter.write@POLYN353154[00456] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN201965.len",
      "_method" : "---java.io.Writer.write@POLYN201131 in line [00192]",
      "_target" : "java.io.Writer.write@POLYN201131.len",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.Writer.write@POLYN201965[00192] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "63",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN192159.off",
      "_method" : "---java.io.BufferedWriter.write@POLYN192159.dummymethode_00192 in line [00192]",
      "_target" : "java.io.BufferedWriter.write@POLYN192159.b",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.BufferedWriter.write@POLYN192159[00192] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN192159.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN192159.dummymethode_00195 in line [00195]",
      "_target" : "java.io.BufferedWriter.write@POLYN192159.cibledummy_00195",
      "_risk" : "//QC-JAVCWZ099[00195] In java.io.BufferedWriter.write@POLYN192159[00195] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "64",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN192159.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN192159.dummymethode_00195 in line [00195]",
      "_target" : "java.io.BufferedWriter.write@POLYN192159.cibledummy_00195",
      "_risk" : "//QC-JAVCWZ099[00195] In java.io.BufferedWriter.write@POLYN192159[00195] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN192159.d",
      "_method" : "---java.io.BufferedWriter.write@POLYN192159.dummymethode_00196 in line [00196]",
      "_target" : "java.io.BufferedWriter.write@POLYN192159.b",
      "_risk" : "//QC-JAVCWZ099[00196] In java.io.BufferedWriter.write@POLYN192159[00196] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "65",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN194497.off",
      "_method" : "---java.io.BufferedWriter.write@POLYN194497.dummymethode_00223 in line [00223]",
      "_target" : "java.io.BufferedWriter.write@POLYN194497.b",
      "_risk" : "//QC-JAVCWZ099[00223] In java.io.BufferedWriter.write@POLYN194497[00223] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN194497.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN194497.dummymethode_00226 in line [00226]",
      "_target" : "java.io.BufferedWriter.write@POLYN194497.cibledummy_00226",
      "_risk" : "//QC-JAVCWZ099[00226] In java.io.BufferedWriter.write@POLYN194497[00226] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "66",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN194497.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN194497.dummymethode_00226 in line [00226]",
      "_target" : "java.io.BufferedWriter.write@POLYN194497.cibledummy_00226",
      "_risk" : "//QC-JAVCWZ099[00226] In java.io.BufferedWriter.write@POLYN194497[00226] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN194497.d",
      "_method" : "---java.io.BufferedWriter.write@POLYN194497.dummymethode_00227 in line [00227]",
      "_target" : "java.io.BufferedWriter.write@POLYN194497.b",
      "_risk" : "//QC-JAVCWZ099[00227] In java.io.BufferedWriter.write@POLYN194497[00227] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "67",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "null",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN854653.dummymethode_01964 in line [01964]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN854653.result",
      "_risk" : "//QC-JAVCWE099[01964] In java.io.ObjectInputStream.readEnum@POLYN854653[01964] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN854653.result",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN854653.dummymethode_01983 in line [01983]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN854653.return",
      "_risk" : "//QC-JAVCWE099[01983] In java.io.ObjectInputStream.readEnum@POLYN854653[01983] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "68",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN854653.en",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN854653.dummymethode_01970 in line [01970]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN854653.result",
      "_risk" : "//QC-JAVCWZ099[01970] In java.io.ObjectInputStream.readEnum@POLYN854653[01970] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN854653.result",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN854653.dummymethode_01983 in line [01983]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN854653.return",
      "_risk" : "//QC-JAVCWZ099[01983] In java.io.ObjectInputStream.readEnum@POLYN854653[01983] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "69",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN844199.\"null class\"",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN844199.dummymethode_01759 in line [01759]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN844199.resolveEx",
      "_risk" : "//QC-JAVCWZ099[01759] In java.io.ObjectInputStream.readProxyDesc@POLYN844199[01759] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN844199.resolveEx",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN844199.dummymethode_01786 in line [01786]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN844199.cibledummy_01786",
      "_risk" : "//QC-JAVCWZ099[01786] In java.io.ObjectInputStream.readProxyDesc@POLYN844199[01786] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "70",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN844199.ex",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN844199.dummymethode_01775 in line [01775]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN844199.resolveEx",
      "_risk" : "//QC-JAVCWZ099[01775] In java.io.ObjectInputStream.readProxyDesc@POLYN844199[01775] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN844199.resolveEx",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN844199.dummymethode_01786 in line [01786]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN844199.cibledummy_01786",
      "_risk" : "//QC-JAVCWZ099[01786] In java.io.ObjectInputStream.readProxyDesc@POLYN844199[01786] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "71",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN856917.obj",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN862072 in line [02027]",
      "_target" : "java.io.ObjectInputStream.readSerialData@POLYN862072.obj",
      "_risk" : "//QC-JAVCWZ099[02027] In java.io.ObjectInputStream.readOrdinaryObject@POLYN856917[02027] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readSerialData@POLYN862072.obj",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN862072.dummymethode_02136 in line [02136]",
      "_target" : "java.io.ObjectInputStream.readSerialData@POLYN862072.cibledummy_02136",
      "_risk" : "//QC-JAVCWZ099[02136] In java.io.ObjectInputStream.readSerialData@POLYN862072[02136] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "72",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "objs.length",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN602254.dummymethode_01364 in line [01364]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN602254.len",
      "_risk" : "//QC-JAVCWE099[01364] In java.io.ObjectOutputStream.writeArray@POLYN602254[01364] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN602254.len",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [01365]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN602254.cibledummy_01365",
      "_risk" : "//QC-JAVCWE099[01365] In java.io.ObjectOutputStream.writeArray@POLYN602254[01365] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "73",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.reset@POLYN572985.TC_RESET",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [00501]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_risk" : "//QC-JAVCWZ099[00501] In java.io.ObjectOutputStream.reset@POLYN572985[00501] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN581425[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "74",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN602254.TC_ARRAY",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [01321]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_risk" : "//QC-JAVCWZ099[01321] In java.io.ObjectOutputStream.writeArray@POLYN602254[01321] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN581425[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "75",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN581425[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClass@POLYN597230.TC_CLASS",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [01212]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_risk" : "//QC-JAVCWZ099[01212] In java.io.ObjectOutputStream.writeClass@POLYN597230[01212] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "76",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN581425[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeEnum@POLYN607176.TC_ENUM",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [01401]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_risk" : "//QC-JAVCWZ099[01401] In java.io.ObjectOutputStream.writeEnum@POLYN607176[01401] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "77",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN581425[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN609458.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [01461]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_risk" : "//QC-JAVCWZ099[01461] In java.io.ObjectOutputStream.writeExternalData@POLYN609458[01461] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "78",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN581425[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN614923.TC_EXCEPTION",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [01576]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_risk" : "//QC-JAVCWZ099[01576] In java.io.ObjectOutputStream.writeFatalException@POLYN614923[01576] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "79",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN581425[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeHandle@POLYN596947.TC_REFERENCE",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [01204]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_risk" : "//QC-JAVCWZ099[01204] In java.io.ObjectOutputStream.writeHandle@POLYN596947[01204] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "80",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN581425[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN600227.TC_CLASSDESC",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [01275]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_risk" : "//QC-JAVCWZ099[01275] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN600227[01275] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "81",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN581425[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN600227.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [01292]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_risk" : "//QC-JAVCWZ099[01292] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN600227[01292] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "82",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN581425[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNull@POLYN596782.TC_NULL",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [01197]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_risk" : "//QC-JAVCWZ099[01197] In java.io.ObjectOutputStream.writeNull@POLYN596782[01197] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "83",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN581425[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN608018.TC_OBJECT",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [01426]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_risk" : "//QC-JAVCWZ099[01426] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN608018[01426] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "84",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN581425[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN598721.TC_PROXYCLASSDESC",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [01247]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_risk" : "//QC-JAVCWZ099[01247] In java.io.ObjectOutputStream.writeProxyDesc@POLYN598721[01247] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "85",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN581425[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN598721.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [01263]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_risk" : "//QC-JAVCWZ099[01263] In java.io.ObjectOutputStream.writeProxyDesc@POLYN598721[01263] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "86",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN581425[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN610654.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [01498]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_risk" : "//QC-JAVCWZ099[01498] In java.io.ObjectOutputStream.writeSerialData@POLYN610654[01498] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "87",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN581425[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN601477.TC_STRING",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [01305]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_risk" : "//QC-JAVCWZ099[01305] In java.io.ObjectOutputStream.writeString@POLYN601477[01305] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "88",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN581425[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN601477.TC_LONGSTRING",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN581425 in line [01308]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN581425.val",
      "_risk" : "//QC-JAVCWZ099[01308] In java.io.ObjectOutputStream.writeString@POLYN601477[01308] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "89",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeChar@POLYN629773.v",
      "_method" : "---java.io.ObjectOutputStream.writeChar@POLYN581985 in line [01925]",
      "_target" : "java.io.ObjectOutputStream.writeChar@POLYN581985.val",
      "_risk" : "//QC-JAVCWZ099[01925] In java.io.ObjectOutputStream.BlockDataOutputStream.writeChar@POLYN629773[01925] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeChar@POLYN581985.val",
      "_method" : "---java.io.ObjectOutputStream.writeChar@POLYN581985 in line [00786]",
      "_target" : "java.io.ObjectOutputStream.writeChar@POLYN581985.cibledummy_00786",
      "_risk" : "//QC-JAVCWZ099[00786] In java.io.ObjectOutputStream.writeChar@POLYN581985[00786] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "90",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN602254.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN597730 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN597730.unshared",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN602254[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN597730.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN598721 in line [01229]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN598721.unshared",
      "_risk" : "//QC-JAVCWZ099[01229] In java.io.ObjectOutputStream.writeClassDesc@POLYN597730[01229] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "91",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN597730.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN598721 in line [01229]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN598721.unshared",
      "_risk" : "//QC-JAVCWZ099[01229] In java.io.ObjectOutputStream.writeClassDesc@POLYN597730[01229] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN608018.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN597730 in line [01427]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN597730.unshared",
      "_risk" : "//QC-JAVCWZ099[01427] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN608018[01427] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "92",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeDouble@POLYN631981.v",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN583105 in line [01970]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN583105.val",
      "_risk" : "//QC-JAVCWZ099[01970] In java.io.ObjectOutputStream.BlockDataOutputStream.writeDouble@POLYN631981[01970] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN583105.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN583105 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN583105.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN583105[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "93",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN583105.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN583105 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN583105.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN583105[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.protocol.DataOutputStreamWritable.writeDouble@POLYN165525.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN583105 in line [00074]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN583105.val",
      "_risk" : "//QC-JAVCWE099[00074] In org.apache.kafka.common.protocol.DataOutputStreamWritable.writeDouble@POLYN165525[00074] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "94",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN583105.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN583105 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN583105.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN583105[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeDouble@POLYN241177.value",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN583105 in line [00376]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN583105.val",
      "_risk" : "//QC-JAVCWE099[00376] In org.apache.kafka.common.utils.ByteUtils.writeDouble@POLYN241177[00376] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "95",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN614923.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN614923.dummymethode_01577 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN614923.cibledummy_01577",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN614923[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN567683.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN614923 in line [00351]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN614923.ex",
      "_risk" : "//QC-JAVCWZ099[00351] In java.io.ObjectOutputStream.writeObject@POLYN567683[00351] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "96",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN614923.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN614923.dummymethode_01577 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN614923.cibledummy_01577",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN614923[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN569901.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN614923 in line [00418]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN614923.ex",
      "_risk" : "//QC-JAVCWZ099[00418] In java.io.ObjectOutputStream.writeUnshared@POLYN569901[00418] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "97",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeFloat@POLYN631113.v",
      "_method" : "---java.io.ObjectOutputStream.writeFloat@POLYN582825 in line [01952]",
      "_target" : "java.io.ObjectOutputStream.writeFloat@POLYN582825.val",
      "_risk" : "//QC-JAVCWZ099[01952] In java.io.ObjectOutputStream.BlockDataOutputStream.writeFloat@POLYN631113[01952] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeFloat@POLYN582825.val",
      "_method" : "---java.io.ObjectOutputStream.writeFloat@POLYN582825 in line [00819]",
      "_target" : "java.io.ObjectOutputStream.writeFloat@POLYN582825.cibledummy_00819",
      "_risk" : "//QC-JAVCWZ099[00819] In java.io.ObjectOutputStream.writeFloat@POLYN582825[00819] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "98",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeInt@POLYN630679.v",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [01943]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_risk" : "//QC-JAVCWZ099[01943] In java.io.ObjectOutputStream.BlockDataOutputStream.writeInt@POLYN630679[01943] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN582265[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "99",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN602254.ia.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [01329]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_risk" : "//QC-JAVCWZ099[01329] In java.io.ObjectOutputStream.writeArray@POLYN602254[01329] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN582265[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "100",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN602254.ba.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [01333]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_risk" : "//QC-JAVCWZ099[01333] In java.io.ObjectOutputStream.writeArray@POLYN602254[01333] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN582265[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "101",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN602254.ja.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [01337]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_risk" : "//QC-JAVCWZ099[01337] In java.io.ObjectOutputStream.writeArray@POLYN602254[01337] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN582265[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "102",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN602254.fa.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [01341]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_risk" : "//QC-JAVCWZ099[01341] In java.io.ObjectOutputStream.writeArray@POLYN602254[01341] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN582265[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "103",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN602254.da.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [01345]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_risk" : "//QC-JAVCWZ099[01345] In java.io.ObjectOutputStream.writeArray@POLYN602254[01345] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN582265[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "104",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN602254.sa.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [01349]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_risk" : "//QC-JAVCWZ099[01349] In java.io.ObjectOutputStream.writeArray@POLYN602254[01349] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN582265[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "105",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN602254.ca.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [01353]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_risk" : "//QC-JAVCWZ099[01353] In java.io.ObjectOutputStream.writeArray@POLYN602254[01353] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN582265[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "106",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN602254.za.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [01357]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_risk" : "//QC-JAVCWZ099[01357] In java.io.ObjectOutputStream.writeArray@POLYN602254[01357] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN582265[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "107",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN582265[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN598721.ifaces.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [01252]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_risk" : "//QC-JAVCWZ099[01252] In java.io.ObjectOutputStream.writeProxyDesc@POLYN598721[01252] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "108",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN582265[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.writeObject@POLYN246275.count",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00464]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_risk" : "//QC-JAVCWZ099[00464] In java.lang.StringBuilder.writeObject@POLYN246275[00464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "109",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN582265[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.writeObject@POLYN678944.size",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [01359]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_risk" : "//QC-JAVCWZ099[01359] In java.util.HashMap.writeObject@POLYN678944[01359] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "110",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN582265[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN472565.table.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [01221]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_risk" : "//QC-JAVCWZ099[01221] In java.util.Hashtable.writeHashtable@POLYN472565[01221] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "111",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN582265[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN472565.count",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [01223]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_risk" : "//QC-JAVCWZ099[01223] In java.util.Hashtable.writeHashtable@POLYN472565[01223] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "112",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN582265[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.protocol.DataOutputStreamWritable.writeInt@POLYN164951.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00056]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_risk" : "//QC-JAVCWE099[00056] In org.apache.kafka.common.protocol.DataOutputStreamWritable.writeInt@POLYN164951[00056] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "113",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN582265[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.AbstractLegacyRecordBatch.writeHeader@POLYN228633.size",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00276]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_risk" : "//QC-JAVCWE099[00276] In org.apache.kafka.common.record.AbstractLegacyRecordBatch.writeHeader@POLYN228633[00276] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "114",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN582265[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN176308.Serdes.ListSerde.NULL_ENTRY_VALUE",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00124]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_risk" : "//QC-JAVCWE099[00124] In org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN176308[00124] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "115",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN582265[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN176308.bytes.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00129]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_risk" : "//QC-JAVCWE099[00129] In org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN176308[00129] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "116",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN582265[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serializeNullIndexList@POLYN175383.nullIndex",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00103]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_risk" : "//QC-JAVCWE099[00103] In org.apache.kafka.common.serialization.ListSerializer.serializeNullIndexList@POLYN175383[00103] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "117",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN582265[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN233885.usedVersion",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00149]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_risk" : "//QC-JAVCWE099[00149] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN233885[00149] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "118",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN582265[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN233885.commonlySupportedVersion",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00159]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_risk" : "//QC-JAVCWE099[00159] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN233885[00159] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "119",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN582265[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN233885.out",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00160]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_risk" : "//QC-JAVCWE099[00160] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN233885[00160] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "120",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN582265[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN233885.errCode",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00168]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_risk" : "//QC-JAVCWE099[00168] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN233885[00168] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "121",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN582265[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.writeTaskIdTo@POLYN167573.0",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00045]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN582265.val",
      "_risk" : "//QC-JAVCWE099[00045] In org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.writeTaskIdTo@POLYN167573[00045] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "122",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN592199.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeClass@POLYN597230 in line [01120]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN592199.cibledummy_01120",
      "_risk" : "//QC-JAVCWZ099[01120] In java.io.ObjectOutputStream.writeObject0@POLYN592199[01120] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN567683.false",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN592199 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN592199.unshared",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN567683[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "123",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN592199.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeClass@POLYN597230 in line [01120]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN592199.cibledummy_01120",
      "_risk" : "//QC-JAVCWZ099[01120] In java.io.ObjectOutputStream.writeObject0@POLYN592199[01120] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN569901.true",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN592199 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN592199.unshared",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN569901[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "124",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN567683.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN568573 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567683.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN567683[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.writeObject@POLYN246275.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN567683 in line [00465]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567683.obj",
      "_risk" : "//QC-JAVCWZ099[00465] In java.lang.StringBuilder.writeObject@POLYN246275[00465] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "125",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN567683.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN568573 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567683.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN567683[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.internalWriteEntries@POLYN703695.e.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN567683 in line [01782]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567683.obj",
      "_risk" : "//QC-JAVCWZ099[01782] In java.util.HashMap.internalWriteEntries@POLYN703695[01782] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "126",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN567683.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN568573 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567683.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN567683[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.internalWriteEntries@POLYN703695.e.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN567683 in line [01783]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567683.obj",
      "_risk" : "//QC-JAVCWZ099[01783] In java.util.HashMap.internalWriteEntries@POLYN703695[01783] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "127",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN567683.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN568573 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567683.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN567683[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN472565.entryStack.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN567683 in line [01238]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567683.obj",
      "_risk" : "//QC-JAVCWZ099[01238] In java.util.Hashtable.writeHashtable@POLYN472565[01238] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "128",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN567683.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN568573 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567683.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN567683[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN472565.entryStack.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN567683 in line [01239]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567683.obj",
      "_risk" : "//QC-JAVCWZ099[01239] In java.util.Hashtable.writeHashtable@POLYN472565[01239] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "129",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN567683.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN568573 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567683.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN567683[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1493757.p.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN567683 in line [01406]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567683.obj",
      "_risk" : "//QC-JAVCWZ099[01406] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1493757[01406] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "130",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN567683.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN568573 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567683.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN567683[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1493757.p.val",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN567683 in line [01407]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567683.obj",
      "_risk" : "//QC-JAVCWZ099[01407] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1493757[01407] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "131",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN567683.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN568573 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567683.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN567683[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1493757.null",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN567683 in line [01410]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567683.obj",
      "_risk" : "//QC-JAVCWZ099[01410] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1493757[01410] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "132",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeShort@POLYN630226.v",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN581705 in line [01934]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN581705.val",
      "_risk" : "//QC-JAVCWZ099[01934] In java.io.ObjectOutputStream.BlockDataOutputStream.writeShort@POLYN630226[01934] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN581705.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN581705 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN581705.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN581705[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "133",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN581705.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN581705 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN581705.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN581705[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeStreamHeader@POLYN577429.STREAM_MAGIC",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN581705 in line [00636]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN581705.val",
      "_risk" : "//QC-JAVCWZ099[00636] In java.io.ObjectOutputStream.writeStreamHeader@POLYN577429[00636] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "134",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN581705.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN581705 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN581705.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN581705[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeStreamHeader@POLYN577429.STREAM_VERSION",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN581705 in line [00637]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN581705.val",
      "_risk" : "//QC-JAVCWZ099[00637] In java.io.ObjectOutputStream.writeStreamHeader@POLYN577429[00637] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "135",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN233814.-1",
      "_method" : "---java.io.PipedInputStream.read@POLYN233814.dummymethode_00318 in line [00318]",
      "_target" : "java.io.PipedInputStream.read@POLYN233814.return",
      "_risk" : "//QC-JAVCWZ099[00318] In java.io.PipedInputStream.read@POLYN233814[00318] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN233814.return",
      "_method" : "---java.io.PipedInputStream.read@POLYN233814 in line [00377]",
      "_target" : "java.io.PipedInputStream.read@POLYN236829.c",
      "_risk" : "//QC-JAVCWZ099[00377] In java.io.PipedInputStream.read@POLYN236829[00377] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "136",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN233814.ret",
      "_method" : "---java.io.PipedInputStream.read@POLYN233814.dummymethode_00340 in line [00340]",
      "_target" : "java.io.PipedInputStream.read@POLYN233814.return",
      "_risk" : "//QC-JAVCWZ099[00340] In java.io.PipedInputStream.read@POLYN233814[00340] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN233814.return",
      "_method" : "---java.io.PipedInputStream.read@POLYN233814 in line [00377]",
      "_target" : "java.io.PipedInputStream.read@POLYN236829.c",
      "_risk" : "//QC-JAVCWZ099[00377] In java.io.PipedInputStream.read@POLYN236829[00377] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "137",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN236829.(buffer.length-out)",
      "_method" : "---java.io.PipedInputStream.read@POLYN236829.dummymethode_00388 in line [00388]",
      "_target" : "java.io.PipedInputStream.read@POLYN236829.available",
      "_risk" : "//QC-JAVCWZ099[00388] In java.io.PipedInputStream.read@POLYN236829[00388] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN236829.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN236829.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN236829.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN236829[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "138",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN236829.(in-out)",
      "_method" : "---java.io.PipedInputStream.read@POLYN236829.dummymethode_00388 in line [00388]",
      "_target" : "java.io.PipedInputStream.read@POLYN236829.available",
      "_risk" : "//QC-JAVCWZ099[00388] In java.io.PipedInputStream.read@POLYN236829[00388] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN236829.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN236829.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN236829.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN236829[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "139",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "buffer.length-out",
      "_method" : "---java.io.PipedInputStream.read@POLYN236829.dummymethode_00390 in line [00390]",
      "_target" : "java.io.PipedInputStream.read@POLYN236829.available",
      "_risk" : "//QC-JAVCWE099[00390] In java.io.PipedInputStream.read@POLYN236829[00390] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN236829.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN236829.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN236829.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN236829[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "140",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "len-1",
      "_method" : "---java.io.PipedInputStream.read@POLYN236829.dummymethode_00395 in line [00395]",
      "_target" : "java.io.PipedInputStream.read@POLYN236829.available",
      "_risk" : "//QC-JAVCWE099[00395] In java.io.PipedInputStream.read@POLYN236829[00395] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN236829.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN236829.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN236829.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN236829[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "141",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedReader.read@POLYN212015.-1",
      "_method" : "---java.io.PipedReader.read@POLYN212015.dummymethode_00001 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN212015.return",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN212015[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedReader.read@POLYN212015.return",
      "_method" : "---java.io.PipedReader.read@POLYN212015 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN214619.c",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN214619[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "142",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedReader.read@POLYN212015.ret",
      "_method" : "---java.io.PipedReader.read@POLYN212015.dummymethode_00001 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN212015.return",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN212015[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedReader.read@POLYN212015.return",
      "_method" : "---java.io.PipedReader.read@POLYN212015 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN214619.c",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN214619[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "143",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN376378.x",
      "_method" : "---java.io.PrintStream.print@POLYN371590 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN371590.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN376378[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.tools.TransactionsCommand.printRow@POLYN321738.rowBuilder",
      "_method" : "---java.io.PrintStream.println@POLYN376378 in line [00929]",
      "_target" : "java.io.PrintStream.println@POLYN376378.x",
      "_risk" : "//QC-JAVCWE099[00929] In org.apache.kafka.tools.TransactionsCommand.printRow@POLYN321738[00929] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "144",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN376378.x",
      "_method" : "---java.io.PrintStream.print@POLYN371590 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN371590.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN376378[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.agent.Agent.exec@POLYN197954.\"Unable to create the task controller.\"",
      "_method" : "---java.io.PrintStream.println@POLYN376378 in line [00171]",
      "_target" : "java.io.PrintStream.println@POLYN376378.x",
      "_risk" : "//QC-JAVCWE099[00171] In org.apache.kafka.trogdor.agent.Agent.exec@POLYN197954[00171] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "145",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN376378.x",
      "_method" : "---java.io.PrintStream.print@POLYN371590 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN371590.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN376378[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.agent.Agent.exec@POLYN197954.\"createWorker failed\"",
      "_method" : "---java.io.PrintStream.println@POLYN376378 in line [00186]",
      "_target" : "java.io.PrintStream.println@POLYN376378.x",
      "_risk" : "//QC-JAVCWE099[00186] In org.apache.kafka.trogdor.agent.Agent.exec@POLYN197954[00186] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "146",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN379545.x",
      "_method" : "---java.io.PrintStream.print@POLYN375096 in line [00806]",
      "_target" : "java.io.PrintStream.println@POLYN379545.cibledummy_00806",
      "_risk" : "//QC-JAVCWE099[00806] In java.io.PrintStream.println@POLYN379545[00806] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN163614.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN379545 in line [00067]",
      "_target" : "java.io.PrintStream.println@POLYN379545.x",
      "_risk" : "//QC-JAVCWE099[00067] In org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN163614[00067] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "147",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN379545.x",
      "_method" : "---java.io.PrintStream.print@POLYN375096 in line [00806]",
      "_target" : "java.io.PrintStream.println@POLYN379545.cibledummy_00806",
      "_risk" : "//QC-JAVCWE099[00806] In java.io.PrintStream.println@POLYN379545[00806] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN173248.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN379545 in line [00081]",
      "_target" : "java.io.PrintStream.println@POLYN379545.x",
      "_risk" : "//QC-JAVCWE099[00081] In org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN173248[00081] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "148",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.append@POLYN371507.\"null\"",
      "_method" : "---java.io.PrintWriter.write@POLYN351542 in line [01002]",
      "_target" : "java.io.PrintWriter.write@POLYN351542.c",
      "_risk" : "//QC-JAVCWZ099[01002] In java.io.PrintWriter.append@POLYN371507[01002] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.write@POLYN351542.c",
      "_method" : "---java.io.Writer.write@POLYN200072 in line [00405]",
      "_target" : "java.io.Writer.write@POLYN200072.c",
      "_risk" : "//QC-JAVCWZ099[00405] In java.io.PrintWriter.write@POLYN351542[00405] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "149",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN355361.c",
      "_method" : "---java.io.PrintWriter.print@POLYN355361.dummymethode_00517 in line [00517]",
      "_target" : "java.io.PrintWriter.print@POLYN355361.cibledummy_00517",
      "_risk" : "//QC-JAVCWZ099[00517] In java.io.PrintWriter.print@POLYN355361[00517] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN360073.x",
      "_method" : "---java.io.PrintWriter.print@POLYN355361 in line [00655]",
      "_target" : "java.io.PrintWriter.print@POLYN355361.c",
      "_risk" : "//QC-JAVCWZ099[00655] In java.io.PrintWriter.println@POLYN360073[00655] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "150",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN362851.x",
      "_method" : "---java.io.PrintWriter.print@POLYN358331 in line [00739]",
      "_target" : "java.io.PrintWriter.println@POLYN362851.cibledummy_00739",
      "_risk" : "//QC-JAVCWE099[00739] In java.io.PrintWriter.println@POLYN362851[00739] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.shell.FindCommandHandler.find@POLYN166552.path",
      "_method" : "---java.io.PrintWriter.println@POLYN362851 in line [00098]",
      "_target" : "java.io.PrintWriter.println@POLYN362851.x",
      "_risk" : "//QC-JAVCWE099[00098] In org.apache.kafka.shell.FindCommandHandler.find@POLYN166552[00098] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "151",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN362851.x",
      "_method" : "---java.io.PrintWriter.print@POLYN358331 in line [00739]",
      "_target" : "java.io.PrintWriter.println@POLYN362851.cibledummy_00739",
      "_risk" : "//QC-JAVCWE099[00739] In java.io.PrintWriter.println@POLYN362851[00739] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN198979.intro",
      "_method" : "---java.io.PrintWriter.println@POLYN362851 in line [00162]",
      "_target" : "java.io.PrintWriter.println@POLYN362851.x",
      "_risk" : "//QC-JAVCWE099[00162] In org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN198979[00162] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "152",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.write@POLYN353154.off",
      "_method" : "---java.io.Writer.write@POLYN201965 in line [00456]",
      "_target" : "java.io.Writer.write@POLYN201965.off",
      "_risk" : "//QC-JAVCWZ099[00456] In java.io.PrintWriter.write@POLYN353154[00456] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN201965.off",
      "_method" : "---java.io.Writer.write@POLYN201965.dummymethode_00191 in line [00191]",
      "_target" : "java.io.Writer.write@POLYN201965.cibledummy_00191",
      "_risk" : "//QC-JAVCWZ099[00191] In java.io.Writer.write@POLYN201965[00191] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "153",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "50",
      "_method" : "---java.net.ServerSocket.ServerSocket@POLYN318673.dummymethode_00218 in line [00218]",
      "_target" : "java.net.ServerSocket.ServerSocket@POLYN318673.backlog",
      "_risk" : "//QC-JAVCWE099[00218] In java.net.ServerSocket.ServerSocket@POLYN318673[00218] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.ServerSocket@POLYN318673.backlog",
      "_method" : "---java.net.ServerSocket.bind@POLYN323138 in line [00220]",
      "_target" : "java.net.ServerSocket.ServerSocket@POLYN318673.cibledummy_00220",
      "_risk" : "//QC-JAVCWE099[00220] In java.net.ServerSocket.ServerSocket@POLYN318673[00220] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "154",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.ServerSocket.getImpl@POLYN319756.return",
      "_method" : "---java.net.ServerSocket.getImpl@POLYN319756 in line [00356]",
      "_target" : "java.net.ServerSocket.bind@POLYN323138.cibledummy_00356",
      "_risk" : "//QC-JAVCWZ099[00356] In java.net.ServerSocket.bind@POLYN323138[00356] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.impl",
      "_method" : "---java.net.ServerSocket.getImpl@POLYN319756.dummymethode_00241 in line [00241]",
      "_target" : "java.net.ServerSocket.getImpl@POLYN319756.return",
      "_risk" : "//QC-JAVCWZ099[00241] In java.net.ServerSocket.getImpl@POLYN319756[00241] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "155",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "true",
      "_method" : "---java.net.ServerSocket.close@POLYN330515.dummymethode_00542 in line [00542]",
      "_target" : "java.net.ServerSocket.closed",
      "_risk" : "//QC-JAVCWE099[00542] In java.net.ServerSocket.close@POLYN330515[00542] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.closed",
      "_method" : "---java.net.ServerSocket.isClosed@POLYN331625.dummymethode_00585 in line [00585]",
      "_target" : "java.net.ServerSocket.isClosed@POLYN331625.return",
      "_risk" : "//QC-JAVCWE099[00585] In java.net.ServerSocket.isClosed@POLYN331625[00585] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "156",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.Socket@POLYN478179.address",
      "_method" : "---java.net.Socket.connect@POLYN481958 in line [00415]",
      "_target" : "java.net.Socket.connect@POLYN481958.endpoint",
      "_risk" : "//QC-JAVCWZ099[00415] In java.net.Socket.Socket@POLYN478179[00415] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.connect@POLYN481958.endpoint",
      "_method" : "---java.net.Socket.connect@POLYN482608 in line [00518]",
      "_target" : "java.net.Socket.connect@POLYN481958.cibledummy_00518",
      "_risk" : "//QC-JAVCWZ099[00518] In java.net.Socket.connect@POLYN481958[00518] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "157",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.connect@POLYN481958.0",
      "_method" : "---java.net.Socket.connect@POLYN482608 in line [00518]",
      "_target" : "java.net.Socket.connect@POLYN482608.timeout",
      "_risk" : "//QC-JAVCWZ099[00518] In java.net.Socket.connect@POLYN481958[00518] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.connect@POLYN482608.timeout",
      "_method" : "---java.net.Socket.connect@POLYN482608 in line [00568]",
      "_target" : "java.net.Socket.connect@POLYN482608.cibledummy_00568",
      "_risk" : "//QC-JAVCWZ099[00568] In java.net.Socket.connect@POLYN482608[00568] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "158",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.Socket@POLYN478179.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN479109 in line [00411]",
      "_target" : "java.net.Socket.createImpl@POLYN479109.stream",
      "_risk" : "//QC-JAVCWZ099[00411] In java.net.Socket.Socket@POLYN478179[00411] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.createImpl@POLYN479109.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN479109.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN479109.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN479109[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "159",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.connect@POLYN482608.true",
      "_method" : "---java.net.Socket.createImpl@POLYN479109 in line [00566]",
      "_target" : "java.net.Socket.createImpl@POLYN479109.stream",
      "_risk" : "//QC-JAVCWZ099[00566] In java.net.Socket.connect@POLYN482608[00566] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.createImpl@POLYN479109.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN479109.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN479109.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN479109[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "160",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.createImpl@POLYN479109.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN479109.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN479109.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN479109[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.getImpl@POLYN481440.true",
      "_method" : "---java.net.Socket.createImpl@POLYN479109 in line [00500]",
      "_target" : "java.net.Socket.createImpl@POLYN479109.stream",
      "_risk" : "//QC-JAVCWZ099[00500] In java.net.Socket.getImpl@POLYN481440[00500] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "161",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN256380.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN256380.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN256380[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
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
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN256380.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN256380.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN256380[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
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
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN256380.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN256380.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN256380[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
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
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN297741.return",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN297741 in line [00215]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.filterTo@POLYN276772.info",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN319418.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN321639 in line [00717]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN321639.offset",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305734.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN319418 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN319418.offset",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN308323.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305734 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305734.offset",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309366.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN308323 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN308323.offset",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.lastOffset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN297741.dummymethode_00259 in line [00259]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN297741.shallowOffsetOfMaxTimestamp",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN297741.shallowOffsetOfMaxTimestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN297741.dummymethode_00262 in line [00262]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN297741.return",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN321639.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN321639.dummymethode_00751 in line [00751]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.lastOffset",
      "_risk" : ""
    } ]
  }, {
    "_id" : "165",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896083.b",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.b",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN883167 in line [03031]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.nread",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.b",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN883167 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.b",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN919423.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.b",
      "_method" : "---java.io.InputStream.read@POLYN255822 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN883167[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "166",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN883167 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.nread",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.b",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN883167 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.b",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN919423.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.b",
      "_method" : "---java.io.InputStream.read@POLYN255822 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN883167[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.read@POLYN814606.buf",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.b",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN814606[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "167",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896083.len",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.len",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN883167 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.nread",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.len",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN883167 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.len",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN919423.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.len",
      "_method" : "---java.io.InputStream.read@POLYN255822 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN883167[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "168",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN883167 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.nread",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.len",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN883167 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.len",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN919423.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.len",
      "_method" : "---java.io.InputStream.read@POLYN255822 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN883167[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.read@POLYN814606.len",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.len",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN814606[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "169",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896083.off",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN883167 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.nread",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.off",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN883167 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.off",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN919423.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.off",
      "_method" : "---java.io.InputStream.read@POLYN255822 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN883167[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "170",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN883167 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.nread",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.off",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN883167 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.off",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN919423.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.off",
      "_method" : "---java.io.InputStream.read@POLYN255822 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN883167[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN883167.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.read@POLYN814606.off",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN899568.off",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN814606[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "171",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN319418.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN321639 in line [00717]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN321639.timestamp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305734.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN319418 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN319418.timestamp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN308323.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305734 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305734.timestamp",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309366.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN308323 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN308323.timestamp",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN321639.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN321639.dummymethode_00754 in line [00754]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.maxTimestamp",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.maxTimestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.writeDefaultBatchHeader@POLYN303178.dummymethode_00400 in line [00400]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeDefaultBatchHeader@POLYN303178.maxTimestamp",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeDefaultBatchHeader@POLYN303178.maxTimestamp",
      "_method" : "---org.apache.kafka.common.record.DefaultRecordBatch.writeHeader@POLYN280279 in line [00402]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeDefaultBatchHeader@POLYN303178.cibledummy_00402",
      "_risk" : ""
    } ]
  }, {
    "_id" : "172",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN208631.struct",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN208631.dummymethode_00001 in line [00001]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN208631.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.InputStream.read@POLYN250859.return",
      "_method" : "---java.io.InputStream.read@POLYN250859 in line [00001]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN208631.struct",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN208631[00001] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.assignmentSnapshot",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN242399.dummymethode_00170 in line [00170]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN242399.localAssignmentSnapshot",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN242399.localAssignmentSnapshot",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN242399.dummymethode_00171 in line [00171]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN242399.workerState",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN242399.workerState",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN242399.dummymethode_00174 in line [00174]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN242399.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN208631.return",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN208631 in line [00186]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.onJoinComplete@POLYN243279.newAssignment",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.onJoinComplete@POLYN243279.newAssignment",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.onJoinComplete@POLYN243279.dummymethode_00209 in line [00209]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.assignmentSnapshot",
      "_risk" : ""
    } ]
  }, {
    "_id" : "173",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN250463.return",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN250463 in line [00372]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN249808.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254989.return",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254989 in line [00406]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN250463.keySize",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN250463.skipBuffer",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254989 in line [00421]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254989.buffer",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN250463.keySize",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN250463.dummymethode_00428 in line [00428]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN250463.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254989.buffer",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.readVarint@POLYN233362 in line [00473]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254989.sizeInBytes",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254989.sizeInBytes",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254989.dummymethode_00475 in line [00475]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254989.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "174",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "3",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN642453.dummymethode_02146 in line [02146]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN642453.utflen",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN642453.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN642453.dummymethode_02153 in line [02153]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN642453.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644934.utflen",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN582545 in line [02188]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644934.cibledummy_02188",
      "_risk" : "//QC-JAVCWE099[02188] In java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644934[02188] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN642453.return",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN642453 in line [01303]",
      "_target" : "java.io.ObjectOutputStream.writeString@POLYN601477.utflen",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN601477.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644934 in line [01309]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644934.utflen",
      "_risk" : ""
    } ]
  }, {
    "_id" : "175",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "2",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN642453.dummymethode_02148 in line [02148]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN642453.utflen",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN642453.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN642453.dummymethode_02153 in line [02153]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN642453.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644934.utflen",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN582545 in line [02188]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644934.cibledummy_02188",
      "_risk" : "//QC-JAVCWE099[02188] In java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644934[02188] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN642453.return",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN642453 in line [01303]",
      "_target" : "java.io.ObjectOutputStream.writeString@POLYN601477.utflen",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN601477.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644934 in line [00001]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644934.utflen",
      "_risk" : ""
    } ]
  }, {
    "_id" : "176",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252615.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN254161 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254161.magic",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254161.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN255507 in line [00428]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255507.magic",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255507.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN255507.dummymethode_00462 in line [00462]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255507.cibledummy_00462",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN251528.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN252615 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252615.magic",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN304615.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN251528 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN251528.magic",
      "_risk" : ""
    } ]
  }, {
    "_id" : "177",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN190769.position",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN463813 in line [00215]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN463813.position",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN465081.position",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN465081.dummymethode_01114 in line [01114]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN465081.currentPosition",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN465081.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN255822 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN255822.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN465081[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN463813.position",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN465081 in line [01090]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN465081.position",
      "_risk" : ""
    } ]
  }, {
    "_id" : "178",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN152156.return",
      "_method" : "---org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN152156 in line [00391]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN250463.bytesRemaining",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN250463.bytesRemaining",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254989 in line [00421]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254989.bytesRemaining",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254989.bytesRemaining",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readMore@POLYN256626 in line [00465]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN256626.bytesRemaining",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN152156.value",
      "_method" : "---org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN152156.dummymethode_00026 in line [00026]",
      "_target" : "org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN152156.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "179",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN190413.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN190413 in line [00134]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.checksum@POLYN188025.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.fullBatch",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN190413.dummymethode_00203 in line [00203]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN190413.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.toMemoryRecordBatch@POLYN189959.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.toMemoryRecordBatch@POLYN189959 in line [00217]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN190769.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN190769.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN190769 in line [00196]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.fullBatch",
      "_risk" : ""
    } ]
  }, {
    "_id" : "180",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN190413.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN190413 in line [00124]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.compressionType@POLYN187761.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.fullBatch",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN190413.dummymethode_00203 in line [00203]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN190413.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN190769.buffer",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.toMemoryRecordBatch@POLYN189959 in line [00217]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN190769.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN190769.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN190769 in line [00001]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.fullBatch",
      "_risk" : ""
    } ]
  }, {
    "_id" : "181",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273622.return",
      "_method" : "---org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273622 in line [00188]",
      "_target" : "org.apache.kafka.common.record.FileRecords.append@POLYN245784.written",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileRecords.append@POLYN245784.written",
      "_method" : "---org.apache.kafka.common.record.FileRecords.append@POLYN245784.dummymethode_00189 in line [00189]",
      "_target" : "org.apache.kafka.common.record.FileRecords.append@POLYN245784.cibledummy_00189",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273622.buffer",
      "_method" : "---java.io.FileOutputStream.write@POLYN242010 in line [00092]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273622.written",
      "_risk" : "//QC-JAVCWE099[00092] In org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273622[00092] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273622.written",
      "_method" : "---org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273622.dummymethode_00094 in line [00094]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273622.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "182",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273622.return",
      "_method" : "---org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273622 in line [00001]",
      "_target" : "org.apache.kafka.common.record.FileRecords.append@POLYN245784.written",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileRecords.append@POLYN245784.written",
      "_method" : "---org.apache.kafka.common.record.FileRecords.append@POLYN245784.dummymethode_00189 in line [00189]",
      "_target" : "org.apache.kafka.common.record.FileRecords.append@POLYN245784.cibledummy_00189",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273622.sourcedummy",
      "_method" : "---java.io.FileOutputStream.write@POLYN242010 in line [00092]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273622.written",
      "_risk" : "//QC-JAVCWE099[00092] In org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273622[00092] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273622.written",
      "_method" : "---org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273622.dummymethode_00094 in line [00094]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273622.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "183",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252615.key",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN254161 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254161.key",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254161.key",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN255507 in line [00428]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255507.key",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255507.key",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN255507.dummymethode_00476 in line [00476]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255507.cibledummy_00476",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN251528.null",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN252615 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252615.key",
      "_risk" : ""
    } ]
  }, {
    "_id" : "184",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252615.newByteBufferOutputStream(buffer)",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN252615.dummymethode_00389 in line [00389]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252615.out",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252615.out",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN254161 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254161.out",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254161.out",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN255507 in line [00428]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255507.out",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255507.out",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN255507.dummymethode_00476 in line [00476]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN255507.cibledummy_00476",
      "_risk" : ""
    } ]
  }, {
    "_id" : "185",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN251528.buffer",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN252615 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252615.buffer",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN171583.return",
      "_method" : "---org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN171583 in line [00416]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN304615.buffer",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN304615.buffer",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN251528 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN251528.buffer",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN171583.buffer",
      "_method" : "---org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN171583.dummymethode_00080 in line [00080]",
      "_target" : "org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN171583.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "186",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileRecords.channel@POLYN242100.return",
      "_method" : "---org.apache.kafka.common.record.FileRecords.channel@POLYN242100 in line [00212]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN190769.channel",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN190769.channel",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN463813 in line [00215]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN463813.channel",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.FileRecords.channel@POLYN242100.channel",
      "_method" : "---org.apache.kafka.common.record.FileRecords.channel@POLYN242100.dummymethode_00107 in line [00107]",
      "_target" : "org.apache.kafka.common.record.FileRecords.channel@POLYN242100.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN463813.channel",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN465081 in line [01090]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN463813.cibledummy_01090",
      "_risk" : ""
    } ]
  }, {
    "_id" : "187",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.handleInboundMessage@POLYN607533.currentTimeMs",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN605254 in line [01668]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN605254.currentTimeMs",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN605254.currentTimeMs",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN572713 in line [01622]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN572713.currentTimeMs",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Time.milliseconds@POLYN163313.return",
      "_method" : "---org.apache.kafka.common.utils.Time.milliseconds@POLYN163313 in line [02232]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.poll@POLYN632247.currentTimeMs",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.poll@POLYN632247.currentTimeMs",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.handleInboundMessage@POLYN607533 in line [02249]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.handleInboundMessage@POLYN607533.currentTimeMs",
      "_risk" : ""
    } ]
  }, {
    "_id" : "188",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFully@POLYN819013.buf",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN901787 in line [01067]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN901787.b",
      "_risk" : "//QC-JAVCWE099[01067] In java.io.ObjectInputStream.readFully@POLYN819013[01067] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN163729.arr",
      "_method" : "---java.io.ObjectInputStream.readFully@POLYN819013 in line [00081]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN819013.buf",
      "_risk" : "//QC-JAVCWE099[00081] In org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN163729[00081] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.protocol.DataInputStreamReadable.readByteBuffer@POLYN164308.arr",
      "_method" : "---org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN163729 in line [00099]",
      "_target" : "org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN163729.arr",
      "_risk" : ""
    } ]
  }, {
    "_id" : "189",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN249808.input",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN250463 in line [00372]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN250463.input",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN250463.input",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254989 in line [00421]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254989.input",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254989.input",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readMore@POLYN256626 in line [00465]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN256626.input",
      "_risk" : ""
    } ]
  }, {
    "_id" : "190",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252615.compressionType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN254161 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254161.compressionType",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN251528.compressionType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN252615 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252615.compressionType",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN304615.compressionType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN251528 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN251528.compressionType",
      "_risk" : ""
    } ]
  }, {
    "_id" : "191",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252615.timestampType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN254161 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254161.timestampType",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN251528.timestampType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN252615 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252615.timestampType",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN304615.timestampType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN251528 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN251528.timestampType",
      "_risk" : ""
    } ]
  }, {
    "_id" : "192",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305734.headers",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN319418 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN319418.headers",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN308323.headers",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305734 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305734.headers",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309366.Record.EMPTY_HEADERS",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN308323 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN308323.headers",
      "_risk" : ""
    } ]
  }, {
    "_id" : "193",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305734.key",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN319418 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN319418.key",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN308323.key",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305734 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305734.key",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309366.key",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN308323 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN308323.key",
      "_risk" : ""
    } ]
  }, {
    "_id" : "194",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305734.value",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN319418 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN319418.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN308323.value",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305734 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305734.value",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN309366.value",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN308323 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN308323.value",
      "_risk" : ""
    } ]
  }, {
    "_id" : "195",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN320163.sourcedummy",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN255507 in line [00730]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN320163.crc",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN320163.crc",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN320163.dummymethode_00732 in line [00732]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN320163.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN320163.return",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN320163 in line [00456]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305734.cibledummy_00456",
      "_risk" : ""
    } ]
  }, {
    "_id" : "196",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN176308.null",
      "_method" : "---org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN176308.dummymethode_00110 in line [00110]",
      "_target" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN176308.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN176308.return",
      "_method" : "---org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN176308 in line [00119]",
      "_target" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN176308.size",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN176308.size",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN582265 in line [00120]",
      "_target" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN176308.cibledummy_00120",
      "_risk" : "//QC-JAVCWE099[00120] In org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN176308[00120] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "197",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN187448.return",
      "_method" : "---org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN187448 in line [00233]",
      "_target" : "org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN250719.loadedCheckpoints",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN250719.loadedCheckpoints",
      "_method" : "---org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN250719 in line [00235]",
      "_target" : "org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN250719.cibledummy_00235",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN187448.offsets",
      "_method" : "---org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN187448.dummymethode_00182 in line [00182]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN187448.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "198",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN366746.now",
      "_method" : "---org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN366746 in line [00463]",
      "_target" : "org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN366746.cibledummy_00463",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN366746.timeoutException",
      "_method" : "---org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN366746 in line [00463]",
      "_target" : "org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN366746.offsetResetter",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN366746.offsetResetter",
      "_method" : "---org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN366746 in line [00479]",
      "_target" : "org.apache.kafka.streams.processor.internals.TaskManager.tryToCompleteRestoration@POLYN366746.now",
      "_risk" : ""
    } ]
  }, {
    "_id" : "199",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readBoolean@POLYN816294.return",
      "_method" : "---java.io.ObjectInputStream.readBoolean@POLYN816294 in line [03208]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readBooleans@POLYN908576.v[off++]",
      "_risk" : "//QC-JAVCWZ099[03208] In java.io.ObjectInputStream.BlockDataInputStream.readBooleans@POLYN908576[03208] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readBoolean@POLYN902576.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readBoolean@POLYN902576 in line [00957]",
      "_target" : "java.io.ObjectInputStream.readBoolean@POLYN816294.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "200",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFully@POLYN819485.buf",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN901787 in line [01084]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN819485.cibledummy_01084",
      "_risk" : "//QC-JAVCWE099[01084] In java.io.ObjectInputStream.readFully@POLYN819485[01084] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN256626.array",
      "_method" : "---java.io.ObjectInputStream.readFully@POLYN819485 in line [00507]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN819485.buf",
      "_risk" : "//QC-JAVCWE099[00507] In org.apache.kafka.common.record.DefaultRecord.readMore@POLYN256626[00507] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "201",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFully@POLYN819485.len",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN901787 in line [01084]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN819485.cibledummy_01084",
      "_risk" : "//QC-JAVCWE099[01084] In java.io.ObjectInputStream.readFully@POLYN819485[01084] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN256626.bytesRead",
      "_method" : "---java.io.ObjectInputStream.readFully@POLYN819485 in line [00507]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN819485.len",
      "_risk" : "//QC-JAVCWE099[00507] In org.apache.kafka.common.record.DefaultRecord.readMore@POLYN256626[00507] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "202",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFully@POLYN819485.off",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN901787 in line [01084]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN819485.cibledummy_01084",
      "_risk" : "//QC-JAVCWE099[01084] In java.io.ObjectInputStream.readFully@POLYN819485[01084] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN256626.bytesToLeftShift",
      "_method" : "---java.io.ObjectInputStream.readFully@POLYN819485 in line [00507]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN819485.off",
      "_risk" : "//QC-JAVCWE099[00507] In org.apache.kafka.common.record.DefaultRecord.readMore@POLYN256626[00507] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "203",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625140.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078 in line [01814]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.off",
      "_method" : "---java.io.OutputStream.write@POLYN187972 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN187972.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "204",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625362.off",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078 in line [01818]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.off",
      "_method" : "---java.io.OutputStream.write@POLYN187972 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN187972.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "205",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.off",
      "_method" : "---java.io.OutputStream.write@POLYN187972 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN187972.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.writeFields@POLYN620694.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078 in line [01695]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "206",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.off",
      "_method" : "---java.io.OutputStream.write@POLYN187972 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN187972.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN612505.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078 in line [01534]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "207",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.off",
      "_method" : "---java.io.OutputStream.write@POLYN187972 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN187972.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN579039.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078 in line [00690]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "208",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.off",
      "_method" : "---java.io.OutputStream.write@POLYN187972 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN187972.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN579457.off",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "209",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.off",
      "_method" : "---java.io.OutputStream.write@POLYN187972 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN187972.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN602254.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078 in line [01334]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "210",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625140.b",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078 in line [01814]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.b",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.b",
      "_method" : "---java.io.OutputStream.write@POLYN187972 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "211",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625362.b",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078 in line [01818]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.b",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.b",
      "_method" : "---java.io.OutputStream.write@POLYN187972 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "212",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.b",
      "_method" : "---java.io.OutputStream.write@POLYN187972 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.writeFields@POLYN620694.primVals",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078 in line [01695]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "213",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.b",
      "_method" : "---java.io.OutputStream.write@POLYN187972 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN612505.primVals",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078 in line [01534]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "214",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.b",
      "_method" : "---java.io.OutputStream.write@POLYN187972 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN579039.buf",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078 in line [00690]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "215",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.b",
      "_method" : "---java.io.OutputStream.write@POLYN187972 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN579457.buf",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "216",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.b",
      "_method" : "---java.io.OutputStream.write@POLYN187972 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN602254.ba",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078 in line [01334]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "217",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625140.b.length",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078 in line [01814]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.len",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.len",
      "_method" : "---java.io.OutputStream.write@POLYN187972 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "218",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625362.len",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078 in line [01818]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.len",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.len",
      "_method" : "---java.io.OutputStream.write@POLYN187972 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "219",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.len",
      "_method" : "---java.io.OutputStream.write@POLYN187972 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.writeFields@POLYN620694.primVals.length",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078 in line [01695]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "220",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.len",
      "_method" : "---java.io.OutputStream.write@POLYN187972 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN612505.primDataSize",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078 in line [01534]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "221",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.len",
      "_method" : "---java.io.OutputStream.write@POLYN187972 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN579039.buf.length",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078 in line [00690]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "222",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.len",
      "_method" : "---java.io.OutputStream.write@POLYN187972 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN579457.len",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN626078.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "223",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.write@POLYN619134.objVals[i]",
      "_method" : "---java.util.HashMap.writeObject@POLYN678944 in line [01687]",
      "_target" : "java.util.HashMap.writeObject@POLYN678944.s",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.writeObject@POLYN678944.s",
      "_method" : "---java.util.HashMap.internalWriteEntries@POLYN703695 in line [01360]",
      "_target" : "java.util.HashMap.internalWriteEntries@POLYN703695.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "224",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN414003.sendBufferSize",
      "_method" : "---java.net.Socket.setSendBufferSize@POLYN503351 in line [00289]",
      "_target" : "java.net.Socket.setSendBufferSize@POLYN503351.size",
      "_risk" : "//QC-JAVCWE099[00289] In org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN414003[00289] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.network.Selector.connect@POLYN412275.sendBufferSize",
      "_method" : "---org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN414003 in line [00254]",
      "_target" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN414003.sendBufferSize",
      "_risk" : ""
    } ]
  }, {
    "_id" : "225",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN414003.receiveBufferSize",
      "_method" : "---java.net.Socket.setReceiveBufferSize@POLYN506058 in line [00291]",
      "_target" : "java.net.Socket.setReceiveBufferSize@POLYN506058.size",
      "_risk" : "//QC-JAVCWE099[00291] In org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN414003[00291] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.network.Selector.connect@POLYN412275.receiveBufferSize",
      "_method" : "---org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN414003 in line [00254]",
      "_target" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN414003.receiveBufferSize",
      "_risk" : ""
    } ]
  }, {
    "_id" : "226",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeBlock@POLYN211825.compressedLengt",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN228963 in line [00187]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN228963.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN228963.value",
      "_method" : "---java.io.OutputStream.write@POLYN186180 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN186180.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN228963[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "227",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeBlock@POLYN211825.hash",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN228963 in line [00193]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN228963.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN228963.value",
      "_method" : "---java.io.OutputStream.write@POLYN186180 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN186180.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN228963[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "228",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeEndMark@POLYN213276.0",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN228963 in line [00205]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN228963.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN228963.value",
      "_method" : "---java.io.OutputStream.write@POLYN186180 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN186180.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN228963[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "229",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.handleInboundMessage@POLYN607533.request",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN605254 in line [01668]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN605254.request",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN605254.request",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN572713 in line [01622]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN572713.requestMetadata",
      "_risk" : ""
    } ]
  }, {
    "_id" : "230",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN178007.records",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN226183 in line [00167]",
      "_target" : "org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN178007.cibledummy_00167",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.snapshot.RecordsSnapshotWriter.appendBatches@POLYN179138.batch.data",
      "_method" : "---org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN178007 in line [00191]",
      "_target" : "org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN178007.records",
      "_risk" : ""
    } ]
  }, {
    "_id" : "231",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN296535.topics",
      "_method" : "---org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN296535 in line [00389]",
      "_target" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN296535.cibledummy_00389",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN296535.INTERRUPTED_ERROR_MESSAGE",
      "_method" : "---org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN296535 in line [00441]",
      "_target" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN296535.topics",
      "_risk" : ""
    } ]
  }, {
    "_id" : "232",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN296535.topics",
      "_method" : "---org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN296535 in line [00001]",
      "_target" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN296535.cibledummy_00389",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN296535.timeoutError",
      "_method" : "---org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN296535 in line [00490]",
      "_target" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN296535.topics",
      "_risk" : ""
    } ]
  }, {
    "_id" : "233",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN296535.topics",
      "_method" : "---org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN296535 in line [00001]",
      "_target" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN296535.cibledummy_00389",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN296535.\"Completed validating internal topics and created {}\"",
      "_method" : "---org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN296535 in line [00502]",
      "_target" : "org.apache.kafka.streams.processor.internals.InternalTopicManager.makeReady@POLYN296535.topics",
      "_risk" : ""
    } ]
  } ],
  "_lesDeadlocks" : [ {
    "_id" : "R0",
    "_libelle" : "org.apache.kafka.connect.mirror.OffsetSyncStore.this"
  }, {
    "_id" : "R1",
    "_libelle" : "org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN164145.pollTimeout"
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
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN342761.tp"
  }, {
    "_id" : "R7",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN342761.highWatermark"
  }, {
    "_id" : "R8",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN342951.tp"
  }, {
    "_id" : "R9",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN342951.logStartOffset"
  }, {
    "_id" : "R10",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN343141.tp"
  }, {
    "_id" : "R11",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN343141.lastStableOffset"
  }, {
    "_id" : "R12",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN345375.partition"
  }, {
    "_id" : "R13",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN345375.offsetResetStrategy"
  }, {
    "_id" : "R14",
    "_libelle" : "java.io.InputStream.this"
  }, {
    "_id" : "R15",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.this"
  }, {
    "_id" : "R16",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN350929.tp"
  }, {
    "_id" : "R17",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN335831.tp"
  }, {
    "_id" : "R18",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN335831.position"
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
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN328379.assignments"
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
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN427893.isDisconnected"
  }, {
    "_id" : "R31",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN427893.cause"
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
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN172071.prefix"
  }, {
    "_id" : "R37",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN172071.id"
  }, {
    "_id" : "R38",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN172071.metrics"
  }, {
    "_id" : "R39",
    "_libelle" : "org.apache.kafka.connect.runtime.Worker.this"
  }, {
    "_id" : "R40",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN387878.tp"
  }, {
    "_id" : "R41",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.abortBatches@POLYN368606.dq"
  }, {
    "_id" : "R42",
    "_libelle" : "org.apache.kafka.clients.producer.internals.IncompleteBatches.incomplete"
  }, {
    "_id" : "R43",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN403641.e"
  }, {
    "_id" : "R44",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.this"
  }, {
    "_id" : "R45",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN171473.topic"
  }, {
    "_id" : "R46",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN171473.nowMs"
  }, {
    "_id" : "R47",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN359091.deque"
  }, {
    "_id" : "R48",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN386141.topicPartition"
  }, {
    "_id" : "R49",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN390253.topicPartition"
  }, {
    "_id" : "R50",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN390253.increment"
  }, {
    "_id" : "R51",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.addInFlightBatch@POLYN390649.batch"
  }, {
    "_id" : "R52",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.updateEstimation@POLYN165106.compressionRatioForTopic"
  }, {
    "_id" : "R53",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN395258.batch"
  }, {
    "_id" : "R54",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN395258.exception"
  }, {
    "_id" : "R55",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN395258.adjustSequenceNumbers"
  }, {
    "_id" : "R56",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN394663.exception"
  }, {
    "_id" : "R57",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN385131.exception"
  }, {
    "_id" : "R58",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN384645.exception"
  }, {
    "_id" : "R59",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN392076.batch"
  }, {
    "_id" : "R60",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN399025.batch"
  }, {
    "_id" : "R61",
    "_libelle" : "java.util.Hashtable.this"
  }, {
    "_id" : "R62",
    "_libelle" : "java.util.Hashtable.putAll@POLYN439176.t"
  }, {
    "_id" : "R63",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.this"
  }, {
    "_id" : "R64",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.setStreamsConfig@POLYN496715.applicationConfig"
  }, {
    "_id" : "R65",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.this"
  }, {
    "_id" : "R66",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN252835.topic"
  }, {
    "_id" : "R67",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN252835.partitions"
  }, {
    "_id" : "R68",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN251530.newOffsets"
  }, {
    "_id" : "R69",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN251954.newOffsets"
  }, {
    "_id" : "R70",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN427539.error"
  }, {
    "_id" : "R71",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN173516.lastVersion"
  }, {
    "_id" : "R72",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN173516.timeoutMs"
  }, {
    "_id" : "R73",
    "_libelle" : "org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN272635.topic"
  }, {
    "_id" : "R74",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334903.dq"
  }, {
    "_id" : "R75",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.this"
  }, {
    "_id" : "R76",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN382322.topicPartition"
  }, {
    "_id" : "R77",
    "_libelle" : "org.apache.kafka.clients.Metadata.bootstrap@POLYN261677.addresses"
  }, {
    "_id" : "R78",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN171287.prefix"
  }, {
    "_id" : "R79",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN171287.id"
  }, {
    "_id" : "R80",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN171287.metrics"
  }, {
    "_id" : "R81",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN171287.nowMs"
  }, {
    "_id" : "R82",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.this"
  }, {
    "_id" : "R83",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN283938.connector"
  }, {
    "_id" : "R84",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN285252.id"
  }, {
    "_id" : "R85",
    "_libelle" : "org.apache.kafka.clients.Metadata.failedUpdate@POLYN274345.now"
  }, {
    "_id" : "R86",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN262643.requestVersion"
  }, {
    "_id" : "R87",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN262643.response"
  }, {
    "_id" : "R88",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN262643.isPartialUpdate"
  }, {
    "_id" : "R89",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN262643.nowMs"
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
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN231532.initialTopologies"
  }, {
    "_id" : "R94",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.this"
  }, {
    "_id" : "R95",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN238437.connName"
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
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN262069.response"
  }, {
    "_id" : "R101",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN262069.isPartialUpdate"
  }, {
    "_id" : "R102",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN262069.nowMs"
  }, {
    "_id" : "R103",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN174292.requestVersion"
  }, {
    "_id" : "R104",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN174292.response"
  }, {
    "_id" : "R105",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN174292.isPartialUpdate"
  }, {
    "_id" : "R106",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN174292.nowMs"
  }, {
    "_id" : "R107",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.update@POLYN158813.nodeId"
  }, {
    "_id" : "R108",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.update@POLYN158813.nodeApiVersions"
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
    "_libelle" : "java.io.File.readObject@POLYN643076.s"
  }, {
    "_id" : "R114",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN242896.request"
  }, {
    "_id" : "R115",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN242896.cb"
  }, {
    "_id" : "R116",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.remove@POLYN159085.nodeId"
  }, {
    "_id" : "R117",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.abortUndrainedBatches@POLYN369230.dq"
  }, {
    "_id" : "R118",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN403463.request"
  }, {
    "_id" : "R119",
    "_libelle" : "org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN584998.request"
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
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN240274.taskId"
  }, {
    "_id" : "R124",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN240274.cb"
  }, {
    "_id" : "R125",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.this"
  }, {
    "_id" : "R126",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.sourceRecord@POLYN211896.preTransformRecord"
  }, {
    "_id" : "R127",
    "_libelle" : "java.lang.Throwable.this"
  }, {
    "_id" : "R128",
    "_libelle" : "java.lang.Throwable.addSuppressed@POLYN398421.exception"
  }, {
    "_id" : "R129",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.this"
  }, {
    "_id" : "R130",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN189310.partition"
  }, {
    "_id" : "R131",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN189310.offset"
  }, {
    "_id" : "R132",
    "_libelle" : "java.io.BufferedOutputStream.this"
  }, {
    "_id" : "R133",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN170408.b"
  }, {
    "_id" : "R134",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN170408.off"
  }, {
    "_id" : "R135",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN170408.len"
  }, {
    "_id" : "R136",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN268846.cleanupDelayMs"
  }, {
    "_id" : "R137",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN265839.taskId"
  }, {
    "_id" : "R138",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.this"
  }, {
    "_id" : "R139",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN203819.key"
  }, {
    "_id" : "R140",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN203819.value"
  }, {
    "_id" : "R141",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN400751.now"
  }, {
    "_id" : "R142",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.this"
  }, {
    "_id" : "R143",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN200565.newCacheSizeBytes"
  }, {
    "_id" : "R144",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaConfigBackingStore.lock"
  }, {
    "_id" : "R145",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN342017.tp"
  }, {
    "_id" : "R146",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerSourceTask.this"
  }, {
    "_id" : "R147",
    "_libelle" : "org.apache.kafka.trogdor.workload.RoundTripWorker.this"
  }, {
    "_id" : "R148",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN394109.batch"
  }, {
    "_id" : "R149",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN394109.response"
  }, {
    "_id" : "R150",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTask.this"
  }, {
    "_id" : "R151",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.pollTasks"
  }, {
    "_id" : "R152",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN332855.tp"
  }, {
    "_id" : "R153",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN332855.position"
  }, {
    "_id" : "R154",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN431551.shortReason"
  }, {
    "_id" : "R155",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN431859.shortReason"
  }, {
    "_id" : "R156",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN431859.fullReason"
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
    "_libelle" : "java.net.Socket.setSendBufferSize@POLYN503351.size"
  }, {
    "_id" : "R161",
    "_libelle" : "java.net.Socket.setReceiveBufferSize@POLYN506058.size"
  }, {
    "_id" : "R162",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN208085.entries"
  }, {
    "_id" : "R163",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN350224.tp"
  }, {
    "_id" : "R164",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN350375.tp"
  }, {
    "_id" : "R165",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN234576.connName"
  }, {
    "_id" : "R166",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN234576.callback"
  }, {
    "_id" : "R167",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN236557.connName"
  }, {
    "_id" : "R168",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN236557.config"
  }, {
    "_id" : "R169",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN236557.allowReplace"
  }, {
    "_id" : "R170",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN236557.callback"
  }, {
    "_id" : "R171",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN236557.configInfos"
  }, {
    "_id" : "R172",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN241691.connName"
  }, {
    "_id" : "R173",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN241691.cb"
  }, {
    "_id" : "R174",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.this"
  }, {
    "_id" : "R175",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN175508.reader"
  }, {
    "_id" : "R176",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.splitAndReenqueue@POLYN346123.partitionDequeue"
  }, {
    "_id" : "R177",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.setEstimation@POLYN167062.compressionRatioForTopic"
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
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromAssignment@POLYN584941.partitions"
  }, {
    "_id" : "R183",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromAssignment@POLYN584941.logPrefix"
  }, {
    "_id" : "R184",
    "_libelle" : "java.io.File.writeObject@POLYN642695.s"
  }, {
    "_id" : "R185",
    "_libelle" : "java.lang.Throwable.writeObject@POLYN396366.s"
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
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN306258.sensor"
  }, {
    "_id" : "R190",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.reporters@POLYN211643.reporters"
  }, {
    "_id" : "R191",
    "_libelle" : "org.apache.kafka.tools.ThroughputThrottler.this"
  }, {
    "_id" : "R192",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.rebalance@POLYN238389.newAssignment"
  }, {
    "_id" : "R193",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN173030.reader"
  }, {
    "_id" : "R194",
    "_libelle" : "java.net.ServerSocket.this"
  }, {
    "_id" : "R195",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.this"
  }, {
    "_id" : "R196",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN191952.key"
  }, {
    "_id" : "R197",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN191952.value"
  }, {
    "_id" : "R198",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.this"
  }, {
    "_id" : "R199",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN173618.consumerRecords"
  }, {
    "_id" : "R200",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN430518.reason"
  }, {
    "_id" : "R201",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN430518.shouldResetMemberId"
  }, {
    "_id" : "R202",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN429819.reason"
  }, {
    "_id" : "R203",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN429819.shouldResetMemberId"
  }, {
    "_id" : "R204",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN333446.tp"
  }, {
    "_id" : "R205",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN333446.position"
  }, {
    "_id" : "R206",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN333446.requestedResetStrategy"
  }, {
    "_id" : "R207",
    "_libelle" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.lock"
  }, {
    "_id" : "R208",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN248598.partition"
  }, {
    "_id" : "R209",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN248598.offset"
  }, {
    "_id" : "R210",
    "_libelle" : "org.apache.kafka.connect.file.FileStreamSourceTask.this"
  }, {
    "_id" : "R211",
    "_libelle" : "org.apache.kafka.connect.storage.FileOffsetBackingStore.this"
  }, {
    "_id" : "R212",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN209532.namespace"
  }, {
    "_id" : "R213",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheLevelSensors"
  }, {
    "_id" : "R214",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.this"
  }, {
    "_id" : "R215",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.addStateStore@POLYN246440.builder"
  }, {
    "_id" : "R216",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.this"
  }, {
    "_id" : "R217",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN184075.key"
  }, {
    "_id" : "R218",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN184075.value"
  }, {
    "_id" : "R219",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN246877.offsets"
  }, {
    "_id" : "R220",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN246877.callback"
  }, {
    "_id" : "R221",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.pause@POLYN253110.partitions"
  }, {
    "_id" : "R222",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.resume@POLYN253432.partitions"
  }, {
    "_id" : "R223",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN427738.cause"
  }, {
    "_id" : "R224",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN430816.api"
  }, {
    "_id" : "R225",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN430816.error"
  }, {
    "_id" : "R226",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN430816.shouldResetMemberId"
  }, {
    "_id" : "R227",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN196922.key"
  }, {
    "_id" : "R228",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1508403.r"
  }, {
    "_id" : "R229",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1508403.f"
  }, {
    "_id" : "R230",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1520068.r"
  }, {
    "_id" : "R231",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1520068.f"
  }, {
    "_id" : "R232",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN266786.key"
  }, {
    "_id" : "R233",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN266786.value"
  }, {
    "_id" : "R234",
    "_libelle" : "org.apache.kafka.trogdor.workload.ProduceBenchWorker.this"
  }, {
    "_id" : "R235",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN324230.pattern"
  }, {
    "_id" : "R236",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN324230.listener"
  }, {
    "_id" : "R237",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN169547.b"
  }, {
    "_id" : "R238",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN238791.topics"
  }, {
    "_id" : "R239",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN240619.topics"
  }, {
    "_id" : "R240",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN240619.listener"
  }, {
    "_id" : "R241",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN238998.pattern"
  }, {
    "_id" : "R242",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN238998.listener"
  }, {
    "_id" : "R243",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN240433.pattern"
  }, {
    "_id" : "R244",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN340446.tp"
  }, {
    "_id" : "R245",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN343581.tp"
  }, {
    "_id" : "R246",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN343581.preferredReadReplicaId"
  }, {
    "_id" : "R247",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN343581.timeMs"
  }, {
    "_id" : "R248",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN346134.partitions"
  }, {
    "_id" : "R249",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN346134.nextAllowResetTimeMs"
  }, {
    "_id" : "R250",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN350521.partitions"
  }, {
    "_id" : "R251",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN350521.nextRetryTimeMs"
  }, {
    "_id" : "R252",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeReporter@POLYN312547.reporter"
  }, {
    "_id" : "R253",
    "_libelle" : "org.apache.kafka.common.metrics.JmxReporter.LOCK"
  }, {
    "_id" : "R254",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.this"
  }, {
    "_id" : "R255",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN170358.status"
  }, {
    "_id" : "R256",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN169979.status"
  }, {
    "_id" : "R257",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN171046.status"
  }, {
    "_id" : "R258",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN170503.status"
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
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN246046.key"
  }, {
    "_id" : "R264",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN246046.value"
  }, {
    "_id" : "R265",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN246046.windowStartTimestamp"
  }, {
    "_id" : "R266",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.this"
  }, {
    "_id" : "R267",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN269297.key"
  }, {
    "_id" : "R268",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN269297.value"
  }, {
    "_id" : "R269",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN269297.windowStartTimestamp"
  }, {
    "_id" : "R270",
    "_libelle" : "java.io.PipedOutputStream.this"
  }, {
    "_id" : "R271",
    "_libelle" : "java.io.PipedOutputStream.connect@POLYN180493.snk"
  }, {
    "_id" : "R272",
    "_libelle" : "java.io.PipedInputStream.this"
  }, {
    "_id" : "R273",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN229248.b"
  }, {
    "_id" : "R274",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN230355.b"
  }, {
    "_id" : "R275",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN230355.off"
  }, {
    "_id" : "R276",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN230355.len"
  }, {
    "_id" : "R277",
    "_libelle" : "java.io.PipedWriter.this"
  }, {
    "_id" : "R278",
    "_libelle" : "java.io.PipedWriter.connect@POLYN179723.snk"
  }, {
    "_id" : "R279",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoinIfNecessary@POLYN431296.shortReason"
  }, {
    "_id" : "R280",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoinIfNecessary@POLYN431296.fullReason"
  }, {
    "_id" : "R281",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.assignPartitionsLock"
  }, {
    "_id" : "R282",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.this"
  }, {
    "_id" : "R283",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.writeEntries@POLYN164459.committedOffsets"
  }, {
    "_id" : "R284",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.assign@POLYN240997.partitions"
  }, {
    "_id" : "R285",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.addRecord@POLYN245517.record"
  }, {
    "_id" : "R286",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setException@POLYN246468.exception"
  }, {
    "_id" : "R287",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN246599.exception"
  }, {
    "_id" : "R288",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN247824.callback"
  }, {
    "_id" : "R289",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.this"
  }, {
    "_id" : "R290",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.addTransientTopics@POLYN161052.topics"
  }, {
    "_id" : "R291",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN174905.fatalException"
  }, {
    "_id" : "R292",
    "_libelle" : "org.apache.kafka.clients.Metadata.fatalError@POLYN274605.exception"
  }, {
    "_id" : "R293",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.this"
  }, {
    "_id" : "R294",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.consumerRecord@POLYN212125.consumedMessage"
  }, {
    "_id" : "R295",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.this"
  }, {
    "_id" : "R296",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeTaskConfigs@POLYN178269.connector"
  }, {
    "_id" : "R297",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN178921.connector"
  }, {
    "_id" : "R298",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN178921.configs"
  }, {
    "_id" : "R299",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.this"
  }, {
    "_id" : "R300",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.setAclMutator@POLYN179661.aclMutator"
  }, {
    "_id" : "R301",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.configure@POLYN183438.configs"
  }, {
    "_id" : "R302",
    "_libelle" : "java.io.PipedReader.this"
  }, {
    "_id" : "R303",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.this"
  }, {
    "_id" : "R304",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.write@POLYN186597.snapshot"
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
    "_libelle" : "org.apache.kafka.streams.state.internals.KeyValueSegment.deleteRange@POLYN158724.keyFrom"
  }, {
    "_id" : "R309",
    "_libelle" : "org.apache.kafka.streams.state.internals.KeyValueSegment.deleteRange@POLYN158724.keyTo"
  }, {
    "_id" : "R310",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.this"
  }, {
    "_id" : "R311",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.calculateNextWindow@POLYN169466.force"
  }, {
    "_id" : "R312",
    "_libelle" : "java.io.FileInputStream.closeLock"
  }, {
    "_id" : "R313",
    "_libelle" : "java.io.FileOutputStream.closeLock"
  }, {
    "_id" : "R314",
    "_libelle" : "java.io.PipedReader.receive@POLYN210965.c"
  }, {
    "_id" : "R315",
    "_libelle" : "java.io.PipedReader.receive@POLYN210965.off"
  }, {
    "_id" : "R316",
    "_libelle" : "java.io.PipedReader.receive@POLYN210965.len"
  }, {
    "_id" : "R317",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.close@POLYN256138.timeout"
  }, {
    "_id" : "R318",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.metrics@POLYN211014.errorHandlingMetrics"
  }, {
    "_id" : "R319",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.this"
  }, {
    "_id" : "R320",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN175245.newState"
  }, {
    "_id" : "R321",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN175245.now"
  }, {
    "_id" : "R322",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelSensors"
  }, {
    "_id" : "R323",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.setNamedTopology@POLYN496978.namedTopology"
  }, {
    "_id" : "R324",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setOffsetsException@POLYN246731.exception"
  }, {
    "_id" : "R325",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN247493.offsets"
  }, {
    "_id" : "R326",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seekToBeginning@POLYN251296.partitions"
  }, {
    "_id" : "R327",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seekToEnd@POLYN251720.partitions"
  }, {
    "_id" : "R328",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN256691.task"
  }, {
    "_id" : "R329",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setLastRebalanceTime@POLYN455747.timestamp"
  }, {
    "_id" : "R330",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewGeneration@POLYN456557.generation"
  }, {
    "_id" : "R331",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewState@POLYN456692.state"
  }, {
    "_id" : "R332",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN345570.partitions"
  }, {
    "_id" : "R333",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN345570.offsetResetStrategy"
  }, {
    "_id" : "R334",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.this"
  }, {
    "_id" : "R335",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.put@POLYN155572.key"
  }, {
    "_id" : "R336",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.put@POLYN155572.value"
  }, {
    "_id" : "R337",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.addReporter@POLYN312191.reporter"
  }, {
    "_id" : "R338",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.putAll@POLYN169427.entries"
  }, {
    "_id" : "R339",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.this"
  }, {
    "_id" : "R340",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.commitTransaction@POLYN162103.record"
  }, {
    "_id" : "R341",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.abortTransaction@POLYN162467.record"
  }, {
    "_id" : "R342",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN232976.callback"
  }, {
    "_id" : "R343",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN233207.connName"
  }, {
    "_id" : "R344",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN233207.callback"
  }, {
    "_id" : "R345",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN235644.connName"
  }, {
    "_id" : "R346",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN235644.config"
  }, {
    "_id" : "R347",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN235644.allowReplace"
  }, {
    "_id" : "R348",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN235644.callback"
  }, {
    "_id" : "R349",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN238811.connName"
  }, {
    "_id" : "R350",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN238811.callback"
  }, {
    "_id" : "R351",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN177295.connector"
  }, {
    "_id" : "R352",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN177295.properties"
  }, {
    "_id" : "R353",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeConnectorConfig@POLYN177916.connector"
  }, {
    "_id" : "R354",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN179810.connector"
  }, {
    "_id" : "R355",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN179810.state"
  }, {
    "_id" : "R356",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.setUpdateListener@POLYN180637.listener"
  }, {
    "_id" : "R357",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.loadSnapshot@POLYN181170.acls"
  }, {
    "_id" : "R358",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN176801.newLeader"
  }, {
    "_id" : "R359",
    "_libelle" : "java.io.BufferedInputStream.this"
  }, {
    "_id" : "R360",
    "_libelle" : "java.io.BufferedInputStream.mark@POLYN258299.readlimit"
  }, {
    "_id" : "R361",
    "_libelle" : "java.io.PipedOutputStream.sink"
  }, {
    "_id" : "R362",
    "_libelle" : "java.io.PipedReader.receive@POLYN209287.c"
  }, {
    "_id" : "R363",
    "_libelle" : "java.io.PipedWriter.sink"
  }, {
    "_id" : "R364",
    "_libelle" : "java.net.ServerSocket.setSocketFactory@POLYN336951.fac"
  }, {
    "_id" : "R365",
    "_libelle" : "java.net.Socket.setSocketImplFactory@POLYN518986.fac"
  }, {
    "_id" : "R366",
    "_libelle" : "java.util.Hashtable.forEach@POLYN454716.action"
  }, {
    "_id" : "R367",
    "_libelle" : "java.util.Hashtable.replaceAll@POLYN455626.function"
  }, {
    "_id" : "R368",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromMetadata@POLYN585754.topics"
  }, {
    "_id" : "R369",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromMetadata@POLYN585754.logPrefix"
  }, {
    "_id" : "R370",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.this"
  }, {
    "_id" : "R371",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN263886.activePartitionHostMap"
  }, {
    "_id" : "R372",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN263886.standbyPartitionHostMap"
  }, {
    "_id" : "R373",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN263886.clusterMetadata"
  }, {
    "_id" : "R374",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.putAll@POLYN193038.entries"
  }, {
    "_id" : "R375",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.setListener@POLYN201222.listener"
  }, {
    "_id" : "R376",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDbIterator.this"
  }, {
    "_id" : "R377",
    "_libelle" : "org.apache.kafka.trogdor.workload.PayloadIterator.this"
  }, {
    "_id" : "R378",
    "_libelle" : "org.apache.kafka.trogdor.workload.PayloadIterator.seek@POLYN154210.position"
  }, {
    "_id" : "R379",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.this"
  }, {
    "_id" : "R380",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.delay@POLYN157499.amount"
  }, {
    "_id" : "R381",
    "_libelle" : "java.io.InputStream.mark@POLYN261334.readlimit"
  } ],
  "_lesDeadlocksSequences" : [ {
    "_id" : "0",
    "_lesItems" : [ "S0:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192645", "S0:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192645", "S0:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN206694", "S0:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN164145 (R0 in line [00067],R1 in line [00067])", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866256", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866545", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866545", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868901", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868901", "S0:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN507457", "S0:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN540065", "S0:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN540065", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN342761 (R2 in line [00576],R6 in line [00576],R7 in line [00576])", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN332334", "S0:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109", "S0:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109.dummymethode_00114" ]
  }, {
    "_id" : "1",
    "_lesItems" : [ "S1:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192645", "S1:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192645", "S1:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN206694", "S1:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN164145 (R0 in line [00067],R1 in line [00067])", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866256", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866545", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866545", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868901", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868901", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN507457", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN540065", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN540065", "S1:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN342951 (R2 in line [00580],R8 in line [00580],R9 in line [00580])", "S1:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN332334", "S1:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109", "S1:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109.dummymethode_00114" ]
  }, {
    "_id" : "2",
    "_lesItems" : [ "S2:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192645", "S2:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192645", "S2:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN206694", "S2:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN164145 (R0 in line [00067],R1 in line [00067])", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866256", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866545", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866545", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868901", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868901", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN507457", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN540065", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN540065", "S2:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN343141 (R2 in line [00584],R10 in line [00584],R11 in line [00584])", "S2:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN332334", "S2:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109", "S2:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109.dummymethode_00114" ]
  }, {
    "_id" : "3",
    "_lesItems" : [ "S3:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192645", "S3:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192645", "S3:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN206694", "S3:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN164145 (R0 in line [00067],R1 in line [00067])", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866256", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866545", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866545", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868901", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868901", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN507457", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN540065", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN540065", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN547827", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN547827", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN345986", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN345375 (R2 in line [00636],R12 in line [00636],R13 in line [00636])", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN332334", "S3:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109", "S3:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109.dummymethode_00114" ]
  }, {
    "_id" : "4",
    "_lesItems" : [ "S4:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192645", "S4:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192645", "S4:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN206694", "S4:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN164145 (R0 in line [00067],R1 in line [00067])", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866256", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866545", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866545", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868901", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868901", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN507457", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN540065", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN540065", "S4:org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN350929 (R2 in line [00755],R16 in line [00755])", "S4:org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN179907", "S4:java.util.HashMap.HashIterator.remove@POLYN684136", "S4:java.util.HashMap.HashIterator.remove@POLYN684136.dummymethode_01445" ]
  }, {
    "_id" : "5",
    "_lesItems" : [ "S5:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192645", "S5:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192645", "S5:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN206694", "S5:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN164145 (R0 in line [00067],R1 in line [00067])", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866256", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866545", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866545", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868901", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868901", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN507457", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN507457", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509750", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509750", "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN335831 (R2 in line [00443],R17 in line [00443],R18 in line [00443])", "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN332334", "S5:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109", "S5:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109.dummymethode_00114" ]
  }, {
    "_id" : "6",
    "_lesItems" : [ "S6:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524879", "S6:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524879", "S6:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN523038", "S6:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN523038", "S6:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383848", "S6:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383848", "S6:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN384210", "S6:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN384210", "S6:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN859558", "S6:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN859558", "S6:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN419646", "S6:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN419646", "S6:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN328379 (R2 in line [00273],R24 in line [00273])", "S6:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN328379.dummymethode_00277" ]
  }, {
    "_id" : "7",
    "_lesItems" : [ "S7:org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN912714", "S7:org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN912714", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN342017 (R2 in line [00561],R145 in line [00561])", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN332334", "S7:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109", "S7:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109.dummymethode_00114" ]
  }, {
    "_id" : "8",
    "_lesItems" : [ "S8:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN241592 (R65 in line [00163])", "S8:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN241826 (R65 in line [00168],R151 in line [00175])", "S8:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN241826 (R65 in line [00168],R151 in line [00175])", "S8:org.apache.kafka.clients.consumer.MockConsumer.updateFetchPosition@POLYN257371", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.seek@POLYN333045", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN332855 (R2 in line [00378],R152 in line [00378],R153 in line [00378])", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN332334", "S8:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109", "S8:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109.dummymethode_00114" ]
  }, {
    "_id" : "9",
    "_lesItems" : [ "S9:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN903557", "S9:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN903557", "S9:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN350224 (R2 in line [00737],R163 in line [00737])", "S9:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN332334", "S9:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109", "S9:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109.dummymethode_00114" ]
  }, {
    "_id" : "10",
    "_lesItems" : [ "S10:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN904315", "S10:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN904315", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN350375 (R2 in line [00741],R164 in line [00741])", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN332334", "S10:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109", "S10:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109.dummymethode_00114" ]
  }, {
    "_id" : "11",
    "_lesItems" : [ "S11:org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetIfNeeded@POLYN512719", "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN333446 (R2 in line [00390],R204 in line [00390],R205 in line [00390],R206 in line [00390])", "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN332701", "S11:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109", "S11:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109.dummymethode_00114" ]
  }, {
    "_id" : "12",
    "_lesItems" : [ "S12:org.apache.kafka.clients.consumer.KafkaConsumer.subscribe@POLYN857416", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN324230 (R2 in line [00172],R235 in line [00172],R236 in line [00172])", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN329284", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN329284.dummymethode_00292" ]
  }, {
    "_id" : "13",
    "_lesItems" : [ "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeValidatePositionForCurrentLeader@POLYN336303 (R2 in line [00456])", "S13:org.apache.kafka.clients.ApiVersions.get@POLYN159318 (R75 in line [00048])", "S13:java.util.Map.get@POLYN437683" ]
  }, {
    "_id" : "14",
    "_lesItems" : [ "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN340446 (R2 in line [00529],R244 in line [00529])", "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN332334", "S14:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109", "S14:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109.dummymethode_00114" ]
  }, {
    "_id" : "15",
    "_lesItems" : [ "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN343581 (R2 in line [00596],R245 in line [00596],R246 in line [00596],R247 in line [00596])", "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN332334", "S15:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109", "S15:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109.dummymethode_00114" ]
  }, {
    "_id" : "16",
    "_lesItems" : [ "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN346134 (R2 in line [00651],R248 in line [00651],R249 in line [00651])", "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN332334", "S16:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109", "S16:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109.dummymethode_00114" ]
  }, {
    "_id" : "17",
    "_lesItems" : [ "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN350521 (R2 in line [00745],R250 in line [00745],R251 in line [00745])", "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN332701", "S17:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109", "S17:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109.dummymethode_00114" ]
  }, {
    "_id" : "18",
    "_lesItems" : [ "S18:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN345570 (R2 in line [00640],R332 in line [00640],R333 in line [00640])", "S18:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN345570.dummymethode_00641" ]
  }, {
    "_id" : "19",
    "_lesItems" : [ "S19:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN557221", "S19:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN564994", "S19:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN564994", "S19:org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN272635 (R5 in line [00450],R73 in line [00450])", "S19:org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN272635.dummymethode_00451" ]
  }, {
    "_id" : "20",
    "_lesItems" : [ "S20:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN838170", "S20:org.apache.kafka.clients.Metadata.bootstrap@POLYN261677 (R5 in line [00238],R77 in line [00238])", "S20:org.apache.kafka.clients.Metadata.bootstrap@POLYN261677.dummymethode_00239" ]
  }, {
    "_id" : "21",
    "_lesItems" : [ "S21:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN378803", "S21:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN378803", "S21:org.apache.kafka.clients.Metadata.failedUpdate@POLYN274345 (R5 in line [00490],R85 in line [00490])", "S21:org.apache.kafka.clients.Metadata.failedUpdate@POLYN274345.dummymethode_00491" ]
  }, {
    "_id" : "22",
    "_lesItems" : [ "S22:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN378803", "S22:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN378803", "S22:org.apache.kafka.clients.Metadata.update@POLYN262643 (R5 in line [00263],R86 in line [00263],R87 in line [00263],R88 in line [00263],R89 in line [00263])", "S22:org.apache.kafka.clients.Metadata.update@POLYN262643.dummymethode_00264" ]
  }, {
    "_id" : "23",
    "_lesItems" : [ "S23:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN262069 (R5 in line [00249],R100 in line [00249],R101 in line [00249],R102 in line [00249])", "S23:org.apache.kafka.clients.Metadata.update@POLYN262643 (R5 in line [00263],R86 in line [00263],R87 in line [00263],R88 in line [00263],R89 in line [00263])", "S23:org.apache.kafka.clients.Metadata.update@POLYN262643.dummymethode_00264" ]
  }, {
    "_id" : "24",
    "_lesItems" : [ "S24:org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN174905 (R44 in line [00145],R291 in line [00145])", "S24:org.apache.kafka.clients.Metadata.fatalError@POLYN274605 (R5 in line [00500],R292 in line [00500])", "S24:org.apache.kafka.clients.Metadata.fatalError@POLYN274605.dummymethode_00501" ]
  }, {
    "_id" : "25",
    "_lesItems" : [ "S25:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192645", "S25:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192645", "S25:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN206694", "S25:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN164145 (R0 in line [00067],R1 in line [00067])", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866256", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866545", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.acquireAndEnsureOpen@POLYN921786", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.acquire@POLYN922241" ]
  }, {
    "_id" : "26",
    "_lesItems" : [ "S26:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192645", "S26:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192645", "S26:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN206694", "S26:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN164145 (R0 in line [00067],R1 in line [00067])", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866256", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866545", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866545", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.updateAssignmentMetadataIfNeeded@POLYN868444", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.updateFetchPositions@POLYN921124", "S26:org.apache.kafka.clients.consumer.internals.SubscriptionState.hasAllFetchPositions@POLYN346874 (R2 in line [00669])", "S26:org.apache.kafka.common.internals.PartitionStates.stateIterator@POLYN181431" ]
  }, {
    "_id" : "27",
    "_lesItems" : [ "S27:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192645", "S27:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192645", "S27:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN206694", "S27:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN164145 (R0 in line [00067],R1 in line [00067])", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866256", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866545", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866545", "S27:org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.recordPollEnd@POLYN168038", "S27:org.apache.kafka.common.metrics.Sensor.record@POLYN222793", "S27:org.apache.kafka.common.metrics.Sensor.recordInternal@POLYN223077 (R3 in line [00232])", "S27:org.apache.kafka.common.metrics.Sensor.recordInternal@POLYN223077.dummymethode_00231" ]
  }, {
    "_id" : "28",
    "_lesItems" : [ "S28:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192645", "S28:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192645", "S28:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN206694", "S28:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN164145 (R0 in line [00067],R1 in line [00067])", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866256", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866545", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866545", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868901", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868901", "S28:org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN488283 (R4 in line [00248])", "S28:org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.maybeUpdateAssignment@POLYN572320", "S28:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignmentId@POLYN323279 (R2 in line [00149])", "S28:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignmentId@POLYN323279.dummymethode_00150" ]
  }, {
    "_id" : "29",
    "_lesItems" : [ "S29:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192645", "S29:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192645", "S29:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN206694", "S29:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN164145 (R0 in line [00067],R1 in line [00067])", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866256", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866545", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866545", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868901", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868901", "S29:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN507457", "S29:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN540065", "S29:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN540065", "S29:org.apache.kafka.clients.Metadata.requestUpdate@POLYN257145 (R5 in line [00145])", "S29:org.apache.kafka.clients.Metadata.requestUpdate@POLYN257145.dummymethode_00146" ]
  }, {
    "_id" : "30",
    "_lesItems" : [ "S30:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192645", "S30:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192645", "S30:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN206694", "S30:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN164145 (R0 in line [00067],R1 in line [00067])", "S30:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN164145 (R0 in line [00067],R1 in line [00067])", "S30:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866256", "S30:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN866545", "S30:org.apache.kafka.clients.consumer.KafkaConsumer.acquireAndEnsureOpen@POLYN921786", "S30:org.apache.kafka.clients.consumer.KafkaConsumer.acquire@POLYN922241" ]
  }, {
    "_id" : "31",
    "_lesItems" : [ "S31:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524879", "S31:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524879", "S31:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN523038", "S31:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN523038", "S31:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN546979 (R27 in line [01039],R28 in line [01051])", "S31:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN556604 (R29 in line [01215])", "S31:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN556604.dummymethode_01214" ]
  }, {
    "_id" : "32",
    "_lesItems" : [ "S32:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524879", "S32:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524879", "S32:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN523038", "S32:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN523038", "S32:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN546979 (R27 in line [01039],R28 in line [01051])", "S32:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN546979 (R27 in line [01039],R28 in line [01051])", "S32:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN556604 (R29 in line [01215])", "S32:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN556604.dummymethode_01214" ]
  }, {
    "_id" : "33",
    "_lesItems" : [ "S33:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524879", "S33:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524879", "S33:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN523038", "S33:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN523038", "S33:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN546979 (R27 in line [01039],R28 in line [01051])", "S33:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN546979 (R27 in line [01039],R28 in line [01051])", "S33:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383848", "S33:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383848", "S33:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN343869 (R21 in line [00215])", "S33:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN343869.dummymethode_00216" ]
  }, {
    "_id" : "34",
    "_lesItems" : [ "S34:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524879", "S34:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524879", "S34:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN523038", "S34:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN523038", "S34:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN546979 (R27 in line [01039],R28 in line [01051])", "S34:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN546979 (R27 in line [01039],R28 in line [01051])", "S34:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383848", "S34:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383848", "S34:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN384210", "S34:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN384210", "S34:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN859558", "S34:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN859558", "S34:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN433652 (R22 in line [01103])", "S34:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN433652.dummymethode_01104" ]
  }, {
    "_id" : "35",
    "_lesItems" : [ "S35:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524879", "S35:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524879", "S35:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN523038", "S35:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN523038", "S35:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN546979 (R27 in line [01039],R28 in line [01051])", "S35:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN546979 (R27 in line [01039],R28 in line [01051])", "S35:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383848", "S35:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383848", "S35:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN384210", "S35:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN384210", "S35:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN859558", "S35:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN859558", "S35:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN419646", "S35:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN419646", "S35:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN398995", "S35:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN398995", "S35:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN331042 (R2 in line [00334])", "S35:org.apache.kafka.clients.consumer.internals.SubscriptionState.collectPartitions@POLYN347513", "S35:org.apache.kafka.clients.consumer.internals.SubscriptionState.collectPartitions@POLYN347513.dummymethode_00686" ]
  }, {
    "_id" : "36",
    "_lesItems" : [ "S36:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524879", "S36:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524879", "S36:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN523038", "S36:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN523038", "S36:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN546979 (R27 in line [01039],R28 in line [01051])", "S36:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN546979 (R27 in line [01039],R28 in line [01051])", "S36:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383848", "S36:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383848", "S36:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN384210", "S36:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN384210", "S36:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelSensors@POLYN298709 (R25 in line [00301])", "S36:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN297188", "S36:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN297188.dummymethode_00263" ]
  }, {
    "_id" : "37",
    "_lesItems" : [ "S37:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524879", "S37:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524879", "S37:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN523038", "S37:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN523038", "S37:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN546979 (R27 in line [01039],R28 in line [01051])", "S37:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN546979 (R27 in line [01039],R28 in line [01051])", "S37:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383848", "S37:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383848", "S37:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN384210", "S37:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN384210", "S37:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelMetrics@POLYN299261 (R26 in line [00310])", "S37:java.util.Hashtable.remove@POLYN486086" ]
  }, {
    "_id" : "38",
    "_lesItems" : [ "S38:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524879", "S38:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524879", "S38:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN523038", "S38:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN523038", "S38:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383848", "S38:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383848", "S38:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN384210", "S38:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN384210", "S38:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN859558", "S38:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN859558", "S38:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN433652 (R22 in line [01103])", "S38:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN433652 (R22 in line [01103])", "S38:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.pollNoWakeup@POLYN266684", "S38:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.poll@POLYN264815", "S38:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.UnsentRequests.clean@POLYN282244 (R23 in line [00696])", "S38:java.util.Map.values@POLYN442522" ]
  }, {
    "_id" : "39",
    "_lesItems" : [ "S39:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524879", "S39:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524879", "S39:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN523038", "S39:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN523038", "S39:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383848", "S39:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383848", "S39:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN384210", "S39:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN384210", "S39:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN859558", "S39:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN859558", "S39:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN433652 (R22 in line [01103])", "S39:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN433652 (R22 in line [01103])", "S39:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.pollNoWakeup@POLYN266684", "S39:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.poll@POLYN264815", "S39:org.apache.kafka.clients.Metadata.maybeThrowAnyException@POLYN271891 (R5 in line [00428])", "S39:org.apache.kafka.clients.Metadata.clearErrorsAndMaybeThrowException@POLYN272821", "S39:org.apache.kafka.clients.Metadata.clearErrorsAndMaybeThrowException@POLYN272821.dummymethode_00456" ]
  }, {
    "_id" : "40",
    "_lesItems" : [ "S40:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN383406", "S40:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN383406", "S40:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToClients@POLYN396591", "S40:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.populateClientStatesMap@POLYN400464", "S40:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.fetchCommittedOffsets@POLYN424217", "S40:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetFetchRequest@POLYN445300", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN427084 (R22 in line [00926])", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN427893 (R22 in line [00947],R30 in line [00947],R31 in line [00947])", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN427893.dummymethode_00949" ]
  }, {
    "_id" : "41",
    "_lesItems" : [ "S41:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.close@POLYN426268", "S41:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN397610 (R22 in line [00240])", "S41:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN397610 (R22 in line [00240])", "S41:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN427539 (R22 in line [00939],R70 in line [00939])", "S41:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN427539.dummymethode_00940" ]
  }, {
    "_id" : "42",
    "_lesItems" : [ "S42:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN240033", "S42:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN240033", "S42:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN400751 (R22 in line [00322],R141 in line [00322])", "S42:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.failureCause@POLYN449174" ]
  }, {
    "_id" : "43",
    "_lesItems" : [ "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatResponseHandler.handle@POLYN437168", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatResponseHandler.handle@POLYN437168", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN431551 (R22 in line [01039],R154 in line [01039])", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN431859 (R22 in line [01050],R155 in line [01050],R156 in line [01050])", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN431859 (R22 in line [01050],R155 in line [01050],R156 in line [01050])", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN431859.dummymethode_01053" ]
  }, {
    "_id" : "44",
    "_lesItems" : [ "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureActiveGroup@POLYN402072", "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN403698", "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN430518 (R22 in line [01017],R200 in line [01017],R201 in line [01017])", "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN429819 (R22 in line [01004],R202 in line [01004],R203 in line [01004])", "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN429819.dummymethode_01005" ]
  }, {
    "_id" : "45",
    "_lesItems" : [ "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN427738 (R22 in line [00943],R223 in line [00943])", "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN427893 (R22 in line [00947],R30 in line [00947],R31 in line [00947])", "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN427893.dummymethode_00949" ]
  }, {
    "_id" : "46",
    "_lesItems" : [ "S46:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN430816 (R22 in line [01023],R224 in line [01023],R225 in line [01023],R226 in line [01023])", "S46:java.lang.String.format@POLYN916323", "S46:java.lang.String.format@POLYN916323.dummymethode_00001" ]
  }, {
    "_id" : "47",
    "_lesItems" : [ "S47:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.rejoinNeededOrPending@POLYN420988", "S47:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoinIfNecessary@POLYN431296 (R22 in line [01032],R279 in line [01032],R280 in line [01032])", "S47:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN431859 (R22 in line [01050],R155 in line [01050],R156 in line [01050])", "S47:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN431859 (R22 in line [01050],R155 in line [01050],R156 in line [01050])", "S47:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN431859.dummymethode_01053" ]
  }, {
    "_id" : "48",
    "_lesItems" : [ "S48:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setLastRebalanceTime@POLYN455747 (R22 in line [01592],R329 in line [01592])", "S48:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setLastRebalanceTime@POLYN455747.dummymethode_01593" ]
  }, {
    "_id" : "49",
    "_lesItems" : [ "S49:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewGeneration@POLYN456557 (R22 in line [01617],R330 in line [01617])", "S49:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewGeneration@POLYN456557.dummymethode_01618" ]
  }, {
    "_id" : "50",
    "_lesItems" : [ "S50:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewState@POLYN456692 (R22 in line [01621],R331 in line [01621])", "S50:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewState@POLYN456692.dummymethode_01622" ]
  }, {
    "_id" : "51",
    "_lesItems" : [ "S51:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN549197", "S51:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN550277 (R27 in line [01113])", "S51:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383848", "S51:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383848", "S51:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN343869 (R21 in line [00215])", "S51:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN343869.dummymethode_00216" ]
  }, {
    "_id" : "52",
    "_lesItems" : [ "S52:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN549197", "S52:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN550277 (R27 in line [01113])", "S52:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383848", "S52:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383848", "S52:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN384210", "S52:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN384210", "S52:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN859558", "S52:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN859558", "S52:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN433652 (R22 in line [01103])", "S52:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN433652.dummymethode_01104" ]
  }, {
    "_id" : "53",
    "_lesItems" : [ "S53:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN549197", "S53:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN550277 (R27 in line [01113])", "S53:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383848", "S53:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383848", "S53:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN384210", "S53:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN384210", "S53:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN859558", "S53:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN859558", "S53:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN419646", "S53:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN419646", "S53:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN398995", "S53:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN398995", "S53:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN331042 (R2 in line [00334])", "S53:org.apache.kafka.clients.consumer.internals.SubscriptionState.collectPartitions@POLYN347513", "S53:org.apache.kafka.clients.consumer.internals.SubscriptionState.collectPartitions@POLYN347513.dummymethode_00686" ]
  }, {
    "_id" : "54",
    "_lesItems" : [ "S54:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN549197", "S54:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN550277 (R27 in line [01113])", "S54:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383848", "S54:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383848", "S54:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN384210", "S54:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN384210", "S54:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelSensors@POLYN298709 (R25 in line [00301])", "S54:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN297188", "S54:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN297188.dummymethode_00263" ]
  }, {
    "_id" : "55",
    "_lesItems" : [ "S55:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN549197", "S55:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN550277 (R27 in line [01113])", "S55:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383848", "S55:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383848", "S55:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN384210", "S55:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN384210", "S55:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelMetrics@POLYN299261 (R26 in line [00310])", "S55:java.util.Hashtable.remove@POLYN486086" ]
  }, {
    "_id" : "56",
    "_lesItems" : [ "S56:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN383406", "S56:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN383406", "S56:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToClients@POLYN396591", "S56:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.populateClientStatesMap@POLYN400464", "S56:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.fetchCommittedOffsets@POLYN424217", "S56:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetFetchRequest@POLYN445300", "S56:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN427084 (R22 in line [00926])", "S56:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN427893 (R22 in line [00947],R30 in line [00947],R31 in line [00947])", "S56:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN427893 (R22 in line [00947],R30 in line [00947],R31 in line [00947])", "S56:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN427893.dummymethode_00949" ]
  }, {
    "_id" : "57",
    "_lesItems" : [ "S57:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN476107", "S57:org.apache.kafka.clients.producer.internals.Sender.run@POLYN315368", "S57:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN317575", "S57:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN399633 (R32 in line [00718])", "S57:org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN387878 (R32 in line [00468],R40 in line [00468])", "S57:org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN387878.dummymethode_00469" ]
  }, {
    "_id" : "58",
    "_lesItems" : [ "S58:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN476107", "S58:org.apache.kafka.clients.producer.internals.Sender.run@POLYN315368", "S58:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN317575", "S58:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN317575", "S58:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN403641 (R32 in line [00810],R43 in line [00810])", "S58:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN403641.dummymethode_00812" ]
  }, {
    "_id" : "59",
    "_lesItems" : [ "S59:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN476107", "S59:org.apache.kafka.clients.producer.internals.Sender.run@POLYN315368", "S59:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN317575", "S59:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN317575", "S59:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318771", "S59:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318771", "S59:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN363620", "S59:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN359091 (R47 in line [00799])", "S59:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN386141 (R32 in line [00426],R48 in line [00426])", "S59:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN161907", "S59:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN152156", "S59:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN152156.dummymethode_00026" ]
  }, {
    "_id" : "60",
    "_lesItems" : [ "S60:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN476107", "S60:org.apache.kafka.clients.producer.internals.Sender.run@POLYN315368", "S60:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN317575", "S60:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN317575", "S60:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318771", "S60:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318771", "S60:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN363620", "S60:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN359091 (R47 in line [00799])", "S60:org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN390253 (R32 in line [00521],R49 in line [00521],R50 in line [00521])", "S60:org.apache.kafka.clients.producer.internals.TransactionManager.sequenceNumber@POLYN389887 (R32 in line [00510])", "S60:org.apache.kafka.clients.producer.internals.TxnPartitionMap.getOrCreate@POLYN160568", "S60:org.apache.kafka.clients.producer.internals.TxnPartitionMap.getOrCreate@POLYN160568.dummymethode_00043" ]
  }, {
    "_id" : "61",
    "_lesItems" : [ "S61:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN476107", "S61:org.apache.kafka.clients.producer.internals.Sender.run@POLYN315368", "S61:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN317575", "S61:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN317575", "S61:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318771", "S61:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318771", "S61:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN363620", "S61:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN359091 (R47 in line [00799])", "S61:org.apache.kafka.clients.producer.internals.TransactionManager.addInFlightBatch@POLYN390649 (R32 in line [00528],R51 in line [00528])", "S61:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN160174", "S61:java.util.Map.get@POLYN437683" ]
  }, {
    "_id" : "62",
    "_lesItems" : [ "S62:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN476107", "S62:org.apache.kafka.clients.producer.internals.Sender.run@POLYN315368", "S62:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN317575", "S62:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN317575", "S62:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318771", "S62:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318771", "S62:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN339513", "S62:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN395258 (R32 in line [00624],R53 in line [00624],R54 in line [00624],R55 in line [00624])", "S62:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN394663 (R32 in line [00610],R56 in line [00610])", "S62:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN385131 (R32 in line [00397],R57 in line [00397])", "S62:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN385131.dummymethode_00398" ]
  }, {
    "_id" : "63",
    "_lesItems" : [ "S63:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN476107", "S63:org.apache.kafka.clients.producer.internals.Sender.run@POLYN315368", "S63:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN317575", "S63:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN317575", "S63:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318771", "S63:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318771", "S63:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN339513", "S63:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN395258 (R32 in line [00624],R53 in line [00624],R54 in line [00624],R55 in line [00624])", "S63:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN394663 (R32 in line [00610],R56 in line [00610])", "S63:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN384645 (R32 in line [00386],R58 in line [00386])", "S63:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN384645.dummymethode_00388" ]
  }, {
    "_id" : "64",
    "_lesItems" : [ "S64:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN476107", "S64:org.apache.kafka.clients.producer.internals.Sender.run@POLYN315368", "S64:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN317575", "S64:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN317575", "S64:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318771", "S64:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318771", "S64:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN339513", "S64:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN395258 (R32 in line [00624],R53 in line [00624],R54 in line [00624],R55 in line [00624])", "S64:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN392076 (R32 in line [00557],R59 in line [00557])", "S64:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN160174", "S64:java.util.Map.get@POLYN437683" ]
  }, {
    "_id" : "65",
    "_lesItems" : [ "S65:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN476107", "S65:org.apache.kafka.clients.producer.internals.Sender.run@POLYN315368", "S65:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN317575", "S65:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN317575", "S65:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318771", "S65:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318771", "S65:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN399025 (R32 in line [00708],R60 in line [00708])", "S65:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN399025.dummymethode_00710" ]
  }, {
    "_id" : "66",
    "_lesItems" : [ "S66:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN557221", "S66:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN557221", "S66:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN382322 (R32 in line [00327],R76 in line [00327])", "S66:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN410368" ]
  }, {
    "_id" : "67",
    "_lesItems" : [ "S67:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN323251", "S67:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN323251", "S67:org.apache.kafka.clients.producer.internals.Sender.maybeFindCoordinatorAndRetry@POLYN326952", "S67:org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN403463 (R32 in line [00805],R118 in line [00805])", "S67:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.setRetry@POLYN419783", "S67:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.setRetry@POLYN419783.dummymethode_01228" ]
  }, {
    "_id" : "68",
    "_lesItems" : [ "S68:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN328775", "S68:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN328775", "S68:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN336207", "S68:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN394109 (R32 in line [00599],R148 in line [00599],R149 in line [00599])", "S68:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateLastAckedSequence@POLYN392368", "S68:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateLastAckedSequence@POLYN392368.dummymethode_00566" ]
  }, {
    "_id" : "69",
    "_lesItems" : [ "S69:org.apache.kafka.clients.producer.internals.TransactionManager.isPartitionAdded@POLYN385565 (R32 in line [00407])", "S69:java.util.Hashtable.contains@POLYN427812 (R61 in line [00307])", "S69:java.util.Hashtable.contains@POLYN427812.dummymethode_00312" ]
  }, {
    "_id" : "70",
    "_lesItems" : [ "S70:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN412898", "S70:java.util.Hashtable.putAll@POLYN439176 (R61 in line [00536],R62 in line [00536])", "S70:java.util.Hashtable.put@POLYN435708 (R61 in line [00471])", "S70:java.util.Hashtable.put@POLYN435708.dummymethode_00478" ]
  }, {
    "_id" : "71",
    "_lesItems" : [ "S71:java.util.Hashtable.forEach@POLYN454716 (R61 in line [00888],R366 in line [00888])", "S71:java.util.Hashtable.forEach@POLYN454716.dummymethode_00889" ]
  }, {
    "_id" : "72",
    "_lesItems" : [ "S72:java.util.Hashtable.replaceAll@POLYN455626 (R61 in line [00908],R367 in line [00908])", "S72:java.util.Hashtable.replaceAll@POLYN455626.dummymethode_00909" ]
  }, {
    "_id" : "73",
    "_lesItems" : [ "S73:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN535224", "S73:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN535224", "S73:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN551508 (R33 in line [00744])", "S73:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN551508 (R33 in line [00744])", "S73:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN197004", "S73:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN198935", "S73:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN198935", "S73:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN172071 (R35 in line [00072],R36 in line [00072],R37 in line [00072],R38 in line [00072])", "S73:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN172071.dummymethode_00075" ]
  }, {
    "_id" : "74",
    "_lesItems" : [ "S74:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN838170", "S74:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN838170", "S74:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN171287 (R35 in line [00060],R78 in line [00060],R79 in line [00060],R80 in line [00060],R81 in line [00060])", "S74:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN171287.dummymethode_00062" ]
  }, {
    "_id" : "75",
    "_lesItems" : [ "S75:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN535224", "S75:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN535224", "S75:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN551508 (R33 in line [00744])", "S75:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN551508 (R33 in line [00744])", "S75:org.apache.kafka.connect.runtime.distributed.DistributedHerder.stopServices@POLYN552845", "S75:org.apache.kafka.connect.runtime.AbstractHerder.stopServices@POLYN302346", "S75:org.apache.kafka.connect.runtime.Worker.stop@POLYN430447", "S75:org.apache.kafka.connect.runtime.Worker.stop@POLYN430447", "S75:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN504650 (R39 in line [01751])" ]
  }, {
    "_id" : "76",
    "_lesItems" : [ "S76:org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN584998 (R33 in line [01387],R119 in line [01387])", "S76:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN171698", "S76:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN171698.dummymethode_00055" ]
  }, {
    "_id" : "77",
    "_lesItems" : [ "S77:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN535224", "S77:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN535224", "S77:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN551508 (R33 in line [00744])", "S77:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN551508 (R33 in line [00744])", "S77:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN197004", "S77:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN198935", "S77:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN198935", "S77:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN172071 (R35 in line [00072],R36 in line [00072],R37 in line [00072],R38 in line [00072])", "S77:org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN174010", "S77:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN311407 (R15 in line [00558])", "S77:java.util.HashMap.remove@POLYN659970", "S77:java.util.HashMap.remove@POLYN659970.dummymethode_01064" ]
  }, {
    "_id" : "78",
    "_lesItems" : [ "S78:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN535224", "S78:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN535224", "S78:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN551508 (R33 in line [00744])", "S78:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN551508 (R33 in line [00744])", "S78:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN197004", "S78:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN198935", "S78:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN198935", "S78:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN172071 (R35 in line [00072],R36 in line [00072],R37 in line [00072],R38 in line [00072])", "S78:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN172071 (R35 in line [00072],R36 in line [00072],R37 in line [00072],R38 in line [00072])", "S78:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN172071.dummymethode_00075" ]
  }, {
    "_id" : "79",
    "_lesItems" : [ "S79:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN476107", "S79:org.apache.kafka.clients.producer.internals.Sender.run@POLYN315368", "S79:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN317575", "S79:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN317575", "S79:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318771", "S79:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318771", "S79:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN363620", "S79:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN359091 (R47 in line [00799])", "S79:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN386141 (R32 in line [00426],R48 in line [00426])", "S79:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN386141 (R32 in line [00426],R48 in line [00426])", "S79:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN161907", "S79:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN152156", "S79:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN152156.dummymethode_00026" ]
  }, {
    "_id" : "80",
    "_lesItems" : [ "S80:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN476107", "S80:org.apache.kafka.clients.producer.internals.Sender.run@POLYN315368", "S80:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN317575", "S80:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN317575", "S80:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318771", "S80:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318771", "S80:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN339513", "S80:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN395258 (R32 in line [00624],R53 in line [00624],R54 in line [00624],R55 in line [00624])", "S80:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN394663 (R32 in line [00610],R56 in line [00610])", "S80:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN384645 (R32 in line [00386],R58 in line [00386])", "S80:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN384645 (R32 in line [00386],R58 in line [00386])", "S80:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN384645.dummymethode_00388" ]
  }, {
    "_id" : "81",
    "_lesItems" : [ "S81:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN476107", "S81:org.apache.kafka.clients.producer.internals.Sender.run@POLYN315368", "S81:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN317575", "S81:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN317575", "S81:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318771", "S81:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318771", "S81:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN399025 (R32 in line [00708],R60 in line [00708])", "S81:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN399025 (R32 in line [00708],R60 in line [00708])", "S81:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN399025.dummymethode_00710" ]
  }, {
    "_id" : "82",
    "_lesItems" : [ "S82:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN412898", "S82:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN419008", "S82:org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN252835 (R65 in line [00389],R66 in line [00389],R67 in line [00389])", "S82:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN257213" ]
  }, {
    "_id" : "83",
    "_lesItems" : [ "S83:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN412898", "S83:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN419008", "S83:org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN251530 (R65 in line [00357],R68 in line [00357])", "S83:org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN251530.dummymethode_00358" ]
  }, {
    "_id" : "84",
    "_lesItems" : [ "S84:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN412898", "S84:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN419008", "S84:org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN251954 (R65 in line [00367],R69 in line [00367])", "S84:org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN251954.dummymethode_00368" ]
  }, {
    "_id" : "85",
    "_lesItems" : [ "S85:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN241592 (R65 in line [00163])", "S85:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN241826 (R65 in line [00168],R151 in line [00175])", "S85:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN257213" ]
  }, {
    "_id" : "86",
    "_lesItems" : [ "S86:org.apache.kafka.clients.consumer.MockConsumer.rebalance@POLYN238389 (R65 in line [00096],R192 in line [00096])", "S86:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN328379 (R2 in line [00273],R24 in line [00273])", "S86:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN328379.dummymethode_00277" ]
  }, {
    "_id" : "87",
    "_lesItems" : [ "S87:org.apache.kafka.clients.consumer.MockConsumer.position@POLYN251118 (R65 in line [00347])", "S87:org.apache.kafka.clients.consumer.MockConsumer.position@POLYN250418 (R65 in line [00334])", "S87:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN340769 (R2 in line [00537])", "S87:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN332334", "S87:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109", "S87:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109.dummymethode_00114" ]
  }, {
    "_id" : "88",
    "_lesItems" : [ "S88:org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN248598 (R65 in line [00295],R208 in line [00295],R209 in line [00295])", "S88:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN257213" ]
  }, {
    "_id" : "89",
    "_lesItems" : [ "S89:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN246877 (R65 in line [00254],R219 in line [00254],R220 in line [00254])", "S89:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN257213" ]
  }, {
    "_id" : "90",
    "_lesItems" : [ "S90:org.apache.kafka.clients.consumer.MockConsumer.pause@POLYN253110 (R65 in line [00395],R221 in line [00395])", "S90:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN350224 (R2 in line [00737],R163 in line [00737])", "S90:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN332334", "S90:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109", "S90:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109.dummymethode_00114" ]
  }, {
    "_id" : "91",
    "_lesItems" : [ "S91:org.apache.kafka.clients.consumer.MockConsumer.resume@POLYN253432 (R65 in line [00403],R222 in line [00403])", "S91:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN350375 (R2 in line [00741],R164 in line [00741])", "S91:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN332334", "S91:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109", "S91:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109.dummymethode_00114" ]
  }, {
    "_id" : "92",
    "_lesItems" : [ "S92:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN238791 (R65 in line [00108],R238 in line [00108])", "S92:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN240619 (R65 in line [00141],R239 in line [00141],R240 in line [00141])", "S92:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN257213" ]
  }, {
    "_id" : "93",
    "_lesItems" : [ "S93:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN238998 (R65 in line [00113],R241 in line [00113],R242 in line [00113])", "S93:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN257213" ]
  }, {
    "_id" : "94",
    "_lesItems" : [ "S94:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN240433 (R65 in line [00136],R243 in line [00136])", "S94:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN240619 (R65 in line [00141],R239 in line [00141],R240 in line [00141])", "S94:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN257213" ]
  }, {
    "_id" : "95",
    "_lesItems" : [ "S95:org.apache.kafka.clients.consumer.MockConsumer.assign@POLYN240997 (R65 in line [00148],R284 in line [00148])", "S95:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN257213" ]
  }, {
    "_id" : "96",
    "_lesItems" : [ "S96:org.apache.kafka.clients.consumer.MockConsumer.addRecord@POLYN245517 (R65 in line [00227],R285 in line [00227])", "S96:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN257213" ]
  }, {
    "_id" : "97",
    "_lesItems" : [ "S97:org.apache.kafka.clients.consumer.MockConsumer.setException@POLYN246468 (R65 in line [00241],R286 in line [00241])", "S97:org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN246599 (R65 in line [00245],R287 in line [00245])", "S97:org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN246599.dummymethode_00246" ]
  }, {
    "_id" : "98",
    "_lesItems" : [ "S98:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN247699 (R65 in line [00269])", "S98:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN247824 (R65 in line [00274],R288 in line [00274])", "S98:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN257213" ]
  }, {
    "_id" : "99",
    "_lesItems" : [ "S99:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN255976", "S99:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN256138 (R65 in line [00455],R317 in line [00455])", "S99:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN256138.dummymethode_00456" ]
  }, {
    "_id" : "100",
    "_lesItems" : [ "S100:org.apache.kafka.clients.consumer.MockConsumer.setOffsetsException@POLYN246731 (R65 in line [00249],R324 in line [00249])", "S100:org.apache.kafka.clients.consumer.MockConsumer.setOffsetsException@POLYN246731.dummymethode_00250" ]
  }, {
    "_id" : "101",
    "_lesItems" : [ "S101:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN247493 (R65 in line [00264],R325 in line [00264])", "S101:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN247493.dummymethode_00265" ]
  }, {
    "_id" : "102",
    "_lesItems" : [ "S102:org.apache.kafka.clients.consumer.MockConsumer.seekToBeginning@POLYN251296 (R65 in line [00352],R326 in line [00352])", "S102:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN257213" ]
  }, {
    "_id" : "103",
    "_lesItems" : [ "S103:org.apache.kafka.clients.consumer.MockConsumer.seekToEnd@POLYN251720 (R65 in line [00362],R327 in line [00362])", "S103:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN257213" ]
  }, {
    "_id" : "104",
    "_lesItems" : [ "S104:org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN256691 (R65 in line [00473],R328 in line [00473],R151 in line [00474])", "S104:org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN256691.dummymethode_00475" ]
  }, {
    "_id" : "105",
    "_lesItems" : [ "S105:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN557221", "S105:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN557221", "S105:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN382322 (R32 in line [00327],R76 in line [00327])", "S105:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN382322 (R32 in line [00327],R76 in line [00327])", "S105:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN410368" ]
  }, {
    "_id" : "106",
    "_lesItems" : [ "S106:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN838170", "S106:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN838170", "S106:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN171287 (R35 in line [00060],R78 in line [00060],R79 in line [00060],R80 in line [00060],R81 in line [00060])", "S106:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN171287 (R35 in line [00060],R78 in line [00060],R79 in line [00060],R80 in line [00060],R81 in line [00060])", "S106:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN171287.dummymethode_00062" ]
  }, {
    "_id" : "107",
    "_lesItems" : [ "S107:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN301373", "S107:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN301373", "S107:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readConnectorStatus@POLYN296736 (R82 in line [00563])", "S107:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readConnectorStatus@POLYN296736 (R82 in line [00563])", "S107:org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN283938 (R82 in line [00353],R83 in line [00353])", "S107:java.util.Hashtable.remove@POLYN486086" ]
  }, {
    "_id" : "108",
    "_lesItems" : [ "S108:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN301373", "S108:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN301373", "S108:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readTaskStatus@POLYN297872 (R82 in line [00589])", "S108:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readTaskStatus@POLYN297872 (R82 in line [00589])", "S108:org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN285252 (R82 in line [00374],R84 in line [00374])", "S108:org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN285252 (R82 in line [00374],R84 in line [00374])", "S108:java.io.File.delete@POLYN605944", "S108:java.io.File.delete@POLYN605944.dummymethode_00001" ]
  }, {
    "_id" : "109",
    "_lesItems" : [ "S109:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN378803", "S109:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN378803", "S109:org.apache.kafka.clients.Metadata.update@POLYN262643 (R5 in line [00263],R86 in line [00263],R87 in line [00263],R88 in line [00263],R89 in line [00263])", "S109:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN265653", "S109:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN265653", "S109:org.apache.kafka.clients.Metadata.requestUpdate@POLYN257145 (R5 in line [00145])", "S109:org.apache.kafka.clients.Metadata.requestUpdate@POLYN257145.dummymethode_00146" ]
  }, {
    "_id" : "110",
    "_lesItems" : [ "S110:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN378803", "S110:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleSuccessfulResponse@POLYN378803", "S110:org.apache.kafka.clients.Metadata.update@POLYN262643 (R5 in line [00263],R86 in line [00263],R87 in line [00263],R88 in line [00263],R89 in line [00263])", "S110:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN265653", "S110:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN265653", "S110:org.apache.kafka.common.requests.MetadataResponse.brokersById@POLYN231357", "S110:org.apache.kafka.common.requests.MetadataResponse.holder@POLYN230750 (R90 in line [00001])", "S110:org.apache.kafka.common.requests.MetadataResponse.Holder.Holder@POLYN238901", "S110:org.apache.kafka.common.requests.MetadataResponse.Holder.Holder@POLYN238901.dummymethode_00001" ]
  }, {
    "_id" : "111",
    "_lesItems" : [ "S111:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN268846 (R91 in line [00001],R136 in line [00001])", "S111:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN269141", "S111:org.apache.kafka.common.utils.Utils.delete@POLYN454661", "S111:org.apache.kafka.common.utils.Utils.delete@POLYN454661.dummymethode_00852" ]
  }, {
    "_id" : "112",
    "_lesItems" : [ "S112:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN268846 (R91 in line [00001],R136 in line [00001])", "S112:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN269141", "S112:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN269141", "S112:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN265839 (R91 in line [00001],R137 in line [00001])", "S112:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN265839.dummymethode_00001" ]
  }, {
    "_id" : "113",
    "_lesItems" : [ "S113:org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN264632 (R91 in line [00001])", "S113:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN259678 (R179 in line [00001])", "S113:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN259678.dummymethode_00001" ]
  }, {
    "_id" : "114",
    "_lesItems" : [ "S114:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN231234", "S114:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN231532 (R92 in line [00104],R93 in line [00104])", "S114:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN231532 (R92 in line [00104],R93 in line [00104])", "S114:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN234378", "S114:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN234378.dummymethode_00170" ]
  }, {
    "_id" : "115",
    "_lesItems" : [ "S115:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN231234", "S115:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN231532 (R92 in line [00104],R93 in line [00104])", "S115:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN231532 (R92 in line [00104],R93 in line [00104])", "S115:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN234378", "S115:org.apache.kafka.streams.processor.internals.TopologyMetadata.registerAndBuildNewTopology@POLYN259652", "S115:org.apache.kafka.streams.processor.internals.TopologyMetadata.buildAndVerifyTopology@POLYN263511", "S115:org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.rewriteTopology@POLYN497389 (R63 in line [00412])", "S115:org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.rewriteTopology@POLYN497389.dummymethode_00413" ]
  }, {
    "_id" : "116",
    "_lesItems" : [ "S116:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN231234", "S116:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN231532 (R92 in line [00104],R93 in line [00104])", "S116:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN231532 (R92 in line [00104],R93 in line [00104])", "S116:org.apache.kafka.streams.KafkaStreams.start@POLYN561133 (R19 in line [01832])", "S116:org.apache.kafka.streams.KafkaStreams.start@POLYN561133.dummymethode_01832" ]
  }, {
    "_id" : "117",
    "_lesItems" : [ "S117:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN238437 (R94 in line [00242],R95 in line [00242])", "S117:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN238437 (R94 in line [00242],R95 in line [00242])", "S117:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN238437.dummymethode_00245" ]
  }, {
    "_id" : "118",
    "_lesItems" : [ "S118:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN232059 (R94 in line [00105])", "S118:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN232059 (R94 in line [00105])", "S118:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN443742", "S118:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN440462", "S118:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN440462", "S118:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN228468 (R34 in line [00256])", "S118:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN228468 (R34 in line [00256])", "S118:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN228468.dummymethode_00258" ]
  }, {
    "_id" : "119",
    "_lesItems" : [ "S119:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN232059 (R94 in line [00105])", "S119:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN232059 (R94 in line [00105])", "S119:org.apache.kafka.connect.runtime.AbstractHerder.stopServices@POLYN302346", "S119:org.apache.kafka.connect.runtime.Worker.stop@POLYN430447", "S119:org.apache.kafka.connect.runtime.Worker.stop@POLYN430447", "S119:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN504650 (R39 in line [01751])" ]
  }, {
    "_id" : "120",
    "_lesItems" : [ "S120:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN242896 (R94 in line [00309],R114 in line [00309],R115 in line [00309])", "S120:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN171698", "S120:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN171698.dummymethode_00055" ]
  }, {
    "_id" : "121",
    "_lesItems" : [ "S121:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN240274 (R94 in line [00274],R123 in line [00274],R124 in line [00274])", "S121:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN240274.dummymethode_00276" ]
  }, {
    "_id" : "122",
    "_lesItems" : [ "S122:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN234576 (R94 in line [00161],R165 in line [00161],R166 in line [00161])", "S122:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN234576.dummymethode_00165" ]
  }, {
    "_id" : "123",
    "_lesItems" : [ "S123:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN236557 (R94 in line [00201],R167 in line [00201],R168 in line [00201],R169 in line [00201],R170 in line [00201],R171 in line [00201])", "S123:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN236557.dummymethode_00208" ]
  }, {
    "_id" : "124",
    "_lesItems" : [ "S124:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN241691 (R94 in line [00291],R172 in line [00291],R173 in line [00291])", "S124:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN241691.dummymethode_00293" ]
  }, {
    "_id" : "125",
    "_lesItems" : [ "S125:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN232976 (R94 in line [00133],R342 in line [00133])", "S125:org.apache.kafka.connect.util.Callback.onCompletion" ]
  }, {
    "_id" : "126",
    "_lesItems" : [ "S126:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN233207 (R94 in line [00138],R343 in line [00138],R344 in line [00138])", "S126:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN233207.dummymethode_00141" ]
  }, {
    "_id" : "127",
    "_lesItems" : [ "S127:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN235644 (R94 in line [00181],R345 in line [00181],R346 in line [00181],R347 in line [00181],R348 in line [00181])", "S127:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN235644.dummymethode_00186" ]
  }, {
    "_id" : "128",
    "_lesItems" : [ "S128:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN238811 (R94 in line [00251],R349 in line [00251],R350 in line [00251])", "S128:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN238811.dummymethode_00253" ]
  }, {
    "_id" : "129",
    "_lesItems" : [ "S129:org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.close@POLYN212733 (R125 in line [00335])", "S129:org.apache.kafka.connect.runtime.errors.ProcessingContext.close@POLYN193241", "S129:java.lang.Throwable.addSuppressed@POLYN398421 (R127 in line [01070],R128 in line [01070])", "S129:java.lang.Throwable.addSuppressed@POLYN398421.dummymethode_01074" ]
  }, {
    "_id" : "130",
    "_lesItems" : [ "S130:java.lang.Throwable.writeObject@POLYN396366 (R127 in line [01002],R185 in line [01002])", "S130:java.lang.Throwable.getOurStackTrace@POLYN390385 (R127 in line [00834])", "S130:java.lang.Throwable.getOurStackTrace@POLYN390385.dummymethode_00839" ]
  }, {
    "_id" : "131",
    "_lesItems" : [ "S131:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN242896 (R94 in line [00309],R114 in line [00309],R115 in line [00309])", "S131:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN242896 (R94 in line [00309],R114 in line [00309],R115 in line [00309])", "S131:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN171698", "S131:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN171698.dummymethode_00055" ]
  }, {
    "_id" : "132",
    "_lesItems" : [ "S132:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN242896 (R94 in line [00309],R114 in line [00309],R115 in line [00309])", "S132:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN242896 (R94 in line [00309],R114 in line [00309],R115 in line [00309])", "S132:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN443742", "S132:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN440462", "S132:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN440462", "S132:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN228468 (R34 in line [00256])", "S132:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN228468 (R34 in line [00256])", "S132:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN228468.dummymethode_00258" ]
  }, {
    "_id" : "133",
    "_lesItems" : [ "S133:org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN584998 (R33 in line [01387],R119 in line [01387])", "S133:org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN584998 (R33 in line [01387],R119 in line [01387])", "S133:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN171698", "S133:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN171698.dummymethode_00055" ]
  }, {
    "_id" : "134",
    "_lesItems" : [ "S134:org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN584998 (R33 in line [01387],R119 in line [01387])", "S134:org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN584998 (R33 in line [01387],R119 in line [01387])", "S134:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN443742", "S134:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN440462", "S134:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN440462", "S134:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN228468 (R34 in line [00256])", "S134:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN228468 (R34 in line [00256])", "S134:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN228468.dummymethode_00258" ]
  }, {
    "_id" : "135",
    "_lesItems" : [ "S135:org.apache.kafka.common.network.Selector.SelectorMetrics.close@POLYN473020", "S135:org.apache.kafka.common.network.Selector.SelectorMetrics.close@POLYN473020", "S135:org.apache.kafka.common.metrics.internals.IntGaugeSuite.close@POLYN197918 (R129 in line [00256])", "S135:org.apache.kafka.common.metrics.internals.IntGaugeSuite.close@POLYN197918 (R129 in line [00256])", "S135:org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN195640", "S135:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN311407 (R15 in line [00558])", "S135:java.util.HashMap.remove@POLYN659970", "S135:java.util.HashMap.remove@POLYN659970.dummymethode_01064" ]
  }, {
    "_id" : "136",
    "_lesItems" : [ "S136:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN196922 (R129 in line [00235],R227 in line [00235])", "S136:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN196922.dummymethode_00237" ]
  }, {
    "_id" : "137",
    "_lesItems" : [ "S137:org.apache.kafka.snapshot.RecordsSnapshotWriter.freeze@POLYN178707", "S137:org.apache.kafka.snapshot.RecordsSnapshotWriter.appendBatches@POLYN179138", "S137:org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN178007", "S137:org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN226183", "S137:org.apache.kafka.raft.internals.BatchAccumulator.maybeAllocateBatch@POLYN228266", "S137:org.apache.kafka.raft.internals.BatchBuilder.bytesNeeded@POLYN201101", "S137:org.apache.kafka.common.protocol.DataOutputStreamWritable.flush@POLYN167673", "S137:java.io.BufferedOutputStream.flush@POLYN171443 (R132 in line [00139])", "S137:java.io.BufferedOutputStream.flushBuffer@POLYN169112", "S137:java.io.BufferedOutputStream.write@POLYN170408 (R132 in line [00116],R133 in line [00116],R134 in line [00116],R135 in line [00116])", "S137:java.io.BufferedOutputStream.write@POLYN170408 (R132 in line [00116],R133 in line [00116],R134 in line [00116],R135 in line [00116])", "S137:java.io.BufferedOutputStream.write@POLYN170408.dummymethode_00123" ]
  }, {
    "_id" : "138",
    "_lesItems" : [ "S138:org.apache.kafka.streams.state.internals.RocksDBStore.putAll@POLYN267770", "S138:java.io.BufferedOutputStream.write@POLYN169547 (R132 in line [00093],R237 in line [00093])", "S138:java.io.BufferedOutputStream.flushBuffer@POLYN169112", "S138:java.io.BufferedOutputStream.write@POLYN170408 (R132 in line [00116],R133 in line [00116],R134 in line [00116],R135 in line [00116])", "S138:java.io.BufferedOutputStream.write@POLYN170408 (R132 in line [00116],R133 in line [00116],R134 in line [00116],R135 in line [00116])", "S138:java.io.BufferedOutputStream.write@POLYN170408.dummymethode_00123" ]
  }, {
    "_id" : "139",
    "_lesItems" : [ "S139:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN268846 (R91 in line [00001],R136 in line [00001])", "S139:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN269141", "S139:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN269141", "S139:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN265839 (R91 in line [00001],R137 in line [00001])", "S139:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN265839 (R91 in line [00001],R137 in line [00001])", "S139:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN265839.dummymethode_00001" ]
  }, {
    "_id" : "140",
    "_lesItems" : [ "S140:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN204093", "S140:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN203819 (R138 in line [00157],R139 in line [00157],R140 in line [00157])", "S140:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN153478", "S140:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN153478.dummymethode_00038" ]
  }, {
    "_id" : "141",
    "_lesItems" : [ "S141:org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN208085 (R138 in line [00256],R162 in line [00256])", "S141:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN203819 (R138 in line [00157],R139 in line [00157],R140 in line [00157])", "S141:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN153478", "S141:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN153478.dummymethode_00038" ]
  }, {
    "_id" : "142",
    "_lesItems" : [ "S142:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN209532 (R142 in line [00254],R212 in line [00254])", "S142:org.apache.kafka.streams.state.internals.NamedCache.close@POLYN212434 (R138 in line [00345])", "S142:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllCacheLevelSensors@POLYN307385 (R213 in line [00462])", "S142:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheSensorPrefix@POLYN308040", "S142:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheSensorPrefix@POLYN308040.dummymethode_00471" ]
  }, {
    "_id" : "143",
    "_lesItems" : [ "S143:org.apache.kafka.streams.state.internals.NamedCache.setListener@POLYN201222 (R138 in line [00104],R375 in line [00104])", "S143:org.apache.kafka.streams.state.internals.NamedCache.setListener@POLYN201222.dummymethode_00105" ]
  }, {
    "_id" : "144",
    "_lesItems" : [ "S144:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN204093", "S144:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN203819 (R138 in line [00157],R139 in line [00157],R140 in line [00157])", "S144:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN203819 (R138 in line [00157],R139 in line [00157],R140 in line [00157])", "S144:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN153478", "S144:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN153478.dummymethode_00038" ]
  }, {
    "_id" : "145",
    "_lesItems" : [ "S145:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN200565 (R142 in line [00075],R143 in line [00075])", "S145:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN200565.dummymethode_00077" ]
  }, {
    "_id" : "146",
    "_lesItems" : [ "S146:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN209532 (R142 in line [00254],R212 in line [00254])", "S146:java.util.Hashtable.remove@POLYN486086" ]
  }, {
    "_id" : "147",
    "_lesItems" : [ "S147:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN200565 (R142 in line [00075],R143 in line [00075])", "S147:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN200565 (R142 in line [00075],R143 in line [00075])", "S147:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN200565.dummymethode_00077" ]
  }, {
    "_id" : "148",
    "_lesItems" : [ "S148:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN200565 (R142 in line [00075],R143 in line [00075])", "S148:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN200565 (R142 in line [00075],R143 in line [00075])", "S148:org.apache.kafka.streams.state.internals.NamedCache.evict@POLYN207140 (R138 in line [00235])", "S148:org.apache.kafka.streams.state.internals.NamedCache.evict@POLYN207140.dummymethode_00237" ]
  }, {
    "_id" : "149",
    "_lesItems" : [ "S149:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN328775", "S149:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN328775", "S149:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN336207", "S149:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN394109 (R32 in line [00599],R148 in line [00599],R149 in line [00599])", "S149:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN392076 (R32 in line [00557],R59 in line [00557])", "S149:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN160174", "S149:java.util.Map.get@POLYN437683" ]
  }, {
    "_id" : "150",
    "_lesItems" : [ "S150:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN241592 (R65 in line [00163])", "S150:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN241826 (R65 in line [00168],R151 in line [00175])", "S150:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN241826 (R65 in line [00168],R151 in line [00175])", "S150:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN257213" ]
  }, {
    "_id" : "151",
    "_lesItems" : [ "S151:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN241592 (R65 in line [00163])", "S151:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN241826 (R65 in line [00168],R151 in line [00175])", "S151:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN241826 (R65 in line [00168],R151 in line [00175])", "S151:org.apache.kafka.clients.consumer.MockConsumer.updateFetchPosition@POLYN257371", "S151:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN345986", "S151:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN345375 (R2 in line [00636],R12 in line [00636],R13 in line [00636])", "S151:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN332334", "S151:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109", "S151:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109.dummymethode_00114" ]
  }, {
    "_id" : "152",
    "_lesItems" : [ "S152:org.apache.kafka.common.network.Selector.connect@POLYN412275", "S152:org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN414003", "S152:java.net.Socket.setSendBufferSize@POLYN503351 (R159 in line [00001],R160 in line [00001])" ]
  }, {
    "_id" : "153",
    "_lesItems" : [ "S153:org.apache.kafka.common.network.Selector.connect@POLYN412275", "S153:org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN414003", "S153:java.net.Socket.setReceiveBufferSize@POLYN506058 (R159 in line [00001],R161 in line [00001])" ]
  }, {
    "_id" : "154",
    "_lesItems" : [ "S154:java.net.Socket.Socket@POLYN478179", "S154:java.net.Socket.close@POLYN513788 (R159 in line [00001],R181 in line [00001])", "S154:java.net.Socket.close@POLYN513788 (R159 in line [00001],R181 in line [00001])", "S154:java.net.Socket.close@POLYN513788.dummymethode_00001" ]
  }, {
    "_id" : "155",
    "_lesItems" : [ "S155:java.net.Socket.setSocketImplFactory@POLYN518986 (R159 in line [00001],R365 in line [00001])", "S155:java.net.Socket.setSocketImplFactory@POLYN518986.dummymethode_00001" ]
  }, {
    "_id" : "156",
    "_lesItems" : [ "S156:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN175508 (R174 in line [00139],R175 in line [00139])", "S156:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN175508.dummymethode_00141" ]
  }, {
    "_id" : "157",
    "_lesItems" : [ "S157:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN173030 (R174 in line [00076],R193 in line [00076])", "S157:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN173030.dummymethode_00078" ]
  }, {
    "_id" : "158",
    "_lesItems" : [ "S158:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN176801 (R174 in line [00169],R358 in line [00169])", "S158:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN176801 (R174 in line [00169],R358 in line [00169])", "S158:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN176801.dummymethode_00173" ]
  }, {
    "_id" : "159",
    "_lesItems" : [ "S159:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN175508 (R174 in line [00139],R175 in line [00139])", "S159:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN175508 (R174 in line [00139],R175 in line [00139])", "S159:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN175508.dummymethode_00141" ]
  }, {
    "_id" : "160",
    "_lesItems" : [ "S160:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN173030 (R174 in line [00076],R193 in line [00076])", "S160:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN173030 (R174 in line [00076],R193 in line [00076])", "S160:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN173030.dummymethode_00078" ]
  }, {
    "_id" : "161",
    "_lesItems" : [ "S161:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN173618 (R198 in line [00093],R199 in line [00093])", "S161:org.apache.kafka.common.utils.Time.milliseconds@POLYN163313" ]
  }, {
    "_id" : "162",
    "_lesItems" : [ "S162:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN173618 (R198 in line [00093],R199 in line [00093])", "S162:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN173618 (R198 in line [00093],R199 in line [00093])", "S162:org.apache.kafka.common.utils.Time.milliseconds@POLYN163313" ]
  }, {
    "_id" : "163",
    "_lesItems" : [ "S163:org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetIfNeeded@POLYN512719", "S163:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN333446 (R2 in line [00390],R204 in line [00390],R205 in line [00390],R206 in line [00390])", "S163:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN333446 (R2 in line [00390],R204 in line [00390],R205 in line [00390],R206 in line [00390])", "S163:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN332701", "S163:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109", "S163:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN182109.dummymethode_00114" ]
  }, {
    "_id" : "164",
    "_lesItems" : [ "S164:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN430816 (R22 in line [01023],R224 in line [01023],R225 in line [01023],R226 in line [01023])", "S164:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN430518 (R22 in line [01017],R200 in line [01017],R201 in line [01017])", "S164:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN429819 (R22 in line [01004],R202 in line [01004],R203 in line [01004])", "S164:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN429819.dummymethode_01005" ]
  }, {
    "_id" : "165",
    "_lesItems" : [ "S165:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN196922 (R129 in line [00235],R227 in line [00235])", "S165:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN196922 (R129 in line [00235],R227 in line [00235])", "S165:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN196922.dummymethode_00237" ]
  }, {
    "_id" : "166",
    "_lesItems" : [ "S166:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN170358 (R254 in line [00071],R255 in line [00071])", "S166:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN169979 (R254 in line [00063],R256 in line [00063])", "S166:java.util.HashMap.remove@POLYN659970", "S166:java.util.HashMap.remove@POLYN659970.dummymethode_01064" ]
  }, {
    "_id" : "167",
    "_lesItems" : [ "S167:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN171046 (R254 in line [00084],R257 in line [00084])", "S167:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN170503 (R254 in line [00076],R258 in line [00076])", "S167:org.apache.kafka.connect.util.Table.remove@POLYN158763", "S167:org.apache.kafka.connect.util.Table.remove@POLYN158763.dummymethode_00046" ]
  }, {
    "_id" : "168",
    "_lesItems" : [ "S168:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN247699 (R65 in line [00269])", "S168:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN247824 (R65 in line [00274],R288 in line [00274])", "S168:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN247824 (R65 in line [00274],R288 in line [00274])", "S168:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN257213" ]
  } ],
  "_lesDeadlocksTypos" : [ ]
}