console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemorySessionBytesStoreSupplier.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/InMemorySessionBytesStoreSupplier.java 3 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemorySessionBytesStoreSupplier.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "SessionBytesStoreSupplier"
 , "c2" : "org.apache.kafka.streams.state.internals.InMemorySessionBytesStoreSupplier"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.InMemorySessionBytesStoreSupplier" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00012"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemorySessionBytesStoreSupplier.java.html#12"
 , "c1" : "InMemorySessionBytesStoreSupplier"
 , "c2" : "InMemorySessionBytesStoreSupplier(String;long)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00019"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemorySessionBytesStoreSupplier.java.html#19"
 , "c1" : "String"
 , "c2" : "name()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00024"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemorySessionBytesStoreSupplier.java.html#24"
 , "c1" : "SessionStore<Bytes,byte[]>"
 , "c2" : "get()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemorySessionBytesStoreSupplier.java.html#29"
 , "c1" : "String"
 , "c2" : "metricsScope()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemorySessionBytesStoreSupplier.java.html#35"
 , "c1" : "long"
 , "c2" : "segmentIntervalMs()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemorySessionBytesStoreSupplier.java.html#40"
 , "c1" : "long"
 , "c2" : "retentionPeriod()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemorySessionBytesStoreSupplier.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemorySessionBytesStoreSupplier.java.svg" }

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
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00008"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemorySessionBytesStoreSupplier.java.html#8"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00008] The class InMemorySessionBytesStoreSupplier contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemorySessionBytesStoreSupplier.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method org.apache.kafka.streams.state.internals.InMemorySessionBytesStoreSupplier.metricsScope@POLYN144609 the MagicNumber/String  'in-memory-session' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemorySessionBytesStoreSupplier.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.streams.state.internals.InMemorySessionBytesStoreSupplier.segmentIntervalMs@POLYN144711 the MagicNumber/String  1 should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/InMemorySessionBytesStoreSupplier.java.svg" }

};
console.log('leListeStr 99 main end');
