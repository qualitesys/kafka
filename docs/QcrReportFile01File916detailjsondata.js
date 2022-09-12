console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/SystemTime.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/utils/SystemTime.java 9 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/SystemTime.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Time"
 , "c2" : "org.apache.kafka.common.utils.SystemTime"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.utils.SystemTime" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00012"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/SystemTime.java.html#12"
 , "c1" : "long"
 , "c2" : "milliseconds()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00017"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/SystemTime.java.html#17"
 , "c1" : "long"
 , "c2" : "nanoseconds()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00022"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/SystemTime.java.html#22"
 , "c1" : "void"
 , "c2" : "sleep(long)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00027"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/SystemTime.java.html#27"
 , "c1" : "void"
 , "c2" : "waitObject(Object;Supplier<Boolean>;long)"
 , "c3" : "4"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/SystemTime.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/SystemTime.java.svg" }

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
 , "c4" : "2"
}}
,
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
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
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
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00009"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/SystemTime.java.html#9"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00009] The class SystemTime contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/SystemTime.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00022] For method sleep arguments long  ms"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/SystemTime.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00027] For method waitObject arguments Object  obj|Supplier&lt;Boolean &gt;  condition|long  deadlineMs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/SystemTime.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00027] For method waitObject list of called methods Object monObjet|long millisecondsN145349"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/SystemTime.java.html#27"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00027] The argument obj is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/SystemTime.java.html#27"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00027] The argument condition is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/SystemTime.java.html#28"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00028] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/SystemTime.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method org.apache.kafka.common.utils.SystemTime.waitObject@POLYN145009 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00035"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/SystemTime.java.html#35"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00035] In method org.apache.kafka.common.utils.SystemTime.waitObject@POLYN145009 the MagicNumber/String  'Condition not satisfied before deadline' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
