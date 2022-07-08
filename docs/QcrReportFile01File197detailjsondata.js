console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java 427 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Closeable"
 , "c2" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.clients.consumer.internals.AbstractCoordinator" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "AbstractCoordinator"
 , "c2" : "AbstractCoordinator(GroupRebalanceConfig;LogContext;ConsumerNetworkClient;Metrics;String;Time)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "protocolType()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "JoinGroupRequestData.JoinGroupRequestProtocolCollection"
 , "c2" : "metadata()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "onJoinPrepare(int;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Map<String,ByteBuffer>"
 , "c2" : "onLeaderElected(String;String;List<JoinGroupResponseData.JoinGroupResponseMember>;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "onJoinComplete(int;String;String;ByteBuffer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "onLeavePrepare()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "ensureCoordinatorReady(Timer)"
 , "c3" : "12"
 , "c4" : "18"
}} 
,
{ "ligne" : {
   "c1" : "RequestFuture<Void>"
 , "c2" : "lookupCoordinator()"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "clearFindCoordinatorFuture()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "rejoinNeededOrPending()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "pollHeartbeat(long)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "long"
 , "c2" : "timeToNextHeartbeat(long)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "ensureActiveGroup()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "ensureActiveGroup(Timer)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "startHeartbeatThreadIfNeeded()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "closeHeartbeatThread()"
 , "c3" : "2"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "joinGroupIfNeeded(Timer)"
 , "c3" : "13"
 , "c4" : "26"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resetJoinGroupFuture()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "RequestFuture<ByteBuffer>"
 , "c2" : "initiateJoinGroup()"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "RequestFuture<ByteBuffer>"
 , "c2" : "sendJoinGroupRequest()"
 , "c3" : "2"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "RequestFuture<ByteBuffer>"
 , "c2" : "onJoinFollower()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "RequestFuture<ByteBuffer>"
 , "c2" : "onLeaderElected(JoinGroupResponse)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "RequestFuture<ByteBuffer>"
 , "c2" : "sendSyncGroupRequest(SyncGroupRequest.Builder)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasGenerationReset(Generation)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "RequestFuture<Void>"
 , "c2" : "sendFindCoordinatorRequest(Node)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "coordinatorUnknown()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Node"
 , "c2" : "checkAndGetCoordinator()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Node"
 , "c2" : "coordinator()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "markCoordinatorUnknown(Errors)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "markCoordinatorUnknown(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "markCoordinatorUnknown(boolean;String)"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : {
   "c1" : "Generation"
 , "c2" : "generation()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Generation"
 , "c2" : "generationIfStable()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "rebalanceInProgress()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "memberId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resetStateAndGeneration(String;boolean)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resetStateAndRejoin(String;boolean)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resetStateOnResponseError(ApiKeys;Errors;boolean)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "resetGenerationOnLeaveGroup()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "requestRejoinIfNecessary(String;String)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "requestRejoin(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "requestRejoin(String;String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isProtocolTypeInconsistent(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close(Timer)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "RequestFuture<Void>"
 , "c2" : "maybeLeaveGroup(String)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "isDynamicMember()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "RequestFuture<Void>"
 , "c2" : "sendHeartbeatRequest()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Meter"
 , "c2" : "createMeter(Metrics;String;String;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Heartbeat"
 , "c2" : "heartbeat()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "rejoinReason()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setLastRebalanceTime(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasMatchingGenerationId(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasUnknownGeneration()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasValidMemberId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setNewGeneration(Generation)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "setNewState(MemberState)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.svg" }

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
{ "ligne" :  "R0:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.this" }
,
{ "ligne" :  "R1:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN415487.isDisconnected" }
,
{ "ligne" :  "R2:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN415487.cause" }
,
{ "ligne" :  "R3:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN415133.error" }
,
{ "ligne" :  "R4:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN418406.api" }
,
{ "ligne" :  "R5:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN418406.error" }
,
{ "ligne" :  "R6:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN418406.shouldResetMemberId" }
,
{ "ligne" :  "R7:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN418108.reason" }
,
{ "ligne" :  "R8:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN418108.shouldResetMemberId" }
,
{ "ligne" :  "R9:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN417409.reason" }
,
{ "ligne" :  "R10:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN417409.shouldResetMemberId" }
,
{ "ligne" :  "R11:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN415332.cause" }
,
{ "ligne" :  "R12:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN388603.now" }
]
,
"data12b" : [
{ "sequence" : { "noseq" : "0" , "pas" : [
{ "ligne" : "S0:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN390474 (R0 in line [00271])" }
,
{ "ligne" : "S0:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN420052" }
,
{ "ligne" : "S0:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN420244 (R0 in line [00908])" }
,
{ "ligne" : "S0:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN414678 (R0 in line [00776])" }
,
{ "ligne" : "S0:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN415487 (R0 in line [00797],R1 in line [00797],R2 in line [00797])" }
,
{ "ligne" : "S0:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN415487 (R0 in line [00797],R1 in line [00797],R2 in line [00797])" }
,
{ "ligne" : "S0:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.disconnectAsync@POLYN261141" }
 ]
 } }
,
{ "sequence" : { "noseq" : "1" , "pas" : [
{ "ligne" : "S1:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN385470 (R0 in line [00150])" }
,
{ "ligne" : "S1:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN385470 (R0 in line [00150])" }
,
{ "ligne" : "S1:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN415133 (R0 in line [00789],R3 in line [00789])" }
 ]
 } }
,
{ "sequence" : { "noseq" : "2" , "pas" : [
{ "ligne" : "S2:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.JoinGroupResponseHandler.handle@POLYN397243" }
,
{ "ligne" : "S2:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN418406 (R0 in line [00863],R4 in line [00863],R5 in line [00863],R6 in line [00863])" }
,
{ "ligne" : "S2:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN418108 (R0 in line [00857],R7 in line [00857],R8 in line [00857])" }
,
{ "ligne" : "S2:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN417409 (R0 in line [00844],R9 in line [00844],R10 in line [00844])" }
 ]
 } }
,
{ "sequence" : { "noseq" : "3" , "pas" : [
{ "ligne" : "S3:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN415332 (R0 in line [00793],R11 in line [00793])" }
,
{ "ligne" : "S3:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN415487 (R0 in line [00797],R1 in line [00797],R2 in line [00797])" }
,
{ "ligne" : "S3:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN415487 (R0 in line [00797],R1 in line [00797],R2 in line [00797])" }
,
{ "ligne" : "S3:org.apache.kafka.clients.consumer.internals.ConsumerNetworkClient.disconnectAsync@POLYN261141" }
 ]
 } }
,
{ "sequence" : { "noseq" : "4" , "pas" : [
{ "ligne" : "S4:org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN388603 (R0 in line [00218],R12 in line [00218])" }
,
{ "ligne" : "S4:org.apache.kafka.clients.consumer.internals.Heartbeat.poll@POLYN156461" }
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
 , "c2" : "QC-JAVCWE833"
 , "c3" : "Potential deadlock between at least two ressources"
 , "c4" : "13"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999995"
 , "c3" : "Recursivity with depth over 1 between method xx and method yy"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "29"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "22"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "9"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "19"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "236"
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
 , "c4" : "39"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "44"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00069] The class AbstractCoordinator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#109"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00109] The argument rebalanceConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00110"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#110"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00110] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00116"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.AbstractCoordinator@POLYN382310 the MagicNumber/String  'Expected a non-null group id for coordinator construction' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#132"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00132] For method onJoinPrepare arguments int  generation|String  memberId"
}} 
,
{ "ligne" : {
   "c1" : "00135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#135"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00135] For method onLeaderElected arguments String  leaderId|String  protocol|List&lt;JoinGroupResponseData.JoinGroupResponseMember &gt;  allMemberMetadata|boolean  skipAssignment"
}} 
,
{ "ligne" : {
   "c1" : "00141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#141"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00141] For method onJoinComplete arguments int  generation|String  memberId|String  protocol|ByteBuffer  memberAssignment"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#150"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00150] Lock statement on synchronized method ensureCoordinatorReady"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#150"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00150] For method ensureCoordinatorReady arguments Timer  timer"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#150"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00150] For method ensureCoordinatorReady list of called methods Object monObjet|org.apache.kafka.clients.consumer.internals.RequestFuture&lt;Void&gt; lookupCoordinatorN385933"
}} 
,
{ "ligne" : {
   "c1" : "00150"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#150"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00150] The argument timer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00156"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00156] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00160] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00168] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN385470 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN385470 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN385470 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN385470 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN385470 the MagicNumber/String  'Coordinator discovery failed, refreshing metadata' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00176] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN385470 the MagicNumber/String  'FindCoordinator request hit fatal exception' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN385470 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN385470 the MagicNumber/String  'coordinator unavailable' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN385470 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#193"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00193] Lock statement on synchronized method lookupCoordinator"
}} 
,
{ "ligne" : {
   "c1" : "00193"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#193"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00193] For method lookupCoordinator list of called methods Object monObjet|org.apache.kafka.clients.consumer.internals.RequestFuture&lt;Void&gt; sendFindCoordinatorRequestN387774"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.lookupCoordinator@POLYN387324 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.lookupCoordinator@POLYN387324 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.lookupCoordinator@POLYN387324 the MagicNumber/String  'No broker available to send FindCoordinator request' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00207"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#207"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00207] Lock statement on synchronized method clearFindCoordinatorFuture"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.clearFindCoordinatorFuture@POLYN387874 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#212"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00212] Lock statement on synchronized method rejoinNeededOrPending"
}} 
,
{ "ligne" : {
   "c1" : "00214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00214] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.rejoinNeededOrPending@POLYN388142 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#218"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00218] Lock statement on synchronized method pollHeartbeat"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#218"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00218] For method pollHeartbeat arguments long  now"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00219] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN388603 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN388603 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#235"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00235] Lock statement on synchronized method timeToNextHeartbeat"
}} 
,
{ "ligne" : {
   "c1" : "00235"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#235"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00235] For method timeToNextHeartbeat arguments long  now"
}} 
,
{ "ligne" : {
   "c1" : "00246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00246] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureActiveGroup@POLYN389496 the MagicNumber/String  'still waiting to ensure active group' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00251"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#251"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00251] For method ensureActiveGroup arguments Timer  timer"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureActiveGroup@POLYN389922 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00262"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#262"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00262] Lock statement on synchronized method startHeartbeatThreadIfNeeded"
}} 
,
{ "ligne" : {
   "c1" : "00263"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.startHeartbeatThreadIfNeeded@POLYN390232 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00271"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#271"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00271] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00272] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN390474 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN390474 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00281"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00281] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN390474 the MagicNumber/String  'Interrupted while waiting for consumer heartbeat thread to close' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#287"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00287] For method joinGroupIfNeeded arguments Timer  timer"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#287"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00287] For method joinGroupIfNeeded list of called methods Object monObjet|org.apache.kafka.clients.consumer.internals.RequestFuture&lt;java.nio.ByteBuffer&gt; initiateJoinGroupN392189"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#287"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00287] The argument timer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00310"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#310"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00310] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00318"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00318] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00319"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#319"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00319] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00332"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#332"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00332] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00343"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00343] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00351"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00351] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00359"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#359"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00359] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00360"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#360"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00360] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00361"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#361"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00361] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00362"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#362"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00362] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00322"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#322"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00322] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00354"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#354"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00354] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00290"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00290] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN391546 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00301"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00301] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN391546 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00304] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN391546 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00306"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#306"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00306] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN391546 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00314"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00314] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN391546 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00341"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00341] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN391546 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00343"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00343] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN391546 the MagicNumber/String  'rebalance failed since the generation/state was ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00344"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00344] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN391546 the MagicNumber/String  'modified by heartbeat thread to %s/%s before the rebalance callback triggered' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00347"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#347"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00347] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN391546 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00355"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#355"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00355] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN391546 the MagicNumber/String  'rebalance failed due to '%s' (%s)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00356"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#356"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00356] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN391546 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00370"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#370"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00370] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.joinGroupIfNeeded@POLYN391546 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00373"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#373"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00373] Lock statement on synchronized method resetJoinGroupFuture"
}} 
,
{ "ligne" : {
   "c1" : "00374"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#374"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00374] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetJoinGroupFuture@POLYN394411 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#377"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00377] Lock statement on synchronized method initiateJoinGroup"
}} 
,
{ "ligne" : {
   "c1" : "00377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#377"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00377] For method initiateJoinGroup list of called methods Object monObjet|org.apache.kafka.clients.consumer.internals.RequestFuture&lt;java.nio.ByteBuffer&gt; sendJoinGroupRequestN394902"
}} 
,
{ "ligne" : {
   "c1" : "00381"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#381"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00381] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.initiateJoinGroup@POLYN394552 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00385"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#385"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00385] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.initiateJoinGroup@POLYN394552 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00414"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#414"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00414] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.sendJoinGroupRequest@POLYN395641 the MagicNumber/String  '(Re-)joining group' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00420"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#420"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00420] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.sendJoinGroupRequest@POLYN395641 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00427"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#427"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00427] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.sendJoinGroupRequest@POLYN395641 the MagicNumber/String  'Sending JoinGroup ({}) to coordinator {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00447"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#447"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00447] For method handle arguments JoinGroupResponse  joinResponse|RequestFuture&lt;ByteBuffer &gt;  future"
}} 
,
{ "ligne" : {
   "c1" : "00447"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#447"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00447] The argument joinResponse is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00447"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#447"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00447] The argument future is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00458"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#458"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00458] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00536"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#536"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00536] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00451"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#451"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00451] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.JoinGroupResponseHandler.handle@POLYN397243 the MagicNumber/String  'JoinGroup failed: Inconsistent Protocol Type, received {} but expected {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00455"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#455"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00455] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.JoinGroupResponseHandler.handle@POLYN397243 the MagicNumber/String  'Received successful JoinGroup response: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00468"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#468"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00468] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.JoinGroupResponseHandler.handle@POLYN397243 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00475"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#475"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00475] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.JoinGroupResponseHandler.handle@POLYN397243 the MagicNumber/String  'Successfully joined group with generation {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00486"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#486"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00486] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.JoinGroupResponseHandler.handle@POLYN397243 the MagicNumber/String  'JoinGroup failed: Coordinator {} is loading the group.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00490"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#490"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00490] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.JoinGroupResponseHandler.handle@POLYN397243 the MagicNumber/String  'JoinGroup failed: {} Need to re-join the group. Sent generation was {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00495"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#495"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00495] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.JoinGroupResponseHandler.handle@POLYN397243 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00502"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#502"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00502] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.JoinGroupResponseHandler.handle@POLYN397243 the MagicNumber/String  'JoinGroup failed: {} Marking coordinator unknown. Sent generation was {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00508"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#508"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00508] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.JoinGroupResponseHandler.handle@POLYN397243 the MagicNumber/String  'JoinGroup failed: The group instance id {} has been fenced by another instance. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00509"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#509"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00509] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.JoinGroupResponseHandler.handle@POLYN397243 the MagicNumber/String  'Sent generation was {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00517"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#517"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00517] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.JoinGroupResponseHandler.handle@POLYN397243 the MagicNumber/String  'JoinGroup failed due to fatal error: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00519"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#519"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00519] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.JoinGroupResponseHandler.handle@POLYN397243 the MagicNumber/String  'Consumer group ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00520"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#520"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00520] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.JoinGroupResponseHandler.handle@POLYN397243 the MagicNumber/String  ' already has the configured maximum number of members.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00527"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#527"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00527] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.JoinGroupResponseHandler.handle@POLYN397243 the MagicNumber/String  'JoinGroup failed due to unsupported version error. Please unset field group.instance.id ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00528"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#528"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00528] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.JoinGroupResponseHandler.handle@POLYN397243 the MagicNumber/String  'and retry to see if the problem resolves' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00534"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#534"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00534] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.JoinGroupResponseHandler.handle@POLYN397243 the MagicNumber/String  'JoinGroup failed due to non-fatal error: {}. Will set the member id as {} and then rejoin. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00535"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#535"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00535] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.JoinGroupResponseHandler.handle@POLYN397243 the MagicNumber/String  'Sent generation was {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00537"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#537"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00537] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.JoinGroupResponseHandler.handle@POLYN397243 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00539"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#539"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00539] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.JoinGroupResponseHandler.handle@POLYN397243 the MagicNumber/String  'need to re-join with the given member-id: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00543"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#543"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00543] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.JoinGroupResponseHandler.handle@POLYN397243 the MagicNumber/String  'JoinGroup failed due to non-fatal error: REBALANCE_IN_PROGRESS, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00544"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#544"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00544] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.JoinGroupResponseHandler.handle@POLYN397243 the MagicNumber/String  'which could indicate a replication timeout on the broker. Will retry.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00548"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#548"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00548] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.JoinGroupResponseHandler.handle@POLYN397243 the MagicNumber/String  'JoinGroup failed due to unexpected error: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00549"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#549"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00549] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.JoinGroupResponseHandler.handle@POLYN397243 the MagicNumber/String  'Unexpected error in join group response: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00563"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#563"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00563] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.onJoinFollower@POLYN403063 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00567"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#567"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00567] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.onJoinFollower@POLYN403063 the MagicNumber/String  'Sending follower SyncGroup to coordinator {}: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00571"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#571"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00571] For method onLeaderElected arguments JoinGroupResponse  joinResponse"
}} 
,
{ "ligne" : {
   "c1" : "00571"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#571"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00571] The argument joinResponse is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00596"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#596"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00596] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.onLeaderElected@POLYN403856 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00600"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#600"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00600] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.onLeaderElected@POLYN403856 the MagicNumber/String  'Sending leader SyncGroup to coordinator {}: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00607"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#607"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00607] For method sendSyncGroupRequest arguments SyncGroupRequest.Builder  requestBuilder"
}} 
,
{ "ligne" : {
   "c1" : "00614"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#614"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00614] For method hasGenerationReset arguments Generation  gen"
}} 
,
{ "ligne" : {
   "c1" : "00614"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#614"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00614] The argument gen is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00616"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#616"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00616] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.hasGenerationReset@POLYN406003 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00625"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#625"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00625] For method handle arguments SyncGroupResponse  syncResponse|RequestFuture&lt;ByteBuffer &gt;  future"
}} 
,
{ "ligne" : {
   "c1" : "00625"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#625"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00625] For method handle list of called methods Object monObjet|boolean time_millisecondsN408294"
}} 
,
{ "ligne" : {
   "c1" : "00625"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#625"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00625] The argument syncResponse is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00626"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#626"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00626] The argument future is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00637"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#637"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00637] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00630"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#630"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00630] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.SyncGroupResponseHandler.handle@POLYN406422 the MagicNumber/String  'SyncGroup failed due to inconsistent Protocol Type, received {} but expected {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00634"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#634"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00634] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.SyncGroupResponseHandler.handle@POLYN406422 the MagicNumber/String  'Received successful SyncGroup response: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00641"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#641"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00641] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.SyncGroupResponseHandler.handle@POLYN406422 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00645"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#645"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00645] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.SyncGroupResponseHandler.handle@POLYN406422 the MagicNumber/String  'SyncGroup failed due to inconsistent Protocol Name, received {} but expected {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00650"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#650"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00650] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.SyncGroupResponseHandler.handle@POLYN406422 the MagicNumber/String  'Successfully synced group in generation {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00652"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#652"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00652] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.SyncGroupResponseHandler.handle@POLYN406422 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00653"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#653"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00653] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.SyncGroupResponseHandler.handle@POLYN406422 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00657"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#657"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00657] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.SyncGroupResponseHandler.handle@POLYN406422 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00662"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#662"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00662] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.SyncGroupResponseHandler.handle@POLYN406422 the MagicNumber/String  'Generation data was cleared by heartbeat thread to {} and state is now {} before ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00663"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#663"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00663] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.SyncGroupResponseHandler.handle@POLYN406422 the MagicNumber/String  'receiving SyncGroup response, marking this rebalance as failed and retry' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00674"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#674"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00674] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.SyncGroupResponseHandler.handle@POLYN406422 the MagicNumber/String  'SyncGroup failed: The group began another rebalance. Need to re-join the group. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00675"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#675"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00675] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.SyncGroupResponseHandler.handle@POLYN406422 the MagicNumber/String  'Sent generation was {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00678"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#678"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00678] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.SyncGroupResponseHandler.handle@POLYN406422 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00683"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#683"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00683] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.SyncGroupResponseHandler.handle@POLYN406422 the MagicNumber/String  'SyncGroup failed: The group instance id {} has been fenced by another instance. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00684"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#684"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00684] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.SyncGroupResponseHandler.handle@POLYN406422 the MagicNumber/String  'Sent generation was {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00688"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#688"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00688] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.SyncGroupResponseHandler.handle@POLYN406422 the MagicNumber/String  'SyncGroup failed: {} Need to re-join the group. Sent generation was {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00698"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#698"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00698] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.SyncGroupResponseHandler.handle@POLYN406422 the MagicNumber/String  'SyncGroup failed: {} Marking coordinator unknown. Sent generation was {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00703"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#703"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00703] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.SyncGroupResponseHandler.handle@POLYN406422 the MagicNumber/String  'Unexpected error from SyncGroup: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00710"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#710"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00710] For method sendFindCoordinatorRequest arguments Node  node"
}} 
,
{ "ligne" : {
   "c1" : "00712"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#712"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00712] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.sendFindCoordinatorRequest@POLYN411134 the MagicNumber/String  'Sending FindCoordinator request to broker {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00724"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#724"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00724] For method onSuccess arguments ClientResponse  resp|RequestFuture&lt;Void &gt;  future"
}} 
,
{ "ligne" : {
   "c1" : "00724"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#724"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00724] The argument resp is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00724"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#724"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00724] The argument future is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00735"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#735"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00735] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00725"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#725"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00725] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.FindCoordinatorResponseHandler.onSuccess@POLYN411854 the MagicNumber/String  'Received FindCoordinator response {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00728"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#728"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00728] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.FindCoordinatorResponseHandler.onSuccess@POLYN411854 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00729"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#729"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00729] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.FindCoordinatorResponseHandler.onSuccess@POLYN411854 the MagicNumber/String  'Group coordinator lookup failed: Invalid response containing more than a single coordinator' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00730"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#730"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00730] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.FindCoordinatorResponseHandler.onSuccess@POLYN411854 the MagicNumber/String  'Group coordinator lookup failed: Invalid response containing more than a single coordinator' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00732"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#732"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00732] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.FindCoordinatorResponseHandler.onSuccess@POLYN411854 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00744"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#744"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00744] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.FindCoordinatorResponseHandler.onSuccess@POLYN411854 the MagicNumber/String  'Discovered group coordinator {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00748"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#748"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00748] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.FindCoordinatorResponseHandler.onSuccess@POLYN411854 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00752"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#752"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00752] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.FindCoordinatorResponseHandler.onSuccess@POLYN411854 the MagicNumber/String  'Group coordinator lookup failed: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00758"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#758"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00758] For method onFailure arguments RuntimeException  e|RequestFuture&lt;Void &gt;  future"
}} 
,
{ "ligne" : {
   "c1" : "00759"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#759"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00759] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.FindCoordinatorResponseHandler.onFailure@POLYN413855 the MagicNumber/String  'FindCoordinator request failed due to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00772"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#772"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00772] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.coordinatorUnknown@POLYN414426 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00776"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#776"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00776] Lock statement on synchronized method checkAndGetCoordinator"
}} 
,
{ "ligne" : {
   "c1" : "00777"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#777"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00777] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN414678 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00778"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#778"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00778] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN414678 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00778"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#778"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00778] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN414678 the MagicNumber/String  'coordinator unavailable' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00779"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#779"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00779] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.checkAndGetCoordinator@POLYN414678 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00784"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#784"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00784] Lock statement on synchronized method coordinator"
}} 
,
{ "ligne" : {
   "c1" : "00789"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#789"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00789] Lock statement on synchronized method markCoordinatorUnknown"
}} 
,
{ "ligne" : {
   "c1" : "00789"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#789"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00789] For method markCoordinatorUnknown arguments Errors  error"
}} 
,
{ "ligne" : {
   "c1" : "00789"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#789"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00789] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00790"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#790"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00790] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN415133 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00790"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#790"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00790] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN415133 the MagicNumber/String  'error response ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00793"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#793"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00793] Lock statement on synchronized method markCoordinatorUnknown"
}} 
,
{ "ligne" : {
   "c1" : "00793"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#793"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00793] For method markCoordinatorUnknown arguments String  cause"
}} 
,
{ "ligne" : {
   "c1" : "00794"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#794"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00794] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN415332 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00797"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#797"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00797] Lock statement on synchronized method markCoordinatorUnknown"
}} 
,
{ "ligne" : {
   "c1" : "00797"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#797"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00797] For method markCoordinatorUnknown arguments boolean  isDisconnected|String  cause"
}} 
,
{ "ligne" : {
   "c1" : "00798"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#798"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00798] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN415487 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00799"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#799"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00799] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN415487 the MagicNumber/String  'Group coordinator {} is unavailable or invalid due to cause: {}.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00800"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#800"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00800] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN415487 the MagicNumber/String  'isDisconnected: {}. Rediscovery will be attempted.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00807"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#807"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00807] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN415487 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00812"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#812"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00812] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN415487 the MagicNumber/String  'Requesting disconnect from last known coordinator {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00820"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#820"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00820] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN415487 the MagicNumber/String  'Consumer has been disconnected from the group coordinator for {}ms' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00825"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#825"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00825] Lock statement on synchronized method generation"
}} 
,
{ "ligne" : {
   "c1" : "00830"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#830"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00830] Lock statement on synchronized method generationIfStable"
}} 
,
{ "ligne" : {
   "c1" : "00832"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#832"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00832] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.generationIfStable@POLYN416925 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00836"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#836"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00836] Lock statement on synchronized method rebalanceInProgress"
}} 
,
{ "ligne" : {
   "c1" : "00840"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#840"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00840] Lock statement on synchronized method memberId"
}} 
,
{ "ligne" : {
   "c1" : "00844"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#844"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00844] Lock statement on synchronized method resetStateAndGeneration"
}} 
,
{ "ligne" : {
   "c1" : "00844"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#844"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00844] For method resetStateAndGeneration arguments String  reason|boolean  shouldResetMemberId"
}} 
,
{ "ligne" : {
   "c1" : "00845"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#845"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00845] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN417409 the MagicNumber/String  'Resetting generation {}due to: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00845"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#845"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00845] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN417409 the MagicNumber/String  'and member id ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00845"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#845"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00845] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN417409 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00853"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#853"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00853] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN417409 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00857"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#857"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00857] Lock statement on synchronized method resetStateAndRejoin"
}} 
,
{ "ligne" : {
   "c1" : "00857"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#857"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00857] For method resetStateAndRejoin arguments String  reason|boolean  shouldResetMemberId"
}} 
,
{ "ligne" : {
   "c1" : "00860"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#860"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00860] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN418108 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00863"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#863"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00863] Lock statement on synchronized method resetStateOnResponseError"
}} 
,
{ "ligne" : {
   "c1" : "00863"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#863"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00863] For method resetStateOnResponseError arguments ApiKeys  api|Errors  error|boolean  shouldResetMemberId"
}} 
,
{ "ligne" : {
   "c1" : "00864"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#864"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00864] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN418406 the MagicNumber/String  'encountered %s from %s response' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00868"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#868"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00868] Lock statement on synchronized method resetGenerationOnLeaveGroup"
}} 
,
{ "ligne" : {
   "c1" : "00869"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#869"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00869] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetGenerationOnLeaveGroup@POLYN418749 the MagicNumber/String  'consumer pro-actively leaving the group' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00869"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#869"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00869] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetGenerationOnLeaveGroup@POLYN418749 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00872"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#872"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00872] Lock statement on synchronized method requestRejoinIfNecessary"
}} 
,
{ "ligne" : {
   "c1" : "00872"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#872"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00872] For method requestRejoinIfNecessary arguments String  shortReason|String  fullReason"
}} 
,
{ "ligne" : {
   "c1" : "00879"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#879"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00879] Lock statement on synchronized method requestRejoin"
}} 
,
{ "ligne" : {
   "c1" : "00879"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#879"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00879] For method requestRejoin arguments String  shortReason"
}} 
,
{ "ligne" : {
   "c1" : "00884"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#884"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00884] Lock statement on synchronized method requestRejoin"
}} 
,
{ "ligne" : {
   "c1" : "00884"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#884"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00884] For method requestRejoin arguments String  shortReason|String  fullReason"
}} 
,
{ "ligne" : {
   "c1" : "00886"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#886"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00886] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN419447 the MagicNumber/String  'Request joining group due to: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00888"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#888"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00888] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.requestRejoin@POLYN419447 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00891"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#891"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00891] For method isProtocolTypeInconsistent arguments String  protocolType"
}} 
,
{ "ligne" : {
   "c1" : "00892"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#892"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00892] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.isProtocolTypeInconsistent@POLYN419774 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00898"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#898"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00898] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN420052 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00902"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#902"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00902] For method close arguments Timer  timer"
}} 
,
{ "ligne" : {
   "c1" : "00908"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#908"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00908] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "00911"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#911"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00911] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN420244 the MagicNumber/String  'the consumer is being closed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00919"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#919"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00919] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN420244 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00920"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#920"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00920] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN420244 the MagicNumber/String  'Close timed out with {} pending requests to coordinator, terminating client connections' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00927"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#927"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00927] Lock statement on synchronized method maybeLeaveGroup"
}} 
,
{ "ligne" : {
   "c1" : "00927"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#927"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00927] For method maybeLeaveGroup arguments String  leaveReason"
}} 
,
{ "ligne" : {
   "c1" : "00927"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#927"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00927] For method maybeLeaveGroup list of called methods Object monObjet|org.apache.kafka.clients.consumer.internals.RequestFuture&lt;org.apache.kafka.clients.ClientResponse&gt; client_sendN422040"
}} 
,
{ "ligne" : {
   "c1" : "00928"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#928"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00928] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN421238 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00937"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#937"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00937] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN421238 the MagicNumber/String  'Member {} sending LeaveGroup request to coordinator {} due to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00963"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#963"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00963] For method handle arguments LeaveGroupResponse  leaveResponse|RequestFuture&lt;Void &gt;  future"
}} 
,
{ "ligne" : {
   "c1" : "00963"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#963"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00963] The argument leaveResponse is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00963"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#963"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00963] The argument future is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00965"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#965"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00965] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.LeaveGroupResponseHandler.handle@POLYN422677 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00966"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#966"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00966] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.LeaveGroupResponseHandler.handle@POLYN422677 the MagicNumber/String  'The expected leave group response ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00967"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#967"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00967] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.LeaveGroupResponseHandler.handle@POLYN422677 the MagicNumber/String  'should only contain no more than one member info, however get ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00972"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#972"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00972] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.LeaveGroupResponseHandler.handle@POLYN422677 the MagicNumber/String  'LeaveGroup response with {} returned successfully: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00973"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#973"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00973] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.LeaveGroupResponseHandler.handle@POLYN422677 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00975"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#975"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00975] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.LeaveGroupResponseHandler.handle@POLYN422677 the MagicNumber/String  'LeaveGroup request with {} failed with error: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00982"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#982"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00982] Lock statement on synchronized method sendHeartbeatRequest"
}} 
,
{ "ligne" : {
   "c1" : "00983"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#983"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00983] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.sendHeartbeatRequest@POLYN423751 the MagicNumber/String  'Sending Heartbeat request with generation {} and member id {} to coordinator {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#989"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00989] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.sendHeartbeatRequest@POLYN423751 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1001"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01001] For method handle arguments HeartbeatResponse  heartbeatResponse|RequestFuture&lt;Void &gt;  future"
}} 
,
{ "ligne" : {
   "c1" : "01001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1001"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01001] The argument heartbeatResponse is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1001"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01001] The argument future is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01017"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1017"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[01017] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "01006"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1006"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01006] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatResponseHandler.handle@POLYN424740 the MagicNumber/String  'Received successful Heartbeat response' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01007"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1007"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01007] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatResponseHandler.handle@POLYN424740 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01010"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1010"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01010] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatResponseHandler.handle@POLYN424740 the MagicNumber/String  'Attempt to heartbeat failed since coordinator {} is either not started or not valid' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01019"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1019"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01019] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatResponseHandler.handle@POLYN424740 the MagicNumber/String  'group is already rebalancing' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1022"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01022] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatResponseHandler.handle@POLYN424740 the MagicNumber/String  'Ignoring heartbeat response with error {} during {} state' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01023"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1023"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01023] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatResponseHandler.handle@POLYN424740 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1030"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01030] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatResponseHandler.handle@POLYN424740 the MagicNumber/String  'Attempt to heartbeat with {} and group instance id {} failed due to {}, resetting generation' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1037"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01037] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatResponseHandler.handle@POLYN424740 the MagicNumber/String  'Attempt to heartbeat with stale {} and group instance id {} failed due to {}, ignoring the error' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01039"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1039"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01039] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatResponseHandler.handle@POLYN424740 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1044"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01044] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatResponseHandler.handle@POLYN424740 the MagicNumber/String  'Unexpected error in heartbeat response: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1057"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01057] For method handle arguments R  response|RequestFuture&lt;T &gt;  future"
}} 
,
{ "ligne" : {
   "c1" : "01060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1060"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01060] For method onFailure arguments RuntimeException  e|RequestFuture&lt;T &gt;  future"
}} 
,
{ "ligne" : {
   "c1" : "01060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1060"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01060] The argument future is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1063"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01063] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.CoordinatorResponseHandler.onFailure@POLYN427835 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1070"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01070] For method onSuccess arguments ClientResponse  clientResponse|RequestFuture&lt;T &gt;  future"
}} 
,
{ "ligne" : {
   "c1" : "01070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1070"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01070] The argument clientResponse is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1070"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01070] The argument future is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1082"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[01082] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "01088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1088"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01088] For method createMeter arguments Metrics  metrics|String  groupName|String  baseName|String  descriptiveName"
}} 
,
{ "ligne" : {
   "c1" : "01088"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1088"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01088] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01090"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1090"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01090] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.createMeter@POLYN428992 the MagicNumber/String  '-rate' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01091"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1091"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01091] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.createMeter@POLYN428992 the MagicNumber/String  'The number of %s per second' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01092"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1092"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01092] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.createMeter@POLYN428992 the MagicNumber/String  '-total' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01093"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1093"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01093] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.createMeter@POLYN428992 the MagicNumber/String  'The total number of %s' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01096"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1096"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01096] The class GroupCoordinatorMetrics contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "01105"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1105"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01105] The argument metrics is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "01106"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1106"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01106] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  '-coordinator-metrics' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01108"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01108] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'heartbeat-latency' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01109"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01109] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'heartbeat-response-time-max' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01111"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1111"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01111] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'The max time taken to receive a response to a heartbeat request' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01112] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'heartbeat' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01112"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01112] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'heartbeats' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01114"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01114] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'join-latency' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01115"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01115] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'join-time-avg' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01117"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01117] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'The average time taken for a group rejoin' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01118"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01118] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'join-time-max' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01120"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01120] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'The max time taken for a group rejoin' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01121] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'join' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01121"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01121] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'group joins' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01123"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01123] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'sync-latency' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01124"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01124] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'sync-time-avg' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01126"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01126] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'The average time taken for a group sync' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01127"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01127] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'sync-time-max' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01129"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01129] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'The max time taken for a group sync' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01130] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'sync' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01130"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1130"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01130] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'group syncs' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01132"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01132] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'rebalance-latency' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01133"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01133] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'rebalance-latency-avg' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01135"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1135"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01135] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'The average time taken for a group to complete a successful rebalance, which may be composed of ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01136"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01136] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'several failed re-trials until it succeeded' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01137"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1137"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01137] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'rebalance-latency-max' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01139"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01139] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'The max time taken for a group to complete a successful rebalance, which may be composed of ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01140"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01140] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'several failed re-trials until it succeeded' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01141"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1141"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01141] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'rebalance-latency-total' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01143"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1143"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01143] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'The total number of milliseconds this consumer has spent in successful rebalances since creation' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01146"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1146"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01146] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'rebalance-total' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01148"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01148] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'The total number of successful rebalance events, each event is composed of ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01149"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01149] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'several failed re-trials until it succeeded' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01154"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01154] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'rebalance-rate-per-hour' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01156"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01156] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'The number of successful rebalance events per hour, each event is composed of ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01157"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01157] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'several failed re-trials until it succeeded' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01161"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01161] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'failed-rebalance' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01163"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01163] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'failed-rebalance-total' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01165"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01165] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'The total number of failed rebalance events' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01170"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01170] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'failed-rebalance-rate-per-hour' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01172] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'The number of failed rebalance events per hour' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01177"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01177] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01179"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1179"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01179] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  1d should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01183"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1183"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01183] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'last-rebalance-seconds-ago' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01185"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01185] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'The number of seconds since the last successful rebalance event' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01189"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1189"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01189] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01191"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01191] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  1d should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01195"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01195] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'last-heartbeat-seconds-ago' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01197] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.GroupCoordinatorMetrics.GroupCoordinatorMetrics@POLYN429907 the MagicNumber/String  'The number of seconds since the last coordinator heartbeat was sent' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01208"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01208] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.HeartbeatThread@POLYN435425 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01208"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01208] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.HeartbeatThread@POLYN435425 the MagicNumber/String  ' | ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01208"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01208] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.HeartbeatThread@POLYN435425 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01212"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1212"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[01212] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "01213"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01213] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.enable@POLYN435779 the MagicNumber/String  'Enabling heartbeat thread' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01214"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01214] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.enable@POLYN435779 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01221"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1221"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[01221] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "01222"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1222"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01222] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.disable@POLYN436131 the MagicNumber/String  'Disabling heartbeat thread' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01223"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01223] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.disable@POLYN436131 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01228"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1228"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[01228] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "01229"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1229"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01229] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.close@POLYN436369 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01235"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1235"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01235] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.hasFailed@POLYN436604 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01298"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1298"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01298] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01299"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01299] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01301"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1301"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01301] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01308"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1308"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01308] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01310"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1310"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01310] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01316"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01316] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "01247"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1247"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[01247] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {
   "c1" : "01245"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01245] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.run@POLYN436846 the MagicNumber/String  'Heartbeat thread started' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01246"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1246"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01246] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.run@POLYN436846 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01268"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1268"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01268] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.run@POLYN436846 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01280"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01280] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.run@POLYN436846 the MagicNumber/String  'session timed out without receiving a ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01281"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1281"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01281] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.run@POLYN436846 the MagicNumber/String  'heartbeat response' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01285"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01285] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.run@POLYN436846 the MagicNumber/String  'consumer poll timeout has expired. This means the time between subsequent calls to poll() ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01286"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01286] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.run@POLYN436846 the MagicNumber/String  'was longer than the configured max.poll.interval.ms, which typically implies that ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01287"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1287"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01287] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.run@POLYN436846 the MagicNumber/String  'the poll loop is spending too much time processing messages. You can address this ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01288"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01288] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.run@POLYN436846 the MagicNumber/String  'either by increasing max.poll.interval.ms or by reducing the maximum size of batches ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01289"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01289] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.run@POLYN436846 the MagicNumber/String  'returned in poll() with max.poll.records.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01291"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01291] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.run@POLYN436846 the MagicNumber/String  'consumer poll timeout has expired.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01317"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01317] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.run@POLYN436846 the MagicNumber/String  'Caught fenced group.instance.id {} error in heartbeat thread' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01331"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1331"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01331] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.run@POLYN436846 the MagicNumber/String  'An authentication error occurred in the heartbeat thread' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01334"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1334"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01334] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.run@POLYN436846 the MagicNumber/String  'A group authorization error occurred in the heartbeat thread' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01338"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1338"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01338] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.run@POLYN436846 the MagicNumber/String  'Unexpected interrupt received in heartbeat thread' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01341"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1341"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01341] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.run@POLYN436846 the MagicNumber/String  'Heartbeat thread failed due to unexpected error' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01347"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1347"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01347] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.HeartbeatThread.run@POLYN436846 the MagicNumber/String  'Heartbeat thread has closed' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01353"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1353"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[01353] The class Generation contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "01375"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1375"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01375] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "01377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[01377] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "01376"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01376] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.Generation.equals@POLYN441877 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01377] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.Generation.equals@POLYN441877 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01377"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01377] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.Generation.equals@POLYN441877 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01391"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1391"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01391] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.Generation.toString@POLYN442734 the MagicNumber/String  'Generation{' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01392"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1392"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01392] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.Generation.toString@POLYN442734 the MagicNumber/String  'generationId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01393"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01393] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.Generation.toString@POLYN442734 the MagicNumber/String  ', memberId='' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01393"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01393] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.Generation.toString@POLYN442734 the MagicNumber/String  '\'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01394"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01394] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.Generation.toString@POLYN442734 the MagicNumber/String  ', protocol='' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01394"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1394"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01394] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.Generation.toString@POLYN442734 the MagicNumber/String  '\'' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01395"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01395] In method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.Generation.toString@POLYN442734 the MagicNumber/String  '}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "01413"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1413"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[01413] Lock statement on synchronized method setLastRebalanceTime"
}} 
,
{ "ligne" : {
   "c1" : "01413"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1413"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01413] For method setLastRebalanceTime arguments long  timestamp"
}} 
,
{ "ligne" : {
   "c1" : "01418"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1418"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01418] For method hasMatchingGenerationId arguments int  generationId"
}} 
,
{ "ligne" : {
   "c1" : "01431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1431"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[01431] Lock statement on synchronized method setNewGeneration"
}} 
,
{ "ligne" : {
   "c1" : "01431"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1431"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01431] For method setNewGeneration arguments Generation  generation"
}} 
,
{ "ligne" : {
   "c1" : "01435"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1435"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[01435] Lock statement on synchronized method setNewState"
}} 
,
{ "ligne" : {
   "c1" : "01435"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1435"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01435] For method setNewState arguments MemberState  state"
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#147"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00147] Void method onLeavePrepare is empty or contains only a return."
}} 
,
{ "ligne" : {
   "c1" : "00147"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#147"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00147] Void method onLeavePrepare is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R0 : org.apache.kafka.clients.consumer.internals.AbstractCoordinator.this"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R1 : org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN415487.isDisconnected"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R2 : org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN415487.cause"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R3 : org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN415133.error"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R4 : org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN418406.api"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R5 : org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN418406.error"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R6 : org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateOnResponseError@POLYN418406.shouldResetMemberId"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R7 : org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN418108.reason"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R8 : org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndRejoin@POLYN418108.shouldResetMemberId"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R9 : org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN417409.reason"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R10 : org.apache.kafka.clients.consumer.internals.AbstractCoordinator.resetStateAndGeneration@POLYN417409.shouldResetMemberId"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R11 : org.apache.kafka.clients.consumer.internals.AbstractCoordinator.markCoordinatorUnknown@POLYN415332.cause"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R12 : org.apache.kafka.clients.consumer.internals.AbstractCoordinator.pollHeartbeat@POLYN388603.now"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] Recursive call with depth 3 starting with method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN390474 ending with method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN420244"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN390474"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN420052"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--+--org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN420244"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN421238"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN390474"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.AbstractCoordinator.lookupCoordinator@POLYN387324"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.AbstractCoordinator.sendFindCoordinatorRequest@POLYN411134"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN385470"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.AbstractCoordinator.sendJoinGroupRequest@POLYN395641"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.AbstractCoordinator.onJoinFollower@POLYN403063"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.AbstractCoordinator.sendHeartbeatRequest@POLYN423751"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.clients.consumer.internals.AbstractCoordinator.timeToNextHeartbeat@POLYN389197"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#272"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00272] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN390474 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#276"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00276] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN390474 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00281"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#281"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00281] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.closeHeartbeatThread@POLYN390474 the MagicNumber/String 'Interrupted while waiting for consumer heartbeat thread to close' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00898"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#898"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00898] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN420052 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00911"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#911"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00911] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN420244 the MagicNumber/String 'the consumer is being closed' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00919"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#919"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00919] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN420244 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00920"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#920"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00920] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.close@POLYN420244 the MagicNumber/String 'Close timed out with {} pending requests to coordinator, terminating client connections' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00928"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#928"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00928] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN421238 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00937"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#937"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00937] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.maybeLeaveGroup@POLYN421238 the MagicNumber/String 'Member {} sending LeaveGroup request to coordinator {} due to {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00194"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#194"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00194] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.lookupCoordinator@POLYN387324 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#197"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00197] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.lookupCoordinator@POLYN387324 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00198"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#198"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00198] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.lookupCoordinator@POLYN387324 the MagicNumber/String 'No broker available to send FindCoordinator request' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00712"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#712"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00712] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.sendFindCoordinatorRequest@POLYN411134 the MagicNumber/String 'Sending FindCoordinator request to broker {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00152"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#152"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00152] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN385470 the MagicNumber/String true MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#155"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00155] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN385470 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00157"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#157"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00157] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN385470 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#168"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00168] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN385470 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00172"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#172"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00172] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN385470 the MagicNumber/String 'Coordinator discovery failed, refreshing metadata' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00176"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#176"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00176] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN385470 the MagicNumber/String 'FindCoordinator request hit fatal exception' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#178"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00178] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN385470 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00181"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#181"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00181] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN385470 the MagicNumber/String 'coordinator unavailable' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#186"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00186] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.ensureCoordinatorReady@POLYN385470 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00414"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#414"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00414] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.sendJoinGroupRequest@POLYN395641 the MagicNumber/String '-Re--joining group' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00420"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#420"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00420] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.sendJoinGroupRequest@POLYN395641 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00427"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#427"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00427] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.sendJoinGroupRequest@POLYN395641 the MagicNumber/String 'Sending JoinGroup -{}- to coordinator {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00563"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#563"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00563] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.onJoinFollower@POLYN403063 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00567"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#567"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00567] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.onJoinFollower@POLYN403063 the MagicNumber/String 'Sending follower SyncGroup to coordinator {}: {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00983"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#983"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00983] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.sendHeartbeatRequest@POLYN423751 the MagicNumber/String 'Sending Heartbeat request with generation {} and member id {} to coordinator {}' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00989"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/clients/consumer/internals/AbstractCoordinator.java.html#989"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00989] In the recursive method org.apache.kafka.clients.consumer.internals.AbstractCoordinator.sendHeartbeatRequest@POLYN423751 the MagicNumber/String null MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
