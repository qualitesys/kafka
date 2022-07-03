console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/ValidOffsetAndEpoch.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/ValidOffsetAndEpoch.java 13 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/raft/ValidOffsetAndEpoch.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.raft.ValidOffsetAndEpoch"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.raft.ValidOffsetAndEpoch" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ValidOffsetAndEpoch"
 , "c2" : "ValidOffsetAndEpoch(Kind;OffsetAndEpoch)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Kind"
 , "c2" : "kind()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "OffsetAndEpoch"
 , "c2" : "offsetAndEpoch()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ValidOffsetAndEpoch"
 , "c2" : "diverging(OffsetAndEpoch)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ValidOffsetAndEpoch"
 , "c2" : "snapshot(OffsetAndEpoch)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ValidOffsetAndEpoch"
 , "c2" : "valid(OffsetAndEpoch)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "ValidOffsetAndEpoch"
 , "c2" : "valid()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/raft/src/main/java/org/apache/kafka/raft/ValidOffsetAndEpoch.java.png" 

 , "ligneplantuml" : "./qc/raft/src/main/java/org/apache/kafka/raft/ValidOffsetAndEpoch.java.svg" }

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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "6"
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
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00006"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ValidOffsetAndEpoch.java.html#6"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00006] The class ValidOffsetAndEpoch contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ValidOffsetAndEpoch.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00027] For method diverging arguments OffsetAndEpoch  offsetAndEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ValidOffsetAndEpoch.java.html#31"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00031] For method snapshot arguments OffsetAndEpoch  offsetAndEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ValidOffsetAndEpoch.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00035] For method valid arguments OffsetAndEpoch  offsetAndEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ValidOffsetAndEpoch.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.raft.ValidOffsetAndEpoch.valid@POLYN168523 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ValidOffsetAndEpoch.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.raft.ValidOffsetAndEpoch.valid@POLYN168523 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ValidOffsetAndEpoch.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method equals arguments Object  obj"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ValidOffsetAndEpoch.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00046] The same method call obj.getClass() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ValidOffsetAndEpoch.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.raft.ValidOffsetAndEpoch.equals@POLYN168736 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ValidOffsetAndEpoch.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.raft.ValidOffsetAndEpoch.equals@POLYN168736 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ValidOffsetAndEpoch.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.raft.ValidOffsetAndEpoch.equals@POLYN168736 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00060"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ValidOffsetAndEpoch.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.raft.ValidOffsetAndEpoch.toString@POLYN169450 the MagicNumber/String  'ValidOffsetAndEpoch(kind=%s, offsetAndEpoch=%s)' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/ValidOffsetAndEpoch.java.html#39"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00039] Public method valid is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
