console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java 18 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Revertable"
 , "c2" : "org.apache.kafka.timeline.TimelineInteger"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.timeline.TimelineInteger" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00032"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#32"
 , "c1" : "TimelineInteger"
 , "c2" : "TimelineInteger(SnapshotRegistry)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00039"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#39"
 , "c1" : "int"
 , "c2" : "get()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#43"
 , "c1" : "int"
 , "c2" : "get(long)"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#54"
 , "c1" : "void"
 , "c2" : "set(int)"
 , "c3" : "3"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#68"
 , "c1" : "void"
 , "c2" : "increment()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#72"
 , "c1" : "void"
 , "c2" : "decrement()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00078"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#78"
 , "c1" : "void"
 , "c2" : "executeRevert(long;Delta)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00084"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#84"
 , "c1" : "void"
 , "c2" : "reset()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00089"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#89"
 , "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00094"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#94"
 , "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00101"
 , "c5link" : "././qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#101"
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
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.svg" }

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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "5"
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
 , "c1" : "00009"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#9"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00009] The class TimelineInteger contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00012"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#12"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00012] The class IntegerContainer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00019"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#19"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00019] For method setValue arguments int  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#24"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00024] For method mergeFrom arguments long  destinationEpoch|Delta  delta"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#24"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00024] Void method mergeFrom is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00024"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#24"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00024] Void method mergeFrom is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#32"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00032] The argument snapshotRegistry is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method get arguments long  epoch"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00047"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00047] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00048"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00048] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#49"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00049] In method org.apache.kafka.timeline.TimelineInteger.get@POLYN152321 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00054"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method set arguments int  newValue"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.timeline.TimelineInteger.set@POLYN152995 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.timeline.TimelineInteger.increment@POLYN153792 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.timeline.TimelineInteger.decrement@POLYN153932 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00078] For method executeRevert arguments long  targetEpoch|Delta  delta"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00094"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#94"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00094] For method equals arguments Object  o"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00095"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.html#95"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00095] In method org.apache.kafka.timeline.TimelineInteger.equals@POLYN154605 the MagicNumber/String  false should be converted to const"
}} 
]
"data15" : [
   "fichierplantumlsvg" : "./qc/metadata/src/main/java/org/apache/kafka/timeline/TimelineInteger.java.svg" }

};
console.log('leListeStr 99 main end');
