console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/SessionStore.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/SessionStore.java 1 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "StateStore,ReadOnlySessionStore<K,AGG>"
 , "c2" : "org.apache.kafka.streams.state.SessionStore"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.SessionStore" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/SessionStore.java.html#49"
 , "c1" : "KeyValueIterator&lt;Windowed&lt;K&gt;,AGG&gt;"
 , "c2" : "findSessions(long;long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/SessionStore.java.html#56"
 , "c1" : "KeyValueIterator&lt;Windowed&lt;K&gt;,AGG&gt;"
 , "c2" : "findSessions(K;Instant;Instant)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/SessionStore.java.html#68"
 , "c1" : "KeyValueIterator&lt;Windowed&lt;K&gt;,AGG&gt;"
 , "c2" : "backwardFindSessions(K;Instant;Instant)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00079"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/SessionStore.java.html#79"
 , "c1" : "KeyValueIterator&lt;Windowed&lt;K&gt;,AGG&gt;"
 , "c2" : "findSessions(K;K;Instant;Instant)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00092"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/SessionStore.java.html#92"
 , "c1" : "KeyValueIterator&lt;Windowed&lt;K&gt;,AGG&gt;"
 , "c2" : "backwardFindSessions(K;K;Instant;Instant)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00105"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/SessionStore.java.html#105"
 , "c1" : "AGG"
 , "c2" : "fetchSession(K;Instant;Instant)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00121"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/SessionStore.java.html#121"
 , "c1" : "void"
 , "c2" : "remove(Windowed&lt;K&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00131"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/SessionStore.java.html#131"
 , "c1" : "void"
 , "c2" : "put(Windowed&lt;K&gt;;AGG)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/SessionStore.java.svg" }

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
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/SessionStore.java.html#40"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDI[00040] The interface SessionStore does not respect the SOLID Interface Segregation principle. Must contain only one method declaration"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/SessionStore.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
