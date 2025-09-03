console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftClient.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/RaftClient.java 2 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "AutoCloseable"
 , "c2" : "org.apache.kafka.raft.RaftClient"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.RaftClient" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00092"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/RaftClient.java.html#92"
 , "c1" : "void"
 , "c2" : "initialize()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00103"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/RaftClient.java.html#103"
 , "c1" : "void"
 , "c2" : "register(Listener&lt;T&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00115"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/RaftClient.java.html#115"
 , "c1" : "void"
 , "c2" : "unregister(Listener&lt;T&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00120"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/RaftClient.java.html#120"
 , "c1" : "OptionalLong"
 , "c2" : "highWatermark()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00127"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/RaftClient.java.html#127"
 , "c1" : "LeaderAndEpoch"
 , "c2" : "leaderAndEpoch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00135"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/RaftClient.java.html#135"
 , "c1" : "OptionalInt"
 , "c2" : "nodeId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00160"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/RaftClient.java.html#160"
 , "c1" : "long"
 , "c2" : "scheduleAppend(int;List&lt;T&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00183"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/RaftClient.java.html#183"
 , "c1" : "long"
 , "c2" : "scheduleAtomicAppend(int;List&lt;T&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00198"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/RaftClient.java.html#198"
 , "c1" : "CompletableFuture&lt;Void&gt;"
 , "c2" : "shutdown(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00214"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/RaftClient.java.html#214"
 , "c1" : "void"
 , "c2" : "resign(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00231"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/RaftClient.java.html#231"
 , "c1" : "Optional&lt;SnapshotWriter&lt;T&gt;&gt;"
 , "c2" : "createSnapshot(long;int;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftClient.java.svg" }

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
"data09a" : [
]
,
"data09b" : [
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVSOLIDI"
 , "c3" : "The class does not respect the SOLID principle Interface Segregation"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftClient.java.html#32"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDI[00032] The interface Listener does not respect the SOLID Interface Segregation principle. Must contain only one method declaration"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftClient.java.html#30"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDI[00030] The interface RaftClient does not respect the SOLID Interface Segregation principle. Must contain only one method declaration"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/raft/src/main/java/org/apache/kafka/raft/RaftClient.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
