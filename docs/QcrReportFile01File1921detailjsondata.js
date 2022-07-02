console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/NamedTopologyStoreQueryParameters.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/NamedTopologyStoreQueryParameters.java 13 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/NamedTopologyStoreQueryParameters.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "StoreQueryParameters<T>"
 , "c2" : "org.apache.kafka.streams.processor.internals.namedtopology.NamedTopologyStoreQueryParameters"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.processor.internals.namedtopology.NamedTopologyStoreQueryParameters" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "NamedTopologyStoreQueryParameters"
 , "c2" : "NamedTopologyStoreQueryParameters(String;String;QueryableStoreType<T>;Integer;boolean)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "NamedTopologyStoreQueryParameters<T>"
 , "c2" : "withPartition(Integer)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "NamedTopologyStoreQueryParameters<T>"
 , "c2" : "enableStaleStores()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "topologyName()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/NamedTopologyStoreQueryParameters.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/NamedTopologyStoreQueryParameters.java.svg" }

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
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "10"
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
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/NamedTopologyStoreQueryParameters.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.streams.processor.internals.namedtopology.NamedTopologyStoreQueryParameters the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/NamedTopologyStoreQueryParameters.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.streams.processor.internals.namedtopology.NamedTopologyStoreQueryParameters the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/NamedTopologyStoreQueryParameters.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method withPartition arguments Integer  partition"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/NamedTopologyStoreQueryParameters.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.streams.processor.internals.namedtopology.NamedTopologyStoreQueryParameters.enableStaleStores@POLYN170561 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/NamedTopologyStoreQueryParameters.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/NamedTopologyStoreQueryParameters.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00047] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/NamedTopologyStoreQueryParameters.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.streams.processor.internals.namedtopology.NamedTopologyStoreQueryParameters.equals@POLYN170957 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/NamedTopologyStoreQueryParameters.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.streams.processor.internals.namedtopology.NamedTopologyStoreQueryParameters.equals@POLYN170957 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/NamedTopologyStoreQueryParameters.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.streams.processor.internals.namedtopology.NamedTopologyStoreQueryParameters.equals@POLYN170957 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/NamedTopologyStoreQueryParameters.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.streams.processor.internals.namedtopology.NamedTopologyStoreQueryParameters.equals@POLYN170957 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/NamedTopologyStoreQueryParameters.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.streams.processor.internals.namedtopology.NamedTopologyStoreQueryParameters.hashCode@POLYN171687 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/NamedTopologyStoreQueryParameters.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.streams.processor.internals.namedtopology.NamedTopologyStoreQueryParameters.hashCode@POLYN171687 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/processor/internals/namedtopology/NamedTopologyStoreQueryParameters.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.streams.processor.internals.namedtopology.NamedTopologyStoreQueryParameters.hashCode@POLYN171687 the MagicNumber/String  0 should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
