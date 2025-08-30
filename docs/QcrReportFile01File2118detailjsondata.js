console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDbIterator.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDbIterator.java 5 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "AbstractIterator<KeyValue<Bytes,byte[]>>"
 , "c2" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "org.apache.kafka.streams.state.internals.RocksDbIterator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.RocksDbIterator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDbIterator.java.html#41"
 , "c1" : "RocksDbIterator"
 , "c2" : "RocksDbIterator(String;RocksIterator;Set&lt;KeyValueIterator&lt;Bytes,byte[]&gt;&gt;;boolean)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDbIterator.java.html#52"
 , "c1" : "boolean"
 , "c2" : "hasNext()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDbIterator.java.html#60"
 , "c1" : "KeyValue&lt;Bytes,byte[]&gt;"
 , "c2" : "makeNext()"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDbIterator.java.html#70"
 , "c1" : "KeyValue&lt;Bytes,byte[]&gt;"
 , "c2" : "getKeyValue()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00075"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDbIterator.java.html#75"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00082"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDbIterator.java.html#82"
 , "c1" : "Bytes"
 , "c2" : "peekNextKey()"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDbIterator.java.svg" }

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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
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
 , "c1" : "00052"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDbIterator.java.html#52"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00052] Lock statement on synchronized method hasNext"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDbIterator.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.streams.state.internals.RocksDbIterator.hasNext@POLYN163345 the MagicNumber/String  'RocksDB iterator for store %s has closed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDbIterator.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00060] For method makeNext list of called methods Object monObjet|KeyValue&lt;Bytes,byte[]&gt; getKeyValueN163917"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDbIterator.java.html#75"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00075] Lock statement on synchronized method close"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDbIterator.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.streams.state.internals.RocksDbIterator.close@POLYN164357 the MagicNumber/String  false should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/RocksDbIterator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
