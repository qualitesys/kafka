console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java 19 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.security.scram.internals.ScramCredentialUtils"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.security.scram.internals.ScramCredentialUtils" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.html#41"
 , "c1" : "ScramCredentialUtils"
 , "c2" : "ScramCredentialUtils()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.html#43"
 , "c1" : "String"
 , "c2" : "credentialToString(ScramCredential)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.html#55"
 , "c1" : "ScramCredential"
 , "c2" : "credentialFromString(String)"
 , "c3" : "2"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00068"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.html#68"
 , "c1" : "Properties"
 , "c2" : "toProps(String)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.html#80"
 , "c1" : "void"
 , "c2" : "createCache(CredentialCache;Collection&lt;String&gt;)"
 , "c3" : "3"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "9"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method credentialToString arguments ScramCredential  credential"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.html#43"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00043] The argument credential is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.common.security.scram.internals.ScramCredentialUtils.credentialToString@POLYN166666 the MagicNumber/String  '%s=%s,%s=%s,%s=%s,%s=%d' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00055] For method credentialFromString arguments String  str"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.html#55"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00055] For method credentialFromString list of called methods Object monObjet|java.util.Properties toPropsN167352|int Integer_parseIntN168394"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.common.security.scram.internals.ScramCredentialUtils.credentialFromString@POLYN167253 the MagicNumber/String  4 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.common.security.scram.internals.ScramCredentialUtils.credentialFromString@POLYN167253 the MagicNumber/String  'Credentials not valid: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00068] For method toProps arguments String  str"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.html#68"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00068] For method toProps list of called methods Object monObjet|java.lang.String[] str_splitN168828"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.html#68"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00068] The argument str is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.common.security.scram.internals.ScramCredentialUtils.toProps@POLYN168647 the MagicNumber/String  ',' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.common.security.scram.internals.ScramCredentialUtils.toProps@POLYN168647 the MagicNumber/String  '=' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.common.security.scram.internals.ScramCredentialUtils.toProps@POLYN168647 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method org.apache.kafka.common.security.scram.internals.ScramCredentialUtils.toProps@POLYN168647 the MagicNumber/String  'Credentials not valid: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.common.security.scram.internals.ScramCredentialUtils.toProps@POLYN168647 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.common.security.scram.internals.ScramCredentialUtils.toProps@POLYN168647 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00080] For method createCache arguments CredentialCache  cache|Collection&lt;String &gt;  mechanisms"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.html#80"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00080] The argument cache is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.html#80"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00080] The argument mechanisms is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/security/scram/internals/ScramCredentialUtils.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
