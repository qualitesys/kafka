console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java 399 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.clients.consumer.internals.SubscriptionState"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.internals.SubscriptionState" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "prettyString()"
 , "c3" : "5"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "SubscriptionState"
 , "c2" : "SubscriptionState(LogContext;OffsetResetStrategy)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "assignmentId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setSubscriptionType(SubscriptionType)"
 , "c3" : "4"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "subscribe(Set<String>;ConsumerRebalanceListener)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "subscribe(Pattern;ConsumerRebalanceListener)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "subscribeFromPattern(Set<String>)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "changeSubscription(Set<String>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "groupSubscribe(Collection<String>)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resetGroupSubscription()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "assignFromUser(Set<TopicPartition>)"
 , "c3" : "4"
 , "c4" : "11"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "checkAssignmentMatchedSubscription(Collection<TopicPartition>)"
 , "c3" : "6"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "assignFromSubscribed(Collection<TopicPartition>)"
 , "c3" : "4"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "registerRebalanceListener(ConsumerRebalanceListener)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasPatternSubscription()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasNoSubscriptionOrUserAssignment()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "unsubscribe()"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "matchesSubscribedPattern(String)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "subscription()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Set<TopicPartition>"
 , "c2" : "pausedPartitions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<String>"
 , "c2" : "metadataTopics()"
 , "c3" : "5"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "needsMetadata(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "TopicPartitionState"
 , "c2" : "assignedState(TopicPartition)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "TopicPartitionState"
 , "c2" : "assignedStateOrNull(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "seekValidated(TopicPartition;FetchPosition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "seek(TopicPartition;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "seekUnvalidated(TopicPartition;FetchPosition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "maybeSeekUnvalidated(TopicPartition;FetchPosition;OffsetResetStrategy)"
 , "c3" : "7"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "Set<TopicPartition>"
 , "c2" : "assignedPartitions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<TopicPartition>"
 , "c2" : "assignedPartitionsList()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "numAssignedPartitions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "List<TopicPartition>"
 , "c2" : "fetchablePartitions(Predicate<TopicPartition>)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasAutoAssignedPartitions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "position(TopicPartition;FetchPosition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "maybeValidatePositionForCurrentLeader(ApiVersions;TopicPartition;Metadata.LeaderAndEpoch)"
 , "c3" : "5"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "Optional<LogTruncation>"
 , "c2" : "maybeCompleteValidation(TopicPartition;FetchPosition;EpochEndOffset)"
 , "c3" : "15"
 , "c4" : "17"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "awaitingValidation(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "completeValidation(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "FetchPosition"
 , "c2" : "validPosition(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "FetchPosition"
 , "c2" : "position(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Long"
 , "c2" : "partitionLag(TopicPartition;IsolationLevel)"
 , "c3" : "5"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "Long"
 , "c2" : "partitionEndOffset(TopicPartition;IsolationLevel)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "requestPartitionEndOffset(TopicPartition)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "partitionEndOffsetRequested(TopicPartition)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Long"
 , "c2" : "partitionLead(TopicPartition)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateHighWatermark(TopicPartition;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateLogStartOffset(TopicPartition;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updateLastStableOffset(TopicPartition;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "updatePreferredReadReplica(TopicPartition;int;LongSupplier)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Optional<Integer>"
 , "c2" : "preferredReadReplica(TopicPartition;long)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Optional<Integer>"
 , "c2" : "clearPreferredReadReplica(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<TopicPartition,OffsetAndMetadata>"
 , "c2" : "allConsumed()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "requestOffsetReset(TopicPartition;OffsetResetStrategy)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "requestOffsetReset(Collection<TopicPartition>;OffsetResetStrategy)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "requestOffsetReset(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setNextAllowedRetry(Set<TopicPartition>;long)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasDefaultOffsetResetPolicy()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isOffsetResetNeeded(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OffsetResetStrategy"
 , "c2" : "resetStrategy(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasAllFetchPositions()"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Set<TopicPartition>"
 , "c2" : "initializingPartitions()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<TopicPartition>"
 , "c2" : "collectPartitions(Predicate<TopicPartitionState>)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resetInitializingPositions()"
 , "c3" : "5"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "Set<TopicPartition>"
 , "c2" : "partitionsNeedingReset(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Set<TopicPartition>"
 , "c2" : "partitionsNeedingValidation(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isAssigned(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isPaused(TopicPartition)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isFetchable(TopicPartition)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasValidPosition(TopicPartition)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "pause(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resume(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "requestFailed(Set<TopicPartition>;long)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "movePartitionToEnd(TopicPartition)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ConsumerRebalanceListener"
 , "c2" : "rebalanceListener()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.svg" }

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
{ "ligne" :  "R0:org.apache.kafka.clients.consumer.internals.SubscriptionState.this" }
,
{ "ligne" :  "R1:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN350343.partition" }
,
{ "ligne" :  "R2:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN350343.offsetResetStrategy" }
,
{ "ligne" :  "R3:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN337851.tp" }
,
{ "ligne" :  "R4:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN337851.position" }
,
{ "ligne" :  "R5:org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN345428.tp" }
,
{ "ligne" :  "R6:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN338442.tp" }
,
{ "ligne" :  "R7:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN338442.position" }
,
{ "ligne" :  "R8:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN338442.requestedResetStrategy" }
,
{ "ligne" :  "R9:org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN329244.pattern" }
,
{ "ligne" :  "R10:org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN329244.listener" }
,
{ "ligne" :  "R11:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN340823.tp" }
,
{ "ligne" :  "R12:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN340823.position" }
,
{ "ligne" :  "R13:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN346995.tp" }
,
{ "ligne" :  "R14:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN347733.tp" }
,
{ "ligne" :  "R15:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN347733.highWatermark" }
,
{ "ligne" :  "R16:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN347923.tp" }
,
{ "ligne" :  "R17:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN347923.logStartOffset" }
,
{ "ligne" :  "R18:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN348113.tp" }
,
{ "ligne" :  "R19:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN348113.lastStableOffset" }
,
{ "ligne" :  "R20:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN348553.tp" }
,
{ "ligne" :  "R21:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN348553.preferredReadReplicaId" }
,
{ "ligne" :  "R22:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN348553.timeMs" }
,
{ "ligne" :  "R23:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN350538.partitions" }
,
{ "ligne" :  "R24:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN350538.offsetResetStrategy" }
,
{ "ligne" :  "R25:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN351102.partitions" }
,
{ "ligne" :  "R26:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN351102.nextAllowResetTimeMs" }
,
{ "ligne" :  "R27:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN355180.tp" }
,
{ "ligne" :  "R28:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN355331.tp" }
,
{ "ligne" :  "R29:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN355477.partitions" }
,
{ "ligne" :  "R30:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN355477.nextRetryTimeMs" }
]
,
"data12b" : [
{ "sequence" : { "noseq" : "0" , "pas" : [
{ "ligne" : "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 (R0 in line [00381])" }
,
{ "ligne" : "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 (R0 in line [00381])" }
,
{ "ligne" : "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN350954" }
,
{ "ligne" : "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN350343 (R0 in line [00522],R1 in line [00522],R2 in line [00522])" }
,
{ "ligne" : "S0:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN337332" }
 ]
 } }
,
{ "sequence" : { "noseq" : "1" , "pas" : [
{ "ligne" : "S1:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 (R0 in line [00381])" }
,
{ "ligne" : "S1:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 (R0 in line [00381])" }
,
{ "ligne" : "S1:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN337851 (R0 in line [00300],R3 in line [00300],R4 in line [00300])" }
,
{ "ligne" : "S1:org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN337851 (R0 in line [00300],R3 in line [00300],R4 in line [00300])" }
,
{ "ligne" : "S1:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN337332" }
 ]
 } }
,
{ "sequence" : { "noseq" : "2" , "pas" : [
{ "ligne" : "S2:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 (R0 in line [00381])" }
,
{ "ligne" : "S2:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 (R0 in line [00381])" }
,
{ "ligne" : "S2:org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN345428 (R0 in line [00433],R5 in line [00433])" }
,
{ "ligne" : "S2:org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN345428 (R0 in line [00433],R5 in line [00433])" }
,
{ "ligne" : "S2:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN337332" }
 ]
 } }
,
{ "sequence" : { "noseq" : "3" , "pas" : [
{ "ligne" : "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN338442 (R0 in line [00312],R6 in line [00312],R7 in line [00312],R8 in line [00312])" }
,
{ "ligne" : "S3:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN337697" }
 ]
 } }
,
{ "sequence" : { "noseq" : "4" , "pas" : [
{ "ligne" : "S4:org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN329244 (R0 in line [00128],R9 in line [00128],R10 in line [00128])" }
,
{ "ligne" : "S4:org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN334288" }
 ]
 } }
,
{ "sequence" : { "noseq" : "5" , "pas" : [
{ "ligne" : "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN340823 (R0 in line [00358],R11 in line [00358],R12 in line [00358])" }
,
{ "ligne" : "S5:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN337332" }
 ]
 } }
,
{ "sequence" : { "noseq" : "6" , "pas" : [
{ "ligne" : "S6:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN346995 (R0 in line [00465],R13 in line [00465])" }
,
{ "ligne" : "S6:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN337332" }
 ]
 } }
,
{ "sequence" : { "noseq" : "7" , "pas" : [
{ "ligne" : "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN347733 (R0 in line [00480],R14 in line [00480],R15 in line [00480])" }
,
{ "ligne" : "S7:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN337332" }
 ]
 } }
,
{ "sequence" : { "noseq" : "8" , "pas" : [
{ "ligne" : "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN347923 (R0 in line [00484],R16 in line [00484],R17 in line [00484])" }
,
{ "ligne" : "S8:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN337332" }
 ]
 } }
,
{ "sequence" : { "noseq" : "9" , "pas" : [
{ "ligne" : "S9:org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN348113 (R0 in line [00488],R18 in line [00488],R19 in line [00488])" }
,
{ "ligne" : "S9:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN337332" }
 ]
 } }
,
{ "sequence" : { "noseq" : "10" , "pas" : [
{ "ligne" : "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN348553 (R0 in line [00493],R20 in line [00493],R21 in line [00493],R22 in line [00493])" }
,
{ "ligne" : "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN348553 (R0 in line [00493],R20 in line [00493],R21 in line [00493],R22 in line [00493])" }
,
{ "ligne" : "S10:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN337332" }
 ]
 } }
,
{ "sequence" : { "noseq" : "11" , "pas" : [
{ "ligne" : "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN350538 (R0 in line [00526],R23 in line [00526],R24 in line [00526])" }
,
{ "ligne" : "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN350538 (R0 in line [00526],R23 in line [00526],R24 in line [00526])" }
,
{ "ligne" : "S11:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN337332" }
 ]
 } }
,
{ "sequence" : { "noseq" : "12" , "pas" : [
{ "ligne" : "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN351102 (R0 in line [00537],R25 in line [00537],R26 in line [00537])" }
,
{ "ligne" : "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN351102 (R0 in line [00537],R25 in line [00537],R26 in line [00537])" }
,
{ "ligne" : "S12:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN337332" }
 ]
 } }
,
{ "sequence" : { "noseq" : "13" , "pas" : [
{ "ligne" : "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN355180 (R0 in line [00623],R27 in line [00623])" }
,
{ "ligne" : "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN355180 (R0 in line [00623],R27 in line [00623])" }
,
{ "ligne" : "S13:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN337332" }
 ]
 } }
,
{ "sequence" : { "noseq" : "14" , "pas" : [
{ "ligne" : "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN355331 (R0 in line [00627],R28 in line [00627])" }
,
{ "ligne" : "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN355331 (R0 in line [00627],R28 in line [00627])" }
,
{ "ligne" : "S14:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN337332" }
 ]
 } }
,
{ "sequence" : { "noseq" : "15" , "pas" : [
{ "ligne" : "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN355477 (R0 in line [00631],R29 in line [00631],R30 in line [00631])" }
,
{ "ligne" : "S15:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN337697" }
 ]
 } }
,
{ "sequence" : { "noseq" : "16" , "pas" : [
{ "ligne" : "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN338442 (R0 in line [00312],R6 in line [00312],R7 in line [00312],R8 in line [00312])" }
,
{ "ligne" : "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN338442 (R0 in line [00312],R6 in line [00312],R7 in line [00312],R8 in line [00312])" }
,
{ "ligne" : "S16:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN337697" }
 ]
 } }
,
{ "sequence" : { "noseq" : "17" , "pas" : [
{ "ligne" : "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN355477 (R0 in line [00631],R29 in line [00631],R30 in line [00631])" }
,
{ "ligne" : "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN355477 (R0 in line [00631],R29 in line [00631],R30 in line [00631])" }
,
{ "ligne" : "S17:org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedStateOrNull@POLYN337697" }
 ]
 } }
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAVCWE572"
 , "c3" : "Call to Thread run() instead of start()"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAVCWE833"
 , "c3" : "Potential deadlock between at least two ressources"
 , "c4" : "31"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "28"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "22"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "12"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "14"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "134"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "71"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "14"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "64"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00040] The class SubscriptionState contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#74"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00074] Lock statement on synchronized method toString"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.toString@POLYN326149 the MagicNumber/String  'SubscriptionState{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.toString@POLYN326149 the MagicNumber/String  'type=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.toString@POLYN326149 the MagicNumber/String  ', subscribedPattern=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.toString@POLYN326149 the MagicNumber/String  ', subscription=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.toString@POLYN326149 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.toString@POLYN326149 the MagicNumber/String  ', groupSubscription=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00079"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#79"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00079] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.toString@POLYN326149 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#80"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00080] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.toString@POLYN326149 the MagicNumber/String  ', defaultResetStrategy=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.toString@POLYN326149 the MagicNumber/String  ', assignment=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.toString@POLYN326149 the MagicNumber/String  ' (id=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.toString@POLYN326149 the MagicNumber/String  ')}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#84"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00084] Lock statement on synchronized method prettyString"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.prettyString@POLYN326734 the MagicNumber/String  'None' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.prettyString@POLYN326734 the MagicNumber/String  'Subscribe(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.prettyString@POLYN326734 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00089"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.prettyString@POLYN326734 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.prettyString@POLYN326734 the MagicNumber/String  'Subscribe(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#91"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00091] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.prettyString@POLYN326734 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.prettyString@POLYN326734 the MagicNumber/String  'Assign(' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.prettyString@POLYN326734 the MagicNumber/String  ' , id=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.prettyString@POLYN326734 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00095"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.prettyString@POLYN326734 the MagicNumber/String  'Unrecognized subscription type: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00099"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#99"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00099] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.SubscriptionState@POLYN327470 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#110"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00110] Lock statement on synchronized method assignmentId"
}} 
,
{ "ligne" : {
   "c1" : "00115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#115"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00115] For method setSubscriptionType arguments SubscriptionType  type"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#122"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00122] Lock statement on synchronized method subscribe"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#122"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00122] For method subscribe arguments Set&lt;String &gt;  topics|ConsumerRebalanceListener  listener"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#128"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00128] Lock statement on synchronized method subscribe"
}} 
,
{ "ligne" : {
   "c1" : "00128"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#128"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00128] For method subscribe arguments Pattern  pattern|ConsumerRebalanceListener  listener"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#134"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00134] Lock statement on synchronized method subscribeFromPattern"
}} 
,
{ "ligne" : {
   "c1" : "00134"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#134"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00134] For method subscribeFromPattern arguments Set&lt;String &gt;  topics"
}} 
,
{ "ligne" : {
   "c1" : "00136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribeFromPattern@POLYN329543 the MagicNumber/String  'Attempt to subscribe from pattern while subscription type set to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00142"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#142"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00142] For method changeSubscription arguments Set&lt;String &gt;  topicsToSubscribe"
}} 
,
{ "ligne" : {
   "c1" : "00144"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.changeSubscription@POLYN329862 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00147] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.changeSubscription@POLYN329862 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#151"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00151] Lock statement on synchronized method groupSubscribe"
}} 
,
{ "ligne" : {
   "c1" : "00151"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#151"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00151] For method groupSubscribe arguments Collection&lt;String &gt;  topics"
}} 
,
{ "ligne" : {
   "c1" : "00159"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#159"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00159] Lock statement on synchronized method resetGroupSubscription"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#164"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00164] Lock statement on synchronized method assignFromUser"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#164"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00164] For method assignFromUser arguments Set&lt;TopicPartition &gt;  partitions"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#164"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00164] For method assignFromUser list of called methods Object monObjet|boolean assignment_stateValueN331755"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00176] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromUser@POLYN331091 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromUser@POLYN331091 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#189"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00189] Lock statement on synchronized method checkAssignmentMatchedSubscription"
}} 
,
{ "ligne" : {
   "c1" : "00189"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#189"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00189] For method checkAssignmentMatchedSubscription arguments Collection&lt;TopicPartition &gt;  assignments"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.checkAssignmentMatchedSubscription@POLYN332345 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.checkAssignmentMatchedSubscription@POLYN332345 the MagicNumber/String  'Assigned partition {} for non-subscribed topic regex pattern; subscription pattern is {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.checkAssignmentMatchedSubscription@POLYN332345 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00201"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.checkAssignmentMatchedSubscription@POLYN332345 the MagicNumber/String  'Assigned partition {} for non-subscribed topic; subscription is {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00203"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00203] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.checkAssignmentMatchedSubscription@POLYN332345 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.checkAssignmentMatchedSubscription@POLYN332345 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#212"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00212] Lock statement on synchronized method assignFromSubscribed"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#212"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00212] For method assignFromSubscribed arguments Collection&lt;TopicPartition &gt;  assignments"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#212"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00212] The argument assignments is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00218] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN333387 the MagicNumber/String  'Attempt to dynamically assign partitions while manual assignment in use' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromSubscribed@POLYN333387 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00228"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#228"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00228] For method registerRebalanceListener arguments ConsumerRebalanceListener  listener"
}} 
,
{ "ligne" : {
   "c1" : "00229"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00229] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN334288 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00230"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00230] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.registerRebalanceListener@POLYN334288 the MagicNumber/String  'RebalanceListener cannot be null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#235"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00235] Lock statement on synchronized method hasPatternSubscription"
}} 
,
{ "ligne" : {
   "c1" : "00239"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#239"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00239] Lock statement on synchronized method hasNoSubscriptionOrUserAssignment"
}} 
,
{ "ligne" : {
   "c1" : "00243"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#243"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00243] Lock statement on synchronized method unsubscribe"
}} 
,
{ "ligne" : {
   "c1" : "00247"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#247"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00247] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.unsubscribe@POLYN334858 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00253"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#253"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00253] Lock statement on synchronized method matchesSubscribedPattern"
}} 
,
{ "ligne" : {
   "c1" : "00253"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#253"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00253] For method matchesSubscribedPattern arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.matchesSubscribedPattern@POLYN335438 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00257"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#257"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00257] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.matchesSubscribedPattern@POLYN335438 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00260"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#260"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00260] Lock statement on synchronized method subscription"
}} 
,
{ "ligne" : {
   "c1" : "00266"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#266"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00266] Lock statement on synchronized method pausedPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00271"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#271"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00271] Lock statement on synchronized method metadataTopics"
}} 
,
{ "ligne" : {
   "c1" : "00285"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#285"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00285] Lock statement on synchronized method needsMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00285"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#285"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00285] For method needsMetadata arguments String  topic"
}} 
,
{ "ligne" : {
   "c1" : "00289"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#289"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00289] For method assignedState arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00291"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00291] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN337332 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00292"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.assignedState@POLYN337332 the MagicNumber/String  'No current assignment for partition ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00296"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#296"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00296] For method assignedStateOrNull arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#300"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00300] Lock statement on synchronized method seekValidated"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#300"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00300] For method seekValidated arguments TopicPartition  tp|FetchPosition  position"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#304"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00304] For method seek arguments TopicPartition  tp|long  offset"
}} 
,
{ "ligne" : {
   "c1" : "00308"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#308"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00308] For method seekUnvalidated arguments TopicPartition  tp|FetchPosition  position"
}} 
,
{ "ligne" : {
   "c1" : "00312"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#312"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00312] Lock statement on synchronized method maybeSeekUnvalidated"
}} 
,
{ "ligne" : {
   "c1" : "00312"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#312"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00312] For method maybeSeekUnvalidated arguments TopicPartition  tp|FetchPosition  position|OffsetResetStrategy  requestedResetStrategy"
}} 
,
{ "ligne" : {
   "c1" : "00312"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#312"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00312] For method maybeSeekUnvalidated list of called methods Object monObjet|org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState assignedStateOrNullN338585"
}} 
,
{ "ligne" : {
   "c1" : "00314"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00314] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN338442 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN338442 the MagicNumber/String  'Skipping reset of partition {} since it is no longer assigned' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00317"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN338442 the MagicNumber/String  'Skipping reset of partition {} since reset is no longer needed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00319"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#319"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00319] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN338442 the MagicNumber/String  'Skipping reset of partition {} since an alternative reset has been requested' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00321"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00321] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN338442 the MagicNumber/String  'Resetting offset for partition {} to position {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00327"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#327"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00327] Lock statement on synchronized method assignedPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00332"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#332"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00332] Lock statement on synchronized method assignedPartitionsList"
}} 
,
{ "ligne" : {
   "c1" : "00337"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#337"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00337] Lock statement on synchronized method numAssignedPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00342"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#342"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00342] Lock statement on synchronized method fetchablePartitions"
}} 
,
{ "ligne" : {
   "c1" : "00342"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#342"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00342] For method fetchablePartitions arguments Predicate&lt;TopicPartition &gt;  isAvailable"
}} 
,
{ "ligne" : {
   "c1" : "00342"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#342"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00342] The argument isAvailable is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00354"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#354"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00354] Lock statement on synchronized method hasAutoAssignedPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00358"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#358"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00358] Lock statement on synchronized method position"
}} 
,
{ "ligne" : {
   "c1" : "00358"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#358"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00358] For method position arguments TopicPartition  tp|FetchPosition  position"
}} 
,
{ "ligne" : {
   "c1" : "00363"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#363"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00363] Lock statement on synchronized method maybeValidatePositionForCurrentLeader"
}} 
,
{ "ligne" : {
   "c1" : "00363"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#363"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00363] For method maybeValidatePositionForCurrentLeader arguments ApiVersions  apiVersions|TopicPartition  tp|Metadata.LeaderAndEpoch  leaderAndEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00363"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#363"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00363] For method maybeValidatePositionForCurrentLeader list of called methods Object monObjet|org.apache.kafka.clients.NodeApiVersions apiVersions_getN341527"
}} 
,
{ "ligne" : {
   "c1" : "00363"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#363"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00363] The argument apiVersions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00365"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#365"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00365] The argument leaderAndEpoch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00368"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00368] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeValidatePositionForCurrentLeader@POLYN341295 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00373"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#373"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00373] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeValidatePositionForCurrentLeader@POLYN341295 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00381"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#381"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00381] Lock statement on synchronized method maybeCompleteValidation"
}} 
,
{ "ligne" : {
   "c1" : "00381"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#381"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00381] For method maybeCompleteValidation arguments TopicPartition  tp|FetchPosition  requestPosition|EpochEndOffset  epochEndOffset"
}} 
,
{ "ligne" : {
   "c1" : "00381"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#381"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00381] For method maybeCompleteValidation list of called methods Object monObjet|org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState assignedStateOrNullN342443"
}} 
,
{ "ligne" : {
   "c1" : "00383"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#383"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00383] The argument epochEndOffset is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00385"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#385"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00385] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00386"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#386"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00386] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 the MagicNumber/String  'Skipping completed validation for partition {} which is not currently assigned.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00388"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#388"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00388] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 the MagicNumber/String  'Skipping completed validation for partition {} which is no longer expecting validation.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00392"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#392"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00392] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 the MagicNumber/String  'Skipping completed validation for partition {} since the current position {} ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00393] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 the MagicNumber/String  'no longer matches the position {} when the request was sent' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00398"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#398"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00398] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 the MagicNumber/String  'Truncation detected for partition {} at offset {}, resetting offset' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00402] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 the MagicNumber/String  'Truncation detected for partition {} at offset {}, but no reset policy is set' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00411"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#411"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00411] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 the MagicNumber/String  'Truncation detected for partition {} at offset {}, resetting offset to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00412"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#412"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00412] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 the MagicNumber/String  'the first offset known to diverge {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00416"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#416"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00416] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00417"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#417"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00417] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 the MagicNumber/String  'Truncation detected for partition {} at offset {} (the end offset from the ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00418"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#418"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00418] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 the MagicNumber/String  'broker is {}), but no reset policy is set' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#429"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00429] Lock statement on synchronized method awaitingValidation"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#429"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00429] For method awaitingValidation arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00433"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#433"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00433] Lock statement on synchronized method completeValidation"
}} 
,
{ "ligne" : {
   "c1" : "00433"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#433"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00433] For method completeValidation arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#437"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00437] Lock statement on synchronized method validPosition"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#437"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00437] For method validPosition arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00441"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#441"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00441] Lock statement on synchronized method position"
}} 
,
{ "ligne" : {
   "c1" : "00441"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#441"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00441] For method position arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00445"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#445"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00445] Lock statement on synchronized method partitionLag"
}} 
,
{ "ligne" : {
   "c1" : "00445"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#445"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00445] For method partitionLag arguments TopicPartition  tp|IsolationLevel  isolationLevel"
}} 
,
{ "ligne" : {
   "c1" : "00445"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#445"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00445] For method partitionLag list of called methods Object monObjet|org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState assignedStateN346029"
}} 
,
{ "ligne" : {
   "c1" : "00447"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#447"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00447] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.partitionLag@POLYN345907 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00448"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#448"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00448] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.partitionLag@POLYN345907 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00450"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#450"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00450] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.partitionLag@POLYN345907 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00450"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#450"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00450] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.partitionLag@POLYN345907 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00452"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#452"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00452] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.partitionLag@POLYN345907 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00452"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#452"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00452] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.partitionLag@POLYN345907 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00456"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#456"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00456] Lock statement on synchronized method partitionEndOffset"
}} 
,
{ "ligne" : {
   "c1" : "00456"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#456"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00456] For method partitionEndOffset arguments TopicPartition  tp|IsolationLevel  isolationLevel"
}} 
,
{ "ligne" : {
   "c1" : "00456"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#456"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00456] For method partitionEndOffset list of called methods Object monObjet|org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState assignedStateN346751"
}} 
,
{ "ligne" : {
   "c1" : "00465"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#465"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00465] Lock statement on synchronized method requestPartitionEndOffset"
}} 
,
{ "ligne" : {
   "c1" : "00465"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#465"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00465] For method requestPartitionEndOffset arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00465"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#465"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00465] For method requestPartitionEndOffset list of called methods Object monObjet|org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState assignedStateN347088"
}} 
,
{ "ligne" : {
   "c1" : "00470"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#470"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00470] Lock statement on synchronized method partitionEndOffsetRequested"
}} 
,
{ "ligne" : {
   "c1" : "00470"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#470"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00470] For method partitionEndOffsetRequested arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00470"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#470"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00470] For method partitionEndOffsetRequested list of called methods Object monObjet|org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState assignedStateN347306"
}} 
,
{ "ligne" : {
   "c1" : "00475"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#475"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00475] Lock statement on synchronized method partitionLead"
}} 
,
{ "ligne" : {
   "c1" : "00475"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#475"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00475] For method partitionLead arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00475"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#475"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00475] For method partitionLead list of called methods Object monObjet|org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState assignedStateN347520"
}} 
,
{ "ligne" : {
   "c1" : "00477"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#477"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00477] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.partitionLead@POLYN347423 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00477"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#477"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00477] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.partitionLead@POLYN347423 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00480"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#480"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00480] Lock statement on synchronized method updateHighWatermark"
}} 
,
{ "ligne" : {
   "c1" : "00480"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#480"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00480] For method updateHighWatermark arguments TopicPartition  tp|long  highWatermark"
}} 
,
{ "ligne" : {
   "c1" : "00484"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#484"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00484] Lock statement on synchronized method updateLogStartOffset"
}} 
,
{ "ligne" : {
   "c1" : "00484"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#484"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00484] For method updateLogStartOffset arguments TopicPartition  tp|long  logStartOffset"
}} 
,
{ "ligne" : {
   "c1" : "00488"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#488"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00488] Lock statement on synchronized method updateLastStableOffset"
}} 
,
{ "ligne" : {
   "c1" : "00488"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#488"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00488] For method updateLastStableOffset arguments TopicPartition  tp|long  lastStableOffset"
}} 
,
{ "ligne" : {
   "c1" : "00493"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#493"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00493] Lock statement on synchronized method updatePreferredReadReplica"
}} 
,
{ "ligne" : {
   "c1" : "00493"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#493"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00493] For method updatePreferredReadReplica arguments TopicPartition  tp|int  preferredReadReplicaId|LongSupplier  timeMs"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#498"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00498] Lock statement on synchronized method preferredReadReplica"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#498"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00498] For method preferredReadReplica arguments TopicPartition  tp|long  timeMs"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#498"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00498] For method preferredReadReplica list of called methods Object monObjet|org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState assignedStateOrNullN349109"
}} 
,
{ "ligne" : {
   "c1" : "00500"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#500"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00500] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.preferredReadReplica@POLYN348982 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00508"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#508"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00508] Lock statement on synchronized method clearPreferredReadReplica"
}} 
,
{ "ligne" : {
   "c1" : "00508"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#508"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00508] For method clearPreferredReadReplica arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00512"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#512"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00512] Lock statement on synchronized method allConsumed"
}} 
,
{ "ligne" : {
   "c1" : "00517"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#517"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00517] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.allConsumed@POLYN349772 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00522"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#522"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00522] Lock statement on synchronized method requestOffsetReset"
}} 
,
{ "ligne" : {
   "c1" : "00522"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#522"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00522] For method requestOffsetReset arguments TopicPartition  partition|OffsetResetStrategy  offsetResetStrategy"
}} 
,
{ "ligne" : {
   "c1" : "00526"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#526"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00526] Lock statement on synchronized method requestOffsetReset"
}} 
,
{ "ligne" : {
   "c1" : "00526"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#526"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00526] For method requestOffsetReset arguments Collection&lt;TopicPartition &gt;  partitions|OffsetResetStrategy  offsetResetStrategy"
}} 
,
{ "ligne" : {
   "c1" : "00526"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#526"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00526] The argument partitions is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00528"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#528"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00528] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN350538 the MagicNumber/String  'Seeking to {} offset of partition {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00533"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#533"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00533] For method requestOffsetReset arguments TopicPartition  partition"
}} 
,
{ "ligne" : {
   "c1" : "00537"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#537"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00537] Lock statement on synchronized method setNextAllowedRetry"
}} 
,
{ "ligne" : {
   "c1" : "00537"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#537"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00537] For method setNextAllowedRetry arguments Set&lt;TopicPartition &gt;  partitions|long  nextAllowResetTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00547"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#547"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00547] Lock statement on synchronized method isOffsetResetNeeded"
}} 
,
{ "ligne" : {
   "c1" : "00547"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#547"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00547] For method isOffsetResetNeeded arguments TopicPartition  partition"
}} 
,
{ "ligne" : {
   "c1" : "00551"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#551"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00551] Lock statement on synchronized method resetStrategy"
}} 
,
{ "ligne" : {
   "c1" : "00551"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#551"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00551] For method resetStrategy arguments TopicPartition  partition"
}} 
,
{ "ligne" : {
   "c1" : "00555"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#555"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00555] Lock statement on synchronized method hasAllFetchPositions"
}} 
,
{ "ligne" : {
   "c1" : "00560"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#560"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00560] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.hasAllFetchPositions@POLYN351842 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00563"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#563"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00563] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.hasAllFetchPositions@POLYN351842 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00566"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#566"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00566] Lock statement on synchronized method initializingPartitions"
}} 
,
{ "ligne" : {
   "c1" : "00570"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#570"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00570] For method collectPartitions arguments Predicate&lt;TopicPartitionState &gt;  filter"
}} 
,
{ "ligne" : {
   "c1" : "00570"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#570"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00570] The argument filter is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00581"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#581"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00581] Lock statement on synchronized method resetInitializingPositions"
}} 
,
{ "ligne" : {
   "c1" : "00596"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#596"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00596] Lock statement on synchronized method partitionsNeedingReset"
}} 
,
{ "ligne" : {
   "c1" : "00596"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#596"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00596] For method partitionsNeedingReset arguments long  nowMs"
}} 
,
{ "ligne" : {
   "c1" : "00600"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#600"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00600] Lock statement on synchronized method partitionsNeedingValidation"
}} 
,
{ "ligne" : {
   "c1" : "00600"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#600"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00600] For method partitionsNeedingValidation arguments long  nowMs"
}} 
,
{ "ligne" : {
   "c1" : "00604"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#604"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00604] Lock statement on synchronized method isAssigned"
}} 
,
{ "ligne" : {
   "c1" : "00604"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#604"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00604] For method isAssigned arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00608"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#608"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00608] Lock statement on synchronized method isPaused"
}} 
,
{ "ligne" : {
   "c1" : "00608"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#608"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00608] For method isPaused arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00608"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#608"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00608] For method isPaused list of called methods Object monObjet|org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState assignedStateOrNullN354495"
}} 
,
{ "ligne" : {
   "c1" : "00610"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#610"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00610] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.isPaused@POLYN354398 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00613"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#613"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00613] Lock statement on synchronized method isFetchable"
}} 
,
{ "ligne" : {
   "c1" : "00613"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#613"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00613] For method isFetchable arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00613"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#613"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00613] For method isFetchable list of called methods Object monObjet|org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState assignedStateOrNullN354755"
}} 
,
{ "ligne" : {
   "c1" : "00615"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#615"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00615] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.isFetchable@POLYN354658 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00618"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#618"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00618] Lock statement on synchronized method hasValidPosition"
}} 
,
{ "ligne" : {
   "c1" : "00618"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#618"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00618] For method hasValidPosition arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00618"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#618"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00618] For method hasValidPosition list of called methods Object monObjet|org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState assignedStateOrNullN355020"
}} 
,
{ "ligne" : {
   "c1" : "00620"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#620"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00620] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.hasValidPosition@POLYN354923 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00623"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#623"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00623] Lock statement on synchronized method pause"
}} 
,
{ "ligne" : {
   "c1" : "00623"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#623"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00623] For method pause arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00627"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#627"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00627] Lock statement on synchronized method resume"
}} 
,
{ "ligne" : {
   "c1" : "00627"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#627"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00627] For method resume arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00631"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#631"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00631] Lock statement on synchronized method requestFailed"
}} 
,
{ "ligne" : {
   "c1" : "00631"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#631"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00631] For method requestFailed arguments Set&lt;TopicPartition &gt;  partitions|long  nextRetryTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00631"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#631"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00631] For method requestFailed list of called methods Object monObjet|org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState assignedStateOrNullN355695"
}} 
,
{ "ligne" : {
   "c1" : "00635"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#635"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00635] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00636"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#636"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00636] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN355477 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00641"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#641"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00641] Lock statement on synchronized method movePartitionToEnd"
}} 
,
{ "ligne" : {
   "c1" : "00641"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#641"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00641] For method movePartitionToEnd arguments TopicPartition  tp"
}} 
,
{ "ligne" : {
   "c1" : "00645"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#645"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00645] Lock statement on synchronized method rebalanceListener"
}} 
,
{ "ligne" : {
   "c1" : "00649"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#649"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00649] The class TopicPartitionState contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00665"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#665"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00665] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.TopicPartitionState@POLYN356577 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00666"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#666"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00666] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.TopicPartitionState@POLYN356577 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00668"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#668"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00668] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.TopicPartitionState@POLYN356577 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00669"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#669"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00669] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.TopicPartitionState@POLYN356577 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00670"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#670"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00670] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.TopicPartitionState@POLYN356577 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00671"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#671"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00671] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.TopicPartitionState@POLYN356577 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00672"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#672"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00672] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.TopicPartitionState@POLYN356577 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00673"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#673"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00673] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.TopicPartitionState@POLYN356577 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00674"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#674"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00674] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.TopicPartitionState@POLYN356577 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00682"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#682"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00682] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.requestEndOffset@POLYN357370 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00685"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#685"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00685] For method transitionState arguments FetchState  newState|Runnable  runIfTransitioned"
}} 
,
{ "ligne" : {
   "c1" : "00685"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#685"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00685] The argument runIfTransitioned is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00689"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#689"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[00689] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {
   "c1" : "00690"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#690"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00690] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.transitionState@POLYN357467 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00691"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#691"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00691] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.transitionState@POLYN357467 the MagicNumber/String  'Transitioned subscription state to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00691"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#691"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00691] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.transitionState@POLYN357467 the MagicNumber/String  ', but position is null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00693"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#693"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00693] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.transitionState@POLYN357467 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00698"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#698"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00698] For method preferredReadReplica arguments long  timeMs"
}} 
,
{ "ligne" : {
   "c1" : "00699"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#699"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00699] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.preferredReadReplica@POLYN358286 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00700"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#700"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00700] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.preferredReadReplica@POLYN358286 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00707"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#707"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00707] For method updatePreferredReadReplica arguments int  preferredReadReplica|LongSupplier  timeMs"
}} 
,
{ "ligne" : {
   "c1" : "00707"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#707"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00707] The argument timeMs is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00708"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#708"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00708] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.updatePreferredReadReplica@POLYN358673 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00715"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#715"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00715] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.clearPreferredReadReplica@POLYN359078 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00717"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#717"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00717] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.clearPreferredReadReplica@POLYN359078 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00718"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#718"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00718] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.clearPreferredReadReplica@POLYN359078 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00725"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#725"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00725] For method reset arguments OffsetResetStrategy  strategy"
}} 
,
{ "ligne" : {
   "c1" : "00728"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#728"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00728] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.reset@POLYN359540 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00733"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#733"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00733] For method maybeValidatePosition arguments Metadata.LeaderAndEpoch  currentLeaderAndEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00733"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#733"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00733] The argument currentLeaderAndEpoch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00735"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#735"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00735] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.maybeValidatePosition@POLYN360060 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00739"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#739"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00739] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.maybeValidatePosition@POLYN360060 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00742"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#742"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00742] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.maybeValidatePosition@POLYN360060 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00745"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#745"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00745] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.maybeValidatePosition@POLYN360060 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00751"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#751"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00751] For method updatePositionLeaderNoValidation arguments Metadata.LeaderAndEpoch  currentLeaderAndEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00752"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#752"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00752] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.updatePositionLeaderNoValidation@POLYN360996 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00755"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#755"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00755] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.updatePositionLeaderNoValidation@POLYN360996 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00760"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#760"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00760] For method validatePosition arguments FetchPosition  position"
}} 
,
{ "ligne" : {
   "c1" : "00760"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#760"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00760] The argument position is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00764"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#764"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00764] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.validatePosition@POLYN361484 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00770"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#770"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00770] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.validatePosition@POLYN361484 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00778"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#778"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00778] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.completeValidation@POLYN362237 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00786"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#786"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00786] For method awaitingRetryBackoff arguments long  nowMs"
}} 
,
{ "ligne" : {
   "c1" : "00787"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#787"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00787] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.awaitingRetryBackoff@POLYN362639 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00794"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#794"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00794] For method setNextAllowedRetry arguments long  nextAllowedRetryTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00798"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#798"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00798] For method requestFailed arguments long  nextAllowedRetryTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00807"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#807"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00807] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.hasPosition@POLYN363308 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00814"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#814"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00814] For method seekValidated arguments FetchPosition  position"
}} 
,
{ "ligne" : {
   "c1" : "00817"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#817"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00817] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.seekValidated@POLYN363496 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00818"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#818"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00818] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.seekValidated@POLYN363496 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00822"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#822"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00822] For method seekUnvalidated arguments FetchPosition  fetchPosition"
}} 
,
{ "ligne" : {
   "c1" : "00827"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#827"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00827] For method position arguments FetchPosition  position"
}} 
,
{ "ligne" : {
   "c1" : "00829"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#829"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00829] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.position@POLYN364057 the MagicNumber/String  'Cannot set a new position without a valid current position' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00837"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#837"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00837] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.validPosition@POLYN364320 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00842"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#842"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00842] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.pause@POLYN364516 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00846"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#846"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00846] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.resume@POLYN364623 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00853"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#853"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00853] For method highWatermark arguments Long  highWatermark"
}} 
,
{ "ligne" : {
   "c1" : "00855"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#855"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00855] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.highWatermark@POLYN364859 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00858"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#858"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00858] For method logStartOffset arguments Long  logStartOffset"
}} 
,
{ "ligne" : {
   "c1" : "00862"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#862"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00862] For method lastStableOffset arguments Long  lastStableOffset"
}} 
,
{ "ligne" : {
   "c1" : "00864"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#864"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00864] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.TopicPartitionState.lastStableOffset@POLYN365179 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00964"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#964"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00964] The class FetchPosition contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00980"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#980"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00980] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00982"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#982"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00982] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00981"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#981"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00981] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.FetchPosition.equals@POLYN369159 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00982"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#982"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00982] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.FetchPosition.equals@POLYN369159 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00982"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#982"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00982] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.FetchPosition.equals@POLYN369159 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00996"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#996"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00996] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.FetchPosition.toString@POLYN369964 the MagicNumber/String  'FetchPosition{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00997"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#997"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00997] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.FetchPosition.toString@POLYN369964 the MagicNumber/String  'offset=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00998"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#998"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00998] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.FetchPosition.toString@POLYN369964 the MagicNumber/String  ', offsetEpoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00999"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#999"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00999] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.FetchPosition.toString@POLYN369964 the MagicNumber/String  ', currentLeader=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01000"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1000"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01000] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.FetchPosition.toString@POLYN369964 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01004"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1004"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01004] The class LogTruncation contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "01020"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1020"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01020] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.LogTruncation.toString@POLYN370747 the MagicNumber/String  '(partition=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1022"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01022] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.LogTruncation.toString@POLYN370747 the MagicNumber/String  ', fetchOffset=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01024"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1024"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01024] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.LogTruncation.toString@POLYN370747 the MagicNumber/String  ', fetchEpoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1029"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01029] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.LogTruncation.toString@POLYN370747 the MagicNumber/String  ', divergentOffset=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1031"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01031] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.LogTruncation.toString@POLYN370747 the MagicNumber/String  ', divergentEpoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01034"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1034"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01034] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.LogTruncation.toString@POLYN370747 the MagicNumber/String  ', divergentOffset=unknown' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1035"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01035] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.LogTruncation.toString@POLYN370747 the MagicNumber/String  ', divergentEpoch=unknown' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01038"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1038"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01038] In method org.apache.kafka.clients.consumer.internals.SubscriptionState.LogTruncation.toString@POLYN370747 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00122"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#122"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00122] Public method subscribe is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00266"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#266"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00266] Public method pausedPartitions is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00363"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#363"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00363] Public method maybeValidatePositionForCurrentLeader is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#429"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00429] Public method awaitingValidation is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00437"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#437"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00437] Public method validPosition is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00441"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#441"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00441] Public method position is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00445"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#445"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00445] Public method partitionLag is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00456"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#456"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00456] Public method partitionEndOffset is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00470"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#470"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00470] Public method partitionEndOffsetRequested is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00498"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#498"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00498] Public method preferredReadReplica is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00508"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#508"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00508] Public method clearPreferredReadReplica is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00547"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#547"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00547] Public method isOffsetResetNeeded is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00551"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#551"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00551] Public method resetStrategy is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00566"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#566"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00566] Public method initializingPartitions is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00596"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#596"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00596] Public method partitionsNeedingReset is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00600"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#600"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00600] Public method partitionsNeedingValidation is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00608"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#608"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00608] Public method isPaused is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00618"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#618"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00618] Public method hasValidPosition is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00300"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#300"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00300] Public method seekValidated is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#304"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00304] Public method seek is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00308"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#308"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00308] Public method seekUnvalidated is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00358"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#358"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00358] Public method position is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00433"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#433"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00433] Public method completeValidation is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00465"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#465"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00465] Public method requestPartitionEndOffset is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00493"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#493"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00493] Public method updatePreferredReadReplica is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00522"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#522"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00522] Public method requestOffsetReset is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00623"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#623"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00623] Public method pause is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00627"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#627"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00627] Public method resume is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R0 : org.apache.kafka.clients.consumer.internals.SubscriptionState.this"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R1 : org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN350343.partition"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R2 : org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN350343.offsetResetStrategy"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R3 : org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN337851.tp"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R4 : org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN337851.position"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R5 : org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN345428.tp"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R6 : org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN338442.tp"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R7 : org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN338442.position"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R8 : org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN338442.requestedResetStrategy"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R9 : org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN329244.pattern"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R10 : org.apache.kafka.clients.consumer.internals.SubscriptionState.subscribe@POLYN329244.listener"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R11 : org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN340823.tp"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R12 : org.apache.kafka.clients.consumer.internals.SubscriptionState.position@POLYN340823.position"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R13 : org.apache.kafka.clients.consumer.internals.SubscriptionState.requestPartitionEndOffset@POLYN346995.tp"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R14 : org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN347733.tp"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R15 : org.apache.kafka.clients.consumer.internals.SubscriptionState.updateHighWatermark@POLYN347733.highWatermark"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R16 : org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN347923.tp"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R17 : org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLogStartOffset@POLYN347923.logStartOffset"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R18 : org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN348113.tp"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R19 : org.apache.kafka.clients.consumer.internals.SubscriptionState.updateLastStableOffset@POLYN348113.lastStableOffset"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R20 : org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN348553.tp"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R21 : org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN348553.preferredReadReplicaId"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R22 : org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN348553.timeMs"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R23 : org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN350538.partitions"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R24 : org.apache.kafka.clients.consumer.internals.SubscriptionState.requestOffsetReset@POLYN350538.offsetResetStrategy"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R25 : org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN351102.partitions"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R26 : org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN351102.nextAllowResetTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R27 : org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN355180.tp"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R28 : org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN355331.tp"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R29 : org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN355477.partitions"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R30 : org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN355477.nextRetryTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.SubscriptionState.seekValidated@POLYN337851"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.SubscriptionState.completeValidation@POLYN345428"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN338442"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.SubscriptionState.seekUnvalidated@POLYN338252"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromUser@POLYN331091"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.SubscriptionState.updatePreferredReadReplica@POLYN348553"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.SubscriptionState.setNextAllowedRetry@POLYN351102"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.SubscriptionState.hasAllFetchPositions@POLYN351842"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.SubscriptionState.isAssigned@POLYN354246"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.SubscriptionState.pause@POLYN355180"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.SubscriptionState.resume@POLYN355331"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN355477"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.SubscriptionState.movePartitionToEnd@POLYN355883"
}} 
,
{ "ligne" : {
   "c1" : "00385"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#385"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00385] In the recursive method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00386"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#386"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00386] In the recursive method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 the MagicNumber/String 'Skipping completed validation for partition {} which is not currently assigned.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00388"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#388"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00388] In the recursive method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 the MagicNumber/String 'Skipping completed validation for partition {} which is no longer expecting validation.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00392"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#392"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00392] In the recursive method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 the MagicNumber/String 'Skipping completed validation for partition {} since the current position {} ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00393"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#393"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00393] In the recursive method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 the MagicNumber/String 'no longer matches the position {} when the request was sent' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00398"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#398"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00398] In the recursive method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 the MagicNumber/String 'Truncation detected for partition {} at offset {}, resetting offset' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#402"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00402] In the recursive method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 the MagicNumber/String 'Truncation detected for partition {} at offset {}, but no reset policy is set' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00411"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#411"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00411] In the recursive method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 the MagicNumber/String 'Truncation detected for partition {} at offset {}, resetting offset to ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00412"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#412"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00412] In the recursive method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 the MagicNumber/String 'the first offset known to diverge {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00416"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#416"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00416] In the recursive method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00417"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#417"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00417] In the recursive method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 the MagicNumber/String 'Truncation detected for partition {} at offset {} -the end offset from the ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00418"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#418"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00418] In the recursive method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeCompleteValidation@POLYN342296 the MagicNumber/String 'broker is {}-, but no reset policy is set' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00314"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#314"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00314] In the recursive method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN338442 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#315"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00315] In the recursive method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN338442 the MagicNumber/String 'Skipping reset of partition {} since it is no longer assigned' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00317"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#317"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00317] In the recursive method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN338442 the MagicNumber/String 'Skipping reset of partition {} since reset is no longer needed' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00319"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#319"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00319] In the recursive method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN338442 the MagicNumber/String 'Skipping reset of partition {} since an alternative reset has been requested' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00321"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#321"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00321] In the recursive method org.apache.kafka.clients.consumer.internals.SubscriptionState.maybeSeekUnvalidated@POLYN338442 the MagicNumber/String 'Resetting offset for partition {} to position {}.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#168"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00168] In the recursive method org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromUser@POLYN331091 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00177] In the recursive method org.apache.kafka.clients.consumer.internals.SubscriptionState.assignFromUser@POLYN331091 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00560"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#560"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00560] In the recursive method org.apache.kafka.clients.consumer.internals.SubscriptionState.hasAllFetchPositions@POLYN351842 the MagicNumber/String false MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00563"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#563"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00563] In the recursive method org.apache.kafka.clients.consumer.internals.SubscriptionState.hasAllFetchPositions@POLYN351842 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00636"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/SubscriptionState.java.html#636"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00636] In the recursive method org.apache.kafka.clients.consumer.internals.SubscriptionState.requestFailed@POLYN355477 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
