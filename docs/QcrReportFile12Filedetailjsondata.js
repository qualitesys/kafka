{
  "_lesSequences" : [ {
    "_id" : "1",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "21",
      "_source" : "java.io.BufferedReader.INVALIDATED",
      "_method" : "---java.io.BufferedReader.fill@POLYN231383.dummymethode_00138 in line [00138]",
      "_target" : "java.io.BufferedReader.markedChar",
      "_risk" : ""
    }, {
      "_id" : "20",
      "_source" : "java.io.BufferedReader.markedChar",
      "_method" : "---java.io.BufferedReader.reset@POLYN246676.dummymethode_00515 in line [00515]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "19",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN239510.dummymethode_00342 in line [00342]",
      "_target" : "java.io.BufferedReader.readLine@POLYN239510.i",
      "_risk" : "//QC-JAVCWE099[00342] In java.io.BufferedReader.readLine@POLYN239510[00342] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "18",
      "_source" : "java.io.BufferedReader.readLine@POLYN239510.i",
      "_method" : "---java.io.BufferedReader.readLine@POLYN239510.dummymethode_00351 in line [00351]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : "//QC-JAVCWE099[00351] In java.io.BufferedReader.readLine@POLYN239510[00351] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "17",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN239510.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN239510.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN239510[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "16",
      "_source" : "java.io.BufferedReader.readLine@POLYN239510.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN239510.dummymethode_00356 in line [00356]",
      "_target" : "java.io.BufferedReader.readLine@POLYN239510.str",
      "_risk" : "//QC-JAVCWE099[00356] In java.io.BufferedReader.readLine@POLYN239510[00356] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "15",
      "_source" : "java.io.BufferedReader.readLine@POLYN239510.str",
      "_method" : "---java.io.BufferedReader.readLine@POLYN239510.dummymethode_00365 in line [00365]",
      "_target" : "java.io.BufferedReader.readLine@POLYN239510.return",
      "_risk" : "//QC-JAVCWE099[00365] In java.io.BufferedReader.readLine@POLYN239510[00365] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "14",
      "_source" : "java.io.BufferedReader.readLine@POLYN239510.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN239510 in line [00389]",
      "_target" : "java.io.BufferedReader.readLine@POLYN242697.return",
      "_risk" : "//QC-JAVCWE099[00389] In java.io.BufferedReader.readLine@POLYN242697[00389] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "13",
      "_source" : "java.io.BufferedReader.readLine@POLYN242697.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN242697 in line [00197]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN181035.line",
      "_risk" : "//QC-JAVCWE099[00197] In org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN181035[00197] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "12",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN181035.line",
      "_method" : "---java.lang.Integer.parseInt@POLYN428307 in line [00201]",
      "_target" : "java.lang.Integer.parseInt@POLYN428307.s",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "java.lang.Integer.parseInt@POLYN428307.s",
      "_method" : "---java.lang.Integer.parseInt@POLYN424773 in line [00527]",
      "_target" : "java.lang.Integer.parseInt@POLYN428307.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.lang.Integer.parseInt@POLYN428307.return",
      "_method" : "---java.lang.Integer.parseInt@POLYN428307 in line [00081]",
      "_target" : "partition",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.CompletedFetch@POLYN545371.dummymethode_01521 in line [01521]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843.dummymethode_01264 in line [01264]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843.tp",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891.tp",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN621976.key",
      "_risk" : "//QC-JAVCWE099[00058] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931[00058] target data PATHtainted (java.util.HashMap.put) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.util.HashMap.put@POLYN621976.key",
      "_method" : "---java.util.HashMap.putVal@POLYN622499 in line [00609]",
      "_target" : "java.util.HashMap.put@POLYN621976.return",
      "_risk" : "//QC-JAVCWE099[00609] In java.util.HashMap.put@POLYN621976[00609] target data PATHtainted (java.util.HashMap.put) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.put@POLYN621976.return",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00330]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN241204.return",
      "_risk" : "//QC-JAVCWE099[00330] In org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN241204[00330] target data PATHtainted (java.util.HashMap.put) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN241204.return",
      "_method" : "---org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN241204 in line [00309]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN240121.return",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN240121.return",
      "_method" : "---org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN240121 in line [00315]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN240361.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "2",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "21",
      "_source" : "java.io.BufferedReader.skip@POLYN243025.n",
      "_method" : "---java.io.BufferedReader.skip@POLYN243025.dummymethode_00408 in line [00408]",
      "_target" : "java.io.BufferedReader.skip@POLYN243025.r",
      "_risk" : ""
    }, {
      "_id" : "20",
      "_source" : "java.io.BufferedReader.skip@POLYN243025.r",
      "_method" : "---java.io.BufferedReader.skip@POLYN243025.dummymethode_00422 in line [00422]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "19",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN239510.dummymethode_00342 in line [00342]",
      "_target" : "java.io.BufferedReader.readLine@POLYN239510.i",
      "_risk" : "//QC-JAVCWE099[00342] In java.io.BufferedReader.readLine@POLYN239510[00342] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "18",
      "_source" : "java.io.BufferedReader.readLine@POLYN239510.i",
      "_method" : "---java.io.BufferedReader.readLine@POLYN239510.dummymethode_00351 in line [00351]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : "//QC-JAVCWE099[00351] In java.io.BufferedReader.readLine@POLYN239510[00351] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "17",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN239510.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN239510.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN239510[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "16",
      "_source" : "java.io.BufferedReader.readLine@POLYN239510.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN239510.dummymethode_00356 in line [00356]",
      "_target" : "java.io.BufferedReader.readLine@POLYN239510.str",
      "_risk" : "//QC-JAVCWE099[00356] In java.io.BufferedReader.readLine@POLYN239510[00356] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "15",
      "_source" : "java.io.BufferedReader.readLine@POLYN239510.str",
      "_method" : "---java.io.BufferedReader.readLine@POLYN239510.dummymethode_00365 in line [00365]",
      "_target" : "java.io.BufferedReader.readLine@POLYN239510.return",
      "_risk" : "//QC-JAVCWE099[00365] In java.io.BufferedReader.readLine@POLYN239510[00365] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "14",
      "_source" : "java.io.BufferedReader.readLine@POLYN239510.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN239510 in line [00389]",
      "_target" : "java.io.BufferedReader.readLine@POLYN242697.return",
      "_risk" : "//QC-JAVCWE099[00389] In java.io.BufferedReader.readLine@POLYN242697[00389] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "13",
      "_source" : "java.io.BufferedReader.readLine@POLYN242697.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN242697 in line [00197]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN181035.line",
      "_risk" : "//QC-JAVCWE099[00197] In org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN181035[00197] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "12",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN181035.line",
      "_method" : "---java.lang.Integer.parseInt@POLYN428307 in line [00201]",
      "_target" : "java.lang.Integer.parseInt@POLYN428307.s",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "java.lang.Integer.parseInt@POLYN428307.s",
      "_method" : "---java.lang.Integer.parseInt@POLYN424773 in line [00527]",
      "_target" : "java.lang.Integer.parseInt@POLYN428307.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.lang.Integer.parseInt@POLYN428307.return",
      "_method" : "---java.lang.Integer.parseInt@POLYN428307 in line [00081]",
      "_target" : "partition",
      "_risk" : ""
    }, {
      "_id" : "9",
      "_source" : "partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.CompletedFetch@POLYN545371.dummymethode_01521 in line [01521]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.CompletedFetch.partition",
      "_method" : "---org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843.dummymethode_01264 in line [01264]",
      "_target" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843.tp",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843.tp",
      "_method" : "---org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891 in line [01391]",
      "_target" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891.tp",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891.tp",
      "_method" : "---org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931 in line [00756]",
      "_target" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931.topicPartition",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931.topicPartition",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00058]",
      "_target" : "java.util.HashMap.put@POLYN621976.key",
      "_risk" : "//QC-JAVCWE099[00058] In org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931[00058] target data PATHtainted (java.util.HashMap.put) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.util.HashMap.put@POLYN621976.key",
      "_method" : "---java.util.HashMap.putVal@POLYN622499 in line [00609]",
      "_target" : "java.util.HashMap.put@POLYN621976.return",
      "_risk" : "//QC-JAVCWE099[00609] In java.util.HashMap.put@POLYN621976[00609] target data PATHtainted (java.util.HashMap.put) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.put@POLYN621976.return",
      "_method" : "---java.util.HashMap.put@POLYN621976 in line [00330]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN241204.return",
      "_risk" : "//QC-JAVCWE099[00330] In org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN241204[00330] target data PATHtainted (java.util.HashMap.put) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN241204.return",
      "_method" : "---org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN241204 in line [00309]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN240121.return",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN240121.return",
      "_method" : "---org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN240121 in line [00315]",
      "_target" : "org.apache.kafka.clients.consumer.MockConsumer.committed@POLYN240361.return",
      "_risk" : ""
    } ]
  }, {
    "_id" : "3",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "13",
      "_source" : "nextChar-markedChar",
      "_method" : "---java.io.BufferedReader.fill@POLYN231383.dummymethode_00135 in line [00135]",
      "_target" : "java.io.BufferedReader.fill@POLYN231383.delta",
      "_risk" : ""
    }, {
      "_id" : "12",
      "_source" : "java.io.BufferedReader.fill@POLYN231383.delta",
      "_method" : "---java.io.BufferedReader.fill@POLYN231383.dummymethode_00146 in line [00146]",
      "_target" : "java.io.BufferedReader.fill@POLYN231383.dst",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "java.io.BufferedReader.fill@POLYN231383.dst",
      "_method" : "---java.io.BufferedReader.fill@POLYN231383.dummymethode_00165 in line [00165]",
      "_target" : "java.io.BufferedReader.nextChar",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.io.BufferedReader.nextChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN239510.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedReader.readLine@POLYN239510.startChar",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedReader.readLine@POLYN239510[00350] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "9",
      "_source" : "java.io.BufferedReader.readLine@POLYN239510.startChar",
      "_method" : "---java.io.BufferedReader.readLine@POLYN239510.dummymethode_00356 in line [00356]",
      "_target" : "java.io.BufferedReader.readLine@POLYN239510.str",
      "_risk" : "//QC-JAVCWE099[00356] In java.io.BufferedReader.readLine@POLYN239510[00356] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "8",
      "_source" : "java.io.BufferedReader.readLine@POLYN239510.str",
      "_method" : "---java.io.BufferedReader.readLine@POLYN239510.dummymethode_00365 in line [00365]",
      "_target" : "java.io.BufferedReader.readLine@POLYN239510.return",
      "_risk" : "//QC-JAVCWE099[00365] In java.io.BufferedReader.readLine@POLYN239510[00365] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.BufferedReader.readLine@POLYN239510.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN239510 in line [00389]",
      "_target" : "java.io.BufferedReader.readLine@POLYN242697.return",
      "_risk" : "//QC-JAVCWE099[00389] In java.io.BufferedReader.readLine@POLYN242697[00389] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "6",
      "_source" : "java.io.BufferedReader.readLine@POLYN242697.return",
      "_method" : "---java.io.BufferedReader.readLine@POLYN242697 in line [00197]",
      "_target" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN181035.line",
      "_risk" : "//QC-JAVCWE099[00197] In org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN181035[00197] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.readInt@POLYN181035.line",
      "_method" : "---java.lang.Integer.parseInt@POLYN428307 in line [00201]",
      "_target" : "java.lang.Integer.parseInt@POLYN428307.s",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.Integer.parseInt@POLYN428307.s",
      "_method" : "---java.lang.Integer.parseInt@POLYN424773 in line [00527]",
      "_target" : "java.lang.Integer.parseInt@POLYN428307.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.lang.Integer.parseInt@POLYN428307.return",
      "_method" : "---java.lang.Integer.parseInt@POLYN428307 in line [00607]",
      "_target" : "java.lang.Integer.IntegerCache.i",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.lang.Integer.IntegerCache.i",
      "_method" : "---java.lang.Integer.IntegerCache.dummymethode_00610 in line [00610]",
      "_target" : "java.lang.Integer.IntegerCache.h",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "java.lang.Integer.IntegerCache.h",
      "_method" : "---java.lang.Integer.IntegerCache.dummymethode_00612 in line [00612]",
      "_target" : "java.lang.Integer.IntegerCache.high",
      "_risk" : ""
    } ]
  }, {
    "_id" : "4",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "12",
      "_source" : "java.util.HashMap.Node@POLYN607190.value",
      "_method" : "---java.util.HashMap.Node.Node@POLYN607190.dummymethode_00287 in line [00287]",
      "_target" : "java.util.HashMap.value",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "java.util.HashMap.value",
      "_method" : "---java.util.HashMap.Node.getValue@POLYN607725.dummymethode_00292 in line [00292]",
      "_target" : "java.util.HashMap.getValue@POLYN607725.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.util.HashMap.getValue@POLYN607725.return",
      "_method" : "---java.util.HashMap.getValue@POLYN607725 in line [00266]",
      "_target" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN201384.valueRaw",
      "_risk" : "//QC-JAVCWE099[00266] In org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN201384[00266] source data PATHtainted (java.util.HashMap.get) RiskOnInput"
    }, {
      "_id" : "9",
      "_source" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN201384.valueRaw",
      "_method" : "---java.lang.String.valueOf@POLYN913018 in line [00272]",
      "_target" : "java.lang.String.valueOf@POLYN913018.d",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.lang.String.valueOf@POLYN913018.d",
      "_method" : "---java.lang.Double.toString@POLYN375908 in line [00001]",
      "_target" : "java.lang.Double.toString@POLYN375908.d",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.Double.toString@POLYN375908.d",
      "_method" : "---java.lang.Double.toString@POLYN375908.dummymethode_00196 in line [00196]",
      "_target" : "java.lang.Double.toString@POLYN375908.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.lang.Double.toString@POLYN375908.return",
      "_method" : "---java.lang.Double.toString@POLYN375908 in line [00001]",
      "_target" : "java.lang.String.valueOf@POLYN913018.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.lang.String.valueOf@POLYN913018.return",
      "_method" : "---java.lang.String.valueOf@POLYN913018 in line [00821]",
      "_target" : "java.io.PrintStream.println@POLYN371086.s",
      "_risk" : "//QC-JAVCWE099[00821] In java.io.PrintStream.println@POLYN371086[00821] target data PATHtainted (java.io.PrintStream.print)"
    }, {
      "_id" : "4",
      "_source" : "java.io.PrintStream.println@POLYN371086.s",
      "_method" : "---java.io.PrintStream.print@POLYN366116 in line [00823]",
      "_target" : "java.io.PrintStream.print@POLYN366116.s",
      "_risk" : "//QC-JAVCWE099[00823] In java.io.PrintStream.println@POLYN371086[00823] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.print@POLYN366116.s",
      "_method" : "---java.io.PrintStream.write@POLYN360925 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN360925.s",
      "_risk" : "//QC-JAVCWE099[00669] In java.io.PrintStream.print@POLYN366116[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN360925.s",
      "_method" : "---java.io.Writer.write@POLYN192396 in line [00525]",
      "_target" : "java.io.Writer.write@POLYN192396.str",
      "_risk" : "//QC-JAVCWE099[00525] In java.io.PrintStream.write@POLYN360925[00525] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.Writer.write@POLYN192396.str",
      "_method" : "---java.io.Writer.write@POLYN192989 in line [00157]",
      "_target" : "java.io.Writer.write@POLYN192396.cibledummy_00157",
      "_risk" : "//QC-JAVCWE099[00157] In java.io.Writer.write@POLYN192396[00157] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "5",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "12",
      "_source" : "java.util.HashMap.setValue@POLYN608144.newValue",
      "_method" : "---java.util.HashMap.Node.setValue@POLYN608144.dummymethode_00301 in line [00301]",
      "_target" : "java.util.HashMap.value",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "java.util.HashMap.value",
      "_method" : "---java.util.HashMap.Node.getValue@POLYN607725.dummymethode_00292 in line [00292]",
      "_target" : "java.util.HashMap.getValue@POLYN607725.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.util.HashMap.getValue@POLYN607725.return",
      "_method" : "---java.util.HashMap.getValue@POLYN607725 in line [00266]",
      "_target" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN201384.valueRaw",
      "_risk" : "//QC-JAVCWE099[00266] In org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN201384[00266] source data PATHtainted (java.util.HashMap.get) RiskOnInput"
    }, {
      "_id" : "9",
      "_source" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN201384.valueRaw",
      "_method" : "---java.lang.String.valueOf@POLYN913018 in line [00272]",
      "_target" : "java.lang.String.valueOf@POLYN913018.d",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.lang.String.valueOf@POLYN913018.d",
      "_method" : "---java.lang.Double.toString@POLYN375908 in line [00001]",
      "_target" : "java.lang.Double.toString@POLYN375908.d",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.Double.toString@POLYN375908.d",
      "_method" : "---java.lang.Double.toString@POLYN375908.dummymethode_00196 in line [00196]",
      "_target" : "java.lang.Double.toString@POLYN375908.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.lang.Double.toString@POLYN375908.return",
      "_method" : "---java.lang.Double.toString@POLYN375908 in line [00001]",
      "_target" : "java.lang.String.valueOf@POLYN913018.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.lang.String.valueOf@POLYN913018.return",
      "_method" : "---java.lang.String.valueOf@POLYN913018 in line [00821]",
      "_target" : "java.io.PrintStream.println@POLYN371086.s",
      "_risk" : "//QC-JAVCWE099[00821] In java.io.PrintStream.println@POLYN371086[00821] target data PATHtainted (java.io.PrintStream.print)"
    }, {
      "_id" : "4",
      "_source" : "java.io.PrintStream.println@POLYN371086.s",
      "_method" : "---java.io.PrintStream.print@POLYN366116 in line [00823]",
      "_target" : "java.io.PrintStream.print@POLYN366116.s",
      "_risk" : "//QC-JAVCWE099[00823] In java.io.PrintStream.println@POLYN371086[00823] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.print@POLYN366116.s",
      "_method" : "---java.io.PrintStream.write@POLYN360925 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN360925.s",
      "_risk" : "//QC-JAVCWE099[00669] In java.io.PrintStream.print@POLYN366116[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN360925.s",
      "_method" : "---java.io.Writer.write@POLYN192396 in line [00525]",
      "_target" : "java.io.Writer.write@POLYN192396.str",
      "_risk" : "//QC-JAVCWE099[00525] In java.io.PrintStream.write@POLYN360925[00525] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.Writer.write@POLYN192396.str",
      "_method" : "---java.io.Writer.write@POLYN192989 in line [00157]",
      "_target" : "java.io.Writer.write@POLYN192396.cibledummy_00157",
      "_risk" : "//QC-JAVCWE099[00157] In java.io.Writer.write@POLYN192396[00157] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "6",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "12",
      "_source" : "java.lang.Long.MAX_VALUE",
      "_method" : "---org.apache.kafka.streams.state.internals.InMemoryTimeOrderedKeyValueBuffer.evictWhile@POLYN242135.dummymethode_00438 in line [00438]",
      "_target" : "java.util.HashMap.value",
      "_risk" : ""
    }, {
      "_id" : "11",
      "_source" : "java.util.HashMap.value",
      "_method" : "---java.util.HashMap.Node.getValue@POLYN607725.dummymethode_00292 in line [00292]",
      "_target" : "java.util.HashMap.getValue@POLYN607725.return",
      "_risk" : ""
    }, {
      "_id" : "10",
      "_source" : "java.util.HashMap.getValue@POLYN607725.return",
      "_method" : "---java.util.HashMap.getValue@POLYN607725 in line [00266]",
      "_target" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN201384.valueRaw",
      "_risk" : "//QC-JAVCWE099[00266] In org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN201384[00266] source data PATHtainted (java.util.HashMap.get) RiskOnInput"
    }, {
      "_id" : "9",
      "_source" : "org.apache.kafka.common.security.oauthbearer.secured.OAuthBearerLoginCallbackHandler.handleExtensionsCallback@POLYN201384.valueRaw",
      "_method" : "---java.lang.String.valueOf@POLYN913018 in line [00272]",
      "_target" : "java.lang.String.valueOf@POLYN913018.d",
      "_risk" : ""
    }, {
      "_id" : "8",
      "_source" : "java.lang.String.valueOf@POLYN913018.d",
      "_method" : "---java.lang.Double.toString@POLYN375908 in line [00001]",
      "_target" : "java.lang.Double.toString@POLYN375908.d",
      "_risk" : ""
    }, {
      "_id" : "7",
      "_source" : "java.lang.Double.toString@POLYN375908.d",
      "_method" : "---java.lang.Double.toString@POLYN375908.dummymethode_00196 in line [00196]",
      "_target" : "java.lang.Double.toString@POLYN375908.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.lang.Double.toString@POLYN375908.return",
      "_method" : "---java.lang.Double.toString@POLYN375908 in line [00001]",
      "_target" : "java.lang.String.valueOf@POLYN913018.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.lang.String.valueOf@POLYN913018.return",
      "_method" : "---java.lang.String.valueOf@POLYN913018 in line [00821]",
      "_target" : "java.io.PrintStream.println@POLYN371086.s",
      "_risk" : "//QC-JAVCWE099[00821] In java.io.PrintStream.println@POLYN371086[00821] target data PATHtainted (java.io.PrintStream.print)"
    }, {
      "_id" : "4",
      "_source" : "java.io.PrintStream.println@POLYN371086.s",
      "_method" : "---java.io.PrintStream.print@POLYN366116 in line [00823]",
      "_target" : "java.io.PrintStream.print@POLYN366116.s",
      "_risk" : "//QC-JAVCWE099[00823] In java.io.PrintStream.println@POLYN371086[00823] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.print@POLYN366116.s",
      "_method" : "---java.io.PrintStream.write@POLYN360925 in line [00669]",
      "_target" : "java.io.PrintStream.write@POLYN360925.s",
      "_risk" : "//QC-JAVCWE099[00669] In java.io.PrintStream.print@POLYN366116[00669] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN360925.s",
      "_method" : "---java.io.Writer.write@POLYN192396 in line [00525]",
      "_target" : "java.io.Writer.write@POLYN192396.str",
      "_risk" : "//QC-JAVCWE099[00525] In java.io.PrintStream.write@POLYN360925[00525] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.Writer.write@POLYN192396.str",
      "_method" : "---java.io.Writer.write@POLYN192989 in line [00157]",
      "_target" : "java.io.Writer.write@POLYN192396.cibledummy_00157",
      "_risk" : "//QC-JAVCWE099[00157] In java.io.Writer.write@POLYN192396[00157] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "7",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "10",
      "_source" : "1",
      "_method" : "---java.io.InputStream.read@POLYN246846.dummymethode_00177 in line [00177]",
      "_target" : "java.io.InputStream.read@POLYN246846.i",
      "_risk" : "//QC-JAVCWE099[00177] In java.io.InputStream.read@POLYN246846[00177] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "9",
      "_source" : "java.io.InputStream.read@POLYN246846.i",
      "_method" : "---java.io.InputStream.read@POLYN246846.dummymethode_00188 in line [00188]",
      "_target" : "java.io.InputStream.read@POLYN246846.return",
      "_risk" : "//QC-JAVCWE099[00188] In java.io.InputStream.read@POLYN246846[00188] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "8",
      "_source" : "java.io.InputStream.read@POLYN246846.return",
      "_method" : "---java.io.InputStream.read@POLYN246846 in line [02598]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.peekb",
      "_risk" : "//QC-JAVCWE099[02598] In java.io.ObjectInputStream.PeekInputStream.peek@POLYN872987[02598] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "7",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.peekb",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN873394.dummymethode_02605 in line [02605]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873394.v",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873394.v",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN873394.dummymethode_02607 in line [02607]",
      "_target" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873394.return",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.PeekInputStream.read@POLYN873394.return",
      "_method" : "---java.io.ObjectInputStream.PeekInputStream.read@POLYN873394 in line [02938]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN886312.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.read@POLYN886312.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.read@POLYN886312 in line [00893]",
      "_target" : "java.io.ObjectInputStream.read@POLYN805040.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.read@POLYN805040.return",
      "_method" : "---java.io.ObjectInputStream.read@POLYN805040 in line [03091]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893959.v",
      "_risk" : "//QC-JAVCWE099[03091] In java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893959[03091] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893959.v",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readUnsignedByte@POLYN893959.dummymethode_03095 in line [03095]",
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
    "_id" : "8",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "7",
      "_source" : "java.lang.StringBuilder.toString@POLYN236748.0",
      "_method" : "---java.lang.StringBuilder.toString@POLYN236748.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN236748.return",
      "_risk" : ""
    }, {
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
      "_method" : "---java.io.ObjectInputStream.readString@POLYN840214.dummymethode_01876 in line [01876]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN840214.return",
      "_risk" : "//QC-JAVCWZ099[01876] In java.io.ObjectInputStream.readString@POLYN840214[01876] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readString@POLYN840214.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN840214 in line [01963]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN845523.name",
      "_risk" : "//QC-JAVCWZ099[01963] In java.io.ObjectInputStream.readEnum@POLYN845523[01963] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "9",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "7",
      "_source" : "java.lang.StringBuilder.toString@POLYN236748.count",
      "_method" : "---java.lang.StringBuilder.toString@POLYN236748.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN236748.return",
      "_risk" : ""
    }, {
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
      "_method" : "---java.io.ObjectInputStream.readString@POLYN840214.dummymethode_01876 in line [01876]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN840214.return",
      "_risk" : "//QC-JAVCWZ099[01876] In java.io.ObjectInputStream.readString@POLYN840214[01876] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readString@POLYN840214.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN840214 in line [01963]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN845523.name",
      "_risk" : "//QC-JAVCWZ099[01963] In java.io.ObjectInputStream.readEnum@POLYN845523[01963] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "10",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "7",
      "_source" : "java.lang.StringBuilder.toString@POLYN236748.value",
      "_method" : "---java.lang.StringBuilder.toString@POLYN236748.dummymethode_00447 in line [00447]",
      "_target" : "java.lang.StringBuilder.toString@POLYN236748.return",
      "_risk" : ""
    }, {
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
      "_method" : "---java.io.ObjectInputStream.readString@POLYN840214.dummymethode_01876 in line [01876]",
      "_target" : "java.io.ObjectInputStream.readString@POLYN840214.return",
      "_risk" : "//QC-JAVCWZ099[01876] In java.io.ObjectInputStream.readString@POLYN840214[01876] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readString@POLYN840214.return",
      "_method" : "---java.io.ObjectInputStream.readString@POLYN840214 in line [01963]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN845523.name",
      "_risk" : "//QC-JAVCWZ099[01963] In java.io.ObjectInputStream.readEnum@POLYN845523[01963] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "11",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN566970.obj",
      "_method" : "---java.io.ObjectOutputStream.replaceObject@POLYN566970.dummymethode_00588 in line [00588]",
      "_target" : "java.io.ObjectOutputStream.replaceObject@POLYN566970.return",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.replaceObject@POLYN566970.return",
      "_method" : "---java.io.ObjectOutputStream.replaceObject@POLYN566970 in line [01144]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.rep",
      "_risk" : "//QC-JAVCWZ099[01144] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01144] target data PATHtainted (java.io.ObjectOutputStream.write)"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.rep",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583189.dummymethode_01149 in line [01149]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_risk" : "//QC-JAVCWZ099[01149] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01149] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN601592 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN603435 in line [01509]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN603435.obj",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN603435.obj",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteFields@POLYN603435.dummymethode_01533 in line [01533]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteFields@POLYN603435.cibledummy_01533",
      "_risk" : ""
    } ]
  }, {
    "_id" : "12",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593220.objs[i]",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583189 in line [01378]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_risk" : "//QC-JAVCWZ099[01378] In java.io.ObjectOutputStream.writeArray@POLYN593220[01378] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN601592 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN601592.dummymethode_01494 in line [01494]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01494] In java.io.ObjectOutputStream.writeSerialData@POLYN601592[01494] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN600400.dummymethode_01452 in line [01452]",
      "_target" : "java.io.ObjectOutputStream.writeExternalData@POLYN600400.oldContext",
      "_risk" : "//QC-JAVCWZ099[01452] In java.io.ObjectOutputStream.writeExternalData@POLYN600400[01452] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN600400.oldContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN600400.dummymethode_01464 in line [01464]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01464] In java.io.ObjectOutputStream.writeExternalData@POLYN600400[01464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteObject@POLYN561575.dummymethode_00434 in line [00434]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteObject@POLYN561575.ctx",
      "_risk" : ""
    } ]
  }, {
    "_id" : "13",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "7",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN560919.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583189 in line [00415]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_risk" : "//QC-JAVCWZ099[00415] In java.io.ObjectOutputStream.writeUnshared@POLYN560919[00415] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.obj",
      "_method" : "---java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960 in line [01178]",
      "_target" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_risk" : "//QC-JAVCWZ099[01178] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01178] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN601592 in line [01432]",
      "_target" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_risk" : "//QC-JAVCWZ099[01432] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960[01432] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.obj",
      "_method" : "---java.io.ObjectOutputStream.writeSerialData@POLYN601592.dummymethode_01494 in line [01494]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01494] In java.io.ObjectOutputStream.writeSerialData@POLYN601592[01494] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN600400.dummymethode_01452 in line [01452]",
      "_target" : "java.io.ObjectOutputStream.writeExternalData@POLYN600400.oldContext",
      "_risk" : "//QC-JAVCWZ099[01452] In java.io.ObjectOutputStream.writeExternalData@POLYN600400[01452] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN600400.oldContext",
      "_method" : "---java.io.ObjectOutputStream.writeExternalData@POLYN600400.dummymethode_01464 in line [01464]",
      "_target" : "java.io.ObjectOutputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[01464] In java.io.ObjectOutputStream.writeExternalData@POLYN600400[01464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.curContext",
      "_method" : "---java.io.ObjectOutputStream.defaultWriteObject@POLYN561575.dummymethode_00434 in line [00434]",
      "_target" : "java.io.ObjectOutputStream.defaultWriteObject@POLYN561575.ctx",
      "_risk" : ""
    } ]
  }, {
    "_id" : "14",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "7",
      "_source" : "timestampType==TimestampType.LOG_APPEND_TIME?logAppendTime_maxTimestamp",
      "_method" : "---org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN295621.dummymethode_00424 in line [00424]",
      "_target" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN295621.timestamp",
      "_risk" : ""
    }, {
      "_id" : "6",
      "_source" : "org.apache.kafka.common.record.MemoryRecordsBuilder.writeLegacyCompressedWrapperHeader@POLYN295621.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN242544 in line [00425]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN242544.timestamp",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.writeCompressedRecordHeader@POLYN242544.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN243625 in line [00369]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN243625.timestamp",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN243625.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN245169 in line [00390]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN245169.timestamp",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN245169.timestamp",
      "_method" : "---org.apache.kafka.common.record.LegacyRecord.write@POLYN246511 in line [00428]",
      "_target" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN246511.timestamp",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.LegacyRecord.write@POLYN246511.timestamp",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN573547 in line [00468]",
      "_target" : "java.io.ObjectOutputStream.writeLong@POLYN573547.val",
      "_risk" : "//QC-JAVCWE099[00468] In org.apache.kafka.common.record.LegacyRecord.write@POLYN246511[00468] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeLong@POLYN573547.val",
      "_method" : "---java.io.ObjectOutputStream.writeLong@POLYN573547 in line [00808]",
      "_target" : "java.io.ObjectOutputStream.writeLong@POLYN573547.cibledummy_00808",
      "_risk" : "//QC-JAVCWE099[00808] In java.io.ObjectOutputStream.writeLong@POLYN573547[00808] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "15",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "7",
      "_source" : "java.util.concurrent.ConcurrentHashMap.MapEntry.setValue@POLYN1612139.value",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.put@POLYN1462649 in line [03497]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.put@POLYN1462649.value",
      "_risk" : "//QC-JAVCWZ099[03497] In java.util.concurrent.ConcurrentHashMap.MapEntry.setValue@POLYN1612139[03497] target data PATHtainted (java.util.concurrent.ConcurrentHashMap.put) RiskOnOutput"
    }, {
      "_id" : "6",
      "_source" : "java.util.concurrent.ConcurrentHashMap.put@POLYN1462649.value",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859 in line [01000]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859.value",
      "_risk" : "//QC-JAVCWZ099[01000] In java.util.concurrent.ConcurrentHashMap.put@POLYN1462649[01000] target data PATHtainted (java.util.concurrent.ConcurrentHashMap.put) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859.value",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859.dummymethode_01032 in line [01032]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.val",
      "_risk" : "//QC-JAVCWZ099[01032] In java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859[01032] target data PATHtainted (java.util.concurrent.ConcurrentHashMap.put) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.util.concurrent.ConcurrentHashMap.val",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.replaceNode@POLYN1468411.dummymethode_01120 in line [01120]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.replaceNode@POLYN1468411.ev",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.replaceNode@POLYN1468411.ev",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.replaceNode@POLYN1468411.dummymethode_01123 in line [01123]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.replaceNode@POLYN1468411.oldVal",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.replaceNode@POLYN1468411.oldVal",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.replaceNode@POLYN1468411.dummymethode_01161 in line [01161]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.replaceNode@POLYN1468411.return",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.replaceNode@POLYN1468411.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.replaceNode@POLYN1468411 in line [03396]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.BaseIterator.remove@POLYN1605934.cibledummy_03396",
      "_risk" : ""
    } ]
  }, {
    "_id" : "16",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslServer.process@POLYN186537.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN828716 in line [00165]",
      "_target" : "java.lang.String.getBytes@POLYN828716.charsetName",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.lang.String.getBytes@POLYN828716.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN828716.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN828716.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.getBytes@POLYN828716.return",
      "_method" : "---java.lang.String.getBytes@POLYN828716 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN413580.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN413580.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN413580 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN229828.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN229828.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN233024 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN233024.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN229828[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN233024.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN233024.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN233024.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN233024[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "17",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "org.apache.kafka.common.security.scram.internals.ScramFormatter.toBytes@POLYN184310.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN828716 in line [00170]",
      "_target" : "java.lang.String.getBytes@POLYN828716.charsetName",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.lang.String.getBytes@POLYN828716.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN828716.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN828716.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.getBytes@POLYN828716.return",
      "_method" : "---java.lang.String.getBytes@POLYN828716 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN413580.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN413580.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN413580 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN229828.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN229828.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN233024 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN233024.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN229828[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN233024.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN233024.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN233024.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN233024[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "18",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN413580.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN828716 in line [00172]",
      "_target" : "java.lang.String.getBytes@POLYN828716.charsetName",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.lang.String.getBytes@POLYN828716.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN828716.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN828716.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.getBytes@POLYN828716.return",
      "_method" : "---java.lang.String.getBytes@POLYN828716 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN413580.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN413580.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN413580 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN229828.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN229828.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN233024 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN233024.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN229828[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN233024.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN233024.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN233024.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN233024[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "19",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "org.apache.kafka.connect.runtime.errors.DeadLetterQueueReporter.toBytes@POLYN190827.StandardCharsets.UTF_8",
      "_method" : "---java.lang.String.getBytes@POLYN828716 in line [00206]",
      "_target" : "java.lang.String.getBytes@POLYN828716.charsetName",
      "_risk" : ""
    }, {
      "_id" : "5",
      "_source" : "java.lang.String.getBytes@POLYN828716.charsetName",
      "_method" : "---java.lang.String.getBytes@POLYN828716.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.getBytes@POLYN828716.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.getBytes@POLYN828716.return",
      "_method" : "---java.lang.String.getBytes@POLYN828716 in line [00172]",
      "_target" : "org.apache.kafka.common.utils.Utils.utf8@POLYN413580.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.utf8@POLYN413580.return",
      "_method" : "---org.apache.kafka.common.utils.Utils.utf8@POLYN413580 in line [00205]",
      "_target" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN229828.utf8Bytes",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN229828.utf8Bytes",
      "_method" : "---java.io.FileOutputStream.write@POLYN233024 in line [00207]",
      "_target" : "java.io.FileOutputStream.write@POLYN233024.b",
      "_risk" : "//QC-JAVCWE099[00207] In org.apache.kafka.common.record.DefaultRecord.writeTo@POLYN229828[00207] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.FileOutputStream.write@POLYN233024.b",
      "_method" : "---java.io.FileOutputStream.write@POLYN233024.dummymethode_00279 in line [00279]",
      "_target" : "java.io.FileOutputStream.write@POLYN233024.cibledummy_00279",
      "_risk" : "//QC-JAVCWE099[00279] In java.io.FileOutputStream.write@POLYN233024[00279] target data PATHtainted (java.io.FileOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "20",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.readArray@POLYN841181.false",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN825386 in line [01908]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN825386.unshared",
      "_risk" : "//QC-JAVCWZ099[01908] In java.io.ObjectInputStream.readArray@POLYN841181[01908] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN825386.unshared",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN833652 in line [01522]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN833652.unshared",
      "_risk" : "//QC-JAVCWZ099[01522] In java.io.ObjectInputStream.readObject0@POLYN825386[01522] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN833652.unshared",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN835113 in line [01710]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN833652.descriptor",
      "_risk" : "//QC-JAVCWZ099[01710] In java.io.ObjectInputStream.readClassDesc@POLYN833652[01710] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN833652.descriptor",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN833652.dummymethode_01722 in line [01722]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN833652.return",
      "_risk" : "//QC-JAVCWZ099[01722] In java.io.ObjectInputStream.readClassDesc@POLYN833652[01722] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN833652.return",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN833652 in line [02000]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN847773.desc",
      "_risk" : "//QC-JAVCWZ099[02000] In java.io.ObjectInputStream.readOrdinaryObject@POLYN847773[02000] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN847773.desc",
      "_method" : "---java.io.ObjectInputStream.readExternalData@POLYN850987 in line [02025]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN847773.cibledummy_02025",
      "_risk" : "//QC-JAVCWZ099[02025] In java.io.ObjectInputStream.readOrdinaryObject@POLYN847773[02025] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "21",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.io.ObjectInputStream.skipCustomData@POLYN856088.false",
      "_method" : "---java.io.ObjectInputStream.readObject0@POLYN825386 in line [02211]",
      "_target" : "java.io.ObjectInputStream.readObject0@POLYN825386.unshared",
      "_risk" : "//QC-JAVCWZ099[02211] In java.io.ObjectInputStream.skipCustomData@POLYN856088[02211] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.readObject0@POLYN825386.unshared",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN833652 in line [01522]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN833652.unshared",
      "_risk" : "//QC-JAVCWZ099[01522] In java.io.ObjectInputStream.readObject0@POLYN825386[01522] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN833652.unshared",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN835113 in line [01710]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN833652.descriptor",
      "_risk" : "//QC-JAVCWZ099[01710] In java.io.ObjectInputStream.readClassDesc@POLYN833652[01710] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN833652.descriptor",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN833652.dummymethode_01722 in line [01722]",
      "_target" : "java.io.ObjectInputStream.readClassDesc@POLYN833652.return",
      "_risk" : "//QC-JAVCWZ099[01722] In java.io.ObjectInputStream.readClassDesc@POLYN833652[01722] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClassDesc@POLYN833652.return",
      "_method" : "---java.io.ObjectInputStream.readClassDesc@POLYN833652 in line [02000]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN847773.desc",
      "_risk" : "//QC-JAVCWZ099[02000] In java.io.ObjectInputStream.readOrdinaryObject@POLYN847773[02000] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN847773.desc",
      "_method" : "---java.io.ObjectInputStream.readExternalData@POLYN850987 in line [02025]",
      "_target" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN847773.cibledummy_02025",
      "_risk" : "//QC-JAVCWZ099[02025] In java.io.ObjectInputStream.readOrdinaryObject@POLYN847773[02025] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "22",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.lang.Object.getClass@POLYN287099.return",
      "_method" : "---java.lang.Object.getClass@POLYN287099 in line [01129]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.cl",
      "_risk" : "//QC-JAVCWZ099[01129] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01129] target data PATHtainted (java.io.ObjectOutputStream.write)"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.cl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583189.dummymethode_01134 in line [01134]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.desc",
      "_risk" : "//QC-JAVCWZ099[01134] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01134] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
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
    "_id" : "23",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.repCl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583189.dummymethode_01141 in line [01141]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.cl",
      "_risk" : "//QC-JAVCWZ099[01141] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01141] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.cl",
      "_method" : "---java.io.ObjectOutputStream.writeObject0@POLYN583189.dummymethode_01134 in line [01134]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.desc",
      "_risk" : "//QC-JAVCWZ099[01134] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01134] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
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
    "_id" : "24",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "6",
      "_source" : "e.value",
      "_method" : "---java.util.HashMap.putVal@POLYN622499.dummymethode_00651 in line [00651]",
      "_target" : "java.util.HashMap.putVal@POLYN622499.oldValue",
      "_risk" : "//QC-JAVCWE099[00651] In java.util.HashMap.putVal@POLYN622499[00651] target data PATHtainted (java.util.HashMap.put) RiskOnOutput"
    }, {
      "_id" : "5",
      "_source" : "java.util.HashMap.putVal@POLYN622499.oldValue",
      "_method" : "---java.util.HashMap.putVal@POLYN622499.dummymethode_00655 in line [00655]",
      "_target" : "java.util.HashMap.putVal@POLYN622499.return",
      "_risk" : "//QC-JAVCWE099[00655] In java.util.HashMap.putVal@POLYN622499[00655] target data PATHtainted (java.util.HashMap.put) RiskOnOutput"
    }, {
      "_id" : "4",
      "_source" : "java.util.HashMap.putVal@POLYN622499.return",
      "_method" : "---java.util.HashMap.putVal@POLYN622499 in line [01059]",
      "_target" : "java.util.HashMap.putIfAbsent@POLYN650661.return",
      "_risk" : "//QC-JAVCWE099[01059] In java.util.HashMap.putIfAbsent@POLYN650661[01059] target data PATHtainted (java.util.HashMap.put) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.putIfAbsent@POLYN650661.return",
      "_method" : "---java.util.HashMap.putIfAbsent@POLYN650661 in line [00599]",
      "_target" : "org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN303945.existingMetric",
      "_risk" : "//QC-JAVCWE099[00599] In org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN303945[00599] target data PATHtainted (java.util.HashMap.put) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN303945.existingMetric",
      "_method" : "---org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN303945.dummymethode_00601 in line [00601]",
      "_target" : "org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN303945.return",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN303945.return",
      "_method" : "---org.apache.kafka.common.metrics.Metrics.registerMetric@POLYN303945 in line [00513]",
      "_target" : "org.apache.kafka.common.metrics.Metrics.addMetric@POLYN299981.existingMetric",
      "_risk" : ""
    } ]
  }, {
    "_id" : "25",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readInt@POLYN896238.v",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readInt@POLYN896238.dummymethode_03143 in line [03143]",
      "_target" : "java.io.ObjectInputStream.BlockDataInputStream.readInt@POLYN896238.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.BlockDataInputStream.readInt@POLYN896238.return",
      "_method" : "---java.io.ObjectInputStream.BlockDataInputStream.readInt@POLYN896238 in line [01023]",
      "_target" : "java.io.ObjectInputStream.readInt@POLYN808886.return",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readInt@POLYN808886.return",
      "_method" : "---java.io.ObjectInputStream.readInt@POLYN808886 in line [01889]",
      "_target" : "java.io.ObjectInputStream.readArray@POLYN841181.len",
      "_risk" : "//QC-JAVCWZ099[01889] In java.io.ObjectInputStream.readArray@POLYN841181[01889] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readArray@POLYN841181.len",
      "_method" : "---java.lang.Class.newInstance@POLYN1079583 in line [01897]",
      "_target" : "java.io.ObjectInputStream.readArray@POLYN841181.array",
      "_risk" : "//QC-JAVCWZ099[01897] In java.io.ObjectInputStream.readArray@POLYN841181[01897] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readArray@POLYN841181.array",
      "_method" : "---java.io.ObjectInputStream.readArray@POLYN841181.dummymethode_01940 in line [01940]",
      "_target" : "java.io.ObjectInputStream.readArray@POLYN841181.return",
      "_risk" : "//QC-JAVCWZ099[01940] In java.io.ObjectInputStream.readArray@POLYN841181[01940] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "26",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.io.PrintStream.format@POLYN377281.l",
      "_method" : "---java.lang.String.format@POLYN907077 in line [01027]",
      "_target" : "java.lang.String.format@POLYN907077.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN907077.l",
      "_method" : "---java.lang.String.format@POLYN907077.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN907077.return",
      "_risk" : ""
    }, {
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
    "_id" : "27",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "java.io.PrintWriter.format@POLYN360864.l",
      "_method" : "---java.lang.String.format@POLYN907077 in line [00964]",
      "_target" : "java.lang.String.format@POLYN907077.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN907077.l",
      "_method" : "---java.lang.String.format@POLYN907077.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN907077.return",
      "_risk" : ""
    }, {
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
    "_id" : "28",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslServer.jsonErrorResponse@POLYN189692.\"%s",
      "_method" : "---java.lang.String.format@POLYN907077 in line [00208]",
      "_target" : "java.lang.String.format@POLYN907077.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN907077.l",
      "_method" : "---java.lang.String.format@POLYN907077.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN907077.return",
      "_risk" : ""
    }, {
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
    "_id" : "29",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "org.apache.kafka.common.security.oauthbearer.internals.OAuthBearerSaslServer.jsonErrorResponse@POLYN189692.\"%s}\"",
      "_method" : "---java.lang.String.format@POLYN907077 in line [00212]",
      "_target" : "java.lang.String.format@POLYN907077.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN907077.l",
      "_method" : "---java.lang.String.format@POLYN907077.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN907077.return",
      "_risk" : ""
    }, {
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
    "_id" : "30",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "org.apache.kafka.controller.QuorumController.Builder.build@POLYN425776.\"Node%d_\"",
      "_method" : "---java.lang.String.format@POLYN907077 in line [00293]",
      "_target" : "java.lang.String.format@POLYN907077.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN907077.l",
      "_method" : "---java.lang.String.format@POLYN907077.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN907077.return",
      "_risk" : ""
    }, {
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
    "_id" : "31",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.agent.AgentClient.Builder.target@POLYN194504.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN907077 in line [00096]",
      "_target" : "java.lang.String.format@POLYN907077.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN907077.l",
      "_method" : "---java.lang.String.format@POLYN907077.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN907077.return",
      "_risk" : ""
    }, {
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
    "_id" : "32",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.agent.WorkerManager.Worker.toString@POLYN242622.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN907077 in line [00314]",
      "_target" : "java.lang.String.format@POLYN907077.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN907077.l",
      "_method" : "---java.lang.String.format@POLYN907077.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN907077.return",
      "_risk" : ""
    }, {
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
    "_id" : "33",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "org.apache.kafka.trogdor.coordinator.CoordinatorClient.Builder.target@POLYN234689.\"%s_%d\"",
      "_method" : "---java.lang.String.format@POLYN907077 in line [00112]",
      "_target" : "java.lang.String.format@POLYN907077.l",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "java.lang.String.format@POLYN907077.l",
      "_method" : "---java.lang.String.format@POLYN907077.dummymethode_00001 in line [00001]",
      "_target" : "java.lang.String.format@POLYN907077.return",
      "_risk" : ""
    }, {
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
    "_id" : "34",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "org.apache.kafka.clients.admin.internals.CoordinatorKey.byTransactionalId@POLYN148129.FindCoordinatorRequest.CoordinatorType.TRANSACTION",
      "_method" : "---org.apache.kafka.clients.admin.internals.CoordinatorKey.byTransactionalId@POLYN148129.dummymethode_00059 in line [00059]",
      "_target" : "org.apache.kafka.clients.admin.internals.CoordinatorKey.byTransactionalId@POLYN148129.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.admin.internals.CoordinatorKey.byTransactionalId@POLYN148129.return",
      "_method" : "---org.apache.kafka.clients.admin.internals.CoordinatorKey.byTransactionalId@POLYN148129 in line [00076]",
      "_target" : "java.util.HashMap.key",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---java.util.HashMap.Node.getKey@POLYN607634.dummymethode_00291 in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN607634.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN607634.return",
      "_method" : "---java.util.HashMap.getKey@POLYN607634 in line [04177]",
      "_target" : "java.lang.Class.createAnnotationData@POLYN1208306.annotationClass",
      "_risk" : "//QC-JAVCWE099[04177] In java.lang.Class.createAnnotationData@POLYN1208306[04177] source data PATHtainted (java.util.HashMap.get) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.lang.Class.createAnnotationData@POLYN1208306.annotationClass",
      "_method" : "---java.util.Map.put@POLYN429794 in line [04186]",
      "_target" : "java.lang.Class.createAnnotationData@POLYN1208306.cibledummy_04186",
      "_risk" : "//QC-JAVCWE099[04186] In java.lang.Class.createAnnotationData@POLYN1208306[04186] target data PATHtainted (java.util.Map.put) RiskOnOutput"
    } ]
  }, {
    "_id" : "35",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "org.apache.kafka.clients.admin.internals.CoordinatorKey.byTransactionalId@POLYN148129.transactionalId",
      "_method" : "---org.apache.kafka.clients.admin.internals.CoordinatorKey.byTransactionalId@POLYN148129.dummymethode_00059 in line [00059]",
      "_target" : "org.apache.kafka.clients.admin.internals.CoordinatorKey.byTransactionalId@POLYN148129.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.clients.admin.internals.CoordinatorKey.byTransactionalId@POLYN148129.return",
      "_method" : "---org.apache.kafka.clients.admin.internals.CoordinatorKey.byTransactionalId@POLYN148129 in line [00076]",
      "_target" : "java.util.HashMap.key",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---java.util.HashMap.Node.getKey@POLYN607634.dummymethode_00291 in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN607634.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN607634.return",
      "_method" : "---java.util.HashMap.getKey@POLYN607634 in line [04177]",
      "_target" : "java.lang.Class.createAnnotationData@POLYN1208306.annotationClass",
      "_risk" : "//QC-JAVCWE099[04177] In java.lang.Class.createAnnotationData@POLYN1208306[04177] source data PATHtainted (java.util.HashMap.get) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.lang.Class.createAnnotationData@POLYN1208306.annotationClass",
      "_method" : "---java.util.Map.put@POLYN429794 in line [04186]",
      "_target" : "java.lang.Class.createAnnotationData@POLYN1208306.cibledummy_04186",
      "_risk" : "//QC-JAVCWE099[04186] In java.lang.Class.createAnnotationData@POLYN1208306[04186] target data PATHtainted (java.util.Map.put) RiskOnOutput"
    } ]
  }, {
    "_id" : "36",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.storeSensorPrefix@POLYN302602.taskId",
      "_method" : "---org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.storeSensorPrefix@POLYN302602.dummymethode_00541 in line [00541]",
      "_target" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.storeSensorPrefix@POLYN302602.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.storeSensorPrefix@POLYN302602.return",
      "_method" : "---org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.storeSensorPrefix@POLYN302602 in line [00506]",
      "_target" : "java.util.HashMap.key",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---java.util.HashMap.Node.getKey@POLYN607634.dummymethode_00291 in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN607634.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN607634.return",
      "_method" : "---java.util.HashMap.getKey@POLYN607634 in line [04177]",
      "_target" : "java.lang.Class.createAnnotationData@POLYN1208306.annotationClass",
      "_risk" : "//QC-JAVCWE099[04177] In java.lang.Class.createAnnotationData@POLYN1208306[04177] source data PATHtainted (java.util.HashMap.get) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.lang.Class.createAnnotationData@POLYN1208306.annotationClass",
      "_method" : "---java.util.Map.put@POLYN429794 in line [04186]",
      "_target" : "java.lang.Class.createAnnotationData@POLYN1208306.cibledummy_04186",
      "_risk" : "//QC-JAVCWE099[04186] In java.lang.Class.createAnnotationData@POLYN1208306[04186] target data PATHtainted (java.util.Map.put) RiskOnOutput"
    } ]
  }, {
    "_id" : "37",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "5",
      "_source" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.storeSensorPrefix@POLYN302602.threadId",
      "_method" : "---org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.storeSensorPrefix@POLYN302602.dummymethode_00541 in line [00541]",
      "_target" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.storeSensorPrefix@POLYN302602.return",
      "_risk" : ""
    }, {
      "_id" : "4",
      "_source" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.storeSensorPrefix@POLYN302602.return",
      "_method" : "---org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.storeSensorPrefix@POLYN302602 in line [00506]",
      "_target" : "java.util.HashMap.key",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "java.util.HashMap.key",
      "_method" : "---java.util.HashMap.Node.getKey@POLYN607634.dummymethode_00291 in line [00291]",
      "_target" : "java.util.HashMap.getKey@POLYN607634.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.util.HashMap.getKey@POLYN607634.return",
      "_method" : "---java.util.HashMap.getKey@POLYN607634 in line [04177]",
      "_target" : "java.lang.Class.createAnnotationData@POLYN1208306.annotationClass",
      "_risk" : "//QC-JAVCWE099[04177] In java.lang.Class.createAnnotationData@POLYN1208306[04177] source data PATHtainted (java.util.HashMap.get) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.lang.Class.createAnnotationData@POLYN1208306.annotationClass",
      "_method" : "---java.util.Map.put@POLYN429794 in line [04186]",
      "_target" : "java.lang.Class.createAnnotationData@POLYN1208306.cibledummy_04186",
      "_risk" : "//QC-JAVCWE099[04186] In java.lang.Class.createAnnotationData@POLYN1208306[04186] target data PATHtainted (java.util.Map.put) RiskOnOutput"
    } ]
  }, {
    "_id" : "38",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.InputStream.read@POLYN246846.0",
      "_method" : "---java.io.InputStream.read@POLYN246846.dummymethode_00168 in line [00168]",
      "_target" : "java.io.InputStream.read@POLYN246846.return",
      "_risk" : "//QC-JAVCWE099[00168] In java.io.InputStream.read@POLYN246846[00168] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.InputStream.read@POLYN246846.return",
      "_method" : "---java.io.InputStream.read@POLYN246846 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN455991.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN455991[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN455991.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN455991.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN455991.currentPosition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN455991.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN246846 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN246846.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN455991[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "39",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.InputStream.read@POLYN246846.-1",
      "_method" : "---java.io.InputStream.read@POLYN246846.dummymethode_00173 in line [00173]",
      "_target" : "java.io.InputStream.read@POLYN246846.return",
      "_risk" : "//QC-JAVCWE099[00173] In java.io.InputStream.read@POLYN246846[00173] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.InputStream.read@POLYN246846.return",
      "_method" : "---java.io.InputStream.read@POLYN246846 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN455991.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN455991[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN455991.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN455991.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN455991.currentPosition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN455991.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN246846 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN246846.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN455991[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "40",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.record.FileLogInputStream.FileChannelRecordBatch.writeTo@POLYN180199.buffer",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN455991 in line [00182]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN455991.destinationBuffer",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN455991.destinationBuffer",
      "_method" : "---java.io.InputStream.read@POLYN246846 in line [01117]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN455991.bytesRead",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN455991[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN455991.bytesRead",
      "_method" : "---org.apache.kafka.common.utils.Utils.readFully@POLYN455991.dummymethode_01118 in line [01118]",
      "_target" : "org.apache.kafka.common.utils.Utils.readFully@POLYN455991.currentPosition",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.utils.Utils.readFully@POLYN455991.currentPosition",
      "_method" : "---java.io.InputStream.read@POLYN246846 in line [01117]",
      "_target" : "java.io.InputStream.read@POLYN246846.off",
      "_risk" : "//QC-JAVCWE099[01117] In org.apache.kafka.common.utils.Utils.readFully@POLYN455991[01117] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "41",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectInputStream.readSerialData@POLYN852914.slotDesc",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN852914.dummymethode_02133 in line [02133]",
      "_target" : "java.io.ObjectInputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[02133] In java.io.ObjectInputStream.readSerialData@POLYN852914[02133] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.curContext",
      "_method" : "---java.io.ObjectInputStream.readExternalData@POLYN850987.dummymethode_02065 in line [02065]",
      "_target" : "java.io.ObjectInputStream.readExternalData@POLYN850987.oldContext",
      "_risk" : "//QC-JAVCWZ099[02065] In java.io.ObjectInputStream.readExternalData@POLYN850987[02065] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readExternalData@POLYN850987.oldContext",
      "_method" : "---java.io.ObjectInputStream.readExternalData@POLYN850987.dummymethode_02094 in line [02094]",
      "_target" : "java.io.ObjectInputStream.curContext",
      "_risk" : "//QC-JAVCWZ099[02094] In java.io.ObjectInputStream.readExternalData@POLYN850987[02094] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.curContext",
      "_method" : "---java.io.ObjectInputStream.defaultReadObject@POLYN791960.dummymethode_00545 in line [00545]",
      "_target" : "java.io.ObjectInputStream.defaultReadObject@POLYN791960.ctx",
      "_risk" : ""
    } ]
  }, {
    "_id" : "42",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.ObjectOutputStream.writeTypeString@POLYN579837.str",
      "_method" : "---java.io.ObjectOutputStream.writeString@POLYN592445 in line [01030]",
      "_target" : "java.io.ObjectOutputStream.writeString@POLYN592445.str",
      "_risk" : "//QC-JAVCWZ099[01030] In java.io.ObjectOutputStream.writeTypeString@POLYN579837[01030] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN592445.str",
      "_method" : "---java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN635762 in line [01309]",
      "_target" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN635762.s",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN635762.s",
      "_method" : "---java.io.ObjectOutputStream.writeBytes@POLYN574399 in line [02190]",
      "_target" : "java.io.ObjectOutputStream.writeBytes@POLYN574399.str",
      "_risk" : "//QC-JAVCWZ099[02190] In java.io.ObjectOutputStream.BlockDataOutputStream.writeLongUTF@POLYN635762[02190] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeBytes@POLYN574399.str",
      "_method" : "---java.io.ObjectOutputStream.writeBytes@POLYN574399 in line [00841]",
      "_target" : "java.io.ObjectOutputStream.writeBytes@POLYN574399.cibledummy_00841",
      "_risk" : "//QC-JAVCWZ099[00841] In java.io.ObjectOutputStream.writeBytes@POLYN574399[00841] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "43",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.PipedOutputStream.write@POLYN173237.len",
      "_method" : "---java.io.PipedInputStream.receive@POLYN221377 in line [00149]",
      "_target" : "java.io.PipedInputStream.receive@POLYN221377.len",
      "_risk" : "//QC-JAVCWZ099[00149] In java.io.PipedOutputStream.write@POLYN173237[00149] source data PATHtainted (java.io.PipedInputStream.receive) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PipedInputStream.receive@POLYN221377.len",
      "_method" : "---java.io.PipedInputStream.receive@POLYN221377.dummymethode_00228 in line [00228]",
      "_target" : "java.io.PipedInputStream.receive@POLYN221377.bytesToTransfer",
      "_risk" : "//QC-JAVCWZ099[00228] In java.io.PipedInputStream.receive@POLYN221377[00228] source data PATHtainted (java.io.PipedInputStream.receive) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.receive@POLYN221377.bytesToTransfer",
      "_method" : "---java.io.PipedInputStream.receive@POLYN221377.dummymethode_00244 in line [00244]",
      "_target" : "java.io.PipedInputStream.receive@POLYN221377.nextTransferAmount",
      "_risk" : "//QC-JAVCWZ099[00244] In java.io.PipedInputStream.receive@POLYN221377[00244] source data PATHtainted (java.io.PipedInputStream.receive) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.receive@POLYN221377.nextTransferAmount",
      "_method" : "---java.io.PipedInputStream.receive@POLYN221377.dummymethode_00249 in line [00249]",
      "_target" : "java.io.PipedInputStream.in",
      "_risk" : "//QC-JAVCWZ099[00249] In java.io.PipedInputStream.receive@POLYN221377[00249] source data PATHtainted (java.io.PipedInputStream.receive) RiskOnInput"
    } ]
  }, {
    "_id" : "44",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "intro+targetDirectory.name+\"_\"",
      "_method" : "---org.apache.kafka.shell.LsCommandHandler.printTargets@POLYN188634.dummymethode_00145 in line [00145]",
      "_target" : "org.apache.kafka.shell.LsCommandHandler.printTargets@POLYN188634.intro",
      "_risk" : ""
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.shell.LsCommandHandler.printTargets@POLYN188634.intro",
      "_method" : "---org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN189983 in line [00150]",
      "_target" : "org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN189983.intro",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN189983.intro",
      "_method" : "---java.io.PrintWriter.println@POLYN353871 in line [00162]",
      "_target" : "java.io.PrintWriter.println@POLYN353871.x",
      "_risk" : "//QC-JAVCWE099[00162] In org.apache.kafka.shell.LsCommandHandler.printEntries@POLYN189983[00162] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.println@POLYN353871.x",
      "_method" : "---java.io.PrintWriter.print@POLYN349351 in line [00739]",
      "_target" : "java.io.PrintWriter.println@POLYN353871.cibledummy_00739",
      "_risk" : "//QC-JAVCWE099[00739] In java.io.PrintWriter.println@POLYN353871[00739] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "45",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.io.PrintStream.println@POLYN370107.x",
      "_method" : "---java.io.PrintStream.print@POLYN365652 in line [00792]",
      "_target" : "java.io.PrintStream.print@POLYN365652.s",
      "_risk" : "//QC-JAVCWZ099[00792] In java.io.PrintStream.println@POLYN370107[00792] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "3",
      "_source" : "java.io.PrintStream.print@POLYN365652.s",
      "_method" : "---java.io.PrintStream.write@POLYN360007 in line [00653]",
      "_target" : "java.io.PrintStream.write@POLYN360007.buf",
      "_risk" : "//QC-JAVCWZ099[00653] In java.io.PrintStream.print@POLYN365652[00653] target data PATHtainted (java.io.PrintStream.write) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN360007.buf",
      "_method" : "---java.io.Writer.write@POLYN191731 in line [00503]",
      "_target" : "java.io.Writer.write@POLYN191731.cbuf",
      "_risk" : "//QC-JAVCWZ099[00503] In java.io.PrintStream.write@POLYN360007[00503] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.Writer.write@POLYN191731.cbuf",
      "_method" : "---java.io.Writer.write@POLYN191731.dummymethode_00127 in line [00127]",
      "_target" : "java.io.Writer.write@POLYN191731.cibledummy_00127",
      "_risk" : "//QC-JAVCWZ099[00127] In java.io.Writer.write@POLYN191731[00127] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "46",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN300244.netReadBuffer",
      "_method" : "---java.io.InputStream.read@POLYN243687 in line [00226]",
      "_target" : "java.io.InputStream.read@POLYN243687.b",
      "_risk" : "//QC-JAVCWE099[00226] In org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN300244[00226] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "java.io.InputStream.read@POLYN243687.b",
      "_method" : "---java.io.InputStream.read@POLYN243687.dummymethode_00102 in line [00102]",
      "_target" : "java.io.InputStream.read@POLYN243687.return",
      "_risk" : "//QC-JAVCWE099[00102] In java.io.InputStream.read@POLYN243687[00102] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.InputStream.read@POLYN243687.return",
      "_method" : "---java.io.InputStream.read@POLYN243687 in line [00226]",
      "_target" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN300244.return",
      "_risk" : "//QC-JAVCWE099[00226] In org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN300244[00226] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN300244.return",
      "_method" : "---org.apache.kafka.common.network.SslTransportLayer.readFromSocketChannel@POLYN300244 in line [00289]",
      "_target" : "org.apache.kafka.common.network.SslTransportLayer.handshake@POLYN301926.read",
      "_risk" : ""
    } ]
  }, {
    "_id" : "47",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "java.util.HashMap.get@POLYN618616.return",
      "_method" : "---java.util.HashMap.get@POLYN618616 in line [00217]",
      "_target" : "org.apache.kafka.common.utils.Bytes.bytes",
      "_risk" : "//QC-JAVCWE099[00217] In org.apache.kafka.streams.state.internals.StoreQueryUtils[00217] source data PATHtainted (java.util.HashMap.get) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.apache.kafka.common.utils.Bytes.bytes",
      "_method" : "---org.apache.kafka.common.utils.Bytes.get@POLYN170357.dummymethode_00060 in line [00060]",
      "_target" : "org.apache.kafka.common.utils.Bytes.get@POLYN170357.return",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.Bytes.get@POLYN170357.return",
      "_method" : "---org.apache.kafka.common.utils.Bytes.get@POLYN170357 in line [00071]",
      "_target" : "org.apache.kafka.streams.processor.internals.GlobalStateUpdateTask.initialize@POLYN164050.sourceTopic",
      "_risk" : ""
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.streams.processor.internals.GlobalStateUpdateTask.initialize@POLYN164050.sourceTopic",
      "_method" : "---java.util.Map.put@POLYN429794 in line [00073]",
      "_target" : "org.apache.kafka.streams.processor.internals.GlobalStateUpdateTask.initialize@POLYN164050.cibledummy_00073",
      "_risk" : "//QC-JAVCWE099[00073] In org.apache.kafka.streams.processor.internals.GlobalStateUpdateTask.initialize@POLYN164050[00073] target data PATHtainted (java.util.Map.put) RiskOnOutput"
    } ]
  }, {
    "_id" : "48",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.accepted@POLYN240863.HttpStatus.ACCEPTED",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN238662 in line [00273]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN238662.status",
      "_risk" : "//QC-JAVCWE080[00273] In org.springframework.http.ResponseEntity.accepted@POLYN240863[00273] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN238662.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN238662.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN238662.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN238662[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN238662.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN238662 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN239267.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN239267[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN239267.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN239267 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "49",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.badRequest@POLYN241334.HttpStatus.BAD_REQUEST",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN238662 in line [00291]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN238662.status",
      "_risk" : "//QC-JAVCWE080[00291] In org.springframework.http.ResponseEntity.badRequest@POLYN241334[00291] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN238662.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN238662.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN238662.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN238662[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN238662.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN238662 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN239267.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN239267[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN239267.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN239267 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "50",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.noContent@POLYN241106.HttpStatus.NO_CONTENT",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN238662 in line [00282]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN238662.status",
      "_risk" : "//QC-JAVCWE080[00282] In org.springframework.http.ResponseEntity.noContent@POLYN241106[00282] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN238662.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN238662.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN238662.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN238662[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN238662.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN238662 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN239267.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN239267[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN239267.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN239267 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "51",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.notFound@POLYN241577.HttpStatus.NOT_FOUND",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN238662 in line [00300]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN238662.status",
      "_risk" : "//QC-JAVCWE080[00300] In org.springframework.http.ResponseEntity.notFound@POLYN241577[00300] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN238662.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN238662.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN238662.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN238662[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN238662.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN238662 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN239267.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN239267[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN239267.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN239267 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "52",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "4",
      "_source" : "org.springframework.http.ResponseEntity.unprocessableEntity@POLYN241811.HttpStatus.UNPROCESSABLE_ENTITY",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN238662 in line [00310]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN238662.status",
      "_risk" : "//QC-JAVCWE080[00310] In org.springframework.http.ResponseEntity.unprocessableEntity@POLYN241811[00310] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN238662.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN238662.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN238662.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN238662[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN238662.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN238662 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.ok@POLYN239267.return",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN239267[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN239267.return",
      "_method" : "---org.springframework.http.ResponseEntity.ok@POLYN239267 in line [00240]",
      "_target" : "org.springframework.http.ResponseEntity.return",
      "_risk" : "//QC-JAVCWE080[00240] In org.springframework.http.ResponseEntity[00240] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "53",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read1@POLYN234351.cbuf",
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
      "_method" : "---java.io.BufferedReader.read@POLYN237557.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN237557.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN237557[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "54",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read1@POLYN234351.len",
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
      "_method" : "---java.io.BufferedReader.read@POLYN237557.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN237557.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN237557[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "55",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read1@POLYN234351.off",
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
      "_method" : "---java.io.BufferedReader.read@POLYN237557.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN237557.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN237557[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "56",
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
      "_method" : "---java.io.BufferedReader.read@POLYN237557.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN237557.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN237557[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "57",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read1@POLYN234351.-1",
      "_method" : "---java.io.BufferedReader.read1@POLYN234351.dummymethode_00214 in line [00214]",
      "_target" : "java.io.BufferedReader.read1@POLYN234351.return",
      "_risk" : "//QC-JAVCWZ099[00214] In java.io.BufferedReader.read1@POLYN234351[00214] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN234351.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN234351 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN237557.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN237557[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read@POLYN237557.n",
      "_method" : "---java.io.BufferedReader.read@POLYN237557.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN237557.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN237557[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "58",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.io.BufferedReader.read1@POLYN234351.n",
      "_method" : "---java.io.BufferedReader.read1@POLYN234351.dummymethode_00228 in line [00228]",
      "_target" : "java.io.BufferedReader.read1@POLYN234351.return",
      "_risk" : "//QC-JAVCWZ099[00228] In java.io.BufferedReader.read1@POLYN234351[00228] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.BufferedReader.read1@POLYN234351.return",
      "_method" : "---java.io.BufferedReader.read1@POLYN234351 in line [00286]",
      "_target" : "java.io.BufferedReader.read@POLYN237557.n",
      "_risk" : "//QC-JAVCWZ099[00286] In java.io.BufferedReader.read@POLYN237557[00286] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.BufferedReader.read@POLYN237557.n",
      "_method" : "---java.io.BufferedReader.read@POLYN237557.dummymethode_00287 in line [00287]",
      "_target" : "java.io.BufferedReader.read@POLYN237557.return",
      "_risk" : "//QC-JAVCWZ099[00287] In java.io.BufferedReader.read@POLYN237557[00287] source data PATHtainted (java.io.BufferedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "59",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN861358.return",
      "_method" : "---java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN861358 in line [00591]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN793403.getField",
      "_risk" : ""
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN793403.getField",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN793403.dummymethode_00603 in line [00603]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN793403.return",
      "_risk" : "//QC-JAVCWZ099[00603] In java.io.ObjectInputStream.readFields@POLYN793403[00603] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN793403.return",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN793403 in line [00592]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN793403.cibledummy_00592",
      "_risk" : "//QC-JAVCWZ099[00592] In java.io.ObjectInputStream.readFields@POLYN793403[00592] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "60",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN793403.curDesc",
      "_method" : "---java.io.ObjectInputStream.GetFieldImpl.GetFieldImpl@POLYN861358 in line [00591]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN793403.getField",
      "_risk" : "//QC-JAVCWZ099[00591] In java.io.ObjectInputStream.readFields@POLYN793403[00591] source data PATHtainted (java.io.ObjectInputStream.read)"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN793403.getField",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN793403.dummymethode_00603 in line [00603]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN793403.return",
      "_risk" : "//QC-JAVCWZ099[00603] In java.io.ObjectInputStream.readFields@POLYN793403[00603] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readFields@POLYN793403.return",
      "_method" : "---java.io.ObjectInputStream.readFields@POLYN793403 in line [00592]",
      "_target" : "java.io.ObjectInputStream.readFields@POLYN793403.cibledummy_00592",
      "_risk" : "//QC-JAVCWZ099[00592] In java.io.ObjectInputStream.readFields@POLYN793403[00592] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "61",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.io.ObjectInputStream.readClassDescriptor@POLYN804613.desc",
      "_method" : "---java.io.ObjectInputStream.readClassDescriptor@POLYN804613.dummymethode_00883 in line [00883]",
      "_target" : "java.io.ObjectInputStream.readClassDescriptor@POLYN804613.return",
      "_risk" : "//QC-JAVCWZ099[00883] In java.io.ObjectInputStream.readClassDescriptor@POLYN804613[00883] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readClassDescriptor@POLYN804613.return",
      "_method" : "---java.io.ObjectInputStream.readClassDescriptor@POLYN804613 in line [01815]",
      "_target" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN837943.readDesc",
      "_risk" : "//QC-JAVCWZ099[01815] In java.io.ObjectInputStream.readNonProxyDesc@POLYN837943[01815] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN837943.readDesc",
      "_method" : "---java.io.ObjectInputStream.readNonProxyDesc@POLYN837943.dummymethode_01843 in line [01843]",
      "_target" : "java.io.ObjectInputStream.readNonProxyDesc@POLYN837943.cibledummy_01843",
      "_risk" : "//QC-JAVCWZ099[01843] In java.io.ObjectInputStream.readNonProxyDesc@POLYN837943[01843] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "62",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.io.PipedInputStream.read@POLYN227843.(buffer.length-out)",
      "_method" : "---java.io.PipedInputStream.read@POLYN227843.dummymethode_00388 in line [00388]",
      "_target" : "java.io.PipedInputStream.read@POLYN227843.available",
      "_risk" : "//QC-JAVCWZ099[00388] In java.io.PipedInputStream.read@POLYN227843[00388] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN227843.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN227843.dummymethode_00399 in line [00399]",
      "_target" : "java.io.PipedInputStream.read@POLYN227843.rlen",
      "_risk" : "//QC-JAVCWZ099[00399] In java.io.PipedInputStream.read@POLYN227843[00399] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN227843.rlen",
      "_method" : "---java.io.PipedInputStream.read@POLYN227843.dummymethode_00410 in line [00410]",
      "_target" : "java.io.PipedInputStream.read@POLYN227843.return",
      "_risk" : "//QC-JAVCWZ099[00410] In java.io.PipedInputStream.read@POLYN227843[00410] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "63",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.io.PipedInputStream.read@POLYN227843.(in-out)",
      "_method" : "---java.io.PipedInputStream.read@POLYN227843.dummymethode_00388 in line [00388]",
      "_target" : "java.io.PipedInputStream.read@POLYN227843.available",
      "_risk" : "//QC-JAVCWZ099[00388] In java.io.PipedInputStream.read@POLYN227843[00388] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN227843.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN227843.dummymethode_00399 in line [00399]",
      "_target" : "java.io.PipedInputStream.read@POLYN227843.rlen",
      "_risk" : "//QC-JAVCWZ099[00399] In java.io.PipedInputStream.read@POLYN227843[00399] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN227843.rlen",
      "_method" : "---java.io.PipedInputStream.read@POLYN227843.dummymethode_00410 in line [00410]",
      "_target" : "java.io.PipedInputStream.read@POLYN227843.return",
      "_risk" : "//QC-JAVCWZ099[00410] In java.io.PipedInputStream.read@POLYN227843[00410] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "64",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "buffer.length-out",
      "_method" : "---java.io.PipedInputStream.read@POLYN227843.dummymethode_00390 in line [00390]",
      "_target" : "java.io.PipedInputStream.read@POLYN227843.available",
      "_risk" : "//QC-JAVCWE099[00390] In java.io.PipedInputStream.read@POLYN227843[00390] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN227843.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN227843.dummymethode_00399 in line [00399]",
      "_target" : "java.io.PipedInputStream.read@POLYN227843.rlen",
      "_risk" : "//QC-JAVCWZ099[00399] In java.io.PipedInputStream.read@POLYN227843[00399] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN227843.rlen",
      "_method" : "---java.io.PipedInputStream.read@POLYN227843.dummymethode_00410 in line [00410]",
      "_target" : "java.io.PipedInputStream.read@POLYN227843.return",
      "_risk" : "//QC-JAVCWZ099[00410] In java.io.PipedInputStream.read@POLYN227843[00410] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "65",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "len-1",
      "_method" : "---java.io.PipedInputStream.read@POLYN227843.dummymethode_00395 in line [00395]",
      "_target" : "java.io.PipedInputStream.read@POLYN227843.available",
      "_risk" : "//QC-JAVCWE099[00395] In java.io.PipedInputStream.read@POLYN227843[00395] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN227843.available",
      "_method" : "---java.io.PipedInputStream.read@POLYN227843.dummymethode_00399 in line [00399]",
      "_target" : "java.io.PipedInputStream.read@POLYN227843.rlen",
      "_risk" : "//QC-JAVCWZ099[00399] In java.io.PipedInputStream.read@POLYN227843[00399] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN227843.rlen",
      "_method" : "---java.io.PipedInputStream.read@POLYN227843.dummymethode_00410 in line [00410]",
      "_target" : "java.io.PipedInputStream.read@POLYN227843.return",
      "_risk" : "//QC-JAVCWZ099[00410] In java.io.PipedInputStream.read@POLYN227843[00410] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "66",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.io.PrintWriter.println@POLYN353411.x",
      "_method" : "---java.io.PrintWriter.print@POLYN348887 in line [00725]",
      "_target" : "java.io.PrintWriter.print@POLYN348887.s",
      "_risk" : "//QC-JAVCWZ099[00725] In java.io.PrintWriter.println@POLYN353411[00725] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.print@POLYN348887.s",
      "_method" : "---java.io.PrintWriter.write@POLYN343860 in line [00587]",
      "_target" : "java.io.PrintWriter.write@POLYN343860.buf",
      "_risk" : "//QC-JAVCWZ099[00587] In java.io.PrintWriter.print@POLYN348887[00587] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintWriter.write@POLYN343860.buf",
      "_method" : "---java.io.PrintWriter.write@POLYN343860.dummymethode_00443 in line [00443]",
      "_target" : "java.io.PrintWriter.write@POLYN343860.cibledummy_00443",
      "_risk" : "//QC-JAVCWZ099[00443] In java.io.PrintWriter.write@POLYN343860[00443] target data PATHtainted (java.io.PrintWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "67",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.io.Reader.read@POLYN183526.-1",
      "_method" : "---java.io.Reader.read@POLYN183526.dummymethode_00122 in line [00122]",
      "_target" : "java.io.Reader.read@POLYN183526.return",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.Reader.read@POLYN183526[00122] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "java.io.Reader.read@POLYN183526.return",
      "_method" : "---java.io.Reader.read@POLYN183526 in line [00100]",
      "_target" : "java.io.Reader.read@POLYN182534.n",
      "_risk" : "//QC-JAVCWZ099[00100] In java.io.Reader.read@POLYN182534[00100] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.Reader.read@POLYN182534.n",
      "_method" : "---java.io.Reader.read@POLYN182534.dummymethode_00102 in line [00102]",
      "_target" : "java.io.Reader.read@POLYN182534.cibledummy_00102",
      "_risk" : "//QC-JAVCWZ099[00102] In java.io.Reader.read@POLYN182534[00102] source data PATHtainted (java.io.Reader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "68",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.net.ServerSocket.accept@POLYN318666.(SocketImpl)null",
      "_method" : "---java.net.ServerSocket.accept@POLYN318666.dummymethode_00468 in line [00468]",
      "_target" : "java.net.ServerSocket.accept@POLYN318666.s",
      "_risk" : "//QC-JAVCWZ099[00468] In java.net.ServerSocket.accept@POLYN318666[00468] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.accept@POLYN318666.s",
      "_method" : "---java.net.ServerSocket.accept@POLYN318666.dummymethode_00470 in line [00470]",
      "_target" : "java.net.ServerSocket.accept@POLYN318666.return",
      "_risk" : "//QC-JAVCWZ099[00470] In java.net.ServerSocket.accept@POLYN318666[00470] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.net.ServerSocket.accept@POLYN318666.return",
      "_method" : "---java.net.ServerSocket.accept@POLYN318666 in line [00501]",
      "_target" : "java.net.ServerSocket.implAccept@POLYN319610.cibledummy_00501",
      "_risk" : "//QC-JAVCWZ099[00501] In java.net.ServerSocket.implAccept@POLYN319610[00501] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "69",
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
      "_risk" : "//QC-JAVCWE099[00092] In org.apache.kafka.streams.processor.internals.ClientUtils.consumerMetrics@POLYN178674[00092] target data PATHtainted (java.util.HashMap.put) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.putAll@POLYN632856.m",
      "_method" : "---java.util.HashMap.putMapEntries@POLYN616071 in line [00782]",
      "_target" : "java.util.HashMap.putMapEntries@POLYN616071.m",
      "_risk" : "//QC-JAVCWE099[00782] In java.util.HashMap.putAll@POLYN632856[00782] target data PATHtainted (java.util.HashMap.put) RiskOnOutput"
    } ]
  }, {
    "_id" : "70",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "java.util.concurrent.ConcurrentHashMap.MapEntry.setValue@POLYN1612139.key",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.put@POLYN1462649 in line [03497]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.put@POLYN1462649.key",
      "_risk" : "//QC-JAVCWZ099[03497] In java.util.concurrent.ConcurrentHashMap.MapEntry.setValue@POLYN1612139[03497] target data PATHtainted (java.util.concurrent.ConcurrentHashMap.put) RiskOnOutput"
    }, {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.put@POLYN1462649.key",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859 in line [01000]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859.key",
      "_risk" : "//QC-JAVCWZ099[01000] In java.util.concurrent.ConcurrentHashMap.put@POLYN1462649[01000] target data PATHtainted (java.util.concurrent.ConcurrentHashMap.put) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859.key",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859.dummymethode_01037 in line [01037]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859.pred.next",
      "_risk" : "//QC-JAVCWZ099[01037] In java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859[01037] target data PATHtainted (java.util.concurrent.ConcurrentHashMap.put) RiskOnOutput"
    } ]
  }, {
    "_id" : "71",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "3",
      "_source" : "org.springframework.http.ResponseEntity.ok@POLYN239267.HttpStatus.OK",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN238662 in line [00230]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN238662.status",
      "_risk" : "//QC-JAVCWE080[00230] In org.springframework.http.ResponseEntity.ok@POLYN239267[00230] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN238662.status",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN238662.dummymethode_00211 in line [00211]",
      "_target" : "org.springframework.http.ResponseEntity.status@POLYN238662.return",
      "_risk" : "//QC-JAVCWE080[00211] In org.springframework.http.ResponseEntity.status@POLYN238662[00211] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.status@POLYN238662.return",
      "_method" : "---org.springframework.http.ResponseEntity.status@POLYN238662 in line [00273]",
      "_target" : "org.springframework.http.ResponseEntity.accepted@POLYN240863.return",
      "_risk" : "//QC-JAVCWE080[00273] In org.springframework.http.ResponseEntity.accepted@POLYN240863[00273] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "72",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "0",
      "_method" : "---java.io.BufferedInputStream.read@POLYN245332.dummymethode_00343 in line [00343]",
      "_target" : "java.io.BufferedInputStream.read@POLYN245332.n",
      "_risk" : "//QC-JAVCWE099[00343] In java.io.BufferedInputStream.read@POLYN245332[00343] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.BufferedInputStream.read@POLYN245332.n",
      "_method" : "---java.io.BufferedInputStream.read@POLYN245332.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedInputStream.read@POLYN245332.return",
      "_risk" : "//QC-JAVCWE099[00350] In java.io.BufferedInputStream.read@POLYN245332[00350] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "73",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.BufferedInputStream.read@POLYN245332.nread",
      "_method" : "---java.io.BufferedInputStream.read@POLYN245332.dummymethode_00348 in line [00348]",
      "_target" : "java.io.BufferedInputStream.read@POLYN245332.n",
      "_risk" : "//QC-JAVCWZ099[00348] In java.io.BufferedInputStream.read@POLYN245332[00348] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.BufferedInputStream.read@POLYN245332.n",
      "_method" : "---java.io.BufferedInputStream.read@POLYN245332.dummymethode_00350 in line [00350]",
      "_target" : "java.io.BufferedInputStream.read@POLYN245332.return",
      "_risk" : "//QC-JAVCWZ099[00350] In java.io.BufferedInputStream.read@POLYN245332[00350] source data PATHtainted (java.io.BufferedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "74",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN160134.count",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN161430 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN161430.len",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN160134[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN161430.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN161430.dummymethode_00129 in line [00129]",
      "_target" : "java.io.BufferedOutputStream.count",
      "_risk" : "//QC-JAVCWZ099[00129] In java.io.BufferedOutputStream.write@POLYN161430[00129] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "75",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN359221.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN161430 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN161430.len",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN359221[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN161430.len",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN161430.dummymethode_00129 in line [00129]",
      "_target" : "java.io.BufferedOutputStream.count",
      "_risk" : "//QC-JAVCWZ099[00129] In java.io.BufferedOutputStream.write@POLYN161430[00129] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "76",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN160134.buf",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN161430 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN161430.b",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN160134[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN161430.b",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN161430 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN161430.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN161430[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "77",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN359221.buf",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN161430 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN161430.b",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN359221[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN161430.b",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN161430 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN161430.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN161430[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "78",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.BufferedOutputStream.flushBuffer@POLYN160134.0",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN161430 in line [00082]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN161430.off",
      "_risk" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN160134[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN161430.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN161430 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN161430.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN161430[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "79",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintStream.write@POLYN359221.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN161430 in line [00480]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN161430.off",
      "_risk" : "//QC-JAVCWZ099[00480] In java.io.PrintStream.write@POLYN359221[00480] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.BufferedOutputStream.write@POLYN161430.off",
      "_method" : "---java.io.BufferedOutputStream.write@POLYN161430 in line [00122]",
      "_target" : "java.io.BufferedOutputStream.write@POLYN161430.cibledummy_00122",
      "_risk" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN161430[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "80",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.Writer.writeBuffer",
      "_method" : "---java.io.Writer.write@POLYN192989.dummymethode_00187 in line [00187]",
      "_target" : "java.io.Writer.write@POLYN192989.cbuf",
      "_risk" : "//QC-JAVCWZ099[00187] In java.io.Writer.write@POLYN192989[00187] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.Writer.write@POLYN192989.cbuf",
      "_method" : "---java.io.Writer.write@POLYN192155 in line [00192]",
      "_target" : "java.io.Writer.write@POLYN192155.cbuf",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.Writer.write@POLYN192989[00192] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "81",
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
    "_id" : "82",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN183181.off",
      "_method" : "---java.io.BufferedWriter.write@POLYN183181.dummymethode_00192 in line [00192]",
      "_target" : "java.io.BufferedWriter.write@POLYN183181.b",
      "_risk" : "//QC-JAVCWZ099[00192] In java.io.BufferedWriter.write@POLYN183181[00192] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN183181.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN183181.dummymethode_00195 in line [00195]",
      "_target" : "java.io.BufferedWriter.write@POLYN183181.cibledummy_00195",
      "_risk" : "//QC-JAVCWZ099[00195] In java.io.BufferedWriter.write@POLYN183181[00195] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "83",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN183181.d",
      "_method" : "---java.io.BufferedWriter.write@POLYN183181.dummymethode_00196 in line [00196]",
      "_target" : "java.io.BufferedWriter.write@POLYN183181.b",
      "_risk" : "//QC-JAVCWZ099[00196] In java.io.BufferedWriter.write@POLYN183181[00196] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN183181.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN183181.dummymethode_00195 in line [00195]",
      "_target" : "java.io.BufferedWriter.write@POLYN183181.cibledummy_00195",
      "_risk" : "//QC-JAVCWZ099[00195] In java.io.BufferedWriter.write@POLYN183181[00195] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "84",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN185515.off",
      "_method" : "---java.io.BufferedWriter.write@POLYN185515.dummymethode_00223 in line [00223]",
      "_target" : "java.io.BufferedWriter.write@POLYN185515.b",
      "_risk" : "//QC-JAVCWZ099[00223] In java.io.BufferedWriter.write@POLYN185515[00223] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN185515.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN185515.dummymethode_00226 in line [00226]",
      "_target" : "java.io.BufferedWriter.write@POLYN185515.cibledummy_00226",
      "_risk" : "//QC-JAVCWZ099[00226] In java.io.BufferedWriter.write@POLYN185515[00226] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "85",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.BufferedWriter.write@POLYN185515.d",
      "_method" : "---java.io.BufferedWriter.write@POLYN185515.dummymethode_00227 in line [00227]",
      "_target" : "java.io.BufferedWriter.write@POLYN185515.b",
      "_risk" : "//QC-JAVCWZ099[00227] In java.io.BufferedWriter.write@POLYN185515[00227] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.BufferedWriter.write@POLYN185515.b",
      "_method" : "---java.io.BufferedWriter.write@POLYN185515.dummymethode_00226 in line [00226]",
      "_target" : "java.io.BufferedWriter.write@POLYN185515.cibledummy_00226",
      "_risk" : "//QC-JAVCWZ099[00226] In java.io.BufferedWriter.write@POLYN185515[00226] target data PATHtainted (java.io.BufferedWriter.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "86",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "null",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN845523.dummymethode_01964 in line [01964]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN845523.result",
      "_risk" : "//QC-JAVCWE099[01964] In java.io.ObjectInputStream.readEnum@POLYN845523[01964] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN845523.result",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN845523.dummymethode_01983 in line [01983]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN845523.return",
      "_risk" : "//QC-JAVCWE099[01983] In java.io.ObjectInputStream.readEnum@POLYN845523[01983] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "87",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN845523.en",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN845523.dummymethode_01970 in line [01970]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN845523.result",
      "_risk" : "//QC-JAVCWZ099[01970] In java.io.ObjectInputStream.readEnum@POLYN845523[01970] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readEnum@POLYN845523.result",
      "_method" : "---java.io.ObjectInputStream.readEnum@POLYN845523.dummymethode_01983 in line [01983]",
      "_target" : "java.io.ObjectInputStream.readEnum@POLYN845523.return",
      "_risk" : "//QC-JAVCWZ099[01983] In java.io.ObjectInputStream.readEnum@POLYN845523[01983] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "88",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN835113.\"null class\"",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN835113.dummymethode_01759 in line [01759]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN835113.resolveEx",
      "_risk" : "//QC-JAVCWZ099[01759] In java.io.ObjectInputStream.readProxyDesc@POLYN835113[01759] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN835113.resolveEx",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN835113.dummymethode_01786 in line [01786]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN835113.cibledummy_01786",
      "_risk" : "//QC-JAVCWZ099[01786] In java.io.ObjectInputStream.readProxyDesc@POLYN835113[01786] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "89",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN835113.ex",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN835113.dummymethode_01775 in line [01775]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN835113.resolveEx",
      "_risk" : "//QC-JAVCWZ099[01775] In java.io.ObjectInputStream.readProxyDesc@POLYN835113[01775] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readProxyDesc@POLYN835113.resolveEx",
      "_method" : "---java.io.ObjectInputStream.readProxyDesc@POLYN835113.dummymethode_01786 in line [01786]",
      "_target" : "java.io.ObjectInputStream.readProxyDesc@POLYN835113.cibledummy_01786",
      "_risk" : "//QC-JAVCWZ099[01786] In java.io.ObjectInputStream.readProxyDesc@POLYN835113[01786] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "90",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectInputStream.readOrdinaryObject@POLYN847773.obj",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN852914 in line [02027]",
      "_target" : "java.io.ObjectInputStream.readSerialData@POLYN852914.obj",
      "_risk" : "//QC-JAVCWZ099[02027] In java.io.ObjectInputStream.readOrdinaryObject@POLYN847773[02027] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectInputStream.readSerialData@POLYN852914.obj",
      "_method" : "---java.io.ObjectInputStream.readSerialData@POLYN852914.dummymethode_02136 in line [02136]",
      "_target" : "java.io.ObjectInputStream.readSerialData@POLYN852914.cibledummy_02136",
      "_risk" : "//QC-JAVCWZ099[02136] In java.io.ObjectInputStream.readSerialData@POLYN852914[02136] source data PATHtainted (java.io.ObjectInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "91",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "objs.length",
      "_method" : "---java.io.ObjectOutputStream.writeArray@POLYN593220.dummymethode_01364 in line [01364]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN593220.len",
      "_risk" : "//QC-JAVCWE099[01364] In java.io.ObjectOutputStream.writeArray@POLYN593220[01364] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593220.len",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [01365]",
      "_target" : "java.io.ObjectOutputStream.writeArray@POLYN593220.cibledummy_01365",
      "_risk" : "//QC-JAVCWE099[01365] In java.io.ObjectOutputStream.writeArray@POLYN593220[01365] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "92",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.reset@POLYN563991.TC_RESET",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [00501]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_risk" : "//QC-JAVCWZ099[00501] In java.io.ObjectOutputStream.reset@POLYN563991[00501] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN572427[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "93",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593220.TC_ARRAY",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [01321]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_risk" : "//QC-JAVCWZ099[01321] In java.io.ObjectOutputStream.writeArray@POLYN593220[01321] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN572427[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "94",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeClass@POLYN588206.TC_CLASS",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [01212]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_risk" : "//QC-JAVCWZ099[01212] In java.io.ObjectOutputStream.writeClass@POLYN588206[01212] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN572427[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "95",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeEnum@POLYN598120.TC_ENUM",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [01401]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_risk" : "//QC-JAVCWZ099[01401] In java.io.ObjectOutputStream.writeEnum@POLYN598120[01401] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN572427[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "96",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeExternalData@POLYN600400.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [01461]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_risk" : "//QC-JAVCWZ099[01461] In java.io.ObjectOutputStream.writeExternalData@POLYN600400[01461] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN572427[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "97",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN605843.TC_EXCEPTION",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [01576]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_risk" : "//QC-JAVCWZ099[01576] In java.io.ObjectOutputStream.writeFatalException@POLYN605843[01576] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN572427[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "98",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeHandle@POLYN587923.TC_REFERENCE",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [01204]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_risk" : "//QC-JAVCWZ099[01204] In java.io.ObjectOutputStream.writeHandle@POLYN587923[01204] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN572427[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "99",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN591197.TC_CLASSDESC",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [01275]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_risk" : "//QC-JAVCWZ099[01275] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN591197[01275] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN572427[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "100",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNonProxyDesc@POLYN591197.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [01292]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_risk" : "//QC-JAVCWZ099[01292] In java.io.ObjectOutputStream.writeNonProxyDesc@POLYN591197[01292] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN572427[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "101",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeNull@POLYN587758.TC_NULL",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [01197]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_risk" : "//QC-JAVCWZ099[01197] In java.io.ObjectOutputStream.writeNull@POLYN587758[01197] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN572427[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "102",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960.TC_OBJECT",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [01426]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_risk" : "//QC-JAVCWZ099[01426] In java.io.ObjectOutputStream.writeOrdinaryObject@POLYN598960[01426] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN572427[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "103",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN589695.TC_PROXYCLASSDESC",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [01247]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_risk" : "//QC-JAVCWZ099[01247] In java.io.ObjectOutputStream.writeProxyDesc@POLYN589695[01247] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN572427[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "104",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN589695.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [01263]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_risk" : "//QC-JAVCWZ099[01263] In java.io.ObjectOutputStream.writeProxyDesc@POLYN589695[01263] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN572427[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "105",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeSerialData@POLYN601592.TC_ENDBLOCKDATA",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [01498]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_risk" : "//QC-JAVCWZ099[01498] In java.io.ObjectOutputStream.writeSerialData@POLYN601592[01498] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN572427[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "106",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN592445.TC_STRING",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [01305]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_risk" : "//QC-JAVCWZ099[01305] In java.io.ObjectOutputStream.writeString@POLYN592445[01305] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN572427[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "107",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeString@POLYN592445.TC_LONGSTRING",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [01308]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_risk" : "//QC-JAVCWZ099[01308] In java.io.ObjectOutputStream.writeString@POLYN592445[01308] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeByte@POLYN572427.val",
      "_method" : "---java.io.ObjectOutputStream.writeByte@POLYN572427 in line [00764]",
      "_target" : "java.io.ObjectOutputStream.writeByte@POLYN572427.cibledummy_00764",
      "_risk" : "//QC-JAVCWZ099[00764] In java.io.ObjectOutputStream.writeByte@POLYN572427[00764] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "108",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeChar@POLYN620675.v",
      "_method" : "---java.io.ObjectOutputStream.writeChar@POLYN572987 in line [01925]",
      "_target" : "java.io.ObjectOutputStream.writeChar@POLYN572987.val",
      "_risk" : "//QC-JAVCWZ099[01925] In java.io.ObjectOutputStream.BlockDataOutputStream.writeChar@POLYN620675[01925] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeChar@POLYN572987.val",
      "_method" : "---java.io.ObjectOutputStream.writeChar@POLYN572987 in line [00786]",
      "_target" : "java.io.ObjectOutputStream.writeChar@POLYN572987.cibledummy_00786",
      "_risk" : "//QC-JAVCWZ099[00786] In java.io.ObjectOutputStream.writeChar@POLYN572987[00786] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "109",
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
    "_id" : "110",
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
    "_id" : "111",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeDouble@POLYN622883.v",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN574107 in line [01970]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN574107.val",
      "_risk" : "//QC-JAVCWZ099[01970] In java.io.ObjectOutputStream.BlockDataOutputStream.writeDouble@POLYN622883[01970] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN574107.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN574107 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN574107.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN574107[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "112",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.protocol.DataOutputStreamWritable.writeDouble@POLYN156549.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN574107 in line [00074]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN574107.val",
      "_risk" : "//QC-JAVCWE099[00074] In org.apache.kafka.common.protocol.DataOutputStreamWritable.writeDouble@POLYN156549[00074] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN574107.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN574107 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN574107.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN574107[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "113",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.utils.ByteUtils.writeDouble@POLYN232163.value",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN574107 in line [00376]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN574107.val",
      "_risk" : "//QC-JAVCWE099[00376] In org.apache.kafka.common.utils.ByteUtils.writeDouble@POLYN232163[00376] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeDouble@POLYN574107.val",
      "_method" : "---java.io.ObjectOutputStream.writeDouble@POLYN574107 in line [00830]",
      "_target" : "java.io.ObjectOutputStream.writeDouble@POLYN574107.cibledummy_00830",
      "_risk" : "//QC-JAVCWZ099[00830] In java.io.ObjectOutputStream.writeDouble@POLYN574107[00830] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "114",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN558701.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN605843 in line [00351]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN605843.ex",
      "_risk" : "//QC-JAVCWZ099[00351] In java.io.ObjectOutputStream.writeObject@POLYN558701[00351] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN605843.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN605843.dummymethode_01577 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN605843.cibledummy_01577",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN605843[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "115",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeUnshared@POLYN560919.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN605843 in line [00418]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN605843.ex",
      "_risk" : "//QC-JAVCWZ099[00418] In java.io.ObjectOutputStream.writeUnshared@POLYN560919[00418] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeFatalException@POLYN605843.ex",
      "_method" : "---java.io.ObjectOutputStream.writeFatalException@POLYN605843.dummymethode_01577 in line [01577]",
      "_target" : "java.io.ObjectOutputStream.writeFatalException@POLYN605843.cibledummy_01577",
      "_risk" : "//QC-JAVCWZ099[01577] In java.io.ObjectOutputStream.writeFatalException@POLYN605843[01577] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "116",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeFloat@POLYN622015.v",
      "_method" : "---java.io.ObjectOutputStream.writeFloat@POLYN573827 in line [01952]",
      "_target" : "java.io.ObjectOutputStream.writeFloat@POLYN573827.val",
      "_risk" : "//QC-JAVCWZ099[01952] In java.io.ObjectOutputStream.BlockDataOutputStream.writeFloat@POLYN622015[01952] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeFloat@POLYN573827.val",
      "_method" : "---java.io.ObjectOutputStream.writeFloat@POLYN573827 in line [00819]",
      "_target" : "java.io.ObjectOutputStream.writeFloat@POLYN573827.cibledummy_00819",
      "_risk" : "//QC-JAVCWZ099[00819] In java.io.ObjectOutputStream.writeFloat@POLYN573827[00819] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "117",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeInt@POLYN621581.v",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [01943]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_risk" : "//QC-JAVCWZ099[01943] In java.io.ObjectOutputStream.BlockDataOutputStream.writeInt@POLYN621581[01943] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573267[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "118",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593220.ia.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [01329]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_risk" : "//QC-JAVCWZ099[01329] In java.io.ObjectOutputStream.writeArray@POLYN593220[01329] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573267[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "119",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593220.ba.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [01333]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_risk" : "//QC-JAVCWZ099[01333] In java.io.ObjectOutputStream.writeArray@POLYN593220[01333] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573267[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "120",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593220.ja.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [01337]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_risk" : "//QC-JAVCWZ099[01337] In java.io.ObjectOutputStream.writeArray@POLYN593220[01337] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573267[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "121",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593220.fa.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [01341]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_risk" : "//QC-JAVCWZ099[01341] In java.io.ObjectOutputStream.writeArray@POLYN593220[01341] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573267[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "122",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593220.da.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [01345]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_risk" : "//QC-JAVCWZ099[01345] In java.io.ObjectOutputStream.writeArray@POLYN593220[01345] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573267[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "123",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593220.sa.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [01349]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_risk" : "//QC-JAVCWZ099[01349] In java.io.ObjectOutputStream.writeArray@POLYN593220[01349] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573267[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "124",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593220.ca.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [01353]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_risk" : "//QC-JAVCWZ099[01353] In java.io.ObjectOutputStream.writeArray@POLYN593220[01353] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573267[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "125",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeArray@POLYN593220.za.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [01357]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_risk" : "//QC-JAVCWZ099[01357] In java.io.ObjectOutputStream.writeArray@POLYN593220[01357] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573267[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "126",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeProxyDesc@POLYN589695.ifaces.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [01252]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_risk" : "//QC-JAVCWZ099[01252] In java.io.ObjectOutputStream.writeProxyDesc@POLYN589695[01252] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573267[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "127",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.writeObject@POLYN237293.count",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00464]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_risk" : "//QC-JAVCWZ099[00464] In java.lang.StringBuilder.writeObject@POLYN237293[00464] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573267[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "128",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.writeObject@POLYN669898.size",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [01359]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_risk" : "//QC-JAVCWZ099[01359] In java.util.HashMap.writeObject@POLYN669898[01359] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573267[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "129",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN463573.table.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [01221]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_risk" : "//QC-JAVCWZ099[01221] In java.util.Hashtable.writeHashtable@POLYN463573[01221] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573267[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "130",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN463573.count",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [01223]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_risk" : "//QC-JAVCWZ099[01223] In java.util.Hashtable.writeHashtable@POLYN463573[01223] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573267[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "131",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.protocol.DataOutputStreamWritable.writeInt@POLYN155975.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00056]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_risk" : "//QC-JAVCWE099[00056] In org.apache.kafka.common.protocol.DataOutputStreamWritable.writeInt@POLYN155975[00056] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573267[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "132",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.record.AbstractLegacyRecordBatch.writeHeader@POLYN219655.size",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00276]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_risk" : "//QC-JAVCWE099[00276] In org.apache.kafka.common.record.AbstractLegacyRecordBatch.writeHeader@POLYN219655[00276] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573267[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "133",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN167344.Serdes.ListSerde.NULL_ENTRY_VALUE",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00124]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_risk" : "//QC-JAVCWE099[00124] In org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN167344[00124] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573267[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "134",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN167344.bytes.length",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00129]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_risk" : "//QC-JAVCWE099[00129] In org.apache.kafka.common.serialization.ListSerializer.serialize@POLYN167344[00129] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573267[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "135",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.common.serialization.ListSerializer.serializeNullIndexList@POLYN166403.nullIndex",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00103]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_risk" : "//QC-JAVCWE099[00103] In org.apache.kafka.common.serialization.ListSerializer.serializeNullIndexList@POLYN166403[00103] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573267[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "136",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN224909.usedVersion",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00149]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_risk" : "//QC-JAVCWE099[00149] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN224909[00149] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573267[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "137",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN224909.commonlySupportedVersion",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00159]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_risk" : "//QC-JAVCWE099[00159] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN224909[00159] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573267[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "138",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN224909.out",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00160]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_risk" : "//QC-JAVCWE099[00160] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN224909[00160] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573267[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "139",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN224909.errCode",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00168]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_risk" : "//QC-JAVCWE099[00168] In org.apache.kafka.streams.processor.internals.assignment.AssignmentInfo.encode@POLYN224909[00168] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573267[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "140",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.writeTaskIdTo@POLYN158597.0",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00045]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_risk" : "//QC-JAVCWE099[00045] In org.apache.kafka.streams.processor.internals.assignment.ConsumerProtocolUtils.writeTaskIdTo@POLYN158597[00045] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeInt@POLYN573267.val",
      "_method" : "---java.io.ObjectOutputStream.writeInt@POLYN573267 in line [00797]",
      "_target" : "java.io.ObjectOutputStream.writeInt@POLYN573267.cibledummy_00797",
      "_risk" : "//QC-JAVCWZ099[00797] In java.io.ObjectOutputStream.writeInt@POLYN573267[00797] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "141",
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
      "_method" : "---java.io.ObjectOutputStream.writeClass@POLYN588206 in line [01120]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.cibledummy_01120",
      "_risk" : "//QC-JAVCWZ099[01120] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01120] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "142",
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
      "_method" : "---java.io.ObjectOutputStream.writeClass@POLYN588206 in line [01120]",
      "_target" : "java.io.ObjectOutputStream.writeObject0@POLYN583189.cibledummy_01120",
      "_risk" : "//QC-JAVCWZ099[01120] In java.io.ObjectOutputStream.writeObject0@POLYN583189[01120] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "143",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.lang.StringBuilder.writeObject@POLYN237293.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN558701 in line [00465]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_risk" : "//QC-JAVCWZ099[00465] In java.lang.StringBuilder.writeObject@POLYN237293[00465] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN559591 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN558701.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN558701[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "144",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN463573.entryStack.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN558701 in line [01238]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_risk" : "//QC-JAVCWZ099[01238] In java.util.Hashtable.writeHashtable@POLYN463573[01238] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN559591 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN558701.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN558701[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "145",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.Hashtable.writeHashtable@POLYN463573.entryStack.value",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN558701 in line [01239]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_risk" : "//QC-JAVCWZ099[01239] In java.util.Hashtable.writeHashtable@POLYN463573[01239] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN559591 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN558701.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN558701[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "146",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1484795.p.key",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN558701 in line [01406]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_risk" : "//QC-JAVCWZ099[01406] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1484795[01406] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN559591 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN558701.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN558701[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "147",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1484795.p.val",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN558701 in line [01407]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_risk" : "//QC-JAVCWZ099[01407] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1484795[01407] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN559591 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN558701.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN558701[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "148",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1484795.null",
      "_method" : "---java.io.ObjectOutputStream.writeObject@POLYN558701 in line [01410]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_risk" : "//QC-JAVCWZ099[01410] In java.util.concurrent.ConcurrentHashMap.writeObject@POLYN1484795[01410] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeObject@POLYN558701.obj",
      "_method" : "---java.io.ObjectOutputStream.writeObjectOverride@POLYN559591 in line [00344]",
      "_target" : "java.io.ObjectOutputStream.writeObject@POLYN558701.cibledummy_00344",
      "_risk" : "//QC-JAVCWZ099[00344] In java.io.ObjectOutputStream.writeObject@POLYN558701[00344] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "149",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.BlockDataOutputStream.writeShort@POLYN621128.v",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN572707 in line [01934]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN572707.val",
      "_risk" : "//QC-JAVCWZ099[01934] In java.io.ObjectOutputStream.BlockDataOutputStream.writeShort@POLYN621128[01934] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN572707.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN572707 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN572707.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN572707[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "150",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeStreamHeader@POLYN568433.STREAM_MAGIC",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN572707 in line [00636]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN572707.val",
      "_risk" : "//QC-JAVCWZ099[00636] In java.io.ObjectOutputStream.writeStreamHeader@POLYN568433[00636] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN572707.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN572707 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN572707.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN572707[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "151",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.ObjectOutputStream.writeStreamHeader@POLYN568433.STREAM_VERSION",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN572707 in line [00637]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN572707.val",
      "_risk" : "//QC-JAVCWZ099[00637] In java.io.ObjectOutputStream.writeStreamHeader@POLYN568433[00637] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.ObjectOutputStream.writeShort@POLYN572707.val",
      "_method" : "---java.io.ObjectOutputStream.writeShort@POLYN572707 in line [00775]",
      "_target" : "java.io.ObjectOutputStream.writeShort@POLYN572707.cibledummy_00775",
      "_risk" : "//QC-JAVCWZ099[00775] In java.io.ObjectOutputStream.writeShort@POLYN572707[00775] target data PATHtainted (java.io.ObjectOutputStream.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "152",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN224832.-1",
      "_method" : "---java.io.PipedInputStream.read@POLYN224832.dummymethode_00318 in line [00318]",
      "_target" : "java.io.PipedInputStream.read@POLYN224832.return",
      "_risk" : "//QC-JAVCWZ099[00318] In java.io.PipedInputStream.read@POLYN224832[00318] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN224832.return",
      "_method" : "---java.io.PipedInputStream.read@POLYN224832 in line [00377]",
      "_target" : "java.io.PipedInputStream.read@POLYN227843.c",
      "_risk" : "//QC-JAVCWZ099[00377] In java.io.PipedInputStream.read@POLYN227843[00377] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "153",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PipedInputStream.read@POLYN224832.ret",
      "_method" : "---java.io.PipedInputStream.read@POLYN224832.dummymethode_00340 in line [00340]",
      "_target" : "java.io.PipedInputStream.read@POLYN224832.return",
      "_risk" : "//QC-JAVCWZ099[00340] In java.io.PipedInputStream.read@POLYN224832[00340] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PipedInputStream.read@POLYN224832.return",
      "_method" : "---java.io.PipedInputStream.read@POLYN224832 in line [00377]",
      "_target" : "java.io.PipedInputStream.read@POLYN227843.c",
      "_risk" : "//QC-JAVCWZ099[00377] In java.io.PipedInputStream.read@POLYN227843[00377] source data PATHtainted (java.io.PipedInputStream.read) RiskOnInput"
    } ]
  }, {
    "_id" : "154",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PipedReader.read@POLYN203037.-1",
      "_method" : "---java.io.PipedReader.read@POLYN203037.dummymethode_00001 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN203037.return",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN203037[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PipedReader.read@POLYN203037.return",
      "_method" : "---java.io.PipedReader.read@POLYN203037 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN205637.c",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN205637[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "155",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PipedReader.read@POLYN203037.ret",
      "_method" : "---java.io.PipedReader.read@POLYN203037.dummymethode_00001 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN203037.return",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN203037[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PipedReader.read@POLYN203037.return",
      "_method" : "---java.io.PipedReader.read@POLYN203037 in line [00001]",
      "_target" : "java.io.PipedReader.read@POLYN205637.c",
      "_risk" : "//QC-JAVCWZ099[00001] In java.io.PipedReader.read@POLYN205637[00001] source data PATHtainted (java.io.PipedReader.read) RiskOnInput"
    } ]
  }, {
    "_id" : "156",
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
    "_id" : "157",
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
    "_id" : "158",
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
    "_id" : "159",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN154632.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN370565 in line [00067]",
      "_target" : "java.io.PrintStream.println@POLYN370565.x",
      "_risk" : "//QC-JAVCWE099[00067] In org.apache.kafka.connect.tools.PredicateDoc.printPredicateHtml@POLYN154632[00067] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN370565.x",
      "_method" : "---java.io.PrintStream.print@POLYN366116 in line [00806]",
      "_target" : "java.io.PrintStream.println@POLYN370565.cibledummy_00806",
      "_risk" : "//QC-JAVCWE099[00806] In java.io.PrintStream.println@POLYN370565[00806] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "160",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN164272.docInfo.overview",
      "_method" : "---java.io.PrintStream.println@POLYN370565 in line [00081]",
      "_target" : "java.io.PrintStream.println@POLYN370565.x",
      "_risk" : "//QC-JAVCWE099[00081] In org.apache.kafka.connect.tools.TransformationDoc.printTransformationHtml@POLYN164272[00081] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.PrintStream.println@POLYN370565.x",
      "_method" : "---java.io.PrintStream.print@POLYN366116 in line [00806]",
      "_target" : "java.io.PrintStream.println@POLYN370565.cibledummy_00806",
      "_risk" : "//QC-JAVCWE099[00806] In java.io.PrintStream.println@POLYN370565[00806] target data PATHtainted (java.io.PrintStream.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "161",
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
    "_id" : "162",
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
      "_method" : "---java.io.PrintWriter.print@POLYN346381.dummymethode_00517 in line [00517]",
      "_target" : "java.io.PrintWriter.print@POLYN346381.cibledummy_00517",
      "_risk" : "//QC-JAVCWZ099[00517] In java.io.PrintWriter.print@POLYN346381[00517] target data PATHtainted (java.io.PrintWriter.print) RiskOnOutput"
    } ]
  }, {
    "_id" : "163",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.io.PrintWriter.write@POLYN344174.off",
      "_method" : "---java.io.Writer.write@POLYN192989 in line [00456]",
      "_target" : "java.io.Writer.write@POLYN192989.off",
      "_risk" : "//QC-JAVCWZ099[00456] In java.io.PrintWriter.write@POLYN344174[00456] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.io.Writer.write@POLYN192989.off",
      "_method" : "---java.io.Writer.write@POLYN192989.dummymethode_00191 in line [00191]",
      "_target" : "java.io.Writer.write@POLYN192989.cibledummy_00191",
      "_risk" : "//QC-JAVCWZ099[00191] In java.io.Writer.write@POLYN192989[00191] target data PATHtainted (java.io.Writer.write) RiskOnOutput"
    } ]
  }, {
    "_id" : "164",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "50",
      "_method" : "---java.net.ServerSocket.ServerSocket@POLYN309697.dummymethode_00218 in line [00218]",
      "_target" : "java.net.ServerSocket.ServerSocket@POLYN309697.backlog",
      "_risk" : "//QC-JAVCWE099[00218] In java.net.ServerSocket.ServerSocket@POLYN309697[00218] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.net.ServerSocket.ServerSocket@POLYN309697.backlog",
      "_method" : "---java.net.ServerSocket.bind@POLYN314160 in line [00220]",
      "_target" : "java.net.ServerSocket.ServerSocket@POLYN309697.cibledummy_00220",
      "_risk" : "//QC-JAVCWE099[00220] In java.net.ServerSocket.ServerSocket@POLYN309697[00220] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "165",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.net.ServerSocket.impl",
      "_method" : "---java.net.ServerSocket.getImpl@POLYN310780.dummymethode_00241 in line [00241]",
      "_target" : "java.net.ServerSocket.getImpl@POLYN310780.return",
      "_risk" : "//QC-JAVCWZ099[00241] In java.net.ServerSocket.getImpl@POLYN310780[00241] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.net.ServerSocket.getImpl@POLYN310780.return",
      "_method" : "---java.net.ServerSocket.getImpl@POLYN310780 in line [00356]",
      "_target" : "java.net.ServerSocket.bind@POLYN314160.cibledummy_00356",
      "_risk" : "//QC-JAVCWZ099[00356] In java.net.ServerSocket.bind@POLYN314160[00356] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "166",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "true",
      "_method" : "---java.net.ServerSocket.close@POLYN321527.dummymethode_00542 in line [00542]",
      "_target" : "java.net.ServerSocket.closed",
      "_risk" : "//QC-JAVCWE099[00542] In java.net.ServerSocket.close@POLYN321527[00542] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.net.ServerSocket.closed",
      "_method" : "---java.net.ServerSocket.isClosed@POLYN322637.dummymethode_00585 in line [00585]",
      "_target" : "java.net.ServerSocket.isClosed@POLYN322637.return",
      "_risk" : "//QC-JAVCWE099[00585] In java.net.ServerSocket.isClosed@POLYN322637[00585] source or target data Sockettainted (java.net.ServerSocket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "167",
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
      "_target" : "java.net.Socket.connect@POLYN472974.cibledummy_00518",
      "_risk" : "//QC-JAVCWZ099[00518] In java.net.Socket.connect@POLYN472974[00518] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "168",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.net.Socket.connect@POLYN472974.0",
      "_method" : "---java.net.Socket.connect@POLYN473624 in line [00518]",
      "_target" : "java.net.Socket.connect@POLYN473624.timeout",
      "_risk" : "//QC-JAVCWZ099[00518] In java.net.Socket.connect@POLYN472974[00518] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.net.Socket.connect@POLYN473624.timeout",
      "_method" : "---java.net.Socket.connect@POLYN473624 in line [00568]",
      "_target" : "java.net.Socket.connect@POLYN473624.cibledummy_00568",
      "_risk" : "//QC-JAVCWZ099[00568] In java.net.Socket.connect@POLYN473624[00568] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "169",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.net.Socket.Socket@POLYN469199.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN470129 in line [00411]",
      "_target" : "java.net.Socket.createImpl@POLYN470129.stream",
      "_risk" : "//QC-JAVCWZ099[00411] In java.net.Socket.Socket@POLYN469199[00411] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.net.Socket.createImpl@POLYN470129.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN470129.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN470129.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN470129[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "170",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.net.Socket.connect@POLYN473624.true",
      "_method" : "---java.net.Socket.createImpl@POLYN470129 in line [00566]",
      "_target" : "java.net.Socket.createImpl@POLYN470129.stream",
      "_risk" : "//QC-JAVCWZ099[00566] In java.net.Socket.connect@POLYN473624[00566] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.net.Socket.createImpl@POLYN470129.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN470129.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN470129.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN470129[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "171",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.net.Socket.getImpl@POLYN472456.true",
      "_method" : "---java.net.Socket.createImpl@POLYN470129 in line [00500]",
      "_target" : "java.net.Socket.createImpl@POLYN470129.stream",
      "_risk" : "//QC-JAVCWZ099[00500] In java.net.Socket.getImpl@POLYN472456[00500] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    }, {
      "_id" : "1",
      "_source" : "java.net.Socket.createImpl@POLYN470129.stream",
      "_method" : "---java.net.Socket.createImpl@POLYN470129.dummymethode_00434 in line [00434]",
      "_target" : "java.net.Socket.createImpl@POLYN470129.cibledummy_00434",
      "_risk" : "//QC-JAVCWZ099[00434] In java.net.Socket.createImpl@POLYN470129[00434] source or target data Sockettainted (java.net.Socket) RiskOnInput / RiskOnOutput"
    } ]
  }, {
    "_id" : "172",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.getNode@POLYN619158.first",
      "_method" : "---java.util.HashMap.getNode@POLYN619158.dummymethode_00570 in line [00570]",
      "_target" : "java.util.HashMap.getNode@POLYN619158.return",
      "_risk" : "//QC-JAVCWZ099[00570] In java.util.HashMap.getNode@POLYN619158[00570] source data PATHtainted (java.util.HashMap.get) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.getNode@POLYN619158.return",
      "_method" : "---java.util.HashMap.getNode@POLYN619158 in line [01018]",
      "_target" : "java.util.HashMap.EntrySet.contains@POLYN647346.candidate",
      "_risk" : "//QC-JAVCWZ099[01018] In java.util.HashMap.EntrySet.contains@POLYN647346[01018] source data PATHtainted (java.util.HashMap.get) RiskOnInput"
    } ]
  }, {
    "_id" : "173",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.getNode@POLYN619158.e",
      "_method" : "---java.util.HashMap.getNode@POLYN619158.dummymethode_00577 in line [00577]",
      "_target" : "java.util.HashMap.getNode@POLYN619158.return",
      "_risk" : "//QC-JAVCWZ099[00577] In java.util.HashMap.getNode@POLYN619158[00577] source data PATHtainted (java.util.HashMap.get) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.getNode@POLYN619158.return",
      "_method" : "---java.util.HashMap.getNode@POLYN619158 in line [01018]",
      "_target" : "java.util.HashMap.EntrySet.contains@POLYN647346.candidate",
      "_risk" : "//QC-JAVCWZ099[01018] In java.util.HashMap.EntrySet.contains@POLYN647346[01018] source data PATHtainted (java.util.HashMap.get) RiskOnInput"
    } ]
  }, {
    "_id" : "174",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.HashMap.getNode@POLYN619158.null",
      "_method" : "---java.util.HashMap.getNode@POLYN619158.dummymethode_00581 in line [00581]",
      "_target" : "java.util.HashMap.getNode@POLYN619158.return",
      "_risk" : "//QC-JAVCWZ099[00581] In java.util.HashMap.getNode@POLYN619158[00581] source data PATHtainted (java.util.HashMap.get) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.util.HashMap.getNode@POLYN619158.return",
      "_method" : "---java.util.HashMap.getNode@POLYN619158 in line [01018]",
      "_target" : "java.util.HashMap.EntrySet.contains@POLYN647346.candidate",
      "_risk" : "//QC-JAVCWZ099[01018] In java.util.HashMap.EntrySet.contains@POLYN647346[01018] source data PATHtainted (java.util.HashMap.get) RiskOnInput"
    } ]
  }, {
    "_id" : "175",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.Map.getOrDefault@POLYN441854.return",
      "_method" : "---java.util.Map.getOrDefault@POLYN441854 in line [01216]",
      "_target" : "org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN426176.topic",
      "_risk" : "//QC-JAVCWE099[01216] In org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN426176[01216] source data PATHtainted (java.util.Map.get) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN426176.topic",
      "_method" : "---java.util.Map.put@POLYN429794 in line [01228]",
      "_target" : "org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN426176.cibledummy_01228",
      "_risk" : "//QC-JAVCWE099[01228] In org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN426176[01228] target data PATHtainted (java.util.Map.put) RiskOnOutput"
    } ]
  }, {
    "_id" : "176",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.Map.getKey@POLYN435159.return",
      "_method" : "---java.util.Map.getKey@POLYN435159 in line [00181]",
      "_target" : "org.apache.kafka.common.requests.OffsetFetchResponse.OffsetFetchResponse@POLYN203706.groupName",
      "_risk" : "//QC-JAVCWE099[00181] In org.apache.kafka.common.requests.OffsetFetchResponse.OffsetFetchResponse@POLYN203706[00181] source data PATHtainted (java.util.Map.get) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.common.requests.OffsetFetchResponse.OffsetFetchResponse@POLYN203706.groupName",
      "_method" : "---java.util.Map.put@POLYN429794 in line [00203]",
      "_target" : "org.apache.kafka.common.requests.OffsetFetchResponse.OffsetFetchResponse@POLYN203706.cibledummy_00203",
      "_risk" : "//QC-JAVCWE099[00203] In org.apache.kafka.common.requests.OffsetFetchResponse.OffsetFetchResponse@POLYN203706[00203] target data PATHtainted (java.util.Map.put) RiskOnOutput"
    } ]
  }, {
    "_id" : "177",
    "_riskSequence" : "Security risk level : CRITICAL",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.Map.getValue@POLYN435492.return",
      "_method" : "---java.util.Map.getValue@POLYN435492 in line [00130]",
      "_target" : "org.apache.kafka.image.TopicsDelta.apply@POLYN179574.prevTopicImage",
      "_risk" : "//QC-JAVCWE099[00130] In org.apache.kafka.image.TopicsDelta.apply@POLYN179574[00130] source data PATHtainted (java.util.Map.get) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "org.apache.kafka.image.TopicsDelta.apply@POLYN179574.prevTopicImage",
      "_method" : "---java.util.Map.put@POLYN429794 in line [00135]",
      "_target" : "org.apache.kafka.image.TopicsDelta.apply@POLYN179574.cibledummy_00135",
      "_risk" : "//QC-JAVCWE099[00135] In org.apache.kafka.image.TopicsDelta.apply@POLYN179574[00135] target data PATHtainted (java.util.Map.put) RiskOnOutput"
    } ]
  }, {
    "_id" : "178",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.get@POLYN1458279.e.val",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.get@POLYN1458279.dummymethode_00935 in line [00935]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.get@POLYN1458279.return",
      "_risk" : "//QC-JAVCWE099[00935] In java.util.concurrent.ConcurrentHashMap.get@POLYN1458279[00935] source data PATHtainted (java.util.concurrent.ConcurrentHashMap.get) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.get@POLYN1458279.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.get@POLYN1458279 in line [00133]",
      "_target" : "org.apache.kafka.streams.query.Position.getPartitionPositions@POLYN175039.bound",
      "_risk" : "//QC-JAVCWE099[00133] In org.apache.kafka.streams.query.Position.getPartitionPositions@POLYN175039[00133] source data PATHtainted (java.util.concurrent.ConcurrentHashMap.get) RiskOnInput"
    } ]
  }, {
    "_id" : "179",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "java.util.concurrent.ConcurrentHashMap.get@POLYN1458279.null",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.get@POLYN1458279.dummymethode_00945 in line [00945]",
      "_target" : "java.util.concurrent.ConcurrentHashMap.get@POLYN1458279.return",
      "_risk" : "//QC-JAVCWE099[00945] In java.util.concurrent.ConcurrentHashMap.get@POLYN1458279[00945] source data PATHtainted (java.util.concurrent.ConcurrentHashMap.get) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "java.util.concurrent.ConcurrentHashMap.get@POLYN1458279.return",
      "_method" : "---java.util.concurrent.ConcurrentHashMap.get@POLYN1458279 in line [00133]",
      "_target" : "org.apache.kafka.streams.query.Position.getPartitionPositions@POLYN175039.bound",
      "_risk" : "//QC-JAVCWE099[00133] In org.apache.kafka.streams.query.Position.getPartitionPositions@POLYN175039[00133] source data PATHtainted (java.util.concurrent.ConcurrentHashMap.get) RiskOnInput"
    } ]
  }, {
    "_id" : "180",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.body",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.dummymethode_00578 in line [00578]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_risk" : "//QC-JAVCWE080[00578] In org.springframework.http.ResponseEntity.DefaultBuilder[00578] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN247392.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN247392.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN247392[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "181",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this.headers",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.dummymethode_00578 in line [00578]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_risk" : "//QC-JAVCWE080[00578] In org.springframework.http.ResponseEntity.DefaultBuilder[00578] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN247392.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN247392.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN247392[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    } ]
  }, {
    "_id" : "182",
    "_riskSequence" : "Security risk level : None",
    "_lesSteps" : [ {
      "_id" : "2",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this.statusCode",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.dummymethode_00578 in line [00578]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_risk" : "//QC-JAVCWE080[00578] In org.springframework.http.ResponseEntity.DefaultBuilder[00578] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
    }, {
      "_id" : "1",
      "_source" : "org.springframework.http.ResponseEntity.DefaultBuilder.this",
      "_method" : "---org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN247392.dummymethode_00508 in line [00508]",
      "_target" : "org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN247392.return",
      "_risk" : "//QC-JAVCWE080[00508] In org.springframework.http.ResponseEntity.DefaultBuilder.allow@POLYN247392[00508] source data Http/HTML tainted (org.springframework.http.ResponseEntity) RiskOnInput"
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
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336351.partition"
  }, {
    "_id" : "R4",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336351.offsetResetStrategy"
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
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN333741.tp"
  }, {
    "_id" : "R10",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN333741.highWatermark"
  }, {
    "_id" : "R11",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN333931.tp"
  }, {
    "_id" : "R12",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN333931.logStartOffset"
  }, {
    "_id" : "R13",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN334121.tp"
  }, {
    "_id" : "R14",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN334121.lastStableOffset"
  }, {
    "_id" : "R15",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.this"
  }, {
    "_id" : "R16",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891.tp"
  }, {
    "_id" : "R17",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN326831.tp"
  }, {
    "_id" : "R18",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN326831.position"
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
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN319395.assignments"
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
    "_libelle" : "org.apache.kafka.connect.runtime.distributed.DistributedHerder.doRestartConnectorAndTasks@POLYN575916.request"
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
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN163089.prefix"
  }, {
    "_id" : "R37",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN163089.id"
  }, {
    "_id" : "R38",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN163089.metrics"
  }, {
    "_id" : "R39",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.this"
  }, {
    "_id" : "R40",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.consumerRecord@POLYN203129.consumedMessage"
  }, {
    "_id" : "R41",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418849.isDisconnected"
  }, {
    "_id" : "R42",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418849.cause"
  }, {
    "_id" : "R43",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN375653.exception"
  }, {
    "_id" : "R44",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN376139.exception"
  }, {
    "_id" : "R45",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN378886.tp"
  }, {
    "_id" : "R46",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN394635.e"
  }, {
    "_id" : "R47",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.this"
  }, {
    "_id" : "R48",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN162495.topic"
  }, {
    "_id" : "R49",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.add@POLYN162495.nowMs"
  }, {
    "_id" : "R50",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN350009.deque"
  }, {
    "_id" : "R51",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN377149.topicPartition"
  }, {
    "_id" : "R52",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN381257.topicPartition"
  }, {
    "_id" : "R53",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN381257.increment"
  }, {
    "_id" : "R54",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.updateEstimation@POLYN156130.compressionRatioForTopic"
  }, {
    "_id" : "R55",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386248.batch"
  }, {
    "_id" : "R56",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386248.exception"
  }, {
    "_id" : "R57",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386248.adjustSequenceNumbers"
  }, {
    "_id" : "R58",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN385653.exception"
  }, {
    "_id" : "R59",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN383074.batch"
  }, {
    "_id" : "R60",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN390011.batch"
  }, {
    "_id" : "R61",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418495.error"
  }, {
    "_id" : "R62",
    "_libelle" : "org.apache.kafka.clients.Metadata.bootstrap@POLYN252681.addresses"
  }, {
    "_id" : "R63",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN162309.prefix"
  }, {
    "_id" : "R64",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN162309.id"
  }, {
    "_id" : "R65",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN162309.metrics"
  }, {
    "_id" : "R66",
    "_libelle" : "org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN162309.nowMs"
  }, {
    "_id" : "R67",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN164536.lastVersion"
  }, {
    "_id" : "R68",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.awaitUpdate@POLYN164536.timeoutMs"
  }, {
    "_id" : "R69",
    "_libelle" : "org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN263601.topic"
  }, {
    "_id" : "R70",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.append@POLYN325927.dq"
  }, {
    "_id" : "R71",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.this"
  }, {
    "_id" : "R72",
    "_libelle" : "org.apache.kafka.clients.producer.internals.IncompleteBatches.incomplete"
  }, {
    "_id" : "R73",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373330.topicPartition"
  }, {
    "_id" : "R74",
    "_libelle" : "org.apache.kafka.clients.admin.KafkaAdminClient.this"
  }, {
    "_id" : "R75",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.remove@POLYN150109.nodeId"
  }, {
    "_id" : "R76",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.update@POLYN149837.nodeId"
  }, {
    "_id" : "R77",
    "_libelle" : "org.apache.kafka.clients.ApiVersions.update@POLYN149837.nodeApiVersions"
  }, {
    "_id" : "R78",
    "_libelle" : "org.apache.kafka.streams.processor.internals.GlobalStreamThread.stateLock"
  }, {
    "_id" : "R79",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.this"
  }, {
    "_id" : "R80",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN274918.connector"
  }, {
    "_id" : "R81",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN276226.id"
  }, {
    "_id" : "R82",
    "_libelle" : "java.util.Hashtable.this"
  }, {
    "_id" : "R83",
    "_libelle" : "java.util.Hashtable.putAll@POLYN430200.t"
  }, {
    "_id" : "R84",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.this"
  }, {
    "_id" : "R85",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.setStreamsConfig@POLYN487727.applicationConfig"
  }, {
    "_id" : "R86",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.this"
  }, {
    "_id" : "R87",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN243829.topic"
  }, {
    "_id" : "R88",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN243829.partitions"
  }, {
    "_id" : "R89",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN242524.newOffsets"
  }, {
    "_id" : "R90",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN242948.newOffsets"
  }, {
    "_id" : "R91",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.putVal@POLYN1462859.f"
  }, {
    "_id" : "R92",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.treeifyBin@POLYN1558243.b"
  }, {
    "_id" : "R93",
    "_libelle" : "org.apache.kafka.streams.state.internals.OffsetCheckpoint.lock"
  }, {
    "_id" : "R94",
    "_libelle" : "java.io.Writer.lock"
  }, {
    "_id" : "R95",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.this"
  }, {
    "_id" : "R96",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.this"
  }, {
    "_id" : "R97",
    "_libelle" : "org.apache.kafka.connect.runtime.ExactlyOnceWorkerSourceTask.commitableRecords"
  }, {
    "_id" : "R98",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.this"
  }, {
    "_id" : "R99",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.taskLevelSensors"
  }, {
    "_id" : "R100",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.nodeLevelSensors"
  }, {
    "_id" : "R101",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN253073.response"
  }, {
    "_id" : "R102",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN253073.isPartialUpdate"
  }, {
    "_id" : "R103",
    "_libelle" : "org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN253073.nowMs"
  }, {
    "_id" : "R104",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN253647.requestVersion"
  }, {
    "_id" : "R105",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN253647.response"
  }, {
    "_id" : "R106",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN253647.isPartialUpdate"
  }, {
    "_id" : "R107",
    "_libelle" : "org.apache.kafka.clients.Metadata.update@POLYN253647.nowMs"
  }, {
    "_id" : "R108",
    "_libelle" : "org.apache.kafka.common.requests.MetadataResponse.data"
  }, {
    "_id" : "R109",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN165308.requestVersion"
  }, {
    "_id" : "R110",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN165308.response"
  }, {
    "_id" : "R111",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN165308.isPartialUpdate"
  }, {
    "_id" : "R112",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.update@POLYN165308.nowMs"
  }, {
    "_id" : "R113",
    "_libelle" : "org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.this"
  }, {
    "_id" : "R114",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.this"
  }, {
    "_id" : "R115",
    "_libelle" : "org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN222552.initialTopologies"
  }, {
    "_id" : "R116",
    "_libelle" : "java.io.File.this"
  }, {
    "_id" : "R117",
    "_libelle" : "java.io.File.readObject@POLYN634002.s"
  }, {
    "_id" : "R118",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN394457.request"
  }, {
    "_id" : "R119",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN229453.connName"
  }, {
    "_id" : "R120",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.sourceRecord@POLYN202900.preTransformRecord"
  }, {
    "_id" : "R121",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.this"
  }, {
    "_id" : "R122",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.openIterators"
  }, {
    "_id" : "R123",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN227575.connName"
  }, {
    "_id" : "R124",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN227575.config"
  }, {
    "_id" : "R125",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN227575.allowReplace"
  }, {
    "_id" : "R126",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN227575.callback"
  }, {
    "_id" : "R127",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN227575.configInfos"
  }, {
    "_id" : "R128",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN225594.connName"
  }, {
    "_id" : "R129",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN225594.callback"
  }, {
    "_id" : "R130",
    "_libelle" : "org.apache.kafka.common.security.oauthbearer.internals.expiring.ExpiringCredentialRefreshingLogin.mandatoryClassToSynchronizeOnPriorToRefresh"
  }, {
    "_id" : "R131",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN233904.request"
  }, {
    "_id" : "R132",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN233904.cb"
  }, {
    "_id" : "R133",
    "_libelle" : "java.lang.Throwable.this"
  }, {
    "_id" : "R134",
    "_libelle" : "java.lang.Throwable.addSuppressed@POLYN389411.exception"
  }, {
    "_id" : "R135",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN231288.taskId"
  }, {
    "_id" : "R136",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN231288.cb"
  }, {
    "_id" : "R137",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN180334.partition"
  }, {
    "_id" : "R138",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageWriter.offset@POLYN180334.offset"
  }, {
    "_id" : "R139",
    "_libelle" : "org.apache.kafka.tools.ThroughputThrottler.this"
  }, {
    "_id" : "R140",
    "_libelle" : "java.io.BufferedOutputStream.this"
  }, {
    "_id" : "R141",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN161430.b"
  }, {
    "_id" : "R142",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN161430.off"
  }, {
    "_id" : "R143",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN161430.len"
  }, {
    "_id" : "R144",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN259832.cleanupDelayMs"
  }, {
    "_id" : "R145",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN256827.taskId"
  }, {
    "_id" : "R146",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.this"
  }, {
    "_id" : "R147",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN194835.key"
  }, {
    "_id" : "R148",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.put@POLYN194835.value"
  }, {
    "_id" : "R149",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN391767.now"
  }, {
    "_id" : "R150",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.pollTasks"
  }, {
    "_id" : "R151",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN323859.tp"
  }, {
    "_id" : "R152",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN323859.position"
  }, {
    "_id" : "R153",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.this"
  }, {
    "_id" : "R154",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN191589.newCacheSizeBytes"
  }, {
    "_id" : "R155",
    "_libelle" : "org.apache.kafka.connect.storage.KafkaConfigBackingStore.lock"
  }, {
    "_id" : "R156",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN333003.tp"
  }, {
    "_id" : "R157",
    "_libelle" : "org.apache.kafka.trogdor.workload.RoundTripWorker.this"
  }, {
    "_id" : "R158",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN385101.batch"
  }, {
    "_id" : "R159",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN385101.response"
  }, {
    "_id" : "R160",
    "_libelle" : "java.net.Socket.this"
  }, {
    "_id" : "R161",
    "_libelle" : "java.net.Socket.setSendBufferSize@POLYN494347.size"
  }, {
    "_id" : "R162",
    "_libelle" : "java.net.Socket.setReceiveBufferSize@POLYN497050.size"
  }, {
    "_id" : "R163",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN422501.shortReason"
  }, {
    "_id" : "R164",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN422809.shortReason"
  }, {
    "_id" : "R165",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN422809.fullReason"
  }, {
    "_id" : "R166",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.this"
  }, {
    "_id" : "R167",
    "_libelle" : "java.io.PrintStream.this"
  }, {
    "_id" : "R168",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN199093.entries"
  }, {
    "_id" : "R169",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN341188.tp"
  }, {
    "_id" : "R170",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN341339.tp"
  }, {
    "_id" : "R171",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN331436.tp"
  }, {
    "_id" : "R172",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.this"
  }, {
    "_id" : "R173",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN237048.key"
  }, {
    "_id" : "R174",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN237048.value"
  }, {
    "_id" : "R175",
    "_libelle" : "org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN237048.windowStartTimestamp"
  }, {
    "_id" : "R176",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.this"
  }, {
    "_id" : "R177",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN260277.key"
  }, {
    "_id" : "R178",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN260277.value"
  }, {
    "_id" : "R179",
    "_libelle" : "org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN260277.windowStartTimestamp"
  }, {
    "_id" : "R180",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN232701.connName"
  }, {
    "_id" : "R181",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN232701.cb"
  }, {
    "_id" : "R182",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.this"
  }, {
    "_id" : "R183",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN166516.reader"
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
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelMetrics"
  }, {
    "_id" : "R189",
    "_libelle" : "org.apache.kafka.clients.producer.internals.RecordAccumulator.splitAndReenqueue@POLYN337105.partitionDequeue"
  }, {
    "_id" : "R190",
    "_libelle" : "org.apache.kafka.common.record.CompressionRatioEstimator.setEstimation@POLYN158078.compressionRatioForTopic"
  }, {
    "_id" : "R191",
    "_libelle" : "org.apache.kafka.clients.producer.internals.TransactionManager.addInFlightBatch@POLYN381651.batch"
  }, {
    "_id" : "R192",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTask.this"
  }, {
    "_id" : "R193",
    "_libelle" : "org.apache.kafka.clients.producer.MockProducer.this"
  }, {
    "_id" : "R194",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromAssignment@POLYN575727.partitions"
  }, {
    "_id" : "R195",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromAssignment@POLYN575727.logPrefix"
  }, {
    "_id" : "R196",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromMetadata@POLYN576536.topics"
  }, {
    "_id" : "R197",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.addSubscribedTopicsFromMetadata@POLYN576536.logPrefix"
  }, {
    "_id" : "R198",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.this"
  }, {
    "_id" : "R199",
    "_libelle" : "org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN164642.consumerRecords"
  }, {
    "_id" : "R200",
    "_libelle" : "java.net.ServerSocket.closeLock"
  }, {
    "_id" : "R201",
    "_libelle" : "java.net.Socket.closeLock"
  }, {
    "_id" : "R202",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.rebalance@POLYN229413.newAssignment"
  }, {
    "_id" : "R203",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN238491.offsets"
  }, {
    "_id" : "R204",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237875.offsets"
  }, {
    "_id" : "R205",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237875.callback"
  }, {
    "_id" : "R206",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN239216.timeout"
  }, {
    "_id" : "R207",
    "_libelle" : "java.io.File.writeObject@POLYN633621.s"
  }, {
    "_id" : "R208",
    "_libelle" : "java.lang.Throwable.writeObject@POLYN387358.s"
  }, {
    "_id" : "R209",
    "_libelle" : "org.apache.kafka.connect.runtime.ConnectMetrics.this"
  }, {
    "_id" : "R210",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeSensor@POLYN297264.sensor"
  }, {
    "_id" : "R211",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.reporters@POLYN202647.reporters"
  }, {
    "_id" : "R212",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerSourceTask.this"
  }, {
    "_id" : "R213",
    "_libelle" : "org.apache.kafka.connect.util.ConvertingFutureCallback.this"
  }, {
    "_id" : "R214",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN164050.reader"
  }, {
    "_id" : "R215",
    "_libelle" : "java.net.ServerSocket.this"
  }, {
    "_id" : "R216",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN421470.reason"
  }, {
    "_id" : "R217",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN421470.shouldResetMemberId"
  }, {
    "_id" : "R218",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN420771.reason"
  }, {
    "_id" : "R219",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN420771.shouldResetMemberId"
  }, {
    "_id" : "R220",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN324450.tp"
  }, {
    "_id" : "R221",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN324450.position"
  }, {
    "_id" : "R222",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN324450.requestedResetStrategy"
  }, {
    "_id" : "R223",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN239596.partition"
  }, {
    "_id" : "R224",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN239596.offset"
  }, {
    "_id" : "R225",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.pause@POLYN244104.partitions"
  }, {
    "_id" : "R226",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.resume@POLYN244426.partitions"
  }, {
    "_id" : "R227",
    "_libelle" : "org.apache.kafka.connect.file.FileStreamSourceTask.this"
  }, {
    "_id" : "R228",
    "_libelle" : "org.apache.kafka.connect.storage.FileOffsetBackingStore.this"
  }, {
    "_id" : "R229",
    "_libelle" : "org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN200520.namespace"
  }, {
    "_id" : "R230",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheLevelSensors"
  }, {
    "_id" : "R231",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.this"
  }, {
    "_id" : "R232",
    "_libelle" : "org.apache.kafka.streams.kstream.internals.InternalStreamsBuilder.addStateStore@POLYN237430.builder"
  }, {
    "_id" : "R233",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.this"
  }, {
    "_id" : "R234",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN182974.key"
  }, {
    "_id" : "R235",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.put@POLYN182974.value"
  }, {
    "_id" : "R236",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.this"
  }, {
    "_id" : "R237",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN175095.key"
  }, {
    "_id" : "R238",
    "_libelle" : "org.apache.kafka.streams.state.internals.MemoryLRUCache.put@POLYN175095.value"
  }, {
    "_id" : "R239",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418694.cause"
  }, {
    "_id" : "R240",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN421768.api"
  }, {
    "_id" : "R241",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN421768.error"
  }, {
    "_id" : "R242",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN421768.shouldResetMemberId"
  }, {
    "_id" : "R243",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN334561.tp"
  }, {
    "_id" : "R244",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN334561.preferredReadReplicaId"
  }, {
    "_id" : "R245",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN334561.timeMs"
  }, {
    "_id" : "R246",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336546.partitions"
  }, {
    "_id" : "R247",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336546.offsetResetStrategy"
  }, {
    "_id" : "R248",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN337110.partitions"
  }, {
    "_id" : "R249",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN337110.nextAllowResetTimeMs"
  }, {
    "_id" : "R250",
    "_libelle" : "org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN187936.key"
  }, {
    "_id" : "R251",
    "_libelle" : "java.io.PipedOutputStream.this"
  }, {
    "_id" : "R252",
    "_libelle" : "java.io.PipedOutputStream.sink"
  }, {
    "_id" : "R253",
    "_libelle" : "java.io.PipedInputStream.this"
  }, {
    "_id" : "R254",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN221377.b"
  }, {
    "_id" : "R255",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN221377.off"
  }, {
    "_id" : "R256",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN221377.len"
  }, {
    "_id" : "R257",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1499465.r"
  }, {
    "_id" : "R258",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.computeIfAbsent@POLYN1499465.f"
  }, {
    "_id" : "R259",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142.r"
  }, {
    "_id" : "R260",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.compute@POLYN1511142.f"
  }, {
    "_id" : "R261",
    "_libelle" : "java.util.concurrent.ConcurrentHashMap.merge@POLYN1518796.f"
  }, {
    "_id" : "R262",
    "_libelle" : "java.io.BufferedOutputStream.write@POLYN160569.b"
  }, {
    "_id" : "R263",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN229815.topics"
  }, {
    "_id" : "R264",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN231639.topics"
  }, {
    "_id" : "R265",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN231639.listener"
  }, {
    "_id" : "R266",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230022.pattern"
  }, {
    "_id" : "R267",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230022.listener"
  }, {
    "_id" : "R268",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN315252.pattern"
  }, {
    "_id" : "R269",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN315252.listener"
  }, {
    "_id" : "R270",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN231453.pattern"
  }, {
    "_id" : "R271",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN341485.partitions"
  }, {
    "_id" : "R272",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN341485.nextRetryTimeMs"
  }, {
    "_id" : "R273",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.removeReporter@POLYN303539.reporter"
  }, {
    "_id" : "R274",
    "_libelle" : "org.apache.kafka.common.metrics.JmxReporter.LOCK"
  }, {
    "_id" : "R275",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.this"
  }, {
    "_id" : "R276",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN161382.status"
  }, {
    "_id" : "R277",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN161003.status"
  }, {
    "_id" : "R278",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN162070.status"
  }, {
    "_id" : "R279",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN161527.status"
  }, {
    "_id" : "R280",
    "_libelle" : "org.apache.kafka.connect.storage.OffsetStorageReaderImpl.offsetReadFutures"
  }, {
    "_id" : "R281",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.this"
  }, {
    "_id" : "R282",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.configure@POLYN174452.configs"
  }, {
    "_id" : "R283",
    "_libelle" : "java.io.PipedWriter.this"
  }, {
    "_id" : "R284",
    "_libelle" : "java.io.PipedWriter.sink"
  }, {
    "_id" : "R285",
    "_libelle" : "java.io.PipedReader.this"
  }, {
    "_id" : "R286",
    "_libelle" : "java.io.PipedReader.receive@POLYN201987.c"
  }, {
    "_id" : "R287",
    "_libelle" : "java.io.PipedReader.receive@POLYN201987.off"
  }, {
    "_id" : "R288",
    "_libelle" : "java.io.PipedReader.receive@POLYN201987.len"
  }, {
    "_id" : "R289",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.topicLevelSensors"
  }, {
    "_id" : "R290",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN257788.key"
  }, {
    "_id" : "R291",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDBStore.put@POLYN257788.value"
  }, {
    "_id" : "R292",
    "_libelle" : "java.io.PipedOutputStream.connect@POLYN171515.snk"
  }, {
    "_id" : "R293",
    "_libelle" : "java.io.PipedInputStream.receive@POLYN220270.b"
  }, {
    "_id" : "R294",
    "_libelle" : "java.io.PipedWriter.connect@POLYN170745.snk"
  }, {
    "_id" : "R295",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoinIfNecessary@POLYN422246.shortReason"
  }, {
    "_id" : "R296",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoinIfNecessary@POLYN422246.fullReason"
  }, {
    "_id" : "R297",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.ConsumerTask.assignPartitionsLock"
  }, {
    "_id" : "R298",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.this"
  }, {
    "_id" : "R299",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.CommittedOffsetsFile.writeEntries@POLYN155479.committedOffsets"
  }, {
    "_id" : "R300",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.assign@POLYN232017.partitions"
  }, {
    "_id" : "R301",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.addRecord@POLYN236521.record"
  }, {
    "_id" : "R302",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setException@POLYN237466.exception"
  }, {
    "_id" : "R303",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN237597.exception"
  }, {
    "_id" : "R304",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN238822.callback"
  }, {
    "_id" : "R305",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.this"
  }, {
    "_id" : "R306",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.ConsumerMetadata.addTransientTopics@POLYN152072.topics"
  }, {
    "_id" : "R307",
    "_libelle" : "org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN165921.fatalException"
  }, {
    "_id" : "R308",
    "_libelle" : "org.apache.kafka.clients.Metadata.fatalError@POLYN265569.exception"
  }, {
    "_id" : "R309",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.this"
  }, {
    "_id" : "R310",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.this"
  }, {
    "_id" : "R311",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeTaskConfigs@POLYN169277.connector"
  }, {
    "_id" : "R312",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN169925.connector"
  }, {
    "_id" : "R313",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTaskConfigs@POLYN169925.configs"
  }, {
    "_id" : "R314",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.setAclMutator@POLYN170685.aclMutator"
  }, {
    "_id" : "R315",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.this"
  }, {
    "_id" : "R316",
    "_libelle" : "org.apache.kafka.server.log.remote.metadata.storage.RemoteLogMetadataSnapshotFile.write@POLYN177619.snapshot"
  }, {
    "_id" : "R317",
    "_libelle" : "org.apache.kafka.streams.state.internals.DelegatingPeekingKeyValueIterator.this"
  }, {
    "_id" : "R318",
    "_libelle" : "org.apache.kafka.streams.state.internals.KeyValueSegment.this"
  }, {
    "_id" : "R319",
    "_libelle" : "org.apache.kafka.streams.state.internals.KeyValueSegment.deleteRange@POLYN149746.keyFrom"
  }, {
    "_id" : "R320",
    "_libelle" : "org.apache.kafka.streams.state.internals.KeyValueSegment.deleteRange@POLYN149746.keyTo"
  }, {
    "_id" : "R321",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.this"
  }, {
    "_id" : "R322",
    "_libelle" : "org.apache.kafka.trogdor.workload.GaussianThroughputGenerator.calculateNextWindow@POLYN160490.force"
  }, {
    "_id" : "R323",
    "_libelle" : "java.io.FileInputStream.closeLock"
  }, {
    "_id" : "R324",
    "_libelle" : "java.io.FileOutputStream.closeLock"
  }, {
    "_id" : "R325",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.close@POLYN247120.timeout"
  }, {
    "_id" : "R326",
    "_libelle" : "org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.metrics@POLYN202018.errorHandlingMetrics"
  }, {
    "_id" : "R327",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.this"
  }, {
    "_id" : "R328",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN166269.newState"
  }, {
    "_id" : "R329",
    "_libelle" : "org.apache.kafka.connect.runtime.StateTracker.changeState@POLYN166269.now"
  }, {
    "_id" : "R330",
    "_libelle" : "org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.clientLevelSensors"
  }, {
    "_id" : "R331",
    "_libelle" : "org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.setNamedTopology@POLYN487990.namedTopology"
  }, {
    "_id" : "R332",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.setOffsetsException@POLYN237729.exception"
  }, {
    "_id" : "R333",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seekToBeginning@POLYN242290.partitions"
  }, {
    "_id" : "R334",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.seekToEnd@POLYN242714.partitions"
  }, {
    "_id" : "R335",
    "_libelle" : "org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN247673.task"
  }, {
    "_id" : "R336",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setLastRebalanceTime@POLYN446661.timestamp"
  }, {
    "_id" : "R337",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewGeneration@POLYN447471.generation"
  }, {
    "_id" : "R338",
    "_libelle" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewState@POLYN447606.state"
  }, {
    "_id" : "R339",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.this"
  }, {
    "_id" : "R340",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.put@POLYN146596.key"
  }, {
    "_id" : "R341",
    "_libelle" : "org.apache.kafka.common.cache.SynchronizedCache.put@POLYN146596.value"
  }, {
    "_id" : "R342",
    "_libelle" : "org.apache.kafka.common.metrics.Metrics.addReporter@POLYN303183.reporter"
  }, {
    "_id" : "R343",
    "_libelle" : "org.apache.kafka.common.utils.CopyOnWriteMap.putAll@POLYN160447.entries"
  }, {
    "_id" : "R344",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.this"
  }, {
    "_id" : "R345",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.commitTransaction@POLYN153127.record"
  }, {
    "_id" : "R346",
    "_libelle" : "org.apache.kafka.connect.runtime.WorkerTransactionContext.abortTransaction@POLYN153491.record"
  }, {
    "_id" : "R347",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN223998.callback"
  }, {
    "_id" : "R348",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN224229.connName"
  }, {
    "_id" : "R349",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN224229.callback"
  }, {
    "_id" : "R350",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226662.connName"
  }, {
    "_id" : "R351",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226662.config"
  }, {
    "_id" : "R352",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226662.allowReplace"
  }, {
    "_id" : "R353",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226662.callback"
  }, {
    "_id" : "R354",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN229827.connName"
  }, {
    "_id" : "R355",
    "_libelle" : "org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN229827.callback"
  }, {
    "_id" : "R356",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN168307.connector"
  }, {
    "_id" : "R357",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putConnectorConfig@POLYN168307.properties"
  }, {
    "_id" : "R358",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.removeConnectorConfig@POLYN168926.connector"
  }, {
    "_id" : "R359",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN170810.connector"
  }, {
    "_id" : "R360",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.putTargetState@POLYN170810.state"
  }, {
    "_id" : "R361",
    "_libelle" : "org.apache.kafka.connect.storage.MemoryConfigBackingStore.setUpdateListener@POLYN171635.listener"
  }, {
    "_id" : "R362",
    "_libelle" : "org.apache.kafka.metadata.authorizer.StandardAuthorizer.loadSnapshot@POLYN172192.acls"
  }, {
    "_id" : "R363",
    "_libelle" : "org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN167807.newLeader"
  }, {
    "_id" : "R364",
    "_libelle" : "java.io.BufferedInputStream.this"
  }, {
    "_id" : "R365",
    "_libelle" : "java.io.BufferedInputStream.mark@POLYN249289.readlimit"
  }, {
    "_id" : "R366",
    "_libelle" : "java.io.PipedReader.receive@POLYN200309.c"
  }, {
    "_id" : "R367",
    "_libelle" : "java.net.ServerSocket.setSocketFactory@POLYN327961.fac"
  }, {
    "_id" : "R368",
    "_libelle" : "java.net.Socket.setSocketImplFactory@POLYN509974.fac"
  }, {
    "_id" : "R369",
    "_libelle" : "java.util.Hashtable.forEach@POLYN445716.action"
  }, {
    "_id" : "R370",
    "_libelle" : "java.util.Hashtable.replaceAll@POLYN446622.function"
  }, {
    "_id" : "R371",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.this"
  }, {
    "_id" : "R372",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN254890.activePartitionHostMap"
  }, {
    "_id" : "R373",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN254890.standbyPartitionHostMap"
  }, {
    "_id" : "R374",
    "_libelle" : "org.apache.kafka.streams.processor.internals.StreamsMetadataState.onChange@POLYN254890.clusterMetadata"
  }, {
    "_id" : "R375",
    "_libelle" : "org.apache.kafka.streams.state.internals.InMemoryKeyValueStore.putAll@POLYN184058.entries"
  }, {
    "_id" : "R376",
    "_libelle" : "org.apache.kafka.streams.state.internals.NamedCache.setListener@POLYN192244.listener"
  }, {
    "_id" : "R377",
    "_libelle" : "org.apache.kafka.streams.state.internals.RocksDbIterator.this"
  }, {
    "_id" : "R378",
    "_libelle" : "org.apache.kafka.trogdor.workload.PayloadIterator.this"
  }, {
    "_id" : "R379",
    "_libelle" : "org.apache.kafka.trogdor.workload.PayloadIterator.seek@POLYN145234.position"
  }, {
    "_id" : "R380",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.this"
  }, {
    "_id" : "R381",
    "_libelle" : "org.apache.kafka.trogdor.workload.Throttle.delay@POLYN148517.amount"
  }, {
    "_id" : "R382",
    "_libelle" : "java.io.InputStream.mark@POLYN252348.readlimit"
  } ],
  "_lesDeadlocksSequences" : [ {
    "_id" : "0",
    "_lesItems" : [ "S0:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN183669", "S0:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN183669", "S0:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN197712", "S0:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155165 (R0 in line [00067],R1 in line [00067])", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857240", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857529", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857529", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.updateAssignmentMetadataIfNeeded@POLYN859426", "S0:org.apache.kafka.clients.consumer.KafkaConsumer.updateFetchPositions@POLYN912062", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.resetInitializingPositions@POLYN338984 (R2 in line [00695])", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336962", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336351 (R2 in line [00636],R3 in line [00636],R4 in line [00636])", "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S0:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131", "S0:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131.dummymethode_00114" ]
  }, {
    "_id" : "1",
    "_lesItems" : [ "S1:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN183669", "S1:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN183669", "S1:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN197712", "S1:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155165 (R0 in line [00067],R1 in line [00067])", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857240", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857529", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857529", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859883", "S1:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859883", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN498385", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843", "S1:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843", "S1:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN333741 (R2 in line [00576],R9 in line [00576],R10 in line [00576])", "S1:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S1:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131", "S1:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131.dummymethode_00114" ]
  }, {
    "_id" : "2",
    "_lesItems" : [ "S2:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN183669", "S2:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN183669", "S2:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN197712", "S2:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155165 (R0 in line [00067],R1 in line [00067])", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857240", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857529", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857529", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859883", "S2:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859883", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN498385", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843", "S2:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843", "S2:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN333931 (R2 in line [00580],R11 in line [00580],R12 in line [00580])", "S2:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S2:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131", "S2:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131.dummymethode_00114" ]
  }, {
    "_id" : "3",
    "_lesItems" : [ "S3:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN183669", "S3:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN183669", "S3:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN197712", "S3:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155165 (R0 in line [00067],R1 in line [00067])", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857240", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857529", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857529", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859883", "S3:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859883", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN498385", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843", "S3:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN334121 (R2 in line [00584],R13 in line [00584],R14 in line [00584])", "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S3:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131", "S3:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131.dummymethode_00114" ]
  }, {
    "_id" : "4",
    "_lesItems" : [ "S4:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN183669", "S4:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN183669", "S4:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN197712", "S4:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155165 (R0 in line [00067],R1 in line [00067])", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857240", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857529", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857529", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859883", "S4:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859883", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN498385", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843", "S4:org.apache.kafka.clients.consumer.internals.Fetcher.initializeCompletedFetch@POLYN530843", "S4:org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN341891 (R2 in line [00755],R16 in line [00755])", "S4:org.apache.kafka.common.internals.PartitionStates.moveToEnd@POLYN170931", "S4:java.util.HashMap.HashIterator.remove@POLYN675066", "S4:java.util.HashMap.HashIterator.remove@POLYN675066.dummymethode_01445" ]
  }, {
    "_id" : "5",
    "_lesItems" : [ "S5:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN183669", "S5:org.apache.kafka.connect.mirror.MirrorClient.remoteConsumerOffsets@POLYN183669", "S5:org.apache.kafka.connect.mirror.MirrorCheckpointTask.poll@POLYN197712", "S5:org.apache.kafka.connect.mirror.OffsetSyncStore.update@POLYN155165 (R0 in line [00067],R1 in line [00067])", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857240", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857529", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.poll@POLYN857529", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859883", "S5:org.apache.kafka.clients.consumer.KafkaConsumer.pollForFetches@POLYN859883", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN498385", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.collectFetch@POLYN498385", "S5:org.apache.kafka.clients.consumer.internals.Fetcher.fetchRecords@POLYN500666", "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN326831 (R2 in line [00443],R17 in line [00443],R18 in line [00443])", "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S5:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131", "S5:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131.dummymethode_00114" ]
  }, {
    "_id" : "6",
    "_lesItems" : [ "S6:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S6:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S6:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S6:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S6:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S6:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S6:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S6:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S6:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S6:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S6:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN410562", "S6:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN410562", "S6:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN319395 (R2 in line [00273],R24 in line [00273])", "S6:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN319395.dummymethode_00277" ]
  }, {
    "_id" : "7",
    "_lesItems" : [ "S7:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN232612 (R86 in line [00163])", "S7:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN232846 (R86 in line [00168],R150 in line [00175])", "S7:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN232846 (R86 in line [00168],R150 in line [00175])", "S7:org.apache.kafka.clients.consumer.MockConsumer.updateFetchPosition@POLYN248353", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.seek@POLYN324049", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN323859 (R2 in line [00378],R151 in line [00378],R152 in line [00378])", "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S7:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131", "S7:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131.dummymethode_00114" ]
  }, {
    "_id" : "8",
    "_lesItems" : [ "S8:org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN903660", "S8:org.apache.kafka.clients.consumer.KafkaConsumer.currentLag@POLYN903660", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN333003 (R2 in line [00561],R156 in line [00561])", "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S8:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131", "S8:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131.dummymethode_00114" ]
  }, {
    "_id" : "9",
    "_lesItems" : [ "S9:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN894503", "S9:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN894503", "S9:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN341188 (R2 in line [00737],R169 in line [00737])", "S9:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S9:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131", "S9:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131.dummymethode_00114" ]
  }, {
    "_id" : "10",
    "_lesItems" : [ "S10:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN895261", "S10:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN895261", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN341339 (R2 in line [00741],R170 in line [00741])", "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S10:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131", "S10:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131.dummymethode_00114" ]
  }, {
    "_id" : "11",
    "_lesItems" : [ "S11:org.apache.kafka.jmh.consumer.SubscriptionStateBenchmark.setup@POLYN156273", "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN331436 (R2 in line [00529],R171 in line [00529])", "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S11:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131", "S11:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131.dummymethode_00114" ]
  }, {
    "_id" : "12",
    "_lesItems" : [ "S12:org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetIfNeeded@POLYN503623", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN324450 (R2 in line [00390],R220 in line [00390],R221 in line [00390],R222 in line [00390])", "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN323705", "S12:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131", "S12:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131.dummymethode_00114" ]
  }, {
    "_id" : "13",
    "_lesItems" : [ "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN334561 (R2 in line [00596],R243 in line [00596],R244 in line [00596],R245 in line [00596])", "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S13:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131", "S13:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131.dummymethode_00114" ]
  }, {
    "_id" : "14",
    "_lesItems" : [ "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336546 (R2 in line [00640],R246 in line [00640],R247 in line [00640])", "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336546.dummymethode_00641" ]
  }, {
    "_id" : "15",
    "_lesItems" : [ "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN337110 (R2 in line [00651],R248 in line [00651],R249 in line [00651])", "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S15:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131", "S15:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131.dummymethode_00114" ]
  }, {
    "_id" : "16",
    "_lesItems" : [ "S16:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230022 (R86 in line [00113],R266 in line [00113],R267 in line [00113])", "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN315252 (R2 in line [00172],R268 in line [00172],R269 in line [00172])", "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN320296", "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN320296.dummymethode_00292" ]
  }, {
    "_id" : "17",
    "_lesItems" : [ "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeValidatePositionForCurrentLeader@POLYN327303 (R2 in line [00456])", "S17:org.apache.kafka.clients.ApiVersions.get@POLYN150342 (R71 in line [00048])", "S17:java.util.Map.get@POLYN428707" ]
  }, {
    "_id" : "18",
    "_lesItems" : [ "S18:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN341485 (R2 in line [00745],R271 in line [00745],R272 in line [00745])", "S18:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN323705", "S18:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131", "S18:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131.dummymethode_00114" ]
  }, {
    "_id" : "19",
    "_lesItems" : [ "S19:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN829194", "S19:org.apache.kafka.clients.Metadata.bootstrap@POLYN252681 (R8 in line [00238],R62 in line [00238])", "S19:org.apache.kafka.clients.Metadata.bootstrap@POLYN252681.dummymethode_00239" ]
  }, {
    "_id" : "20",
    "_lesItems" : [ "S20:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN548165", "S20:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN555906", "S20:org.apache.kafka.clients.producer.KafkaProducer.waitOnMetadata@POLYN555906", "S20:org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN263601 (R8 in line [00450],R69 in line [00450])", "S20:org.apache.kafka.clients.Metadata.maybeThrowExceptionForTopic@POLYN263601.dummymethode_00451" ]
  }, {
    "_id" : "21",
    "_lesItems" : [ "S21:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN253073 (R8 in line [00249],R101 in line [00249],R102 in line [00249],R103 in line [00249])", "S21:org.apache.kafka.clients.Metadata.update@POLYN253647 (R8 in line [00263],R104 in line [00263],R105 in line [00263],R106 in line [00263],R107 in line [00263])", "S21:org.apache.kafka.clients.Metadata.update@POLYN253647.dummymethode_00264" ]
  }, {
    "_id" : "22",
    "_lesItems" : [ "S22:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleServerDisconnect@POLYN368441", "S22:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleServerDisconnect@POLYN368441", "S22:org.apache.kafka.clients.NetworkClient.DefaultMetadataUpdater.handleFailedRequest@POLYN369382", "S22:org.apache.kafka.clients.Metadata.failedUpdate@POLYN265309 (R8 in line [00490],R187 in line [00490])", "S22:org.apache.kafka.clients.Metadata.failedUpdate@POLYN265309.dummymethode_00491" ]
  }, {
    "_id" : "23",
    "_lesItems" : [ "S23:org.apache.kafka.clients.producer.internals.ProducerMetadata.fatalError@POLYN165921 (R47 in line [00145],R307 in line [00145])", "S23:org.apache.kafka.clients.Metadata.fatalError@POLYN265569 (R8 in line [00500],R308 in line [00500])", "S23:org.apache.kafka.clients.Metadata.fatalError@POLYN265569.dummymethode_00501" ]
  }, {
    "_id" : "24",
    "_lesItems" : [ "S24:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S24:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S24:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S24:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S24:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537945 (R27 in line [01039],R28 in line [01051])", "S24:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN547534 (R29 in line [01215])", "S24:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN547534.dummymethode_01214" ]
  }, {
    "_id" : "25",
    "_lesItems" : [ "S25:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S25:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S25:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S25:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S25:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537945 (R27 in line [01039],R28 in line [01051])", "S25:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537945 (R27 in line [01039],R28 in line [01051])", "S25:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN547534 (R29 in line [01215])", "S25:org.apache.kafka.streams.KafkaStreams.getNextThreadIndex@POLYN547534.dummymethode_01214" ]
  }, {
    "_id" : "26",
    "_lesItems" : [ "S26:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S26:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S26:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S26:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S26:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537945 (R27 in line [01039],R28 in line [01051])", "S26:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537945 (R27 in line [01039],R28 in line [01051])", "S26:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S26:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S26:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN334889 (R21 in line [00215])", "S26:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN334889.dummymethode_00216" ]
  }, {
    "_id" : "27",
    "_lesItems" : [ "S27:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S27:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S27:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S27:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S27:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537945 (R27 in line [01039],R28 in line [01051])", "S27:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537945 (R27 in line [01039],R28 in line [01051])", "S27:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S27:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S27:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S27:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S27:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S27:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN424600 (R22 in line [01103])", "S27:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN424600.dummymethode_01104" ]
  }, {
    "_id" : "28",
    "_lesItems" : [ "S28:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S28:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S28:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S28:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S28:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537945 (R27 in line [01039],R28 in line [01051])", "S28:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537945 (R27 in line [01039],R28 in line [01051])", "S28:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S28:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S28:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S28:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S28:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S28:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN410562", "S28:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN410562", "S28:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN389985", "S28:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN322052 (R2 in line [00334])", "S28:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN322052.dummymethode_00335" ]
  }, {
    "_id" : "29",
    "_lesItems" : [ "S29:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S29:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S29:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S29:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S29:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537945 (R27 in line [01039],R28 in line [01051])", "S29:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537945 (R27 in line [01039],R28 in line [01051])", "S29:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S29:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S29:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S29:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S29:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelSensors@POLYN289709 (R25 in line [00301])", "S29:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN288192", "S29:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN288192.dummymethode_00263" ]
  }, {
    "_id" : "30",
    "_lesItems" : [ "S30:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S30:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S30:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S30:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S30:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537945 (R27 in line [01039],R28 in line [01051])", "S30:org.apache.kafka.streams.KafkaStreams.addStreamThread@POLYN537945 (R27 in line [01039],R28 in line [01051])", "S30:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S30:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S30:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S30:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S30:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelMetrics@POLYN290257 (R26 in line [00310])", "S30:java.util.Hashtable.remove@POLYN477056" ]
  }, {
    "_id" : "31",
    "_lesItems" : [ "S31:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S31:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S31:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S31:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S31:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S31:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S31:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S31:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S31:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S31:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S31:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN424600 (R22 in line [01103])", "S31:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN424600 (R22 in line [01103])", "S31:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.pollNoWakeup@POLYN257696", "S31:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.poll@POLYN255831", "S31:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.UnsentRequests.clean@POLYN273210 (R23 in line [00696])" ]
  }, {
    "_id" : "32",
    "_lesItems" : [ "S32:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S32:org.apache.kafka.streams.KafkaStreams.handleStreamsUncaughtException@POLYN515889", "S32:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S32:org.apache.kafka.streams.KafkaStreams.replaceStreamThread@POLYN514052", "S32:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S32:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S32:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S32:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S32:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S32:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S32:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN424600 (R22 in line [01103])", "S32:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN424600 (R22 in line [01103])", "S32:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.pollNoWakeup@POLYN257696", "S32:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.poll@POLYN255831", "S32:org.apache.kafka.clients.Metadata.maybeThrowAnyException@POLYN262859 (R8 in line [00428])", "S32:org.apache.kafka.clients.Metadata.clearErrorsAndMaybeThrowException@POLYN263787", "S32:org.apache.kafka.clients.Metadata.clearErrorsAndMaybeThrowException@POLYN263787.dummymethode_00456" ]
  }, {
    "_id" : "33",
    "_lesItems" : [ "S33:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN374410", "S33:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN374410", "S33:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToClients@POLYN387523", "S33:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.populateClientStatesMap@POLYN391378", "S33:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.fetchCommittedOffsets@POLYN415111", "S33:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetFetchRequest@POLYN436144", "S33:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN418040 (R22 in line [00926])", "S33:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418849 (R22 in line [00947],R41 in line [00947],R42 in line [00947])", "S33:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418849.dummymethode_00949" ]
  }, {
    "_id" : "34",
    "_lesItems" : [ "S34:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.close@POLYN417158", "S34:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN388634 (R22 in line [00240])", "S34:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN388634 (R22 in line [00240])", "S34:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418495 (R22 in line [00939],R61 in line [00939])", "S34:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418495.dummymethode_00940" ]
  }, {
    "_id" : "35",
    "_lesItems" : [ "S35:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN231055", "S35:org.apache.kafka.connect.runtime.distributed.WorkerCoordinator.poll@POLYN231055", "S35:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN391767 (R22 in line [00322],R149 in line [00322])", "S35:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.failureCause@POLYN440096" ]
  }, {
    "_id" : "36",
    "_lesItems" : [ "S36:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatResponseHandler.handle@POLYN428102", "S36:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatResponseHandler.handle@POLYN428102", "S36:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN422501 (R22 in line [01039],R163 in line [01039])", "S36:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN422809 (R22 in line [01050],R164 in line [01050],R165 in line [01050])", "S36:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN422809 (R22 in line [01050],R164 in line [01050],R165 in line [01050])", "S36:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN422809.dummymethode_01053" ]
  }, {
    "_id" : "37",
    "_lesItems" : [ "S37:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureActiveGroup@POLYN393086", "S37:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN394710", "S37:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN421470 (R22 in line [01017],R216 in line [01017],R217 in line [01017])", "S37:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN420771 (R22 in line [01004],R218 in line [01004],R219 in line [01004])", "S37:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN420771.dummymethode_01005" ]
  }, {
    "_id" : "38",
    "_lesItems" : [ "S38:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418694 (R22 in line [00943],R239 in line [00943])", "S38:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418849 (R22 in line [00947],R41 in line [00947],R42 in line [00947])", "S38:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418849.dummymethode_00949" ]
  }, {
    "_id" : "39",
    "_lesItems" : [ "S39:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN421768 (R22 in line [01023],R240 in line [01023],R241 in line [01023],R242 in line [01023])", "S39:java.lang.String.format@POLYN907077", "S39:java.lang.String.format@POLYN907077.dummymethode_00001" ]
  }, {
    "_id" : "40",
    "_lesItems" : [ "S40:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.rejoinNeededOrPending@POLYN411898", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoinIfNecessary@POLYN422246 (R22 in line [01032],R295 in line [01032],R296 in line [01032])", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN422809 (R22 in line [01050],R164 in line [01050],R165 in line [01050])", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN422809 (R22 in line [01050],R164 in line [01050],R165 in line [01050])", "S40:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN422809.dummymethode_01053" ]
  }, {
    "_id" : "41",
    "_lesItems" : [ "S41:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setLastRebalanceTime@POLYN446661 (R22 in line [01592],R336 in line [01592])", "S41:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setLastRebalanceTime@POLYN446661.dummymethode_01593" ]
  }, {
    "_id" : "42",
    "_lesItems" : [ "S42:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewGeneration@POLYN447471 (R22 in line [01617],R337 in line [01617])", "S42:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewGeneration@POLYN447471.dummymethode_01618" ]
  }, {
    "_id" : "43",
    "_lesItems" : [ "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewState@POLYN447606 (R22 in line [01621],R338 in line [01621])", "S43:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.setNewState@POLYN447606.dummymethode_01622" ]
  }, {
    "_id" : "44",
    "_lesItems" : [ "S44:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN540153", "S44:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN541229 (R27 in line [01113])", "S44:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S44:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S44:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN334889 (R21 in line [00215])", "S44:org.apache.kafka.streams.processor.internals.StreamThread.setState@POLYN334889.dummymethode_00216" ]
  }, {
    "_id" : "45",
    "_lesItems" : [ "S45:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN540153", "S45:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN541229 (R27 in line [01113])", "S45:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S45:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S45:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S45:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S45:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S45:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN424600 (R22 in line [01103])", "S45:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN424600.dummymethode_01104" ]
  }, {
    "_id" : "46",
    "_lesItems" : [ "S46:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN540153", "S46:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN541229 (R27 in line [01113])", "S46:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S46:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S46:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S46:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S46:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S46:org.apache.kafka.clients.consumer.KafkaConsumer.unsubscribe@POLYN850544", "S46:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN410562", "S46:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN410562", "S46:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN389985", "S46:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN322052 (R2 in line [00334])", "S46:org.apache.kafka.clients.consumer.internals.SubscriptionState.pausedPartitions@POLYN322052.dummymethode_00335" ]
  }, {
    "_id" : "47",
    "_lesItems" : [ "S47:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN540153", "S47:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN541229 (R27 in line [01113])", "S47:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S47:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S47:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S47:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S47:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelSensors@POLYN289709 (R25 in line [00301])", "S47:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN288192", "S47:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.threadSensorPrefix@POLYN288192.dummymethode_00263" ]
  }, {
    "_id" : "48",
    "_lesItems" : [ "S48:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN540153", "S48:org.apache.kafka.streams.KafkaStreams.removeStreamThread@POLYN541229 (R27 in line [01113])", "S48:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S48:org.apache.kafka.streams.processor.internals.StreamThread.shutdown@POLYN374742", "S48:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S48:org.apache.kafka.streams.processor.internals.StreamThread.completeShutdown@POLYN375102", "S48:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllThreadLevelMetrics@POLYN290257 (R26 in line [00310])", "S48:java.util.Hashtable.remove@POLYN477056" ]
  }, {
    "_id" : "49",
    "_lesItems" : [ "S49:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466949", "S49:org.apache.kafka.clients.producer.internals.Sender.run@POLYN306378", "S49:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S49:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN390617 (R30 in line [00718])", "S49:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN375653 (R30 in line [00386],R43 in line [00386])", "S49:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN375653.dummymethode_00388" ]
  }, {
    "_id" : "50",
    "_lesItems" : [ "S50:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466949", "S50:org.apache.kafka.clients.producer.internals.Sender.run@POLYN306378", "S50:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S50:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN390617 (R30 in line [00718])", "S50:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN376139 (R30 in line [00397],R44 in line [00397])", "S50:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN376139.dummymethode_00398" ]
  }, {
    "_id" : "51",
    "_lesItems" : [ "S51:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466949", "S51:org.apache.kafka.clients.producer.internals.Sender.run@POLYN306378", "S51:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S51:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN390617 (R30 in line [00718])", "S51:org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN378886 (R30 in line [00468],R45 in line [00468])", "S51:org.apache.kafka.clients.producer.internals.TransactionManager.requestEpochBumpForPartition@POLYN378886.dummymethode_00469" ]
  }, {
    "_id" : "52",
    "_lesItems" : [ "S52:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466949", "S52:org.apache.kafka.clients.producer.internals.Sender.run@POLYN306378", "S52:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S52:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S52:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN394635 (R30 in line [00810],R46 in line [00810])", "S52:org.apache.kafka.clients.producer.internals.TransactionManager.authenticationFailed@POLYN394635.dummymethode_00812" ]
  }, {
    "_id" : "53",
    "_lesItems" : [ "S53:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466949", "S53:org.apache.kafka.clients.producer.internals.Sender.run@POLYN306378", "S53:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S53:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S53:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN309775", "S53:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN354512", "S53:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN350009 (R50 in line [00799])", "S53:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN377149 (R30 in line [00426],R51 in line [00426])", "S53:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN152925", "S53:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN143180", "S53:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN143180.dummymethode_00026" ]
  }, {
    "_id" : "54",
    "_lesItems" : [ "S54:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466949", "S54:org.apache.kafka.clients.producer.internals.Sender.run@POLYN306378", "S54:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S54:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S54:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN309775", "S54:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN354512", "S54:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN350009 (R50 in line [00799])", "S54:org.apache.kafka.clients.producer.internals.TransactionManager.incrementSequenceNumber@POLYN381257 (R30 in line [00521],R52 in line [00521],R53 in line [00521])", "S54:org.apache.kafka.clients.producer.internals.TransactionManager.sequenceNumber@POLYN380891 (R30 in line [00510])", "S54:org.apache.kafka.clients.producer.internals.TxnPartitionMap.getOrCreate@POLYN151590", "S54:org.apache.kafka.clients.producer.internals.TxnPartitionMap.getOrCreate@POLYN151590.dummymethode_00043" ]
  }, {
    "_id" : "55",
    "_lesItems" : [ "S55:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466949", "S55:org.apache.kafka.clients.producer.internals.Sender.run@POLYN306378", "S55:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S55:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S55:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN309775", "S55:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN330457", "S55:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386248 (R30 in line [00624],R55 in line [00624],R56 in line [00624],R57 in line [00624])", "S55:org.apache.kafka.clients.producer.internals.TransactionManager.maybeTransitionToErrorState@POLYN385653 (R30 in line [00610],R58 in line [00610])", "S55:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN376139 (R30 in line [00397],R44 in line [00397])", "S55:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToFatalError@POLYN376139.dummymethode_00398" ]
  }, {
    "_id" : "56",
    "_lesItems" : [ "S56:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466949", "S56:org.apache.kafka.clients.producer.internals.Sender.run@POLYN306378", "S56:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S56:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S56:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN309775", "S56:org.apache.kafka.clients.producer.internals.Sender.failBatch@POLYN330457", "S56:org.apache.kafka.clients.producer.internals.TransactionManager.handleFailedBatch@POLYN386248 (R30 in line [00624],R55 in line [00624],R56 in line [00624],R57 in line [00624])", "S56:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN383074 (R30 in line [00557],R59 in line [00557])", "S56:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN151198", "S56:java.util.Map.get@POLYN428707" ]
  }, {
    "_id" : "57",
    "_lesItems" : [ "S57:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466949", "S57:org.apache.kafka.clients.producer.internals.Sender.run@POLYN306378", "S57:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S57:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S57:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN309775", "S57:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN390011 (R30 in line [00708],R60 in line [00708])", "S57:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN390011.dummymethode_00710" ]
  }, {
    "_id" : "58",
    "_lesItems" : [ "S58:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN548165", "S58:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN548165", "S58:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373330 (R30 in line [00327],R73 in line [00327])", "S58:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN401350" ]
  }, {
    "_id" : "59",
    "_lesItems" : [ "S59:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN314235", "S59:org.apache.kafka.clients.producer.internals.Sender.maybeSendAndPollTransactionalRequest@POLYN314235", "S59:org.apache.kafka.clients.producer.internals.Sender.maybeFindCoordinatorAndRetry@POLYN317922", "S59:org.apache.kafka.clients.producer.internals.TransactionManager.retry@POLYN394457 (R30 in line [00805],R118 in line [00805])", "S59:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.setRetry@POLYN410749", "S59:org.apache.kafka.clients.producer.internals.TransactionManager.TxnRequestHandler.setRetry@POLYN410749.dummymethode_01228" ]
  }, {
    "_id" : "60",
    "_lesItems" : [ "S60:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN319745", "S60:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN319745", "S60:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN327161", "S60:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN385101 (R30 in line [00599],R158 in line [00599],R159 in line [00599])", "S60:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateLastAckedSequence@POLYN383366", "S60:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateLastAckedSequence@POLYN383366.dummymethode_00566" ]
  }, {
    "_id" : "61",
    "_lesItems" : [ "S61:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN323307", "S61:org.apache.kafka.clients.producer.internals.RecordAccumulator.splitAndReenqueue@POLYN337105 (R189 in line [00482])", "S61:org.apache.kafka.clients.producer.internals.TransactionManager.addInFlightBatch@POLYN381651 (R30 in line [00528],R191 in line [00528])", "S61:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN151198", "S61:java.util.Map.get@POLYN428707" ]
  }, {
    "_id" : "62",
    "_lesItems" : [ "S62:org.apache.kafka.clients.producer.internals.TransactionManager.isPartitionAdded@POLYN376573 (R30 in line [00407])", "S62:java.util.Hashtable.contains@POLYN418834 (R82 in line [00307])", "S62:java.util.Hashtable.contains@POLYN418834.dummymethode_00312" ]
  }, {
    "_id" : "63",
    "_lesItems" : [ "S63:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN403922", "S63:java.util.Hashtable.putAll@POLYN430200 (R82 in line [00536],R83 in line [00536])", "S63:java.util.Hashtable.put@POLYN426726 (R82 in line [00471])", "S63:java.util.Hashtable.put@POLYN426726.dummymethode_00478" ]
  }, {
    "_id" : "64",
    "_lesItems" : [ "S64:java.util.Hashtable.forEach@POLYN445716 (R82 in line [00888],R369 in line [00888])", "S64:java.util.Hashtable.forEach@POLYN445716.dummymethode_00889" ]
  }, {
    "_id" : "65",
    "_lesItems" : [ "S65:java.util.Hashtable.replaceAll@POLYN446622 (R82 in line [00908],R370 in line [00908])", "S65:java.util.Hashtable.replaceAll@POLYN446622.dummymethode_00909" ]
  }, {
    "_id" : "66",
    "_lesItems" : [ "S66:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN526240", "S66:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN526240", "S66:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN542486 (R31 in line [00744])", "S66:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN542486 (R31 in line [00744])", "S66:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN188008", "S66:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN189939", "S66:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN189939", "S66:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN163089 (R35 in line [00072],R36 in line [00072],R37 in line [00072],R38 in line [00072])", "S66:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN163089.dummymethode_00075" ]
  }, {
    "_id" : "67",
    "_lesItems" : [ "S67:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN829194", "S67:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN829194", "S67:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN162309 (R35 in line [00060],R63 in line [00060],R64 in line [00060],R65 in line [00060],R66 in line [00060])", "S67:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN162309.dummymethode_00062" ]
  }, {
    "_id" : "68",
    "_lesItems" : [ "S68:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN526240", "S68:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN526240", "S68:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN542486 (R31 in line [00744])", "S68:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN542486 (R31 in line [00744])", "S68:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN188008", "S68:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN189939", "S68:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN189939", "S68:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN163089 (R35 in line [00072],R36 in line [00072],R37 in line [00072],R38 in line [00072])", "S68:org.apache.kafka.common.utils.AppInfoParser.unregisterMetrics@POLYN165024", "S68:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN302401 (R15 in line [00558])", "S68:java.util.HashMap.remove@POLYN650962", "S68:java.util.HashMap.remove@POLYN650962.dummymethode_01064" ]
  }, {
    "_id" : "69",
    "_lesItems" : [ "S69:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN526240", "S69:org.apache.kafka.connect.runtime.distributed.DistributedHerder.run@POLYN526240", "S69:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN542486 (R31 in line [00744])", "S69:org.apache.kafka.connect.runtime.distributed.DistributedHerder.halt@POLYN542486 (R31 in line [00744])", "S69:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN188008", "S69:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN189939", "S69:org.apache.kafka.connect.runtime.distributed.WorkerGroupMember.stop@POLYN189939", "S69:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN163089 (R35 in line [00072],R36 in line [00072],R37 in line [00072],R38 in line [00072])", "S69:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN163089 (R35 in line [00072],R36 in line [00072],R37 in line [00072],R38 in line [00072])", "S69:org.apache.kafka.common.utils.AppInfoParser.unregisterAppInfo@POLYN163089.dummymethode_00075" ]
  }, {
    "_id" : "70",
    "_lesItems" : [ "S70:org.apache.kafka.connect.runtime.errors.RetryWithToleranceOperator.close@POLYN203737 (R39 in line [00335])", "S70:org.apache.kafka.connect.runtime.errors.ProcessingContext.close@POLYN184259", "S70:java.lang.Throwable.addSuppressed@POLYN389411 (R133 in line [01070],R134 in line [01070])", "S70:java.lang.Throwable.addSuppressed@POLYN389411.dummymethode_01074" ]
  }, {
    "_id" : "71",
    "_lesItems" : [ "S71:java.lang.Throwable.writeObject@POLYN387358 (R133 in line [01002],R208 in line [01002])", "S71:java.lang.Throwable.getOurStackTrace@POLYN381385 (R133 in line [00834])", "S71:java.lang.Throwable.getOurStackTrace@POLYN381385.dummymethode_00839" ]
  }, {
    "_id" : "72",
    "_lesItems" : [ "S72:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN374410", "S72:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assign@POLYN374410", "S72:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.assignTasksToClients@POLYN387523", "S72:org.apache.kafka.streams.processor.internals.StreamsPartitionAssignor.populateClientStatesMap@POLYN391378", "S72:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.fetchCommittedOffsets@POLYN415111", "S72:org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetFetchRequest@POLYN436144", "S72:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN418040 (R22 in line [00926])", "S72:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418849 (R22 in line [00947],R41 in line [00947],R42 in line [00947])", "S72:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418849 (R22 in line [00947],R41 in line [00947],R42 in line [00947])", "S72:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN418849.dummymethode_00949" ]
  }, {
    "_id" : "73",
    "_lesItems" : [ "S73:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466949", "S73:org.apache.kafka.clients.producer.internals.Sender.run@POLYN306378", "S73:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S73:org.apache.kafka.clients.producer.internals.TransactionManager.maybeResolveSequences@POLYN390617 (R30 in line [00718])", "S73:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN375653 (R30 in line [00386],R43 in line [00386])", "S73:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN375653 (R30 in line [00386],R43 in line [00386])", "S73:org.apache.kafka.clients.producer.internals.TransactionManager.transitionToAbortableError@POLYN375653.dummymethode_00388" ]
  }, {
    "_id" : "74",
    "_lesItems" : [ "S74:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466949", "S74:org.apache.kafka.clients.producer.internals.Sender.run@POLYN306378", "S74:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S74:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S74:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN309775", "S74:org.apache.kafka.clients.producer.internals.RecordAccumulator.drain@POLYN354512", "S74:org.apache.kafka.clients.producer.internals.RecordAccumulator.drainBatchesForOneNode@POLYN350009 (R50 in line [00799])", "S74:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN377149 (R30 in line [00426],R51 in line [00426])", "S74:org.apache.kafka.clients.producer.internals.TransactionManager.maybeUpdateProducerIdAndEpoch@POLYN377149 (R30 in line [00426],R51 in line [00426])", "S74:org.apache.kafka.clients.producer.internals.TxnPartitionMap.startSequencesAtBeginning@POLYN152925", "S74:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN143180", "S74:org.apache.kafka.common.utils.PrimitiveRef.ofInt@POLYN143180.dummymethode_00026" ]
  }, {
    "_id" : "75",
    "_lesItems" : [ "S75:org.apache.kafka.connect.runtime.Worker.executeStateTransition@POLYN466949", "S75:org.apache.kafka.clients.producer.internals.Sender.run@POLYN306378", "S75:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S75:org.apache.kafka.clients.producer.internals.Sender.runOnce@POLYN308585", "S75:org.apache.kafka.clients.producer.internals.Sender.sendProducerData@POLYN309775", "S75:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN390011 (R30 in line [00708],R60 in line [00708])", "S75:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN390011 (R30 in line [00708],R60 in line [00708])", "S75:org.apache.kafka.clients.producer.internals.TransactionManager.markSequenceUnresolved@POLYN390011.dummymethode_00710" ]
  }, {
    "_id" : "76",
    "_lesItems" : [ "S76:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN829194", "S76:org.apache.kafka.clients.consumer.KafkaConsumer.KafkaConsumer@POLYN829194", "S76:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN162309 (R35 in line [00060],R63 in line [00060],R64 in line [00060],R65 in line [00060],R66 in line [00060])", "S76:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN162309 (R35 in line [00060],R63 in line [00060],R64 in line [00060],R65 in line [00060],R66 in line [00060])", "S76:org.apache.kafka.common.utils.AppInfoParser.registerAppInfo@POLYN162309.dummymethode_00062" ]
  }, {
    "_id" : "77",
    "_lesItems" : [ "S77:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN548165", "S77:org.apache.kafka.clients.producer.KafkaProducer.doSend@POLYN548165", "S77:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373330 (R30 in line [00327],R73 in line [00327])", "S77:org.apache.kafka.clients.producer.internals.TransactionManager.maybeAddPartition@POLYN373330 (R30 in line [00327],R73 in line [00327])", "S77:org.apache.kafka.clients.producer.internals.TransactionManager.maybeFailWithError@POLYN401350" ]
  }, {
    "_id" : "78",
    "_lesItems" : [ "S78:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN292267", "S78:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN292267", "S78:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readConnectorStatus@POLYN287654 (R79 in line [00563])", "S78:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readConnectorStatus@POLYN287654 (R79 in line [00563])", "S78:org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN274918 (R79 in line [00353],R80 in line [00353])", "S78:java.util.Hashtable.remove@POLYN477056" ]
  }, {
    "_id" : "79",
    "_lesItems" : [ "S79:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN292267", "S79:org.apache.kafka.connect.storage.KafkaStatusBackingStore.read@POLYN292267", "S79:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readTaskStatus@POLYN288784 (R79 in line [00589])", "S79:org.apache.kafka.connect.storage.KafkaStatusBackingStore.readTaskStatus@POLYN288784 (R79 in line [00589])", "S79:org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN276226 (R79 in line [00374],R81 in line [00374])", "S79:org.apache.kafka.connect.storage.KafkaStatusBackingStore.remove@POLYN276226 (R79 in line [00374],R81 in line [00374])", "S79:java.io.File.delete@POLYN596930", "S79:java.io.File.delete@POLYN596930.dummymethode_00001" ]
  }, {
    "_id" : "80",
    "_lesItems" : [ "S80:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN403922", "S80:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN410012", "S80:org.apache.kafka.clients.consumer.MockConsumer.updatePartitions@POLYN243829 (R86 in line [00389],R87 in line [00389],R88 in line [00389])", "S80:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "81",
    "_lesItems" : [ "S81:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN403922", "S81:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN410012", "S81:org.apache.kafka.clients.consumer.MockConsumer.updateBeginningOffsets@POLYN242524 (R86 in line [00357],R89 in line [00357])", "S81:java.util.Map.putAll" ]
  }, {
    "_id" : "82",
    "_lesItems" : [ "S82:org.apache.kafka.streams.TopologyTestDriver.TopologyTestDriver@POLYN403922", "S82:org.apache.kafka.streams.TopologyTestDriver.setupGlobalTask@POLYN410012", "S82:org.apache.kafka.clients.consumer.MockConsumer.updateEndOffsets@POLYN242948 (R86 in line [00367],R90 in line [00367])", "S82:java.util.Map.putAll" ]
  }, {
    "_id" : "83",
    "_lesItems" : [ "S83:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN232612 (R86 in line [00163])", "S83:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN232846 (R86 in line [00168],R150 in line [00175])", "S83:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "84",
    "_lesItems" : [ "S84:org.apache.kafka.clients.consumer.MockConsumer.rebalance@POLYN229413 (R86 in line [00096],R202 in line [00096])", "S84:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN319395 (R2 in line [00273],R24 in line [00273])", "S84:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN319395.dummymethode_00277" ]
  }, {
    "_id" : "85",
    "_lesItems" : [ "S85:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN239063 (R86 in line [00280])", "S85:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN239386", "S85:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN238491 (R86 in line [00264],R203 in line [00264])", "S85:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237875 (R86 in line [00254],R204 in line [00254],R205 in line [00254])", "S85:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "86",
    "_lesItems" : [ "S86:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN239216 (R86 in line [00285],R206 in line [00285])", "S86:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN239386", "S86:org.apache.kafka.clients.consumer.MockConsumer.commitSync@POLYN238491 (R86 in line [00264],R203 in line [00264])", "S86:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN237875 (R86 in line [00254],R204 in line [00254],R205 in line [00254])", "S86:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "87",
    "_lesItems" : [ "S87:org.apache.kafka.clients.consumer.MockConsumer.position@POLYN242112 (R86 in line [00347])", "S87:org.apache.kafka.clients.consumer.MockConsumer.position@POLYN241414 (R86 in line [00334])", "S87:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN331759 (R2 in line [00537])", "S87:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S87:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131", "S87:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131.dummymethode_00114" ]
  }, {
    "_id" : "88",
    "_lesItems" : [ "S88:org.apache.kafka.clients.consumer.MockConsumer.seek@POLYN239596 (R86 in line [00295],R223 in line [00295],R224 in line [00295])", "S88:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "89",
    "_lesItems" : [ "S89:org.apache.kafka.clients.consumer.MockConsumer.pause@POLYN244104 (R86 in line [00395],R225 in line [00395])", "S89:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN341188 (R2 in line [00737],R169 in line [00737])", "S89:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S89:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131", "S89:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131.dummymethode_00114" ]
  }, {
    "_id" : "90",
    "_lesItems" : [ "S90:org.apache.kafka.clients.consumer.MockConsumer.resume@POLYN244426 (R86 in line [00403],R226 in line [00403])", "S90:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN341339 (R2 in line [00741],R170 in line [00741])", "S90:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S90:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131", "S90:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131.dummymethode_00114" ]
  }, {
    "_id" : "91",
    "_lesItems" : [ "S91:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN229815 (R86 in line [00108],R263 in line [00108])", "S91:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN231639 (R86 in line [00141],R264 in line [00141],R265 in line [00141])", "S91:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "92",
    "_lesItems" : [ "S92:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN230022 (R86 in line [00113],R266 in line [00113],R267 in line [00113])", "S92:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "93",
    "_lesItems" : [ "S93:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN231453 (R86 in line [00136],R270 in line [00136])", "S93:org.apache.kafka.clients.consumer.MockConsumer.subscribe@POLYN231639 (R86 in line [00141],R264 in line [00141],R265 in line [00141])", "S93:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "94",
    "_lesItems" : [ "S94:org.apache.kafka.clients.consumer.MockConsumer.assign@POLYN232017 (R86 in line [00148],R300 in line [00148])", "S94:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "95",
    "_lesItems" : [ "S95:org.apache.kafka.clients.consumer.MockConsumer.addRecord@POLYN236521 (R86 in line [00227],R301 in line [00227])", "S95:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "96",
    "_lesItems" : [ "S96:org.apache.kafka.clients.consumer.MockConsumer.setException@POLYN237466 (R86 in line [00241],R302 in line [00241])", "S96:org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN237597 (R86 in line [00245],R303 in line [00245])", "S96:org.apache.kafka.clients.consumer.MockConsumer.setPollException@POLYN237597.dummymethode_00246" ]
  }, {
    "_id" : "97",
    "_lesItems" : [ "S97:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN238697 (R86 in line [00269])", "S97:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN238822 (R86 in line [00274],R304 in line [00274])", "S97:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "98",
    "_lesItems" : [ "S98:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN246958", "S98:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN247120 (R86 in line [00455],R325 in line [00455])", "S98:org.apache.kafka.clients.consumer.MockConsumer.close@POLYN247120.dummymethode_00456" ]
  }, {
    "_id" : "99",
    "_lesItems" : [ "S99:org.apache.kafka.clients.consumer.MockConsumer.setOffsetsException@POLYN237729 (R86 in line [00249],R332 in line [00249])", "S99:org.apache.kafka.clients.consumer.MockConsumer.setOffsetsException@POLYN237729.dummymethode_00250" ]
  }, {
    "_id" : "100",
    "_lesItems" : [ "S100:org.apache.kafka.clients.consumer.MockConsumer.seekToBeginning@POLYN242290 (R86 in line [00352],R333 in line [00352])", "S100:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "101",
    "_lesItems" : [ "S101:org.apache.kafka.clients.consumer.MockConsumer.seekToEnd@POLYN242714 (R86 in line [00362],R334 in line [00362])", "S101:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "102",
    "_lesItems" : [ "S102:org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN247673 (R86 in line [00473],R335 in line [00473],R150 in line [00474])", "S102:org.apache.kafka.clients.consumer.MockConsumer.schedulePollTask@POLYN247673.dummymethode_00475" ]
  }, {
    "_id" : "103",
    "_lesItems" : [ "S103:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN259832 (R95 in line [00001],R144 in line [00001])", "S103:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN260127", "S103:org.apache.kafka.common.utils.Utils.delete@POLYN445581", "S103:org.apache.kafka.common.utils.Utils.delete@POLYN445581.dummymethode_00852" ]
  }, {
    "_id" : "104",
    "_lesItems" : [ "S104:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN259832 (R95 in line [00001],R144 in line [00001])", "S104:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN260127", "S104:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN260127", "S104:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN256827 (R95 in line [00001],R145 in line [00001])", "S104:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN256827.dummymethode_00001" ]
  }, {
    "_id" : "105",
    "_lesItems" : [ "S105:org.apache.kafka.streams.processor.internals.StateDirectory.lock@POLYN255622 (R95 in line [00001])", "S105:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN250682 (R184 in line [00001])", "S105:org.apache.kafka.streams.processor.internals.StateDirectory.getOrCreateDirectoryForTask@POLYN250682.dummymethode_00001" ]
  }, {
    "_id" : "106",
    "_lesItems" : [ "S106:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN223081 (R96 in line [00105])", "S106:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN223081 (R96 in line [00105])", "S106:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN239703", "S106:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN464172", "S106:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN461959", "S106:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN460833", "S106:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN460833", "S106:org.apache.kafka.connect.runtime.Worker.stop@POLYN421463", "S106:org.apache.kafka.connect.runtime.Worker.stop@POLYN421463", "S106:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN495368 (R34 in line [01751])" ]
  }, {
    "_id" : "107",
    "_lesItems" : [ "S107:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN223081 (R96 in line [00105])", "S107:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.stop@POLYN223081 (R96 in line [00105])", "S107:org.apache.kafka.connect.runtime.Worker.stopAndAwaitConnector@POLYN434698", "S107:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN431430", "S107:org.apache.kafka.connect.runtime.Worker.stopConnector@POLYN431430", "S107:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN219480 (R33 in line [00256])", "S107:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN219480 (R33 in line [00256])", "S107:org.apache.kafka.connect.runtime.WorkerConnector.shutdown@POLYN219480.dummymethode_00258" ]
  }, {
    "_id" : "108",
    "_lesItems" : [ "S108:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN229453 (R96 in line [00242],R119 in line [00242])", "S108:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN229453 (R96 in line [00242],R119 in line [00242])", "S108:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN229453.dummymethode_00245" ]
  }, {
    "_id" : "109",
    "_lesItems" : [ "S109:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN227575 (R96 in line [00201],R123 in line [00201],R124 in line [00201],R125 in line [00201],R126 in line [00201],R127 in line [00201])", "S109:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN227575.dummymethode_00208" ]
  }, {
    "_id" : "110",
    "_lesItems" : [ "S110:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN225594 (R96 in line [00161],R128 in line [00161],R129 in line [00161])", "S110:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.deleteConnectorConfig@POLYN225594.dummymethode_00165" ]
  }, {
    "_id" : "111",
    "_lesItems" : [ "S111:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnectorAndTasks@POLYN233904 (R96 in line [00309],R131 in line [00309],R132 in line [00309])", "S111:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN162722", "S111:org.apache.kafka.connect.runtime.RestartRequest.connectorName@POLYN162722.dummymethode_00055" ]
  }, {
    "_id" : "112",
    "_lesItems" : [ "S112:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN231288 (R96 in line [00274],R135 in line [00274],R136 in line [00274])", "S112:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartTask@POLYN231288.dummymethode_00276" ]
  }, {
    "_id" : "113",
    "_lesItems" : [ "S113:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN232701 (R96 in line [00291],R180 in line [00291],R181 in line [00291])", "S113:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.restartConnector@POLYN232701.dummymethode_00293" ]
  }, {
    "_id" : "114",
    "_lesItems" : [ "S114:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectors@POLYN223998 (R96 in line [00133],R347 in line [00133])", "S114:org.apache.kafka.connect.util.Callback.onCompletion" ]
  }, {
    "_id" : "115",
    "_lesItems" : [ "S115:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN224229 (R96 in line [00138],R348 in line [00138],R349 in line [00138])", "S115:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.connectorInfo@POLYN224229.dummymethode_00141" ]
  }, {
    "_id" : "116",
    "_lesItems" : [ "S116:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226662 (R96 in line [00181],R350 in line [00181],R351 in line [00181],R352 in line [00181],R353 in line [00181])", "S116:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.putConnectorConfig@POLYN226662.dummymethode_00186" ]
  }, {
    "_id" : "117",
    "_lesItems" : [ "S117:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN229827 (R96 in line [00251],R354 in line [00251],R355 in line [00251])", "S117:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.taskConfigs@POLYN229827.dummymethode_00253" ]
  }, {
    "_id" : "118",
    "_lesItems" : [ "S118:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN253073 (R8 in line [00249],R101 in line [00249],R102 in line [00249],R103 in line [00249])", "S118:org.apache.kafka.clients.Metadata.update@POLYN253647 (R8 in line [00263],R104 in line [00263],R105 in line [00263],R106 in line [00263],R107 in line [00263])", "S118:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN256651", "S118:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN256651", "S118:org.apache.kafka.clients.Metadata.requestUpdate@POLYN248167 (R8 in line [00145])", "S118:org.apache.kafka.clients.Metadata.requestUpdate@POLYN248167.dummymethode_00146" ]
  }, {
    "_id" : "119",
    "_lesItems" : [ "S119:org.apache.kafka.clients.Metadata.updateWithCurrentRequestVersion@POLYN253073 (R8 in line [00249],R101 in line [00249],R102 in line [00249],R103 in line [00249])", "S119:org.apache.kafka.clients.Metadata.update@POLYN253647 (R8 in line [00263],R104 in line [00263],R105 in line [00263],R106 in line [00263],R107 in line [00263])", "S119:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN256651", "S119:org.apache.kafka.clients.Metadata.handleMetadataResponse@POLYN256651", "S119:org.apache.kafka.common.requests.MetadataResponse.brokersById@POLYN222353", "S119:org.apache.kafka.common.requests.MetadataResponse.holder@POLYN221746 (R108 in line [00001])", "S119:org.apache.kafka.common.requests.MetadataResponse.Holder.Holder@POLYN229895", "S119:org.apache.kafka.common.requests.MetadataResponse.Holder.Holder@POLYN229895.dummymethode_00001" ]
  }, {
    "_id" : "120",
    "_lesItems" : [ "S120:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN222254", "S120:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN222552 (R114 in line [00104],R115 in line [00104])", "S120:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN222552 (R114 in line [00104],R115 in line [00104])", "S120:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN225392", "S120:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN225392.dummymethode_00170" ]
  }, {
    "_id" : "121",
    "_lesItems" : [ "S121:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN222254", "S121:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN222552 (R114 in line [00104],R115 in line [00104])", "S121:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN222552 (R114 in line [00104],R115 in line [00104])", "S121:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.addNamedTopology@POLYN225392", "S121:org.apache.kafka.streams.processor.internals.TopologyMetadata.registerAndBuildNewTopology@POLYN250662", "S121:org.apache.kafka.streams.processor.internals.TopologyMetadata.buildAndVerifyTopology@POLYN254513", "S121:org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.rewriteTopology@POLYN488401 (R84 in line [00412])", "S121:org.apache.kafka.streams.processor.internals.InternalTopologyBuilder.rewriteTopology@POLYN488401.dummymethode_00413" ]
  }, {
    "_id" : "122",
    "_lesItems" : [ "S122:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN222254", "S122:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN222552 (R114 in line [00104],R115 in line [00104])", "S122:org.apache.kafka.streams.processor.internals.namedtopology.KafkaStreamsNamedTopologyWrapper.start@POLYN222552 (R114 in line [00104],R115 in line [00104])", "S122:org.apache.kafka.streams.KafkaStreams.start@POLYN552047 (R19 in line [01832])", "S122:org.apache.kafka.streams.KafkaStreams.start@POLYN552047.dummymethode_01832" ]
  }, {
    "_id" : "123",
    "_lesItems" : [ "S123:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN229453 (R96 in line [00242],R119 in line [00242])", "S123:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.requestTaskReconfiguration@POLYN229453 (R96 in line [00242],R119 in line [00242])", "S123:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.updateConnectorTasks@POLYN240183", "S123:org.apache.kafka.connect.runtime.standalone.StandaloneHerder.removeConnectorTasks@POLYN239703", "S123:org.apache.kafka.connect.runtime.Worker.stopAndAwaitTasks@POLYN464172", "S123:org.apache.kafka.connect.runtime.Worker.stopTasks@POLYN461959", "S123:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN460833", "S123:org.apache.kafka.connect.runtime.Worker.stopTask@POLYN460833", "S123:org.apache.kafka.connect.runtime.Worker.stop@POLYN421463", "S123:org.apache.kafka.connect.runtime.Worker.stop@POLYN421463", "S123:org.apache.kafka.connect.runtime.Worker.ConnectorStatusMetricsGroup.close@POLYN495368 (R34 in line [01751])" ]
  }, {
    "_id" : "124",
    "_lesItems" : [ "S124:org.apache.kafka.snapshot.RecordsSnapshotWriter.freeze@POLYN169721", "S124:org.apache.kafka.snapshot.RecordsSnapshotWriter.appendBatches@POLYN170152", "S124:org.apache.kafka.snapshot.RecordsSnapshotWriter.append@POLYN169023", "S124:org.apache.kafka.raft.internals.BatchAccumulator.append@POLYN217207", "S124:org.apache.kafka.raft.internals.BatchAccumulator.maybeAllocateBatch@POLYN219286", "S124:org.apache.kafka.raft.internals.BatchBuilder.bytesNeeded@POLYN192119", "S124:org.apache.kafka.common.protocol.DataOutputStreamWritable.flush@POLYN158695", "S124:java.io.BufferedOutputStream.flush@POLYN162465 (R140 in line [00139])", "S124:java.io.BufferedOutputStream.flushBuffer@POLYN160134", "S124:java.io.BufferedOutputStream.write@POLYN161430 (R140 in line [00116],R141 in line [00116],R142 in line [00116],R143 in line [00116])", "S124:java.io.BufferedOutputStream.write@POLYN161430 (R140 in line [00116],R141 in line [00116],R142 in line [00116],R143 in line [00116])", "S124:java.io.BufferedOutputStream.write@POLYN161430.dummymethode_00123" ]
  }, {
    "_id" : "125",
    "_lesItems" : [ "S125:org.apache.kafka.streams.state.internals.RocksDBStore.putAll@POLYN258770", "S125:java.io.BufferedOutputStream.write@POLYN160569 (R140 in line [00093],R262 in line [00093])", "S125:java.io.BufferedOutputStream.flushBuffer@POLYN160134", "S125:java.io.BufferedOutputStream.write@POLYN161430 (R140 in line [00116],R141 in line [00116],R142 in line [00116],R143 in line [00116])", "S125:java.io.BufferedOutputStream.write@POLYN161430 (R140 in line [00116],R141 in line [00116],R142 in line [00116],R143 in line [00116])", "S125:java.io.BufferedOutputStream.write@POLYN161430.dummymethode_00123" ]
  }, {
    "_id" : "126",
    "_lesItems" : [ "S126:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasks@POLYN259832 (R95 in line [00001],R144 in line [00001])", "S126:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN260127", "S126:org.apache.kafka.streams.processor.internals.StateDirectory.cleanRemovedTasksCalledByCleanerThread@POLYN260127", "S126:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN256827 (R95 in line [00001],R145 in line [00001])", "S126:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN256827 (R95 in line [00001],R145 in line [00001])", "S126:org.apache.kafka.streams.processor.internals.StateDirectory.unlock@POLYN256827.dummymethode_00001" ]
  }, {
    "_id" : "127",
    "_lesItems" : [ "S127:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN195101", "S127:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN194835 (R146 in line [00157],R147 in line [00157],R148 in line [00157])", "S127:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN144502", "S127:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN144502.dummymethode_00038" ]
  }, {
    "_id" : "128",
    "_lesItems" : [ "S128:org.apache.kafka.streams.state.internals.NamedCache.putAll@POLYN199093 (R146 in line [00256],R168 in line [00256])", "S128:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN194835 (R146 in line [00157],R147 in line [00157],R148 in line [00157])", "S128:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN144502", "S128:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN144502.dummymethode_00038" ]
  }, {
    "_id" : "129",
    "_lesItems" : [ "S129:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN200520 (R153 in line [00254],R229 in line [00254])", "S129:org.apache.kafka.streams.state.internals.NamedCache.close@POLYN203436 (R146 in line [00345])", "S129:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.removeAllCacheLevelSensors@POLYN298349 (R230 in line [00462])", "S129:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheSensorPrefix@POLYN299000", "S129:org.apache.kafka.streams.processor.internals.metrics.StreamsMetricsImpl.cacheSensorPrefix@POLYN299000.dummymethode_00471" ]
  }, {
    "_id" : "130",
    "_lesItems" : [ "S130:org.apache.kafka.streams.state.internals.NamedCache.setListener@POLYN192244 (R146 in line [00104],R376 in line [00104])", "S130:org.apache.kafka.streams.state.internals.NamedCache.setListener@POLYN192244.dummymethode_00105" ]
  }, {
    "_id" : "131",
    "_lesItems" : [ "S131:org.apache.kafka.streams.state.internals.ThreadCache.put@POLYN195101", "S131:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN194835 (R146 in line [00157],R147 in line [00157],R148 in line [00157])", "S131:org.apache.kafka.streams.state.internals.NamedCache.put@POLYN194835 (R146 in line [00157],R147 in line [00157],R148 in line [00157])", "S131:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN144502", "S131:org.apache.kafka.streams.state.internals.InMemoryKeyValueBytesStoreSupplier.get@POLYN144502.dummymethode_00038" ]
  }, {
    "_id" : "132",
    "_lesItems" : [ "S132:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN232612 (R86 in line [00163])", "S132:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN232846 (R86 in line [00168],R150 in line [00175])", "S132:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN232846 (R86 in line [00168],R150 in line [00175])", "S132:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  }, {
    "_id" : "133",
    "_lesItems" : [ "S133:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN232612 (R86 in line [00163])", "S133:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN232846 (R86 in line [00168],R150 in line [00175])", "S133:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN232846 (R86 in line [00168],R150 in line [00175])", "S133:org.apache.kafka.clients.consumer.MockConsumer.updateFetchPosition@POLYN248353", "S133:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336962", "S133:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336351 (R2 in line [00636],R3 in line [00636],R4 in line [00636])", "S133:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S133:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131", "S133:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131.dummymethode_00114" ]
  }, {
    "_id" : "134",
    "_lesItems" : [ "S134:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN232612 (R86 in line [00163])", "S134:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN232846 (R86 in line [00168],R150 in line [00175])", "S134:org.apache.kafka.clients.consumer.MockConsumer.poll@POLYN232846 (R86 in line [00168],R150 in line [00175])", "S134:org.apache.kafka.clients.consumer.MockConsumer.updateFetchPosition@POLYN248353", "S134:org.apache.kafka.clients.consumer.internals.SubscriptionState.seek@POLYN324049", "S134:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN323859 (R2 in line [00378],R151 in line [00378],R152 in line [00378])", "S134:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN323859 (R2 in line [00378],R151 in line [00378],R152 in line [00378])", "S134:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S134:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131", "S134:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131.dummymethode_00114" ]
  }, {
    "_id" : "135",
    "_lesItems" : [ "S135:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN191589 (R153 in line [00075],R154 in line [00075])", "S135:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN191589.dummymethode_00077" ]
  }, {
    "_id" : "136",
    "_lesItems" : [ "S136:org.apache.kafka.streams.state.internals.ThreadCache.close@POLYN200520 (R153 in line [00254],R229 in line [00254])", "S136:java.util.Hashtable.remove@POLYN477056" ]
  }, {
    "_id" : "137",
    "_lesItems" : [ "S137:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN191589 (R153 in line [00075],R154 in line [00075])", "S137:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN191589 (R153 in line [00075],R154 in line [00075])", "S137:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN191589.dummymethode_00077" ]
  }, {
    "_id" : "138",
    "_lesItems" : [ "S138:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN191589 (R153 in line [00075],R154 in line [00075])", "S138:org.apache.kafka.streams.state.internals.ThreadCache.resize@POLYN191589 (R153 in line [00075],R154 in line [00075])", "S138:org.apache.kafka.streams.state.internals.NamedCache.evict@POLYN198152 (R146 in line [00235])", "S138:org.apache.kafka.streams.state.internals.NamedCache.evict@POLYN198152.dummymethode_00237" ]
  }, {
    "_id" : "139",
    "_lesItems" : [ "S139:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN319745", "S139:org.apache.kafka.clients.producer.internals.Sender.handleProduceResponse@POLYN319745", "S139:org.apache.kafka.clients.producer.internals.Sender.completeBatch@POLYN327161", "S139:org.apache.kafka.clients.producer.internals.TransactionManager.handleCompletedBatch@POLYN385101 (R30 in line [00599],R158 in line [00599],R159 in line [00599])", "S139:org.apache.kafka.clients.producer.internals.TransactionManager.removeInFlightBatch@POLYN383074 (R30 in line [00557],R59 in line [00557])", "S139:org.apache.kafka.clients.producer.internals.TxnPartitionMap.get@POLYN151198", "S139:java.util.Map.get@POLYN428707" ]
  }, {
    "_id" : "140",
    "_lesItems" : [ "S140:org.apache.kafka.common.network.Selector.connect@POLYN403299", "S140:org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN405021", "S140:java.net.Socket.setSendBufferSize@POLYN494347 (R160 in line [00001],R161 in line [00001])" ]
  }, {
    "_id" : "141",
    "_lesItems" : [ "S141:org.apache.kafka.common.network.Selector.connect@POLYN403299", "S141:org.apache.kafka.common.network.Selector.configureSocketChannel@POLYN405021", "S141:java.net.Socket.setReceiveBufferSize@POLYN497050 (R160 in line [00001],R162 in line [00001])" ]
  }, {
    "_id" : "142",
    "_lesItems" : [ "S142:java.net.Socket.Socket@POLYN469199", "S142:java.net.Socket.close@POLYN504776 (R160 in line [00001],R201 in line [00001])", "S142:java.net.Socket.close@POLYN504776 (R160 in line [00001],R201 in line [00001])", "S142:java.net.Socket.close@POLYN504776.dummymethode_00001" ]
  }, {
    "_id" : "143",
    "_lesItems" : [ "S143:java.net.Socket.setSocketImplFactory@POLYN509974 (R160 in line [00001],R368 in line [00001])", "S143:java.net.Socket.setSocketImplFactory@POLYN509974.dummymethode_00001" ]
  }, {
    "_id" : "144",
    "_lesItems" : [ "S144:org.apache.kafka.common.network.Selector.SelectorMetrics.close@POLYN463848", "S144:org.apache.kafka.common.network.Selector.SelectorMetrics.close@POLYN463848", "S144:org.apache.kafka.common.metrics.internals.IntGaugeSuite.close@POLYN188928 (R166 in line [00256])", "S144:org.apache.kafka.common.metrics.internals.IntGaugeSuite.performPendingMetricsOperations@POLYN186654", "S144:org.apache.kafka.common.metrics.Metrics.removeMetric@POLYN302401 (R15 in line [00558])", "S144:java.util.HashMap.remove@POLYN650962", "S144:java.util.HashMap.remove@POLYN650962.dummymethode_01064" ]
  }, {
    "_id" : "145",
    "_lesItems" : [ "S145:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN187936 (R166 in line [00235],R250 in line [00235])", "S145:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN187936.dummymethode_00237" ]
  }, {
    "_id" : "146",
    "_lesItems" : [ "S146:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN894503", "S146:org.apache.kafka.clients.consumer.KafkaConsumer.pause@POLYN894503", "S146:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN341188 (R2 in line [00737],R169 in line [00737])", "S146:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN341188 (R2 in line [00737],R169 in line [00737])", "S146:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S146:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131", "S146:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131.dummymethode_00114" ]
  }, {
    "_id" : "147",
    "_lesItems" : [ "S147:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN895261", "S147:org.apache.kafka.clients.consumer.KafkaConsumer.resume@POLYN895261", "S147:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN341339 (R2 in line [00741],R170 in line [00741])", "S147:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN341339 (R2 in line [00741],R170 in line [00741])", "S147:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S147:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131", "S147:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131.dummymethode_00114" ]
  }, {
    "_id" : "148",
    "_lesItems" : [ "S148:org.apache.kafka.jmh.consumer.SubscriptionStateBenchmark.setup@POLYN156273", "S148:org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN331436 (R2 in line [00529],R171 in line [00529])", "S148:org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN331436 (R2 in line [00529],R171 in line [00529])", "S148:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S148:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131", "S148:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131.dummymethode_00114" ]
  }, {
    "_id" : "149",
    "_lesItems" : [ "S149:org.apache.kafka.streams.state.internals.CachingWindowStore.putAndMaybeForward@POLYN234258", "S149:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN237048 (R172 in line [00156],R173 in line [00156],R174 in line [00156],R175 in line [00156])", "S149:org.apache.kafka.streams.state.internals.WrappedStateStore.validateStoreOpen@POLYN159715" ]
  }, {
    "_id" : "150",
    "_lesItems" : [ "S150:org.apache.kafka.streams.state.internals.CachingWindowStore.putAndMaybeForward@POLYN234258", "S150:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN237048 (R172 in line [00156],R173 in line [00156],R174 in line [00156],R175 in line [00156])", "S150:org.apache.kafka.streams.state.internals.CachingWindowStore.put@POLYN237048 (R172 in line [00156],R173 in line [00156],R174 in line [00156],R175 in line [00156])", "S150:org.apache.kafka.streams.state.internals.WrappedStateStore.validateStoreOpen@POLYN159715" ]
  }, {
    "_id" : "151",
    "_lesItems" : [ "S151:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN254555", "S151:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN257244", "S151:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN260277 (R176 in line [00260],R177 in line [00260],R178 in line [00260],R179 in line [00260])", "S151:org.apache.kafka.streams.state.internals.WrappedStateStore.validateStoreOpen@POLYN159715" ]
  }, {
    "_id" : "152",
    "_lesItems" : [ "S152:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN254555", "S152:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.putAndMaybeForward@POLYN257244", "S152:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN260277 (R176 in line [00260],R177 in line [00260],R178 in line [00260],R179 in line [00260])", "S152:org.apache.kafka.streams.state.internals.TimeOrderedCachingWindowStore.put@POLYN260277 (R176 in line [00260],R177 in line [00260],R178 in line [00260],R179 in line [00260])", "S152:org.apache.kafka.streams.state.internals.WrappedStateStore.validateStoreOpen@POLYN159715" ]
  }, {
    "_id" : "153",
    "_lesItems" : [ "S153:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN166516 (R182 in line [00139],R183 in line [00139])", "S153:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN166516.dummymethode_00141" ]
  }, {
    "_id" : "154",
    "_lesItems" : [ "S154:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN164050 (R182 in line [00076],R214 in line [00076])", "S154:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN164050.dummymethode_00078" ]
  }, {
    "_id" : "155",
    "_lesItems" : [ "S155:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN167807 (R182 in line [00169],R363 in line [00169])", "S155:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN167807 (R182 in line [00169],R363 in line [00169])", "S155:org.apache.kafka.raft.ReplicatedCounter.handleLeaderChange@POLYN167807.dummymethode_00173" ]
  }, {
    "_id" : "156",
    "_lesItems" : [ "S156:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN166516 (R182 in line [00139],R183 in line [00139])", "S156:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN166516 (R182 in line [00139],R183 in line [00139])", "S156:org.apache.kafka.raft.ReplicatedCounter.handleSnapshot@POLYN166516.dummymethode_00141" ]
  }, {
    "_id" : "157",
    "_lesItems" : [ "S157:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN164642 (R198 in line [00093],R199 in line [00093])", "S157:org.apache.kafka.common.utils.Time.milliseconds@POLYN154337" ]
  }, {
    "_id" : "158",
    "_lesItems" : [ "S158:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN164642 (R198 in line [00093],R199 in line [00093])", "S158:org.apache.kafka.trogdor.workload.TimestampRecordProcessor.processRecords@POLYN164642 (R198 in line [00093],R199 in line [00093])", "S158:org.apache.kafka.common.utils.Time.milliseconds@POLYN154337" ]
  }, {
    "_id" : "159",
    "_lesItems" : [ "S159:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN164050 (R182 in line [00076],R214 in line [00076])", "S159:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN164050 (R182 in line [00076],R214 in line [00076])", "S159:org.apache.kafka.raft.ReplicatedCounter.handleCommit@POLYN164050.dummymethode_00078" ]
  }, {
    "_id" : "160",
    "_lesItems" : [ "S160:org.apache.kafka.clients.consumer.internals.Fetcher.resetOffsetIfNeeded@POLYN503623", "S160:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN324450 (R2 in line [00390],R220 in line [00390],R221 in line [00390],R222 in line [00390])", "S160:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN324450 (R2 in line [00390],R220 in line [00390],R221 in line [00390],R222 in line [00390])", "S160:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN323705", "S160:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131", "S160:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131.dummymethode_00114" ]
  }, {
    "_id" : "161",
    "_lesItems" : [ "S161:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN421768 (R22 in line [01023],R240 in line [01023],R241 in line [01023],R242 in line [01023])", "S161:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN421470 (R22 in line [01017],R216 in line [01017],R217 in line [01017])", "S161:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN420771 (R22 in line [01004],R218 in line [01004],R219 in line [01004])", "S161:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN420771.dummymethode_01005" ]
  }, {
    "_id" : "162",
    "_lesItems" : [ "S162:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN334561 (R2 in line [00596],R243 in line [00596],R244 in line [00596],R245 in line [00596])", "S162:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN334561 (R2 in line [00596],R243 in line [00596],R244 in line [00596],R245 in line [00596])", "S162:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S162:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131", "S162:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131.dummymethode_00114" ]
  }, {
    "_id" : "163",
    "_lesItems" : [ "S163:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336546 (R2 in line [00640],R246 in line [00640],R247 in line [00640])", "S163:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336546 (R2 in line [00640],R246 in line [00640],R247 in line [00640])", "S163:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336546.dummymethode_00641" ]
  }, {
    "_id" : "164",
    "_lesItems" : [ "S164:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336546 (R2 in line [00640],R246 in line [00640],R247 in line [00640])", "S164:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN336546 (R2 in line [00640],R246 in line [00640],R247 in line [00640])", "S164:java.io.InputStream.reset@POLYN254146 (R5 in line [00350])" ]
  }, {
    "_id" : "165",
    "_lesItems" : [ "S165:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN337110 (R2 in line [00651],R248 in line [00651],R249 in line [00651])", "S165:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN337110 (R2 in line [00651],R248 in line [00651],R249 in line [00651])", "S165:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN323340", "S165:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131", "S165:org.apache.kafka.common.internals.PartitionStates.stateValue@POLYN173131.dummymethode_00114" ]
  }, {
    "_id" : "166",
    "_lesItems" : [ "S166:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN187936 (R166 in line [00235],R250 in line [00235])", "S166:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN187936 (R166 in line [00235],R250 in line [00235])", "S166:org.apache.kafka.common.metrics.internals.IntGaugeSuite.decrement@POLYN187936.dummymethode_00237" ]
  }, {
    "_id" : "167",
    "_lesItems" : [ "S167:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN161382 (R275 in line [00071],R276 in line [00071])", "S167:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN161003 (R275 in line [00063],R277 in line [00063])", "S167:java.util.HashMap.remove@POLYN650962", "S167:java.util.HashMap.remove@POLYN650962.dummymethode_01064" ]
  }, {
    "_id" : "168",
    "_lesItems" : [ "S168:org.apache.kafka.connect.storage.MemoryStatusBackingStore.putSafe@POLYN162070 (R275 in line [00084],R278 in line [00084])", "S168:org.apache.kafka.connect.storage.MemoryStatusBackingStore.put@POLYN161527 (R275 in line [00076],R279 in line [00076])", "S168:org.apache.kafka.connect.util.Table.remove@POLYN149783", "S168:org.apache.kafka.connect.util.Table.remove@POLYN149783.dummymethode_00046" ]
  }, {
    "_id" : "169",
    "_lesItems" : [ "S169:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN238697 (R86 in line [00269])", "S169:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN238822 (R86 in line [00274],R304 in line [00274])", "S169:org.apache.kafka.clients.consumer.MockConsumer.commitAsync@POLYN238822 (R86 in line [00274],R304 in line [00274])", "S169:org.apache.kafka.clients.consumer.MockConsumer.ensureNotClosed@POLYN248195" ]
  } ],
  "_lesDeadlocksTypos" : [ ]
}