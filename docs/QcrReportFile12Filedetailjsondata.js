{
  "_lesSequences" : [ {
    "_id" : "1",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.INVALIDATED",
      "_method" : "---java.io.BufferedReader.fill@POLYN237577.dummymethode_00138 in line [00138]",
      "_target" : "java.io.BufferedReader.markedChar",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN245718.dummymethode_00342 in line [00342]",
      "_target" : "java.io.BufferedReader.readLine@POLYN245718.i",
      "_risk" : "//QC-JAVCWE099[00342] In java.io.BufferedReader.readLine@POLYN245718[00342] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN245718.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN245718.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN245718[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedReader.readLine@POLYN245718.i",
      "_method" : "---java.io.BufferedReader.readLine@POLYN245718.dummymethode_00351 in line [00351]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : "//QC-JAVCWE099[00351] In java.io.BufferedReader.readLine@POLYN245718[00351] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.BufferedReader.readLine@POLYN245718.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN245718.dummymethode_00356 in line [00356]",
      "_target" : "java.io.BufferedReader.readLine@POLYN245718.str",
      "_risk" : "//QC-JAVCWE099[00356] In java.io.BufferedReader.readLine@POLYN245718[00356] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.BufferedReader.readLine@POLYN245718.str",
      "_method" : "---java.io.BufferedReader.readLine@POLYN245718.dummymethode_00365 in line [00365]",
      "_target" : "java.io.BufferedReader.readLine@POLYN245718.return",
      "_risk" : "//QC-JAVCWE099[00365] In java.io.BufferedReader.readLine@POLYN245718[00365] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedReader.readLine@POLYN245718.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN245718 in line [00389]",
      "_target" : "java.io.BufferedReader.readLine@POLYN248919.return",
      "_risk" : "//QC-JAVCWE099[00389] In java.io.BufferedReader.readLine@POLYN248919[00389] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "8",
      "_source" : "java.io.BufferedReader.markedChar",
      "_method" : "---java.io.BufferedReader.reset@POLYN252902.dummymethode_00515 in line [00515]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.util.HashMap.put@POLYN628206.return",
      "_method" : "---java.util.HashMap.put@POLYN628206 in line [00226]",
      "_target" : "java.io.ObjectInputStream.cibledummy_00226",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.lang.Integer.parseInt@POLYN434539.s",
      "_method" : "---java.lang.Integer.parseInt@POLYN430991 in line [00527]",
      "_target" : "java.lang.Integer.parseInt@POLYN434539.return",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "java.util.HashMap.put@POLYN628206.key",
      "_method" : "---java.util.HashMap.putVal@POLYN628729 in line [00609]",
      "_target" : "java.util.HashMap.put@POLYN628206.return",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.CompletedFetch@POLYN551865.dummymethode_01521 in line [01521]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "13",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN537281.dummymethode_01264 in line [01264]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN537281.tp",
      "_risk" : ""
    }, {
      "_id" : "14",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN537281.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN348145 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN348145.tp",
      "_risk" : ""
    }, {
      "_id" : "15",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN348145.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN177123 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN177123.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "16",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN177123.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN628206 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN628206.key",
      "_risk" : ""
    }, {
      "_id" : "17",
      "_source" : "java.lang.Integer.parseInt@POLYN434539.return",
      "_method" : "---java.lang.Integer.parseInt@POLYN434539 in line [00081]",
      "_target" : "partition",
      "_risk" : ""
    }, {
      "_id" : "18",
      "_source" : "java.io.BufferedReader.readLine@POLYN248919.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN248919 in line [00197]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN187255.line",
      "_risk" : "//QC-JAVCWE099[00197] In org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN187255[00197] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "19",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN187255.line",
      "_method" : "---java.lang.Integer.parseInt@POLYN434539 in line [00201]",
      "_target" : "java.lang.Integer.parseInt@POLYN434539.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "2",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN245718.dummymethode_00342 in line [00342]",
      "_target" : "java.io.BufferedReader.readLine@POLYN245718.i",
      "_risk" : "//QC-JAVCWE099[00342] In java.io.BufferedReader.readLine@POLYN245718[00342] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN245718.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN245718.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN245718[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.readLine@POLYN245718.i",
      "_method" : "---java.io.BufferedReader.readLine@POLYN245718.dummymethode_00351 in line [00351]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : "//QC-JAVCWE099[00351] In java.io.BufferedReader.readLine@POLYN245718[00351] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedReader.readLine@POLYN245718.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN245718.dummymethode_00356 in line [00356]",
      "_target" : "java.io.BufferedReader.readLine@POLYN245718.str",
      "_risk" : "//QC-JAVCWE099[00356] In java.io.BufferedReader.readLine@POLYN245718[00356] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.BufferedReader.readLine@POLYN245718.str",
      "_method" : "---java.io.BufferedReader.readLine@POLYN245718.dummymethode_00365 in line [00365]",
      "_target" : "java.io.BufferedReader.readLine@POLYN245718.return",
      "_risk" : "//QC-JAVCWE099[00365] In java.io.BufferedReader.readLine@POLYN245718[00365] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.BufferedReader.readLine@POLYN245718.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN245718 in line [00389]",
      "_target" : "java.io.BufferedReader.readLine@POLYN248919.return",
      "_risk" : "//QC-JAVCWE099[00389] In java.io.BufferedReader.readLine@POLYN248919[00389] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedReader.skip@POLYN249247.n",
      "_method" : "---java.io.BufferedReader.skip@POLYN249247.dummymethode_00408 in line [00408]",
      "_target" : "java.io.BufferedReader.skip@POLYN249247.r",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.io.BufferedReader.skip@POLYN249247.r",
      "_method" : "---java.io.BufferedReader.skip@POLYN249247.dummymethode_00422 in line [00422]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.util.HashMap.put@POLYN628206.return",
      "_method" : "---java.util.HashMap.put@POLYN628206 in line [00226]",
      "_target" : "java.io.ObjectInputStream.cibledummy_00226",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.lang.Integer.parseInt@POLYN434539.s",
      "_method" : "---java.lang.Integer.parseInt@POLYN430991 in line [00527]",
      "_target" : "java.lang.Integer.parseInt@POLYN434539.return",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "java.util.HashMap.put@POLYN628206.key",
      "_method" : "---java.util.HashMap.putVal@POLYN628729 in line [00609]",
      "_target" : "java.util.HashMap.put@POLYN628206.return",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.CompletedFetch@POLYN551865.dummymethode_01521 in line [01521]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "13",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN537281.dummymethode_01264 in line [01264]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN537281.tp",
      "_risk" : ""
    }, {
      "_id" : "14",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN537281.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN348145 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN348145.tp",
      "_risk" : ""
    }, {
      "_id" : "15",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN348145.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN177123 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN177123.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "16",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN177123.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN628206 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN628206.key",
      "_risk" : ""
    }, {
      "_id" : "17",
      "_source" : "java.lang.Integer.parseInt@POLYN434539.return",
      "_method" : "---java.lang.Integer.parseInt@POLYN434539 in line [00081]",
      "_target" : "partition",
      "_risk" : ""
    }, {
      "_id" : "18",
      "_source" : "java.io.BufferedReader.readLine@POLYN248919.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN248919 in line [00197]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN187255.line",
      "_risk" : "//QC-JAVCWE099[00197] In org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN187255[00197] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "19",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN187255.line",
      "_method" : "---java.lang.Integer.parseInt@POLYN434539 in line [00201]",
      "_target" : "java.lang.Integer.parseInt@POLYN434539.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "3",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN245718.dummymethode_00342 in line [00342]",
      "_target" : "java.io.BufferedReader.readLine@POLYN245718.i",
      "_risk" : "//QC-JAVCWE099[00342] In java.io.BufferedReader.readLine@POLYN245718[00342] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN245718.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN245718.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN245718[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.readLine@POLYN245718.i",
      "_method" : "---java.io.BufferedReader.readLine@POLYN245718.dummymethode_00351 in line [00351]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : "//QC-JAVCWE099[00351] In java.io.BufferedReader.readLine@POLYN245718[00351] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedReader.readLine@POLYN245718.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN245718.dummymethode_00356 in line [00356]",
      "_target" : "java.io.BufferedReader.readLine@POLYN245718.str",
      "_risk" : "//QC-JAVCWE099[00356] In java.io.BufferedReader.readLine@POLYN245718[00356] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.BufferedReader.readLine@POLYN245718.str",
      "_method" : "---java.io.BufferedReader.readLine@POLYN245718.dummymethode_00365 in line [00365]",
      "_target" : "java.io.BufferedReader.readLine@POLYN245718.return",
      "_risk" : "//QC-JAVCWE099[00365] In java.io.BufferedReader.readLine@POLYN245718[00365] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.BufferedReader.readLine@POLYN245718.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN245718 in line [00389]",
      "_target" : "java.io.BufferedReader.readLine@POLYN248919.return",
      "_risk" : "//QC-JAVCWE099[00389] In java.io.BufferedReader.readLine@POLYN248919[00389] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedReader.skip@POLYN249247.r",
      "_method" : "---java.io.BufferedReader.skip@POLYN249247.dummymethode_00422 in line [00422]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "0",
      "_method" : "---java.io.BufferedReader.skip@POLYN249247.dummymethode_00423 in line [00423]",
      "_target" : "java.io.BufferedReader.skip@POLYN249247.r",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.lang.Integer.parseInt@POLYN434539.s",
      "_method" : "---java.lang.Integer.parseInt@POLYN430991 in line [00527]",
      "_target" : "java.lang.Integer.parseInt@POLYN434539.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "org.apache.kafka.raft.RaftConfig.parseVoterId@POLYN190283.return",
      "_method" : "---org.apache.kafka.raft.RaftConfig.parseVoterId@POLYN190283 in line [00218]",
      "_target" : "org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN190635.voterId",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN190635.voterId",
      "_method" : "---org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN190635.dummymethode_00235 in line [00235]",
      "_target" : "org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN190635.cibledummy_00235",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "java.lang.Integer.parseInt@POLYN434539.return",
      "_method" : "---java.lang.Integer.parseInt@POLYN434539 in line [00203]",
      "_target" : "org.apache.kafka.raft.RaftConfig.parseVoterId@POLYN190283.return",
      "_risk" : ""
    }, {
      "_id" : "13",
      "_source" : "java.io.BufferedReader.readLine@POLYN248919.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN248919 in line [00197]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN187255.line",
      "_risk" : "//QC-JAVCWE099[00197] In org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN187255[00197] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "14",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN187255.line",
      "_method" : "---java.lang.Integer.parseInt@POLYN434539 in line [00201]",
      "_target" : "java.lang.Integer.parseInt@POLYN434539.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "4",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "1",
      "_method" : "---java.io.InputStream.read@POLYN253038.dummymethode_00177 in line [00177]",
      "_target" : "java.io.InputStream.read@POLYN253038.i",
      "_risk" : "//QC-JAVCWE099[00177] In java.io.InputStream.read@POLYN253038[00177] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.InputStream.read@POLYN253038.i",
      "_method" : "---java.io.InputStream.read@POLYN253038.dummymethode_00188 in line [00188]",
      "_target" : "java.io.InputStream.read@POLYN253038.return",
      "_risk" : "//QC-JAVCWE099[00188] In java.io.InputStream.read@POLYN253038[00188] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN879832.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN879832 in line [02938]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN892778.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.read@POLYN811288.return",
      "_method" : "---java.io.ObjectInputStream.read@POLYN811288 in line [03091]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN900447.v",
      "_risk" : "//QC-JAVCWE099[03091] In java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN900447[03091] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN900447.v",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN900447.dummymethode_03095 in line [03095]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN900447.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.InputStream.read@POLYN253038.return",
      "_method" : "---java.io.InputStream.read@POLYN253038 in line [02598]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.peekb",
      "_risk" : "//QC-JAVCWE099[02598] In java.io.ObjectInputStream.PeekInputStream.peek@POLYN879425[02598] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.peekb",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN879832.dummymethode_02605 in line [02605]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN879832.v",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN879832.v",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN879832.dummymethode_02607 in line [02607]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN879832.return",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN892778.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN892778 in line [00893]",
      "_target" : "java.io.ObjectInputStream.read@POLYN811288.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN900447.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN900447 in line [00979]",
      "_target" : "java.io.ObjectInputStream.readUnsignedByte@POLYN814053.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "5",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN372312.s",
      "_method" : "---java.io.PrintStream.write@POLYN367121 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN367121.s",
      "_risk" : "//QC-JAVCWE099[00669] In java.io.PrintStream.print@POLYN372312[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.valueOf@POLYN919482.return",
      "_method" : "---java.lang.String.valueOf@POLYN919482 in line [00821]",
      "_target" : "java.io.PrintStream.println@POLYN377282.s",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.println@POLYN377282.s",
      "_method" : "---java.io.PrintStream.print@POLYN372312 in line [00823]",
      "_target" : "java.io.PrintStream.print@POLYN372312.s",
      "_risk" : "//QC-JAVCWE099[00823] In java.io.PrintStream.println@POLYN377282[00823] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.PrintStream.write@POLYN367121.s",
      "_method" : "---java.io.PrintWriter.write@POLYN351048 in line [00525]",
      "_target" : "java.io.PrintWriter.write@POLYN351048.s",
      "_risk" : "//QC-JAVCWE099[00525] In java.io.PrintStream.write@POLYN367121[00525] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.PrintWriter.write@POLYN351048.s",
      "_method" : "---java.io.PrintWriter.write@POLYN351048 in line [00473]",
      "_target" : "java.io.PrintWriter.write@POLYN351048.cibledummy_00473",
      "_risk" : "//QC-JAVCWE099[00473] In java.io.PrintWriter.write@POLYN351048[00473] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.lang.Double.toString@POLYN382102.d",
      "_method" : "---java.lang.Double.toString@POLYN382102.dummymethode_00196 in line [00196]",
      "_target" : "java.lang.Double.toString@POLYN382102.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.String.valueOf@POLYN919482.d",
      "_method" : "---java.lang.Double.toString@POLYN382102 in line [00001]",
      "_target" : "java.lang.Double.toString@POLYN382102.d",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.lang.Double.toString@POLYN382102.return",
      "_method" : "---java.lang.Double.toString@POLYN382102 in line [00001]",
      "_target" : "java.lang.String.valueOf@POLYN919482.return",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.util.Map.getValue@POLYN441684.return",
      "_method" : "---java.util.Map.getValue@POLYN441684 in line [00266]",
      "_target" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN207584.valueRaw",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN207584.valueRaw",
      "_method" : "---java.lang.String.valueOf@POLYN919482 in line [00272]",
      "_target" : "java.lang.String.valueOf@POLYN919482.d",
      "_risk" : ""
    } ]
  }, {
    "_id" : "6",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN609721.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN609721.dummymethode_01533 in line [01533]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN609721.cibledummy_01533",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN573180.obj",
      "_method" : "---java.io.ObjectOutputStream.replaceObject@POLYN573180.dummymethode_00588 in line [00588]",
      "_target" : "java.io.ObjectOutputStream.replaceObject@POLYN573180.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN573180.return",
      "_method" : "---java.io.ObjectOutputStream.replaceObject@POLYN573180 in line [01144]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN589415.rep",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN589415.rep",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN589415.dummymethode_01149 in line [01149]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN589415.obj",
      "_risk" : "//QC-JAVCWZ099[01149] In java.io.ObjectOutputStream.writeObject0@POLYN589415[01149] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN589415.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN605234 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN605234.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN589415[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN605234.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN607870 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN607870.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN605234[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN607870.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN609721 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN609721.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "7",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteObject@POLYN567773.dummymethode_00434 in line [00434]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteObject@POLYN567773.ctx",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN599470.objs[i]",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN589415 in line [01378]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN589415.obj",
      "_risk" : "//QC-JAVCWZ099[01378] In java.io.ObjectOutputStream.writeArray@POLYN599470[01378] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN606674.dummymethode_01452 in line [01452]",
      "_target" : "java.io.ObjectOutputStream.writeExternalData@POLYN606674.oldContext",
      "_risk" : "//QC-JAVCWZ099[01452] In java.io.ObjectOutputStream.writeExternalData@POLYN606674[01452] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN606674.oldContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN606674.dummymethode_01464 in line [01464]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01464] In java.io.ObjectOutputStream.writeExternalData@POLYN606674[01464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN589415.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN605234 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN605234.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN589415[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN605234.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN607870 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN607870.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN605234[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN607870.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN607870.dummymethode_01494 in line [01494]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01494] In java.io.ObjectOutputStream.writeSerialData@POLYN607870[01494] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "8",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteObject@POLYN567773.dummymethode_00434 in line [00434]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteObject@POLYN567773.ctx",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN606674.dummymethode_01452 in line [01452]",
      "_target" : "java.io.ObjectOutputStream.writeExternalData@POLYN606674.oldContext",
      "_risk" : "//QC-JAVCWZ099[01452] In java.io.ObjectOutputStream.writeExternalData@POLYN606674[01452] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN606674.oldContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN606674.dummymethode_01464 in line [01464]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01464] In java.io.ObjectOutputStream.writeExternalData@POLYN606674[01464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN589415.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN605234 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN605234.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN589415[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN605234.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN607870 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN607870.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN605234[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN607870.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN607870.dummymethode_01494 in line [01494]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01494] In java.io.ObjectOutputStream.writeSerialData@POLYN607870[01494] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN567117.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN589415 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN589415.obj",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN567117[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "9",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeLong@POLYN579761.val",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN579761 in line [00808]",
      "_target" : "java.io.ObjectOutputStream.writeLong@POLYN579761.cibledummy_00808",
      "_risk" : "//QC-JAVCWE099[00808] In java.io.ObjectOutputStream.writeLong@POLYN579761[00808] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN249831.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN251377 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN251377.timestamp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN251377.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN252723 in line [00428]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252723.timestamp",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252723.timestamp",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN579761 in line [00468]",
      "_target" : "java.io.ObjectOutputStream.writeLong@POLYN579761.val",
      "_risk" : "//QC-JAVCWE099[00468] In org.apache.kafka.common.record.LegacyRecord.write@POLYN252723[00468] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN248744.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN249831 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN249831.timestamp",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "timestampType==TimestampType.LOG_APPEND_TIME?logAppendTime_maxTimestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN301831.dummymethode_00424 in line [00424]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN301831.timestamp",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN301831.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN248744 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN248744.timestamp",
      "_risk" : ""
    } ]
  }, {
    "_id" : "10",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN239226.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN239226.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN239226.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN239226[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.getBytes@POLYN834948.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN834948.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN834948.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN419774.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN419774 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN236020.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN236020.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN239226 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN239226.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN236020[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslServer.process@POLYN192731.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN834948 in line [00165]",
      "_target" : "java.lang.String.getBytes@POLYN834948.charsetName",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.lang.String.getBytes@POLYN834948.return",
      "_method" : "---java.lang.String.getBytes@POLYN834948 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN419774.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "11",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN239226.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN239226.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN239226.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN239226[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.getBytes@POLYN834948.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN834948.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN834948.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN419774.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN419774 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN236020.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN236020.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN239226 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN239226.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN236020[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.security.scram.internals.ScramFormatter.toBytes@POLYN190526.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN834948 in line [00170]",
      "_target" : "java.lang.String.getBytes@POLYN834948.charsetName",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.lang.String.getBytes@POLYN834948.return",
      "_method" : "---java.lang.String.getBytes@POLYN834948 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN419774.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "12",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN239226.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN239226.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN239226.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN239226[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.getBytes@POLYN834948.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN834948.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN834948.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN419774.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN419774 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN236020.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN236020.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN239226 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN239226.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN236020[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN419774.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN834948 in line [00172]",
      "_target" : "java.lang.String.getBytes@POLYN834948.charsetName",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.lang.String.getBytes@POLYN834948.return",
      "_method" : "---java.lang.String.getBytes@POLYN834948 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN419774.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "13",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN239226.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN239226.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN239226.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN239226[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.getBytes@POLYN834948.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN834948.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN834948.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN419774.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN419774 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN236020.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN236020.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN239226 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN239226.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN236020[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.lang.String.getBytes@POLYN834948.return",
      "_method" : "---java.lang.String.getBytes@POLYN834948 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN419774.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.toBytes@POLYN197037.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN834948 in line [00206]",
      "_target" : "java.lang.String.getBytes@POLYN834948.charsetName",
      "_risk" : ""
    } ]
  }, {
    "_id" : "14",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN599470.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN594946 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN594946.desc",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN599470[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN594946.desc",
      "_method" : "---java.io.ObjectOutputStream.writeNonProxyDesc@POLYN597443 in line [01231]",
      "_target" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN597443.desc",
      "_risk" : "//QC-JAVCWZ099[01231] In java.io.ObjectOutputStream.writeClassDesc@POLYN594946[01231] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN597443.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDescriptor@POLYN575652 in line [01282]",
      "_target" : "java.io.ObjectOutputStream.writeClassDescriptor@POLYN575652.desc",
      "_risk" : "//QC-JAVCWZ099[01282] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN597443[01282] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.lang.Object.getClass@POLYN293291.return",
      "_method" : "---java.lang.Object.getClass@POLYN293291 in line [01129]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN589415.cl",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN589415.cl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN589415.dummymethode_01134 in line [01134]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN589415.desc",
      "_risk" : "//QC-JAVCWZ099[01134] In java.io.ObjectOutputStream.writeObject0@POLYN589415[01134] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN589415.desc",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN599470 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN599470.desc",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN589415[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "15",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN599470.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN594946 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN594946.desc",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN599470[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN594946.desc",
      "_method" : "---java.io.ObjectOutputStream.writeNonProxyDesc@POLYN597443 in line [01231]",
      "_target" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN597443.desc",
      "_risk" : "//QC-JAVCWZ099[01231] In java.io.ObjectOutputStream.writeClassDesc@POLYN594946[01231] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN597443.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDescriptor@POLYN575652 in line [01282]",
      "_target" : "java.io.ObjectOutputStream.writeClassDescriptor@POLYN575652.desc",
      "_risk" : "//QC-JAVCWZ099[01282] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN597443[01282] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN589415.cl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN589415.dummymethode_01134 in line [01134]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN589415.desc",
      "_risk" : "//QC-JAVCWZ099[01134] In java.io.ObjectOutputStream.writeObject0@POLYN589415[01134] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN589415.repCl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN589415.dummymethode_01141 in line [01141]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN589415.cl",
      "_risk" : "//QC-JAVCWZ099[01141] In java.io.ObjectOutputStream.writeObject0@POLYN589415[01141] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN589415.desc",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN599470 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN599470.desc",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN589415[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "16",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.format@POLYN383479.l",
      "_method" : "---java.lang.String.format@POLYN913539 in line [01027]",
      "_target" : "java.lang.String.format@POLYN913539.l",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN356835.x",
      "_method" : "---java.io.PrintWriter.print@POLYN352080 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN352080.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN356835[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN913539.l",
      "_method" : "---java.lang.String.format@POLYN913539.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN913539.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN913539.return",
      "_method" : "---java.lang.String.format@POLYN913539 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN157125.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN157125.data",
      "_method" : "---java.io.PrintWriter.println@POLYN356835 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN356835.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN157125[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "17",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.format@POLYN367062.l",
      "_method" : "---java.lang.String.format@POLYN913539 in line [00964]",
      "_target" : "java.lang.String.format@POLYN913539.l",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN356835.x",
      "_method" : "---java.io.PrintWriter.print@POLYN352080 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN352080.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN356835[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN913539.l",
      "_method" : "---java.lang.String.format@POLYN913539.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN913539.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN913539.return",
      "_method" : "---java.lang.String.format@POLYN913539 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN157125.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN157125.data",
      "_method" : "---java.io.PrintWriter.println@POLYN356835 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN356835.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN157125[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "18",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN356835.x",
      "_method" : "---java.io.PrintWriter.print@POLYN352080 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN352080.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN356835[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN913539.l",
      "_method" : "---java.lang.String.format@POLYN913539.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN913539.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslServer.jsonErrorResponse@POLYN195896.\"%s",
      "_method" : "---java.lang.String.format@POLYN913539 in line [00208]",
      "_target" : "java.lang.String.format@POLYN913539.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN913539.return",
      "_method" : "---java.lang.String.format@POLYN913539 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN157125.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN157125.data",
      "_method" : "---java.io.PrintWriter.println@POLYN356835 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN356835.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN157125[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "19",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN356835.x",
      "_method" : "---java.io.PrintWriter.print@POLYN352080 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN352080.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN356835[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN913539.l",
      "_method" : "---java.lang.String.format@POLYN913539.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN913539.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslServer.jsonErrorResponse@POLYN195896.\"%s}\"",
      "_method" : "---java.lang.String.format@POLYN913539 in line [00212]",
      "_target" : "java.lang.String.format@POLYN913539.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN913539.return",
      "_method" : "---java.lang.String.format@POLYN913539 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN157125.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN157125.data",
      "_method" : "---java.io.PrintWriter.println@POLYN356835 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN356835.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN157125[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "20",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN356835.x",
      "_method" : "---java.io.PrintWriter.print@POLYN352080 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN352080.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN356835[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN913539.l",
      "_method" : "---java.lang.String.format@POLYN913539.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN913539.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.controller.QuorumController.Builder.build@POLYN431968.\"Node%d_\"",
      "_method" : "---java.lang.String.format@POLYN913539 in line [00293]",
      "_target" : "java.lang.String.format@POLYN913539.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN913539.return",
      "_method" : "---java.lang.String.format@POLYN913539 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN157125.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN157125.data",
      "_method" : "---java.io.PrintWriter.println@POLYN356835 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN356835.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN157125[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "21",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN356835.x",
      "_method" : "---java.io.PrintWriter.print@POLYN352080 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN352080.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN356835[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN913539.l",
      "_method" : "---java.lang.String.format@POLYN913539.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN913539.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN913539.return",
      "_method" : "---java.lang.String.format@POLYN913539 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN157125.data",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN157125.data",
      "_method" : "---java.io.PrintWriter.println@POLYN356835 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN356835.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN157125[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.agent.AgentClient.Builder.target@POLYN200696.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN913539 in line [00096]",
      "_target" : "java.lang.String.format@POLYN913539.l",
      "_risk" : ""
    } ]
  }, {
    "_id" : "22",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN356835.x",
      "_method" : "---java.io.PrintWriter.print@POLYN352080 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN352080.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN356835[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN913539.l",
      "_method" : "---java.lang.String.format@POLYN913539.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN913539.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN913539.return",
      "_method" : "---java.lang.String.format@POLYN913539 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN157125.data",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN157125.data",
      "_method" : "---java.io.PrintWriter.println@POLYN356835 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN356835.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN157125[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.agent.WorkerManager.Worker.toString@POLYN248816.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN913539 in line [00314]",
      "_target" : "java.lang.String.format@POLYN913539.l",
      "_risk" : ""
    } ]
  }, {
    "_id" : "23",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN356835.x",
      "_method" : "---java.io.PrintWriter.print@POLYN352080 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN352080.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN356835[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN913539.l",
      "_method" : "---java.lang.String.format@POLYN913539.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN913539.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN913539.return",
      "_method" : "---java.lang.String.format@POLYN913539 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN157125.data",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN157125.data",
      "_method" : "---java.io.PrintWriter.println@POLYN356835 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN356835.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN157125[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.coordinator.CoordinatorClient.Builder.target@POLYN240881.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN913539 in line [00112]",
      "_target" : "java.lang.String.format@POLYN913539.l",
      "_risk" : ""
    } ]
  }, {
    "_id" : "24",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.InputStream.read@POLYN253038.0",
      "_method" : "---java.io.InputStream.read@POLYN253038.dummymethode_00168 in line [00168]",
      "_target" : "java.io.InputStream.read@POLYN253038.return",
      "_risk" : "//QC-JAVCWE099[00168] In java.io.InputStream.read@POLYN253038[00168] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN462297.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN253038 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN253038.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN462297[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.InputStream.read@POLYN253038.return",
      "_method" : "---java.io.InputStream.read@POLYN253038 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN462297.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN462297[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN462297.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN462297.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN462297.currentPosition",
      "_risk" : ""
    } ]
  }, {
    "_id" : "25",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.InputStream.read@POLYN253038.-1",
      "_method" : "---java.io.InputStream.read@POLYN253038.dummymethode_00173 in line [00173]",
      "_target" : "java.io.InputStream.read@POLYN253038.return",
      "_risk" : "//QC-JAVCWE099[00173] In java.io.InputStream.read@POLYN253038[00173] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN462297.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN253038 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN253038.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN462297[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.InputStream.read@POLYN253038.return",
      "_method" : "---java.io.InputStream.read@POLYN253038 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN462297.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN462297[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN462297.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN462297.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN462297.currentPosition",
      "_risk" : ""
    } ]
  }, {
    "_id" : "26",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.writeTo@POLYN186403.buffer",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN462297 in line [00182]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN462297.destinationBuffer",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN462297.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN253038 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN253038.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN462297[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN462297.destinationBuffer",
      "_method" : "---java.io.InputStream.read@POLYN253038 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN462297.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN462297[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN462297.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN462297.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN462297.currentPosition",
      "_risk" : ""
    } ]
  }, {
    "_id" : "27",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.curContext",
      "_method" : "---java.io.ObjectInputStream.defaultReadObject@POLYN798170.dummymethode_00545 in line [00545]",
      "_target" : "java.io.ObjectInputStream.defaultReadObject@POLYN798170.ctx",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.curContext",
      "_method" : "---java.io.ObjectInputStream.readExternalData@POLYN857357.dummymethode_02065 in line [02065]",
      "_target" : "java.io.ObjectInputStream.readExternalData@POLYN857357.oldContext",
      "_risk" : "//QC-JAVCWZ099[02065] In java.io.ObjectInputStream.readExternalData@POLYN857357[02065] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readExternalData@POLYN857357.oldContext",
      "_method" : "---java.io.ObjectInputStream.readExternalData@POLYN857357.dummymethode_02094 in line [02094]",
      "_target" : "java.io.ObjectInputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[02094] In java.io.ObjectInputStream.readExternalData@POLYN857357[02094] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readSerialData@POLYN859288.slotDesc",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN859288.dummymethode_02133 in line [02133]",
      "_target" : "java.io.ObjectInputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[02133] In java.io.ObjectInputStream.readSerialData@POLYN859288[02133] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "28",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN642150.s",
      "_method" : "---java.io.ObjectOutputStream.writeBytes@POLYN580613 in line [02190]",
      "_target" : "java.io.ObjectOutputStream.writeBytes@POLYN580613.str",
      "_risk" : "//QC-JAVCWZ099[02190] In java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN642150[02190] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeBytes@POLYN580613.str",
      "_method" : "---java.io.ObjectOutputStream.writeBytes@POLYN580613 in line [00841]",
      "_target" : "java.io.ObjectOutputStream.writeBytes@POLYN580613.cibledummy_00841",
      "_risk" : "//QC-JAVCWZ099[00841] In java.io.ObjectOutputStream.writeBytes@POLYN580613[00841] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN598693.str",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN642150 in line [01309]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN642150.s",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeTypeString@POLYN586051.str",
      "_method" : "---java.io.ObjectOutputStream.writeString@POLYN598693 in line [01030]",
      "_target" : "java.io.ObjectOutputStream.writeString@POLYN598693.str",
      "_risk" : "//QC-JAVCWZ099[01030] In java.io.ObjectOutputStream.writeTypeString@POLYN586051[01030] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "29",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN371848.s",
      "_method" : "---java.io.PrintStream.write@POLYN366203 in line [00653]",
      "_target" : "java.io.PrintStream.write@POLYN366203.buf",
      "_risk" : "//QC-JAVCWZ099[00653] In java.io.PrintStream.print@POLYN371848[00653] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.println@POLYN376303.x",
      "_method" : "---java.io.PrintStream.print@POLYN371848 in line [00792]",
      "_target" : "java.io.PrintStream.print@POLYN371848.s",
      "_risk" : "//QC-JAVCWZ099[00792] In java.io.PrintStream.println@POLYN376303[00792] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.write@POLYN366203.buf",
      "_method" : "---java.io.PrintWriter.write@POLYN350056 in line [00503]",
      "_target" : "java.io.PrintWriter.write@POLYN350056.buf",
      "_risk" : "//QC-JAVCWZ099[00503] In java.io.PrintStream.write@POLYN366203[00503] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.PrintWriter.write@POLYN350056.buf",
      "_method" : "---java.io.PrintWriter.write@POLYN350056.dummymethode_00443 in line [00443]",
      "_target" : "java.io.PrintWriter.write@POLYN350056.cibledummy_00443",
      "_risk" : "//QC-JAVCWZ099[00443] In java.io.PrintWriter.write@POLYN350056[00443] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "30",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.InputStream.read@POLYN249879.b",
      "_method" : "---java.io.InputStream.read@POLYN249879.dummymethode_00102 in line [00102]",
      "_target" : "java.io.InputStream.read@POLYN249879.return",
      "_risk" : "//QC-JAVCWE099[00102] In java.io.InputStream.read@POLYN249879[00102] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN306444.return",
      "_method" : "---org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN306444 in line [00289]",
      "_target" : "org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN308130.read",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN306444.netReadBuffer",
      "_method" : "---java.io.InputStream.read@POLYN249879 in line [00226]",
      "_target" : "java.io.InputStream.read@POLYN249879.b",
      "_risk" : "//QC-JAVCWE099[00226] In org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN306444[00226] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.InputStream.read@POLYN249879.return",
      "_method" : "---java.io.InputStream.read@POLYN249879 in line [00226]",
      "_target" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN306444.return",
      "_risk" : "//QC-JAVCWE099[00226] In org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN306444[00226] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "31",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.accepted@POLYN247067.HttpStatus.ACCEPTED",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN244864 in line [00273]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN244864.status",
      "_risk" : "//QC-JAVCWE080[00273] In org.springframework.http.ResponseEntity.accepted@POLYN247067[00273] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN244864.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN244864 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN245469.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN245469[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN244864.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN244864.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN244864.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN244864[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN245469.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN245469 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "32",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.badRequest@POLYN247538.HttpStatus.BAD_REQUEST",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN244864 in line [00291]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN244864.status",
      "_risk" : "//QC-JAVCWE080[00291] In org.springframework.http.ResponseEntity.badRequest@POLYN247538[00291] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN244864.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN244864 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN245469.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN245469[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN244864.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN244864.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN244864.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN244864[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN245469.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN245469 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "33",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.noContent@POLYN247310.HttpStatus.NO_CONTENT",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN244864 in line [00282]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN244864.status",
      "_risk" : "//QC-JAVCWE080[00282] In org.springframework.http.ResponseEntity.noContent@POLYN247310[00282] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN244864.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN244864 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN245469.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN245469[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN244864.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN244864.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN244864.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN244864[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN245469.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN245469 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "34",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.notFound@POLYN247781.HttpStatus.NOT_FOUND",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN244864 in line [00300]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN244864.status",
      "_risk" : "//QC-JAVCWE080[00300] In org.springframework.http.ResponseEntity.notFound@POLYN247781[00300] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN244864.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN244864 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN245469.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN245469[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN244864.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN244864.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN244864.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN244864[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN245469.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN245469 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "35",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN244864.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN244864 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN245469.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN245469[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN244864.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN244864.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN244864.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN244864[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.unprocessableEntity@POLYN248015.HttpStatus.UNPROCESSABLE_ENTITY",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN244864 in line [00310]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN244864.status",
      "_risk" : "//QC-JAVCWE080[00310] In org.springframework.http.ResponseEntity.unprocessableEntity@POLYN248015[00310] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN245469.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN245469 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "36",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN240553.cbuf",
      "_method" : "---java.io.Reader.read@POLYN190989 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN240553.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN240553[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN240553.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN240553 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN243761.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN243761[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN243761.n",
      "_method" : "---java.io.BufferedReader.read@POLYN243761.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN243761.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN243761[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "37",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN240553.len",
      "_method" : "---java.io.Reader.read@POLYN190989 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN240553.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN240553[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN240553.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN240553 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN243761.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN243761[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN243761.n",
      "_method" : "---java.io.BufferedReader.read@POLYN243761.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN243761.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN243761[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "38",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN240553.off",
      "_method" : "---java.io.Reader.read@POLYN190989 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN240553.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN240553[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN240553.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN240553 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN243761.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN243761[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN243761.n",
      "_method" : "---java.io.BufferedReader.read@POLYN243761.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN243761.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN243761[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "39",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Reader.read@POLYN190989.return",
      "_method" : "---java.io.Reader.read@POLYN190989 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN240553.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN240553[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN240553.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN240553 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN243761.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN243761[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN243761.n",
      "_method" : "---java.io.BufferedReader.read@POLYN243761.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN243761.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN243761[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "40",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN240553.-1",
      "_method" : "---java.io.BufferedReader.read1@POLYN240553.dummymethode_00214 in line [00214]",
      "_target" : "java.io.BufferedReader.read1@POLYN240553.return",
      "_risk" : "//QC-JAVCWZ099[00214] In java.io.BufferedReader.read1@POLYN240553[00214] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN240553.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN240553 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN243761.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN243761[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN243761.n",
      "_method" : "---java.io.BufferedReader.read@POLYN243761.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN243761.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN243761[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "41",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN867762.return",
      "_method" : "---java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN867762 in line [00591]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN799621.getField",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN799621.return",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN799621 in line [00592]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN799621.cibledummy_00592",
      "_risk" : "//QC-JAVCWZ099[00592] In java.io.ObjectInputStream.readFields@POLYN799621[00592] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN799621.getField",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN799621.dummymethode_00603 in line [00603]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN799621.return",
      "_risk" : "//QC-JAVCWZ099[00603] In java.io.ObjectInputStream.readFields@POLYN799621[00603] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "42",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN799621.curDesc",
      "_method" : "---java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN867762 in line [00591]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN799621.getField",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN799621.return",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN799621 in line [00592]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN799621.cibledummy_00592",
      "_risk" : "//QC-JAVCWZ099[00592] In java.io.ObjectInputStream.readFields@POLYN799621[00592] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN799621.getField",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN799621.dummymethode_00603 in line [00603]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN799621.return",
      "_risk" : "//QC-JAVCWZ099[00603] In java.io.ObjectInputStream.readFields@POLYN799621[00603] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "43",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readClassDescriptor@POLYN810859.desc",
      "_method" : "---java.io.ObjectInputStream.readClassDescriptor@POLYN810859.dummymethode_00883 in line [00883]",
      "_target" : "java.io.ObjectInputStream.readClassDescriptor@POLYN810859.return",
      "_risk" : "//QC-JAVCWZ099[00883] In java.io.ObjectInputStream.readClassDescriptor@POLYN810859[00883] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClassDescriptor@POLYN810859.return",
      "_method" : "---java.io.ObjectInputStream.readClassDescriptor@POLYN810859 in line [01815]",
      "_target" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN844257.readDesc",
      "_risk" : "//QC-JAVCWZ099[01815] In java.io.ObjectInputStream.readNonProxyDesc@POLYN844257[01815] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN844257.readDesc",
      "_method" : "---java.io.ObjectInputStream.readNonProxyDesc@POLYN844257.dummymethode_01843 in line [01843]",
      "_target" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN844257.cibledummy_01843",
      "_risk" : "//QC-JAVCWZ099[01843] In java.io.ObjectInputStream.readNonProxyDesc@POLYN844257[01843] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "44",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN839948.descriptor",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN839948.dummymethode_01722 in line [01722]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN839948.return",
      "_risk" : "//QC-JAVCWZ099[01722] In java.io.ObjectInputStream.readClassDesc@POLYN839948[01722] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN839948.return",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN839948 in line [02000]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN854133.desc",
      "_risk" : "//QC-JAVCWZ099[02000] In java.io.ObjectInputStream.readOrdinaryObject@POLYN854133[02000] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN854133.desc",
      "_method" : "---java.io.ObjectInputStream.readExternalData@POLYN857357 in line [02025]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN854133.cibledummy_02025",
      "_risk" : "//QC-JAVCWZ099[02025] In java.io.ObjectInputStream.readOrdinaryObject@POLYN854133[02025] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "45",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Reader.read@POLYN189724.return",
      "_method" : "---java.io.Reader.read@POLYN189724 in line [00100]",
      "_target" : "java.io.Reader.read@POLYN188726.n",
      "_risk" : "//QC-JAVCWZ099[00100] In java.io.Reader.read@POLYN188726[00100] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Reader.read@POLYN188726.n",
      "_method" : "---java.io.Reader.read@POLYN188726.dummymethode_00102 in line [00102]",
      "_target" : "java.io.Reader.read@POLYN188726.cibledummy_00102",
      "_risk" : "//QC-JAVCWZ099[00102] In java.io.Reader.read@POLYN188726[00102] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.Reader.read@POLYN189724.-1",
      "_method" : "---java.io.Reader.read@POLYN189724.dummymethode_00122 in line [00122]",
      "_target" : "java.io.Reader.read@POLYN189724.return",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.Reader.read@POLYN189724[00122] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "46",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.ServerSocket.accept@POLYN324864.(SocketImpl)null",
      "_method" : "---java.net.ServerSocket.accept@POLYN324864.dummymethode_00468 in line [00468]",
      "_target" : "java.net.ServerSocket.accept@POLYN324864.s",
      "_risk" : "//QC-JAVCWZ099[00468] In java.net.ServerSocket.accept@POLYN324864[00468] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.accept@POLYN324864.s",
      "_method" : "---java.net.ServerSocket.accept@POLYN324864.dummymethode_00470 in line [00470]",
      "_target" : "java.net.ServerSocket.accept@POLYN324864.return",
      "_risk" : "//QC-JAVCWZ099[00470] In java.net.ServerSocket.accept@POLYN324864[00470] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.net.ServerSocket.accept@POLYN324864.return",
      "_method" : "---java.net.ServerSocket.accept@POLYN324864 in line [00501]",
      "_target" : "java.net.ServerSocket.implAccept@POLYN325810.cibledummy_00501",
      "_risk" : "//QC-JAVCWZ099[00501] In java.net.ServerSocket.implAccept@POLYN325810[00501] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "47",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObjectOverride@POLYN795495.return",
      "_method" : "---java.io.ObjectInputStream.readObjectOverride@POLYN795495 in line [00416]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN794072.return",
      "_risk" : "//QC-JAVCWE099[00416] In java.io.ObjectInputStream.readObject@POLYN794072[00416] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObjectOverride@POLYN795495.null",
      "_method" : "---java.io.ObjectInputStream.readObjectOverride@POLYN795495.dummymethode_00460 in line [00460]",
      "_target" : "java.io.ObjectInputStream.readObjectOverride@POLYN795495.return",
      "_risk" : "//QC-JAVCWE099[00460] In java.io.ObjectInputStream.readObjectOverride@POLYN795495[00460] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN794072.return",
      "_method" : "---java.io.ObjectInputStream.readObject@POLYN794072 in line [00209]",
      "_target" : "org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN214704.resp",
      "_risk" : "//QC-JAVCWE099[00209] In org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN214704[00209] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "48",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN831656.return",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN831656 in line [00422]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN794072.obj",
      "_risk" : "//QC-JAVCWE099[00422] In java.io.ObjectInputStream.readObject@POLYN794072[00422] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN794072.obj",
      "_method" : "---java.io.ObjectInputStream.readObject@POLYN794072.dummymethode_00431 in line [00431]",
      "_target" : "java.io.ObjectInputStream.readObject@POLYN794072.return",
      "_risk" : "//QC-JAVCWE099[00431] In java.io.ObjectInputStream.readObject@POLYN794072[00431] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readObject@POLYN794072.return",
      "_method" : "---java.io.ObjectInputStream.readObject@POLYN794072 in line [00209]",
      "_target" : "org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN214704.resp",
      "_risk" : "//QC-JAVCWE099[00209] In org.apache.kafka.trogdor.workload.ExternalCommandWorker.StdoutMonitor.run@POLYN214704[00209] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "49",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN244864.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN244864 in line [00273]",
      "_target" : "org.springframework.http.ResponseEntity.accepted@POLYN247067.return",
      "_risk" : "//QC-JAVCWE080[00273] In org.springframework.http.ResponseEntity.accepted@POLYN247067[00273] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN245469.HttpStatus.OK",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN244864 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN244864.status",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN245469[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN244864.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN244864.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN244864.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN244864[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "50",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedInputStream.read@POLYN251544.nread",
      "_method" : "---java.io.BufferedInputStream.read@POLYN251544.dummymethode_00348 in line [00348]",
      "_target" : "java.io.BufferedInputStream.read@POLYN251544.n",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.BufferedInputStream.read@POLYN251544[00348] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedInputStream.read@POLYN251544.n",
      "_method" : "---java.io.BufferedInputStream.read@POLYN251544.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedInputStream.read@POLYN251544.return",
      "_risk" : "//QC-JAVCWZ099[00350] In java.io.BufferedInputStream.read@POLYN251544[00350] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "51",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN166328.count",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN167624 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN167624.len",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN166328[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.write@POLYN167624.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN167624.dummymethode_00129 in line [00129]",
      "_target" : "java.io.BufferedOutputStream.count",
      "_risk" : "//QC-JAVCWZ099[00129] In java.io.BufferedOutputStream.write@POLYN167624[00129] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "52",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN167624.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN167624.dummymethode_00129 in line [00129]",
      "_target" : "java.io.BufferedOutputStream.count",
      "_risk" : "//QC-JAVCWZ099[00129] In java.io.BufferedOutputStream.write@POLYN167624[00129] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN365417.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN167624 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN167624.len",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN365417[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "53",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN166328.buf",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN167624 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN167624.b",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN166328[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.write@POLYN167624.b",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN167624 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN167624.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN167624[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "54",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN167624.b",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN167624 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN167624.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN167624[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN365417.buf",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN167624 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN167624.b",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN365417[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "55",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN166328.0",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN167624 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN167624.off",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN166328[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.write@POLYN167624.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN167624 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN167624.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN167624[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "56",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN167624.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN167624 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN167624.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN167624[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN365417.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN167624 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN167624.off",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN365417[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "57",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Writer.writeBuffer",
      "_method" : "---java.io.Writer.write@POLYN199181.dummymethode_00187 in line [00187]",
      "_target" : "java.io.Writer.write@POLYN199181.cbuf",
      "_risk" : "//QC-JAVCWZ099[00187] In java.io.Writer.write@POLYN199181[00187] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN199181.cbuf",
      "_method" : "---java.io.Writer.write@POLYN198347 in line [00192]",
      "_target" : "java.io.Writer.write@POLYN198347.cbuf",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.Writer.write@POLYN199181[00192] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "58",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.write@POLYN350370.len",
      "_method" : "---java.io.Writer.write@POLYN199181 in line [00456]",
      "_target" : "java.io.Writer.write@POLYN199181.len",
      "_risk" : "//QC-JAVCWZ099[00456] In java.io.PrintWriter.write@POLYN350370[00456] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN199181.len",
      "_method" : "---java.io.Writer.write@POLYN198347 in line [00192]",
      "_target" : "java.io.Writer.write@POLYN198347.len",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.Writer.write@POLYN199181[00192] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "59",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN189375.off",
      "_method" : "---java.io.BufferedWriter.write@POLYN189375.dummymethode_00192 in line [00192]",
      "_target" : "java.io.BufferedWriter.write@POLYN189375.b",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.BufferedWriter.write@POLYN189375[00192] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN189375.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN189375.dummymethode_00195 in line [00195]",
      "_target" : "java.io.BufferedWriter.write@POLYN189375.cibledummy_00195",
      "_risk" : "//QC-JAVCWZ099[00195] In java.io.BufferedWriter.write@POLYN189375[00195] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "60",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN189375.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN189375.dummymethode_00195 in line [00195]",
      "_target" : "java.io.BufferedWriter.write@POLYN189375.cibledummy_00195",
      "_risk" : "//QC-JAVCWZ099[00195] In java.io.BufferedWriter.write@POLYN189375[00195] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN189375.d",
      "_method" : "---java.io.BufferedWriter.write@POLYN189375.dummymethode_00196 in line [00196]",
      "_target" : "java.io.BufferedWriter.write@POLYN189375.b",
      "_risk" : "//QC-JAVCWZ099[00196] In java.io.BufferedWriter.write@POLYN189375[00196] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "61",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN191713.off",
      "_method" : "---java.io.BufferedWriter.write@POLYN191713.dummymethode_00223 in line [00223]",
      "_target" : "java.io.BufferedWriter.write@POLYN191713.b",
      "_risk" : "//QC-JAVCWZ099[00223] In java.io.BufferedWriter.write@POLYN191713[00223] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN191713.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN191713.dummymethode_00226 in line [00226]",
      "_target" : "java.io.BufferedWriter.write@POLYN191713.cibledummy_00226",
      "_risk" : "//QC-JAVCWZ099[00226] In java.io.BufferedWriter.write@POLYN191713[00226] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "62",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN191713.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN191713.dummymethode_00226 in line [00226]",
      "_target" : "java.io.BufferedWriter.write@POLYN191713.cibledummy_00226",
      "_risk" : "//QC-JAVCWZ099[00226] In java.io.BufferedWriter.write@POLYN191713[00226] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN191713.d",
      "_method" : "---java.io.BufferedWriter.write@POLYN191713.dummymethode_00227 in line [00227]",
      "_target" : "java.io.BufferedWriter.write@POLYN191713.b",
      "_risk" : "//QC-JAVCWZ099[00227] In java.io.BufferedWriter.write@POLYN191713[00227] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "63",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readString@POLYN846540.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN846540 in line [01963]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN851869.name",
      "_risk" : "//QC-JAVCWZ099[01963] In java.io.ObjectInputStream.readEnum@POLYN851869[01963] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readString@POLYN846540.str",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN846540.dummymethode_01876 in line [01876]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN846540.return",
      "_risk" : "//QC-JAVCWZ099[01876] In java.io.ObjectInputStream.readString@POLYN846540[01876] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "64",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "null",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN851869.dummymethode_01964 in line [01964]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN851869.result",
      "_risk" : "//QC-JAVCWE099[01964] In java.io.ObjectInputStream.readEnum@POLYN851869[01964] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN851869.result",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN851869.dummymethode_01983 in line [01983]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN851869.return",
      "_risk" : "//QC-JAVCWE099[01983] In java.io.ObjectInputStream.readEnum@POLYN851869[01983] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "65",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN851869.en",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN851869.dummymethode_01970 in line [01970]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN851869.result",
      "_risk" : "//QC-JAVCWZ099[01970] In java.io.ObjectInputStream.readEnum@POLYN851869[01970] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN851869.result",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN851869.dummymethode_01983 in line [01983]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN851869.return",
      "_risk" : "//QC-JAVCWZ099[01983] In java.io.ObjectInputStream.readEnum@POLYN851869[01983] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "66",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN841415.\"null class\"",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN841415.dummymethode_01759 in line [01759]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN841415.resolveEx",
      "_risk" : "//QC-JAVCWZ099[01759] In java.io.ObjectInputStream.readProxyDesc@POLYN841415[01759] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN841415.resolveEx",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN841415.dummymethode_01786 in line [01786]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN841415.cibledummy_01786",
      "_risk" : "//QC-JAVCWZ099[01786] In java.io.ObjectInputStream.readProxyDesc@POLYN841415[01786] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "67",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN841415.ex",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN841415.dummymethode_01775 in line [01775]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN841415.resolveEx",
      "_risk" : "//QC-JAVCWZ099[01775] In java.io.ObjectInputStream.readProxyDesc@POLYN841415[01775] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN841415.resolveEx",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN841415.dummymethode_01786 in line [01786]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN841415.cibledummy_01786",
      "_risk" : "//QC-JAVCWZ099[01786] In java.io.ObjectInputStream.readProxyDesc@POLYN841415[01786] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "68",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN854133.obj",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN859288 in line [02027]",
      "_target" : "java.io.ObjectInputStream.readSerialData@POLYN859288.obj",
      "_risk" : "//QC-JAVCWZ099[02027] In java.io.ObjectInputStream.readOrdinaryObject@POLYN854133[02027] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readSerialData@POLYN859288.obj",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN859288.dummymethode_02136 in line [02136]",
      "_target" : "java.io.ObjectInputStream.readSerialData@POLYN859288.cibledummy_02136",
      "_risk" : "//QC-JAVCWZ099[02136] In java.io.ObjectInputStream.readSerialData@POLYN859288[02136] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "69",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "objs.length",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN599470.dummymethode_01364 in line [01364]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN599470.len",
      "_risk" : "//QC-JAVCWE099[01364] In java.io.ObjectOutputStream.writeArray@POLYN599470[01364] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN599470.len",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [01365]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN599470.cibledummy_01365",
      "_risk" : "//QC-JAVCWE099[01365] In java.io.ObjectOutputStream.writeArray@POLYN599470[01365] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "70",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.reset@POLYN570201.TC_RESET",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [00501]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_risk" : "//QC-JAVCWZ099[00501] In java.io.ObjectOutputStream.reset@POLYN570201[00501] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN578641[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "71",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN599470.TC_ARRAY",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [01321]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_risk" : "//QC-JAVCWZ099[01321] In java.io.ObjectOutputStream.writeArray@POLYN599470[01321] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN578641[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "72",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN578641[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClass@POLYN594446.TC_CLASS",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [01212]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_risk" : "//QC-JAVCWZ099[01212] In java.io.ObjectOutputStream.writeClass@POLYN594446[01212] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "73",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN578641[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeEnum@POLYN604392.TC_ENUM",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [01401]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_risk" : "//QC-JAVCWZ099[01401] In java.io.ObjectOutputStream.writeEnum@POLYN604392[01401] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "74",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN578641[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN606674.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [01461]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_risk" : "//QC-JAVCWZ099[01461] In java.io.ObjectOutputStream.writeExternalData@POLYN606674[01461] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "75",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN578641[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN612139.TC_EXCEPTION",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [01576]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_risk" : "//QC-JAVCWZ099[01576] In java.io.ObjectOutputStream.writeFatalException@POLYN612139[01576] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "76",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN578641[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeHandle@POLYN594163.TC_REFERENCE",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [01204]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_risk" : "//QC-JAVCWZ099[01204] In java.io.ObjectOutputStream.writeHandle@POLYN594163[01204] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "77",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN578641[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN597443.TC_CLASSDESC",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [01275]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_risk" : "//QC-JAVCWZ099[01275] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN597443[01275] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "78",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN578641[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN597443.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [01292]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_risk" : "//QC-JAVCWZ099[01292] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN597443[01292] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "79",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN578641[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNull@POLYN593998.TC_NULL",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [01197]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_risk" : "//QC-JAVCWZ099[01197] In java.io.ObjectOutputStream.writeNull@POLYN593998[01197] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "80",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN578641[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN605234.TC_OBJECT",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [01426]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_risk" : "//QC-JAVCWZ099[01426] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN605234[01426] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "81",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN578641[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN595937.TC_PROXYCLASSDESC",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [01247]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_risk" : "//QC-JAVCWZ099[01247] In java.io.ObjectOutputStream.writeProxyDesc@POLYN595937[01247] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "82",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN578641[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN595937.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [01263]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_risk" : "//QC-JAVCWZ099[01263] In java.io.ObjectOutputStream.writeProxyDesc@POLYN595937[01263] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "83",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN578641[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN607870.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [01498]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_risk" : "//QC-JAVCWZ099[01498] In java.io.ObjectOutputStream.writeSerialData@POLYN607870[01498] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "84",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN578641[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN598693.TC_STRING",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [01305]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_risk" : "//QC-JAVCWZ099[01305] In java.io.ObjectOutputStream.writeString@POLYN598693[01305] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "85",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN578641[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN598693.TC_LONGSTRING",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN578641 in line [01308]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN578641.val",
      "_risk" : "//QC-JAVCWZ099[01308] In java.io.ObjectOutputStream.writeString@POLYN598693[01308] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "86",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeChar@POLYN626989.v",
      "_method" : "---java.io.ObjectOutputStream.writeChar@POLYN579201 in line [01925]",
      "_target" : "java.io.ObjectOutputStream.writeChar@POLYN579201.val",
      "_risk" : "//QC-JAVCWZ099[01925] In java.io.ObjectOutputStream.BlockDataOutputStream.writeChar@POLYN626989[01925] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeChar@POLYN579201.val",
      "_method" : "---java.io.ObjectOutputStream.writeChar@POLYN579201 in line [00786]",
      "_target" : "java.io.ObjectOutputStream.writeChar@POLYN579201.cibledummy_00786",
      "_risk" : "//QC-JAVCWZ099[00786] In java.io.ObjectOutputStream.writeChar@POLYN579201[00786] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "87",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN599470.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN594946 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN594946.unshared",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN599470[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN594946.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN595937 in line [01229]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN595937.unshared",
      "_risk" : "//QC-JAVCWZ099[01229] In java.io.ObjectOutputStream.writeClassDesc@POLYN594946[01229] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "88",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN594946.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN595937 in line [01229]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN595937.unshared",
      "_risk" : "//QC-JAVCWZ099[01229] In java.io.ObjectOutputStream.writeClassDesc@POLYN594946[01229] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN605234.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN594946 in line [01427]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN594946.unshared",
      "_risk" : "//QC-JAVCWZ099[01427] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN605234[01427] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "89",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeDouble@POLYN629197.v",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN580321 in line [01970]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN580321.val",
      "_risk" : "//QC-JAVCWZ099[01970] In java.io.ObjectOutputStream.BlockDataOutputStream.writeDouble@POLYN629197[01970] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN580321.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN580321 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN580321.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN580321[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "90",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN580321.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN580321 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN580321.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN580321[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.protocol.DataOutputStreamWritable.writeDouble@POLYN162741.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN580321 in line [00074]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN580321.val",
      "_risk" : "//QC-JAVCWE099[00074] In org.apache.kafka.common.protocol.DataOutputStreamWritable.writeDouble@POLYN162741[00074] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "91",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN580321.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN580321 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN580321.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN580321[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeDouble@POLYN238393.value",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN580321 in line [00376]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN580321.val",
      "_risk" : "//QC-JAVCWE099[00376] In org.apache.kafka.common.utils.ByteUtils.writeDouble@POLYN238393[00376] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "92",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN612139.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN612139.dummymethode_01577 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN612139.cibledummy_01577",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN612139[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN564899.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN612139 in line [00351]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN612139.ex",
      "_risk" : "//QC-JAVCWZ099[00351] In java.io.ObjectOutputStream.writeObject@POLYN564899[00351] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "93",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN612139.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN612139.dummymethode_01577 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN612139.cibledummy_01577",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN612139[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN567117.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN612139 in line [00418]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN612139.ex",
      "_risk" : "//QC-JAVCWZ099[00418] In java.io.ObjectOutputStream.writeUnshared@POLYN567117[00418] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "94",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeFloat@POLYN628329.v",
      "_method" : "---java.io.ObjectOutputStream.writeFloat@POLYN580041 in line [01952]",
      "_target" : "java.io.ObjectOutputStream.writeFloat@POLYN580041.val",
      "_risk" : "//QC-JAVCWZ099[01952] In java.io.ObjectOutputStream.BlockDataOutputStream.writeFloat@POLYN628329[01952] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeFloat@POLYN580041.val",
      "_method" : "---java.io.ObjectOutputStream.writeFloat@POLYN580041 in line [00819]",
      "_target" : "java.io.ObjectOutputStream.writeFloat@POLYN580041.cibledummy_00819",
      "_risk" : "//QC-JAVCWZ099[00819] In java.io.ObjectOutputStream.writeFloat@POLYN580041[00819] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "95",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeInt@POLYN627895.v",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [01943]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_risk" : "//QC-JAVCWZ099[01943] In java.io.ObjectOutputStream.BlockDataOutputStream.writeInt@POLYN627895[01943] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN579481[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "96",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN599470.ia.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [01329]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_risk" : "//QC-JAVCWZ099[01329] In java.io.ObjectOutputStream.writeArray@POLYN599470[01329] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN579481[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "97",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN599470.ba.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [01333]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_risk" : "//QC-JAVCWZ099[01333] In java.io.ObjectOutputStream.writeArray@POLYN599470[01333] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN579481[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "98",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN599470.ja.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [01337]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_risk" : "//QC-JAVCWZ099[01337] In java.io.ObjectOutputStream.writeArray@POLYN599470[01337] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN579481[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "99",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN599470.fa.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [01341]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_risk" : "//QC-JAVCWZ099[01341] In java.io.ObjectOutputStream.writeArray@POLYN599470[01341] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN579481[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "100",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN599470.da.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [01345]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_risk" : "//QC-JAVCWZ099[01345] In java.io.ObjectOutputStream.writeArray@POLYN599470[01345] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN579481[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "101",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN599470.sa.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [01349]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_risk" : "//QC-JAVCWZ099[01349] In java.io.ObjectOutputStream.writeArray@POLYN599470[01349] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN579481[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "102",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN599470.ca.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [01353]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_risk" : "//QC-JAVCWZ099[01353] In java.io.ObjectOutputStream.writeArray@POLYN599470[01353] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN579481[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "103",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN599470.za.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [01357]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_risk" : "//QC-JAVCWZ099[01357] In java.io.ObjectOutputStream.writeArray@POLYN599470[01357] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN579481[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "104",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN579481[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN595937.ifaces.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [01252]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_risk" : "//QC-JAVCWZ099[01252] In java.io.ObjectOutputStream.writeProxyDesc@POLYN595937[01252] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "105",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN579481[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.writeObject@POLYN243491.count",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00464]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_risk" : "//QC-JAVCWZ099[00464] In java.lang.StringBuilder.writeObject@POLYN243491[00464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "106",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN579481[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.writeObject@POLYN676160.size",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [01359]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_risk" : "//QC-JAVCWZ099[01359] In java.util.HashMap.writeObject@POLYN676160[01359] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "107",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN579481[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN469781.table.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [01221]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_risk" : "//QC-JAVCWZ099[01221] In java.util.Hashtable.writeHashtable@POLYN469781[01221] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "108",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN579481[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN469781.count",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [01223]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_risk" : "//QC-JAVCWZ099[01223] In java.util.Hashtable.writeHashtable@POLYN469781[01223] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "109",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN579481[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.protocol.DataOutputStreamWritable.writeInt@POLYN162167.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00056]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_risk" : "//QC-JAVCWE099[00056] In org.apache.kafka.common.protocol.DataOutputStreamWritable.writeInt@POLYN162167[00056] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "110",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN579481[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.AbstractLegacyRecordBatch.writeHeader@POLYN225849.size",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00276]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_risk" : "//QC-JAVCWE099[00276] In org.apache.kafka.common.record.AbstractLegacyRecordBatch.writeHeader@POLYN225849[00276] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "111",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN579481[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN173524.Serdes.ListSerde.NULL_ENTRY_VALUE",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00124]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_risk" : "//QC-JAVCWE099[00124] In org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN173524[00124] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "112",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN579481[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN173524.bytes.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00129]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_risk" : "//QC-JAVCWE099[00129] In org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN173524[00129] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "113",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN579481[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serializeNullIndexList@POLYN172599.nullIndex",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00103]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_risk" : "//QC-JAVCWE099[00103] In org.apache.kafka.common.serialization.ListSerializer.serializeNullIndexList@POLYN172599[00103] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "114",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN579481[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.writeTaskIdTo@POLYN164789.0",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00045]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN579481.val",
      "_risk" : "//QC-JAVCWE099[00045] In org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.writeTaskIdTo@POLYN164789[00045] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "115",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN589415.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeClass@POLYN594446 in line [01120]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN589415.cibledummy_01120",
      "_risk" : "//QC-JAVCWZ099[01120] In java.io.ObjectOutputStream.writeObject0@POLYN589415[01120] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN564899.false",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN589415 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN589415.unshared",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN564899[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "116",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN589415.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeClass@POLYN594446 in line [01120]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN589415.cibledummy_01120",
      "_risk" : "//QC-JAVCWZ099[01120] In java.io.ObjectOutputStream.writeObject0@POLYN589415[01120] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN567117.true",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN589415 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN589415.unshared",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN567117[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "117",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN564899.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN565789 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN564899.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN564899[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.internalWriteEntries@POLYN700911.e.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN564899 in line [01782]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN564899.obj",
      "_risk" : "//QC-JAVCWZ099[01782] In java.util.HashMap.internalWriteEntries@POLYN700911[01782] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "118",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN564899.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN565789 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN564899.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN564899[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.internalWriteEntries@POLYN700911.e.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN564899 in line [01783]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN564899.obj",
      "_risk" : "//QC-JAVCWZ099[01783] In java.util.HashMap.internalWriteEntries@POLYN700911[01783] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "119",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN564899.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN565789 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN564899.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN564899[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN469781.entryStack.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN564899 in line [01238]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN564899.obj",
      "_risk" : "//QC-JAVCWZ099[01238] In java.util.Hashtable.writeHashtable@POLYN469781[01238] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "120",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN564899.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN565789 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN564899.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN564899[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN469781.entryStack.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN564899 in line [01239]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN564899.obj",
      "_risk" : "//QC-JAVCWZ099[01239] In java.util.Hashtable.writeHashtable@POLYN469781[01239] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "121",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN564899.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN565789 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN564899.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN564899[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1490973.p.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN564899 in line [01406]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN564899.obj",
      "_risk" : "//QC-JAVCWZ099[01406] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1490973[01406] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "122",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN564899.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN565789 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN564899.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN564899[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1490973.p.val",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN564899 in line [01407]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN564899.obj",
      "_risk" : "//QC-JAVCWZ099[01407] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1490973[01407] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "123",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN564899.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN565789 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN564899.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN564899[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1490973.null",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN564899 in line [01410]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN564899.obj",
      "_risk" : "//QC-JAVCWZ099[01410] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1490973[01410] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "124",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeShort@POLYN627442.v",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN578921 in line [01934]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN578921.val",
      "_risk" : "//QC-JAVCWZ099[01934] In java.io.ObjectOutputStream.BlockDataOutputStream.writeShort@POLYN627442[01934] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN578921.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN578921 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN578921.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN578921[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "125",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN578921.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN578921 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN578921.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN578921[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeStreamHeader@POLYN574645.STREAM_MAGIC",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN578921 in line [00636]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN578921.val",
      "_risk" : "//QC-JAVCWZ099[00636] In java.io.ObjectOutputStream.writeStreamHeader@POLYN574645[00636] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "126",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN578921.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN578921 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN578921.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN578921[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeStreamHeader@POLYN574645.STREAM_VERSION",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN578921 in line [00637]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN578921.val",
      "_risk" : "//QC-JAVCWZ099[00637] In java.io.ObjectOutputStream.writeStreamHeader@POLYN574645[00637] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "127",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN231030.-1",
      "_method" : "---java.io.PipedInputStream.read@POLYN231030.dummymethode_00318 in line [00318]",
      "_target" : "java.io.PipedInputStream.read@POLYN231030.return",
      "_risk" : "//QC-JAVCWZ099[00318] In java.io.PipedInputStream.read@POLYN231030[00318] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN231030.return",
      "_method" : "---java.io.PipedInputStream.read@POLYN231030 in line [00377]",
      "_target" : "java.io.PipedInputStream.read@POLYN234045.c",
      "_risk" : "//QC-JAVCWZ099[00377] In java.io.PipedInputStream.read@POLYN234045[00377] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "128",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN231030.ret",
      "_method" : "---java.io.PipedInputStream.read@POLYN231030.dummymethode_00340 in line [00340]",
      "_target" : "java.io.PipedInputStream.read@POLYN231030.return",
      "_risk" : "//QC-JAVCWZ099[00340] In java.io.PipedInputStream.read@POLYN231030[00340] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN231030.return",
      "_method" : "---java.io.PipedInputStream.read@POLYN231030 in line [00377]",
      "_target" : "java.io.PipedInputStream.read@POLYN234045.c",
      "_risk" : "//QC-JAVCWZ099[00377] In java.io.PipedInputStream.read@POLYN234045[00377] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "129",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN234045.(buffer.length-out)",
      "_method" : "---java.io.PipedInputStream.read@POLYN234045.dummymethode_00388 in line [00388]",
      "_target" : "java.io.PipedInputStream.read@POLYN234045.available",
      "_risk" : "//QC-JAVCWZ099[00388] In java.io.PipedInputStream.read@POLYN234045[00388] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN234045.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN234045.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN234045.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN234045[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "130",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN234045.(in-out)",
      "_method" : "---java.io.PipedInputStream.read@POLYN234045.dummymethode_00388 in line [00388]",
      "_target" : "java.io.PipedInputStream.read@POLYN234045.available",
      "_risk" : "//QC-JAVCWZ099[00388] In java.io.PipedInputStream.read@POLYN234045[00388] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN234045.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN234045.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN234045.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN234045[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "131",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "buffer.length-out",
      "_method" : "---java.io.PipedInputStream.read@POLYN234045.dummymethode_00390 in line [00390]",
      "_target" : "java.io.PipedInputStream.read@POLYN234045.available",
      "_risk" : "//QC-JAVCWE099[00390] In java.io.PipedInputStream.read@POLYN234045[00390] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN234045.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN234045.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN234045.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN234045[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "132",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "len-1",
      "_method" : "---java.io.PipedInputStream.read@POLYN234045.dummymethode_00395 in line [00395]",
      "_target" : "java.io.PipedInputStream.read@POLYN234045.available",
      "_risk" : "//QC-JAVCWE099[00395] In java.io.PipedInputStream.read@POLYN234045[00395] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN234045.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN234045.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN234045.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN234045[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "133",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedReader.read@POLYN209231.-1",
      "_method" : "---java.io.PipedReader.read@POLYN209231.dummymethode_00001 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN209231.return",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN209231[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedReader.read@POLYN209231.return",
      "_method" : "---java.io.PipedReader.read@POLYN209231 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN211835.c",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN211835[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "134",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedReader.read@POLYN209231.ret",
      "_method" : "---java.io.PipedReader.read@POLYN209231.dummymethode_00001 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN209231.return",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN209231[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedReader.read@POLYN209231.return",
      "_method" : "---java.io.PipedReader.read@POLYN209231 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN211835.c",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN211835[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "135",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN373594.x",
      "_method" : "---java.io.PrintStream.print@POLYN368806 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN368806.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN373594[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.tools.TransactionsCommand.printRow@POLYN318954.rowBuilder",
      "_method" : "---java.io.PrintStream.println@POLYN373594 in line [00929]",
      "_target" : "java.io.PrintStream.println@POLYN373594.x",
      "_risk" : "//QC-JAVCWE099[00929] In org.apache.kafka.tools.TransactionsCommand.printRow@POLYN318954[00929] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "136",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN373594.x",
      "_method" : "---java.io.PrintStream.print@POLYN368806 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN368806.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN373594[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.agent.Agent.exec@POLYN195170.\"Unable to create the task controller.\"",
      "_method" : "---java.io.PrintStream.println@POLYN373594 in line [00171]",
      "_target" : "java.io.PrintStream.println@POLYN373594.x",
      "_risk" : "//QC-JAVCWE099[00171] In org.apache.kafka.trogdor.agent.Agent.exec@POLYN195170[00171] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "137",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN373594.x",
      "_method" : "---java.io.PrintStream.print@POLYN368806 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN368806.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN373594[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.agent.Agent.exec@POLYN195170.\"createWorker failed\"",
      "_method" : "---java.io.PrintStream.println@POLYN373594 in line [00186]",
      "_target" : "java.io.PrintStream.println@POLYN373594.x",
      "_risk" : "//QC-JAVCWE099[00186] In org.apache.kafka.trogdor.agent.Agent.exec@POLYN195170[00186] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "138",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN376761.x",
      "_method" : "---java.io.PrintStream.print@POLYN372312 in line [00806]",
      "_target" : "java.io.PrintStream.println@POLYN376761.cibledummy_00806",
      "_risk" : "//QC-JAVCWE099[00806] In java.io.PrintStream.println@POLYN376761[00806] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN160830.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN376761 in line [00067]",
      "_target" : "java.io.PrintStream.println@POLYN376761.x",
      "_risk" : "//QC-JAVCWE099[00067] In org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN160830[00067] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "139",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN376761.x",
      "_method" : "---java.io.PrintStream.print@POLYN372312 in line [00806]",
      "_target" : "java.io.PrintStream.println@POLYN376761.cibledummy_00806",
      "_risk" : "//QC-JAVCWE099[00806] In java.io.PrintStream.println@POLYN376761[00806] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN170464.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN376761 in line [00081]",
      "_target" : "java.io.PrintStream.println@POLYN376761.x",
      "_risk" : "//QC-JAVCWE099[00081] In org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN170464[00081] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "140",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.append@POLYN368723.\"null\"",
      "_method" : "---java.io.PrintWriter.write@POLYN348758 in line [01002]",
      "_target" : "java.io.PrintWriter.write@POLYN348758.c",
      "_risk" : "//QC-JAVCWZ099[01002] In java.io.PrintWriter.append@POLYN368723[01002] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.write@POLYN348758.c",
      "_method" : "---java.io.Writer.write@POLYN197288 in line [00405]",
      "_target" : "java.io.Writer.write@POLYN197288.c",
      "_risk" : "//QC-JAVCWZ099[00405] In java.io.PrintWriter.write@POLYN348758[00405] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "141",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN352577.c",
      "_method" : "---java.io.PrintWriter.print@POLYN352577.dummymethode_00517 in line [00517]",
      "_target" : "java.io.PrintWriter.print@POLYN352577.cibledummy_00517",
      "_risk" : "//QC-JAVCWZ099[00517] In java.io.PrintWriter.print@POLYN352577[00517] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN357289.x",
      "_method" : "---java.io.PrintWriter.print@POLYN352577 in line [00655]",
      "_target" : "java.io.PrintWriter.print@POLYN352577.c",
      "_risk" : "//QC-JAVCWZ099[00655] In java.io.PrintWriter.println@POLYN357289[00655] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "142",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.newLine@POLYN351240.lineSeparator",
      "_method" : "---java.io.Writer.write@POLYN198588 in line [00480]",
      "_target" : "java.io.Writer.write@POLYN198588.str",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintWriter.newLine@POLYN351240[00480] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN198588.str",
      "_method" : "---java.io.Writer.write@POLYN199181 in line [00157]",
      "_target" : "java.io.Writer.write@POLYN198588.cibledummy_00157",
      "_risk" : "//QC-JAVCWZ099[00157] In java.io.Writer.write@POLYN198588[00157] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "143",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Writer.write@POLYN198588.str",
      "_method" : "---java.io.Writer.write@POLYN199181 in line [00157]",
      "_target" : "java.io.Writer.write@POLYN198588.cibledummy_00157",
      "_risk" : "//QC-JAVCWZ099[00157] In java.io.Writer.write@POLYN198588[00157] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.message.CodeBuffer.write@POLYN155482.line",
      "_method" : "---java.io.Writer.write@POLYN198588 in line [00050]",
      "_target" : "java.io.Writer.write@POLYN198588.str",
      "_risk" : "//QC-JAVCWE099[00050] In org.apache.kafka.message.CodeBuffer.write@POLYN155482[00050] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "144",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.write@POLYN350370.off",
      "_method" : "---java.io.Writer.write@POLYN199181 in line [00456]",
      "_target" : "java.io.Writer.write@POLYN199181.off",
      "_risk" : "//QC-JAVCWZ099[00456] In java.io.PrintWriter.write@POLYN350370[00456] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN199181.off",
      "_method" : "---java.io.Writer.write@POLYN199181.dummymethode_00191 in line [00191]",
      "_target" : "java.io.Writer.write@POLYN199181.cibledummy_00191",
      "_risk" : "//QC-JAVCWZ099[00191] In java.io.Writer.write@POLYN199181[00191] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "145",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "50",
      "_method" : "---java.net.ServerSocket.ServerSocket@POLYN315889.dummymethode_00218 in line [00218]",
      "_target" : "java.net.ServerSocket.ServerSocket@POLYN315889.backlog",
      "_risk" : "//QC-JAVCWE099[00218] In java.net.ServerSocket.ServerSocket@POLYN315889[00218] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.ServerSocket@POLYN315889.backlog",
      "_method" : "---java.net.ServerSocket.bind@POLYN320354 in line [00220]",
      "_target" : "java.net.ServerSocket.ServerSocket@POLYN315889.cibledummy_00220",
      "_risk" : "//QC-JAVCWE099[00220] In java.net.ServerSocket.ServerSocket@POLYN315889[00220] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "146",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.ServerSocket.getImpl@POLYN316972.return",
      "_method" : "---java.net.ServerSocket.getImpl@POLYN316972 in line [00356]",
      "_target" : "java.net.ServerSocket.bind@POLYN320354.cibledummy_00356",
      "_risk" : "//QC-JAVCWZ099[00356] In java.net.ServerSocket.bind@POLYN320354[00356] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.impl",
      "_method" : "---java.net.ServerSocket.getImpl@POLYN316972.dummymethode_00241 in line [00241]",
      "_target" : "java.net.ServerSocket.getImpl@POLYN316972.return",
      "_risk" : "//QC-JAVCWZ099[00241] In java.net.ServerSocket.getImpl@POLYN316972[00241] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "147",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "true",
      "_method" : "---java.net.ServerSocket.close@POLYN327731.dummymethode_00542 in line [00542]",
      "_target" : "java.net.ServerSocket.closed",
      "_risk" : "//QC-JAVCWE099[00542] In java.net.ServerSocket.close@POLYN327731[00542] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.closed",
      "_method" : "---java.net.ServerSocket.isClosed@POLYN328841.dummymethode_00585 in line [00585]",
      "_target" : "java.net.ServerSocket.isClosed@POLYN328841.return",
      "_risk" : "//QC-JAVCWE099[00585] In java.net.ServerSocket.isClosed@POLYN328841[00585] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "148",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.Socket@POLYN475395.address",
      "_method" : "---java.net.Socket.connect@POLYN479174 in line [00415]",
      "_target" : "java.net.Socket.connect@POLYN479174.endpoint",
      "_risk" : "//QC-JAVCWZ099[00415] In java.net.Socket.Socket@POLYN475395[00415] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.connect@POLYN479174.endpoint",
      "_method" : "---java.net.Socket.connect@POLYN479824 in line [00518]",
      "_target" : "java.net.Socket.connect@POLYN479174.cibledummy_00518",
      "_risk" : "//QC-JAVCWZ099[00518] In java.net.Socket.connect@POLYN479174[00518] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "149",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.connect@POLYN479174.0",
      "_method" : "---java.net.Socket.connect@POLYN479824 in line [00518]",
      "_target" : "java.net.Socket.connect@POLYN479824.timeout",
      "_risk" : "//QC-JAVCWZ099[00518] In java.net.Socket.connect@POLYN479174[00518] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.connect@POLYN479824.timeout",
      "_method" : "---java.net.Socket.connect@POLYN479824 in line [00568]",
      "_target" : "java.net.Socket.connect@POLYN479824.cibledummy_00568",
      "_risk" : "//QC-JAVCWZ099[00568] In java.net.Socket.connect@POLYN479824[00568] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "150",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.Socket@POLYN475395.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN476325 in line [00411]",
      "_target" : "java.net.Socket.createImpl@POLYN476325.stream",
      "_risk" : "//QC-JAVCWZ099[00411] In java.net.Socket.Socket@POLYN475395[00411] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.createImpl@POLYN476325.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN476325.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN476325.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN476325[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "151",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.connect@POLYN479824.true",
      "_method" : "---java.net.Socket.createImpl@POLYN476325 in line [00566]",
      "_target" : "java.net.Socket.createImpl@POLYN476325.stream",
      "_risk" : "//QC-JAVCWZ099[00566] In java.net.Socket.connect@POLYN479824[00566] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.createImpl@POLYN476325.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN476325.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN476325.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN476325[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "152",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.createImpl@POLYN476325.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN476325.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN476325.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN476325[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.getImpl@POLYN478656.true",
      "_method" : "---java.net.Socket.createImpl@POLYN476325 in line [00500]",
      "_target" : "java.net.Socket.createImpl@POLYN476325.stream",
      "_risk" : "//QC-JAVCWZ099[00500] In java.net.Socket.getImpl@POLYN478656[00500] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "153",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN253596.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN253596.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN253596[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.body",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.dummymethode_00578 in line [00578]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_risk" : "//QC-JAVCWE080[00578] In org.springframework.http.ResponseEntity.DefaultBuilder[00578] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "154",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN253596.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN253596.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN253596[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this.headers",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.dummymethode_00578 in line [00578]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_risk" : "//QC-JAVCWE080[00578] In org.springframework.http.ResponseEntity.DefaultBuilder[00578] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "155",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN253596.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN253596.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN253596[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this.statusCode",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.dummymethode_00578 in line [00578]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_risk" : "//QC-JAVCWE080[00578] In org.springframework.http.ResponseEntity.DefaultBuilder[00578] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "156",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN294957.return",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN294957 in line [00215]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.filterTo@POLYN273988.info",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN316634.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN318855 in line [00717]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN318855.offset",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN302950.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN316634 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN316634.offset",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305539.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN302950 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN302950.offset",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN306582.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305539 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305539.offset",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.lastOffset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN294957.dummymethode_00259 in line [00259]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN294957.shallowOffsetOfMaxTimestamp",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN294957.shallowOffsetOfMaxTimestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN294957.dummymethode_00262 in line [00262]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN294957.return",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN318855.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN318855.dummymethode_00751 in line [00751]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.lastOffset",
      "_risk" : ""
    } ]
  }, {
    "_id" : "157",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893299.b",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.b",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN880383 in line [03031]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.nread",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.b",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN880383 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.b",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN916639.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.b",
      "_method" : "---java.io.InputStream.read@POLYN253038 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN880383[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "158",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN880383 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.nread",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.b",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN880383 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.b",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN916639.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.b",
      "_method" : "---java.io.InputStream.read@POLYN253038 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN880383[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.read@POLYN811822.buf",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.b",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN811822[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "159",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893299.len",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.len",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN880383 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.nread",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.len",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN880383 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.len",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN916639.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.len",
      "_method" : "---java.io.InputStream.read@POLYN253038 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN880383[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "160",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN880383 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.nread",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.len",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN880383 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.len",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN916639.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.len",
      "_method" : "---java.io.InputStream.read@POLYN253038 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN880383[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.read@POLYN811822.len",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.len",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN811822[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "161",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN893299.off",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN880383 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.nread",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.off",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN880383 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.off",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN916639.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.off",
      "_method" : "---java.io.InputStream.read@POLYN253038 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN880383[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "162",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN880383 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.nread",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.off",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN880383 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.off",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN916639.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.off",
      "_method" : "---java.io.InputStream.read@POLYN253038 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN880383[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN880383.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.read@POLYN811822.off",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN896784.off",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN811822[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "163",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN316634.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN318855 in line [00717]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN318855.timestamp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN302950.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN316634 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN316634.timestamp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305539.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN302950 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN302950.timestamp",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN306582.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305539 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305539.timestamp",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN318855.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN318855.dummymethode_00754 in line [00754]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.maxTimestamp",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.maxTimestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.writeDefaultBatchHeader@POLYN300394.dummymethode_00400 in line [00400]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeDefaultBatchHeader@POLYN300394.maxTimestamp",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeDefaultBatchHeader@POLYN300394.maxTimestamp",
      "_method" : "---org.apache.kafka.common.record.DefaultRecordBatch.writeHeader@POLYN277495 in line [00402]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeDefaultBatchHeader@POLYN300394.cibledummy_00402",
      "_risk" : ""
    } ]
  }, {
    "_id" : "164",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN247679.return",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN247679 in line [00372]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN247024.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN252205.return",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN252205 in line [00406]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN247679.keySize",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN247679.skipBuffer",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN252205 in line [00421]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN252205.buffer",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN247679.keySize",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN247679.dummymethode_00428 in line [00428]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN247679.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN252205.buffer",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.readVarint@POLYN230578 in line [00473]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN252205.sizeInBytes",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN252205.sizeInBytes",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN252205.dummymethode_00475 in line [00475]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN252205.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "165",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN205847.struct",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN205847.dummymethode_00001 in line [00001]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN205847.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.InputStream.read@POLYN248075.return",
      "_method" : "---java.io.InputStream.read@POLYN248075 in line [00001]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN205847.struct",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN205847[00001] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.assignmentSnapshot",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN239615.dummymethode_00170 in line [00170]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN239615.localAssignmentSnapshot",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN239615.localAssignmentSnapshot",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN239615.dummymethode_00171 in line [00171]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN239615.workerState",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN205847.return",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN205847 in line [00186]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.onJoinComplete@POLYN240495.newAssignment",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.onJoinComplete@POLYN240495.newAssignment",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.onJoinComplete@POLYN240495.dummymethode_00209 in line [00209]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.assignmentSnapshot",
      "_risk" : ""
    } ]
  }, {
    "_id" : "166",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN916639.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN916639 in line [03183]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN905358.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.toString@POLYN242946.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN242946 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN916639.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN818305.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN818305 in line [01751]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN841415.ifaces[i]",
      "_risk" : "//QC-JAVCWZ099[01751] In java.io.ObjectInputStream.readProxyDesc@POLYN841415[01751] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN905358.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN905358 in line [01124]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN818305.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.lang.StringBuilder.toString@POLYN242946.0",
      "_method" : "---java.lang.StringBuilder.toString@POLYN242946.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN242946.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "167",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN916639.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN916639 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN905358.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.toString@POLYN242946.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN242946 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN916639.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN818305.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN818305 in line [01751]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN841415.ifaces[i]",
      "_risk" : "//QC-JAVCWZ099[01751] In java.io.ObjectInputStream.readProxyDesc@POLYN841415[01751] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN905358.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN905358 in line [00001]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN818305.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.lang.StringBuilder.toString@POLYN242946.count",
      "_method" : "---java.lang.StringBuilder.toString@POLYN242946.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN242946.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "168",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN916639.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN916639 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN905358.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.toString@POLYN242946.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN242946 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN916639.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN818305.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN818305 in line [01751]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN841415.ifaces[i]",
      "_risk" : "//QC-JAVCWZ099[01751] In java.io.ObjectInputStream.readProxyDesc@POLYN841415[01751] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN905358.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN905358 in line [00001]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN818305.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.lang.StringBuilder.toString@POLYN242946.value",
      "_method" : "---java.lang.StringBuilder.toString@POLYN242946.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN242946.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "169",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "3",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN639669.dummymethode_02146 in line [02146]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN639669.utflen",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN639669.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN639669.dummymethode_02153 in line [02153]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN639669.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN642150.utflen",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN579761 in line [02188]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN642150.cibledummy_02188",
      "_risk" : "//QC-JAVCWE099[02188] In java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN642150[02188] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN639669.return",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN639669 in line [01303]",
      "_target" : "java.io.ObjectOutputStream.writeString@POLYN598693.utflen",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN598693.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN642150 in line [01309]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN642150.utflen",
      "_risk" : ""
    } ]
  }, {
    "_id" : "170",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "2",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN639669.dummymethode_02148 in line [02148]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN639669.utflen",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN639669.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN639669.dummymethode_02153 in line [02153]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN639669.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN642150.utflen",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN579761 in line [02188]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN642150.cibledummy_02188",
      "_risk" : "//QC-JAVCWE099[02188] In java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN642150[02188] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN639669.return",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN639669 in line [01303]",
      "_target" : "java.io.ObjectOutputStream.writeString@POLYN598693.utflen",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN598693.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN642150 in line [00001]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN642150.utflen",
      "_risk" : ""
    } ]
  }, {
    "_id" : "171",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN249831.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN251377 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN251377.magic",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN251377.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN252723 in line [00428]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252723.magic",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252723.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN252723.dummymethode_00462 in line [00462]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252723.cibledummy_00462",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN248744.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN249831 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN249831.magic",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN301831.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN248744 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN248744.magic",
      "_risk" : ""
    } ]
  }, {
    "_id" : "172",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN187985.position",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN461029 in line [00215]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN461029.position",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN462297.position",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN462297.dummymethode_01114 in line [01114]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN462297.currentPosition",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN462297.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN253038 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN253038.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN462297[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN461029.position",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN462297 in line [01090]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN462297.position",
      "_risk" : ""
    } ]
  }, {
    "_id" : "173",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN149372.return",
      "_method" : "---org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN149372 in line [00391]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN247679.bytesRemaining",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN247679.bytesRemaining",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN252205 in line [00421]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN252205.bytesRemaining",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN252205.bytesRemaining",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readMore@POLYN253842 in line [00465]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN253842.bytesRemaining",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN149372.value",
      "_method" : "---org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN149372.dummymethode_00026 in line [00026]",
      "_target" : "org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN149372.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "174",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN187629.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN187629 in line [00134]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.checksum@POLYN185241.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.fullBatch",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN187629.dummymethode_00203 in line [00203]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN187629.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.toMemoryRecordBatch@POLYN187175.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.toMemoryRecordBatch@POLYN187175 in line [00217]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN187985.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN187985.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN187985 in line [00196]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.fullBatch",
      "_risk" : ""
    } ]
  }, {
    "_id" : "175",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN187629.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN187629 in line [00124]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.compressionType@POLYN184977.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.fullBatch",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN187629.dummymethode_00203 in line [00203]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN187629.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN187985.buffer",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.toMemoryRecordBatch@POLYN187175 in line [00217]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN187985.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN187985.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN187985 in line [00001]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.fullBatch",
      "_risk" : ""
    } ]
  }, {
    "_id" : "176",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN270838.return",
      "_method" : "---org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN270838 in line [00188]",
      "_target" : "org.apache.kafka.common.record.FileRecords.append@POLYN243000.written",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileRecords.append@POLYN243000.written",
      "_method" : "---org.apache.kafka.common.record.FileRecords.append@POLYN243000.dummymethode_00189 in line [00189]",
      "_target" : "org.apache.kafka.common.record.FileRecords.append@POLYN243000.cibledummy_00189",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN270838.buffer",
      "_method" : "---java.io.FileOutputStream.write@POLYN239226 in line [00092]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN270838.written",
      "_risk" : "//QC-JAVCWE099[00092] In org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN270838[00092] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN270838.written",
      "_method" : "---org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN270838.dummymethode_00094 in line [00094]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN270838.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "177",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN270838.return",
      "_method" : "---org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN270838 in line [00001]",
      "_target" : "org.apache.kafka.common.record.FileRecords.append@POLYN243000.written",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileRecords.append@POLYN243000.written",
      "_method" : "---org.apache.kafka.common.record.FileRecords.append@POLYN243000.dummymethode_00189 in line [00189]",
      "_target" : "org.apache.kafka.common.record.FileRecords.append@POLYN243000.cibledummy_00189",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN270838.sourcedummy",
      "_method" : "---java.io.FileOutputStream.write@POLYN239226 in line [00092]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN270838.written",
      "_risk" : "//QC-JAVCWE099[00092] In org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN270838[00092] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN270838.written",
      "_method" : "---org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN270838.dummymethode_00094 in line [00094]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN270838.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "178",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN249831.key",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN251377 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN251377.key",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN251377.key",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN252723 in line [00428]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252723.key",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252723.key",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN252723.dummymethode_00476 in line [00476]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252723.cibledummy_00476",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN248744.null",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN249831 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN249831.key",
      "_risk" : ""
    } ]
  }, {
    "_id" : "179",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN249831.newByteBufferOutputStream(buffer)",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN249831.dummymethode_00389 in line [00389]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN249831.out",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN249831.out",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN251377 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN251377.out",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN251377.out",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN252723 in line [00428]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252723.out",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252723.out",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN252723.dummymethode_00476 in line [00476]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252723.cibledummy_00476",
      "_risk" : ""
    } ]
  }, {
    "_id" : "180",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN248744.buffer",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN249831 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN249831.buffer",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN168799.return",
      "_method" : "---org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN168799 in line [00416]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN301831.buffer",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN301831.buffer",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN248744 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN248744.buffer",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN168799.buffer",
      "_method" : "---org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN168799.dummymethode_00080 in line [00080]",
      "_target" : "org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN168799.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "181",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileRecords.channel@POLYN239316.return",
      "_method" : "---org.apache.kafka.common.record.FileRecords.channel@POLYN239316 in line [00212]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN187985.channel",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN187985.channel",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN461029 in line [00215]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN461029.channel",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.FileRecords.channel@POLYN239316.channel",
      "_method" : "---org.apache.kafka.common.record.FileRecords.channel@POLYN239316.dummymethode_00107 in line [00107]",
      "_target" : "org.apache.kafka.common.record.FileRecords.channel@POLYN239316.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN461029.channel",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN462297 in line [01090]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN461029.cibledummy_01090",
      "_risk" : ""
    } ]
  }, {
    "_id" : "182",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.append@POLYN630995.records",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN222389 in line [02274]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN222389.records",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.scheduleAppend@POLYN630519.records",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.append@POLYN630995 in line [02255]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.append@POLYN630995.records",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN222389.records",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN223399 in line [00112]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN223399.records",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN223399.records",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN223399.dummymethode_00152 in line [00152]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN223399.batch",
      "_risk" : ""
    } ]
  }, {
    "_id" : "183",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.append@POLYN630995.records",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN222389 in line [00001]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN222389.records",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.scheduleAtomicAppend@POLYN630764.records",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.append@POLYN630995 in line [02260]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.append@POLYN630995.records",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN222389.records",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN223399 in line [00001]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN223399.records",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN223399.records",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN223399.dummymethode_00152 in line [00152]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN223399.batch",
      "_risk" : ""
    } ]
  }, {
    "_id" : "184",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFully@POLYN816229.buf",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN899003 in line [01067]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN899003.b",
      "_risk" : "//QC-JAVCWE099[01067] In java.io.ObjectInputStream.readFully@POLYN816229[01067] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN160945.arr",
      "_method" : "---java.io.ObjectInputStream.readFully@POLYN816229 in line [00081]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN816229.buf",
      "_risk" : "//QC-JAVCWE099[00081] In org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN160945[00081] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.protocol.DataInputStreamReadable.readByteBuffer@POLYN161524.arr",
      "_method" : "---org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN160945 in line [00099]",
      "_target" : "org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN160945.arr",
      "_risk" : ""
    } ]
  }, {
    "_id" : "185",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN247024.input",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN247679 in line [00372]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN247679.input",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN247679.input",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN252205 in line [00421]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN252205.input",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN252205.input",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readMore@POLYN253842 in line [00465]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN253842.input",
      "_risk" : ""
    } ]
  }, {
    "_id" : "186",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN249831.compressionType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN251377 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN251377.compressionType",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN248744.compressionType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN249831 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN249831.compressionType",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN301831.compressionType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN248744 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN248744.compressionType",
      "_risk" : ""
    } ]
  }, {
    "_id" : "187",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN249831.timestampType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN251377 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN251377.timestampType",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN248744.timestampType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN249831 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN249831.timestampType",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN301831.timestampType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN248744 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN248744.timestampType",
      "_risk" : ""
    } ]
  }, {
    "_id" : "188",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN302950.headers",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN316634 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN316634.headers",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305539.headers",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN302950 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN302950.headers",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN306582.Record.EMPTY_HEADERS",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305539 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305539.headers",
      "_risk" : ""
    } ]
  }, {
    "_id" : "189",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN302950.key",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN316634 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN316634.key",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305539.key",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN302950 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN302950.key",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN306582.key",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305539 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305539.key",
      "_risk" : ""
    } ]
  }, {
    "_id" : "190",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN302950.value",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN316634 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN316634.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305539.value",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN302950 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN302950.value",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN306582.value",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305539 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305539.value",
      "_risk" : ""
    } ]
  }, {
    "_id" : "191",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN317379.sourcedummy",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN252723 in line [00730]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN317379.crc",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN317379.crc",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN317379.dummymethode_00732 in line [00732]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN317379.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN317379.return",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN317379 in line [00456]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN302950.cibledummy_00456",
      "_risk" : ""
    } ]
  }, {
    "_id" : "192",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN173524.null",
      "_method" : "---org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN173524.dummymethode_00110 in line [00110]",
      "_target" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN173524.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN173524.return",
      "_method" : "---org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN173524 in line [00119]",
      "_target" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN173524.size",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN173524.size",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN579481 in line [00120]",
      "_target" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN173524.cibledummy_00120",
      "_risk" : "//QC-JAVCWE099[00120] In org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN173524[00120] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "193",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.append@POLYN630995.epoch",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN222389 in line [02274]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN222389.epoch",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.scheduleAppend@POLYN630519.epoch",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.append@POLYN630995 in line [02255]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.append@POLYN630995.epoch",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN222389.epoch",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN223399 in line [00112]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN223399.epoch",
      "_risk" : ""
    } ]
  }, {
    "_id" : "194",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.append@POLYN630995.epoch",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN222389 in line [00001]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN222389.epoch",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.scheduleAtomicAppend@POLYN630764.epoch",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.append@POLYN630995 in line [02260]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.append@POLYN630995.epoch",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN222389.epoch",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN223399 in line [00001]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN223399.epoch",
      "_risk" : ""
    } ]
  }, {
    "_id" : "195",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readBoolean@POLYN813510.return",
      "_method" : "---java.io.ObjectInputStream.readBoolean@POLYN813510 in line [03208]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readBooleans@POLYN905792.v[off++]",
      "_risk" : "//QC-JAVCWZ099[03208] In java.io.ObjectInputStream.BlockDataInputStream.readBooleans@POLYN905792[03208] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readBoolean@POLYN899792.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readBoolean@POLYN899792 in line [00957]",
      "_target" : "java.io.ObjectInputStream.readBoolean@POLYN813510.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "196",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFully@POLYN816701.buf",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN899003 in line [01084]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN816701.cibledummy_01084",
      "_risk" : "//QC-JAVCWE099[01084] In java.io.ObjectInputStream.readFully@POLYN816701[01084] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN253842.array",
      "_method" : "---java.io.ObjectInputStream.readFully@POLYN816701 in line [00507]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN816701.buf",
      "_risk" : "//QC-JAVCWE099[00507] In org.apache.kafka.common.record.DefaultRecord.readMore@POLYN253842[00507] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "197",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFully@POLYN816701.len",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN899003 in line [01084]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN816701.cibledummy_01084",
      "_risk" : "//QC-JAVCWE099[01084] In java.io.ObjectInputStream.readFully@POLYN816701[01084] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN253842.bytesRead",
      "_method" : "---java.io.ObjectInputStream.readFully@POLYN816701 in line [00507]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN816701.len",
      "_risk" : "//QC-JAVCWE099[00507] In org.apache.kafka.common.record.DefaultRecord.readMore@POLYN253842[00507] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "198",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFully@POLYN816701.off",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN899003 in line [01084]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN816701.cibledummy_01084",
      "_risk" : "//QC-JAVCWE099[01084] In java.io.ObjectInputStream.readFully@POLYN816701[01084] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN253842.bytesToLeftShift",
      "_method" : "---java.io.ObjectInputStream.readFully@POLYN816701 in line [00507]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN816701.off",
      "_risk" : "//QC-JAVCWE099[00507] In org.apache.kafka.common.record.DefaultRecord.readMore@POLYN253842[00507] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "199",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN622356.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294 in line [01814]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.off",
      "_method" : "---java.io.OutputStream.write@POLYN185188 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN185188.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "200",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN622578.off",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294 in line [01818]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.off",
      "_method" : "---java.io.OutputStream.write@POLYN185188 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN185188.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "201",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.off",
      "_method" : "---java.io.OutputStream.write@POLYN185188 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN185188.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.writeFields@POLYN617910.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294 in line [01695]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "202",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.off",
      "_method" : "---java.io.OutputStream.write@POLYN185188 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN185188.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN609721.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294 in line [01534]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "203",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.off",
      "_method" : "---java.io.OutputStream.write@POLYN185188 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN185188.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN576255.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294 in line [00690]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "204",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.off",
      "_method" : "---java.io.OutputStream.write@POLYN185188 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN185188.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN576673.off",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "205",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.off",
      "_method" : "---java.io.OutputStream.write@POLYN185188 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN185188.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN599470.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294 in line [01334]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "206",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN622356.b",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294 in line [01814]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.b",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.b",
      "_method" : "---java.io.OutputStream.write@POLYN185188 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "207",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN622578.b",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294 in line [01818]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.b",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.b",
      "_method" : "---java.io.OutputStream.write@POLYN185188 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "208",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.b",
      "_method" : "---java.io.OutputStream.write@POLYN185188 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.writeFields@POLYN617910.primVals",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294 in line [01695]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "209",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.b",
      "_method" : "---java.io.OutputStream.write@POLYN185188 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN609721.primVals",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294 in line [01534]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "210",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.b",
      "_method" : "---java.io.OutputStream.write@POLYN185188 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN576255.buf",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294 in line [00690]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "211",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.b",
      "_method" : "---java.io.OutputStream.write@POLYN185188 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN576673.buf",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "212",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.b",
      "_method" : "---java.io.OutputStream.write@POLYN185188 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN599470.ba",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294 in line [01334]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "213",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN622356.b.length",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294 in line [01814]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.len",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.len",
      "_method" : "---java.io.OutputStream.write@POLYN185188 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "214",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN622578.len",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294 in line [01818]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.len",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.len",
      "_method" : "---java.io.OutputStream.write@POLYN185188 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "215",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.len",
      "_method" : "---java.io.OutputStream.write@POLYN185188 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.writeFields@POLYN617910.primVals.length",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294 in line [01695]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "216",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.len",
      "_method" : "---java.io.OutputStream.write@POLYN185188 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN609721.primDataSize",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294 in line [01534]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "217",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.len",
      "_method" : "---java.io.OutputStream.write@POLYN185188 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN576255.buf.length",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294 in line [00690]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "218",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.len",
      "_method" : "---java.io.OutputStream.write@POLYN185188 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN576673.len",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN623294.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "219",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN355083.s",
      "_method" : "---java.io.PrintWriter.write@POLYN350056 in line [00587]",
      "_target" : "java.io.PrintWriter.print@POLYN355083.cibledummy_00587",
      "_risk" : "//QC-JAVCWZ099[00587] In java.io.PrintWriter.print@POLYN355083[00587] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN359607.x",
      "_method" : "---java.io.PrintWriter.print@POLYN355083 in line [00725]",
      "_target" : "java.io.PrintWriter.print@POLYN355083.s",
      "_risk" : "//QC-JAVCWZ099[00725] In java.io.PrintWriter.println@POLYN359607[00725] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "220",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.write@POLYN616350.objVals[i]",
      "_method" : "---java.util.HashMap.writeObject@POLYN676160 in line [01687]",
      "_target" : "java.util.HashMap.writeObject@POLYN676160.s",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.writeObject@POLYN676160.s",
      "_method" : "---java.util.HashMap.internalWriteEntries@POLYN700911 in line [01360]",
      "_target" : "java.util.HashMap.internalWriteEntries@POLYN700911.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "221",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN411219.sendBufferSize",
      "_method" : "---java.net.Socket.setSendBufferSize@POLYN500567 in line [00289]",
      "_target" : "java.net.Socket.setSendBufferSize@POLYN500567.size",
      "_risk" : "//QC-JAVCWE099[00289] In org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN411219[00289] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.network.Selector.connect@POLYN409491.sendBufferSize",
      "_method" : "---org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN411219 in line [00254]",
      "_target" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN411219.sendBufferSize",
      "_risk" : ""
    } ]
  }, {
    "_id" : "222",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN411219.receiveBufferSize",
      "_method" : "---java.net.Socket.setReceiveBufferSize@POLYN503274 in line [00291]",
      "_target" : "java.net.Socket.setReceiveBufferSize@POLYN503274.size",
      "_risk" : "//QC-JAVCWE099[00291] In org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN411219[00291] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.network.Selector.connect@POLYN409491.receiveBufferSize",
      "_method" : "---org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN411219 in line [00254]",
      "_target" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN411219.receiveBufferSize",
      "_risk" : ""
    } ]
  }, {
    "_id" : "223",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeBlock@POLYN209041.compressedLengt",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN226179 in line [00187]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN226179.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN226179.value",
      "_method" : "---java.io.OutputStream.write@POLYN183396 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN183396.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN226179[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "224",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeBlock@POLYN209041.hash",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN226179 in line [00193]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN226179.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN226179.value",
      "_method" : "---java.io.OutputStream.write@POLYN183396 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN183396.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN226179[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "225",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeEndMark@POLYN210492.0",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN226179 in line [00205]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN226179.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN226179.value",
      "_method" : "---java.io.OutputStream.write@POLYN183396 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN183396.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN226179[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "226",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN175223.records",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN223399 in line [00167]",
      "_target" : "org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN175223.cibledummy_00167",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.snapshot.RecordsSnapshotWriter.appendBatches@POLYN176354.batch.data",
      "_method" : "---org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN175223 in line [00191]",
      "_target" : "org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN175223.records",
      "_risk" : ""
    } ]
  }, {
    "_id" : "227",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN184664.return",
      "_method" : "---org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN184664 in line [00233]",
      "_target" : "org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN247935.loadedCheckpoints",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN247935.loadedCheckpoints",
      "_method" : "---org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN247935 in line [00235]",
      "_target" : "org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN247935.cibledummy_00235",
      "_risk" : ""
    } ]
  } ],
  "_lesDeadlocks" : [ {
    "_id" : "R0",
    "_libelle" : "org.apache.kafka.connect.mirror.OffsetSyncStore.this"
  }, {
    "_id" : "R1",
    "_libelle" : "org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN161361.pollTimeout"
  }, {
    "_id" : "R2",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.this"
  }, {
    "_id" : "R3",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN342591.partition"
  }, {
    "_id" : "R4",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN342591.offsetResetStrategy"
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
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN339977.tp"
  }, {
    "_id" : "R10",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN339977.highWatermark"
  }, {
    "_id" : "R11",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN340167.tp"
  }, {
    "_id" : "R12",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN340167.logStartOffset"
  }, {
    "_id" : "R13",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN340357.tp"
  }, {
    "_id" : "R14",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN340357.lastStableOffset"
  }, {
    "_id" : "R15",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.this"
  }, {
    "_id" : "R16",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN348145.tp"
  }, {
    "_id" : "R17",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN333047.tp"
  }, {
    "_id" : "R18",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN333047.position"
  }, {
    "_id" : "R19",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN325595.assignments"
  }, {
    "_id" : "R20",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadLevelSensors"
  }, {
    "_id" : "R21",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadLevelMetrics"
  }, {
    "_id" : "R22",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.this"
  }, {
    "_id" : "R23",
    "_libelle" : "org.apache.kafka.streams.processor.internals.GlobalStreamThread.this"
  }, {
    "_id" : "R24",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamThread.stateLock"
  }, {
    "_id" : "R25",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.changeThreadCount"
  }, {
    "_id" : "R26",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.stateLock"
  }, {
    "_id" : "R27",
    "_libelle" : "org.apache.kafka.streams.KafkaStreams.threads"
  }, {
    "_id" : "R28",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.this"
  }, {
    "_id" : "R29",
    "_libelle" : "org.apache.kafka.connect.runtime.distributed.DistributedHerder.this"
  }, {
    "_id" : "R30",
    "_libelle" : "org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN582214.request"
  }, {
    "_id" : "R31",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerConnector.this"
  }, {
    "_id" : "R32",
    "_libelle" : "org.apache.kafka.connect.runtime.Worker.this"
  }, {
    "_id" : "R33",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.this"
  }, {
    "_id" : "R34",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN169287.prefix"
  }, {
    "_id" : "R35",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN169287.id"
  }, {
    "_id" : "R36",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN169287.metrics"
  }, {
    "_id" : "R37",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.this"
  }, {
    "_id" : "R38",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.consumerRecord@POLYN209341.consumedMessage"
  }, {
    "_id" : "R39",
    "_libelle" : "org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitableRecords"
  }, {
    "_id" : "R40",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN425109.isDisconnected"
  }, {
    "_id" : "R41",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN425109.cause"
  }, {
    "_id" : "R42",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.this"
  }, {
    "_id" : "R43",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN381861.exception"
  }, {
    "_id" : "R44",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN382347.exception"
  }, {
    "_id" : "R45",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN385094.tp"
  }, {
    "_id" : "R46",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN400857.e"
  }, {
    "_id" : "R47",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.this"
  }, {
    "_id" : "R48",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN168689.topic"
  }, {
    "_id" : "R49",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN168689.nowMs"
  }, {
    "_id" : "R50",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN356307.deque"
  }, {
    "_id" : "R51",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN383357.topicPartition"
  }, {
    "_id" : "R52",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN387469.topicPartition"
  }, {
    "_id" : "R53",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN387469.increment"
  }, {
    "_id" : "R54",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.updateEstimation@POLYN162322.compressionRatioForTopic"
  }, {
    "_id" : "R55",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN392474.batch"
  }, {
    "_id" : "R56",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN392474.exception"
  }, {
    "_id" : "R57",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN392474.adjustSequenceNumbers"
  }, {
    "_id" : "R58",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN391879.exception"
  }, {
    "_id" : "R59",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN389292.batch"
  }, {
    "_id" : "R60",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN396241.batch"
  }, {
    "_id" : "R61",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.unsent"
  }, {
    "_id" : "R62",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN170732.lastVersion"
  }, {
    "_id" : "R63",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN170732.timeoutMs"
  }, {
    "_id" : "R64",
    "_libelle" : "org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN269851.topic"
  }, {
    "_id" : "R65",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN332119.dq"
  }, {
    "_id" : "R66",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.this"
  }, {
    "_id" : "R67",
    "_libelle" : "org.apache.kafka.clients.producer.internals.IncompleteBatches.incomplete"
  }, {
    "_id" : "R68",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN379538.topicPartition"
  }, {
    "_id" : "R69",
    "_libelle" : "org.apache.kafka.clients.admin.KafkaAdminClient.this"
  }, {
    "_id" : "R70",
    "_libelle" : "org.apache.kafka.clients.Metadata.bootstrap@POLYN258893.addresses"
  }, {
    "_id" : "R71",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN168503.prefix"
  }, {
    "_id" : "R72",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN168503.id"
  }, {
    "_id" : "R73",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN168503.metrics"
  }, {
    "_id" : "R74",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN168503.nowMs"
  }, {
    "_id" : "R75",
    "_libelle" : "org.apache.kafka.streams.processor.internals.GlobalStreamThread.stateLock"
  }, {
    "_id" : "R76",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.this"
  }, {
    "_id" : "R77",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN281154.connector"
  }, {
    "_id" : "R78",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN282468.id"
  }, {
    "_id" : "R79",
    "_libelle" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.lock"
  }, {
    "_id" : "R80",
    "_libelle" : "java.io.PrintStream.this"
  }, {
    "_id" : "R81",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.this"
  }, {
    "_id" : "R82",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.this"
  }, {
    "_id" : "R83",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.remove@POLYN156301.nodeId"
  }, {
    "_id" : "R84",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.update@POLYN156029.nodeId"
  }, {
    "_id" : "R85",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.update@POLYN156029.nodeApiVersions"
  }, {
    "_id" : "R86",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN259285.response"
  }, {
    "_id" : "R87",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN259285.isPartialUpdate"
  }, {
    "_id" : "R88",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN259285.nowMs"
  }, {
    "_id" : "R89",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN259859.requestVersion"
  }, {
    "_id" : "R90",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN259859.response"
  }, {
    "_id" : "R91",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN259859.isPartialUpdate"
  }, {
    "_id" : "R92",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN259859.nowMs"
  }, {
    "_id" : "R93",
    "_libelle" : "org.apache.kafka.common.requests.MetadataResponse.data"
  }, {
    "_id" : "R94",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN424755.error"
  }, {
    "_id" : "R95",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN235653.connName"
  }, {
    "_id" : "R96",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN400679.request"
  }, {
    "_id" : "R97",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN233773.connName"
  }, {
    "_id" : "R98",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN233773.config"
  }, {
    "_id" : "R99",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN233773.allowReplace"
  }, {
    "_id" : "R100",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN233773.callback"
  }, {
    "_id" : "R101",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN233773.configInfos"
  }, {
    "_id" : "R102",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN231792.connName"
  }, {
    "_id" : "R103",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN231792.callback"
  }, {
    "_id" : "R104",
    "_libelle" : "org.apache.kafka.common.security.oauthbearer.internals.expiring.ExpiringCredentialRefreshingLogin.mandatoryClassToSynchronizeOnPriorToRefresh"
  }, {
    "_id" : "R105",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN240112.request"
  }, {
    "_id" : "R106",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN240112.cb"
  }, {
    "_id" : "R107",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN237490.taskId"
  }, {
    "_id" : "R108",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN237490.cb"
  }, {
    "_id" : "R109",
    "_libelle" : "java.lang.Throwable.this"
  }, {
    "_id" : "R110",
    "_libelle" : "java.lang.Throwable.addSuppressed@POLYN395637.exception"
  }, {
    "_id" : "R111",
    "_libelle" : "java.io.BufferedOutputStream.this"
  }, {
    "_id" : "R112",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN167624.b"
  }, {
    "_id" : "R113",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN167624.off"
  }, {
    "_id" : "R114",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN167624.len"
  }, {
    "_id" : "R115",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN266062.cleanupDelayMs"
  }, {
    "_id" : "R116",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN263055.taskId"
  }, {
    "_id" : "R117",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.this"
  }, {
    "_id" : "R118",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN201035.key"
  }, {
    "_id" : "R119",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN201035.value"
  }, {
    "_id" : "R120",
    "_libelle" : "org.apache.kafka.tools.ThroughputThrottler.this"
  }, {
    "_id" : "R121",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.taskLevelSensors"
  }, {
    "_id" : "R122",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.nodeLevelSensors"
  }, {
    "_id" : "R123",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.this"
  }, {
    "_id" : "R124",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN228748.initialTopologies"
  }, {
    "_id" : "R125",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.this"
  }, {
    "_id" : "R126",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.setStreamsConfig@POLYN493931.applicationConfig"
  }, {
    "_id" : "R127",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN397967.now"
  }, {
    "_id" : "R128",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.this"
  }, {
    "_id" : "R129",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN197781.newCacheSizeBytes"
  }, {
    "_id" : "R130",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaConfigBackingStore.lock"
  }, {
    "_id" : "R131",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.this"
  }, {
    "_id" : "R132",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.pollTasks"
  }, {
    "_id" : "R133",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN330071.tp"
  }, {
    "_id" : "R134",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN330071.position"
  }, {
    "_id" : "R135",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN339233.tp"
  }, {
    "_id" : "R136",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN391325.batch"
  }, {
    "_id" : "R137",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN391325.response"
  }, {
    "_id" : "R138",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN428767.shortReason"
  }, {
    "_id" : "R139",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN429075.shortReason"
  }, {
    "_id" : "R140",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN429075.fullReason"
  }, {
    "_id" : "R141",
    "_libelle" : "java.io.File.this"
  }, {
    "_id" : "R142",
    "_libelle" : "java.io.File.readObject@POLYN640292.s"
  }, {
    "_id" : "R143",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN205301.entries"
  }, {
    "_id" : "R144",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN347440.tp"
  }, {
    "_id" : "R145",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN347591.tp"
  }, {
    "_id" : "R146",
    "_libelle" : "java.net.Socket.this"
  }, {
    "_id" : "R147",
    "_libelle" : "java.net.Socket.setSendBufferSize@POLYN500567.size"
  }, {
    "_id" : "R148",
    "_libelle" : "java.net.Socket.setReceiveBufferSize@POLYN503274.size"
  }, {
    "_id" : "R149",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN337662.tp"
  }, {
    "_id" : "R150",
    "_libelle" : "org.apache.kafka.trogdor.workload.RoundTripWorker.this"
  }, {
    "_id" : "R151",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.this"
  }, {
    "_id" : "R152",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN238907.connName"
  }, {
    "_id" : "R153",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN238907.cb"
  }, {
    "_id" : "R154",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.this"
  }, {
    "_id" : "R155",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN172724.reader"
  }, {
    "_id" : "R156",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.taskDirCreationLock"
  }, {
    "_id" : "R157",
    "_libelle" : "org.apache.kafka.clients.Metadata.failedUpdate@POLYN271561.now"
  }, {
    "_id" : "R158",
    "_libelle" : "java.util.Hashtable.this"
  }, {
    "_id" : "R159",
    "_libelle" : "java.util.Hashtable.putAll@POLYN436392.t"
  }, {
    "_id" : "R160",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN250051.topic"
  }, {
    "_id" : "R161",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN250051.partitions"
  }, {
    "_id" : "R162",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN248746.newOffsets"
  }, {
    "_id" : "R163",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN249170.newOffsets"
  }, {
    "_id" : "R164",
    "_libelle" : "org.apache.kafka.clients.producer.MockProducer.this"
  }, {
    "_id" : "R165",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.this"
  }, {
    "_id" : "R166",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.openIterators"
  }, {
    "_id" : "R167",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN206748.namespace"
  }, {
    "_id" : "R168",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheLevelSensors"
  }, {
    "_id" : "R169",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.splitAndReenqueue@POLYN343339.partitionDequeue"
  }, {
    "_id" : "R170",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.setEstimation@POLYN164278.compressionRatioForTopic"
  }, {
    "_id" : "R171",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.addInFlightBatch@POLYN387865.batch"
  }, {
    "_id" : "R172",
    "_libelle" : "org.apache.kafka.streams.StreamsBuilder.this"
  }, {
    "_id" : "R173",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerSourceTask.this"
  }, {
    "_id" : "R174",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromAssignment@POLYN582157.partitions"
  }, {
    "_id" : "R175",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromAssignment@POLYN582157.logPrefix"
  }, {
    "_id" : "R176",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromMetadata@POLYN582970.topics"
  }, {
    "_id" : "R177",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromMetadata@POLYN582970.logPrefix"
  }, {
    "_id" : "R178",
    "_libelle" : "java.net.ServerSocket.closeLock"
  }, {
    "_id" : "R179",
    "_libelle" : "java.net.Socket.closeLock"
  }, {
    "_id" : "R180",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.rebalance@POLYN235605.newAssignment"
  }, {
    "_id" : "R181",
    "_libelle" : "java.io.File.writeObject@POLYN639911.s"
  }, {
    "_id" : "R182",
    "_libelle" : "java.lang.Throwable.writeObject@POLYN393582.s"
  }, {
    "_id" : "R183",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.reporters@POLYN208859.reporters"
  }, {
    "_id" : "R184",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN170246.reader"
  }, {
    "_id" : "R185",
    "_libelle" : "java.net.ServerSocket.this"
  }, {
    "_id" : "R186",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN427734.reason"
  }, {
    "_id" : "R187",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN427734.shouldResetMemberId"
  }, {
    "_id" : "R188",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN427035.reason"
  }, {
    "_id" : "R189",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN427035.shouldResetMemberId"
  }, {
    "_id" : "R190",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN330662.tp"
  }, {
    "_id" : "R191",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN330662.position"
  }, {
    "_id" : "R192",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN330662.requestedResetStrategy"
  }, {
    "_id" : "R193",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.this"
  }, {
    "_id" : "R194",
    "_libelle" : "org.apache.kafka.connect.util.ConvertingFutureCallback.this"
  }, {
    "_id" : "R195",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1469065.f"
  }, {
    "_id" : "R196",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.treeifyBin@POLYN1564437.b"
  }, {
    "_id" : "R197",
    "_libelle" : "org.apache.kafka.connect.runtime.ConnectMetrics.this"
  }, {
    "_id" : "R198",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN303474.sensor"
  }, {
    "_id" : "R199",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTask.this"
  }, {
    "_id" : "R200",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN245814.partition"
  }, {
    "_id" : "R201",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN245814.offset"
  }, {
    "_id" : "R202",
    "_libelle" : "org.apache.kafka.connect.file.FileStreamSourceTask.this"
  }, {
    "_id" : "R203",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelMetrics"
  }, {
    "_id" : "R204",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.this"
  }, {
    "_id" : "R205",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN189168.key"
  }, {
    "_id" : "R206",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN189168.value"
  }, {
    "_id" : "R207",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.this"
  }, {
    "_id" : "R208",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN181291.key"
  }, {
    "_id" : "R209",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN181291.value"
  }, {
    "_id" : "R210",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN244709.offsets"
  }, {
    "_id" : "R211",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN244093.offsets"
  }, {
    "_id" : "R212",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN244093.callback"
  }, {
    "_id" : "R213",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN245434.timeout"
  }, {
    "_id" : "R214",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.pause@POLYN250326.partitions"
  }, {
    "_id" : "R215",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.resume@POLYN250648.partitions"
  }, {
    "_id" : "R216",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN424954.cause"
  }, {
    "_id" : "R217",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN428032.api"
  }, {
    "_id" : "R218",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN428032.error"
  }, {
    "_id" : "R219",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN428032.shouldResetMemberId"
  }, {
    "_id" : "R220",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN342786.partitions"
  }, {
    "_id" : "R221",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN342786.offsetResetStrategy"
  }, {
    "_id" : "R222",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN194138.key"
  }, {
    "_id" : "R223",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1505619.r"
  }, {
    "_id" : "R224",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1505619.f"
  }, {
    "_id" : "R225",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1517284.r"
  }, {
    "_id" : "R226",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1517284.f"
  }, {
    "_id" : "R227",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.merge@POLYN1524932.f"
  }, {
    "_id" : "R228",
    "_libelle" : "java.io.FileOutputStream.closeLock"
  }, {
    "_id" : "R229",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN166763.b"
  }, {
    "_id" : "R230",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN236007.topics"
  }, {
    "_id" : "R231",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN237835.topics"
  }, {
    "_id" : "R232",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN237835.listener"
  }, {
    "_id" : "R233",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN236214.pattern"
  }, {
    "_id" : "R234",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN236214.listener"
  }, {
    "_id" : "R235",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN321446.pattern"
  }, {
    "_id" : "R236",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN321446.listener"
  }, {
    "_id" : "R237",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN237649.pattern"
  }, {
    "_id" : "R238",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN340797.tp"
  }, {
    "_id" : "R239",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN340797.preferredReadReplicaId"
  }, {
    "_id" : "R240",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN340797.timeMs"
  }, {
    "_id" : "R241",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN343350.partitions"
  }, {
    "_id" : "R242",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN343350.nextAllowResetTimeMs"
  }, {
    "_id" : "R243",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN347737.partitions"
  }, {
    "_id" : "R244",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN347737.nextRetryTimeMs"
  }, {
    "_id" : "R245",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeReporter@POLYN309763.reporter"
  }, {
    "_id" : "R246",
    "_libelle" : "org.apache.kafka.common.metrics.JmxReporter.LOCK"
  }, {
    "_id" : "R247",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.sourceRecord@POLYN209112.preTransformRecord"
  }, {
    "_id" : "R248",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.this"
  }, {
    "_id" : "R249",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN167574.status"
  }, {
    "_id" : "R250",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN167195.status"
  }, {
    "_id" : "R251",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN168262.status"
  }, {
    "_id" : "R252",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN167719.status"
  }, {
    "_id" : "R253",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageReaderImpl.offsetReadFutures"
  }, {
    "_id" : "R254",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.this"
  }, {
    "_id" : "R255",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.configure@POLYN180654.configs"
  }, {
    "_id" : "R256",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.topicLevelSensors"
  }, {
    "_id" : "R257",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.NamedTopologyBuilder.this"
  }, {
    "_id" : "R258",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.setNamedTopology@POLYN494194.namedTopology"
  }, {
    "_id" : "R259",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.this"
  }, {
    "_id" : "R260",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN243262.key"
  }, {
    "_id" : "R261",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN243262.value"
  }, {
    "_id" : "R262",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN243262.windowStartTimestamp"
  }, {
    "_id" : "R263",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN264002.key"
  }, {
    "_id" : "R264",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN264002.value"
  }, {
    "_id" : "R265",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.this"
  }, {
    "_id" : "R266",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN266513.key"
  }, {
    "_id" : "R267",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN266513.value"
  }, {
    "_id" : "R268",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN266513.windowStartTimestamp"
  }, {
    "_id" : "R269",
    "_libelle" : "java.io.PipedOutputStream.this"
  }, {
    "_id" : "R270",
    "_libelle" : "java.io.PipedOutputStream.connect@POLYN177709.snk"
  }, {
    "_id" : "R271",
    "_libelle" : "java.io.PipedInputStream.this"
  }, {
    "_id" : "R272",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN226464.b"
  }, {
    "_id" : "R273",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN227571.b"
  }, {
    "_id" : "R274",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN227571.off"
  }, {
    "_id" : "R275",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN227571.len"
  }, {
    "_id" : "R276",
    "_libelle" : "java.io.PipedWriter.this"
  }, {
    "_id" : "R277",
    "_libelle" : "java.io.PipedWriter.connect@POLYN176939.snk"
  }, {
    "_id" : "R278",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoinIfNecessary@POLYN428512.shortReason"
  }, {
    "_id" : "R279",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoinIfNecessary@POLYN428512.fullReason"
  }, {
    "_id" : "R280",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.assignPartitionsLock"
  }, {
    "_id" : "R281",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.this"
  }, {
    "_id" : "R282",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.writeEntries@POLYN161675.committedOffsets"
  }, {
    "_id" : "R283",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.this"
  }, {
    "_id" : "R284",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.addStateStore@POLYN243656.builder"
  }, {
    "_id" : "R285",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.assign@POLYN238213.partitions"
  }, {
    "_id" : "R286",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.addRecord@POLYN242733.record"
  }, {
    "_id" : "R287",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setException@POLYN243684.exception"
  }, {
    "_id" : "R288",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN243815.exception"
  }, {
    "_id" : "R289",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN245040.callback"
  }, {
    "_id" : "R290",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.this"
  }, {
    "_id" : "R291",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.addTransientTopics@POLYN158268.topics"
  }, {
    "_id" : "R292",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.this"
  }, {
    "_id" : "R293",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.this"
  }, {
    "_id" : "R294",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN176137.connector"
  }, {
    "_id" : "R295",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN176137.configs"
  }, {
    "_id" : "R296",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.setAclMutator@POLYN176877.aclMutator"
  }, {
    "_id" : "R297",
    "_libelle" : "java.io.PipedReader.this"
  }, {
    "_id" : "R298",
    "_libelle" : "java.io.Writer.lock"
  }, {
    "_id" : "R299",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.this"
  }, {
    "_id" : "R300",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.write@POLYN183813.snapshot"
  }, {
    "_id" : "R301",
    "_libelle" : "org.apache.kafka.streams.state.internals.DelegatingPeekingKeyValueIterator.this"
  }, {
    "_id" : "R302",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.this"
  }, {
    "_id" : "R303",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.calculateNextWindow@POLYN166682.force"
  }, {
    "_id" : "R304",
    "_libelle" : "java.io.FileInputStream.closeLock"
  }, {
    "_id" : "R305",
    "_libelle" : "java.io.PipedReader.receive@POLYN208181.c"
  }, {
    "_id" : "R306",
    "_libelle" : "java.io.PipedReader.receive@POLYN208181.off"
  }, {
    "_id" : "R307",
    "_libelle" : "java.io.PipedReader.receive@POLYN208181.len"
  }, {
    "_id" : "R308",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.close@POLYN253354.timeout"
  }, {
    "_id" : "R309",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.metrics@POLYN208230.errorHandlingMetrics"
  }, {
    "_id" : "R310",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.this"
  }, {
    "_id" : "R311",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN172461.newState"
  }, {
    "_id" : "R312",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN172461.now"
  }, {
    "_id" : "R313",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelSensors"
  }, {
    "_id" : "R314",
    "_libelle" : "org.apache.kafka.clients.Metadata.fatalError@POLYN271821.exception"
  }, {
    "_id" : "R315",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setOffsetsException@POLYN243947.exception"
  }, {
    "_id" : "R316",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seekToBeginning@POLYN248512.partitions"
  }, {
    "_id" : "R317",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seekToEnd@POLYN248936.partitions"
  }, {
    "_id" : "R318",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN253907.task"
  }, {
    "_id" : "R319",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setLastRebalanceTime@POLYN452963.timestamp"
  }, {
    "_id" : "R320",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewGeneration@POLYN453773.generation"
  }, {
    "_id" : "R321",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewState@POLYN453908.state"
  }, {
    "_id" : "R322",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN171508.requestVersion"
  }, {
    "_id" : "R323",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN171508.response"
  }, {
    "_id" : "R324",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN171508.isPartialUpdate"
  }, {
    "_id" : "R325",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN171508.nowMs"
  }, {
    "_id" : "R326",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN172121.fatalException"
  }, {
    "_id" : "R327",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.this"
  }, {
    "_id" : "R328",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.put@POLYN152788.key"
  }, {
    "_id" : "R329",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.put@POLYN152788.value"
  }, {
    "_id" : "R330",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.addReporter@POLYN309407.reporter"
  }, {
    "_id" : "R331",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.putAll@POLYN166643.entries"
  }, {
    "_id" : "R332",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.this"
  }, {
    "_id" : "R333",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.commitTransaction@POLYN159319.record"
  }, {
    "_id" : "R334",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.abortTransaction@POLYN159683.record"
  }, {
    "_id" : "R335",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN230192.callback"
  }, {
    "_id" : "R336",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN230423.connName"
  }, {
    "_id" : "R337",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN230423.callback"
  }, {
    "_id" : "R338",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN232860.connName"
  }, {
    "_id" : "R339",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN232860.config"
  }, {
    "_id" : "R340",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN232860.allowReplace"
  }, {
    "_id" : "R341",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN232860.callback"
  }, {
    "_id" : "R342",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN236027.connName"
  }, {
    "_id" : "R343",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN236027.callback"
  }, {
    "_id" : "R344",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN174511.connector"
  }, {
    "_id" : "R345",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN174511.properties"
  }, {
    "_id" : "R346",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeConnectorConfig@POLYN175132.connector"
  }, {
    "_id" : "R347",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeTaskConfigs@POLYN175485.connector"
  }, {
    "_id" : "R348",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN177026.connector"
  }, {
    "_id" : "R349",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN177026.state"
  }, {
    "_id" : "R350",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.setUpdateListener@POLYN177853.listener"
  }, {
    "_id" : "R351",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN186526.partition"
  }, {
    "_id" : "R352",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN186526.offset"
  }, {
    "_id" : "R353",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.loadSnapshot@POLYN178386.acls"
  }, {
    "_id" : "R354",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN174017.newLeader"
  }, {
    "_id" : "R355",
    "_libelle" : "java.io.BufferedInputStream.this"
  }, {
    "_id" : "R356",
    "_libelle" : "java.io.BufferedInputStream.mark@POLYN255515.readlimit"
  }, {
    "_id" : "R357",
    "_libelle" : "java.io.PipedOutputStream.sink"
  }, {
    "_id" : "R358",
    "_libelle" : "java.io.PipedReader.receive@POLYN206503.c"
  }, {
    "_id" : "R359",
    "_libelle" : "java.io.PipedWriter.sink"
  }, {
    "_id" : "R360",
    "_libelle" : "java.net.ServerSocket.setSocketFactory@POLYN334167.fac"
  }, {
    "_id" : "R361",
    "_libelle" : "java.net.Socket.setSocketImplFactory@POLYN516202.fac"
  }, {
    "_id" : "R362",
    "_libelle" : "java.util.Hashtable.forEach@POLYN451932.action"
  }, {
    "_id" : "R363",
    "_libelle" : "java.util.Hashtable.replaceAll@POLYN452842.function"
  }, {
    "_id" : "R364",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.this"
  }, {
    "_id" : "R365",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN261102.activePartitionHostMap"
  }, {
    "_id" : "R366",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN261102.standbyPartitionHostMap"
  }, {
    "_id" : "R367",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN261102.clusterMetadata"
  }, {
    "_id" : "R368",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.putAll@POLYN190254.entries"
  }, {
    "_id" : "R369",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.setListener@POLYN198438.listener"
  }, {
    "_id" : "R370",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDbIterator.this"
  }, {
    "_id" : "R371",
    "_libelle" : "org.apache.kafka.trogdor.workload.PayloadIterator.this"
  }, {
    "_id" : "R372",
    "_libelle" : "org.apache.kafka.trogdor.workload.PayloadIterator.seek@POLYN151426.position"
  }, {
    "_id" : "R373",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.this"
  }, {
    "_id" : "R374",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.delay@POLYN154715.amount"
  }, {
    "_id" : "R375",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.this"
  }, {
    "_id" : "R376",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN170834.consumerRecords"
  }, {
    "_id" : "R377",
    "_libelle" : "java.io.InputStream.mark@POLYN258550.readlimit"
  } ],
  "_lesDeadlocksSequences" : [ {
    "_id" : "0",
    "_lesItems" : [ "S0:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN189861", "S0:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN189861", "S0:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN203910", "S0:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN161361 (R0 in line [00067],R1 in line [00067])", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863472", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863761", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863761", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.updateAssignmentMetadataIfNeeded@POLYN865660", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.updateFetchPositions@POLYN918340", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.resetInitializingPositions@POLYN345228 (R2 in line [00695])", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN343202", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN342591 (R2 in line [00636],R3 in line [00636],R4 in line [00636])", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN329550", "S0:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325", "S0:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325.dummymethode_00114" ]
  }, {
    "_id" : "1",
    "_lesItems" : [ "S1:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN189861", "S1:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN189861", "S1:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN203910", "S1:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN161361 (R0 in line [00067],R1 in line [00067])", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863472", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863761", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863761", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN866117", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN866117", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN504673", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN537281", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN537281", "S1:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN339977 (R2 in line [00576],R9 in line [00576],R10 in line [00576])", "S1:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN329550", "S1:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325", "S1:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325.dummymethode_00114" ]
  }, {
    "_id" : "2",
    "_lesItems" : [ "S2:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN189861", "S2:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN189861", "S2:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN203910", "S2:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN161361 (R0 in line [00067],R1 in line [00067])", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863472", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863761", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863761", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN866117", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN866117", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN504673", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN537281", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN537281", "S2:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN340167 (R2 in line [00580],R11 in line [00580],R12 in line [00580])", "S2:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN329550", "S2:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325", "S2:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325.dummymethode_00114" ]
  }, {
    "_id" : "3",
    "_lesItems" : [ "S3:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN189861", "S3:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN189861", "S3:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN203910", "S3:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN161361 (R0 in line [00067],R1 in line [00067])", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863472", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863761", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863761", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN866117", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN866117", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN504673", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN537281", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN537281", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN340357 (R2 in line [00584],R13 in line [00584],R14 in line [00584])", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN329550", "S3:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325", "S3:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325.dummymethode_00114" ]
  }, {
    "_id" : "4",
    "_lesItems" : [ "S4:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN189861", "S4:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN189861", "S4:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN203910", "S4:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN161361 (R0 in line [00067],R1 in line [00067])", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863472", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863761", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863761", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN866117", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN866117", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN504673", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN537281", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN537281", "S4:org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN348145 (R2 in line [00755],R16 in line [00755])", "S4:org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN177123", "S4:java.util.HashMap.HashIterator.remove@POLYN681352", "S4:java.util.HashMap.HashIterator.remove@POLYN681352.dummymethode_01445" ]
  }, {
    "_id" : "5",
    "_lesItems" : [ "S5:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN189861", "S5:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN189861", "S5:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN203910", "S5:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN161361 (R0 in line [00067],R1 in line [00067])", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863472", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863761", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863761", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN866117", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN866117", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN504673", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN504673", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN506966", "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN333047 (R2 in line [00443],R17 in line [00443],R18 in line [00443])", "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN329550", "S5:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325", "S5:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325.dummymethode_00114" ]
  }, {
    "_id" : "6",
    "_lesItems" : [ "S6:org.apache.kafka.streams.processor.internals.StreamThread.run@POLYN356428", "S6:org.apache.kafka.streams.processor.internals.StreamThread.run@POLYN356428", "S6:org.apache.kafka.streams.processor.internals.StreamThread.runLoop@POLYN357407", "S6:org.apache.kafka.streams.processor.internals.StreamThread.checkForTopologyUpdates@POLYN371082", "S6:org.apache.kafka.streams.processor.internals.StreamThread.checkForTopologyUpdates@POLYN371082", "S6:org.apache.kafka.streams.processor.internals.TaskManager.handleTopologyUpdates@POLYN396410", "S6:org.apache.kafka.streams.processor.internals.TaskManager.handleTopologyUpdates@POLYN396410", "S6:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN856774", "S6:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN856774", "S6:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN416862", "S6:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN416862", "S6:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN325595 (R2 in line [00273],R19 in line [00273])", "S6:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN325595.dummymethode_00277" ]
  }, {
    "_id" : "7",
    "_lesItems" : [ "S7:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN238808 (R131 in line [00163])", "S7:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN239042 (R131 in line [00168],R132 in line [00175])", "S7:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN239042 (R131 in line [00168],R132 in line [00175])", "S7:org.apache.kafka.clients.consumer.MockConsumer.updateFetchPosition@POLYN254587", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.seek@POLYN330261", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN330071 (R2 in line [00378],R133 in line [00378],R134 in line [00378])", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN329550", "S7:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325", "S7:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325.dummymethode_00114" ]
  }, {
    "_id" : "8",
    "_lesItems" : [ "S8:org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN909930", "S8:org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN909930", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN339233 (R2 in line [00561],R135 in line [00561])", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN329550", "S8:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325", "S8:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325.dummymethode_00114" ]
  }, {
    "_id" : "9",
    "_lesItems" : [ "S9:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN900773", "S9:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN900773", "S9:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN347440 (R2 in line [00737],R144 in line [00737])", "S9:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN329550", "S9:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325", "S9:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325.dummymethode_00114" ]
  }, {
    "_id" : "10",
    "_lesItems" : [ "S10:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN901531", "S10:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN901531", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN347591 (R2 in line [00741],R145 in line [00741])", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN329550", "S10:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325", "S10:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325.dummymethode_00114" ]
  }, {
    "_id" : "11",
    "_lesItems" : [ "S11:org.apache.kafka.jmh.consumer.SubscriptionStateBenchmark.setup@POLYN162465", "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN337662 (R2 in line [00529],R149 in line [00529])", "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN329550", "S11:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325", "S11:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325.dummymethode_00114" ]
  }, {
    "_id" : "12",
    "_lesItems" : [ "S12:org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetIfNeeded@POLYN509935", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN330662 (R2 in line [00390],R190 in line [00390],R191 in line [00390],R192 in line [00390])", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN329917", "S12:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325", "S12:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325.dummymethode_00114" ]
  }, {
    "_id" : "13",
    "_lesItems" : [ "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN342786 (R2 in line [00640],R220 in line [00640],R221 in line [00640])", "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN342786.dummymethode_00641" ]
  }, {
    "_id" : "14",
    "_lesItems" : [ "S14:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN236214 (R131 in line [00113],R233 in line [00113],R234 in line [00113])", "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN321446 (R2 in line [00172],R235 in line [00172],R236 in line [00172])", "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN326500", "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN326500.dummymethode_00292" ]
  }, {
    "_id" : "15",
    "_lesItems" : [ "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeValidatePositionForCurrentLeader@POLYN333519 (R2 in line [00456])", "S15:org.apache.kafka.clients.ApiVersions.get@POLYN156534 (R66 in line [00048])", "S15:java.util.Map.get@POLYN434899" ]
  }, {
    "_id" : "16",
    "_lesItems" : [ "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN340797 (R2 in line [00596],R238 in line [00596],R239 in line [00596],R240 in line [00596])", "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN329550", "S16:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325", "S16:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325.dummymethode_00114" ]
  }, {
    "_id" : "17",
    "_lesItems" : [ "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN343350 (R2 in line [00651],R241 in line [00651],R242 in line [00651])", "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN329550", "S17:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325", "S17:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325.dummymethode_00114" ]
  }, {
    "_id" : "18",
    "_lesItems" : [ "S18:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN347737 (R2 in line [00745],R243 in line [00745],R244 in line [00745])", "S18:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN329917", "S18:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325", "S18:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325.dummymethode_00114" ]
  }, {
    "_id" : "19",
    "_lesItems" : [ "S19:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN554437", "S19:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN562210", "S19:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN562210", "S19:org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN269851 (R8 in line [00450],R64 in line [00450])", "S19:org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN269851.dummymethode_00451" ]
  }, {
    "_id" : "20",
    "_lesItems" : [ "S20:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN520961", "S20:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN520961", "S20:org.apache.kafka.clients.Metadata.bootstrap@POLYN258893 (R8 in line [00238],R70 in line [00238])", "S20:org.apache.kafka.clients.Metadata.bootstrap@POLYN258893.dummymethode_00239" ]
  }, {
    "_id" : "21",
    "_lesItems" : [ "S21:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN259285 (R8 in line [00249],R86 in line [00249],R87 in line [00249],R88 in line [00249])", "S21:org.apache.kafka.clients.Metadata.update@POLYN259859 (R8 in line [00263],R89 in line [00263],R90 in line [00263],R91 in line [00263],R92 in line [00263])", "S21:org.apache.kafka.clients.Metadata.update@POLYN259859.dummymethode_00264" ]
  }, {
    "_id" : "22",
    "_lesItems" : [ "S22:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleServerDisconnect@POLYN374735", "S22:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleServerDisconnect@POLYN374735", "S22:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleFailedRequest@POLYN375684", "S22:org.apache.kafka.clients.Metadata.failedUpdate@POLYN271561 (R8 in line [00490],R157 in line [00490])", "S22:org.apache.kafka.clients.Metadata.failedUpdate@POLYN271561.dummymethode_00491" ]
  }, {
    "_id" : "23",
    "_lesItems" : [ "S23:org.apache.kafka.clients.Metadata.fatalError@POLYN271821 (R8 in line [00500],R314 in line [00500])", "S23:org.apache.kafka.clients.Metadata.fatalError@POLYN271821.dummymethode_00501" ]
  }, {
    "_id" : "24",
    "_lesItems" : [ "S24:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN189861", "S24:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN189861", "S24:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN203910", "S24:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN161361 (R0 in line [00067],R1 in line [00067])", "S24:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863472", "S24:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863761", "S24:org.apache.kafka.clients.consumer.KafkaConsumer.acquireAndEnsureOpen@POLYN919002", "S24:org.apache.kafka.clients.consumer.KafkaConsumer.acquire@POLYN919457" ]
  }, {
    "_id" : "25",
    "_lesItems" : [ "S25:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN189861", "S25:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN189861", "S25:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN203910", "S25:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN161361 (R0 in line [00067],R1 in line [00067])", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863472", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863761", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863761", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.updateAssignmentMetadataIfNeeded@POLYN865660", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.updateFetchPositions@POLYN918340", "S25:org.apache.kafka.clients.consumer.internals.SubscriptionState.hasAllFetchPositions@POLYN344090 (R2 in line [00669])", "S25:org.apache.kafka.common.internals.PartitionStates.stateIterator@POLYN178647" ]
  }, {
    "_id" : "26",
    "_lesItems" : [ "S26:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN189861", "S26:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN189861", "S26:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN203910", "S26:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN161361 (R0 in line [00067],R1 in line [00067])", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863472", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863761", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863761", "S26:org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.recordPollEnd@POLYN165254", "S26:org.apache.kafka.common.metrics.Sensor.record@POLYN220009", "S26:org.apache.kafka.common.metrics.Sensor.recordInternal@POLYN220293 (R6 in line [00232])", "S26:org.apache.kafka.common.metrics.Sensor.recordInternal@POLYN220293.dummymethode_00231" ]
  }, {
    "_id" : "27",
    "_lesItems" : [ "S27:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN189861", "S27:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN189861", "S27:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN203910", "S27:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN161361 (R0 in line [00067],R1 in line [00067])", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863472", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863761", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863761", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN866117", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN866117", "S27:org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN485499 (R7 in line [00248])", "S27:org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.maybeUpdateAssignment@POLYN569536", "S27:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignmentId@POLYN320495 (R2 in line [00149])", "S27:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignmentId@POLYN320495.dummymethode_00150" ]
  }, {
    "_id" : "28",
    "_lesItems" : [ "S28:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN189861", "S28:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN189861", "S28:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN203910", "S28:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN161361 (R0 in line [00067],R1 in line [00067])", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863472", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863761", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863761", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN866117", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN866117", "S28:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN504673", "S28:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN537281", "S28:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN537281", "S28:org.apache.kafka.clients.Metadata.requestUpdate@POLYN254361 (R8 in line [00145])", "S28:org.apache.kafka.clients.Metadata.requestUpdate@POLYN254361.dummymethode_00146" ]
  }, {
    "_id" : "29",
    "_lesItems" : [ "S29:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN189861", "S29:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN189861", "S29:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN203910", "S29:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN161361 (R0 in line [00067],R1 in line [00067])", "S29:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN161361 (R0 in line [00067],R1 in line [00067])", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863472", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN863761", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.acquireAndEnsureOpen@POLYN919002", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.acquire@POLYN919457" ]
  }, {
    "_id" : "30",
    "_lesItems" : [ "S30:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN520254", "S30:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN520254", "S30:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN544195 (R25 in line [01039],R26 in line [01051])", "S30:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN553820 (R27 in line [01215])", "S30:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN553820.dummymethode_01214" ]
  }, {
    "_id" : "31",
    "_lesItems" : [ "S31:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN520254", "S31:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN520254", "S31:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN544195 (R25 in line [01039],R26 in line [01051])", "S31:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN544195 (R25 in line [01039],R26 in line [01051])", "S31:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN553820 (R27 in line [01215])", "S31:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN553820.dummymethode_01214" ]
  }, {
    "_id" : "32",
    "_lesItems" : [ "S32:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN520254", "S32:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN520254", "S32:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN544195 (R25 in line [01039],R26 in line [01051])", "S32:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN544195 (R25 in line [01039],R26 in line [01051])", "S32:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN381064", "S32:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN381064", "S32:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN341085 (R24 in line [00215])", "S32:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN341085.dummymethode_00216" ]
  }, {
    "_id" : "33",
    "_lesItems" : [ "S33:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN520254", "S33:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN520254", "S33:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN544195 (R25 in line [01039],R26 in line [01051])", "S33:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN544195 (R25 in line [01039],R26 in line [01051])", "S33:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN381064", "S33:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN381064", "S33:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN381426", "S33:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN381426", "S33:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN856774", "S33:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN856774", "S33:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN416862", "S33:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.generation@POLYN426365 (R28 in line [00981])", "S33:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.generation@POLYN426365.dummymethode_00982" ]
  }, {
    "_id" : "34",
    "_lesItems" : [ "S34:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN520254", "S34:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN520254", "S34:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN544195 (R25 in line [01039],R26 in line [01051])", "S34:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN544195 (R25 in line [01039],R26 in line [01051])", "S34:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN381064", "S34:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN381064", "S34:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN381426", "S34:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN381426", "S34:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN856774", "S34:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN856774", "S34:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN416862", "S34:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN416862", "S34:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN396211", "S34:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN328258 (R2 in line [00334])", "S34:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN328258.dummymethode_00335" ]
  }, {
    "_id" : "35",
    "_lesItems" : [ "S35:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN520254", "S35:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN520254", "S35:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN544195 (R25 in line [01039],R26 in line [01051])", "S35:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN544195 (R25 in line [01039],R26 in line [01051])", "S35:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN381064", "S35:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN381064", "S35:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN381426", "S35:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN381426", "S35:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelSensors@POLYN295925 (R20 in line [00301])", "S35:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN294404", "S35:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN294404.dummymethode_00263" ]
  }, {
    "_id" : "36",
    "_lesItems" : [ "S36:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN520254", "S36:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN520254", "S36:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN544195 (R25 in line [01039],R26 in line [01051])", "S36:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN544195 (R25 in line [01039],R26 in line [01051])", "S36:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN381064", "S36:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN381064", "S36:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN381426", "S36:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN381426", "S36:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelMetrics@POLYN296477 (R21 in line [00310])", "S36:java.util.Hashtable.remove@POLYN483302" ]
  }, {
    "_id" : "37",
    "_lesItems" : [ "S37:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN380622", "S37:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN380622", "S37:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToClients@POLYN393807", "S37:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.populateClientStatesMap@POLYN397680", "S37:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.fetchCommittedOffsets@POLYN421433", "S37:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetFetchRequest@POLYN442516", "S37:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN424300 (R28 in line [00926])", "S37:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN425109 (R28 in line [00947],R40 in line [00947],R41 in line [00947])", "S37:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN425109.dummymethode_00949" ]
  }, {
    "_id" : "38",
    "_lesItems" : [ "S38:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN399840 (R28 in line [00383])", "S38:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN429680", "S38:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN429872 (R28 in line [01078])", "S38:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN430868 (R28 in line [01103])", "S38:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN430868 (R28 in line [01103])", "S38:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.pollNoWakeup@POLYN263900", "S38:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.poll@POLYN262031", "S38:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.UnsentRequests.clean@POLYN279460 (R61 in line [00696])" ]
  }, {
    "_id" : "39",
    "_lesItems" : [ "S39:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN399840 (R28 in line [00383])", "S39:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN429680", "S39:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN429872 (R28 in line [01078])", "S39:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN430868 (R28 in line [01103])", "S39:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN430868 (R28 in line [01103])", "S39:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.pollNoWakeup@POLYN263900", "S39:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.poll@POLYN262031", "S39:org.apache.kafka.clients.Metadata.maybeThrowAnyException@POLYN269107 (R8 in line [00428])", "S39:org.apache.kafka.clients.Metadata.clearErrorsAndMaybeThrowException@POLYN270037", "S39:org.apache.kafka.clients.Metadata.clearErrorsAndMaybeThrowException@POLYN270037.dummymethode_00456" ]
  }, {
    "_id" : "40",
    "_lesItems" : [ "S40:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.close@POLYN423484", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN394826 (R28 in line [00240])", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN394826 (R28 in line [00240])", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN424755 (R28 in line [00939],R94 in line [00939])", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN424755.dummymethode_00940" ]
  }, {
    "_id" : "41",
    "_lesItems" : [ "S41:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN237249", "S41:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN237249", "S41:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN397967 (R28 in line [00322],R127 in line [00322])", "S41:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.failureCause@POLYN446390" ]
  }, {
    "_id" : "42",
    "_lesItems" : [ "S42:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatResponseHandler.handle@POLYN434384", "S42:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatResponseHandler.handle@POLYN434384", "S42:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN428767 (R28 in line [01039],R138 in line [01039])", "S42:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN429075 (R28 in line [01050],R139 in line [01050],R140 in line [01050])", "S42:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN429075 (R28 in line [01050],R139 in line [01050],R140 in line [01050])", "S42:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN429075.dummymethode_01053" ]
  }, {
    "_id" : "43",
    "_lesItems" : [ "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureActiveGroup@POLYN399288", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN400914", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN427734 (R28 in line [01017],R186 in line [01017],R187 in line [01017])", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN427035 (R28 in line [01004],R188 in line [01004],R189 in line [01004])", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN427035.dummymethode_01005" ]
  }, {
    "_id" : "44",
    "_lesItems" : [ "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN424954 (R28 in line [00943],R216 in line [00943])", "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN425109 (R28 in line [00947],R40 in line [00947],R41 in line [00947])", "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN425109.dummymethode_00949" ]
  }, {
    "_id" : "45",
    "_lesItems" : [ "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN428032 (R28 in line [01023],R217 in line [01023],R218 in line [01023],R219 in line [01023])", "S45:java.lang.String.format@POLYN913539", "S45:java.lang.String.format@POLYN913539.dummymethode_00001" ]
  }, {
    "_id" : "46",
    "_lesItems" : [ "S46:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.rejoinNeededOrPending@POLYN418204", "S46:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoinIfNecessary@POLYN428512 (R28 in line [01032],R278 in line [01032],R279 in line [01032])", "S46:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN429075 (R28 in line [01050],R139 in line [01050],R140 in line [01050])", "S46:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN429075 (R28 in line [01050],R139 in line [01050],R140 in line [01050])", "S46:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN429075.dummymethode_01053" ]
  }, {
    "_id" : "47",
    "_lesItems" : [ "S47:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setLastRebalanceTime@POLYN452963 (R28 in line [01592],R319 in line [01592])", "S47:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setLastRebalanceTime@POLYN452963.dummymethode_01593" ]
  }, {
    "_id" : "48",
    "_lesItems" : [ "S48:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewGeneration@POLYN453773 (R28 in line [01617],R320 in line [01617])", "S48:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewGeneration@POLYN453773.dummymethode_01618" ]
  }, {
    "_id" : "49",
    "_lesItems" : [ "S49:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewState@POLYN453908 (R28 in line [01621],R321 in line [01621])", "S49:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewState@POLYN453908.dummymethode_01622" ]
  }, {
    "_id" : "50",
    "_lesItems" : [ "S50:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN546413", "S50:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN547493 (R25 in line [01113])", "S50:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN381064", "S50:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN381064", "S50:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN341085 (R24 in line [00215])", "S50:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN341085.dummymethode_00216" ]
  }, {
    "_id" : "51",
    "_lesItems" : [ "S51:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN546413", "S51:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN547493 (R25 in line [01113])", "S51:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN381064", "S51:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN381064", "S51:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN381426", "S51:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN381426", "S51:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN856774", "S51:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN856774", "S51:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN416862", "S51:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.generation@POLYN426365 (R28 in line [00981])", "S51:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.generation@POLYN426365.dummymethode_00982" ]
  }, {
    "_id" : "52",
    "_lesItems" : [ "S52:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN546413", "S52:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN547493 (R25 in line [01113])", "S52:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN381064", "S52:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN381064", "S52:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN381426", "S52:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN381426", "S52:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN856774", "S52:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN856774", "S52:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN416862", "S52:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN416862", "S52:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN396211", "S52:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN328258 (R2 in line [00334])", "S52:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN328258.dummymethode_00335" ]
  }, {
    "_id" : "53",
    "_lesItems" : [ "S53:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN546413", "S53:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN547493 (R25 in line [01113])", "S53:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN381064", "S53:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN381064", "S53:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN381426", "S53:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN381426", "S53:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelSensors@POLYN295925 (R20 in line [00301])", "S53:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN294404", "S53:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN294404.dummymethode_00263" ]
  }, {
    "_id" : "54",
    "_lesItems" : [ "S54:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN546413", "S54:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN547493 (R25 in line [01113])", "S54:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN381064", "S54:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN381064", "S54:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN381426", "S54:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN381426", "S54:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelMetrics@POLYN296477 (R21 in line [00310])", "S54:java.util.Hashtable.remove@POLYN483302" ]
  }, {
    "_id" : "55",
    "_lesItems" : [ "S55:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN532440", "S55:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN532440", "S55:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN548724 (R29 in line [00744])", "S55:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN548724 (R29 in line [00744])", "S55:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN194220", "S55:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN196151", "S55:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN196151", "S55:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN169287 (R33 in line [00072],R34 in line [00072],R35 in line [00072],R36 in line [00072])", "S55:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN169287.dummymethode_00075" ]
  }, {
    "_id" : "56",
    "_lesItems" : [ "S56:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN520961", "S56:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN520961", "S56:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN168503 (R33 in line [00060],R71 in line [00060],R72 in line [00060],R73 in line [00060],R74 in line [00060])", "S56:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN168503.dummymethode_00062" ]
  }, {
    "_id" : "57",
    "_lesItems" : [ "S57:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN532440", "S57:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN532440", "S57:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN548724 (R29 in line [00744])", "S57:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN548724 (R29 in line [00744])", "S57:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN194220", "S57:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN196151", "S57:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN196151", "S57:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN169287 (R33 in line [00072],R34 in line [00072],R35 in line [00072],R36 in line [00072])", "S57:org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN171226", "S57:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN308623 (R15 in line [00558])", "S57:java.util.Map.remove@POLYN454833" ]
  }, {
    "_id" : "58",
    "_lesItems" : [ "S58:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN532440", "S58:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN532440", "S58:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN548724 (R29 in line [00744])", "S58:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN548724 (R29 in line [00744])", "S58:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN194220", "S58:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN196151", "S58:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN196151", "S58:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN169287 (R33 in line [00072],R34 in line [00072],R35 in line [00072],R36 in line [00072])", "S58:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN169287 (R33 in line [00072],R34 in line [00072],R35 in line [00072],R36 in line [00072])", "S58:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN169287.dummymethode_00075" ]
  }, {
    "_id" : "59",
    "_lesItems" : [ "S59:org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.close@POLYN209949 (R37 in line [00335])", "S59:org.apache.kafka.connect.runtime.errors.ProcessingContext.close@POLYN190457", "S59:java.lang.Throwable.addSuppressed@POLYN395637 (R109 in line [01070],R110 in line [01070])", "S59:java.lang.Throwable.addSuppressed@POLYN395637.dummymethode_01074" ]
  }, {
    "_id" : "60",
    "_lesItems" : [ "S60:java.lang.Throwable.writeObject@POLYN393582 (R109 in line [01002],R182 in line [01002])", "S60:java.lang.Throwable.getOurStackTrace@POLYN387601 (R109 in line [00834])", "S60:java.lang.Throwable.getOurStackTrace@POLYN387601.dummymethode_00839" ]
  }, {
    "_id" : "61",
    "_lesItems" : [ "S61:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN380622", "S61:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN380622", "S61:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToClients@POLYN393807", "S61:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.populateClientStatesMap@POLYN397680", "S61:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.fetchCommittedOffsets@POLYN421433", "S61:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetFetchRequest@POLYN442516", "S61:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN424300 (R28 in line [00926])", "S61:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN425109 (R28 in line [00947],R40 in line [00947],R41 in line [00947])", "S61:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN425109 (R28 in line [00947],R40 in line [00947],R41 in line [00947])", "S61:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN425109.dummymethode_00949" ]
  }, {
    "_id" : "62",
    "_lesItems" : [ "S62:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN473323", "S62:org.apache.kafka.clients.producer.internals.Sender.run@POLYN312584", "S62:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN314791", "S62:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN396849 (R42 in line [00718])", "S62:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN381861 (R42 in line [00386],R43 in line [00386])", "S62:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN381861.dummymethode_00388" ]
  }, {
    "_id" : "63",
    "_lesItems" : [ "S63:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN473323", "S63:org.apache.kafka.clients.producer.internals.Sender.run@POLYN312584", "S63:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN314791", "S63:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN396849 (R42 in line [00718])", "S63:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN382347 (R42 in line [00397],R44 in line [00397])", "S63:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN382347.dummymethode_00398" ]
  }, {
    "_id" : "64",
    "_lesItems" : [ "S64:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN473323", "S64:org.apache.kafka.clients.producer.internals.Sender.run@POLYN312584", "S64:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN314791", "S64:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN396849 (R42 in line [00718])", "S64:org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN385094 (R42 in line [00468],R45 in line [00468])", "S64:org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN385094.dummymethode_00469" ]
  }, {
    "_id" : "65",
    "_lesItems" : [ "S65:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN473323", "S65:org.apache.kafka.clients.producer.internals.Sender.run@POLYN312584", "S65:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN314791", "S65:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN314791", "S65:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN400857 (R42 in line [00810],R46 in line [00810])", "S65:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN400857.dummymethode_00812" ]
  }, {
    "_id" : "66",
    "_lesItems" : [ "S66:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN473323", "S66:org.apache.kafka.clients.producer.internals.Sender.run@POLYN312584", "S66:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN314791", "S66:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN314791", "S66:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN315987", "S66:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN360836", "S66:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN356307 (R50 in line [00799])", "S66:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN383357 (R42 in line [00426],R51 in line [00426])", "S66:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN159123", "S66:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN149372", "S66:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN149372.dummymethode_00026" ]
  }, {
    "_id" : "67",
    "_lesItems" : [ "S67:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN473323", "S67:org.apache.kafka.clients.producer.internals.Sender.run@POLYN312584", "S67:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN314791", "S67:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN314791", "S67:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN315987", "S67:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN360836", "S67:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN356307 (R50 in line [00799])", "S67:org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN387469 (R42 in line [00521],R52 in line [00521],R53 in line [00521])", "S67:org.apache.kafka.clients.producer.internals.TransactionManager.sequenceNumber@POLYN387103 (R42 in line [00510])", "S67:org.apache.kafka.clients.producer.internals.TxnPartitionMap.getOrCreate@POLYN157784", "S67:org.apache.kafka.clients.producer.internals.TxnPartitionMap.getOrCreate@POLYN157784.dummymethode_00043" ]
  }, {
    "_id" : "68",
    "_lesItems" : [ "S68:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN473323", "S68:org.apache.kafka.clients.producer.internals.Sender.run@POLYN312584", "S68:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN314791", "S68:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN314791", "S68:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN315987", "S68:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN336729", "S68:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN392474 (R42 in line [00624],R55 in line [00624],R56 in line [00624],R57 in line [00624])", "S68:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN391879 (R42 in line [00610],R58 in line [00610])", "S68:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN382347 (R42 in line [00397],R44 in line [00397])", "S68:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN382347.dummymethode_00398" ]
  }, {
    "_id" : "69",
    "_lesItems" : [ "S69:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN473323", "S69:org.apache.kafka.clients.producer.internals.Sender.run@POLYN312584", "S69:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN314791", "S69:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN314791", "S69:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN315987", "S69:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN336729", "S69:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN392474 (R42 in line [00624],R55 in line [00624],R56 in line [00624],R57 in line [00624])", "S69:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN389292 (R42 in line [00557],R59 in line [00557])", "S69:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN157390", "S69:java.util.Map.get@POLYN434899" ]
  }, {
    "_id" : "70",
    "_lesItems" : [ "S70:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN473323", "S70:org.apache.kafka.clients.producer.internals.Sender.run@POLYN312584", "S70:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN314791", "S70:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN314791", "S70:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN315987", "S70:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN396241 (R42 in line [00708],R60 in line [00708])", "S70:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN396241.dummymethode_00710" ]
  }, {
    "_id" : "71",
    "_lesItems" : [ "S71:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN554437", "S71:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN554437", "S71:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN379538 (R42 in line [00327],R68 in line [00327])", "S71:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN407584" ]
  }, {
    "_id" : "72",
    "_lesItems" : [ "S72:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN320467", "S72:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN320467", "S72:org.apache.kafka.clients.producer.internals.Sender.maybeFindCoordinatorAndRetry@POLYN324168", "S72:org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN400679 (R42 in line [00805],R96 in line [00805])", "S72:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.setRetry@POLYN416999", "S72:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.setRetry@POLYN416999.dummymethode_01228" ]
  }, {
    "_id" : "73",
    "_lesItems" : [ "S73:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN325991", "S73:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN325991", "S73:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN333423", "S73:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN391325 (R42 in line [00599],R136 in line [00599],R137 in line [00599])", "S73:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateLastAckedSequence@POLYN389584", "S73:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateLastAckedSequence@POLYN389584.dummymethode_00566" ]
  }, {
    "_id" : "74",
    "_lesItems" : [ "S74:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN329565", "S74:org.apache.kafka.clients.producer.internals.RecordAccumulator.splitAndReenqueue@POLYN343339 (R169 in line [00482])", "S74:org.apache.kafka.clients.producer.internals.TransactionManager.addInFlightBatch@POLYN387865 (R42 in line [00528],R171 in line [00528])", "S74:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN157390", "S74:java.util.Map.get@POLYN434899" ]
  }, {
    "_id" : "75",
    "_lesItems" : [ "S75:org.apache.kafka.clients.producer.internals.TransactionManager.isPartitionAdded@POLYN382781 (R42 in line [00407])", "S75:java.util.Hashtable.contains@POLYN425028 (R158 in line [00307])", "S75:java.util.Hashtable.contains@POLYN425028.dummymethode_00312" ]
  }, {
    "_id" : "76",
    "_lesItems" : [ "S76:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN410114", "S76:java.util.Hashtable.putAll@POLYN436392 (R158 in line [00536],R159 in line [00536])", "S76:java.util.Hashtable.put@POLYN432924 (R158 in line [00471])", "S76:java.util.Hashtable.put@POLYN432924.dummymethode_00478" ]
  }, {
    "_id" : "77",
    "_lesItems" : [ "S77:java.util.Hashtable.forEach@POLYN451932 (R158 in line [00888],R362 in line [00888])", "S77:java.util.Hashtable.forEach@POLYN451932.dummymethode_00889" ]
  }, {
    "_id" : "78",
    "_lesItems" : [ "S78:java.util.Hashtable.replaceAll@POLYN452842 (R158 in line [00908],R363 in line [00908])", "S78:java.util.Hashtable.replaceAll@POLYN452842.dummymethode_00909" ]
  }, {
    "_id" : "79",
    "_lesItems" : [ "S79:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN473323", "S79:org.apache.kafka.clients.producer.internals.Sender.run@POLYN312584", "S79:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN314791", "S79:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN396849 (R42 in line [00718])", "S79:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN381861 (R42 in line [00386],R43 in line [00386])", "S79:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN381861 (R42 in line [00386],R43 in line [00386])", "S79:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN381861.dummymethode_00388" ]
  }, {
    "_id" : "80",
    "_lesItems" : [ "S80:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN473323", "S80:org.apache.kafka.clients.producer.internals.Sender.run@POLYN312584", "S80:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN314791", "S80:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN314791", "S80:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN315987", "S80:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN360836", "S80:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN356307 (R50 in line [00799])", "S80:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN383357 (R42 in line [00426],R51 in line [00426])", "S80:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN383357 (R42 in line [00426],R51 in line [00426])", "S80:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN159123", "S80:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN149372", "S80:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN149372.dummymethode_00026" ]
  }, {
    "_id" : "81",
    "_lesItems" : [ "S81:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN473323", "S81:org.apache.kafka.clients.producer.internals.Sender.run@POLYN312584", "S81:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN314791", "S81:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN314791", "S81:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN315987", "S81:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN396241 (R42 in line [00708],R60 in line [00708])", "S81:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN396241 (R42 in line [00708],R60 in line [00708])", "S81:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN396241.dummymethode_00710" ]
  }, {
    "_id" : "82",
    "_lesItems" : [ "S82:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN554437", "S82:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN554437", "S82:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN379538 (R42 in line [00327],R68 in line [00327])", "S82:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN379538 (R42 in line [00327],R68 in line [00327])", "S82:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN407584" ]
  }, {
    "_id" : "83",
    "_lesItems" : [ "S83:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN520961", "S83:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN520961", "S83:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN168503 (R33 in line [00060],R71 in line [00060],R72 in line [00060],R73 in line [00060],R74 in line [00060])", "S83:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN168503 (R33 in line [00060],R71 in line [00060],R72 in line [00060],R73 in line [00060],R74 in line [00060])", "S83:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN168503.dummymethode_00062" ]
  }, {
    "_id" : "84",
    "_lesItems" : [ "S84:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN298589", "S84:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN298589", "S84:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readConnectorStatus@POLYN293952 (R76 in line [00563])", "S84:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readConnectorStatus@POLYN293952 (R76 in line [00563])", "S84:org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN281154 (R76 in line [00353],R77 in line [00353])", "S84:java.util.Hashtable.remove@POLYN483302" ]
  }, {
    "_id" : "85",
    "_lesItems" : [ "S85:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN298589", "S85:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN298589", "S85:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readTaskStatus@POLYN295088 (R76 in line [00589])", "S85:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readTaskStatus@POLYN295088 (R76 in line [00589])", "S85:org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN282468 (R76 in line [00374],R78 in line [00374])", "S85:org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN282468 (R76 in line [00374],R78 in line [00374])", "S85:java.io.File.delete@POLYN603160", "S85:java.io.File.delete@POLYN603160.dummymethode_00001" ]
  }, {
    "_id" : "86",
    "_lesItems" : [ "S86:org.apache.kafka.snapshot.RecordsSnapshotWriter.freeze@POLYN175923", "S86:org.apache.kafka.snapshot.RecordsSnapshotWriter.appendBatches@POLYN176354", "S86:org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN175223", "S86:org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN223399", "S86:org.apache.kafka.raft.internals.BatchAccumulator.maybeAllocateBatch@POLYN225482", "S86:org.apache.kafka.raft.internals.BatchBuilder.bytesNeeded@POLYN198317", "S86:org.apache.kafka.common.protocol.DataOutputStreamWritable.flush@POLYN164889", "S86:java.io.BufferedOutputStream.flush@POLYN168659 (R111 in line [00139])", "S86:java.io.BufferedOutputStream.flushBuffer@POLYN166328", "S86:java.io.BufferedOutputStream.write@POLYN167624 (R111 in line [00116],R112 in line [00116],R113 in line [00116],R114 in line [00116])", "S86:java.io.BufferedOutputStream.write@POLYN167624 (R111 in line [00116],R112 in line [00116],R113 in line [00116],R114 in line [00116])", "S86:java.io.BufferedOutputStream.write@POLYN167624.dummymethode_00123" ]
  }, {
    "_id" : "87",
    "_lesItems" : [ "S87:org.apache.kafka.streams.state.internals.RocksDBStore.putAll@POLYN264986", "S87:java.io.BufferedOutputStream.write@POLYN166763 (R111 in line [00093],R229 in line [00093])", "S87:java.io.BufferedOutputStream.flushBuffer@POLYN166328", "S87:java.io.BufferedOutputStream.write@POLYN167624 (R111 in line [00116],R112 in line [00116],R113 in line [00116],R114 in line [00116])", "S87:java.io.BufferedOutputStream.write@POLYN167624 (R111 in line [00116],R112 in line [00116],R113 in line [00116],R114 in line [00116])", "S87:java.io.BufferedOutputStream.write@POLYN167624.dummymethode_00123" ]
  }, {
    "_id" : "88",
    "_lesItems" : [ "S88:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN266062 (R81 in line [00001],R115 in line [00001])", "S88:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN266357", "S88:org.apache.kafka.common.utils.Utils.delete@POLYN451877", "S88:org.apache.kafka.common.utils.Utils.delete@POLYN451877.dummymethode_00852" ]
  }, {
    "_id" : "89",
    "_lesItems" : [ "S89:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN266062 (R81 in line [00001],R115 in line [00001])", "S89:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN266357", "S89:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN266357", "S89:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN263055 (R81 in line [00001],R116 in line [00001])", "S89:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN263055.dummymethode_00001" ]
  }, {
    "_id" : "90",
    "_lesItems" : [ "S90:org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN261848 (R81 in line [00001])", "S90:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN256894 (R156 in line [00001])", "S90:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN256894.dummymethode_00001" ]
  }, {
    "_id" : "91",
    "_lesItems" : [ "S91:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN229275 (R82 in line [00105])", "S91:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN229275 (R82 in line [00105])", "S91:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN245931", "S91:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN470540", "S91:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN468319", "S91:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN467189", "S91:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN467189", "S91:org.apache.kafka.connect.runtime.Worker.stop@POLYN427663", "S91:org.apache.kafka.connect.runtime.Worker.stop@POLYN427663", "S91:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN501866 (R32 in line [01751])" ]
  }, {
    "_id" : "92",
    "_lesItems" : [ "S92:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN229275 (R82 in line [00105])", "S92:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN229275 (R82 in line [00105])", "S92:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN440958", "S92:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN437678", "S92:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN437678", "S92:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN225684 (R31 in line [00256])", "S92:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN225684 (R31 in line [00256])", "S92:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN225684.dummymethode_00258" ]
  }, {
    "_id" : "93",
    "_lesItems" : [ "S93:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN235653 (R82 in line [00242],R95 in line [00242])", "S93:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN235653 (R82 in line [00242],R95 in line [00242])", "S93:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN235653.dummymethode_00245" ]
  }, {
    "_id" : "94",
    "_lesItems" : [ "S94:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN233773 (R82 in line [00201],R97 in line [00201],R98 in line [00201],R99 in line [00201],R100 in line [00201],R101 in line [00201])", "S94:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN233773.dummymethode_00208" ]
  }, {
    "_id" : "95",
    "_lesItems" : [ "S95:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN231792 (R82 in line [00161],R102 in line [00161],R103 in line [00161])", "S95:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN231792.dummymethode_00165" ]
  }, {
    "_id" : "96",
    "_lesItems" : [ "S96:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN240112 (R82 in line [00309],R105 in line [00309],R106 in line [00309])", "S96:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN168914", "S96:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN168914.dummymethode_00055" ]
  }, {
    "_id" : "97",
    "_lesItems" : [ "S97:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN237490 (R82 in line [00274],R107 in line [00274],R108 in line [00274])", "S97:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN237490.dummymethode_00276" ]
  }, {
    "_id" : "98",
    "_lesItems" : [ "S98:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN238907 (R82 in line [00291],R152 in line [00291],R153 in line [00291])", "S98:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN238907.dummymethode_00293" ]
  }, {
    "_id" : "99",
    "_lesItems" : [ "S99:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN230192 (R82 in line [00133],R335 in line [00133])", "S99:org.apache.kafka.connect.util.Callback.onCompletion" ]
  }, {
    "_id" : "100",
    "_lesItems" : [ "S100:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN230423 (R82 in line [00138],R336 in line [00138],R337 in line [00138])", "S100:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN230423.dummymethode_00141" ]
  }, {
    "_id" : "101",
    "_lesItems" : [ "S101:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN232860 (R82 in line [00181],R338 in line [00181],R339 in line [00181],R340 in line [00181],R341 in line [00181])", "S101:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN232860.dummymethode_00186" ]
  }, {
    "_id" : "102",
    "_lesItems" : [ "S102:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN236027 (R82 in line [00251],R342 in line [00251],R343 in line [00251])", "S102:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN236027.dummymethode_00253" ]
  }, {
    "_id" : "103",
    "_lesItems" : [ "S103:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN259285 (R8 in line [00249],R86 in line [00249],R87 in line [00249],R88 in line [00249])", "S103:org.apache.kafka.clients.Metadata.update@POLYN259859 (R8 in line [00263],R89 in line [00263],R90 in line [00263],R91 in line [00263],R92 in line [00263])", "S103:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN262869", "S103:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN262869", "S103:org.apache.kafka.clients.Metadata.requestUpdate@POLYN254361 (R8 in line [00145])", "S103:org.apache.kafka.clients.Metadata.requestUpdate@POLYN254361.dummymethode_00146" ]
  }, {
    "_id" : "104",
    "_lesItems" : [ "S104:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN259285 (R8 in line [00249],R86 in line [00249],R87 in line [00249],R88 in line [00249])", "S104:org.apache.kafka.clients.Metadata.update@POLYN259859 (R8 in line [00263],R89 in line [00263],R90 in line [00263],R91 in line [00263],R92 in line [00263])", "S104:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN262869", "S104:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN262869", "S104:org.apache.kafka.common.requests.MetadataResponse.brokersById@POLYN228573", "S104:org.apache.kafka.common.requests.MetadataResponse.holder@POLYN227966 (R93 in line [00001])", "S104:org.apache.kafka.common.requests.MetadataResponse.Holder.Holder@POLYN236117", "S104:org.apache.kafka.common.requests.MetadataResponse.Holder.Holder@POLYN236117.dummymethode_00001" ]
  }, {
    "_id" : "105",
    "_lesItems" : [ "S105:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN235653 (R82 in line [00242],R95 in line [00242])", "S105:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN235653 (R82 in line [00242],R95 in line [00242])", "S105:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN246413", "S105:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN245931", "S105:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN470540", "S105:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN468319", "S105:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN467189", "S105:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN467189", "S105:org.apache.kafka.connect.runtime.Worker.stop@POLYN427663", "S105:org.apache.kafka.connect.runtime.Worker.stop@POLYN427663", "S105:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN501866 (R32 in line [01751])" ]
  }, {
    "_id" : "106",
    "_lesItems" : [ "S106:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN266062 (R81 in line [00001],R115 in line [00001])", "S106:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN266357", "S106:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN266357", "S106:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN263055 (R81 in line [00001],R116 in line [00001])", "S106:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN263055 (R81 in line [00001],R116 in line [00001])", "S106:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN263055.dummymethode_00001" ]
  }, {
    "_id" : "107",
    "_lesItems" : [ "S107:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN201309", "S107:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN201035 (R117 in line [00157],R118 in line [00157],R119 in line [00157])", "S107:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN150694", "S107:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN150694.dummymethode_00038" ]
  }, {
    "_id" : "108",
    "_lesItems" : [ "S108:org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN205301 (R117 in line [00256],R143 in line [00256])", "S108:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN201035 (R117 in line [00157],R118 in line [00157],R119 in line [00157])", "S108:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN150694", "S108:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN150694.dummymethode_00038" ]
  }, {
    "_id" : "109",
    "_lesItems" : [ "S109:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN206748 (R128 in line [00254],R167 in line [00254])", "S109:org.apache.kafka.streams.state.internals.NamedCache.close@POLYN209650 (R117 in line [00345])", "S109:org.apache.kafka.streams.state.internals.NamedCache.close@POLYN209650 (R117 in line [00345])", "S109:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllCacheLevelSensors@POLYN304601 (R168 in line [00462])", "S109:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheSensorPrefix@POLYN305256", "S109:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheSensorPrefix@POLYN305256.dummymethode_00471" ]
  }, {
    "_id" : "110",
    "_lesItems" : [ "S110:org.apache.kafka.streams.state.internals.NamedCache.setListener@POLYN198438 (R117 in line [00104],R369 in line [00104])", "S110:org.apache.kafka.streams.state.internals.NamedCache.setListener@POLYN198438.dummymethode_00105" ]
  }, {
    "_id" : "111",
    "_lesItems" : [ "S111:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN201309", "S111:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN201035 (R117 in line [00157],R118 in line [00157],R119 in line [00157])", "S111:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN201035 (R117 in line [00157],R118 in line [00157],R119 in line [00157])", "S111:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN150694", "S111:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN150694.dummymethode_00038" ]
  }, {
    "_id" : "112",
    "_lesItems" : [ "S112:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN228450", "S112:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN228748 (R123 in line [00104],R124 in line [00104])", "S112:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN228748 (R123 in line [00104],R124 in line [00104])", "S112:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN231594", "S112:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN231594.dummymethode_00170" ]
  }, {
    "_id" : "113",
    "_lesItems" : [ "S113:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN228450", "S113:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN228748 (R123 in line [00104],R124 in line [00104])", "S113:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN228748 (R123 in line [00104],R124 in line [00104])", "S113:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN231594", "S113:org.apache.kafka.streams.processor.internals.TopologyMetadata.registerAndBuildNewTopology@POLYN256868", "S113:org.apache.kafka.streams.processor.internals.TopologyMetadata.buildAndVerifyTopology@POLYN260727", "S113:org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.rewriteTopology@POLYN494605 (R125 in line [00412])", "S113:org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.rewriteTopology@POLYN494605.dummymethode_00413" ]
  }, {
    "_id" : "114",
    "_lesItems" : [ "S114:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN197781 (R128 in line [00075],R129 in line [00075])", "S114:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN197781.dummymethode_00077" ]
  }, {
    "_id" : "115",
    "_lesItems" : [ "S115:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN206748 (R128 in line [00254],R167 in line [00254])", "S115:java.util.Hashtable.remove@POLYN483302" ]
  }, {
    "_id" : "116",
    "_lesItems" : [ "S116:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN197781 (R128 in line [00075],R129 in line [00075])", "S116:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN197781 (R128 in line [00075],R129 in line [00075])", "S116:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN197781.dummymethode_00077" ]
  }, {
    "_id" : "117",
    "_lesItems" : [ "S117:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN197781 (R128 in line [00075],R129 in line [00075])", "S117:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN197781 (R128 in line [00075],R129 in line [00075])", "S117:org.apache.kafka.streams.state.internals.NamedCache.evict@POLYN204356 (R117 in line [00235])", "S117:org.apache.kafka.streams.state.internals.NamedCache.evict@POLYN204356.dummymethode_00237" ]
  }, {
    "_id" : "118",
    "_lesItems" : [ "S118:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN238808 (R131 in line [00163])", "S118:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN239042 (R131 in line [00168],R132 in line [00175])", "S118:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN254429" ]
  }, {
    "_id" : "119",
    "_lesItems" : [ "S119:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN410114", "S119:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN416224", "S119:org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN250051 (R131 in line [00389],R160 in line [00389],R161 in line [00389])", "S119:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN254429" ]
  }, {
    "_id" : "120",
    "_lesItems" : [ "S120:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN410114", "S120:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN416224", "S120:org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN248746 (R131 in line [00357],R162 in line [00357])", "S120:java.util.Map.putAll" ]
  }, {
    "_id" : "121",
    "_lesItems" : [ "S121:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN410114", "S121:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN416224", "S121:org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN249170 (R131 in line [00367],R163 in line [00367])", "S121:java.util.Map.putAll" ]
  }, {
    "_id" : "122",
    "_lesItems" : [ "S122:org.apache.kafka.clients.consumer.MockConsumer.rebalance@POLYN235605 (R131 in line [00096],R180 in line [00096])", "S122:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN325595 (R2 in line [00273],R19 in line [00273])", "S122:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN325595.dummymethode_00277" ]
  }, {
    "_id" : "123",
    "_lesItems" : [ "S123:org.apache.kafka.clients.consumer.MockConsumer.position@POLYN248334 (R131 in line [00347])", "S123:org.apache.kafka.clients.consumer.MockConsumer.position@POLYN247634 (R131 in line [00334])", "S123:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN337985 (R2 in line [00537])", "S123:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN329550", "S123:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325", "S123:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325.dummymethode_00114" ]
  }, {
    "_id" : "124",
    "_lesItems" : [ "S124:org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN245814 (R131 in line [00295],R200 in line [00295],R201 in line [00295])", "S124:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN254429" ]
  }, {
    "_id" : "125",
    "_lesItems" : [ "S125:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN245281 (R131 in line [00280])", "S125:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN245604", "S125:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN244709 (R131 in line [00264],R210 in line [00264])", "S125:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN244093 (R131 in line [00254],R211 in line [00254],R212 in line [00254])", "S125:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN254429" ]
  }, {
    "_id" : "126",
    "_lesItems" : [ "S126:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN245434 (R131 in line [00285],R213 in line [00285])", "S126:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN245604", "S126:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN244709 (R131 in line [00264],R210 in line [00264])", "S126:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN244093 (R131 in line [00254],R211 in line [00254],R212 in line [00254])", "S126:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN254429" ]
  }, {
    "_id" : "127",
    "_lesItems" : [ "S127:org.apache.kafka.clients.consumer.MockConsumer.pause@POLYN250326 (R131 in line [00395],R214 in line [00395])", "S127:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN347440 (R2 in line [00737],R144 in line [00737])", "S127:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN329550", "S127:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325", "S127:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325.dummymethode_00114" ]
  }, {
    "_id" : "128",
    "_lesItems" : [ "S128:org.apache.kafka.clients.consumer.MockConsumer.resume@POLYN250648 (R131 in line [00403],R215 in line [00403])", "S128:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN347591 (R2 in line [00741],R145 in line [00741])", "S128:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN329550", "S128:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325", "S128:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325.dummymethode_00114" ]
  }, {
    "_id" : "129",
    "_lesItems" : [ "S129:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN236007 (R131 in line [00108],R230 in line [00108])", "S129:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN237835 (R131 in line [00141],R231 in line [00141],R232 in line [00141])", "S129:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN254429" ]
  }, {
    "_id" : "130",
    "_lesItems" : [ "S130:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN236214 (R131 in line [00113],R233 in line [00113],R234 in line [00113])", "S130:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN254429" ]
  }, {
    "_id" : "131",
    "_lesItems" : [ "S131:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN237649 (R131 in line [00136],R237 in line [00136])", "S131:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN237835 (R131 in line [00141],R231 in line [00141],R232 in line [00141])", "S131:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN254429" ]
  }, {
    "_id" : "132",
    "_lesItems" : [ "S132:org.apache.kafka.clients.consumer.MockConsumer.assign@POLYN238213 (R131 in line [00148],R285 in line [00148])", "S132:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN254429" ]
  }, {
    "_id" : "133",
    "_lesItems" : [ "S133:org.apache.kafka.clients.consumer.MockConsumer.addRecord@POLYN242733 (R131 in line [00227],R286 in line [00227])", "S133:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN254429" ]
  }, {
    "_id" : "134",
    "_lesItems" : [ "S134:org.apache.kafka.clients.consumer.MockConsumer.setException@POLYN243684 (R131 in line [00241],R287 in line [00241])", "S134:org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN243815 (R131 in line [00245],R288 in line [00245])", "S134:org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN243815.dummymethode_00246" ]
  }, {
    "_id" : "135",
    "_lesItems" : [ "S135:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN244915 (R131 in line [00269])", "S135:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN245040 (R131 in line [00274],R289 in line [00274])", "S135:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN254429" ]
  }, {
    "_id" : "136",
    "_lesItems" : [ "S136:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN253192", "S136:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN253354 (R131 in line [00455],R308 in line [00455])", "S136:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN253354.dummymethode_00456" ]
  }, {
    "_id" : "137",
    "_lesItems" : [ "S137:org.apache.kafka.clients.consumer.MockConsumer.setOffsetsException@POLYN243947 (R131 in line [00249],R315 in line [00249])", "S137:org.apache.kafka.clients.consumer.MockConsumer.setOffsetsException@POLYN243947.dummymethode_00250" ]
  }, {
    "_id" : "138",
    "_lesItems" : [ "S138:org.apache.kafka.clients.consumer.MockConsumer.seekToBeginning@POLYN248512 (R131 in line [00352],R316 in line [00352])", "S138:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN254429" ]
  }, {
    "_id" : "139",
    "_lesItems" : [ "S139:org.apache.kafka.clients.consumer.MockConsumer.seekToEnd@POLYN248936 (R131 in line [00362],R317 in line [00362])", "S139:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN254429" ]
  }, {
    "_id" : "140",
    "_lesItems" : [ "S140:org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN253907 (R131 in line [00473],R318 in line [00473],R132 in line [00474])", "S140:org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN253907.dummymethode_00475" ]
  }, {
    "_id" : "141",
    "_lesItems" : [ "S141:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN238808 (R131 in line [00163])", "S141:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN239042 (R131 in line [00168],R132 in line [00175])", "S141:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN239042 (R131 in line [00168],R132 in line [00175])", "S141:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN254429" ]
  }, {
    "_id" : "142",
    "_lesItems" : [ "S142:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN238808 (R131 in line [00163])", "S142:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN239042 (R131 in line [00168],R132 in line [00175])", "S142:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN239042 (R131 in line [00168],R132 in line [00175])", "S142:org.apache.kafka.clients.consumer.MockConsumer.updateFetchPosition@POLYN254587", "S142:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN343202", "S142:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN342591 (R2 in line [00636],R3 in line [00636],R4 in line [00636])", "S142:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN329550", "S142:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325", "S142:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325.dummymethode_00114" ]
  }, {
    "_id" : "143",
    "_lesItems" : [ "S143:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN325991", "S143:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN325991", "S143:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN333423", "S143:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN391325 (R42 in line [00599],R136 in line [00599],R137 in line [00599])", "S143:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN389292 (R42 in line [00557],R59 in line [00557])", "S143:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN157390", "S143:java.util.Map.get@POLYN434899" ]
  }, {
    "_id" : "144",
    "_lesItems" : [ "S144:org.apache.kafka.common.network.Selector.connect@POLYN409491", "S144:org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN411219", "S144:java.net.Socket.setSendBufferSize@POLYN500567 (R146 in line [00001],R147 in line [00001])" ]
  }, {
    "_id" : "145",
    "_lesItems" : [ "S145:org.apache.kafka.common.network.Selector.connect@POLYN409491", "S145:org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN411219", "S145:java.net.Socket.setReceiveBufferSize@POLYN503274 (R146 in line [00001],R148 in line [00001])" ]
  }, {
    "_id" : "146",
    "_lesItems" : [ "S146:java.net.Socket.Socket@POLYN475395", "S146:java.net.Socket.close@POLYN511004 (R146 in line [00001],R179 in line [00001])", "S146:java.net.Socket.close@POLYN511004 (R146 in line [00001],R179 in line [00001])", "S146:java.net.Socket.close@POLYN511004.dummymethode_00001" ]
  }, {
    "_id" : "147",
    "_lesItems" : [ "S147:java.net.Socket.setSocketImplFactory@POLYN516202 (R146 in line [00001],R361 in line [00001])", "S147:java.net.Socket.setSocketImplFactory@POLYN516202.dummymethode_00001" ]
  }, {
    "_id" : "148",
    "_lesItems" : [ "S148:org.apache.kafka.common.network.Selector.SelectorMetrics.close@POLYN470236", "S148:org.apache.kafka.common.network.Selector.SelectorMetrics.close@POLYN470236", "S148:org.apache.kafka.common.metrics.internals.IntGaugeSuite.close@POLYN195134 (R151 in line [00256])", "S148:org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN192856", "S148:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN308623 (R15 in line [00558])", "S148:java.util.Map.remove@POLYN454833" ]
  }, {
    "_id" : "149",
    "_lesItems" : [ "S149:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN194138 (R151 in line [00235],R222 in line [00235])", "S149:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN194138.dummymethode_00237" ]
  }, {
    "_id" : "150",
    "_lesItems" : [ "S150:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN172724 (R154 in line [00139],R155 in line [00139])", "S150:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN172724.dummymethode_00141" ]
  }, {
    "_id" : "151",
    "_lesItems" : [ "S151:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN170246 (R154 in line [00076],R184 in line [00076])", "S151:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN170246.dummymethode_00078" ]
  }, {
    "_id" : "152",
    "_lesItems" : [ "S152:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN174017 (R154 in line [00169],R354 in line [00169])", "S152:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN174017 (R154 in line [00169],R354 in line [00169])", "S152:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN174017.dummymethode_00173" ]
  }, {
    "_id" : "153",
    "_lesItems" : [ "S153:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN172724 (R154 in line [00139],R155 in line [00139])", "S153:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN172724 (R154 in line [00139],R155 in line [00139])", "S153:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN172724.dummymethode_00141" ]
  }, {
    "_id" : "154",
    "_lesItems" : [ "S154:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN170246 (R154 in line [00076],R184 in line [00076])", "S154:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN170246 (R154 in line [00076],R184 in line [00076])", "S154:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN170246.dummymethode_00078" ]
  }, {
    "_id" : "155",
    "_lesItems" : [ "S155:org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetIfNeeded@POLYN509935", "S155:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN330662 (R2 in line [00390],R190 in line [00390],R191 in line [00390],R192 in line [00390])", "S155:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN330662 (R2 in line [00390],R190 in line [00390],R191 in line [00390],R192 in line [00390])", "S155:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN329917", "S155:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325", "S155:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN179325.dummymethode_00114" ]
  }, {
    "_id" : "156",
    "_lesItems" : [ "S156:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN428032 (R28 in line [01023],R217 in line [01023],R218 in line [01023],R219 in line [01023])", "S156:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN427734 (R28 in line [01017],R186 in line [01017],R187 in line [01017])", "S156:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN427035 (R28 in line [01004],R188 in line [01004],R189 in line [01004])", "S156:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN427035.dummymethode_01005" ]
  }, {
    "_id" : "157",
    "_lesItems" : [ "S157:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN342786 (R2 in line [00640],R220 in line [00640],R221 in line [00640])", "S157:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN342786 (R2 in line [00640],R220 in line [00640],R221 in line [00640])", "S157:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN342786.dummymethode_00641" ]
  }, {
    "_id" : "158",
    "_lesItems" : [ "S158:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN342786 (R2 in line [00640],R220 in line [00640],R221 in line [00640])", "S158:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN342786 (R2 in line [00640],R220 in line [00640],R221 in line [00640])", "S158:java.io.InputStream.reset@POLYN260348 (R5 in line [00350])" ]
  }, {
    "_id" : "159",
    "_lesItems" : [ "S159:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN194138 (R151 in line [00235],R222 in line [00235])", "S159:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN194138 (R151 in line [00235],R222 in line [00235])", "S159:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN194138.dummymethode_00237" ]
  }, {
    "_id" : "160",
    "_lesItems" : [ "S160:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN167574 (R248 in line [00071],R249 in line [00071])", "S160:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN167195 (R248 in line [00063],R250 in line [00063])", "S160:java.util.Map.remove@POLYN454833" ]
  }, {
    "_id" : "161",
    "_lesItems" : [ "S161:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN168262 (R248 in line [00084],R251 in line [00084])", "S161:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN167719 (R248 in line [00076],R252 in line [00076])", "S161:org.apache.kafka.connect.util.Table.remove@POLYN155979", "S161:org.apache.kafka.connect.util.Table.remove@POLYN155979.dummymethode_00046" ]
  }, {
    "_id" : "162",
    "_lesItems" : [ "S162:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN244915 (R131 in line [00269])", "S162:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN245040 (R131 in line [00274],R289 in line [00274])", "S162:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN245040 (R131 in line [00274],R289 in line [00274])", "S162:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN254429" ]
  }, {
    "_id" : "163",
    "_lesItems" : [ "S163:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN170834 (R375 in line [00093],R376 in line [00093])", "S163:org.apache.kafka.common.utils.Time.milliseconds@POLYN160529" ]
  }, {
    "_id" : "164",
    "_lesItems" : [ "S164:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN170834 (R375 in line [00093],R376 in line [00093])", "S164:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN170834 (R375 in line [00093],R376 in line [00093])", "S164:org.apache.kafka.common.utils.Time.milliseconds@POLYN160529" ]
  } ],
  "_lesDeadlocksTypos" : [ ]
}