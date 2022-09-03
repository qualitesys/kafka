console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java 463 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractCoordinator"
 , "c2" : "org.apache.kafka.clients.consumer.internals.ConsumerCoordinator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.internals.ConsumerCoordinator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "ConsumerCoordinator"
 , "c2" : "ConsumerCoordinator(GroupRebalanceConfig;LogContext;ConsumerNetworkClient;List<ConsumerPartitionAssignor>;ConsumerMetadata;SubscriptionState;Metrics;String;Time;boolean;int;ConsumerInterceptors<?,?>;boolean)"
 , "c3" : "6"
 , "c4" : "25"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "isLeader()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "SubscriptionState"
 , "c2" : "subscriptionState()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "String"
 , "c2" : "protocolType()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "JoinGroupRequestData.JoinGroupRequestProtocolCollection"
 , "c2" : "metadata()"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "updatePatternSubscription(Cluster)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "ConsumerPartitionAssignor"
 , "c2" : "lookupAssignor(String)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "maybeUpdateJoinedSubscription(Set<TopicPartition>)"
 , "c3" : "6"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Exception"
 , "c2" : "invokeOnAssignment(ConsumerPartitionAssignor;Assignment)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Exception"
 , "c2" : "invokePartitionsAssigned(SortedSet<TopicPartition>)"
 , "c3" : "1"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Exception"
 , "c2" : "invokePartitionsRevoked(SortedSet<TopicPartition>)"
 , "c3" : "2"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Exception"
 , "c2" : "invokePartitionsLost(SortedSet<TopicPartition>)"
 , "c3" : "2"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "onJoinComplete(int;String;String;ByteBuffer)"
 , "c3" : "11"
 , "c4" : "32"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "maybeUpdateSubscriptionMetadata()"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "coordinatorUnknownAndUnready(Timer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "poll(Timer;boolean)"
 , "c3" : "11"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "long"
 , "c2" : "timeToNextPoll(long)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "updateGroupSubscription(Set<String>)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "isAssignFromSubscribedTopicsAssignor(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "maybeUpdateGroupSubscription(String;Map<String,Assignment>;Set<String>)"
 , "c3" : "6"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Map<String,ByteBuffer>"
 , "c2" : "onLeaderElected(String;String;List<JoinGroupResponseData.JoinGroupResponseMember>;boolean)"
 , "c3" : "6"
 , "c4" : "26"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "validateCooperativeAssignment(Map<String,List<TopicPartition>>;Map<String,Assignment>)"
 , "c3" : "3"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "onJoinPrepare(int;String)"
 , "c3" : "13"
 , "c4" : "27"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "onLeavePrepare()"
 , "c3" : "5"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "rejoinNeededOrPending()"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "refreshCommittedOffsetsIfNeeded(Timer)"
 , "c3" : "6"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "Map<TopicPartition,OffsetAndMetadata>"
 , "c2" : "fetchCommittedOffsets(Set<TopicPartition>;Timer)"
 , "c3" : "14"
 , "c4" : "16"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "ConsumerGroupMetadata"
 , "c2" : "groupMetadata()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "close(Timer)"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "invokeCompletedOffsetCommitCallbacks()"
 , "c3" : "4"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "RequestFuture<Void>"
 , "c2" : "commitOffsetsAsync(Map<TopicPartition,OffsetAndMetadata>;OffsetCommitCallback)"
 , "c3" : "5"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "RequestFuture<Void>"
 , "c2" : "doCommitOffsetsAsync(Map<TopicPartition,OffsetAndMetadata>;OffsetCommitCallback)"
 , "c3" : "4"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "commitOffsetsSync(Map<TopicPartition,OffsetAndMetadata>;Timer)"
 , "c3" : "8"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "maybeAutoCommitOffsetsSync(Timer)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "void"
 , "c2" : "maybeAutoCommitOffsetsAsync(long)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "RequestFuture<Void>"
 , "c2" : "autoCommitOffsetsAsync()"
 , "c3" : "5"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "RequestFuture<Void>"
 , "c2" : "maybeAutoCommitOffsetsAsync()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "RequestFuture<Void>"
 , "c2" : "sendOffsetCommitRequest(Map<TopicPartition,OffsetAndMetadata>)"
 , "c3" : "10"
 , "c4" : "19"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "RequestFuture<Map<TopicPartition,OffsetAndMetadata>>"
 , "c2" : "sendOffsetFetchRequest(Set<TopicPartition>)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "RebalanceProtocol"
 , "c2" : "getProtocol()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "poll(Timer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "98"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "29"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "17"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "35"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "226"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "33"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "18"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00108] The class PendingCommittedOffsetRequest contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#121"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00121] For method sameRequest arguments Set&lt;TopicPartition &gt;  currentRequest|Generation  currentGeneration"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#129"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00129] The argument rebalanceConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#130"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00130] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#132"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00132] The argument assignors is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#133"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00133] The argument metadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00137"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#137"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00137] The argument time is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinator@POLYN378544 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinator@POLYN378544 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00183] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinator@POLYN378544 the MagicNumber/String  'Specified assignors ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinator@POLYN378544 the MagicNumber/String  ' do not have commonly supported rebalance protocol' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00190"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#190"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00190] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinator@POLYN378544 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00192"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00192] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinator@POLYN378544 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#214"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00214] For method metadata list of called methods Object monObjet|java.util.Set&lt;String&gt; subscriptions_subscriptionN382378|java.nio.ByteBuffer ConsumerProtocol_serializeSubscriptionN382937"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00221"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00221] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00224] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.metadata@POLYN382179 the MagicNumber/String  'Joining group with current subscription: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#233"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00233] For method updatePatternSubscription arguments Cluster  cluster"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#233"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00233] For method updatePatternSubscription list of called methods Object monObjet|java.util.Set&lt;String&gt; cluster_topicsN383391"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#233"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00233] The argument cluster is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00241"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#241"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00241] For method lookupAssignor arguments String  name"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.lookupAssignor@POLYN383699 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00249"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#249"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00249] For method maybeUpdateJoinedSubscription arguments Set&lt;TopicPartition &gt;  assignedPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00275"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#275"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00275] For method invokeOnAssignment arguments ConsumerPartitionAssignor  assignor|Assignment  assignment"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00275"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#275"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00275] The argument assignor is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokeOnAssignment@POLYN385243 the MagicNumber/String  'Notifying assignor about the new {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00284"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#284"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00284] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokeOnAssignment@POLYN385243 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00287"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#287"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00287] For method invokePartitionsAssigned arguments SortedSet&lt;TopicPartition &gt;  assignedPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00287"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#287"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00287] For method invokePartitionsAssigned list of called methods Object monObjet|org.apache.kafka.clients.consumer.ConsumerRebalanceListener subscriptions_rebalanceListenerN385952"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsAssigned@POLYN385673 the MagicNumber/String  'Adding newly assigned partitions: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsAssigned@POLYN385673 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00298"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00298] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsAssigned@POLYN385673 the MagicNumber/String  'User provided listener {} failed on invocation of onPartitionsAssigned for partitions {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00303"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#303"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00303] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsAssigned@POLYN385673 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#306"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00306] For method invokePartitionsRevoked arguments SortedSet&lt;TopicPartition &gt;  revokedPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00306"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#306"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00306] For method invokePartitionsRevoked list of called methods Object monObjet|java.util.Set&lt;org.apache.kafka.common.TopicPartition&gt; subscriptions_pausedPartitionsN386980|org.apache.kafka.clients.consumer.ConsumerRebalanceListener subscriptions_rebalanceListenerN387347"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00307"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00307] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsRevoked@POLYN386680 the MagicNumber/String  'Revoke previously assigned partitions {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00307"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00307] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsRevoked@POLYN386680 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00311"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00311] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsRevoked@POLYN386680 the MagicNumber/String  'The pause flag in partitions [{}] will be removed due to revocation.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00311"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00311] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsRevoked@POLYN386680 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00321"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00321] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsRevoked@POLYN386680 the MagicNumber/String  'User provided listener {} failed on invocation of onPartitionsRevoked for partitions {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00326"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#326"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00326] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsRevoked@POLYN386680 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00329"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#329"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00329] For method invokePartitionsLost arguments SortedSet&lt;TopicPartition &gt;  lostPartitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00329"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#329"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00329] For method invokePartitionsLost list of called methods Object monObjet|java.util.Set&lt;org.apache.kafka.common.TopicPartition&gt; subscriptions_pausedPartitionsN388375|org.apache.kafka.clients.consumer.ConsumerRebalanceListener subscriptions_rebalanceListenerN388742"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00330"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00330] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN388075 the MagicNumber/String  'Lost previously assigned partitions {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00330"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00330] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN388075 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00334"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#334"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00334] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN388075 the MagicNumber/String  'The pause flag in partitions [{}] will be removed due to partition lost.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00334"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#334"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00334] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN388075 the MagicNumber/String  ', ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00344"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00344] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN388075 the MagicNumber/String  'User provided listener {} failed on invocation of onPartitionsLost for partitions {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00349"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00349] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN388075 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00353"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#353"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00353] For method onJoinComplete arguments int  generation|String  memberId|String  assignmentStrategy|ByteBuffer  assignmentBuffer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00353"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#353"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00353] For method onJoinComplete list of called methods Object monObjet|org.apache.kafka.clients.consumer.ConsumerPartitionAssignor lookupAssignorN389860|Assignment ConsumerProtocol_deserializeAssignmentN390777"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00356"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#356"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00356] The argument assignmentBuffer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00357"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#357"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00357] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  'Executing onJoinComplete with generation {} and memberId {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00361"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#361"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00361] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00364"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#364"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00364] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00365"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#365"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00365] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  'Coordinator selected invalid assignment protocol: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00374"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#374"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00374] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00375"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#375"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00375] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  'There are insufficient bytes available to read assignment from the sync-group response (' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00376"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00376] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  'actual byte size ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00376"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00376] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  ') , this is not expected; ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00377] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  'it is possible that the leader's assign function is buggy and did not return any assignment for this member, ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00378"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#378"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00378] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  'or because static member is configured and the protocol is buggy hence did not get the assignment for this member' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#386"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00386] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  'received assignment %s does not match the current subscription %s; ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00387"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#387"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00387] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  'it is likely that the subscription has changed since we joined the group, will re-join with current subscription' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00389"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#389"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00389] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  'received assignment does not match the current subscription' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00394"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00394] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00404"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#404"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00404] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  'Updating assignment with\n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00405"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#405"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00405] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  '\tAssigned partitions:                       {}\n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00406"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#406"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00406] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  '\tCurrent owned partitions:                  {}\n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00407"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#407"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00407] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  '\tAdded partitions (assigned - owned):       {}\n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00408"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#408"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00408] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  '\tRevoked partitions (owned - assigned):     {}\n' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00419"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#419"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00419] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00422"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#422"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00422] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  'need to revoke partitions %s as indicated ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00423"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#423"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00423] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  'by the current assignment and re-join' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00424"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#424"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00424] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  'need to revoke partitions and re-join' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00433"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#433"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00433] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00442"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#442"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00442] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00444"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#444"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00444] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00448"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#448"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00448] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String  'User rebalance callback throws an error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00467"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#467"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00467] For method coordinatorUnknownAndUnready arguments Timer  timer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00472"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#472"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00472] For method poll arguments Timer  timer|boolean  waitForJoinGroup"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00472"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#472"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00472] The argument timer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00478"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#478"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00478] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.poll@POLYN394910 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00479"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#479"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00479] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.poll@POLYN394910 the MagicNumber/String  'User configured ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00480"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#480"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00480] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.poll@POLYN394910 the MagicNumber/String  ' to empty while trying to subscribe for group protocol to auto assign partitions' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00486"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#486"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00486] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.poll@POLYN394910 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00501"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#501"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00501] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.poll@POLYN394910 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00506"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#506"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00506] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.poll@POLYN394910 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00513"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#513"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00513] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.poll@POLYN394910 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00518"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#518"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00518] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.poll@POLYN394910 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00537"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#537"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00537] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.poll@POLYN394910 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00541"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#541"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00541] For method timeToNextPoll arguments long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00548"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#548"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00548] For method updateGroupSubscription arguments Set&lt;String &gt;  topics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00562"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#562"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00562] For method isAssignFromSubscribedTopicsAssignor arguments String  name"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00567"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#567"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00567] For method maybeUpdateGroupSubscription arguments String  assignorName|Map&lt;String ,Assignment &gt;  assignments|Set&lt;String &gt;  allSubscribedTopics"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00568"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#568"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00568] The argument assignments is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00569"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#569"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00569] The argument allSubscribedTopics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00573"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#573"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00573] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00580"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#580"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00580] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.maybeUpdateGroupSubscription@POLYN398407 the MagicNumber/String  'The following subscribed topics are not assigned to any members: {} ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00586"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#586"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00586] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.maybeUpdateGroupSubscription@POLYN398407 the MagicNumber/String  'The following not-subscribed topics are assigned, and their metadata will be ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00587"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#587"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00587] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.maybeUpdateGroupSubscription@POLYN398407 the MagicNumber/String  'fetched from the brokers: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00596"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#596"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00596] For method onLeaderElected arguments String  leaderId|String  assignmentStrategy|List&lt;JoinGroupResponseData.JoinGroupResponseMember &gt;  allSubscriptions|boolean  skipAssignment"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00596"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#596"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00596] For method onLeaderElected list of called methods Object monObjet|org.apache.kafka.clients.consumer.ConsumerPartitionAssignor lookupAssignorN400240|String assignor_nameN400479|Subscription ConsumerProtocol_deserializeSubscriptionN401004|GroupAssignment assignor_assignN402202|java.nio.ByteBuffer ConsumerProtocol_serializeAssignmentN403195"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00612"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#612"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00612] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00652"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#652"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00652] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00601"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#601"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00601] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeaderElected@POLYN400039 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00602"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#602"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00602] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeaderElected@POLYN400039 the MagicNumber/String  'Coordinator selected invalid assignment protocol: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00623"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#623"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00623] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeaderElected@POLYN400039 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00626"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#626"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00626] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeaderElected@POLYN400039 the MagicNumber/String  'Skipped assignment for returning static leader at generation {}. The static leader ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00627"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#627"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00627] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeaderElected@POLYN400039 the MagicNumber/String  'will continue with its existing assignment.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00632"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#632"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00632] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeaderElected@POLYN400039 the MagicNumber/String  'Performing assignment using strategy {} with subscriptions {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00648"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#648"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00648] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeaderElected@POLYN400039 the MagicNumber/String  'Finished assignment for group at generation {}: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00660"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#660"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00660] For method validateCooperativeAssignment arguments Map&lt;String ,List&lt;TopicPartition &gt; &gt;  ownedPartitions|Map&lt;String ,Assignment &gt;  assignments"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00660"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#660"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00660] The argument ownedPartitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00661"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#661"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00661] The argument assignments is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00665"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#665"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00665] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00666"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#666"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00666] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00668"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#668"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00668] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00679"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#679"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00679] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.validateCooperativeAssignment@POLYN403724 the MagicNumber/String  'With the COOPERATIVE protocol, owned partitions cannot be ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00680"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#680"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00680] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.validateCooperativeAssignment@POLYN403724 the MagicNumber/String  'reassigned to other members; however the assignor has reassigned partitions {} which are still owned ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00681"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#681"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00681] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.validateCooperativeAssignment@POLYN403724 the MagicNumber/String  'by some members' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00683"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#683"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00683] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.validateCooperativeAssignment@POLYN403724 the MagicNumber/String  'Assignor supporting the COOPERATIVE protocol violates its requirements' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00688"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#688"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00688] For method onJoinPrepare arguments int  generation|String  memberId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00688"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#688"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00688] For method onJoinPrepare list of called methods Object monObjet|Exception invokePartitionsLostN406988|Exception invokePartitionsRevokedN407355|Exception invokePartitionsRevokedN408105"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00688"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#688"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00688] The argument memberId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00689"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#689"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00689] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457 the MagicNumber/String  'Executing onJoinPrepare with generation {} and memberId {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00690"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#690"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00690] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00697"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#697"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00697] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00698"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#698"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00698] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00700"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#700"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00700] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00702"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#702"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00702] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457 the MagicNumber/String  'Asynchronous auto-commit of offsets failed: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00703"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#703"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00703] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00713"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#713"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00713] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00720"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#720"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00720] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457 the MagicNumber/String  'Giving away all assigned partitions as lost since generation/memberID has been reset,' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00721"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#721"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00721] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457 the MagicNumber/String  'indicating that consumer is in old state or no longer part of the group' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00755"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#755"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00755] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00758"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#758"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00758] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00759"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#759"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00759] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457 the MagicNumber/String  'User rebalance callback throws an error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00765"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#765"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00765] For method onLeavePrepare list of called methods Object monObjet|org.apache.kafka.clients.consumer.internals.AbstractCoordinator.Generation generationN408728|Exception invokePartitionsLostN409494|Exception invokePartitionsRevokedN409598"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00769"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#769"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00769] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN408652 the MagicNumber/String  'Executing onLeavePrepare with generation {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00787"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#787"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00787] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN408652 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00788"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#788"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00788] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN408652 the MagicNumber/String  'User rebalance callback throws an error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00797"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#797"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00797] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.rejoinNeededOrPending@POLYN409988 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00801"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#801"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00801] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.rejoinNeededOrPending@POLYN409988 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00802"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#802"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00802] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.rejoinNeededOrPending@POLYN409988 the MagicNumber/String  'cached metadata has changed from %s at the beginning of the rebalance to %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00804"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#804"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00804] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.rejoinNeededOrPending@POLYN409988 the MagicNumber/String  'cached metadata has changed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00805"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#805"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00805] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.rejoinNeededOrPending@POLYN409988 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00809"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#809"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00809] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.rejoinNeededOrPending@POLYN409988 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00810"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#810"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00810] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.rejoinNeededOrPending@POLYN409988 the MagicNumber/String  'subscription has changed from %s at the beginning of the rebalance to %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00812"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#812"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00812] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.rejoinNeededOrPending@POLYN409988 the MagicNumber/String  'subscription has changed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00813"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#813"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00813] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.rejoinNeededOrPending@POLYN409988 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00820"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#820"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00820] For method refreshCommittedOffsetsIfNeeded arguments Timer  timer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00820"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#820"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00820] For method refreshCommittedOffsetsIfNeeded list of called methods Object monObjet|java.util.Set&lt;org.apache.kafka.common.TopicPartition&gt; subscriptions_initializingPartitionsN411304|java.util.Map&lt;org.apache.kafka.common.TopicPartition,org.apache.kafka.clients.consumer.OffsetAndMetadata&gt; fetchCommittedOffsetsN411421|boolean metadata_currentLeaderN412336"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00827"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#827"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00827] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00828"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#828"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00828] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00836"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#836"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00836] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00837"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#837"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00837] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00824"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#824"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00824] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.refreshCommittedOffsetsIfNeeded@POLYN411181 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00824"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#824"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00824] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.refreshCommittedOffsetsIfNeeded@POLYN411181 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00829"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#829"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00829] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.refreshCommittedOffsetsIfNeeded@POLYN411181 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00843"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#843"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00843] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.refreshCommittedOffsetsIfNeeded@POLYN411181 the MagicNumber/String  'Setting offset for partition {} to the committed offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00845"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#845"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00845] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.refreshCommittedOffsetsIfNeeded@POLYN411181 the MagicNumber/String  'Ignoring the returned {} since its partition {} is no longer assigned' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00850"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#850"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00850] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.refreshCommittedOffsetsIfNeeded@POLYN411181 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00854"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#854"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00854] For method fetchCommittedOffsets arguments Set&lt;TopicPartition &gt;  partitions|Timer  timer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00854"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#854"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00854] For method fetchCommittedOffsets list of called methods Object monObjet|org.apache.kafka.clients.consumer.internals.AbstractCoordinator.Generation generationIfStableN413462|org.apache.kafka.clients.consumer.internals.RequestFuture&lt;Map&lt;TopicPartition,OffsetAndMetadata&gt;&gt; sendOffsetFetchRequestN414129"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00854"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#854"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00854] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00855"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#855"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00855] The argument timer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00869"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#869"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00869] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00859"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#859"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00859] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.fetchCommittedOffsets@POLYN413201 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00862"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#862"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00862] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.fetchCommittedOffsets@POLYN413201 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00866"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#866"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00866] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.fetchCommittedOffsets@POLYN413201 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00870"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#870"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00870] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.fetchCommittedOffsets@POLYN413201 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00879"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#879"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00879] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.fetchCommittedOffsets@POLYN413201 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00889"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#889"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00889] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.fetchCommittedOffsets@POLYN413201 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00892"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#892"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00892] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.fetchCommittedOffsets@POLYN413201 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00901"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#901"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00901] For method close arguments Timer  timer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00901"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#901"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00901] The argument timer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00906"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#906"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00906] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.close@POLYN415248 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00924"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#924"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00924] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00919"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#919"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00919] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokeCompletedOffsetCommitCallbacks@POLYN415845 the MagicNumber/String  'Get fenced exception for group.instance.id ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00920"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#920"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00920] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokeCompletedOffsetCommitCallbacks@POLYN415845 the MagicNumber/String  'unset_instance_id' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00921"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#921"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00921] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokeCompletedOffsetCommitCallbacks@POLYN415845 the MagicNumber/String  ', current member.id is ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00923"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#923"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00923] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokeCompletedOffsetCommitCallbacks@POLYN415845 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00925"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#925"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00925] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokeCompletedOffsetCommitCallbacks@POLYN415845 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00932"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#932"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00932] For method commitOffsetsAsync arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets|OffsetCommitCallback  callback"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00932"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#932"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00932] For method commitOffsetsAsync list of called methods Object monObjet|org.apache.kafka.clients.consumer.internals.RequestFuture&lt;Void&gt; doCommitOffsetsAsyncN416815|org.apache.kafka.clients.consumer.internals.RequestFuture&lt;Void&gt; doCommitOffsetsAsyncN417058"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00932"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#932"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00932] The argument offsets is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00935"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#935"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00935] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.commitOffsetsAsync@POLYN416460 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00983"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#983"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00983] For method doCommitOffsetsAsync arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets|OffsetCommitCallback  callback"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00983"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#983"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00983] For method doCommitOffsetsAsync list of called methods Object monObjet|org.apache.kafka.clients.consumer.internals.RequestFuture&lt;Void&gt; sendOffsetCommitRequestN418227"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00985"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#985"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00985] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.doCommitOffsetsAsync@POLYN418041 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00989"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#989"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00989] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.doCommitOffsetsAsync@POLYN418041 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00991"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#991"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00991] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.doCommitOffsetsAsync@POLYN418041 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01003"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1003"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01003] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.doCommitOffsetsAsync@POLYN418041 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01011"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1011"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01011] For method commitOffsetsSync arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets|Timer  timer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01011"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1011"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01011] For method commitOffsetsSync list of called methods Object monObjet|org.apache.kafka.clients.consumer.internals.RequestFuture&lt;Void&gt; sendOffsetCommitRequestN420354"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01011"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1011"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01011] The argument offsets is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01011"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1011"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01011] The argument timer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1022"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01022] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01015"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1015"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01015] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.commitOffsetsSync@POLYN419901 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01019"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1019"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01019] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.commitOffsetsSync@POLYN419901 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1031"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01031] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.commitOffsetsSync@POLYN419901 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01033"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1033"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01033] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.commitOffsetsSync@POLYN419901 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01042"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1042"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01042] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.commitOffsetsSync@POLYN419901 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1045"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01045] For method maybeAutoCommitOffsetsSync arguments Timer  timer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01045"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1045"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01045] For method maybeAutoCommitOffsetsSync list of called methods Object monObjet|java.util.Map&lt;org.apache.kafka.common.TopicPartition,org.apache.kafka.clients.consumer.OffsetAndMetadata&gt; subscriptions_allConsumedN421290"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01049"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1049"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01049] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.maybeAutoCommitOffsetsSync@POLYN421111 the MagicNumber/String  'Sending synchronous auto-commit of offsets {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1051"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01051] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.maybeAutoCommitOffsetsSync@POLYN421111 the MagicNumber/String  'Auto-commit of offsets {} timed out before completion' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1053"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01053] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.maybeAutoCommitOffsetsSync@POLYN421111 the MagicNumber/String  'Auto-commit of offsets {} was interrupted before completion' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1058"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01058] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.maybeAutoCommitOffsetsSync@POLYN421111 the MagicNumber/String  'Synchronous auto-commit of offsets {} failed: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1063"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01063] For method maybeAutoCommitOffsetsAsync arguments long  now"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1073"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01073] For method autoCommitOffsetsAsync list of called methods Object monObjet|java.util.Map&lt;org.apache.kafka.common.TopicPartition,org.apache.kafka.clients.consumer.OffsetAndMetadata&gt; subscriptions_allConsumedN422526"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1075"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01075] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.autoCommitOffsetsAsync@POLYN422414 the MagicNumber/String  'Sending asynchronous auto-commit of offsets {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1078"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01078] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.autoCommitOffsetsAsync@POLYN422414 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1080"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01080] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.autoCommitOffsetsAsync@POLYN422414 the MagicNumber/String  'Asynchronous auto-commit of offsets {} failed due to retriable error: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1084"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01084] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.autoCommitOffsetsAsync@POLYN422414 the MagicNumber/String  'Asynchronous auto-commit of offsets {} failed: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1087"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01087] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.autoCommitOffsetsAsync@POLYN422414 the MagicNumber/String  'Completed asynchronous auto-commit of offsets {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1095"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01095] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.maybeAutoCommitOffsetsAsync@POLYN423424 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01098"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1098"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01098] The class DefaultOffsetCommitCallback contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01100"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1100"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01100] For method onComplete arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets|Exception  exception"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01101"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01101] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.DefaultOffsetCommitCallback.onComplete@POLYN423643 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01102"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01102] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.DefaultOffsetCommitCallback.onComplete@POLYN423643 the MagicNumber/String  'Offset commit with offsets {} failed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1107"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01107] For method sendOffsetCommitRequest arguments Map&lt;TopicPartition ,OffsetAndMetadata &gt;  offsets"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1107"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01107] For method sendOffsetCommitRequest list of called methods Object monObjet|org.apache.kafka.common.Node checkAndGetCoordinatorN424510|org.apache.kafka.clients.consumer.internals.AbstractCoordinator.Generation generationIfStableN426205"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01107"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1107"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01107] The argument offsets is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01118] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01119"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01119] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01124] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01112] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01120] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01121] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266 the MagicNumber/String  'Invalid offset: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01144"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01144] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01145] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266 the MagicNumber/String  'Failing OffsetCommit request since the consumer is not part of an active group' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01150"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01150] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266 the MagicNumber/String  'Offset commit cannot be completed since the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01151] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266 the MagicNumber/String  'consumer is undergoing a rebalance for auto partition assignment. You can try completing the rebalance ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01152"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01152] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266 the MagicNumber/String  'by calling poll() and then retry the operation.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01154] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266 the MagicNumber/String  'Offset commit cannot be completed since the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01155"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01155] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266 the MagicNumber/String  'consumer is not part of an active group for auto partition assignment; it is likely that the consumer ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01156"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01156] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266 the MagicNumber/String  'was kicked out of the group.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01168] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01172] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266 the MagicNumber/String  'Sending OffsetCommit request with {} to coordinator {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1187"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01187] For method handle arguments OffsetCommitResponse  commitResponse|RequestFuture&lt;Void &gt;  future"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1187"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01187] The argument commitResponse is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01187"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1187"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01187] The argument future is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01192"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01192] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01193] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01194"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01194] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01198] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01202"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01202] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01236"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01236] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01262"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01262] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01193] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01194"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01194] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01198] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01202"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1202"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01202] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01236"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1236"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01236] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01262"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1262"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01262] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01237"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1237"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[01237] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01263"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1263"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[01263] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01200"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1200"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01200] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetCommitResponseHandler.handle@POLYN428090 the MagicNumber/String  'Committed offset {} for partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01203"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01203] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetCommitResponseHandler.handle@POLYN428090 the MagicNumber/String  'Offset commit failed on partition {} at offset {}: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01205"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1205"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01205] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetCommitResponseHandler.handle@POLYN428090 the MagicNumber/String  'Offset commit failed on partition {} at offset {}: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01230"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01230] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetCommitResponseHandler.handle@POLYN428090 the MagicNumber/String  'OffsetCommit failed with {} due to group instance id {} fenced' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01239"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01239] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetCommitResponseHandler.handle@POLYN428090 the MagicNumber/String  'Offset commit cannot be completed since the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01240"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01240] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetCommitResponseHandler.handle@POLYN428090 the MagicNumber/String  'consumer member's old generation is fenced by its group instance id, it is possible that ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01241"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01241] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetCommitResponseHandler.handle@POLYN428090 the MagicNumber/String  'this consumer has already participated another rebalance and got a new generation' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01251"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1251"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01251] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetCommitResponseHandler.handle@POLYN428090 the MagicNumber/String  'offset commit failed since group is already rebalancing' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01252"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01252] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetCommitResponseHandler.handle@POLYN428090 the MagicNumber/String  'Offset commit cannot be completed since the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01253"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01253] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetCommitResponseHandler.handle@POLYN428090 the MagicNumber/String  'consumer group is executing a rebalance at the moment. You can try completing the rebalance ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01254"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01254] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetCommitResponseHandler.handle@POLYN428090 the MagicNumber/String  'by calling poll() and then retry commit again' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01258"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01258] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetCommitResponseHandler.handle@POLYN428090 the MagicNumber/String  'OffsetCommit failed with {}: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01265"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01265] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetCommitResponseHandler.handle@POLYN428090 the MagicNumber/String  'Offset commit cannot be completed since the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01266"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1266"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01266] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetCommitResponseHandler.handle@POLYN428090 the MagicNumber/String  'consumer member's generation is already stale, meaning it has already participated another rebalance and ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01267"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01267] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetCommitResponseHandler.handle@POLYN428090 the MagicNumber/String  'got a new generation. You can try completing the rebalance by calling poll() and then retry commit again' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01277"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01277] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetCommitResponseHandler.handle@POLYN428090 the MagicNumber/String  'Unexpected error in commit: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01285"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01285] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetCommitResponseHandler.handle@POLYN428090 the MagicNumber/String  'Not authorized to commit to topics {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01288] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetCommitResponseHandler.handle@POLYN428090 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01294"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1294"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01294] For method sendOffsetFetchRequest arguments Set&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01294"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1294"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[01294] For method sendOffsetFetchRequest list of called methods Object monObjet|org.apache.kafka.common.Node checkAndGetCoordinatorN434352"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01296"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01296] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetFetchRequest@POLYN434234 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01299"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01299] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetFetchRequest@POLYN434234 the MagicNumber/String  'Fetching committed offsets for partitions: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01302"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1302"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01302] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetFetchRequest@POLYN434234 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01315"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1315"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01315] For method handle arguments OffsetFetchResponse  response|RequestFuture&lt;Map&lt;TopicPartition ,OffsetAndMetadata &gt; &gt;  future"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01315"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1315"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01315] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01315"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1315"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01315] The argument future is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01341"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01341] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01342"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1342"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01342] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01344"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01344] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01318"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01318] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetFetchResponseHandler.handle@POLYN435233 the MagicNumber/String  'Offset fetch failed: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01330"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01330] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetFetchResponseHandler.handle@POLYN435233 the MagicNumber/String  'Unexpected error in fetch offset response: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01335"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1335"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01335] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetFetchResponseHandler.handle@POLYN435233 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01345"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1345"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01345] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetFetchResponseHandler.handle@POLYN435233 the MagicNumber/String  'Failed to fetch offset for partition {}: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01348"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01348] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetFetchResponseHandler.handle@POLYN435233 the MagicNumber/String  'Topic or Partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01348"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1348"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01348] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetFetchResponseHandler.handle@POLYN435233 the MagicNumber/String  ' does not exist' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01351"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01351] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetFetchResponseHandler.handle@POLYN435233 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01358"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1358"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01358] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetFetchResponseHandler.handle@POLYN435233 the MagicNumber/String  'Unexpected error in fetch offset response for partition ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01359"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1359"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01359] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetFetchResponseHandler.handle@POLYN435233 the MagicNumber/String  ': ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01362"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01362] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetFetchResponseHandler.handle@POLYN435233 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01367"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01367] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetFetchResponseHandler.handle@POLYN435233 the MagicNumber/String  'Found no committed offset for partition {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01368"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01368] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetFetchResponseHandler.handle@POLYN435233 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01372"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1372"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01372] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetFetchResponseHandler.handle@POLYN435233 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01376"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01376] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetFetchResponseHandler.handle@POLYN435233 the MagicNumber/String  'The following partitions still have unstable offsets ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01377] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetFetchResponseHandler.handle@POLYN435233 the MagicNumber/String  'which are not cleared on the broker side: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01378"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1378"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01378] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetFetchResponseHandler.handle@POLYN435233 the MagicNumber/String  ', this could be either ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01379"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01379] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetFetchResponseHandler.handle@POLYN435233 the MagicNumber/String  'transactional offsets waiting for completion, or ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01380"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1380"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01380] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetFetchResponseHandler.handle@POLYN435233 the MagicNumber/String  'normal offsets waiting for replication after appending to local log' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01381"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01381] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetFetchResponseHandler.handle@POLYN435233 the MagicNumber/String  'There are unstable offsets for the requested topic partitions' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01388"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01388] The class ConsumerCoordinatorMetrics contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01395"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1395"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01395] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01396"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1396"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01396] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinatorMetrics.ConsumerCoordinatorMetrics@POLYN439862 the MagicNumber/String  '-coordinator-metrics' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01398"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1398"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01398] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinatorMetrics.ConsumerCoordinatorMetrics@POLYN439862 the MagicNumber/String  'commit-latency' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01399"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1399"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01399] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinatorMetrics.ConsumerCoordinatorMetrics@POLYN439862 the MagicNumber/String  'commit-latency-avg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01401"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1401"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01401] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinatorMetrics.ConsumerCoordinatorMetrics@POLYN439862 the MagicNumber/String  'The average time taken for a commit request' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01402"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01402] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinatorMetrics.ConsumerCoordinatorMetrics@POLYN439862 the MagicNumber/String  'commit-latency-max' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01404"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1404"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01404] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinatorMetrics.ConsumerCoordinatorMetrics@POLYN439862 the MagicNumber/String  'The max time taken for a commit request' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01405"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1405"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01405] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinatorMetrics.ConsumerCoordinatorMetrics@POLYN439862 the MagicNumber/String  'commit' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01405"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1405"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01405] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinatorMetrics.ConsumerCoordinatorMetrics@POLYN439862 the MagicNumber/String  'commit calls' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01407"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1407"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01407] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinatorMetrics.ConsumerCoordinatorMetrics@POLYN439862 the MagicNumber/String  'partition-revoked-latency' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01408"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1408"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01408] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinatorMetrics.ConsumerCoordinatorMetrics@POLYN439862 the MagicNumber/String  'partition-revoked-latency-avg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01410"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01410] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinatorMetrics.ConsumerCoordinatorMetrics@POLYN439862 the MagicNumber/String  'The average time taken for a partition-revoked rebalance listener callback' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01411"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1411"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01411] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinatorMetrics.ConsumerCoordinatorMetrics@POLYN439862 the MagicNumber/String  'partition-revoked-latency-max' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01413"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1413"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01413] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinatorMetrics.ConsumerCoordinatorMetrics@POLYN439862 the MagicNumber/String  'The max time taken for a partition-revoked rebalance listener callback' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01415"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1415"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01415] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinatorMetrics.ConsumerCoordinatorMetrics@POLYN439862 the MagicNumber/String  'partition-assigned-latency' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01416"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1416"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01416] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinatorMetrics.ConsumerCoordinatorMetrics@POLYN439862 the MagicNumber/String  'partition-assigned-latency-avg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01418"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1418"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01418] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinatorMetrics.ConsumerCoordinatorMetrics@POLYN439862 the MagicNumber/String  'The average time taken for a partition-assigned rebalance listener callback' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01419"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1419"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01419] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinatorMetrics.ConsumerCoordinatorMetrics@POLYN439862 the MagicNumber/String  'partition-assigned-latency-max' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01421"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1421"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01421] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinatorMetrics.ConsumerCoordinatorMetrics@POLYN439862 the MagicNumber/String  'The max time taken for a partition-assigned rebalance listener callback' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01423"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1423"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01423] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinatorMetrics.ConsumerCoordinatorMetrics@POLYN439862 the MagicNumber/String  'partition-lost-latency' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01424"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1424"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01424] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinatorMetrics.ConsumerCoordinatorMetrics@POLYN439862 the MagicNumber/String  'partition-lost-latency-avg' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01426"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1426"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01426] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinatorMetrics.ConsumerCoordinatorMetrics@POLYN439862 the MagicNumber/String  'The average time taken for a partition-lost rebalance listener callback' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01427"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1427"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01427] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinatorMetrics.ConsumerCoordinatorMetrics@POLYN439862 the MagicNumber/String  'partition-lost-latency-max' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01429"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01429] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinatorMetrics.ConsumerCoordinatorMetrics@POLYN439862 the MagicNumber/String  'The max time taken for a partition-lost rebalance listener callback' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01432"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1432"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01432] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinatorMetrics.ConsumerCoordinatorMetrics@POLYN439862 the MagicNumber/String  'assigned-partitions' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01434"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1434"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01434] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.ConsumerCoordinatorMetrics.ConsumerCoordinatorMetrics@POLYN439862 the MagicNumber/String  'The number of partitions currently assigned to this consumer' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01438"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1438"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01438] The class MetadataSnapshot contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01442"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1442"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01442] The argument subscription is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01442"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1442"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01442] The argument cluster is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01445"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1445"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01445] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01446"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1446"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01446] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.MetadataSnapshot.MetadataSnapshot@POLYN442863 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01453"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1453"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01453] For method matches arguments MetadataSnapshot  other"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01453"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1453"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01453] The argument other is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01459"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1459"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01459] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.MetadataSnapshot.toString@POLYN443791 the MagicNumber/String  '(version' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01459"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1459"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01459] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.MetadataSnapshot.toString@POLYN443791 the MagicNumber/String  ': ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01459"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1459"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01459] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.MetadataSnapshot.toString@POLYN443791 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01463"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1463"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01463] The class OffsetCommitCompletion contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01475"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1475"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01475] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.OffsetCommitCompletion.invoke@POLYN444514 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01485"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1485"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01485] For method poll arguments Timer  timer"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01486"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1486"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01486] In method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.poll@POLYN444793 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.updateGroupSubscription@POLYN397307"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.maybeUpdateSubscriptionMetadata@POLYN393817"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.updatePatternSubscription@POLYN383272"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeaderElected@POLYN400039"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.maybeUpdateGroupSubscription@POLYN398407"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN388075"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsRevoked@POLYN386680"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN408652"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetFetchRequest@POLYN434234"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.refreshCommittedOffsetsIfNeeded@POLYN411181"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokeCompletedOffsetCommitCallbacks@POLYN415845"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.maybeUpdateJoinedSubscription@POLYN384014"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokeOnAssignment@POLYN385243"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsAssigned@POLYN385673"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00601"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#601"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00601] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeaderElected@POLYN400039 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00602"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#602"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00602] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeaderElected@POLYN400039 the MagicNumber/String 'Coordinator selected invalid assignment protocol: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00623"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#623"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00623] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeaderElected@POLYN400039 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00626"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#626"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00626] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeaderElected@POLYN400039 the MagicNumber/String 'Skipped assignment for returning static leader at generation {}. The static leader ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00627"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#627"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00627] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeaderElected@POLYN400039 the MagicNumber/String 'will continue with its existing assignment.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00632"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#632"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00632] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeaderElected@POLYN400039 the MagicNumber/String 'Performing assignment using strategy {} with subscriptions {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00648"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#648"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00648] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeaderElected@POLYN400039 the MagicNumber/String 'Finished assignment for group at generation {}: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00580"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#580"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00580] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.maybeUpdateGroupSubscription@POLYN398407 the MagicNumber/String 'The following subscribed topics are not assigned to any members: {} ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00586"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#586"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00586] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.maybeUpdateGroupSubscription@POLYN398407 the MagicNumber/String 'The following not-subscribed topics are assigned, and their metadata will be ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00587"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#587"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00587] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.maybeUpdateGroupSubscription@POLYN398407 the MagicNumber/String 'fetched from the brokers: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00689"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#689"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00689] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457 the MagicNumber/String 'Executing onJoinPrepare with generation {} and memberId {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00690"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#690"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00690] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00697"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#697"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00697] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00698"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#698"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00698] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00700"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#700"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00700] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00702"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#702"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00702] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457 the MagicNumber/String 'Asynchronous auto-commit of offsets failed: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00703"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#703"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00703] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00713"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#713"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00713] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00720"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#720"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00720] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457 the MagicNumber/String 'Giving away all assigned partitions as lost since generation/memberID has been reset,' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00721"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#721"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00721] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457 the MagicNumber/String 'indicating that consumer is in old state or no longer part of the group' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00755"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#755"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00755] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00758"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#758"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00758] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00759"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#759"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00759] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinPrepare@POLYN405457 the MagicNumber/String 'User rebalance callback throws an error' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00330"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#330"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00330] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN388075 the MagicNumber/String ', ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00330"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#330"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00330] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN388075 the MagicNumber/String 'Lost previously assigned partitions {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00334"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#334"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00334] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN388075 the MagicNumber/String ', ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00334"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#334"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00334] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN388075 the MagicNumber/String 'The pause flag in partitions [{}] will be removed due to partition lost.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00344"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#344"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00344] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN388075 the MagicNumber/String 'User provided listener {} failed on invocation of onPartitionsLost for partitions {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00349"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#349"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00349] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsLost@POLYN388075 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00307"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#307"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00307] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsRevoked@POLYN386680 the MagicNumber/String ', ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00307"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#307"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00307] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsRevoked@POLYN386680 the MagicNumber/String 'Revoke previously assigned partitions {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00311"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#311"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00311] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsRevoked@POLYN386680 the MagicNumber/String ', ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00311"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#311"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00311] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsRevoked@POLYN386680 the MagicNumber/String 'The pause flag in partitions [{}] will be removed due to revocation.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00321"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#321"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00321] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsRevoked@POLYN386680 the MagicNumber/String 'User provided listener {} failed on invocation of onPartitionsRevoked for partitions {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00326"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#326"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00326] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsRevoked@POLYN386680 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00769"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#769"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00769] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN408652 the MagicNumber/String 'Executing onLeavePrepare with generation {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00787"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#787"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00787] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN408652 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00788"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#788"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00788] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onLeavePrepare@POLYN408652 the MagicNumber/String 'User rebalance callback throws an error' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01296"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1296"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01296] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetFetchRequest@POLYN434234 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01299"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1299"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01299] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetFetchRequest@POLYN434234 the MagicNumber/String 'Fetching committed offsets for partitions: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01302"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1302"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01302] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetFetchRequest@POLYN434234 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00824"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#824"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00824] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.refreshCommittedOffsetsIfNeeded@POLYN411181 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00824"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#824"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00824] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.refreshCommittedOffsetsIfNeeded@POLYN411181 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00829"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#829"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00829] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.refreshCommittedOffsetsIfNeeded@POLYN411181 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00843"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#843"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00843] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.refreshCommittedOffsetsIfNeeded@POLYN411181 the MagicNumber/String 'Setting offset for partition {} to the committed offset {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00845"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#845"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00845] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.refreshCommittedOffsetsIfNeeded@POLYN411181 the MagicNumber/String 'Ignoring the returned {} since its partition {} is no longer assigned' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00850"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#850"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00850] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.refreshCommittedOffsetsIfNeeded@POLYN411181 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00919"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#919"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00919] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokeCompletedOffsetCommitCallbacks@POLYN415845 the MagicNumber/String 'Get fenced exception for group.instance.id ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00920"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#920"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00920] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokeCompletedOffsetCommitCallbacks@POLYN415845 the MagicNumber/String 'unset_instance_id' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00921"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#921"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00921] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokeCompletedOffsetCommitCallbacks@POLYN415845 the MagicNumber/String ', current member.id is ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00923"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#923"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00923] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokeCompletedOffsetCommitCallbacks@POLYN415845 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00925"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#925"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00925] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokeCompletedOffsetCommitCallbacks@POLYN415845 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1112"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01112] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1120"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01120] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1121"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01121] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266 the MagicNumber/String 'Invalid offset: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01144"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1144"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01144] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01145"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1145"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01145] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266 the MagicNumber/String 'Failing OffsetCommit request since the consumer is not part of an active group' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01150"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1150"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01150] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266 the MagicNumber/String 'Offset commit cannot be completed since the ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1151"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01151] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266 the MagicNumber/String 'consumer is undergoing a rebalance for auto partition assignment. You can try completing the rebalance ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01152"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1152"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01152] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266 the MagicNumber/String 'by calling poll-- and then retry the operation.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1154"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01154] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266 the MagicNumber/String 'Offset commit cannot be completed since the ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01155"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1155"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01155] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266 the MagicNumber/String 'consumer is not part of an active group for auto partition assignment; it is likely that the consumer ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01156"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1156"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01156] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266 the MagicNumber/String 'was kicked out of the group.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1168"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01168] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#1172"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[01172] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.sendOffsetCommitRequest@POLYN424266 the MagicNumber/String 'Sending OffsetCommit request with {} to coordinator {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00357"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#357"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00357] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String 'Executing onJoinComplete with generation {} and memberId {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00361"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#361"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00361] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00364"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#364"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00364] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00365"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#365"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00365] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String 'Coordinator selected invalid assignment protocol: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00374"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#374"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00374] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String 2 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00375"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#375"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00375] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String 'There are insufficient bytes available to read assignment from the sync-group response -' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00376"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#376"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00376] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String '- , this is not expected; ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00376"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#376"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00376] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String 'actual byte size ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#377"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00377] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String 'it is possible that the leader's assign function is buggy and did not return any assignment for this member, ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00378"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#378"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00378] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String 'or because static member is configured and the protocol is buggy hence did not get the assignment for this member' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00386"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#386"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00386] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String 'received assignment %s does not match the current subscription %s; ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00387"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#387"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00387] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String 'it is likely that the subscription has changed since we joined the group, will re-join with current subscription' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00389"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#389"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00389] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String 'received assignment does not match the current subscription' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00394"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#394"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00394] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00404"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#404"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00404] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String 'Updating assignment with\n' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00405"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#405"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00405] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String '\tAssigned partitions:                       {}\n' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00406"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#406"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00406] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String '\tCurrent owned partitions:                  {}\n' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00407"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#407"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00407] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String '\tAdded partitions -assigned - owned-:       {}\n' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00408"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#408"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00408] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String '\tRevoked partitions -owned - assigned-:     {}\n' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00419"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#419"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00419] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00422"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#422"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00422] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String 'need to revoke partitions %s as indicated ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00423"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#423"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00423] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String 'by the current assignment and re-join' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00424"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#424"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00424] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String 'need to revoke partitions and re-join' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00433"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#433"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00433] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00442"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#442"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00442] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00444"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#444"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00444] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00448"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#448"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00448] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.onJoinComplete@POLYN389476 the MagicNumber/String 'User rebalance callback throws an error' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00276"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#276"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00276] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokeOnAssignment@POLYN385243 the MagicNumber/String 'Notifying assignor about the new {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00284"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#284"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00284] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokeOnAssignment@POLYN385243 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#288"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00288] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsAssigned@POLYN385673 the MagicNumber/String ', ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#288"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00288] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsAssigned@POLYN385673 the MagicNumber/String 'Adding newly assigned partitions: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00298"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#298"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00298] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsAssigned@POLYN385673 the MagicNumber/String 'User provided listener {} failed on invocation of onPartitionsAssigned for partitions {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00303"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/ConsumerCoordinator.java.html#303"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00303] In the recursive method org.apache.kafka.clients.consumer.internals.ConsumerCoordinator.invokePartitionsAssigned@POLYN385673 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
