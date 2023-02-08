console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/utils/Checksums.java 19 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.utils.Checksums"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.utils.Checksums" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.html#33"
 , "c1" : "Checksums"
 , "c2" : "Checksums()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.html#36"
 , "c1" : "void"
 , "c2" : "update(Checksum;ByteBuffer;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00040"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.html#40"
 , "c1" : "void"
 , "c2" : "update(Checksum;ByteBuffer;int;int)"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.html#50"
 , "c1" : "void"
 , "c2" : "updateInt(Checksum;int)"
 , "c3" : "1"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.html#57"
 , "c1" : "void"
 , "c2" : "updateLong(Checksum;long)"
 , "c3" : "1"
 , "c4" : "8"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "11"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method update arguments Checksum  checksum|ByteBuffer  buffer|int  length"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.common.utils.Checksums.update@POLYN152119 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.html#40"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00040] For method update arguments Checksum  checksum|ByteBuffer  buffer|int  offset|int  length"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.html#40"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00040] The argument checksum is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00040"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.html#40"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00040] The argument buffer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method updateInt arguments Checksum  checksum|int  input"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.html#50"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00050] The argument checksum is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.common.utils.Checksums.updateInt@POLYN153194 the MagicNumber/String  24 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.common.utils.Checksums.updateInt@POLYN153194 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method org.apache.kafka.common.utils.Checksums.updateInt@POLYN153194 the MagicNumber/String  8 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method updateLong arguments Checksum  checksum|long  input"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.html#57"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00057] The argument checksum is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.common.utils.Checksums.updateLong@POLYN153785 the MagicNumber/String  56 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.common.utils.Checksums.updateLong@POLYN153785 the MagicNumber/String  48 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.common.utils.Checksums.updateLong@POLYN153785 the MagicNumber/String  40 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.common.utils.Checksums.updateLong@POLYN153785 the MagicNumber/String  32 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.common.utils.Checksums.updateLong@POLYN153785 the MagicNumber/String  24 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.common.utils.Checksums.updateLong@POLYN153785 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.common.utils.Checksums.updateLong@POLYN153785 the MagicNumber/String  8 should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Checksums.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
