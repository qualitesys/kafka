console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/LeaderState.java 58 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "35"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "14"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00024] The class LeaderState contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#46"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00046] The argument grantingVoters is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#48"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00048] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.raft.LeaderState.LeaderState@POLYN202031 the MagicNumber/String  'accumulator must be non-null' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method convertToVoters arguments Set&lt;Integer &gt;  voterIds"
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#68"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00068] The argument voterIds is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#74"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00074] For method appendLeaderChangeMessage arguments long  currentTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00093"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00093] In method org.apache.kafka.raft.LeaderState.requestResign@POLYN204507 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00132"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#132"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00132] In method org.apache.kafka.raft.LeaderState.updateHighWatermark@POLYN205688 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00155"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method org.apache.kafka.raft.LeaderState.updateHighWatermark@POLYN205688 the MagicNumber/String  'High watermark updated to {} based on indexOfHw {} and voters {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00160"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method org.apache.kafka.raft.LeaderState.updateHighWatermark@POLYN205688 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00162"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#162"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00162] In method org.apache.kafka.raft.LeaderState.updateHighWatermark@POLYN205688 the MagicNumber/String  'The latest computed high watermark {} is smaller than the current ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00163"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method org.apache.kafka.raft.LeaderState.updateHighWatermark@POLYN205688 the MagicNumber/String  'value {}, which suggests that one of the voters has lost committed data. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.raft.LeaderState.updateHighWatermark@POLYN205688 the MagicNumber/String  'Full voter replication state: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00166"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#166"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00166] In method org.apache.kafka.raft.LeaderState.updateHighWatermark@POLYN205688 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.raft.LeaderState.updateHighWatermark@POLYN205688 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00173"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method org.apache.kafka.raft.LeaderState.updateHighWatermark@POLYN205688 the MagicNumber/String  'High watermark set to {} based on indexOfHw {} and voters {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00178"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method org.apache.kafka.raft.LeaderState.updateHighWatermark@POLYN205688 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00182"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method org.apache.kafka.raft.LeaderState.updateHighWatermark@POLYN205688 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00186"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#186"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00186] For method updateLocalState arguments long  fetchTimestamp|LogOffsetMetadata  logOffsetMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00191"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#191"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00191] For method updateReplicaState arguments int  replicaId|long  fetchTimestamp|LogOffsetMetadata  logOffsetMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method org.apache.kafka.raft.LeaderState.updateReplicaState@POLYN208094 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00197"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#197"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00197] In method org.apache.kafka.raft.LeaderState.updateReplicaState@POLYN208094 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#218"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00218] For method updateEndOffset arguments ReplicaState  state|LogOffsetMetadata  endOffsetMetadata"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#218"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00218] The argument state is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00219"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#219"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00219] The argument endOffsetMetadata is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00223"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#223"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00223] In method org.apache.kafka.raft.LeaderState.updateEndOffset@POLYN209203 the MagicNumber/String  'Detected non-monotonic update of local ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.raft.LeaderState.updateEndOffset@POLYN209203 the MagicNumber/String  'end offset: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00224"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method org.apache.kafka.raft.LeaderState.updateEndOffset@POLYN209203 the MagicNumber/String  ' -&amp;gt; ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00226"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#226"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00226] In method org.apache.kafka.raft.LeaderState.updateEndOffset@POLYN209203 the MagicNumber/String  'Detected non-monotonic update of fetch offset from nodeId {}: {} -&amp;gt; {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.raft.LeaderState.updateEndOffset@POLYN209203 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#237"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00237] For method addAcknowledgementFrom arguments int  remoteNodeId"
}} 
,
{ "ligne" : {
   "c1" : "00239"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#239"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00239] In method org.apache.kafka.raft.LeaderState.addAcknowledgementFrom@POLYN210187 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00242"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#242"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00242] For method ensureValidVoter arguments int  remoteNodeId"
}} 
,
{ "ligne" : {
   "c1" : "00244"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#244"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00244] In method org.apache.kafka.raft.LeaderState.ensureValidVoter@POLYN210408 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00245"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#245"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00245] In method org.apache.kafka.raft.LeaderState.ensureValidVoter@POLYN210408 the MagicNumber/String  'Unexpected acknowledgement from non-voter ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00253"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#253"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00253] For method getReplicaState arguments int  remoteNodeId"
}} 
,
{ "ligne" : {
   "c1" : "00255"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#255"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00255] In method org.apache.kafka.raft.LeaderState.getReplicaState@POLYN210849 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00256"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#256"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00256] In method org.apache.kafka.raft.LeaderState.getReplicaState@POLYN210849 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00266"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#266"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00266] For method getObserverStates arguments long  currentTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00272"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#272"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00272] The argument replicaStates is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.raft.LeaderState the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00280"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#280"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00280] For method clearInactiveObservers arguments long  currentTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00283"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#283"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00283] In method org.apache.kafka.raft.LeaderState.clearInactiveObservers@POLYN212269 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00287"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#287"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00287] For method isVoter arguments int  remoteNodeId"
}} 
,
{ "ligne" : {
   "c1" : "00291"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#291"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00291] The class ReplicaState contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00304"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#304"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00304] For method updateFetchTimestamp arguments long  currentFetchTimeMs"
}} 
,
{ "ligne" : {
   "c1" : "00307"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#307"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00307] In method org.apache.kafka.raft.LeaderState.ReplicaState.updateFetchTimestamp@POLYN213329 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00311"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#311"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00311] For method compareTo arguments ReplicaState  that"
}} 
,
{ "ligne" : {
   "c1" : "00311"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#311"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00311] The argument that is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method org.apache.kafka.raft.LeaderState.ReplicaState.compareTo@POLYN213618 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00317"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#317"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00317] In method org.apache.kafka.raft.LeaderState.ReplicaState.compareTo@POLYN213618 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00325"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#325"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00325] In method org.apache.kafka.raft.LeaderState.ReplicaState.toString@POLYN214304 the MagicNumber/String  'ReplicaState(nodeId=%d, endOffset=%s, lastFetchTimestamp=%s, hasAcknowledgedLeader=%s)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00335"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#335"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00335] For method canGrantVote arguments int  candidateId|boolean  isLogUpToDate"
}} 
,
{ "ligne" : {
   "c1" : "00336"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#336"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00336] In method org.apache.kafka.raft.LeaderState.canGrantVote@POLYN214536 the MagicNumber/String  'Rejecting vote request from candidate {} since we are already leader in epoch {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00338"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#338"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00338] In method org.apache.kafka.raft.LeaderState.canGrantVote@POLYN214536 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00344"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#344"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00344] In method org.apache.kafka.raft.LeaderState.toString@POLYN214802 the MagicNumber/String  'Leader(localId=%d, epoch=%d, epochStartOffset=%d, highWatermark=%s, voterStates=%s)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00355"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/LeaderState.java.html#355"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00355] In method org.apache.kafka.raft.LeaderState.name@POLYN215053 the MagicNumber/String  'Leader' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
