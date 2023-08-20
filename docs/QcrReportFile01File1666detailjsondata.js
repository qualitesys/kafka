console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java 7 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "NamedOperation<TableJoined<K,KO>>"
 , "c2" : "org.apache.kafka.streams.kstream.TableJoined"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.TableJoined" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00037"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.html#37"
 , "c1" : "TableJoined"
 , "c2" : "TableJoined(StreamPartitioner&lt;K,Void&gt;;StreamPartitioner&lt;KO,Void&gt;;String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00045"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.html#45"
 , "c1" : "TableJoined"
 , "c2" : "TableJoined(TableJoined&lt;K,KO&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00103"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.html#103"
 , "c1" : "TableJoined&lt;K,KO&gt;"
 , "c2" : "withPartitioner(StreamPartitioner&lt;K,Void&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00120"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.html#120"
 , "c1" : "TableJoined&lt;K,KO&gt;"
 , "c2" : "withOtherPartitioner(StreamPartitioner&lt;KO,Void&gt;)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00132"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.html#132"
 , "c1" : "TableJoined&lt;K,KO&gt;"
 , "c2" : "withName(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.svg" }

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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.html#45"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00045] The argument tableJoined is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.streams.kstream.TableJoined the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.streams.kstream.TableJoined the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.streams.kstream.TableJoined the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00103"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.html#103"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00103] For method withPartitioner arguments StreamPartitioner&lt;K,Void&gt;  partitioner"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.html#120"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00120] For method withOtherPartitioner arguments StreamPartitioner&lt;KO,Void&gt;  otherPartitioner"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00132"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.html#132"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00132] For method withName arguments String  name"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
