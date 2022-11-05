console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java 398 rule violations " 
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
 , "c5" : "00118"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#118"
 , "c1" : "KafkaRaftClient"
 , "c2" : "KafkaRaftClient(RecordSerde<T>;NetworkChannel;ReplicatedLog;QuorumStateStore;Time;Metrics;ExpirationService;LogContext;String;OptionalInt;RaftConfig)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00148"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#148"
 , "c1" : "KafkaRaftClient"
 , "c2" : "KafkaRaftClient(RecordSerde<T>;NetworkChannel;RaftMessageQueue;ReplicatedLog;QuorumStateStore;MemoryPool;Time;Metrics;ExpirationService;int;String;OptionalInt;LogContext;Random;RaftConfig)"
 , "c3" : "1"
 , "c4" : "21"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00201"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#201"
 , "c1" : "void"
 , "c2" : "updateFollowerHighWatermark(FollowerState;OptionalLong)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00215"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#215"
 , "c1" : "void"
 , "c2" : "updateLeaderEndOffsetAndTimestamp(LeaderState<T>;long)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00228"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#228"
 , "c1" : "void"
 , "c2" : "onUpdateLeaderHighWatermark(LeaderState<T>;long)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00248"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#248"
 , "c1" : "void"
 , "c2" : "updateListenersProgress(long)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00275"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#275"
 , "c1" : "Optional<SnapshotReader<T>>"
 , "c2" : "latestSnapshot()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00281"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#281"
 , "c1" : "void"
 , "c2" : "maybeFireHandleCommit(long;int;long;int;List<T>)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00291"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#291"
 , "c1" : "void"
 , "c2" : "maybeFireLeaderChange(LeaderState<T>)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00297"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#297"
 , "c1" : "void"
 , "c2" : "maybeFireLeaderChange()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00304"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#304"
 , "c1" : "void"
 , "c2" : "initialize()"
 , "c3" : "7"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00326"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#326"
 , "c1" : "void"
 , "c2" : "register(Listener<T>)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00332"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#332"
 , "c1" : "void"
 , "c2" : "unregister(Listener<T>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00339"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#339"
 , "c1" : "LeaderAndEpoch"
 , "c2" : "leaderAndEpoch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00344"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#344"
 , "c1" : "OptionalInt"
 , "c2" : "nodeId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00348"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#348"
 , "c1" : "OffsetAndEpoch"
 , "c2" : "endOffset()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00352"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#352"
 , "c1" : "void"
 , "c2" : "resetConnections()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00356"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#356"
 , "c1" : "void"
 , "c2" : "onBecomeLeader(long)"
 , "c3" : "1"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00384"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#384"
 , "c1" : "void"
 , "c2" : "flushLeaderLog(LeaderState<T>;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00390"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#390"
 , "c1" : "boolean"
 , "c2" : "maybeTransitionToLeader(CandidateState;long)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00399"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#399"
 , "c1" : "void"
 , "c2" : "onBecomeCandidate(long)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00407"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#407"
 , "c1" : "void"
 , "c2" : "transitionToCandidate(long)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00413"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#413"
 , "c1" : "void"
 , "c2" : "transitionToUnattached(int)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00419"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#419"
 , "c1" : "void"
 , "c2" : "transitionToResigned(List<Integer>)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00427"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#427"
 , "c1" : "void"
 , "c2" : "transitionToVoted(int;int)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00433"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#433"
 , "c1" : "void"
 , "c2" : "onBecomeFollower(long)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00448"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#448"
 , "c1" : "void"
 , "c2" : "transitionToFollower(int;int;long)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00458"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#458"
 , "c1" : "VoteResponseData"
 , "c2" : "buildVoteResponse(Errors;boolean)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00469"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#469"
 , "c1" : "VoteResponseData"
 , "c2" : "handleVoteRequest(RaftRequest.Inbound)"
 , "c3" : "7"
 , "c4" : "17"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00515"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#515"
 , "c1" : "boolean"
 , "c2" : "handleVoteResponse(RaftResponse.Inbound;long)"
 , "c3" : "14"
 , "c4" : "21"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00576"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#576"
 , "c1" : "int"
 , "c2" : "binaryExponentialElectionBackoffMs(int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00585"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#585"
 , "c1" : "int"
 , "c2" : "strictExponentialElectionBackoffMs(int;int)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00595"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#595"
 , "c1" : "BeginQuorumEpochResponseData"
 , "c2" : "buildBeginQuorumEpochResponse(Errors)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00605"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#605"
 , "c1" : "BeginQuorumEpochResponseData"
 , "c2" : "handleBeginQuorumEpochRequest(RaftRequest.Inbound;long)"
 , "c3" : "4"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00635"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#635"
 , "c1" : "boolean"
 , "c2" : "handleBeginQuorumEpochResponse(RaftResponse.Inbound;long)"
 , "c3" : "9"
 , "c4" : "16"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00675"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#675"
 , "c1" : "EndQuorumEpochResponseData"
 , "c2" : "buildEndQuorumEpochResponse(Errors)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00685"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#685"
 , "c1" : "EndQuorumEpochResponseData"
 , "c2" : "handleEndQuorumEpochRequest(RaftRequest.Inbound;long)"
 , "c3" : "6"
 , "c4" : "15"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00726"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#726"
 , "c1" : "long"
 , "c2" : "endEpochElectionBackoff(List<Integer>)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00739"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#739"
 , "c1" : "boolean"
 , "c2" : "handleEndQuorumEpochResponse(RaftResponse.Inbound;long)"
 , "c3" : "7"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00773"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#773"
 , "c1" : "FetchResponseData"
 , "c2" : "buildFetchResponse(Errors;Records;ValidOffsetAndEpoch;Optional<LogOffsetMetadata>)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00808"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#808"
 , "c1" : "FetchResponseData"
 , "c2" : "buildEmptyFetchResponse(Errors;Optional<LogOffsetMetadata>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00820"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#820"
 , "c1" : "boolean"
 , "c2" : "hasValidClusterId(String)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00829"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#829"
 , "c1" : "CompletableFuture<FetchResponseData>"
 , "c2" : "handleFetchRequest(RaftRequest.Inbound;long)"
 , "c3" : "7"
 , "c4" : "17"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00893"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#893"
 , "c1" : "FetchResponseData"
 , "c2" : "tryCompleteFetchRequest(int;FetchRequestData.FetchPartition;long)"
 , "c3" : "5"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00929"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#929"
 , "c1" : "OptionalInt"
 , "c2" : "optionalLeaderId(int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00935"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#935"
 , "c1" : "String"
 , "c2" : "listenerName(Listener<?>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00939"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#939"
 , "c1" : "boolean"
 , "c2" : "handleFetchResponse(RaftResponse.Inbound;long)"
 , "c3" : "16"
 , "c4" : "32"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01034"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1034"
 , "c1" : "void"
 , "c2" : "appendAsFollower(Records)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01046"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1046"
 , "c1" : "LogAppendInfo"
 , "c2" : "appendAsLeader(Records)"
 , "c3" : "1"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01057"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1057"
 , "c1" : "DescribeQuorumResponseData"
 , "c2" : "handleDescribeQuorumRequest(RaftRequest.Inbound;long)"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01082"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1082"
 , "c1" : "FetchSnapshotResponseData"
 , "c2" : "handleFetchSnapshotRequest(RaftRequest.Inbound)"
 , "c3" : "8"
 , "c4" : "23"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01182"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1182"
 , "c1" : "boolean"
 , "c2" : "handleFetchSnapshotResponse(RaftResponse.Inbound;long)"
 , "c3" : "17"
 , "c4" : "35"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01299"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1299"
 , "c1" : "List<ReplicaState>"
 , "c2" : "convertToReplicaStates(Map<Integer,Long>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01307"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1307"
 , "c1" : "boolean"
 , "c2" : "hasConsistentLeader(int;OptionalInt)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01322"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1322"
 , "c1" : "Optional<Boolean>"
 , "c2" : "maybeHandleCommonResponse(Errors;OptionalInt;int;long)"
 , "c3" : "14"
 , "c4" : "10"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01369"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1369"
 , "c1" : "void"
 , "c2" : "maybeTransition(OptionalInt;int;long)"
 , "c3" : "8"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01391"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1391"
 , "c1" : "boolean"
 , "c2" : "handleTopLevelError(Errors;RaftResponse.Inbound)"
 , "c3" : "5"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01401"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1401"
 , "c1" : "boolean"
 , "c2" : "handleUnexpectedError(Errors;RaftResponse.Inbound)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01407"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1407"
 , "c1" : "void"
 , "c2" : "handleResponse(RaftResponse.Inbound;long)"
 , "c3" : "8"
 , "c4" : "16"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01446"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1446"
 , "c1" : "Optional<Errors>"
 , "c2" : "validateVoterOnlyRequest(int;int)"
 , "c3" : "7"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01459"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1459"
 , "c1" : "Optional<Errors>"
 , "c2" : "validateLeaderOnlyRequest(int)"
 , "c3" : "9"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01476"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1476"
 , "c1" : "void"
 , "c2" : "handleRequest(RaftRequest.Inbound;long)"
 , "c3" : "9"
 , "c4" : "22"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01523"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1523"
 , "c1" : "void"
 , "c2" : "handleInboundMessage(RaftMessage;long)"
 , "c3" : "7"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01543"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1543"
 , "c1" : "long"
 , "c2" : "maybeSendRequest(long;int;Supplier<ApiMessage>)"
 , "c3" : "4"
 , "c4" : "18"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01592"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1592"
 , "c1" : "EndQuorumEpochRequestData"
 , "c2" : "buildEndQuorumEpochRequest(ResignedState)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01604"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1604"
 , "c1" : "long"
 , "c2" : "maybeSendRequests(long;Set<Integer>;Supplier<ApiMessage>)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01619"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1619"
 , "c1" : "BeginQuorumEpochRequestData"
 , "c2" : "buildBeginQuorumEpochRequest()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01628"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1628"
 , "c1" : "VoteRequestData"
 , "c2" : "buildVoteRequest()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01640"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1640"
 , "c1" : "FetchRequestData"
 , "c2" : "buildFetchRequest()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01654"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1654"
 , "c1" : "long"
 , "c2" : "maybeSendAnyVoterFetch(long)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01667"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1667"
 , "c1" : "FetchSnapshotRequestData"
 , "c2" : "buildFetchSnapshotRequest(OffsetAndEpoch;long)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01686"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1686"
 , "c1" : "FetchSnapshotResponseData.PartitionSnapshot"
 , "c2" : "addQuorumLeader(FetchSnapshotResponseData.PartitionSnapshot)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01696"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1696"
 , "c1" : "boolean"
 , "c2" : "isRunning()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01701"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1701"
 , "c1" : "boolean"
 , "c2" : "isShuttingDown()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01706"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1706"
 , "c1" : "void"
 , "c2" : "appendBatch(LeaderState<T>;BatchAccumulator.CompletedBatch<T>;long)"
 , "c3" : "3"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01736"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1736"
 , "c1" : "long"
 , "c2" : "maybeAppendBatches(LeaderState<T>;long)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01761"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1761"
 , "c1" : "long"
 , "c2" : "pollResigned(long)"
 , "c3" : "5"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01785"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1785"
 , "c1" : "long"
 , "c2" : "pollLeader(long)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01808"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1808"
 , "c1" : "long"
 , "c2" : "maybeSendVoteRequests(CandidateState;long)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01823"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1823"
 , "c1" : "long"
 , "c2" : "pollCandidate(long)"
 , "c3" : "8"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01854"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1854"
 , "c1" : "long"
 , "c2" : "pollFollower(long)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01863"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1863"
 , "c1" : "long"
 , "c2" : "pollFollowerAsVoter(FollowerState;long)"
 , "c3" : "5"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01880"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1880"
 , "c1" : "long"
 , "c2" : "pollFollowerAsObserver(FollowerState;long)"
 , "c3" : "7"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01903"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1903"
 , "c1" : "long"
 , "c2" : "maybeSendFetchOrFetchSnapshot(FollowerState;long)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01918"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1918"
 , "c1" : "long"
 , "c2" : "pollVoted(long)"
 , "c3" : "5"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01934"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1934"
 , "c1" : "long"
 , "c2" : "pollUnattached(long)"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01943"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1943"
 , "c1" : "long"
 , "c2" : "pollUnattachedAsVoter(UnattachedState;long)"
 , "c3" : "5"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01957"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1957"
 , "c1" : "long"
 , "c2" : "pollUnattachedAsObserver(UnattachedState;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01962"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1962"
 , "c1" : "long"
 , "c2" : "pollCurrentState(long)"
 , "c3" : "13"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01980"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1980"
 , "c1" : "void"
 , "c2" : "pollListeners()"
 , "c3" : "3"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "01997"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1997"
 , "c1" : "void"
 , "c2" : "processRegistration(Registration<T>)"
 , "c3" : "7"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02016"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2016"
 , "c1" : "boolean"
 , "c2" : "maybeCompleteShutdown(long)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02067"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2067"
 , "c1" : "void"
 , "c2" : "wakeup()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02072"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2072"
 , "c1" : "void"
 , "c2" : "handle(RaftRequest.Inbound)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02077"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2077"
 , "c1" : "void"
 , "c2" : "poll()"
 , "c3" : "3"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02102"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2102"
 , "c1" : "long"
 , "c2" : "scheduleAppend(int;List<T>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02107"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2107"
 , "c1" : "long"
 , "c2" : "scheduleAtomicAppend(int;List<T>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02111"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2111"
 , "c1" : "long"
 , "c2" : "append(int;List<T>;boolean)"
 , "c3" : "4"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02137"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2137"
 , "c1" : "CompletableFuture<Void>"
 , "c2" : "shutdown(int)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02146"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2146"
 , "c1" : "void"
 , "c2" : "resign(int)"
 , "c3" : "12"
 , "c4" : "16"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02195"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2195"
 , "c1" : "Optional<SnapshotWriter<T>>"
 , "c2" : "createSnapshot(long;int;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02212"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2212"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02219"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2219"
 , "c1" : "QuorumState"
 , "c2" : "quorum()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "02223"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2223"
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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "5"
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
 , "c1" : "00089"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00089] The class KafkaRaftClient contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00136"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#136"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00136] In method org.apache.kafka.raft.KafkaRaftClient.KafkaRaftClient@POLYN527768 the MagicNumber/String  5 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#150"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00150] The argument channel is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#161"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00161] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#163"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00163] The argument raftConfig is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.raft.KafkaRaftClient.KafkaRaftClient@POLYN528559 the MagicNumber/String  60000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00191"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method org.apache.kafka.raft.KafkaRaftClient.KafkaRaftClient@POLYN528559 the MagicNumber/String  'raft' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#201"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00201] For method updateFollowerHighWatermark arguments FollowerState  state|OptionalLong  highWatermarkOpt"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00202"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#202"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00202] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00203"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#203"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00203] The argument highWatermarkOpt is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method org.apache.kafka.raft.KafkaRaftClient.updateFollowerHighWatermark@POLYN531515 the MagicNumber/String  'Follower high watermark updated to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#215"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00215] For method updateLeaderEndOffsetAndTimestamp arguments LeaderState&lt;T &gt;  state|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00216"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#216"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00216] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00228"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#228"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00228] For method onUpdateLeaderHighWatermark arguments LeaderState&lt;T &gt;  state|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00229"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#229"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00229] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00233"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.raft.KafkaRaftClient.onUpdateLeaderHighWatermark@POLYN532716 the MagicNumber/String  'Leader high watermark updated to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00248"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#248"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00248] For method updateListenersProgress arguments long  highWatermark"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00252"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#252"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00252] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00268"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#268"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00268] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00254"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#254"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00254] In method org.apache.kafka.raft.KafkaRaftClient.updateListenersProgress@POLYN533271 the MagicNumber/String  'Snapshot expected since next offset of %s is %d, log start offset is %d and high-watermark is %d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00281"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#281"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00281] For method maybeFireHandleCommit arguments long  baseOffset|int  epoch|long  appendTimestamp|int  sizeInBytes|List&lt;T &gt;  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00291"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#291"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00291] For method maybeFireLeaderChange arguments LeaderState&lt;T &gt;  state"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00291"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#291"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00291] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00309"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#309"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00309] In method org.apache.kafka.raft.KafkaRaftClient.initialize@POLYN536035 the MagicNumber/String  'Voter cannot initialize as a Leader' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00326"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#326"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00326] For method register arguments Listener&lt;T &gt;  listener"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00332"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#332"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00332] For method unregister arguments Listener&lt;T &gt;  listener"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00356"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#356"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00356] For method onBecomeLeader arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00384"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#384"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00384] For method flushLeaderLog arguments LeaderState&lt;T &gt;  state|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00387"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#387"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00387] In method org.apache.kafka.raft.KafkaRaftClient.flushLeaderLog@POLYN538935 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00390"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#390"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00390] For method maybeTransitionToLeader arguments CandidateState  state|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00390"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#390"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00390] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00393"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00393] In method org.apache.kafka.raft.KafkaRaftClient.maybeTransitionToLeader@POLYN539210 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00395"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00395] In method org.apache.kafka.raft.KafkaRaftClient.maybeTransitionToLeader@POLYN539210 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00399"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#399"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00399] For method onBecomeCandidate arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00407"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#407"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00407] For method transitionToCandidate arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00413"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#413"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00413] For method transitionToUnattached arguments int  epoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00419"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#419"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00419] For method transitionToResigned arguments List&lt;Integer &gt;  preferredSuccessors"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00421"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#421"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00421] In method org.apache.kafka.raft.KafkaRaftClient.transitionToResigned@POLYN540337 the MagicNumber/String  'Not handling request since this node is resigning' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00427"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#427"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00427] For method transitionToVoted arguments int  candidateId|int  epoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00433"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#433"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00433] For method onBecomeFollower arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00441"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#441"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00441] In method org.apache.kafka.raft.KafkaRaftClient.onBecomeFollower@POLYN540969 the MagicNumber/String  'Cannot process the fetch request because the node is no longer the leader.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00445"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#445"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00445] In method org.apache.kafka.raft.KafkaRaftClient.onBecomeFollower@POLYN540969 the MagicNumber/String  'Failed to receive sufficient acknowledgments for this append before leader change.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00448"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#448"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00448] For method transitionToFollower arguments int  epoch|int  leaderId|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00458"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#458"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00458] For method buildVoteResponse arguments Errors  partitionLevelError|boolean  voteGranted"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00469"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#469"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00469] For method handleVoteRequest arguments RaftRequest.Inbound  requestMetadata"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00470"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#470"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00470] The argument requestMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00484"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#484"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00484] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteRequest@POLYN542447 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00484"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#484"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00484] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteRequest@POLYN542447 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00491"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#491"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00491] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteRequest@POLYN542447 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00491"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#491"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00491] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteRequest@POLYN542447 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00492"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#492"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00492] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteRequest@POLYN542447 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00497"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#497"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00497] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteRequest@POLYN542447 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00505"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#505"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00505] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteRequest@POLYN542447 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00511"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#511"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00511] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteRequest@POLYN542447 the MagicNumber/String  'Vote request {} with epoch {} is {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00511"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#511"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00511] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteRequest@POLYN542447 the MagicNumber/String  'granted' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00511"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#511"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00511] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteRequest@POLYN542447 the MagicNumber/String  'rejected' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00515"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#515"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00515] For method handleVoteResponse arguments RaftResponse.Inbound  responseMetadata|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00516"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#516"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00516] The argument responseMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00527"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#527"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00527] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteResponse@POLYN545153 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00531"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#531"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00531] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteResponse@POLYN545153 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00531"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#531"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00531] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteResponse@POLYN545153 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00543"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#543"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00543] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteResponse@POLYN545153 the MagicNumber/String  'Ignoring vote response {} since we already became leader for epoch {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00557"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#557"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00557] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteResponse@POLYN545153 the MagicNumber/String  'Insufficient remaining votes to become leader (rejected by {}). ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00558"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#558"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00558] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteResponse@POLYN545153 the MagicNumber/String  'We will backoff before retrying election again' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00567"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#567"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00567] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteResponse@POLYN545153 the MagicNumber/String  'Ignoring vote response {} since we are no longer a candidate in epoch {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00570"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#570"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00570] In method org.apache.kafka.raft.KafkaRaftClient.handleVoteResponse@POLYN545153 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00576"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#576"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00576] For method binaryExponentialElectionBackoffMs arguments int  retries"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00577"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#577"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00577] In method org.apache.kafka.raft.KafkaRaftClient.binaryExponentialElectionBackoffMs@POLYN548099 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00578"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#578"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00578] In method org.apache.kafka.raft.KafkaRaftClient.binaryExponentialElectionBackoffMs@POLYN548099 the MagicNumber/String  'Retries ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00578"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#578"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00578] In method org.apache.kafka.raft.KafkaRaftClient.binaryExponentialElectionBackoffMs@POLYN548099 the MagicNumber/String  ' should be larger than zero' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00581"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#581"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00581] In method org.apache.kafka.raft.KafkaRaftClient.binaryExponentialElectionBackoffMs@POLYN548099 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00581"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#581"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00581] In method org.apache.kafka.raft.KafkaRaftClient.binaryExponentialElectionBackoffMs@POLYN548099 the MagicNumber/String  20 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00581"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#581"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00581] In method org.apache.kafka.raft.KafkaRaftClient.binaryExponentialElectionBackoffMs@POLYN548099 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00585"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#585"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00585] For method strictExponentialElectionBackoffMs arguments int  positionInSuccessors|int  totalNumSuccessors"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00586"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#586"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00586] In method org.apache.kafka.raft.KafkaRaftClient.strictExponentialElectionBackoffMs@POLYN548655 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00587"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#587"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00587] In method org.apache.kafka.raft.KafkaRaftClient.strictExponentialElectionBackoffMs@POLYN548655 the MagicNumber/String  'Position ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00587"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#587"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00587] In method org.apache.kafka.raft.KafkaRaftClient.strictExponentialElectionBackoffMs@POLYN548655 the MagicNumber/String  ' should be larger than zero' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00588"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#588"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00588] In method org.apache.kafka.raft.KafkaRaftClient.strictExponentialElectionBackoffMs@POLYN548655 the MagicNumber/String  ' and smaller than total number of successors ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00591"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#591"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00591] In method org.apache.kafka.raft.KafkaRaftClient.strictExponentialElectionBackoffMs@POLYN548655 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00592"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#592"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00592] In method org.apache.kafka.raft.KafkaRaftClient.strictExponentialElectionBackoffMs@POLYN548655 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00595"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#595"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00595] For method buildBeginQuorumEpochResponse arguments Errors  partitionLevelError"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00605"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#605"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00605] For method handleBeginQuorumEpochRequest arguments RaftRequest.Inbound  requestMetadata|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00606"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#606"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00606] The argument requestMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00621"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#621"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00621] In method org.apache.kafka.raft.KafkaRaftClient.handleBeginQuorumEpochRequest@POLYN550024 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00621"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#621"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00621] In method org.apache.kafka.raft.KafkaRaftClient.handleBeginQuorumEpochRequest@POLYN550024 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00635"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#635"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00635] For method handleBeginQuorumEpochResponse arguments RaftResponse.Inbound  responseMetadata|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00636"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#636"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00636] The argument responseMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00647"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#647"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00647] In method org.apache.kafka.raft.KafkaRaftClient.handleBeginQuorumEpochResponse@POLYN551536 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00651"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#651"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00651] In method org.apache.kafka.raft.KafkaRaftClient.handleBeginQuorumEpochResponse@POLYN551536 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00651"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#651"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00651] In method org.apache.kafka.raft.KafkaRaftClient.handleBeginQuorumEpochResponse@POLYN551536 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00666"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#666"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00666] In method org.apache.kafka.raft.KafkaRaftClient.handleBeginQuorumEpochResponse@POLYN551536 the MagicNumber/String  'Ignoring BeginQuorumEpoch response {} since ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00667"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#667"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00667] In method org.apache.kafka.raft.KafkaRaftClient.handleBeginQuorumEpochResponse@POLYN551536 the MagicNumber/String  'this node is not the leader anymore' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00669"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#669"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00669] In method org.apache.kafka.raft.KafkaRaftClient.handleBeginQuorumEpochResponse@POLYN551536 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00675"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#675"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00675] For method buildEndQuorumEpochResponse arguments Errors  partitionLevelError"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00685"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#685"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00685] For method handleEndQuorumEpochRequest arguments RaftRequest.Inbound  requestMetadata|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00686"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#686"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00686] The argument requestMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00701"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#701"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00701] In method org.apache.kafka.raft.KafkaRaftClient.handleEndQuorumEpochRequest@POLYN554285 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00701"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#701"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00701] In method org.apache.kafka.raft.KafkaRaftClient.handleEndQuorumEpochRequest@POLYN554285 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00717"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#717"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00717] In method org.apache.kafka.raft.KafkaRaftClient.handleEndQuorumEpochRequest@POLYN554285 the MagicNumber/String  'Overriding follower fetch timeout to {} after receiving ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00718"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#718"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00718] In method org.apache.kafka.raft.KafkaRaftClient.handleEndQuorumEpochRequest@POLYN554285 the MagicNumber/String  'EndQuorumEpoch request from leader {} in epoch {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00726"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#726"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00726] For method endEpochElectionBackoff arguments List&lt;Integer &gt;  preferredSuccessors"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00726"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#726"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00726] The argument preferredSuccessors is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00732"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#732"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00732] In method org.apache.kafka.raft.KafkaRaftClient.endEpochElectionBackoff@POLYN556476 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00733"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#733"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00733] In method org.apache.kafka.raft.KafkaRaftClient.endEpochElectionBackoff@POLYN556476 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00739"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#739"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00739] For method handleEndQuorumEpochResponse arguments RaftResponse.Inbound  responseMetadata|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00740"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#740"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00740] The argument responseMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00750"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#750"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00750] In method org.apache.kafka.raft.KafkaRaftClient.handleEndQuorumEpochResponse@POLYN556922 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00754"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#754"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00754] In method org.apache.kafka.raft.KafkaRaftClient.handleEndQuorumEpochResponse@POLYN556922 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00754"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#754"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00754] In method org.apache.kafka.raft.KafkaRaftClient.handleEndQuorumEpochResponse@POLYN556922 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00767"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#767"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00767] In method org.apache.kafka.raft.KafkaRaftClient.handleEndQuorumEpochResponse@POLYN556922 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00773"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#773"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00773] For method buildFetchResponse arguments Errors  error|Records  records|ValidOffsetAndEpoch  validOffsetAndEpoch|Optional&lt;LogOffsetMetadata &gt;  highWatermark"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00774"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#774"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00774] The argument error is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00776"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#776"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00776] The argument validOffsetAndEpoch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00777"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#777"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00777] The argument highWatermark is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00786"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#786"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00786] In method org.apache.kafka.raft.KafkaRaftClient.buildFetchResponse@POLYN558726 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00808"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#808"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00808] For method buildEmptyFetchResponse arguments Errors  error|Optional&lt;LogOffsetMetadata &gt;  highWatermark"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00820"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#820"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00820] For method hasValidClusterId arguments String  requestClusterId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00822"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#822"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00822] In method org.apache.kafka.raft.KafkaRaftClient.hasValidClusterId@POLYN560466 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00823"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#823"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00823] In method org.apache.kafka.raft.KafkaRaftClient.hasValidClusterId@POLYN560466 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00829"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#829"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00829] For method handleFetchRequest arguments RaftRequest.Inbound  requestMetadata|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00830"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#830"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00830] The argument requestMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00849"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#849"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00849] The same method call fetchPartition.lastFetchedEpoch()fetchPartition.currentLeaderEpoch() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00844"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#844"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00844] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN561275 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00846"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#846"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00846] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN561275 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00846"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#846"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00846] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN561275 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00847"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#847"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00847] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN561275 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00848"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#848"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00848] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN561275 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00849"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#849"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00849] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN561275 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00857"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#857"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00857] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN561275 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00857"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#857"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00857] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN561275 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00860"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#860"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00860] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN561275 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00861"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#861"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00861] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN561275 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00870"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#870"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00870] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN561275 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00879"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#879"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00879] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN561275 the MagicNumber/String  'Failed to handle fetch from {} at {} due to {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00886"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#886"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00886] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchRequest@POLYN561275 the MagicNumber/String  'Completing delayed fetch from {} starting at offset {} at {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00893"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#893"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00893] For method tryCompleteFetchRequest arguments int  replicaId|FetchRequestData.FetchPartition  request|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00895"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#895"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00895] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00924"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#924"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00924] In method org.apache.kafka.raft.KafkaRaftClient.tryCompleteFetchRequest@POLYN564820 the MagicNumber/String  'Caught unexpected error in fetch completion of request {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00929"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#929"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00929] For method optionalLeaderId arguments int  leaderIdOrNil"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00930"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#930"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00930] In method org.apache.kafka.raft.KafkaRaftClient.optionalLeaderId@POLYN566741 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00935"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#935"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00935] For method listenerName arguments Listener&lt;? &gt;  listener"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00935"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#935"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00935] The argument listener is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00936"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#936"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00936] In method org.apache.kafka.raft.KafkaRaftClient.listenerName@POLYN567004 the MagicNumber/String  '%s@%d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00939"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#939"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00939] For method handleFetchResponse arguments RaftResponse.Inbound  responseMetadata|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00940"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#940"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00940] The argument responseMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00987"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#987"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00987] The same method call partitionResponse.snapshotId() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00950"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#950"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00950] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN567291 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00953"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#953"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00953] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN567291 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00956"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#956"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00956] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN567291 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00956"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#956"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00956] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN567291 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00972"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#972"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00972] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN567291 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00979"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#979"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00979] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN567291 the MagicNumber/String  'The leader requested truncation to offset ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00980"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#980"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00980] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN567291 the MagicNumber/String  ', which is below the current high watermark' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00981"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#981"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00981] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN567291 the MagicNumber/String  ' ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00986"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#986"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00986] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN567291 the MagicNumber/String  'Truncated to offset {} from Fetch response from leader {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00987"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#987"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00987] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN567291 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00988"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#988"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00988] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN567291 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00991"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#991"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00991] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN567291 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00993"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#993"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00993] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN567291 the MagicNumber/String  'The leader sent a snapshot id with a valid end offset {} but with an invalid epoch {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00997"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#997"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00997] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN567291 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00998"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#998"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00998] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN567291 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01000"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1000"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01000] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN567291 the MagicNumber/String  'The leader sent a snapshot id with a valid epoch {} but with an invalid end offset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01004"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1004"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01004] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN567291 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01018"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1018"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01018] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN567291 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01022"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1022"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01022] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN567291 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01028"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1028"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01028] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchResponse@POLYN567291 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01034"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1034"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01034] For method appendAsFollower arguments Records  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01038"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1038"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01038] In method org.apache.kafka.raft.KafkaRaftClient.appendAsFollower@POLYN572116 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01041"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1041"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01041] In method org.apache.kafka.raft.KafkaRaftClient.appendAsFollower@POLYN572116 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01043"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1043"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01043] In method org.apache.kafka.raft.KafkaRaftClient.appendAsFollower@POLYN572116 the MagicNumber/String  'Follower end offset updated to {} after append' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01046"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1046"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01046] For method appendAsLeader arguments Records  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01051"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1051"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01051] In method org.apache.kafka.raft.KafkaRaftClient.appendAsLeader@POLYN572720 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01053"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1053"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01053] In method org.apache.kafka.raft.KafkaRaftClient.appendAsLeader@POLYN572720 the MagicNumber/String  'Leader appended records at base offset {}, new end offset is {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01057"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1057"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01057] For method handleDescribeQuorumRequest arguments RaftRequest.Inbound  requestMetadata|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01058"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1058"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01058] The argument requestMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01075"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1075"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01075] In method org.apache.kafka.raft.KafkaRaftClient.handleDescribeQuorumRequest@POLYN573360 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01082"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1082"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01082] For method handleFetchSnapshotRequest arguments RaftRequest.Inbound  requestMetadata"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01083"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1083"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01083] The argument requestMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01091"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1091"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[01091] The same method call data.topics() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01138"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[01138] The same method call partitionSnapshot.position() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01091"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1091"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01091] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotRequest@POLYN575098 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01091"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1091"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01091] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotRequest@POLYN575098 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01091"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1091"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01091] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotRequest@POLYN575098 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01100"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01100] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotRequest@POLYN575098 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01101"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01101] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotRequest@POLYN575098 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01101"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01101] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotRequest@POLYN575098 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01138"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01138] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotRequest@POLYN575098 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01149"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1149"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01149] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotRequest@POLYN575098 the MagicNumber/String  'Trying to fetch a snapshot with size (%d) and a position (%d) larger than %d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01182"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1182"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01182] For method handleFetchSnapshotResponse arguments RaftResponse.Inbound  responseMetadata|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01183"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1183"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01183] The argument responseMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01192"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[01192] The same method call data.topics() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01218"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[01218] The same method call partitionSnapshot.snapshotId() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01192"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01192] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN579572 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01192"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01192] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN579572 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01192"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1192"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01192] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN579572 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01193"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01193] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN579572 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01199"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01199] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN579572 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01218"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01218] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN579572 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01219"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1219"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01219] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN579572 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01223"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01223] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN579572 the MagicNumber/String  'Leader doesn't know about snapshot id {}, returned error {} and snapshot id {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01230"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1230"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01230] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN579572 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01243"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1243"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01243] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN579572 the MagicNumber/String  'Received unexpected fetch snapshot response: %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01250"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1250"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01250] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN579572 the MagicNumber/String  'Received fetch snapshot response with an invalid id. Expected %s; Received %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01259"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1259"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01259] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN579572 the MagicNumber/String  'Received fetch snapshot response with an invalid position. Expected %d; Received %d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01272"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1272"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01272] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN579572 the MagicNumber/String  'Received unexpected fetch snapshot response: %s' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01286"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01286] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN579572 the MagicNumber/String  'Full log truncation expected but didn't happen. Snapshot of %s, log end offset %s, last fetched %d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01296"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1296"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01296] In method org.apache.kafka.raft.KafkaRaftClient.handleFetchSnapshotResponse@POLYN579572 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01299"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1299"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01299] For method convertToReplicaStates arguments Map&lt;Integer ,Long &gt;  replicaEndOffsets"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01299"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1299"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01299] The argument replicaEndOffsets is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01307"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1307"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01307] For method hasConsistentLeader arguments int  epoch|OptionalInt  leaderId"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01307"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1307"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01307] The argument leaderId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01316"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[01316] The same method call leaderId.equals(quorum.leaderId()) is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01322"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1322"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01322] For method maybeHandleCommonResponse arguments Errors  error|OptionalInt  leaderId|int  epoch|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01324"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1324"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01324] The argument leaderId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01330"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1330"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01330] In method org.apache.kafka.raft.KafkaRaftClient.maybeHandleCommonResponse@POLYN586564 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01338"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1338"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01338] In method org.apache.kafka.raft.KafkaRaftClient.maybeHandleCommonResponse@POLYN586564 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01352"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1352"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01352] In method org.apache.kafka.raft.KafkaRaftClient.maybeHandleCommonResponse@POLYN586564 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01355"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1355"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01355] In method org.apache.kafka.raft.KafkaRaftClient.maybeHandleCommonResponse@POLYN586564 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01361"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1361"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01361] In method org.apache.kafka.raft.KafkaRaftClient.maybeHandleCommonResponse@POLYN586564 the MagicNumber/String  'Received error indicating inconsistent voter sets' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01363"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1363"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01363] In method org.apache.kafka.raft.KafkaRaftClient.maybeHandleCommonResponse@POLYN586564 the MagicNumber/String  'Received unexpected invalid request error' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01369"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1369"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01369] For method maybeTransition arguments OptionalInt  leaderId|int  epoch|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01370"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1370"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01370] The argument leaderId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01375"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1375"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01375] In method org.apache.kafka.raft.KafkaRaftClient.maybeTransition@POLYN588351 the MagicNumber/String  'Received request or response with leader ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01376"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01376] In method org.apache.kafka.raft.KafkaRaftClient.maybeTransition@POLYN588351 the MagicNumber/String  ' and epoch ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01376"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1376"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01376] In method org.apache.kafka.raft.KafkaRaftClient.maybeTransition@POLYN588351 the MagicNumber/String  ' which is inconsistent with current leader ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01377"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1377"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01377] In method org.apache.kafka.raft.KafkaRaftClient.maybeTransition@POLYN588351 the MagicNumber/String  ' and epoch ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01391"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1391"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01391] For method handleTopLevelError arguments Errors  error|RaftResponse.Inbound  response"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01393"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1393"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01393] In method org.apache.kafka.raft.KafkaRaftClient.handleTopLevelError@POLYN589478 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01395"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1395"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01395] In method org.apache.kafka.raft.KafkaRaftClient.handleTopLevelError@POLYN589478 the MagicNumber/String  'Received cluster authorization error in response ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01401"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1401"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01401] For method handleUnexpectedError arguments Errors  error|RaftResponse.Inbound  response"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01401"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1401"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01401] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01402"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01402] In method org.apache.kafka.raft.KafkaRaftClient.handleUnexpectedError@POLYN589982 the MagicNumber/String  'Unexpected error {} in {} response: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01404"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1404"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01404] In method org.apache.kafka.raft.KafkaRaftClient.handleUnexpectedError@POLYN589982 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01407"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1407"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01407] For method handleResponse arguments RaftResponse.Inbound  response|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01407"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1407"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01407] The argument response is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01434"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1434"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01434] In method org.apache.kafka.raft.KafkaRaftClient.handleResponse@POLYN590323 the MagicNumber/String  'Received unexpected response type: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01446"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1446"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01446] For method validateVoterOnlyRequest arguments int  remoteNodeId|int  requestEpoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01449"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1449"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01449] In method org.apache.kafka.raft.KafkaRaftClient.validateVoterOnlyRequest@POLYN592014 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01459"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1459"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01459] For method validateLeaderOnlyRequest arguments int  requestEpoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01469"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1469"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01469] In method org.apache.kafka.raft.KafkaRaftClient.validateLeaderOnlyRequest@POLYN592875 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01476"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1476"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01476] For method handleRequest arguments RaftRequest.Inbound  request|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01476"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1476"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01476] The argument request is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01506"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1506"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01506] In method org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN593690 the MagicNumber/String  'Unexpected request type ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01511"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1511"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01511] In method org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN593690 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01519"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1519"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01519] In method org.apache.kafka.raft.KafkaRaftClient.handleRequest@POLYN593690 the MagicNumber/String  'Sent response {} to inbound request {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01523"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1523"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01523] For method handleInboundMessage arguments RaftMessage  message|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01524"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1524"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01524] In method org.apache.kafka.raft.KafkaRaftClient.handleInboundMessage@POLYN595959 the MagicNumber/String  'Received inbound message {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01535"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1535"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01535] In method org.apache.kafka.raft.KafkaRaftClient.handleInboundMessage@POLYN595959 the MagicNumber/String  'Ignoring response {} since it is no longer needed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01538"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1538"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01538] In method org.apache.kafka.raft.KafkaRaftClient.handleInboundMessage@POLYN595959 the MagicNumber/String  'Unexpected message ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01543"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1543"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01543] For method maybeSendRequest arguments long  currentTimeMs|int  destinationId|Supplier&lt;ApiMessage &gt;  requestSupplier"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01546"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1546"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01546] The argument requestSupplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01552"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1552"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01552] In method org.apache.kafka.raft.KafkaRaftClient.maybeSendRequest@POLYN597164 the MagicNumber/String  'Connection for {} is backing off for {} ms' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01568"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1568"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01568] In method org.apache.kafka.raft.KafkaRaftClient.maybeSendRequest@POLYN597164 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01584"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1584"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01584] In method org.apache.kafka.raft.KafkaRaftClient.maybeSendRequest@POLYN597164 the MagicNumber/String  'Sent outbound request: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01592"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1592"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01592] For method buildEndQuorumEpochRequest arguments ResignedState  state"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01593"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1593"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01593] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01604"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1604"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01604] For method maybeSendRequests arguments long  currentTimeMs|Set&lt;Integer &gt;  destinationIds|Supplier&lt;ApiMessage &gt;  requestSupplier"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01654"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1654"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01654] For method maybeSendAnyVoterFetch arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01667"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1667"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01667] For method buildFetchSnapshotRequest arguments OffsetAndEpoch  snapshotId|long  snapshotSize"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01667"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1667"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01667] The argument snapshotId is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01686"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1686"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01686] For method addQuorumLeader arguments FetchSnapshotResponseData.PartitionSnapshot  partitionSnapshot"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01687"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1687"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01687] The argument partitionSnapshot is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01698"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1698"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01698] In method org.apache.kafka.raft.KafkaRaftClient.isRunning@POLYN602957 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01703"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1703"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01703] In method org.apache.kafka.raft.KafkaRaftClient.isShuttingDown@POLYN603193 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01706"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1706"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01706] For method appendBatch arguments LeaderState&lt;T &gt;  state|BatchAccumulator.CompletedBatch&lt;T &gt;  batch|long  appendTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01707"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1707"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01707] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01708"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1708"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01708] The argument batch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01716"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1716"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01716] In method org.apache.kafka.raft.KafkaRaftClient.appendBatch@POLYN603421 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01719"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1719"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01719] In method org.apache.kafka.raft.KafkaRaftClient.appendBatch@POLYN603421 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01720"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1720"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01720] In method org.apache.kafka.raft.KafkaRaftClient.appendBatch@POLYN603421 the MagicNumber/String  'Failed to commit {} records at {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01722"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1722"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01722] In method org.apache.kafka.raft.KafkaRaftClient.appendBatch@POLYN603421 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01725"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1725"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01725] In method org.apache.kafka.raft.KafkaRaftClient.appendBatch@POLYN603421 the MagicNumber/String  'Completed commit of {} records at {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01736"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1736"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01736] For method maybeAppendBatches arguments LeaderState&lt;T &gt;  state|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01737"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1737"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01737] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01747"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1747"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01747] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01741"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1741"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01741] In method org.apache.kafka.raft.KafkaRaftClient.maybeAppendBatches@POLYN605252 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01761"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1761"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01761] For method pollResigned arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01771"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1771"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01771] In method org.apache.kafka.raft.KafkaRaftClient.pollResigned@POLYN606414 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01777"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1777"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01777] In method org.apache.kafka.raft.KafkaRaftClient.pollResigned@POLYN606414 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01785"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1785"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01785] For method pollLeader arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01789"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1789"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01789] In method org.apache.kafka.raft.KafkaRaftClient.pollLeader@POLYN607456 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01791"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1791"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01791] In method org.apache.kafka.raft.KafkaRaftClient.pollLeader@POLYN607456 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01808"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1808"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01808] For method maybeSendVoteRequests arguments CandidateState  state|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01809"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1809"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01809] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01823"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1823"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01823] For method pollCandidate arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01827"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1827"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01827] In method org.apache.kafka.raft.KafkaRaftClient.pollCandidate@POLYN608664 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01837"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1837"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01837] In method org.apache.kafka.raft.KafkaRaftClient.pollCandidate@POLYN608664 the MagicNumber/String  'Re-elect as candidate after election backoff has completed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01839"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1839"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01839] In method org.apache.kafka.raft.KafkaRaftClient.pollCandidate@POLYN608664 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01844"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1844"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01844] In method org.apache.kafka.raft.KafkaRaftClient.pollCandidate@POLYN608664 the MagicNumber/String  'Election has timed out, backing off for {}ms before becoming a candidate again' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01854"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1854"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01854] For method pollFollower arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01863"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1863"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01863] For method pollFollowerAsVoter arguments FollowerState  state|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01863"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1863"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01863] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01865"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1865"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01865] In method org.apache.kafka.raft.KafkaRaftClient.pollFollowerAsVoter@POLYN610688 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01868"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1868"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01868] In method org.apache.kafka.raft.KafkaRaftClient.pollFollowerAsVoter@POLYN610688 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01870"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1870"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01870] In method org.apache.kafka.raft.KafkaRaftClient.pollFollowerAsVoter@POLYN610688 the MagicNumber/String  'Become candidate due to fetch timeout' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01872"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1872"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01872] In method org.apache.kafka.raft.KafkaRaftClient.pollFollowerAsVoter@POLYN610688 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01880"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1880"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01880] For method pollFollowerAsObserver arguments FollowerState  state|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01880"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1880"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01880] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01903"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1903"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01903] For method maybeSendFetchOrFetchSnapshot arguments FollowerState  state|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01903"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1903"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01903] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01918"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1918"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01918] For method pollVoted arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01922"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1922"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01922] In method org.apache.kafka.raft.KafkaRaftClient.pollVoted@POLYN613367 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01928"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1928"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01928] In method org.apache.kafka.raft.KafkaRaftClient.pollVoted@POLYN613367 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01934"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1934"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01934] For method pollUnattached arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01943"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1943"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01943] For method pollUnattachedAsVoter arguments UnattachedState  state|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01943"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1943"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01943] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01945"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1945"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01945] In method org.apache.kafka.raft.KafkaRaftClient.pollUnattachedAsVoter@POLYN614421 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01951"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1951"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01951] In method org.apache.kafka.raft.KafkaRaftClient.pollUnattachedAsVoter@POLYN614421 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01957"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1957"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01957] For method pollUnattachedAsObserver arguments UnattachedState  state|long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01957"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1957"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01957] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01962"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1962"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01962] For method pollCurrentState arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01976"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1976"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01976] In method org.apache.kafka.raft.KafkaRaftClient.pollCurrentState@POLYN615331 the MagicNumber/String  'Unexpected quorum state ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01983"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1983"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[01983] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01982"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1982"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01982] In method org.apache.kafka.raft.KafkaRaftClient.pollListeners@POLYN616313 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01984"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1984"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[01984] In method org.apache.kafka.raft.KafkaRaftClient.pollListeners@POLYN616313 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01997"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1997"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[01997] For method processRegistration arguments Registration&lt;T &gt;  registration"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "01997"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#1997"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[01997] The argument registration is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02002"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2002"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02002] In method org.apache.kafka.raft.KafkaRaftClient.processRegistration@POLYN616836 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02003"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2003"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02003] In method org.apache.kafka.raft.KafkaRaftClient.processRegistration@POLYN616836 the MagicNumber/String  'Attempting to add a listener that already exists: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02005"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2005"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02005] In method org.apache.kafka.raft.KafkaRaftClient.processRegistration@POLYN616836 the MagicNumber/String  'Registered the listener {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02008"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2008"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02008] In method org.apache.kafka.raft.KafkaRaftClient.processRegistration@POLYN616836 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02009"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2009"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02009] In method org.apache.kafka.raft.KafkaRaftClient.processRegistration@POLYN616836 the MagicNumber/String  'Attempting to remove a listener that doesn't exists: {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02011"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2011"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02011] In method org.apache.kafka.raft.KafkaRaftClient.processRegistration@POLYN616836 the MagicNumber/String  'Unregistered the listener {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02016"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2016"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02016] For method maybeCompleteShutdown arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02018"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2018"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02018] In method org.apache.kafka.raft.KafkaRaftClient.maybeCompleteShutdown@POLYN618048 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02019"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2019"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02019] In method org.apache.kafka.raft.KafkaRaftClient.maybeCompleteShutdown@POLYN618048 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02025"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2025"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02025] In method org.apache.kafka.raft.KafkaRaftClient.maybeCompleteShutdown@POLYN618048 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02033"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2033"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02033] In method org.apache.kafka.raft.KafkaRaftClient.maybeCompleteShutdown@POLYN618048 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02036"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2036"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02036] In method org.apache.kafka.raft.KafkaRaftClient.maybeCompleteShutdown@POLYN618048 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02040"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2040"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[02040] The class RaftMetadataLogCleanerManager contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02046"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2046"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02046] The argument time is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02053"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2053"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02053] For method maybeClean arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02057"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2057"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE572[02057] The program calls a thread's run() method instead of calling start()"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02059"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2059"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02059] In method org.apache.kafka.raft.KafkaRaftClient.RaftMetadataLogCleanerManager.maybeClean@POLYN619527 the MagicNumber/String  'Had an error during log cleaning' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02072"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2072"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02072] For method handle arguments RaftRequest.Inbound  request"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02096"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2096"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02096] In method org.apache.kafka.raft.KafkaRaftClient.poll@POLYN620555 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02102"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2102"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02102] For method scheduleAppend arguments int  epoch|List&lt;T &gt;  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02103"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2103"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02103] In method org.apache.kafka.raft.KafkaRaftClient.scheduleAppend@POLYN621601 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02107"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2107"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02107] For method scheduleAtomicAppend arguments int  epoch|List&lt;T &gt;  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02108"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2108"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02108] In method org.apache.kafka.raft.KafkaRaftClient.scheduleAtomicAppend@POLYN621846 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02111"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2111"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02111] For method append arguments int  epoch|List&lt;T &gt;  records|boolean  isAtomic"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02113"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2113"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02113] In method org.apache.kafka.raft.KafkaRaftClient.append@POLYN622077 the MagicNumber/String  'Append failed because the replication is not the current leader' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02137"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2137"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02137] For method shutdown arguments int  timeoutMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02138"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2138"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02138] In method org.apache.kafka.raft.KafkaRaftClient.shutdown@POLYN623203 the MagicNumber/String  'Beginning graceful shutdown' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02146"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2146"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02146] For method resign arguments int  epoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02147"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2147"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02147] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN623670 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02148"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2148"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02148] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN623670 the MagicNumber/String  'Attempt to resign from an invalid negative epoch ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02152"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02152] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN623670 the MagicNumber/String  'Attempt to resign by a non-voter' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02159"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2159"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02159] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN623670 the MagicNumber/String  'Attempt to resign from epoch ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02160"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02160] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN623670 the MagicNumber/String  ' which is larger than the current epoch ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02166"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02166] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN623670 the MagicNumber/String  'Ignoring call to resign from epoch {} since it is smaller than the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02167"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02167] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN623670 the MagicNumber/String  'current epoch {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02170"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02170] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN623670 the MagicNumber/String  'Cannot resign from epoch ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02171"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2171"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02171] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN623670 the MagicNumber/String  ' since we are not the leader' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02177"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02177] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN623670 the MagicNumber/String  'Ignoring call to resign from epoch {} since this node is ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02178"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02178] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN623670 the MagicNumber/String  'no longer the leader' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02184"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02184] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN623670 the MagicNumber/String  'Ignoring call to resign from epoch {} since it is smaller than the ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02185"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02185] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN623670 the MagicNumber/String  'current epoch {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02187"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2187"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02187] In method org.apache.kafka.raft.KafkaRaftClient.resign@POLYN623670 the MagicNumber/String  'Received user request to resign from the current epoch {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02195"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2195"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02195] For method createSnapshot arguments long  committedOffset|int  committedEpoch|long  lastContainedLogTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02201"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02201] In method org.apache.kafka.raft.KafkaRaftClient.createSnapshot@POLYN625852 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02213"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2213"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02213] In method org.apache.kafka.raft.KafkaRaftClient.close@POLYN626347 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02214"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2214"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02214] In method org.apache.kafka.raft.KafkaRaftClient.close@POLYN626347 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02231"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2231"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[02231] The class GracefulShutdown contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02241"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2241"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02241] For method update arguments long  currentTimeMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02258"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2258"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02258] In method org.apache.kafka.raft.KafkaRaftClient.GracefulShutdown.failWithTimeout@POLYN627869 the MagicNumber/String  'Graceful shutdown timed out after {}ms' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02260"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2260"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02260] In method org.apache.kafka.raft.KafkaRaftClient.GracefulShutdown.failWithTimeout@POLYN627869 the MagicNumber/String  'Timeout expired before graceful shutdown completed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02264"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2264"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02264] In method org.apache.kafka.raft.KafkaRaftClient.GracefulShutdown.complete@POLYN628136 the MagicNumber/String  'Graceful shutdown completed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02265"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2265"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02265] In method org.apache.kafka.raft.KafkaRaftClient.GracefulShutdown.complete@POLYN628136 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02269"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2269"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[02269] The class Registration contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02299"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2299"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[02299] The class ListenerContext contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02314"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2314"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[02314] Lock statement on synchronized method nextOffset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02319"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2319"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[02319] Lock statement on synchronized method nextExpectedOffset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02320"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2320"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02320] In method org.apache.kafka.raft.KafkaRaftClient.ListenerContext.nextExpectedOffset@POLYN630507 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02323"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2323"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02323] In method org.apache.kafka.raft.KafkaRaftClient.ListenerContext.nextExpectedOffset@POLYN630507 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02333"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2333"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02333] For method fireHandleSnapshot arguments SnapshotReader&lt;T &gt;  reader"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02333"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2333"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02333] The argument reader is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02334"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2334"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[02334] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02336"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02336] In method org.apache.kafka.raft.KafkaRaftClient.ListenerContext.fireHandleSnapshot@POLYN631176 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02339"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2339"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02339] In method org.apache.kafka.raft.KafkaRaftClient.ListenerContext.fireHandleSnapshot@POLYN631176 the MagicNumber/String  'Notifying listener {} of snapshot {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02344"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2344"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02344] For method fireHandleCommit arguments long  baseOffset|Records  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02358"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2358"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02358] For method fireHandleCommit arguments long  baseOffset|int  epoch|long  appendTimestamp|int  sizeInBytes|List&lt;T &gt;  records"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02374"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2374"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02374] For method fireHandleCommit arguments BatchReader&lt;T &gt;  reader"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02374"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2374"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02374] The argument reader is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02375"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2375"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[02375] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02379"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2379"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02379] In method org.apache.kafka.raft.KafkaRaftClient.ListenerContext.fireHandleCommit@POLYN633213 the MagicNumber/String  'Notifying listener {} of batch for baseOffset {} and lastOffset {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02387"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2387"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02387] For method maybeFireLeaderChange arguments LeaderAndEpoch  leaderAndEpoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02390"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2390"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02390] In method org.apache.kafka.raft.KafkaRaftClient.ListenerContext.maybeFireLeaderChange@POLYN633669 the MagicNumber/String  'Notifying listener {} of leader change {}' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02395"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2395"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02395] For method shouldFireLeaderChange arguments LeaderAndEpoch  leaderAndEpoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02395"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2395"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02395] The argument leaderAndEpoch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02397"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2397"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02397] In method org.apache.kafka.raft.KafkaRaftClient.ListenerContext.shouldFireLeaderChange@POLYN634077 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02399"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2399"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02399] In method org.apache.kafka.raft.KafkaRaftClient.ListenerContext.shouldFireLeaderChange@POLYN634077 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02406"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2406"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02406] For method maybeFireLeaderChange arguments LeaderAndEpoch  leaderAndEpoch|long  epochStartOffset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02417"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2417"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[02417] Lock statement on synchronized method onClose"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02417"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2417"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[02417] For method onClose arguments BatchReader&lt;T &gt;  reader"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02417"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2417"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[02417] The argument reader is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02421"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2421"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02421] In method org.apache.kafka.raft.KafkaRaftClient.ListenerContext.onClose@POLYN634936 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "02425"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.html#2425"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[02425] In method org.apache.kafka.raft.KafkaRaftClient.ListenerContext.onClose@POLYN634936 the MagicNumber/String  null should be converted to const"
}} 
]
,
"data15" : {
   "fichierplantumlsvg" : "./qc/raft/src/main/java/org/apache/kafka/raft/KafkaRaftClient.java.fct.svg" 

}
};
console.log('leListeStr 99 main end');
