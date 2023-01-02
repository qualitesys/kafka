console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java 393 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "RaftClient<T>"
 , "c2" : "org.apache.kafka.raft.KafkaRaftClient"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.KafkaRaftClient" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00177"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#177"
 , "c1" : "KafkaRaftClient"
 , "c2" : "KafkaRaftClient(RecordSerde<T>;NetworkChannel;ReplicatedLog;QuorumStateStore;Time;Metrics;ExpirationService;LogContext;String;OptionalInt;RaftConfig)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00207"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#207"
 , "c1" : "KafkaRaftClient"
 , "c2" : "KafkaRaftClient(RecordSerde<T>;NetworkChannel;RaftMessageQueue;ReplicatedLog;QuorumStateStore;MemoryPool;Time;Metrics;ExpirationService;int;String;OptionalInt;LogContext;Random;RaftConfig)"
 , "c3" : "1"
 , "c4" : "21"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00260"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#260"
 , "c1" : "void"
 , "c2" : "updateFollowerHighWatermark(FollowerState;OptionalLong)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00274"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#274"
 , "c1" : "void"
 , "c2" : "updateLeaderEndOffsetAndTimestamp(LeaderState<T>;long)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00287"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#287"
 , "c1" : "void"
 , "c2" : "onUpdateLeaderHighWatermark(LeaderState<T>;long)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00307"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#307"
 , "c1" : "void"
 , "c2" : "updateListenersProgress(long)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00334"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#334"
 , "c1" : "Optional<SnapshotReader<T>>"
 , "c2" : "latestSnapshot()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00340"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#340"
 , "c1" : "void"
 , "c2" : "maybeFireHandleCommit(long;int;long;int;List<T>)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00350"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#350"
 , "c1" : "void"
 , "c2" : "maybeFireLeaderChange(LeaderState<T>)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00356"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#356"
 , "c1" : "void"
 , "c2" : "maybeFireLeaderChange()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00363"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#363"
 , "c1" : "void"
 , "c2" : "initialize()"
 , "c3" : "7"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00385"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#385"
 , "c1" : "void"
 , "c2" : "register(Listener<T>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00391"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#391"
 , "c1" : "void"
 , "c2" : "unregister(Listener<T>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00398"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#398"
 , "c1" : "LeaderAndEpoch"
 , "c2" : "leaderAndEpoch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00403"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#403"
 , "c1" : "OptionalInt"
 , "c2" : "nodeId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00407"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#407"
 , "c1" : "OffsetAndEpoch"
 , "c2" : "endOffset()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00411"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#411"
 , "c1" : "void"
 , "c2" : "resetConnections()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00415"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#415"
 , "c1" : "void"
 , "c2" : "onBecomeLeader(long)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00443"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#443"
 , "c1" : "void"
 , "c2" : "flushLeaderLog(LeaderState<T>;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00449"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#449"
 , "c1" : "boolean"
 , "c2" : "maybeTransitionToLeader(CandidateState;long)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00458"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#458"
 , "c1" : "void"
 , "c2" : "onBecomeCandidate(long)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00466"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#466"
 , "c1" : "void"
 , "c2" : "transitionToCandidate(long)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00472"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#472"
 , "c1" : "void"
 , "c2" : "transitionToUnattached(int)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00478"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#478"
 , "c1" : "void"
 , "c2" : "transitionToResigned(List<Integer>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00486"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#486"
 , "c1" : "void"
 , "c2" : "transitionToVoted(int;int)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00492"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#492"
 , "c1" : "void"
 , "c2" : "onBecomeFollower(long)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00507"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#507"
 , "c1" : "void"
 , "c2" : "transitionToFollower(int;int;long)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00517"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#517"
 , "c1" : "VoteResponseData"
 , "c2" : "buildVoteResponse(Errors;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00538"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#538"
 , "c1" : "VoteResponseData"
 , "c2" : "handleVoteRequest(RaftRequest.Inbound)"
 , "c3" : "7"
 , "c4" : "17"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00584"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#584"
 , "c1" : "boolean"
 , "c2" : "handleVoteResponse(RaftResponse.Inbound;long)"
 , "c3" : "14"
 , "c4" : "21"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00645"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#645"
 , "c1" : "int"
 , "c2" : "binaryExponentialElectionBackoffMs(int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00654"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#654"
 , "c1" : "int"
 , "c2" : "strictExponentialElectionBackoffMs(int;int)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00664"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#664"
 , "c1" : "BeginQuorumEpochResponseData"
 , "c2" : "buildBeginQuorumEpochResponse(Errors)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00683"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#683"
 , "c1" : "BeginQuorumEpochResponseData"
 , "c2" : "handleBeginQuorumEpochRequest(RaftRequest.Inbound;long)"
 , "c3" : "4"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00713"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#713"
 , "c1" : "boolean"
 , "c2" : "handleBeginQuorumEpochResponse(RaftResponse.Inbound;long)"
 , "c3" : "9"
 , "c4" : "16"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00753"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#753"
 , "c1" : "EndQuorumEpochResponseData"
 , "c2" : "buildEndQuorumEpochResponse(Errors)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00772"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#772"
 , "c1" : "EndQuorumEpochResponseData"
 , "c2" : "handleEndQuorumEpochRequest(RaftRequest.Inbound;long)"
 , "c3" : "6"
 , "c4" : "15"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00813"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#813"
 , "c1" : "long"
 , "c2" : "endEpochElectionBackoff(List<Integer>)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00826"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#826"
 , "c1" : "boolean"
 , "c2" : "handleEndQuorumEpochResponse(RaftResponse.Inbound;long)"
 , "c3" : "7"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00860"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#860"
 , "c1" : "FetchResponseData"
 , "c2" : "buildFetchResponse(Errors;Records;ValidOffsetAndEpoch;Optional<LogOffsetMetadata>)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00895"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#895"
 , "c1" : "FetchResponseData"
 , "c2" : "buildEmptyFetchResponse(Errors;Optional<LogOffsetMetadata>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00907"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#907"
 , "c1" : "boolean"
 , "c2" : "hasValidClusterId(String)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00930"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#930"
 , "c1" : "CompletableFuture<FetchResponseData>"
 , "c2" : "handleFetchRequest(RaftRequest.Inbound;long)"
 , "c3" : "7"
 , "c4" : "17"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00994"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#994"
 , "c1" : "FetchResponseData"
 , "c2" : "tryCompleteFetchRequest(int;FetchRequestData.FetchPartition;long)"
 , "c3" : "5"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01030"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1030"
 , "c1" : "OptionalInt"
 , "c2" : "optionalLeaderId(int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01036"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1036"
 , "c1" : "String"
 , "c2" : "listenerName(Listener<?>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01040"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1040"
 , "c1" : "boolean"
 , "c2" : "handleFetchResponse(RaftResponse.Inbound;long)"
 , "c3" : "16"
 , "c4" : "32"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01135"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1135"
 , "c1" : "void"
 , "c2" : "appendAsFollower(Records)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01147"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1147"
 , "c1" : "LogAppendInfo"
 , "c2" : "appendAsLeader(Records)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01158"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1158"
 , "c1" : "DescribeQuorumResponseData"
 , "c2" : "handleDescribeQuorumRequest(RaftRequest.Inbound;long)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01197"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1197"
 , "c1" : "FetchSnapshotResponseData"
 , "c2" : "handleFetchSnapshotRequest(RaftRequest.Inbound)"
 , "c3" : "8"
 , "c4" : "23"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01297"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1297"
 , "c1" : "boolean"
 , "c2" : "handleFetchSnapshotResponse(RaftResponse.Inbound;long)"
 , "c3" : "17"
 , "c4" : "35"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01416"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1416"
 , "c1" : "List<ReplicaState>"
 , "c2" : "convertToReplicaStates(Map<Integer,Long>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01424"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1424"
 , "c1" : "boolean"
 , "c2" : "hasConsistentLeader(int;OptionalInt)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01455"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1455"
 , "c1" : "Optional<Boolean>"
 , "c2" : "maybeHandleCommonResponse(Errors;OptionalInt;int;long)"
 , "c3" : "14"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01502"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1502"
 , "c1" : "void"
 , "c2" : "maybeTransition(OptionalInt;int;long)"
 , "c3" : "8"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01524"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1524"
 , "c1" : "boolean"
 , "c2" : "handleTopLevelError(Errors;RaftResponse.Inbound)"
 , "c3" : "5"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01534"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1534"
 , "c1" : "boolean"
 , "c2" : "handleUnexpectedError(Errors;RaftResponse.Inbound)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01540"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1540"
 , "c1" : "void"
 , "c2" : "handleResponse(RaftResponse.Inbound;long)"
 , "c3" : "8"
 , "c4" : "16"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01582"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1582"
 , "c1" : "Optional<Errors>"
 , "c2" : "validateVoterOnlyRequest(int;int)"
 , "c3" : "7"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01599"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1599"
 , "c1" : "Optional<Errors>"
 , "c2" : "validateLeaderOnlyRequest(int)"
 , "c3" : "9"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01616"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1616"
 , "c1" : "void"
 , "c2" : "handleRequest(RaftRequest.Inbound;long)"
 , "c3" : "9"
 , "c4" : "22"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01663"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1663"
 , "c1" : "void"
 , "c2" : "handleInboundMessage(RaftMessage;long)"
 , "c3" : "7"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01685"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1685"
 , "c1" : "long"
 , "c2" : "maybeSendRequest(long;int;Supplier<ApiMessage>)"
 , "c3" : "4"
 , "c4" : "18"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01734"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1734"
 , "c1" : "EndQuorumEpochRequestData"
 , "c2" : "buildEndQuorumEpochRequest(ResignedState)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01746"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1746"
 , "c1" : "long"
 , "c2" : "maybeSendRequests(long;Set<Integer>;Supplier<ApiMessage>)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01761"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1761"
 , "c1" : "BeginQuorumEpochRequestData"
 , "c2" : "buildBeginQuorumEpochRequest()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01770"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1770"
 , "c1" : "VoteRequestData"
 , "c2" : "buildVoteRequest()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01782"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1782"
 , "c1" : "FetchRequestData"
 , "c2" : "buildFetchRequest()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01796"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1796"
 , "c1" : "long"
 , "c2" : "maybeSendAnyVoterFetch(long)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01809"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1809"
 , "c1" : "FetchSnapshotRequestData"
 , "c2" : "buildFetchSnapshotRequest(OffsetAndEpoch;long)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01828"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1828"
 , "c1" : "FetchSnapshotResponseData.PartitionSnapshot"
 , "c2" : "addQuorumLeader(FetchSnapshotResponseData.PartitionSnapshot)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01838"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1838"
 , "c1" : "boolean"
 , "c2" : "isRunning()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01843"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1843"
 , "c1" : "boolean"
 , "c2" : "isShuttingDown()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01848"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1848"
 , "c1" : "void"
 , "c2" : "appendBatch(LeaderState<T>;BatchAccumulator.CompletedBatch<T>;long)"
 , "c3" : "3"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01878"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1878"
 , "c1" : "long"
 , "c2" : "maybeAppendBatches(LeaderState<T>;long)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01903"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1903"
 , "c1" : "long"
 , "c2" : "pollResigned(long)"
 , "c3" : "5"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01927"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1927"
 , "c1" : "long"
 , "c2" : "pollLeader(long)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01950"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1950"
 , "c1" : "long"
 , "c2" : "maybeSendVoteRequests(CandidateState;long)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01965"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1965"
 , "c1" : "long"
 , "c2" : "pollCandidate(long)"
 , "c3" : "8"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01996"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1996"
 , "c1" : "long"
 , "c2" : "pollFollower(long)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02005"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2005"
 , "c1" : "long"
 , "c2" : "pollFollowerAsVoter(FollowerState;long)"
 , "c3" : "5"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02022"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2022"
 , "c1" : "long"
 , "c2" : "pollFollowerAsObserver(FollowerState;long)"
 , "c3" : "7"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02045"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2045"
 , "c1" : "long"
 , "c2" : "maybeSendFetchOrFetchSnapshot(FollowerState;long)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02060"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2060"
 , "c1" : "long"
 , "c2" : "pollVoted(long)"
 , "c3" : "5"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02076"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2076"
 , "c1" : "long"
 , "c2" : "pollUnattached(long)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02085"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2085"
 , "c1" : "long"
 , "c2" : "pollUnattachedAsVoter(UnattachedState;long)"
 , "c3" : "5"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02099"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2099"
 , "c1" : "long"
 , "c2" : "pollUnattachedAsObserver(UnattachedState;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02104"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2104"
 , "c1" : "long"
 , "c2" : "pollCurrentState(long)"
 , "c3" : "13"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02122"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2122"
 , "c1" : "void"
 , "c2" : "pollListeners()"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02139"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2139"
 , "c1" : "void"
 , "c2" : "processRegistration(Registration<T>)"
 , "c3" : "7"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02158"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2158"
 , "c1" : "boolean"
 , "c2" : "maybeCompleteShutdown(long)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02211"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2211"
 , "c1" : "void"
 , "c2" : "wakeup()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02221"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2221"
 , "c1" : "void"
 , "c2" : "handle(RaftRequest.Inbound)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02229"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2229"
 , "c1" : "void"
 , "c2" : "poll()"
 , "c3" : "3"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02254"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2254"
 , "c1" : "long"
 , "c2" : "scheduleAppend(int;List<T>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02259"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2259"
 , "c1" : "long"
 , "c2" : "scheduleAtomicAppend(int;List<T>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02263"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2263"
 , "c1" : "long"
 , "c2" : "append(int;List<T>;boolean)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02289"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2289"
 , "c1" : "CompletableFuture<Void>"
 , "c2" : "shutdown(int)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02298"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2298"
 , "c1" : "void"
 , "c2" : "resign(int)"
 , "c3" : "12"
 , "c4" : "16"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02347"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2347"
 , "c1" : "Optional<SnapshotWriter<T>>"
 , "c2" : "createSnapshot(long;int;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02364"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2364"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02371"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2371"
 , "c1" : "QuorumState"
 , "c2" : "quorum()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02375"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2375"
 , "c1" : "OptionalLong"
 , "c2" : "highWatermark()"
 , "c3" : "3"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.png" 

 , "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.svg" }

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
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVCWE572"
 , "c3" : "Call to Thread run() instead of start()"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "52"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "230"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "94"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method org.apache.kafka.raft.KafkaRaftClient.KafkaRaftClient@POLYN529256 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00209"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#209"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00209] The argument channel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00220"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#220"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00220] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00222"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#222"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00222] The argument raftConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00237"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#237"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00237] In method org.apache.kafka.raft.KafkaRaftClient.KafkaRaftClient@POLYN530047 the MagicNumber/String  60000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00250"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00250] In method org.apache.kafka.raft.KafkaRaftClient.KafkaRaftClient@POLYN530047 the MagicNumber/String  'raft' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00260"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#260"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00260] For method updateFollowerHighWatermark arguments FollowerState  state|OptionalLong  highWatermarkOpt"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00261"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#261"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00261] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00262"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#262"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00262] The argument highWatermarkOpt is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00267"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#267"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00267] In method org.apache.kafka.raft.KafkaRaftClient.updateFollowerHighWatermark@POLYN533003 the MagicNumber/String  'Follower high watermark updated to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00274"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#274"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00274] For method updateLeaderEndOffsetAndTimestamp arguments LeaderState&lt;T &gt;  state|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00275"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#275"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00275] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00287"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#287"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00287] For method onUpdateLeaderHighWatermark arguments LeaderState&lt;T &gt;  state|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00288"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#288"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00288] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00292"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#292"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00292] In method org.apache.kafka.raft.KafkaRaftClient.onUpdateLeaderHighWatermark@POLYN534204 the MagicNumber/String  'Leader high watermark updated to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00307"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#307"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00307] For method updateListenersProgress arguments long  highWatermark"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00311"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00311] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00327"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#327"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00327] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00313"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00313] In method org.apache.kafka.raft.KafkaRaftClient.updateListenersProgress@POLYN534759 the MagicNumber/String  'Snapshot expected since next offset of %s is %d, log start offset is %d and high-watermark is %d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00340"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#340"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00340] For method maybeFireHandleCommit arguments long  baseOffset|int  epoch|long  appendTimestamp|int  sizeInBytes|List&lt;T &gt;  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00350"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#350"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00350] For method maybeFireLeaderChange arguments LeaderState&lt;T &gt;  state"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00350"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#350"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00350] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00368"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00368] In method org.apache.kafka.raft.KafkaRaftClient.initialize@POLYN537523 the MagicNumber/String  'Voter cannot initialize as a Leader' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00385"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#385"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00385] For method register arguments Listener&lt;T &gt;  listener"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00391"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#391"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00391] For method unregister arguments Listener&lt;T &gt;  listener"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00415"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#415"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00415] For method onBecomeLeader arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00443"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#443"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00443] For method flushLeaderLog arguments LeaderState&lt;T &gt;  state|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00446"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#446"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00446] In method org.apache.kafka.raft.KafkaRaftClient.flushLeaderLog@POLYN540423 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00449"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#449"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00449] For method maybeTransitionToLeader arguments CandidateState  state|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00449"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#449"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00449] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00452"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#452"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00452] In method org.apache.kafka.raft.KafkaRaftClient.maybeTransitionToLeader@POLYN540698 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00454"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#454"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00454] In method org.apache.kafka.raft.KafkaRaftClient.maybeTransitionToLeader@POLYN540698 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00458"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#458"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00458] For method onBecomeCandidate arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00466"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#466"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00466] For method transitionToCandidate arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00472"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#472"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00472] For method transitionToUnattached arguments int  epoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00478"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#478"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00478] For method transitionToResigned arguments List&lt;Integer &gt;  preferredSuccessors"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00480"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#480"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00480] In method org.apache.kafka.raft.KafkaRaftClient.transitionToResigned@POLYN541825 the MagicNumber/String  'Not handling request since this node is resigning' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00486"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#486"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00486] For method transitionToVoted arguments int  candidateId|int  epoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00492"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#492"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00492] For method onBecomeFollower arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00500"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#500"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00500] In method org.apache.kafka.raft.KafkaRaftClient.onBecomeFollower@POLYN542457 the MagicNumber/String  'Cannot process the fetch request because the node is no longer the leader.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00504"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#504"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00504] In method org.apache.kafka.raft.KafkaRaftClient.onBecomeFollower@POLYN542457 the MagicNumber/String  'Failed to receive sufficient acknowledgments for this append before leader change.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00507"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#507"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00507] For method transitionToFollower arguments int  epoch|int  leaderId|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00517"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#517"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00517] For method buildVoteResponse arguments Errors  partitionLevelError|boolean  voteGranted"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00538"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#538"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00538] For method handleVoteRequest arguments RaftRequest.Inbound  requestMetadata"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00539"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#539"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00539] The argument requestMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00553"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#553"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00553] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteRequest@POLYN543935 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00553"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#553"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00553] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteRequest@POLYN543935 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00560"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#560"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00560] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteRequest@POLYN543935 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00560"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#560"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00560] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteRequest@POLYN543935 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00561"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#561"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00561] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteRequest@POLYN543935 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00566"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#566"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00566] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteRequest@POLYN543935 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00574"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#574"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00574] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteRequest@POLYN543935 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00580"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#580"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00580] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteRequest@POLYN543935 the MagicNumber/String  'Vote request {} with epoch {} is {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00580"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#580"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00580] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteRequest@POLYN543935 the MagicNumber/String  'granted' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00580"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#580"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00580] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteRequest@POLYN543935 the MagicNumber/String  'rejected' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00584"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#584"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00584] For method handleVoteResponse arguments RaftResponse.Inbound  responseMetadata|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00585"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#585"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00585] The argument responseMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00596"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#596"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00596] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteResponse@POLYN546641 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00600"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#600"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00600] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteResponse@POLYN546641 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00600"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#600"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00600] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteResponse@POLYN546641 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00612"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#612"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00612] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteResponse@POLYN546641 the MagicNumber/String  'Ignoring vote response {} since we already became leader for epoch {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00626"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#626"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00626] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteResponse@POLYN546641 the MagicNumber/String  'Insufficient remaining votes to become leader (rejected by {}). ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00627"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#627"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00627] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteResponse@POLYN546641 the MagicNumber/String  'We will backoff before retrying election again' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00636"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#636"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00636] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteResponse@POLYN546641 the MagicNumber/String  'Ignoring vote response {} since we are no longer a candidate in epoch {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00639"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#639"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00639] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteResponse@POLYN546641 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00645"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#645"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00645] For method binaryExponentialElectionBackoffMs arguments int  retries"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00646"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#646"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00646] In method org.apache.kafka.raft.KafkaRaftClient.binaryExponentialElectionBackoffMs@POLYN549587 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00647"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#647"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00647] In method org.apache.kafka.raft.KafkaRaftClient.binaryExponentialElectionBackoffMs@POLYN549587 the MagicNumber/String  'Retries ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00647"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#647"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00647] In method org.apache.kafka.raft.KafkaRaftClient.binaryExponentialElectionBackoffMs@POLYN549587 the MagicNumber/String  ' should be larger than zero' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00650"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#650"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00650] In method org.apache.kafka.raft.KafkaRaftClient.binaryExponentialElectionBackoffMs@POLYN549587 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00650"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#650"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00650] In method org.apache.kafka.raft.KafkaRaftClient.binaryExponentialElectionBackoffMs@POLYN549587 the MagicNumber/String  20 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00650"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#650"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00650] In method org.apache.kafka.raft.KafkaRaftClient.binaryExponentialElectionBackoffMs@POLYN549587 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00654"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#654"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00654] For method strictExponentialElectionBackoffMs arguments int  positionInSuccessors|int  totalNumSuccessors"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00655"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#655"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00655] In method org.apache.kafka.raft.KafkaRaftClient.strictExponentialElectionBackoffMs@POLYN550143 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00656"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#656"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00656] In method org.apache.kafka.raft.KafkaRaftClient.strictExponentialElectionBackoffMs@POLYN550143 the MagicNumber/String  'Position ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00656"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#656"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00656] In method org.apache.kafka.raft.KafkaRaftClient.strictExponentialElectionBackoffMs@POLYN550143 the MagicNumber/String  ' should be larger than zero' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00657"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#657"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00657] In method org.apache.kafka.raft.KafkaRaftClient.strictExponentialElectionBackoffMs@POLYN550143 the MagicNumber/String  ' and smaller than total number of successors ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00660"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#660"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00660] In method org.apache.kafka.raft.KafkaRaftClient.strictExponentialElectionBackoffMs@POLYN550143 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00661"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#661"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00661] In method org.apache.kafka.raft.KafkaRaftClient.strictExponentialElectionBackoffMs@POLYN550143 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00664"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#664"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00664] For method buildBeginQuorumEpochResponse arguments Errors  partitionLevelError"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00683"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#683"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00683] For method handleBeginQuorumEpochRequest arguments RaftRequest.Inbound  requestMetadata|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00684"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#684"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00684] The argument requestMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00699"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#699"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00699] In method org.apache.kafka.raft.KafkaRaftClient.handleBeginQuorumEpochRequest@POLYN551512 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00699"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#699"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00699] In method org.apache.kafka.raft.KafkaRaftClient.handleBeginQuorumEpochRequest@POLYN551512 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00713"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#713"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00713] For method handleBeginQuorumEpochResponse arguments RaftResponse.Inbound  responseMetadata|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00714"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#714"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00714] The argument responseMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00725"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#725"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00725] In method org.apache.kafka.raft.KafkaRaftClient.handleBeginQuorumEpochResponse@POLYN553024 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00729"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#729"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00729] In method org.apache.kafka.raft.KafkaRaftClient.handleBeginQuorumEpochResponse@POLYN553024 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00729"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#729"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00729] In method org.apache.kafka.raft.KafkaRaftClient.handleBeginQuorumEpochResponse@POLYN553024 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00744"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#744"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00744] In method org.apache.kafka.raft.KafkaRaftClient.handleBeginQuorumEpochResponse@POLYN553024 the MagicNumber/String  'Ignoring BeginQuorumEpoch response {} since ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00745"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#745"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00745] In method org.apache.kafka.raft.KafkaRaftClient.handleBeginQuorumEpochResponse@POLYN553024 the MagicNumber/String  'this node is not the leader anymore' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00747"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#747"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00747] In method org.apache.kafka.raft.KafkaRaftClient.handleBeginQuorumEpochResponse@POLYN553024 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00753"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#753"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00753] For method buildEndQuorumEpochResponse arguments Errors  partitionLevelError"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00772"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#772"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00772] For method handleEndQuorumEpochRequest arguments RaftRequest.Inbound  requestMetadata|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00773"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#773"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00773] The argument requestMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00788"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#788"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00788] In method org.apache.kafka.raft.KafkaRaftClient.handleEndQuorumEpochRequest@POLYN555773 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00788"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#788"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00788] In method org.apache.kafka.raft.KafkaRaftClient.handleEndQuorumEpochRequest@POLYN555773 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00804"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#804"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00804] In method org.apache.kafka.raft.KafkaRaftClient.handleEndQuorumEpochRequest@POLYN555773 the MagicNumber/String  'Overriding follower fetch timeout to {} after receiving ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00805"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#805"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00805] In method org.apache.kafka.raft.KafkaRaftClient.handleEndQuorumEpochRequest@POLYN555773 the MagicNumber/String  'EndQuorumEpoch request from leader {} in epoch {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00813"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#813"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00813] For method endEpochElectionBackoff arguments List&lt;Integer &gt;  preferredSuccessors"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00813"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#813"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00813] The argument preferredSuccessors is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00819"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#819"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00819] In method org.apache.kafka.raft.KafkaRaftClient.endEpochElectionBackoff@POLYN557964 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00820"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#820"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00820] In method org.apache.kafka.raft.KafkaRaftClient.endEpochElectionBackoff@POLYN557964 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00826"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#826"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00826] For method handleEndQuorumEpochResponse arguments RaftResponse.Inbound  responseMetadata|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00827"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#827"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00827] The argument responseMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00837"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#837"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00837] In method org.apache.kafka.raft.KafkaRaftClient.handleEndQuorumEpochResponse@POLYN558410 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00841"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#841"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00841] In method org.apache.kafka.raft.KafkaRaftClient.handleEndQuorumEpochResponse@POLYN558410 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00841"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#841"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00841] In method org.apache.kafka.raft.KafkaRaftClient.handleEndQuorumEpochResponse@POLYN558410 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00854"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#854"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00854] In method org.apache.kafka.raft.KafkaRaftClient.handleEndQuorumEpochResponse@POLYN558410 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00860"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#860"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00860] For method buildFetchResponse arguments Errors  error|Records  records|ValidOffsetAndEpoch  validOffsetAndEpoch|Optional&lt;LogOffsetMetadata &gt;  highWatermark"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00861"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#861"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00861] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00863"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#863"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00863] The argument validOffsetAndEpoch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00864"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#864"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00864] The argument highWatermark is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00873"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#873"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00873] In method org.apache.kafka.raft.KafkaRaftClient.buildFetchResponse@POLYN560214 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00895"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#895"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00895] For method buildEmptyFetchResponse arguments Errors  error|Optional&lt;LogOffsetMetadata &gt;  highWatermark"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00907"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#907"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00907] For method hasValidClusterId arguments String  requestClusterId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00909"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#909"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00909] In method org.apache.kafka.raft.KafkaRaftClient.hasValidClusterId@POLYN561954 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00910"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#910"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00910] In method org.apache.kafka.raft.KafkaRaftClient.hasValidClusterId@POLYN561954 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00930"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#930"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00930] For method handleFetchRequest arguments RaftRequest.Inbound  requestMetadata|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00931"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#931"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00931] The argument requestMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00950"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#950"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00950] The same method call fetchPartition.lastFetchedEpoch()fetchPartition.currentLeaderEpoch() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00945"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#945"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00945] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN562763 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00947"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#947"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00947] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN562763 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00947"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#947"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00947] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN562763 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00948"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#948"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00948] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN562763 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00949"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#949"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00949] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN562763 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00950"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#950"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00950] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN562763 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00958"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#958"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00958] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN562763 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00958"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#958"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00958] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN562763 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00961"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#961"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00961] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN562763 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00962"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#962"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00962] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN562763 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00971"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#971"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00971] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN562763 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00980"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#980"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00980] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN562763 the MagicNumber/String  'Failed to handle fetch from {} at {} due to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00987"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#987"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00987] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN562763 the MagicNumber/String  'Completing delayed fetch from {} starting at offset {} at {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00994"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#994"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00994] For method tryCompleteFetchRequest arguments int  replicaId|FetchRequestData.FetchPartition  request|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00996"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#996"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00996] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01025"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1025"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01025] In method org.apache.kafka.raft.KafkaRaftClient.tryCompleteFetchRequest@POLYN566308 the MagicNumber/String  'Caught unexpected error in fetch completion of request {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01030"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1030"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01030] For method optionalLeaderId arguments int  leaderIdOrNil"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01031"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1031"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01031] In method org.apache.kafka.raft.KafkaRaftClient.optionalLeaderId@POLYN568229 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01036"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1036"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01036] For method listenerName arguments Listener&lt;? &gt;  listener"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01036"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1036"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01036] The argument listener is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01037"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1037"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01037] In method org.apache.kafka.raft.KafkaRaftClient.listenerName@POLYN568492 the MagicNumber/String  '%s@%d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01040"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1040"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01040] For method handleFetchResponse arguments RaftResponse.Inbound  responseMetadata|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01041"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1041"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01041] The argument responseMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01088"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1088"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[01088] The same method call partitionResponse.snapshotId() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01051"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1051"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01051] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN568779 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01054"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1054"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01054] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN568779 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01057"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1057"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01057] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN568779 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01057"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1057"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01057] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN568779 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01073"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1073"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01073] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN568779 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01080"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1080"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01080] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN568779 the MagicNumber/String  'The leader requested truncation to offset ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01081"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1081"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01081] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN568779 the MagicNumber/String  ', which is below the current high watermark' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01082"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1082"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01082] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN568779 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01087"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1087"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01087] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN568779 the MagicNumber/String  'Truncated to offset {} from Fetch response from leader {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01088"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1088"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01088] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN568779 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01089"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1089"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01089] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN568779 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01092"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1092"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01092] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN568779 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01094"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1094"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01094] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN568779 the MagicNumber/String  'The leader sent a snapshot id with a valid end offset {} but with an invalid epoch {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01098"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1098"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01098] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN568779 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01099"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1099"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01099] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN568779 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01101"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01101] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN568779 the MagicNumber/String  'The leader sent a snapshot id with a valid epoch {} but with an invalid end offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01105"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01105] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN568779 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01119"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1119"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01119] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN568779 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01123"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1123"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01123] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN568779 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01129"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1129"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01129] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN568779 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01135"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1135"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01135] For method appendAsFollower arguments Records  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01139"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1139"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01139] In method org.apache.kafka.raft.KafkaRaftClient.appendAsFollower@POLYN573604 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01142"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1142"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01142] In method org.apache.kafka.raft.KafkaRaftClient.appendAsFollower@POLYN573604 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01144"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01144] In method org.apache.kafka.raft.KafkaRaftClient.appendAsFollower@POLYN573604 the MagicNumber/String  'Follower end offset updated to {} after append' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01147"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1147"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01147] For method appendAsLeader arguments Records  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01152"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01152] In method org.apache.kafka.raft.KafkaRaftClient.appendAsLeader@POLYN574208 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01154"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01154] In method org.apache.kafka.raft.KafkaRaftClient.appendAsLeader@POLYN574208 the MagicNumber/String  'Leader appended records at base offset {}, new end offset is {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01158"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1158"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01158] For method handleDescribeQuorumRequest arguments RaftRequest.Inbound  requestMetadata|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01159"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1159"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01159] The argument requestMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01176"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1176"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01176] In method org.apache.kafka.raft.KafkaRaftClient.handleDescribeQuorumRequest@POLYN574848 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01197"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1197"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01197] For method handleFetchSnapshotRequest arguments RaftRequest.Inbound  requestMetadata"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01198"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1198"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01198] The argument requestMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01206"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[01206] The same method call data.topics() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01253"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[01253] The same method call partitionSnapshot.position() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01206"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01206] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotRequest@POLYN576586 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01206"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01206] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotRequest@POLYN576586 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01206"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1206"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01206] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotRequest@POLYN576586 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01215"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01215] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotRequest@POLYN576586 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01216"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01216] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotRequest@POLYN576586 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01216"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1216"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01216] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotRequest@POLYN576586 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01253"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1253"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01253] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotRequest@POLYN576586 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01264"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01264] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotRequest@POLYN576586 the MagicNumber/String  'Trying to fetch a snapshot with size (%d) and a position (%d) larger than %d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01297"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1297"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01297] For method handleFetchSnapshotResponse arguments RaftResponse.Inbound  responseMetadata|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01298"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1298"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01298] The argument responseMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01307"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[01307] The same method call data.topics() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01333"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1333"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[01333] The same method call partitionSnapshot.snapshotId() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01307"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01307] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN581060 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01307"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01307] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN581060 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01307"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01307] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN581060 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01308"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1308"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01308] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN581060 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01314"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1314"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01314] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN581060 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01333"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1333"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01333] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN581060 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01334"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1334"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01334] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN581060 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01340"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1340"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01340] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN581060 the MagicNumber/String  'Leader doesn't know about snapshot id {}, returned error {} and snapshot id {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01347"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1347"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01347] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN581060 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01360"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1360"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01360] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN581060 the MagicNumber/String  'Received unexpected fetch snapshot response: %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01367"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01367] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN581060 the MagicNumber/String  'Received fetch snapshot response with an invalid id. Expected %s; Received %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01376"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01376] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN581060 the MagicNumber/String  'Received fetch snapshot response with an invalid position. Expected %d; Received %d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01389"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1389"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01389] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN581060 the MagicNumber/String  'Received unexpected fetch snapshot response: %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01403"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1403"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01403] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN581060 the MagicNumber/String  'Full log truncation expected but didn't happen. Snapshot of %s, log end offset %s, last fetched %d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01413"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1413"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01413] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN581060 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01416"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1416"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01416] For method convertToReplicaStates arguments Map&lt;Integer ,Long &gt;  replicaEndOffsets"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01416"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1416"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01416] The argument replicaEndOffsets is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01424"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1424"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01424] For method hasConsistentLeader arguments int  epoch|OptionalInt  leaderId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01424"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1424"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01424] The argument leaderId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01433"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1433"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[01433] The same method call leaderId.equals(quorum.leaderId()) is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01455"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1455"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01455] For method maybeHandleCommonResponse arguments Errors  error|OptionalInt  leaderId|int  epoch|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01457"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1457"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01457] The argument leaderId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01463"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1463"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01463] In method org.apache.kafka.raft.KafkaRaftClient.maybeHandleCommonResponse@POLYN588052 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01471"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1471"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01471] In method org.apache.kafka.raft.KafkaRaftClient.maybeHandleCommonResponse@POLYN588052 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01485"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1485"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01485] In method org.apache.kafka.raft.KafkaRaftClient.maybeHandleCommonResponse@POLYN588052 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01488"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1488"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01488] In method org.apache.kafka.raft.KafkaRaftClient.maybeHandleCommonResponse@POLYN588052 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01494"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1494"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01494] In method org.apache.kafka.raft.KafkaRaftClient.maybeHandleCommonResponse@POLYN588052 the MagicNumber/String  'Received error indicating inconsistent voter sets' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01496"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1496"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01496] In method org.apache.kafka.raft.KafkaRaftClient.maybeHandleCommonResponse@POLYN588052 the MagicNumber/String  'Received unexpected invalid request error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01502"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1502"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01502] For method maybeTransition arguments OptionalInt  leaderId|int  epoch|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01503"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1503"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01503] The argument leaderId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01508"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1508"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01508] In method org.apache.kafka.raft.KafkaRaftClient.maybeTransition@POLYN589839 the MagicNumber/String  'Received request or response with leader ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01509"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1509"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01509] In method org.apache.kafka.raft.KafkaRaftClient.maybeTransition@POLYN589839 the MagicNumber/String  ' and epoch ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01509"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1509"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01509] In method org.apache.kafka.raft.KafkaRaftClient.maybeTransition@POLYN589839 the MagicNumber/String  ' which is inconsistent with current leader ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01510"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1510"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01510] In method org.apache.kafka.raft.KafkaRaftClient.maybeTransition@POLYN589839 the MagicNumber/String  ' and epoch ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01524"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1524"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01524] For method handleTopLevelError arguments Errors  error|RaftResponse.Inbound  response"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01526"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1526"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01526] In method org.apache.kafka.raft.KafkaRaftClient.handleTopLevelError@POLYN590966 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01528"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1528"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01528] In method org.apache.kafka.raft.KafkaRaftClient.handleTopLevelError@POLYN590966 the MagicNumber/String  'Received cluster authorization error in response ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01534"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1534"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01534] For method handleUnexpectedError arguments Errors  error|RaftResponse.Inbound  response"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01534"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1534"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01534] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01535"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1535"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01535] In method org.apache.kafka.raft.KafkaRaftClient.handleUnexpectedError@POLYN591470 the MagicNumber/String  'Unexpected error {} in {} response: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01537"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1537"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01537] In method org.apache.kafka.raft.KafkaRaftClient.handleUnexpectedError@POLYN591470 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01540"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1540"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01540] For method handleResponse arguments RaftResponse.Inbound  response|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01540"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1540"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01540] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01567"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1567"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01567] In method org.apache.kafka.raft.KafkaRaftClient.handleResponse@POLYN591811 the MagicNumber/String  'Received unexpected response type: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01582"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1582"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01582] For method validateVoterOnlyRequest arguments int  remoteNodeId|int  requestEpoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01585"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1585"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01585] In method org.apache.kafka.raft.KafkaRaftClient.validateVoterOnlyRequest@POLYN593502 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01599"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1599"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01599] For method validateLeaderOnlyRequest arguments int  requestEpoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01609"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1609"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01609] In method org.apache.kafka.raft.KafkaRaftClient.validateLeaderOnlyRequest@POLYN594363 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01616"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1616"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01616] For method handleRequest arguments RaftRequest.Inbound  request|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01616"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1616"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01616] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01646"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1646"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01646] In method org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN595178 the MagicNumber/String  'Unexpected request type ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01651"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1651"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01651] In method org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN595178 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01659"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1659"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01659] In method org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN595178 the MagicNumber/String  'Sent response {} to inbound request {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01663"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1663"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01663] For method handleInboundMessage arguments RaftMessage  message|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01664"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1664"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01664] In method org.apache.kafka.raft.KafkaRaftClient.handleInboundMessage@POLYN597447 the MagicNumber/String  'Received inbound message {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01675"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1675"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01675] In method org.apache.kafka.raft.KafkaRaftClient.handleInboundMessage@POLYN597447 the MagicNumber/String  'Ignoring response {} since it is no longer needed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01678"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1678"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01678] In method org.apache.kafka.raft.KafkaRaftClient.handleInboundMessage@POLYN597447 the MagicNumber/String  'Unexpected message ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01685"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1685"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01685] For method maybeSendRequest arguments long  currentTimeMs|int  destinationId|Supplier&lt;ApiMessage &gt;  requestSupplier"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01688"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1688"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01688] The argument requestSupplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01694"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1694"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01694] In method org.apache.kafka.raft.KafkaRaftClient.maybeSendRequest@POLYN598652 the MagicNumber/String  'Connection for {} is backing off for {} ms' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01710"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1710"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01710] In method org.apache.kafka.raft.KafkaRaftClient.maybeSendRequest@POLYN598652 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01726"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1726"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01726] In method org.apache.kafka.raft.KafkaRaftClient.maybeSendRequest@POLYN598652 the MagicNumber/String  'Sent outbound request: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01734"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1734"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01734] For method buildEndQuorumEpochRequest arguments ResignedState  state"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01735"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1735"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01735] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01746"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1746"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01746] For method maybeSendRequests arguments long  currentTimeMs|Set&lt;Integer &gt;  destinationIds|Supplier&lt;ApiMessage &gt;  requestSupplier"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01796"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1796"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01796] For method maybeSendAnyVoterFetch arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01809"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1809"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01809] For method buildFetchSnapshotRequest arguments OffsetAndEpoch  snapshotId|long  snapshotSize"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01809"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1809"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01809] The argument snapshotId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01828"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1828"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01828] For method addQuorumLeader arguments FetchSnapshotResponseData.PartitionSnapshot  partitionSnapshot"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01829"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1829"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01829] The argument partitionSnapshot is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01840"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1840"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01840] In method org.apache.kafka.raft.KafkaRaftClient.isRunning@POLYN604445 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01845"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1845"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01845] In method org.apache.kafka.raft.KafkaRaftClient.isShuttingDown@POLYN604681 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01848"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1848"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01848] For method appendBatch arguments LeaderState&lt;T &gt;  state|BatchAccumulator.CompletedBatch&lt;T &gt;  batch|long  appendTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01849"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1849"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01849] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01850"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1850"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01850] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01858"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1858"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01858] In method org.apache.kafka.raft.KafkaRaftClient.appendBatch@POLYN604909 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01861"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1861"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01861] In method org.apache.kafka.raft.KafkaRaftClient.appendBatch@POLYN604909 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01862"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1862"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01862] In method org.apache.kafka.raft.KafkaRaftClient.appendBatch@POLYN604909 the MagicNumber/String  'Failed to commit {} records at {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01864"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1864"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01864] In method org.apache.kafka.raft.KafkaRaftClient.appendBatch@POLYN604909 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01867"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1867"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01867] In method org.apache.kafka.raft.KafkaRaftClient.appendBatch@POLYN604909 the MagicNumber/String  'Completed commit of {} records at {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01878"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1878"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01878] For method maybeAppendBatches arguments LeaderState&lt;T &gt;  state|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01879"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1879"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01879] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01889"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1889"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01889] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01883"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1883"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01883] In method org.apache.kafka.raft.KafkaRaftClient.maybeAppendBatches@POLYN606740 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01903"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1903"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01903] For method pollResigned arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01913"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1913"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01913] In method org.apache.kafka.raft.KafkaRaftClient.pollResigned@POLYN607902 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01919"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1919"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01919] In method org.apache.kafka.raft.KafkaRaftClient.pollResigned@POLYN607902 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01927"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1927"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01927] For method pollLeader arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01931"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1931"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01931] In method org.apache.kafka.raft.KafkaRaftClient.pollLeader@POLYN608944 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01933"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1933"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01933] In method org.apache.kafka.raft.KafkaRaftClient.pollLeader@POLYN608944 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01950"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1950"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01950] For method maybeSendVoteRequests arguments CandidateState  state|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01951"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1951"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01951] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01965"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1965"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01965] For method pollCandidate arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01969"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1969"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01969] In method org.apache.kafka.raft.KafkaRaftClient.pollCandidate@POLYN610152 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01979"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1979"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01979] In method org.apache.kafka.raft.KafkaRaftClient.pollCandidate@POLYN610152 the MagicNumber/String  'Re-elect as candidate after election backoff has completed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01981"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1981"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01981] In method org.apache.kafka.raft.KafkaRaftClient.pollCandidate@POLYN610152 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01986"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1986"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01986] In method org.apache.kafka.raft.KafkaRaftClient.pollCandidate@POLYN610152 the MagicNumber/String  'Election has timed out, backing off for {}ms before becoming a candidate again' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01996"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1996"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01996] For method pollFollower arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02005"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2005"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02005] For method pollFollowerAsVoter arguments FollowerState  state|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02005"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2005"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02005] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02007"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2007"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02007] In method org.apache.kafka.raft.KafkaRaftClient.pollFollowerAsVoter@POLYN612176 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02010"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2010"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02010] In method org.apache.kafka.raft.KafkaRaftClient.pollFollowerAsVoter@POLYN612176 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02012"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2012"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02012] In method org.apache.kafka.raft.KafkaRaftClient.pollFollowerAsVoter@POLYN612176 the MagicNumber/String  'Become candidate due to fetch timeout' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02014"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2014"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02014] In method org.apache.kafka.raft.KafkaRaftClient.pollFollowerAsVoter@POLYN612176 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02022"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2022"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02022] For method pollFollowerAsObserver arguments FollowerState  state|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02022"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2022"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02022] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02045"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2045"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02045] For method maybeSendFetchOrFetchSnapshot arguments FollowerState  state|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02045"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2045"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02045] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02060"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2060"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02060] For method pollVoted arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02064"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2064"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02064] In method org.apache.kafka.raft.KafkaRaftClient.pollVoted@POLYN614855 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02070"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2070"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02070] In method org.apache.kafka.raft.KafkaRaftClient.pollVoted@POLYN614855 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02076"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2076"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02076] For method pollUnattached arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02085"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2085"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02085] For method pollUnattachedAsVoter arguments UnattachedState  state|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02085"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2085"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02085] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02087"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2087"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02087] In method org.apache.kafka.raft.KafkaRaftClient.pollUnattachedAsVoter@POLYN615909 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02093"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2093"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02093] In method org.apache.kafka.raft.KafkaRaftClient.pollUnattachedAsVoter@POLYN615909 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02099"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2099"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02099] For method pollUnattachedAsObserver arguments UnattachedState  state|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02099"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2099"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02099] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02104"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2104"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02104] For method pollCurrentState arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02118"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2118"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02118] In method org.apache.kafka.raft.KafkaRaftClient.pollCurrentState@POLYN616819 the MagicNumber/String  'Unexpected quorum state ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02125"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[02125] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02124"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02124] In method org.apache.kafka.raft.KafkaRaftClient.pollListeners@POLYN617801 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02126"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2126"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02126] In method org.apache.kafka.raft.KafkaRaftClient.pollListeners@POLYN617801 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02139"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2139"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02139] For method processRegistration arguments Registration&lt;T &gt;  registration"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02139"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2139"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02139] The argument registration is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02144"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02144] In method org.apache.kafka.raft.KafkaRaftClient.processRegistration@POLYN618324 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02145"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2145"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02145] In method org.apache.kafka.raft.KafkaRaftClient.processRegistration@POLYN618324 the MagicNumber/String  'Attempting to add a listener that already exists: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02147"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02147] In method org.apache.kafka.raft.KafkaRaftClient.processRegistration@POLYN618324 the MagicNumber/String  'Registered the listener {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02150"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2150"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02150] In method org.apache.kafka.raft.KafkaRaftClient.processRegistration@POLYN618324 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02151"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2151"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02151] In method org.apache.kafka.raft.KafkaRaftClient.processRegistration@POLYN618324 the MagicNumber/String  'Attempting to remove a listener that doesn't exists: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02153"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2153"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02153] In method org.apache.kafka.raft.KafkaRaftClient.processRegistration@POLYN618324 the MagicNumber/String  'Unregistered the listener {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02158"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2158"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02158] For method maybeCompleteShutdown arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02160"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02160] In method org.apache.kafka.raft.KafkaRaftClient.maybeCompleteShutdown@POLYN619536 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02161"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02161] In method org.apache.kafka.raft.KafkaRaftClient.maybeCompleteShutdown@POLYN619536 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02167"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02167] In method org.apache.kafka.raft.KafkaRaftClient.maybeCompleteShutdown@POLYN619536 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02175"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2175"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02175] In method org.apache.kafka.raft.KafkaRaftClient.maybeCompleteShutdown@POLYN619536 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02178"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02178] In method org.apache.kafka.raft.KafkaRaftClient.maybeCompleteShutdown@POLYN619536 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02190"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2190"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02190] The argument time is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02197"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2197"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02197] For method maybeClean arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02201"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2201"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[02201] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02203"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2203"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02203] In method org.apache.kafka.raft.KafkaRaftClient.RaftMetadataLogCleanerManager.maybeClean@POLYN621015 the MagicNumber/String  'Had an error during log cleaning' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02221"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2221"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02221] For method handle arguments RaftRequest.Inbound  request"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02248"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2248"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02248] In method org.apache.kafka.raft.KafkaRaftClient.poll@POLYN622043 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02254"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2254"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02254] For method scheduleAppend arguments int  epoch|List&lt;T &gt;  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02255"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02255] In method org.apache.kafka.raft.KafkaRaftClient.scheduleAppend@POLYN623089 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02259"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2259"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02259] For method scheduleAtomicAppend arguments int  epoch|List&lt;T &gt;  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02260"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02260] In method org.apache.kafka.raft.KafkaRaftClient.scheduleAtomicAppend@POLYN623334 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02263"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2263"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02263] For method append arguments int  epoch|List&lt;T &gt;  records|boolean  isAtomic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02265"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02265] In method org.apache.kafka.raft.KafkaRaftClient.append@POLYN623565 the MagicNumber/String  'Append failed because the replication is not the current leader' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02289"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2289"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02289] For method shutdown arguments int  timeoutMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02290"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2290"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02290] In method org.apache.kafka.raft.KafkaRaftClient.shutdown@POLYN624691 the MagicNumber/String  'Beginning graceful shutdown' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02298"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2298"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02298] For method resign arguments int  epoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02299"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02299] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN625158 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02300"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2300"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02300] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN625158 the MagicNumber/String  'Attempt to resign from an invalid negative epoch ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02304"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2304"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02304] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN625158 the MagicNumber/String  'Attempt to resign by a non-voter' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02311"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2311"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02311] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN625158 the MagicNumber/String  'Attempt to resign from epoch ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02312"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2312"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02312] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN625158 the MagicNumber/String  ' which is larger than the current epoch ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02318"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2318"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02318] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN625158 the MagicNumber/String  'Ignoring call to resign from epoch {} since it is smaller than the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02319"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2319"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02319] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN625158 the MagicNumber/String  'current epoch {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02322"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2322"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02322] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN625158 the MagicNumber/String  'Cannot resign from epoch ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02323"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2323"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02323] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN625158 the MagicNumber/String  ' since we are not the leader' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02329"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2329"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02329] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN625158 the MagicNumber/String  'Ignoring call to resign from epoch {} since this node is ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02330"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02330] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN625158 the MagicNumber/String  'no longer the leader' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02336"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02336] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN625158 the MagicNumber/String  'Ignoring call to resign from epoch {} since it is smaller than the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02337"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2337"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02337] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN625158 the MagicNumber/String  'current epoch {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02339"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2339"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02339] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN625158 the MagicNumber/String  'Received user request to resign from the current epoch {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02347"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2347"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02347] For method createSnapshot arguments long  committedOffset|int  committedEpoch|long  lastContainedLogTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02353"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2353"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02353] In method org.apache.kafka.raft.KafkaRaftClient.createSnapshot@POLYN627340 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02365"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2365"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02365] In method org.apache.kafka.raft.KafkaRaftClient.close@POLYN627835 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02366"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2366"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02366] In method org.apache.kafka.raft.KafkaRaftClient.close@POLYN627835 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02393"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2393"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02393] For method update arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02410"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2410"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02410] In method org.apache.kafka.raft.KafkaRaftClient.GracefulShutdown.failWithTimeout@POLYN629357 the MagicNumber/String  'Graceful shutdown timed out after {}ms' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02412"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2412"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02412] In method org.apache.kafka.raft.KafkaRaftClient.GracefulShutdown.failWithTimeout@POLYN629357 the MagicNumber/String  'Timeout expired before graceful shutdown completed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02416"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2416"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02416] In method org.apache.kafka.raft.KafkaRaftClient.GracefulShutdown.complete@POLYN629624 the MagicNumber/String  'Graceful shutdown completed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02417"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2417"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02417] In method org.apache.kafka.raft.KafkaRaftClient.GracefulShutdown.complete@POLYN629624 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02469"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2469"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[02469] Lock statement on synchronized method nextOffset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02481"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2481"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[02481] Lock statement on synchronized method nextExpectedOffset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02482"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2482"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02482] In method org.apache.kafka.raft.KafkaRaftClient.ListenerContext.nextExpectedOffset@POLYN631995 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02485"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2485"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02485] In method org.apache.kafka.raft.KafkaRaftClient.ListenerContext.nextExpectedOffset@POLYN631995 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02498"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2498"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02498] For method fireHandleSnapshot arguments SnapshotReader&lt;T &gt;  reader"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02498"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2498"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02498] The argument reader is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02499"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2499"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[02499] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02501"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2501"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02501] In method org.apache.kafka.raft.KafkaRaftClient.ListenerContext.fireHandleSnapshot@POLYN632664 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02504"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2504"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02504] In method org.apache.kafka.raft.KafkaRaftClient.ListenerContext.fireHandleSnapshot@POLYN632664 the MagicNumber/String  'Notifying listener {} of snapshot {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02514"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2514"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02514] For method fireHandleCommit arguments long  baseOffset|Records  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02534"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2534"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02534] For method fireHandleCommit arguments long  baseOffset|int  epoch|long  appendTimestamp|int  sizeInBytes|List&lt;T &gt;  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02550"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2550"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02550] For method fireHandleCommit arguments BatchReader&lt;T &gt;  reader"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02550"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2550"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02550] The argument reader is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02551"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2551"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[02551] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02555"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2555"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02555] In method org.apache.kafka.raft.KafkaRaftClient.ListenerContext.fireHandleCommit@POLYN634701 the MagicNumber/String  'Notifying listener {} of batch for baseOffset {} and lastOffset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02563"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2563"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02563] For method maybeFireLeaderChange arguments LeaderAndEpoch  leaderAndEpoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02566"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2566"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02566] In method org.apache.kafka.raft.KafkaRaftClient.ListenerContext.maybeFireLeaderChange@POLYN635157 the MagicNumber/String  'Notifying listener {} of leader change {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02571"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2571"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02571] For method shouldFireLeaderChange arguments LeaderAndEpoch  leaderAndEpoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02571"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2571"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02571] The argument leaderAndEpoch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02573"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2573"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02573] In method org.apache.kafka.raft.KafkaRaftClient.ListenerContext.shouldFireLeaderChange@POLYN635565 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02575"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2575"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02575] In method org.apache.kafka.raft.KafkaRaftClient.ListenerContext.shouldFireLeaderChange@POLYN635565 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02582"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2582"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02582] For method maybeFireLeaderChange arguments LeaderAndEpoch  leaderAndEpoch|long  epochStartOffset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02593"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2593"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[02593] Lock statement on synchronized method onClose"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02593"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2593"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02593] For method onClose arguments BatchReader&lt;T &gt;  reader"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02593"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2593"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02593] The argument reader is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02597"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2597"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02597] In method org.apache.kafka.raft.KafkaRaftClient.ListenerContext.onClose@POLYN636424 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02601"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2601"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02601] In method org.apache.kafka.raft.KafkaRaftClient.ListenerContext.onClose@POLYN636424 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
