console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/acl/AccessControlEntryFilter.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/acl/AccessControlEntryFilter.java 17 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/acl/AccessControlEntryFilter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
 , "c4" : "2"
}}
,
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
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "4"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00011"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/acl/AccessControlEntryFilter.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00011] The class AccessControlEntryFilter contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/acl/AccessControlEntryFilter.java.html#61"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00061] For method matches arguments AccessControlEntry  other"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/acl/AccessControlEntryFilter.java.html#61"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00061] The argument other is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/acl/AccessControlEntryFilter.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00062] The same method call principal()other.principal() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/acl/AccessControlEntryFilter.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00064] The same method call host()other.host() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00066"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/acl/AccessControlEntryFilter.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00066] The same method call operation()other.operation() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/acl/AccessControlEntryFilter.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00068] The same method call permissionType()other.permissionType() is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/acl/AccessControlEntryFilter.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.common.acl.AccessControlEntryFilter.matches@POLYN171268 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/acl/AccessControlEntryFilter.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.common.acl.AccessControlEntryFilter.matches@POLYN171268 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00064"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/acl/AccessControlEntryFilter.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.common.acl.AccessControlEntryFilter.matches@POLYN171268 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/acl/AccessControlEntryFilter.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.common.acl.AccessControlEntryFilter.matches@POLYN171268 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/acl/AccessControlEntryFilter.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.common.acl.AccessControlEntryFilter.matches@POLYN171268 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/acl/AccessControlEntryFilter.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.common.acl.AccessControlEntryFilter.matchesAtMostOne@POLYN172412 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/acl/AccessControlEntryFilter.java.html#82"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00082] For method equals arguments Object  o"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/acl/AccessControlEntryFilter.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.common.acl.AccessControlEntryFilter.equals@POLYN172737 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/acl/AccessControlEntryFilter.java.html#61"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00061] Public method matches is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/acl/AccessControlEntryFilter.java.html#72"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00072] Public method matchesAtMostOne is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
