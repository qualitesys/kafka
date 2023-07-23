{
  "_lesSequences" : [ {
    "_id" : "1",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.INVALIDATED",
      "_method" : "---java.io.BufferedReader.fill@POLYN239769.dummymethode_00138 in line [00138]",
      "_target" : "java.io.BufferedReader.markedChar",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN247910.dummymethode_00342 in line [00342]",
      "_target" : "java.io.BufferedReader.readLine@POLYN247910.i",
      "_risk" : "//QC-JAVCWE099[00342] In java.io.BufferedReader.readLine@POLYN247910[00342] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN247910.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN247910.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN247910[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedReader.readLine@POLYN247910.i",
      "_method" : "---java.io.BufferedReader.readLine@POLYN247910.dummymethode_00351 in line [00351]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : "//QC-JAVCWE099[00351] In java.io.BufferedReader.readLine@POLYN247910[00351] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.BufferedReader.readLine@POLYN247910.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN247910.dummymethode_00356 in line [00356]",
      "_target" : "java.io.BufferedReader.readLine@POLYN247910.str",
      "_risk" : "//QC-JAVCWE099[00356] In java.io.BufferedReader.readLine@POLYN247910[00356] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.BufferedReader.readLine@POLYN247910.str",
      "_method" : "---java.io.BufferedReader.readLine@POLYN247910.dummymethode_00365 in line [00365]",
      "_target" : "java.io.BufferedReader.readLine@POLYN247910.return",
      "_risk" : "//QC-JAVCWE099[00365] In java.io.BufferedReader.readLine@POLYN247910[00365] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedReader.readLine@POLYN247910.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN247910 in line [00389]",
      "_target" : "java.io.BufferedReader.readLine@POLYN251111.return",
      "_risk" : "//QC-JAVCWE099[00389] In java.io.BufferedReader.readLine@POLYN251111[00389] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "8",
      "_source" : "java.io.BufferedReader.markedChar",
      "_method" : "---java.io.BufferedReader.reset@POLYN255094.dummymethode_00515 in line [00515]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.util.HashMap.put@POLYN630398.return",
      "_method" : "---java.util.HashMap.put@POLYN630398 in line [00226]",
      "_target" : "java.io.ObjectInputStream.cibledummy_00226",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.lang.Integer.parseInt@POLYN436731.s",
      "_method" : "---java.lang.Integer.parseInt@POLYN433183 in line [00527]",
      "_target" : "java.lang.Integer.parseInt@POLYN436731.return",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "java.util.HashMap.put@POLYN630398.key",
      "_method" : "---java.util.HashMap.putVal@POLYN630921 in line [00609]",
      "_target" : "java.util.HashMap.put@POLYN630398.return",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.CompletedFetch@POLYN554057.dummymethode_01521 in line [01521]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "13",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473.dummymethode_01264 in line [01264]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473.tp",
      "_risk" : ""
    }, {
      "_id" : "14",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN350337 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN350337.tp",
      "_risk" : ""
    }, {
      "_id" : "15",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN350337.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN179315 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN179315.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "16",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN179315.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN630398 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN630398.key",
      "_risk" : ""
    }, {
      "_id" : "17",
      "_source" : "java.lang.Integer.parseInt@POLYN436731.return",
      "_method" : "---java.lang.Integer.parseInt@POLYN436731 in line [00081]",
      "_target" : "partition",
      "_risk" : ""
    }, {
      "_id" : "18",
      "_source" : "java.io.BufferedReader.readLine@POLYN251111.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN251111 in line [00197]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN189447.line",
      "_risk" : "//QC-JAVCWE099[00197] In org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN189447[00197] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "19",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN189447.line",
      "_method" : "---java.lang.Integer.parseInt@POLYN436731 in line [00201]",
      "_target" : "java.lang.Integer.parseInt@POLYN436731.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "2",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN247910.dummymethode_00342 in line [00342]",
      "_target" : "java.io.BufferedReader.readLine@POLYN247910.i",
      "_risk" : "//QC-JAVCWE099[00342] In java.io.BufferedReader.readLine@POLYN247910[00342] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN247910.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN247910.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN247910[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.readLine@POLYN247910.i",
      "_method" : "---java.io.BufferedReader.readLine@POLYN247910.dummymethode_00351 in line [00351]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : "//QC-JAVCWE099[00351] In java.io.BufferedReader.readLine@POLYN247910[00351] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedReader.readLine@POLYN247910.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN247910.dummymethode_00356 in line [00356]",
      "_target" : "java.io.BufferedReader.readLine@POLYN247910.str",
      "_risk" : "//QC-JAVCWE099[00356] In java.io.BufferedReader.readLine@POLYN247910[00356] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.BufferedReader.readLine@POLYN247910.str",
      "_method" : "---java.io.BufferedReader.readLine@POLYN247910.dummymethode_00365 in line [00365]",
      "_target" : "java.io.BufferedReader.readLine@POLYN247910.return",
      "_risk" : "//QC-JAVCWE099[00365] In java.io.BufferedReader.readLine@POLYN247910[00365] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.BufferedReader.readLine@POLYN247910.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN247910 in line [00389]",
      "_target" : "java.io.BufferedReader.readLine@POLYN251111.return",
      "_risk" : "//QC-JAVCWE099[00389] In java.io.BufferedReader.readLine@POLYN251111[00389] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedReader.skip@POLYN251439.n",
      "_method" : "---java.io.BufferedReader.skip@POLYN251439.dummymethode_00408 in line [00408]",
      "_target" : "java.io.BufferedReader.skip@POLYN251439.r",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.io.BufferedReader.skip@POLYN251439.r",
      "_method" : "---java.io.BufferedReader.skip@POLYN251439.dummymethode_00422 in line [00422]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.util.HashMap.put@POLYN630398.return",
      "_method" : "---java.util.HashMap.put@POLYN630398 in line [00226]",
      "_target" : "java.io.ObjectInputStream.cibledummy_00226",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.lang.Integer.parseInt@POLYN436731.s",
      "_method" : "---java.lang.Integer.parseInt@POLYN433183 in line [00527]",
      "_target" : "java.lang.Integer.parseInt@POLYN436731.return",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "java.util.HashMap.put@POLYN630398.key",
      "_method" : "---java.util.HashMap.putVal@POLYN630921 in line [00609]",
      "_target" : "java.util.HashMap.put@POLYN630398.return",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.CompletedFetch@POLYN554057.dummymethode_01521 in line [01521]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "13",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473.dummymethode_01264 in line [01264]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473.tp",
      "_risk" : ""
    }, {
      "_id" : "14",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN350337 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN350337.tp",
      "_risk" : ""
    }, {
      "_id" : "15",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN350337.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN179315 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN179315.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "16",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN179315.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN630398 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN630398.key",
      "_risk" : ""
    }, {
      "_id" : "17",
      "_source" : "java.lang.Integer.parseInt@POLYN436731.return",
      "_method" : "---java.lang.Integer.parseInt@POLYN436731 in line [00081]",
      "_target" : "partition",
      "_risk" : ""
    }, {
      "_id" : "18",
      "_source" : "java.io.BufferedReader.readLine@POLYN251111.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN251111 in line [00197]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN189447.line",
      "_risk" : "//QC-JAVCWE099[00197] In org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN189447[00197] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "19",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN189447.line",
      "_method" : "---java.lang.Integer.parseInt@POLYN436731 in line [00201]",
      "_target" : "java.lang.Integer.parseInt@POLYN436731.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "3",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN247910.dummymethode_00342 in line [00342]",
      "_target" : "java.io.BufferedReader.readLine@POLYN247910.i",
      "_risk" : "//QC-JAVCWE099[00342] In java.io.BufferedReader.readLine@POLYN247910[00342] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN247910.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN247910.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN247910[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.readLine@POLYN247910.i",
      "_method" : "---java.io.BufferedReader.readLine@POLYN247910.dummymethode_00351 in line [00351]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : "//QC-JAVCWE099[00351] In java.io.BufferedReader.readLine@POLYN247910[00351] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.BufferedReader.readLine@POLYN247910.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN247910.dummymethode_00356 in line [00356]",
      "_target" : "java.io.BufferedReader.readLine@POLYN247910.str",
      "_risk" : "//QC-JAVCWE099[00356] In java.io.BufferedReader.readLine@POLYN247910[00356] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.BufferedReader.readLine@POLYN247910.str",
      "_method" : "---java.io.BufferedReader.readLine@POLYN247910.dummymethode_00365 in line [00365]",
      "_target" : "java.io.BufferedReader.readLine@POLYN247910.return",
      "_risk" : "//QC-JAVCWE099[00365] In java.io.BufferedReader.readLine@POLYN247910[00365] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.BufferedReader.readLine@POLYN247910.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN247910 in line [00389]",
      "_target" : "java.io.BufferedReader.readLine@POLYN251111.return",
      "_risk" : "//QC-JAVCWE099[00389] In java.io.BufferedReader.readLine@POLYN251111[00389] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedReader.skip@POLYN251439.r",
      "_method" : "---java.io.BufferedReader.skip@POLYN251439.dummymethode_00422 in line [00422]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "0",
      "_method" : "---java.io.BufferedReader.skip@POLYN251439.dummymethode_00423 in line [00423]",
      "_target" : "java.io.BufferedReader.skip@POLYN251439.r",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.lang.Integer.parseInt@POLYN436731.s",
      "_method" : "---java.lang.Integer.parseInt@POLYN433183 in line [00527]",
      "_target" : "java.lang.Integer.parseInt@POLYN436731.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "org.apache.kafka.raft.RaftConfig.parseVoterId@POLYN192475.return",
      "_method" : "---org.apache.kafka.raft.RaftConfig.parseVoterId@POLYN192475 in line [00218]",
      "_target" : "org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN192827.voterId",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN192827.voterId",
      "_method" : "---org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN192827.dummymethode_00235 in line [00235]",
      "_target" : "org.apache.kafka.raft.RaftConfig.parseVoterConnections@POLYN192827.cibledummy_00235",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "java.lang.Integer.parseInt@POLYN436731.return",
      "_method" : "---java.lang.Integer.parseInt@POLYN436731 in line [00203]",
      "_target" : "org.apache.kafka.raft.RaftConfig.parseVoterId@POLYN192475.return",
      "_risk" : ""
    }, {
      "_id" : "13",
      "_source" : "java.io.BufferedReader.readLine@POLYN251111.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN251111 in line [00197]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN189447.line",
      "_risk" : "//QC-JAVCWE099[00197] In org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN189447[00197] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "14",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN189447.line",
      "_method" : "---java.lang.Integer.parseInt@POLYN436731 in line [00201]",
      "_target" : "java.lang.Integer.parseInt@POLYN436731.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "4",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "1",
      "_method" : "---java.io.InputStream.read@POLYN255230.dummymethode_00177 in line [00177]",
      "_target" : "java.io.InputStream.read@POLYN255230.i",
      "_risk" : "//QC-JAVCWE099[00177] In java.io.InputStream.read@POLYN255230[00177] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.InputStream.read@POLYN255230.i",
      "_method" : "---java.io.InputStream.read@POLYN255230.dummymethode_00188 in line [00188]",
      "_target" : "java.io.InputStream.read@POLYN255230.return",
      "_risk" : "//QC-JAVCWE099[00188] In java.io.InputStream.read@POLYN255230[00188] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882024.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN882024 in line [02938]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN894970.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.read@POLYN813480.return",
      "_method" : "---java.io.ObjectInputStream.read@POLYN813480 in line [03091]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN902639.v",
      "_risk" : "//QC-JAVCWE099[03091] In java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN902639[03091] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN902639.v",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN902639.dummymethode_03095 in line [03095]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN902639.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.InputStream.read@POLYN255230.return",
      "_method" : "---java.io.InputStream.read@POLYN255230 in line [02598]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.peekb",
      "_risk" : "//QC-JAVCWE099[02598] In java.io.ObjectInputStream.PeekInputStream.peek@POLYN881617[02598] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.peekb",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN882024.dummymethode_02605 in line [02605]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882024.v",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882024.v",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN882024.dummymethode_02607 in line [02607]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882024.return",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN894970.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN894970 in line [00893]",
      "_target" : "java.io.ObjectInputStream.read@POLYN813480.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN902639.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN902639 in line [00979]",
      "_target" : "java.io.ObjectInputStream.readUnsignedByte@POLYN816245.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "5",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN374504.s",
      "_method" : "---java.io.PrintStream.write@POLYN369313 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN369313.s",
      "_risk" : "//QC-JAVCWE099[00669] In java.io.PrintStream.print@POLYN374504[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.valueOf@POLYN921674.return",
      "_method" : "---java.lang.String.valueOf@POLYN921674 in line [00821]",
      "_target" : "java.io.PrintStream.println@POLYN379474.s",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.println@POLYN379474.s",
      "_method" : "---java.io.PrintStream.print@POLYN374504 in line [00823]",
      "_target" : "java.io.PrintStream.print@POLYN374504.s",
      "_risk" : "//QC-JAVCWE099[00823] In java.io.PrintStream.println@POLYN379474[00823] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.PrintStream.write@POLYN369313.s",
      "_method" : "---java.io.PrintWriter.write@POLYN353240 in line [00525]",
      "_target" : "java.io.PrintWriter.write@POLYN353240.s",
      "_risk" : "//QC-JAVCWE099[00525] In java.io.PrintStream.write@POLYN369313[00525] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.PrintWriter.write@POLYN353240.s",
      "_method" : "---java.io.PrintWriter.write@POLYN353240 in line [00473]",
      "_target" : "java.io.PrintWriter.write@POLYN353240.cibledummy_00473",
      "_risk" : "//QC-JAVCWE099[00473] In java.io.PrintWriter.write@POLYN353240[00473] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.lang.Double.toString@POLYN384294.d",
      "_method" : "---java.lang.Double.toString@POLYN384294.dummymethode_00196 in line [00196]",
      "_target" : "java.lang.Double.toString@POLYN384294.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.String.valueOf@POLYN921674.d",
      "_method" : "---java.lang.Double.toString@POLYN384294 in line [00001]",
      "_target" : "java.lang.Double.toString@POLYN384294.d",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.lang.Double.toString@POLYN384294.return",
      "_method" : "---java.lang.Double.toString@POLYN384294 in line [00001]",
      "_target" : "java.lang.String.valueOf@POLYN921674.return",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "java.util.Map.getValue@POLYN443876.return",
      "_method" : "---java.util.Map.getValue@POLYN443876 in line [00266]",
      "_target" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN209776.valueRaw",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN209776.valueRaw",
      "_method" : "---java.lang.String.valueOf@POLYN921674 in line [00272]",
      "_target" : "java.lang.String.valueOf@POLYN921674.d",
      "_risk" : ""
    } ]
  }, {
    "_id" : "6",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN918831.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN918831 in line [03183]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN907550.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.toString@POLYN245138.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN245138 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN918831.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readString@POLYN848732.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN848732 in line [01963]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN854061.name",
      "_risk" : "//QC-JAVCWZ099[01963] In java.io.ObjectInputStream.readEnum@POLYN854061[01963] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN820497.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN820497 in line [01863]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN848732.str",
      "_risk" : "//QC-JAVCWZ099[01863] In java.io.ObjectInputStream.readString@POLYN848732[01863] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readString@POLYN848732.str",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN848732.dummymethode_01876 in line [01876]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN848732.return",
      "_risk" : "//QC-JAVCWZ099[01876] In java.io.ObjectInputStream.readString@POLYN848732[01876] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN907550.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN907550 in line [01124]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN820497.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.StringBuilder.toString@POLYN245138.0",
      "_method" : "---java.lang.StringBuilder.toString@POLYN245138.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN245138.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "7",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN918831.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN918831 in line [03183]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN907550.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.toString@POLYN245138.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN245138 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN918831.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readString@POLYN848732.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN848732 in line [01963]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN854061.name",
      "_risk" : "//QC-JAVCWZ099[01963] In java.io.ObjectInputStream.readEnum@POLYN854061[01963] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN820497.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN820497 in line [01863]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN848732.str",
      "_risk" : "//QC-JAVCWZ099[01863] In java.io.ObjectInputStream.readString@POLYN848732[01863] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readString@POLYN848732.str",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN848732.dummymethode_01876 in line [01876]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN848732.return",
      "_risk" : "//QC-JAVCWZ099[01876] In java.io.ObjectInputStream.readString@POLYN848732[01876] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN907550.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN907550 in line [01124]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN820497.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.StringBuilder.toString@POLYN245138.count",
      "_method" : "---java.lang.StringBuilder.toString@POLYN245138.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN245138.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "8",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN918831.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN918831 in line [03183]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN907550.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.toString@POLYN245138.return",
      "_method" : "---java.lang.StringBuilder.toString@POLYN245138 in line [03388]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN918831.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readString@POLYN848732.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN848732 in line [01963]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN854061.name",
      "_risk" : "//QC-JAVCWZ099[01963] In java.io.ObjectInputStream.readEnum@POLYN854061[01963] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readUTF@POLYN820497.return",
      "_method" : "---java.io.ObjectInputStream.readUTF@POLYN820497 in line [01863]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN848732.str",
      "_risk" : "//QC-JAVCWZ099[01863] In java.io.ObjectInputStream.readString@POLYN848732[01863] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readString@POLYN848732.str",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN848732.dummymethode_01876 in line [01876]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN848732.return",
      "_risk" : "//QC-JAVCWZ099[01876] In java.io.ObjectInputStream.readString@POLYN848732[01876] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN907550.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTF@POLYN907550 in line [01124]",
      "_target" : "java.io.ObjectInputStream.readUTF@POLYN820497.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.StringBuilder.toString@POLYN245138.value",
      "_method" : "---java.lang.StringBuilder.toString@POLYN245138.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN245138.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "9",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN611913.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN611913.dummymethode_01533 in line [01533]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN611913.cibledummy_01533",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN575372.obj",
      "_method" : "---java.io.ObjectOutputStream.replaceObject@POLYN575372.dummymethode_00588 in line [00588]",
      "_target" : "java.io.ObjectOutputStream.replaceObject@POLYN575372.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN575372.return",
      "_method" : "---java.io.ObjectOutputStream.replaceObject@POLYN575372 in line [01144]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN591607.rep",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN591607.rep",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN591607.dummymethode_01149 in line [01149]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN591607.obj",
      "_risk" : "//QC-JAVCWZ099[01149] In java.io.ObjectOutputStream.writeObject0@POLYN591607[01149] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN591607.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN607426 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN607426.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN591607[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN607426.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN610062 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN610062.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN607426[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN610062.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN611913 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN611913.obj",
      "_risk" : ""
    } ]
  }, {
    "_id" : "10",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteObject@POLYN569965.dummymethode_00434 in line [00434]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteObject@POLYN569965.ctx",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN601662.objs[i]",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN591607 in line [01378]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN591607.obj",
      "_risk" : "//QC-JAVCWZ099[01378] In java.io.ObjectOutputStream.writeArray@POLYN601662[01378] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN608866.dummymethode_01452 in line [01452]",
      "_target" : "java.io.ObjectOutputStream.writeExternalData@POLYN608866.oldContext",
      "_risk" : "//QC-JAVCWZ099[01452] In java.io.ObjectOutputStream.writeExternalData@POLYN608866[01452] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN608866.oldContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN608866.dummymethode_01464 in line [01464]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01464] In java.io.ObjectOutputStream.writeExternalData@POLYN608866[01464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN591607.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN607426 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN607426.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN591607[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN607426.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN610062 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN610062.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN607426[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN610062.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN610062.dummymethode_01494 in line [01494]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01494] In java.io.ObjectOutputStream.writeSerialData@POLYN610062[01494] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "11",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteObject@POLYN569965.dummymethode_00434 in line [00434]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteObject@POLYN569965.ctx",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN608866.dummymethode_01452 in line [01452]",
      "_target" : "java.io.ObjectOutputStream.writeExternalData@POLYN608866.oldContext",
      "_risk" : "//QC-JAVCWZ099[01452] In java.io.ObjectOutputStream.writeExternalData@POLYN608866[01452] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN608866.oldContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN608866.dummymethode_01464 in line [01464]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01464] In java.io.ObjectOutputStream.writeExternalData@POLYN608866[01464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN591607.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN607426 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN607426.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN591607[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN607426.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN610062 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN610062.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN607426[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN610062.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN610062.dummymethode_01494 in line [01494]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01494] In java.io.ObjectOutputStream.writeSerialData@POLYN610062[01494] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN569309.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN591607 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN591607.obj",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN569309[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "12",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeLong@POLYN581953.val",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN581953 in line [00808]",
      "_target" : "java.io.ObjectOutputStream.writeLong@POLYN581953.cibledummy_00808",
      "_risk" : "//QC-JAVCWE099[00808] In java.io.ObjectOutputStream.writeLong@POLYN581953[00808] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252023.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN253569 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN253569.timestamp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN253569.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN254915 in line [00428]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254915.timestamp",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254915.timestamp",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN581953 in line [00468]",
      "_target" : "java.io.ObjectOutputStream.writeLong@POLYN581953.val",
      "_risk" : "//QC-JAVCWE099[00468] In org.apache.kafka.common.record.LegacyRecord.write@POLYN254915[00468] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN250936.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN252023 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252023.timestamp",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "timestampType==TimestampType.LOG_APPEND_TIME?logAppendTime_maxTimestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN304023.dummymethode_00424 in line [00424]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN304023.timestamp",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN304023.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN250936 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN250936.timestamp",
      "_risk" : ""
    } ]
  }, {
    "_id" : "13",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN241418.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN241418.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN241418.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN241418[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.getBytes@POLYN837140.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN837140.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN837140.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN421966.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN421966 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN238212.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN238212.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN241418 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN241418.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN238212[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslServer.process@POLYN194923.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN837140 in line [00165]",
      "_target" : "java.lang.String.getBytes@POLYN837140.charsetName",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.lang.String.getBytes@POLYN837140.return",
      "_method" : "---java.lang.String.getBytes@POLYN837140 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN421966.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "14",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN241418.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN241418.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN241418.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN241418[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.getBytes@POLYN837140.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN837140.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN837140.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN421966.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN421966 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN238212.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN238212.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN241418 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN241418.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN238212[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.security.scram.internals.ScramFormatter.toBytes@POLYN192718.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN837140 in line [00170]",
      "_target" : "java.lang.String.getBytes@POLYN837140.charsetName",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.lang.String.getBytes@POLYN837140.return",
      "_method" : "---java.lang.String.getBytes@POLYN837140 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN421966.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "15",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN241418.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN241418.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN241418.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN241418[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.getBytes@POLYN837140.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN837140.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN837140.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN421966.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN421966 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN238212.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN238212.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN241418 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN241418.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN238212[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN421966.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN837140 in line [00172]",
      "_target" : "java.lang.String.getBytes@POLYN837140.charsetName",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.lang.String.getBytes@POLYN837140.return",
      "_method" : "---java.lang.String.getBytes@POLYN837140 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN421966.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "16",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN241418.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN241418.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN241418.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN241418[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.getBytes@POLYN837140.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN837140.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN837140.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN421966.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN421966 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN238212.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN238212.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN241418 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN241418.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN238212[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.lang.String.getBytes@POLYN837140.return",
      "_method" : "---java.lang.String.getBytes@POLYN837140 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN421966.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.toBytes@POLYN199229.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN837140 in line [00206]",
      "_target" : "java.lang.String.getBytes@POLYN837140.charsetName",
      "_risk" : ""
    } ]
  }, {
    "_id" : "17",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readArray@POLYN849705.false",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN833848 in line [01908]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN833848.unshared",
      "_risk" : "//QC-JAVCWZ099[01908] In java.io.ObjectInputStream.readArray@POLYN849705[01908] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN842140.unshared",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN843607 in line [01710]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN842140.descriptor",
      "_risk" : "//QC-JAVCWZ099[01710] In java.io.ObjectInputStream.readClassDesc@POLYN842140[01710] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN842140.descriptor",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN842140.dummymethode_01722 in line [01722]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN842140.return",
      "_risk" : "//QC-JAVCWZ099[01722] In java.io.ObjectInputStream.readClassDesc@POLYN842140[01722] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN833848.unshared",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN842140 in line [01522]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN842140.unshared",
      "_risk" : "//QC-JAVCWZ099[01522] In java.io.ObjectInputStream.readObject0@POLYN833848[01522] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN842140.return",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN842140 in line [02000]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN856325.desc",
      "_risk" : "//QC-JAVCWZ099[02000] In java.io.ObjectInputStream.readOrdinaryObject@POLYN856325[02000] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN856325.desc",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN861480 in line [02027]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN856325.cibledummy_02027",
      "_risk" : "//QC-JAVCWZ099[02027] In java.io.ObjectInputStream.readOrdinaryObject@POLYN856325[02027] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "18",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN842140.unshared",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN843607 in line [01710]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN842140.descriptor",
      "_risk" : "//QC-JAVCWZ099[01710] In java.io.ObjectInputStream.readClassDesc@POLYN842140[01710] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN842140.descriptor",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN842140.dummymethode_01722 in line [01722]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN842140.return",
      "_risk" : "//QC-JAVCWZ099[01722] In java.io.ObjectInputStream.readClassDesc@POLYN842140[01722] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN833848.unshared",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN842140 in line [01522]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN842140.unshared",
      "_risk" : "//QC-JAVCWZ099[01522] In java.io.ObjectInputStream.readObject0@POLYN833848[01522] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN842140.return",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN842140 in line [02000]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN856325.desc",
      "_risk" : "//QC-JAVCWZ099[02000] In java.io.ObjectInputStream.readOrdinaryObject@POLYN856325[02000] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN856325.desc",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN861480 in line [02027]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN856325.cibledummy_02027",
      "_risk" : "//QC-JAVCWZ099[02027] In java.io.ObjectInputStream.readOrdinaryObject@POLYN856325[02027] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.skipCustomData@POLYN864664.false",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN833848 in line [02211]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN833848.unshared",
      "_risk" : "//QC-JAVCWZ099[02211] In java.io.ObjectInputStream.skipCustomData@POLYN864664[02211] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "19",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN601662.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN597138 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN597138.desc",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN601662[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN597138.desc",
      "_method" : "---java.io.ObjectOutputStream.writeNonProxyDesc@POLYN599635 in line [01231]",
      "_target" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN599635.desc",
      "_risk" : "//QC-JAVCWZ099[01231] In java.io.ObjectOutputStream.writeClassDesc@POLYN597138[01231] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN599635.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDescriptor@POLYN577844 in line [01282]",
      "_target" : "java.io.ObjectOutputStream.writeClassDescriptor@POLYN577844.desc",
      "_risk" : "//QC-JAVCWZ099[01282] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN599635[01282] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.lang.Object.getClass@POLYN295483.return",
      "_method" : "---java.lang.Object.getClass@POLYN295483 in line [01129]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN591607.cl",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN591607.cl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN591607.dummymethode_01134 in line [01134]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN591607.desc",
      "_risk" : "//QC-JAVCWZ099[01134] In java.io.ObjectOutputStream.writeObject0@POLYN591607[01134] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN591607.desc",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN601662 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN601662.desc",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN591607[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "20",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN601662.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN597138 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN597138.desc",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN601662[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN597138.desc",
      "_method" : "---java.io.ObjectOutputStream.writeNonProxyDesc@POLYN599635 in line [01231]",
      "_target" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN599635.desc",
      "_risk" : "//QC-JAVCWZ099[01231] In java.io.ObjectOutputStream.writeClassDesc@POLYN597138[01231] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN599635.desc",
      "_method" : "---java.io.ObjectOutputStream.writeClassDescriptor@POLYN577844 in line [01282]",
      "_target" : "java.io.ObjectOutputStream.writeClassDescriptor@POLYN577844.desc",
      "_risk" : "//QC-JAVCWZ099[01282] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN599635[01282] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN591607.cl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN591607.dummymethode_01134 in line [01134]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN591607.desc",
      "_risk" : "//QC-JAVCWZ099[01134] In java.io.ObjectOutputStream.writeObject0@POLYN591607[01134] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN591607.repCl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN591607.dummymethode_01141 in line [01141]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN591607.cl",
      "_risk" : "//QC-JAVCWZ099[01141] In java.io.ObjectOutputStream.writeObject0@POLYN591607[01141] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN591607.desc",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN601662 in line [01174]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN601662.desc",
      "_risk" : "//QC-JAVCWZ099[01174] In java.io.ObjectOutputStream.writeObject0@POLYN591607[01174] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "21",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.format@POLYN385671.l",
      "_method" : "---java.lang.String.format@POLYN915731 in line [01027]",
      "_target" : "java.lang.String.format@POLYN915731.l",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN359027.x",
      "_method" : "---java.io.PrintWriter.print@POLYN354272 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN354272.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN359027[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN915731.l",
      "_method" : "---java.lang.String.format@POLYN915731.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN915731.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN915731.return",
      "_method" : "---java.lang.String.format@POLYN915731 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159317.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159317.data",
      "_method" : "---java.io.PrintWriter.println@POLYN359027 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN359027.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159317[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "22",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.format@POLYN369254.l",
      "_method" : "---java.lang.String.format@POLYN915731 in line [00964]",
      "_target" : "java.lang.String.format@POLYN915731.l",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN359027.x",
      "_method" : "---java.io.PrintWriter.print@POLYN354272 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN354272.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN359027[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN915731.l",
      "_method" : "---java.lang.String.format@POLYN915731.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN915731.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN915731.return",
      "_method" : "---java.lang.String.format@POLYN915731 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159317.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159317.data",
      "_method" : "---java.io.PrintWriter.println@POLYN359027 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN359027.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159317[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "23",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN359027.x",
      "_method" : "---java.io.PrintWriter.print@POLYN354272 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN354272.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN359027[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN915731.l",
      "_method" : "---java.lang.String.format@POLYN915731.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN915731.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslServer.jsonErrorResponse@POLYN198088.\"%s",
      "_method" : "---java.lang.String.format@POLYN915731 in line [00208]",
      "_target" : "java.lang.String.format@POLYN915731.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN915731.return",
      "_method" : "---java.lang.String.format@POLYN915731 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159317.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159317.data",
      "_method" : "---java.io.PrintWriter.println@POLYN359027 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN359027.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159317[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "24",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN359027.x",
      "_method" : "---java.io.PrintWriter.print@POLYN354272 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN354272.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN359027[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN915731.l",
      "_method" : "---java.lang.String.format@POLYN915731.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN915731.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslServer.jsonErrorResponse@POLYN198088.\"%s}\"",
      "_method" : "---java.lang.String.format@POLYN915731 in line [00212]",
      "_target" : "java.lang.String.format@POLYN915731.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN915731.return",
      "_method" : "---java.lang.String.format@POLYN915731 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159317.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159317.data",
      "_method" : "---java.io.PrintWriter.println@POLYN359027 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN359027.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159317[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "25",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN359027.x",
      "_method" : "---java.io.PrintWriter.print@POLYN354272 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN354272.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN359027[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN915731.l",
      "_method" : "---java.lang.String.format@POLYN915731.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN915731.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.controller.QuorumController.Builder.build@POLYN434160.\"Node%d_\"",
      "_method" : "---java.lang.String.format@POLYN915731 in line [00293]",
      "_target" : "java.lang.String.format@POLYN915731.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN915731.return",
      "_method" : "---java.lang.String.format@POLYN915731 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159317.data",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159317.data",
      "_method" : "---java.io.PrintWriter.println@POLYN359027 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN359027.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159317[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "26",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN359027.x",
      "_method" : "---java.io.PrintWriter.print@POLYN354272 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN354272.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN359027[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN915731.l",
      "_method" : "---java.lang.String.format@POLYN915731.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN915731.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN915731.return",
      "_method" : "---java.lang.String.format@POLYN915731 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159317.data",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159317.data",
      "_method" : "---java.io.PrintWriter.println@POLYN359027 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN359027.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159317[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.agent.AgentClient.Builder.target@POLYN202888.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN915731 in line [00096]",
      "_target" : "java.lang.String.format@POLYN915731.l",
      "_risk" : ""
    } ]
  }, {
    "_id" : "27",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN359027.x",
      "_method" : "---java.io.PrintWriter.print@POLYN354272 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN354272.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN359027[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN915731.l",
      "_method" : "---java.lang.String.format@POLYN915731.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN915731.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN915731.return",
      "_method" : "---java.lang.String.format@POLYN915731 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159317.data",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159317.data",
      "_method" : "---java.io.PrintWriter.println@POLYN359027 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN359027.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159317[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.agent.WorkerManager.Worker.toString@POLYN251008.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN915731 in line [00314]",
      "_target" : "java.lang.String.format@POLYN915731.l",
      "_risk" : ""
    } ]
  }, {
    "_id" : "28",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN359027.x",
      "_method" : "---java.io.PrintWriter.print@POLYN354272 in line [00641]",
      "_target" : "java.io.PrintWriter.print@POLYN354272.b",
      "_risk" : "//QC-JAVCWE099[00641] In java.io.PrintWriter.println@POLYN359027[00641] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.String.format@POLYN915731.l",
      "_method" : "---java.lang.String.format@POLYN915731.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN915731.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.lang.String.format@POLYN915731.return",
      "_method" : "---java.lang.String.format@POLYN915731 in line [00052]",
      "_target" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159317.data",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159317.data",
      "_method" : "---java.io.PrintWriter.println@POLYN359027 in line [00053]",
      "_target" : "java.io.PrintWriter.println@POLYN359027.x",
      "_risk" : "//QC-JAVCWE099[00053] In org.apache.kafka.streams.kstream.internals.PrintForeachAction.apply@POLYN159317[00053] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.coordinator.CoordinatorClient.Builder.target@POLYN243073.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN915731 in line [00112]",
      "_target" : "java.lang.String.format@POLYN915731.l",
      "_risk" : ""
    } ]
  }, {
    "_id" : "29",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.InputStream.read@POLYN255230.0",
      "_method" : "---java.io.InputStream.read@POLYN255230.dummymethode_00168 in line [00168]",
      "_target" : "java.io.InputStream.read@POLYN255230.return",
      "_risk" : "//QC-JAVCWE099[00168] In java.io.InputStream.read@POLYN255230[00168] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN464489.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN255230 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN255230.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN464489[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.InputStream.read@POLYN255230.return",
      "_method" : "---java.io.InputStream.read@POLYN255230 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN464489.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN464489[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN464489.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN464489.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN464489.currentPosition",
      "_risk" : ""
    } ]
  }, {
    "_id" : "30",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.InputStream.read@POLYN255230.-1",
      "_method" : "---java.io.InputStream.read@POLYN255230.dummymethode_00173 in line [00173]",
      "_target" : "java.io.InputStream.read@POLYN255230.return",
      "_risk" : "//QC-JAVCWE099[00173] In java.io.InputStream.read@POLYN255230[00173] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN464489.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN255230 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN255230.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN464489[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.InputStream.read@POLYN255230.return",
      "_method" : "---java.io.InputStream.read@POLYN255230 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN464489.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN464489[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN464489.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN464489.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN464489.currentPosition",
      "_risk" : ""
    } ]
  }, {
    "_id" : "31",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.writeTo@POLYN188595.buffer",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN464489 in line [00182]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN464489.destinationBuffer",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN464489.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN255230 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN255230.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN464489[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN464489.destinationBuffer",
      "_method" : "---java.io.InputStream.read@POLYN255230 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN464489.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN464489[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN464489.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN464489.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN464489.currentPosition",
      "_risk" : ""
    } ]
  }, {
    "_id" : "32",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.curContext",
      "_method" : "---java.io.ObjectInputStream.defaultReadObject@POLYN800362.dummymethode_00545 in line [00545]",
      "_target" : "java.io.ObjectInputStream.defaultReadObject@POLYN800362.ctx",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.curContext",
      "_method" : "---java.io.ObjectInputStream.readExternalData@POLYN859549.dummymethode_02065 in line [02065]",
      "_target" : "java.io.ObjectInputStream.readExternalData@POLYN859549.oldContext",
      "_risk" : "//QC-JAVCWZ099[02065] In java.io.ObjectInputStream.readExternalData@POLYN859549[02065] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readExternalData@POLYN859549.oldContext",
      "_method" : "---java.io.ObjectInputStream.readExternalData@POLYN859549.dummymethode_02094 in line [02094]",
      "_target" : "java.io.ObjectInputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[02094] In java.io.ObjectInputStream.readExternalData@POLYN859549[02094] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readSerialData@POLYN861480.slotDesc",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN861480.dummymethode_02133 in line [02133]",
      "_target" : "java.io.ObjectInputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[02133] In java.io.ObjectInputStream.readSerialData@POLYN861480[02133] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "33",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644342.s",
      "_method" : "---java.io.ObjectOutputStream.writeBytes@POLYN582805 in line [02190]",
      "_target" : "java.io.ObjectOutputStream.writeBytes@POLYN582805.str",
      "_risk" : "//QC-JAVCWZ099[02190] In java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644342[02190] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeBytes@POLYN582805.str",
      "_method" : "---java.io.ObjectOutputStream.writeBytes@POLYN582805 in line [00841]",
      "_target" : "java.io.ObjectOutputStream.writeBytes@POLYN582805.cibledummy_00841",
      "_risk" : "//QC-JAVCWZ099[00841] In java.io.ObjectOutputStream.writeBytes@POLYN582805[00841] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN600885.str",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644342 in line [01309]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644342.s",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeTypeString@POLYN588243.str",
      "_method" : "---java.io.ObjectOutputStream.writeString@POLYN600885 in line [01030]",
      "_target" : "java.io.ObjectOutputStream.writeString@POLYN600885.str",
      "_risk" : "//QC-JAVCWZ099[01030] In java.io.ObjectOutputStream.writeTypeString@POLYN588243[01030] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "34",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.print@POLYN374040.s",
      "_method" : "---java.io.PrintStream.write@POLYN368395 in line [00653]",
      "_target" : "java.io.PrintStream.write@POLYN368395.buf",
      "_risk" : "//QC-JAVCWZ099[00653] In java.io.PrintStream.print@POLYN374040[00653] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.println@POLYN378495.x",
      "_method" : "---java.io.PrintStream.print@POLYN374040 in line [00792]",
      "_target" : "java.io.PrintStream.print@POLYN374040.s",
      "_risk" : "//QC-JAVCWZ099[00792] In java.io.PrintStream.println@POLYN378495[00792] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.write@POLYN368395.buf",
      "_method" : "---java.io.PrintWriter.write@POLYN352248 in line [00503]",
      "_target" : "java.io.PrintWriter.write@POLYN352248.buf",
      "_risk" : "//QC-JAVCWZ099[00503] In java.io.PrintStream.write@POLYN368395[00503] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.PrintWriter.write@POLYN352248.buf",
      "_method" : "---java.io.PrintWriter.write@POLYN352248.dummymethode_00443 in line [00443]",
      "_target" : "java.io.PrintWriter.write@POLYN352248.cibledummy_00443",
      "_risk" : "//QC-JAVCWZ099[00443] In java.io.PrintWriter.write@POLYN352248[00443] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "35",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.InputStream.read@POLYN252071.b",
      "_method" : "---java.io.InputStream.read@POLYN252071.dummymethode_00102 in line [00102]",
      "_target" : "java.io.InputStream.read@POLYN252071.return",
      "_risk" : "//QC-JAVCWE099[00102] In java.io.InputStream.read@POLYN252071[00102] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN308636.return",
      "_method" : "---org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN308636 in line [00289]",
      "_target" : "org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN310322.read",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN308636.netReadBuffer",
      "_method" : "---java.io.InputStream.read@POLYN252071 in line [00226]",
      "_target" : "java.io.InputStream.read@POLYN252071.b",
      "_risk" : "//QC-JAVCWE099[00226] In org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN308636[00226] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.InputStream.read@POLYN252071.return",
      "_method" : "---java.io.InputStream.read@POLYN252071 in line [00226]",
      "_target" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN308636.return",
      "_risk" : "//QC-JAVCWE099[00226] In org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN308636[00226] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "36",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.accepted@POLYN249259.HttpStatus.ACCEPTED",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247056 in line [00273]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN247056.status",
      "_risk" : "//QC-JAVCWE080[00273] In org.springframework.http.ResponseEntity.accepted@POLYN249259[00273] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN247056.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247056 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN247661.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN247661[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN247056.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247056.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN247056.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN247056[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN247661.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN247661 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "37",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.badRequest@POLYN249730.HttpStatus.BAD_REQUEST",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247056 in line [00291]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN247056.status",
      "_risk" : "//QC-JAVCWE080[00291] In org.springframework.http.ResponseEntity.badRequest@POLYN249730[00291] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN247056.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247056 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN247661.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN247661[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN247056.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247056.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN247056.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN247056[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN247661.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN247661 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "38",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.noContent@POLYN249502.HttpStatus.NO_CONTENT",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247056 in line [00282]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN247056.status",
      "_risk" : "//QC-JAVCWE080[00282] In org.springframework.http.ResponseEntity.noContent@POLYN249502[00282] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN247056.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247056 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN247661.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN247661[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN247056.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247056.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN247056.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN247056[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN247661.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN247661 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "39",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.notFound@POLYN249973.HttpStatus.NOT_FOUND",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247056 in line [00300]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN247056.status",
      "_risk" : "//QC-JAVCWE080[00300] In org.springframework.http.ResponseEntity.notFound@POLYN249973[00300] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN247056.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247056 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN247661.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN247661[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN247056.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247056.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN247056.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN247056[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN247661.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN247661 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "40",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN247056.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247056 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN247661.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN247661[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN247056.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247056.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN247056.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN247056[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.unprocessableEntity@POLYN250207.HttpStatus.UNPROCESSABLE_ENTITY",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247056 in line [00310]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN247056.status",
      "_risk" : "//QC-JAVCWE080[00310] In org.springframework.http.ResponseEntity.unprocessableEntity@POLYN250207[00310] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN247661.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN247661 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "41",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN242745.cbuf",
      "_method" : "---java.io.Reader.read@POLYN193181 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN242745.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN242745[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN242745.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN242745 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN245953.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN245953[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN245953.n",
      "_method" : "---java.io.BufferedReader.read@POLYN245953.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN245953.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN245953[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "42",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN242745.len",
      "_method" : "---java.io.Reader.read@POLYN193181 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN242745.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN242745[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN242745.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN242745 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN245953.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN245953[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN245953.n",
      "_method" : "---java.io.BufferedReader.read@POLYN245953.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN245953.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN245953[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "43",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN242745.off",
      "_method" : "---java.io.Reader.read@POLYN193181 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN242745.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN242745[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN242745.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN242745 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN245953.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN245953[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN245953.n",
      "_method" : "---java.io.BufferedReader.read@POLYN245953.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN245953.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN245953[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "44",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Reader.read@POLYN193181.return",
      "_method" : "---java.io.Reader.read@POLYN193181 in line [00210]",
      "_target" : "java.io.BufferedReader.read1@POLYN242745.return",
      "_risk" : "//QC-JAVCWZ099[00210] In java.io.BufferedReader.read1@POLYN242745[00210] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN242745.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN242745 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN245953.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN245953[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN245953.n",
      "_method" : "---java.io.BufferedReader.read@POLYN245953.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN245953.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN245953[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "45",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read1@POLYN242745.-1",
      "_method" : "---java.io.BufferedReader.read1@POLYN242745.dummymethode_00214 in line [00214]",
      "_target" : "java.io.BufferedReader.read1@POLYN242745.return",
      "_risk" : "//QC-JAVCWZ099[00214] In java.io.BufferedReader.read1@POLYN242745[00214] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN242745.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN242745 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN245953.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN245953[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read@POLYN245953.n",
      "_method" : "---java.io.BufferedReader.read@POLYN245953.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN245953.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN245953[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "46",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN869954.return",
      "_method" : "---java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN869954 in line [00591]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN801813.getField",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN801813.return",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN801813 in line [00592]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN801813.cibledummy_00592",
      "_risk" : "//QC-JAVCWZ099[00592] In java.io.ObjectInputStream.readFields@POLYN801813[00592] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN801813.getField",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN801813.dummymethode_00603 in line [00603]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN801813.return",
      "_risk" : "//QC-JAVCWZ099[00603] In java.io.ObjectInputStream.readFields@POLYN801813[00603] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "47",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN801813.curDesc",
      "_method" : "---java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN869954 in line [00591]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN801813.getField",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN801813.return",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN801813 in line [00592]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN801813.cibledummy_00592",
      "_risk" : "//QC-JAVCWZ099[00592] In java.io.ObjectInputStream.readFields@POLYN801813[00592] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN801813.getField",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN801813.dummymethode_00603 in line [00603]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN801813.return",
      "_risk" : "//QC-JAVCWZ099[00603] In java.io.ObjectInputStream.readFields@POLYN801813[00603] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "48",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readClassDescriptor@POLYN813051.desc",
      "_method" : "---java.io.ObjectInputStream.readClassDescriptor@POLYN813051.dummymethode_00883 in line [00883]",
      "_target" : "java.io.ObjectInputStream.readClassDescriptor@POLYN813051.return",
      "_risk" : "//QC-JAVCWZ099[00883] In java.io.ObjectInputStream.readClassDescriptor@POLYN813051[00883] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClassDescriptor@POLYN813051.return",
      "_method" : "---java.io.ObjectInputStream.readClassDescriptor@POLYN813051 in line [01815]",
      "_target" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN846449.readDesc",
      "_risk" : "//QC-JAVCWZ099[01815] In java.io.ObjectInputStream.readNonProxyDesc@POLYN846449[01815] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN846449.readDesc",
      "_method" : "---java.io.ObjectInputStream.readNonProxyDesc@POLYN846449.dummymethode_01843 in line [01843]",
      "_target" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN846449.cibledummy_01843",
      "_risk" : "//QC-JAVCWZ099[01843] In java.io.ObjectInputStream.readNonProxyDesc@POLYN846449[01843] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "49",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Reader.read@POLYN191916.return",
      "_method" : "---java.io.Reader.read@POLYN191916 in line [00100]",
      "_target" : "java.io.Reader.read@POLYN190918.n",
      "_risk" : "//QC-JAVCWZ099[00100] In java.io.Reader.read@POLYN190918[00100] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Reader.read@POLYN190918.n",
      "_method" : "---java.io.Reader.read@POLYN190918.dummymethode_00102 in line [00102]",
      "_target" : "java.io.Reader.read@POLYN190918.cibledummy_00102",
      "_risk" : "//QC-JAVCWZ099[00102] In java.io.Reader.read@POLYN190918[00102] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.Reader.read@POLYN191916.-1",
      "_method" : "---java.io.Reader.read@POLYN191916.dummymethode_00122 in line [00122]",
      "_target" : "java.io.Reader.read@POLYN191916.return",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.Reader.read@POLYN191916[00122] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "50",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.ServerSocket.accept@POLYN327056.(SocketImpl)null",
      "_method" : "---java.net.ServerSocket.accept@POLYN327056.dummymethode_00468 in line [00468]",
      "_target" : "java.net.ServerSocket.accept@POLYN327056.s",
      "_risk" : "//QC-JAVCWZ099[00468] In java.net.ServerSocket.accept@POLYN327056[00468] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.accept@POLYN327056.s",
      "_method" : "---java.net.ServerSocket.accept@POLYN327056.dummymethode_00470 in line [00470]",
      "_target" : "java.net.ServerSocket.accept@POLYN327056.return",
      "_risk" : "//QC-JAVCWZ099[00470] In java.net.ServerSocket.accept@POLYN327056[00470] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.net.ServerSocket.accept@POLYN327056.return",
      "_method" : "---java.net.ServerSocket.accept@POLYN327056 in line [00501]",
      "_target" : "java.net.ServerSocket.implAccept@POLYN328002.cibledummy_00501",
      "_risk" : "//QC-JAVCWZ099[00501] In java.net.ServerSocket.implAccept@POLYN328002[00501] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "51",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN247056.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247056 in line [00273]",
      "_target" : "org.springframework.http.ResponseEntity.accepted@POLYN249259.return",
      "_risk" : "//QC-JAVCWE080[00273] In org.springframework.http.ResponseEntity.accepted@POLYN249259[00273] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN247661.HttpStatus.OK",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247056 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN247056.status",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN247661[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN247056.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN247056.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN247056.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN247056[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "52",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedInputStream.read@POLYN253736.nread",
      "_method" : "---java.io.BufferedInputStream.read@POLYN253736.dummymethode_00348 in line [00348]",
      "_target" : "java.io.BufferedInputStream.read@POLYN253736.n",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.BufferedInputStream.read@POLYN253736[00348] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedInputStream.read@POLYN253736.n",
      "_method" : "---java.io.BufferedInputStream.read@POLYN253736.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedInputStream.read@POLYN253736.return",
      "_risk" : "//QC-JAVCWZ099[00350] In java.io.BufferedInputStream.read@POLYN253736[00350] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "53",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN168520.count",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN169816 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN169816.len",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN168520[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.write@POLYN169816.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN169816.dummymethode_00129 in line [00129]",
      "_target" : "java.io.BufferedOutputStream.count",
      "_risk" : "//QC-JAVCWZ099[00129] In java.io.BufferedOutputStream.write@POLYN169816[00129] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "54",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN169816.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN169816.dummymethode_00129 in line [00129]",
      "_target" : "java.io.BufferedOutputStream.count",
      "_risk" : "//QC-JAVCWZ099[00129] In java.io.BufferedOutputStream.write@POLYN169816[00129] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN367609.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN169816 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN169816.len",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN367609[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "55",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN168520.buf",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN169816 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN169816.b",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN168520[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.write@POLYN169816.b",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN169816 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN169816.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN169816[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "56",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN169816.b",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN169816 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN169816.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN169816[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN367609.buf",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN169816 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN169816.b",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN367609[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "57",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN168520.0",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN169816 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN169816.off",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN168520[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.write@POLYN169816.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN169816 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN169816.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN169816[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "58",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN169816.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN169816 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN169816.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN169816[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN367609.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN169816 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN169816.off",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN367609[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "59",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Writer.writeBuffer",
      "_method" : "---java.io.Writer.write@POLYN201373.dummymethode_00187 in line [00187]",
      "_target" : "java.io.Writer.write@POLYN201373.cbuf",
      "_risk" : "//QC-JAVCWZ099[00187] In java.io.Writer.write@POLYN201373[00187] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN201373.cbuf",
      "_method" : "---java.io.Writer.write@POLYN200539 in line [00192]",
      "_target" : "java.io.Writer.write@POLYN200539.cbuf",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.Writer.write@POLYN201373[00192] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "60",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.write@POLYN352562.len",
      "_method" : "---java.io.Writer.write@POLYN201373 in line [00456]",
      "_target" : "java.io.Writer.write@POLYN201373.len",
      "_risk" : "//QC-JAVCWZ099[00456] In java.io.PrintWriter.write@POLYN352562[00456] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN201373.len",
      "_method" : "---java.io.Writer.write@POLYN200539 in line [00192]",
      "_target" : "java.io.Writer.write@POLYN200539.len",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.Writer.write@POLYN201373[00192] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "61",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN191567.off",
      "_method" : "---java.io.BufferedWriter.write@POLYN191567.dummymethode_00192 in line [00192]",
      "_target" : "java.io.BufferedWriter.write@POLYN191567.b",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.BufferedWriter.write@POLYN191567[00192] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN191567.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN191567.dummymethode_00195 in line [00195]",
      "_target" : "java.io.BufferedWriter.write@POLYN191567.cibledummy_00195",
      "_risk" : "//QC-JAVCWZ099[00195] In java.io.BufferedWriter.write@POLYN191567[00195] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "62",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN191567.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN191567.dummymethode_00195 in line [00195]",
      "_target" : "java.io.BufferedWriter.write@POLYN191567.cibledummy_00195",
      "_risk" : "//QC-JAVCWZ099[00195] In java.io.BufferedWriter.write@POLYN191567[00195] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN191567.d",
      "_method" : "---java.io.BufferedWriter.write@POLYN191567.dummymethode_00196 in line [00196]",
      "_target" : "java.io.BufferedWriter.write@POLYN191567.b",
      "_risk" : "//QC-JAVCWZ099[00196] In java.io.BufferedWriter.write@POLYN191567[00196] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "63",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN193905.off",
      "_method" : "---java.io.BufferedWriter.write@POLYN193905.dummymethode_00223 in line [00223]",
      "_target" : "java.io.BufferedWriter.write@POLYN193905.b",
      "_risk" : "//QC-JAVCWZ099[00223] In java.io.BufferedWriter.write@POLYN193905[00223] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN193905.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN193905.dummymethode_00226 in line [00226]",
      "_target" : "java.io.BufferedWriter.write@POLYN193905.cibledummy_00226",
      "_risk" : "//QC-JAVCWZ099[00226] In java.io.BufferedWriter.write@POLYN193905[00226] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "64",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN193905.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN193905.dummymethode_00226 in line [00226]",
      "_target" : "java.io.BufferedWriter.write@POLYN193905.cibledummy_00226",
      "_risk" : "//QC-JAVCWZ099[00226] In java.io.BufferedWriter.write@POLYN193905[00226] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN193905.d",
      "_method" : "---java.io.BufferedWriter.write@POLYN193905.dummymethode_00227 in line [00227]",
      "_target" : "java.io.BufferedWriter.write@POLYN193905.b",
      "_risk" : "//QC-JAVCWZ099[00227] In java.io.BufferedWriter.write@POLYN193905[00227] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "65",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "null",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN854061.dummymethode_01964 in line [01964]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN854061.result",
      "_risk" : "//QC-JAVCWE099[01964] In java.io.ObjectInputStream.readEnum@POLYN854061[01964] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN854061.result",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN854061.dummymethode_01983 in line [01983]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN854061.return",
      "_risk" : "//QC-JAVCWE099[01983] In java.io.ObjectInputStream.readEnum@POLYN854061[01983] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "66",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN854061.en",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN854061.dummymethode_01970 in line [01970]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN854061.result",
      "_risk" : "//QC-JAVCWZ099[01970] In java.io.ObjectInputStream.readEnum@POLYN854061[01970] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN854061.result",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN854061.dummymethode_01983 in line [01983]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN854061.return",
      "_risk" : "//QC-JAVCWZ099[01983] In java.io.ObjectInputStream.readEnum@POLYN854061[01983] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "67",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN843607.\"null class\"",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN843607.dummymethode_01759 in line [01759]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN843607.resolveEx",
      "_risk" : "//QC-JAVCWZ099[01759] In java.io.ObjectInputStream.readProxyDesc@POLYN843607[01759] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN843607.resolveEx",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN843607.dummymethode_01786 in line [01786]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN843607.cibledummy_01786",
      "_risk" : "//QC-JAVCWZ099[01786] In java.io.ObjectInputStream.readProxyDesc@POLYN843607[01786] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "68",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN843607.ex",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN843607.dummymethode_01775 in line [01775]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN843607.resolveEx",
      "_risk" : "//QC-JAVCWZ099[01775] In java.io.ObjectInputStream.readProxyDesc@POLYN843607[01775] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN843607.resolveEx",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN843607.dummymethode_01786 in line [01786]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN843607.cibledummy_01786",
      "_risk" : "//QC-JAVCWZ099[01786] In java.io.ObjectInputStream.readProxyDesc@POLYN843607[01786] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "69",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN856325.obj",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN861480 in line [02027]",
      "_target" : "java.io.ObjectInputStream.readSerialData@POLYN861480.obj",
      "_risk" : "//QC-JAVCWZ099[02027] In java.io.ObjectInputStream.readOrdinaryObject@POLYN856325[02027] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readSerialData@POLYN861480.obj",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN861480.dummymethode_02136 in line [02136]",
      "_target" : "java.io.ObjectInputStream.readSerialData@POLYN861480.cibledummy_02136",
      "_risk" : "//QC-JAVCWZ099[02136] In java.io.ObjectInputStream.readSerialData@POLYN861480[02136] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "70",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "objs.length",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN601662.dummymethode_01364 in line [01364]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN601662.len",
      "_risk" : "//QC-JAVCWE099[01364] In java.io.ObjectOutputStream.writeArray@POLYN601662[01364] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN601662.len",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [01365]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN601662.cibledummy_01365",
      "_risk" : "//QC-JAVCWE099[01365] In java.io.ObjectOutputStream.writeArray@POLYN601662[01365] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "71",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.reset@POLYN572393.TC_RESET",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [00501]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_risk" : "//QC-JAVCWZ099[00501] In java.io.ObjectOutputStream.reset@POLYN572393[00501] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN580833[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "72",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN601662.TC_ARRAY",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [01321]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_risk" : "//QC-JAVCWZ099[01321] In java.io.ObjectOutputStream.writeArray@POLYN601662[01321] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN580833[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "73",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN580833[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClass@POLYN596638.TC_CLASS",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [01212]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_risk" : "//QC-JAVCWZ099[01212] In java.io.ObjectOutputStream.writeClass@POLYN596638[01212] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "74",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN580833[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeEnum@POLYN606584.TC_ENUM",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [01401]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_risk" : "//QC-JAVCWZ099[01401] In java.io.ObjectOutputStream.writeEnum@POLYN606584[01401] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "75",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN580833[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN608866.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [01461]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_risk" : "//QC-JAVCWZ099[01461] In java.io.ObjectOutputStream.writeExternalData@POLYN608866[01461] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "76",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN580833[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN614331.TC_EXCEPTION",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [01576]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_risk" : "//QC-JAVCWZ099[01576] In java.io.ObjectOutputStream.writeFatalException@POLYN614331[01576] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "77",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN580833[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeHandle@POLYN596355.TC_REFERENCE",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [01204]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_risk" : "//QC-JAVCWZ099[01204] In java.io.ObjectOutputStream.writeHandle@POLYN596355[01204] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "78",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN580833[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN599635.TC_CLASSDESC",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [01275]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_risk" : "//QC-JAVCWZ099[01275] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN599635[01275] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "79",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN580833[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN599635.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [01292]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_risk" : "//QC-JAVCWZ099[01292] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN599635[01292] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "80",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN580833[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNull@POLYN596190.TC_NULL",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [01197]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_risk" : "//QC-JAVCWZ099[01197] In java.io.ObjectOutputStream.writeNull@POLYN596190[01197] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "81",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN580833[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN607426.TC_OBJECT",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [01426]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_risk" : "//QC-JAVCWZ099[01426] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN607426[01426] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "82",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN580833[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN598129.TC_PROXYCLASSDESC",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [01247]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_risk" : "//QC-JAVCWZ099[01247] In java.io.ObjectOutputStream.writeProxyDesc@POLYN598129[01247] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "83",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN580833[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN598129.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [01263]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_risk" : "//QC-JAVCWZ099[01263] In java.io.ObjectOutputStream.writeProxyDesc@POLYN598129[01263] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "84",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN580833[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN610062.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [01498]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_risk" : "//QC-JAVCWZ099[01498] In java.io.ObjectOutputStream.writeSerialData@POLYN610062[01498] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "85",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN580833[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN600885.TC_STRING",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [01305]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_risk" : "//QC-JAVCWZ099[01305] In java.io.ObjectOutputStream.writeString@POLYN600885[01305] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "86",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN580833[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN600885.TC_LONGSTRING",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN580833 in line [01308]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN580833.val",
      "_risk" : "//QC-JAVCWZ099[01308] In java.io.ObjectOutputStream.writeString@POLYN600885[01308] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "87",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeChar@POLYN629181.v",
      "_method" : "---java.io.ObjectOutputStream.writeChar@POLYN581393 in line [01925]",
      "_target" : "java.io.ObjectOutputStream.writeChar@POLYN581393.val",
      "_risk" : "//QC-JAVCWZ099[01925] In java.io.ObjectOutputStream.BlockDataOutputStream.writeChar@POLYN629181[01925] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeChar@POLYN581393.val",
      "_method" : "---java.io.ObjectOutputStream.writeChar@POLYN581393 in line [00786]",
      "_target" : "java.io.ObjectOutputStream.writeChar@POLYN581393.cibledummy_00786",
      "_risk" : "//QC-JAVCWZ099[00786] In java.io.ObjectOutputStream.writeChar@POLYN581393[00786] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "88",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN601662.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN597138 in line [01322]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN597138.unshared",
      "_risk" : "//QC-JAVCWZ099[01322] In java.io.ObjectOutputStream.writeArray@POLYN601662[01322] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN597138.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN598129 in line [01229]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN598129.unshared",
      "_risk" : "//QC-JAVCWZ099[01229] In java.io.ObjectOutputStream.writeClassDesc@POLYN597138[01229] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "89",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeClassDesc@POLYN597138.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeProxyDesc@POLYN598129 in line [01229]",
      "_target" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN598129.unshared",
      "_risk" : "//QC-JAVCWZ099[01229] In java.io.ObjectOutputStream.writeClassDesc@POLYN597138[01229] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN607426.false",
      "_method" : "---java.io.ObjectOutputStream.writeClassDesc@POLYN597138 in line [01427]",
      "_target" : "java.io.ObjectOutputStream.writeClassDesc@POLYN597138.unshared",
      "_risk" : "//QC-JAVCWZ099[01427] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN607426[01427] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "90",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeDouble@POLYN631389.v",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN582513 in line [01970]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN582513.val",
      "_risk" : "//QC-JAVCWZ099[01970] In java.io.ObjectOutputStream.BlockDataOutputStream.writeDouble@POLYN631389[01970] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN582513.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN582513 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN582513.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN582513[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "91",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN582513.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN582513 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN582513.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN582513[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.protocol.DataOutputStreamWritable.writeDouble@POLYN164933.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN582513 in line [00074]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN582513.val",
      "_risk" : "//QC-JAVCWE099[00074] In org.apache.kafka.common.protocol.DataOutputStreamWritable.writeDouble@POLYN164933[00074] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "92",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN582513.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN582513 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN582513.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN582513[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeDouble@POLYN240585.value",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN582513 in line [00376]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN582513.val",
      "_risk" : "//QC-JAVCWE099[00376] In org.apache.kafka.common.utils.ByteUtils.writeDouble@POLYN240585[00376] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "93",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN614331.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN614331.dummymethode_01577 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN614331.cibledummy_01577",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN614331[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN567091.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN614331 in line [00351]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN614331.ex",
      "_risk" : "//QC-JAVCWZ099[00351] In java.io.ObjectOutputStream.writeObject@POLYN567091[00351] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "94",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN614331.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN614331.dummymethode_01577 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN614331.cibledummy_01577",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN614331[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN569309.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN614331 in line [00418]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN614331.ex",
      "_risk" : "//QC-JAVCWZ099[00418] In java.io.ObjectOutputStream.writeUnshared@POLYN569309[00418] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "95",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeFloat@POLYN630521.v",
      "_method" : "---java.io.ObjectOutputStream.writeFloat@POLYN582233 in line [01952]",
      "_target" : "java.io.ObjectOutputStream.writeFloat@POLYN582233.val",
      "_risk" : "//QC-JAVCWZ099[01952] In java.io.ObjectOutputStream.BlockDataOutputStream.writeFloat@POLYN630521[01952] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeFloat@POLYN582233.val",
      "_method" : "---java.io.ObjectOutputStream.writeFloat@POLYN582233 in line [00819]",
      "_target" : "java.io.ObjectOutputStream.writeFloat@POLYN582233.cibledummy_00819",
      "_risk" : "//QC-JAVCWZ099[00819] In java.io.ObjectOutputStream.writeFloat@POLYN582233[00819] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "96",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeInt@POLYN630087.v",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [01943]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_risk" : "//QC-JAVCWZ099[01943] In java.io.ObjectOutputStream.BlockDataOutputStream.writeInt@POLYN630087[01943] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN581673[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "97",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN601662.ia.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [01329]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_risk" : "//QC-JAVCWZ099[01329] In java.io.ObjectOutputStream.writeArray@POLYN601662[01329] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN581673[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "98",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN601662.ba.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [01333]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_risk" : "//QC-JAVCWZ099[01333] In java.io.ObjectOutputStream.writeArray@POLYN601662[01333] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN581673[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "99",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN601662.ja.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [01337]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_risk" : "//QC-JAVCWZ099[01337] In java.io.ObjectOutputStream.writeArray@POLYN601662[01337] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN581673[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "100",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN601662.fa.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [01341]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_risk" : "//QC-JAVCWZ099[01341] In java.io.ObjectOutputStream.writeArray@POLYN601662[01341] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN581673[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "101",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN601662.da.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [01345]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_risk" : "//QC-JAVCWZ099[01345] In java.io.ObjectOutputStream.writeArray@POLYN601662[01345] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN581673[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "102",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN601662.sa.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [01349]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_risk" : "//QC-JAVCWZ099[01349] In java.io.ObjectOutputStream.writeArray@POLYN601662[01349] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN581673[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "103",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN601662.ca.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [01353]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_risk" : "//QC-JAVCWZ099[01353] In java.io.ObjectOutputStream.writeArray@POLYN601662[01353] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN581673[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "104",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN601662.za.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [01357]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_risk" : "//QC-JAVCWZ099[01357] In java.io.ObjectOutputStream.writeArray@POLYN601662[01357] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN581673[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "105",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN581673[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN598129.ifaces.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [01252]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_risk" : "//QC-JAVCWZ099[01252] In java.io.ObjectOutputStream.writeProxyDesc@POLYN598129[01252] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "106",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN581673[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.writeObject@POLYN245683.count",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00464]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_risk" : "//QC-JAVCWZ099[00464] In java.lang.StringBuilder.writeObject@POLYN245683[00464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "107",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN581673[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.writeObject@POLYN678352.size",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [01359]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_risk" : "//QC-JAVCWZ099[01359] In java.util.HashMap.writeObject@POLYN678352[01359] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "108",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN581673[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN471973.table.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [01221]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_risk" : "//QC-JAVCWZ099[01221] In java.util.Hashtable.writeHashtable@POLYN471973[01221] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "109",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN581673[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN471973.count",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [01223]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_risk" : "//QC-JAVCWZ099[01223] In java.util.Hashtable.writeHashtable@POLYN471973[01223] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "110",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN581673[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.protocol.DataOutputStreamWritable.writeInt@POLYN164359.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00056]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_risk" : "//QC-JAVCWE099[00056] In org.apache.kafka.common.protocol.DataOutputStreamWritable.writeInt@POLYN164359[00056] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "111",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN581673[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.AbstractLegacyRecordBatch.writeHeader@POLYN228041.size",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00276]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_risk" : "//QC-JAVCWE099[00276] In org.apache.kafka.common.record.AbstractLegacyRecordBatch.writeHeader@POLYN228041[00276] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "112",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN581673[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN175716.Serdes.ListSerde.NULL_ENTRY_VALUE",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00124]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_risk" : "//QC-JAVCWE099[00124] In org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN175716[00124] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "113",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN581673[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN175716.bytes.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00129]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_risk" : "//QC-JAVCWE099[00129] In org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN175716[00129] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "114",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN581673[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serializeNullIndexList@POLYN174791.nullIndex",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00103]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_risk" : "//QC-JAVCWE099[00103] In org.apache.kafka.common.serialization.ListSerializer.serializeNullIndexList@POLYN174791[00103] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "115",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN581673[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN233293.usedVersion",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00149]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_risk" : "//QC-JAVCWE099[00149] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN233293[00149] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "116",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN581673[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN233293.commonlySupportedVersion",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00159]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_risk" : "//QC-JAVCWE099[00159] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN233293[00159] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "117",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN581673[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN233293.out",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00160]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_risk" : "//QC-JAVCWE099[00160] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN233293[00160] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "118",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN581673[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN233293.errCode",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00168]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_risk" : "//QC-JAVCWE099[00168] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN233293[00168] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "119",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN581673[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.writeTaskIdTo@POLYN166981.0",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00045]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN581673.val",
      "_risk" : "//QC-JAVCWE099[00045] In org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.writeTaskIdTo@POLYN166981[00045] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "120",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN591607.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeClass@POLYN596638 in line [01120]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN591607.cibledummy_01120",
      "_risk" : "//QC-JAVCWZ099[01120] In java.io.ObjectOutputStream.writeObject0@POLYN591607[01120] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN567091.false",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN591607 in line [00348]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN591607.unshared",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.ObjectOutputStream.writeObject@POLYN567091[00348] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "121",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN591607.unshared",
      "_method" : "---java.io.ObjectOutputStream.writeClass@POLYN596638 in line [01120]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN591607.cibledummy_01120",
      "_risk" : "//QC-JAVCWZ099[01120] In java.io.ObjectOutputStream.writeObject0@POLYN591607[01120] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN569309.true",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN591607 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN591607.unshared",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN569309[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "122",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN567091.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN567981 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567091.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN567091[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.internalWriteEntries@POLYN703103.e.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN567091 in line [01782]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567091.obj",
      "_risk" : "//QC-JAVCWZ099[01782] In java.util.HashMap.internalWriteEntries@POLYN703103[01782] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "123",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN567091.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN567981 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567091.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN567091[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.internalWriteEntries@POLYN703103.e.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN567091 in line [01783]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567091.obj",
      "_risk" : "//QC-JAVCWZ099[01783] In java.util.HashMap.internalWriteEntries@POLYN703103[01783] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "124",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN567091.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN567981 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567091.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN567091[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN471973.entryStack.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN567091 in line [01238]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567091.obj",
      "_risk" : "//QC-JAVCWZ099[01238] In java.util.Hashtable.writeHashtable@POLYN471973[01238] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "125",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN567091.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN567981 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567091.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN567091[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN471973.entryStack.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN567091 in line [01239]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567091.obj",
      "_risk" : "//QC-JAVCWZ099[01239] In java.util.Hashtable.writeHashtable@POLYN471973[01239] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "126",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN567091.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN567981 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567091.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN567091[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1493165.p.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN567091 in line [01406]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567091.obj",
      "_risk" : "//QC-JAVCWZ099[01406] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1493165[01406] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "127",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN567091.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN567981 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567091.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN567091[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1493165.p.val",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN567091 in line [01407]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567091.obj",
      "_risk" : "//QC-JAVCWZ099[01407] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1493165[01407] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "128",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN567091.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN567981 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567091.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN567091[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1493165.null",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN567091 in line [01410]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN567091.obj",
      "_risk" : "//QC-JAVCWZ099[01410] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1493165[01410] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "129",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeShort@POLYN629634.v",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN581113 in line [01934]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN581113.val",
      "_risk" : "//QC-JAVCWZ099[01934] In java.io.ObjectOutputStream.BlockDataOutputStream.writeShort@POLYN629634[01934] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN581113.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN581113 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN581113.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN581113[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "130",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN581113.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN581113 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN581113.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN581113[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeStreamHeader@POLYN576837.STREAM_MAGIC",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN581113 in line [00636]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN581113.val",
      "_risk" : "//QC-JAVCWZ099[00636] In java.io.ObjectOutputStream.writeStreamHeader@POLYN576837[00636] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "131",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN581113.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN581113 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN581113.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN581113[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeStreamHeader@POLYN576837.STREAM_VERSION",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN581113 in line [00637]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN581113.val",
      "_risk" : "//QC-JAVCWZ099[00637] In java.io.ObjectOutputStream.writeStreamHeader@POLYN576837[00637] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "132",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN233222.-1",
      "_method" : "---java.io.PipedInputStream.read@POLYN233222.dummymethode_00318 in line [00318]",
      "_target" : "java.io.PipedInputStream.read@POLYN233222.return",
      "_risk" : "//QC-JAVCWZ099[00318] In java.io.PipedInputStream.read@POLYN233222[00318] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN233222.return",
      "_method" : "---java.io.PipedInputStream.read@POLYN233222 in line [00377]",
      "_target" : "java.io.PipedInputStream.read@POLYN236237.c",
      "_risk" : "//QC-JAVCWZ099[00377] In java.io.PipedInputStream.read@POLYN236237[00377] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "133",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN233222.ret",
      "_method" : "---java.io.PipedInputStream.read@POLYN233222.dummymethode_00340 in line [00340]",
      "_target" : "java.io.PipedInputStream.read@POLYN233222.return",
      "_risk" : "//QC-JAVCWZ099[00340] In java.io.PipedInputStream.read@POLYN233222[00340] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN233222.return",
      "_method" : "---java.io.PipedInputStream.read@POLYN233222 in line [00377]",
      "_target" : "java.io.PipedInputStream.read@POLYN236237.c",
      "_risk" : "//QC-JAVCWZ099[00377] In java.io.PipedInputStream.read@POLYN236237[00377] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "134",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN236237.(buffer.length-out)",
      "_method" : "---java.io.PipedInputStream.read@POLYN236237.dummymethode_00388 in line [00388]",
      "_target" : "java.io.PipedInputStream.read@POLYN236237.available",
      "_risk" : "//QC-JAVCWZ099[00388] In java.io.PipedInputStream.read@POLYN236237[00388] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN236237.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN236237.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN236237.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN236237[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "135",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN236237.(in-out)",
      "_method" : "---java.io.PipedInputStream.read@POLYN236237.dummymethode_00388 in line [00388]",
      "_target" : "java.io.PipedInputStream.read@POLYN236237.available",
      "_risk" : "//QC-JAVCWZ099[00388] In java.io.PipedInputStream.read@POLYN236237[00388] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN236237.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN236237.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN236237.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN236237[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "136",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "buffer.length-out",
      "_method" : "---java.io.PipedInputStream.read@POLYN236237.dummymethode_00390 in line [00390]",
      "_target" : "java.io.PipedInputStream.read@POLYN236237.available",
      "_risk" : "//QC-JAVCWE099[00390] In java.io.PipedInputStream.read@POLYN236237[00390] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN236237.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN236237.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN236237.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN236237[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "137",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "len-1",
      "_method" : "---java.io.PipedInputStream.read@POLYN236237.dummymethode_00395 in line [00395]",
      "_target" : "java.io.PipedInputStream.read@POLYN236237.available",
      "_risk" : "//QC-JAVCWE099[00395] In java.io.PipedInputStream.read@POLYN236237[00395] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN236237.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN236237.dummymethode_00397 in line [00397]",
      "_target" : "java.io.PipedInputStream.read@POLYN236237.cibledummy_00397",
      "_risk" : "//QC-JAVCWZ099[00397] In java.io.PipedInputStream.read@POLYN236237[00397] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "138",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedReader.read@POLYN211423.-1",
      "_method" : "---java.io.PipedReader.read@POLYN211423.dummymethode_00001 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN211423.return",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN211423[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedReader.read@POLYN211423.return",
      "_method" : "---java.io.PipedReader.read@POLYN211423 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN214027.c",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN214027[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "139",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PipedReader.read@POLYN211423.ret",
      "_method" : "---java.io.PipedReader.read@POLYN211423.dummymethode_00001 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN211423.return",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN211423[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedReader.read@POLYN211423.return",
      "_method" : "---java.io.PipedReader.read@POLYN211423 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN214027.c",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN214027[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "140",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN375786.x",
      "_method" : "---java.io.PrintStream.print@POLYN370998 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN370998.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN375786[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.tools.TransactionsCommand.printRow@POLYN321146.rowBuilder",
      "_method" : "---java.io.PrintStream.println@POLYN375786 in line [00929]",
      "_target" : "java.io.PrintStream.println@POLYN375786.x",
      "_risk" : "//QC-JAVCWE099[00929] In org.apache.kafka.tools.TransactionsCommand.printRow@POLYN321146[00929] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "141",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN375786.x",
      "_method" : "---java.io.PrintStream.print@POLYN370998 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN370998.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN375786[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.agent.Agent.exec@POLYN197362.\"Unable to create the task controller.\"",
      "_method" : "---java.io.PrintStream.println@POLYN375786 in line [00171]",
      "_target" : "java.io.PrintStream.println@POLYN375786.x",
      "_risk" : "//QC-JAVCWE099[00171] In org.apache.kafka.trogdor.agent.Agent.exec@POLYN197362[00171] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "142",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN375786.x",
      "_method" : "---java.io.PrintStream.print@POLYN370998 in line [00708]",
      "_target" : "java.io.PrintStream.print@POLYN370998.b",
      "_risk" : "//QC-JAVCWE099[00708] In java.io.PrintStream.println@POLYN375786[00708] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.trogdor.agent.Agent.exec@POLYN197362.\"createWorker failed\"",
      "_method" : "---java.io.PrintStream.println@POLYN375786 in line [00186]",
      "_target" : "java.io.PrintStream.println@POLYN375786.x",
      "_risk" : "//QC-JAVCWE099[00186] In org.apache.kafka.trogdor.agent.Agent.exec@POLYN197362[00186] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "143",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN378953.x",
      "_method" : "---java.io.PrintStream.print@POLYN374504 in line [00806]",
      "_target" : "java.io.PrintStream.println@POLYN378953.cibledummy_00806",
      "_risk" : "//QC-JAVCWE099[00806] In java.io.PrintStream.println@POLYN378953[00806] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN163022.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN378953 in line [00067]",
      "_target" : "java.io.PrintStream.println@POLYN378953.x",
      "_risk" : "//QC-JAVCWE099[00067] In org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN163022[00067] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "144",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN378953.x",
      "_method" : "---java.io.PrintStream.print@POLYN374504 in line [00806]",
      "_target" : "java.io.PrintStream.println@POLYN378953.cibledummy_00806",
      "_risk" : "//QC-JAVCWE099[00806] In java.io.PrintStream.println@POLYN378953[00806] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN172656.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN378953 in line [00081]",
      "_target" : "java.io.PrintStream.println@POLYN378953.x",
      "_risk" : "//QC-JAVCWE099[00081] In org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN172656[00081] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "145",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.append@POLYN370915.\"null\"",
      "_method" : "---java.io.PrintWriter.write@POLYN350950 in line [01002]",
      "_target" : "java.io.PrintWriter.write@POLYN350950.c",
      "_risk" : "//QC-JAVCWZ099[01002] In java.io.PrintWriter.append@POLYN370915[01002] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.write@POLYN350950.c",
      "_method" : "---java.io.Writer.write@POLYN199480 in line [00405]",
      "_target" : "java.io.Writer.write@POLYN199480.c",
      "_risk" : "//QC-JAVCWZ099[00405] In java.io.PrintWriter.write@POLYN350950[00405] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "146",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN354769.c",
      "_method" : "---java.io.PrintWriter.print@POLYN354769.dummymethode_00517 in line [00517]",
      "_target" : "java.io.PrintWriter.print@POLYN354769.cibledummy_00517",
      "_risk" : "//QC-JAVCWZ099[00517] In java.io.PrintWriter.print@POLYN354769[00517] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN359481.x",
      "_method" : "---java.io.PrintWriter.print@POLYN354769 in line [00655]",
      "_target" : "java.io.PrintWriter.print@POLYN354769.c",
      "_risk" : "//QC-JAVCWZ099[00655] In java.io.PrintWriter.println@POLYN359481[00655] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "147",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.newLine@POLYN353432.lineSeparator",
      "_method" : "---java.io.Writer.write@POLYN200780 in line [00480]",
      "_target" : "java.io.Writer.write@POLYN200780.str",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintWriter.newLine@POLYN353432[00480] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN200780.str",
      "_method" : "---java.io.Writer.write@POLYN201373 in line [00157]",
      "_target" : "java.io.Writer.write@POLYN200780.cibledummy_00157",
      "_risk" : "//QC-JAVCWZ099[00157] In java.io.Writer.write@POLYN200780[00157] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "148",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.Writer.write@POLYN200780.str",
      "_method" : "---java.io.Writer.write@POLYN201373 in line [00157]",
      "_target" : "java.io.Writer.write@POLYN200780.cibledummy_00157",
      "_risk" : "//QC-JAVCWZ099[00157] In java.io.Writer.write@POLYN200780[00157] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.message.CodeBuffer.write@POLYN157674.line",
      "_method" : "---java.io.Writer.write@POLYN200780 in line [00050]",
      "_target" : "java.io.Writer.write@POLYN200780.str",
      "_risk" : "//QC-JAVCWE099[00050] In org.apache.kafka.message.CodeBuffer.write@POLYN157674[00050] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "149",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.write@POLYN352562.off",
      "_method" : "---java.io.Writer.write@POLYN201373 in line [00456]",
      "_target" : "java.io.Writer.write@POLYN201373.off",
      "_risk" : "//QC-JAVCWZ099[00456] In java.io.PrintWriter.write@POLYN352562[00456] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Writer.write@POLYN201373.off",
      "_method" : "---java.io.Writer.write@POLYN201373.dummymethode_00191 in line [00191]",
      "_target" : "java.io.Writer.write@POLYN201373.cibledummy_00191",
      "_risk" : "//QC-JAVCWZ099[00191] In java.io.Writer.write@POLYN201373[00191] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "150",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "50",
      "_method" : "---java.net.ServerSocket.ServerSocket@POLYN318081.dummymethode_00218 in line [00218]",
      "_target" : "java.net.ServerSocket.ServerSocket@POLYN318081.backlog",
      "_risk" : "//QC-JAVCWE099[00218] In java.net.ServerSocket.ServerSocket@POLYN318081[00218] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.ServerSocket@POLYN318081.backlog",
      "_method" : "---java.net.ServerSocket.bind@POLYN322546 in line [00220]",
      "_target" : "java.net.ServerSocket.ServerSocket@POLYN318081.cibledummy_00220",
      "_risk" : "//QC-JAVCWE099[00220] In java.net.ServerSocket.ServerSocket@POLYN318081[00220] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "151",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.ServerSocket.getImpl@POLYN319164.return",
      "_method" : "---java.net.ServerSocket.getImpl@POLYN319164 in line [00356]",
      "_target" : "java.net.ServerSocket.bind@POLYN322546.cibledummy_00356",
      "_risk" : "//QC-JAVCWZ099[00356] In java.net.ServerSocket.bind@POLYN322546[00356] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.impl",
      "_method" : "---java.net.ServerSocket.getImpl@POLYN319164.dummymethode_00241 in line [00241]",
      "_target" : "java.net.ServerSocket.getImpl@POLYN319164.return",
      "_risk" : "//QC-JAVCWZ099[00241] In java.net.ServerSocket.getImpl@POLYN319164[00241] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "152",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "true",
      "_method" : "---java.net.ServerSocket.close@POLYN329923.dummymethode_00542 in line [00542]",
      "_target" : "java.net.ServerSocket.closed",
      "_risk" : "//QC-JAVCWE099[00542] In java.net.ServerSocket.close@POLYN329923[00542] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.closed",
      "_method" : "---java.net.ServerSocket.isClosed@POLYN331033.dummymethode_00585 in line [00585]",
      "_target" : "java.net.ServerSocket.isClosed@POLYN331033.return",
      "_risk" : "//QC-JAVCWE099[00585] In java.net.ServerSocket.isClosed@POLYN331033[00585] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "153",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.Socket@POLYN477587.address",
      "_method" : "---java.net.Socket.connect@POLYN481366 in line [00415]",
      "_target" : "java.net.Socket.connect@POLYN481366.endpoint",
      "_risk" : "//QC-JAVCWZ099[00415] In java.net.Socket.Socket@POLYN477587[00415] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.connect@POLYN481366.endpoint",
      "_method" : "---java.net.Socket.connect@POLYN482016 in line [00518]",
      "_target" : "java.net.Socket.connect@POLYN481366.cibledummy_00518",
      "_risk" : "//QC-JAVCWZ099[00518] In java.net.Socket.connect@POLYN481366[00518] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "154",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.connect@POLYN481366.0",
      "_method" : "---java.net.Socket.connect@POLYN482016 in line [00518]",
      "_target" : "java.net.Socket.connect@POLYN482016.timeout",
      "_risk" : "//QC-JAVCWZ099[00518] In java.net.Socket.connect@POLYN481366[00518] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.connect@POLYN482016.timeout",
      "_method" : "---java.net.Socket.connect@POLYN482016 in line [00568]",
      "_target" : "java.net.Socket.connect@POLYN482016.cibledummy_00568",
      "_risk" : "//QC-JAVCWZ099[00568] In java.net.Socket.connect@POLYN482016[00568] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "155",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.Socket@POLYN477587.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN478517 in line [00411]",
      "_target" : "java.net.Socket.createImpl@POLYN478517.stream",
      "_risk" : "//QC-JAVCWZ099[00411] In java.net.Socket.Socket@POLYN477587[00411] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.createImpl@POLYN478517.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN478517.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN478517.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN478517[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "156",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.connect@POLYN482016.true",
      "_method" : "---java.net.Socket.createImpl@POLYN478517 in line [00566]",
      "_target" : "java.net.Socket.createImpl@POLYN478517.stream",
      "_risk" : "//QC-JAVCWZ099[00566] In java.net.Socket.connect@POLYN482016[00566] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.createImpl@POLYN478517.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN478517.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN478517.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN478517[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "157",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.net.Socket.createImpl@POLYN478517.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN478517.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN478517.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN478517[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.Socket.getImpl@POLYN480848.true",
      "_method" : "---java.net.Socket.createImpl@POLYN478517 in line [00500]",
      "_target" : "java.net.Socket.createImpl@POLYN478517.stream",
      "_risk" : "//QC-JAVCWZ099[00500] In java.net.Socket.getImpl@POLYN480848[00500] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "158",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN255788.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN255788.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN255788[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
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
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN255788.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN255788.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN255788[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
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
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN255788.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN255788.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN255788[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
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
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN297149.return",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN297149 in line [00215]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.filterTo@POLYN276180.info",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN318826.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN321047 in line [00717]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN321047.offset",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305142.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN318826 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN318826.offset",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307731.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305142 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305142.offset",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN308774.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307731 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307731.offset",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.lastOffset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN297149.dummymethode_00259 in line [00259]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN297149.shallowOffsetOfMaxTimestamp",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN297149.shallowOffsetOfMaxTimestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN297149.dummymethode_00262 in line [00262]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.info@POLYN297149.return",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN321047.offset",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN321047.dummymethode_00751 in line [00751]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.lastOffset",
      "_risk" : ""
    } ]
  }, {
    "_id" : "162",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN895491.b",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.b",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN882575 in line [03031]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.nread",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.b",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN882575 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.b",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN918831.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.b",
      "_method" : "---java.io.InputStream.read@POLYN255230 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN882575[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "163",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN882575 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.nread",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.b",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN882575 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.b",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN918831.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.b",
      "_method" : "---java.io.InputStream.read@POLYN255230 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN882575[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.read@POLYN814014.buf",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.b",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN814014[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "164",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN895491.len",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.len",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN882575 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.nread",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.len",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN882575 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.len",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN918831.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.len",
      "_method" : "---java.io.InputStream.read@POLYN255230 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN882575[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "165",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN882575 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.nread",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.len",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN882575 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.len",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN918831.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.len",
      "_method" : "---java.io.InputStream.read@POLYN255230 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN882575[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.read@POLYN814014.len",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.len",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN814014[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "166",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN895491.off",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976 in line [02943]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN882575 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.nread",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.off",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN882575 in line [03037]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.off",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN918831.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.off",
      "_method" : "---java.io.InputStream.read@POLYN255230 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN882575[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "167",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.nread",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.dummymethode_03028 in line [03028]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN882575 in line [00001]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.nread",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.off",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN882575 in line [00001]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.off",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.pos",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUTFBody@POLYN918831.dummymethode_03365 in line [03365]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.end",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.off",
      "_method" : "---java.io.InputStream.read@POLYN255230 in line [02620]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.nbytes",
      "_risk" : "//QC-JAVCWZ099[02620] In java.io.ObjectInputStream.PeekInputStream.read@POLYN882575[02620] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.nbytes",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.dummymethode_02622 in line [02622]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN882575.return",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.read@POLYN814014.off",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976 in line [00917]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN898976.off",
      "_risk" : "//QC-JAVCWZ099[00917] In java.io.ObjectInputStream.read@POLYN814014[00917] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "168",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN318826.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN321047 in line [00717]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN321047.timestamp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305142.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN318826 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN318826.timestamp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307731.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305142 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305142.timestamp",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN308774.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307731 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307731.timestamp",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN321047.timestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.recordWritten@POLYN321047.dummymethode_00754 in line [00754]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.maxTimestamp",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.maxTimestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.writeDefaultBatchHeader@POLYN302586.dummymethode_00400 in line [00400]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeDefaultBatchHeader@POLYN302586.maxTimestamp",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeDefaultBatchHeader@POLYN302586.maxTimestamp",
      "_method" : "---org.apache.kafka.common.record.DefaultRecordBatch.writeHeader@POLYN279687 in line [00402]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeDefaultBatchHeader@POLYN302586.cibledummy_00402",
      "_risk" : ""
    } ]
  }, {
    "_id" : "169",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN208039.struct",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN208039.dummymethode_00001 in line [00001]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN208039.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.InputStream.read@POLYN250267.return",
      "_method" : "---java.io.InputStream.read@POLYN250267 in line [00001]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN208039.struct",
      "_risk" : "//QC-JAVCWE099[00001] In org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN208039[00001] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.assignmentSnapshot",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN241807.dummymethode_00170 in line [00170]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN241807.localAssignmentSnapshot",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN241807.localAssignmentSnapshot",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN241807.dummymethode_00171 in line [00171]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN241807.workerState",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN241807.workerState",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN241807.dummymethode_00174 in line [00174]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.metadata@POLYN241807.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN208039.return",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.IncrementalCooperativeConnectProtocol.deserializeAssignment@POLYN208039 in line [00186]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.onJoinComplete@POLYN242687.newAssignment",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.onJoinComplete@POLYN242687.newAssignment",
      "_method" : "---org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.onJoinComplete@POLYN242687.dummymethode_00209 in line [00209]",
      "_target" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.assignmentSnapshot",
      "_risk" : ""
    } ]
  }, {
    "_id" : "170",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN249871.return",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN249871 in line [00372]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN249216.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254397.return",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254397 in line [00406]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN249871.keySize",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN249871.skipBuffer",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254397 in line [00421]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254397.buffer",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN249871.keySize",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN249871.dummymethode_00428 in line [00428]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN249871.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254397.buffer",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.readVarint@POLYN232770 in line [00473]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254397.sizeInBytes",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254397.sizeInBytes",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254397.dummymethode_00475 in line [00475]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254397.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "171",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "3",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN641861.dummymethode_02146 in line [02146]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN641861.utflen",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN641861.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN641861.dummymethode_02153 in line [02153]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN641861.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644342.utflen",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN581953 in line [02188]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644342.cibledummy_02188",
      "_risk" : "//QC-JAVCWE099[02188] In java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644342[02188] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN641861.return",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN641861 in line [01303]",
      "_target" : "java.io.ObjectOutputStream.writeString@POLYN600885.utflen",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN600885.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644342 in line [01309]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644342.utflen",
      "_risk" : ""
    } ]
  }, {
    "_id" : "172",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "2",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN641861.dummymethode_02148 in line [02148]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN641861.utflen",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN641861.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN641861.dummymethode_02153 in line [02153]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN641861.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644342.utflen",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN581953 in line [02188]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644342.cibledummy_02188",
      "_risk" : "//QC-JAVCWE099[02188] In java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644342[02188] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN641861.return",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.getUTFLength@POLYN641861 in line [01303]",
      "_target" : "java.io.ObjectOutputStream.writeString@POLYN600885.utflen",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN600885.utflen",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644342 in line [00001]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN644342.utflen",
      "_risk" : ""
    } ]
  }, {
    "_id" : "173",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252023.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN253569 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN253569.magic",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN253569.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN254915 in line [00428]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254915.magic",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254915.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN254915.dummymethode_00462 in line [00462]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254915.cibledummy_00462",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN250936.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN252023 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252023.magic",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN304023.magic",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN250936 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN250936.magic",
      "_risk" : ""
    } ]
  }, {
    "_id" : "174",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN190177.position",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN463221 in line [00215]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN463221.position",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN464489.position",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN464489.dummymethode_01114 in line [01114]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN464489.currentPosition",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN464489.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN255230 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN255230.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN464489[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN463221.position",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN464489 in line [01090]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN464489.position",
      "_risk" : ""
    } ]
  }, {
    "_id" : "175",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN151564.return",
      "_method" : "---org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN151564 in line [00391]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN249871.bytesRemaining",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN249871.bytesRemaining",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254397 in line [00421]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254397.bytesRemaining",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254397.bytesRemaining",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readMore@POLYN256034 in line [00465]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN256034.bytesRemaining",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN151564.value",
      "_method" : "---org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN151564.dummymethode_00026 in line [00026]",
      "_target" : "org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN151564.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "176",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN189821.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN189821 in line [00134]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.checksum@POLYN187433.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.fullBatch",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN189821.dummymethode_00203 in line [00203]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN189821.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.toMemoryRecordBatch@POLYN189367.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.toMemoryRecordBatch@POLYN189367 in line [00217]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN190177.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN190177.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN190177 in line [00196]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.fullBatch",
      "_risk" : ""
    } ]
  }, {
    "_id" : "177",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN189821.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN189821 in line [00124]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.compressionType@POLYN187169.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.fullBatch",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN189821.dummymethode_00203 in line [00203]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchHeader@POLYN189821.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN190177.buffer",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.toMemoryRecordBatch@POLYN189367 in line [00217]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN190177.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN190177.return",
      "_method" : "---org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN190177 in line [00001]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.fullBatch",
      "_risk" : ""
    } ]
  }, {
    "_id" : "178",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273030.return",
      "_method" : "---org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273030 in line [00188]",
      "_target" : "org.apache.kafka.common.record.FileRecords.append@POLYN245192.written",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileRecords.append@POLYN245192.written",
      "_method" : "---org.apache.kafka.common.record.FileRecords.append@POLYN245192.dummymethode_00189 in line [00189]",
      "_target" : "org.apache.kafka.common.record.FileRecords.append@POLYN245192.cibledummy_00189",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273030.buffer",
      "_method" : "---java.io.FileOutputStream.write@POLYN241418 in line [00092]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273030.written",
      "_risk" : "//QC-JAVCWE099[00092] In org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273030[00092] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273030.written",
      "_method" : "---org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273030.dummymethode_00094 in line [00094]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273030.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "179",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273030.return",
      "_method" : "---org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273030 in line [00001]",
      "_target" : "org.apache.kafka.common.record.FileRecords.append@POLYN245192.written",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileRecords.append@POLYN245192.written",
      "_method" : "---org.apache.kafka.common.record.FileRecords.append@POLYN245192.dummymethode_00189 in line [00189]",
      "_target" : "org.apache.kafka.common.record.FileRecords.append@POLYN245192.cibledummy_00189",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273030.sourcedummy",
      "_method" : "---java.io.FileOutputStream.write@POLYN241418 in line [00092]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273030.written",
      "_risk" : "//QC-JAVCWE099[00092] In org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273030[00092] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273030.written",
      "_method" : "---org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273030.dummymethode_00094 in line [00094]",
      "_target" : "org.apache.kafka.common.record.MemoryRecords.writeFullyTo@POLYN273030.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "180",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252023.key",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN253569 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN253569.key",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN253569.key",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN254915 in line [00428]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254915.key",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254915.key",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN254915.dummymethode_00476 in line [00476]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254915.cibledummy_00476",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN250936.null",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN252023 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252023.key",
      "_risk" : ""
    } ]
  }, {
    "_id" : "181",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252023.newByteBufferOutputStream(buffer)",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN252023.dummymethode_00389 in line [00389]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252023.out",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252023.out",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN253569 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN253569.out",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN253569.out",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN254915 in line [00428]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254915.out",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254915.out",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN254915.dummymethode_00476 in line [00476]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN254915.cibledummy_00476",
      "_risk" : ""
    } ]
  }, {
    "_id" : "182",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN250936.buffer",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN252023 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252023.buffer",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN170991.return",
      "_method" : "---org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN170991 in line [00416]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN304023.buffer",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN304023.buffer",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN250936 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN250936.buffer",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN170991.buffer",
      "_method" : "---org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN170991.dummymethode_00080 in line [00080]",
      "_target" : "org.apache.kafka.common.utils.ByteBufferOutputStream.buffer@POLYN170991.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "183",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.FileRecords.channel@POLYN241508.return",
      "_method" : "---org.apache.kafka.common.record.FileRecords.channel@POLYN241508 in line [00212]",
      "_target" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN190177.channel",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.loadBatchWithSize@POLYN190177.channel",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN463221 in line [00215]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN463221.channel",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.FileRecords.channel@POLYN241508.channel",
      "_method" : "---org.apache.kafka.common.record.FileRecords.channel@POLYN241508.dummymethode_00107 in line [00107]",
      "_target" : "org.apache.kafka.common.record.FileRecords.channel@POLYN241508.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN463221.channel",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN464489 in line [01090]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFullyOrFail@POLYN463221.cibledummy_01090",
      "_risk" : ""
    } ]
  }, {
    "_id" : "184",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.handleInboundMessage@POLYN606941.currentTimeMs",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN604662 in line [01668]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN604662.currentTimeMs",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN604662.currentTimeMs",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN572121 in line [01622]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN572121.currentTimeMs",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Time.milliseconds@POLYN162721.return",
      "_method" : "---org.apache.kafka.common.utils.Time.milliseconds@POLYN162721 in line [02232]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.poll@POLYN631655.currentTimeMs",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.poll@POLYN631655.currentTimeMs",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.handleInboundMessage@POLYN606941 in line [02249]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.handleInboundMessage@POLYN606941.currentTimeMs",
      "_risk" : ""
    } ]
  }, {
    "_id" : "185",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.append@POLYN633187.records",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN224581 in line [02274]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN224581.records",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.scheduleAppend@POLYN632711.records",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.append@POLYN633187 in line [02255]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.append@POLYN633187.records",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN224581.records",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN225591 in line [00112]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN225591.records",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN225591.records",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN225591.dummymethode_00152 in line [00152]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN225591.batch",
      "_risk" : ""
    } ]
  }, {
    "_id" : "186",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.append@POLYN633187.records",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN224581 in line [00001]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN224581.records",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.scheduleAtomicAppend@POLYN632956.records",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.append@POLYN633187 in line [02260]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.append@POLYN633187.records",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN224581.records",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN225591 in line [00001]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN225591.records",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN225591.records",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN225591.dummymethode_00152 in line [00152]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN225591.batch",
      "_risk" : ""
    } ]
  }, {
    "_id" : "187",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFully@POLYN818421.buf",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN901195 in line [01067]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN901195.b",
      "_risk" : "//QC-JAVCWE099[01067] In java.io.ObjectInputStream.readFully@POLYN818421[01067] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN163137.arr",
      "_method" : "---java.io.ObjectInputStream.readFully@POLYN818421 in line [00081]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN818421.buf",
      "_risk" : "//QC-JAVCWE099[00081] In org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN163137[00081] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.protocol.DataInputStreamReadable.readByteBuffer@POLYN163716.arr",
      "_method" : "---org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN163137 in line [00099]",
      "_target" : "org.apache.kafka.common.protocol.DataInputStreamReadable.readArray@POLYN163137.arr",
      "_risk" : ""
    } ]
  }, {
    "_id" : "188",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN249216.input",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN249871 in line [00372]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN249871.input",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readPartiallyFrom@POLYN249871.input",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254397 in line [00421]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254397.input",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.skipLengthDelimitedField@POLYN254397.input",
      "_method" : "---org.apache.kafka.common.record.DefaultRecord.readMore@POLYN256034 in line [00465]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN256034.input",
      "_risk" : ""
    } ]
  }, {
    "_id" : "189",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252023.compressionType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN253569 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN253569.compressionType",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN250936.compressionType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN252023 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252023.compressionType",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN304023.compressionType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN250936 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN250936.compressionType",
      "_risk" : ""
    } ]
  }, {
    "_id" : "190",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252023.timestampType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN253569 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN253569.timestampType",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN250936.timestampType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN252023 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN252023.timestampType",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN304023.timestampType",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN250936 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN250936.timestampType",
      "_risk" : ""
    } ]
  }, {
    "_id" : "191",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305142.headers",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN318826 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN318826.headers",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307731.headers",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305142 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305142.headers",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN308774.Record.EMPTY_HEADERS",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307731 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307731.headers",
      "_risk" : ""
    } ]
  }, {
    "_id" : "192",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305142.key",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN318826 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN318826.key",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307731.key",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305142 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305142.key",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN308774.key",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307731 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307731.key",
      "_risk" : ""
    } ]
  }, {
    "_id" : "193",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305142.value",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN318826 in line [00454]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendDefaultRecord@POLYN318826.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307731.value",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305142 in line [00484]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305142.value",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN308774.value",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307731 in line [00506]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN307731.value",
      "_risk" : ""
    } ]
  }, {
    "_id" : "194",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN319571.sourcedummy",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN254915 in line [00730]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN319571.crc",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN319571.crc",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN319571.dummymethode_00732 in line [00732]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN319571.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN319571.return",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.appendLegacyRecord@POLYN319571 in line [00456]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.appendWithOffset@POLYN305142.cibledummy_00456",
      "_risk" : ""
    } ]
  }, {
    "_id" : "195",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN175716.null",
      "_method" : "---org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN175716.dummymethode_00110 in line [00110]",
      "_target" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN175716.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN175716.return",
      "_method" : "---org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN175716 in line [00119]",
      "_target" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN175716.size",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN175716.size",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN581673 in line [00120]",
      "_target" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN175716.cibledummy_00120",
      "_risk" : "//QC-JAVCWE099[00120] In org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN175716[00120] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "196",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.append@POLYN633187.epoch",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN224581 in line [02274]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN224581.epoch",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.scheduleAppend@POLYN632711.epoch",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.append@POLYN633187 in line [02255]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.append@POLYN633187.epoch",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN224581.epoch",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN225591 in line [00112]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN225591.epoch",
      "_risk" : ""
    } ]
  }, {
    "_id" : "197",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.append@POLYN633187.epoch",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN224581 in line [00001]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN224581.epoch",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.scheduleAtomicAppend@POLYN632956.epoch",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.append@POLYN633187 in line [02260]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.append@POLYN633187.epoch",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN224581.epoch",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN225591 in line [00001]",
      "_target" : "org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN225591.epoch",
      "_risk" : ""
    } ]
  }, {
    "_id" : "198",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN186856.return",
      "_method" : "---org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN186856 in line [00233]",
      "_target" : "org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN250127.loadedCheckpoints",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN250127.loadedCheckpoints",
      "_method" : "---org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN250127 in line [00235]",
      "_target" : "org.apache.kafka.streams.processor.internals.ProcessorStateManager.initializeStoreOffsetsFromCheckpoint@POLYN250127.cibledummy_00235",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN186856.offsets",
      "_method" : "---org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN186856.dummymethode_00182 in line [00182]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.read@POLYN186856.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "199",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readBoolean@POLYN815702.return",
      "_method" : "---java.io.ObjectInputStream.readBoolean@POLYN815702 in line [03208]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readBooleans@POLYN907984.v[off++]",
      "_risk" : "//QC-JAVCWZ099[03208] In java.io.ObjectInputStream.BlockDataInputStream.readBooleans@POLYN907984[03208] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readBoolean@POLYN901984.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readBoolean@POLYN901984 in line [00957]",
      "_target" : "java.io.ObjectInputStream.readBoolean@POLYN815702.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "200",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFully@POLYN818893.buf",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN901195 in line [01084]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN818893.cibledummy_01084",
      "_risk" : "//QC-JAVCWE099[01084] In java.io.ObjectInputStream.readFully@POLYN818893[01084] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN256034.array",
      "_method" : "---java.io.ObjectInputStream.readFully@POLYN818893 in line [00507]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN818893.buf",
      "_risk" : "//QC-JAVCWE099[00507] In org.apache.kafka.common.record.DefaultRecord.readMore@POLYN256034[00507] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "201",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFully@POLYN818893.len",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN901195 in line [01084]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN818893.cibledummy_01084",
      "_risk" : "//QC-JAVCWE099[01084] In java.io.ObjectInputStream.readFully@POLYN818893[01084] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN256034.bytesRead",
      "_method" : "---java.io.ObjectInputStream.readFully@POLYN818893 in line [00507]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN818893.len",
      "_risk" : "//QC-JAVCWE099[00507] In org.apache.kafka.common.record.DefaultRecord.readMore@POLYN256034[00507] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "202",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFully@POLYN818893.off",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readFully@POLYN901195 in line [01084]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN818893.cibledummy_01084",
      "_risk" : "//QC-JAVCWE099[01084] In java.io.ObjectInputStream.readFully@POLYN818893[01084] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.readMore@POLYN256034.bytesToLeftShift",
      "_method" : "---java.io.ObjectInputStream.readFully@POLYN818893 in line [00507]",
      "_target" : "java.io.ObjectInputStream.readFully@POLYN818893.off",
      "_risk" : "//QC-JAVCWE099[00507] In org.apache.kafka.common.record.DefaultRecord.readMore@POLYN256034[00507] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "203",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN624548.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486 in line [01814]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.off",
      "_method" : "---java.io.OutputStream.write@POLYN187380 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN187380.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "204",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN624770.off",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486 in line [01818]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.off",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.off",
      "_method" : "---java.io.OutputStream.write@POLYN187380 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN187380.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "205",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.off",
      "_method" : "---java.io.OutputStream.write@POLYN187380 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN187380.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.writeFields@POLYN620102.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486 in line [01695]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "206",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.off",
      "_method" : "---java.io.OutputStream.write@POLYN187380 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN187380.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN611913.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486 in line [01534]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "207",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.off",
      "_method" : "---java.io.OutputStream.write@POLYN187380 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN187380.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN578447.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486 in line [00690]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "208",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.off",
      "_method" : "---java.io.OutputStream.write@POLYN187380 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN187380.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN578865.off",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "209",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.off",
      "_method" : "---java.io.OutputStream.write@POLYN187380 in line [01842]",
      "_target" : "java.io.OutputStream.write@POLYN187380.off",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN601662.0",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486 in line [01334]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.off",
      "_risk" : ""
    } ]
  }, {
    "_id" : "210",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN624548.b",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486 in line [01814]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.b",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.b",
      "_method" : "---java.io.OutputStream.write@POLYN187380 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "211",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN624770.b",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486 in line [01818]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.b",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.b",
      "_method" : "---java.io.OutputStream.write@POLYN187380 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "212",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.b",
      "_method" : "---java.io.OutputStream.write@POLYN187380 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.writeFields@POLYN620102.primVals",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486 in line [01695]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "213",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.b",
      "_method" : "---java.io.OutputStream.write@POLYN187380 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN611913.primVals",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486 in line [01534]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "214",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.b",
      "_method" : "---java.io.OutputStream.write@POLYN187380 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN578447.buf",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486 in line [00690]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "215",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.b",
      "_method" : "---java.io.OutputStream.write@POLYN187380 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN578865.buf",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "216",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.b",
      "_method" : "---java.io.OutputStream.write@POLYN187380 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN601662.ba",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486 in line [01334]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.b",
      "_risk" : ""
    } ]
  }, {
    "_id" : "217",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN624548.b.length",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486 in line [01814]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.len",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.len",
      "_method" : "---java.io.OutputStream.write@POLYN187380 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "218",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN624770.len",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486 in line [01818]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.len",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.len",
      "_method" : "---java.io.OutputStream.write@POLYN187380 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "219",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.len",
      "_method" : "---java.io.OutputStream.write@POLYN187380 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.writeFields@POLYN620102.primVals.length",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486 in line [01695]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "220",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.len",
      "_method" : "---java.io.OutputStream.write@POLYN187380 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN611913.primDataSize",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486 in line [01534]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "221",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.len",
      "_method" : "---java.io.OutputStream.write@POLYN187380 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN578447.buf.length",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486 in line [00690]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "222",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.len",
      "_method" : "---java.io.OutputStream.write@POLYN187380 in line [01842]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.cibledummy_01842",
      "_risk" : "//QC-JAVCWZ099[01842] In java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486[01842] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.write@POLYN578865.len",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486 in line [00709]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.write@POLYN625486.len",
      "_risk" : ""
    } ]
  }, {
    "_id" : "223",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.print@POLYN357275.s",
      "_method" : "---java.io.PrintWriter.write@POLYN352248 in line [00587]",
      "_target" : "java.io.PrintWriter.print@POLYN357275.cibledummy_00587",
      "_risk" : "//QC-JAVCWZ099[00587] In java.io.PrintWriter.print@POLYN357275[00587] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.println@POLYN361799.x",
      "_method" : "---java.io.PrintWriter.print@POLYN357275 in line [00725]",
      "_target" : "java.io.PrintWriter.print@POLYN357275.s",
      "_risk" : "//QC-JAVCWZ099[00725] In java.io.PrintWriter.println@POLYN361799[00725] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "224",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.PutFieldImpl.write@POLYN618542.objVals[i]",
      "_method" : "---java.util.HashMap.writeObject@POLYN678352 in line [01687]",
      "_target" : "java.util.HashMap.writeObject@POLYN678352.s",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.writeObject@POLYN678352.s",
      "_method" : "---java.util.HashMap.internalWriteEntries@POLYN703103 in line [01360]",
      "_target" : "java.util.HashMap.internalWriteEntries@POLYN703103.s",
      "_risk" : ""
    } ]
  }, {
    "_id" : "225",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN413411.sendBufferSize",
      "_method" : "---java.net.Socket.setSendBufferSize@POLYN502759 in line [00289]",
      "_target" : "java.net.Socket.setSendBufferSize@POLYN502759.size",
      "_risk" : "//QC-JAVCWE099[00289] In org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN413411[00289] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.network.Selector.connect@POLYN411683.sendBufferSize",
      "_method" : "---org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN413411 in line [00254]",
      "_target" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN413411.sendBufferSize",
      "_risk" : ""
    } ]
  }, {
    "_id" : "226",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN413411.receiveBufferSize",
      "_method" : "---java.net.Socket.setReceiveBufferSize@POLYN505466 in line [00291]",
      "_target" : "java.net.Socket.setReceiveBufferSize@POLYN505466.size",
      "_risk" : "//QC-JAVCWE099[00291] In org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN413411[00291] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.network.Selector.connect@POLYN411683.receiveBufferSize",
      "_method" : "---org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN413411 in line [00254]",
      "_target" : "org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN413411.receiveBufferSize",
      "_risk" : ""
    } ]
  }, {
    "_id" : "227",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeBlock@POLYN211233.compressedLengt",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN228371 in line [00187]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN228371.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN228371.value",
      "_method" : "---java.io.OutputStream.write@POLYN185588 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN185588.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN228371[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "228",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeBlock@POLYN211233.hash",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN228371 in line [00193]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN228371.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN228371.value",
      "_method" : "---java.io.OutputStream.write@POLYN185588 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN185588.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN228371[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "229",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.compress.KafkaLZ4BlockOutputStream.writeEndMark@POLYN212684.0",
      "_method" : "---org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN228371 in line [00205]",
      "_target" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN228371.value",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN228371.value",
      "_method" : "---java.io.OutputStream.write@POLYN185588 in line [00112]",
      "_target" : "java.io.OutputStream.write@POLYN185588.b",
      "_risk" : "//QC-JAVCWE099[00112] In org.apache.kafka.common.utils.ByteUtils.writeUnsignedIntLE@POLYN228371[00112] target data PATHtainted (java.io.OutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "230",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.handleInboundMessage@POLYN606941.request",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN604662 in line [01668]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN604662.request",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN604662.request",
      "_method" : "---org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN572121 in line [01622]",
      "_target" : "org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN572121.requestMetadata",
      "_risk" : ""
    } ]
  }, {
    "_id" : "231",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "1",
      "_source" : "org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN177415.records",
      "_method" : "---org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN225591 in line [00167]",
      "_target" : "org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN177415.cibledummy_00167",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.snapshot.RecordsSnapshotWriter.appendBatches@POLYN178546.batch.data",
      "_method" : "---org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN177415 in line [00191]",
      "_target" : "org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN177415.records",
      "_risk" : ""
    } ]
  } ],
  "_lesDeadlocks" : [ {
    "_id" : "R0",
    "_libelle" : "org.apache.kafka.connect.mirror.OffsetSyncStore.this"
  }, {
    "_id" : "R1",
    "_libelle" : "org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN163553.pollTimeout"
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
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN342169.tp"
  }, {
    "_id" : "R7",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN342169.highWatermark"
  }, {
    "_id" : "R8",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN342359.tp"
  }, {
    "_id" : "R9",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN342359.logStartOffset"
  }, {
    "_id" : "R10",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN342549.tp"
  }, {
    "_id" : "R11",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN342549.lastStableOffset"
  }, {
    "_id" : "R12",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN344783.partition"
  }, {
    "_id" : "R13",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN344783.offsetResetStrategy"
  }, {
    "_id" : "R14",
    "_libelle" : "java.io.InputStream.this"
  }, {
    "_id" : "R15",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.this"
  }, {
    "_id" : "R16",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN350337.tp"
  }, {
    "_id" : "R17",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN335239.tp"
  }, {
    "_id" : "R18",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN335239.position"
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
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN327787.assignments"
  }, {
    "_id" : "R23",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadLevelSensors"
  }, {
    "_id" : "R24",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadLevelMetrics"
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
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerConnector.this"
  }, {
    "_id" : "R31",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.this"
  }, {
    "_id" : "R32",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171479.prefix"
  }, {
    "_id" : "R33",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171479.id"
  }, {
    "_id" : "R34",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171479.metrics"
  }, {
    "_id" : "R35",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.this"
  }, {
    "_id" : "R36",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.consumerRecord@POLYN211533.consumedMessage"
  }, {
    "_id" : "R37",
    "_libelle" : "org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitableRecords"
  }, {
    "_id" : "R38",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN427301.isDisconnected"
  }, {
    "_id" : "R39",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN427301.cause"
  }, {
    "_id" : "R40",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.unsent"
  }, {
    "_id" : "R41",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.this"
  }, {
    "_id" : "R42",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN384053.exception"
  }, {
    "_id" : "R43",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN384539.exception"
  }, {
    "_id" : "R44",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN387286.tp"
  }, {
    "_id" : "R45",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN403049.e"
  }, {
    "_id" : "R46",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.this"
  }, {
    "_id" : "R47",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN170881.topic"
  }, {
    "_id" : "R48",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN170881.nowMs"
  }, {
    "_id" : "R49",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN358499.deque"
  }, {
    "_id" : "R50",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN385549.topicPartition"
  }, {
    "_id" : "R51",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN389661.topicPartition"
  }, {
    "_id" : "R52",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN389661.increment"
  }, {
    "_id" : "R53",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.updateEstimation@POLYN164514.compressionRatioForTopic"
  }, {
    "_id" : "R54",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN394666.batch"
  }, {
    "_id" : "R55",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN394666.exception"
  }, {
    "_id" : "R56",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN394666.adjustSequenceNumbers"
  }, {
    "_id" : "R57",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN394071.exception"
  }, {
    "_id" : "R58",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN391484.batch"
  }, {
    "_id" : "R59",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN398433.batch"
  }, {
    "_id" : "R60",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN172924.lastVersion"
  }, {
    "_id" : "R61",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN172924.timeoutMs"
  }, {
    "_id" : "R62",
    "_libelle" : "org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN272043.topic"
  }, {
    "_id" : "R63",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN334311.dq"
  }, {
    "_id" : "R64",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.this"
  }, {
    "_id" : "R65",
    "_libelle" : "org.apache.kafka.clients.producer.internals.IncompleteBatches.incomplete"
  }, {
    "_id" : "R66",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN381730.topicPartition"
  }, {
    "_id" : "R67",
    "_libelle" : "org.apache.kafka.clients.admin.KafkaAdminClient.this"
  }, {
    "_id" : "R68",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.remove@POLYN158493.nodeId"
  }, {
    "_id" : "R69",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.update@POLYN158221.nodeId"
  }, {
    "_id" : "R70",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.update@POLYN158221.nodeApiVersions"
  }, {
    "_id" : "R71",
    "_libelle" : "org.apache.kafka.streams.processor.internals.GlobalStreamThread.stateLock"
  }, {
    "_id" : "R72",
    "_libelle" : "org.apache.kafka.clients.Metadata.bootstrap@POLYN261085.addresses"
  }, {
    "_id" : "R73",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170695.prefix"
  }, {
    "_id" : "R74",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170695.id"
  }, {
    "_id" : "R75",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170695.metrics"
  }, {
    "_id" : "R76",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170695.nowMs"
  }, {
    "_id" : "R77",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.this"
  }, {
    "_id" : "R78",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN283346.connector"
  }, {
    "_id" : "R79",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN284660.id"
  }, {
    "_id" : "R80",
    "_libelle" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.lock"
  }, {
    "_id" : "R81",
    "_libelle" : "java.io.PrintStream.this"
  }, {
    "_id" : "R82",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.this"
  }, {
    "_id" : "R83",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.this"
  }, {
    "_id" : "R84",
    "_libelle" : "org.apache.kafka.connect.runtime.Worker.this"
  }, {
    "_id" : "R85",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN261477.response"
  }, {
    "_id" : "R86",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN261477.isPartialUpdate"
  }, {
    "_id" : "R87",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN261477.nowMs"
  }, {
    "_id" : "R88",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN262051.requestVersion"
  }, {
    "_id" : "R89",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN262051.response"
  }, {
    "_id" : "R90",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN262051.isPartialUpdate"
  }, {
    "_id" : "R91",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN262051.nowMs"
  }, {
    "_id" : "R92",
    "_libelle" : "org.apache.kafka.common.requests.MetadataResponse.data"
  }, {
    "_id" : "R93",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN426947.error"
  }, {
    "_id" : "R94",
    "_libelle" : "java.io.File.this"
  }, {
    "_id" : "R95",
    "_libelle" : "java.io.File.readObject@POLYN642484.s"
  }, {
    "_id" : "R96",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN402871.request"
  }, {
    "_id" : "R97",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.taskLevelSensors"
  }, {
    "_id" : "R98",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.nodeLevelSensors"
  }, {
    "_id" : "R99",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN237845.connName"
  }, {
    "_id" : "R100",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN233984.connName"
  }, {
    "_id" : "R101",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN233984.callback"
  }, {
    "_id" : "R102",
    "_libelle" : "org.apache.kafka.common.security.oauthbearer.internals.expiring.ExpiringCredentialRefreshingLogin.mandatoryClassToSynchronizeOnPriorToRefresh"
  }, {
    "_id" : "R103",
    "_libelle" : "org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN584406.request"
  }, {
    "_id" : "R104",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN242304.request"
  }, {
    "_id" : "R105",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN242304.cb"
  }, {
    "_id" : "R106",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN239682.taskId"
  }, {
    "_id" : "R107",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN239682.cb"
  }, {
    "_id" : "R108",
    "_libelle" : "java.lang.Throwable.this"
  }, {
    "_id" : "R109",
    "_libelle" : "java.lang.Throwable.addSuppressed@POLYN397829.exception"
  }, {
    "_id" : "R110",
    "_libelle" : "java.io.BufferedOutputStream.this"
  }, {
    "_id" : "R111",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN169816.b"
  }, {
    "_id" : "R112",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN169816.off"
  }, {
    "_id" : "R113",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN169816.len"
  }, {
    "_id" : "R114",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN268254.cleanupDelayMs"
  }, {
    "_id" : "R115",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN265247.taskId"
  }, {
    "_id" : "R116",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.this"
  }, {
    "_id" : "R117",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN203227.key"
  }, {
    "_id" : "R118",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN203227.value"
  }, {
    "_id" : "R119",
    "_libelle" : "org.apache.kafka.tools.ThroughputThrottler.this"
  }, {
    "_id" : "R120",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN400159.now"
  }, {
    "_id" : "R121",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.this"
  }, {
    "_id" : "R122",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN199973.newCacheSizeBytes"
  }, {
    "_id" : "R123",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaConfigBackingStore.lock"
  }, {
    "_id" : "R124",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.this"
  }, {
    "_id" : "R125",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN230940.initialTopologies"
  }, {
    "_id" : "R126",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.this"
  }, {
    "_id" : "R127",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.setStreamsConfig@POLYN496123.applicationConfig"
  }, {
    "_id" : "R128",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.this"
  }, {
    "_id" : "R129",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.pollTasks"
  }, {
    "_id" : "R130",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN332263.tp"
  }, {
    "_id" : "R131",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN332263.position"
  }, {
    "_id" : "R132",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN341425.tp"
  }, {
    "_id" : "R133",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN393517.batch"
  }, {
    "_id" : "R134",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN393517.response"
  }, {
    "_id" : "R135",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN430959.shortReason"
  }, {
    "_id" : "R136",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN431267.shortReason"
  }, {
    "_id" : "R137",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN431267.fullReason"
  }, {
    "_id" : "R138",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN207493.entries"
  }, {
    "_id" : "R139",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN349632.tp"
  }, {
    "_id" : "R140",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN349783.tp"
  }, {
    "_id" : "R141",
    "_libelle" : "java.net.Socket.this"
  }, {
    "_id" : "R142",
    "_libelle" : "java.net.Socket.setSendBufferSize@POLYN502759.size"
  }, {
    "_id" : "R143",
    "_libelle" : "java.net.Socket.setReceiveBufferSize@POLYN505466.size"
  }, {
    "_id" : "R144",
    "_libelle" : "org.apache.kafka.trogdor.workload.RoundTripWorker.this"
  }, {
    "_id" : "R145",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.this"
  }, {
    "_id" : "R146",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN235965.connName"
  }, {
    "_id" : "R147",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN235965.config"
  }, {
    "_id" : "R148",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN235965.allowReplace"
  }, {
    "_id" : "R149",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN235965.callback"
  }, {
    "_id" : "R150",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN235965.configInfos"
  }, {
    "_id" : "R151",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN241099.connName"
  }, {
    "_id" : "R152",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN241099.cb"
  }, {
    "_id" : "R153",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.this"
  }, {
    "_id" : "R154",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN174916.reader"
  }, {
    "_id" : "R155",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.taskDirCreationLock"
  }, {
    "_id" : "R156",
    "_libelle" : "org.apache.kafka.clients.Metadata.failedUpdate@POLYN273753.now"
  }, {
    "_id" : "R157",
    "_libelle" : "java.util.Hashtable.this"
  }, {
    "_id" : "R158",
    "_libelle" : "java.util.Hashtable.putAll@POLYN438584.t"
  }, {
    "_id" : "R159",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN252243.topic"
  }, {
    "_id" : "R160",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN252243.partitions"
  }, {
    "_id" : "R161",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN250938.newOffsets"
  }, {
    "_id" : "R162",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN251362.newOffsets"
  }, {
    "_id" : "R163",
    "_libelle" : "org.apache.kafka.clients.producer.MockProducer.this"
  }, {
    "_id" : "R164",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.this"
  }, {
    "_id" : "R165",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.openIterators"
  }, {
    "_id" : "R166",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN208940.namespace"
  }, {
    "_id" : "R167",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheLevelSensors"
  }, {
    "_id" : "R168",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.splitAndReenqueue@POLYN345531.partitionDequeue"
  }, {
    "_id" : "R169",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.setEstimation@POLYN166470.compressionRatioForTopic"
  }, {
    "_id" : "R170",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.addInFlightBatch@POLYN390057.batch"
  }, {
    "_id" : "R171",
    "_libelle" : "org.apache.kafka.streams.StreamsBuilder.this"
  }, {
    "_id" : "R172",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerSourceTask.this"
  }, {
    "_id" : "R173",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromAssignment@POLYN584349.partitions"
  }, {
    "_id" : "R174",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromAssignment@POLYN584349.logPrefix"
  }, {
    "_id" : "R175",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromMetadata@POLYN585162.topics"
  }, {
    "_id" : "R176",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromMetadata@POLYN585162.logPrefix"
  }, {
    "_id" : "R177",
    "_libelle" : "java.net.ServerSocket.closeLock"
  }, {
    "_id" : "R178",
    "_libelle" : "java.net.Socket.closeLock"
  }, {
    "_id" : "R179",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.rebalance@POLYN237797.newAssignment"
  }, {
    "_id" : "R180",
    "_libelle" : "java.io.File.writeObject@POLYN642103.s"
  }, {
    "_id" : "R181",
    "_libelle" : "java.lang.Throwable.writeObject@POLYN395774.s"
  }, {
    "_id" : "R182",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.reporters@POLYN211051.reporters"
  }, {
    "_id" : "R183",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN172438.reader"
  }, {
    "_id" : "R184",
    "_libelle" : "java.net.ServerSocket.this"
  }, {
    "_id" : "R185",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN429926.reason"
  }, {
    "_id" : "R186",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN429926.shouldResetMemberId"
  }, {
    "_id" : "R187",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN429227.reason"
  }, {
    "_id" : "R188",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN429227.shouldResetMemberId"
  }, {
    "_id" : "R189",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN332854.tp"
  }, {
    "_id" : "R190",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN332854.position"
  }, {
    "_id" : "R191",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN332854.requestedResetStrategy"
  }, {
    "_id" : "R192",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1471257.f"
  }, {
    "_id" : "R193",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.treeifyBin@POLYN1566629.b"
  }, {
    "_id" : "R194",
    "_libelle" : "org.apache.kafka.connect.runtime.ConnectMetrics.this"
  }, {
    "_id" : "R195",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN305666.sensor"
  }, {
    "_id" : "R196",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTask.this"
  }, {
    "_id" : "R197",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN248006.partition"
  }, {
    "_id" : "R198",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN248006.offset"
  }, {
    "_id" : "R199",
    "_libelle" : "org.apache.kafka.connect.file.FileStreamSourceTask.this"
  }, {
    "_id" : "R200",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelMetrics"
  }, {
    "_id" : "R201",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN246901.offsets"
  }, {
    "_id" : "R202",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN246285.offsets"
  }, {
    "_id" : "R203",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN246285.callback"
  }, {
    "_id" : "R204",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN247626.timeout"
  }, {
    "_id" : "R205",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.pause@POLYN252518.partitions"
  }, {
    "_id" : "R206",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.resume@POLYN252840.partitions"
  }, {
    "_id" : "R207",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN427146.cause"
  }, {
    "_id" : "R208",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN430224.api"
  }, {
    "_id" : "R209",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN430224.error"
  }, {
    "_id" : "R210",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN430224.shouldResetMemberId"
  }, {
    "_id" : "R211",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN196330.key"
  }, {
    "_id" : "R212",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1507811.r"
  }, {
    "_id" : "R213",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1507811.f"
  }, {
    "_id" : "R214",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1519476.r"
  }, {
    "_id" : "R215",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1519476.f"
  }, {
    "_id" : "R216",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.merge@POLYN1527124.f"
  }, {
    "_id" : "R217",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.this"
  }, {
    "_id" : "R218",
    "_libelle" : "java.io.FileOutputStream.closeLock"
  }, {
    "_id" : "R219",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN168955.b"
  }, {
    "_id" : "R220",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN238199.topics"
  }, {
    "_id" : "R221",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN240027.topics"
  }, {
    "_id" : "R222",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN240027.listener"
  }, {
    "_id" : "R223",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN238406.pattern"
  }, {
    "_id" : "R224",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN238406.listener"
  }, {
    "_id" : "R225",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN323638.pattern"
  }, {
    "_id" : "R226",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN323638.listener"
  }, {
    "_id" : "R227",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN239841.pattern"
  }, {
    "_id" : "R228",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN339854.tp"
  }, {
    "_id" : "R229",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN342989.tp"
  }, {
    "_id" : "R230",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN342989.preferredReadReplicaId"
  }, {
    "_id" : "R231",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN342989.timeMs"
  }, {
    "_id" : "R232",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN345542.partitions"
  }, {
    "_id" : "R233",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN345542.nextAllowResetTimeMs"
  }, {
    "_id" : "R234",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN349929.partitions"
  }, {
    "_id" : "R235",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN349929.nextRetryTimeMs"
  }, {
    "_id" : "R236",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeReporter@POLYN311955.reporter"
  }, {
    "_id" : "R237",
    "_libelle" : "org.apache.kafka.common.metrics.JmxReporter.LOCK"
  }, {
    "_id" : "R238",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.sourceRecord@POLYN211304.preTransformRecord"
  }, {
    "_id" : "R239",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.this"
  }, {
    "_id" : "R240",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN169766.status"
  }, {
    "_id" : "R241",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN169387.status"
  }, {
    "_id" : "R242",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN170454.status"
  }, {
    "_id" : "R243",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN169911.status"
  }, {
    "_id" : "R244",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageReaderImpl.offsetReadFutures"
  }, {
    "_id" : "R245",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.this"
  }, {
    "_id" : "R246",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.configure@POLYN182846.configs"
  }, {
    "_id" : "R247",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.topicLevelSensors"
  }, {
    "_id" : "R248",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.NamedTopologyBuilder.this"
  }, {
    "_id" : "R249",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.setNamedTopology@POLYN496386.namedTopology"
  }, {
    "_id" : "R250",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.this"
  }, {
    "_id" : "R251",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN245454.key"
  }, {
    "_id" : "R252",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN245454.value"
  }, {
    "_id" : "R253",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN245454.windowStartTimestamp"
  }, {
    "_id" : "R254",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.this"
  }, {
    "_id" : "R255",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN183483.key"
  }, {
    "_id" : "R256",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN183483.value"
  }, {
    "_id" : "R257",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN266194.key"
  }, {
    "_id" : "R258",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN266194.value"
  }, {
    "_id" : "R259",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.this"
  }, {
    "_id" : "R260",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN268705.key"
  }, {
    "_id" : "R261",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN268705.value"
  }, {
    "_id" : "R262",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN268705.windowStartTimestamp"
  }, {
    "_id" : "R263",
    "_libelle" : "java.io.PipedOutputStream.this"
  }, {
    "_id" : "R264",
    "_libelle" : "java.io.PipedOutputStream.connect@POLYN179901.snk"
  }, {
    "_id" : "R265",
    "_libelle" : "java.io.PipedInputStream.this"
  }, {
    "_id" : "R266",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN228656.b"
  }, {
    "_id" : "R267",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN229763.b"
  }, {
    "_id" : "R268",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN229763.off"
  }, {
    "_id" : "R269",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN229763.len"
  }, {
    "_id" : "R270",
    "_libelle" : "java.io.PipedWriter.this"
  }, {
    "_id" : "R271",
    "_libelle" : "java.io.PipedWriter.connect@POLYN179131.snk"
  }, {
    "_id" : "R272",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoinIfNecessary@POLYN430704.shortReason"
  }, {
    "_id" : "R273",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoinIfNecessary@POLYN430704.fullReason"
  }, {
    "_id" : "R274",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.assignPartitionsLock"
  }, {
    "_id" : "R275",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.this"
  }, {
    "_id" : "R276",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.writeEntries@POLYN163867.committedOffsets"
  }, {
    "_id" : "R277",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.this"
  }, {
    "_id" : "R278",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.addStateStore@POLYN245848.builder"
  }, {
    "_id" : "R279",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.assign@POLYN240405.partitions"
  }, {
    "_id" : "R280",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.addRecord@POLYN244925.record"
  }, {
    "_id" : "R281",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setException@POLYN245876.exception"
  }, {
    "_id" : "R282",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN246007.exception"
  }, {
    "_id" : "R283",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN247232.callback"
  }, {
    "_id" : "R284",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.this"
  }, {
    "_id" : "R285",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.addTransientTopics@POLYN160460.topics"
  }, {
    "_id" : "R286",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.this"
  }, {
    "_id" : "R287",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.this"
  }, {
    "_id" : "R288",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN178329.connector"
  }, {
    "_id" : "R289",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN178329.configs"
  }, {
    "_id" : "R290",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.this"
  }, {
    "_id" : "R291",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.setAclMutator@POLYN179069.aclMutator"
  }, {
    "_id" : "R292",
    "_libelle" : "java.io.PipedReader.this"
  }, {
    "_id" : "R293",
    "_libelle" : "java.io.Writer.lock"
  }, {
    "_id" : "R294",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.this"
  }, {
    "_id" : "R295",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.write@POLYN186005.snapshot"
  }, {
    "_id" : "R296",
    "_libelle" : "org.apache.kafka.streams.state.internals.DelegatingPeekingKeyValueIterator.this"
  }, {
    "_id" : "R297",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN191360.key"
  }, {
    "_id" : "R298",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN191360.value"
  }, {
    "_id" : "R299",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.this"
  }, {
    "_id" : "R300",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.calculateNextWindow@POLYN168874.force"
  }, {
    "_id" : "R301",
    "_libelle" : "java.io.FileInputStream.closeLock"
  }, {
    "_id" : "R302",
    "_libelle" : "java.io.PipedReader.receive@POLYN210373.c"
  }, {
    "_id" : "R303",
    "_libelle" : "java.io.PipedReader.receive@POLYN210373.off"
  }, {
    "_id" : "R304",
    "_libelle" : "java.io.PipedReader.receive@POLYN210373.len"
  }, {
    "_id" : "R305",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.close@POLYN255546.timeout"
  }, {
    "_id" : "R306",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.metrics@POLYN210422.errorHandlingMetrics"
  }, {
    "_id" : "R307",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.this"
  }, {
    "_id" : "R308",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN174653.newState"
  }, {
    "_id" : "R309",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN174653.now"
  }, {
    "_id" : "R310",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelSensors"
  }, {
    "_id" : "R311",
    "_libelle" : "org.apache.kafka.clients.Metadata.fatalError@POLYN274013.exception"
  }, {
    "_id" : "R312",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setOffsetsException@POLYN246139.exception"
  }, {
    "_id" : "R313",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seekToBeginning@POLYN250704.partitions"
  }, {
    "_id" : "R314",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seekToEnd@POLYN251128.partitions"
  }, {
    "_id" : "R315",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN256099.task"
  }, {
    "_id" : "R316",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setLastRebalanceTime@POLYN455155.timestamp"
  }, {
    "_id" : "R317",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewGeneration@POLYN455965.generation"
  }, {
    "_id" : "R318",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewState@POLYN456100.state"
  }, {
    "_id" : "R319",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN344978.partitions"
  }, {
    "_id" : "R320",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN344978.offsetResetStrategy"
  }, {
    "_id" : "R321",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN173700.requestVersion"
  }, {
    "_id" : "R322",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN173700.response"
  }, {
    "_id" : "R323",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN173700.isPartialUpdate"
  }, {
    "_id" : "R324",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN173700.nowMs"
  }, {
    "_id" : "R325",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN174313.fatalException"
  }, {
    "_id" : "R326",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.this"
  }, {
    "_id" : "R327",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.put@POLYN154980.key"
  }, {
    "_id" : "R328",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.put@POLYN154980.value"
  }, {
    "_id" : "R329",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.addReporter@POLYN311599.reporter"
  }, {
    "_id" : "R330",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.putAll@POLYN168835.entries"
  }, {
    "_id" : "R331",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.this"
  }, {
    "_id" : "R332",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.commitTransaction@POLYN161511.record"
  }, {
    "_id" : "R333",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.abortTransaction@POLYN161875.record"
  }, {
    "_id" : "R334",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN232384.callback"
  }, {
    "_id" : "R335",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN232615.connName"
  }, {
    "_id" : "R336",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN232615.callback"
  }, {
    "_id" : "R337",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN235052.connName"
  }, {
    "_id" : "R338",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN235052.config"
  }, {
    "_id" : "R339",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN235052.allowReplace"
  }, {
    "_id" : "R340",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN235052.callback"
  }, {
    "_id" : "R341",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN238219.connName"
  }, {
    "_id" : "R342",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN238219.callback"
  }, {
    "_id" : "R343",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN176703.connector"
  }, {
    "_id" : "R344",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN176703.properties"
  }, {
    "_id" : "R345",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeConnectorConfig@POLYN177324.connector"
  }, {
    "_id" : "R346",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeTaskConfigs@POLYN177677.connector"
  }, {
    "_id" : "R347",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN179218.connector"
  }, {
    "_id" : "R348",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN179218.state"
  }, {
    "_id" : "R349",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.setUpdateListener@POLYN180045.listener"
  }, {
    "_id" : "R350",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN188718.partition"
  }, {
    "_id" : "R351",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN188718.offset"
  }, {
    "_id" : "R352",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.loadSnapshot@POLYN180578.acls"
  }, {
    "_id" : "R353",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN176209.newLeader"
  }, {
    "_id" : "R354",
    "_libelle" : "java.io.BufferedInputStream.this"
  }, {
    "_id" : "R355",
    "_libelle" : "java.io.BufferedInputStream.mark@POLYN257707.readlimit"
  }, {
    "_id" : "R356",
    "_libelle" : "java.io.PipedOutputStream.sink"
  }, {
    "_id" : "R357",
    "_libelle" : "java.io.PipedReader.receive@POLYN208695.c"
  }, {
    "_id" : "R358",
    "_libelle" : "java.io.PipedWriter.sink"
  }, {
    "_id" : "R359",
    "_libelle" : "java.net.ServerSocket.setSocketFactory@POLYN336359.fac"
  }, {
    "_id" : "R360",
    "_libelle" : "java.net.Socket.setSocketImplFactory@POLYN518394.fac"
  }, {
    "_id" : "R361",
    "_libelle" : "java.util.Hashtable.forEach@POLYN454124.action"
  }, {
    "_id" : "R362",
    "_libelle" : "java.util.Hashtable.replaceAll@POLYN455034.function"
  }, {
    "_id" : "R363",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.this"
  }, {
    "_id" : "R364",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN263294.activePartitionHostMap"
  }, {
    "_id" : "R365",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN263294.standbyPartitionHostMap"
  }, {
    "_id" : "R366",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN263294.clusterMetadata"
  }, {
    "_id" : "R367",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.putAll@POLYN192446.entries"
  }, {
    "_id" : "R368",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.setListener@POLYN200630.listener"
  }, {
    "_id" : "R369",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDbIterator.this"
  }, {
    "_id" : "R370",
    "_libelle" : "org.apache.kafka.trogdor.workload.PayloadIterator.this"
  }, {
    "_id" : "R371",
    "_libelle" : "org.apache.kafka.trogdor.workload.PayloadIterator.seek@POLYN153618.position"
  }, {
    "_id" : "R372",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.this"
  }, {
    "_id" : "R373",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.delay@POLYN156907.amount"
  }, {
    "_id" : "R374",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.this"
  }, {
    "_id" : "R375",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN173026.consumerRecords"
  }, {
    "_id" : "R376",
    "_libelle" : "java.io.InputStream.mark@POLYN260742.readlimit"
  } ],
  "_lesDeadlocksSequences" : [ {
    "_id" : "0",
    "_lesItems" : [ "S0:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192053", "S0:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192053", "S0:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN206102", "S0:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN163553 (R0 in line [00067],R1 in line [00067])", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865664", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865953", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865953", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868309", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868309", "S0:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN506865", "S0:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473", "S0:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN342169 (R2 in line [00576],R6 in line [00576],R7 in line [00576])", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN331742", "S0:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517", "S0:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517.dummymethode_00114" ]
  }, {
    "_id" : "1",
    "_lesItems" : [ "S1:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192053", "S1:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192053", "S1:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN206102", "S1:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN163553 (R0 in line [00067],R1 in line [00067])", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865664", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865953", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865953", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868309", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868309", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN506865", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473", "S1:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN342359 (R2 in line [00580],R8 in line [00580],R9 in line [00580])", "S1:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN331742", "S1:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517", "S1:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517.dummymethode_00114" ]
  }, {
    "_id" : "2",
    "_lesItems" : [ "S2:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192053", "S2:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192053", "S2:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN206102", "S2:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN163553 (R0 in line [00067],R1 in line [00067])", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865664", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865953", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865953", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868309", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868309", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN506865", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473", "S2:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN342549 (R2 in line [00584],R10 in line [00584],R11 in line [00584])", "S2:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN331742", "S2:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517", "S2:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517.dummymethode_00114" ]
  }, {
    "_id" : "3",
    "_lesItems" : [ "S3:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192053", "S3:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192053", "S3:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN206102", "S3:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN163553 (R0 in line [00067],R1 in line [00067])", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865664", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865953", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865953", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868309", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868309", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN506865", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN547235", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.handleOffsetOutOfRange@POLYN547235", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN345394", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN344783 (R2 in line [00636],R12 in line [00636],R13 in line [00636])", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN331742", "S3:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517", "S3:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517.dummymethode_00114" ]
  }, {
    "_id" : "4",
    "_lesItems" : [ "S4:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192053", "S4:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192053", "S4:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN206102", "S4:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN163553 (R0 in line [00067],R1 in line [00067])", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865664", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865953", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865953", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868309", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868309", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN506865", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473", "S4:org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN350337 (R2 in line [00755],R16 in line [00755])", "S4:org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN179315", "S4:java.util.HashMap.HashIterator.remove@POLYN683544", "S4:java.util.HashMap.HashIterator.remove@POLYN683544.dummymethode_01445" ]
  }, {
    "_id" : "5",
    "_lesItems" : [ "S5:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192053", "S5:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192053", "S5:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN206102", "S5:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN163553 (R0 in line [00067],R1 in line [00067])", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865664", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865953", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865953", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868309", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868309", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN506865", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN506865", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN509158", "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN335239 (R2 in line [00443],R17 in line [00443],R18 in line [00443])", "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN331742", "S5:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517", "S5:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517.dummymethode_00114" ]
  }, {
    "_id" : "6",
    "_lesItems" : [ "S6:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524287", "S6:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524287", "S6:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN522446", "S6:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN522446", "S6:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383256", "S6:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383256", "S6:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN383618", "S6:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN383618", "S6:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN858966", "S6:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN858966", "S6:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN419054", "S6:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN419054", "S6:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN327787 (R2 in line [00273],R22 in line [00273])", "S6:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN327787.dummymethode_00277" ]
  }, {
    "_id" : "7",
    "_lesItems" : [ "S7:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN241000 (R128 in line [00163])", "S7:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN241234 (R128 in line [00168],R129 in line [00175])", "S7:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN241234 (R128 in line [00168],R129 in line [00175])", "S7:org.apache.kafka.clients.consumer.MockConsumer.updateFetchPosition@POLYN256779", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.seek@POLYN332453", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN332263 (R2 in line [00378],R130 in line [00378],R131 in line [00378])", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN331742", "S7:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517", "S7:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517.dummymethode_00114" ]
  }, {
    "_id" : "8",
    "_lesItems" : [ "S8:org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN912122", "S8:org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN912122", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN341425 (R2 in line [00561],R132 in line [00561])", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN331742", "S8:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517", "S8:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517.dummymethode_00114" ]
  }, {
    "_id" : "9",
    "_lesItems" : [ "S9:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN902965", "S9:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN902965", "S9:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN349632 (R2 in line [00737],R139 in line [00737])", "S9:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN331742", "S9:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517", "S9:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517.dummymethode_00114" ]
  }, {
    "_id" : "10",
    "_lesItems" : [ "S10:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN903723", "S10:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN903723", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN349783 (R2 in line [00741],R140 in line [00741])", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN331742", "S10:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517", "S10:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517.dummymethode_00114" ]
  }, {
    "_id" : "11",
    "_lesItems" : [ "S11:org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetIfNeeded@POLYN512127", "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN332854 (R2 in line [00390],R189 in line [00390],R190 in line [00390],R191 in line [00390])", "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN332109", "S11:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517", "S11:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517.dummymethode_00114" ]
  }, {
    "_id" : "12",
    "_lesItems" : [ "S12:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN238406 (R128 in line [00113],R223 in line [00113],R224 in line [00113])", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN323638 (R2 in line [00172],R225 in line [00172],R226 in line [00172])", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN328692", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN328692.dummymethode_00292" ]
  }, {
    "_id" : "13",
    "_lesItems" : [ "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeValidatePositionForCurrentLeader@POLYN335711 (R2 in line [00456])", "S13:org.apache.kafka.clients.ApiVersions.get@POLYN158726 (R64 in line [00048])", "S13:java.util.Map.get@POLYN437091" ]
  }, {
    "_id" : "14",
    "_lesItems" : [ "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN339854 (R2 in line [00529],R228 in line [00529])", "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN331742", "S14:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517", "S14:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517.dummymethode_00114" ]
  }, {
    "_id" : "15",
    "_lesItems" : [ "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN342989 (R2 in line [00596],R229 in line [00596],R230 in line [00596],R231 in line [00596])", "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN331742", "S15:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517", "S15:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517.dummymethode_00114" ]
  }, {
    "_id" : "16",
    "_lesItems" : [ "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN345542 (R2 in line [00651],R232 in line [00651],R233 in line [00651])", "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN331742", "S16:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517", "S16:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517.dummymethode_00114" ]
  }, {
    "_id" : "17",
    "_lesItems" : [ "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN349929 (R2 in line [00745],R234 in line [00745],R235 in line [00745])", "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN332109", "S17:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517", "S17:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517.dummymethode_00114" ]
  }, {
    "_id" : "18",
    "_lesItems" : [ "S18:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN344978 (R2 in line [00640],R319 in line [00640],R320 in line [00640])", "S18:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN344978.dummymethode_00641" ]
  }, {
    "_id" : "19",
    "_lesItems" : [ "S19:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN556629", "S19:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN564402", "S19:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN564402", "S19:org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN272043 (R5 in line [00450],R62 in line [00450])", "S19:org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN272043.dummymethode_00451" ]
  }, {
    "_id" : "20",
    "_lesItems" : [ "S20:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN523153", "S20:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN523153", "S20:org.apache.kafka.clients.Metadata.bootstrap@POLYN261085 (R5 in line [00238],R72 in line [00238])", "S20:org.apache.kafka.clients.Metadata.bootstrap@POLYN261085.dummymethode_00239" ]
  }, {
    "_id" : "21",
    "_lesItems" : [ "S21:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN261477 (R5 in line [00249],R85 in line [00249],R86 in line [00249],R87 in line [00249])", "S21:org.apache.kafka.clients.Metadata.update@POLYN262051 (R5 in line [00263],R88 in line [00263],R89 in line [00263],R90 in line [00263],R91 in line [00263])", "S21:org.apache.kafka.clients.Metadata.update@POLYN262051.dummymethode_00264" ]
  }, {
    "_id" : "22",
    "_lesItems" : [ "S22:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleServerDisconnect@POLYN376927", "S22:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleServerDisconnect@POLYN376927", "S22:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleFailedRequest@POLYN377876", "S22:org.apache.kafka.clients.Metadata.failedUpdate@POLYN273753 (R5 in line [00490],R156 in line [00490])", "S22:org.apache.kafka.clients.Metadata.failedUpdate@POLYN273753.dummymethode_00491" ]
  }, {
    "_id" : "23",
    "_lesItems" : [ "S23:org.apache.kafka.clients.Metadata.fatalError@POLYN274013 (R5 in line [00500],R311 in line [00500])", "S23:org.apache.kafka.clients.Metadata.fatalError@POLYN274013.dummymethode_00501" ]
  }, {
    "_id" : "24",
    "_lesItems" : [ "S24:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192053", "S24:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192053", "S24:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN206102", "S24:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN163553 (R0 in line [00067],R1 in line [00067])", "S24:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865664", "S24:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865953", "S24:org.apache.kafka.clients.consumer.KafkaConsumer.acquireAndEnsureOpen@POLYN921194", "S24:org.apache.kafka.clients.consumer.KafkaConsumer.acquire@POLYN921649" ]
  }, {
    "_id" : "25",
    "_lesItems" : [ "S25:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192053", "S25:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192053", "S25:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN206102", "S25:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN163553 (R0 in line [00067],R1 in line [00067])", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865664", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865953", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865953", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.updateAssignmentMetadataIfNeeded@POLYN867852", "S25:org.apache.kafka.clients.consumer.KafkaConsumer.updateFetchPositions@POLYN920532", "S25:org.apache.kafka.clients.consumer.internals.SubscriptionState.hasAllFetchPositions@POLYN346282 (R2 in line [00669])", "S25:org.apache.kafka.common.internals.PartitionStates.stateIterator@POLYN180839" ]
  }, {
    "_id" : "26",
    "_lesItems" : [ "S26:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192053", "S26:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192053", "S26:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN206102", "S26:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN163553 (R0 in line [00067],R1 in line [00067])", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865664", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865953", "S26:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865953", "S26:org.apache.kafka.clients.consumer.internals.KafkaConsumerMetrics.recordPollEnd@POLYN167446", "S26:org.apache.kafka.common.metrics.Sensor.record@POLYN222201", "S26:org.apache.kafka.common.metrics.Sensor.recordInternal@POLYN222485 (R3 in line [00232])", "S26:org.apache.kafka.common.metrics.Sensor.recordInternal@POLYN222485.dummymethode_00231" ]
  }, {
    "_id" : "27",
    "_lesItems" : [ "S27:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192053", "S27:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192053", "S27:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN206102", "S27:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN163553 (R0 in line [00067],R1 in line [00067])", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865664", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865953", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865953", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868309", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868309", "S27:org.apache.kafka.clients.consumer.internals.Fetcher.sendFetches@POLYN487691 (R4 in line [00248])", "S27:org.apache.kafka.clients.consumer.internals.Fetcher.FetchManagerMetrics.maybeUpdateAssignment@POLYN571728", "S27:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignmentId@POLYN322687 (R2 in line [00149])", "S27:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignmentId@POLYN322687.dummymethode_00150" ]
  }, {
    "_id" : "28",
    "_lesItems" : [ "S28:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192053", "S28:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192053", "S28:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN206102", "S28:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN163553 (R0 in line [00067],R1 in line [00067])", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865664", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865953", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865953", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868309", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN868309", "S28:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN506865", "S28:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473", "S28:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN539473", "S28:org.apache.kafka.clients.Metadata.requestUpdate@POLYN256553 (R5 in line [00145])", "S28:org.apache.kafka.clients.Metadata.requestUpdate@POLYN256553.dummymethode_00146" ]
  }, {
    "_id" : "29",
    "_lesItems" : [ "S29:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192053", "S29:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN192053", "S29:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN206102", "S29:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN163553 (R0 in line [00067],R1 in line [00067])", "S29:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN163553 (R0 in line [00067],R1 in line [00067])", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865664", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN865953", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.acquireAndEnsureOpen@POLYN921194", "S29:org.apache.kafka.clients.consumer.KafkaConsumer.acquire@POLYN921649" ]
  }, {
    "_id" : "30",
    "_lesItems" : [ "S30:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524287", "S30:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524287", "S30:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN522446", "S30:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN522446", "S30:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN546387 (R25 in line [01039],R26 in line [01051])", "S30:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN556012 (R27 in line [01215])", "S30:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN556012.dummymethode_01214" ]
  }, {
    "_id" : "31",
    "_lesItems" : [ "S31:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524287", "S31:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524287", "S31:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN522446", "S31:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN522446", "S31:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN546387 (R25 in line [01039],R26 in line [01051])", "S31:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN546387 (R25 in line [01039],R26 in line [01051])", "S31:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN556012 (R27 in line [01215])", "S31:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN556012.dummymethode_01214" ]
  }, {
    "_id" : "32",
    "_lesItems" : [ "S32:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524287", "S32:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524287", "S32:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN522446", "S32:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN522446", "S32:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN546387 (R25 in line [01039],R26 in line [01051])", "S32:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN546387 (R25 in line [01039],R26 in line [01051])", "S32:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383256", "S32:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383256", "S32:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN343277 (R21 in line [00215])", "S32:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN343277.dummymethode_00216" ]
  }, {
    "_id" : "33",
    "_lesItems" : [ "S33:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524287", "S33:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524287", "S33:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN522446", "S33:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN522446", "S33:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN546387 (R25 in line [01039],R26 in line [01051])", "S33:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN546387 (R25 in line [01039],R26 in line [01051])", "S33:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383256", "S33:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383256", "S33:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN383618", "S33:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN383618", "S33:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN858966", "S33:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN858966", "S33:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN419054", "S33:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.generation@POLYN428557 (R28 in line [00981])", "S33:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.generation@POLYN428557.dummymethode_00982" ]
  }, {
    "_id" : "34",
    "_lesItems" : [ "S34:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524287", "S34:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524287", "S34:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN522446", "S34:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN522446", "S34:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN546387 (R25 in line [01039],R26 in line [01051])", "S34:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN546387 (R25 in line [01039],R26 in line [01051])", "S34:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383256", "S34:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383256", "S34:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN383618", "S34:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN383618", "S34:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN858966", "S34:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN858966", "S34:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN419054", "S34:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN419054", "S34:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN398403", "S34:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN330450 (R2 in line [00334])", "S34:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN330450.dummymethode_00335" ]
  }, {
    "_id" : "35",
    "_lesItems" : [ "S35:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524287", "S35:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524287", "S35:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN522446", "S35:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN522446", "S35:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN546387 (R25 in line [01039],R26 in line [01051])", "S35:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN546387 (R25 in line [01039],R26 in line [01051])", "S35:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383256", "S35:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383256", "S35:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN383618", "S35:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN383618", "S35:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelSensors@POLYN298117 (R23 in line [00301])", "S35:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN296596", "S35:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN296596.dummymethode_00263" ]
  }, {
    "_id" : "36",
    "_lesItems" : [ "S36:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524287", "S36:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN524287", "S36:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN522446", "S36:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN522446", "S36:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN546387 (R25 in line [01039],R26 in line [01051])", "S36:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN546387 (R25 in line [01039],R26 in line [01051])", "S36:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383256", "S36:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383256", "S36:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN383618", "S36:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN383618", "S36:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelMetrics@POLYN298669 (R24 in line [00310])", "S36:java.util.Hashtable.remove@POLYN485494" ]
  }, {
    "_id" : "37",
    "_lesItems" : [ "S37:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN382814", "S37:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN382814", "S37:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToClients@POLYN395999", "S37:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.populateClientStatesMap@POLYN399872", "S37:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.fetchCommittedOffsets@POLYN423625", "S37:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetFetchRequest@POLYN444708", "S37:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN426492 (R28 in line [00926])", "S37:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN427301 (R28 in line [00947],R38 in line [00947],R39 in line [00947])", "S37:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN427301.dummymethode_00949" ]
  }, {
    "_id" : "38",
    "_lesItems" : [ "S38:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN402032 (R28 in line [00383])", "S38:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN431872", "S38:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN432064 (R28 in line [01078])", "S38:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN433060 (R28 in line [01103])", "S38:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN433060 (R28 in line [01103])", "S38:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.pollNoWakeup@POLYN266092", "S38:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.poll@POLYN264223", "S38:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.UnsentRequests.clean@POLYN281652 (R40 in line [00696])" ]
  }, {
    "_id" : "39",
    "_lesItems" : [ "S39:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN402032 (R28 in line [00383])", "S39:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN431872", "S39:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN432064 (R28 in line [01078])", "S39:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN433060 (R28 in line [01103])", "S39:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN433060 (R28 in line [01103])", "S39:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.pollNoWakeup@POLYN266092", "S39:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.poll@POLYN264223", "S39:org.apache.kafka.clients.Metadata.maybeThrowAnyException@POLYN271299 (R5 in line [00428])", "S39:org.apache.kafka.clients.Metadata.clearErrorsAndMaybeThrowException@POLYN272229", "S39:org.apache.kafka.clients.Metadata.clearErrorsAndMaybeThrowException@POLYN272229.dummymethode_00456" ]
  }, {
    "_id" : "40",
    "_lesItems" : [ "S40:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.close@POLYN425676", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN397018 (R28 in line [00240])", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN397018 (R28 in line [00240])", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN426947 (R28 in line [00939],R93 in line [00939])", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN426947.dummymethode_00940" ]
  }, {
    "_id" : "41",
    "_lesItems" : [ "S41:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN239441", "S41:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN239441", "S41:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN400159 (R28 in line [00322],R120 in line [00322])", "S41:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.failureCause@POLYN448582" ]
  }, {
    "_id" : "42",
    "_lesItems" : [ "S42:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatResponseHandler.handle@POLYN436576", "S42:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatResponseHandler.handle@POLYN436576", "S42:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN430959 (R28 in line [01039],R135 in line [01039])", "S42:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN431267 (R28 in line [01050],R136 in line [01050],R137 in line [01050])", "S42:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN431267 (R28 in line [01050],R136 in line [01050],R137 in line [01050])", "S42:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN431267.dummymethode_01053" ]
  }, {
    "_id" : "43",
    "_lesItems" : [ "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureActiveGroup@POLYN401480", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN403106", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN429926 (R28 in line [01017],R185 in line [01017],R186 in line [01017])", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN429227 (R28 in line [01004],R187 in line [01004],R188 in line [01004])", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN429227.dummymethode_01005" ]
  }, {
    "_id" : "44",
    "_lesItems" : [ "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN427146 (R28 in line [00943],R207 in line [00943])", "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN427301 (R28 in line [00947],R38 in line [00947],R39 in line [00947])", "S44:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN427301.dummymethode_00949" ]
  }, {
    "_id" : "45",
    "_lesItems" : [ "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN430224 (R28 in line [01023],R208 in line [01023],R209 in line [01023],R210 in line [01023])", "S45:java.lang.String.format@POLYN915731", "S45:java.lang.String.format@POLYN915731.dummymethode_00001" ]
  }, {
    "_id" : "46",
    "_lesItems" : [ "S46:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.rejoinNeededOrPending@POLYN420396", "S46:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoinIfNecessary@POLYN430704 (R28 in line [01032],R272 in line [01032],R273 in line [01032])", "S46:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN431267 (R28 in line [01050],R136 in line [01050],R137 in line [01050])", "S46:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN431267 (R28 in line [01050],R136 in line [01050],R137 in line [01050])", "S46:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN431267.dummymethode_01053" ]
  }, {
    "_id" : "47",
    "_lesItems" : [ "S47:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setLastRebalanceTime@POLYN455155 (R28 in line [01592],R316 in line [01592])", "S47:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setLastRebalanceTime@POLYN455155.dummymethode_01593" ]
  }, {
    "_id" : "48",
    "_lesItems" : [ "S48:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewGeneration@POLYN455965 (R28 in line [01617],R317 in line [01617])", "S48:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewGeneration@POLYN455965.dummymethode_01618" ]
  }, {
    "_id" : "49",
    "_lesItems" : [ "S49:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewState@POLYN456100 (R28 in line [01621],R318 in line [01621])", "S49:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewState@POLYN456100.dummymethode_01622" ]
  }, {
    "_id" : "50",
    "_lesItems" : [ "S50:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN548605", "S50:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN549685 (R25 in line [01113])", "S50:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383256", "S50:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383256", "S50:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN343277 (R21 in line [00215])", "S50:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN343277.dummymethode_00216" ]
  }, {
    "_id" : "51",
    "_lesItems" : [ "S51:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN548605", "S51:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN549685 (R25 in line [01113])", "S51:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383256", "S51:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383256", "S51:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN383618", "S51:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN383618", "S51:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN858966", "S51:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN858966", "S51:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN419054", "S51:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.generation@POLYN428557 (R28 in line [00981])", "S51:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.generation@POLYN428557.dummymethode_00982" ]
  }, {
    "_id" : "52",
    "_lesItems" : [ "S52:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN548605", "S52:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN549685 (R25 in line [01113])", "S52:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383256", "S52:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383256", "S52:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN383618", "S52:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN383618", "S52:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN858966", "S52:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN858966", "S52:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN419054", "S52:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN419054", "S52:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN398403", "S52:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN330450 (R2 in line [00334])", "S52:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN330450.dummymethode_00335" ]
  }, {
    "_id" : "53",
    "_lesItems" : [ "S53:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN548605", "S53:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN549685 (R25 in line [01113])", "S53:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383256", "S53:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383256", "S53:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN383618", "S53:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN383618", "S53:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelSensors@POLYN298117 (R23 in line [00301])", "S53:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN296596", "S53:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN296596.dummymethode_00263" ]
  }, {
    "_id" : "54",
    "_lesItems" : [ "S54:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN548605", "S54:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN549685 (R25 in line [01113])", "S54:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383256", "S54:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN383256", "S54:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN383618", "S54:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN383618", "S54:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelMetrics@POLYN298669 (R24 in line [00310])", "S54:java.util.Hashtable.remove@POLYN485494" ]
  }, {
    "_id" : "55",
    "_lesItems" : [ "S55:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN534632", "S55:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN534632", "S55:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN550916 (R29 in line [00744])", "S55:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN550916 (R29 in line [00744])", "S55:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN196412", "S55:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN198343", "S55:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN198343", "S55:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171479 (R31 in line [00072],R32 in line [00072],R33 in line [00072],R34 in line [00072])", "S55:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171479.dummymethode_00075" ]
  }, {
    "_id" : "56",
    "_lesItems" : [ "S56:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN523153", "S56:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN523153", "S56:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170695 (R31 in line [00060],R73 in line [00060],R74 in line [00060],R75 in line [00060],R76 in line [00060])", "S56:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170695.dummymethode_00062" ]
  }, {
    "_id" : "57",
    "_lesItems" : [ "S57:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN534632", "S57:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN534632", "S57:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN550916 (R29 in line [00744])", "S57:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN550916 (R29 in line [00744])", "S57:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN196412", "S57:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN198343", "S57:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN198343", "S57:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171479 (R31 in line [00072],R32 in line [00072],R33 in line [00072],R34 in line [00072])", "S57:org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN173418", "S57:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN310815 (R15 in line [00558])", "S57:java.util.Map.remove@POLYN457025" ]
  }, {
    "_id" : "58",
    "_lesItems" : [ "S58:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN534632", "S58:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN534632", "S58:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN550916 (R29 in line [00744])", "S58:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN550916 (R29 in line [00744])", "S58:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN196412", "S58:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN198343", "S58:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN198343", "S58:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171479 (R31 in line [00072],R32 in line [00072],R33 in line [00072],R34 in line [00072])", "S58:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171479 (R31 in line [00072],R32 in line [00072],R33 in line [00072],R34 in line [00072])", "S58:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN171479.dummymethode_00075" ]
  }, {
    "_id" : "59",
    "_lesItems" : [ "S59:org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.close@POLYN212141 (R35 in line [00335])", "S59:org.apache.kafka.connect.runtime.errors.ProcessingContext.close@POLYN192649", "S59:java.lang.Throwable.addSuppressed@POLYN397829 (R108 in line [01070],R109 in line [01070])", "S59:java.lang.Throwable.addSuppressed@POLYN397829.dummymethode_01074" ]
  }, {
    "_id" : "60",
    "_lesItems" : [ "S60:java.lang.Throwable.writeObject@POLYN395774 (R108 in line [01002],R181 in line [01002])", "S60:java.lang.Throwable.getOurStackTrace@POLYN389793 (R108 in line [00834])", "S60:java.lang.Throwable.getOurStackTrace@POLYN389793.dummymethode_00839" ]
  }, {
    "_id" : "61",
    "_lesItems" : [ "S61:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN382814", "S61:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN382814", "S61:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToClients@POLYN395999", "S61:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.populateClientStatesMap@POLYN399872", "S61:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.fetchCommittedOffsets@POLYN423625", "S61:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetFetchRequest@POLYN444708", "S61:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN426492 (R28 in line [00926])", "S61:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN427301 (R28 in line [00947],R38 in line [00947],R39 in line [00947])", "S61:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN427301 (R28 in line [00947],R38 in line [00947],R39 in line [00947])", "S61:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN427301.dummymethode_00949" ]
  }, {
    "_id" : "62",
    "_lesItems" : [ "S62:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN475515", "S62:org.apache.kafka.clients.producer.internals.Sender.run@POLYN314776", "S62:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN316983", "S62:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN399041 (R41 in line [00718])", "S62:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN384053 (R41 in line [00386],R42 in line [00386])", "S62:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN384053.dummymethode_00388" ]
  }, {
    "_id" : "63",
    "_lesItems" : [ "S63:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN475515", "S63:org.apache.kafka.clients.producer.internals.Sender.run@POLYN314776", "S63:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN316983", "S63:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN399041 (R41 in line [00718])", "S63:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN384539 (R41 in line [00397],R43 in line [00397])", "S63:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN384539.dummymethode_00398" ]
  }, {
    "_id" : "64",
    "_lesItems" : [ "S64:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN475515", "S64:org.apache.kafka.clients.producer.internals.Sender.run@POLYN314776", "S64:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN316983", "S64:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN399041 (R41 in line [00718])", "S64:org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN387286 (R41 in line [00468],R44 in line [00468])", "S64:org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN387286.dummymethode_00469" ]
  }, {
    "_id" : "65",
    "_lesItems" : [ "S65:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN475515", "S65:org.apache.kafka.clients.producer.internals.Sender.run@POLYN314776", "S65:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN316983", "S65:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN316983", "S65:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN403049 (R41 in line [00810],R45 in line [00810])", "S65:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN403049.dummymethode_00812" ]
  }, {
    "_id" : "66",
    "_lesItems" : [ "S66:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN475515", "S66:org.apache.kafka.clients.producer.internals.Sender.run@POLYN314776", "S66:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN316983", "S66:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN316983", "S66:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318179", "S66:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN363028", "S66:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN358499 (R49 in line [00799])", "S66:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN385549 (R41 in line [00426],R50 in line [00426])", "S66:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN161315", "S66:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN151564", "S66:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN151564.dummymethode_00026" ]
  }, {
    "_id" : "67",
    "_lesItems" : [ "S67:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN475515", "S67:org.apache.kafka.clients.producer.internals.Sender.run@POLYN314776", "S67:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN316983", "S67:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN316983", "S67:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318179", "S67:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN363028", "S67:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN358499 (R49 in line [00799])", "S67:org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN389661 (R41 in line [00521],R51 in line [00521],R52 in line [00521])", "S67:org.apache.kafka.clients.producer.internals.TransactionManager.sequenceNumber@POLYN389295 (R41 in line [00510])", "S67:org.apache.kafka.clients.producer.internals.TxnPartitionMap.getOrCreate@POLYN159976", "S67:org.apache.kafka.clients.producer.internals.TxnPartitionMap.getOrCreate@POLYN159976.dummymethode_00043" ]
  }, {
    "_id" : "68",
    "_lesItems" : [ "S68:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN475515", "S68:org.apache.kafka.clients.producer.internals.Sender.run@POLYN314776", "S68:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN316983", "S68:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN316983", "S68:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318179", "S68:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN338921", "S68:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN394666 (R41 in line [00624],R54 in line [00624],R55 in line [00624],R56 in line [00624])", "S68:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN394071 (R41 in line [00610],R57 in line [00610])", "S68:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN384539 (R41 in line [00397],R43 in line [00397])", "S68:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN384539.dummymethode_00398" ]
  }, {
    "_id" : "69",
    "_lesItems" : [ "S69:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN475515", "S69:org.apache.kafka.clients.producer.internals.Sender.run@POLYN314776", "S69:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN316983", "S69:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN316983", "S69:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318179", "S69:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN338921", "S69:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN394666 (R41 in line [00624],R54 in line [00624],R55 in line [00624],R56 in line [00624])", "S69:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN391484 (R41 in line [00557],R58 in line [00557])", "S69:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN159582", "S69:java.util.Map.get@POLYN437091" ]
  }, {
    "_id" : "70",
    "_lesItems" : [ "S70:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN475515", "S70:org.apache.kafka.clients.producer.internals.Sender.run@POLYN314776", "S70:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN316983", "S70:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN316983", "S70:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318179", "S70:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN398433 (R41 in line [00708],R59 in line [00708])", "S70:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN398433.dummymethode_00710" ]
  }, {
    "_id" : "71",
    "_lesItems" : [ "S71:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN556629", "S71:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN556629", "S71:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN381730 (R41 in line [00327],R66 in line [00327])", "S71:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN409776" ]
  }, {
    "_id" : "72",
    "_lesItems" : [ "S72:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN322659", "S72:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN322659", "S72:org.apache.kafka.clients.producer.internals.Sender.maybeFindCoordinatorAndRetry@POLYN326360", "S72:org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN402871 (R41 in line [00805],R96 in line [00805])", "S72:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.setRetry@POLYN419191", "S72:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.setRetry@POLYN419191.dummymethode_01228" ]
  }, {
    "_id" : "73",
    "_lesItems" : [ "S73:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN328183", "S73:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN328183", "S73:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN335615", "S73:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN393517 (R41 in line [00599],R133 in line [00599],R134 in line [00599])", "S73:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateLastAckedSequence@POLYN391776", "S73:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateLastAckedSequence@POLYN391776.dummymethode_00566" ]
  }, {
    "_id" : "74",
    "_lesItems" : [ "S74:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN331757", "S74:org.apache.kafka.clients.producer.internals.RecordAccumulator.splitAndReenqueue@POLYN345531 (R168 in line [00482])", "S74:org.apache.kafka.clients.producer.internals.TransactionManager.addInFlightBatch@POLYN390057 (R41 in line [00528],R170 in line [00528])", "S74:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN159582", "S74:java.util.Map.get@POLYN437091" ]
  }, {
    "_id" : "75",
    "_lesItems" : [ "S75:org.apache.kafka.clients.producer.internals.TransactionManager.isPartitionAdded@POLYN384973 (R41 in line [00407])", "S75:java.util.Hashtable.contains@POLYN427220 (R157 in line [00307])", "S75:java.util.Hashtable.contains@POLYN427220.dummymethode_00312" ]
  }, {
    "_id" : "76",
    "_lesItems" : [ "S76:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN412306", "S76:java.util.Hashtable.putAll@POLYN438584 (R157 in line [00536],R158 in line [00536])", "S76:java.util.Hashtable.put@POLYN435116 (R157 in line [00471])", "S76:java.util.Hashtable.put@POLYN435116.dummymethode_00478" ]
  }, {
    "_id" : "77",
    "_lesItems" : [ "S77:java.util.Hashtable.forEach@POLYN454124 (R157 in line [00888],R361 in line [00888])", "S77:java.util.Hashtable.forEach@POLYN454124.dummymethode_00889" ]
  }, {
    "_id" : "78",
    "_lesItems" : [ "S78:java.util.Hashtable.replaceAll@POLYN455034 (R157 in line [00908],R362 in line [00908])", "S78:java.util.Hashtable.replaceAll@POLYN455034.dummymethode_00909" ]
  }, {
    "_id" : "79",
    "_lesItems" : [ "S79:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN475515", "S79:org.apache.kafka.clients.producer.internals.Sender.run@POLYN314776", "S79:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN316983", "S79:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN399041 (R41 in line [00718])", "S79:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN384053 (R41 in line [00386],R42 in line [00386])", "S79:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN384053 (R41 in line [00386],R42 in line [00386])", "S79:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN384053.dummymethode_00388" ]
  }, {
    "_id" : "80",
    "_lesItems" : [ "S80:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN475515", "S80:org.apache.kafka.clients.producer.internals.Sender.run@POLYN314776", "S80:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN316983", "S80:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN316983", "S80:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318179", "S80:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN363028", "S80:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN358499 (R49 in line [00799])", "S80:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN385549 (R41 in line [00426],R50 in line [00426])", "S80:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN385549 (R41 in line [00426],R50 in line [00426])", "S80:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN161315", "S80:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN151564", "S80:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN151564.dummymethode_00026" ]
  }, {
    "_id" : "81",
    "_lesItems" : [ "S81:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN475515", "S81:org.apache.kafka.clients.producer.internals.Sender.run@POLYN314776", "S81:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN316983", "S81:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN316983", "S81:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN318179", "S81:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN398433 (R41 in line [00708],R59 in line [00708])", "S81:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN398433 (R41 in line [00708],R59 in line [00708])", "S81:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN398433.dummymethode_00710" ]
  }, {
    "_id" : "82",
    "_lesItems" : [ "S82:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN556629", "S82:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN556629", "S82:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN381730 (R41 in line [00327],R66 in line [00327])", "S82:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN381730 (R41 in line [00327],R66 in line [00327])", "S82:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN409776" ]
  }, {
    "_id" : "83",
    "_lesItems" : [ "S83:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN523153", "S83:org.apache.kafka.clients.producer.KafkaProducer.KafkaProducer@POLYN523153", "S83:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170695 (R31 in line [00060],R73 in line [00060],R74 in line [00060],R75 in line [00060],R76 in line [00060])", "S83:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170695 (R31 in line [00060],R73 in line [00060],R74 in line [00060],R75 in line [00060],R76 in line [00060])", "S83:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN170695.dummymethode_00062" ]
  }, {
    "_id" : "84",
    "_lesItems" : [ "S84:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN300781", "S84:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN300781", "S84:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readConnectorStatus@POLYN296144 (R77 in line [00563])", "S84:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readConnectorStatus@POLYN296144 (R77 in line [00563])", "S84:org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN283346 (R77 in line [00353],R78 in line [00353])", "S84:java.util.Hashtable.remove@POLYN485494" ]
  }, {
    "_id" : "85",
    "_lesItems" : [ "S85:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN300781", "S85:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN300781", "S85:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readTaskStatus@POLYN297280 (R77 in line [00589])", "S85:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readTaskStatus@POLYN297280 (R77 in line [00589])", "S85:org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN284660 (R77 in line [00374],R79 in line [00374])", "S85:org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN284660 (R77 in line [00374],R79 in line [00374])", "S85:java.io.File.delete@POLYN605352", "S85:java.io.File.delete@POLYN605352.dummymethode_00001" ]
  }, {
    "_id" : "86",
    "_lesItems" : [ "S86:org.apache.kafka.snapshot.RecordsSnapshotWriter.freeze@POLYN178115", "S86:org.apache.kafka.snapshot.RecordsSnapshotWriter.appendBatches@POLYN178546", "S86:org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN177415", "S86:org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN225591", "S86:org.apache.kafka.raft.internals.BatchAccumulator.maybeAllocateBatch@POLYN227674", "S86:org.apache.kafka.raft.internals.BatchBuilder.bytesNeeded@POLYN200509", "S86:org.apache.kafka.common.protocol.DataOutputStreamWritable.flush@POLYN167081", "S86:java.io.BufferedOutputStream.flush@POLYN170851 (R110 in line [00139])", "S86:java.io.BufferedOutputStream.flushBuffer@POLYN168520", "S86:java.io.BufferedOutputStream.write@POLYN169816 (R110 in line [00116],R111 in line [00116],R112 in line [00116],R113 in line [00116])", "S86:java.io.BufferedOutputStream.write@POLYN169816 (R110 in line [00116],R111 in line [00116],R112 in line [00116],R113 in line [00116])", "S86:java.io.BufferedOutputStream.write@POLYN169816.dummymethode_00123" ]
  }, {
    "_id" : "87",
    "_lesItems" : [ "S87:org.apache.kafka.streams.state.internals.RocksDBStore.putAll@POLYN267178", "S87:java.io.BufferedOutputStream.write@POLYN168955 (R110 in line [00093],R219 in line [00093])", "S87:java.io.BufferedOutputStream.flushBuffer@POLYN168520", "S87:java.io.BufferedOutputStream.write@POLYN169816 (R110 in line [00116],R111 in line [00116],R112 in line [00116],R113 in line [00116])", "S87:java.io.BufferedOutputStream.write@POLYN169816 (R110 in line [00116],R111 in line [00116],R112 in line [00116],R113 in line [00116])", "S87:java.io.BufferedOutputStream.write@POLYN169816.dummymethode_00123" ]
  }, {
    "_id" : "88",
    "_lesItems" : [ "S88:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN268254 (R82 in line [00001],R114 in line [00001])", "S88:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN268549", "S88:org.apache.kafka.common.utils.Utils.delete@POLYN454069", "S88:org.apache.kafka.common.utils.Utils.delete@POLYN454069.dummymethode_00852" ]
  }, {
    "_id" : "89",
    "_lesItems" : [ "S89:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN268254 (R82 in line [00001],R114 in line [00001])", "S89:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN268549", "S89:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN268549", "S89:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN265247 (R82 in line [00001],R115 in line [00001])", "S89:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN265247.dummymethode_00001" ]
  }, {
    "_id" : "90",
    "_lesItems" : [ "S90:org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN264040 (R82 in line [00001])", "S90:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN259086 (R155 in line [00001])", "S90:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN259086.dummymethode_00001" ]
  }, {
    "_id" : "91",
    "_lesItems" : [ "S91:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN231467 (R83 in line [00105])", "S91:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN231467 (R83 in line [00105])", "S91:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN248123", "S91:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN472732", "S91:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN470511", "S91:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN469381", "S91:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN469381", "S91:org.apache.kafka.connect.runtime.Worker.stop@POLYN429855", "S91:org.apache.kafka.connect.runtime.Worker.stop@POLYN429855", "S91:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN504058 (R84 in line [01751])" ]
  }, {
    "_id" : "92",
    "_lesItems" : [ "S92:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN231467 (R83 in line [00105])", "S92:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN231467 (R83 in line [00105])", "S92:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN443150", "S92:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN439870", "S92:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN439870", "S92:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN227876 (R30 in line [00256])", "S92:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN227876 (R30 in line [00256])", "S92:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN227876.dummymethode_00258" ]
  }, {
    "_id" : "93",
    "_lesItems" : [ "S93:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN237845 (R83 in line [00242],R99 in line [00242])", "S93:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN237845 (R83 in line [00242],R99 in line [00242])", "S93:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN237845.dummymethode_00245" ]
  }, {
    "_id" : "94",
    "_lesItems" : [ "S94:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN233984 (R83 in line [00161],R100 in line [00161],R101 in line [00161])", "S94:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN233984.dummymethode_00165" ]
  }, {
    "_id" : "95",
    "_lesItems" : [ "S95:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN242304 (R83 in line [00309],R104 in line [00309],R105 in line [00309])", "S95:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN171106", "S95:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN171106.dummymethode_00055" ]
  }, {
    "_id" : "96",
    "_lesItems" : [ "S96:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN239682 (R83 in line [00274],R106 in line [00274],R107 in line [00274])", "S96:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN239682.dummymethode_00276" ]
  }, {
    "_id" : "97",
    "_lesItems" : [ "S97:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN235965 (R83 in line [00201],R146 in line [00201],R147 in line [00201],R148 in line [00201],R149 in line [00201],R150 in line [00201])", "S97:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN235965.dummymethode_00208" ]
  }, {
    "_id" : "98",
    "_lesItems" : [ "S98:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN241099 (R83 in line [00291],R151 in line [00291],R152 in line [00291])", "S98:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN241099.dummymethode_00293" ]
  }, {
    "_id" : "99",
    "_lesItems" : [ "S99:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN232384 (R83 in line [00133],R334 in line [00133])", "S99:org.apache.kafka.connect.util.Callback.onCompletion" ]
  }, {
    "_id" : "100",
    "_lesItems" : [ "S100:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN232615 (R83 in line [00138],R335 in line [00138],R336 in line [00138])", "S100:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN232615.dummymethode_00141" ]
  }, {
    "_id" : "101",
    "_lesItems" : [ "S101:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN235052 (R83 in line [00181],R337 in line [00181],R338 in line [00181],R339 in line [00181],R340 in line [00181])", "S101:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN235052.dummymethode_00186" ]
  }, {
    "_id" : "102",
    "_lesItems" : [ "S102:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN238219 (R83 in line [00251],R341 in line [00251],R342 in line [00251])", "S102:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN238219.dummymethode_00253" ]
  }, {
    "_id" : "103",
    "_lesItems" : [ "S103:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN261477 (R5 in line [00249],R85 in line [00249],R86 in line [00249],R87 in line [00249])", "S103:org.apache.kafka.clients.Metadata.update@POLYN262051 (R5 in line [00263],R88 in line [00263],R89 in line [00263],R90 in line [00263],R91 in line [00263])", "S103:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN265061", "S103:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN265061", "S103:org.apache.kafka.clients.Metadata.requestUpdate@POLYN256553 (R5 in line [00145])", "S103:org.apache.kafka.clients.Metadata.requestUpdate@POLYN256553.dummymethode_00146" ]
  }, {
    "_id" : "104",
    "_lesItems" : [ "S104:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN261477 (R5 in line [00249],R85 in line [00249],R86 in line [00249],R87 in line [00249])", "S104:org.apache.kafka.clients.Metadata.update@POLYN262051 (R5 in line [00263],R88 in line [00263],R89 in line [00263],R90 in line [00263],R91 in line [00263])", "S104:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN265061", "S104:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN265061", "S104:org.apache.kafka.common.requests.MetadataResponse.brokersById@POLYN230765", "S104:org.apache.kafka.common.requests.MetadataResponse.holder@POLYN230158 (R92 in line [00001])", "S104:org.apache.kafka.common.requests.MetadataResponse.Holder.Holder@POLYN238309", "S104:org.apache.kafka.common.requests.MetadataResponse.Holder.Holder@POLYN238309.dummymethode_00001" ]
  }, {
    "_id" : "105",
    "_lesItems" : [ "S105:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN237845 (R83 in line [00242],R99 in line [00242])", "S105:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN237845 (R83 in line [00242],R99 in line [00242])", "S105:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN248605", "S105:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN248123", "S105:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN472732", "S105:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN470511", "S105:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN469381", "S105:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN469381", "S105:org.apache.kafka.connect.runtime.Worker.stop@POLYN429855", "S105:org.apache.kafka.connect.runtime.Worker.stop@POLYN429855", "S105:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN504058 (R84 in line [01751])" ]
  }, {
    "_id" : "106",
    "_lesItems" : [ "S106:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN268254 (R82 in line [00001],R114 in line [00001])", "S106:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN268549", "S106:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN268549", "S106:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN265247 (R82 in line [00001],R115 in line [00001])", "S106:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN265247 (R82 in line [00001],R115 in line [00001])", "S106:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN265247.dummymethode_00001" ]
  }, {
    "_id" : "107",
    "_lesItems" : [ "S107:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN203501", "S107:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN203227 (R116 in line [00157],R117 in line [00157],R118 in line [00157])", "S107:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN152886", "S107:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN152886.dummymethode_00038" ]
  }, {
    "_id" : "108",
    "_lesItems" : [ "S108:org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN207493 (R116 in line [00256],R138 in line [00256])", "S108:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN203227 (R116 in line [00157],R117 in line [00157],R118 in line [00157])", "S108:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN152886", "S108:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN152886.dummymethode_00038" ]
  }, {
    "_id" : "109",
    "_lesItems" : [ "S109:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN208940 (R121 in line [00254],R166 in line [00254])", "S109:org.apache.kafka.streams.state.internals.NamedCache.close@POLYN211842 (R116 in line [00345])", "S109:org.apache.kafka.streams.state.internals.NamedCache.close@POLYN211842 (R116 in line [00345])", "S109:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllCacheLevelSensors@POLYN306793 (R167 in line [00462])", "S109:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheSensorPrefix@POLYN307448", "S109:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheSensorPrefix@POLYN307448.dummymethode_00471" ]
  }, {
    "_id" : "110",
    "_lesItems" : [ "S110:org.apache.kafka.streams.state.internals.NamedCache.setListener@POLYN200630 (R116 in line [00104],R368 in line [00104])", "S110:org.apache.kafka.streams.state.internals.NamedCache.setListener@POLYN200630.dummymethode_00105" ]
  }, {
    "_id" : "111",
    "_lesItems" : [ "S111:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN203501", "S111:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN203227 (R116 in line [00157],R117 in line [00157],R118 in line [00157])", "S111:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN203227 (R116 in line [00157],R117 in line [00157],R118 in line [00157])", "S111:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN152886", "S111:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN152886.dummymethode_00038" ]
  }, {
    "_id" : "112",
    "_lesItems" : [ "S112:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN199973 (R121 in line [00075],R122 in line [00075])", "S112:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN199973.dummymethode_00077" ]
  }, {
    "_id" : "113",
    "_lesItems" : [ "S113:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN208940 (R121 in line [00254],R166 in line [00254])", "S113:java.util.Hashtable.remove@POLYN485494" ]
  }, {
    "_id" : "114",
    "_lesItems" : [ "S114:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN199973 (R121 in line [00075],R122 in line [00075])", "S114:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN199973 (R121 in line [00075],R122 in line [00075])", "S114:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN199973.dummymethode_00077" ]
  }, {
    "_id" : "115",
    "_lesItems" : [ "S115:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN199973 (R121 in line [00075],R122 in line [00075])", "S115:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN199973 (R121 in line [00075],R122 in line [00075])", "S115:org.apache.kafka.streams.state.internals.NamedCache.evict@POLYN206548 (R116 in line [00235])", "S115:org.apache.kafka.streams.state.internals.NamedCache.evict@POLYN206548.dummymethode_00237" ]
  }, {
    "_id" : "116",
    "_lesItems" : [ "S116:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN230642", "S116:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN230940 (R124 in line [00104],R125 in line [00104])", "S116:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN230940 (R124 in line [00104],R125 in line [00104])", "S116:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN233786", "S116:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN233786.dummymethode_00170" ]
  }, {
    "_id" : "117",
    "_lesItems" : [ "S117:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN230642", "S117:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN230940 (R124 in line [00104],R125 in line [00104])", "S117:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN230940 (R124 in line [00104],R125 in line [00104])", "S117:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN233786", "S117:org.apache.kafka.streams.processor.internals.TopologyMetadata.registerAndBuildNewTopology@POLYN259060", "S117:org.apache.kafka.streams.processor.internals.TopologyMetadata.buildAndVerifyTopology@POLYN262919", "S117:org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.rewriteTopology@POLYN496797 (R126 in line [00412])", "S117:org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.rewriteTopology@POLYN496797.dummymethode_00413" ]
  }, {
    "_id" : "118",
    "_lesItems" : [ "S118:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN241000 (R128 in line [00163])", "S118:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN241234 (R128 in line [00168],R129 in line [00175])", "S118:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN256621" ]
  }, {
    "_id" : "119",
    "_lesItems" : [ "S119:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN412306", "S119:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN418416", "S119:org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN252243 (R128 in line [00389],R159 in line [00389],R160 in line [00389])", "S119:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN256621" ]
  }, {
    "_id" : "120",
    "_lesItems" : [ "S120:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN412306", "S120:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN418416", "S120:org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN250938 (R128 in line [00357],R161 in line [00357])", "S120:java.util.Map.putAll" ]
  }, {
    "_id" : "121",
    "_lesItems" : [ "S121:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN412306", "S121:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN418416", "S121:org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN251362 (R128 in line [00367],R162 in line [00367])", "S121:java.util.Map.putAll" ]
  }, {
    "_id" : "122",
    "_lesItems" : [ "S122:org.apache.kafka.clients.consumer.MockConsumer.rebalance@POLYN237797 (R128 in line [00096],R179 in line [00096])", "S122:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN327787 (R2 in line [00273],R22 in line [00273])", "S122:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN327787.dummymethode_00277" ]
  }, {
    "_id" : "123",
    "_lesItems" : [ "S123:org.apache.kafka.clients.consumer.MockConsumer.position@POLYN250526 (R128 in line [00347])", "S123:org.apache.kafka.clients.consumer.MockConsumer.position@POLYN249826 (R128 in line [00334])", "S123:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN340177 (R2 in line [00537])", "S123:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN331742", "S123:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517", "S123:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517.dummymethode_00114" ]
  }, {
    "_id" : "124",
    "_lesItems" : [ "S124:org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN248006 (R128 in line [00295],R197 in line [00295],R198 in line [00295])", "S124:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN256621" ]
  }, {
    "_id" : "125",
    "_lesItems" : [ "S125:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN247473 (R128 in line [00280])", "S125:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN247796", "S125:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN246901 (R128 in line [00264],R201 in line [00264])", "S125:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN246285 (R128 in line [00254],R202 in line [00254],R203 in line [00254])", "S125:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN256621" ]
  }, {
    "_id" : "126",
    "_lesItems" : [ "S126:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN247626 (R128 in line [00285],R204 in line [00285])", "S126:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN247796", "S126:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN246901 (R128 in line [00264],R201 in line [00264])", "S126:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN246285 (R128 in line [00254],R202 in line [00254],R203 in line [00254])", "S126:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN256621" ]
  }, {
    "_id" : "127",
    "_lesItems" : [ "S127:org.apache.kafka.clients.consumer.MockConsumer.pause@POLYN252518 (R128 in line [00395],R205 in line [00395])", "S127:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN349632 (R2 in line [00737],R139 in line [00737])", "S127:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN331742", "S127:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517", "S127:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517.dummymethode_00114" ]
  }, {
    "_id" : "128",
    "_lesItems" : [ "S128:org.apache.kafka.clients.consumer.MockConsumer.resume@POLYN252840 (R128 in line [00403],R206 in line [00403])", "S128:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN349783 (R2 in line [00741],R140 in line [00741])", "S128:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN331742", "S128:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517", "S128:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517.dummymethode_00114" ]
  }, {
    "_id" : "129",
    "_lesItems" : [ "S129:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN238199 (R128 in line [00108],R220 in line [00108])", "S129:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN240027 (R128 in line [00141],R221 in line [00141],R222 in line [00141])", "S129:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN256621" ]
  }, {
    "_id" : "130",
    "_lesItems" : [ "S130:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN238406 (R128 in line [00113],R223 in line [00113],R224 in line [00113])", "S130:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN256621" ]
  }, {
    "_id" : "131",
    "_lesItems" : [ "S131:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN239841 (R128 in line [00136],R227 in line [00136])", "S131:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN240027 (R128 in line [00141],R221 in line [00141],R222 in line [00141])", "S131:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN256621" ]
  }, {
    "_id" : "132",
    "_lesItems" : [ "S132:org.apache.kafka.clients.consumer.MockConsumer.assign@POLYN240405 (R128 in line [00148],R279 in line [00148])", "S132:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN256621" ]
  }, {
    "_id" : "133",
    "_lesItems" : [ "S133:org.apache.kafka.clients.consumer.MockConsumer.addRecord@POLYN244925 (R128 in line [00227],R280 in line [00227])", "S133:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN256621" ]
  }, {
    "_id" : "134",
    "_lesItems" : [ "S134:org.apache.kafka.clients.consumer.MockConsumer.setException@POLYN245876 (R128 in line [00241],R281 in line [00241])", "S134:org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN246007 (R128 in line [00245],R282 in line [00245])", "S134:org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN246007.dummymethode_00246" ]
  }, {
    "_id" : "135",
    "_lesItems" : [ "S135:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN247107 (R128 in line [00269])", "S135:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN247232 (R128 in line [00274],R283 in line [00274])", "S135:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN256621" ]
  }, {
    "_id" : "136",
    "_lesItems" : [ "S136:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN255384", "S136:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN255546 (R128 in line [00455],R305 in line [00455])", "S136:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN255546.dummymethode_00456" ]
  }, {
    "_id" : "137",
    "_lesItems" : [ "S137:org.apache.kafka.clients.consumer.MockConsumer.setOffsetsException@POLYN246139 (R128 in line [00249],R312 in line [00249])", "S137:org.apache.kafka.clients.consumer.MockConsumer.setOffsetsException@POLYN246139.dummymethode_00250" ]
  }, {
    "_id" : "138",
    "_lesItems" : [ "S138:org.apache.kafka.clients.consumer.MockConsumer.seekToBeginning@POLYN250704 (R128 in line [00352],R313 in line [00352])", "S138:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN256621" ]
  }, {
    "_id" : "139",
    "_lesItems" : [ "S139:org.apache.kafka.clients.consumer.MockConsumer.seekToEnd@POLYN251128 (R128 in line [00362],R314 in line [00362])", "S139:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN256621" ]
  }, {
    "_id" : "140",
    "_lesItems" : [ "S140:org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN256099 (R128 in line [00473],R315 in line [00473],R129 in line [00474])", "S140:org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN256099.dummymethode_00475" ]
  }, {
    "_id" : "141",
    "_lesItems" : [ "S141:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN241000 (R128 in line [00163])", "S141:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN241234 (R128 in line [00168],R129 in line [00175])", "S141:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN241234 (R128 in line [00168],R129 in line [00175])", "S141:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN256621" ]
  }, {
    "_id" : "142",
    "_lesItems" : [ "S142:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN241000 (R128 in line [00163])", "S142:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN241234 (R128 in line [00168],R129 in line [00175])", "S142:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN241234 (R128 in line [00168],R129 in line [00175])", "S142:org.apache.kafka.clients.consumer.MockConsumer.updateFetchPosition@POLYN256779", "S142:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN345394", "S142:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN344783 (R2 in line [00636],R12 in line [00636],R13 in line [00636])", "S142:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN331742", "S142:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517", "S142:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517.dummymethode_00114" ]
  }, {
    "_id" : "143",
    "_lesItems" : [ "S143:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN328183", "S143:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN328183", "S143:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN335615", "S143:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN393517 (R41 in line [00599],R133 in line [00599],R134 in line [00599])", "S143:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN391484 (R41 in line [00557],R58 in line [00557])", "S143:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN159582", "S143:java.util.Map.get@POLYN437091" ]
  }, {
    "_id" : "144",
    "_lesItems" : [ "S144:org.apache.kafka.common.network.Selector.connect@POLYN411683", "S144:org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN413411", "S144:java.net.Socket.setSendBufferSize@POLYN502759 (R141 in line [00001],R142 in line [00001])" ]
  }, {
    "_id" : "145",
    "_lesItems" : [ "S145:org.apache.kafka.common.network.Selector.connect@POLYN411683", "S145:org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN413411", "S145:java.net.Socket.setReceiveBufferSize@POLYN505466 (R141 in line [00001],R143 in line [00001])" ]
  }, {
    "_id" : "146",
    "_lesItems" : [ "S146:java.net.Socket.Socket@POLYN477587", "S146:java.net.Socket.close@POLYN513196 (R141 in line [00001],R178 in line [00001])", "S146:java.net.Socket.close@POLYN513196 (R141 in line [00001],R178 in line [00001])", "S146:java.net.Socket.close@POLYN513196.dummymethode_00001" ]
  }, {
    "_id" : "147",
    "_lesItems" : [ "S147:java.net.Socket.setSocketImplFactory@POLYN518394 (R141 in line [00001],R360 in line [00001])", "S147:java.net.Socket.setSocketImplFactory@POLYN518394.dummymethode_00001" ]
  }, {
    "_id" : "148",
    "_lesItems" : [ "S148:org.apache.kafka.common.network.Selector.SelectorMetrics.close@POLYN472428", "S148:org.apache.kafka.common.network.Selector.SelectorMetrics.close@POLYN472428", "S148:org.apache.kafka.common.metrics.internals.IntGaugeSuite.close@POLYN197326 (R145 in line [00256])", "S148:org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN195048", "S148:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN310815 (R15 in line [00558])", "S148:java.util.Map.remove@POLYN457025" ]
  }, {
    "_id" : "149",
    "_lesItems" : [ "S149:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN196330 (R145 in line [00235],R211 in line [00235])", "S149:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN196330.dummymethode_00237" ]
  }, {
    "_id" : "150",
    "_lesItems" : [ "S150:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN174916 (R153 in line [00139],R154 in line [00139])", "S150:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN174916.dummymethode_00141" ]
  }, {
    "_id" : "151",
    "_lesItems" : [ "S151:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN172438 (R153 in line [00076],R183 in line [00076])", "S151:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN172438.dummymethode_00078" ]
  }, {
    "_id" : "152",
    "_lesItems" : [ "S152:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN176209 (R153 in line [00169],R353 in line [00169])", "S152:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN176209 (R153 in line [00169],R353 in line [00169])", "S152:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN176209.dummymethode_00173" ]
  }, {
    "_id" : "153",
    "_lesItems" : [ "S153:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN174916 (R153 in line [00139],R154 in line [00139])", "S153:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN174916 (R153 in line [00139],R154 in line [00139])", "S153:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN174916.dummymethode_00141" ]
  }, {
    "_id" : "154",
    "_lesItems" : [ "S154:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN172438 (R153 in line [00076],R183 in line [00076])", "S154:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN172438 (R153 in line [00076],R183 in line [00076])", "S154:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN172438.dummymethode_00078" ]
  }, {
    "_id" : "155",
    "_lesItems" : [ "S155:org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetIfNeeded@POLYN512127", "S155:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN332854 (R2 in line [00390],R189 in line [00390],R190 in line [00390],R191 in line [00390])", "S155:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN332854 (R2 in line [00390],R189 in line [00390],R190 in line [00390],R191 in line [00390])", "S155:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN332109", "S155:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517", "S155:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN181517.dummymethode_00114" ]
  }, {
    "_id" : "156",
    "_lesItems" : [ "S156:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN430224 (R28 in line [01023],R208 in line [01023],R209 in line [01023],R210 in line [01023])", "S156:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN429926 (R28 in line [01017],R185 in line [01017],R186 in line [01017])", "S156:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN429227 (R28 in line [01004],R187 in line [01004],R188 in line [01004])", "S156:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN429227.dummymethode_01005" ]
  }, {
    "_id" : "157",
    "_lesItems" : [ "S157:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN196330 (R145 in line [00235],R211 in line [00235])", "S157:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN196330 (R145 in line [00235],R211 in line [00235])", "S157:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN196330.dummymethode_00237" ]
  }, {
    "_id" : "158",
    "_lesItems" : [ "S158:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN169766 (R239 in line [00071],R240 in line [00071])", "S158:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN169387 (R239 in line [00063],R241 in line [00063])", "S158:java.util.Map.remove@POLYN457025" ]
  }, {
    "_id" : "159",
    "_lesItems" : [ "S159:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN170454 (R239 in line [00084],R242 in line [00084])", "S159:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN169911 (R239 in line [00076],R243 in line [00076])", "S159:org.apache.kafka.connect.util.Table.remove@POLYN158171", "S159:org.apache.kafka.connect.util.Table.remove@POLYN158171.dummymethode_00046" ]
  }, {
    "_id" : "160",
    "_lesItems" : [ "S160:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN247107 (R128 in line [00269])", "S160:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN247232 (R128 in line [00274],R283 in line [00274])", "S160:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN247232 (R128 in line [00274],R283 in line [00274])", "S160:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN256621" ]
  }, {
    "_id" : "161",
    "_lesItems" : [ "S161:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN173026 (R374 in line [00093],R375 in line [00093])", "S161:org.apache.kafka.common.utils.Time.milliseconds@POLYN162721" ]
  }, {
    "_id" : "162",
    "_lesItems" : [ "S162:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN173026 (R374 in line [00093],R375 in line [00093])", "S162:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN173026 (R374 in line [00093],R375 in line [00093])", "S162:org.apache.kafka.common.utils.Time.milliseconds@POLYN162721" ]
  } ],
  "_lesDeadlocksTypos" : [ ]
}