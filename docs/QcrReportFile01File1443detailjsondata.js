console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotReader.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotReader.java 8 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "SnapshotReader<T>"
 , "c2" : "org.apache.kafka.snapshot.RecordsSnapshotReader"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.snapshot.RecordsSnapshotReader" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotReader.java.html#37"
 , "c1" : "RecordsSnapshotReader"
 , "c2" : "RecordsSnapshotReader(OffsetAndEpoch;RecordsIterator&lt;T&gt;)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00046"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotReader.java.html#46"
 , "c1" : "OffsetAndEpoch"
 , "c2" : "snapshotId()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotReader.java.html#51"
 , "c1" : "long"
 , "c2" : "lastContainedLogOffset()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotReader.java.html#56"
 , "c1" : "int"
 , "c2" : "lastContainedLogEpoch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00061"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotReader.java.html#61"
 , "c1" : "long"
 , "c2" : "lastContainedLogTimestamp()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00078"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotReader.java.html#78"
 , "c1" : "boolean"
 , "c2" : "hasNext()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00087"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotReader.java.html#87"
 , "c1" : "Batch&lt;T&gt;"
 , "c2" : "next()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00099"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotReader.java.html#99"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00118"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotReader.java.html#118"
 , "c1" : "Optional&lt;Batch&lt;T&gt;&gt;"
 , "c2" : "nextBatch()"
 , "c3" : "4"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotReader.java.svg" }

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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotReader.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.snapshot.RecordsSnapshotReader.lastContainedLogOffset@POLYN158382 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotReader.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00061] For method lastContainedLogTimestamp list of called methods Object monObjet|java.util.Optional nextBatchN158996"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotReader.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.snapshot.RecordsSnapshotReader.lastContainedLogTimestamp@POLYN158622 the MagicNumber/String  'nextBatch was present when last contained log timestamp was not present' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotReader.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00078] For method hasNext list of called methods Object monObjet|java.util.Optional nextBatchN159263"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotReader.java.html#87"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00087] For method next list of called methods Object monObjet|V nextBatch_getN159641"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotReader.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.snapshot.RecordsSnapshotReader.next@POLYN159399 the MagicNumber/String  'Snapshot reader doesn't have any more elements' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotReader.java.html#104"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00104] The argument snapshot is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotReader.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00120] Avoid declaring class instance within loop, performance impact"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/raft/src/main/java/org/apache/kafka/snapshot/RecordsSnapshotReader.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
