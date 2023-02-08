console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredWindowedKeyValueIterator.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredWindowedKeyValueIterator.java 3 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredWindowedKeyValueIterator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "KeyValueIterator<Windowed<K>,V>"
 , "c2" : "org.apache.kafka.streams.state.internals.MeteredWindowedKeyValueIterator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.MeteredWindowedKeyValueIterator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredWindowedKeyValueIterator.java.html#39"
 , "c1" : "MeteredWindowedKeyValueIterator"
 , "c2" : "MeteredWindowedKeyValueIterator(KeyValueIterator&lt;Windowed&lt;Bytes&gt;,byte[]&gt;;Sensor;StreamsMetrics;Function&lt;byte[],K&gt;;Function&lt;byte[],V&gt;;Time)"
 , "c3" : "1"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredWindowedKeyValueIterator.java.html#55"
 , "c1" : "boolean"
 , "c2" : "hasNext()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredWindowedKeyValueIterator.java.html#60"
 , "c1" : "KeyValue&lt;Windowed&lt;K&gt;,V&gt;"
 , "c2" : "next()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00065"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredWindowedKeyValueIterator.java.html#65"
 , "c1" : "Windowed&lt;K&gt;"
 , "c2" : "windowedKey(Windowed&lt;Bytes&gt;)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredWindowedKeyValueIterator.java.html#71"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredWindowedKeyValueIterator.java.html#80"
 , "c1" : "Windowed&lt;K&gt;"
 , "c2" : "peekNextKey()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredWindowedKeyValueIterator.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredWindowedKeyValueIterator.java.svg" }

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
"data11" : [
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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredWindowedKeyValueIterator.java.html#44"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00044] The argument time is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredWindowedKeyValueIterator.java.html#65"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00065] For method windowedKey arguments Windowed&lt;Bytes &gt;  bytesKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredWindowedKeyValueIterator.java.html#65"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00065] The argument bytesKey is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/MeteredWindowedKeyValueIterator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
