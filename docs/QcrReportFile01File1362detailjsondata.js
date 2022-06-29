console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/metadata/src/main/java/org/apache/kafka/metadata/VersionRange.java.html" 
 , "texte" : "File metadata/src/main/java/org/apache/kafka/metadata/VersionRange.java 10 rule violations " 
 , "fic2"  : "./qc/metadata/src/main/java/org/apache/kafka/metadata/VersionRange.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.metadata.VersionRange"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.metadata.VersionRange" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "VersionRange"
 , "c2" : "VersionRange(short;short)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "VersionRange"
 , "c2" : "of(short;short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "VersionRange"
 , "c2" : "of(int;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "short"
 , "c2" : "min()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "short"
 , "c2" : "max()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "contains(short)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "intersects(VersionRange)"
 , "c3" : "1"
 , "c4" : "1"
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
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "5"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/VersionRange.java.png" 

 , "ligneplantuml" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/VersionRange.java.svg" }

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
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
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
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00008"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/VersionRange.java.html#8"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00008] The class VersionRange contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/VersionRange.java.html#19"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00019] For method of arguments short  min|short  max"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/VersionRange.java.html#23"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00023] For method of arguments int  min|int  max"
}} 
,
{ "ligne" : {
   "c1" : "00036"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/VersionRange.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method contains arguments short  version"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/VersionRange.java.html#41"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00041] For method intersects arguments VersionRange  other"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/VersionRange.java.html#41"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00041] The argument other is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00051"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/VersionRange.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00052"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/VersionRange.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.metadata.VersionRange.equals@POLYN168635 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/VersionRange.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.metadata.VersionRange.toString@POLYN169029 the MagicNumber/String  '+' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/metadata/src/main/java/org/apache/kafka/metadata/VersionRange.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.metadata.VersionRange.toString@POLYN169029 the MagicNumber/String  '-' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
