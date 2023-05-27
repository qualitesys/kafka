console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java 17 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Revertable"
 , "c2" : "org.apache.kafka.timeline.TimelineLong"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.timeline.TimelineLong" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#51"
 , "c1" : "TimelineLong"
 , "c2" : "TimelineLong(SnapshotRegistry)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#58"
 , "c1" : "long"
 , "c2" : "get()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#62"
 , "c1" : "long"
 , "c2" : "get(long)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00073"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#73"
 , "c1" : "void"
 , "c2" : "set(long)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00087"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#87"
 , "c1" : "void"
 , "c2" : "increment()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00091"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#91"
 , "c1" : "void"
 , "c2" : "decrement()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00097"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#97"
 , "c1" : "void"
 , "c2" : "executeRevert(long;Delta)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00103"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#103"
 , "c1" : "void"
 , "c2" : "reset()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00108"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#108"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00113"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#113"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00120"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#120"
 , "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "1"
}}
,
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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#38"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00038] For method setValue arguments long  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method mergeFrom arguments long  destinationEpoch|Delta  delta"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#43"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00043] Void method mergeFrom is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#43"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00043] Void method mergeFrom is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#51"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00051] The argument snapshotRegistry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00062] For method get arguments long  epoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00066] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00067"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00067] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.timeline.TimelineLong.get@POLYN162307 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#73"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00073] For method set arguments long  newValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.timeline.TimelineLong.set@POLYN162987 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.timeline.TimelineLong.increment@POLYN163790 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method org.apache.kafka.timeline.TimelineLong.decrement@POLYN163930 the MagicNumber/String  1L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00097] For method executeRevert arguments long  targetEpoch|Delta  delta"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00109"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#109"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00109] In method org.apache.kafka.timeline.TimelineLong.hashCode@POLYN164517 the MagicNumber/String  32 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00113"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#113"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00113] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method org.apache.kafka.timeline.TimelineLong.equals@POLYN164745 the MagicNumber/String  false should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineLong.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
