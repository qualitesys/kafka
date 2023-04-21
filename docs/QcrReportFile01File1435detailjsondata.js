console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsBatchReader.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/internals/RecordsBatchReader.java 7 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsBatchReader.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "BatchReader<T>"
 , "c2" : "org.apache.kafka.raft.internals.RecordsBatchReader"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.internals.RecordsBatchReader" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsBatchReader.java.html#39"
 , "c1" : "RecordsBatchReader"
 , "c2" : "RecordsBatchReader(long;RecordsIterator&lt;T&gt;;CloseListener&lt;BatchReader&lt;T&gt;&gt;)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsBatchReader.java.html#51"
 , "c1" : "boolean"
 , "c2" : "hasNext()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsBatchReader.java.html#62"
 , "c1" : "Batch&lt;T&gt;"
 , "c2" : "next()"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsBatchReader.java.html#75"
 , "c1" : "long"
 , "c2" : "baseOffset()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00079"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsBatchReader.java.html#79"
 , "c1" : "OptionalLong"
 , "c2" : "lastOffset()"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00088"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsBatchReader.java.html#88"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00112"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsBatchReader.java.html#112"
 , "c1" : "void"
 , "c2" : "ensureOpen()"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00118"
 , "c5link" : "././qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsBatchReader.java.html#118"
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
   {"ligne" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsBatchReader.java.png" 

 , "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsBatchReader.java.svg" }

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
 , "c1" : "00051"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsBatchReader.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00051] For method hasNext list of called methods Object monObjet|java.util.Optional nextBatchN155784"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsBatchReader.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00062] For method next list of called methods Object monObjet|V nextBatch_getN156162|long batch_lastOffsetN156310"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsBatchReader.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.raft.internals.RecordsBatchReader.next@POLYN155920 the MagicNumber/String  'Records batch reader doesn't have any more elements' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsBatchReader.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.raft.internals.RecordsBatchReader.close@POLYN156751 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsBatchReader.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.raft.internals.RecordsBatchReader.ensureOpen@POLYN157573 the MagicNumber/String  'Records batch reader was closed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00118"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsBatchReader.java.html#118"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00118] For method nextBatch list of called methods Object monObjet|org.apache.kafka.raft.Batch iterator_nextN157954|long batch_lastOffsetN158117"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsBatchReader.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00120] Avoid declaring class instance within loop, performance impact"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/raft/src/main/java/org/apache/kafka/raft/internals/RecordsBatchReader.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
