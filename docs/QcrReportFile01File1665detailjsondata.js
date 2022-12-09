console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java 7 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "NamedOperation<TableJoined<K,KO>>"
 , "c2" : "org.apache.kafka.streams.kstream.TableJoined"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.kstream.TableJoined" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00015"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.html#15"
 , "c1" : "TableJoined"
 , "c2" : "TableJoined(StreamPartitioner<K,Void>;StreamPartitioner<KO,Void>;String)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00023"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.html#23"
 , "c1" : "TableJoined"
 , "c2" : "TableJoined(TableJoined<K,KO>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.html#39"
 , "c1" : "TableJoined<K,KO>"
 , "c2" : "withPartitioner(StreamPartitioner<K,Void>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.html#44"
 , "c1" : "TableJoined<K,KO>"
 , "c2" : "withOtherPartitioner(StreamPartitioner<KO,Void>)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.html#50"
 , "c1" : "TableJoined<K,KO>"
 , "c2" : "withName(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.svg" }

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
 , "c1" : "00023"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.html#23"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00023] The argument tableJoined is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method org.apache.kafka.streams.kstream.TableJoined the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.streams.kstream.TableJoined the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.streams.kstream.TableJoined the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00039"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method withPartitioner arguments StreamPartitioner&lt;K ,Void &gt;  partitioner"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method withOtherPartitioner arguments StreamPartitioner&lt;KO ,Void &gt;  otherPartitioner"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method withName arguments String  name"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/kstream/TableJoined.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
