console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/OffsetAndEpoch.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/OffsetAndEpoch.java 14 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/raft/OffsetAndEpoch.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Comparable<OffsetAndEpoch>"
 , "c2" : "org.apache.kafka.raft.OffsetAndEpoch"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.OffsetAndEpoch" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "OffsetAndEpoch"
 , "c2" : "OffsetAndEpoch(long;int)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c1" : "int"
 , "c2" : "compareTo(OffsetAndEpoch)"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/raft/src/main/java/org/apache/kafka/raft/OffsetAndEpoch.java.png" 

 , "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/OffsetAndEpoch.java.svg" }

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
 , "c4" : "10"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00004"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/OffsetAndEpoch.java.html#4"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00004] The class OffsetAndEpoch contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00014"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/OffsetAndEpoch.java.html#14"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00014] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/OffsetAndEpoch.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00016] The same method call o.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00015"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/OffsetAndEpoch.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00015] In method org.apache.kafka.raft.OffsetAndEpoch.equals@POLYN145258 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/OffsetAndEpoch.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00016] In method org.apache.kafka.raft.OffsetAndEpoch.equals@POLYN145258 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00016"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/OffsetAndEpoch.java.html#16"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00016] In method org.apache.kafka.raft.OffsetAndEpoch.equals@POLYN145258 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00020"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/OffsetAndEpoch.java.html#20"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00020] In method org.apache.kafka.raft.OffsetAndEpoch.equals@POLYN145258 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/OffsetAndEpoch.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method org.apache.kafka.raft.OffsetAndEpoch.hashCode@POLYN145841 the MagicNumber/String  32 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/OffsetAndEpoch.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method org.apache.kafka.raft.OffsetAndEpoch.hashCode@POLYN145841 the MagicNumber/String  31 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00033"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/OffsetAndEpoch.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.raft.OffsetAndEpoch.toString@POLYN146205 the MagicNumber/String  'OffsetAndEpoch(' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00034"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/OffsetAndEpoch.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.raft.OffsetAndEpoch.toString@POLYN146205 the MagicNumber/String  'offset=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/OffsetAndEpoch.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.raft.OffsetAndEpoch.toString@POLYN146205 the MagicNumber/String  ', epoch=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/OffsetAndEpoch.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method org.apache.kafka.raft.OffsetAndEpoch.toString@POLYN146205 the MagicNumber/String  ')' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/OffsetAndEpoch.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method compareTo arguments OffsetAndEpoch  o"
}} 
]
};
console.log('leListeStr 99 main end');
